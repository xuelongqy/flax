import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:audioplayers_platform_interface/audioplayers_platform_interface.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';

import '../test/application_flow.dart';
import '../test/soak_flow.dart';
import '../test/native_audio_probe.dart';
import '../test/audio_shutdown_flow.dart';
import '../test/lifecycle_probe.dart';

class _SurvivorsTestBinding extends IntegrationTestWidgetsFlutterBinding
    with SurvivorsObserverTracking {
  @override
  bool get registerTestTextInput => true;
}

void main() {
  runZoned(
    () {
      final binding = _SurvivorsTestBinding();
      const soak = bool.fromEnvironment('FLAX_SURVIVORS_SOAK');
      if (soak) {
        binding.framePolicy =
            LiveTestWidgetsFlutterBindingFramePolicy.benchmarkLive;
      }
      var measurements = <String, Object?>{};
      binding.allTestsPassed.future.then((passed) {
        final report = {
          ...measurements,
          'scenario': soak
              ? 'survivors-active-combat-soak'
              : 'survivors-ui-smoke',
          'completed': passed,
          'cases': binding.results,
          'failures': binding.failureMethodsDetails
              .map((f) => f.toString())
              .toList(),
          if (!soak)
            'notCovered': [
              '30-minute active play',
              'physical interruption',
              'performance targets',
              '20 mount/unmount cycles',
            ],
        };
        if (Platform.isAndroid || Platform.isIOS) {
          final encoded = base64Encode(
            gzip.encode(utf8.encode(jsonEncode(report))),
          );
          for (var start = 0; start < encoded.length; start += 800) {
            final end = start + 800 < encoded.length
                ? start + 800
                : encoded.length;
            debugPrintSynchronously(
              'FLAX_SURVIVORS_RESULT_GZIP_BASE64:${encoded.substring(start, end)}',
            );
          }
        } else {
          debugPrintSynchronously(
            'FLAX_SURVIVORS_RESULT:${jsonEncode(report)}',
          );
        }
        debugPrintSynchronously(
          passed ? 'FLAX_SURVIVORS_PASSED' : 'FLAX_SURVIVORS_FAILED',
        );
        exit(passed ? 0 : 1);
      });
      testWidgets(
        soak
            ? '30-minute active combat and 20 resource cycles'
            : 'real Canvas game loading, input, transitions and persistence',
        (tester) async {
          if (soak) {
            measurements = await soakFlow(tester, report: measurements);
            expect(
              measurements['performanceTargetsPassed'],
              isTrue,
              reason: 'Required UI/raster p95 or callback-interval p99 target missed; see measurements',
            );
          } else {
            final previous = AudioplayersPlatformInterface.instance;
            final audio = NativeAudioProbe();
            AudioplayersPlatformInterface.instance = audio;
            try {
              await applicationFlow(
                tester,
                nativeAudio: audio,
                report: measurements,
              );
            } finally {
              measurements['nativeAudio'] = {
                ...audio.preparationStatus,
                'created': audio.created,
                'disposeCompleted': audio.disposed,
                'live': audio.live.toList(),
                'errors': audio.errors,
                'sourceEvents': audio.sourceEvents,
                'sourceEventCount': audio.sourceEventCount,
                'sourceEventWindow': 'last 1024 entries',
                'sourceErrorCount': audio.sourceErrorCount,
                'sourceErrors': audio.sourceErrors,
                'completedResumes': audio.completedResumes,
                'pendingPlayback': audio.pendingPlayback,
                'playbackErrors': audio.playbackErrors,
                'sourceSuccessDefinition':
                    'native setter completed AND prepared=true event observed',
                'ordinaryViewUnmountOverlap': audio.overlap,
              };
              AudioplayersPlatformInterface.instance = previous;
            }
          }
        },
        timeout: const Timeout(Duration(minutes: 48)),
      );
      if (!soak) {
        testWidgets(
          'post-resume platform error becomes silent play (fake backend)',
          exerciseAudioEventFailure,
        );
        testWidgets(
          'gated audio futures complete after ordinary owning View removal (fake backend)',
          exerciseAudioShutdown,
        );
      }
    },
    zoneSpecification: ZoneSpecification(
      print: (_, parent, zone, line) {
        // Android's Flutter print sink feeds adb logcat; stdout is not that sink.
        if (Platform.isAndroid) {
          parent.print(zone, line);
        } else {
          stdout.writeln(line);
        }
      },
    ),
  );
}
