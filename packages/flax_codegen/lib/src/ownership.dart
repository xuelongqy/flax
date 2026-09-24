import 'config.dart';
import 'diagnostic.dart';
import 'identity.dart';
import 'package_metadata.dart';

/// Source span for an ownership claim or nominal reference.
final class FlaxCodegenSourceLocation {
  const FlaxCodegenSourceLocation({
    required this.source,
    required this.offset,
    required this.line,
    required this.column,
    required this.pointer,
  });

  final String source;
  final int offset;
  final int line;
  final int column;
  final String pointer;
}

/// Explicit local owner listing for one originating declaration.
final class FlaxCodegenOwnerClaim {
  const FlaxCodegenOwnerClaim({
    required this.sourceIdentity,
    required this.location,
  });

  final FlaxCodegenSourceIdentity sourceIdentity;
  final FlaxCodegenSourceLocation location;
}

/// Signature mention of a nominal declaration.
final class FlaxCodegenNominalReference {
  const FlaxCodegenNominalReference({
    required this.sourceIdentity,
    required this.location,
  });

  final FlaxCodegenSourceIdentity sourceIdentity;
  final FlaxCodegenSourceLocation location;
}

/// One sibling module in a single Dart package.
final class FlaxCodegenSiblingModuleInput {
  FlaxCodegenSiblingModuleInput({
    required String name,
    required String source,
    Iterable<FlaxCodegenOwnerClaim> claims = const [],
    Iterable<FlaxCodegenNominalReference> references = const [],
  }) : this._(
         name: name,
         source: source,
         claims: List.unmodifiable(List<FlaxCodegenOwnerClaim>.of(claims)),
         references: List.unmodifiable(
           List<FlaxCodegenNominalReference>.of(references),
         ),
         listing: const <String, FlaxCodegenSourceIdentity>{},
         locations: const <String, FlaxCodegenSourceLocation>{},
         specs: const <_ClaimSpec>[],
       );

  factory FlaxCodegenSiblingModuleInput.fromConfig({
    required FlaxCodegenBindingConfig config,
    required String source,
    required Map<String, FlaxCodegenSourceIdentity> listing,
    Iterable<FlaxCodegenOwnerClaim> claims = const [],
    Iterable<FlaxCodegenNominalReference> references = const [],
    Map<String, FlaxCodegenSourceLocation> locations = const {},
    Set<String> readonlyReferences = const {},
    Set<String> setterReferences = const {},
  }) {
    final types = List<String>.unmodifiable(List<String>.of(config.types));
    final classNames = List<String>.unmodifiable([
      for (final entry in config.classes.entries)
        if (!flaxCodegenIsStateVariantOverlay(entry.value)) entry.key,
    ]);
    final functionNames = List<String>.unmodifiable(
      List<String>.of(config.functions.keys),
    );
    final snapshots = List<String>.unmodifiable(
      List<String>.of(config.callbackSnapshots.keys),
    );
    return FlaxCodegenSiblingModuleInput._(
      name: config.name,
      source: source,
      claims: List.unmodifiable(List<FlaxCodegenOwnerClaim>.of(claims)),
      references: List.unmodifiable(
        List<FlaxCodegenNominalReference>.of(references),
      ),
      listing: Map<String, FlaxCodegenSourceIdentity>.unmodifiable(
        Map<String, FlaxCodegenSourceIdentity>.of(listing),
      ),
      locations: Map<String, FlaxCodegenSourceLocation>.unmodifiable(
        Map<String, FlaxCodegenSourceLocation>.of(locations),
      ),
      specs: List<_ClaimSpec>.unmodifiable([
        for (final name in classNames)
          _ClaimSpec(
            name,
            FlaxCodegenDeclarationKind.type,
            FlaxCodegenDiagnostic.jsonPointer(['classes', name]),
          ),
        for (final name in functionNames)
          _ClaimSpec(
            name,
            FlaxCodegenDeclarationKind.function,
            FlaxCodegenDiagnostic.jsonPointer(['functions', name]),
          ),
        for (final name in snapshots)
          _ClaimSpec(
            name,
            FlaxCodegenDeclarationKind.type,
            FlaxCodegenDiagnostic.jsonPointer(['callbackSnapshots', name]),
          ),
        for (final (index, name)
            in (config.topLevel?.getters ?? <String>[]).indexed)
          if (!readonlyReferences.contains(name))
            _ClaimSpec(
              name,
              FlaxCodegenDeclarationKind.readonly,
              FlaxCodegenDiagnostic.jsonPointer([
                'topLevel',
                'getters',
                '$index',
              ]),
            ),
        for (final (index, name)
            in (config.topLevel?.setters ?? <String>[]).indexed)
          if (!setterReferences.contains(name))
            _ClaimSpec(
              '$name=',
              FlaxCodegenDeclarationKind.function,
              FlaxCodegenDiagnostic.jsonPointer([
                'topLevel',
                'setters',
                '$index',
              ]),
            ),
        for (var index = 0; index < types.length; index++)
          _ClaimSpec(
            types[index],
            FlaxCodegenDeclarationKind.type,
            FlaxCodegenDiagnostic.jsonPointer(['types', '$index']),
          ),
      ]),
    );
  }

