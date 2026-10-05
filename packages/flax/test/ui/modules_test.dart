import 'package:flax_test/flax_test.dart';

import 'dart:convert';

import 'package:flax/flax.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart' show registry, source;
import '../support/runtime_tracker.dart';

void main() {
  late FlaxModuleAssets? defaultAssets;
  setUpAll(() => defaultAssets = Flax.moduleAssets);
  tearDown(() => Flax.moduleAssets = defaultAssets);

  test(
    'module assets reject invalid inventories before loading factories',
    () async {
      for (final mutate in <void Function(Map<String, dynamic>)>[
        (manifest) => manifest['unknown'] = true,
        (manifest) => manifest['formatVersion'] = 999,
        (manifest) => manifest['bootstrap'] = '../registry.js',
        (manifest) =>
            manifest['modules'][0]['dependencies'] = {'missing': '1.0.0'},
        (manifest) => manifest['modules'][0]['version'] = '^1.0.0',
        (manifest) => manifest['modules'][0]['artifact'] = 'invalid',
        (manifest) => manifest['modules'][0]['subpaths'] = null,
        (manifest) => manifest['modules'][0]['subpaths'] = ['@fixture/other'],
        (manifest) =>
            manifest['modules'][0]['subpaths'] = ['@fixture/a/../escape'],
        (manifest) => manifest['modules'][0]['subpaths'] = [
          '@fixture/a/_bindings/private',
        ],
        (manifest) => manifest['modules'][0]['subpaths'] = [
          '@fixture/a/alias',
          '@fixture/a/alias',
        ],
        (manifest) {
          manifest['modules'][0]['subpaths'] = ['@fixture/a/alias'];
          final alias = Map<String, dynamic>.from(
            manifest['modules'][0] as Map,
          );
          alias['specifier'] = '@fixture/a/alias';
          alias['owner'] = 'other-owner';
          alias['asset'] = 'assets/modules/alias.js';
          alias.remove('subpaths');
          manifest['modules'].add(alias);
        },
        (manifest) => manifest['modules'].add(manifest['modules'][0]),
      ]) {
        final fixture = _Fixture();
        mutate(fixture.manifest);
        final bundle = fixture.bundle();
        await expectLater(
          FlaxModuleAssets.load(
            bundle: bundle,
            manifest: _Fixture.manifestPath,
          ),
          throwsFormatException,
        );
        expect(bundle.reads, [_Fixture.manifestPath]);
      }
    },
  );

  test('module assets report missing scripts during preload', () async {
    final fixture = _Fixture();
    fixture.assets.remove(fixture.manifest['modules'][0]['asset']);
    await expectLater(fixture.load(), throwsStateError);
  });

  test('module assets accept recorded public subpaths without additional factories', () async {
    final fixture = _Fixture();
    fixture.module('@fixture/a')['subpaths'] = ['@fixture/a/public'];
    final assets = await fixture.load();
    expect(
      assets.moduleSpecifiers,
      fixture.manifest['modules'].map((dynamic entry) => entry['specifier']),
    );
  });

  testWidgets(
    'packed host module and bundled consumer share one lazy instance',
    (tester) async {
      final fixture = _Fixture();
      final assets = await fixture.load();
      Flax.moduleAssets = assets;
      final runtime = RuntimeTracker();
      final errors = <Object>[];
      final session = FlaxSession(
        createRuntime: () => runtime,
        bindings: registry,
        plugins: const [
          _ModulePlugin('fixture.a.first', {'@fixture/a'}),
          _ModulePlugin('fixture.a.second', {'@fixture/a'}),
        ],
        source:
            '''
if (globalThis.fixtureInitializations !== undefined) throw Error('Eager module initialization');
globalThis.fixtureValue = 7;
${fixture.business}
if (typeof globalThis.__flaxMount !== 'function') throw Error('Mount hook missing');
$source
''',
        onError: (error, _) => errors.add(error),
      );
      await tester.pumpWidget(
        MaterialApp(home: FlaxView.session(session: session)),
      );
      expect(errors, isEmpty);
      expect(_boolean(runtime, 'fixtureResult.same'), isTrue);
      expect(_number(runtime, 'fixtureInitializations'), 1);
      expect(_number(runtime, 'fixtureResult.read()'), 7);
      _execute(runtime, 'globalThis.fixtureValue = 19;');
      expect(_number(runtime, 'fixtureResult.readFromB()'), 19);
      _execute(runtime, fixture.business);
      expect(_number(runtime, 'fixtureInitializations'), 1);

      final closing = session.close();
      await tester.pumpAndSettle();
      expect(runtime.isDisposed, isFalse);
      expect(
        () => runtime.evaluate("__flaxModules.require('@fixture/a')"),
        throwsA(
          predicate((error) => error.toString().contains('FlaxSessionClosed')),
        ),
      );
      await flaxTestUnmount(tester);
      await flaxTestWaitForRuntimeDisposal(tester, runtime);
      await tester.pumpAndSettle();
      await closing;
      expect(runtime.isDisposed, isTrue);
      expect(runtime.handlesAtDispose, 0);
      expect(errors, isEmpty);
    },
  );

  testWidgets('preloaded assets are reusable without sharing session instances', (
    tester,
  ) async {
    final fixture = _Fixture();
    final assets = await fixture.load();
    Flax.moduleAssets = assets;
    final errors = <Object>[];
    for (final value in [3, 11]) {
      final runtime = RuntimeTracker();
      await tester.pumpWidget(
        MaterialApp(
          home: FlaxView(
            createRuntime: () => runtime,
            bindings: FlaxBindingRegistry([]),
            plugins: [
              _ModulePlugin(
                'fixture.a',
                const {'@fixture/a'},
                bindingModules: [flutterBindings],
              ),
            ],
            source:
                'globalThis.fixtureValue = $value;\n${fixture.business}\n$source',
            onError: (error, _) => errors.add(error),
          ),
        ),
      );
      expect(_number(runtime, 'fixtureInitializations'), 1);
      expect(_number(runtime, 'fixtureResult.readFromB()'), value);
      await flaxTestUnmount(tester);
      await flaxTestWaitForRuntimeDisposal(tester, runtime);
      await tester.pumpAndSettle();
      expect(runtime.isDisposed, isTrue);
      expect(runtime.handlesAtDispose, 0);
    }
    expect(errors, isEmpty);
  });

  testWidgets(
    'built-in component bindings satisfy packed module requirements',
    (tester) async {
      final fixture = _Fixture();
      fixture.module('@fixture/a')['bindings'] = [
        {
          'moduleId': 'flax.core/components',
          'uiProtocol': flaxBindingVersion,
          'types': [
            'flax.core/components#type:State',
            'flax.core/components#type:StatefulWidget',
          ],
          'functions': <String>[],
        },
      ];
      Flax.moduleAssets = await fixture.load();
      final runtime = RuntimeTracker();
      final errors = <Object>[];
      await tester.pumpWidget(
        MaterialApp(
          home: FlaxView(
            createRuntime: () => runtime,
            bindings: registry,
            plugins: const [
              _ModulePlugin('fixture.a', {'@fixture/a'}),
            ],
            source:
                'globalThis.fixtureValue = 5;\n${fixture.business}\n$source',
            onError: (error, _) => errors.add(error),
          ),
        ),
      );
      expect(errors, isEmpty);
      expect(_number(runtime, 'fixtureResult.read()'), 5);
      await flaxTestUnmount(tester);
      await flaxTestWaitForRuntimeDisposal(tester, runtime);
      await tester.pumpAndSettle();
      expect(runtime.isDisposed, isTrue);
      expect(runtime.handlesAtDispose, 0);
    },
  );

  for (final missingModule in [true, false]) {
    testWidgets(
      'module requirements reject ${missingModule ? 'missing' : 'incomplete'} Dart bindings',
      (tester) async {
        final fixture = _Fixture();
        fixture.module('@fixture/a')['bindings'] = [
          {
            'moduleId': missingModule
                ? 'fixture.missing'
                : flutterBindings.moduleId,
            'uiProtocol': flaxBindingVersion,
            'types': <String>[],
            'functions': ['fixture.missing.read'],
          },
        ];
        Flax.moduleAssets = await fixture.load();
        final runtime = RuntimeTracker();
        final errors = <Object>[];
        await tester.pumpWidget(
          MaterialApp(
            home: FlaxView(
              createRuntime: () => runtime,
              source: 'throw Error("Business must not run")',
              bindings: registry,
              plugins: const [
                _ModulePlugin('fixture.a', {'@fixture/a'}),
              ],
              onError: (error, _) => errors.add(error),
            ),
          ),
        );
        expect(errors, hasLength(1));
        expect(
          errors.single.toString(),
          contains(
            missingModule
                ? 'Missing or incompatible Dart bindings'
                : 'Incomplete Dart bindings',
          ),
        );
        expect(runtime.isDisposed, isTrue);
        expect(runtime.handlesAtDispose, 0);
        await flaxTestUnmount(tester);
        await flaxTestWaitForRuntimeDisposal(tester, runtime);
      },
    );
  }

  testWidgets('missing host request fails before business source executes', (
    tester,
  ) async {
    final fixture = _Fixture();
    fixture.module('@fixture/a')['bindings'] = [
      {
        'moduleId': 'fixture.missing',
        'uiProtocol': flaxBindingVersion,
        'types': <String>[],
        'functions': <String>[],
      },
    ];
    Flax.moduleAssets = await fixture.load();
    final runtime = RuntimeTracker();
    final errors = <Object>[];
    await tester.pumpWidget(
      MaterialApp(
        home: FlaxView(
          createRuntime: () => runtime,
          source: 'globalThis.absentRequestRan = true;\n$source',
          bindings: registry,
          plugins: const [
            _ModulePlugin('fixture.missing', {'@fixture/not-hosted'}),
          ],
          onError: (error, _) => errors.add(error),
        ),
      ),
    );
    expect(errors, hasLength(1));
    expect(errors.single.toString(), contains('Missing prepared Flax module'));
    expect(runtime.isDisposed, isTrue);
    expect(runtime.handlesAtDispose, 0);
    await flaxTestUnmount(tester);
    await flaxTestWaitForRuntimeDisposal(tester, runtime);
    await tester.pumpAndSettle();
    expect(runtime.isDisposed, isTrue);
    expect(runtime.handlesAtDispose, 0);
  });

  testWidgets('module dependency selection is cycle safe', (tester) async {
    final fixture = _Fixture()..addDependencyCycle();
    Flax.moduleAssets = await fixture.load();
    final runtime = RuntimeTracker();
    final errors = <Object>[];
    await tester.pumpWidget(
      MaterialApp(
        home: FlaxView(
          createRuntime: () => runtime,
          source: 'globalThis.fixtureValue = 23;\n${fixture.business}\n$source',
          bindings: registry,
          plugins: const [
            _ModulePlugin('fixture.a', {'@fixture/a'}),
          ],
          onError: (error, _) => errors.add(error),
        ),
      ),
    );
    expect(errors, isEmpty);
    expect(_number(runtime, 'fixtureInitializations'), 1);
    expect(_number(runtime, 'fixtureResult.readFromB()'), 23);
    await flaxTestUnmount(tester);
    await flaxTestWaitForRuntimeDisposal(tester, runtime);
    await tester.pumpAndSettle();
    expect(runtime.isDisposed, isTrue);
    expect(runtime.handlesAtDispose, 0);
  });

  for (final invalidRegistry in [true, false]) {
    testWidgets(
      'failed ${invalidRegistry ? 'registry' : 'factory asset'} installation preserves its error and releases handles',
      (tester) async {
        final fixture = _Fixture();
        final expected = invalidRegistry
            ? 'Incompatible prepared Flax module registry'
            : 'module asset failed';
        if (invalidRegistry) {
          fixture.assets[fixture.manifest['bootstrap'] as String] =
              '({format: "wrong"})';
        } else {
          final asset = fixture.manifest['modules'][0]['asset'] as String;
          fixture.assets[asset] =
              '${fixture.assets[asset]}\nthrow Error("module asset failed");';
        }
        Flax.moduleAssets = await fixture.load();
        final runtime = RuntimeTracker();
        final errors = <Object>[];
        await tester.pumpWidget(
          MaterialApp(
            home: FlaxView(
              createRuntime: () => runtime,
              source: 'throw Error("Business must not run")',
              bindings: registry,
              plugins: const [
                _ModulePlugin('fixture.a', {'@fixture/a'}),
              ],
              onError: (error, _) => errors.add(error),
            ),
          ),
        );
        expect(errors, hasLength(1));
        expect(errors.single.toString(), contains(expected));
        expect(runtime.isDisposed, isTrue);
        expect(runtime.handlesAtDispose, 0);
        await flaxTestUnmount(tester);
        await flaxTestWaitForRuntimeDisposal(tester, runtime);
      },
    );
  }
}

