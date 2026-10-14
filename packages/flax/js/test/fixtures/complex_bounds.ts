import * as complex from '../../../.dart_tool/flax/ui/complex_bounds_bindings.js';
import { asDart, dartType, dartTypes, getDartType } from '@flax/core/bindings';
import { SizedBox, registerPage } from '@flax/flutter/widgets';

registerPage('complexBounds', () => SizedBox());
Object.assign(globalThis, { complex, asDart, dartType, dartTypes, getDartType });
