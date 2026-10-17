import 'dart:io';
import 'dart:convert';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;
import 'fixtures/widget_interfaces_selection.dart';

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
    String? source,
  }) => FlaxCodegenBindingConfig(
    name,
    source ?? library,
    '@example/$name',
    'unused.dart',
    'unused.ts',
    classes,
  );
  test(
    'generic Widget contracts reuse native objects and proxy members',
    () async {
      final automatic = FlaxCodegenBindingParser(root);
      addTearDown(automatic.dispose);
      final core = await automatic.parse(
        FlaxCodegenBindingConfig.read(
          '$root/packages/flax/bindings/flax_bindings.yaml',
        ),
      );
      automatic.prepareModules([core]);
      final proposal = await automatic.proposeLibrary(
        config(
          {},
          source: Uri.file(
            p.join(
              Directory.current.path,
              'test/fixtures/plugin/widget_generic_interfaces.dart',
            ),
          ).toString(),
        ),
      );
      expect(
        proposal.config.classes['GenericContract']!.kind,
        'widgetInterface',
      );
      expect(proposal.config.classes['GenericContract']!.proxy, 'implements');
      expect(
        proposal.config.classes.keys,
        contains('GenericTile'),
        reason: proposal.skips
            .map((skip) => '${skip.target}: ${skip.reason}')
            .join('\n'),
      );
      expect(
        proposal.config.classes['GenericTile']!.widgetInterfaces,
        containsAll([
          'GenericContract',
          'HostCollision',
          'PrivateDefaultContract',
        ]),
      );
      final inferred = await automatic.parse(proposal.config);
      expect(
        inferred.classes
            .singleWhere((type) => type.name == 'GenericTile')
            .widgetInterfaces,
        hasLength(3),
      );
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([core, inferred]),
        inferred,
        consumerSource: '''
import {dartTypes} from '@flax/core/bindings';
import {GenericTile, type GenericContract, type HostCollision} from './plugin.js';
const tile = GenericTile.\$type(dartTypes.string)('value');
const contract: GenericContract<string> = tile;
const host: HostCollision = tile;
''',
      );
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final module = await parser.parse(
        config({
          'Key': const FlaxCodegenClassSelection({}, kind: 'object'),
          'BuildContext': const FlaxCodegenClassSelection({}, kind: 'context'),
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
          'PrivateDefaultContract': const FlaxCodegenClassSelection(
            {},
            kind: 'widgetInterface',
            methods: {
              'read': ['value'],
            },
          ),
          'GenericTile': const FlaxCodegenClassSelection(
            {
              '': ['value', 'child', 'key'],
            },
            widgetInterfaces: [
              'GenericContract',
              'HostCollision',
              'PrivateDefaultContract',
            ],
            proxy: 'extends',
            getters: ['value', 'configuration'],
            instanceMethods: {
              'read': ['value'],
              'describe': [],
              'build': ['context'],
            },
          ),
        }),
      );
      final tile = module.classes.last;
      expect(tile.widgetMembers, isEmpty);
      expect(
        tile.widgetInterfaces.first.declaration!.tsArguments.single.kind,
        'parameter',
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      expect(emitter.dart(module), isNot(contains('configuration as api.')));
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: '''
import {dartTypes} from '@flax/core/bindings';
import {GenericTile, type GenericContract, type HostCollision, type BuildContext} from './plugin.js';
const StringTile = GenericTile.\$type(dartTypes.string);
class Child extends StringTile {
  #prefix = 'JS';
  override read(value?: number): number { return super.read(value) + 1; }
  override describe(): string { return this.#prefix + ':' + super.describe(); }
  override build(context: BuildContext) { return super.build(context); }
}
const child: GenericContract<string> = new Child('value');
const host: HostCollision = new Child('configuration');
class Nested extends GenericTile.\$type(dartTypes.list(dartTypes.string)) {}
const nested: GenericContract<import('@flax/core/bindings').DartList<string>> = new Nested(['value']);
''',
      );
    },
  );
  test(
    'generic Widget contracts retain provider reuse after Manifest projection',
    () async {
      final providerParser = FlaxCodegenBindingParser(root);
      addTearDown(providerParser.dispose);
      final core = await providerParser.parse(
        FlaxCodegenBindingConfig.read(
          '$root/packages/flax/bindings/flax_bindings.yaml',
        ),
      );
      providerParser.prepareModules([core]);
      final provider = await providerParser.parse(
        config({
          'GenericContract': const FlaxCodegenClassSelection(
            {},
            kind: 'widgetInterface',
            getters: ['value'],
          ),
          'NativeParent': const FlaxCodegenClassSelection(
            {},
            kind: 'widgetInterface',
            methods: {
              'identity': ['value'],
            },
          ),
        }, name: 'contracts'),
      );
      final diagnostics = FlaxCodegenManifestDiagnostics('generic-provider');
      // Local fixtures resolve through the module library, not public carriers.
      final encoded = FlaxCodegenManifestCodec.encodeModule(provider)
        ..['typeLibraries'] = <String, Object?>{};
      final decoded = FlaxCodegenManifestCodec.decodeModule(
        encoded,
        diagnostics,
        '',
        'contracts',
      )!;
      diagnostics.throwIfAny();
      expect(decoded.classes.map((type) => type.kind), everyElement('object'));

      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      parser.prepareModules([core, decoded]);
      final consumer = await parser.parse(
        config({
          'GenericTile': const FlaxCodegenClassSelection(
            {
              '': ['value'],
            },
            widgetInterfaces: ['GenericContract'],
          ),
          'NativeTile': const FlaxCodegenClassSelection(
            {'': []},
            widgetInterfaces: ['NativeParent'],
          ),
        }),
      );
      expect(consumer.classes, hasLength(2));
      for (final type in consumer.classes) {
        expect(type.widgetInterfaces, hasLength(1));
        expect(type.widgetInterfaces.single.kind, 'object');
      }
      expect(consumer.classes.first.getters.single.name, 'value');
      expect(consumer.classes.last.methods.single.name, 'identity');
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([core, decoded, consumer]),
        consumer,
        consumerSource: '''
import {dartTypes, type Widget} from '@flax/core/bindings';
import type {GenericContract, NativeParent} from '@example/contracts';
import {GenericTile, NativeTile} from './plugin.js';
const value: GenericContract<string> = GenericTile.\$type(dartTypes.string)('value');
const native: NativeParent<Widget> = NativeTile();
''',
      );

      final automatic = FlaxCodegenBindingParser(root);
      addTearDown(automatic.dispose);
      automatic.prepareModules([core, decoded]);
      final automaticConfig = config(
        {},
        source: Uri.file(
          p.join(
            Directory.current.path,
            'test/fixtures/plugin/widget_generic_interfaces.dart',
          ),
        ).toString(),
      );
      final proposal = await automatic.proposeLibrary(automaticConfig);
      expect(proposal.config.classes, isNot(contains('GenericContract')));
      expect(
        proposal.config.classes['GenericTile']!.widgetInterfaces,
        contains('GenericContract'),
      );
      final inferred = await automatic.parse(proposal.config);
      expect(
        inferred.classes
            .singleWhere((type) => type.name == 'GenericTile')
            .widgetInterfaces
            .any((type) => type.id == decoded.classes.first.id),
        isTrue,
      );

      final incompleteJson = FlaxCodegenManifestCodec.encodeModule(decoded);
      (incompleteJson['classes'] as List).first['getters'] = <Object?>[];
      final incomplete = FlaxCodegenManifestCodec.decodeModule(
        incompleteJson,
        diagnostics,
        '',
        'contracts',
      )!;
      diagnostics.throwIfAny();
      final fallback = FlaxCodegenBindingParser(root);
      addTearDown(fallback.dispose);
      fallback.prepareModules([core, incomplete]);
      final fallbackProposal = await fallback.proposeLibrary(automaticConfig);
      expect(
        fallbackProposal.config.classes['GenericContract']!.kind,
        'widgetInterface',
      );
      expect(
        fallbackProposal.config.classes['GenericTile']!.widgetInterfaces,
        contains('GenericContract'),
      );
      await fallback.parse(fallbackProposal.config);
    },
  );
  test('file imports ignore private-looking checkout ancestors', () async {
    final temporary = Directory(p.join(Directory.current.path, 'test/fixtures'))
        .createTempSync('__w-');
    addTearDown(() => temporary.deleteSync(recursive: true));
    final target = File(p.join(temporary.path, 'src/_checkout/contracts.dart'))
      ..parent.createSync(recursive: true);
    File(
      p.join(
        Directory.current.path,
        'test/fixtures/plugin/widget_interfaces.dart',
      ),
    ).copySync(target.path);
    final privateLibrary = File(p.join(temporary.path, 'private_package.dart'))
      ..writeAsStringSync('''
import 'package:flutter/src/widgets/framework.dart' show Widget;
abstract class PrivateLibraryContract implements Widget {
  Widget get child;
}
''');
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final module = await parser.parse(
      FlaxCodegenBindingConfig(
        'plugin',
        target.uri.toString(),
        '@example/plugin',
        'unused.dart',
        'unused.ts',
        widgetInterfacesSelection,
      ),
    );
    await compileFixture(root, FlaxCodegenBindingEmitter([module]), module);
    final privateNative = await parser.parse(
      FlaxCodegenBindingConfig(
        'private',
        privateLibrary.uri.toString(),
        '@example/private',
        'unused.dart',
        'unused.ts',
        const {
          'PrivateLibraryContract': FlaxCodegenClassSelection(
            {},
            kind: 'widgetInterface',
            getters: ['child'],
          ),
        },
      ),
    );
    expect(
      FlaxCodegenBindingEmitter([privateNative]).dart(privateNative),
      isNot(contains('package:flutter/src/')),
    );
  });
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
      final members = module.classes.first.widgetMembers;
      expect(members, hasLength(25));
      expect(module.classes.last.widgetMembers, isEmpty);
      expect(emitter.dart(module), isNot(contains('configuration as api.')));
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
        dartTestSource: '''
void main() {
  testWidgets('native arguments and results preserve identity', (tester) async {
    final native = api.NativeTile();
    final api.NativeContract probe = native;
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
    timeout: const Timeout(Duration(minutes: 3)),
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
    'native signatures keep private defaults and avoid host name collisions',
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
        if (selected.key != 'NativeContract') {
          final module = await parser.parse(
            config({selected.key: selected.value}),
          );
          expect(
            module.classes.single.kind,
            selected.key == 'GenericContract' ? 'object' : 'widgetInterface',
          );
          FlaxCodegenBindingEmitter([module]).dart(module);
          continue;
        }
        await expectLater(
          parser.parse(config({selected.key: selected.value})),
          throwsStateError,
          reason: selected.key,
        );
      }
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final module = await parser.parse(
        config({
          'BuildContext': const FlaxCodegenClassSelection({}, kind: 'context'),
          'JsConsumer': const FlaxCodegenClassSelection(
            {},
            kind: 'object',
            methods: {
              'invoke': ['callback'],
            },
          ),
        }),
      );
      expect(
        module.classes
            .firstWhere((type) => type.name == 'JsConsumer')
            .methods
            .single
            .parameters
            .single
            .type
            .result!
            .kind,
        'context',
      );
    },
  );
}
