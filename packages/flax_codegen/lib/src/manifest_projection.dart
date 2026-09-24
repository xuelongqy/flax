import 'dart:convert';

import 'diagnostic.dart';
import 'identity.dart';
import 'manifest.dart';
import 'manifest_codec.dart';
import 'model.dart';
import 'ownership.dart';

/// Immutable binding Manifest direct-dependency projection for one package root.
///
/// Not part of any public export. Callers supply an already-valid root envelope
/// and projections for each direct import. The factory flattens the transitive
/// graph fail-closed under [FlaxCodegenDiagnosticCode.manifest].
final class FlaxCodegenManifestProjection {
  FlaxCodegenManifestProjection._({
    required this.source,
    required this.manifest,
    required List<FlaxCodegenManifest> packageManifests,
    required Map<String, String> packageSources,
    required Map<String, _FrozenModule> modulesByModuleId,
    required Map<FlaxCodegenSourceIdentity, _AuthoritativeOwner> ownersBySource,
    required List<FlaxCodegenImportedPackage> importedPackages,
  }) : packageManifests = List.unmodifiable(packageManifests),
       _packageSources = Map.unmodifiable(packageSources),
       _modulesByModuleId = Map.unmodifiable(modulesByModuleId),
       _ownersBySource = Map.unmodifiable(ownersBySource),
       importedPackages = List.unmodifiable(importedPackages);

  /// Diagnostic source for this projection build.
  final String source;

  /// Root package envelope.
  final FlaxCodegenManifest manifest;

  /// Root plus every transitive dependency manifest, sorted by Dart package name.
  final List<FlaxCodegenManifest> packageManifests;

  /// Per Dart package diagnostic origin, including [manifest].
  final Map<String, String> _packageSources;

  final Map<String, _FrozenModule> _modulesByModuleId;
  final Map<FlaxCodegenSourceIdentity, _AuthoritativeOwner> _ownersBySource;

  /// Transitive packages excluding [manifest], diamond-deduplicated, sorted by
  /// Dart package name. Suitable for [FlaxCodegenOwnership.resolvePackage].
  final List<FlaxCodegenImportedPackage> importedPackages;

  /// Fresh frozen semantic snapshots keyed by `moduleId` value.
  Map<String, FlaxCodegenModuleModel> get modulesByModuleId =>
      Map.unmodifiable({
        for (final entry in _modulesByModuleId.entries)
          entry.key: entry.value.snapshot(),
      });

  /// Authoritative owner wire for [sourceIdentity], if any.
  FlaxCodegenWireId? authoritativeWireId(
    FlaxCodegenSourceIdentity sourceIdentity,
  ) => _ownersBySource[sourceIdentity]?.wireId;

  /// Authoritative imported-owner record for [sourceIdentity], if any.
  FlaxCodegenImportedOwner? authoritativeOwner(
    FlaxCodegenSourceIdentity sourceIdentity,
  ) {
    final owner = _ownersBySource[sourceIdentity];
    if (owner == null) return null;
    return FlaxCodegenImportedOwner(
      sourceIdentity: owner.sourceIdentity,
      wireId: owner.wireId,
      location: owner.location,
    );
  }

  /// Builds a projection from an already-valid root and direct dependency
  /// projections. Throws [FlaxCodegenException] with `FCG_MANIFEST` diagnostics.
  factory FlaxCodegenManifestProjection({
    required FlaxCodegenManifest root,
    required Map<String, FlaxCodegenManifestProjection> directDependencies,
    required String source,
  }) {
    final diagnostics = FlaxCodegenManifestDiagnostics(source);
    final built = _build(
      root: root,
      directDependencies: directDependencies,
      diagnostics: diagnostics,
    );
    diagnostics.throwIfAny();
    return built!;
  }
}

final class _FrozenModule {
  _FrozenModule({
    required this.name,
    required this.moduleId,
    required List<String> requiredCapabilities,
    required this.semanticJson,
  }) : requiredCapabilities = List<String>.unmodifiable(requiredCapabilities);

