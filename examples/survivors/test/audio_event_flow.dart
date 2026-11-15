import 'package:flutter_test/flutter_test.dart';

import 'audio_shutdown_flow.dart' show exerciseAudioEventFailure;

void main() {
  testWidgets(
    'post-resume Android server error silences play and cancels five observers',
    exerciseAudioEventFailure,
  );
}
