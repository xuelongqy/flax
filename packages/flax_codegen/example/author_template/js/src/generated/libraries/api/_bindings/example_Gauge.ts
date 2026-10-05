// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@your-scope/your-package/api/_bindings/example.__module";
export interface Gauge extends Readonly<{ "__flaxBound:package:your_package/src/gauge.dart::Gauge": readonly [] }> { readonly __Gauge: unique symbol;
get value(): number;
increment(by?: number): void;
set value(value: number);
}
defineObject("vendor.example/example#type:Gauge", ["value"], ["value"], {increment(this: object, by?: number): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "vendor.example/example#type:Gauge", "increment", [by]);
},
}, []);
export function Gauge(options: { value?: number | undefined } = {}): Gauge {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "vendor.example/example#type:Gauge", "", [{"name":"value","required":false,"positional":false}], [], options) as Gauge;
}