  final String name;
  final String moduleId;
  final List<String> requiredCapabilities;
  final String semanticJson;

  FlaxCodegenModuleModel snapshot() {
    final diagnostics = FlaxCodegenManifestDiagnostics('');
    final decoded = FlaxCodegenManifestCodec.decodeModule(
      jsonDecode(semanticJson),
      diagnostics,
      '',
      name,
    );
    diagnostics.throwIfAny();
    return FlaxCodegenModuleModel(
      name: decoded!.name,
      library: decoded.library,
      jsPackage: decoded.jsPackage,
      dartOutput: decoded.dartOutput,
      tsOutput: decoded.tsOutput,
      classes: decoded.classes,
      types: decoded.types,
      typeLibraries: decoded.typeLibraries,
      functions: decoded.functions,
      extensions: decoded.extensions,
      snapshots: decoded.snapshots,
      typedefs: decoded.typedefs,
      topLevel: decoded.topLevel,
      publicLibraries: decoded.publicLibraries,
      moduleId: moduleId,
      requiredCapabilities: requiredCapabilities,
      stateVariants: decoded.stateVariants,
    );
  }
}

final class _AuthoritativeOwner {
  const _AuthoritativeOwner({
    required this.dartPackage,
    required this.sourceIdentity,
    required this.wireId,
    required this.location,
  });

  final String dartPackage;
  final FlaxCodegenSourceIdentity sourceIdentity;
  final FlaxCodegenWireId wireId;
  final FlaxCodegenSourceLocation location;
}

final class _OwnerOccurrence {
  const _OwnerOccurrence({
    required this.dartPackage,
    required this.manifestSource,
    required this.identity,
    required this.location,
  });

  final String dartPackage;
  final String manifestSource;
  final FlaxCodegenManifestIdentity identity;
  final FlaxCodegenSourceLocation location;
}

