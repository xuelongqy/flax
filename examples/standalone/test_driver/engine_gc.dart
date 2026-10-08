import 'dart:io';

import 'package:flutter_driver/flutter_driver.dart';
import 'package:integration_test/common.dart';
import 'package:integration_test/integration_test_driver.dart';

Future<void> main() async {
  final mode = Platform.environment['FLAX_ENGINE_CHECK_MODE'] ?? 'debug';
  final product = '${mode[0].toUpperCase()}${mode.substring(1)}';
  final app =
      '${Directory.current.path}/build/macos/Build/Products/$product/flax_standalone.app';
  final opened = await Process.run('open', ['-a', app]);
  if (opened.exitCode != 0) throw StateError('${opened.stderr}');
  final driver = await FlutterDriver.connect();
  try {
    if (mode == 'profile') {
      await driver.startTracing(
        streams: [
          TimelineStream.gc,
          TimelineStream.dart,
          TimelineStream.embedder,
        ],
      );
    }
    final response = Response.fromJson(
      await driver.requestData(null, timeout: const Duration(minutes: 20)),
    );
    final data = response.data;
    if (!response.allTestsPassed) {
      throw StateError(response.formattedFailureDetails);
    }
    if (data?['scenario'] != 'engine-gc' || data?['completed'] != true) {
      throw StateError('Engine GC application did not complete');
    }
    if (mode == 'profile') {
      // Decode the trace in this host process, never in the measured Dart heap.
      final timeline = await driver.stopTracingAndDownloadTimeline();
      for (final phase in ['baseline', 'joint']) {
        final markers = timeline.events!
            .where((event) => event.name == 'FlaxProfile-$phase')
            .map((event) => event.phase)
            .toList();
        if (markers.length != 2 || markers[0] != 'b' || markers[1] != 'e') {
          throw StateError('Incomplete $phase timeline: $markers');
        }
      }
      data!['timeline'] = timeline.json;
      data['timelineDownloadedByHost'] = true;
    }
    await writeResponseData(
      data,
      destinationDirectory: 'build',
      testOutputFilename: 'engine-gc-$mode',
    );
    stdout.writeln('All tests passed.');
  } finally {
    await driver.close();
  }
}
