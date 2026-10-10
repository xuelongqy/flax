import 'package:flax_codegen/flax_codegen.dart';

const instanceTypesSelection = {
  'CodegenResult': FlaxCodegenClassSelection(
    {
      'success': ['value'],
      'failure': ['message'],
      'hidden': [],
      'extra': ['value'],
    },
    kind: 'object',
    getters: ['status'],
    instanceMethods: {'describe': []},
  ),
  'CodegenReadable': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    instanceMethods: {'read': []},
  ),
  'CodegenTagged': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    getters: ['tag'],
  ),
  'CodegenSuccess': FlaxCodegenClassSelection(
    {
      '': ['value'],
    },
    kind: 'object',
    getters: ['value'],
  ),
  'CodegenFailure': FlaxCodegenClassSelection(
    {
      '': ['message'],
    },
    kind: 'object',
    getters: ['message'],
  ),
  'CodegenResultConsumer': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    instanceMethods: {
      'echo': ['value'],
      'read': ['value'],
      'tag': ['value'],
    },
  ),
};
