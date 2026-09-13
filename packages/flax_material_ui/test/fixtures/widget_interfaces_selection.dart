import 'package:flax_codegen/flax_codegen.dart';

const widgetInterfacesSelection = {
  'Key': FlaxCodegenClassSelection({}, kind: 'object'),
  'ExtentContract': FlaxCodegenClassSelection(
    {},
    kind: 'widgetInterface',
    getters: ['extent'],
  ),
  'LabelledContract': FlaxCodegenClassSelection(
    {},
    kind: 'widgetInterface',
    getters: ['extent', 'label'],
  ),
  'ExtentTile': FlaxCodegenClassSelection(
    {
      '': ['key', 'extent', 'label', 'child'],
    },
    widgetInterfaces: ['LabelledContract'],
  ),
  'ExtentFrame': FlaxCodegenClassSelection({
    '': ['key', 'item', 'items'],
  }),
  'MetadataFrame': FlaxCodegenClassSelection({
    '': ['key', 'item'],
  }),
  'ExtentProbe': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    staticGetters: ['native', 'plain', 'opaque', 'header'],
  ),
};
