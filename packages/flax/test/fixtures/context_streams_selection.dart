import 'package:flax_codegen/flax_codegen.dart';

const contextStreamsSelection = {
  'ContextStreams': FlaxCodegenClassSelection(
    {'': []},
    kind: 'object',
    instanceMethods: {
      'stream': ['source'],
      'strict': ['source'],
      'lists': ['source'],
      'records': ['source'],
      'pairs': ['source'],
      'callbackRecords': ['source'],
      'future': ['source'],
      'futureOr': ['source'],
      'futures': ['source'],
      'futureOrEvents': ['source'],
      'nativeStream': ['context'],
      'nativeCallbackRecords': ['context'],
      'controlled': [],
      'returned': ['context'],
      'keep': ['source'],
      'rememberWeak': ['context'],
      'collect': ['source'],
    },
  ),
};
