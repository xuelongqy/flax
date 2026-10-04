import 'package:flax_codegen/flax_codegen.dart';

const omissionParameters = [
  'token',
  'numbers',
  'mapping',
  'callback',
  'labels',
  'extra',
];
const defaultOmissionSelection = {
  'OmissionCalls': FlaxCodegenClassSelection(
    {'': omissionParameters},
    kind: 'object',
    getters: ['total', 'returned'],
    instanceMethods: {'compute': omissionParameters},
    methods: {'measure': omissionParameters},
  ),
  'OmissionChild': FlaxCodegenClassSelection(
    {'': omissionParameters},
    kind: 'object',
    getters: ['total'],
  ),
  'OmissionGeneric': FlaxCodegenClassSelection(
    {
      '': ['value', ...omissionParameters],
    },
    kind: 'object',
    typeArguments: ['int'],
    getters: ['value', 'total'],
  ),
  'OmissionFactory': FlaxCodegenClassSelection(
    {
      '': ['token'],
    },
    kind: 'object',
    getters: ['defaulted'],
  ),
  'OmissionPositional': FlaxCodegenClassSelection(
    {
      '': ['first', 'second', 'count'],
    },
    kind: 'object',
    getters: ['total'],
  ),
  'OmissionProxy': FlaxCodegenClassSelection(
    {'': omissionParameters},
    kind: 'object',
    proxy: 'extends',
    getters: ['total'],
    instanceMethods: {'work': omissionParameters, 'trigger': []},
  ),
  'OmissionWidget': FlaxCodegenClassSelection({
    '': ['labels', 'padding', 'numbers', 'mapping', 'token', 'extra'],
  }),
};
