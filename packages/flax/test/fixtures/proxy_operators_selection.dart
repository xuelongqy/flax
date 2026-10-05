import 'package:flax_codegen/flax_codegen.dart';

const proxyOperatorsSelection = {
  'NumberBox': FlaxCodegenClassSelection(
    {
      '': ['value'],
    },
    kind: 'object',
    proxy: 'extends',
    getters: ['value', 'hashCode', 'lastWrite'],
    instanceMethods: {'toString': []},
    operators: {
      '+': ['other'],
      '-': ['other'],
      'unary-': [],
      '*': ['other'],
      '/': ['other'],
      '~/': ['other'],
      '%': ['other'],
      '<': ['other'],
      '>': ['other'],
      '<=': ['other'],
      '>=': ['other'],
      '&': ['other'],
      '|': ['other'],
      '^': ['other'],
      '<<': ['other'],
      '>>': ['other'],
      '>>>': ['other'],
      '~': [],
      '[]': ['index'],
      '[]=': ['index', 'input'],
      '==': ['other'],
    },
  ),
  'AbstractAdder': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    proxy: 'implements',
    operators: {
      '+': ['other'],
    },
  ),
  'DataOperator': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    proxy: 'extends',
    operators: {
      '+': ['other'],
    },
    data: FlaxCodegenDataSelection(
      methods: {
        '+': ['other'],
      },
      results: ['+'],
    ),
  ),
  'CallbackOperator': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    proxy: 'extends',
    operators: {
      '+': ['callback'],
    },
    callbackSignatures: {
      '+.callback': ['int'],
    },
  ),
  'MixedOperator': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    proxy: 'extends',
    operators: {
      '+': ['other'],
    },
  ),
};
