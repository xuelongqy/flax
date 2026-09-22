// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface RoundedRectangleBorder extends upstream0.OutlinedBorder, upstream1.ShapeBorder, Readonly<{ "__flaxBound:package:flutter/src/painting/rounded_rectangle_border.dart::RoundedRectangleBorder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/rounded_rectangle_border.dart::_RRectLikeBorder": readonly [] }> { readonly __RoundedRectangleBorder: unique symbol;
readonly side: upstream2.BorderSide;
readonly borderRadius: upstream3.BorderRadiusGeometry;
copyWith(options?: {borderRadius?: upstream3.BorderRadiusGeometry | null | undefined; side?: upstream2.BorderSide | null | undefined}): RoundedRectangleBorder;
}
defineObject("flax.core/flutter#type:RoundedRectangleBorder", ["side","borderRadius"], [], {copyWith(this: object, options: { borderRadius?: upstream3.BorderRadiusGeometry | null | undefined; side?: upstream2.BorderSide | null | undefined } = {}): RoundedRectangleBorder {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["borderRadius","side"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:RoundedRectangleBorder", "copyWith", [options.borderRadius, options.side]);
return _flaxResult as RoundedRectangleBorder;
},
}, []);
export function RoundedRectangleBorder(options: { side?: upstream2.BorderSide | undefined; borderRadius?: upstream3.BorderRadiusGeometry | undefined } = {}): RoundedRectangleBorder {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:RoundedRectangleBorder", "", [{"name":"side","required":false,"positional":false},{"name":"borderRadius","required":false,"positional":false}], [], options) as RoundedRectangleBorder;
}
