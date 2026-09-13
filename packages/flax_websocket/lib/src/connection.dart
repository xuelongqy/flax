import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:math';

import 'package:web_socket_channel/io.dart';
import 'package:web_socket_channel/web_socket_channel.dart';

import 'observed_socket.dart';

// One client and one upgraded transport per connection. No application state or
// JS handles live here; the session host owns event delivery and final cleanup.
class FlaxWebSocketConnection {
  FlaxWebSocketConnection(this.client, this.emit, this.finished);
  final HttpClient client;
  final void Function(String kind, Object? data) emit;
  final void Function() finished;
  HttpClientRequest? _request;
  ObservedSocket? _socket;
  WebSocket? _webSocket;
  IOWebSocketChannel? _channel;
  StreamSubscription<Object?>? _messages;
  Timer? _timeout;
  bool _ended = false, _closing = false, _failed = false;
  bool _writing = false;

  Future<void> open(Map<String, Object?> settings) async {
    final timeout = settings['handshakeTimeout'] as int;
    if (timeout > 0) _timeout = Timer(Duration(milliseconds: timeout), abort);
    try {
      final url = Uri.parse(settings['url'] as String);
      if (!['ws', 'wss'].contains(url.scheme) || !url.hasAuthority) {
        throw ArgumentError('Invalid WebSocket URL');
      }
      final protocols = (settings['protocols'] as List).cast<String>();
      final request = await client.getUrl(
        url.replace(scheme: url.scheme == 'ws' ? 'http' : 'https'),
      );
      _request = request;
      if (_ended) {
        request.abort();
        return;
      }
      request.followRedirects = false;
      request.persistentConnection = true;
      final headers = (settings['headers'] as Map).cast<String, Object?>();
      for (final entry in headers.entries) {
        request.headers.set(entry.key, (entry.value as List).cast<String>());
      }
      final random = Random.secure();
      final key = base64Encode(
        List<int>.generate(16, (_) => random.nextInt(256)),
      );
      request.headers
        ..set('Connection', 'Upgrade')
        ..set('Upgrade', 'websocket')
        ..set('Sec-WebSocket-Key', key)
        ..set('Sec-WebSocket-Version', '13');
      if (protocols.isNotEmpty) {
        request.headers.set('Sec-WebSocket-Protocol', protocols.join(', '));
      }
      final response = await request.close();
      if (_ended) return;
      bool containsToken(String name, String value) =>
          (response.headers[name] ?? [])
              .expand((line) => line.split(','))
              .any((part) => part.trim().toLowerCase() == value);
      final protocol = response.headers.value('Sec-WebSocket-Protocol');
      if (response.statusCode != 101 ||
          !containsToken('Connection', 'upgrade') ||
          !containsToken('Upgrade', 'websocket') ||
          response.headers.value('Sec-WebSocket-Accept') !=
              WebSocketChannel.signKey(key) ||
          (protocol != null && !protocols.contains(protocol)) ||
          (protocol == null && protocols.isNotEmpty) ||
          response.headers['Sec-WebSocket-Extensions'] != null) {
        throw const WebSocketException('Invalid WebSocket handshake');
      }
      final raw = await response.detachSocket();
      if (_ended) {
        raw.destroy();
        return;
      }
      final socket = _socket = ObservedSocket(
        raw,
        maxPayload: settings['maxPayload'] as int,
        onFailure: (_, _) => abort(),
        onDataWritten: () {
          if (!_ended && _writing) {
            _writing = false;
            emit('written', null);
          }
        },
      );
      final webSocket = _webSocket = WebSocket.fromUpgradedSocket(
        socket,
        serverSide: false,
        protocol: protocol,
        compression: CompressionOptions.compressionOff,
        maxPayloadLength: settings['maxPayload'] as int,
      );
      final ping = settings['pingInterval'] as int?;
      if (ping != null) webSocket.pingInterval = Duration(milliseconds: ping);
      final channel = _channel = IOWebSocketChannel(webSocket);
      await channel.ready;
      if (_ended) return;
      _timeout?.cancel();
      _timeout = null;
      // The upgrade may already contain messages. Queue open before consuming them.
      emit('open', webSocket.protocol ?? '');
      _messages = channel.stream.listen(
        (Object? data) {
          if (!_ended && !_closing) emit('message', data);
        },
        onError: (Object error, StackTrace stack) => abort(),
        onDone: _receivedEnd,
      );
    } catch (_) {
      abort();
    }
  }

  void send(Object data) {
    if (_ended || _closing) return;
    if (_channel == null || _writing) {
      throw StateError('WebSocket is not ready to send');
    }
    _writing = true;
    _channel!.sink.add(data);
  }

  // Start the total close budget while JS can still be draining accepted sends.
  void beginClose() {
    if (_ended) return;
    _timeout ??= Timer(const Duration(seconds: 5), abort);
  }

  void close(int? code, String reason) {
    if (_ended || _closing) return;
    if (_webSocket == null) {
      abort();
      return;
    }
    _closing = true;
    beginClose();
    // Closing the channel sink discards its peer-close events. Keep the receive
    // path open, and close the underlying WebSocket only after queued data.
    _webSocket!.close(code, reason.isEmpty ? null : reason).catchError((
      Object _,
    ) {
      abort();
    }).ignore();
  }

  Future<void> _receivedEnd() async {
    if (_ended) return;
    _closing = true;
    beginClose();
    emit('closing', null);
    final socket = _socket!;
    // Dart also ends its message stream on protocol errors and heartbeat failure.
    // A later acknowledgement must not turn that failed connection into a clean one.
    _failed |=
        _webSocket!.readyState != WebSocket.closed ||
        !socket.receivedClose ||
        socket.receivedCode != _webSocket!.closeCode;
    // Receiving a close frame ends the protocol stream before transport EOF.
    await socket.ended.future;
    if (_ended) return;
    await socket.outputEnded.future;
    if (_ended) return;
    final code = _webSocket!.closeCode ?? 1006;
    final clean =
        !_failed &&
        socket.sentClose &&
        socket.receivedClose &&
        socket.receivedCode == code &&
        socket.outputClosed;
    _finish(
      _failed ? 1006 : code,
      _failed ? '' : (_webSocket!.closeReason ?? ''),
      clean,
      !clean,
    );
  }

  void abort() {
    if (_ended) return;
    _failed = true;
    _finish(1006, '', false, true);
  }

  void _finish(int code, String reason, bool clean, bool error) {
    if (_ended) return;
    _ended = true;
    _timeout?.cancel();
    _request?.abort();
    _socket?.destroy();
    _messages?.cancel().ignore();
    _webSocket?.close().ignore();
    client.close(force: true);
    finished();
    emit(
      'close',
      jsonEncode({
        'code': code,
        'reason': reason,
        'wasClean': clean,
        'error': error,
      }),
    );
  }
}
