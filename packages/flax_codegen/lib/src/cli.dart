import 'dart:io';

import 'diagnostic.dart';
import 'package_pipeline.dart';

/// Canonical flax_codegen CLI usage. The old `[--check] <config>` form is gone.
const flaxCodegenCliUsage =
    'Usage:\n'
    '  dart run flax_codegen validate --config <direct-yaml>\n'
    '  dart run flax_codegen check --config <direct-yaml>\n'
    '  dart run flax_codegen generate --config <direct-yaml>';

/// Parsed CLI invocation for the three package-pipeline commands.
final class FlaxCodegenCliArgs {
  const FlaxCodegenCliArgs({required this.command, required this.configPath});

  /// One of `validate`, `check`, or `generate`.
  final String command;

  /// Explicit direct bindings YAML path.
  final String configPath;
}

/// Fail-closed CLI usage / argument error (not a binding diagnostic).
final class FlaxCodegenCliUsageException implements Exception {
  FlaxCodegenCliUsageException(this.message);

  final String message;

  @override
  String toString() => message;
}

/// Parses exactly `validate|check|generate --config <direct-yaml>`.
///
/// Rejects the legacy `[--check] <config>` form and any other shape.
FlaxCodegenCliArgs parseFlaxCodegenCliArgs(List<String> arguments) {
  if (arguments.contains('--check') ||
      _looksLikeLegacyConfigInvocation(arguments)) {
    throw FlaxCodegenCliUsageException(
      'The old "[--check] <config>" form is not supported.\n'
      '$flaxCodegenCliUsage',
    );
  }
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
      arguments[1] != '--config' ||
      arguments[2].isEmpty ||
      arguments[2].startsWith('-')) {
    throw FlaxCodegenCliUsageException(flaxCodegenCliUsage);
  }
  return FlaxCodegenCliArgs(command: command, configPath: arguments[2]);
}

bool _looksLikeLegacyConfigInvocation(List<String> arguments) {
  if (arguments.isEmpty) return false;
  final first = arguments.first;
  if (first.endsWith('.yaml') || first.endsWith('.yml')) {
    return true;
  }
  // `dart run flax_codegen --check …` was the old root form.
  return first == '--check';
}

/// Runs the flax_codegen CLI. Returns a process exit code (0 success, 1 failure).
Future<int> runFlaxCodegenCli(
  List<String> arguments, {
  void Function(String line)? writeStdout,
  void Function(String line)? writeStderr,
}) async {
  final out = writeStdout ?? stdout.writeln;
  final err = writeStderr ?? stderr.writeln;
  try {
    final parsed = parseFlaxCodegenCliArgs(arguments);
    switch (parsed.command) {
      case 'validate':
        final validation = await FlaxCodegenPackagePipeline.validateConfig(
          parsed.configPath,
        );
        out(
          'Validated package ${validation.dartPackage} '
          '(${validation.configPaths.length} configs, '
          '${validation.outputInventory.length} outputs).',
        );
      case 'check':
        await FlaxCodegenPackagePipeline.checkConfig(parsed.configPath);
        out('Generated bindings and manifests are reproducible.');
      case 'generate':
        await FlaxCodegenPackagePipeline.generateConfig(parsed.configPath);
        out('Generated selected Dart, TypeScript, and manifest bindings.');
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
