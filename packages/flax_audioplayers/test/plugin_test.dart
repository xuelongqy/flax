import 'package:flax/flax.dart';

import 'package:flax_audioplayers/flax_audioplayers.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test(
    'plugin declares only its binding module and rejects sandboxed media IO',
    () {
      final plugin = FlaxAudioplayersPlugin();
      expect(plugin.globals, isEmpty);
      expect(plugin.jsModules, {'@flax/audioplayers'});
      expect(plugin.bindingModules, [audioBindings]);
      expect(() => plugin.install(_SandboxedHost()), throwsUnsupportedError);
    },
  );
}

class _SandboxedHost extends Fake implements FlaxHostContext {
  @override
  FlaxSandboxContext get sandbox => _SandboxContext();
}

class _SandboxContext extends Fake implements FlaxSandboxContext {}