  FlaxCodegenSiblingModuleInput._({
    required this.name,
    required this.source,
    required this.claims,
    required this.references,
    required this._listing,
    required this._locations,
    required this._specs,
  });

  final String name;
  final String source;
  final List<FlaxCodegenOwnerClaim> claims;
  final List<FlaxCodegenNominalReference> references;
  final Map<String, FlaxCodegenSourceIdentity> _listing;
  final Map<String, FlaxCodegenSourceLocation> _locations;
  final List<_ClaimSpec> _specs;
}

/// Owned declaration after the local graph succeeds.
final class FlaxCodegenResolvedOwner {
  const FlaxCodegenResolvedOwner({
    required this.sourceIdentity,
    required this.wireId,
  });

  final FlaxCodegenSourceIdentity sourceIdentity;
  final FlaxCodegenWireId wireId;
}

/// Nominal mention resolved to its unique owner wireId.
final class FlaxCodegenResolvedReference {
  const FlaxCodegenResolvedReference({
    required this.sourceIdentity,
    required this.ownerWireId,
  });

  final FlaxCodegenSourceIdentity sourceIdentity;
  final FlaxCodegenWireId ownerWireId;
}

/// One module in a resolved local package.
final class FlaxCodegenResolvedModule {
  FlaxCodegenResolvedModule({
    required this.moduleId,
    required this.source,
    required List<FlaxCodegenResolvedOwner> owners,
    required List<FlaxCodegenResolvedReference> references,
    required List<String> requiredCapabilities,
  }) : owners = List.unmodifiable(owners),
       references = List.unmodifiable(references),
       requiredCapabilities = List.unmodifiable(requiredCapabilities);

  final FlaxCodegenModuleId moduleId;
  final String source;
  final List<FlaxCodegenResolvedOwner> owners;
  final List<FlaxCodegenResolvedReference> references;
  final List<String> requiredCapabilities;
}

/// Local ownership result for one Dart package.
final class FlaxCodegenResolvedPackage {
  FlaxCodegenResolvedPackage({
    required this.namespace,
    required List<FlaxCodegenResolvedModule> modules,
    this.dartPackage = '',
    List<FlaxCodegenImportedOwner> importedOwners = const [],
  }) : modules = List.unmodifiable(modules),
       importedOwners = List.unmodifiable(importedOwners);

  final String dartPackage;
  final FlaxCodegenBindingNamespace namespace;
  final List<FlaxCodegenResolvedModule> modules;
  final List<FlaxCodegenImportedOwner> importedOwners;
}

/// One imported owner: originating source, authoritative wireId, and location.
final class FlaxCodegenImportedOwner {
  const FlaxCodegenImportedOwner({
    required this.sourceIdentity,
    required this.wireId,
    required this.location,
  });

  final FlaxCodegenSourceIdentity sourceIdentity;
  final FlaxCodegenWireId wireId;
  final FlaxCodegenSourceLocation location;
}

