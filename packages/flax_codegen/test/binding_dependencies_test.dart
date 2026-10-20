import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

FlaxCodegenNamedTypeModel _token(String owner, {bool privateValue = false}) =>
    FlaxCodegenNamedTypeModel(
      name: '${owner}Token',
      id: 'example/$owner-api#type:${owner}Token',
      enumNames: ['one', if (privateValue) '_hidden'],
      enumValueTypes: {
        for (final name in ['one', if (privateValue) '_hidden'])
          name: FlaxCodegenTypeRef(
            'enum',
            id: 'example/$owner-api#type:${owner}Token',
            name: '${owner}Token',
          ),
      },
    );

FlaxCodegenModuleModel _module(
  String name,
  List<FlaxCodegenNamedTypeModel> types, {
  String library = 'package:fixture/native.dart',
}) => FlaxCodegenModuleModel(
  name: name,
  moduleId: 'example/$name-api',
  library: library,
  jsPackage: '@example/$name',
  dartOutput: 'lib/$name.dart',
  tsOutput: 'js/$name.ts',
  classes: const [],
  types: types,
);

List<FlaxCodegenModuleModel> _graph({
  String library = 'package:fixture/native.dart',
  bool privateValue = false,
}) {
  final leaf = _token('Leaf', privateValue: privateValue);
  final left = _token('Left');
  final right = _token('Right');
  final core = _token('Core');
  return [
    _module('Core', [core], library: library),
    _module('Leaf', [leaf], library: library),
    _module('Left', [left, leaf], library: library),
    _module('Right', [right, leaf], library: library),
    _module('Consumer', [left, right, core], library: library),
    _module('Unused', [_token('Unused')], library: library),
  ];
}

const _entrypoints = {
  'example/Left-api': 'left.dart',
  'example/Right-api': 'right.dart',
  'example/Leaf-api': 'leaf.dart',
  'example/Unused-api': 'unused.dart',
};

