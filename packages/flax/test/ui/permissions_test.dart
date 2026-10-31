import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/services.dart' as services;
import 'package:flutter/widgets.dart' as widgets;
import 'package:flutter_test/flutter_test.dart';

import '../support/engine.dart';
import '../support/harness.dart' show registry;

const _business = FlaxPermissionDefinition(
  id: 'example.orders.read',
  title: 'Read orders',
  authorization: FlaxPermissionAuthorization.runtime,
);

const _view =
    "import {runApp, Text} from '@flax/flutter/widgets'; runApp(Text('permissions'));";

Future<String> _js(FlaxJsRuntime runtime, String script) async {
  runtime.evaluate(
    'globalThis.permissionResult = null; (async () => { $script })().then(v => permissionResult = JSON.stringify(v) ?? "__undefined__", e => permissionResult = "FAILED:" + (e.stack || e)); queueMicrotask(() => {}); undefined;',
  );
  final timer = Stopwatch()..start();
  while (timer.elapsed < const Duration(seconds: 10)) {
    final value = runtime.getGlobal('permissionResult');
    if (value is FlaxJsString) return value.value;
    await Future<void>.delayed(const Duration(milliseconds: 1));
  }
  throw StateError('Permission JS operation did not settle: $script');
}

FlaxBindingModule _guardedModule(
  FlaxBindingModule module,
  Map<(String, String, String), List<FlaxPermissionDefinition>> guards,
) => FlaxBindingModule(
  module.name,
  module.types,
  moduleId: module.moduleId,
  uiProtocol: module.uiProtocol,
  requiredCapabilities: [...module.requiredCapabilities, 'permission-guards'],
  functions: module.functions,
  stateVariants: module.stateVariants,
  dependencyModules: module.dependencyModules,
  dependencies: module.dependencies,
  dartTypes: module.dartTypes,
  dartShapes: module.dartShapes,
  sandboxGuards: module.sandboxGuards,
  permissionGuards: {...module.permissionGuards, ...guards},
);

class _FailedHttpClient extends Fake implements HttpClient {
  final opening = Completer<HttpClientRequest>();
  @override
  Future<HttpClientRequest> openUrl(String method, Uri url) => opening.future;
  @override
  void close({bool force = false}) {}
}

class _FailedHttpOverrides extends HttpOverrides {
  _FailedHttpOverrides(this.client);
  final _FailedHttpClient client;
  @override
  HttpClient createHttpClient(SecurityContext? context) => client;
}

final class _Document extends FlaxDocumentBackend {
  int closes = 0;
  int reads = 0;
  @override
  String get name => 'chosen.txt';
  @override
  Future<int> length() async => 6;
  @override
  Future<bool> exists() async => true;
  @override
  Future<Uint8List> read(int offset, int count) async {
    reads++;
    return Uint8List.fromList(offset == 0 ? utf8.encode('chosen') : []);
  }

  @override
  Future<void> write(
    List<int> bytes, {
    required FileMode mode,
    required bool flush,
  }) => throw UnsupportedError('read only');
  @override
  Future<void> close() async {
    closes++;
  }
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  test('single-file applications reject Fetch, Clipboard and all Wasm constructor aliases in JS', () async {
    final runtime = createTestRuntime();
    final session = FlaxSession(
      createRuntime: () => runtime,
      bindings: registry,
      source:
          "$_view import {Clipboard, ClipboardData} from '@flax/flutter/services'; globalThis.clipboard = Clipboard; globalThis.clipboardData = ClipboardData({text: 'no'});",
      plugins: const [],
    );
    try {
      await session.ready;
      expect(
        jsonDecode(
          await _js(runtime, r'''
        const result = [await permissions.query('flax.network')];
        for (const action of [() => fetch('https://example.com'), () => clipboard.setData(clipboardData), () => import('https://modules.invalid/child.js')]) {
          try { await action(); result.push('allowed'); } catch (e) { result.push([e.name,e.code,e.reason]); }
        }
        for (const make of [() => new WebAssembly.Memory({initial:1}), () => new WebAssembly.Memory.prototype.constructor({initial:1})]) {
          try { make(); result.push('allowed'); } catch (e) { result.push([e.name,e.code,e.reason]); }
        }
        return result;
      '''),
        ),
        [
          containsPair('reason', 'notDeclared'),
          ['FlaxPermissionError', 'FLAX_PERMISSION_DENIED', 'notDeclared'],
          ['FlaxPermissionError', 'FLAX_PERMISSION_DENIED', 'notDeclared'],
          ['FlaxPermissionError', 'FLAX_PERMISSION_DENIED', 'notDeclared'],
          ['FlaxPermissionError', 'FLAX_PERMISSION_DENIED', 'notDeclared'],
          ['FlaxPermissionError', 'FLAX_PERMISSION_DENIED', 'notDeclared'],
        ],
      );
    } finally {
      await session.close();
    }
  });