FlaxCodegenManifestProjection? _build({
  required FlaxCodegenManifest root,
  required Map<String, FlaxCodegenManifestProjection> directDependencies,
  required FlaxCodegenManifestDiagnostics diagnostics,
}) {
  final start = diagnostics.items.length;
  _diagnoseDirectDependencies(
    root: root,
    directDependencies: directDependencies,
    diagnostics: diagnostics,
  );

  final byPackage = <String, FlaxCodegenManifest>{};
  final claimedSources = <String, Set<String>>{
    root.package: {diagnostics.source},
  };
  _addPackage(byPackage, claimedSources, root, diagnostics.source, diagnostics);
  for (final entry in directDependencies.entries) {
    final projection = entry.value;
    for (final package in projection.packageManifests) {
      if (package.package == root.package) {
        diagnostics.add(pointer: '/imports', message: 'Import cycle.');
        continue;
      }
      _addPackage(
        byPackage,
        claimedSources,
        package,
        _packageSourceOf(projection, package.package),
        diagnostics,
      );
    }
  }
  _diagnoseConflictingPackageSources(claimedSources, diagnostics);
  if (diagnostics.items.length != start) return null;
  final packageSources = <String, String>{
    for (final entry in claimedSources.entries) entry.key: entry.value.single,
  };

  final packages = byPackage.values.toList()
    ..sort((left, right) => left.package.compareTo(right.package));

  _diagnoseBindingNamespaces(packages, packageSources, diagnostics);
  _diagnoseDuplicateModuleIds(packages, packageSources, diagnostics);

  final ownersBySource = <FlaxCodegenSourceIdentity, List<_OwnerOccurrence>>{};
  final ownersByWire = <String, List<_OwnerOccurrence>>{};
  for (final package in packages) {
    final packageSource = packageSources[package.package]!;
    for (
      var moduleIndex = 0;
      moduleIndex < package.modules.length;
      moduleIndex++
    ) {
      final module = package.modules[moduleIndex];
      for (
        var identityIndex = 0;
        identityIndex < module.model.identities.length;
        identityIndex++
      ) {
        final identity = module.model.identities[identityIndex];
        if (!identity.owner) continue;
        final location = _manifestLocation(
          packageSource,
          package,
          moduleIndex,
          identityIndex,
        );
        final occurrence = _OwnerOccurrence(
          dartPackage: package.package,
          manifestSource: packageSource,
          identity: identity,
          location: location,
        );
        ownersBySource
            .putIfAbsent(identity.sourceIdentity, () => [])
            .add(occurrence);
        ownersByWire
            .putIfAbsent(identity.wireId.value, () => [])
            .add(occurrence);
      }
    }
  }

  _diagnoseAuthoritativeOwners(ownersBySource, ownersByWire, diagnostics);
  _diagnoseDependentOwnership(
    packages: packages,
    packageSources: packageSources,
    ownersBySource: ownersBySource,
    ownersByWire: ownersByWire,
    diagnostics: diagnostics,
  );

  final authoritative = <FlaxCodegenSourceIdentity, _AuthoritativeOwner>{};
  for (final entry in ownersBySource.entries) {
    if (entry.value.length != 1) continue;
    final occurrence = entry.value.single;
    authoritative[entry.key] = _AuthoritativeOwner(
      dartPackage: occurrence.dartPackage,
      sourceIdentity: occurrence.identity.sourceIdentity,
      wireId: occurrence.identity.wireId,
      location: occurrence.location,
    );
  }

  _diagnoseReferenceOwners(
    packages: packages,
    packageSources: packageSources,
    authoritative: authoritative,
    diagnostics: diagnostics,
  );
  _diagnoseReadonlyReferences(packages, packageSources, diagnostics);
  _diagnoseSetterReferences(packages, packageSources, diagnostics);
  _diagnoseExtensionReferences(packages, packageSources, diagnostics);
  if (diagnostics.items.length != start) return null;

  final modulesByModuleId = <String, _FrozenModule>{};
  for (final package in packages) {
    for (final module in package.modules) {
      final semantic = FlaxCodegenManifestCodec.encodeModule(
        module.model.module,
      );
      modulesByModuleId[module.moduleId.value] = _FrozenModule(
        name: module.name,
        moduleId: module.moduleId.value,
        requiredCapabilities: module.requiredCapabilities,
        semanticJson: jsonEncode(semantic),
      );
    }
  }

  final importedPackages = <FlaxCodegenImportedPackage>[
    for (final package in packages)
      if (package.package != root.package)
        _importedPackage(
          package: package,
          packageSource: packageSources[package.package]!,
          authoritative: authoritative,
        ),
  ];

  return FlaxCodegenManifestProjection._(
    source: diagnostics.source,
    manifest: root,
    packageManifests: packages,
    packageSources: packageSources,
    modulesByModuleId: modulesByModuleId,
    ownersBySource: authoritative,
    importedPackages: importedPackages,
  );
}

void _diagnoseDirectDependencies({
  required FlaxCodegenManifest root,
  required Map<String, FlaxCodegenManifestProjection> directDependencies,
  required FlaxCodegenManifestDiagnostics diagnostics,
}) {
  final expected = root.imports;
  final expectedSet = expected.toSet();
  final actualKeys = directDependencies.keys.toList()..sort();
  final actualSet = actualKeys.toSet();

  for (var index = 0; index < expected.length; index++) {
    final name = expected[index];
    if (!actualSet.contains(name)) {
      diagnostics.add(
        pointer: flaxCodegenManifestPointer('/imports', '$index'),
        message: 'Missing import.',
      );
    }
  }
  for (final name in actualKeys) {
    if (!expectedSet.contains(name)) {
      diagnostics.add(
        pointer: flaxCodegenManifestPointer('/imports', name),
        message: 'Unexpected import.',
      );
      continue;
    }
    if (name == root.package) {
      diagnostics.add(pointer: '/imports', message: 'Self-import.');
    }
    final projection = directDependencies[name]!;
    if (projection.manifest.package != name) {
      diagnostics.add(
        pointer: flaxCodegenManifestPointer('/imports', name),
        message: 'Import package mismatch.',
      );
    }
  }
}

