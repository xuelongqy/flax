import 'dart:convert';
import 'dart:io';

import 'package:flax_codegen/src/package_pipeline.dart';
import 'package:flax_codegen/src/diagnostic.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'support/core_package.dart';

void main() {
  test(
    'unprovided external signatures skip without losing local APIs',
    () async {
      final fixture = _Fixture();
      fixture.package('values', source: _values);
      final host = fixture.package(
        'host',
        source: _host,
        dependencies: ['values'],
      );
      fixture.writePackageConfig();
      final result = await FlaxCodegenPackagePipeline.validateConfig(
        p.join(host.path, 'bindings/flax_bindings.yaml'),
      );
      expect(result.localModels.single.functions.map((f) => f.call.name), [
        'own',
      ]);
      expect(
        result.skips.any(
          (s) => s.reason.contains('bindingDependencies.generate'),
        ),
        isTrue,
      );
      expect(result.localModels.single.classes.map((c) => c.name), ['Local']);
    },
  );

  test(
    'opt-in closes only needed dependency types in one local module',
    () async {
      final fixture = _Fixture();
      fixture.package('values', source: _values);
      final host = fixture.package(
        'host',
        source: _host,
        dependencies: ['values'],
        generate: ['values'],
      );
      fixture.writePackageConfig();
      final result = await FlaxCodegenPackagePipeline.validateConfig(
        p.join(host.path, 'bindings/flax_bindings.yaml'),
      );
      final local = result.localModels.singleWhere((m) => m.name == 'api');
      final dependency = result.localModels.singleWhere(
        (m) => m.name == 'dependency_values',
      );
      expect(
        local.functions.map((f) => f.call.name),
        containsAll(['own', 'nested', 'values']),
      );
      expect(
        dependency.classes.map((c) => c.name),
        unorderedEquals(['Value', 'Nested']),
      );
      expect(dependency.moduleId, 'example.host/dependency_values');
      expect(dependency.jsPackage, '@test/host/dependencies/values');
      expect(
        dependency.classes
            .singleWhere((c) => c.name == 'Value')
            .methods
            .map((m) => m.name),
        contains('sum'),
      );
      expect(dependency.classes.map((c) => c.name), isNot(contains('Unused')));
    },
  );

  test('package exclusions apply in config and library discovery', () async {
    final fixture = _Fixture();
    final host = fixture.package(
      'host',
      source: 'class Local { Local(); } class Ignored { Ignored(); }',
    );
    File(p.join(host.path, 'bindings/flax_overrides.yaml'))
        .writeAsStringSync('''
format: 2
overrides:
  exclude: [Ignored]
''');
    fixture.writePackageConfig();
    final configured = await FlaxCodegenPackagePipeline.validateConfig(
      p.join(host.path, 'bindings/flax_bindings.yaml'),
    );
    final automatic = await FlaxCodegenPackagePipeline.validateLibrary(
      'package:host/api.dart',
      packageRoot: host.path,
    );
    for (final result in [configured, automatic]) {
      expect(result.localModels.single.classes.map((c) => c.name), ['Local']);
      expect(
        result.skips.any(
          (s) => s.target == 'Ignored' && s.code == 'excluded_by_override',
        ),
        isTrue,
      );
    }
  });

  test('declared public types reuse the matching Dart provider', () async {
    final fixture = _Fixture();
    fixture.package('values', source: _values);
    final provider = fixture.package(
      'value_bindings',
      source: '',
      dependencies: ['values'],
    );
    final config = File(p.join(provider.path, 'bindings/flax_bindings.yaml'));
    config.writeAsStringSync(
      config.readAsStringSync().replaceAll(
        'package:value_bindings/api.dart',
        'package:values/api.dart',
      ),
    );
    final host = fixture.package(
      'host',
      source: _host,
      dependencies: ['values', 'value_bindings'],
      javascript: ['@test/value_bindings'],
    );
    fixture.writePackageConfig();
    final published = await FlaxCodegenPackagePipeline.generateConfig(
      config.path,
    );
    File(p.join(provider.path, 'bindings/manifest.json'))
        .writeAsStringSync(published.manifest.encode());
    final consumer = await FlaxCodegenPackagePipeline.generateConfig(
      p.join(host.path, 'bindings/flax_bindings.yaml'),
    );
    expect(consumer.localModels, hasLength(1));
    expect(consumer.localModels.single.classes.map((c) => c.name), ['Local']);
    expect(
      consumer.localModels.single.functions.map((f) => f.call.name),
      containsAll(['own', 'nested', 'values']),
    );
    expect(consumer.directDependencies.keys, contains('value_bindings'));
    expect(
      File(p.join(host.path, 'lib/src/generated/api.g.dart'))
          .readAsStringSync(),
      contains('package:value_bindings/src/generated/api.g.dart'),
    );
    final runtime = File(p.join(host.path, 'js/package.json'));
    final runtimeContents = runtime.readAsStringSync();
    runtime.writeAsStringSync('{"name":"@test/host-runtime"}');
    await expectLater(
      FlaxCodegenPackagePipeline.validateConfig(
        p.join(host.path, 'bindings/flax_bindings.yaml'),
      ),
      throwsA(
        isA<FlaxCodegenException>().having(
          (e) => e.toString(),
          'missing runtime',
          contains('Missing JavaScript runtime dependency'),
        ),
      ),
    );
    runtime.writeAsStringSync(runtimeContents);
    final sourceWithoutTypes = jsonDecode(runtimeContents) as Map;
    (sourceWithoutTypes['dependencies'] as Map).remove('@test/value_bindings');
    runtime.writeAsStringSync(jsonEncode(sourceWithoutTypes));
    await expectLater(
      FlaxCodegenPackagePipeline.validateConfig(
        p.join(host.path, 'bindings/flax_bindings.yaml'),
      ),
      throwsA(
        isA<FlaxCodegenException>().having(
          (e) => e.toString(),
          'missing source types',
          contains('Missing JavaScript types dependency'),
        ),
      ),
    );
    runtime.writeAsStringSync(runtimeContents);
    final npm = File(p.join(host.path, 'js-types/package.json'));
    npm.writeAsStringSync('{"name":"@test/host"}');
    await expectLater(
      FlaxCodegenPackagePipeline.validateConfig(
        p.join(host.path, 'bindings/flax_bindings.yaml'),
      ),
      throwsA(
        isA<FlaxCodegenException>().having(
          (e) => e.toString(),
          'missing declaration types',
          contains('Missing JavaScript types dependency'),
        ),
      ),
    );
    runtime.writeAsStringSync(jsonEncode(sourceWithoutTypes));
    final undeclared = await FlaxCodegenPackagePipeline.validateConfig(
      p.join(host.path, 'bindings/flax_bindings.yaml'),
    );
    expect(undeclared.localModels.single.functions.map((f) => f.call.name), [
      'own',
    ]);
    expect(
      undeclared.directDependencies.keys,
      isNot(contains('value_bindings')),
    );
  });

  test(
    'independent dependency owners never become implicit providers',
    () async {
      final fixture = _Fixture();
      fixture.package('values', source: _values);
      final a = fixture.package(
        'hosta',
        source: _host,
        dependencies: ['values'],
        generate: ['values'],
      );
      final b = fixture.package(
        'hostb',
        source: _host,
        dependencies: ['values'],
        generate: ['values'],
      );
      final c = fixture.package(
        'hostc',
        source: _host,
        dependencies: ['values', 'hosta', 'hostb'],
        javascript: ['@test/hosta', '@test/hostb'],
      );
      fixture.writePackageConfig();
      final ids = <String>{};
      for (final host in [a, b]) {
        final result = await FlaxCodegenPackagePipeline.validateConfig(
          p.join(host.path, 'bindings/flax_bindings.yaml'),
        );
        File(p.join(host.path, 'bindings/manifest.json'))
            .writeAsStringSync(result.manifest.encode());
        final dependency = result.manifest.modules.singleWhere(
          (m) => m.name == 'dependency_values',
        );
        expect(
          dependency.model.identities.where((i) => i.owner),
          everyElement(predicate((dynamic i) => i.localDependency == true)),
        );
        ids.add(dependency.moduleId.value);
      }
      expect(ids, hasLength(2));
      final result = await FlaxCodegenPackagePipeline.validateConfig(
        p.join(c.path, 'bindings/flax_bindings.yaml'),
      );
      expect(result.localModels.single.functions.map((f) => f.call.name), [
        'own',
      ]);
      expect(result.directDependencies.keys, ['flax']);
    },
  );

  test('declared JS provider rejects a missing direct Dart half', () async {
    final fixture = _Fixture();
    fixture.package('values', source: _values);
    fixture.package('value_bindings', source: '', dependencies: ['values']);
    final host = fixture.package(
      'host',
      source: _host,
      dependencies: ['values'],
      javascript: ['@test/value_bindings'],
    );
    fixture.writePackageConfig();
    await expectLater(
      FlaxCodegenPackagePipeline.validateConfig(
        p.join(host.path, 'bindings/flax_bindings.yaml'),
      ),
      throwsA(
        isA<FlaxCodegenException>().having(
          (e) => e.toString(),
          'missing Dart half',
          contains('matching direct Dart binding dependency'),
        ),
      ),
    );
  });

  test('missing dependencies skip whole optional signatures', () async {
    final fixture = _Fixture();
    fixture.package('values', source: _values);
    final host = fixture.package(
      'host',
      source: '''
import 'package:values/api.dart';
int optional({Value? value}) => value?.count ?? 0;
class Local {
  Local({Value? value});
  Local.empty();
  int own() => 1;
  int optional({List<Value>? value}) => 1;
}
extension LocalX on int {
  int optional({Value? value}) => this;
  int own() => this;
}
''',
      dependencies: ['values'],
    );
    fixture.writePackageConfig();
    final result = await FlaxCodegenPackagePipeline.validateConfig(
      p.join(host.path, 'bindings/flax_bindings.yaml'),
    );
    final model = result.localModels.single;
    expect(model.functions, isEmpty);
    final local = model.classes.single;
    expect(local.constructors.map((c) => c.name), ['empty']);
    expect(local.methods.map((m) => m.name), contains('own'));
    expect(local.methods.map((m) => m.name), isNot(contains('optional')));
    expect(model.extensions.single.members.map((m) => m.name), ['own']);
    expect(
      result.skips
          .where((s) => s.code == 'external_dependency_unbound')
          .map((s) => s.target),
      containsAll(['optional', 'Local.', 'Local.optional', 'LocalX.optional']),
    );
  });

  test(
    'official generation injects local dependencies without extra plugins',
    () async {
      final fixture = _Fixture();
      fixture.package('values', source: _values);
      final host = fixture.package(
        'host',
        source: _host,
        dependencies: ['values'],
        generate: ['values'],
      );
      fixture.writePackageConfig();
      final path = p.join(host.path, 'bindings/flax_bindings.yaml');
      await FlaxCodegenPackagePipeline.generateConfig(path);
      final source = File(p.join(host.path, 'lib/src/generated/api.g.dart'))
          .readAsStringSync();
      expect(
        source,
        contains(
          'package:host/src/generated/dependencies/values_bindings.g.dart',
        ),
      );
      expect(
        source,
        contains('dependencies: [_flaxBindings0.dependency_valuesBindings]'),
      );
      expect(source, isNot(contains('FlaxPlugin')));
      expect(
        File(p.join(host.path, 'js/src/generated/dependencies/values/index.ts'))
            .existsSync(),
        isTrue,
      );
      await FlaxCodegenPackagePipeline.checkConfig(path);
    },
  );

  test(
    'owner-local types share one JS entry across public Dart carriers',
    () async {
      final fixture = _Fixture();
      final dependency = fixture.package(
        'values',
        source: 'class Value { Value(); }',
      );
      File(p.join(dependency.path, 'lib/other.dart'))
          .writeAsStringSync('class Other { Other(); }');
      final host = fixture.package(
        'host',
        source: '''
import 'package:values/api.dart';
import 'package:values/other.dart';
Value echo(Value value, Other other) => value;
''',
        dependencies: ['values'],
        generate: ['values'],
      );
      fixture.writePackageConfig();
      final generated = await FlaxCodegenPackagePipeline.generateConfig(
        p.join(host.path, 'bindings/flax_bindings.yaml'),
      );
      final model = generated.localModels.singleWhere(
        (m) => m.name == 'dependency_values',
      );
      expect(model.publicLibraries.single.exports, ['Other', 'Value']);
      expect(
        model.publicLibraries.single.jsPackage,
        '@test/host/dependencies/values',
      );
      expect(
        model.classes.map((c) => c.name),
        unorderedEquals(['Value', 'Other']),
      );
    },
  );
  test(
    'dependency closure retains parents and nested generic arguments',
    () async {
      final fixture = _Fixture();
      fixture.package(
        'values',
        source: '''
class Value { Value(this.count); int count; int sum(int delta) => count + delta; }
class Box<T> { Box(this.value); T value; }
class Unused { Unused(); }
''',
      );
      final host = fixture.package(
        'host',
        source: '''
import 'package:values/api.dart';
class Local extends Value {
  Local(int count) : super(count);
  int inherited(int delta) => sum(delta);
}
Box<List<Value>> echo(Box<List<Value>> value) => value;
''',
        dependencies: ['values'],
        generate: ['values'],
      );
      fixture.writePackageConfig();
      final result = await FlaxCodegenPackagePipeline.generateConfig(
        p.join(host.path, 'bindings/flax_bindings.yaml'),
      );
      final main = result.localModels.singleWhere((m) => m.name == 'api');
      final dependency = result.localModels.singleWhere(
        (m) => m.name == 'dependency_values',
      );
      expect(
        dependency.classes.map((c) => c.name),
        unorderedEquals(['Box', 'Value']),
      );
      expect(
        main.classes.single.supertypes,
        contains('example.host/dependency_values#type:Value'),
      );
      expect(
        main.functions.single.call.parameters.single.type.id,
        'example.host/dependency_values#type:Box',
      );
      final source = File(p.join(host.path, 'lib/src/generated/api.g.dart'))
          .readAsStringSync();
      expect(source, contains('super.sum('));
    },
  );
  test(
    'provider inherited signatures retain their exact local dependency view',
    () async {
      final fixture = _Fixture();
      fixture.package(
        'values',
        source: '''
class Value {
  Value();
  Value self() => this;
  Future<List<Value>> later() async => [this];
  Value transform(Value Function(Value) callback) => callback(this);
}
''',
      );
      final a = fixture.package(
        'hosta',
        source: '''
import 'package:values/api.dart';
class Local extends Value { Local(); }
''',
        dependencies: ['values'],
        generate: ['values'],
      );
      final c = fixture.package(
        'hostc',
        source: '''
import 'package:hosta/api.dart';
import 'package:values/api.dart';
class Child extends Local { Child(); }
Value unrelated(Value value) => value;
''',
        dependencies: ['hosta'],
        javascript: ['@test/hosta'],
      );
      fixture.writePackageConfig();
      await FlaxCodegenPackagePipeline.generateConfig(
        p.join(a.path, 'bindings/flax_bindings.yaml'),
      );
      final result = await FlaxCodegenPackagePipeline.generateConfig(
        p.join(c.path, 'bindings/flax_bindings.yaml'),
      );
      final child = result.localModels.single.classes.single;
      expect(child.proxy?.kind, 'extends');
      expect(
        child.proxy!.methods.singleWhere((m) => m.name == 'self').result.id,
        'example.hosta/dependency_values#type:Value',
      );
      expect(
        child.proxy!.methods
            .singleWhere((m) => m.name == 'later')
            .result
            .item!
            .item!
            .id,
        'example.hosta/dependency_values#type:Value',
      );
      expect(
        child.proxy!.methods
            .singleWhere((m) => m.name == 'transform')
            .parameters
            .single
            .type
            .result!
            .id,
        'example.hosta/dependency_values#type:Value',
      );
      expect(result.localModels, hasLength(1));
      expect(result.localModels.single.functions, isEmpty);
    },
  );
  test(
    'ancestor with no self-typed signatures retains its local superclass',
    () async {
      final fixture = _Fixture();
      fixture.package(
        'values',
        source: 'class Value { Value(); int get count => 1; }',
      );
      final a = fixture.package(
        'hosta',
        source: "import 'package:values/api.dart'; class Local extends Value { Local(); } Value expose() => Value();",
        dependencies: ['values'],
        generate: ['values'],
      );
      final c = fixture.package(
        'hostc',
        source: "import 'package:hosta/api.dart'; class Child extends Local { Child(); }",
        dependencies: ['hosta'],
        javascript: ['@test/hosta'],
      );
      fixture.writePackageConfig();
      final provider = await FlaxCodegenPackagePipeline.generateConfig(
        p.join(a.path, 'bindings/flax_bindings.yaml'),
      );
      expect(
        provider.localModels.map((module) => module.name),
        contains('dependency_values'),
      );
      final result = await FlaxCodegenPackagePipeline.generateConfig(
        p.join(c.path, 'bindings/flax_bindings.yaml'),
      );
      expect(
        result.localModels.single.classes.single.supertypes,
        contains('example.hosta/dependency_values#type:Value'),
      );
    },
  );
  test(
    'nested generic results and method constraints retain the ancestor view',
    () async {
      final fixture = _Fixture();
      fixture.package(
        'values',
        source: 'class Value<T> { Value(); Map<String, List<Value<T>>> nested() => {}; R echo<R extends Value<T>>(R value) => value; }',
      );
      final a = fixture.package(
        'hosta',
        source: "import 'package:values/api.dart'; class Local extends Value<String> { Local(); }",
        dependencies: ['values'],
        generate: ['values'],
      );
      final c = fixture.package(
        'hostc',
        source: "import 'package:hosta/api.dart'; class Child extends Local { Child(); }",
        dependencies: ['hosta'],
        javascript: ['@test/hosta'],
      );
      fixture.writePackageConfig();
      await FlaxCodegenPackagePipeline.generateConfig(
        p.join(a.path, 'bindings/flax_bindings.yaml'),
      );
      final result = await FlaxCodegenPackagePipeline.generateConfig(
        p.join(c.path, 'bindings/flax_bindings.yaml'),
      );
      final child = result.localModels.single.classes.single;
      final nested = child.proxy!.methods
          .singleWhere((method) => method.name == 'nested')
          .result
          .item!
          .item!;
      expect(nested.id, 'example.hosta/dependency_values#type:Value');
      expect(nested.dartArguments.single.kind, 'String');
      expect(
        child.proxy!.methods.map((method) => method.name),
        contains('echo'),
      );
    },
  );
  test(
    'distinct inherited members can retain two independent same-source views',
    () async {
      final fixture = _Fixture();
      fixture.package('values', source: 'class Value { Value(); }');
      final a = fixture.package(
        'hosta',
        source: '''
import 'package:values/api.dart';
class ParentA {
  ParentA();
  Value first() => Value();
  Value get fromA => Value();
  set intoA(Value value) {}
  Value get split => Value();
}
''',
        dependencies: ['values'],
        generate: ['values'],
      );
      final b = fixture.package(
        'hostb',
        source: '''
import 'package:values/api.dart';
class ParentB {
  ParentB();
  Value second() => Value();
  Value get fromB => Value();
  set intoB(Value value) {}
  set split(Value value) {}
}
''',
        dependencies: ['values'],
        generate: ['values'],
      );
      final c = fixture.package(
        'hostc',
        source: '''
import 'package:hosta/api.dart';
import 'package:hostb/api.dart';
import 'package:values/api.dart';
class Child extends ParentA implements ParentB {
  Child();
  @override
  Value second() => Value();
  @override
  Value get fromB => Value();
  @override
  set intoB(Value value) {}
  @override
  set split(Value value) {}
}
''',
        dependencies: ['hosta', 'hostb', 'values'],
        javascript: ['@test/hosta', '@test/hostb'],
      );
      fixture.writePackageConfig();
      await FlaxCodegenPackagePipeline.generateConfig(
        p.join(a.path, 'bindings/flax_bindings.yaml'),
      );
      await FlaxCodegenPackagePipeline.generateConfig(
        p.join(b.path, 'bindings/flax_bindings.yaml'),
      );
      final result = await FlaxCodegenPackagePipeline.generateConfig(
        p.join(c.path, 'bindings/flax_bindings.yaml'),
      );
      final child = result.localModels.single.classes.single;
      expect(
        child.proxy!.methods
            .singleWhere((method) => method.name == 'first')
            .result
            .id,
        'example.hosta/dependency_values#type:Value',
      );
      expect(
        child.proxy!.methods
            .singleWhere((method) => method.name == 'second')
            .result
            .id,
        'example.hostb/dependency_values#type:Value',
      );
      for (final (name, owner) in [
        ('fromA', 'hosta'),
        ('fromB', 'hostb'),
        ('split', 'hosta'),
      ]) {
        final wire = 'example.$owner/dependency_values#type:Value';
        expect(
          child.getters.singleWhere((getter) => getter.name == name).type.id,
          wire,
        );
        expect(
          child.proxy!.getters
              .singleWhere((getter) => getter.name == name)
              .type
              .id,
          wire,
        );
      }
      for (final (name, owner) in [
        ('intoA', 'hosta'),
        ('intoB', 'hostb'),
        ('split', 'hostb'),
      ]) {
        final wire = 'example.$owner/dependency_values#type:Value';
        expect(
          child.setters.singleWhere((setter) => setter.name == name).type.id,
          wire,
        );
        expect(
          child.proxy!.setters
              .singleWhere((setter) => setter.name == name)
              .type
              .id,
          wire,
        );
      }
    },
  );
  test('conflicting views for one inherited member fail explicitly', () async {
    final fixture = _Fixture();
    fixture.package('values', source: 'class Value { Value(); }');
    for (final (name, type) in [('hosta', 'ParentA'), ('hostb', 'ParentB')]) {
      fixture.package(
        name,
        source:
            '''
import 'package:values/api.dart';
class $type { $type(); Value same() => Value(); }
''',
        dependencies: ['values'],
        generate: ['values'],
      );
    }
    final c = fixture.package(
      'hostc',
      source: '''
import 'package:hosta/api.dart';
import 'package:hostb/api.dart';
class Child extends ParentA implements ParentB { Child(); }
''',
      dependencies: ['hosta', 'hostb'],
      javascript: ['@test/hosta', '@test/hostb'],
    );
    fixture.writePackageConfig();
    for (final name in ['hosta', 'hostb']) {
      await FlaxCodegenPackagePipeline.generateConfig(
        p.join(fixture.packages[name]!.path, 'bindings/flax_bindings.yaml'),
      );
    }
    await expectLater(
      FlaxCodegenPackagePipeline.generateConfig(
        p.join(c.path, 'bindings/flax_bindings.yaml'),
      ),
      throwsA(
        isA<FlaxCodegenException>().having(
          (error) => error.diagnostics.any(
            (diagnostic) => diagnostic.message.contains(
              'Ambiguous inherited dependency views for call:same: package:values/api.dart::Value',
            ),
          ),
          'conflicting member contract',
          isTrue,
        ),
      ),
    );
  });
  test(
    'ancestor local views do not leak into sibling classes or free functions',
    () async {
      final fixture = _Fixture();
      fixture.package(
        'values',
        source: 'class Value { Value(); Value self() => this; }',
      );
      final a = fixture.package(
        'hosta',
        source: "import 'package:values/api.dart'; class Local extends Value { Local(); }",
        dependencies: ['values'],
        generate: ['values'],
      );
      final c = fixture.package(
        'hostc',
        source: "import 'package:hosta/api.dart'; import 'package:values/api.dart'; class Child extends Local { Child(); } class Unrelated { Unrelated(); Value own(Value value) => value; } Value free(Value value) => value;",
        dependencies: ['hosta', 'values'],
        javascript: ['@test/hosta'],
      );
      fixture.writePackageConfig();
      await FlaxCodegenPackagePipeline.generateConfig(
        p.join(a.path, 'bindings/flax_bindings.yaml'),
      );
      final result = await FlaxCodegenPackagePipeline.generateConfig(
        p.join(c.path, 'bindings/flax_bindings.yaml'),
      );
      final module = result.localModels.single;
      expect(
        module.classes
            .singleWhere((type) => type.name == 'Child')
            .proxy!
            .methods
            .singleWhere((method) => method.name == 'self')
            .result
            .id,
        'example.hosta/dependency_values#type:Value',
      );
      expect(
        module.classes
            .singleWhere((type) => type.name == 'Unrelated')
            .methods
            .map((method) => method.name),
        isNot(contains('own')),
      );
      expect(module.functions, isEmpty);
      expect(
        result.skips.any(
          (skip) =>
              skip.target == 'free' &&
              skip.code == 'external_dependency_unbound',
        ),
        isTrue,
      );
    },
  );
}

