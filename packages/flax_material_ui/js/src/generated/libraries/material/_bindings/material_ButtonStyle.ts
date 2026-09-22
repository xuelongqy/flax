// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream4 from '@flax/flutter/material/_bindings/material_VisualDensity';
import '@flax/flutter/material/_bindings/material_VisualDensity';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/material.__module";
export interface ButtonStyle extends Readonly<{ "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ButtonStyle: unique symbol;
readonly backgroundColor: upstream0.WidgetStateProperty<upstream1.Color | null> | null;
readonly foregroundColor: upstream0.WidgetStateProperty<upstream1.Color | null> | null;
readonly overlayColor: upstream0.WidgetStateProperty<upstream1.Color | null> | null;
readonly elevation: upstream0.WidgetStateProperty<number | null> | null;
readonly shape: upstream0.WidgetStateProperty<upstream2.OutlinedBorder | null> | null;
readonly mouseCursor: upstream0.WidgetStateProperty<upstream3.MouseCursor | null> | null;
readonly visualDensity: upstream4.VisualDensity | null;
copyWith(options?: {backgroundColor?: upstream0.WidgetStateProperty<upstream1.Color | null> | null | undefined; elevation?: upstream0.WidgetStateProperty<number | null> | null | undefined; foregroundColor?: upstream0.WidgetStateProperty<upstream1.Color | null> | null | undefined; mouseCursor?: upstream0.WidgetStateProperty<upstream3.MouseCursor | null> | null | undefined; overlayColor?: upstream0.WidgetStateProperty<upstream1.Color | null> | null | undefined; shape?: upstream0.WidgetStateProperty<upstream2.OutlinedBorder | null> | null | undefined; visualDensity?: upstream4.VisualDensity | null | undefined}): ButtonStyle;
}
defineObject("flax.material/material#type:ButtonStyle", ["backgroundColor","foregroundColor","overlayColor","elevation","shape","mouseCursor","visualDensity"], [], {copyWith(this: object, options: { backgroundColor?: upstream0.WidgetStateProperty<upstream1.Color | null> | null | undefined; elevation?: upstream0.WidgetStateProperty<number | null> | null | undefined; foregroundColor?: upstream0.WidgetStateProperty<upstream1.Color | null> | null | undefined; mouseCursor?: upstream0.WidgetStateProperty<upstream3.MouseCursor | null> | null | undefined; overlayColor?: upstream0.WidgetStateProperty<upstream1.Color | null> | null | undefined; shape?: upstream0.WidgetStateProperty<upstream2.OutlinedBorder | null> | null | undefined; visualDensity?: upstream4.VisualDensity | null | undefined } = {}): ButtonStyle {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["backgroundColor","elevation","foregroundColor","mouseCursor","overlayColor","shape","visualDensity"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.material/material#type:ButtonStyle", "copyWith", [options.backgroundColor, options.elevation, options.foregroundColor, options.mouseCursor, options.overlayColor, options.shape, options.visualDensity]);
return _flaxResult as ButtonStyle;
},
}, []);
export function ButtonStyle(options: { backgroundColor?: upstream0.WidgetStateProperty<upstream1.Color | null> | null | undefined; foregroundColor?: upstream0.WidgetStateProperty<upstream1.Color | null> | null | undefined; overlayColor?: upstream0.WidgetStateProperty<upstream1.Color | null> | null | undefined; elevation?: upstream0.WidgetStateProperty<number | null> | null | undefined; shape?: upstream0.WidgetStateProperty<upstream2.OutlinedBorder | null> | null | undefined; mouseCursor?: upstream0.WidgetStateProperty<upstream3.MouseCursor | null> | null | undefined; visualDensity?: upstream4.VisualDensity | null | undefined } = {}): ButtonStyle {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ButtonStyle", "", [{"name":"backgroundColor","required":false,"positional":false},{"name":"foregroundColor","required":false,"positional":false},{"name":"overlayColor","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"shape","required":false,"positional":false},{"name":"mouseCursor","required":false,"positional":false},{"name":"visualDensity","required":false,"positional":false}], [], options) as ButtonStyle;
}
