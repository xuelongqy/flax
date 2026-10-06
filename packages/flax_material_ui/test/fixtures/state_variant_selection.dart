import 'package:flax_codegen/flax_codegen.dart';

const stateVariantSelection = {
  'State': FlaxCodegenClassSelection(
    {},
    proxyVariants: {
      'ContextInputState': FlaxCodegenProxyVariantSelection(
        mixins: [FlaxCodegenMixinSelection('ContextInputMixin')],
      ),
    },
  ),
  'TickerProviderProbe': FlaxCodegenClassSelection(
    {
      '': ['vsync'],
    },
    kind: 'object',
    instanceMethods: {'dispose': []},
  ),
};
