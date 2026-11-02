/// Generated bindings for the public video_player library.
library;

import 'package:flax/flax.dart';

import 'src/generated/video_player_bindings.g.dart'
    show videoBindings, videoPlugin;

export 'src/generated/video_player_bindings.g.dart';

/// Installs video_player bindings for trusted application code.
///
/// Native media IO does not use Core Fetch or its scoped resource backends.
class FlaxVideoPlayerPlugin extends FlaxPlugin {
  const FlaxVideoPlayerPlugin();

  @override
  String get id => 'flax.video-player';

  @override
  Set<String> get globals => const {};

  @override
  Set<String> get jsModules => const {'@flax/video-player'};

  @override
  List<FlaxBindingModule> get bindingModules => const [videoBindings];

  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    if (context.sandbox != null) {
      throw UnsupportedError(
        'video_player bindings do not support sandboxed Sessions',
      );
    }
    return videoPlugin.install(context);
  }
}
