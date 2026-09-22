// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/material.__module";
export interface InputDecoration extends Readonly<{ "__flaxBound:package:material_ui/src/input_decorator.dart::InputDecoration": readonly [] }> { readonly __InputDecoration: unique symbol;
readonly labelText: string | null;
readonly hintText: string | null;
readonly helperText: string | null;
readonly errorText: string | null;
readonly labelStyle: upstream0.TextStyle | null;
readonly hintStyle: upstream0.TextStyle | null;
readonly helperStyle: upstream0.TextStyle | null;
readonly errorStyle: upstream0.TextStyle | null;
readonly isDense: boolean | null;
readonly contentPadding: upstream1.EdgeInsetsGeometry | null;
readonly filled: boolean | null;
readonly fillColor: upstream2.Color | null;
copyWith(options?: {contentPadding?: upstream1.EdgeInsetsGeometry | null | undefined; errorStyle?: upstream0.TextStyle | null | undefined; errorText?: string | null | undefined; fillColor?: upstream2.Color | null | undefined; filled?: boolean | null | undefined; helperStyle?: upstream0.TextStyle | null | undefined; helperText?: string | null | undefined; hintStyle?: upstream0.TextStyle | null | undefined; hintText?: string | null | undefined; isDense?: boolean | null | undefined; labelStyle?: upstream0.TextStyle | null | undefined; labelText?: string | null | undefined}): InputDecoration;
}
defineObject("flax.material/material#type:InputDecoration", ["labelText","hintText","helperText","errorText","labelStyle","hintStyle","helperStyle","errorStyle","isDense","contentPadding","filled","fillColor"], [], {copyWith(this: object, options: { contentPadding?: upstream1.EdgeInsetsGeometry | null | undefined; errorStyle?: upstream0.TextStyle | null | undefined; errorText?: string | null | undefined; fillColor?: upstream2.Color | null | undefined; filled?: boolean | null | undefined; helperStyle?: upstream0.TextStyle | null | undefined; helperText?: string | null | undefined; hintStyle?: upstream0.TextStyle | null | undefined; hintText?: string | null | undefined; isDense?: boolean | null | undefined; labelStyle?: upstream0.TextStyle | null | undefined; labelText?: string | null | undefined } = {}): InputDecoration {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["contentPadding","errorStyle","errorText","fillColor","filled","helperStyle","helperText","hintStyle","hintText","isDense","labelStyle","labelText"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.material/material#type:InputDecoration", "copyWith", [options.contentPadding, options.errorStyle, options.errorText, options.fillColor, options.filled, options.helperStyle, options.helperText, options.hintStyle, options.hintText, options.isDense, options.labelStyle, options.labelText]);
return _flaxResult as InputDecoration;
},
}, []);
export function InputDecoration(options: { labelText?: string | null | undefined; labelStyle?: upstream0.TextStyle | null | undefined; helperText?: string | null | undefined; helperStyle?: upstream0.TextStyle | null | undefined; hintText?: string | null | undefined; hintStyle?: upstream0.TextStyle | null | undefined; errorText?: string | null | undefined; errorStyle?: upstream0.TextStyle | null | undefined; isDense?: boolean | null | undefined; contentPadding?: upstream1.EdgeInsetsGeometry | null | undefined; filled?: boolean | null | undefined; fillColor?: upstream2.Color | null | undefined } = {}): InputDecoration {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:InputDecoration", "", [{"name":"labelText","required":false,"positional":false},{"name":"labelStyle","required":false,"positional":false},{"name":"helperText","required":false,"positional":false},{"name":"helperStyle","required":false,"positional":false},{"name":"hintText","required":false,"positional":false},{"name":"hintStyle","required":false,"positional":false},{"name":"errorText","required":false,"positional":false},{"name":"errorStyle","required":false,"positional":false},{"name":"isDense","required":false,"positional":false},{"name":"contentPadding","required":false,"positional":false},{"name":"filled","required":false,"positional":false},{"name":"fillColor","required":false,"positional":false}], [], options) as InputDecoration;
}
