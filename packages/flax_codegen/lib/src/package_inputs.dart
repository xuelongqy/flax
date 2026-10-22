part of 'package_pipeline.dart';

/// A build-system snapshot. No reads fall back to the physical filesystem.
final class FlaxCodegenBuildInputs {
  const FlaxCodegenBuildInputs({
    required this.packageRoot,
    required this.files,
    required this.packageRoots,
    required this.libraryResolver,
    required this.publicLibraries,
  });

  final String packageRoot;
  final Map<String, String> files;
  final Map<String, String> packageRoots;
  final FlaxCodegenLibraryResolver libraryResolver;
  final FlaxCodegenPublicLibraries publicLibraries;
}

final class _PackageInputFiles {
  const _PackageInputFiles([this.contents]);

  final Map<String, String>? contents;

  Map<String, String> dartSources(String root, Set<String> outputs) {
    final lib = Directory(p.join(root, 'lib'));
    final paths =
        contents?.keys.where((path) => p.isWithin(lib.path, path)) ??
        (lib.existsSync()
            ? lib
                  .listSync(recursive: true, followLinks: false)
                  .whereType<File>()
                  .map((file) => file.path)
            : const <String>[]);
    final result = <String, String>{};
    for (final path in paths.toList()..sort()) {
      final relative = p.posix.joinAll(p.split(p.relative(path, from: root)));
      if (!path.endsWith('.dart') || outputs.contains(relative)) continue;
      final source = read(path);
      if (source.startsWith(_normalGeneratedHeaderLines.join('\n')) ||
          source.startsWith(_hostGeneratedHeaderLines.join('\n'))) {
        continue;
      }
      result[relative] = source;
    }
    return result;
  }

  String read(String path) {
    if (contents == null) return File(path).readAsStringSync();
    return contents![p.normalize(path)] ??
        (throw FlaxCodegenException([
          _resolutionDiagnostic(path, 'Cannot read file.'),
        ]));
  }

  bool isFile(String path) => contents == null
      ? FileSystemEntity.typeSync(path, followLinks: false) ==
            FileSystemEntityType.file
      : contents!.containsKey(p.normalize(path));

  FlaxCodegenPackageMetadataProjection metadata(String path) => contents == null
      ? FlaxCodegenPackageMetadataProjection.readStrict(path)
      : FlaxCodegenPackageMetadataProjection.parseStrict(
          read(path),
          source: path,
        );
}