/// Immutable imported-package owner projection for one Dart package.
final class FlaxCodegenImportedPackage {
  FlaxCodegenImportedPackage({
    required this.dartPackage,
    required this.namespace,
    required this.source,
    required Iterable<FlaxCodegenImportedOwner> owners,
  }) : owners = List.unmodifiable(List<FlaxCodegenImportedOwner>.of(owners));

  final String dartPackage;
  final FlaxCodegenBindingNamespace namespace;
  final String source;
  final List<FlaxCodegenImportedOwner> owners;
}

/// Protocol 21 has no derived capabilities in this batch.
List<String> flaxCodegenProtocol21RequiredCapabilities() =>
    List<String>.unmodifiable(const <String>[]);

/// Resolves explicit local owners for one package namespace.
abstract final class FlaxCodegenOwnership {
  static FlaxCodegenResolvedPackage resolve({
    required FlaxCodegenBindingNamespace namespace,
    required Iterable<FlaxCodegenSiblingModuleInput> modules,
  }) => _resolve(dartPackage: '', namespace: namespace, modules: modules);

  static FlaxCodegenResolvedPackage resolvePackage({
    required String dartPackage,
    required FlaxCodegenPackageMetadataProjection metadata,
    required String metadataSource,
    required Iterable<FlaxCodegenSiblingModuleInput> modules,
    Iterable<FlaxCodegenImportedPackage> importedPackages = const [],
  }) {
    final packageName = dartPackage;
    final source = metadataSource;
    final capabilities = List<String>.unmodifiable(
      List<String>.of(metadata.capabilities),
    );
    final rawNamespace = metadata.bindingNamespace;
    final siblings = List<FlaxCodegenSiblingModuleInput>.unmodifiable(
      List<FlaxCodegenSiblingModuleInput>.of(modules),
    );
    final imported = List<FlaxCodegenImportedPackage>.unmodifiable(
      List<FlaxCodegenImportedPackage>.of(importedPackages),
    );
    final diagnostics = <FlaxCodegenDiagnostic>[];
    if (packageName.isEmpty) {
      diagnostics.add(
        _metadataDiagnostic(source, '', 'Invalid Dart package name.'),
      );
    }
    if (!capabilities.contains('bindings')) {
      diagnostics.add(
        _metadataDiagnostic(
          source,
          '/capabilities',
          'Missing bindings capability.',
        ),
      );
    }
    FlaxCodegenBindingNamespace? namespace;
    if (rawNamespace == null || rawNamespace.isEmpty) {
      diagnostics.add(
        _metadataDiagnostic(
          source,
          '/bindingNamespace',
          'Missing bindingNamespace.',
        ),
      );
    } else {
      try {
        namespace = FlaxCodegenBindingNamespace.parse(rawNamespace);
      } on FormatException {
        diagnostics.add(
          _metadataDiagnostic(
            source,
            '/bindingNamespace',
            'Invalid bindingNamespace.',
          ),
        );
      }
    }
    return _resolve(
      dartPackage: packageName,
      namespace: namespace,
      modules: siblings,
      extraDiagnostics: diagnostics,
      importedPackages: imported,
      localSource: source,
    );
  }
}

final class _ClaimSpec {
  const _ClaimSpec(this.publicName, this.expectedKind, this.pointer);

  final String publicName;
  final FlaxCodegenDeclarationKind expectedKind;
  final String pointer;
}

final class _PreparedModule {
  const _PreparedModule(this.input, this.parsedName, this.claims);

  final FlaxCodegenSiblingModuleInput input;
  final FlaxCodegenModuleName? parsedName;
  final List<FlaxCodegenOwnerClaim> claims;
}

final class _RecordedClaim {
  const _RecordedClaim(this.claim, this.wireId);

  final FlaxCodegenOwnerClaim claim;
  final FlaxCodegenWireId wireId;
}

