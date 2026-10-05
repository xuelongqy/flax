// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"eccentricity","required":false,"positional":false},{"name":"side","required":false,"positional":false}] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface CircleBorder extends upstream0.OutlinedBorder, upstream1.ShapeBorder, Readonly<{ "__flaxBound:package:flutter/src/painting/circle_border.dart::CircleBorder": readonly [] }> { readonly __CircleBorder: unique symbol;
readonly side: upstream2.BorderSide;
readonly eccentricity: number;
copyWith(options?: {eccentricity?: number | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | null | undefined}): CircleBorder;
}
defineObject("flax.core/flutter#type:CircleBorder", ["side","eccentricity"], [], _flaxBindingMethods("flax.core/flutter#type:CircleBorder", "object", {"copyWith":_flaxMemberParameters0}), []);
export function CircleBorder(options: { side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> | undefined; eccentricity?: number | undefined } = {}): CircleBorder {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:CircleBorder", "", [{"name":"side","required":false,"positional":false},{"name":"eccentricity","required":false,"positional":false}], [], options) as CircleBorder;
}
