import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_v2.dart';
import 'package:flax_codegen/src/manifest_v2_codec.dart';
import 'package:flax_codegen/src/module_id_rewrite.dart';

import '../test/fixtures/interop_selection.dart';
import '../test/fixtures/repeated_selection.dart';

Future<void> main() async {
  final package = Directory.current.absolute;
  final output = Directory('${package.path}/.dart_tool/flax/ui')
    ..createSync(recursive: true);
  final core = _loadManifest2Modules(
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
  _LoadedManifestModules dependencies,
) async {
  final parser = FlaxCodegenBindingParser(package.path);
  try {
    final selected = dependencies.raw.isEmpty
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
    parser.prepareModules(dependencies.raw);
    final parsed = await parser.parse(config);
    // Parser matches analyzer identities. Official JS/Dart modules speak wire
    // IDs, so freeze the local model before emit.
    final frozen = flaxCodegenRewriteModuleIds(parsed, dependencies.rawToWire);
    final emitter = FlaxCodegenBindingEmitter([...dependencies.wire, frozen]);
    File('${output.path}/${name}_bindings.dart')
        .writeAsStringSync(emitter.dart(frozen));
    File('${output.path}/${name}_bindings.ts')
        .writeAsStringSync(emitter.typescript(frozen));
  } finally {
    parser.dispose();
  }
}

class _LoadedManifestModules {
  const _LoadedManifestModules({
    required this.wire,
    required this.raw,
    required this.rawToWire,
  });

  final List<FlaxCodegenModuleModel> wire;
  final List<FlaxCodegenModuleModel> raw;
  final Map<String, String> rawToWire;
}

_LoadedManifestModules _loadManifest2Modules(File file) {
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
  final rawToWire = <String, String>{
    for (final entry in wireToRaw.entries) entry.value: entry.key,
  };
  final wire = [for (final module in manifest.modules) module.model.module];
  return _LoadedManifestModules(
    wire: wire,
    raw: [
      for (final module in wire) flaxCodegenRewriteModuleIds(module, wireToRaw),
    ],
    rawToWire: rawToWire,
  );
}
