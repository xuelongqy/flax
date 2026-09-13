import 'dart:convert';
import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:flutter/scheduler.dart';
import 'package:integration_test/integration_test.dart';

import '../test/support/scenario.dart';

void main() {
  final binding = IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  final frames = <FrameTiming>[];
  final measurements = <String, Object?>{};
  binding.addTimingsCallback(frames.addAll);
  if (const bool.fromEnvironment('FLAX_VERIFY_RELEASE')) {
    binding.allTestsPassed.future.then((passed) {
      stdout.writeln(
        'FLAX_STANDALONE_RESULT:${jsonEncode({...measurements, 'completed': passed, 'scenario': 'standalone-application', 'failures': binding.failureMethodsDetails.map((f) => f.toString()).toList()})}',
      );
    });
  }
  testWidgets('standalone application runs from installed packages', (t) async {
    for (final phase in ['cold', 'warm']) {
      frames.clear();
      await applicationScenario(t);
      // Frame timing reports are batched by the engine; flush before changing phase.
      await t.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 500)),
      );
      final builds =
          frames.map((frame) => frame.buildDuration.inMicroseconds).toList()
            ..sort();
      final rasters =
          frames.map((frame) => frame.rasterDuration.inMicroseconds).toList()
            ..sort();
      measurements[phase] = {
        'frameCount': frames.length,
        'buildMedianMicroseconds': builds.isEmpty
            ? null
            : builds[builds.length ~/ 2],
        'rasterMedianMicroseconds': rasters.isEmpty
            ? null
            : rasters[rasters.length ~/ 2],
        'rssBytes': ProcessInfo.currentRss,
      };
    }
    binding.reportData = {
      'scenario': 'standalone-application',
      'completed': true,
    };
  });
}
