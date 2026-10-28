import 'dart:convert';
import 'dart:io';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/engine.dart';
import '../support/harness.dart' show registry;

class _Bundle extends CachingAssetBundle {
  @override
  Future<ByteData> load(String key) async {
    if (key != 'message.txt') throw StateError('Unknown key $key');
    return ByteData.sublistView(
      Uint8List.fromList(utf8.encode('application asset')),
    );
  }
}

void main() {
  test('sandbox cannot dispatch messages to host channel listeners', () async {
    final scratch = await Directory.systemTemp.createTemp('flax-host-channel-');
    final hostFile = await File('${scratch.path}/host.txt')
        .writeAsString('host secret');
    final sandbox = await FlaxSandbox.create(
      appId: 'test.host.channel',
      appsDirectory: Directory('${scratch.path}/apps'),
    );
    const channel = 'flax.test/sandbox-host-files';
    var hostCalls = 0;
    ui.channelBuffers.setListener(channel, (data, reply) {
      hostCalls++;
      hostFile.writeAsStringSync('host callback invoked');
      reply(null);
    });
    final sessions = <FlaxSession>[];
    try {
      for (final isolated in [true, false]) {
        final runtime = createTestRuntime();
        final session = FlaxSession(
          createRuntime: () => runtime,
          sandbox: isolated ? sandbox : null,
          bindings: registry,
          plugins: const [],
          source:
              '''
import {getChannelBuffers, ChannelBuffers, PlatformDispatcher, getWindow} from '@flax/dart/ui';
import {runApp, Text} from '@flax/flutter/widgets';
try {
  getChannelBuffers().push('$channel', null, () => {});
  globalThis.hostChannelResult = 'allowed';
} catch (error) {
  globalThis.hostChannelResult = error.code;
}
globalThis.hostChannelDenials = [];
if ($isolated) {
  const dispatcher = PlatformDispatcher.instance;
  const window = getWindow();
  for (const action of [
    () => ChannelBuffers(),
    () => dispatcher.onPlatformMessage,
    () => { dispatcher.onPlatformMessage = null; },
    () => window.onPlatformMessage,
    () => { window.onPlatformMessage = null; },
  ]) {
    try { action(); hostChannelDenials.push('allowed'); }
    catch (error) { hostChannelDenials.push(error.code); }
  }
}
runApp(Text('channel boundary'));
''',
        );
        sessions.add(session);
        await session.ready;
        expect(
          (runtime.getGlobal('hostChannelResult') as FlaxJsString).value,
          isolated ? FlaxSandboxException.deniedCode : 'allowed',
          reason:
              'Host calls: $hostCalls; file: ${await hostFile.readAsString()}',
        );
        expect(hostCalls, isolated ? 0 : 1);
        expect(
          (runtime.evaluate(
            'JSON.stringify(hostChannelDenials)',
          ) as FlaxJsString).value,
          jsonEncode(
            isolated ? List.filled(5, FlaxSandboxException.deniedCode) : [],
          ),
        );
        expect(
          await hostFile.readAsString(),
          isolated ? 'host secret' : 'host callback invoked',
        );
      }
    } finally {
      ui.channelBuffers.clearListener(channel);
      for (final session in sessions) {
        await session.close();
      }
      await scratch.delete(recursive: true);
    }
  });

  test('sandbox guards leave ordinary Session APIs available', () async {
    final scratch = await Directory.systemTemp.createTemp('flax-sandbox-pair-');
    final sandbox = await FlaxSandbox.create(
      appId: 'test.paired',
      appsDirectory: Directory('${scratch.path}/apps'),
    );
    final path = jsonEncode('${scratch.path}/host.txt');
    final isolatedRuntime = createTestRuntime();
    final isolated = FlaxSession(
      createRuntime: () => isolatedRuntime,
      sandbox: sandbox,
      bindings: registry,
      plugins: const [],
      source:
          '''
import { File } from '@flax/dart/io';
import { runApp, Text } from '@flax/flutter/widgets';
globalThis.denials = [];
for (const action of [() => File($path), () => __flaxBaseCall('ffiInstall')]) {
  try { action(); } catch (error) { denials.push(error.code); }
}
runApp(Text('isolated'));
''',
    );
    final ordinaryRuntime = createTestRuntime();
    final ordinary = FlaxSession(
      createRuntime: () => ordinaryRuntime,
      bindings: registry,
      plugins: const [],
      source:
          '''
import { File, Directory } from '@flax/dart/io';
import { FileImage } from '@flax/flutter/painting';
import { MethodChannel } from '@flax/flutter/services';
import { runApp, Text } from '@flax/flutter/widgets';
const file = File($path);
await file.writeAsString('ordinary');
const handle = await file.open();
const length = await handle.length();
await handle.close();
const image = FileImage(file);
const channel = MethodChannel('ordinary.files');
__flaxBaseCall('ffiInstall');
globalThis.ordinaryResult = JSON.stringify({
  text: await image.file.readAsString(), length, path: image.file.path,
  current: Directory.current.path, channel: channel.name,
  ffi: typeof __flaxFfiDlopen,
});
runApp(Text('ordinary'));
''',
    );
    try {
      await isolated.ready;
      expect(
        (isolatedRuntime.evaluate(
          'JSON.stringify(denials)',
        ) as FlaxJsString).value,
        jsonEncode(List.filled(2, FlaxSandboxException.deniedCode)),
      );
      await ordinary.ready;
      final result = jsonDecode(
        (ordinaryRuntime.evaluate('ordinaryResult') as FlaxJsString).value,
      ) as Map;
      expect(result, containsPair('text', 'ordinary'));
      expect(result, containsPair('length', 8));
      expect(result, containsPair('path', '${scratch.path}/host.txt'));
      expect(result, containsPair('current', Directory.current.path));
      expect(result, containsPair('channel', 'ordinary.files'));
      expect(result, containsPair('ffi', 'function'));
      expect(
        (isolatedRuntime.evaluate(
          'typeof __flaxFfiDlopen',
        ) as FlaxJsString).value,
        'undefined',
      );
      expect(await File('${scratch.path}/host.txt').readAsString(), 'ordinary');
    } finally {
      await ordinary.close();
      await isolated.close();
      await scratch.delete(recursive: true);
    }
  });

  testWidgets('sandbox files and Image.file stay scoped after home replacement', (
    t,
  ) async {
    late Directory scratch;
    late FlaxSandbox sandbox;
    await t.runAsync(() async {
      scratch = await Directory.systemTemp.createTemp('flax-sandbox-ui-');
      sandbox = await FlaxSandbox.create(
        appId: 'test.reader',
        appsDirectory: Directory('${scratch.path}/apps'),
      );
      await File('${scratch.path}/host.txt').writeAsString('host secret');
      await File('${sandbox.homePath}/pixel.png').writeAsBytes(
        base64Decode(
          'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
        ),
      );
    });
    final runtime = createTestRuntime();
    final errors = <Object>[];
    final session = FlaxSession(
      createRuntime: () => runtime,
      source: flaxTestFixtureSource('sandbox', packageName: 'flax'),
      bindings: registry,
      sandbox: sandbox,
      assetBundle: _Bundle(),
      plugins: const [],
      onError: (e, _) => errors.add(e),
    );
    try {
      await flaxTestPumpView(
        t,
        MaterialApp(home: FlaxView.session(session: session)),
      );
      expect(errors, isEmpty);
      expect(find.text('Sandbox root'), findsOneWidget);
      final call = runtime.evaluate(
        'sandboxFiles(${jsonEncode('${scratch.path}/host.txt')}).catch(error => globalThis.sandboxResults = String(error) + "\\n" + String(error.stack))',
      );
      if (call is FlaxJsObject) call.release();
      String? json;
      for (var turn = 0; turn < 200 && json == null; turn++) {
        await t.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 2)),
        );
        await t.pump(const Duration(milliseconds: 1));
        final value = runtime.evaluate('sandboxResults');
        if (value is FlaxJsString) json = value.value;
      }
      expect(json, isNotNull);
      expect(json!.startsWith('{'), isTrue, reason: json);
      final result = jsonDecode(json) as Map;
      expect(result, containsPair('home', sandbox.homePath));
      expect(result, containsPair('text', 'scoped'));
      expect(result, containsPair('copy', 'scoped'));
      expect(result, containsPair('same', true));
      expect(result, containsPair('listed', true));
      expect(result, containsPair('stat', 6));
      expect(result, containsPair('bundle', 'application asset'));
      expect(result, containsPair('assetBundle', true));
      for (final key in ['outside', 'raw', 'current', 'open']) {
        expect(result[key], FlaxSandboxException.deniedCode);
      }
      expect(
        (runtime.evaluate('sandboxFfi()') as FlaxJsString).value,
        '${FlaxSandboxException.deniedCode},${FlaxSandboxException.deniedCode},undefined,undefined',
      );
      expect(
        (runtime.evaluate('sandboxChannel()') as FlaxJsString).value,
        FlaxSandboxException.deniedCode,
      );
      expect(errors, isEmpty);
      await t.runAsync(() async {
        expect(
          await File('${scratch.path}/host.txt').readAsString(),
          'host secret',
        );
        expect(
          await File('${sandbox.homePath}/note.txt').readAsString(),
          'scoped',
        );
        final outside = await Directory('${scratch.path}/outside').create();
        await File('${outside.path}/pixel.png').writeAsString('host bytes');
        await Directory(sandbox.homePath).rename('${sandbox.homePath}-old');
        await Link(sandbox.homePath).create(outside.path);
      });
      // Native path reopening would read invalid host bytes instead of this PNG.
      runtime.evaluate(
        'sandboxImage(${jsonEncode('${sandbox.homePath}/pixel.png')})',
      );
      RawImage? image;
      for (var turn = 0; turn < 100 && image?.image == null; turn++) {
        await t.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 2)),
        );
        await t.pump(const Duration(milliseconds: 1));
        final images = t.widgetList<RawImage>(find.byType(RawImage));
        image = images.firstOrNull;
      }
      expect(image?.image?.width, 1);
      expect(image?.image?.height, 1);
      expect(errors, isEmpty);
    } finally {
      await flaxTestUnmount(t);
      await flaxTestCloseSession(t, session);
      expect(runtime.isDisposed, isTrue);
      await t.runAsync(() => scratch.delete(recursive: true));
    }
  });
}
