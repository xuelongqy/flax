import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../../flax/test/fixtures/default_omission_selection.dart';
import 'generator_test.dart' show compileFixture;

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));
  test(
    'hybrid call shapes retain typed defaults, generics and super checks',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final coreConfig = FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/config.yaml'),
      );
      await parser.prepare([coreConfig]);
      final core = await parser.parse(coreConfig);
      final config = FlaxCodegenBindingConfig(
        'default_omission',
        Uri.file(
          p.join(root, 'packages/flax/test/fixtures/default_omission.dart'),
        ).toString(),
        '@test/default-omission',
        'unused.dart',
        'unused.ts',
        defaultOmissionSelection,
        functions: const {
          'omissionTotal': FlaxCodegenFunctionSelection(omissionParameters),
        },
      );
      final module = await parser.parse(config);
      final emitter = FlaxCodegenBindingEmitter([core, module]);
      expect(
        emitter.dart(module),
        contains('Function.apply(api.OmissionCalls.new'),
      );
      expect(
        emitter.dart(module),
        contains('Function.apply(api.OmissionCalls.measure'),
      );
      expect(
        emitter.dart(module),
        contains('Function.apply(api.omissionTotal'),
      );
      expect(emitter.dart(module), contains('Function.apply(super.work'));
      expect(
        emitter.dart(module),
        contains('final _flaxResult = _flaxPeer.call('),
      );
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: '''
import {OmissionCalls, OmissionGeneric, OmissionProxy, OmissionFactory} from './plugin.js';
const value = OmissionCalls({callback: undefined, labels: null});
value.compute({numbers: undefined, extra: null});
value.returned({numbers: null});
OmissionCalls.measure({token: null});
OmissionFactory({token: undefined});
OmissionGeneric(1, {numbers: null});
class Good extends OmissionProxy {
  override async work(options = {}) { return super.work(options); }
}
// @ts-expect-error Required generic input is not optional.
OmissionGeneric();
// @ts-expect-error Collection elements retain their declared types.
value.compute({numbers: ['wrong']});
''',
        dartTestSource: r'''
class _TestPeer implements FlaxProxyPeer {
  _TestPeer(this.handled);
  final bool handled;
  @override
  (bool, Object?) call(int member, List<Object?> positional, Map<String, Object?> named) => (handled, handled ? Future<int>.value(99) : null);
}
void main() {
  test('every mixed default and null subset executes through all call shapes', () async {
    const defaults = api.OmissionCalls();
    final supplied = <String, Object?>{'token': defaults.token, 'numbers': defaults.numbers,
      'mapping': defaults.mapping, 'callback': defaults.callback,
      'labels': defaults.labels, 'extra': defaults.extra};
    final weights = [1, 3, 3, 5, 1, 6];
    for (final explicitNull in [false, true]) {
      for (var mask = 0; mask < 64; mask++) {
        final values = <String, Object?>{for (var i = 0; i < 6; i++)
          if (mask & (1 << i) != 0) supplied.keys.elementAt(i): explicitNull ? null : supplied.values.elementAt(i)};
        final expected = 19 - (explicitNull ? [for (var i = 0; i < 6; i++)
          if (mask & (1 << i) != 0) weights[i] + 1].fold<int>(0, (a, b) => a + b) : 0);
        final value = _createOmissionCalls('', values) as api.OmissionCalls;
        expect(value.total, expected, reason: 'constructor mask=$mask null=$explicitNull');
        expect(_OmissionCalls_compute(defaults, values), expected);
        expect(_OmissionCalls_measure(values), expected);
        expect(_function_omissionTotal(values), expected);
        expect((_createOmissionChild('', values) as api.OmissionChild).total, expected);
        final generic = _createOmissionGeneric('', {'value': 3, ...values}) as api.OmissionGeneric<int>;
        expect(generic.value, 3);
        expect(generic.total, expected);
      }
    }
    final callbacks = default_omissionBindings.types.whereType<FlaxObjectBinding>()
      .singleWhere((t) => t.id.endsWith('::OmissionCalls')).getters.singleWhere((g) => g.name == 'returned').type.callback!;
    for (var mask = 0; mask < 64; mask++) {
      final named = <String, Object?>{for (var i = 0; i < 6; i++)
        if (mask & (1 << i) != 0) supplied.keys.elementAt(i): null};
      expect(callbacks.invoke(defaults.returned, [], named),
        19 - [for (var i = 0; i < 6; i++) if (mask & (1 << i) != 0) weights[i] + 1]
          .fold<int>(0, (a, b) => a + b));
    }
    final proxy = _createOmissionProxy('@implementation', {'@peer': _TestPeer(false)}) as api.OmissionProxy;
    expect(proxy.total, 19);
    expect(await proxy.work(), 19);
    expect(await proxy.work(token: null), 17);
    final bad = _createOmissionProxy('@implementation', {'@peer': _TestPeer(true)}) as api.OmissionProxy;
    await expectLater(bad.work(), throwsA(isA<StateError>().having((e) => e.message, 'reason', contains('must call super'))));
    expect(() => _createOmissionCalls('', {'numbers': ['wrong']}), throwsA(isA<TypeError>()));
    expect(() => _createOmissionGeneric('', {}), throwsA(isA<TypeError>()));
    expect((_createOmissionPositional('', {}) as api.OmissionPositional).total, 17);
    expect((_createOmissionPositional('', {'first': null}) as api.OmissionPositional).total, 10);
    expect(() => _createOmissionPositional('', {'second': null}), throwsArgumentError);
  });
}
''',
      );
    },
    timeout: const Timeout(Duration(minutes: 4)),
  );
  test(
    'Route and Page named adapters forward private defaults and retain leases',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final uri = Uri.file(
        p.join(
          root,
          'packages/flax_codegen/test/fixtures/plugin/omission_navigation.dart',
        ),
      ).toString();
      final config = FlaxCodegenBindingConfig(
        'omission_navigation',
        uri,
        '@test/omission-navigation',
        'unused.dart',
        'unused.ts',
        {
          'OmissionRoute': const FlaxCodegenClassSelection({
            'named': ['a', 'b', 'c', 'd', 'e', 'callback'],
          }, kind: 'route'),
          'OmissionPage': FlaxCodegenClassSelection(
            {
              'named': ['a', 'b', 'c', 'd', 'e', 'callback'],
            },
            kind: 'page',
            pageAdapter: FlaxCodegenPageAdapterModel(uri, 'adaptOmissionPage'),
          ),
        },
      );
      final module = await parser.parse(config);
      final emitter = FlaxCodegenBindingEmitter([module]);
      expect(emitter.dart(module), contains('super.callback'));
      expect(emitter.dart(module), isNot(contains('= _privateCallback')));
      await compileFixture(
        root,
        emitter,
        module,
        dartTestSource: r"""
class _RouteLease implements FlaxRouteLease {
  @override void Function()? onDiscard;
  bool disposed = false;
  @override void routeDisposed() { disposed = true; }
  @override dynamic noSuchMethod(Invocation invocation) => super.noSuchMethod(invocation);
}
class _PageLease implements FlaxPageLease {
  @override dynamic noSuchMethod(Invocation invocation) => super.noSuchMethod(invocation);
}
void main() {
  test('all leased adapter masks preserve defaults and dispose ownership', () {
    final defaults = api.OmissionRoute.named();
    final expected = [defaults.a, defaults.b, defaults.c, defaults.d, defaults.e, defaults.callback];
    final keys = ['a', 'b', 'c', 'd', 'e', 'callback'];
    for (var mask = 0; mask < 64; mask++) {
      final values = <String, Object?>{for (var i = 0; i < 6; i++) if (mask & (1 << i) != 0) keys[i]: null};
      final lease = _RouteLease();
      final route = _createOmissionRoute('named', values, lease) as api.OmissionRoute;
      final pageLease = _PageLease();
      final page = _createOmissionPage('named', values, pageLease) as api.OmissionPage;
      final actualRoute = [route.a, route.b, route.c, route.d, route.e, route.callback];
      final actualPage = [page.a, page.b, page.c, page.d, page.e, page.callback];
      for (var i = 0; i < 6; i++) {
        expect(actualRoute[i], same(mask & (1 << i) == 0 ? expected[i] : null));
        expect(actualPage[i], same(mask & (1 << i) == 0 ? expected[i] : null));
      }
      expect((page as FlaxPageConfiguration).flaxPageLease, same(pageLease));
      expect(lease.onDiscard, isNotNull);
      lease.onDiscard!();
      expect(lease.disposed, isTrue);
    }
    defaults.dispose();
  });
}
""",
      );
    },
  );
}
