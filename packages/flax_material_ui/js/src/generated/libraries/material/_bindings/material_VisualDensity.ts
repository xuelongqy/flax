// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/material.__module";
export interface VisualDensity extends Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __VisualDensity: unique symbol;
readonly horizontal: number;
readonly vertical: number;
copyWith(options?: {horizontal?: number | null | undefined; vertical?: number | null | undefined}): VisualDensity;
}
defineObject("flax.material/material#type:VisualDensity", ["horizontal","vertical"], [], {copyWith(this: object, options: { horizontal?: number | null | undefined; vertical?: number | null | undefined } = {}): VisualDensity {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["horizontal","vertical"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.material/material#type:VisualDensity", "copyWith", [options.horizontal, options.vertical]);
return _flaxResult as VisualDensity;
},
}, []);
export function VisualDensity(options: { horizontal?: number | undefined; vertical?: number | undefined } = {}): VisualDensity {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:VisualDensity", "", [{"name":"horizontal","required":false,"positional":false},{"name":"vertical","required":false,"positional":false}], [], options) as VisualDensity;
}
export namespace VisualDensity { export declare const standard: VisualDensity; }
Object.defineProperty(VisualDensity, "standard", { get: () => invokeObjectStatic("flax.material/material#type:VisualDensity", "standard") });
export namespace VisualDensity { export declare const comfortable: VisualDensity; }
Object.defineProperty(VisualDensity, "comfortable", { get: () => invokeObjectStatic("flax.material/material#type:VisualDensity", "comfortable") });
export namespace VisualDensity { export declare const compact: VisualDensity; }
Object.defineProperty(VisualDensity, "compact", { get: () => invokeObjectStatic("flax.material/material#type:VisualDensity", "compact") });
