import 'dart:io';

import 'diagnostic.dart';
import 'package_pipeline.dart';

/// Canonical flax_codegen CLI usage.
const flaxCodegenCliUsage =
    'Usage:\n'
    '  dart run flax_codegen validate --config <direct-yaml>\n'
    '  dart run flax_codegen check --config <direct-yaml>\n'
    '  dart run flax_codegen generate --config <direct-yaml>\n'
    '  dart run flax_codegen validate --library <package:...dart>\n'
    '  dart run flax_codegen check --library <package:...dart>\n'
    '  dart run flax_codegen generate --library <package:...dart>';

/// Parsed CLI invocation for the three package-pipeline commands.
final class FlaxCodegenCliArgs {
  const FlaxCodegenCliArgs({
    required this.command,
    this.configPath,
    this.library,
  });

  /// One of `validate`, `check`, or `generate`.
  final String command;

  /// Explicit direct bindings YAML path.
  final String? configPath;

  /// Public Dart library for fail-open automatic binding.
  final String? library;

  bool get automatic => library != null;
}

/// Fail-closed CLI usage / argument error (not a binding diagnostic).
final class FlaxCodegenCliUsageException implements Exception {
  FlaxCodegenCliUsageException(this.message);

  final String message;

  @override
  String toString() => message;
}

/// Parses exactly `validate|check|generate --config <direct-yaml>` or the
/// fail-open automatic `--library <package:...dart>` form.
///
/// Rejects every other argument shape.
FlaxCodegenCliArgs parseFlaxCodegenCliArgs(List<String> arguments) {
  if (arguments.isEmpty) {
    throw FlaxCodegenCliUsageException(flaxCodegenCliUsage);
  }

  final command = arguments.first;
  const commands = {'validate', 'check', 'generate'};
  if (!commands.contains(command)) {
    throw FlaxCodegenCliUsageException(
      'Unknown command: $command\n$flaxCodegenCliUsage',
    );
  }
  if (arguments.length != 3 ||
      !{'--config', '--library'}.contains(arguments[1]) ||
      arguments[2].isEmpty ||
      arguments[2].startsWith('-')) {
    throw FlaxCodegenCliUsageException(flaxCodegenCliUsage);
  }
  return FlaxCodegenCliArgs(
    command: command,
    configPath: arguments[1] == '--config' ? arguments[2] : null,
    library: arguments[1] == '--library' ? arguments[2] : null,
  );
}

/// Runs the flax_codegen CLI. Returns a process exit code (0 success, 1 failure).
Future<int> runFlaxCodegenCli(
  List<String> arguments, {
  void Function(String line)? writeStdout,
  void Function(String line)? writeStderr,
  String? workingDirectory,
}) async {
  final void Function(String) out = writeStdout ?? stdout.writeln;
  final void Function(String) err = writeStderr ?? stderr.writeln;
  try {
    final parsed = parseFlaxCodegenCliArgs(arguments);
    switch (parsed.command) {
      case 'validate':
        if (parsed.automatic) {
          final validation = await FlaxCodegenPackagePipeline.validateLibrary(
            parsed.library!,
            packageRoot: workingDirectory,
          );
          _writeAutoSummary(out, 'Validated', validation);
        } else {
          final validation = await FlaxCodegenPackagePipeline.validateConfig(
            parsed.configPath!,
          );
          out(
            'Validated package ${validation.dartPackage} '
            '(${validation.configPaths.length} configs, '
            '${validation.outputInventory.length} outputs).',
          );
        }
      case 'check':
        if (parsed.automatic) {
          final validation = await FlaxCodegenPackagePipeline.checkLibrary(
            parsed.library!,
            packageRoot: workingDirectory,
          );
          _writeAutoSummary(out, 'Checked', validation);
        } else {
          await FlaxCodegenPackagePipeline.checkConfig(parsed.configPath!);
          out('Generated bindings and manifests are reproducible.');
        }
      case 'generate':
        if (parsed.automatic) {
          final validation = await FlaxCodegenPackagePipeline.generateLibrary(
            parsed.library!,
            packageRoot: workingDirectory,
          );
          _writeAutoSummary(out, 'Generated', validation);
        } else {
          await FlaxCodegenPackagePipeline.generateConfig(parsed.configPath!);
          out('Generated selected Dart, TypeScript, and manifest bindings.');
        }
      default:
        throw FlaxCodegenCliUsageException(
          'Unknown command: ${parsed.command}\n$flaxCodegenCliUsage',
        );
    }
    return 0;
  } on FlaxCodegenCliUsageException catch (error) {
    err(error.message);
    return 1;
  } on FlaxCodegenException catch (error) {
    err(error.toString());
    return 1;
  } catch (error, stackTrace) {
    err('$error\n$stackTrace');
    return 1;
  }
}

void _writeAutoSummary(
  void Function(String line) out,
  String verb,
  FlaxCodegenPackageValidation validation,
) {
  out(
    '$verb automatic bindings for ${validation.dartPackage} '
    '(${validation.outputInventory.length} outputs, '
    '${validation.skips.length} skipped items).',
  );
  for (final skip in validation.skips) {
    out('SKIP ${skip.target}: ${skip.reason}');
  }
  for (final notice in validation.notices) {
    out('NOTE ${notice.target}: ${notice.message}');
  }
}
