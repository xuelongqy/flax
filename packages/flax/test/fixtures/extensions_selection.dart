import 'package:flax_codegen/flax_codegen.dart';

Map<String, FlaxCodegenClassSelection> extensionClasses(String library) => {
  'ExtensionPage': FlaxCodegenClassSelection(
    {
      '': ['name'],
    },
    kind: 'page',
    pageAdapter: FlaxCodegenPageAdapterModel(library, 'adaptExtensionPage'),
  ),
  'ExtensionRoute': FlaxCodegenClassSelection({'': []}, kind: 'route'),
  'ExtensionValues': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    getters: [
      'widget',
      'preferred',
      'numbers',
      'words',
      'widgets',
      'nativeState',
      'selectedWidget',
    ],
    setters: ['nativeState', 'selectedWidget'],
    staticGetters: ['sharedState', 'sharedWidget'],
    staticSetters: ['sharedState', 'sharedWidget'],
    instanceMethods: {
      'state': [],
      'keepStateCallback': ['callback'],
      'matchesState': ['value'],
      'column': ['children'],
    },
    methods: {
      'stateMounted': ['value'],
    },
  ),
};

const extensionTopLevel = FlaxCodegenTopLevelSelection(
  'ReferenceValues',
  ['globalState', 'globalWidget', 'globalContext', 'currentContext'],
  setters: ['globalState', 'globalWidget', 'globalContext'],
);

const extensionFunctions = {
  'stateIsMounted': FlaxCodegenFunctionSelection(['value']),
  'optionalStateIsMounted': FlaxCodegenFunctionSelection(['value']),
  'countMountedStates': FlaxCodegenFunctionSelection(['values']),
  'columnWidgets': FlaxCodegenFunctionSelection(['children']),
  'columnWidgetGroups': FlaxCodegenFunctionSelection(['children']),
  'futureColumnWidgets': FlaxCodegenFunctionSelection(['children']),
};

const extensionSelection = {
  'IntListX': FlaxCodegenExtensionSelection(setters: ['firstValue']),
  'StringX': FlaxCodegenExtensionSelection(
    getters: ['isBlank'],
    methods: {
      'repeat': ['count'],
    },
    staticGetters: ['revision'],
    staticMethods: {
      'echo': ['value'],
    },
  ),
  'ListX': FlaxCodegenExtensionSelection(
    getters: ['firstValue'],
    setters: ['firstValue'],
    methods: {
      'mapFirst': ['callback'],
      'later': [],
    },
    operators: {
      '[]': ['index'],
    },
  ),
  'NullableX': FlaxCodegenExtensionSelection(getters: ['missing']),
  'ContextX': FlaxCodegenExtensionSelection(
    getters: ['isMounted', 'same', 'events'],
    methods: {
      'through': ['callback'],
      'later': ['callback'],
      'label': ['value'],
    },
  ),
  'WidgetX': FlaxCodegenExtensionSelection(
    getters: ['same'],
    methods: {
      'through': ['callback'],
    },
  ),
  'PreferredX': FlaxCodegenExtensionSelection(getters: ['height', 'same']),
  'StateX': FlaxCodegenExtensionSelection(
    getters: ['isMounted', 'same'],
    methods: {
      'through': ['callback'],
      'throughLater': ['callback'],
      'throughMaybe': ['callback', 'empty'],
      'throughStream': ['callback'],
      'throughRecord': ['callback'],
      'reader': [],
      'visitor': [],
    },
  ),
  'RouteX': FlaxCodegenExtensionSelection(getters: ['isInstalled']),
  'PageX': FlaxCodegenExtensionSelection(getters: ['label']),
};
