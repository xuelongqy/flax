import 'package:path/path.dart' as p;

import 'config.dart';
import 'package_metadata.dart';

/// Shared SDK layout used before installing setup files and during validation.
FlaxCodegenTypesSdkLayout? flaxCodegenTypesSdkLayout(
  FlaxCodegenPackageMetadataProjection metadata,
  List<FlaxCodegenBindingConfig> configs,
) {
  final sdk = metadata.typesSdk;
  if (sdk == null) return null;
  final missing = sdk.scopes.toSet().difference(
    configs.map((c) => c.name).toSet(),
  );
  if (missing.isNotEmpty) {
    throw FormatException('Unknown typesSdk scopes: ${missing.join(', ')}.');
  }
  final entries = <String, String>{};
  final helperSources = <String, String>{};
  final publicSpecifiers = <String>{};
  for (final config in configs.where((c) => sdk.scopes.contains(c.name))) {
    final routes = config.publicLibraries.isEmpty
        ? {config.jsPackage: config.tsOutput}
        : {
            for (final route in config.publicLibraries.values)
              route.jsPackage: route.tsOutput,
          };
    for (final entry in routes.entries) {
      final specifier = entry.key;
      if (specifier != sdk.name && !specifier.startsWith('${sdk.name}/')) {
        throw FormatException(
          'SDK scope ${config.name} exports $specifier outside ${sdk.name}. Update jsPackage or typesSdk.name.',
        );
      }
      final source = entry.value;
      if (p.posix.isAbsolute(source) ||
          source.contains('\\') ||
          p.posix.normalize(source) != source ||
          source.startsWith('../') ||
          !source.endsWith('.ts') ||
          source.endsWith('.d.ts')) {
        throw FormatException('Invalid SDK TypeScript source: $source.');
      }
      final key = specifier == sdk.name
          ? '.'
          : './${specifier.substring(sdk.name.length + 1)}';
      if (entries.containsKey(key) && entries[key] != source) {
        throw FormatException('Conflicting SDK export: $specifier.');
      }
      entries[key] = source;
      if (config.publicLibraries.isNotEmpty) {
        helperSources[key == '.' ? './_bindings/*' : '$key/_bindings/*'] =
            '${p.posix.dirname(source)}/_bindings/*.ts';
      }
      publicSpecifiers.add(specifier);
    }
  }
  for (final config in configs.where((c) => !sdk.scopes.contains(c.name))) {
    final routes = config.publicLibraries.isEmpty
        ? {config.jsPackage: config.tsOutput}
        : {
            for (final route in config.publicLibraries.values)
              route.jsPackage: route.tsOutput,
          };
    for (final route in routes.entries) {
      if (entries.values.contains(route.value) ||
          publicSpecifiers.contains(route.key)) {
        throw FormatException(
          'SDK publication shares an entry/output with unselected scope ${config.name}. Separate its JS entry/output or include that scope.',
        );
      }
    }
  }
  var sourceRoot = p.posix.dirname(entries.values.first);
  for (final source in entries.values) {
    while (sourceRoot != '.' && !p.posix.isWithin(sourceRoot, source)) {
      sourceRoot = p.posix.dirname(sourceRoot);
    }
  }
  return FlaxCodegenTypesSdkLayout(sdk, entries, sourceRoot, helperSources);
}

final class FlaxCodegenTypesSdkLayout {
  const FlaxCodegenTypesSdkLayout(
    this.config,
    this.entries,
    this.sourceRoot,
    this.helperSources,
  );

  final FlaxCodegenTypesSdkConfig config;
  final Map<String, String> entries;
  final String sourceRoot;
  final Map<String, String> helperSources;

  Map<String, String> get declarations => {
    for (final entry in {...entries, ...helperSources}.entries)
      entry.key:
          './types/${p.posix.withoutExtension(p.posix.relative(entry.value, from: sourceRoot))}.d.ts',
  };

  Map<String, Object?> get compilerConfig => {
    'flaxGenerated': true,
    'extends': p.posix.relative(flaxCodegenJsBuildPlan, from: config.directory),
    'compilerOptions': {
      'target': 'ES2022',
      'module': 'NodeNext',
      'moduleResolution': 'NodeNext',
      'strict': true,
      'skipLibCheck': true,
      'declaration': true,
      'composite': true,
      'emitDeclarationOnly': true,
      'noEmitOnError': true,
      'rootDir': p.posix.relative(sourceRoot, from: config.directory),
      'outDir': '.build',
      'tsBuildInfoFile': '.build/tsconfig.tsbuildinfo',
      'declarationDir': 'types',
    },
    'files': [
      for (final path in entries.values.toSet().toList()..sort())
        p.posix.relative(path, from: config.directory),
    ],
  };
}
