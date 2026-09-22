// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/material/_bindings/material_Brightness';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/material.__module";
export interface ColorScheme extends Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ColorScheme: unique symbol;
readonly brightness: upstream1.Brightness;
readonly primary: upstream0.Color;
readonly onPrimary: upstream0.Color;
readonly surface: upstream0.Color;
readonly onSurface: upstream0.Color;
readonly error: upstream0.Color;
readonly onError: upstream0.Color;
copyWith(options?: {brightness?: upstream1.Brightness | null | undefined; error?: upstream0.Color | null | undefined; onError?: upstream0.Color | null | undefined; onPrimary?: upstream0.Color | null | undefined; onSurface?: upstream0.Color | null | undefined; primary?: upstream0.Color | null | undefined; surface?: upstream0.Color | null | undefined}): ColorScheme;
}
defineObject("flax.material/material#type:ColorScheme", ["brightness","primary","onPrimary","surface","onSurface","error","onError"], [], {copyWith(this: object, options: { brightness?: upstream1.Brightness | null | undefined; error?: upstream0.Color | null | undefined; onError?: upstream0.Color | null | undefined; onPrimary?: upstream0.Color | null | undefined; onSurface?: upstream0.Color | null | undefined; primary?: upstream0.Color | null | undefined; surface?: upstream0.Color | null | undefined } = {}): ColorScheme {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["brightness","error","onError","onPrimary","onSurface","primary","surface"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.material/material#type:ColorScheme", "copyWith", [options.brightness, options.error, options.onError, options.onPrimary, options.onSurface, options.primary, options.surface]);
return _flaxResult as ColorScheme;
},
}, []);
export namespace ColorScheme {
export function fromSeed(options: { seedColor: upstream0.Color; brightness?: upstream1.Brightness | undefined }): ColorScheme {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ColorScheme", "fromSeed", [{"name":"seedColor","required":true,"positional":false},{"name":"brightness","required":false,"positional":false}], [], options) as ColorScheme;
}
}
