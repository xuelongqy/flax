import 'dart:io';

import 'package:configured_prices/configured_prices.dart';
import 'package:flax/flax.dart';
import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:flutter/widgets.dart';

import 'src/generated/sdk/bindings.g.dart';
import 'src/generated/sdk/delivery.g.dart';

export 'api.dart';
export 'src/generated/sdk/bindings.g.dart';
export 'src/generated/sdk/delivery.g.dart';
export 'src/generated/internal/admin.g.dart';
export 'src/generated/internal/app.g.dart';

class ConfiguredMiniapp extends StatelessWidget {
  ConfiguredMiniapp({
    super.key,
    required this.directory,
    this.onError,
    List<FlaxPlugin>? plugins,
  }) : plugins =
           plugins ??
           [
             const FlaxMaterialPlugin(),
             shopPlugin,
             deliveryPlugin,
             const FlaxPricesPlugin(),
           ];

  final Directory directory;
  final void Function(Object, StackTrace)? onError;
  final List<FlaxPlugin> plugins;

  @override
  Widget build(BuildContext context) => FlaxView.directory(
    directory: directory,
    createRuntime: FlaxEngine.createRuntime,
    plugins: plugins,
    onError: onError,
  );
}
