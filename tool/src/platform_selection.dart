import 'dart:io';

import 'package:flax/native_target.dart';

final class PlatformCheckOptions {
  PlatformCheckOptions(List<String> arguments) {
    final values = <String, String>{};
    for (var i = 0; i < arguments.length; i++) {
      final argument = arguments[i];
      if (argument == '--list' || argument == '--build-only') {
        if (values.containsKey(argument)) {
          throw ArgumentError('Duplicate $argument');
        }
        values[argument] = 'true';
        continue;
      }
      final split = argument.indexOf('=');
      final key = split < 0 ? argument : argument.substring(0, split);
      if (!const {
            '--target',
            '--engine',
            '--scope',
            '--device',
            '--package',
            '--file',
          }.contains(key) ||
          values.containsKey(key)) {
        throw ArgumentError('Unknown or duplicate option: $argument');
      }
      values[key] = split < 0
          ? (++i < arguments.length
                ? arguments[i]
                : throw ArgumentError('Missing $key value'))
          : argument.substring(split + 1);
      if (values[key]!.isEmpty || values[key]!.startsWith('--')) {
        throw ArgumentError('Missing $key value');
      }
    }
    target = FlaxNativeTarget(
      values['--target'] ?? FlaxNativeTarget.host().name,
    );
    final engine = values['--engine'] ?? 'all';
    if (!const {'hermes', 'v8', 'all'}.contains(engine)) {
      throw ArgumentError('Unknown engine: $engine');
    }
    engines = engine == 'all' ? ['hermes', 'v8'] : [engine];
    scope = values['--scope'] ?? 'all';
    if (!const {'all', 'platform', 'ui'}.contains(scope)) {
      throw ArgumentError('Unknown scope: $scope');
    }
    packageName = values['--package'];
    file = values['--file'];
    if (scope != 'ui' && (packageName != null || file != null)) {
      throw ArgumentError(
        'UI selection requires --scope=ui; all is complete coverage',
      );
    }
    if (file != null && packageName == null) {
      throw ArgumentError('--file requires --package');
    }
    device = values['--device'];
    list = values['--list'] == 'true';
    buildOnly = values['--build-only'] == 'true';
    if (scope == 'ui' && buildOnly) {
      throw ArgumentError('--scope=ui requires execution');
    }
    if (target.mobile && device == null && !list && !buildOnly) {
      throw ArgumentError(
        '${target.name} requires --device, or explicit --build-only',
      );
    }
  }

  late final FlaxNativeTarget target;
  late final List<String> engines;
  late final String scope;
  late final String? device;
  late final String? packageName;
  late final String? file;
  late final bool list;
  late final bool buildOnly;
}

FlaxNativeTarget currentCheckTarget() => FlaxNativeTarget(
  Platform.environment['FLAX_CHECK_TARGET'] ?? FlaxNativeTarget.host().name,
);

String currentCheckDevice() =>
    Platform.environment['FLAX_CHECK_DEVICE'] ?? currentCheckTarget().os;