void _addPackage(
  Map<String, FlaxCodegenManifest> byPackage,
  Map<String, Set<String>> claimedSources,
  FlaxCodegenManifest package,
  String packageSource,
  FlaxCodegenManifestDiagnostics diagnostics,
) {
  final prior = byPackage[package.package];
  if (prior == null) {
    byPackage[package.package] = package;
    claimedSources.putIfAbsent(package.package, () => {}).add(packageSource);
    return;
  }
  if (prior.encode() != package.encode()) {
    diagnostics.add(pointer: '', message: 'Conflicting package projection.');
    return;
  }
  claimedSources.putIfAbsent(package.package, () => {}).add(packageSource);
}

void _diagnoseConflictingPackageSources(
  Map<String, Set<String>> claimedSources,
  FlaxCodegenManifestDiagnostics diagnostics,
) {
  final packages = claimedSources.keys.toList()..sort();
  for (final package in packages) {
    final sources = claimedSources[package]!.toList()..sort();
    if (sources.length < 2) continue;
    for (final source in sources) {
      _addForPackage(diagnostics, source, '', 'Conflicting package source.');
    }
  }
}

String _packageSourceOf(
  FlaxCodegenManifestProjection projection,
  String dartPackage,
) => projection._packageSources[dartPackage]!;

void _diagnoseBindingNamespaces(
  List<FlaxCodegenManifest> packages,
  Map<String, String> packageSources,
  FlaxCodegenManifestDiagnostics diagnostics,
) {
  final byNamespace = <String, List<FlaxCodegenManifest>>{};
  for (final package in packages) {
    byNamespace
        .putIfAbsent(package.bindingNamespace.value, () => [])
        .add(package);
  }
  for (final group in byNamespace.values) {
    if (group.length < 2) continue;
    final names = {for (final package in group) package.package};
    if (names.length < 2) continue;
    for (final package in group) {
      _addForPackage(
        diagnostics,
        packageSources[package.package]!,
        '/bindingNamespace',
        'Duplicate bindingNamespace.',
      );
    }
  }
}

void _diagnoseDuplicateModuleIds(
  List<FlaxCodegenManifest> packages,
  Map<String, String> packageSources,
  FlaxCodegenManifestDiagnostics diagnostics,
) {
  final byModuleId = <String, List<(FlaxCodegenManifest, int)>>{};
  for (final package in packages) {
    for (var index = 0; index < package.modules.length; index++) {
      final module = package.modules[index];
      byModuleId.putIfAbsent(module.moduleId.value, () => []).add((
        package,
        index,
      ));
    }
  }
  for (final group in byModuleId.values) {
    if (group.length < 2) continue;
    for (final entry in group) {
      final package = entry.$1;
      final index = entry.$2;
      _addForPackage(
        diagnostics,
        packageSources[package.package]!,
        flaxCodegenManifestPointer('/modules', '$index'),
        'Duplicate moduleId.',
      );
    }
  }
}

void _diagnoseAuthoritativeOwners(
  Map<FlaxCodegenSourceIdentity, List<_OwnerOccurrence>> ownersBySource,
  Map<String, List<_OwnerOccurrence>> ownersByWire,
  FlaxCodegenManifestDiagnostics diagnostics,
) {
  for (final group in ownersBySource.values) {
    if (group.length < 2) continue;
    final wires = {for (final owner in group) owner.identity.wireId.value};
    final message = wires.length > 1
        ? 'Conflicting sourceIdentity.'
        : 'Duplicate sourceIdentity.';
    for (final owner in group) {
      _addForPackage(
        diagnostics,
        owner.manifestSource,
        owner.location.pointer,
        message,
      );
    }
  }
  for (final group in ownersByWire.values) {
    if (group.length < 2) continue;
    final sources = {for (final owner in group) owner.identity.sourceIdentity};
    if (sources.length < 2) continue;
    for (final owner in group) {
      _addForPackage(
        diagnostics,
        owner.manifestSource,
        owner.location.pointer,
        'Conflicting wireId.',
      );
    }
  }
}

