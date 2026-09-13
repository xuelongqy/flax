import 'package:flax_codegen/flax_codegen.dart';

const interopSelection = {
  'DeferredProperty': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    instanceMethods: {
      'resolve': ['states'],
    },
    methods: {
      'resolveWith': ['callback'],
    },
    deferredFactories: ['resolveWith'],
  ),
  'DeferredConsumer': FlaxCodegenClassSelection(
    {
      '': ['token', 'number'],
    },
    kind: 'object',
    getters: ['token', 'number'],
  ),
  'SharedDeferredProperty': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    instanceMethods: {'resolve': []},
    methods: {
      'resolveWith': ['callback'],
      'reset': [],
    },
    deferredFactories: ['resolveWith'],
  ),
  'SharedDeferredConsumer': FlaxCodegenClassSelection(
    {
      '': ['value'],
    },
    kind: 'object',
    getters: ['value'],
  ),
  'AsyncContract': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    proxy: 'implements',
    instanceMethods: {'read': []},
  ),
  'AsyncCallbacks': FlaxCodegenClassSelection(
    {
      '': ['transform', 'optional'],
    },
    kind: 'object',
    getters: ['callbacks', 'mapping'],
    instanceMethods: {
      'apply': ['value'],
      'applyOptional': [],
      'echo': ['callback'],
      'runVoid': ['callback'],
      'runNullable': ['callback'],
      'runMode': ['callback', 'value'],
      'runCallback': ['callback'],
      'runAsyncCallback': ['callback'],
      'runToken': ['callback', 'value'],
      'runList': ['callback', 'value'],
      'runData': ['callback', 'value'],
    },
    data: FlaxCodegenDataSelection(
      methods: {
        'runData': ['callback', 'value'],
      },
      results: ['runData'],
    ),
  ),
  'UnsupportedFunctionResults': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    getters: [
      'optional',
      'optionalPair',
      'named',
      'generic',
      'genericAsync',
      'asynchronous',
    ],
  ),
  'GenericContract': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    proxy: 'implements',
  ),
  'GenericFunctionCollections': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    getters: ['callbacks', 'mapping'],
    instanceMethods: {
      'echo': ['values'],
    },
  ),
  'AccessorContract': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    proxy: 'implements',
    getters: ['value'],
  ),
  'PropertyParent': FlaxCodegenClassSelection(
    {
      '': ['initial'],
    },
    kind: 'object',
    proxy: 'extends',
    typeArguments: ['Token'],
    getters: ['value', 'observed', 'inherited'],
    setters: ['value'],
  ),
  'PropertyChild': FlaxCodegenClassSelection(
    {
      '': ['initial'],
    },
    kind: 'object',
    proxy: 'extends',
  ),
  'PropertyPort': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    proxy: 'implements',
    getters: ['readOnly', 'token', 'mode', 'items', 'groups', 'transform'],
    setters: ['writeOnly', 'token', 'mode', 'items', 'groups', 'transform'],
  ),
  'FieldContract': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    proxy: 'implements',
    getters: ['value'],
    setters: ['value'],
  ),
  'FailingProperty': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    proxy: 'extends',
    getters: ['value'],
  ),
  'DeferredValues': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    getters: [
      'absent',
      'present',
      'callbacks',
      'nullableResult',
      'nothing',
      'failure',
      'futures',
      'transforms',
      'sharedCallbacks',
      'untypedCallbacks',
      'groupedCallbacks',
      'mapping',
      'tokens',
      'modes',
      'listeners',
      'direct',
      'laterFunction',
      'integerView',
      'doubleView',
    ],
    staticGetters: ['staticAbsent', 'staticFunction'],
    instanceMethods: {
      'echo': ['values'],
      'missing': [],
      'same': ['callback'],
      'passTransforms': ['values'],
    },
  ),
  'Base': FlaxCodegenClassSelection(
    {
      '': [],
      'named': ['initial'],
    },
    kind: 'object',
    staticGetters: ['tag'],
    methods: {'identify': []},
    getters: ['inherited', 'listeners', 'finished'],
    setters: ['inherited'],
    instanceMethods: {
      'ping': ['first', 'second'],
      'watch': ['callback'],
      'unwatch': ['callback'],
      'notify': [],
      'finish': [],
    },
    disposeMethod: 'finish',
    listenerPairs: {'watch': 'unwatch'},
  ),
  'Child': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    instanceMethods: {
      'ping': ['first'],
    },
  ),
  'Probe': FlaxCodegenClassSelection(
    {
      '': ['data'],
    },
    kind: 'object',
    getters: ['modes', 'mapping', 'mode', 'nullableMode', 'data'],
    setters: ['mode', 'nullableMode'],
    staticGetters: ['defaultMode'],
    methods: {
      'copyStatic': ['value'],
    },
    instanceMethods: {
      'echo': ['value'],
      'nonNull': ['value'],
      'defaultValue': ['value'],
      'unsafeNumber': [],
      'unboundValue': [],
      'echoDynamic': ['value'],
      'copy': ['value'],
      'copyLater': ['value'],
      'copyCallback': ['callback', 'value'],
      'callReturned': ['produce'],
      'callMap': ['produce'],
      'save': ['produce'],
      'invokeSaved': [],
      'clearSaved': [],
      'echoMode': ['value'],
      'laterMode': [],
      'laterNull': [],
      'inspectMode': ['callback'],
    },
    data: FlaxCodegenDataSelection(
      constructors: {
        '': ['data'],
      },
      getters: ['data'],
      methods: {
        'copy': ['value'],
        'copyStatic': ['value'],
        'copyLater': ['value'],
        'copyCallback': ['callback', 'value'],
      },
      results: ['copy', 'copyStatic', 'copyLater', 'copyCallback'],
    ),
  ),
  'Token': FlaxCodegenClassSelection(
    {
      '': ['value'],
    },
    kind: 'object',
    getters: ['value'],
  ),
  'Store': FlaxCodegenClassSelection(
    {
      '': ['value'],
    },
    kind: 'object',
    typeArguments: ['Token'],
    getters: ['value', 'items', 'groups'],
    setters: ['value', 'items', 'groups'],
    instanceMethods: {
      'echo': ['input'],
      'select': ['input'],
    },
    methodTypeArguments: {
      'select': ['Token'],
    },
  ),
  'Collections': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    getters: [
      'numbers',
      'counts',
      'graph',
      'fixed',
      'frozen',
      'labels',
      'broadNumbers',
      'broadCounts',
      'nullableNumbers',
      'unique',
      'broadUnique',
      'uniqueIterable',
      'iterableSetConflict',
      'setIterableConflict',
      'compatibleListIterable',
      'cyclicIterableSetConflict',
      'cyclicSetIterableConflict',
      'frozenSet',
      'iterable',
    ],
    setters: ['numbers', 'counts', 'graph', 'labels'],
    instanceMethods: {
      'accept': ['values'],
      'defaults': ['values'],
      'nested': ['values'],
      'acceptIterable': ['values'],
      'acceptSet': ['values'],
    },
  ),
  'Evaluator': FlaxCodegenClassSelection(
    {
      '': ['initial'],
    },
    kind: 'object',
    proxy: 'extends',
    getters: ['initialResult'],
    instanceMethods: {
      'evaluate': ['value'],
      'twice': ['value'],
    },
  ),
  'Selector': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    proxy: 'implements',
    instanceMethods: {
      'choose': ['value'],
    },
  ),
  'Functions': FlaxCodegenClassSelection(
    {
      '': ['transform'],
      'fail': ['transform'],
    },
    kind: 'object',
    methods: {
      'retainAndThrow': ['callback'],
      'callRetained': ['value'],
      'clearRetained': [],
    },
    instanceMethods: {
      'apply': ['value'],
      'clear': [],
    },
  ),
  'Derived': FlaxCodegenClassSelection(
    {
      '': ['value'],
    },
    kind: 'object',
    typeArguments: ['Token'],
    getters: ['value'],
    instanceMethods: {
      'echo': ['input'],
    },
  ),
  'ComparableToken': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    typeArguments: ['ComparableLeaf'],
    instanceMethods: {
      'compare': ['other'],
    },
  ),
  'ComparableLeaf': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    instanceMethods: {
      'compare': ['other'],
    },
  ),
  'Bounded': FlaxCodegenClassSelection(
    {
      '': ['value'],
    },
    kind: 'object',
    typeArguments: ['ComparableLeaf'],
    getters: ['value'],
  ),
};