FlaxCodegenResolvedPackage _resolve({
  required String dartPackage,
  required FlaxCodegenBindingNamespace? namespace,
  required Iterable<FlaxCodegenSiblingModuleInput> modules,
  List<FlaxCodegenDiagnostic> extraDiagnostics = const [],
  Iterable<FlaxCodegenImportedPackage> importedPackages = const [],
  String localSource = '',
}) {
  final inputs = List<FlaxCodegenSiblingModuleInput>.unmodifiable(
    List<FlaxCodegenSiblingModuleInput>.of(modules),
  );
  final imported = List<FlaxCodegenImportedPackage>.unmodifiable(
    List<FlaxCodegenImportedPackage>.of(importedPackages),
  );
  final diagnostics = [...extraDiagnostics];
  final prepared = <_PreparedModule>[];
  for (final module in inputs) {
    final parsedName = _tryModuleName(module.name);
    if (parsedName == null) {
      diagnostics.add(
        _locationDiagnostic(
          _namedLocation(module, '/name'),
          'Invalid module name.',
        ),
      );
    }
    final listing = Map<String, FlaxCodegenSourceIdentity>.of(module._listing);
    final locations = Map<String, FlaxCodegenSourceLocation>.of(
      module._locations,
    );
    final claims = [...module.claims];
    for (final spec in List<_ClaimSpec>.of(module._specs)) {
      final location =
          locations[spec.pointer] ?? _fallback(module.source, spec.pointer);
      final identity = listing[spec.publicName];
      if (identity == null) {
        diagnostics.add(_locationDiagnostic(location, 'Missing listing.'));
        continue;
      }
      if (identity.name != spec.publicName) {
        diagnostics.add(_locationDiagnostic(location, 'Source name mismatch.'));
        continue;
      }
      if (identity.kind != spec.expectedKind) {
        diagnostics.add(_locationDiagnostic(location, 'Kind mismatch.'));
        continue;
      }
      claims.add(
        FlaxCodegenOwnerClaim(sourceIdentity: identity, location: location),
      );
    }
    prepared.add(_PreparedModule(module, parsedName, claims));
  }

  final byModuleName = <String, List<_PreparedModule>>{};
  for (final module in prepared) {
    final parsedName = module.parsedName;
    if (parsedName == null) continue;
    byModuleName.putIfAbsent(parsedName.value, () => []).add(module);
  }
  for (final group in byModuleName.values) {
    if (group.length < 2) continue;
    for (final module in group) {
      diagnostics.add(
        _moduleDiagnostic(module.input.source, 'Duplicate moduleId.'),
      );
    }
  }

  final recorded = <_RecordedClaim>[];
  if (namespace != null) {
    for (final module in prepared) {
      final parsedName = module.parsedName;
      if (parsedName == null) continue;
      final moduleId = FlaxCodegenModuleId(
        namespace: namespace,
        name: parsedName,
      );
      for (final claim in module.claims) {
        recorded.add(
          _RecordedClaim(claim, _ownerWireId(moduleId, claim.sourceIdentity)),
        );
      }
    }
  }

  final ownersBySource =
      <FlaxCodegenSourceIdentity, List<FlaxCodegenOwnerClaim>>{};
  for (final module in prepared) {
    for (final claim in module.claims) {
      ownersBySource.putIfAbsent(claim.sourceIdentity, () => []).add(claim);
    }
  }
  for (final group in ownersBySource.values) {
    if (group.length < 2) continue;
    for (final claim in group) {
      diagnostics.add(_locationDiagnostic(claim.location, 'Multiple owners.'));
    }
  }

  final byWire = <String, List<_RecordedClaim>>{};
  for (final claim in recorded) {
    byWire.putIfAbsent(claim.wireId.value, () => []).add(claim);
  }
  for (final group in byWire.values) {
    if (group.length < 2) continue;
    for (final claim in group) {
      diagnostics.add(
        _locationDiagnostic(claim.claim.location, 'Duplicate wireId.'),
      );
    }
  }

  final importedOwners = _collectImportedOwners(imported, diagnostics);
  _diagnosePackageNamespaces(
    dartPackage: dartPackage,
    namespace: namespace,
    localSource: localSource,
    imported: imported,
    diagnostics: diagnostics,
  );

  final importedBySource =
      <FlaxCodegenSourceIdentity, List<FlaxCodegenImportedOwner>>{};
  for (final owner in importedOwners) {
    importedBySource.putIfAbsent(owner.sourceIdentity, () => []).add(owner);
  }
  for (final group in importedBySource.values) {
    if (group.length < 2) continue;
    final wires = {for (final owner in group) owner.wireId.value};
    final message = wires.length > 1
        ? 'Conflicting imported owner.'
        : 'Duplicate imported owner.';
    for (final owner in group) {
      diagnostics.add(_locationDiagnostic(owner.location, message));
    }
  }

  final importedByWire = <String, List<FlaxCodegenImportedOwner>>{};
  for (final owner in importedOwners) {
    importedByWire.putIfAbsent(owner.wireId.value, () => []).add(owner);
  }
  for (final group in importedByWire.values) {
    if (group.length < 2) continue;
    final sources = {for (final owner in group) owner.sourceIdentity};
    if (sources.length < 2) continue;
    for (final owner in group) {
      diagnostics.add(
        _locationDiagnostic(owner.location, 'Conflicting imported wireId.'),
      );
    }
  }

  for (final module in prepared) {
    for (final claim in module.claims) {
      if (!importedBySource.containsKey(claim.sourceIdentity)) continue;
      diagnostics.add(
        _locationDiagnostic(claim.location, 'Dependent republish.'),
      );
    }
  }
  final republished = <FlaxCodegenSourceIdentity>{
    for (final module in prepared)
      for (final claim in module.claims)
        if (importedBySource.containsKey(claim.sourceIdentity))
          claim.sourceIdentity,
  };
  for (final source in republished) {
    for (final owner in importedBySource[source]!) {
      diagnostics.add(
        _locationDiagnostic(owner.location, 'Dependent republish.'),
      );
    }
  }

  final collidedWires = <String>{};
  for (final claim in recorded) {
    if (!importedByWire.containsKey(claim.wireId.value)) continue;
    collidedWires.add(claim.wireId.value);
    diagnostics.add(
      _locationDiagnostic(claim.claim.location, 'Imported wireId collision.'),
    );
  }
  for (final wire in collidedWires) {
    for (final owner in importedByWire[wire]!) {
      diagnostics.add(
        _locationDiagnostic(owner.location, 'Imported wireId collision.'),
      );
    }
  }

  for (final module in prepared) {
    for (final reference in module.input.references) {
      final local = ownersBySource[reference.sourceIdentity];
      final importedGroup = importedBySource[reference.sourceIdentity];
      if ((local == null || local.isEmpty) &&
          (importedGroup == null || importedGroup.isEmpty)) {
        diagnostics.add(
          _locationDiagnostic(reference.location, 'Missing owner.'),
        );
      }
    }
  }

  if (diagnostics.isNotEmpty || namespace == null) {
    throw FlaxCodegenException(diagnostics);
  }

  final wireBySource = <FlaxCodegenSourceIdentity, FlaxCodegenWireId>{
    for (final owner in importedOwners) owner.sourceIdentity: owner.wireId,
    for (final claim in recorded) claim.claim.sourceIdentity: claim.wireId,
  };
  final resolved = [
    for (final module in prepared)
      _resolveModule(namespace, module, wireBySource),
  ]..sort((left, right) => left.moduleId.value.compareTo(right.moduleId.value));
  final sortedImported = [...importedOwners]..sort(_compareImportedOwners);
  return FlaxCodegenResolvedPackage(
    dartPackage: dartPackage,
    namespace: namespace,
    modules: resolved,
    importedOwners: sortedImported,
  );
}

