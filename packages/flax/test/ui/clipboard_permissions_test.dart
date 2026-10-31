import 'dart:async';
import 'dart:convert';

import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart' as services;
import 'package:flutter/widgets.dart' as widgets;
import 'package:flutter_test/flutter_test.dart';

import '../support/engine.dart';

const _statusType = FlaxTypeRef(
  'object',
  id: 'flax.core/sdk_widgets#type:ClipboardStatusNotifier',
);
const _editorType = FlaxTypeRef(
  'object',
  id: 'flax.core/sdk_widgets#type:EditableTextState',
);
const _anyType = FlaxTypeRef('any');

FlaxFunctionBinding _function(
  String name,
  FlaxTypeRef result,
  Object? Function(Map<String, Object?>) invoke, [
  List<FlaxParameter> parameters = const [],
]) => FlaxFunctionBinding(
  'test.clipboard/api#function:$name',
  parameters,
  result,
  invoke,
);

Future<void> _finish(WidgetTester tester, Future<void> future) async {
  var done = false;
  final observed = future.whenComplete(() => done = true);
  for (var turn = 0; turn < 200 && !done; turn++) {
    await tester.pump();
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 1)),
    );
  }
  expect(done, isTrue);
  await observed;
}

Future<void> _drain(WidgetTester tester) async {
  for (var turn = 0; turn < 6; turn++) {
    await tester.pump();
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 1)),
    );
  }
}

class _ClipboardSession {
  _ClipboardSession(this.fixture, this.runtime, this.session);
  final FlaxTestPermissions fixture;
  final FlaxJsRuntime runtime;
  final FlaxSession session;

  static Future<_ClipboardSession> open(
    WidgetTester tester, {
    List<FlaxFunctionBinding> functions = const [],
    String source = '',
    String appId = 'test.clipboard',
    Map<String, Object?> permissions = const {'flax.clipboard.read': null},
  }) async {
    final fixture = (await tester.runAsync(
      () => FlaxTestPermissions.create(appId: appId, permissions: permissions),
    ))!;
    final runtime = createTestRuntime();
    final module = FlaxBindingModule(
      'Clipboard fixture',
      [],
      moduleId: 'test.clipboard/api',
      uiProtocol: flaxBindingVersion,
      requiredCapabilities: const [],
      functions: functions,
    );
    final session = FlaxSession(
      createRuntime: () => runtime,
      bindings: FlaxBindingRegistry([
        flutterBindings,
        sdk_widgetsBindings,
        module,
      ]),
      plugins: const [],
      permissions: fixture.policy,
      permissionManifest: fixture.manifest,
      source:
          '''
import {runApp, Text, ClipboardStatusNotifier, ClipboardStatus, EmptyTextSelectionControls} from '@flax/flutter/widgets';
import {SelectionChangedCause} from '@flax/flutter/services';
import {ValueListenable} from '@flax/flutter/foundation';
import {invokeTopLevel, asDart} from '@flax/core/bindings';
runApp(Text('clipboard lifecycle'));
Object.assign(globalThis, {ClipboardStatusNotifier, ClipboardStatus, EmptyTextSelectionControls, SelectionChangedCause, ValueListenable, asDart});
globalThis.call = (name, ...args) => invokeTopLevel('test.clipboard/api#function:' + name, args);
$source
''',
    );
    try {
      await tester.runAsync(() => session.ready);
    } catch (_) {
      await flaxTestCloseSession(tester, session);
      await _finish(tester, fixture.close());
      rethrow;
    }
    return _ClipboardSession(fixture, runtime, session);
  }

  Future<void> start(WidgetTester tester, String source) async {
    await tester.runAsync(() async {
      runtime.evaluate('$source; queueMicrotask(() => {}); undefined;');
    });
  }

  Future<Object?> js(WidgetTester tester, String source) async {
    await start(
      tester,
      'globalThis.clipboardResult = null; (async () => { $source })().then('
      'value => clipboardResult = JSON.stringify(value ?? null), '
      'error => clipboardResult = JSON.stringify({uncaught:String(error)}))',
    );
    final timer = Stopwatch()..start();
    while (timer.elapsed < const Duration(seconds: 8)) {
      final value = runtime.getGlobal('clipboardResult');
      if (value is FlaxJsString) return jsonDecode(value.value);
      if (value is FlaxJsObject) value.release();
      await tester.pump();
      await tester.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 1)),
      );
    }
    throw StateError('Clipboard operation did not reach its checkpoint');
  }

  Future<void> revoke(WidgetTester tester) => _finish(
    tester,
    fixture.manager.revoke(fixture.application, 'flax.clipboard.read'),
  );
  Future<void> close(WidgetTester tester) async {
    await flaxTestCloseSession(tester, session);
    await _finish(tester, fixture.close());
  }
}