void _diagnoseDependentOwnership({
  required List<FlaxCodegenManifest> packages,
  required Map<String, String> packageSources,
  required Map<FlaxCodegenSourceIdentity, List<_OwnerOccurrence>>
  ownersBySource,
  required Map<String, List<_OwnerOccurrence>> ownersByWire,
  required FlaxCodegenManifestDiagnostics diagnostics,
}) {
  final byName = {for (final package in packages) package.package: package};
  for (final package in packages) {
    final imported = _importClosure(package.package, byName);
    if (imported.isEmpty) continue;
    final importedSources = <FlaxCodegenSourceIdentity>{};
    final importedWires = <String>{};
    for (final name in imported) {
      final dependency = byName[name]!;
      for (final module in dependency.modules) {
        for (final identity in module.model.identities) {
          if (!identity.owner) continue;
          importedSources.add(identity.sourceIdentity);
          importedWires.add(identity.wireId.value);
        }
      }
    }
    for (
      var moduleIndex = 0;
      moduleIndex < package.modules.length;
      moduleIndex++
    ) {
      final module = package.modules[moduleIndex];
      for (
        var identityIndex = 0;
        identityIndex < module.model.identities.length;
        identityIndex++
      ) {
        final identity = module.model.identities[identityIndex];
        if (!identity.owner) continue;
        final pointer = _identityPointer(package, moduleIndex, identityIndex);
        if (importedSources.contains(identity.sourceIdentity)) {
          _addForPackage(
            diagnostics,
            packageSources[package.package]!,
            pointer,
            'Dependent republish.',
          );
          for (final owner
              in ownersBySource[identity.sourceIdentity] ??
                  const <_OwnerOccurrence>[]) {
            if (owner.dartPackage == package.package) continue;
            if (!imported.contains(owner.dartPackage)) continue;
            _addForPackage(
              diagnostics,
              owner.manifestSource,
              owner.location.pointer,
              'Dependent republish.',
            );
          }
        }
        if (importedWires.contains(identity.wireId.value)) {
          _addForPackage(
            diagnostics,
            packageSources[package.package]!,
            pointer,
            'Dependent shadow.',
          );
          for (final owner
              in ownersByWire[identity.wireId.value] ??
                  const <_OwnerOccurrence>[]) {
            if (owner.dartPackage == package.package) continue;
            if (!imported.contains(owner.dartPackage)) continue;
            _addForPackage(
              diagnostics,
              owner.manifestSource,
              owner.location.pointer,
              'Dependent shadow.',
            );
          }
        }
      }
    }
  }
}

void _diagnoseReferenceOwners({
  required List<FlaxCodegenManifest> packages,
  required Map<String, String> packageSources,
  required Map<FlaxCodegenSourceIdentity, _AuthoritativeOwner> authoritative,
  required FlaxCodegenManifestDiagnostics diagnostics,
}) {
  for (final package in packages) {
    final packageSource = packageSources[package.package]!;
    for (
      var moduleIndex = 0;
      moduleIndex < package.modules.length;
      moduleIndex++
    ) {
      final module = package.modules[moduleIndex];
      for (
        var identityIndex = 0;
        identityIndex < module.model.identities.length;
        identityIndex++
      ) {
        final identity = module.model.identities[identityIndex];
        if (identity.owner) continue;
        final pointer = _identityPointer(package, moduleIndex, identityIndex);
        final owner = authoritative[identity.sourceIdentity];
        if (owner == null) {
          _addForPackage(diagnostics, packageSource, pointer, 'Missing owner.');
          continue;
        }
        if (owner.wireId != identity.wireId ||
            owner.sourceIdentity != identity.sourceIdentity) {
          _addForPackage(
            diagnostics,
            packageSource,
            pointer,
            'Owner mismatch.',
          );
        }
      }
    }
  }
}