List<FlaxCodegenImportedOwner> _collectImportedOwners(
  List<FlaxCodegenImportedPackage> imported,
  List<FlaxCodegenDiagnostic> diagnostics,
) {
  final owners = <FlaxCodegenImportedOwner>[];
  for (final package in imported) {
    if (package.dartPackage.isEmpty) {
      diagnostics.add(
        _metadataDiagnostic(package.source, '', 'Invalid Dart package name.'),
      );
    }
    for (final owner in package.owners) {
      if (!_wireKindMatches(owner.sourceIdentity, owner.wireId)) {
        diagnostics.add(
          _locationDiagnostic(owner.location, 'Wire kind mismatch.'),
        );
      }
      if (owner.wireId.publicBindingName != owner.sourceIdentity.name) {
        diagnostics.add(
          _locationDiagnostic(owner.location, 'Wire name mismatch.'),
        );
      }
      if (owner.wireId.moduleId.namespace != package.namespace) {
        diagnostics.add(
          _locationDiagnostic(owner.location, 'Wire namespace mismatch.'),
        );
      }
      owners.add(owner);
    }
  }
  return owners;
}

void _diagnosePackageNamespaces({
  required String dartPackage,
  required FlaxCodegenBindingNamespace? namespace,
  required String localSource,
  required List<FlaxCodegenImportedPackage> imported,
  required List<FlaxCodegenDiagnostic> diagnostics,
}) {
  final identities = <_PackageIdentity>[
    if (dartPackage.isNotEmpty && namespace != null)
      _PackageIdentity(
        dartPackage,
        namespace,
        _fallback(localSource, '/bindingNamespace'),
      ),
    for (final package in imported)
      if (package.dartPackage.isNotEmpty)
        _PackageIdentity(
          package.dartPackage,
          package.namespace,
          _fallback(package.source, '/bindingNamespace'),
        ),
  ];

  final byName = <String, List<_PackageIdentity>>{};
  for (final identity in identities) {
    byName.putIfAbsent(identity.dartPackage, () => []).add(identity);
  }
  for (final group in byName.values) {
    if (group.length < 2) continue;
    final namespaces = {for (final identity in group) identity.namespace.value};
    final message = namespaces.length > 1
        ? 'Conflicting package namespace.'
        : 'Duplicate imported package.';
    for (final identity in group) {
      diagnostics.add(_locationDiagnostic(identity.location, message));
    }
  }

  final byNamespace = <String, List<_PackageIdentity>>{};
  for (final identity in identities) {
    byNamespace.putIfAbsent(identity.namespace.value, () => []).add(identity);
  }
  for (final group in byNamespace.values) {
    if (group.length < 2) continue;
    final packages = {for (final identity in group) identity.dartPackage};
    if (packages.length < 2) continue;
    for (final identity in group) {
      diagnostics.add(
        _locationDiagnostic(identity.location, 'Duplicate bindingNamespace.'),
      );
    }
  }
}

