import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/element/element.dart';
import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  test('automatic library surface compiles with Widget ownership and interfaces', () async {
    final root = p.normalize(p.join(Directory.current.path, '../..'));
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final core = await parser.parse(
      FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/flax_bindings.yaml'),
      ),
    );
    parser.prepareModules([core]);
    final proposal = await parser.proposeLibrary(
      FlaxCodegenBindingConfig(
        'auto_library',
        Uri.file(
          p.join(
            root,
            'packages/flax_codegen/test/fixtures/bindability/auto_library.dart',
          ),
        ).toString(),
        '@example/auto-library',
        'unused.dart',
        'unused.ts',
        const {},
      ),
    );
    expect(proposal.config.functions, contains('autoBuild'));
    final module = await parser.parse(proposal.config);
    expect(
      module.types.singleWhere((type) => type.name == 'AutoMode').enumNames,
      ['_unknown', 'compact', 'expanded'],
    );
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([core, module]),
      module,
      consumerSource: '''
import { AutoSortKey, AutoOrdinalKey, AutoContextBox, AutoMode } from './plugin.js';
const mode: AutoMode = AutoMode.values[0];
// @ts-expect-error Private constants remain available only through values/results.
AutoMode._unknown;
declare const base: AutoSortKey;
declare const child: AutoOrdinalKey;
declare const box: AutoContextBox;
base.compare(child);
child.compare(child);
const storage: Float64Array = child.storage;
// @ts-expect-error A covariant override keeps its actual narrower argument.
child.compare(base);
// @ts-expect-error A nullable reference still requires a Dart source brand.
box.store = {};
box.store = null;
''',
      dartTestSource:
          '''
void main() {
  test('private enum values preserve native identity and indices', () {
    final binding = auto_libraryBindings.types.whereType<FlaxEnumBinding>()
        .singleWhere((binding) => binding.id == '${module.types.singleWhere((type) => type.name == 'AutoMode').id}');
    final values = binding.values.values.cast<api.AutoMode>().toList();
    expect(values, api.AutoMode.values);
    expect(binding.values['compact'], api.AutoMode.compact);
    expect(values.map((value) => value.index), [0, 1, 2]);
    expect(binding.values['_unknown'], api.autoUnknownMode());
  });
}
''',
    );
  }, timeout: const Timeout(Duration(minutes: 3)));

  test(
    'foreign Widget and substituted callback proposals compile in Dart and TS',
    () async {
      final root = p.normalize(p.join(Directory.current.path, '../..'));
      final parser = FlaxCodegenBindingParser(root);
      final collection = AnalysisContextCollection(includedPaths: [root]);
      addTearDown(parser.dispose);
      addTearDown(collection.dispose);
      String fixture(String name) => Uri.file(
        p.join(root, 'packages/flax_codegen/test/fixtures/bindability', name),
      ).toString();

      final widgets = fixture('identity_types.dart');
      final callbacks = fixture('generic_callbacks.dart');
      FlaxCodegenBindingConfig config(
        Map<String, FlaxCodegenClassSelection> classes,
      ) => FlaxCodegenBindingConfig(
        'plugin',
        widgets,
        '@example/bindability',
        'unused.dart',
        'unused.ts',
        classes,
        additionalLibraries: [callbacks],
      );
      final proposals = <String, FlaxCodegenClassSelection>{};
      for (final (uri, name) in [
        (widgets, 'Box'),
        (callbacks, 'GenericCallbacks'),
      ]) {
        final result = await collection.contexts.first.currentSession
            .getLibraryByUri(uri);
        expect(result, isA<LibraryElementResult>());
        final element =
            (result as LibraryElementResult)
                    .element
                    .exportNamespace
                    .definedNames2[name]
                as InterfaceElement;
        final proposed = await parser.proposeSelection(
          element,
          library: config({}),
        );
        expect(proposed.selection, isNotNull);
        proposals[name] = FlaxCodegenClassSelection(
          proposed.selection!.constructors,
          kind: proposed.selection!.kind,
        );
      }
      final selected = config(proposals);
      await parser.prepare([selected]);
      final module = await parser.parse(selected);
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: """
import {Box, GenericCallbacks} from './plugin.js';
declare const child: Parameters<typeof Box>[0]['child'];
Box({child});
GenericCallbacks({
  callback: <T>(value: T, context: number): T => value,
  bounded: <T extends number>(value: T, context: number): T => value,
});
// @ts-expect-error A string-only function is not a generic identity callback.
GenericCallbacks({callback: (value: string) => value});
""",
      );
    },
    timeout: const Timeout(Duration(minutes: 3)),
  );

  test(
    'automatic proxy proposals compile without manual proxy selection',
    () async {
      final root = p.normalize(p.join(Directory.current.path, '../..'));
      final parser = FlaxCodegenBindingParser(root);
      final collection = AnalysisContextCollection(includedPaths: [root]);
      addTearDown(parser.dispose);
      addTearDown(collection.dispose);
      final uri = Uri.file(
        p.join(
          root,
          'packages/flax_codegen/test/fixtures/capability/class_modifier_shapes.dart',
        ),
      ).toString();
      FlaxCodegenBindingConfig config(
        Map<String, FlaxCodegenClassSelection> classes,
      ) => FlaxCodegenBindingConfig(
        'proxy_auto',
        uri,
        '@example/proxy-auto',
        'unused.dart',
        'unused.ts',
        classes,
      );
      final result = await collection.contexts.first.currentSession
          .getLibraryByUri(uri);
      expect(result, isA<LibraryElementResult>());
      final library = (result as LibraryElementResult).element;
      final selections = <String, FlaxCodegenClassSelection>{};
      for (final name in ['InterfaceBoxImpl', 'PureContract', 'AmbiguousBox']) {
        final proposed = await parser.proposeSelection(
          library.exportNamespace.definedNames2[name] as InterfaceElement,
          library: config(const {}),
        );
        expect(proposed.selection, isNotNull, reason: name);
        selections[name] = proposed.selection!;
      }

      final module = await parser.parse(config(selections));
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: """
import {AmbiguousBox, InterfaceBoxImpl, PureContract} from './plugin.js';
class ExtendedBox extends InterfaceBoxImpl {
  override get value(): number { return super.value + 1; }
}
const extended: number = new ExtendedBox().value;
const pure = PureContract.implement([], {read() { return 2; }});
const implemented: number = pure.read();
const ambiguous = AmbiguousBox.implement([], {get value() { return 3; }});
const fallback: number = ambiguous.value;
""",
      );
    },
    timeout: const Timeout(Duration(minutes: 3)),
  );

  test('mixed async accessors preserve shared extends dispatch', () async {
    final root = p.normalize(p.join(Directory.current.path, '../..'));
    final parser = FlaxCodegenBindingParser(root);
    final collection = AnalysisContextCollection(includedPaths: [root]);
    addTearDown(parser.dispose);
    addTearDown(collection.dispose);
    final coreConfig = FlaxCodegenBindingConfig.read(
      p.join(root, 'packages/flax/bindings/flax_bindings.yaml'),
    );
    await parser.prepare([coreConfig]);
    final core = await parser.parse(coreConfig);
    final uri = Uri.file(
      p.join(
        root,
        'packages/flax_codegen/test/fixtures/bindability/widget_probe.dart',
      ),
    ).toString();
    FlaxCodegenBindingConfig config(
      Map<String, FlaxCodegenClassSelection> classes,
    ) => FlaxCodegenBindingConfig(
      'mixed_accessors',
      uri,
      '@example/mixed-accessors',
      'unused.dart',
      'unused.ts',
      classes,
    );
    final result = await collection.contexts.first.currentSession
        .getLibraryByUri(uri);
    expect(result, isA<LibraryElementResult>());
    final library = (result as LibraryElementResult).element;
    final selections = <String, FlaxCodegenClassSelection>{};
    for (final name in ['MixedFutureProperty', 'MixedStreamProperty']) {
      final checkpoint = parser.checkpoint();
      final explicit = await parser.parse(
        config({
          name: const FlaxCodegenClassSelection(
            {'': []},
            kind: 'object',
            proxy: 'extends',
            getters: ['value'],
            setters: ['value'],
          ),
        }),
      );
      expect(explicit.classes.single.proxy!.kind, 'extends');
      parser.restore(checkpoint);
      final proposal = await parser.proposeSelection(
        library.exportNamespace.definedNames2[name] as InterfaceElement,
        library: config(const {}),
      );
      expect(
        proposal.selection?.proxy,
        'extends',
        reason:
            '$name: ${proposal.skips.map((skip) => skip.reason).join("; ")}',
      );
      expect(proposal.proxyCapability, FlaxCodegenProxyCapability.canExtend);
      expect(proposal.skips, isEmpty);
      selections[name] = proposal.selection!;
    }
    final module = await parser.parse(config(selections));
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([core, module]),
      module,
      consumerSource: '''
import {MixedFutureProperty, MixedStreamProperty} from './plugin.js';
let pending = Promise.resolve(4);
const future = MixedFutureProperty.implement([], {
  get value() { return pending; },
  set value(value: Promise<number>) { pending = value; },
});
const completion: Promise<number> = future.value;
future.value = Promise.resolve(5);
type Events = MixedStreamProperty['value'];
declare let events: Events;
const stream = MixedStreamProperty.implement([], {
  get value() { return events; },
  set value(value: Events) { events = value; },
});
stream.value = events;
''',
    );
  }, timeout: const Timeout(Duration(minutes: 3)));
}
