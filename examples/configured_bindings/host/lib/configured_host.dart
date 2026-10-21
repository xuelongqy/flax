import 'dart:io';

import 'package:configured_prices/configured_prices.dart';
import 'package:flax/flax.dart';
import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:flutter/widgets.dart';

import 'src/generated/sdk/bindings.g.dart';
import 'src/generated/sdk/delivery.g.dart';
import 'src/generated/internal/admin.g.dart';

export 'api.dart';
export 'src/generated/sdk/bindings.g.dart';
export 'src/generated/sdk/delivery.g.dart';
export 'src/generated/internal/admin.g.dart';

class ConfiguredMiniapp extends StatelessWidget {
  const ConfiguredMiniapp({
    super.key,
    required this.directory,
    this.onError,
    this.plugins = const [
      FlaxMaterialPlugin(),
      FlaxPublicSdkPlugin(),
      FlaxPricesPlugin(),
    ],
  });

  final Directory directory;
  final void Function(Object, StackTrace)? onError;
  final List<FlaxPlugin> plugins;

  @override
  Widget build(BuildContext context) => FlaxView.directory(
    directory: directory,
    createRuntime: FlaxEngine.createRuntime,
    bindings: FlaxBindingRegistry([]),
    plugins: plugins,
    onError: onError,
  );
}

class FlaxPublicSdkPlugin extends FlaxPlugin {
  const FlaxPublicSdkPlugin();

  @override
  String get id => 'example.shop';
  @override
  Set<String> get globals => const {};
  @override
  Set<String> get jsModules => const {
    '@example/shop/api',
    '@example/shop/delivery',
  };
  @override
  List<FlaxBindingModule> get bindingModules => [
    shopBindings,
    deliveryBindings,
  ];
  @override
  FlaxPluginInstance install(FlaxHostContext context) => _Instance();
}

class _Instance implements FlaxPluginInstance {
  @override
  void close() {}
  @override
  void dispose() {}
}

class FlaxInternalPlugin extends FlaxPlugin {
  const FlaxInternalPlugin();

  @override
  String get id => 'example.admin';
  @override
  Set<String> get globals => const {};
  @override
  Set<String> get jsModules => const {'@flax/app/admin'};
  @override
  List<FlaxBindingModule> get bindingModules => [adminBindings];
  @override
  FlaxPluginInstance install(FlaxHostContext context) => _Instance();
}
