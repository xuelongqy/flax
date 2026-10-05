import 'package:flax_codegen/flax_codegen.dart';

const _reads = ['count'];
const _writes = ['count'];
const staticAccessorsSelection = {
  'StaticToken': FlaxCodegenClassSelection(
    {
      '': ['value'],
    },
    kind: 'object',
    getters: ['value'],
  ),
  'StaticCounter': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    staticGetters: [
      'count',
      'optional',
      'delayed',
      'tracked',
      'reads',
      'writes',
      'tokens',
      'record',
      'transform',
      'later',
      'failure',
    ],
    staticSetters: [
      'count',
      'optional',
      'delayed',
      'tracked',
      'writeOnly',
      'tokens',
      'record',
      'transform',
      'later',
    ],
    methods: {
      'callTransform': ['value'],
    },
  ),
  'StaticWidget': FlaxCodegenClassSelection(
    {'': []},
    staticGetters: _reads,
    staticSetters: _writes,
  ),
  'StaticState': FlaxCodegenClassSelection(
    {},
    kind: 'state',
    staticGetters: _reads,
    staticSetters: _writes,
  ),
  'StaticRenamedWidget': FlaxCodegenClassSelection(
    {'': []},
    jsName: 'MakeStaticWidget',
    staticGetters: _reads,
  ),
  'StaticRoute': FlaxCodegenClassSelection(
    {},
    kind: 'route',
    staticGetters: _reads,
    staticSetters: _writes,
  ),
  'StaticPage': FlaxCodegenClassSelection(
    {},
    kind: 'page',
    staticGetters: _reads,
    staticSetters: _writes,
  ),
  'StaticStream': FlaxCodegenClassSelection(
    {},
    kind: 'stream',
    staticGetters: _reads,
    staticSetters: _writes,
  ),
  'StaticMembers': FlaxCodegenClassSelection(
    {},
    staticGetters: _reads,
    staticSetters: _writes,
  ),
  'StaticInterface': FlaxCodegenClassSelection(
    {},
    kind: 'widgetInterface',
    getters: ['label'],
    staticGetters: _reads,
    staticSetters: _writes,
  ),
  'StaticProxy': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    proxy: 'extends',
    staticGetters: _reads,
    staticSetters: _writes,
  ),
};
