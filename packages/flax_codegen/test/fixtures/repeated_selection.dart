import 'package:flax_codegen/flax_codegen.dart';

const repeatedSelection = {
  'AsyncWidgetStore': FlaxCodegenClassSelection(
    {
      '': ['callback'],
    },
    kind: 'object',
    instanceMethods: {'load': []},
  ),
  'WidgetCache': FlaxCodegenClassSelection(
    {
      '': ['child'],
    },
    kind: 'object',
    getters: ['wrap', 'nullable'],
    instanceMethods: {
      'save': ['value', 'fail'],
      'take': [],
      'clear': [],
      'transform': ['callback'],
      'saveTransform': ['callback'],
      'callTransform': ['child'],
    },
  ),
  'ChildConsumer': FlaxCodegenClassSelection({
    '': ['key', 'render', 'child'],
  }),
  'Key': FlaxCodegenClassSelection({}, kind: 'object'),
  'BuildContext': FlaxCodegenClassSelection(
    {},
    kind: 'context',
    getters: ['mounted'],
  ),
  'ContextBatch': FlaxCodegenClassSelection({
    '': ['render', 'epoch', 'count'],
  }),
  'CallbackStore': FlaxCodegenClassSelection(
    {
      '': ['builders'],
    },
    kind: 'object',
    getters: ['builders', 'wrappedBuilders'],
    staticGetters: ['nativeBuilders', 'widgets'],
  ),
  'NestedBatch': FlaxCodegenClassSelection({
    '': ['key', 'builders', 'groups', 'keyed', 'events', 'discard', 'repeat'],
  }),
  'TileBatch': FlaxCodegenClassSelection({
    '': ['key', 'render', 'count', 'discard'],
  }),
  'WidgetListBatch': FlaxCodegenClassSelection({
    '': ['key', 'render', 'onChildren'],
  }),
  'RetainedTile': FlaxCodegenClassSelection({
    '': ['key', 'label', 'child', 'keep'],
  }),
};
