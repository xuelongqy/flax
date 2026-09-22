// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface EdgeInsetsDirectional extends upstream0.EdgeInsetsGeometry, Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }> { readonly __EdgeInsetsDirectional: unique symbol;
readonly start: number;
readonly top: number;
readonly end: number;
readonly bottom: number;
}
defineObject("flax.core/flutter#type:EdgeInsetsDirectional", ["start","top","end","bottom"], [], {}, []);
export namespace EdgeInsetsDirectional {
export function fromSTEB(start: number, top: number, end: number, bottom: number): EdgeInsetsDirectional {
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsDirectional", "fromSTEB", [{"name":"start","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"end","required":true,"positional":true},{"name":"bottom","required":true,"positional":true}], [start, top, end, bottom], {}) as EdgeInsetsDirectional;
}
}
export namespace EdgeInsetsDirectional {
export function only(options: { start?: number | undefined; top?: number | undefined; end?: number | undefined; bottom?: number | undefined } = {}): EdgeInsetsDirectional {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsDirectional", "only", [{"name":"start","required":false,"positional":false},{"name":"top","required":false,"positional":false},{"name":"end","required":false,"positional":false},{"name":"bottom","required":false,"positional":false}], [], options) as EdgeInsetsDirectional;
}
}
export namespace EdgeInsetsDirectional {
export function all(value: number): EdgeInsetsDirectional {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsDirectional", "all", [{"name":"value","required":true,"positional":true}], [value], {}) as EdgeInsetsDirectional;
}
}
export namespace EdgeInsetsDirectional {
export function symmetric(options: { horizontal?: number | undefined; vertical?: number | undefined } = {}): EdgeInsetsDirectional {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsDirectional", "symmetric", [{"name":"horizontal","required":false,"positional":false},{"name":"vertical","required":false,"positional":false}], [], options) as EdgeInsetsDirectional;
}
}
export namespace EdgeInsetsDirectional { export declare const zero: EdgeInsetsDirectional; }
Object.defineProperty(EdgeInsetsDirectional, "zero", { get: () => invokeObjectStatic("flax.core/flutter#type:EdgeInsetsDirectional", "zero") });
