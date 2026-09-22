// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface TextRange extends Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }> { readonly __TextRange: unique symbol;
readonly start: number;
readonly end: number;
readonly isValid: boolean;
readonly isCollapsed: boolean;
readonly isNormalized: boolean;
}
defineObject("flax.core/flutter#type:TextRange", ["start","end","isValid","isCollapsed","isNormalized"], [], {}, []);
export function TextRange(options: { start: number; end: number }): TextRange {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextRange", "", [{"name":"start","required":true,"positional":false},{"name":"end","required":true,"positional":false}], [], options) as TextRange;
}
export namespace TextRange {
export function collapsed(offset: number): TextRange {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextRange", "collapsed", [{"name":"offset","required":true,"positional":true}], [offset], {}) as TextRange;
}
}
export namespace TextRange { export declare const empty: TextRange; }
Object.defineProperty(TextRange, "empty", { get: () => invokeObjectStatic("flax.core/flutter#type:TextRange", "empty") });