  for (final approved in [false, true]) {
    testWidgets(
      'direct Clipboard entry points ${approved ? 'honor installation approval' : 'reject undeclared JS while native paste works'}',
      (tester) async {
        const clipboardText = 'clipboard fixture text';
        final calls = <String>[];
        tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
          services.SystemChannels.platform,
          (call) async {
            if (call.method.startsWith('Clipboard.')) calls.add(call.method);
            return switch (call.method) {
              'Clipboard.getData' => {'text': clipboardText},
              'Clipboard.hasStrings' => {'value': true},
              _ => null,
            };
          },
        );
        final fixture = approved
            ? await tester.runAsync(
                () => FlaxTestPermissions.create(
                  permissions: const {
                    'flax.clipboard.read': null,
                    'flax.clipboard.write': null,
                  },
                ),
              )
            : null;
        final controller = widgets.TextEditingController()
          ..selection = const widgets.TextSelection.collapsed(offset: 0);
        final focus = widgets.FocusNode();
        final editorKey = widgets.GlobalKey<widgets.EditableTextState>();
        await tester.pumpWidget(
          widgets.Directionality(
            textDirection: widgets.TextDirection.ltr,
            child: widgets.EditableText(
              key: editorKey,
              controller: controller,
              focusNode: focus,
              style: const widgets.TextStyle(fontSize: 14),
              cursorColor: const widgets.Color(0xff000000),
              backgroundCursorColor: const widgets.Color(0xffffffff),
            ),
          ),
        );
        const id = 'test.clipboard/api#function:editor';
        final module = FlaxBindingModule(
          'Clipboard fixture',
          [],
          moduleId: 'test.clipboard/api',
          uiProtocol: flaxBindingVersion,
          requiredCapabilities: const [],
          functions: [
            FlaxFunctionBinding(
              id,
              const [],
              const FlaxTypeRef(
                'object',
                id: 'flax.core/sdk_widgets#type:EditableTextState',
              ),
              (_) => editorKey.currentState!,
            ),
          ],
        );
        final runtime = createTestRuntime();
        final session = FlaxSession(
          createRuntime: () => runtime,
          bindings: FlaxBindingRegistry([sdk_widgetsBindings, module]),
          permissions: fixture?.policy,
          permissionManifest: fixture?.manifest,
          plugins: const [],
          source:
              '''
import {runApp, Text, ClipboardStatusNotifier, EmptyTextSelectionControls} from '@flax/flutter/widgets';
import {Clipboard, SelectionChangedCause} from '@flax/flutter/services';
import {invokeTopLevel} from '@flax/core/bindings';
runApp(Text('clipboard permissions'));
globalThis.editor = invokeTopLevel('$id', []);
globalThis.controls = EmptyTextSelectionControls();
globalThis.readClipboard = async () => {
  const result = [];
  for (const action of [
    () => Clipboard.getData('text/plain'),
    () => ClipboardStatusNotifier().update(),
    () => editor.pasteText(SelectionChangedCause.keyboard),
    () => controls.handlePaste(editor),
  ]) {
    try { await action(); result.push('allowed'); }
    catch (error) { result.push(error.code || String(error)); }
  }
  return result;
};
globalThis.writeClipboard = () => [
  () => editor.copySelection(SelectionChangedCause.keyboard),
  () => controls.handleCopy(editor),
].map(action => {
  try { action(); return 'allowed'; }
  catch (error) { return error.code || String(error); }
});
''',
        );
        try {
          await tester.runAsync(() => session.ready);
          calls.clear();
          expect(
            jsonDecode(
              (await tester.runAsync(
                () => _js(runtime, 'return await readClipboard();'),
              ))!,
            ),
            List.filled(4, approved ? 'allowed' : 'FLAX_PERMISSION_DENIED'),
          );
          expect(
            controller.text,
            approved ? '$clipboardText$clipboardText' : isEmpty,
          );
          if (approved) {
            expect(
              calls,
              containsAll(['Clipboard.getData', 'Clipboard.hasStrings']),
            );
          } else {
            expect(calls, isEmpty);
          }
          controller.text = 'copy fixture';
          controller.selection = widgets.TextSelection(
            baseOffset: 0,
            extentOffset: controller.text.length,
          );
          calls.clear();
          expect(
            jsonDecode(
              (await tester.runAsync(
                () => _js(runtime, 'return writeClipboard();'),
              ))!,
            ),
            List.filled(2, approved ? 'allowed' : 'FLAX_PERMISSION_DENIED'),
          );
          expect(calls, approved ? contains('Clipboard.setData') : isEmpty);
          if (!approved) {
            controller.text = '';
            controller.selection = const widgets.TextSelection.collapsed(
              offset: 0,
            );
            await tester.runAsync(
              () => editorKey.currentState!.pasteText(
                services.SelectionChangedCause.keyboard,
              ),
            );
            expect(controller.text, clipboardText);
            expect(calls, contains('Clipboard.getData'));
          }
        } finally {
          await flaxTestCloseSession(tester, session);
          if (fixture != null) await tester.runAsync(fixture.close);
          await tester.pumpWidget(const widgets.SizedBox());
          controller.dispose();
          focus.dispose();
          tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
            services.SystemChannels.platform,
            null,
          );
        }
      },
    );
  }

  test('generated guard metadata blocks late Future results and preserves shared module consent', () async {
    final fixture = await FlaxTestPermissions.create(
      definitions: const [_business],
      permissions: {_business.id: null},
    );
    final value = Completer<int>();
    final authority = FlaxPermissionContext(
      policy: fixture.policy,
      manifest: fixture.manifest,
    );
    late FlaxPermissionLease foreign;
    const id = 'test.permissions/api#function:orders';
    const streamId = 'test.permissions/api#function:foreignStream';
    final module = FlaxBindingModule(
      'Orders',
      [],
      moduleId: 'test.permissions/api',
      uiProtocol: flaxBindingVersion,
      requiredCapabilities: const ['permission-guards'],
      functions: [
        FlaxFunctionBinding(
          id,
          const [],
          const FlaxTypeRef('future', item: FlaxTypeRef('int')),
          (_) => value.future,
        ),
        FlaxFunctionBinding(
          streamId,
          const [],
          FlaxTypeRef(
            'stream',
            id: 'flax.core/flutter#type:Stream',
            item: const FlaxTypeRef('int'),
            stream: FlaxStreamBinding(
              'stream:flax.core/flutter#type:Stream[int:]',
              (value) => value is Stream<int>,
              (value) => value as Stream<int>,
            ),
          ),
          (_) => foreign.guardStream(() => Stream.value(42)),
        ),
      ],
      permissionGuards: const {
        (id, 'call', ''): [_business],
      },
    );
    final runtime = createTestRuntime();
    final session = FlaxSession(
      createRuntime: () => runtime,
      bindings: FlaxBindingRegistry([flutterBindings, module]),
      permissions: fixture.policy,
      permissionManifest: fixture.manifest,
      source:
          "$_view import {invokeTopLevel} from '@flax/core/bindings'; globalThis.loadOrders = () => invokeTopLevel('$id', []); globalThis.foreignOrders = () => invokeTopLevel('$streamId', []);",
      plugins: const [],
    );
    try {
      await session.ready;
      expect(
        await _js(
          runtime,
          "return (await permissions.request('${_business.id}')).state;",
        ),
        '"granted"',
      );
      foreign = authority.lease(_business.id, operation: 'foreign.watch');
      expect(
        await _js(
          runtime,
          "try { for await (const value of foreignOrders()) {} return 'allowed'; } catch(e) { return e.reason || e.stack || String(e); }",
        ),
        '"foreignResource"',
      );
      runtime.evaluate(
        "globalThis.lateOrder = loadOrders().then(() => 'allowed', e => [e.code,e.permission,e.reason]); undefined;",
      );
      await fixture.manager.revoke(fixture.application, _business.id);
      value.complete(42);
      expect(jsonDecode(await _js(runtime, 'return await lateOrder;')), [
        'FLAX_PERMISSION_DENIED',
        _business.id,
        'revoked',
      ]);
    } finally {
      await session.close();
      await authority.close();
      await fixture.close();
    }
  });

  test(
    'font-specific constructors and functions retain permission guards',
    () async {
      final runtime = createTestRuntime();
      final session = FlaxSession(
        createRuntime: () => runtime,
        bindings: FlaxBindingRegistry([
          _guardedModule(sdk_dart_uiBindings, const {
            ('flax.core/sdk_dart_ui#type:Paint', 'construct', ''): [_business],
            ('flax.core/sdk_dart_ui#type:ParagraphBuilder', 'construct', ''): [
              _business,
            ],
            ('flax.core/sdk_dart_ui#function:loadFontFromList', 'call', ''): [
              _business,
            ],
          }),
          _guardedModule(sdk_widgetsBindings, const {
            ('flax.core/sdk_widgets#type:BannerPainter', 'construct', ''): [
              _business,
            ],
          }),
          _guardedModule(sdk_paintingBindings, const {
            (
              'flax.core/sdk_painting#function:TextPainter.computeWidth',
              'call',
              '',
            ): [
              _business,
            ],
            (
              'flax.core/sdk_painting#function:TextPainter.computeMaxIntrinsicWidth',
              'call',
              '',
            ): [
              _business,
            ],
          }),
        ]),
        plugins: const [],
        source: '''$_view
import {Paint, ParagraphStyle, ParagraphBuilder, TextDirection, loadFontFromList} from '@flax/dart/ui';
import {BannerPainter, BannerLocation} from '@flax/flutter/widgets';
import {TextSpan, TextPainter} from '@flax/flutter/painting';
globalThis.fontActions = [
  () => Paint(),
  () => ParagraphBuilder(ParagraphStyle()),
  () => BannerPainter({message:'test', textDirection:TextDirection.ltr, layoutDirection:TextDirection.ltr, location:BannerLocation.topEnd}),
  () => loadFontFromList(new Uint8Array([0])),
  () => TextPainter.computeWidth({text:TextSpan({text:'test'}), textDirection:TextDirection.ltr}),
  () => TextPainter.computeMaxIntrinsicWidth({text:TextSpan({text:'test'}), textDirection:TextDirection.ltr}),
];
''',
      );
      try {
        await session.ready;
        expect(
          jsonDecode(
            await _js(runtime, '''
        const results = [];
        for (const action of fontActions) {
          try { await action(); results.push('allowed'); }
          catch (error) { results.push(error.code || String(error)); }
        }
        return results;
      '''),
          ),
          List.filled(6, 'FLAX_PERMISSION_DENIED'),
        );
      } finally {
        await session.close();
      }
    },
  );

  test(
    'explicit generic methods use the same permission guard as ordinary calls',
    () async {
      final runtime = createTestRuntime();
      final session = FlaxSession(
        createRuntime: () => runtime,
        bindings: FlaxBindingRegistry([
          _guardedModule(flutterBindings, const {
            ('flax.core/flutter#type:Stream', 'call', 'map'): [_business],
          }),
        ]),
        plugins: const [],
        source: '''$_view
import {Stream} from '@flax/dart/async';
import {dartType, dartTypes} from '@flax/core/bindings';
globalThis.mapActions = [
  () => Stream.fromIterable([1]).map(value => value),
  () => dartType(Stream.fromIterable([1]), 'map', dartTypes.int)(value => value),
];
''',
      );
      try {
        await session.ready;
        expect(
          jsonDecode(
            await _js(runtime, '''
        return mapActions.map(action => {
          try { action(); return 'allowed'; }
          catch(error) { return [error.code, error.reason]; }
        });
      '''),
          ),
          [
            ['FLAX_PERMISSION_DENIED', 'notDeclared'],
            ['FLAX_PERMISSION_DENIED', 'notDeclared'],
          ],
        );
      } finally {
        await session.close();
      }
    },
  );

  testWidgets(
    'queued binding failures preserve errors only while permission remains valid',
    (tester) async {
      for (final revoke in [false, true]) {
        final fixture = (await tester.runAsync(
          () => FlaxTestPermissions.create(
            definitions: const [_business],
            permissions: {_business.id: null},
          ),
        ))!;
        final authority = FlaxPermissionContext(
          policy: fixture.policy,
          manifest: fixture.manifest,
        );
        await tester.runAsync(() => authority.request(_business.id));
        const id = 'test.permissions/api#function:failure';
        final completion = Completer<int>();
        var backendObserved = false;
        completion.future.then<void>(
          (_) {},
          onError: (Object _, StackTrace _) => backendObserved = true,
        );
        final module = FlaxBindingModule(
          'Protected failure',
          [],
          moduleId: 'test.permissions/api',
          uiProtocol: flaxBindingVersion,
          requiredCapabilities: const ['permission-guards'],
          functions: [
            FlaxFunctionBinding(
              id,
              const [],
              const FlaxTypeRef('future', item: FlaxTypeRef('int')),
              (_) => completion.future,
            ),
          ],
          permissionGuards: const {
            (id, 'call', ''): [_business],
          },
        );
        final runtime = createTestRuntime();
        final session = FlaxSession(
          createRuntime: () => runtime,
          bindings: FlaxBindingRegistry([flutterBindings, module]),
          permissions: fixture.policy,
          permissionManifest: fixture.manifest,
          plugins: const [],
          source:
              "$_view import {invokeTopLevel} from '@flax/core/bindings'; globalThis.failure = () => invokeTopLevel('$id', []);",
        );
        try {
          await tester.runAsync(() => session.ready);
          Future<void>? revocation;
          tester.binding.scheduleFrameCallback((_) {
            runtime.evaluate(
              "globalThis.failureDelivered = false; globalThis.pendingFailure = failure().then(() => 'allowed', e => { failureDelivered = true; return {code:e.code,message:e.message,stack:e.stack}; }); undefined;",
            );
            completion.completeError(
              StateError('PRIVATE_BACKEND_RECORD_ERROR'),
              StackTrace.fromString('PRIVATE_BACKEND_STACK'),
            );
          });
          tester.binding.addPostFrameCallback((_) {
            expect(backendObserved, isTrue);
            expect(
              (runtime.getGlobal('failureDelivered') as FlaxJsBoolean).value,
              isFalse,
            );
            if (revoke) {
              revocation = fixture.manager.revoke(
                fixture.application,
                _business.id,
              );
            }
          });
          await tester.pump();
          if (revocation != null) {
            await _pumpFuture(tester, revocation!);
          }
          final result = jsonDecode(
            (await tester.runAsync(
              () => _js(runtime, 'return await pendingFailure;'),
            ))!,
          );
          if (revoke) {
            expect(result['code'], 'FLAX_PERMISSION_DENIED');
            expect(
              result['message'],
              isNot(contains('PRIVATE_BACKEND_RECORD_ERROR')),
            );
          } else {
            expect(result['message'], contains('PRIVATE_BACKEND_RECORD_ERROR'));
            expect(result['stack'], contains('PRIVATE_BACKEND_STACK'));
          }
        } finally {
          await flaxTestCloseSession(tester, session);
          await _pumpFuture(tester, authority.close());
          await _pumpFuture(tester, fixture.close());
        }
      }
    },
  );

  testWidgets(
    'queued Fetch failures preserve transport errors only while permission remains valid',
    (tester) async {
      for (final revoke in [false, true]) {
        final fixture = (await tester.runAsync(
          () => FlaxTestPermissions.create(
            permissions: const {'flax.network': null},
          ),
        ))!;
        final previous = HttpOverrides.current;
        final client = _FailedHttpClient();
        HttpOverrides.global = _FailedHttpOverrides(client);
        var backendObserved = false;
        client.opening.future.then<void>(
          (_) {},
          onError: (Object _, StackTrace _) => backendObserved = true,
        );
        final runtime = createTestRuntime();
        final session = FlaxSession(
          createRuntime: () => runtime,
          bindings: registry,
          permissions: fixture.policy,
          permissionManifest: fixture.manifest,
          plugins: const [],
          source: _view,
        );
        try {
          await tester.runAsync(() => session.ready);
          Future<void>? revocation;
          tester.binding.scheduleFrameCallback((_) {
            runtime.evaluate(
              "globalThis.failureDelivered = false; globalThis.pendingFailure = fetch('https://transport.invalid/').then(() => 'allowed', e => { failureDelivered = true; return {code:e.code,message:e.message}; }); undefined;",
            );
            client.opening.completeError(
              StateError('PRIVATE_TRANSPORT_RECORD_ERROR'),
            );
          });
          tester.binding.addPostFrameCallback((_) {
            expect(backendObserved, isTrue);
            expect(
              (runtime.getGlobal('failureDelivered') as FlaxJsBoolean).value,
              isFalse,
            );
            if (revoke) {
              revocation = fixture.manager.revoke(
                fixture.application,
                'flax.network',
              );
            }
          });
          await tester.pump();
          if (revocation != null) {
            await _pumpFuture(tester, revocation!);
          }
          final result = jsonDecode(
            (await tester.runAsync(
              () => _js(runtime, 'return await pendingFailure;'),
            ))!,
          );
          if (revoke) {
            expect(result['code'], 'FLAX_PERMISSION_DENIED');
            expect(
              result['message'],
              isNot(contains('PRIVATE_TRANSPORT_RECORD_ERROR')),
            );
          } else {
            expect(
              result['message'],
              contains('PRIVATE_TRANSPORT_RECORD_ERROR'),
            );
          }
        } finally {
          await flaxTestCloseSession(tester, session);
          await _pumpFuture(tester, fixture.close());
          HttpOverrides.global = previous;
        }
      }
    },
  );

  test('document picker returns a sandbox-compatible File and revocation closes its backend', () async {
    final scratch = await Directory.systemTemp.createTemp(
      'flax-permission-documents-',
    );
    final fixture = await FlaxTestPermissions.create(
      permissions: const {
        'flax.documents.open': {'mode': 'read'},
      },
    );
    final sandbox = await FlaxSandbox.create(
      appId: fixture.application.appId,
      appsDirectory: Directory('${scratch.path}/apps'),
    );
    final document = _Document();
    final runtime = createTestRuntime();
    final session = FlaxSession(
      createRuntime: () => runtime,
      bindings: registry,
      sandbox: sandbox,
      permissions: fixture.policy,
      permissionManifest: fixture.manifest,
      plugins: [FlaxDocumentPlugin(select: (_) async => document)],
      source:
          "$_view import {File} from '@flax/dart/io'; import {FileImage, ResizeImage} from '@flax/flutter/painting'; import {Image} from '@flax/flutter/widgets'; globalThis.api = {File,FileImage,ResizeImage,Image};",
    );
    try {
      await session.ready;
      expect(
        jsonDecode(
          await _js(runtime, r'''
        globalThis.chosen = await documents.open();
        const image = api.Image.file(chosen);
        const provider = api.FileImage(chosen);
        const resized = api.ResizeImage.resizeIfNeeded(10, 10, provider);
        const text = await chosen.readAsString();
        let denied; try { api.File(chosen.path); } catch (e) { denied = e.code; }
        return [text,denied,!!image,!!provider,!!resized];
      '''),
        ),
        ['chosen', 'FLAX_SANDBOX_DENIED', true, true, true],
      );
      await fixture.manager.revoke(fixture.application, 'flax.documents.open');
      expect(
        await _js(
          runtime,
          "try { await chosen.readAsString(); return 'allowed'; } catch(e) { return e.code || e.stack || String(e); }",
        ),
        '"FLAX_PERMISSION_DENIED"',
      );
      await session.close();
      expect(document.closes, 1);
    } finally {
      await session.close();
      await fixture.close();
      await scratch.delete(recursive: true);
    }
  });

  for (final operation in [
    'readAsString()',
    'openRead().first',
    'stream.current',
  ]) {
    testWidgets('selected File $operation rechecks permission at delivery', (
      tester,
    ) async {
      final setup = (await tester.runAsync(() async {
        final scratch = await Directory.systemTemp.createTemp(
          'flax-file-delivery-',
        );
        final fixture = await FlaxTestPermissions.create(
          permissions: const {
            'flax.documents.open': {'mode': 'read'},
          },
        );
        final sandbox = await FlaxSandbox.create(
          appId: fixture.application.appId,
          appsDirectory: Directory('${scratch.path}/apps'),
        );
        return (scratch, fixture, sandbox);
      }))!;
      final (scratch, fixture, sandbox) = setup;
      final runtime = createTestRuntime();
      final document = _Document();
      final session = FlaxSession(
        createRuntime: () => runtime,
        bindings: registry,
        sandbox: sandbox,
        permissions: fixture.policy,
        permissionManifest: fixture.manifest,
        source: _view,
        plugins: [FlaxDocumentPlugin(select: (_) async => document)],
      );
      try {
        await tester.runAsync(() => session.ready);
        await tester.runAsync(
          () => _js(
            runtime,
            'globalThis.chosen = await documents.open(); return true;',
          ),
        );
        if (operation == 'stream.current') {
          await tester.runAsync(
            () => _js(runtime, '''
            const {StreamIterator} = await import('@flax/dart/async');
            globalThis.selectedIterator = StreamIterator(chosen.openRead());
            return await selectedIterator.moveNext();
          '''),
          );
          await _pumpFuture(
            tester,
            fixture.manager.revoke(fixture.application, 'flax.documents.open'),
          );
          expect(
            await tester.runAsync(
              () => _js(
                runtime,
                "try { return selectedIterator.current; } catch(e) { return e.code; }",
              ),
            ),
            '"FLAX_PERMISSION_DENIED"',
          );
        } else {
          Future<void>? revoked;
          tester.binding.scheduleFrameCallback((_) {
            runtime.evaluate(
              "globalThis.lateText = chosen.$operation.then(() => 'allowed', e => e.code); undefined;",
            );
          });
          tester.binding.addPostFrameCallback((_) {
            expect(document.reads, greaterThan(0));
            revoked = fixture.manager.revoke(
              fixture.application,
              'flax.documents.open',
            );
          });
          await tester.pump();
          await _pumpFuture(tester, revoked!);
          expect(
            await tester.runAsync(() => _js(runtime, 'return await lateText;')),
            '"FLAX_PERMISSION_DENIED"',
          );
        }
      } finally {
        await flaxTestCloseSession(tester, session);
        await _pumpFuture(tester, fixture.close());
        await tester.runAsync(() => scratch.delete(recursive: true));
      }
    });
  }

  for (final failure in [false, true]) {
    for (final revoke in [false, true]) {
      testWidgets(
        'picker ${failure ? 'error' : 'cancellation'} stays ${revoke ? 'protected after revoke' : 'unchanged while authorized'}',
        (tester) async {
          final setup = (await tester.runAsync(() async {
            final scratch = await Directory.systemTemp.createTemp(
              'flax-picker-delivery-',
            );
            final fixture = await FlaxTestPermissions.create(
              permissions: const {
                'flax.documents.open': {'mode': 'read'},
              },
            );
            final sandbox = await FlaxSandbox.create(
              appId: fixture.application.appId,
              appsDirectory: Directory('${scratch.path}/apps'),
            );
            return (scratch, fixture, sandbox);
          }))!;
          final (scratch, fixture, sandbox) = setup;
          final selected = Completer<FlaxDocumentBackend?>();
          var observed = false;
          selected.future.then<void>(
            (_) => observed = true,
            onError: (Object _, StackTrace _) => observed = true,
          );
          final runtime = createTestRuntime();
          final session = FlaxSession(
            createRuntime: () => runtime,
            bindings: registry,
            sandbox: sandbox,
            permissions: fixture.policy,
            permissionManifest: fixture.manifest,
            source: _view,
            plugins: [FlaxDocumentPlugin(select: (_) => selected.future)],
          );
          try {
            await tester.runAsync(() => session.ready);
            Future<void>? revocation;
            tester.binding.scheduleFrameCallback((_) {
              runtime.evaluate(
                'globalThis.pickerDelivered = false; globalThis.pendingPicker = documents.open().then('
                'value => { pickerDelivered = true; return {cancelled:value === null}; }, '
                'e => { pickerDelivered = true; return {code:e.code,message:e.message}; }); undefined;',
              );
              if (failure) {
                selected.completeError(StateError('PRIVATE_PICKER_ERROR'));
              } else {
                selected.complete(null);
              }
            });
            tester.binding.addPostFrameCallback((_) {
              expect(observed, isTrue);
              expect(
                (runtime.getGlobal('pickerDelivered') as FlaxJsBoolean).value,
                isFalse,
              );
              if (revoke) {
                revocation = fixture.manager.revoke(
                  fixture.application,
                  'flax.documents.open',
                );
              }
            });
            await tester.pump();
            if (revocation != null) {
              await _pumpFuture(tester, revocation!);
            }
            final result = jsonDecode(
              (await tester.runAsync(
                () => _js(runtime, 'return await pendingPicker;'),
              ))!,
            );
            if (revoke) {
              expect(result['code'], 'FLAX_PERMISSION_DENIED');
              expect(
                result['message'],
                isNot(contains('PRIVATE_PICKER_ERROR')),
              );
            } else if (failure) {
              expect(result['message'], contains('PRIVATE_PICKER_ERROR'));
            } else {
              expect(result, {'cancelled': true});
            }
          } finally {
            await flaxTestCloseSession(tester, session);
            await _pumpFuture(tester, fixture.close());
            await tester.runAsync(() => scratch.delete(recursive: true));
          }
        },
      );
    }
  }

  test('Fetch checks Dart Host, redirect origins and streamed body revocation', () async {
    final previous = HttpOverrides.current;
    HttpOverrides.global = null;
    final server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
    final release = Completer<void>();
    var requests = 0;
    server.listen((request) async {
      requests++;
      try {
        if (request.uri.path == '/redirect') {
          request.response.statusCode = 302;
          request.response.headers.set(
            'location',
            'http://localhost:${server.port}/target',
          );
        } else {
          request.response.headers.contentType = ContentType.binary;
          request.response.contentLength = 2;
          request.response.bufferOutput = false;
          request.response.add([1]);
          await request.response.flush();
          await release.future;
          request.response.add([2]);
        }
        await request.response.close();
      } catch (_) {
        request.response.close().ignore();
      }
    });
    final origin = 'http://127.0.0.1:${server.port}';
    final fixture = await FlaxTestPermissions.create(
      permissions: {
        'flax.network': {
          'origins': [origin],
        },
      },
    );
    final runtime = createTestRuntime();
    final session = FlaxSession(
      createRuntime: () => runtime,
      bindings: registry,
      permissions: fixture.policy,
      permissionManifest: fixture.manifest,
      plugins: const [],
      source: _view,
    );
    try {
      await session.ready;
      expect(
        await _js(
          runtime,
          "try { await fetch('$origin/', {headers:{Host:'evil.invalid'}}); return 'allowed'; } catch(e) { return e.reason || e.stack || String(e); }",
        ),
        '"hostHeaderMismatch"',
      );
      expect(requests, 0);
      expect(
        await _js(
          runtime,
          "try { await fetch('$origin/redirect'); return 'allowed'; } catch(e) { return e.code || e.stack || String(e); }",
        ),
        '"FLAX_PERMISSION_DENIED"',
      );
      expect(requests, 1);
      expect(
        await _js(
          runtime,
          "globalThis.reader = (await fetch('$origin/hold')).body.getReader(); await reader.read(); return true;",
        ),
        'true',
      );
      runtime.evaluate(
        "globalThis.lateBody = reader.read().then(() => 'allowed', e => e.code); undefined;",
      );
      await fixture.manager.revoke(fixture.application, 'flax.network');
      release.complete();
      expect(
        await _js(runtime, 'return await lateBody;'),
        '"FLAX_PERMISSION_DENIED"',
      );
    } finally {
      if (!release.isCompleted) release.complete();
      await session.close();
      await fixture.close();
      await server.close(force: true);
      HttpOverrides.global = previous;
    }
  });
}

Future<void> _pumpFuture(WidgetTester tester, Future<void> work) async {
  var completed = false;
  final result = work.whenComplete(() => completed = true);
  for (var turn = 0; turn < 100 && !completed; turn++) {
    await tester.pump(const Duration(milliseconds: 1));
    await tester.runAsync(() => Future<void>.delayed(Duration.zero));
  }
  expect(completed, isTrue, reason: 'Permission write did not drain');
  await result;
}
