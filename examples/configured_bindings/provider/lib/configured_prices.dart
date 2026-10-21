import 'package:flax/flax.dart';

import 'src/generated/bindings.g.dart';

export 'api.dart';
export 'src/generated/bindings.g.dart';

class FlaxPricesPlugin extends FlaxPlugin {
  const FlaxPricesPlugin();

  @override
  String get id => 'example.prices';
  @override
  Set<String> get globals => const {};
  @override
  Set<String> get jsModules => const {'@example/prices/api'};
  @override
  List<FlaxBindingModule> get bindingModules => [pricesBindings];
  @override
  FlaxPluginInstance install(FlaxHostContext context) => _Instance();
}

class _Instance implements FlaxPluginInstance {
  @override
  void close() {}
  @override
  void dispose() {}
}
