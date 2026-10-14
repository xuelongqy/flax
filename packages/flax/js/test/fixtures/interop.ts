import { dartType, dartTypes, getDartType } from '@flax/core/bindings';
import * as interop from '../../../.dart_tool/flax/ui/interop_bindings.js';
import { registerPage, Text } from '@flax/flutter/widgets';
import { Stream, StreamController } from '@flax/dart/async';
Object.assign(globalThis, {
  interop,
  Stream,
  StreamController,
  dartType,
  dartTypes,
  getDartType,
});
registerPage('interop', () => Text('Plugin interop'));
