import 'dart:convert';

import 'package:flax/flax.dart';
import 'package:flax_cupertino_ui/flax_cupertino_ui.dart';
import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/services.dart' as services;
import 'package:flutter_test/flutter_test.dart';

import '../support/engine.dart';

class _Delegate extends Fake implements services.TextSelectionDelegate {
  int pastes = 0;
  @override
  Future<void> pasteText(services.SelectionChangedCause cause) async {
    pastes++;
  }
}

void main() {
  testWidgets(
    'public Material and Cupertino handle-only controls retain native no-op paste',
    (tester) async {
      final calls = <String>[];
      tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
        services.SystemChannels.platform,
        (call) async {
          if (call.method.startsWith('Clipboard.')) calls.add(call.method);
          return null;
        },
      );
      final fixture = (await tester.runAsync(
        () => FlaxTestPermissions.create(
          permissions: const {'flax.clipboard.read': null},
        ),
      ))!;
      final delegate = _Delegate();
      const id = 'test.clipboard/handles#function:delegate';
      final module = FlaxBindingModule(
        'Clipboard controls fixture',
        [],
        moduleId: 'test.clipboard/handles',
        uiProtocol: flaxBindingVersion,
        requiredCapabilities: const [],
        functions: [
          FlaxFunctionBinding(
            id,
            const [],
            const FlaxTypeRef(
              'object',
              id: 'flax.core/sdk_services#type:TextSelectionDelegate',
            ),
            (_) => delegate,
          ),
        ],
      );
      final runtime = createTestRuntime();
      final session = FlaxSession(
        createRuntime: () => runtime,
        bindings: FlaxBindingRegistry([
          sdk_widgetsBindings,
          materialBindings,
          cupertinoBindings,
          module,
        ]),
        plugins: const [FlaxMaterialPlugin(), FlaxCupertinoPlugin()],
        permissions: fixture.policy,
        permissionManifest: fixture.manifest,
        source:
            '''
import {runApp, Text} from '@flax/flutter/widgets';
import {getDesktopTextSelectionHandleControls, getMaterialTextSelectionHandleControls} from '@flax/material-ui';
import {getCupertinoDesktopTextSelectionHandleControls, getCupertinoTextSelectionHandleControls} from '@flax/cupertino-ui';
import {invokeTopLevel} from '@flax/core/bindings';
runApp(Text('clipboard handle controls'));
globalThis.probe = async () => {
  const delegate = invokeTopLevel('$id', []);
  const results = [];
  for (const controls of [getDesktopTextSelectionHandleControls(), getMaterialTextSelectionHandleControls(),
      getCupertinoDesktopTextSelectionHandleControls(), getCupertinoTextSelectionHandleControls()]) {
    try { await controls.handlePaste(delegate); results.push('allowed'); }
    catch(error) { results.push(String(error)); }
  }
  return results;
};
''',
      );
      try {
        await tester.runAsync(() => session.ready);
        await tester.runAsync(() async {
          runtime.evaluate(
            'globalThis.result = null; probe().then(value => result = JSON.stringify(value)); queueMicrotask(() => {}); undefined;',
          );
        });
        Object? result;
        for (var turn = 0; turn < 200 && result == null; turn++) {
          await tester.pump();
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 1)),
          );
          final value = runtime.getGlobal('result');
          if (value is FlaxJsString) result = jsonDecode(value.value);
          if (value is FlaxJsObject) value.release();
        }
        expect(result, List.filled(4, 'allowed'));
        expect(delegate.pastes, 0);
        expect(calls, isEmpty);
      } finally {
        await flaxTestCloseSession(tester, session);
        await tester.runAsync(fixture.close);
        tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
          services.SystemChannels.platform,
          null,
        );
      }
    },
  );
}
