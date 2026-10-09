import 'package:flax_codegen/flax_codegen.dart';

const repeatedSelection = {
  'ContextCallbacks': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    instanceMethods: {
      'keep': ['callback'],
      'keepPending': ['callback'],
      'choose': ['callback'],
      'chooseMany': ['callback', 'context'],
      'nullable': ['callback'],
      'record': ['callback'],
      'future': ['callback'],
      'nullableFuture': ['callback'],
      'requiredFutureOr': ['callback'],
      'futureOr': ['callback'],
      'nullableValue': ['callback'],
      'futureRecord': ['callback'],
      'returned': ['context'],
      'returnedFuture': ['context'],
    },
  ),
  'WidgetValues': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    getters: [
      'current',
      'nativeNullable',
      'nativeList',
      'nativeSet',
      'nativeLazy',
      'nativeLazyStream',
      'nativeIterableRecords',
    ],
    setters: ['context'],
    staticGetters: ['absent'],
    methods: {
      'echoStatic': ['value'],
    },
    instanceMethods: {
      'keepFuture': ['callback'],
      'keepNullable': ['callback'],
      'keepRecord': ['callback'],
      'keepSet': ['callback'],
      'keepMap': ['callback'],
      'keepFutureOr': ['callback'],
      'keepStream': ['callback'],
      'keepIterable': ['callback'],
      'keepNullableIterable': ['callback'],
      'keepIterableRecord': ['callback'],
      'keepConcreteIterable': ['callback'],
      'keepInterfaceIterable': ['callback'],
      'keepSuggestions': ['callback'],
      'keepIterableStream': ['callback'],
      'keepIterableRecords': ['callback'],
      'firstFromIterable': ['callback', 'lazy', 'useSet'],
      'keepConcrete': ['callback'],
      'keepInterface': ['callback'],
      'keepNested': ['callback'],
      'save': ['children', 'fail'],
      'echo': ['value'],
      'laterContext': ['value'],
    },
  ),
  'CoreValuePeer': FlaxCodegenClassSelection(
    {
      '': ['date', 'uri', 'buffer'],
    },
    kind: 'object',
    getters: ['date', 'uri', 'buffer'],
  ),
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