const _values = '''
class Value {
  Value(this.count);
  int count;
  int sum(int delta) => count + delta;
}
class Nested { Nested(this.value); final Value value; }
class Unused { Unused(); }
''';
const _host = '''
import 'package:values/api.dart';
class Local { Local(); }
int own(int value) => value;
List<Value> values(Value value) => [value];
Nested nested(Nested value) => value;
Future<Value> later(Value value) async => value;
void callback(Value Function(List<Value>) value) {}
''';

class _Fixture {
  _Fixture() {
    addTearDown(() => root.deleteSync(recursive: true));
    packages['flax'] = writeEmptyCorePackage(root);
  }
  final root = Directory.systemTemp.createTempSync('flax-dependency-policy-');
  final packages = <String, Directory>{};

  Directory package(
    String name, {
    required String source,
    List<String> dependencies = const [],
    List<String> generate = const [],
    List<String> javascript = const [],
  }) {
    final dir = Directory(p.join(root.path, name))..createSync();
    packages[name] = dir;
    void write(String path, String value) {
      final file = File(p.join(dir.path, path));
      file.parent.createSync(recursive: true);
      file.writeAsStringSync(value);
    }

    write(
      'pubspec.yaml',
      'name: $name\ndependencies:\n  flax: any\n${dependencies.map((d) => '  $d: any\n').join()}',
    );
    write('flax_package.yaml', '''
format: 2
capabilities: [bindings]
bindingNamespace: example.${name.replaceAll('_', '')}
javascript: {package: '@test/$name-runtime', types: '@test/$name', version: same, mode: runtime}
${generate.isEmpty ? '' : 'bindingDependencies:\n  generate: ${jsonEncode(generate)}'}
''');
    write('lib/api.dart', source);
    write(
      'js-types/package.json',
      jsonEncode({
        'name': '@test/$name',
        'version': '0.0.0',
        'dependencies': {for (final dependency in javascript) dependency: '*'},
      }),
    );
    write(
      'js/package.json',
      jsonEncode({
        'name': '@test/$name-runtime',
        'version': '0.0.0',
        'dependencies': {
          for (final dependency in javascript) dependency: '*',
          for (final dependency in javascript) '$dependency-runtime': '*',
        },
      }),
    );
    write('bindings/flax_bindings.yaml', '''
format: 2
name: api
library: package:$name/api.dart
automatic: true
jsPackage: '@test/$name'
dartOutput: lib/src/generated/api.g.dart
tsOutput: js/src/generated/api.ts
publicLibraries:
  package:$name/api.dart:
    jsPackage: '@test/$name'
    tsOutput: js/src/generated/index.ts
''');
    return dir;
  }

  void writePackageConfig() {
    final file = File(p.join(root.path, '.dart_tool/package_config.json'));
    file.parent.createSync();
    file.writeAsStringSync(
      jsonEncode({
        'configVersion': 2,
        'packages': [
          for (final entry in packages.entries)
            {
              'name': entry.key,
              'rootUri': entry.value.uri.toString(),
              'packageUri': 'lib/',
              'languageVersion': '3.13',
            },
        ],
      }),
    );
  }
}
