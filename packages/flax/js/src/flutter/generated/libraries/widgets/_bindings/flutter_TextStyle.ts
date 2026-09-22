// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_FontWeight';
import '@flax/flutter/services/_bindings/flutter_FontWeight';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_FontStyle';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface TextStyle extends Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TextStyle: unique symbol;
readonly inherit: boolean;
readonly color: upstream0.Color | null;
readonly backgroundColor: upstream0.Color | null;
readonly fontSize: number | null;
readonly fontWeight: upstream1.FontWeight | null;
readonly fontStyle: upstream2.FontStyle | null;
readonly letterSpacing: number | null;
readonly wordSpacing: number | null;
readonly height: number | null;
copyWith(options?: {backgroundColor?: upstream0.Color | null | undefined; color?: upstream0.Color | null | undefined; fontSize?: number | null | undefined; fontStyle?: upstream2.FontStyle | null | undefined; fontWeight?: upstream1.FontWeight | null | undefined; height?: number | null | undefined; inherit?: boolean | null | undefined; letterSpacing?: number | null | undefined; wordSpacing?: number | null | undefined}): TextStyle;
}
defineObject("flax.core/flutter#type:TextStyle", ["inherit","color","backgroundColor","fontSize","fontWeight","fontStyle","letterSpacing","wordSpacing","height"], [], {copyWith(this: object, options: { backgroundColor?: upstream0.Color | null | undefined; color?: upstream0.Color | null | undefined; fontSize?: number | null | undefined; fontStyle?: upstream2.FontStyle | null | undefined; fontWeight?: upstream1.FontWeight | null | undefined; height?: number | null | undefined; inherit?: boolean | null | undefined; letterSpacing?: number | null | undefined; wordSpacing?: number | null | undefined } = {}): TextStyle {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["backgroundColor","color","fontSize","fontStyle","fontWeight","height","inherit","letterSpacing","wordSpacing"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:TextStyle", "copyWith", [options.backgroundColor, options.color, options.fontSize, options.fontStyle, options.fontWeight, options.height, options.inherit, options.letterSpacing, options.wordSpacing]);
return _flaxResult as TextStyle;
},
}, []);
export function TextStyle(options: { inherit?: boolean | undefined; color?: upstream0.Color | null | undefined; backgroundColor?: upstream0.Color | null | undefined; fontSize?: number | null | undefined; fontWeight?: upstream1.FontWeight | null | undefined; fontStyle?: upstream2.FontStyle | null | undefined; letterSpacing?: number | null | undefined; wordSpacing?: number | null | undefined; height?: number | null | undefined } = {}): TextStyle {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextStyle", "", [{"name":"inherit","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"fontSize","required":false,"positional":false},{"name":"fontWeight","required":false,"positional":false},{"name":"fontStyle","required":false,"positional":false},{"name":"letterSpacing","required":false,"positional":false},{"name":"wordSpacing","required":false,"positional":false},{"name":"height","required":false,"positional":false}], [], options) as TextStyle;
}
