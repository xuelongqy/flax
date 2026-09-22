// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Radius';
import '@flax/flutter/widgets/_bindings/flutter_Radius';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface BorderRadius extends upstream0.BorderRadiusGeometry, Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> { readonly __BorderRadius: unique symbol;
readonly topLeft: upstream1.Radius;
readonly topRight: upstream1.Radius;
readonly bottomLeft: upstream1.Radius;
readonly bottomRight: upstream1.Radius;
copyWith(options?: {bottomLeft?: upstream1.Radius | null | undefined; bottomRight?: upstream1.Radius | null | undefined; topLeft?: upstream1.Radius | null | undefined; topRight?: upstream1.Radius | null | undefined}): BorderRadius;
}
defineObject("flax.core/flutter#type:BorderRadius", ["topLeft","topRight","bottomLeft","bottomRight"], [], {copyWith(this: object, options: { bottomLeft?: upstream1.Radius | null | undefined; bottomRight?: upstream1.Radius | null | undefined; topLeft?: upstream1.Radius | null | undefined; topRight?: upstream1.Radius | null | undefined } = {}): BorderRadius {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["bottomLeft","bottomRight","topLeft","topRight"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:BorderRadius", "copyWith", [options.bottomLeft, options.bottomRight, options.topLeft, options.topRight]);
return _flaxResult as BorderRadius;
},
}, []);
export namespace BorderRadius {
export function all(radius: upstream1.Radius): BorderRadius {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadius", "all", [{"name":"radius","required":true,"positional":true}], [radius], {}) as BorderRadius;
}
}
export namespace BorderRadius {
export function circular(radius: number): BorderRadius {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadius", "circular", [{"name":"radius","required":true,"positional":true}], [radius], {}) as BorderRadius;
}
}
export namespace BorderRadius {
export function only(options: { topLeft?: upstream1.Radius | undefined; topRight?: upstream1.Radius | undefined; bottomLeft?: upstream1.Radius | undefined; bottomRight?: upstream1.Radius | undefined } = {}): BorderRadius {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadius", "only", [{"name":"topLeft","required":false,"positional":false},{"name":"topRight","required":false,"positional":false},{"name":"bottomLeft","required":false,"positional":false},{"name":"bottomRight","required":false,"positional":false}], [], options) as BorderRadius;
}
}
export namespace BorderRadius { export declare const zero: BorderRadius; }
Object.defineProperty(BorderRadius, "zero", { get: () => invokeObjectStatic("flax.core/flutter#type:BorderRadius", "zero") });
