import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flax_websocket/src/connection.dart';
import 'package:flax_websocket/src/observed_socket.dart';
import 'package:test/test.dart';
import 'package:web_socket_channel/web_socket_channel.dart';

import 'support/raw_server.dart';

Map<String, Object?> settings(
  int port, {
  String scheme = 'ws',
  List<String> protocols = const [],
  int timeout = 1000,
  int maxPayload = 1024,
  int? ping,
}) => {
  'url': '$scheme://127.0.0.1:$port/socket',
  'protocols': protocols,
  'headers': {
    'Authorization': ['Bearer local'],
    'Cookie': ['a=1', 'b=2'],
  },
  'handshakeTimeout': timeout,
  'maxPayload': maxPayload,
  'pingInterval': ping,
};

class Client {
  Client([HttpClient? client]) {
    connection = FlaxWebSocketConnection(client ?? HttpClient(), (kind, value) {
      events.add((kind, value));
      if (kind == 'open' && !opened.isCompleted) opened.complete();
      if (kind == 'written') written.add(null);
      if (kind == 'message') messages.add(value);
      if (kind == 'close' && !closed.isCompleted) {
        closed.complete(jsonDecode(value! as String) as Map<String, dynamic>);
      }
    }, () => released++);
  }
  late final FlaxWebSocketConnection connection;
  final events = <(String, Object?)>[];
  final opened = Completer<void>();
  final closed = Completer<Map<String, dynamic>>();
  final written = StreamController<void>.broadcast();
  final messages = StreamController<Object?>();
  int released = 0;
  void dispose() {
    connection.abort();
    written.close();
    messages.close();
  }
}

Future<({HttpServer server, Future<Socket> raw, Future<WebSocket> peer})>
server({SecurityContext? security}) async {
  final server = security == null
      ? await HttpServer.bind('127.0.0.1', 0)
      : await HttpServer.bindSecure('127.0.0.1', 0, security);
  final raw = Completer<Socket>(), peer = Completer<WebSocket>();
  server.listen((request) async {
    expect(request.headers.value('authorization'), 'Bearer local');
    request.response.statusCode = 101;
    request.response.headers
      ..set('Connection', 'keep-alive, Upgrade')
      ..set('Upgrade', 'websocket')
      ..set(
        'Sec-WebSocket-Accept',
        WebSocketChannel.signKey(request.headers.value('Sec-WebSocket-Key')!),
      );
    final protocols = request.headers.value('Sec-WebSocket-Protocol');
    if (protocols != null) {
      request.response.headers.set(
        'Sec-WebSocket-Protocol',
        protocols.split(',').first.trim(),
      );
    }
    final socket = await request.response.detachSocket();
    raw.complete(socket);
    peer.complete(
      WebSocket.fromUpgradedSocket(
        socket,
        serverSide: true,
        compression: CompressionOptions.compressionOff,
      ),
    );
  });
  addTearDown(() async {
    if (raw.isCompleted) (await raw.future).destroy();
    await server.close(force: true);
  });
  return (server: server, raw: raw.future, peer: peer.future);
}

