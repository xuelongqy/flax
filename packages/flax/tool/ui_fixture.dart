import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_v2.dart';
import 'package:flax_codegen/src/manifest_v2_codec.dart';

import '../test/fixtures/interop_selection.dart';
import '../test/fixtures/repeated_selection.dart';

Future<void> main() async {
  final package = Directory.current.absolute;
  final output = Directory('${package.path}/.dart_tool/flax/ui')
    ..createSync(recursive: true);
  final core = _loadManifest2ModulesForParser(
    File('${package.path}/bindings/manifest.json'),
  );
  await _generate(package, output, 'interop', interopSelection, core);
  await _generate(package, output, 'repeated', repeatedSelection, core);
}

Future<void> _generate(
  Directory package,
  Directory output,
  String name,
  Map<String, FlaxCodegenClassSelection> classes,
  List<FlaxCodegenModuleModel> dependencies,
) async {
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
    );
    await parser.prepare([config]);
    parser.prepareModules(dependencies);
    final module = await parser.parse(config);
    final emitter = FlaxCodegenBindingEmitter([...dependencies, module]);
    File('${output.path}/${name}_bindings.dart')
        .writeAsStringSync(emitter.dart(module));
    File('${output.path}/${name}_bindings.ts')
        .writeAsStringSync(emitter.typescript(module));
  } finally {
    parser.dispose();
  }
}

List<FlaxCodegenModuleModel> _loadManifest2ModulesForParser(File file) {
  final diagnostics = FlaxCodegenManifestV2Diagnostics(file.path);
  final manifest = FlaxCodegenManifestV2.parse(
    file.readAsStringSync(),
    diagnostics,
  );
  diagnostics.throwIfAny();
  final wireToRaw = <String, String>{};
  for (final module in manifest!.modules) {
    for (final identity in module.model.identities) {
      wireToRaw[identity.wireId.value] =
          '${identity.sourceIdentity.originatingUri}::'
          '${identity.sourceIdentity.name}';
    }
  }
  return [
    for (final module in manifest.modules)
      _rewriteModuleIds(module.model.module, wireToRaw),
  ];
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

  final diagnostics = FlaxCodegenManifestV2Diagnostics('');
  final decoded = FlaxCodegenManifestV2Codec.decodeModule(
    walk(FlaxCodegenManifestV2Codec.encodeModule(module)),
    diagnostics,
    '',
    module.name,
  );
  diagnostics.throwIfAny();
  final rewritten = decoded!;
  return FlaxCodegenModuleModel(
    name: rewritten.name,
    library: rewritten.library,
    jsPackage: rewritten.jsPackage,
    dartOutput: module.dartOutput,
    tsOutput: module.tsOutput,
    classes: rewritten.classes,
    types: rewritten.types,
    typeLibraries: rewritten.typeLibraries,
    functions: rewritten.functions,
    snapshots: rewritten.snapshots,
  );
}
