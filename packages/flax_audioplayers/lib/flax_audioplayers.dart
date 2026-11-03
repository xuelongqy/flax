/// Generated bindings for the public audioplayers library.
library;

import 'package:flax/flax.dart';

import 'src/generated/audioplayers_bindings.g.dart'
    show audioBindings, audioPlugin;

export 'src/generated/audioplayers_bindings.g.dart';

/// Installs audioplayers bindings for trusted application code.
///
/// Native media IO does not use Core Fetch or its scoped resource backends.
class FlaxAudioplayersPlugin extends FlaxPlugin {
  const FlaxAudioplayersPlugin();

  @override
  String get id => 'flax.audioplayers';

  @override
  Set<String> get globals => const {};

  @override
  Set<String> get jsModules => const {'@flax/audioplayers'};

  @override
  List<FlaxBindingModule> get bindingModules => const [audioBindings];

  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    if (context.sandbox != null) {
      throw UnsupportedError(
        'audioplayers bindings do not support sandboxed Sessions',
      );
    }
    return audioPlugin.install(context);
  }
}