bool _boolean(RuntimeTracker runtime, String expression) =>
    (runtime.evaluate(expression) as FlaxJsBoolean).value;

num _number(RuntimeTracker runtime, String expression) =>
    (runtime.evaluate(expression) as FlaxJsNumber).value;

void _execute(RuntimeTracker runtime, String script) {
  final result = runtime.evaluate('$script\nundefined;');
  if (result is FlaxJsObject) result.release();
}

class _Fixture {
  _Fixture() {
    final data = jsonDecode(
      flaxTestFixtureFile('module_delivery.json', packageName: 'flax'),
    ) as Map<String, dynamic>;
    manifest = data['manifest'] as Map<String, dynamic>;
    assets = (data['assets'] as Map<String, dynamic>).cast<String, String>();
    business = data['business'] as String;
  }
  static const manifestPath = 'assets/modules/modules.json';
  late final Map<String, dynamic> manifest;
  late final Map<String, String> assets;
  late final String business;

  _Bundle bundle() => _Bundle({...assets, manifestPath: jsonEncode(manifest)});
  Future<FlaxModuleAssets> load() =>
      FlaxModuleAssets.load(bundle: bundle(), manifest: manifestPath);

  Map<String, dynamic> module(String specifier) =>
      (manifest['modules'] as List<dynamic>)
          .cast<Map<String, dynamic>>()
          .singleWhere((module) => module['specifier'] == specifier);