class _Editor {
  final controller = widgets.TextEditingController(text: 'ab')
    ..selection = const widgets.TextSelection.collapsed(offset: 0);
  final focus = widgets.FocusNode();
  final key = widgets.GlobalKey<widgets.EditableTextState>();
  final changes = <String>[];
  Future<void> mount(WidgetTester tester, {bool readOnly = false}) =>
      tester.pumpWidget(
        widgets.Directionality(
          textDirection: widgets.TextDirection.ltr,
          child: widgets.EditableText(
            key: key,
            controller: controller,
            focusNode: focus,
            readOnly: readOnly,
            style: const widgets.TextStyle(fontSize: 14),
            cursorColor: const widgets.Color(0xff000000),
            backgroundCursorColor: const widgets.Color(0xffffffff),
            onChanged: changes.add,
            inputFormatters: [
              services.TextInputFormatter.withFunction(
                (_, next) => next.copyWith(text: next.text.toUpperCase()),
              ),
            ],
          ),
        ),
      );
  Future<void> close(WidgetTester tester) async {
    await tester.pumpWidget(const widgets.SizedBox());
    controller.dispose();
    focus.dispose();
  }
}

class _CustomDelegate extends Fake implements services.TextSelectionDelegate {
  int calls = 0;
  @override
  Future<void> pasteText(services.SelectionChangedCause cause) async {
    calls++;
  }
}

class _CustomControls extends widgets.EmptyTextSelectionControls {
  int calls = 0;
  @override
  Type get runtimeType => widgets.EmptyTextSelectionControls;
  @override
  Future<void> handlePaste(services.TextSelectionDelegate delegate) async {
    calls++;
  }
}

class _RawErrorStatus extends widgets.ClipboardStatusNotifier {
  _RawErrorStatus() : super(value: widgets.ClipboardStatus.notPasteable);
  int reads = 0, descriptions = 0;
  @override
  widgets.ClipboardStatus get value {
    reads++;
    return super.value;
  }

  @override
  String toString() {
    descriptions++;
    return 'PRIVATE_RAW_CLIPBOARD_ERROR';
  }
}

