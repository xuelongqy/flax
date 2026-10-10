import 'package:flax_codegen/flax_codegen.dart';

const enumSelection = {
  'EnhancedStatus': FlaxCodegenClassSelection(
    {
      'fromCode': ['code'],
    },
    kind: 'enum',
    getters: [
      'label',
      'code',
      'liveLabel',
      'payload',
      'adjust',
      'next',
      'states',
      'later',
      'events',
      'failure',
      'recorded',
    ],
    setters: ['recorded'],
    instanceMethods: {
      'format': ['prefix', 'separator'],
      'preserveReceiverName': ['receiver'],
      'through': ['callback'],
      'describe': [],
      'details': [],
    },
    operators: {
      '+': ['steps'],
    },
    methods: {
      'lookup': ['code'],
    },
    staticGetters: ['reads', 'history'],
    staticSetters: ['reads'],
  ),
  'MetadataNames': FlaxCodegenClassSelection(
    {},
    kind: 'enum',
    getters: ['kind', 'type', 'name'],
  ),
  'GenericKind': FlaxCodegenClassSelection(
    {},
    kind: 'enum',
    getters: ['sample', 'repeat'],
    instanceMethods: {
      'echo': ['value'],
      'transform': ['callback'],
      'group': ['value'],
    },
  ),
  'EnumBuildFlag': FlaxCodegenClassSelection(
    {},
    kind: 'enum',
    getters: ['enabled'],
  ),
  'EnumFactory': FlaxCodegenClassSelection(
    {
      'from': ['value'],
    },
    kind: 'enum',
    getters: ['sample'],
  ),
  'EnumPayload': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    getters: ['value'],
  ),
  'EnumReadable': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    instanceMethods: {'describe': []},
  ),
};

const enumFunctions = {
  'enumIdentity': FlaxCodegenFunctionSelection(['value']),
  'enumReadable': FlaxCodegenFunctionSelection(['value']),
  'enumNumber': FlaxCodegenFunctionSelection(['value']),
  'enumObject': FlaxCodegenFunctionSelection(['value']),
};
