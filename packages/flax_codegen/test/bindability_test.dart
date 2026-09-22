import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/element/element.dart';
import 'package:analyzer/dart/element/type.dart';
import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

void main() {
  final repoRoot = _repoRoot();
  final packageRoot = p.join(repoRoot, 'packages/flax_codegen');
  late AnalysisContextCollection collection;

  setUpAll(() {
    collection = AnalysisContextCollection(
      includedPaths: [p.absolute(repoRoot)],
    );
  });
  tearDownAll(() => collection.dispose());

  FlaxCodegenBindingConfig fixture(
    String filename,
    Map<String, FlaxCodegenClassSelection> classes,
  ) => FlaxCodegenBindingConfig(
    'bindability',
    Uri.file(p.join(packageRoot, 'test/fixtures/bindability', filename))
        .toString(),
    '@example/bindability',
    'unused.dart',
    'unused.ts',
    classes,
  );

  Future<InterfaceElement> loadType(String uri, String name) async {
    final result = await collection.contexts.first.currentSession
        .getLibraryByUri(uri);
    if (result is! LibraryElementResult) {
      fail('Cannot resolve $uri');
    }
    final element = result.element.exportNamespace.definedNames2[name];
    if (element is! InterfaceElement) {
      fail('Missing type $name in $uri');
    }
    return element;
  }

  test('automatic library proposal covers ordinary declarations and Widget overlays', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final library = fixture('auto_library.dart', const {}).library;
    final proposal = await parser.proposeLibrary(
      FlaxCodegenBindingConfig(
        'auto_library',
        library,
        '@example/auto-library',
        'unused.dart',
        'unused.ts',
        const {'BuildContext': FlaxCodegenClassSelection({}, kind: 'context')},
        additionalLibraries: const ['package:flutter/widgets.dart'],
      ),
    );

    final config = proposal.config;
    expect(config.classes, isNot(contains('AutoInternal')));
    expect(config.functions, isNot(contains('createInternal')));
    expect(config.classes['AutoVisible']!.getters, contains('label'));
    expect(
      config.classes['AutoVisible']!.getters,
      isNot(contains('testingLabel')),
    );
    expect(
      config.classes['AutoVisible']!.instanceMethods,
      isNot(contains('protectedAction')),
    );
    expect(config.types, contains('AutoMode'));
    expect(config.typedefs, contains('LabelBuilder'));
    expect(config.functions.keys, contains('autoGreeting'));
    expect(config.classes['AutoStore']!.typeArguments, ['String']);
    expect(config.classes, isNot(contains('ConflictedStore')));
    expect(config.classes, isNot(contains('ConflictedStoreUser')));
    expect(config.classes, isNot(contains('AutoSet')));
    expect(
      proposal.skips.where((skip) => skip.target == 'AutoSet').single.reason,
      contains('Custom core collection subclasses'),
    );
    expect(
      proposal.skips
          .where((skip) => skip.target == 'ConflictedStore')
          .map((skip) => skip.reason),
      contains(contains('Explicit runtime type arguments required')),
    );
    expect(config.topLevel!.getters, containsAll(['autoLimit', 'autoMutable']));
    expect(config.topLevel!.setters, contains('autoMutable'));
    expect(config.classes['AutoPreferred']!.kind, 'widgetInterface');
    expect(
      config.classes['AutoTile']!.widgetInterfaces,
      contains('AutoPreferred'),
    );
    expect(config.classes['AutoList']?.independentWidgetCallbacks, isEmpty);
    final callbackShapes = config.classes['AutoCallbackShapes']!;
    expect(callbackShapes.independentWidgetCallbacks, isEmpty);
    expect(
      callbackShapes.constructors[''],
      containsAll([
        'emptyBuilder',
        'indexBuilder',
        'nullableBuilder',
        'contextBuilder',
        'childrenBuilder',
        'indexChildrenBuilder',
      ]),
      reason: proposal.skips
          .where((skip) => skip.target.contains('AutoCallbackShapes'))
          .map((skip) => '${skip.target}: ${skip.reason}')
          .join('\n'),
    );
    expect(
      config.classes['AutoObjectWidgetFactory']!.constructors[''],
      contains('builder'),
    );
    final deferred = config.classes['AutoDeferredWidgetCallbacks']!;
    for (final name in [
      'nullableList',
      'nullableItems',
      'iterableWidgets',
      'setWidgets',
      'mapWidgets',
      'futureWidget',
      'futureOrWidget',
      'streamWidget',
      'futureWidgets',
      'streamWidgets',
    ]) {
      expect(deferred.constructors[''], isNot(contains(name)), reason: name);
    }
    for (final name in ['futureWidget', 'futureOrWidget', 'streamWidget']) {
      expect(
        proposal.skips
            .where((skip) => skip.target.endsWith('.$name'))
            .map((skip) => skip.reason),
        contains(contains('Unsupported mounted Widget callback result')),
        reason: name,
      );
    }

    final module = await parser.parse(config);
    expect(
      module.classes.map((type) => type.name),
      containsAll([
        'AutoPreferred',
        'AutoTile',
        'AutoList',
        'AutoCallbackShapes',
        'AutoObjectWidgetFactory',
        'AutoDeferredWidgetCallbacks',
      ]),
    );
    expect(module.functions.single.call.name, 'autoGreeting');
    expect(module.typedefs.single.name, 'LabelBuilder');
    expect(
      module.topLevel!.getters.map((getter) => getter.name),
      containsAll(['autoLimit', 'autoMutable']),
    );
    final autoList = module.classes.singleWhere(
      (type) => type.name == 'AutoList',
    );
    expect(
      autoList.constructors.single.parameters
          .singleWhere((parameter) => parameter.name == 'itemBuilder')
          .independentWidgetResult,
      isFalse,
    );
    final callbackShapeModel = module.classes.singleWhere(
      (type) => type.name == 'AutoCallbackShapes',
    );
    final callbackShapeParams = {
      for (final parameter in callbackShapeModel.constructors.single.parameters)
        parameter.name: parameter,
    };
    for (final name in [
      'emptyBuilder',
      'indexBuilder',
      'nullableBuilder',
      'contextBuilder',
      'childrenBuilder',
      'indexChildrenBuilder',
    ]) {
      expect(
        callbackShapeParams[name]!.independentWidgetResult,
        isFalse,
        reason: name,
      );
    }
    expect(callbackShapeParams['emptyBuilder']!.type.result!.kind, 'widget');
    expect(
      callbackShapeParams['indexBuilder']!.type.parameters.single.type.kind,
      'int',
    );
    expect(
      callbackShapeParams['nullableBuilder']!.type.result!.nullable,
      isTrue,
    );
    expect(
      callbackShapeParams['contextBuilder']!.type.parameters.map(
        (p) => p.type.kind,
      ),
      ['context', 'int'],
    );
    expect(callbackShapeParams['childrenBuilder']!.type.result!.kind, 'list');
    expect(
      callbackShapeParams['indexChildrenBuilder']!.type.result!.item!.kind,
      'widget',
    );
    final objectFactory = module.classes.singleWhere(
      (type) => type.name == 'AutoObjectWidgetFactory',
    );
    final objectBuilder = objectFactory.constructors.single.parameters
        .singleWhere((parameter) => parameter.name == 'builder');
    expect(objectBuilder.type.result!.kind, 'widget');
    expect(objectBuilder.independentWidgetResult, isFalse);
  });

  test(
    'legacy independent Widget metadata does not require BuildContext',
    () async {
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      final source = fixture('auto_library.dart', const {});
      final module = await parser.parse(
        FlaxCodegenBindingConfig(
          'legacy-independent-widget',
          source.library,
          '@example/legacy-independent-widget',
          'unused.dart',
          'unused.ts',
          const {
            'AutoCallbackShapes': FlaxCodegenClassSelection(
              {
                '': [
                  'emptyBuilder',
                  'indexBuilder',
                  'nullableBuilder',
                  'contextBuilder',
                  'childrenBuilder',
                  'indexChildrenBuilder',
                ],
              },
              independentWidgetCallbacks: {
                '': ['emptyBuilder'],
              },
            ),
          },
          additionalLibraries: const ['package:flutter/widgets.dart'],
        ),
      );
      final builder = module.classes.single.constructors.single.parameters
          .singleWhere((parameter) => parameter.name == 'emptyBuilder');
      expect(builder.name, 'emptyBuilder');
      expect(builder.type.parameters, isEmpty);
      expect(builder.type.result!.kind, 'widget');
      expect(builder.independentWidgetResult, isTrue);
    },
  );

  test(
    'excluded types do not return through automatic dependency closure',
    () async {
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      final proposal = await parser.proposeLibrary(
        fixture('auto_library.dart', const {}),
        overrides: const FlaxCodegenAutoOverrides(exclude: ['AutoStore']),
      );
      expect(proposal.config.classes, isNot(contains('AutoStore')));
      expect(proposal.config.classes, isNot(contains('AutoStoreUser')));
      expect(proposal.config.functions, contains('autoGreeting'));
      expect(
        proposal.skips.map((skip) => skip.target),
        contains('AutoStoreUser'),
      );
    },
  );

  test(
    'automatic library proposal reuses dependency Widget interfaces',
    () async {
      final providerParser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(providerParser.dispose);
      final providerUri = fixture(
        'auto_widget_interface_provider.dart',
        const {},
      ).library;
      final provider = await providerParser.parse(
        FlaxCodegenBindingConfig(
          'auto_widget_interface_provider',
          providerUri,
          '@example/auto-widget-interface-provider',
          'unused.dart',
          'unused.ts',
          const {
            'ExternalPreferred': FlaxCodegenClassSelection(
              {},
              kind: 'widgetInterface',
              getters: ['extent'],
            ),
          },
          additionalLibraries: const ['package:flutter/widgets.dart'],
        ),
      );

      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      parser.prepareModules([provider]);
      final consumerUri = fixture(
        'auto_widget_interface_consumer.dart',
        const {},
      ).library;
      final proposal = await parser.proposeLibrary(
        FlaxCodegenBindingConfig(
          'auto_widget_interface_consumer',
          consumerUri,
          '@example/auto-widget-interface-consumer',
          'unused.dart',
          'unused.ts',
          const {},
          additionalLibraries: const ['package:flutter/widgets.dart'],
        ),
      );

      expect(
        proposal.config.classes['ExternalPreferredTile']!.widgetInterfaces,
        ['ExternalPreferred'],
      );
      final module = await parser.parse(proposal.config);
      expect(
        module.classes
            .singleWhere((type) => type.name == 'ExternalPreferredTile')
            .widgetInterfaces,
        hasLength(1),
      );
    },
  );

  test(
    'two consumers reuse imported Core providers without redeclaring them',
    () async {
      final ownerParser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(ownerParser.dispose);
      final owner = await ownerParser.parse(
        FlaxCodegenBindingConfig(
          'core',
          'dart:core',
          '@example/core',
          'unused.dart',
          'unused.ts',
          const {
            'DateTime': FlaxCodegenClassSelection(
              {
                'fromMillisecondsSinceEpoch': [
                  'millisecondsSinceEpoch',
                  'isUtc',
                ],
              },
              kind: 'object',
              getters: ['year'],
            ),
            'Uri': FlaxCodegenClassSelection(
              {},
              methods: {
                'parse': ['uri', 'start', 'end'],
              },
              kind: 'object',
              getters: ['host'],
            ),
            'StringBuffer': FlaxCodegenClassSelection(
              {
                '': ['content'],
              },
              kind: 'object',
              getters: ['length'],
            ),
          },
        ),
      );
      for (final consumer in ['first', 'second']) {
        final parser = FlaxCodegenBindingParser(repoRoot);
        addTearDown(parser.dispose);
        parser.prepareModules([owner]);
        final config = fixture('core_values.dart', const {
          'CoreValues': FlaxCodegenClassSelection(
            {
              '': ['date', 'uri', 'buffer'],
            },
            kind: 'object',
            getters: ['date', 'uri', 'buffer'],
          ),
        });
        for (final name in ['DateTime', 'Uri', 'StringBuffer']) {
          final proposed = await parser.proposeSelection(
            await loadType('dart:core', name),
            library: config,
          );
          expect(proposed.provider, '@example/core', reason: consumer);
          expect(proposed.reusesProvider, isTrue);
          expect(proposed.selection, isNull);
          expect(proposed.skips, isEmpty);
        }
        final module = await parser.parse(config);
        expect(module.classes.map((type) => type.name), ['CoreValues']);
        expect(module.classes.single.getters.map((getter) => getter.type.id), [
          'dart:core::DateTime',
          'dart:core::Uri',
          'dart:core::StringBuffer',
        ]);
      }
    },
  );

  test('imported provider reports insufficient surface and incompatible adaptation', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final ownerParser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(ownerParser.dispose);
    final owner = await ownerParser.parse(
      FlaxCodegenBindingConfig(
        'core',
        'dart:core',
        '@example/core',
        'unused.dart',
        'unused.ts',
        const {
          'DateTime': FlaxCodegenClassSelection(
            {},
            kind: 'object',
            getters: ['year'],
          ),
        },
      ),
    );
    parser.prepareModules([owner]);
    final config = fixture('core_values.dart', const {});
    final element = await loadType('dart:core', 'DateTime');
    final sufficient = await parser.proposeSelection(
      element,
      library: config,
      base: const FlaxCodegenClassSelection(
        {},
        kind: 'object',
        getters: ['year'],
      ),
    );
    expect(sufficient.skips, isEmpty);
    final insufficient = await parser.proposeSelection(
      element,
      library: config,
      base: const FlaxCodegenClassSelection({'now': []}, getters: ['day']),
    );
    expect(insufficient.selection, isNull);
    expect(
      insufficient.skips.map((skip) => skip.target),
      containsAll(['DateTime.day', 'DateTime.now']),
    );
    expect(
      insufficient.skips.every(
        (skip) =>
            skip.reason.contains('Provider surface insufficient') &&
            skip.reason.contains('Dependency path:') &&
            skip.reason.contains('Suggested provider additions:'),
      ),
      isTrue,
    );
    expect(
      insufficient.skips
          .firstWhere((skip) => skip.target == 'DateTime.day')
          .reason,
      contains('getters:\n    - day'),
    );
    expect(
      insufficient.skips
          .firstWhere((skip) => skip.target == 'DateTime.now')
          .reason,
      contains('constructors:\n    - now: []'),
    );
    final incompatible = await parser.proposeSelection(
      element,
      library: config,
      base: const FlaxCodegenClassSelection({}, genericScalar: true),
    );
    expect(
      incompatible.skips.single.reason,
      contains('Owner adaptation is incompatible'),
    );
    expect(incompatible.skips.single.reason, contains('Dependency path:'));
  });

  test('skips a bad optional parameter and parses the rest', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final config = fixture('objects.dart', const {});
    final proposed = await parser.proposeSelection(
      await loadType(config.library, 'Partial'),
      library: config,
    );
    expect(proposed.bindable, isTrue);
    expect(proposed.selection!.constructors[''], ['ok']);
    expect(proposed.skips.map((skip) => skip.target), contains('Partial.bad'));

    final parsed = await parser.parse(
      fixture('objects.dart', {'Partial': proposed.selection!}),
    );
    expect(parsed.classes.single.name, 'Partial');
    expect(
      parsed.classes.single.constructors.single.parameters.single.name,
      'ok',
    );
  });

  test(
    'explicit YAML still fails closed for a listed unbound parameter',
    () async {
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      await expectLater(
        parser.parse(
          fixture('objects.dart', {
            'Partial': const FlaxCodegenClassSelection({
              '': ['ok', 'bad'],
            }, kind: 'object'),
          }),
        ),
        throwsA(
          isA<StateError>().having(
            (error) => error.message,
            'message',
            contains('Unsupported core type'),
          ),
        ),
      );
    },
  );

  test('defaults unconstrained generics to Object?', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final config = fixture('objects.dart', const {});
    final proposed = await parser.proposeSelection(
      await loadType(config.library, 'Box'),
      library: config,
    );
    expect(proposed.selection!.typeArguments, ['Object?']);
    expect(proposed.selection!.constructors[''], ['value']);

    final parsed = await parser.parse(
      fixture('objects.dart', {'Box': proposed.selection!}),
    );
    expect(parsed.classes.single.typeArguments, ['Object?']);

    await expectLater(
      parser.parse(
        fixture('objects.dart', {
          'Box': const FlaxCodegenClassSelection({
            '': ['value'],
          }, kind: 'object'),
        }),
      ),
      throwsA(
        isA<StateError>().having(
          (error) => error.message,
          'message',
          contains('Explicit runtime type arguments required'),
        ),
      ),
    );
  });

  test('caps omitWhenAbsent parameters per constructor', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final config = fixture('objects.dart', const {});
    final proposed = await parser.proposeSelection(
      await loadType(config.library, 'Fat'),
      library: config,
    );
    expect(proposed.selection!.constructors[''], [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ]);
    expect(
      proposed.skips.map((skip) => skip.reason),
      contains(
        'omitWhenAbsent cap ${FlaxCodegenBindability.omitWhenAbsentCap}',
      ),
    );
    final parsed = await parser.parse(
      fixture('objects.dart', {'Fat': proposed.selection!}),
    );
    expect(parsed.classes.single.constructors.single.parameters, hasLength(6));
  });

  test('skips File and keeps remaining bindable parameters', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final config = fixture('objects.dart', const {});
    final proposed = await parser.proposeSelection(
      await loadType(config.library, 'Holder'),
      library: config,
    );
    expect(proposed.selection!.constructors[''], ['ok']);
    expect(proposed.skips.map((skip) => skip.target), contains('Holder.file'));
    await parser.parse(
      fixture('objects.dart', {'Holder': proposed.selection!}),
    );
  });

  test('does not auto-select Widget getters or methods', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final config = fixture('widget_probe.dart', const {});
    final proposed = await parser.proposeSelection(
      await loadType(config.library, 'ProbeBox'),
      library: config,
    );
    expect(proposed.bindable, isTrue);
    expect(proposed.selection!.kind, isNull);
    expect(proposed.selection!.constructors[''], ['label']);
    expect(proposed.selection!.getters, isEmpty);
    expect(proposed.selection!.instanceMethods, isEmpty);
    expect(
      proposed.skips.map((skip) => skip.target),
      containsAll(['ProbeBox.title', 'ProbeBox.poke', 'ProbeBox.build']),
    );
    await parser.parse(
      fixture('widget_probe.dart', {'ProbeBox': proposed.selection!}),
    );

    await expectLater(
      parser.parse(
        fixture('widget_probe.dart', {
          'ProbeBox': const FlaxCodegenClassSelection(
            {
              '': ['label'],
            },
            getters: ['title'],
          ),
        }),
      ),
      throwsA(
        isA<StateError>().having(
          (error) => error.message,
          'message',
          contains('Value getters require selected constructor fields'),
        ),
      ),
    );
  });

  test('skips a Widget with no bindable constructors', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final config = fixture('widget_probe.dart', const {});
    final proposed = await parser.proposeSelection(
      await loadType(config.library, 'RequiredUriBox'),
      library: config,
    );
    expect(proposed.bindable, isFalse);
    expect(proposed.selection, isNull);
    expect(
      proposed.skips.map((skip) => skip.reason),
      contains('No bindable constructors'),
    );
  });

  test('skips an object with no bindable members', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final config = fixture('objects.dart', const {});
    final hidden = await parser.proposeSelection(
      await loadType(config.library, 'Hidden'),
      library: config,
    );
    expect(hidden.bindable, isFalse);
    expect(hidden.selection, isNull);
    expect(
      hidden.skips.map((skip) => skip.reason),
      contains('No bindable members'),
    );

    final requiredFile = await parser.proposeSelection(
      await loadType(config.library, 'RequiredFile'),
      library: config,
    );
    expect(requiredFile.bindable, isFalse);
    expect(requiredFile.selection, isNull);
    expect(
      requiredFile.skips.map((skip) => skip.reason),
      contains('No bindable members'),
    );
  });

  test('binds direct List<Widget> callback arguments', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final config = fixture('widget_probe.dart', const {});
    final proposed = await parser.proposeSelection(
      await loadType(config.library, 'Wall'),
      library: config,
    );
    expect(proposed.selection!.kind, 'object');
    expect(proposed.selection!.constructors[''], ['buildAll', 'ok']);
    expect(
      proposed.skips.map((skip) => skip.target),
      isNot(contains('Wall.buildAll')),
    );
    await parser.parse(
      fixture('widget_probe.dart', {'Wall': proposed.selection!}),
    );
    final module = await parser.parse(
      fixture('widget_probe.dart', const {
        'Wall': FlaxCodegenClassSelection({
          '': ['buildAll'],
        }, kind: 'object'),
      }),
    );
    final callback =
        module.classes.single.constructors.single.parameters.single.type;
    expect(callback.parameters.single.type.kind, 'list');
    expect(callback.parameters.single.type.item!.kind, 'widget');
  });

  test('binds direct List<Widget> callback setter arguments', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final config = fixture('widget_probe.dart', const {});
    final proposed = await parser.proposeSelection(
      await loadType(config.library, 'WidgetWrites'),
      library: config,
    );
    expect(proposed.selection!.setters, ['builder']);
    expect(
      proposed.skips.map((skip) => skip.target),
      isNot(contains('WidgetWrites.builder=')),
    );
    final module = await parser.parse(
      fixture('widget_probe.dart', const {
        'WidgetWrites': FlaxCodegenClassSelection(
          {},
          kind: 'object',
          setters: ['builder'],
        ),
      }),
    );
    final callback = module.classes.single.setters.single.type;
    expect(callback.parameters.single.type.kind, 'list');
    expect(callback.parameters.single.type.item!.kind, 'widget');
  });

  test('keeps other Widget callback collections fail-closed', () async {
    for (final name in [
      'SetWidgetCallbackWall',
      'MapWidgetCallbackWall',
      'FutureWidgetListCallbackWall',
      'NullableWidgetListCallbackWall',
    ]) {
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      await expectLater(
        parser.parse(
          fixture('widget_probe.dart', {
            name: const FlaxCodegenClassSelection({
              '': ['callback'],
            }, kind: 'object'),
          }),
        ),
        throwsA(
          isA<StateError>().having(
            (error) => error.message,
            'callback collection diagnostic',
            contains('Unsupported input callback signature'),
          ),
        ),
        reason: name,
      );
    }
  });

  test(
    'proxy Widget properties fail with their accessor or result position',
    () async {
      for (final (name, reason) in [
        (
          'WidgetProperty',
          'Unsupported proxy property: WidgetProperty.get:child',
        ),
        (
          'WidgetCollectionProperty',
          'Unsupported proxy property: WidgetCollectionProperty.get:children',
        ),
      ]) {
        final parser = FlaxCodegenBindingParser(repoRoot);
        addTearDown(parser.dispose);
        await expectLater(
          parser.parse(
            fixture('widget_probe.dart', {
              name: const FlaxCodegenClassSelection(
                {},
                kind: 'object',
                proxy: 'implements',
              ),
            }),
          ),
          throwsA(
            isA<StateError>().having(
              (error) => error.message,
              'message',
              reason,
            ),
          ),
        );
      }
    },
  );

  test('reuses a prepared pool Duration without a local export', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final core = FlaxCodegenBindingConfig.read(
      p.join(repoRoot, 'packages/flax/bindings/config.yaml'),
    );
    await parser.prepare([core]);
    final waitLibrary = fixture('duration_user.dart', const {});
    final duration = await loadType('dart:core', 'Duration');
    final already = await parser.proposeSelection(duration, library: core);
    expect(already.bindable, isFalse);
    expect(already.skips.single.reason, 'Already adapted');

    final proposed = await parser.proposeSelection(
      await loadType(waitLibrary.library, 'Wait'),
      library: waitLibrary,
    );
    expect(proposed.selection!.constructors[''], ['delay']);
    final parsed = await parser.parse(
      fixture('duration_user.dart', {'Wait': proposed.selection!}),
    );
    expect(parsed.classes.map((type) => type.name), ['Wait']);
    expect(parsed.typeLibraries['Duration'], isNotNull);
    expect(
      parsed.classes.map((type) => type.name),
      isNot(contains('Duration')),
    );

    final isolated = FlaxCodegenBindingParser(repoRoot);
    addTearDown(isolated.dispose);
    await expectLater(
      isolated.parse(
        fixture('duration_user.dart', {
          'Wait': const FlaxCodegenClassSelection({
            '': ['delay'],
          }, kind: 'object'),
        }),
      ),
      throwsA(
        isA<StateError>().having(
          (error) => error.message,
          'message',
          contains('Unsupported core type'),
        ),
      ),
    );
  });

  test(
    'resolves foreign declarations before checking Widget and enum exports',
    () async {
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      final config = fixture('identity_types.dart', const {});
      final proposed = await parser.proposeSelection(
        await loadType(config.library, 'Box'),
        library: config,
      );
      expect(proposed.bindable, isTrue);
      expect(proposed.selection!.constructors[''], ['child', 'axis']);
      expect(
        proposed.skips.map((skip) => skip.target),
        isNot(contains('Box.child')),
      );
      expect(
        proposed.skips.map((skip) => skip.target),
        isNot(contains('Box.axis')),
      );

      final parsed = await parser.parse(
        fixture('identity_types.dart', {'Box': proposed.selection!}),
      );
      expect(
        parsed.classes.single.constructors.single.parameters.map(
          (p) => p.type.kind,
        ),
        ['widget', 'enum'],
      );
    },
  );

  test('rejects a same-name declaration from a different library', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final config = fixture('identity_types.dart', const {});
    await expectLater(
      parser.proposeSelection(
        await loadType(fixture('objects.dart', const {}).library, 'Box'),
        library: config,
      ),
      throwsA(
        isA<StateError>().having(
          (error) => error.message,
          'message',
          contains('not exported by'),
        ),
      ),
    );
  });

  test(
    'proposes substituted generic callbacks without a parameter library',
    () async {
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      final config = fixture('generic_callbacks.dart', const {});
      final element = await loadType(config.library, 'GenericCallbacks');
      final callback = element.getField('callback')!.type as FunctionType;
      expect(callback.typeParameters.single.library, isNull);
      expect(callback.typeParameters.single.bound, isNull);

      final proposed = await parser.proposeSelection(element, library: config);
      expect(proposed.selection!.constructors[''], ['callback', 'bounded']);
    },
  );

  test(
    'parses generic callback defaults and preserves explicit bounds',
    () async {
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      final parsed = await parser.parse(
        fixture('generic_callbacks.dart', {
          'GenericCallbacks': const FlaxCodegenClassSelection({
            '': ['callback', 'bounded'],
          }, kind: 'object'),
        }),
      );
      final parameters = parsed.classes.single.constructors.single.parameters;
      final callback = parameters.first.type;
      final generic = callback.typeParameters.single;
      expect(generic.bound.kind, 'any');
      expect(generic.bound.nullable, isTrue);
      expect(generic.defaultType!.kind, 'any');
      expect(generic.defaultType!.nullable, isTrue);
      expect(callback.parameters.first.type.kind, 'any');
      expect(callback.result!.kind, 'any');
      expect(
        callback.parameters.first.type.declaration!.genericIdentity,
        same(generic.genericIdentity),
      );
      expect(
        callback.result!.declaration!.genericIdentity,
        same(generic.genericIdentity),
      );
      final bounded = parameters.last.type.typeParameters.single;
      expect(bounded.bound.kind, 'num');
      expect(bounded.bound.nullable, isFalse);
      expect(bounded.defaultType!.kind, 'num');
    },
  );

  test(
    'classifies ordinary proxy capability without lifecycle overlap',
    () async {
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      final uri = Uri.file(
        p.join(
          packageRoot,
          'test/fixtures/capability/class_modifier_shapes.dart',
        ),
      ).toString();
      final config = FlaxCodegenBindingConfig(
        'proxy-capability',
        uri,
        '@example/proxy-capability',
        'unused.dart',
        'unused.ts',
        const {},
      );

      Future<FlaxCodegenProposedBinding> proposal(
        String name, {
        FlaxCodegenClassSelection? base,
      }) async => parser.proposeSelection(
        await loadType(uri, name),
        library: config,
        base: base,
      );

      for (final name in ['AbstractBox', 'InterfaceBoxImpl', 'BaseBox']) {
        final proposed = await proposal(name);
        expect(proposed.proxyCapability, FlaxCodegenProxyCapability.canExtend);
        expect(proposed.selection!.proxy, 'extends', reason: name);
      }
      for (final name in [
        'PureContract',
        'InterfaceBox',
        'AbstractInterfaceBox',
        'AmbiguousBox',
      ]) {
        final proposed = await proposal(name);
        expect(
          proposed.proxyCapability,
          FlaxCodegenProxyCapability.canImplement,
          reason: name,
        );
        expect(proposed.selection!.proxy, 'implements', reason: name);
      }
      final named = await proposal('NamedOnlyBox');
      expect(named.proxyCapability, FlaxCodegenProxyCapability.canExtend);
      expect(named.selection!.proxy, 'extends');
      expect(named.selection!.constructors.keys, ['named']);

      final disposable = await proposal('DisposableBox');
      expect(disposable.proxyCapability, FlaxCodegenProxyCapability.canExtend);
      expect(disposable.selection!.disposeMethod, 'dispose');
      expect(disposable.selection!.instanceMethods['dispose'], isEmpty);
      expect(disposable.selection!.getters, contains('inheritedValue'));
      expect(disposable.selection!.getters, isNot(contains('kind')));
      expect(disposable.selection!.setters, contains('inheritedValue'));
      expect(disposable.selection!.instanceMethods['normalize'], ['value']);
      final parsedDisposable = await parser.parse(
        FlaxCodegenBindingConfig(
          'proxy-disposable',
          uri,
          '@example/proxy-disposable',
          'unused.dart',
          'unused.ts',
          {'DisposableBox': disposable.selection!},
        ),
      );
      expect(parsedDisposable.classes.single.capabilities, ['Disposable']);

      final oddDispose = await proposal('OddDisposeBox');
      expect(oddDispose.selection!.disposeMethod, isNull);
      expect(oddDispose.selection!.instanceMethods['dispose'], ['value']);

      for (final name in ['FinalBox', 'SealedBox']) {
        final proposed = await proposal(name);
        expect(
          proposed.proxyCapability,
          FlaxCodegenProxyCapability.unsupported,
          reason: name,
        );
        expect(proposed.selection?.proxy, isNull, reason: name);
        if (name == 'SealedBox') {
          expect(proposed.selection!.constructors, isEmpty);
          await parser.parse(
            FlaxCodegenBindingConfig(
              'sealed_reference',
              uri,
              '@example/sealed',
              'unused.dart',
              'unused.ts',
              {name: proposed.selection!},
            ),
          );
        }
      }

      final explicit = await proposal(
        'AbstractBox',
        base: const FlaxCodegenClassSelection(
          {},
          kind: 'object',
          proxy: 'implements',
        ),
      );
      expect(explicit.proxyCapability, FlaxCodegenProxyCapability.canExtend);
      expect(explicit.selection!.proxy, 'implements');

      final lifecycleUri = Uri.file(
        p.join(packageRoot, 'test/fixtures/plugin/lifecycle.dart'),
      ).toString();
      final lifecycleConfig = FlaxCodegenBindingConfig(
        'proxy-lifecycle',
        lifecycleUri,
        '@example/proxy-lifecycle',
        'unused.dart',
        'unused.ts',
        const {},
      );
      final processor = await loadType(lifecycleUri, 'Processor');
      final inherited = await parser.proposeSelection(
        processor,
        library: lifecycleConfig,
      );
      expect(inherited.proxyCapability, FlaxCodegenProxyCapability.canExtend);
      expect(inherited.selection!.proxy, 'extends');

      const host = FlaxCodegenClassSelection(
        {},
        kind: 'object',
        proxy: 'host',
        proxyOverrides: ['attach'],
        proxySuper: ['attach'],
      );
      final explicitHost = await parser.proposeSelection(
        processor,
        library: lifecycleConfig,
        base: host,
      );
      expect(explicitHost.selection, same(host));
      expect(
        explicitHost.skips.map((skip) => skip.reason),
        contains('Overlay selections stay YAML-only'),
      );

      final widgetConfig = fixture('widget_probe.dart', const {});
      final widget = await parser.proposeSelection(
        await loadType(widgetConfig.library, 'ProbeBox'),
        library: widgetConfig,
      );
      expect(
        widget.proxyCapability,
        FlaxCodegenProxyCapability.flutterSemantics,
      );
    },
  );

  test('SDK generic callbacks produce proposals without crashing', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final core = FlaxCodegenBindingConfig.read(
      p.join(repoRoot, 'packages/flax/bindings/config.yaml'),
    );
    await parser.prepare([core]);
    for (final (uri, name) in [
      ('package:flutter/widgets.dart', 'WidgetsApp'),
      ('dart:async', 'ZoneSpecification'),
    ]) {
      final proposed = await parser.proposeSelection(
        await loadType(uri, name),
        library: core,
      );
      expect(proposed.name, name);
      expect(proposed.selection != null || proposed.skips.isNotEmpty, isTrue);
    }
  });
}

String _repoRoot() {
  var directory = Directory.current;
  for (var i = 0; i < 6; i++) {
    final candidate = directory.path;
    if (File(p.join(candidate, 'pubspec.yaml')).existsSync() &&
        File(p.join(candidate, 'packages/flax_codegen/pubspec.yaml'))
            .existsSync()) {
      return candidate;
    }
    directory = directory.parent;
  }
  throw StateError(
    'Cannot locate the Flax repository from ${Directory.current.path}',
  );
}
