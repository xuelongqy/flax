import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../tool/src/capability/closure.dart';
import 'generator_test.dart' show compileFixture;

void main() {
  final repoRoot = _repoRoot();
  final fixtureUri = p.join(
    repoRoot,
    'packages/flax_codegen/test/fixtures/capability',
  );

  FlaxCodegenBindingConfig config({
    List<String> additionalLibraries = const [],
  }) => FlaxCodegenBindingConfig(
    'capability',
    Uri.file(p.join(fixtureUri, 'closure_entry.dart')).toString(),
    '@example/capability',
    'unused.dart',
    'unused.ts',
    const {},
    additionalLibraries: additionalLibraries,
  );

  const holder = FlaxCodegenClassSelection(
    {
      '': ['dep'],
    },
    kind: 'object',
    getters: ['dep'],
  );

  Future<void> parse(
    FlaxCodegenBindingParser parser,
    FlaxCodegenBindingConfig target,
  ) => parser.parse(
    FlaxCodegenBindingConfig(
      target.name,
      target.library,
      target.jsPackage,
      target.dartOutput,
      target.tsOutput,
      const {'ClosureHolder': holder},
      additionalLibraries: target.additionalLibraries,
    ),
  );

  test('rejects a referenced type the entry barrel does not export', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    await expectLater(
      parse(parser, config()),
      throwsA(
        isA<StateError>().having(
          (error) => error.message,
          'message',
          contains('must publicly export the referenced type ClosureDep'),
        ),
      ),
    );
  });

  test('accepts the type when a public barrel re-exports it', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    await parse(
      parser,
      config(
        additionalLibraries: [
          Uri.file(p.join(fixtureUri, 'closure_public.dart')).toString(),
        ],
      ),
    );
  });

  test(
    'public value closure compiles and executes generated constructors',
    () async {
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      final target = config(
        additionalLibraries: [
          Uri.file(p.join(fixtureUri, 'closure_public.dart')).toString(),
        ],
      );
      final module = await parser.parse(
        FlaxCodegenBindingConfig(
          target.name,
          target.library,
          target.jsPackage,
          target.dartOutput,
          target.tsOutput,
          const {
            'ClosureHolder': holder,
            'ClosureDep': FlaxCodegenClassSelection(
              {
                '': ['value'],
              },
              kind: 'object',
              getters: ['value'],
            ),
          },
          additionalLibraries: target.additionalLibraries,
        ),
      );
      await compileFixture(
        repoRoot,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: '''
import {ClosureDep, ClosureHolder} from './plugin.js';
const dep = ClosureDep(7);
const value: number = ClosureHolder(dep).dep.value;
// @ts-expect-error A referenced Dart object cannot be replaced with a scalar.
ClosureHolder(7);
''',
        dartTestSource: '''
void main() {
  test('public dependency construction preserves the real reference', () {
    final dep = _createClosureDep('', {'value': 7});
    final holder = _createClosureHolder('', {'dep': dep}) as api.ClosureHolder;
    expect(holder.dep, same(dep));
    expect(holder.dep.value, 7);
  });
}
''',
      );
    },
  );

  test(
    'imported provider types compile without publishing a constructor',
    () async {
      final ownerParser = FlaxCodegenBindingParser(repoRoot);
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(ownerParser.dispose);
      addTearDown(parser.dispose);
      final owner = await ownerParser.parse(
        FlaxCodegenBindingConfig(
          'provider',
          Uri.file(p.join(fixtureUri, 'closure_public.dart')).toString(),
          '@example/provider',
          'unused.dart',
          'unused.ts',
          const {
            'ClosureDep': FlaxCodegenClassSelection(
              {},
              kind: 'object',
              getters: ['value'],
            ),
          },
        ),
      );
      parser.prepareModules([owner]);
      final target = config();
      final module = await parser.parse(
        FlaxCodegenBindingConfig(
          target.name,
          target.library,
          target.jsPackage,
          target.dartOutput,
          target.tsOutput,
          const {'ClosureHolder': holder},
        ),
      );
      expect(module.classes.map((type) => type.name), ['ClosureHolder']);
      expect(
        module.classes.single.getters.single.type.id,
        owner.classes.single.id,
      );
      await compileFixture(
        repoRoot,
        FlaxCodegenBindingEmitter([owner, module]),
        module,
        consumerSource: '''
import {ClosureDep} from '@example/provider';
import {ClosureHolder} from './plugin.js';
declare const borrowed: ClosureDep;
const value: number = ClosureHolder(borrowed).dep.value;
// @ts-expect-error The provider publishes a type and getter, not a constructor.
ClosureDep(7);
// @ts-expect-error A consumer cannot add members to the provider's surface.
borrowed.unpublished();
''',
      );
    },
  );

  test('merges repeated candidate name lists for the closure probe', () {
    final directory = Directory.systemTemp.createTempSync('flax-closure');
    addTearDown(() => directory.deleteSync(recursive: true));
    final first = File(p.join(directory.path, 'first.txt'))
      ..writeAsStringSync('3\nAlpha,Beta,Gamma\n');
    final second = File(p.join(directory.path, 'second.txt'))
      ..writeAsStringSync('2\nGamma,Delta\n');

    expect(readClosureCandidateNames(first.path), ['Alpha', 'Beta', 'Gamma']);
    expect(readClosureCandidateNames(second.path), ['Gamma', 'Delta']);
    expect(
      readClosureCandidateNames(p.join(directory.path, 'missing.txt')),
      isEmpty,
    );
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
