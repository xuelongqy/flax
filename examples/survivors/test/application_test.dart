import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:audioplayers_platform_interface/audioplayers_platform_interface.dart';
import 'package:flutter_test/flutter_test.dart';

// Reuse the owner's test fixture without shipping its separate example.
// ignore: avoid_relative_lib_imports
import '../../../packages/flax_audioplayers/example/lib/testing.dart';
import 'application_flow.dart';

void main() {
  testWidgets('game UI, asset retry and persisted results', (tester) async {
    final previous = AudioplayersPlatformInterface.instance;
    final previousGlobal = GlobalAudioplayersPlatformInterface.instance;
    AudioplayersPlatformInterface.instance = FlaxFakeAudioPlatform();
    GlobalAudioplayersPlatformInterface.instance =
        FlaxFakeGlobalAudioPlatform();
    try {
      await applicationFlow(tester);
    } finally {
      AudioplayersPlatformInterface.instance = previous;
      GlobalAudioplayersPlatformInterface.instance = previousGlobal;
    }
  });
  testWidgets(
    'healthy flow rejects a late prepared-event failure on guardian reward',
    (tester) async {
      final previous = AudioplayersPlatformInterface.instance,
          previousGlobal = GlobalAudioplayersPlatformInterface.instance;
      final audio = _LateGuardianRewardFailure();
      AudioplayersPlatformInterface.instance = audio;
      GlobalAudioplayersPlatformInterface.instance =
          FlaxFakeGlobalAudioPlatform();
      try {
        await expectLater(
          applicationFlow(tester),
          throwsA(
            isA<TestFailure>().having(
              (failure) => failure.message,
              'stage',
              contains('guardian reward: app silent status'),
            ),
          ),
        );
        expect(audio.injected, isTrue);
      } finally {
        // This case intentionally stops mid-flow; close its owning View before invariants.
        await tester.pumpWidget(const SizedBox.shrink());
        for (var i = 0; i < 20; i++) {
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 10)),
          );
          await tester.pump(const Duration(milliseconds: 20));
        }
        AudioplayersPlatformInterface.instance = previous;
        GlobalAudioplayersPlatformInterface.instance = previousGlobal;
      }
    },
  );
}

class _LateGuardianRewardFailure extends FlaxFakeAudioPlatform {
  final reward = File('js/assets/audio/win.wav').readAsBytesSync();
  bool injected = false;
  @override
  Future<void> setSourceBytes(
    String playerId,
    Uint8List bytes, {
    String? mimeType,
  }) {
    if (listEquals(bytes, reward)) {
      failNext = true;
      injected = true;
    }
    return super.setSourceBytes(playerId, bytes, mimeType: mimeType);
  }
}
