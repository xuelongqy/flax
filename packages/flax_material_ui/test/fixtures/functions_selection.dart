import 'package:flax_codegen/flax_codegen.dart';

const functionClasses = {
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
  'FunctionToken': FlaxCodegenClassSelection(
    {
      '': ['value'],
    },
    kind: 'object',
    getters: ['value'],
  ),
};

const functionSelections = {
  'saveBuilderContext': FlaxCodegenFunctionSelection(['origin']),
  'invokeStaleBuilder': FlaxCodegenFunctionSelection(['builder']),
  'invokeBuilder': FlaxCodegenFunctionSelection(['origin', 'builder']),
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
  'openFixturePanel': FlaxCodegenFunctionSelection(
    ['origin', 'content', 'root', 'failAfterPush', 'before', 'maintainState'],
    dataResult: true,
    route: FlaxCodegenRouteCallModel('origin', 'root', ['content']),
  ),
};
