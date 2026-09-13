import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flax_websocket/src/connection.dart';
import 'package:test/test.dart';
import 'package:web_socket_channel/web_socket_channel.dart';
import 'package:flax_websocket/src/observed_socket.dart';

import 'support/proxy.dart';

void main() {
  late Directory certificates;
  late SecurityContext serverSecurity;
  late SecurityContext clientSecurity;
  setUpAll(() async {
    certificates = Directory.systemTemp.createTempSync('flax-websocket-tls-');
    Future<void> openssl(List<String> args) async {
      final result = await Process.run(
        'openssl',
        args,
        workingDirectory: certificates.path,
      );
      if (result.exitCode != 0) throw StateError('${result.stderr}');
    }

    await openssl([
      'req',
      '-x509',
      '-newkey',
      'rsa:2048',
      '-nodes',
      '-keyout',
      'ca.key',
      '-out',
      'ca.pem',
      '-days',
      '1',
      '-subj',
      '/CN=Flax test CA',
      '-addext',
      'basicConstraints=critical,CA:TRUE',
      '-addext',
      'keyUsage=critical,keyCertSign,cRLSign',
    ]);
    for (final name in ['server', 'client']) {
      await openssl([
        'req',
        '-newkey',
        'rsa:2048',
        '-nodes',
        '-keyout',
        '$name.key',
        '-out',
        '$name.csr',
        '-subj',
        '/CN=Flax $name',
      ]);
      File('${certificates.path}/$name.ext').writeAsStringSync(
        'basicConstraints=critical,CA:FALSE\nkeyUsage=critical,digitalSignature,keyEncipherment\nextendedKeyUsage=${name == 'server' ? 'serverAuth' : 'clientAuth'}\nsubjectAltName=DNS:localhost,IP:127.0.0.1\n',
      );
      await openssl([
        'x509',
        '-req',
        '-in',
        '$name.csr',
        '-CA',
        'ca.pem',
        '-CAkey',
        'ca.key',
        '-CAcreateserial',
        '-out',
        '$name.pem',
        '-days',
        '1',
        '-extfile',
        '$name.ext',
      ]);
    }
    serverSecurity = SecurityContext(withTrustedRoots: false)
      ..useCertificateChain('${certificates.path}/server.pem')
      ..usePrivateKey('${certificates.path}/server.key')
      ..setTrustedCertificates('${certificates.path}/ca.pem');
    clientSecurity = SecurityContext(withTrustedRoots: false)
      ..setTrustedCertificates('${certificates.path}/ca.pem')
      ..useCertificateChain('${certificates.path}/client.pem')
      ..usePrivateKey('${certificates.path}/client.key');
  });
  tearDownAll(() => certificates.deleteSync(recursive: true));

  for (final secure in [false, true]) {
    test(
      'peer close and immediate output EOF still deliver the acknowledgement (TLS=$secure)',
      () async {
        final target = secure
            ? await HttpServer.bindSecure('127.0.0.1', 0, serverSecurity)
            : await HttpServer.bind('127.0.0.1', 0);
        addTearDown(() => target.close(force: true));
        final peerDone = Completer<void>();
        var receivedAck = false;
        target.listen((request) async {
          request.response.statusCode = 101;
          request.response.headers
            ..set('Connection', 'Upgrade')
            ..set('Upgrade', 'websocket')
            ..set(
              'Sec-WebSocket-Accept',
              WebSocketChannel.signKey(
                request.headers.value('Sec-WebSocket-Key')!,
              ),
            );
          final raw = await request.response.detachSocket();
          final frames = FrameObserver(
            onFrame: (op, _) {
              if (op == 8) receivedAck = true;
            },
          );
          raw.listen(
            frames.add,
            onDone: peerDone.complete,
            onError: (Object _) {},
          );
          raw.add([0x88, 2, 3, 232]);
          await raw.flush();
          await raw.close();
        });
        final done = Completer<Map<String, dynamic>>();
        final connection = FlaxWebSocketConnection(
          HttpClient(context: clientSecurity),
          (kind, data) {
            if (kind == 'close') {
              done.complete(
                jsonDecode(data! as String) as Map<String, dynamic>,
              );
            }
          },
          () {},
        );
        addTearDown(connection.abort);
        await connection.open({
          'url': '${secure ? 'wss' : 'ws'}://127.0.0.1:${target.port}/',
          'protocols': <String>[],
          'headers': <String, Object?>{},
          'handshakeTimeout': 1000,
          'maxPayload': 1024,
          'pingInterval': null,
        });
        final result = await done.future.timeout(const Duration(seconds: 7));
        await peerDone.future.timeout(const Duration(seconds: 7));
        expect(result['wasClean'], true);
        expect(receivedAck, true);
      },
    );
  }
  for (final mode in [
    'ws-proxy',
    'wss',
    'wss-proxy',
    'proxy-auth',
    'bad-certificate',
  ]) {
    test('public HttpClient path: $mode', () async {
      final tls = mode != 'ws-proxy';
      final target = tls
          ? await HttpServer.bindSecure(
              '127.0.0.1',
              0,
              serverSecurity,
              requestClientCertificate: true,
            )
          : await HttpServer.bind('127.0.0.1', 0);
      addTearDown(() => target.close(force: true));
      X509Certificate? peerCertificate;
      target.listen((request) async {
        peerCertificate = request.certificate;
        final socket = await WebSocketTransformer.upgrade(
          request,
          compression: CompressionOptions.compressionOff,
        );
        socket.listen(socket.add, onError: (Object _) {});
      }, onError: (Object _) {});
      TestProxy? proxy;
      if (mode.contains('proxy')) {
        proxy = await TestProxy.open(
          target.port,
          authentication: mode == 'proxy-auth',
        );
        addTearDown(proxy.close);
      }
      final client = mode == 'bad-certificate'
          ? HttpClient()
          : HttpClient(context: clientSecurity);
      if (proxy != null) {
        client.findProxy = (_) => 'PROXY 127.0.0.1:${proxy!.port}';
      }
      if (mode == 'proxy-auth') {
        client.authenticateProxy = (host, port, scheme, realm) async {
          client.addProxyCredentials(
            host,
            port,
            realm!,
            HttpClientBasicCredentials('user', 'pass'),
          );
          return true;
        };
      }
      final done = Completer<Map<String, dynamic>>();
      var opened = false;
      late final FlaxWebSocketConnection connection;
      connection = FlaxWebSocketConnection(client, (kind, data) {
        if (kind == 'open') {
          opened = true;
          connection.send('echo');
        }
        if (kind == 'message') {
          expect(data, 'echo');
          connection.close(1000, 'ok');
        }
        if (kind == 'close' && !done.isCompleted) {
          done.complete(jsonDecode(data! as String) as Map<String, dynamic>);
        }
      }, () {});
      addTearDown(connection.abort);
      await connection.open({
        'url': '${tls ? 'wss' : 'ws'}://127.0.0.1:${target.port}/socket',
        'protocols': <String>[],
        'headers': <String, Object?>{},
        'handshakeTimeout': 3000,
        'maxPayload': 1024,
        'pingInterval': null,
      });
      final result = await done.future.timeout(const Duration(seconds: 10));
      if (mode == 'bad-certificate') {
        expect(opened, false);
        expect(result['wasClean'], false);
      } else {
        expect(opened, true);
        expect(result['wasClean'], true);
        if (tls) expect(peerCertificate?.subject, contains('Flax client'));
        if (proxy != null) expect(proxy.requests, greaterThan(0));
        if (mode == 'proxy-auth') expect(proxy!.challenges, 1);
      }
    });
  }
}
