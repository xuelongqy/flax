import 'dart:io';
import 'dart:convert';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

const _contract = FlaxCodegenClassSelection(
  {},
  kind: 'widgetInterface',
  getters: ['child', 'count'],
  setters: ['count'],
  methods: {
    'identity': ['value'],
    'narrow': ['child'],
    'callback': ['value'],
    'recursive': ['value'],
    'nullable': ['value'],
    'fail': [],
    'update': ['delta'],
    'mounted': ['context'],
    'decorate': ['context', 'child'],
    'children': ['values'],
    'positional': ['a', 'b'],
    'widened': ['value'],
    'named': ['value', 'suffix', 'mode'],
    'choose': ['value'],
    'map': ['value', 'convert'],
    'later': ['value'],
    'maybe': ['value'],
    'stream': ['value'],
    'record': ['value'],
    '[]': ['index'],
    '[]=': ['index', 'value'],
    'unary-': [],
  },
);
void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));
  final library = Uri.file(
    p.join(Directory.current.path, 'test/fixtures/plugin/widget_methods.dart'),
  ).toString();
  FlaxCodegenBindingConfig config(
    Map<String, FlaxCodegenClassSelection> classes, {
    String name = 'plugin',
  }) => FlaxCodegenBindingConfig(
    name,
    library,
    '@example/$name',
    'unused.dart',
    'unused.ts',
    classes,
  );
  test(
    'native interface signatures compile and forward without bridge conversion',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final module = await parser.parse(
        config({
          'NativeContract': _contract,
          'NativeAlias': _contract,
          'NativeTile': const FlaxCodegenClassSelection(
            {'': []},
            widgetInterfaces: ['NativeContract', 'NativeAlias'],
          ),
        }),
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      final members = module.classes.last.widgetMembers;
      expect(members, hasLength(25));
      expect(
        module.types.map((t) => t.name),
        isNot(contains('NativeMode')),
        reason: 'Native signature dependencies are not JS API',
      );
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: '''
import {NativeTile, type NativeContract} from './plugin.js';
const tile: NativeContract = NativeTile();
// @ts-expect-error Interface methods are Dart-only.
tile.mounted(null);
// @ts-expect-error Interface setters are Dart-only.
tile.count = 1;
''',
        dartTestSource:
            '''
class Probe extends api.SizedBox implements api.NativeContract {
  Probe(this.configuration);
  final api.Widget configuration;
  ${members.map((m) => m.source).join('\n')}
  @override
  dynamic noSuchMethod(Invocation invocation) => super.noSuchMethod(invocation);
}
void main() {
  testWidgets('native arguments and results preserve identity', (tester) async {
    final native = api.NativeTile();
    final probe = Probe(native);
    probe.count = 4;
    probe.update(3);
    expect(native.count, 7);
    expect(probe[2], 9);
    probe[2] = 11;
    expect(-probe, -9);
    expect(probe.positional(2), 9);
    expect(probe.widened(), 1.5);
    expect(probe.positional(2, 8), 10);
    expect(probe.named(value: 'x'), 'x:compact');
    expect(probe.named(value: 'x', suffix: 'y', mode: api.NativeMode.expanded), 'xy:expanded');
    expect(identical(probe.child, native.child), isTrue);
    expect(identical(probe.choose(native.child), native.child), isTrue);
    expect(probe.map<int, String>(2, (value) => 'n\$value'), 'n2');
    expect(identical(probe.identity(native.child), native.child), isTrue);
    expect(identical(probe.narrow(native.child), native.child), isTrue);
    expect(() => probe.narrow(native), throwsA(isA<TypeError>()));
    api.Widget callback({required api.Widget child}) => child;
    expect(identical(probe.callback(callback), callback), isTrue);
    expect(probe.recursive<String>('text'), 'text');
    expect(probe.nullable(), isNull);
    expect(probe.nullable('value'), 'value');
    expect(probe.fail, throwsStateError);
    final children = [native.child];
    expect(identical(probe.children(children), children), isTrue);
    final future = Future<api.Widget>.value(native.child);
    expect(identical(probe.later(future), future), isTrue);
    expect(probe.maybe(4), 4);
    final stream = Stream<int>.value(1);
    expect(identical(probe.stream(stream), stream), isTrue);
    final record = (native.child, values: <String, Set<int>>{'x': {1}});
    expect(identical(probe.record(record).values, record.values), isTrue);
    await tester.pumpWidget(native);
    final context = tester.element(find.byWidget(native));
    expect(probe.mounted(context), isTrue);
    expect(identical(probe.decorate(context, native.child), native.child), isTrue);
  });
}
''',
      );
    },
  );
  test(
    'native signatures survive semantic projection and provider-only selection',
    () async {
      final providerParser = FlaxCodegenBindingParser(root);
      addTearDown(providerParser.dispose);
      const sdkLibrary = 'package:cupertino_ui/cupertino_ui.dart';
      FlaxCodegenBindingConfig sdkConfig(
        String name,
        Map<String, FlaxCodegenClassSelection> classes,
      ) => FlaxCodegenBindingConfig(
        name,
        sdkLibrary,
        '@example/$name',
        'unused.dart',
        'unused.ts',
        classes,
      );
      final provider = await providerParser.parse(
        sdkConfig('contracts', {
          'ObstructingPreferredSizeWidget': const FlaxCodegenClassSelection(
            {},
            kind: 'widgetInterface',
            getters: ['preferredSize'],
            methods: {
              'shouldFullyObstruct': ['context'],
            },
          ),
        }),
      );
      final diagnostics = FlaxCodegenManifestDiagnostics('fixture');
      final json = FlaxCodegenManifestCodec.encodeModule(provider);
      final decoded = FlaxCodegenManifestCodec.decodeModule(
        json,
        diagnostics,
        '',
        'contracts',
      )!;
      expect(diagnostics.items, isEmpty);
      expect(decoded.classes.single.widgetMembers, hasLength(2));
      for (final mutation in ['field', 'kind', 'imports', 'duplicate']) {
        final malformed = jsonDecode(jsonEncode(json)) as Map<String, dynamic>;
        final classes = malformed['classes'] as List<dynamic>;
        final members =
            (classes.single as Map<String, dynamic>)['widgetMembers']
                as List<dynamic>;
        final first = members.first as Map<String, dynamic>;
        switch (mutation) {
          case 'field':
            first['unknown'] = true;
          case 'kind':
            first['kind'] = 'bridge';
          case 'imports':
            first['imports'] = {
              'package:fixture/src/private.dart': '_flaxNative0',
            };
          case 'duplicate':
            members.add(first);
        }
        final errors = FlaxCodegenManifestDiagnostics('malformed');
        expect(
          FlaxCodegenManifestCodec.decodeModule(
            malformed,
            errors,
            '',
            'contracts',
          ),
          isNull,
          reason: mutation,
        );
        expect(errors.items, isNotEmpty, reason: mutation);
      }

      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      parser.prepareModules([decoded]);
      final consumer = await parser.parse(
        sdkConfig('plugin', {
          'CupertinoNavigationBar': const FlaxCodegenClassSelection(
            {'': []},
            widgetInterfaces: ['ObstructingPreferredSizeWidget'],
          ),
        }),
      );
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([decoded, consumer]),
        consumer,
      );
    },
  );
  test('incompatible interface obligations fail during generation', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final invalid = FlaxCodegenBindingConfig(
      'invalid',
      Uri.file(
        p.join(
          Directory.current.path,
          'test/fixtures/plugin/widget_methods_conflict.dart',
        ),
      ).toString(),
      '@example/invalid',
      'unused.dart',
      'unused.ts',
      {
        'CountContract': const FlaxCodegenClassSelection(
          {},
          kind: 'widgetInterface',
          getters: ['count'],
        ),
        'TextContract': const FlaxCodegenClassSelection(
          {},
          kind: 'widgetInterface',
          getters: ['count'],
        ),
        'ConflictingTile': const FlaxCodegenClassSelection(
          {'': []},
          widgetInterfaces: ['CountContract', 'TextContract'],
        ),
      },
    );
    await expectLater(
      parser.parse(invalid),
      throwsA(
        isA<StateError>().having(
          (e) => e.message,
          'diagnostic',
          contains('Conflicting interface signatures'),
        ),
      ),
    );
  });

  test(
    'missing selections and inaccessible native signatures fail closed',
    () async {
      for (final selected in <String, FlaxCodegenClassSelection>{
        'NativeContract': const FlaxCodegenClassSelection(
          {},
          kind: 'widgetInterface',
        ),
        'GenericContract': const FlaxCodegenClassSelection(
          {},
          kind: 'widgetInterface',
          getters: ['value'],
        ),
        'HostCollision': const FlaxCodegenClassSelection(
          {},
          kind: 'widgetInterface',
          getters: ['configuration'],
        ),
        'JsConsumer': const FlaxCodegenClassSelection(
          {},
          kind: 'object',
          methods: {
            'invoke': ['callback'],
          },
        ),
        'PrivateContract': const FlaxCodegenClassSelection(
          {},
          kind: 'widgetInterface',
          getters: ['value'],
        ),
        'PrivateDefaultContract': const FlaxCodegenClassSelection(
          {},
          kind: 'widgetInterface',
          methods: {
            'read': ['value'],
          },
        ),
      }.entries) {
        final parser = FlaxCodegenBindingParser(root);
        addTearDown(parser.dispose);
        await expectLater(
          parser.parse(
            config({
              if (selected.key == 'JsConsumer')
                'BuildContext': const FlaxCodegenClassSelection(
                  {},
                  kind: 'context',
                ),
              selected.key: selected.value,
            }),
          ),
          throwsStateError,
          reason: selected.key,
        );
      }
    },
  );
}