void main() {
  test('close shares one deadline across queued sends and protocol close', () async {
    final fixture = await RawWebSocketServer.start();
    addTearDown(fixture.close);
    final client = Client();
    addTearDown(client.dispose);
    await client.connection.open(settings(fixture.port));
    client.connection.beginClose();
    final written = client.written.stream.first;
    client.connection.send('accepted before close');
    await written.timeout(const Duration(seconds: 2));
    await Future<void>.delayed(const Duration(seconds: 4));
    client.connection.beginClose();
    client.connection.close(1000, 'done');
    client.connection.close(1000, 'again');
    // Only one second remains. Restarting either phase would require five more.
    final result = await client.closed.future.timeout(
      const Duration(seconds: 3),
    );
    expect(result['code'], 1006);
    client.connection.abort();
    expect((await client.closed.future)['code'], 1006);
    expect(client.released, 1);
  });

  test('close deadline destroys a peer stalled on a real send', () async {
    final fixture = await RawWebSocketServer.start(pauseAfterUpgrade: true);
    addTearDown(fixture.close);
    final client = Client();
    addTearDown(client.dispose);
    await client.connection.open(settings(fixture.port));
    client.connection.send(Uint8List(16 * 1024 * 1024));
    client.connection.beginClose();
    final result = await client.closed.future.timeout(
      const Duration(seconds: 7),
    );
    expect(result, {
      'code': 1006,
      'reason': '',
      'wasClean': false,
      'error': true,
    });
    expect(client.events.where((e) => e.$1 == 'written'), isEmpty);
    client.connection.beginClose();
    client.connection.close(1000, 'late');
    client.connection.abort();
    expect(client.events.where((e) => e.$1 == 'close'), hasLength(1));
    expect(client.released, 1);
  });

  for (final immediateClose in [false, true]) {
    test(
      'upgrade packet messages follow open; immediate close=$immediateClose',
      () async {
        final fixture = await RawWebSocketServer.start(
          closeAfterUpgrade: immediateClose,
          frames: [
            0x81,
            7,
            ...ascii.encode('welcome'),
            0x81,
            6,
            ...ascii.encode('second'),
            if (immediateClose) ...[0x88, 2, 3, 232],
          ],
        );
        addTearDown(fixture.close);
        final client = Client();
        addTearDown(client.dispose);
        await client.connection.open(settings(fixture.port));
        final received = await client.messages.stream
            .take(2)
            .toList()
            .timeout(const Duration(seconds: 2));
        expect(received, ['welcome', 'second']);
        expect(client.events.take(3), [
          ('open', ''),
          ('message', 'welcome'),
          ('message', 'second'),
        ]);
      },
    );
  }
  test('transport error can synchronously destroy its observer', () async {
    final input = StreamController<Uint8List>(sync: true);
    final raw = _ErrorSocket(input.stream);
    late ObservedSocket socket;
    socket = ObservedSocket(
      raw,
      maxPayload: 1024,
      onFailure: (_, _) => socket.destroy(),
      onDataWritten: () {},
    );
    final done = socket.drain<void>();
    input.addError(const SocketException('reset'));
    await done;
    await input.close();
    expect(raw.destroyed, true);
  });

  test('frame observation handles every split, masked close and fragmented message bounds', () {
    // RFC 6455 close 1000 with mask 01 02 03 04; no data decoding in the observer.
    final bytes = [0x81, 1, 65, 0x88, 0x82, 1, 2, 3, 4, 2, 234];
    for (var split = 0; split <= bytes.length; split++) {
      final seen = <(int, List<int>)>[];
      final observer = FrameObserver(
        onFrame: (op, close) => seen.add((op, List.of(close))),
        maxPayload: 10,
      );
      observer.add(bytes.sublist(0, split));
      observer.add(bytes.sublist(split));
      expect(seen.map((e) => [e.$1, e.$2]), [
        [1, <int>[]],
        [
          8,
          [3, 232],
        ],
      ]);
    }
    final limited = FrameObserver(onFrame: (_, _) {}, maxPayload: 3);
    limited.add([0x01, 2, 65, 66]);
    expect(
      () => limited.add([0x80, 2, 67, 68]),
      throwsA(isA<WebSocketException>()),
    );
  });

  for (final mode in ['client', 'server', 'empty', 'abrupt']) {
    test('real transport close: $mode', () async {
      final fixture = await server();
      final client = Client();
      addTearDown(client.dispose);
      await client.connection.open(
        settings(fixture.server.port, protocols: ['chat']),
      );
      await client.opened.future;
      final peer = await fixture.peer;
      peer.listen((_) {}, onError: (Object e) {});
      if (mode == 'client') client.connection.close(1000, 'ok');
      if (mode == 'server') peer.close(1000, 'ok').ignore();
      if (mode == 'empty') peer.close().ignore();
      if (mode == 'abrupt') (await fixture.raw).destroy();
      final event = await client.closed.future.timeout(
        const Duration(seconds: 7),
      );
      expect(event['wasClean'], mode != 'abrupt');
      expect(event['error'], mode == 'abrupt');
      expect(
        event['code'],
        mode == 'empty'
            ? 1005
            : mode == 'abrupt'
            ? 1006
            : 1000,
      );
      expect(client.released, 1);
    });
  }
  test(
    'messages, empty sends, protocol and heartbeat use real Dart transport',
    () async {
      final fixture = await server();
      final client = Client();
      addTearDown(client.dispose);
      await client.connection.open(
        settings(fixture.server.port, protocols: ['chat'], ping: 20),
      );
      final peer = await fixture.peer;
      peer.listen(peer.add);
      final received = StreamIterator(client.messages.stream);
      for (final data in <Object>[
        '中文🙂',
        '',
        Uint8List.fromList([1, 2]),
        Uint8List(0),
      ]) {
        final written = client.written.stream.first;
        client.connection.send(data);
        await written.timeout(const Duration(seconds: 2));
        expect(await received.moveNext(), true);
        expect(received.current, data);
      }
      await Future<void>.delayed(const Duration(milliseconds: 90));
      expect(client.closed.isCompleted, false);
      client.connection.close(1000, '');
      expect((await client.closed.future)['wasClean'], true);
      await received.cancel();
    },
  );
  test(
    'malformed close cannot masquerade as the local protocol error code',
    () async {
      final fixture = await server();
      final client = Client();
      addTearDown(client.dispose);
      await client.connection.open(settings(fixture.server.port));
      final peer = await fixture.peer;
      peer.listen((_) {}, onError: (Object _) {});
      final raw = await fixture.raw;
      // Server masking is illegal, even when the payload matches Dart's error code.
      raw.add([0x88, 0x82, 0, 0, 0, 0, 3, 234]);
      await raw.flush();
      final result = await client.closed.future.timeout(
        const Duration(seconds: 7),
      );
      expect(result['wasClean'], false);
      expect(result['code'], 1006);
    },
  );
  test(
    'protocol failure stays abnormal even after the peer acknowledges close',
    () async {
      final fixture = await server();
      final client = Client();
      addTearDown(client.dispose);
      await client.connection.open(settings(fixture.server.port));
      final peer = await fixture.peer;
      peer.listen((_) {}, onError: (Object _) {});
      final raw = await fixture.raw;
      raw.add([0x81, 1, 0xff]);
      await raw.flush();
      final result = await client.closed.future.timeout(
        const Duration(seconds: 7),
      );
      expect(result['wasClean'], false);
      expect(result['code'], 1006);
    },
  );
  test(
    'maxPayload covers fragmented messages before Dart accumulates them',
    () async {
      final fixture = await server();
      final client = Client();
      addTearDown(client.dispose);
      await client.connection.open(
        settings(fixture.server.port, maxPayload: 3),
      );
      final raw = await fixture.raw;
      raw.add([0x01, 2, 65, 66, 0x80, 2, 67, 68]);
      await raw.flush();
      expect((await client.closed.future)['wasClean'], false);
      expect(client.events.where((e) => e.$1 == 'message'), isEmpty);
    },
  );
  test(
    'no pong and no close response terminate the actual transport',
    () async {
      final fixture = await server();
      final client = Client();
      addTearDown(client.dispose);
      await client.connection.open(settings(fixture.server.port, ping: 10));
      // The server WebSocket is deliberately not listened to: it cannot process ping.
      expect(
        (await client.closed.future.timeout(
          const Duration(seconds: 7),
        ))['wasClean'],
        false,
      );
      expect(client.released, 1);
    },
  );
  for (final mode in [
    'status',
    'accept',
    'protocol',
    'extension',
    'timeout',
    'abort',
  ]) {
    test('handshake rejects $mode and closes its owned client', () async {
      final endpoint = await HttpServer.bind('127.0.0.1', 0);
      addTearDown(() => endpoint.close(force: true));
      endpoint.listen((request) async {
        if (mode == 'timeout' || mode == 'abort') return;
        request.response.statusCode = mode == 'status' ? 302 : 101;
        request.response.headers
          ..set('Location', '/other')
          ..set('Connection', 'upgrade')
          ..set('Upgrade', 'websocket')
          ..set(
            'Sec-WebSocket-Accept',
            mode == 'accept'
                ? 'wrong'
                : WebSocketChannel.signKey(
                    request.headers.value('Sec-WebSocket-Key')!,
                  ),
          );
        if (mode == 'protocol') {
          request.response.headers.set('Sec-WebSocket-Protocol', 'unsolicited');
        }
        if (mode == 'extension') {
          request.response.headers.set(
            'Sec-WebSocket-Extensions',
            'permessage-deflate',
          );
        }
        await request.response.close();
      });
      final client = Client();
      addTearDown(client.dispose);
      final opening = client.connection.open(
        settings(endpoint.port, timeout: 30),
      );
      if (mode == 'abort') client.connection.abort();
      final event = await client.closed.future.timeout(
        const Duration(seconds: 2),
      );
      await opening;
      expect(event['code'], 1006);
      expect(event['wasClean'], false);
      expect(client.events.where((e) => e.$1 == 'open'), isEmpty);
      expect(client.released, 1);
    });
  }
}

// Only the public stream and destruction paths are exercised by this error probe.
class _ErrorSocket extends StreamView<Uint8List> implements Socket {
  _ErrorSocket(super.stream);
  bool destroyed = false;
  @override
  Future<Socket> get done => Completer<Socket>().future;
  @override
  void destroy() {
    destroyed = true;
  }

  @override
  dynamic noSuchMethod(Invocation invocation) => super.noSuchMethod(invocation);
}
