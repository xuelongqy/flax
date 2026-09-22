// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface EdgeInsets extends upstream0.EdgeInsetsGeometry, Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> { readonly __EdgeInsets: unique symbol;
readonly left: number;
readonly top: number;
readonly right: number;
readonly bottom: number;
}
defineObject("flax.core/flutter#type:EdgeInsets", ["left","top","right","bottom"], [], {}, []);
export namespace EdgeInsets {
export function all(value: number): EdgeInsets {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsets", "all", [{"name":"value","required":true,"positional":true}], [value], {}) as EdgeInsets;
}
}
export namespace EdgeInsets {
export function symmetric(options: { vertical?: number | undefined; horizontal?: number | undefined } = {}): EdgeInsets {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsets", "symmetric", [{"name":"vertical","required":false,"positional":false},{"name":"horizontal","required":false,"positional":false}], [], options) as EdgeInsets;
}
}
export namespace EdgeInsets {
export function fromLTRB(left: number, top: number, right: number, bottom: number): EdgeInsets {
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsets", "fromLTRB", [{"name":"left","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"right","required":true,"positional":true},{"name":"bottom","required":true,"positional":true}], [left, top, right, bottom], {}) as EdgeInsets;
}
}
export namespace EdgeInsets {
export function only(options: { left?: number | undefined; top?: number | undefined; right?: number | undefined; bottom?: number | undefined } = {}): EdgeInsets {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsets", "only", [{"name":"left","required":false,"positional":false},{"name":"top","required":false,"positional":false},{"name":"right","required":false,"positional":false},{"name":"bottom","required":false,"positional":false}], [], options) as EdgeInsets;
}
}
export namespace EdgeInsets { export declare const zero: EdgeInsets; }
Object.defineProperty(EdgeInsets, "zero", { get: () => invokeObjectStatic("flax.core/flutter#type:EdgeInsets", "zero") });
