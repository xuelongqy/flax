import 'package:flax_codegen/flax_codegen.dart';

const bindingCompletionSelection = {
  'CompletionFuture': FlaxCodegenClassSelection(
    {
      '': ['value'],
    },
    kind: 'object',
    proxy: 'extends',
    instanceMethods: {
      'then': ['onValue', 'onError'],
      'observe': [],
      'echo': ['result'],
    },
  ),
  'CompletionStream': FlaxCodegenClassSelection(
    {
      '': ['stream'],
    },
    kind: 'object',
    proxy: 'extends',
  ),
  'GenericCell': FlaxCodegenClassSelection(
    {},
    kind: 'widgetInterface',
    getters: ['value'],
  ),
  'CompletionDecorated': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    proxy: 'extends',
    instanceMethods: {
      'decorate': ['value'],
      'nativeDecorate': ['value'],
      'box': ['callback'],
    },
  ),
  'CompletionBox': FlaxCodegenClassSelection(
    {
      '': ['value'],
    },
    kind: 'object',
    getters: ['value', 'typeName'],
    instanceMethods: {
      'visit': ['callback'],
      'visitScoped': ['callback'],
    },
    callbackScopedParameters: {
      'visitScoped.callback': [0],
    },
  ),
  'CompletionWidget': FlaxCodegenClassSelection(
    {
      '': ['value', 'key'],
    },
    proxy: 'extends',
    getters: ['value'],
    instanceMethods: {
      'label': ['value'],
    },
  ),
  'MultiProxy': FlaxCodegenClassSelection(
    {
      'left': ['arguments'],
      'right': ['value'],
      'hidden': ['_flaxPeer'],
    },
    kind: 'object',
    proxy: 'extends',
    getters: ['value'],
    instanceMethods: {
      'transform': ['input'],
      'call': ['input'],
    },
  ),
  'GetterProxy': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    proxy: 'extends',
    getters: ['value', 'written'],
    setters: ['value'],
    instanceMethods: {'read': []},
  ),
  'SetterProxy': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    proxy: 'extends',
    getters: ['value'],
    setters: ['value'],
    instanceMethods: {
      'write': ['next'],
    },
  ),
};
const bindingCompletionFunctions = {
  'completionCell': FlaxCodegenFunctionSelection([]),
  'rememberCompletionCallback': FlaxCodegenFunctionSelection(['callback']),
  'completionCallbackAlive': FlaxCodegenFunctionSelection([]),
  'defaultWidget': FlaxCodegenFunctionSelection(['value']),
  'defaultSet': FlaxCodegenFunctionSelection(['value']),
  'voidInput': FlaxCodegenFunctionSelection(['value']),
  'completionOptions': FlaxCodegenFunctionSelection(['options', 'amount']),
  'voidCallback': FlaxCodegenFunctionSelection(['callback']),
  'returnedVoidCallback': FlaxCodegenFunctionSelection([]),
  'nativeFunction': FlaxCodegenFunctionSelection([]),
  'nativeGenericFunction': FlaxCodegenFunctionSelection([]),
  'echoFunction': FlaxCodegenFunctionSelection(['value']),
  'callbackMap': FlaxCodegenFunctionSelection([]),
  'completionEcho': FlaxCodegenFunctionSelection(['value']),
  'completionRecord': FlaxCodegenFunctionSelection([]),
  'completionWrongRecord': FlaxCodegenFunctionSelection([]),
  'completionWidgets': FlaxCodegenFunctionSelection([]),
  'completionWidgetMap': FlaxCodegenFunctionSelection([]),
  'completionWidgetSet': FlaxCodegenFunctionSelection([]),
  'keepCompletionWidgets': FlaxCodegenFunctionSelection(['factory']),
  'readCompletionWidget': FlaxCodegenFunctionSelection([]),
  'clearCompletionWidgets': FlaxCodegenFunctionSelection([]),
  'firstCompletionNumber': FlaxCodegenFunctionSelection(['factory']),
  'sameCompletionIterables': FlaxCodegenFunctionSelection(['values']),
  'completionTicker': FlaxCodegenFunctionSelection(['callback']),
};
const bindingCompletionExtensions = {
  'CompletionMeters': FlaxCodegenExtensionSelection(
    getters: ['value'],
    methods: {
      'plus': ['amount'],
    },
    staticGetters: ['unit'],
  ),
};
