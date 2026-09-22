// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/material.__module";
export interface TextTheme extends Readonly<{ "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TextTheme: unique symbol;
readonly titleLarge: upstream0.TextStyle | null;
readonly titleMedium: upstream0.TextStyle | null;
readonly bodyLarge: upstream0.TextStyle | null;
readonly bodyMedium: upstream0.TextStyle | null;
readonly labelLarge: upstream0.TextStyle | null;
copyWith(options?: {bodyLarge?: upstream0.TextStyle | null | undefined; bodyMedium?: upstream0.TextStyle | null | undefined; labelLarge?: upstream0.TextStyle | null | undefined; titleLarge?: upstream0.TextStyle | null | undefined; titleMedium?: upstream0.TextStyle | null | undefined}): TextTheme;
}
defineObject("flax.material/material#type:TextTheme", ["titleLarge","titleMedium","bodyLarge","bodyMedium","labelLarge"], [], {copyWith(this: object, options: { bodyLarge?: upstream0.TextStyle | null | undefined; bodyMedium?: upstream0.TextStyle | null | undefined; labelLarge?: upstream0.TextStyle | null | undefined; titleLarge?: upstream0.TextStyle | null | undefined; titleMedium?: upstream0.TextStyle | null | undefined } = {}): TextTheme {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["bodyLarge","bodyMedium","labelLarge","titleLarge","titleMedium"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.material/material#type:TextTheme", "copyWith", [options.bodyLarge, options.bodyMedium, options.labelLarge, options.titleLarge, options.titleMedium]);
return _flaxResult as TextTheme;
},
}, []);
export function TextTheme(options: { titleLarge?: upstream0.TextStyle | null | undefined; titleMedium?: upstream0.TextStyle | null | undefined; bodyLarge?: upstream0.TextStyle | null | undefined; bodyMedium?: upstream0.TextStyle | null | undefined; labelLarge?: upstream0.TextStyle | null | undefined } = {}): TextTheme {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:TextTheme", "", [{"name":"titleLarge","required":false,"positional":false},{"name":"titleMedium","required":false,"positional":false},{"name":"bodyLarge","required":false,"positional":false},{"name":"bodyMedium","required":false,"positional":false},{"name":"labelLarge","required":false,"positional":false}], [], options) as TextTheme;
}
