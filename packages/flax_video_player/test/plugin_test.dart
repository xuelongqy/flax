import 'package:flax/flax.dart';

import 'package:flax_video_player/flax_video_player.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test(
    'plugin declares only its binding module and rejects sandboxed media IO',
    () {
      final plugin = FlaxVideoPlayerPlugin();
      expect(plugin.globals, isEmpty);
      expect(plugin.jsModules, {'@flax/video-player'});
      expect(plugin.bindingModules, [videoBindings]);
      expect(() => plugin.install(_SandboxedHost()), throwsUnsupportedError);
    },
  );
}

class _SandboxedHost extends Fake implements FlaxHostContext {
  @override
  FlaxSandboxContext get sandbox => _SandboxContext();
}

class _SandboxContext extends Fake implements FlaxSandboxContext {}
