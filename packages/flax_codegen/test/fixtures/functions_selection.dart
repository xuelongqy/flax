import 'package:flax_codegen/flax_codegen.dart';

const functionClasses = {
  'StateInputBox': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    instanceMethods: {
      'isLive': ['input'],
      'column': ['children'],
    },
    methods: {
      'isMounted': ['input'],
    },
  ),
  'ContextBox': FlaxCodegenClassSelection(
    {
      '': ['origin', 'optional'],
    },
    kind: 'object',
    getters: ['mounted', 'optionalMounted'],
    setters: ['origin', 'optional'],
    instanceMethods: {
      'matches': ['context'],
    },
    methods: {
      'isMounted': ['context'],
    },
    staticGetters: ['selectedMounted'],
    staticSetters: ['selected'],
  ),
  'ContextTile': FlaxCodegenClassSelection({
    '': ['key', 'origin'],
  }),
  'BuilderBox': FlaxCodegenClassSelection(
    {
      '': ['builder'],
    },
    kind: 'object',
    instanceMethods: {
      'configure': ['builder'],
      'wrap': [],
    },
    methods: {
      'wrapStatic': ['builder'],
    },
  ),
  'PreferredBuilderBox': FlaxCodegenClassSelection(
    {
      '': ['builder'],
    },
    kind: 'object',
    instanceMethods: {
      'invoke': ['origin'],
    },
    methods: {
      'buildStatic': ['origin', 'builder'],
    },
  ),
  'FunctionToken': FlaxCodegenClassSelection(
    {
      '': ['value'],
    },
    kind: 'object',
    getters: ['value'],
  ),
};

const functionSelections = {
  'stateMounted': FlaxCodegenFunctionSelection(['value']),
  'optionalState': FlaxCodegenFunctionSelection(['value']),
  'mountedStates': FlaxCodegenFunctionSelection(['values']),
  'widgetColumn': FlaxCodegenFunctionSelection(['children']),
  'nestedWidgetColumn': FlaxCodegenFunctionSelection(['children']),
  'isDark': FlaxCodegenFunctionSelection(['context']),
  'contextMounted': FlaxCodegenFunctionSelection(['context']),
  'optionalContext': FlaxCodegenFunctionSelection(['context']),
  'mountedContexts': FlaxCodegenFunctionSelection(['contexts']),
  'contextReader': FlaxCodegenFunctionSelection([]),
  'invokeContextListener': FlaxCodegenFunctionSelection(['context']),
  'saveBuilderContext': FlaxCodegenFunctionSelection(['origin']),
  'invokeStaleBuilder': FlaxCodegenFunctionSelection(['builder']),
  'invokeBuilder': FlaxCodegenFunctionSelection(['origin', 'builder']),
  'indexedBuilder': FlaxCodegenFunctionSelection(['builder']),
  'nullableBuilder': FlaxCodegenFunctionSelection(['builder']),
  'asyncBuilder': FlaxCodegenFunctionSelection(['builder']),
  'namedBuilder': FlaxCodegenFunctionSelection(['builder']),
  'optionalContextBuilder': FlaxCodegenFunctionSelection(['builder']),
  'nestedBuilders': FlaxCodegenFunctionSelection(['builder']),

  'wrapBuilder': FlaxCodegenFunctionSelection(['builder']),
  'builderWrapper': FlaxCodegenFunctionSelection([]),
  'wrapContent': FlaxCodegenFunctionSelection(['value']),
  'mapContent': FlaxCodegenFunctionSelection(['value', 'transform']),
  'addValues': FlaxCodegenFunctionSelection(['left', 'right']),
  'invokeTopLevel': FlaxCodegenFunctionSelection(['value']),
  'withDefaults': FlaxCodegenFunctionSelection(['token', 'transform']),
  'echoToken': FlaxCodegenFunctionSelection(
    ['value'],
    typeArguments: ['FunctionToken'],
  ),
  'exchange': FlaxCodegenFunctionSelection(['value']),
  'copyData': FlaxCodegenFunctionSelection(
    ['value'],
    dataParameters: ['value'],
    dataResult: true,
  ),
  'toggleMode': FlaxCodegenFunctionSelection(['value']),
  'mapNumbers': FlaxCodegenFunctionSelection(['values', 'transform']),
  'multiplyBy': FlaxCodegenFunctionSelection(['factor']),
  'finishLater': FlaxCodegenFunctionSelection(['fail', 'empty']),
  'finishVoid': FlaxCodegenFunctionSelection([]),
  'callAsync': FlaxCodegenFunctionSelection(['value', 'callback']),
  'callNamedCallback': FlaxCodegenFunctionSelection(['transform']),
  'callDebugPrinter': FlaxCodegenFunctionSelection(['callback']),
  'nativeTile': FlaxCodegenFunctionSelection([]),
  'nativePreferred': FlaxCodegenFunctionSelection([]),
  'preferredHeight': FlaxCodegenFunctionSelection(['value']),
  'invokePreferred': FlaxCodegenFunctionSelection(['origin', 'builder']),
  'invokeNullablePreferred': FlaxCodegenFunctionSelection([
    'origin',
    'builder',
  ]),
  'invokeAsyncPreferred': FlaxCodegenFunctionSelection(['origin', 'builder']),
  'mapPreferred': FlaxCodegenFunctionSelection(['value', 'transform']),
  'preferredIdentity': FlaxCodegenFunctionSelection([]),
  'mapPreferredList': FlaxCodegenFunctionSelection(['transform']),
  'genericPreferredList': FlaxCodegenFunctionSelection(['builder']),

  'openFixturePanel': FlaxCodegenFunctionSelection(
    ['origin', 'content', 'root', 'failAfterPush', 'before', 'maintainState'],
    dataResult: true,
    route: FlaxCodegenRouteCallModel('origin', 'root', ['content']),
  ),
};
