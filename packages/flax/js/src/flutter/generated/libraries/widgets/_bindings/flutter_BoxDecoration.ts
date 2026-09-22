// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Decoration';
import '@flax/flutter/widgets/_bindings/flutter_Decoration';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BoxShape';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface BoxDecoration extends upstream0.Decoration, Readonly<{ "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __BoxDecoration: unique symbol;
readonly color: upstream1.Color | null;
readonly border: upstream2.BoxBorder | null;
readonly borderRadius: upstream3.BorderRadiusGeometry | null;
readonly shape: upstream4.BoxShape;
copyWith(options?: {border?: upstream2.BoxBorder | null | undefined; borderRadius?: upstream3.BorderRadiusGeometry | null | undefined; color?: upstream1.Color | null | undefined; shape?: upstream4.BoxShape | null | undefined}): BoxDecoration;
}
defineObject("flax.core/flutter#type:BoxDecoration", ["color","border","borderRadius","shape"], [], {copyWith(this: object, options: { border?: upstream2.BoxBorder | null | undefined; borderRadius?: upstream3.BorderRadiusGeometry | null | undefined; color?: upstream1.Color | null | undefined; shape?: upstream4.BoxShape | null | undefined } = {}): BoxDecoration {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["border","borderRadius","color","shape"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:BoxDecoration", "copyWith", [options.border, options.borderRadius, options.color, options.shape]);
return _flaxResult as BoxDecoration;
},
}, []);
export function BoxDecoration(options: { color?: upstream1.Color | null | undefined; border?: upstream2.BoxBorder | null | undefined; borderRadius?: upstream3.BorderRadiusGeometry | null | undefined; shape?: upstream4.BoxShape | undefined } = {}): BoxDecoration {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxDecoration", "", [{"name":"color","required":false,"positional":false},{"name":"border","required":false,"positional":false},{"name":"borderRadius","required":false,"positional":false},{"name":"shape","required":false,"positional":false}], [], options) as BoxDecoration;
}