  void addDependencyCycle() {
    final core = module('@fixture/base/bindings');
    core['dependencies'] = {'@fixture/a': '1.0.0'};
    final asset = core['asset'] as String;
    assets[asset] = assets[asset]!.replaceFirst(
      '"dependencies":{}',
      '"dependencies":{"@fixture/a":"1.0.0"}',
    );
  }
}

class _Bundle extends CachingAssetBundle {
  _Bundle(this.sources);
  final Map<String, String> sources;
  final reads = <String>[];

  @override
  Future<String> loadString(String key, {bool cache = true}) async {
    reads.add(key);
    return sources[key] ?? (throw StateError('Missing module asset: $key'));
  }

  @override
  Future<ByteData> load(String key) async {
    reads.add(key);
    final source = sources[key];
    if (source == null) throw StateError('Missing module asset: $key');
    return ByteData.sublistView(Uint8List.fromList(utf8.encode(source)));
  }
}

class _ModulePlugin extends FlaxPlugin {
  const _ModulePlugin(
    this.id,
    this.jsModules, {
    this.bindingModules = const [],
  });

  @override
  final String id;
  @override
  final Set<String> jsModules;
  @override
  final List<FlaxBindingModule> bindingModules;

  @override
  Set<String> get globals => const {};

  @override
  FlaxPluginInstance install(FlaxHostContext context) =>
      const _NoopPluginInstance();
}

class _NoopPluginInstance implements FlaxPluginInstance {
  const _NoopPluginInstance();

  @override
  void close() {}

  @override
  void dispose() {}
}
