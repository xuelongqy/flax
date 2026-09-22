/// Generated bindings for the supported standalone Cupertino UI subset.
library;

import 'package:flax/flax.dart';

import 'src/generated/cupertino_bindings.g.dart' show cupertinoBindings;

export 'src/generated/cupertino_bindings.g.dart';

/// Enables host delivery of the public Flutter Cupertino JavaScript module.
class FlaxCupertinoPlugin extends FlaxPlugin {
  const FlaxCupertinoPlugin();

  @override
  String get id => 'flax.cupertino';

  @override
  Set<String> get globals => const {};

  @override
  Set<String> get jsModules => const {'@flax/flutter/cupertino'};

  @override
  List<FlaxBindingModule> get bindingModules => const [cupertinoBindings];

  @override
  FlaxPluginInstance install(FlaxHostContext context) =>
      const _FlaxCupertinoPluginInstance();
}

class _FlaxCupertinoPluginInstance implements FlaxPluginInstance {
  const _FlaxCupertinoPluginInstance();

  @override
  void close() {}

  @override
  void dispose() {}
}