bool _wireKindMatches(
  FlaxCodegenSourceIdentity identity,
  FlaxCodegenWireId wireId,
) => switch (identity.kind) {
  FlaxCodegenDeclarationKind.type => wireId.kind == FlaxCodegenWireKind.type,
  FlaxCodegenDeclarationKind.function =>
    wireId.kind == FlaxCodegenWireKind.function,
  FlaxCodegenDeclarationKind.readonly =>
    wireId.kind == FlaxCodegenWireKind.read,
};

final class _PackageIdentity {
  const _PackageIdentity(this.dartPackage, this.namespace, this.location);

  final String dartPackage;
  final FlaxCodegenBindingNamespace namespace;
  final FlaxCodegenSourceLocation location;
}

FlaxCodegenResolvedModule _resolveModule(
  FlaxCodegenBindingNamespace namespace,
  _PreparedModule module,
  Map<FlaxCodegenSourceIdentity, FlaxCodegenWireId> wireBySource,
) {
  final moduleId = FlaxCodegenModuleId(
    namespace: namespace,
    name: module.parsedName!,
  );
  final owners = [
    for (final claim in module.claims)
      FlaxCodegenResolvedOwner(
        sourceIdentity: claim.sourceIdentity,
        wireId: wireBySource[claim.sourceIdentity]!,
      ),
  ]..sort(_compareOwners);
  final references = [
    for (final reference in module.input.references)
      FlaxCodegenResolvedReference(
        sourceIdentity: reference.sourceIdentity,
        ownerWireId: wireBySource[reference.sourceIdentity]!,
      ),
  ]..sort(_compareReferences);
  return FlaxCodegenResolvedModule(
    moduleId: moduleId,
    source: module.input.source,
    owners: owners,
    references: references,
    requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
  );
}

