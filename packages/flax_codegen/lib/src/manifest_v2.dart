import 'dart:convert';

import 'package:yaml/yaml.dart';

import 'identity.dart';
import 'manifest_v2_codec.dart';
import 'model.dart';
import 'ownership.dart';

const _packageKeys = {
  'formatVersion',
  'package',
  'bindingNamespace',
  'imports',
  'modules',
};

const _moduleEntryKeys = {
  'name',
  'moduleId',
  'uiProtocol',
  'requiredCapabilities',
  'model',
};

const _modelProjectionKeys = {
  'library',
  'jsPackage',
  'typeLibraries',
  'classes',
  'types',
  'functions',
  'snapshots',
  'identities',
};

const _semanticModuleKeys = {
  'library',
  'jsPackage',
  'typeLibraries',
  'classes',
  'types',
  'functions',
  'snapshots',
};

/// Immutable Manifest 2 package envelope (formatVersion 2).
final class FlaxCodegenManifestV2 {
  FlaxCodegenManifestV2({
    required this.package,
    required this.bindingNamespace,
    required List<String> imports,
    required List<FlaxCodegenManifestV2Module> modules,
  }) : imports = List.unmodifiable(imports),
       modules = List.unmodifiable(modules);

  static const formatVersion = 2;
  static const uiProtocol = 20;

  final String package;
  final FlaxCodegenBindingNamespace bindingNamespace;
  final List<String> imports;
  final List<FlaxCodegenManifestV2Module> modules;

  /// Canonical JSON with fixed key order and sorted collections.
  String encode() =>
      '${const JsonEncoder.withIndent('  ').convert(toJson())}\n';

  Map<String, Object?> toJson() => {
    'formatVersion': formatVersion,
    'package': package,
    'bindingNamespace': bindingNamespace.value,
    'imports': List<String>.of(imports),
    'modules': [for (final module in modules) module.toJson()],
  };

  /// Strict parse. Returns null when [diagnostics] is non-empty.
  static FlaxCodegenManifestV2? parse(
    String contents,
    FlaxCodegenManifestV2Diagnostics diagnostics,
  ) {
    _detectDuplicateKeys(contents, diagnostics);
    final Object? decoded;
    try {
      decoded = jsonDecode(contents);
    } on FormatException {
      diagnostics.add(pointer: '', message: 'Invalid JSON.');
      return null;
    }
    if (diagnostics.items.isNotEmpty) return null;
    return _decodePackage(decoded, diagnostics);
  }

  /// Builds a canonical envelope from a resolved local package.
  static FlaxCodegenManifestV2 fromResolved({
    required FlaxCodegenResolvedPackage package,
    required Map<String, FlaxCodegenModuleModel> modules,
    required Iterable<String> importPackageNames,
    String source = 'manifest.json',
  }) {
    final diagnostics = FlaxCodegenManifestV2Diagnostics(source);
    final built = _buildFromResolved(
      package: package,
      modules: modules,
      importPackageNames: importPackageNames,
      diagnostics: diagnostics,
    );
    diagnostics.throwIfAny();
    return built!;
  }
}

/// One Manifest 2 registration unit.
final class FlaxCodegenManifestV2Module {
  FlaxCodegenManifestV2Module({
    required this.name,
    required this.moduleId,
    required this.uiProtocol,
    required List<String> requiredCapabilities,
    required this.model,
  }) : requiredCapabilities = List.unmodifiable(requiredCapabilities);

  final String name;
  final FlaxCodegenModuleId moduleId;
  final int uiProtocol;
  final List<String> requiredCapabilities;
  final FlaxCodegenManifestV2Model model;

  Map<String, Object?> toJson() => {
    'name': name,
    'moduleId': moduleId.value,
    'uiProtocol': uiProtocol,
    'requiredCapabilities': List<String>.of(requiredCapabilities),
    'model': model.toJson(),
  };
}

/// Lossless semantic module projection plus identity ownership rows.
final class FlaxCodegenManifestV2Model {
  FlaxCodegenManifestV2Model({
    required FlaxCodegenModuleModel module,
    required List<FlaxCodegenManifestV2Identity> identities,
  }) : _moduleName = module.name,
       _semanticJson = jsonEncode(
         FlaxCodegenManifestV2Codec.encodeModule(module),
       ),
       identities = List.unmodifiable(identities);

  final String _moduleName;
  final String _semanticJson;
  final List<FlaxCodegenManifestV2Identity> identities;

  /// Fresh decode of the frozen semantic projection; mutations do not persist.
  FlaxCodegenModuleModel get module {
    final diagnostics = FlaxCodegenManifestV2Diagnostics('');
    final decoded = FlaxCodegenManifestV2Codec.decodeModule(
      jsonDecode(_semanticJson),
      diagnostics,
      '',
      _moduleName,
    );
    diagnostics.throwIfAny();
    return decoded!;
  }