class _ErrorIngress {
  Object payload = StateError('control');
  StackTrace stack = StackTrace.fromString('clipboard error control');
  final values = <Object>[];
  final errors = <Object>[];
  final stacks = <StackTrace>[];
  List<FlaxFunctionBinding> get functions {
    final callback = FlaxTypeRef(
      'callback',
      callback: FlaxCallbackBinding(
        const [],
        const FlaxTypeRef('any', nullable: true),
        (callback) =>
            () => callback.call(const [], const {}),
        id: 'test.clipboard/api#callback:error',
        invoke: (value, _, _) => (value as Object? Function())(),
        matches: (value) => value is Object? Function(),
      ),
    );
    return [
      _function(
        'fail',
        const FlaxTypeRef('future', item: _anyType),
        (_) => Future<Object>.error(payload, stack),
      ),
      _function('capture', const FlaxTypeRef('bool'), (values) {
        this.values.add(values['value']!);
        return true;
      }, const [FlaxParameter('value', _anyType, required: true)]),
      _function('captureTyped', const FlaxTypeRef('bool'), (values) {
        this.values.add(values['value']!);
        return true;
      }, const [FlaxParameter('value', _statusType, required: true)]),
      _function('callback', const FlaxTypeRef('bool'), (values) {
        try {
          (values['callback'] as Object? Function())();
        } catch (error, stack) {
          errors.add(error);
          stacks.add(stack);
        }
        return true;
      }, [FlaxParameter('callback', callback, required: true)]),
      _function(
        'promise',
        const FlaxTypeRef('future', item: FlaxTypeRef('bool')),
        (values) async {
          try {
            await (values['future'] as Future<Object?>);
          } catch (error, stack) {
            errors.add(error);
            stacks.add(stack);
          }
          return true;
        },
        const [
          FlaxParameter(
            'future',
            FlaxTypeRef('future', item: FlaxTypeRef('any', nullable: true)),
            required: true,
          ),
        ],
      ),
    ];
  }
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  for (final route in ['editor', 'controls']) {
    testWidgets(
      'programmatic $route paste checks authority before mutation and preserves editor behavior',
      (tester) async {
        for (final scenario in [
          'accepted',
          'revoked',
          if (route == 'editor') ...[
            'readOnly',
            'null',
            'error',
            'unmounted',
            'closed',
          ],
        ]) {
          final response = Completer<Object?>();
          var reads = 0;
          tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
            services.SystemChannels.platform,
            (call) {
              if (call.method == 'Clipboard.getData') {
                reads++;
                return response.future;
              }
              if (call.method == 'Clipboard.hasStrings') {
                return Future<Object?>.value({'value': true});
              }
              return Future<Object?>.value();
            },
          );
          final editor = _Editor();
          await editor.mount(tester);
          final harness = await _ClipboardSession.open(
            tester,
            functions: [
              _function('editor', _editorType, (_) => editor.key.currentState!),
              _function(
                'delegate',
                const FlaxTypeRef(
                  'object',
                  id: 'flax.core/sdk_services#type:TextSelectionDelegate',
                ),
                (_) => editor.key.currentState!,
              ),
            ],
            source: '''globalThis.editor = call('editor');
globalThis.paste = () => ${route == 'editor' ? 'editor.pasteText(SelectionChangedCause.keyboard)' : 'EmptyTextSelectionControls().handlePaste(editor)'};''',
          );
          try {
            await harness.start(
              tester,
              'globalThis.pending = paste().then(() => ({ok:true}), error => ({code:error.code,message:String(error)}))',
            );
            await _drain(tester);
            expect(reads, 1, reason: scenario);
            if (scenario == 'revoked' && route == 'editor') {
              await harness.start(
                tester,
                'globalThis.alias = call("delegate").pasteText(SelectionChangedCause.keyboard).then(() => ({ok:true}), error => ({code:error.code}))',
              );
              await _drain(tester);
              expect(reads, 2);
            }
            editor.controller.selection = const widgets.TextSelection.collapsed(
              offset: 2,
            );
            if (scenario == 'readOnly') {
              await editor.mount(tester, readOnly: true);
              expect(
                await harness.js(tester, 'await paste(); return true;'),
                isTrue,
              );
              expect(reads, 1);
            }
            if (scenario == 'unmounted') {
              await tester.pumpWidget(const widgets.SizedBox());
            }
            if (scenario == 'revoked') await harness.revoke(tester);
            if (scenario == 'closed') {
              await flaxTestCloseSession(tester, harness.session);
            }
            if (scenario == 'error') {
              response.completeError(
                services.PlatformException(
                  code: 'CLIPBOARD_TEST_ERROR',
                  message: 'test backend error',
                ),
              );
            } else {
              response.complete(scenario == 'null' ? null : {'text': 'secret'});
            }
            await _drain(tester);
            if (scenario != 'closed') {
              final result =
                  await harness.js(tester, 'return await pending;') as Map;
              if (scenario == 'revoked') {
                expect(result['code'], 'FLAX_PERMISSION_DENIED');
                if (route == 'editor') {
                  expect(await harness.js(tester, 'return await alias;'), {
                    'code': 'FLAX_PERMISSION_DENIED',
                  });
                }
              } else if (scenario == 'error') {
                expect(result['message'], contains('CLIPBOARD_TEST_ERROR'));
              } else {
                expect(result, {'ok': true});
              }
            }
            if (scenario == 'accepted') {
              expect(editor.controller.text, 'ABSECRET');
              expect(
                editor.controller.selection,
                const widgets.TextSelection.collapsed(offset: 8),
              );
              expect(editor.changes, ['ABSECRET']);
            } else {
              expect(editor.controller.text, 'ab', reason: scenario);
              expect(editor.changes, isEmpty, reason: scenario);
            }
            if (scenario == 'revoked') {
              expect(
                await harness.js(
                  tester,
                  'return editor.textEditingValue.text;',
                ),
                'ab',
              );
              await tester.runAsync(
                () => editor.key.currentState!.pasteText(
                  services.SelectionChangedCause.keyboard,
                ),
              );
              expect(editor.controller.text, 'ABSECRET');
              expect(editor.changes, ['ABSECRET']);
            }
          } finally {
            if (!response.isCompleted) response.complete(null);
            await harness.close(tester);
            await editor.close(tester);
            tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
              services.SystemChannels.platform,
              null,
            );
          }
        }
      },
    );
  }

  for (final backendError in [false, true]) {
    testWidgets(
      'owned Clipboard notifier filters late ${backendError ? 'errors' : 'values'} before native and JS consumers',
      (tester) async {
        var reply = Completer<Object?>();
        var reads = 0;
        final reports = <FlutterErrorDetails>[];
        final oldErrorHandler = FlutterError.onError;
        FlutterError.onError = reports.add;
        widgets.ClipboardStatusNotifier? native;
        final nativeSeen = <widgets.ClipboardStatus>[];
        tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
          services.SystemChannels.platform,
          (call) {
            if (call.method == 'Clipboard.hasStrings') {
              reads++;
              return reply.future;
            }
            return Future<Object?>.value();
          },
        );
        final harness = await _ClipboardSession.open(
          tester,
          functions: [
            _function('capture', const FlaxTypeRef('void'), (values) {
              native = values['value'] as widgets.ClipboardStatusNotifier;
              final ValueListenable<widgets.ClipboardStatus> projected =
                  native!;
              projected.addListener(() => nativeSeen.add(projected.value));
              return null;
            }, const [FlaxParameter('value', _anyType, required: true)]),
          ],
          source: '''
globalThis.notifier = ClipboardStatusNotifier({value: ClipboardStatus.notPasteable});
globalThis.seen = [];
notifier.addListener(() => seen.push(notifier.value === ClipboardStatus.pasteable));
call('capture', notifier);
''',
        );
        try {
          if (backendError) {
            await harness.start(
              tester,
              'globalThis.allowedUpdate = notifier.update()',
            );
            reply.completeError(
              services.PlatformException(code: 'STATUS_TEST_ERROR'),
            );
            expect(
              await harness.js(tester, 'await allowedUpdate; return true;'),
              isTrue,
            );
            expect(reports, hasLength(1));
            expect(
              (reports.single.exception as services.PlatformException).code,
              'STATUS_TEST_ERROR',
            );
            expect(reports.single.stack, isNotNull);
            expect(native!.value, widgets.ClipboardStatus.unknown);
            native!.value = widgets.ClipboardStatus.notPasteable;
            await harness.start(tester, 'seen.length = 0');
            nativeSeen.clear();
            reports.clear();
            reply = Completer<Object?>();
          }
          await harness.start(
            tester,
            'globalThis.pending = notifier.update().then(() => ({ok:true}), error => ({code:error.code}))',
          );
          await _drain(tester);
          final beforeRevoke = reads;
          expect(beforeRevoke, backendError ? 2 : 1);
          await harness.revoke(tester);
          if (backendError) {
            reply.completeError(
              services.PlatformException(code: 'PRIVATE_LATE_STATUS_ERROR'),
            );
          } else {
            reply.complete({'value': true});
          }
          await _drain(tester);
          expect(await harness.js(tester, 'return await pending;'), {
            'code': 'FLAX_PERMISSION_DENIED',
          });
          expect(await harness.js(tester, 'return seen;'), isEmpty);
          expect(nativeSeen, isEmpty);
          expect(native!.value, widgets.ClipboardStatus.notPasteable);
          expect(reports, isEmpty);
          tester.binding.handleAppLifecycleStateChanged(
            widgets.AppLifecycleState.inactive,
          );
          tester.binding.handleAppLifecycleStateChanged(
            widgets.AppLifecycleState.resumed,
          );
          await _drain(tester);
          expect(reads, beforeRevoke);
          expect(
            () => native!.addListener(() {}),
            throwsA(isA<FlaxPermissionException>()),
          );
          expect(
            await harness.js(
              tester,
              'try { return notifier.value; } catch(error) { return error.code; }',
            ),
            'FLAX_PERMISSION_DENIED',
          );
          await _finish(
            tester,
            harness.fixture.manager.approvePermission(
              harness.fixture.application,
              'flax.clipboard.read',
            ),
          );
          expect(
            await harness.js(
              tester,
              'try { await notifier.update(); return "allowed"; } catch(error) { return error.code; }',
            ),
            'FLAX_PERMISSION_DENIED',
          );
          expect(reads, beforeRevoke);
          expect(
            await harness.js(
              tester,
              'notifier.removeListener(() => {}); notifier.dispose(); return true;',
            ),
            isTrue,
          );
        } finally {
          if (!reply.isCompleted) reply.complete({'value': false});
          await harness.close(tester);
          FlutterError.onError = oldErrorHandler;
          tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
            services.SystemChannels.platform,
            null,
          );
        }
      },
    );
  }

  testWidgets(
    'borrowed Clipboard views preserve shared host ownership, identity and typed aliases',
    (tester) async {
      var reply = Completer<Object?>();
      var reads = 0;
      final raw = widgets.ClipboardStatusNotifier(
        value: widgets.ClipboardStatus.notPasteable,
      );
      final hostSeen = <widgets.ClipboardStatus>[];
      raw.addListener(() => hostSeen.add(raw.value));
      tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
        services.SystemChannels.platform,
        (call) {
          if (call.method == 'Clipboard.hasStrings') {
            reads++;
            return reply.future;
          }
          return Future<Object?>.value();
        },
      );
      final firstCaptured = <widgets.ClipboardStatusNotifier>[];
      final secondCaptured = <widgets.ClipboardStatusNotifier>[];
      final firstNativeSeen = <widgets.ClipboardStatus>[];
      final secondNativeSeen = <widgets.ClipboardStatus>[];
      List<FlaxFunctionBinding> functions(
        List<widgets.ClipboardStatusNotifier> captured,
      ) => [
        _function('source', _statusType, (_) => raw),
        _function('sourceObject', _anyType, (_) => raw),
        _function('foreign', _anyType, (_) => firstCaptured.first),
        _function('capture', const FlaxTypeRef('void'), (values) {
          captured.add(values['value'] as widgets.ClipboardStatusNotifier);
          return null;
        }, const [FlaxParameter('value', _anyType, required: true)]),
      ];
      const source = r'''
globalThis.status = call('source'); globalThis.seen = [];
call('capture', status); call('capture', call('sourceObject'));
call('capture', asDart(status, ValueListenable.$type(ClipboardStatus)));
status.addListener(() => seen.push(status.value === ClipboardStatus.pasteable));
''';
      final first = await _ClipboardSession.open(
        tester,
        appId: 'test.clipboard.first',
        functions: functions(firstCaptured),
        source: source,
      );
      final second = await _ClipboardSession.open(
        tester,
        appId: 'test.clipboard.second',
        functions: functions(secondCaptured),
        source: source,
      );
      try {
        expect(firstCaptured, hasLength(3));
        expect(secondCaptured, hasLength(3));
        for (final value in firstCaptured) {
          expect(value, same(firstCaptured.first));
          expect(value, isNot(same(raw)));
        }
        for (final value in secondCaptured) {
          expect(value, same(secondCaptured.first));
          expect(value, isNot(same(raw)));
        }
        expect(firstCaptured.first, isNot(same(secondCaptured.first)));
        final ValueListenable<widgets.ClipboardStatus> firstView =
            firstCaptured.first;
        final ValueListenable<widgets.ClipboardStatus> secondView =
            secondCaptured.first;
        firstView.addListener(() => firstNativeSeen.add(firstView.value));
        secondView.addListener(() => secondNativeSeen.add(secondView.value));
        expect(
          await second.js(
            tester,
            'try { call("foreign"); return "allowed"; } catch(error) { return error.reason; }',
          ),
          'foreignResource',
        );
        final refresh = raw.update();
        expect(reads, 1);
        await first.revoke(tester);
        reply.complete({'value': true});
        await _finish(tester, refresh);
        expect(hostSeen, [widgets.ClipboardStatus.pasteable]);
        expect(firstNativeSeen, isEmpty);
        expect(secondNativeSeen, [widgets.ClipboardStatus.pasteable]);
        expect(await first.js(tester, 'return seen;'), isEmpty);
        expect(await second.js(tester, 'return seen;'), [true]);
        expect(firstView.value, widgets.ClipboardStatus.notPasteable);
        reply = Completer<Object?>()..complete({'value': false});
        expect(
          await second.js(
            tester,
            'await status.update(); return status.value === ClipboardStatus.notPasteable;',
          ),
          isTrue,
        );
        expect(reads, 2);
        expect(hostSeen, [
          widgets.ClipboardStatus.pasteable,
          widgets.ClipboardStatus.notPasteable,
        ]);
        expect(firstNativeSeen, isEmpty);
        await _finish(
          tester,
          first.fixture.manager.approvePermission(
            first.fixture.application,
            'flax.clipboard.read',
          ),
        );
        expect(
          await first.js(
            tester,
            'try { await status.update(); return "allowed"; } catch(error) { return error.code; }',
          ),
          'FLAX_PERMISSION_DENIED',
        );
        expect(
          await first.js(
            tester,
            'call("capture", call("source")); return true;',
          ),
          isTrue,
        );
        expect(firstCaptured.last, isNot(same(firstCaptured.first)));
        expect(
          await second.js(
            tester,
            'try { call("foreign"); return "allowed"; } catch(error) { return error.reason; }',
          ),
          'foreignResource',
        );
        await first.close(tester);
        await second.close(tester);
        final secondBeforeClose = secondNativeSeen.toList();
        reply = Completer<Object?>()..complete({'value': true});
        raw.didChangeAppLifecycleState(widgets.AppLifecycleState.resumed);
        await _drain(tester);
        expect(reads, 3);
        expect(hostSeen.last, widgets.ClipboardStatus.pasteable);
        expect(secondNativeSeen, secondBeforeClose);
        expect(firstCaptured.last.value, widgets.ClipboardStatus.notPasteable);
        expect(() => secondView.addListener(() {}), throwsStateError);
      } finally {
        if (!reply.isCompleted) reply.complete({'value': false});
        await first.close(tester);
        await second.close(tester);
        raw.dispose();
        tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
          services.SystemChannels.platform,
          null,
        );
      }
    },
  );

  testWidgets(
    'Clipboard listener duplicates and synchronous revoke preserve cleanup during notification',
    (tester) async {
      Future<void>? revocation;
      late _ClipboardSession harness;
      harness = await _ClipboardSession.open(
        tester,
        functions: [
          _function('revoke', const FlaxTypeRef('void'), (_) {
            revocation = harness.fixture.manager.revoke(
              harness.fixture.application,
              'flax.clipboard.read',
            );
            return null;
          }),
        ],
      );
      try {
        expect(
          await harness.js(tester, '''
const status = ClipboardStatusNotifier({value:ClipboardStatus.notPasteable});
let count = 0; const listener = () => count++;
status.addListener(listener); status.addListener(listener); status.removeListener(listener);
status.value = ClipboardStatus.pasteable;
status.removeListener(listener); status.value = ClipboardStatus.notPasteable;
globalThis.reentrant = ClipboardStatusNotifier({value:ClipboardStatus.notPasteable});
globalThis.seen = [];
reentrant.addListener(() => { seen.push('first'); call('revoke'); });
reentrant.addListener(() => seen.push('second'));
reentrant.value = ClipboardStatus.pasteable;
return {count, seen};
'''),
          {
            'count': 1,
            'seen': ['first'],
          },
        );
        expect(revocation, isNotNull);
        await _finish(tester, revocation!);
        expect(
          await harness.js(
            tester,
            'reentrant.removeListener(() => {}); reentrant.dispose(); return true;',
          ),
          isTrue,
        );
      } finally {
        await harness.close(tester);
      }
    },
  );

  testWidgets(
    'unsupported native paste overrides and Clipboard notifier proxies fail before native execution',
    (tester) async {
      final delegate = _CustomDelegate();
      final controls = _CustomControls();
      final editor = _Editor();
      await editor.mount(tester);
      final harness = await _ClipboardSession.open(
        tester,
        functions: [
          _function('editor', _editorType, (_) => editor.key.currentState!),
          _function(
            'delegate',
            const FlaxTypeRef(
              'object',
              id: 'flax.core/sdk_services#type:TextSelectionDelegate',
            ),
            (_) => delegate,
          ),
          _function(
            'controls',
            const FlaxTypeRef(
              'object',
              id: 'flax.core/sdk_widgets#type:TextSelectionControls',
            ),
            (_) => controls,
          ),
        ],
      );
      try {
        final result = await harness.js(tester, '''
const results = [];
for (const action of [
  () => call('delegate').pasteText(SelectionChangedCause.keyboard),
  () => call('controls').handlePaste(call('editor')),
  () => ClipboardStatusNotifier.implement([], {}),
]) { try { await action(); results.push('allowed'); } catch(error) { results.push(String(error)); } }
return results;
''') as List;
        expect(result, hasLength(3));
        expect(result[0], contains('Custom native Clipboard paste delegate'));
        expect(result[1], contains('Custom native Clipboard paste controls'));
        expect(result[2], contains('ClipboardStatusNotifier @implementation'));
        expect(delegate.calls, 0);
        expect(controls.calls, 0);
      } finally {
        await harness.close(tester);
        await editor.close(tester);
      }
    },
  );

  testWidgets(
    'borrowed Clipboard reattachment starts at the current snapshot without replay',
    (tester) async {
      final raw = widgets.ClipboardStatusNotifier(
        value: widgets.ClipboardStatus.notPasteable,
      );
      final host = <widgets.ClipboardStatus>[];
      raw.addListener(() => host.add(raw.value));
      final calls = <String>[];
      tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
        services.SystemChannels.platform,
        (call) async {
          calls.add(call.method);
          return null;
        },
      );
      final h = await _ClipboardSession.open(
        tester,
        functions: [_function('source', _statusType, (_) => raw)],
        source: '''
globalThis.status = call('source'); globalThis.seen = [];
globalThis.listener = () => seen.push(status.value === ClipboardStatus.pasteable);
status.addListener(listener);
''',
      );
      try {
        raw.value = widgets.ClipboardStatus.pasteable;
        await _drain(tester);
        expect(await h.js(tester, 'return seen;'), [true]);
        await h.js(tester, 'status.removeListener(listener); return true;');
        raw.value = widgets.ClipboardStatus.notPasteable;
        await h.js(tester, 'status.addListener(listener); return true;');
        expect(await h.js(tester, 'return seen;'), [true]);
        raw.value = widgets.ClipboardStatus.pasteable;
        await _drain(tester);
        expect(await h.js(tester, 'return seen;'), [true, true]);
        expect(host, [
          widgets.ClipboardStatus.pasteable,
          widgets.ClipboardStatus.notPasteable,
          widgets.ClipboardStatus.pasteable,
        ]);
        expect(calls.where((call) => call.startsWith('Clipboard.')), isEmpty);
      } finally {
        await h.close(tester);
        raw.dispose();
        tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
          services.SystemChannels.platform,
          null,
        );
      }
    },
  );

  testWidgets(
    'error references preserve ordinary identity and stack while resource restoration stays checked',
    (tester) async {
      final ingress = _ErrorIngress();
      final h = await _ClipboardSession.open(
        tester,
        functions: ingress.functions,
      );
      _ClipboardSession? foreign;
      try {
        for (final error in [
          StateError('ordinary Error'),
          Exception('ordinary Exception'),
          Object(),
          const FlaxPermissionException(
            permission: 'flax.clipboard.read',
            operation: 'safe control',
            reason: 'notDeclared',
          ),
        ]) {
          ingress.payload = error;
          ingress.stack = StackTrace.fromString(
            'ordinary stack ${ingress.values.length}',
          );
          expect(
            await h.js(
              tester,
              'globalThis.saved = await call("fail").catch(error => error); return call("capture", saved);',
            ),
            isTrue,
          );
          expect(ingress.values.last, same(error));
          expect(
            await h.js(
              tester,
              'return call("callback", () => { throw saved; });',
            ),
            isTrue,
          );
          expect(ingress.errors.last, same(error));
          expect(ingress.stacks.last, same(ingress.stack));
          expect(
            await h.js(
              tester,
              'return await call("promise", Promise.reject(saved));',
            ),
            isTrue,
          );
          expect(ingress.errors.last, same(error));
          expect(ingress.stacks.last, same(ingress.stack));
        }
        await h.js(tester, r'''
globalThis.status = ClipboardStatusNotifier({value:ClipboardStatus.notPasteable});
globalThis.alias = asDart(status, ValueListenable.$type(ClipboardStatus));
return call('capture', status);
''');
        final resource = ingress.values.last;
        ingress.payload = resource;
        ingress.stack = StackTrace.fromString('protected resource stack');
        expect(
          await h.js(
            tester,
            'globalThis.saved = await call("fail").catch(error => error); return saved.message;',
          ),
          'ClipboardStatusNotifier',
        );
        final other = _ErrorIngress()..payload = resource;
        foreign = await _ClipboardSession.open(
          tester,
          functions: other.functions,
          appId: 'test.clipboard.foreign-error',
        );
        final denied = await foreign.js(
          tester,
          'globalThis.saved = await call("fail").catch(error => error); return {code:saved.code,reason:saved.reason,text:String(saved)};',
        ) as Map;
        expect(denied['code'], 'FLAX_PERMISSION_DENIED');
        expect(denied['reason'], 'foreignResource');
        expect(denied['text'], isNot(contains('ClipboardStatus.notPasteable')));
        expect(
          await foreign.js(tester, 'return call("capture", saved);'),
          isTrue,
        );
        expect(other.values.single, isA<FlaxPermissionException>());
        expect(other.values.single, isNot(same(resource)));
        ingress.values.clear();
        ingress.errors.clear();
        ingress.stacks.clear();
        await h.revoke(tester);
        for (final expression in ['saved', 'status', 'alias']) {
          expect(
            await h.js(
              tester,
              'try { call("capture", $expression); return "allowed"; } catch(error) { return error.code; }',
            ),
            'FLAX_PERMISSION_DENIED',
          );
        }
        expect(
          await h.js(
            tester,
            'try { call("captureTyped", alias); return "allowed"; } catch(error) { return error.code; }',
          ),
          'FLAX_PERMISSION_DENIED',
        );
        expect(ingress.values, isEmpty);
        expect(
          await h.js(
            tester,
            'return call("callback", () => { throw saved; });',
          ),
          isTrue,
        );
        expect(ingress.errors.last, isA<FlaxPermissionException>());
        expect(
          await h.js(
            tester,
            'return await call("promise", Promise.reject(saved));',
          ),
          isTrue,
        );
        expect(ingress.errors.last, isA<FlaxPermissionException>());
        expect(ingress.errors, everyElement(isNot(same(resource))));
        expect(
          await h.js(
            tester,
            'status.removeListener(() => {}); status.dispose(); return true;',
          ),
          isTrue,
        );
      } finally {
        if (foreign != null) await foreign.close(tester);
        await h.close(tester);
      }
    },
  );

  testWidgets(
    'raw Clipboard errors are admitted before retention or diagnostics',
    (tester) async {
      final raw = _RawErrorStatus();
      final deniedIngress = _ErrorIngress()..payload = raw;
      final denied = await _ClipboardSession.open(
        tester,
        functions: deniedIngress.functions,
        permissions: const {},
      );
      _ClipboardSession? approved;
      try {
        expect(
          await denied.js(
            tester,
            'globalThis.saved = await call("fail").catch(error => error); return saved.code;',
          ),
          'FLAX_PERMISSION_DENIED',
        );
        expect(raw.reads, 0);
        expect(raw.descriptions, 0);
        expect(
          await denied.js(tester, 'return call("capture", saved);'),
          isTrue,
        );
        expect(deniedIngress.values.single, isA<FlaxPermissionException>());
        final ingress = _ErrorIngress()..payload = raw;
        approved = await _ClipboardSession.open(
          tester,
          appId: 'test.clipboard.raw-error',
          functions: [
            ...ingress.functions,
            _function('source', _statusType, (_) => raw),
          ],
        );
        expect(
          await approved.js(
            tester,
            'globalThis.saved = await call("fail").catch(error => error); return call("capture", saved);',
          ),
          isTrue,
        );
        final view = ingress.values.single;
        expect(view, isA<widgets.ClipboardStatusNotifier>());
        expect(view, isNot(same(raw)));
        expect(raw.reads, 1);
        expect(raw.descriptions, 0);
        expect(
          await approved.js(tester, 'return call("capture", call("source"));'),
          isTrue,
        );
        expect(ingress.values.last, same(view));
        expect(
          await approved.js(
            tester,
            'return call("callback", () => { throw saved; });',
          ),
          isTrue,
        );
        expect(ingress.errors.last, same(view));
        expect(ingress.stacks.last, same(ingress.stack));
        await approved.revoke(tester);
        final count = ingress.values.length;
        expect(
          await approved.js(
            tester,
            'try { call("capture", saved); return "allowed"; } catch(error) { return error.code; }',
          ),
          'FLAX_PERMISSION_DENIED',
        );
        expect(ingress.values, hasLength(count));
        raw.value = widgets.ClipboardStatus.pasteable;
        expect(raw.value, widgets.ClipboardStatus.pasteable);
        expect(
          (view as widgets.ClipboardStatusNotifier).value,
          widgets.ClipboardStatus.notPasteable,
        );
      } finally {
        if (approved != null) await approved.close(tester);
        await denied.close(tester);
        raw.dispose();
      }
    },
  );

  testWidgets(
    'protected Stream errors deliver denial without losing subsequent events or cancellation',
    (tester) async {
      final raw = _RawErrorStatus();
      for (final cancelOnError in [false, true]) {
        var cancellations = 0;
        final controller = StreamController<int>(
          sync: true,
          onCancel: () => cancellations++,
        );
        final h = await _ClipboardSession.open(
          tester,
          permissions: const {},
          functions: [
            _function(
              'stream',
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
              (_) => controller.stream,
            ),
          ],
          source:
              '''
globalThis.events = []; globalThis.done = false;
globalThis.subscription = call('stream').listen(value => events.push(value), {
  onError: error => events.push(error.code), onDone: () => done = true, cancelOnError:$cancelOnError,
});
''',
        );
        try {
          controller.addError(raw);
          controller.add(7);
          await _finish(tester, controller.close());
          expect(await h.js(tester, 'return {events,done};'), {
            'events': ['FLAX_PERMISSION_DENIED', if (!cancelOnError) 7],
            'done': !cancelOnError,
          });
          expect(cancellations, 1);
          expect(
            await h.js(tester, 'await subscription.cancel(); return true;'),
            isTrue,
          );
        } finally {
          await h.close(tester);
          await _finish(tester, controller.close());
        }
      }
      expect(raw.reads, 0);
      expect(raw.descriptions, 0);
      raw.dispose();
    },
  );
}
