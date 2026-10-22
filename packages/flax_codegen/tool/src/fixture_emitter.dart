import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/element/element.dart';
import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';

/// Shared preparation for local file-based fixtures, not published packages.
final class FlaxCodegenFixtureEmitter {
  FlaxCodegenFixtureEmitter(String packageRoot, File manifestFile) {
    final diagnostics = FlaxCodegenManifestDiagnostics(manifestFile.path);
    final manifest = FlaxCodegenManifest.parse(
      manifestFile.readAsStringSync(),
      diagnostics,
    );
    diagnostics.throwIfAny();
    // The envelope owns the module identity; the decoded semantic model omits it.
    _modules = [
      for (final module in manifest!.modules)
        _rewriteFixtureIds(
          module.model.module,
          const {},
          moduleId: module.moduleId.value,
        ),
    ];
    _rawToWire = {
      for (final module in manifest.modules)
        for (final row in module.model.identities)
          '${row.sourceIdentity.originatingUri}::${row.sourceIdentity.name}':
              row.wireId.value,
    };
    final wireToRaw = {
      for (final row in _rawToWire.entries) row.value: row.key,
    };
    _rawModules = [
      for (final module in _modules) _rewriteFixtureIds(module, wireToRaw),
    ];
    _typeOwners = {
      for (final module in manifest.modules)
        for (final row in module.model.identities)
          if (row.owner &&
              row.sourceIdentity.kind == FlaxCodegenDeclarationKind.type)
            wireToRaw[row.wireId.value]!: module.moduleId.value,
    };
    _contexts = AnalysisContextCollection(
      includedPaths: ['$packageRoot/pubspec.yaml'],
    );
    _packageRoot = packageRoot;
  }

  late final String _packageRoot;
  late final AnalysisContextCollection _contexts;
  late final List<FlaxCodegenModuleModel> _modules;
  late final List<FlaxCodegenModuleModel> _rawModules;
  late final Map<String, String> _rawToWire;
  late final Map<String, String> _typeOwners;

  Future<void> generate(
    FlaxCodegenBindingConfig config,
    Directory output, {
    bool automatic = false,
  }) async {
    stdout.writeln('Generating UI fixture: ${config.name}');
    final result = await _contexts.contexts.single.currentSession
        .getLibraryByUri(config.library);
    if (result is! LibraryElementResult) {
      throw StateError('Cannot resolve ${config.library}');
    }
    final selected = <String, FlaxCodegenClassSelection>{};
    for (final entry in config.classes.entries) {
      final element = result.element.exportNamespace.get2(entry.key);
      if (!flaxCodegenIsStateVariantOverlay(entry.value) &&
          element is InterfaceElement &&
          _typeOwners.containsKey(identity(element))) {
        continue;
      }
      selected[entry.key] = entry.value;
    }
    final local = FlaxCodegenBindingConfig(
      config.name,
      config.library,
      config.jsPackage,
      config.dartOutput,
      config.tsOutput,
      selected,
      additionalLibraries: config.additionalLibraries,
      functions: config.functions,
      extensions: config.extensions,
      callbackSnapshots: config.callbackSnapshots,
      imports: config.imports,
      types: config.types,
      typedefs: config.typedefs,
      topLevel: config.topLevel,
      publicLibraries: config.publicLibraries,
      automaticLibrary: config.automaticLibrary,
      automaticClasses: config.automaticClasses,
      automaticFunctions: config.automaticFunctions,
      automaticExtensions: config.automaticExtensions,
      overrides: config.overrides,
    );
    final parser = FlaxCodegenBindingParser(_packageRoot, contexts: _contexts);
    try {
      parser.prepareModules(
        _rawModules,
        dependencyTypeOwnerModules: _typeOwners,
      );
      await parser.prepare([local]);
      final selection = automatic
          ? (await parser.proposeLibrary(local)).config
          : local;
      final module = _rewriteFixtureIds(
        await parser.parse(selection),
        _rawToWire,
      );
      final emitter = FlaxCodegenBindingEmitter([..._modules, module]);
      File('${output.path}/${config.name}_bindings.dart')
          .writeAsStringSync(emitter.dart(module));
      File('${output.path}/${config.name}_bindings.ts')
          .writeAsStringSync(emitter.typescript(module));
    } finally {
      await parser.dispose();
    }
  }

  Future<void> dispose() => _contexts.dispose();
}

FlaxCodegenModuleModel _rewriteFixtureIds(
  FlaxCodegenModuleModel module,
  Map<String, String> idMap, {
  String? moduleId,
}) {
  Object? walk(Object? value) {
    if (value is Map) {
      final out = <String, Object?>{};
      for (final entry in value.entries) {
        final key = entry.key as String;
        final child = entry.value;
        if ({'id', 'stateWireId', 'wireId'}.contains(key) &&
            child is String &&
            idMap.containsKey(child)) {
          out[key] = idMap[child];
        } else if (key == 'supertypes' && child is List) {
          out[key] = [
            for (final item in child)
              item is String && idMap.containsKey(item) ? idMap[item]! : item,
          ];
        } else {
          out[key] = walk(child);
        }
      }
      return out;
    }
    if (value is List) {
      return [for (final item in value) walk(item)];
    }
    return value;
  }

  var rewritten = module;
  if (idMap.isNotEmpty) {
    final diagnostics = FlaxCodegenManifestDiagnostics('');
    // Local file: carriers are emitter-only and never enter a published Manifest.
    final encoded = FlaxCodegenManifestCodec.encodeModule(module)
      ..['typeLibraries'] = <String, Object?>{};
    final decoded = FlaxCodegenManifestCodec.decodeModule(
      walk(encoded),
      diagnostics,
      '',
      module.name,
    );
    diagnostics.throwIfAny();
    rewritten = decoded!;
  }
  return FlaxCodegenModuleModel(
    name: rewritten.name,
    library: rewritten.library,
    jsPackage: rewritten.jsPackage,
    dartOutput: module.dartOutput,
    tsOutput: module.tsOutput,
    classes: rewritten.classes,
    types: rewritten.types,
    typeLibraries: module.typeLibraries,
    functions: rewritten.functions,
    extensions: rewritten.extensions,
    snapshots: rewritten.snapshots,
    typedefs: rewritten.typedefs,
    topLevel: rewritten.topLevel,
    stateVariants: rewritten.stateVariants,
    publicLibraries: rewritten.publicLibraries,
    internalTypeNames: rewritten.internalTypeNames,
    moduleId: moduleId ?? module.moduleId,
    requiredCapabilities: module.requiredCapabilities,
  );
}