  Map<String, Object?> toJson() => {
    ...FlaxCodegenManifestV2Codec.encodeModule(module),
    'identities': [
      for (final identity in identities)
        FlaxCodegenManifestV2Codec.encodeIdentity(identity),
    ],
  };
}

void _detectDuplicateKeys(
  String contents,
  FlaxCodegenManifestV2Diagnostics diagnostics,
) {
  try {
    loadYamlNode(contents, sourceUrl: Uri(path: diagnostics.source));
  } on YamlException catch (error) {
    if (error.message == 'Duplicate mapping key.') {
      diagnostics.add(pointer: '', message: 'Duplicate mapping key.');
    }
  }
}

FlaxCodegenManifestV2? _decodePackage(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    '',
    _packageKeys,
  );
  if (object == null) return null;
  final formatVersion = _requiredInt(object, 'formatVersion');
  final packageName = object.requiredString('package');
  final namespaceValue = object.requiredString('bindingNamespace');
  final imports = object.requiredStringList('imports');
  final modules = object.requiredList(
    'modules',
    (item, pointer) => _decodeModuleEntry(item, diagnostics, pointer),
  );
  if (diagnostics.items.length != start ||
      formatVersion == null ||
      packageName == null ||
      namespaceValue == null ||
      imports == null ||
      modules == null) {
    return null;
  }
  if (formatVersion != FlaxCodegenManifestV2.formatVersion) {
    diagnostics.add(
      pointer: '/formatVersion',
      message: 'Invalid formatVersion.',
    );
  }
  if (!_isCanonicalDartPackageName(packageName)) {
    diagnostics.add(pointer: '/package', message: 'Invalid Dart package name.');
  }
  FlaxCodegenBindingNamespace? namespace;
  try {
    namespace = FlaxCodegenBindingNamespace.parse(namespaceValue);
  } on FormatException {
    diagnostics.add(
      pointer: '/bindingNamespace',
      message: 'Invalid bindingNamespace.',
    );
  }
  _diagnoseSortedUniqueStrings(
    diagnostics,
    imports,
    '/imports',
    sortedMessage: 'Expected sorted imports.',
    duplicateMessage: 'Duplicate import.',
  );
  _diagnoseImportPackageNames(
    diagnostics,
    packageName: packageName,
    imports: imports,
  );
  _diagnoseSortedModules(diagnostics, modules);
  if (namespace != null) {
    _diagnosePackageOwnership(diagnostics, namespace, modules);
  }
  if (diagnostics.items.length != start) return null;
  return FlaxCodegenManifestV2(
    package: packageName,
    bindingNamespace: namespace!,
    imports: imports,
    modules: modules,
  );
}

FlaxCodegenManifestV2Module? _decodeModuleEntry(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer,
) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _moduleEntryKeys,
  );
  if (object == null) return null;
  final nameValue = object.requiredString('name');
  final moduleIdValue = object.requiredString('moduleId');
  final uiProtocol = _requiredInt(object, 'uiProtocol');
  final requiredCapabilities = object.requiredStringList(
    'requiredCapabilities',
  );
  if (diagnostics.items.length != start ||
      nameValue == null ||
      moduleIdValue == null ||
      uiProtocol == null ||
      requiredCapabilities == null) {
    // Still attempt model decode for aggregation when name is known.
    if (nameValue != null) {
      object.requiredValue(
        'model',
        (item, child) => _decodeModel(item, diagnostics, child, nameValue),
      );
    } else {
      object.requiredValue('model', (item, child) {
        diagnostics.add(pointer: child, message: 'Invalid module.');
        return null;
      });
    }
    return null;
  }
  final model = object.requiredValue(
    'model',
    (item, child) => _decodeModel(item, diagnostics, child, nameValue),
  );
  FlaxCodegenModuleName? moduleName;
  try {
    moduleName = FlaxCodegenModuleName.parse(nameValue);
  } on FormatException {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'name'),
      message: 'Invalid module name.',
    );
  }
  FlaxCodegenModuleId? moduleId;
  try {
    moduleId = FlaxCodegenModuleId.parse(moduleIdValue);
  } on FormatException {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'moduleId'),
      message: 'Invalid moduleId.',
    );
  }
  if (uiProtocol != FlaxCodegenManifestV2.uiProtocol) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'uiProtocol'),
      message: 'Invalid uiProtocol.',
    );
  }
  _diagnoseSortedUniqueStrings(
    diagnostics,
    requiredCapabilities,
    flaxCodegenManifestV2Pointer(pointer, 'requiredCapabilities'),
    sortedMessage: 'Expected sorted capabilities.',
    duplicateMessage: 'Duplicate capability.',
  );
  if (requiredCapabilities.isNotEmpty) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'requiredCapabilities'),
      message: 'Nonempty requiredCapabilities.',
    );
  }
  if (moduleName != null &&
      moduleId != null &&
      moduleId.name.value != moduleName.value) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'moduleId'),
      message: 'Tuple mismatch.',
    );
  }
  if (diagnostics.items.length != start ||
      moduleName == null ||
      moduleId == null ||
      model == null) {
    return null;
  }
  final identityStart = diagnostics.items.length;
  _diagnoseModuleIdentities(
    diagnostics,
    pointer: flaxCodegenManifestV2Pointer(pointer, 'model/identities'),
    moduleId: moduleId,
    identities: model.identities,
  );
  if (diagnostics.items.length == identityStart) {
    _diagnoseModelIdentityCoverage(
      diagnostics,
      modelPointer: flaxCodegenManifestV2Pointer(pointer, 'model'),
      moduleId: moduleId,
      module: model.module,
      identities: model.identities,
    );
  }
  if (diagnostics.items.length != start) return null;
  return FlaxCodegenManifestV2Module(
    name: moduleName.value,
    moduleId: moduleId,
    uiProtocol: uiProtocol,
    requiredCapabilities: requiredCapabilities,
    model: model,
  );
}

