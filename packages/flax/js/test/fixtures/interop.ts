import * as interop from '../../../.dart_tool/flax/ui/interop_bindings.js';
import { registerPage, Text } from '@flax/flutter/widgets';
import { StreamController } from '@flax/dart/async';
Object.assign(globalThis, { interop, StreamController });
registerPage('interop', () => Text('Plugin interop'));