void _diagnoseReadonlyReferences(
  List<FlaxCodegenManifest> packages,
  Map<String, String> sources,
  FlaxCodegenManifestDiagnostics diagnostics,
) {
  final providers = <String, FlaxCodegenTopLevelGetterModel>{
    for (final package in packages)
      for (final module in package.modules)
        for (final getter
            in module.model.module.topLevel?.getters ??
                <FlaxCodegenTopLevelGetterModel>[])
          if (!getter.isReference) getter.id: getter,
  };
  for (final package in packages) {
    for (final (moduleIndex, module) in package.modules.indexed) {
      for (final (getterIndex, getter)
          in (module.model.module.topLevel?.getters ??
                  <FlaxCodegenTopLevelGetterModel>[])
              .indexed) {
        if (!getter.isReference) continue;
        final provider = providers[getter.id];
        if (provider == null ||
            provider.name != getter.name ||
            provider.kind != getter.kind ||
            provider.literal != getter.literal ||
            jsonEncode(FlaxCodegenManifestCodec.encodeTypeRef(provider.type)) !=
                jsonEncode(
                  FlaxCodegenManifestCodec.encodeTypeRef(getter.type),
                )) {
          _addForPackage(
            diagnostics,
            sources[package.package]!,
            '/modules/$moduleIndex/model/topLevel/getters/$getterIndex',
            'Readonly reference must preserve the public provider declaration.',
          );
        }
      }
    }
  }
}

void _diagnoseSetterReferences(
  List<FlaxCodegenManifest> packages,
  Map<String, String> sources,
  FlaxCodegenManifestDiagnostics diagnostics,
) {
  final providers = <String, FlaxCodegenTopLevelSetterModel>{
    for (final package in packages)
      for (final module in package.modules)
        for (final setter
            in module.model.module.topLevel?.setters ??
                <FlaxCodegenTopLevelSetterModel>[])
          if (!setter.isReference) setter.id: setter,
  };
  for (final package in packages) {
    for (final (moduleIndex, module) in package.modules.indexed) {
      for (final (setterIndex, setter)
          in (module.model.module.topLevel?.setters ??
                  <FlaxCodegenTopLevelSetterModel>[])
              .indexed) {
        if (!setter.isReference) continue;
        final provider = providers[setter.id];
        if (provider == null ||
            provider.name != setter.name ||
            jsonEncode(FlaxCodegenManifestCodec.encodeTypeRef(provider.type)) !=
                jsonEncode(
                  FlaxCodegenManifestCodec.encodeTypeRef(setter.type),
                )) {
          _addForPackage(
            diagnostics,
            sources[package.package]!,
            '/modules/$moduleIndex/model/topLevel/setters/$setterIndex',
            'Setter reference must preserve the public provider declaration.',
          );
        }
      }
    }
  }
}

Set<String> _importClosure(
  String packageName,
  Map<String, FlaxCodegenManifest> byName,
) {
  final seen = <String>{};
  void walk(String name) {
    final package = byName[name];
    if (package == null) return;
    for (final importName in package.imports) {
      if (!seen.add(importName)) continue;
      walk(importName);
    }
  }

  walk(packageName);
  return seen;
}

FlaxCodegenImportedPackage _importedPackage({
  required FlaxCodegenManifest package,
  required String packageSource,
  required Map<FlaxCodegenSourceIdentity, _AuthoritativeOwner> authoritative,
}) {
  final owners = <FlaxCodegenImportedOwner>[
    for (final entry in authoritative.entries)
      if (entry.value.dartPackage == package.package)
        FlaxCodegenImportedOwner(
          sourceIdentity: entry.value.sourceIdentity,
          wireId: entry.value.wireId,
          location: entry.value.location,
        ),
  ]..sort(_compareImportedOwners);
  return FlaxCodegenImportedPackage(
    dartPackage: package.package,
    namespace: package.bindingNamespace,
    source: packageSource,
    owners: owners,
  );
}

