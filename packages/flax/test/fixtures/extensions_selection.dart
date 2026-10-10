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
    getters: ['widget', 'preferred', 'numbers', 'words'],
    instanceMethods: {'state': []},
  ),
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
  'StateX': FlaxCodegenExtensionSelection(getters: ['isMounted', 'same']),
  'RouteX': FlaxCodegenExtensionSelection(getters: ['isInstalled']),
  'PageX': FlaxCodegenExtensionSelection(getters: ['label']),
};
