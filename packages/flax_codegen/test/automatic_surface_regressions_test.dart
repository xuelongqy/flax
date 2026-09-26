import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  late String root;
  late FlaxCodegenBindingParser parser;

  setUp(() {
    root = p.normalize(p.join(Directory.current.path, '../..'));
    parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
  });

  FlaxCodegenBindingConfig config(String fixture) => FlaxCodegenBindingConfig(
    'automatic_surface_regressions',
    Uri.file(p.join(
      root,
      'packages/flax_codegen/test/fixtures/bindability',
      fixture,
    )).toString(),
    '@example/automatic-surface-regressions',
    'unused.dart',
    'unused.ts',
    const {},
  );

  test('automatic generic methods keep runtime arguments through parsing', () async {
    final proposal = await parser.proposeLibrary(
      config('automatic_surface_regressions.dart'),
    );
    final selected = proposal.config.classes['AutomaticGenericMethods']!;
    expect(selected.instanceMethods, contains('identity'));
    expect(selected.instanceMethods, contains('bounded'));
    expect(selected.methods, contains('staticIdentity'));
    expect(selected.methodTypeArguments['identity'], ['Object?']);
    expect(selected.methodTypeArguments['bounded'], ['num']);
    expect(selected.methodTypeArguments['staticIdentity'], ['Object?']);
    expect(selected.instanceMethods, isNot(contains('recursive')));
    expect(proposal.skips.any((skip) =>
      skip.target == 'AutomaticGenericMethods.recursive' &&
      skip.code == 'complex_generic_bound'), isTrue);

    final child = proposal.config.classes['AutomaticGenericChild']!;
    expect(child.instanceMethods, contains('inherited'));
    expect(child.methodTypeArguments['inherited'], ['Object?']);
    final proxy = proposal.config.classes['AutomaticGenericProxy']!;
    expect(proxy.proxy, 'extends');
    expect(proxy.methodTypeArguments['identity'], ['Object?']);

    final module = await parser.parse(proposal.config);
    final generated = module.classes.singleWhere(
      (type) => type.name == 'AutomaticGenericMethods',
    );
    expect(generated.methods.singleWhere(
      (method) => method.name == 'identity',
    ).typeArguments, ['Object?']);
  });

  test('explicit member narrowing drops orphan inferred type arguments', () async {
    final proposal = await parser.proposeLibrary(
      config('automatic_surface_regressions.dart'),
      overrides: const FlaxCodegenAutoOverrides(classes: {
        'AutomaticGenericMethods': FlaxCodegenClassOverride(
          FlaxCodegenClassSelection({}, instanceMethods: {'identity': ['value']}),
          {'instanceMethods'},
        ),
      }),
    );
    final selected = proposal.config.classes['AutomaticGenericMethods']!;
    expect(selected.methodTypeArguments, contains('identity'));
    expect(selected.methodTypeArguments, contains('staticIdentity'));
    expect(selected.methodTypeArguments, isNot(contains('bounded')));
    await parser.parse(proposal.config);
  });

  test('public name and static-write boundaries are no longer silent', () async {
    final proposal = await parser.proposeLibrary(
      config('automatic_surface_regressions.dart'),
    );
    void hasSkip(String member, String code) {
      expect(proposal.skips.any((skip) =>
        skip.target == 'AutomaticNameBoundaries.$member' && skip.code == code),
        isTrue, reason: '$member should report $code');
    }
    for (final name in ['under_score', r'dollar$value', '+']) {
      hasSkip(name, 'unsupported_public_member_name');
    }
    for (final name in ['kind', 'type', 'ctor', 'args']) {
      hasSkip(name, 'descriptor_field_conflict');
    }
    hasSkip('counter', 'static_mutable_member');
    hasSkip('counter=', 'static_mutable_member');
    hasSkip('writeOnly=', 'static_mutable_member');
  });

  test('unavailable members do not remove unrelated ordinary APIs', () async {
    final proposal = await parser.proposeLibrary(
      config('automatic_member_pruning.dart'),
      overrides: const FlaxCodegenAutoOverrides(exclude: ['UnavailableValue']),
    );
    final selected = proposal.config.classes['PartiallyUsable']!;
    expect(selected.constructors, contains(''));
    expect(selected.constructors, isNot(contains('withUnavailable')));
    expect(selected.instanceMethods, contains('healthy'));
    expect(selected.instanceMethods, isNot(contains('unavailable')));
    expect(selected.instanceMethods, isNot(contains('genericUnavailable')));
    expect(selected.methodTypeArguments, isNot(contains('genericUnavailable')));
    expect(selected.getters, isNot(contains('unavailableGetter')));
    expect(selected.setters, isNot(contains('unavailableSetter')));
    expect(selected.methods, isNot(contains('staticUnavailable')));
    expect(proposal.config.classes, contains('DownstreamUsable'));
    expect(proposal.config.classes, isNot(contains('UnavailableValue')));
    expect(proposal.config.classes, isNot(contains('EmptyAfterPruning')));
    expect(proposal.config.classes, isNot(contains('RequiredProxy')));
    expect(proposal.skips.any((skip) =>
      skip.target == 'PartiallyUsable.unavailable' &&
      skip.code == 'signature_depends_on_skipped'), isTrue);
    await parser.parse(proposal.config);
  });

  test('automatic generic calls compile as Dart and strict TypeScript', () async {
    final proposal = await parser.proposeLibrary(
      config('automatic_surface_regressions.dart'),
    );
    final module = await parser.parse(proposal.config);
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([module]),
      module,
      consumerSource: """
import {
  AutomaticGenericMethods,
  AutomaticGenericChild,
  AutomaticGenericProxy,
} from './plugin.js';
const value = new AutomaticGenericMethods();
const a: string = value.identity<string>('value');
const b: number = value.bounded<number>(7);
const c: string = AutomaticGenericMethods.staticIdentity<string>('value');
const d: string = new AutomaticGenericChild().inherited<string>('value');
class ProxyChild extends AutomaticGenericProxy {
  override identity<T>(value: T): T { return super.identity<T>(value); }
}
const e: string = new ProxyChild().identity<string>('value');
// @ts-expect-error Explicit generic arguments still constrain the input.
value.identity<string>(1);
""",
    );
  }, timeout: const Timeout(Duration(minutes: 3)));

  test('the trimmed ordinary surface compiles without reviving excluded types', () async {
    final proposal = await parser.proposeLibrary(
      config('automatic_member_pruning.dart'),
      overrides: const FlaxCodegenAutoOverrides(exclude: ['UnavailableValue']),
    );
    final module = await parser.parse(proposal.config);
    await compileFixture(root, FlaxCodegenBindingEmitter([module]), module);
  }, timeout: const Timeout(Duration(minutes: 3)));
}
