import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  var root = Directory.current;
  while (!Directory(p.join(root.path, 'packages/flax_codegen')).existsSync()) {
    if (root.parent.path == root.path) {
      throw StateError('Cannot locate the Flax workspace');
    }
    root = root.parent;
  }
  final uri = Uri.file(
    p.join(
      root.path,
      'packages/flax_codegen/test/fixtures/capability/generic_methods.dart',
    ),
  ).toString();
  FlaxCodegenBindingConfig config(
    Map<String, FlaxCodegenClassSelection> classes,
  ) => FlaxCodegenBindingConfig(
    'generic_methods',
    uri,
    '@example/generic-methods',
    'unused.dart',
    'unused.ts',
    classes,
    functions: {
      'echoTop': const FlaxCodegenFunctionSelection(['value']),
    },
  );
  late FlaxCodegenBindingParser parser;
  setUp(() {
    parser = FlaxCodegenBindingParser(root.path);
    addTearDown(parser.dispose);
  });

  test(
    'automatic methods reuse one bound target and ordinary conversion',
    () async {
      final proposal = await parser.proposeLibrary(config({}));
      final selection = proposal.config.classes['EchoMethods']!;
      expect(
        selection.instanceMethods.keys,
        containsAll([
          'echo',
          'wrap',
          'apply',
          'later',
          'events',
          'optional',
          'named',
          'runtimeTypeName',
          'closed',
        ]),
      );
      expect(selection.methods['numeric'], ['value']);
      final module = await parser.parse(config({'EchoMethods': selection}));
      final methods = module.classes.single.methods;
      expect(methods.singleWhere((m) => m.name == 'echo').typeArguments, [
        'Object?',
      ]);
      expect(methods.singleWhere((m) => m.name == 'numeric').typeArguments, [
        'num',
      ]);
      expect(methods.singleWhere((m) => m.name == 'closed').typeArguments, [
        'List<String>',
      ]);
      final diagnostics = FlaxCodegenManifestDiagnostics(
        'generic-methods.json',
      );
      // Fixture file imports are emitter-only, as in the real UI fixture.
      final encoded = FlaxCodegenManifestCodec.encodeModule(module)
        ..['typeLibraries'] = {
          for (final entry in module.typeLibraries.entries)
            if (!entry.value.startsWith('file:')) entry.key: entry.value,
        };
      final restored = FlaxCodegenManifestCodec.decodeModule(
        encoded,
        diagnostics,
        '',
        module.name,
      );
      diagnostics.throwIfAny();
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([restored!]),
        restored,
        consumerSource: '''
import { EchoMethods, echoTop } from './plugin.js';
import type { DartInput, DartOutput, DartList, DartMap, DartSet, DartRecord } from '@flax/core/bindings';
class Echo extends EchoMethods {
  override echo<T>(value: T | DartOutput<T>): DartOutput<T> {
    return super.echo<T>(value);
  }
}
const echo = new Echo();
const text: string = echo.echo('text');
const number: number = echo.echo(2);
const nothing: null = echo.echo(null);
const wrapped: string = echo.wrap('text').get(0);
const callback: string = echo.apply('a', value => value.toUpperCase());
const list: DartList<string> = echo.echo(['a']);
const nested: DartList<DartList<string>> = echo.wrap(['a']);
const map: DartMap<string, number> = echo.echo(new Map([['a', 1]]));
const set: DartSet<string> = echo.echo(new Set(['a']));
const plain: DartMap<string, string> = echo.echo({a: 'a'});
interface Fields { readonly a: string }
declare const fields: Fields;
const fieldMap: DartMap<string, string> = echo.echo(fields);
const callbackList: DartList<string> = echo.apply(['a'], value => value);
const callbackCopy: DartList<string> = echo.apply(['a'], value => value.toArray());
const pendingList: Promise<DartList<string>> = echo.later(['a']);
const promisedList: Promise<DartList<string>> = echo.echo(Promise.resolve(['a']));
const returnedList: DartList<string> = echo.identityCallback()(['a']);
const topLevelList: DartList<string> = echoTop(['a']);
echo.invokeGeneric(['a'], <T>(value: DartOutput<T>) => value);
// @ts-expect-error a returned generic Dart callback also returns a Dart List
echo.identityCallback()(['a']).map(value => value);
declare const record: DartRecord<{readonly id: number}>;
const retainedRecord: typeof record = echo.echo(record);
declare const nativeList: DartList<string>;
const retainedList: typeof nativeList = echo.echo(nativeList);
// @ts-expect-error Object? erasure cannot reconstruct a declared native Record list
echo.echo<DartList<typeof record>>([{id: 1}]);
const retainedObject: EchoMethods = echo.echo(echo);
// @ts-expect-error a Dart List does not retain JS Array methods
echo.echo(['a']).map(value => value);
// @ts-expect-error a plain JS object returns a Dart Map, not its field shape
echo.echo({a: 'a'}).a;
// @ts-expect-error a raw field object is not an existing Dart Record
echo.echo<typeof record>({id: 1});
const pending: Promise<string> = echo.later('a');
const numeric: number = EchoMethods.numeric(2.5);
const closed: string = echo.closed(['a']).get(0);
const omitted: string | null = echo.optional<string>();
echo.named<string>({value: 'a'});
// @ts-expect-error numeric bounds retain their input relationship
EchoMethods.numeric('a');
// @ts-expect-error closed collection bounds retain their element type
echo.closed([1]);
// @ts-expect-error explicit generic calls check callback results
echo.apply<string>('a', () => 1);
''',
        dartTestSource: '''
void main() {
 test('erased calls preserve identity, defaults and async results', () async {
   final echo = api.EchoMethods();
   final original = <String>['a'];
   expect(identical(_EchoMethods_echo(echo, {'value': original}), original), isTrue);
   expect(_EchoMethods_echo(echo, {'value': null}), null);
   expect(_EchoMethods_apply(echo, {'value': 'a', 'callback': (Object? value) => '\$value!'}), 'a!');
   final wrapped = _EchoMethods_wrap(echo, {'value': 'a'});
   expect(wrapped, isA<List<Object?>>());
   expect(wrapped is List<String>, isFalse);
   expect(await (_EchoMethods_later(echo, {'value': 'a'}) as Future), 'a');
   expect(await (_EchoMethods_events(echo, {'value': 'a'}) as Stream).toList(), ['a']);
   expect(_EchoMethods_runtimeTypeName(echo, {}), 'Object?');
   expect(_EchoMethods_optional(echo, {}), null);
   expect(_EchoMethods_named(echo, {}), null);
   expect(_EchoMethods_named(echo, {'value': 'a'}), 'a');
   expect(_EchoMethods_numeric({'value': 2.5}), 2.5);
   expect(identical(_EchoMethods_closed(echo, {'value': original}), original), isTrue);
   expect(() => _EchoMethods_numeric({'value': 'wrong'}), throwsA(isA<TypeError>()));
   expect(() => _EchoMethods_closed(echo, {'value': <int>[]}), throwsA(isA<TypeError>()));
 });
}
''',
      );
    },
  );

  test(
    'inherited methods and concrete member views retain lexical scopes',
    () async {
      final proposal = await parser.proposeLibrary(config({}));
      final module = await parser.parse(
        config({
          for (final name in [
            'InheritedMethods',
            'MethodBag',
            'ClosedMethods',
            'SharedMethods',
            'MethodKind',
          ])
            name: proposal.config.classes[name]!,
        }),
      );
      expect(
        module.classes
            .singleWhere((c) => c.name == 'ClosedMethods')
            .methods
            .singleWhere((m) => m.name == 'narrowed')
            .typeArguments,
        ['String'],
      );
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: '''
import { InheritedMethods, MethodBag, ClosedMethods, SharedMethods, MethodKind } from './plugin.js';
import type { DartList } from '@flax/core/bindings';
class Inherited extends InheritedMethods {}
class Bag extends MethodBag<string> {}
class Closed extends ClosedMethods {}
const inherited: string = new Inherited().echo('a');
const bag: MethodBag<string> = new Bag(['a']);
const mapped: number = bag.mapFirst(value => value.length);
const independent: number = bag.echo(2);
const narrowed: string = new Closed().narrowed('a');
const enumeration: string = MethodKind.value.echo('a');
declare const shared: SharedMethods<DartList<string>>;
declare const nativeList: DartList<string>;
const chosen: number = shared.choose(nativeList, 2);
// Raw collection inputs reuse the existing converter.
shared.choose(['a'], 2);
// @ts-expect-error a concrete owner keeps the inherited method bound
new Closed().narrowed(2);
// @ts-expect-error a concrete member view keeps its callback input
bag.mapFirst((value: number) => value);
''',
        dartTestSource: '''
void main() {
 test('generic methods work on inherited, enum and concrete owners', () {
   final inherited = api.InheritedMethods();
   expect(_InheritedMethods_echo(inherited, {'value': 'a'}), 'a');
   final bag = api.MethodBag<String>(['a']);
   final view = typedFixtureMembers(_flaxClass_MethodBag<String>());
   expect(view.instanceMethods['mapFirst']!.invoke(bag, {'callback': (String value) => value.length}), 1);
   expect(_MethodBag_echo(bag, {'value': 2}), 2);
   final closed = api.ClosedMethods();
   expect(_ClosedMethods_narrowed(closed, {'value': 'a'}), 'a');
   expect(_enum_MethodKind_call_echo({'receiver': api.MethodKind.value, 'value': 'a'}), 'a');
 });
}
''',
      );
    },
  );

  test('recursive defaults require explicit arguments while captured owners use templates', () async {
    final proposal = await parser.proposeLibrary(config({}));
    for (final target in ['EchoMethods.recursive']) {
      expect(
        proposal.skips.any(
          (skip) =>
              skip.target == target && skip.code == 'complex_generic_bound',
        ),
        isTrue,
        reason: target,
      );
    }
    expect(proposal.config.classes['MethodFactory']!.methods, contains('from'));
    expect(
      proposal.skips.any(
        (s) =>
            s.target == 'MethodBag.narrowed' &&
            s.code == 'complex_generic_bound',
      ),
      isTrue,
    );
    await expectLater(
      parser.parse(
        config({
          'EchoMethods': const FlaxCodegenClassSelection(
            {'': []},
            kind: 'object',
            instanceMethods: {
              'recursive': ['value'],
            },
          ),
        }),
      ),
      throwsA(
        isA<StateError>().having(
          (e) => e.message,
          'message',
          contains('explicit runtime type arguments'),
        ),
      ),
    );
    final module = await parser.parse(
      config({
        'EchoMethods': const FlaxCodegenClassSelection(
          {'': []},
          kind: 'object',
          instanceMethods: {
            'recursive': ['value'],
            'dependent': ['value'],
            'wrap': ['value'],
            'runtimeTypeName': [],
          },
          methodTypeArguments: {
            'recursive': ['String'],
            'dependent': ['num', 'int'],
            'wrap': ['String'],
            'runtimeTypeName': ['String'],
          },
        ),
        'MethodBag': const FlaxCodegenClassSelection(
          {
            '': ['items'],
          },
          kind: 'object',
          typeArguments: ['String'],
          instanceMethods: {
            'narrowed': ['value'],
          },
        ),
      }),
    );
    await compileFixture(
      root.path,
      FlaxCodegenBindingEmitter([module]),
      module,
      dartTestSource: '''
void main() {
 test('explicit targets retain actual Dart generics and bound checks', () {
   final echo = _createEchoMethods('', {});
   expect(_EchoMethods_recursive(echo, {'value': 'a'}), 'a');
   expect(_EchoMethods_dependent(echo, {'value': 2}), 2);
   expect(_EchoMethods_wrap(echo, {'value': 'a'}), isA<List<String>>());
   expect(_EchoMethods_runtimeTypeName(echo, {}), 'String');
   final bag = _createMethodBag('', {'items': <String>['a']});
   expect(_MethodBag_narrowed(bag, {'value': 'a'}), 'a');
   expect(() => _EchoMethods_dependent(echo, {'value': 2.5}), throwsA(isA<TypeError>()));
 });
}
''',
    );
    await expectLater(
      parser.parse(
        config({
          'EchoMethods': const FlaxCodegenClassSelection(
            {'': []},
            kind: 'object',
            instanceMethods: {
              'dependent': ['value'],
            },
            methodTypeArguments: {
              'dependent': ['num', 'String'],
            },
          ),
        }),
      ),
      throwsA(isA<StateError>()),
    );
  });
}
