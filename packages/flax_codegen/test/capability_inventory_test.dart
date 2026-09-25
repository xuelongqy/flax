import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../tool/src/capability/assess.dart';
import '../tool/src/capability/inventory.dart';
import '../tool/src/capability/libraries.dart';
import '../tool/src/capability/model.dart';
import '../tool/src/capability/report.dart';

void main() {
  final repoRoot = _repoRoot();
  late AnalysisContextCollection collection;

  setUpAll(() {
    collection = AnalysisContextCollection(
      includedPaths: [p.absolute(repoRoot)],
    );
  });
  tearDownAll(() => collection.dispose());

  String fixture(String name) => Uri.file(
    p.join(repoRoot, 'packages/flax_codegen/test/fixtures/capability', name),
  ).toString();

  test('records show/hide, re-exports, and legal underscore names', () async {
    final shown = await inventoryLibrary(
      collection: collection,
      uri: fixture('discovery_show.dart'),
    );
    expect(shown.resolved, isTrue);
    final shownNames = shown.declarations.map((d) => d.name).toSet();
    expect(
      shownNames,
      containsAll([
        'PublicAlias',
        'topLevelMutable',
        'topLevelConst',
        'computedValue',
        'publicFunction',
        'under_score_function',
        'dollar\$value',
        'Parent',
        'Child',
        'PublicMixin',
        'Simple',
        'Enhanced',
        'PublicExtension',
        'PublicExtensionType',
        'CircularA',
        'CircularB',
      ]),
    );
    expect(shownNames, isNot(contains('HiddenClass')));
    expect(shownNames, isNot(contains('hiddenFunction')));

    final mutable = shown.declarations.singleWhere(
      (d) => d.name == 'topLevelMutable',
    );
    expect(mutable.kind, 'variable');
    expect(
      mutable.declaredMembers.map((m) => m.kind),
      containsAll(['getter', 'setter']),
    );
    final constant = shown.declarations.singleWhere(
      (d) => d.name == 'topLevelConst',
    );
    expect(constant.kind, 'const');
    expect(constant.declaredMembers.map((m) => m.kind), contains('getter'));

    final child = shown.declarations.singleWhere((d) => d.name == 'Child');
    expect(child.kind, 'class');
    expect(
      child.declaredMembers.map((m) => m.name),
      containsAll(['', 'under_score', '+']),
    );
    expect(
      child.interfaceMembers.map((m) => m.name),
      containsAll(['inheritedMethod', 'inheritedGetter']),
    );
    expect(isJsLegalName('under_score'), isFalse);
    expect(isJsLegalName('dollar\$value'), isFalse);

    final circular = shown.declarations.singleWhere(
      (d) => d.name == 'CircularA',
    );
    expect(
      circular.dependencies.any((id) => id.endsWith('::CircularB')),
      isTrue,
    );

    final hidden = await inventoryLibrary(
      collection: collection,
      uri: fixture('discovery_hide.dart'),
    );
    final hiddenNames = hidden.declarations.map((d) => d.name).toSet();
    expect(hiddenNames, isNot(contains('HiddenClass')));
    expect(hiddenNames, isNot(contains('hiddenFunction')));
  });

  test('keeps same-name types distinct by source identity', () async {
    final first = await inventoryLibrary(
      collection: collection,
      uri: fixture('same_name_entry_a.dart'),
    );
    final second = await inventoryLibrary(
      collection: collection,
      uri: fixture('same_name_entry_b.dart'),
    );
    expect(first.declarations.single.name, 'Twin');
    expect(second.declarations.single.name, 'Twin');
    expect(first.declarations.single.id, isNot(second.declarations.single.id));
    expect(
      first.declarations.single.sourceLibrary,
      contains('same_name_a.dart'),
    );
    expect(
      second.declarations.single.sourceLibrary,
      contains('same_name_b.dart'),
    );
  });

  test('inventories unnamed extensions with an excluded verdict', () async {
    final uri = fixture('extension_shapes.dart');
    final inventory = await inventoryLibrary(collection: collection, uri: uri);
    final unnamed = inventory.declarations.singleWhere(
      (declaration) =>
          declaration.kind == 'extension' && declaration.exportNames.isEmpty,
    );
    expect(unnamed.name, '<unnamed>');
    expect(unnamed.id, contains('<unnamed-extension@'));

    final resolved = await collection.contexts.first.currentSession
        .getLibraryByUri(uri);
    expect(resolved, isA<LibraryElementResult>());
    final element = (resolved as LibraryElementResult).element.extensions
        .singleWhere((extension) => extension.name == null);
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final assessment = await assessDeclaration(
      parser: parser,
      library: FlaxCodegenBindingConfig(
        'extensions',
        uri,
        '@example/extensions',
        'unused.dart',
        'unused.ts',
        const {},
      ),
      declaration: unnamed,
      lookup: (_) async => element,
    );
    expect(assessment.verdict, CapabilityVerdict.excluded);
    expect(assessment.reasonKind, CapabilityReasonKind.visibility);
    expect(
      assessment.diagnostics.map((diagnostic) => diagnostic.code),
      contains('unnamed_extension'),
    );
  });

  test('an inventory lookup failure is a generator gap', () async {
    final uri = fixture('discovery_show.dart');
    final inventory = await inventoryLibrary(collection: collection, uri: uri);
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final assessment = await assessDeclaration(
      parser: parser,
      library: FlaxCodegenBindingConfig(
        'discovery',
        uri,
        '@example/discovery',
        'unused.dart',
        'unused.ts',
        const {},
      ),
      declaration: inventory.declarations.first,
      lookup: (_) async => null,
    );
    expect(assessment.verdict, CapabilityVerdict.unsupported);
    expect(assessment.reasonKind, CapabilityReasonKind.generatorGap);
    expect(assessment.stages.automatic.status, CapabilityStageStatus.failed);
    expect(assessment.diagnostics.single.code, 'analysis_element_unavailable');
  });

  test(
    'assesses ordinary and enhanced enums with structured verdicts',
    () async {
      final uri = fixture('discovery_show.dart');
      final inventory = await inventoryLibrary(
        collection: collection,
        uri: uri,
      );
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      final config = FlaxCodegenBindingConfig(
        'discovery',
        uri,
        '@example/discovery',
        'unused.dart',
        'unused.ts',
        const {},
      );
      final proposal = await parser.proposeLibrary(config);
      applyAutomaticLibraryProposal(
        inventory: inventory,
        baselineProposal: proposal,
        proposal: proposal,
      );

      final simple = inventory.declarations.singleWhere(
        (declaration) => declaration.name == 'Simple',
      );
      expect(simple.assessment!.verdict, CapabilityVerdict.supported);
      expect(simple.assessment!.reasonKind, CapabilityReasonKind.none);

      final enhanced = inventory.declarations.singleWhere(
        (declaration) => declaration.name == 'Enhanced',
      );
      expect(enhanced.assessment!.verdict, CapabilityVerdict.limited);
      expect(
        enhanced.assessment!.reasonKind,
        CapabilityReasonKind.intentionalBoundary,
      );
      expect(
        enhanced.assessment!.diagnostics.map((diagnostic) => diagnostic.code),
        contains('enhanced_enum_members_not_bound'),
      );
    },
  );

  test('countInventory rejects unassessed declarations', () async {
    final inventory = await inventoryLibrary(
      collection: collection,
      uri: fixture('discovery_show.dart'),
    );
    final child = inventory.declarations.singleWhere((d) => d.name == 'Child');
    child.assessment = null;
    expect(() => countInventory(inventory), throwsStateError);
    expect(
      child.declaredMembers.any(
        (member) => !isJsLegalName(member.name) && member.name.isNotEmpty,
      ),
      isTrue,
    );
  });

  test('lists Flutter public barrels from package_config', () {
    final uris = flutterPublicLibraryUris(repoRoot);
    expect(uris, contains('package:flutter/foundation.dart'));
    expect(uris, contains('package:flutter/material.dart'));
    expect(uris, contains('package:flutter/widgets.dart'));
    expect(uris.any((uri) => uri.contains('/src/')), isFalse);
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