FlaxCodegenModuleName? _tryModuleName(String name) {
  try {
    return FlaxCodegenModuleName.parse(name);
  } on FormatException {
    return null;
  }
}

FlaxCodegenSourceLocation _namedLocation(
  FlaxCodegenSiblingModuleInput module,
  String pointer,
) => module._locations[pointer] ?? _fallback(module.source, pointer);

FlaxCodegenSourceLocation _fallback(String source, String pointer) =>
    FlaxCodegenSourceLocation(
      source: source,
      offset: 0,
      line: 1,
      column: 1,
      pointer: pointer,
    );

FlaxCodegenWireId _ownerWireId(
  FlaxCodegenModuleId moduleId,
  FlaxCodegenSourceIdentity identity,
) => switch (identity.kind) {
  FlaxCodegenDeclarationKind.type => FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: identity.name,
  ),
  FlaxCodegenDeclarationKind.function => FlaxCodegenWireId.function(
    moduleId: moduleId,
    publicBindingName: identity.name,
  ),
  FlaxCodegenDeclarationKind.readonly => FlaxCodegenWireId.read(
    moduleId: moduleId,
    publicBindingName: identity.name,
  ),
};

int _compareImportedOwners(
  FlaxCodegenImportedOwner left,
  FlaxCodegenImportedOwner right,
) => _compareSourceThenWire(
  left.sourceIdentity,
  left.wireId.value,
  right.sourceIdentity,
  right.wireId.value,
);

int _compareOwners(
  FlaxCodegenResolvedOwner left,
  FlaxCodegenResolvedOwner right,
) => _compareSourceThenWire(
  left.sourceIdentity,
  left.wireId.value,
  right.sourceIdentity,
  right.wireId.value,
);

int _compareReferences(
  FlaxCodegenResolvedReference left,
  FlaxCodegenResolvedReference right,
) => _compareSourceThenWire(
  left.sourceIdentity,
  left.ownerWireId.value,
  right.sourceIdentity,
  right.ownerWireId.value,
);

int _compareSourceThenWire(
  FlaxCodegenSourceIdentity leftSource,
  String leftWire,
  FlaxCodegenSourceIdentity rightSource,
  String rightWire,
) {
  final source = _compareSourceIdentity(leftSource, rightSource);
  if (source != 0) return source;
  return leftWire.compareTo(rightWire);
}

int _compareSourceIdentity(
  FlaxCodegenSourceIdentity left,
  FlaxCodegenSourceIdentity right,
) {
  final kind = left.kind.name.compareTo(right.kind.name);
  if (kind != 0) return kind;
  final uri = left.originatingUri.compareTo(right.originatingUri);
  if (uri != 0) return uri;
  return left.name.compareTo(right.name);
}

FlaxCodegenDiagnostic _moduleDiagnostic(String source, String message) =>
    FlaxCodegenDiagnostic(
      code: FlaxCodegenDiagnosticCode.ownership,
      source: source,
      offset: 0,
      line: 1,
      column: 1,
      pointer: '',
      message: message,
    );

FlaxCodegenDiagnostic _metadataDiagnostic(
  String source,
  String pointer,
  String message,
) => FlaxCodegenDiagnostic(
  code: FlaxCodegenDiagnosticCode.ownership,
  source: source,
  offset: 0,
  line: 1,
  column: 1,
  pointer: pointer,
  message: message,
);

FlaxCodegenDiagnostic _locationDiagnostic(
  FlaxCodegenSourceLocation location,
  String message,
) => FlaxCodegenDiagnostic(
  code: FlaxCodegenDiagnosticCode.ownership,
  source: location.source,
  offset: location.offset,
  line: location.line,
  column: location.column,
  pointer: location.pointer,
  message: message,
);
