// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface StadiumBorder extends upstream0.OutlinedBorder, upstream1.ShapeBorder, Readonly<{ "__flaxBound:package:flutter/src/painting/stadium_border.dart::StadiumBorder": readonly [] }> { readonly __StadiumBorder: unique symbol;
readonly side: upstream2.BorderSide;
copyWith(options?: {side?: upstream2.BorderSide | null | undefined}): StadiumBorder;
}
defineObject("flax.core/flutter#type:StadiumBorder", ["side"], [], {copyWith(this: object, options: { side?: upstream2.BorderSide | null | undefined } = {}): StadiumBorder {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["side"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StadiumBorder", "copyWith", [options.side]);
return _flaxResult as StadiumBorder;
},
}, []);
export function StadiumBorder(options: { side?: upstream2.BorderSide | undefined } = {}): StadiumBorder {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StadiumBorder", "", [{"name":"side","required":false,"positional":false}], [], options) as StadiumBorder;
}
