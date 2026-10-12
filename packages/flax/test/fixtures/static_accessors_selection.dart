import 'package:flax_codegen/flax_codegen.dart';

const _reads = ['count'];
const _writes = ['count'];
const _methods = {
  'twice': ['value'],
};
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
    methods: _methods,
  ),
  'StaticState': FlaxCodegenClassSelection(
    {},
    kind: 'state',
    staticGetters: _reads,
    staticSetters: _writes,
    methods: _methods,
  ),
  'StaticRenamedWidget': FlaxCodegenClassSelection(
    {'': []},
    jsName: 'MakeStaticWidget',
    staticGetters: _reads,
  ),
  'StaticOnlyWidget': FlaxCodegenClassSelection(
    {},
    methods: {
      ..._methods,
      'create': [],
      'echo': ['value'],
    },
  ),
  'StaticRoute': FlaxCodegenClassSelection(
    {},
    kind: 'route',
    staticGetters: _reads,
    staticSetters: _writes,
    methods: _methods,
  ),
  'StaticPage': FlaxCodegenClassSelection(
    {},
    kind: 'page',
    staticGetters: _reads,
    staticSetters: _writes,
    methods: _methods,
  ),
  'StaticStream': FlaxCodegenClassSelection(
    {},
    kind: 'stream',
    staticGetters: _reads,
    staticSetters: _writes,
    methods: _methods,
  ),
  'StaticMembers': FlaxCodegenClassSelection(
    {},
    staticGetters: _reads,
    staticSetters: _writes,
    methods: _methods,
  ),
  'StaticInterface': FlaxCodegenClassSelection(
    {},
    kind: 'widgetInterface',
    getters: ['label'],
    staticGetters: _reads,
    staticSetters: _writes,
    methods: {
      'decorate': ['value'],
      ..._methods,
    },
  ),
  'StaticProxy': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    proxy: 'extends',
    staticGetters: _reads,
    staticSetters: _writes,
    methods: _methods,
  ),
};
