import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_v5.dart';
import 'package:flax_codegen/src/manifest_v5_codec.dart';

import '../test/fixtures/interop_selection.dart';
import '../test/fixtures/repeated_selection.dart';

Future<void> main() async {
  final package = Directory.current.absolute;
  final output = Directory('${package.path}/.dart_tool/flax/ui')
    ..createSync(recursive: true);
  final (core, rawToWire) = _loadCoreManifest(
    File('${package.path}/bindings/manifest.json'),
  );
  await _generate(
    package,
    output,
    'interop',
    interopSelection,
    core,
    rawToWire,
    typedefs: [
      'CodegenOnChanged',
      'CodegenNames',
      'CodegenAttributes',
      'CodegenTransform',
      'CodegenMapper',
      'CodegenItems',
      'CodegenGenericMapper',
      'CodegenConverter',
      'CodegenAsyncMapper',
      'CodegenAsyncGenericMapper',
      'CodegenNullableMapper',
      'NestedAsyncMapper',
    ],
  );
  await _generate(
    package,
    output,
    'repeated',
    repeatedSelection,
    core,
    rawToWire,
  );
}

Future<void> _generate(
  Directory package,
  Directory output,
  String name,
  Map<String, FlaxCodegenClassSelection> classes,
  List<FlaxCodegenModuleModel> dependencies,
  Map<String, String> rawToWire, {
  List<String> typedefs = const [],
}) async {
  final parser = FlaxCodegenBindingParser(package.path);
  try {
    final selected = dependencies.isEmpty
        ? classes
        : Map.fromEntries(
            classes.entries.where(
              (entry) => !{'Key', 'BuildContext'}.contains(entry.key),
            ),
          );
    final config = FlaxCodegenBindingConfig(
      name,
      package.uri.resolve('test/fixtures/$name.dart').toString(),
      '@test/$name',
      'unused.dart',
      'unused.ts',
      selected,
      typedefs: typedefs,
    );
    await parser.prepare([config]);
    final wireToRaw = {
      for (final entry in rawToWire.entries) entry.value: entry.key,
    };
    parser.prepareModules([
      for (final dependency in dependencies)
        _rewriteModuleIds(dependency, wireToRaw),
    ]);
    final module = _rewriteModuleIds(await parser.parse(config), rawToWire);
    final emitter = FlaxCodegenBindingEmitter([...dependencies, module]);
    File('${output.path}/${name}_bindings.dart')
        .writeAsStringSync(emitter.dart(module));
    File('${output.path}/${name}_bindings.ts')
        .writeAsStringSync(emitter.typescript(module));
  } finally {
    parser.dispose();
  }
}

(List<FlaxCodegenModuleModel>, Map<String, String>) _loadCoreManifest(
  File file,
) {
  final diagnostics = FlaxCodegenManifestV5Diagnostics(file.path);
  final manifest = FlaxCodegenManifestV5.parse(
    file.readAsStringSync(),
    diagnostics,
  );
  diagnostics.throwIfAny();
  final rawToWire = <String, String>{};
  for (final module in manifest!.modules) {
    for (final identity in module.model.identities) {
      rawToWire['${identity.sourceIdentity.originatingUri}::'
              '${identity.sourceIdentity.name}'] =
          identity.wireId.value;
    }
  }
  return (
    [for (final module in manifest.modules) module.model.module],
    rawToWire,
  );
}

FlaxCodegenModuleModel _rewriteModuleIds(
  FlaxCodegenModuleModel module,
  Map<String, String> idMap,
) {
  Object? walk(Object? value) {
    if (value is Map) {
      final out = <String, Object?>{};
      for (final entry in value.entries) {
        final key = entry.key as String;
        final child = entry.value;
        if (key == 'id' && child is String && idMap.containsKey(child)) {
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

  final diagnostics = FlaxCodegenManifestV5Diagnostics('');
  // Local fixtures use file: imports and are never published. Preserve those
  // emitter-only paths outside the manifest's public-library validation.
  final encoded = FlaxCodegenManifestV5Codec.encodeModule(module)
    ..['typeLibraries'] = <String, Object?>{};
  // Native override imports have the same local-only file URI boundary.
  for (final type in encoded['classes']! as List) {
    for (final member in (type as Map)['widgetMembers'] as List? ?? const []) {
      (member as Map)['imports'] = <String, Object?>{};
    }
  }
  final decoded = FlaxCodegenManifestV5Codec.decodeModule(
    walk(encoded),
    diagnostics,
    '',
    module.name,
  );
  diagnostics.throwIfAny();
  final rewritten = decoded!;
  for (var i = 0; i < rewritten.classes.length; i++) {
    final members = rewritten.classes[i].widgetMembers;
    for (var j = 0; j < members.length; j++) {
      members[j].imports.addAll(module.classes[i].widgetMembers[j].imports);
    }
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
    snapshots: rewritten.snapshots,
    typedefs: rewritten.typedefs,
    topLevel: rewritten.topLevel,
    moduleId: module.moduleId,
    requiredCapabilities: module.requiredCapabilities,
  );
}