FlaxCodegenManifestV2Model? _decodeModel(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer,
  String name,
) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _modelProjectionKeys,
  );
  if (object == null) return null;
  final identities = object.requiredList(
    'identities',
    (item, child) =>
        FlaxCodegenManifestV2Codec.decodeIdentity(item, diagnostics, child),
  );
  final semantic = <String, Object?>{};
  if (value is Map) {
    for (final entry in value.entries) {
      final key = entry.key;
      if (key is! String || key == 'identities') continue;
      if (!_semanticModuleKeys.contains(key)) continue;
      semantic[key] = entry.value;
    }
  }
  final module = FlaxCodegenManifestV2Codec.decodeModule(
    semantic,
    diagnostics,
    pointer,
    name,
  );
  if (diagnostics.items.length != start ||
      identities == null ||
      module == null) {
    return null;
  }
  return FlaxCodegenManifestV2Model(module: module, identities: identities);
}

void _diagnosePackageOwnership(
  FlaxCodegenManifestV2Diagnostics diagnostics,
  FlaxCodegenBindingNamespace namespace,
  List<FlaxCodegenManifestV2Module> modules,
) {
  final ownersBySource =
      <FlaxCodegenSourceIdentity, List<FlaxCodegenManifestV2Identity>>{};
  final ownersByWire = <String, List<FlaxCodegenManifestV2Identity>>{};
  for (final module in modules) {
    if (module.moduleId.namespace != namespace) {
      diagnostics.add(pointer: '', message: 'Tuple mismatch.');
    }
    for (final identity in module.model.identities) {
      if (!identity.owner) continue;
      ownersBySource
          .putIfAbsent(identity.sourceIdentity, () => [])
          .add(identity);
      ownersByWire.putIfAbsent(identity.wireId.value, () => []).add(identity);
    }
  }
  for (final group in ownersBySource.values) {
    if (group.length < 2) continue;
    final wires = {for (final identity in group) identity.wireId.value};
    final message = wires.length > 1
        ? 'Conflicting sourceIdentity.'
        : 'Duplicate sourceIdentity.';
    for (final _ in group) {
      diagnostics.add(pointer: '', message: message);
    }
  }
  for (final group in ownersByWire.values) {
    if (group.length < 2) continue;
    final sources = {for (final identity in group) identity.sourceIdentity};
    if (sources.length < 2) continue;
    for (final _ in group) {
      diagnostics.add(pointer: '', message: 'Conflicting wireId.');
    }
  }
}

void _diagnoseModuleIdentities(
  FlaxCodegenManifestV2Diagnostics diagnostics, {
  required String pointer,
  required FlaxCodegenModuleId moduleId,
  required List<FlaxCodegenManifestV2Identity> identities,
}) {
  _diagnoseSortedIdentities(diagnostics, identities, pointer);
  final bySource =
      <FlaxCodegenSourceIdentity, List<FlaxCodegenManifestV2Identity>>{};
  final byWire = <String, List<FlaxCodegenManifestV2Identity>>{};
  for (var index = 0; index < identities.length; index++) {
    final identity = identities[index];
    final itemPointer = flaxCodegenManifestV2Pointer(pointer, '$index');
    bySource.putIfAbsent(identity.sourceIdentity, () => []).add(identity);
    byWire.putIfAbsent(identity.wireId.value, () => []).add(identity);
    if (identity.owner) {
      if (identity.wireId.moduleId != moduleId) {
        diagnostics.add(
          pointer: flaxCodegenManifestV2Pointer(itemPointer, 'wireId'),
          message: 'Owner wire outside module.',
        );
      }
      final expected = _ownerWireId(moduleId, identity.sourceIdentity);
      if (identity.wireId != expected) {
        diagnostics.add(
          pointer: flaxCodegenManifestV2Pointer(itemPointer, 'wireId'),
          message: 'Ownership inconsistency.',
        );
      }
    }
  }
  for (final group in bySource.values) {
    if (group.length < 2) continue;
    final wires = {for (final identity in group) identity.wireId.value};
    final message = wires.length > 1
        ? 'Conflicting sourceIdentity.'
        : 'Duplicate sourceIdentity.';
    diagnostics.add(pointer: pointer, message: message);
  }
  for (final group in byWire.values) {
    if (group.length < 2) continue;
    final sources = {for (final identity in group) identity.sourceIdentity};
    final message = sources.length > 1
        ? 'Conflicting wireId.'
        : 'Duplicate wireId.';
    diagnostics.add(pointer: pointer, message: message);
  }
}

