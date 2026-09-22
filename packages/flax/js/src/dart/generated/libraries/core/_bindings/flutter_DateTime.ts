// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface DateTime extends Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Comparable": readonly [DateTime] }> { readonly __DateTime: unique symbol;
readonly year: number;
readonly isUtc: boolean;
toIso8601String(): string;
}
defineObject("flax.core/flutter#type:DateTime", ["year","isUtc"], [], {toIso8601String(this: object): string {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:DateTime", "toIso8601String", []);
return _flaxResult as string;
},
}, []);
export namespace DateTime {
export function fromMillisecondsSinceEpoch(millisecondsSinceEpoch: number, options: { isUtc?: boolean | undefined } = {}): DateTime {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:DateTime", "fromMillisecondsSinceEpoch", [{"name":"millisecondsSinceEpoch","required":true,"positional":true},{"name":"isUtc","required":false,"positional":false}], [millisecondsSinceEpoch], options) as DateTime;
}
}
