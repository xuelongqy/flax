import 'package:flax_codegen/flax_codegen.dart';

const stateVariantSelection = {
  'TickerProviderProbe': FlaxCodegenClassSelection(
    {
      '': ['vsync'],
    },
    kind: 'object',
    instanceMethods: {'dispose': []},
  ),
};