void _diagnoseSortedModules(
  FlaxCodegenManifestV2Diagnostics diagnostics,
  List<FlaxCodegenManifestV2Module> modules,
) {
  final ids = <String>[];
  for (final module in modules) {
    ids.add(module.moduleId.value);
  }
  for (var index = 1; index < ids.length; index++) {
    if (ids[index - 1].compareTo(ids[index]) > 0) {
      diagnostics.add(pointer: '/modules', message: 'Expected sorted modules.');
      break;
    }
  }
  final seen = <String>{};
  for (final id in ids) {
    if (!seen.add(id)) {
      diagnostics.add(pointer: '/modules', message: 'Duplicate moduleId.');
    }
  }
}

void _diagnoseSortedIdentities(
  FlaxCodegenManifestV2Diagnostics diagnostics,
  List<FlaxCodegenManifestV2Identity> identities,
  String pointer,
) {
  for (var index = 1; index < identities.length; index++) {
    if (_compareIdentities(identities[index - 1], identities[index]) > 0) {
      diagnostics.add(pointer: pointer, message: 'Expected sorted identities.');
      return;
    }
  }
}

void _diagnoseSortedUniqueStrings(
  FlaxCodegenManifestV2Diagnostics diagnostics,
  List<String> values,
  String pointer, {
  required String sortedMessage,
  required String duplicateMessage,
}) {
  for (var index = 1; index < values.length; index++) {
    final order = values[index - 1].compareTo(values[index]);
    if (order > 0) {
      diagnostics.add(pointer: pointer, message: sortedMessage);
      break;
    }
    if (order == 0) {
      diagnostics.add(pointer: pointer, message: duplicateMessage);
    }
  }
  final seen = <String>{};
  for (final value in values) {
    if (!seen.add(value) &&
        !diagnostics.items.any(
          (item) => item.pointer == pointer && item.message == duplicateMessage,
        )) {
      diagnostics.add(pointer: pointer, message: duplicateMessage);
    }
  }
}

FlaxCodegenManifestV2? _buildFromResolved({
  required FlaxCodegenResolvedPackage package,
  required Map<String, FlaxCodegenModuleModel> modules,
  required Iterable<String> importPackageNames,
  required FlaxCodegenManifestV2Diagnostics diagnostics,
}) {
  final start = diagnostics.items.length;
  if (!_isCanonicalDartPackageName(package.dartPackage)) {
    diagnostics.add(pointer: '/package', message: 'Invalid Dart package name.');
  }
  final remaining = Map<String, FlaxCodegenModuleModel>.of(modules);
  final builtModules = <FlaxCodegenManifestV2Module>[];
  for (final resolved in package.modules) {
    final name = resolved.moduleId.name.value;
    final model = remaining.remove(name);
    if (model == null) {
      diagnostics.add(pointer: '/modules', message: 'Missing module model.');
      continue;
    }
    if (model.name != name) {
      diagnostics.add(pointer: '/modules', message: 'Tuple mismatch.');
      continue;
    }
    if (resolved.moduleId.namespace != package.namespace) {
      diagnostics.add(pointer: '/modules', message: 'Tuple mismatch.');
      continue;
    }
    final snapshot = _snapshotModule(model, name, diagnostics);
    if (snapshot == null) continue;
    final identities = _identitiesFromResolved(
      resolved,
      diagnostics,
      flaxCodegenManifestV2Pointer('/modules', name),
    );
    if (identities == null) continue;
    final modelPointer = flaxCodegenManifestV2Pointer(
      flaxCodegenManifestV2Pointer('/modules', name),
      'model',
    );
    final coverageStart = diagnostics.items.length;
    _diagnoseModelIdentityCoverage(
      diagnostics,
      modelPointer: modelPointer,
      moduleId: resolved.moduleId,
      module: snapshot,
      identities: identities,
    );
    if (diagnostics.items.length != coverageStart) continue;
    builtModules.add(
      FlaxCodegenManifestV2Module(
        name: name,
        moduleId: resolved.moduleId,
        uiProtocol: FlaxCodegenManifestV2.uiProtocol,
        requiredCapabilities: flaxCodegenProtocol20RequiredCapabilities(),
        model: FlaxCodegenManifestV2Model(
          module: snapshot,
          identities: identities,
        ),
      ),
    );
  }
  for (final extra in remaining.keys) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer('/modules', extra),
      message: 'Unexpected module model.',
    );
  }
  final importList = List<String>.of(importPackageNames);
  if (importList.length != importList.toSet().length) {
    diagnostics.add(pointer: '/imports', message: 'Duplicate import.');
  }
  _diagnoseImportPackageNames(
    diagnostics,
    packageName: package.dartPackage,
    imports: importList,
  );
  final canonicalImports = importList.toSet().toList()..sort();
  builtModules.sort(
    (left, right) => left.moduleId.value.compareTo(right.moduleId.value),
  );
  if (diagnostics.items.length != start) return null;
  return FlaxCodegenManifestV2(
    package: package.dartPackage,
    bindingNamespace: package.namespace,
    imports: canonicalImports,
    modules: builtModules,
  );
}