int _compareImportedOwners(
  FlaxCodegenImportedOwner left,
  FlaxCodegenImportedOwner right,
) {
  final source = left.sourceIdentity.originatingUri.compareTo(
    right.sourceIdentity.originatingUri,
  );
  if (source != 0) return source;
  final name = left.sourceIdentity.name.compareTo(right.sourceIdentity.name);
  if (name != 0) return name;
  final kind = left.sourceIdentity.kind.name.compareTo(
    right.sourceIdentity.kind.name,
  );
  if (kind != 0) return kind;
  return left.wireId.value.compareTo(right.wireId.value);
}

FlaxCodegenSourceLocation _manifestLocation(
  String packageSource,
  FlaxCodegenManifest package,
  int moduleIndex,
  int identityIndex,
) => FlaxCodegenSourceLocation(
  source: packageSource,
  offset: 0,
  line: 1,
  column: 1,
  pointer: _identityPointer(package, moduleIndex, identityIndex),
);

String _identityPointer(
  FlaxCodegenManifest package,
  int moduleIndex,
  int identityIndex,
) => flaxCodegenManifestPointer(
  flaxCodegenManifestPointer(
    flaxCodegenManifestPointer(
      flaxCodegenManifestPointer('/modules', '$moduleIndex'),
      'model',
    ),
    'identities',
  ),
  '$identityIndex',
);

void _addForPackage(
  FlaxCodegenManifestDiagnostics diagnostics,
  String packageSource,
  String pointer,
  String message,
) {
  diagnostics.items.add(
    FlaxCodegenDiagnostic(
      code: FlaxCodegenDiagnosticCode.manifest,
      source: packageSource,
      offset: 0,
      line: 1,
      column: 1,
      pointer: pointer,
      message: message,
    ),
  );
}

void _diagnoseExtensionReferences(
  List<FlaxCodegenManifest> packages,
  Map<String, String> sources,
  FlaxCodegenManifestDiagnostics diagnostics,
) {
  final providers = <String, FlaxCodegenExtensionModel>{};
  final declarations = <String>{};
  for (final package in packages) {
    for (final module in package.modules) {
      final model = module.model.module;
      for (final extension in model.extensions) {
        if (!extension.isReference &&
            !declarations.add(
              '${extension.originatingUri}::${extension.name}',
            )) {
          _addForPackage(
            diagnostics,
            sources[package.package]!,
            '/modules',
            'Duplicate extension owner: ${extension.name}.',
          );
        }
        if (extension.isReference ||
            (model.publicLibraries.isNotEmpty &&
                !model.publicLibraries.any(
                  (route) => route.exports.contains(extension.name),
                ))) {
          continue;
        }
        for (final member in extension.members) {
          providers[member.id] = extension;
        }
      }
    }
  }
  for (final package in packages) {
    for (final (moduleIndex, module) in package.modules.indexed) {
      for (final (extensionIndex, extension)
          in module.model.module.extensions.indexed) {
        if (!extension.isReference) continue;
        for (final (memberIndex, member) in extension.members.indexed) {
          final provider = providers[member.id];
          final original = provider?.members
              .where((m) => m.id == member.id)
              .firstOrNull;
          Map<String, Object?> declaration(
            FlaxCodegenExtensionModel extension,
          ) => FlaxCodegenManifestCodec.encodeExtension(extension)
            ..remove('members')
            ..remove('isReference');
          if (provider == null ||
              original == null ||
              jsonEncode(declaration(extension)) !=
                  jsonEncode(declaration(provider)) ||
              extension.name != provider.name ||
              extension.originatingUri != provider.originatingUri ||
              member.kind != original.kind ||
              member.name != original.name ||
              jsonEncode(FlaxCodegenManifestCodec.encodeMethod(member.call)) !=
                  jsonEncode(
                    FlaxCodegenManifestCodec.encodeMethod(original.call),
                  )) {
            _addForPackage(
              diagnostics,
              sources[package.package]!,
              '/modules/$moduleIndex/model/extensions/$extensionIndex/members/$memberIndex',
              'Extension reference must preserve the public provider declaration.',
            );
          }
        }
      }
    }
  }
}
