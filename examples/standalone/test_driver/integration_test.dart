import 'dart:io';

import 'package:integration_test/integration_test_driver.dart';

Future<void> main() async {
  // Several temporary apps share a bundle ID; activate this exact build.
  final app =
      '${Directory.current.path}/build/macos/Build/Products/Debug/flax_standalone.app';
  final opened = await Process.run('open', ['-a', app]);
  if (opened.exitCode != 0) {
    throw StateError('Cannot activate test application: ${opened.stderr}');
  }
  await integrationDriver(
    responseDataCallback: (data) async {
      if (data?['scenario'] != 'standalone-application' ||
          data?['completed'] != true) {
        throw StateError('Standalone integration did not complete');
      }
      await writeResponseData(
        data,
        destinationDirectory: 'build',
        testOutputFilename: 'standalone-integration',
      );
    },
  );
}