FlaxCodegenModuleModel? _snapshotModule(
  FlaxCodegenModuleModel module,
  String name,
  FlaxCodegenManifestV2Diagnostics diagnostics,
) {
  final encoded = FlaxCodegenManifestV2Codec.encodeModule(module);
  return FlaxCodegenManifestV2Codec.decodeModule(
    encoded,
    diagnostics,
    '/modules',
    name,
  );
}

List<FlaxCodegenManifestV2Identity>? _identitiesFromResolved(
  FlaxCodegenResolvedModule module,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer,
) {
  final start = diagnostics.items.length;
  final ownerWireBySource = <FlaxCodegenSourceIdentity, FlaxCodegenWireId>{};
  final ownerSourceByWire = <String, FlaxCodegenSourceIdentity>{};

  for (final owner in module.owners) {
    final priorWire = ownerWireBySource[owner.sourceIdentity];
    if (priorWire != null) {
      diagnostics.add(
        pointer: pointer,
        message: priorWire == owner.wireId
            ? 'Duplicate sourceIdentity.'
            : 'Conflicting sourceIdentity.',
      );
    } else {
      ownerWireBySource[owner.sourceIdentity] = owner.wireId;
    }
    final priorSource = ownerSourceByWire[owner.wireId.value];
    if (priorSource != null && priorSource != owner.sourceIdentity) {
      diagnostics.add(pointer: pointer, message: 'Conflicting wireId.');
    } else if (priorSource == null) {
      ownerSourceByWire[owner.wireId.value] = owner.sourceIdentity;
    }
  }

  final refWireBySource = <FlaxCodegenSourceIdentity, FlaxCodegenWireId>{};
  final refSourceByWire = <String, FlaxCodegenSourceIdentity>{};

  for (final reference in module.references) {
    final ownedWire = ownerWireBySource[reference.sourceIdentity];
    if (ownedWire != null) {
      if (ownedWire != reference.ownerWireId) {
        diagnostics.add(
          pointer: pointer,
          message: 'Conflicting sourceIdentity.',
        );
      }
      continue;
    }
    final priorWire = refWireBySource[reference.sourceIdentity];
    if (priorWire != null) {
      if (priorWire != reference.ownerWireId) {
        diagnostics.add(
          pointer: pointer,
          message: 'Conflicting sourceIdentity.',
        );
      }
      continue;
    }
    final ownerSource = ownerSourceByWire[reference.ownerWireId.value];
    if (ownerSource != null) {
      diagnostics.add(pointer: pointer, message: 'Conflicting wireId.');
    }
    final refSource = refSourceByWire[reference.ownerWireId.value];
    if (refSource != null && refSource != reference.sourceIdentity) {
      diagnostics.add(pointer: pointer, message: 'Conflicting wireId.');
    }
    refWireBySource[reference.sourceIdentity] = reference.ownerWireId;
    refSourceByWire.putIfAbsent(
      reference.ownerWireId.value,
      () => reference.sourceIdentity,
    );
  }

  if (diagnostics.items.length != start) return null;

  final rows = <FlaxCodegenManifestV2Identity>[
    for (final entry in ownerWireBySource.entries)
      FlaxCodegenManifestV2Identity(
        sourceIdentity: entry.key,
        wireId: entry.value,
        owner: true,
      ),
    for (final entry in refWireBySource.entries)
      FlaxCodegenManifestV2Identity(
        sourceIdentity: entry.key,
        wireId: entry.value,
        owner: false,
      ),
  ]..sort(_compareIdentities);
  return List.unmodifiable(rows);
}

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
};

