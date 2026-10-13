import 'package:flax_codegen/flax_codegen.dart';

const dartTypesSelection = {
  'CodegenTypeBound': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    getters: ['typeName'],
  ),
  'CodegenTypeBag': FlaxCodegenClassSelection(
    {
      '': ['items', 'capacity'],
      'named': ['items', 'capacity'],
      'labeled': ['items', 'capacity'],
      'empty': [],
    },
    kind: 'object',
    staticGetters: ['count'],
    staticSetters: ['count'],
    methods: {'source': []},
    getters: ['items', 'capacity', 'typeName'],
  ),
  'CodegenTypeWidget': FlaxCodegenClassSelection(
    {
      '': ['value', 'key'],
    },
    proxy: 'extends',
    getters: ['value', 'typeName'],
    instanceMethods: {
      'label': ['input'],
      'nativeLabel': ['input'],
    },
  ),
  'CodegenTypeProcessor': FlaxCodegenClassSelection(
    {
      '': ['seed', 'label'],
    },
    kind: 'object',
    proxy: 'extends',
    methods: {'source': []},
    getters: ['seed', 'typeName'],
    instanceMethods: {
      'transform': ['value'],
      'nativeCall': ['value'],
      'describe': [],
    },
  ),
};
