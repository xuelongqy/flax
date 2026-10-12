import 'package:flax_codegen/flax_codegen.dart';

const nativeWidgetsSelection = {
  'NativeLabel': FlaxCodegenClassSelection(
    {
      '': ['data', 'key'],
    },
    proxy: 'extends',
    getters: ['data', 'key'],
    instanceMethods: {
      'build': ['context'],
    },
  ),
  'NativeCounter': FlaxCodegenClassSelection(
    {
      '': ['key'],
    },
    proxy: 'extends',
    instanceMethods: {'createState': []},
  ),
  'NativeCounterState': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    getters: ['count', 'mounted', 'context'],
  ),
  'NativeBox': FlaxCodegenClassSelection(
    {
      '': ['key'],
    },
    proxy: 'extends',
    instanceMethods: {
      'createRenderObject': ['context'],
      'updateRenderObject': ['context', 'renderObject'],
      'didUnmountRenderObject': ['renderObject'],
    },
  ),
  'RenderConstrainedBox': FlaxCodegenClassSelection({}, kind: 'object'),
  'RenderObject': FlaxCodegenClassSelection({}, kind: 'object'),
  'NativeDependency': FlaxCodegenClassSelection(
    {
      '': ['child', 'key'],
    },
    proxy: 'extends',
    instanceMethods: {
      'updateShouldNotify': ['oldWidget'],
    },
  ),
  'NativeWidgetCalls': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    instanceMethods: {
      'producer': ['value'],
      'text': ['callback'],
      'input': ['value'],
      'nullable': ['callback'],
      'texts': ['callback'],
      'later': ['callback'],
      'counter': ['callback'],
      'box': ['callback'],
      'dependency': ['callback'],
    },
  ),
};
