import * as interop from '../../../.dart_tool/flax/ui/interop_bindings.js';
import { registerPage, StreamController, Text } from '@flax/core/flutter';
Object.assign(globalThis, { interop, StreamController });
registerPage('interop', () => Text('Plugin interop'));