void main() {
  test('Dart binding dependencies are opt-in and preserve existing IDs', () {
    final modules = _graph();
    final consumer = modules[4];
    final source = FlaxCodegenBindingEmitter(modules).dart(consumer);
    expect(
      source,
      contains(
        'dependencyModules: ["example/Core-api","example/Left-api","example/Right-api"]',
      ),
    );
    expect(source, isNot(contains('dependencies:')));
    expect(source, isNot(contains('_flaxBindings')));
    expect(
      FlaxCodegenBindingEmitter(modules, bindingEntrypoints: {}).dart(consumer),
      source,
    );
  });

  test(
    'mapped imports use the actual module name and only needed entrypoints',
    () {
      final modules = _graph();
      final consumer = modules[4];
      final emitter = FlaxCodegenBindingEmitter(
        modules,
        bindingEntrypoints: _entrypoints,
      );
      final source = emitter.dart(consumer);
      expect(source, contains('import "left.dart" as _flaxBindings0;'));
      expect(source, contains('import "right.dart" as _flaxBindings1;'));
      expect(
        source,
        contains(
          'dependencies: [_flaxBindings0.LeftBindings, _flaxBindings1.RightBindings]',
        ),
      );
      expect(source, isNot(contains('leaf.dart')));
      expect(source, isNot(contains('unused.dart')));
      expect(source, isNot(contains('.CoreBindings')));
      expect(source, isNot(contains('FlaxPlugin')));
      expect(
        emitter.dart(modules[2]),
        contains('dependencies: [_flaxBindings0.LeafBindings]'),
      );
      expect(
        FlaxCodegenBindingEmitter(
          modules.reversed.toList(),
          bindingEntrypoints: Map.fromEntries(
            _entrypoints.entries.toList().reversed,
          ),
        ).dart(consumer),
        source,
      );

      final sharedSource = FlaxCodegenBindingEmitter(
        modules,
        bindingEntrypoints: {
          ..._entrypoints,
          'example/Left-api': 'package:fixture/all_bindings.dart',
          'example/Right-api': 'package:fixture/all_bindings.dart',
        },
      ).dart(consumer);
      expect(
        RegExp('import "package:fixture/all_bindings.dart"')
            .allMatches(sharedSource),
        hasLength(1),
      );
      expect(
        sharedSource,
        contains(
          'dependencies: [_flaxBindings0.LeftBindings, _flaxBindings0.RightBindings]',
        ),
      );
    },
  );

  test(
    'mapped dependency DAGs compile and share transitive Dart modules',
    () async {
      var root = Directory.current;
      while (!Directory(p.join(root.path, 'packages/flax_codegen'))
          .existsSync()) {
        if (root.parent.path == root.path) {
          throw StateError('Missing repository');
        }
        root = root.parent;
      }
      final directory = Directory.systemTemp.createTempSync(
        'flax-binding-deps-',
      );
      addTearDown(() => directory.deleteSync(recursive: true));
      final native = File(p.join(directory.path, 'native.dart'))
        ..writeAsStringSync('''
enum CoreToken { one }
enum LeafToken { one, _hidden }
enum LeftToken { one }
enum RightToken { one }
enum UnusedToken { one }
''');
      for (final privateValue in [false, true]) {
        final path = p.join(
          directory.path,
          privateValue ? 'private' : 'constant',
        );
        Directory(path).createSync();
        final modules = _graph(
          library: native.uri.toString(),
          privateValue: privateValue,
        );
        final emitter = FlaxCodegenBindingEmitter(
          modules,
          bindingEntrypoints: _entrypoints,
        );
        for (final module in modules.skip(1).take(4)) {
          final source = emitter.dart(module);
          expect(
            source,
            contains(
              '${privateValue ? 'final' : 'const'} ${module.name}Bindings',
            ),
          );
          File(p.join(path, '${module.name.toLowerCase()}.dart'))
              .writeAsStringSync(source);
        }
      }
      final execution = File(p.join(directory.path, 'registration_test.dart'))
        ..writeAsStringSync('''
import 'package:flax/bindings.dart';
import 'package:flutter_test/flutter_test.dart';
import 'constant/consumer.dart' as constant;
import 'private/consumer.dart' as private;

void main() {
  for (final root in [constant.ConsumerBindings, private.ConsumerBindings]) {
    test('transitive registration for \${root.hashCode}', () {
      final registry = FlaxBindingRegistry([root, root.dependencies.first]);
      expect(registry.modules.map((m) => m.moduleId), [
        'example/Consumer-api', 'example/Left-api',
        'example/Leaf-api', 'example/Right-api',
      ]);
      expect(root.dependencies[0].dependencies.single,
        same(root.dependencies[1].dependencies.single));
      expect(registry.modules[2].types.single.id,
        'example/Leaf-api#type:LeafToken');
    });
  }
}
''');
      final result = await Process.run('flutter', [
        'test',
        '--no-pub',
        '--reporter',
        'expanded',
        execution.path,
      ], workingDirectory: root.path);
      expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
    },
  );

  test('mapped initializer cycles fail with their module path', () {
    final left = _token('Left');
    final right = _token('Right');
    final modules = [
      _module('Left', [left, right]),
      _module('Right', [right, left]),
    ];
    expect(
      () =>
          FlaxCodegenBindingEmitter(modules, bindingEntrypoints: _entrypoints),
      throwsA(
        isA<StateError>().having(
          (error) => error.message,
          'cycle',
          'Cyclic Dart binding dependencies: '
              'example/Left-api -> example/Right-api -> example/Left-api',
        ),
      ),
    );
    // ID-only metadata can describe cycles; only concrete Dart references must be DAGs.
    expect(
      FlaxCodegenBindingEmitter(modules).dart(modules.first),
      isNot(contains('dependencies:')),
    );
  });
}
