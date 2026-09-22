// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface Color extends Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> { readonly __Color: unique symbol;
readonly a: number;
readonly r: number;
readonly g: number;
readonly b: number;
toARGB32(): number;
}
defineObject("flax.core/flutter#type:Color", ["a","r","g","b"], [], {toARGB32(this: object): number {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:Color", "toARGB32", []);
return _flaxResult as number;
},
}, []);
export function Color(value: number): Color {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Color", "", [{"name":"value","required":true,"positional":true}], [value], {}) as Color;
}
export namespace Color {
export function fromARGB(a: number, r: number, g: number, b: number): Color {
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Color", "fromARGB", [{"name":"a","required":true,"positional":true},{"name":"r","required":true,"positional":true},{"name":"g","required":true,"positional":true},{"name":"b","required":true,"positional":true}], [a, r, g, b], {}) as Color;
}
}