int _compareIdentities(
  FlaxCodegenManifestV2Identity left,
  FlaxCodegenManifestV2Identity right,
) {
  final kind = left.sourceIdentity.kind.name.compareTo(
    right.sourceIdentity.kind.name,
  );
  if (kind != 0) return kind;
  final uri = left.sourceIdentity.originatingUri.compareTo(
    right.sourceIdentity.originatingUri,
  );
  if (uri != 0) return uri;
  final name = left.sourceIdentity.name.compareTo(right.sourceIdentity.name);
  if (name != 0) return name;
  final wire = left.wireId.value.compareTo(right.wireId.value);
  if (wire != 0) return wire;
  return (left.owner ? 1 : 0).compareTo(right.owner ? 1 : 0);
}

void _diagnoseImportPackageNames(
  FlaxCodegenManifestV2Diagnostics diagnostics, {
  required String packageName,
  required List<String> imports,
}) {
  for (var index = 0; index < imports.length; index++) {
    if (!_isCanonicalDartPackageName(imports[index])) {
      diagnostics.add(
        pointer: flaxCodegenManifestV2Pointer('/imports', '$index'),
        message: 'Invalid Dart package name.',
      );
    }
  }
  if (imports.contains(packageName)) {
    diagnostics.add(pointer: '/imports', message: 'Self-import.');
  }
}

