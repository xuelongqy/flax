/// Generated bindings for the supported standalone Material UI subset.
library;

import 'package:flax/flax.dart';

export 'src/generated/material_bindings.g.dart';

/// Enables host delivery of the public Flutter Material JavaScript module.
class FlaxMaterialPlugin extends FlaxPlugin {
  const FlaxMaterialPlugin();

  @override
  String get id => 'flax.material';

  @override
  Set<String> get globals => const {};

  @override
  Set<String> get jsModules => const {'@flax/flutter/material'};

  @override
  FlaxPluginInstance install(FlaxHostContext context) =>
      const _FlaxMaterialPluginInstance();
}

class _FlaxMaterialPluginInstance implements FlaxPluginInstance {
  const _FlaxMaterialPluginInstance();

  @override
  void close() {}

  @override
  void dispose() {}
}
