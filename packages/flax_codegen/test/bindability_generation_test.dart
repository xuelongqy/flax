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
        p.join(root, 'packages/flax/bindings/config.yaml'),
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
    final module = await parser.parse(proposal.config);
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([core, module]),
      module,
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
  );
}
