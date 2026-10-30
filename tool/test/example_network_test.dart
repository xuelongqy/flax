import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:test/test.dart';

import '../src/example_network.dart';

void main() {
  test('starts only for examples declaring a network module', () async {
    final project = Directory.systemTemp.createTempSync('example-network-');
    addTearDown(() => project.deleteSync(recursive: true));
    expect(await ExampleNetworkServer.forExample(project.path), isNull);
    final manifest = File('${project.path}/js/flax.modules.json')
      ..parent.createSync();
    manifest.writeAsStringSync(
      jsonEncode({
        'modules': [
          {'specifier': '@flax/material-ui'},
        ],
      }),
    );
    expect(await ExampleNetworkServer.forExample(project.path), isNull);
    final core = await ExampleNetworkServer.forExample(
      project.path,
      fetch: true,
    );
    expect(core, isNotNull);
    await core!.close();
    for (final specifier in ['@flax/websocket']) {
      manifest.writeAsStringSync(
        jsonEncode({
          'modules': [
            {'specifier': specifier},
          ],
        }),
      );
      final server = await ExampleNetworkServer.forExample(project.path);
      expect(server, isNotNull);
      await server!.close();
    }
  });

  test('serves JSON, delayed responses and 404 on independent ports', () async {
    final server = await ExampleNetworkServer.start();
    final other = await ExampleNetworkServer.start();
    final client = HttpClient();
    addTearDown(() => client.close(force: true));
    addTearDown(server.close);
    addTearDown(other.close);
    expect(server.baseUrl, startsWith('http://127.0.0.1:'));
    expect(server.baseUrl, isNot(other.baseUrl));
    final response = await (await client.getUrl(
      Uri.parse('${server.baseUrl}status'),
    )).close();
    expect(response.statusCode, HttpStatus.ok);
    final body = jsonDecode(await utf8.decoder.bind(response).join()) as Map;
    expect(body['message'], 'Hello from the Dart example server');
    expect(body['endpoints'], ['/status', '/slow', '/socket']);
    final missing = await (await client.getUrl(
      Uri.parse('${server.baseUrl}missing'),
    )).close();
    expect(missing.statusCode, HttpStatus.notFound);
    await missing.drain<void>();
    final slow = await (await client.getUrl(Uri.parse('${server.baseUrl}slow')))
        .close();
    expect(jsonDecode(await utf8.decoder.bind(slow).join()), {
      'message': 'The delayed request finished.',
    });
  });

  test('echoes text and bytes and closes active WebSockets', () async {
    final server = await ExampleNetworkServer.start();
    addTearDown(server.close);
    final peer = await WebSocket.connect(
      '${server.baseUrl.replaceFirst('http', 'ws')}socket',
    );
    final messages = StreamIterator<Object?>(peer);
    addTearDown(messages.cancel);
    peer.add('Hello from Flax!');
    expect(await messages.moveNext(), isTrue);
    expect(messages.current, 'Hello from Flax!');
    peer.add([1, 2, 3]);
    expect(await messages.moveNext(), isTrue);
    expect(messages.current, [1, 2, 3]);
    final done = messages.moveNext();
    await server.close();
    expect(await done, isFalse);
    expect(peer.closeCode, WebSocketStatus.goingAway);
    await server.close();
  });

  test('stops with a delayed HTTP request still pending', () async {
    final server = await ExampleNetworkServer.start();
    final client = HttpClient();
    addTearDown(() => client.close(force: true));
    addTearDown(server.close);
    final request = await client.getUrl(Uri.parse('${server.baseUrl}slow'));
    final pending = expectLater(request.close(), throwsA(isA<HttpException>()));
    final check = await (await client.getUrl(
      Uri.parse('${server.baseUrl}status'),
    )).close();
    await check.drain<void>();
    await server.close();
    await pending;
  });
}
