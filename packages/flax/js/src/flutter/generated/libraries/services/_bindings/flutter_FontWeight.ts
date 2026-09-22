// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface FontWeight extends Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> { readonly __FontWeight: unique symbol;
readonly value: number;
}
defineObject("flax.core/flutter#type:FontWeight", ["value"], [], {}, []);
export function FontWeight(value: number): FontWeight {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FontWeight", "", [{"name":"value","required":true,"positional":true}], [value], {}) as FontWeight;
}
export namespace FontWeight { export declare const w100: FontWeight; }
Object.defineProperty(FontWeight, "w100", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w100") });
export namespace FontWeight { export declare const w200: FontWeight; }
Object.defineProperty(FontWeight, "w200", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w200") });
export namespace FontWeight { export declare const w300: FontWeight; }
Object.defineProperty(FontWeight, "w300", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w300") });
export namespace FontWeight { export declare const w400: FontWeight; }
Object.defineProperty(FontWeight, "w400", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w400") });
export namespace FontWeight { export declare const w500: FontWeight; }
Object.defineProperty(FontWeight, "w500", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w500") });
export namespace FontWeight { export declare const w600: FontWeight; }
Object.defineProperty(FontWeight, "w600", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w600") });
export namespace FontWeight { export declare const w700: FontWeight; }
Object.defineProperty(FontWeight, "w700", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w700") });
export namespace FontWeight { export declare const w800: FontWeight; }
Object.defineProperty(FontWeight, "w800", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w800") });
export namespace FontWeight { export declare const w900: FontWeight; }
Object.defineProperty(FontWeight, "w900", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w900") });
export namespace FontWeight { export declare const normal: FontWeight; }
Object.defineProperty(FontWeight, "normal", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "normal") });
export namespace FontWeight { export declare const bold: FontWeight; }
Object.defineProperty(FontWeight, "bold", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "bold") });