/// Requires declaration owners and named TypeRef identity coverage for one
/// module model. Extra identity rows are allowed as selected nominal leaves.
void _diagnoseModelIdentityCoverage(
  FlaxCodegenManifestV2Diagnostics diagnostics, {
  required String modelPointer,
  required FlaxCodegenModuleId moduleId,
  required FlaxCodegenModuleModel module,
  required List<FlaxCodegenManifestV2Identity> identities,
}) {
  final byWire = <String, List<FlaxCodegenManifestV2Identity>>{};
  for (final identity in identities) {
    byWire.putIfAbsent(identity.wireId.value, () => []).add(identity);
  }
  final seenTypePaths = <String>{};
  final reported = <String>{};

  void addOnce(String pointer, String message) {
    final key = '$pointer\u0000$message';
    if (!reported.add(key)) return;
    diagnostics.add(pointer: pointer, message: message);
  }

  void requireOwner({
    required String id,
    required String name,
    required FlaxCodegenWireKind expectedKind,
    required String idPointer,
  }) {
    final FlaxCodegenWireId wire;
    try {
      wire = FlaxCodegenWireId.parse(id);
    } on FormatException {
      addOnce(idPointer, 'Invalid wireId.');
      return;
    }
    final owners = [
      for (final row in byWire[id] ?? const <FlaxCodegenManifestV2Identity>[])
        if (row.owner) row,
    ];
    if (owners.length != 1) {
      addOnce(idPointer, 'Missing owner.');
      return;
    }
    if (wire.kind != expectedKind) {
      addOnce(idPointer, 'Wire kind mismatch.');
    }
    if (wire.publicBindingName != name) {
      addOnce(idPointer, 'Wire name mismatch.');
    }
    if (wire.moduleId != moduleId) {
      addOnce(idPointer, 'Owner wire outside module.');
    }
  }

  void requireTypeIdentity(FlaxCodegenTypeRef type, String typePointer) {
    final id = type.id;
    if (id == null) return;
    final idPointer = flaxCodegenManifestV2Pointer(typePointer, 'id');
    final FlaxCodegenWireId wire;
    try {
      wire = FlaxCodegenWireId.parse(id);
    } on FormatException {
      addOnce(idPointer, 'Invalid wireId.');
      return;
    }
    final matches = byWire[id] ?? const <FlaxCodegenManifestV2Identity>[];
    if (matches.length != 1) {
      addOnce(idPointer, 'Missing identity.');
      return;
    }
    if (type.name != null && wire.publicBindingName != type.name) {
      addOnce(idPointer, 'Wire name mismatch.');
    }
    if (wire.kind != FlaxCodegenWireKind.type) {
      addOnce(idPointer, 'Wire kind mismatch.');
    }
  }

  late void Function(FlaxCodegenTypeRef? type, String pointer) walkType;

  void walkGeneric(FlaxCodegenGenericParameter generic, String pointer) {
    walkType(generic.bound, flaxCodegenManifestV2Pointer(pointer, 'bound'));
    walkType(
      generic.defaultType,
      flaxCodegenManifestV2Pointer(pointer, 'defaultType'),
    );
  }

  walkType = (FlaxCodegenTypeRef? type, String pointer) {
    if (type == null) return;
    if (!seenTypePaths.add(pointer)) return;
    requireTypeIdentity(type, pointer);
    walkType(type.item, flaxCodegenManifestV2Pointer(pointer, 'item'));
    walkType(type.key, flaxCodegenManifestV2Pointer(pointer, 'key'));
    walkType(type.result, flaxCodegenManifestV2Pointer(pointer, 'result'));
    walkType(
      type.declaration,
      flaxCodegenManifestV2Pointer(pointer, 'declaration'),
    );
    for (var index = 0; index < type.parameters.length; index++) {
      final parameterPointer = flaxCodegenManifestV2Pointer(
        flaxCodegenManifestV2Pointer(pointer, 'parameters'),
        '$index',
      );
      walkType(
        type.parameters[index].type,
        flaxCodegenManifestV2Pointer(parameterPointer, 'type'),
      );
    }
    for (var index = 0; index < type.typeParameters.length; index++) {
      final genericPointer = flaxCodegenManifestV2Pointer(
        flaxCodegenManifestV2Pointer(pointer, 'typeParameters'),
        '$index',
      );
      walkGeneric(type.typeParameters[index], genericPointer);
    }
    for (var index = 0; index < type.dartArguments.length; index++) {
      walkType(
        type.dartArguments[index],
        flaxCodegenManifestV2Pointer(
          flaxCodegenManifestV2Pointer(pointer, 'dartArguments'),
          '$index',
        ),
      );
    }
    for (var index = 0; index < type.tsArguments.length; index++) {
      walkType(
        type.tsArguments[index],
        flaxCodegenManifestV2Pointer(
          flaxCodegenManifestV2Pointer(pointer, 'tsArguments'),
          '$index',
        ),
      );
    }
  };

  void walkParameters(
    List<FlaxCodegenParameterModel> parameters,
    String pointer,
  ) {
    for (var index = 0; index < parameters.length; index++) {
      walkType(
        parameters[index].type,
        flaxCodegenManifestV2Pointer(
          flaxCodegenManifestV2Pointer(pointer, '$index'),
          'type',
        ),
      );
    }
  }

  void walkMethod(FlaxCodegenMethodModel method, String pointer) {
    walkParameters(
      method.parameters,
      flaxCodegenManifestV2Pointer(pointer, 'parameters'),
    );
    walkType(method.result, flaxCodegenManifestV2Pointer(pointer, 'result'));
    for (var index = 0; index < method.typeParameters.length; index++) {
      walkGeneric(
        method.typeParameters[index],
        flaxCodegenManifestV2Pointer(
          flaxCodegenManifestV2Pointer(pointer, 'typeParameters'),
          '$index',
        ),
      );
    }
  }

  void walkGetter(FlaxCodegenGetterModel getter, String pointer) {
    walkType(getter.type, flaxCodegenManifestV2Pointer(pointer, 'type'));
  }

  void walkProxy(FlaxCodegenProxyModel proxy, String pointer) {
    for (var index = 0; index < proxy.methods.length; index++) {
      walkMethod(
        proxy.methods[index],
        flaxCodegenManifestV2Pointer(
          flaxCodegenManifestV2Pointer(pointer, 'methods'),
          '$index',
        ),
      );
    }
    for (var index = 0; index < proxy.getters.length; index++) {
      walkGetter(
        proxy.getters[index],
        flaxCodegenManifestV2Pointer(
          flaxCodegenManifestV2Pointer(pointer, 'getters'),
          '$index',
        ),
      );
    }
    for (var index = 0; index < proxy.setters.length; index++) {
      walkGetter(
        proxy.setters[index],
        flaxCodegenManifestV2Pointer(
          flaxCodegenManifestV2Pointer(pointer, 'setters'),
          '$index',
        ),
      );
    }
  }

  final classesPointer = flaxCodegenManifestV2Pointer(modelPointer, 'classes');
  for (var index = 0; index < module.classes.length; index++) {
    final type = module.classes[index];
    final classPointer = flaxCodegenManifestV2Pointer(classesPointer, '$index');
    requireOwner(
      id: type.id,
      name: type.name,
      expectedKind: FlaxCodegenWireKind.type,
      idPointer: flaxCodegenManifestV2Pointer(classPointer, 'id'),
    );
    for (var ctor = 0; ctor < type.constructors.length; ctor++) {
      final constructorPointer = flaxCodegenManifestV2Pointer(
        flaxCodegenManifestV2Pointer(classPointer, 'constructors'),
        '$ctor',
      );
      walkParameters(
        type.constructors[ctor].parameters,
        flaxCodegenManifestV2Pointer(constructorPointer, 'parameters'),
      );
    }
    for (var getter = 0; getter < type.getters.length; getter++) {
      walkGetter(
        type.getters[getter],
        flaxCodegenManifestV2Pointer(
          flaxCodegenManifestV2Pointer(classPointer, 'getters'),
          '$getter',
        ),
      );
    }
    for (var setter = 0; setter < type.setters.length; setter++) {
      walkGetter(
        type.setters[setter],
        flaxCodegenManifestV2Pointer(
          flaxCodegenManifestV2Pointer(classPointer, 'setters'),
          '$setter',
        ),
      );
    }
    for (var getter = 0; getter < type.staticGetters.length; getter++) {
      walkGetter(
        type.staticGetters[getter],
        flaxCodegenManifestV2Pointer(
          flaxCodegenManifestV2Pointer(classPointer, 'staticGetters'),
          '$getter',
        ),
      );
    }
    for (var method = 0; method < type.methods.length; method++) {
      walkMethod(
        type.methods[method],
        flaxCodegenManifestV2Pointer(
          flaxCodegenManifestV2Pointer(classPointer, 'methods'),
          '$method',
        ),
      );
    }
    for (var generic = 0; generic < type.typeParameters.length; generic++) {
      walkGeneric(
        type.typeParameters[generic],
        flaxCodegenManifestV2Pointer(
          flaxCodegenManifestV2Pointer(classPointer, 'typeParameters'),
          '$generic',
        ),
      );
    }
    for (var superType = 0; superType < type.superTypes.length; superType++) {
      walkType(
        type.superTypes[superType],
        flaxCodegenManifestV2Pointer(
          flaxCodegenManifestV2Pointer(classPointer, 'superTypes'),
          '$superType',
        ),
      );
    }
    for (var iface = 0; iface < type.widgetInterfaces.length; iface++) {
      walkType(
        type.widgetInterfaces[iface],
        flaxCodegenManifestV2Pointer(
          flaxCodegenManifestV2Pointer(classPointer, 'widgetInterfaces'),
          '$iface',
        ),
      );
    }
    for (var getter = 0; getter < type.widgetGetters.length; getter++) {
      walkGetter(
        type.widgetGetters[getter],
        flaxCodegenManifestV2Pointer(
          flaxCodegenManifestV2Pointer(classPointer, 'widgetGetters'),
          '$getter',
        ),
      );
    }
    if (type.proxy != null) {
      walkProxy(
        type.proxy!,
        flaxCodegenManifestV2Pointer(classPointer, 'proxy'),
      );
    }
  }

  final typesPointer = flaxCodegenManifestV2Pointer(modelPointer, 'types');
  for (var index = 0; index < module.types.length; index++) {
    final type = module.types[index];
    final typePointer = flaxCodegenManifestV2Pointer(typesPointer, '$index');
    requireOwner(
      id: type.id,
      name: type.name,
      expectedKind: FlaxCodegenWireKind.type,
      idPointer: flaxCodegenManifestV2Pointer(typePointer, 'id'),
    );
    for (var generic = 0; generic < type.typeParameters.length; generic++) {
      walkGeneric(
        type.typeParameters[generic],
        flaxCodegenManifestV2Pointer(
          flaxCodegenManifestV2Pointer(typePointer, 'typeParameters'),
          '$generic',
        ),
      );
    }
  }

  final functionsPointer = flaxCodegenManifestV2Pointer(
    modelPointer,
    'functions',
  );
  for (var index = 0; index < module.functions.length; index++) {
    final function = module.functions[index];
    final functionPointer = flaxCodegenManifestV2Pointer(
      functionsPointer,
      '$index',
    );
    requireOwner(
      id: function.id,
      name: function.call.name,
      expectedKind: FlaxCodegenWireKind.function,
      idPointer: flaxCodegenManifestV2Pointer(functionPointer, 'id'),
    );
    walkMethod(
      function.call,
      flaxCodegenManifestV2Pointer(functionPointer, 'call'),
    );
  }

  final snapshotsPointer = flaxCodegenManifestV2Pointer(
    modelPointer,
    'snapshots',
  );
  for (var index = 0; index < module.snapshots.length; index++) {
    final snapshot = module.snapshots[index];
    requireOwner(
      id: snapshot.id,
      name: snapshot.name,
      expectedKind: FlaxCodegenWireKind.type,
      idPointer: flaxCodegenManifestV2Pointer(
        flaxCodegenManifestV2Pointer(snapshotsPointer, '$index'),
        'id',
      ),
    );
  }
}

/// Matches identity.dart package-segment grammar: nonempty, lowercase letter
/// first, then lowercase letters, digits, or underscores.
final _dartPackageNamePattern = RegExp(r'^[a-z][a-z0-9_]*$');

bool _isCanonicalDartPackageName(String value) =>
    _dartPackageNamePattern.hasMatch(value);

int? _requiredInt(FlaxCodegenManifestV2Object object, String key) =>
    object.requiredValue<int>(key, (value, pointer) {
      if (value is! int) {
        object.diagnostics.add(
          pointer: pointer,
          message: 'Expected an integer.',
        );
        return null;
      }
      return value;
    });
