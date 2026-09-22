// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Radius';
import '@flax/flutter/widgets/_bindings/flutter_Radius';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface BorderRadiusDirectional extends upstream0.BorderRadiusGeometry, Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [] }> { readonly __BorderRadiusDirectional: unique symbol;
readonly topStart: upstream1.Radius;
readonly topEnd: upstream1.Radius;
readonly bottomStart: upstream1.Radius;
readonly bottomEnd: upstream1.Radius;
}
defineObject("flax.core/flutter#type:BorderRadiusDirectional", ["topStart","topEnd","bottomStart","bottomEnd"], [], {}, []);
export namespace BorderRadiusDirectional {
export function all(radius: upstream1.Radius): BorderRadiusDirectional {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusDirectional", "all", [{"name":"radius","required":true,"positional":true}], [radius], {}) as BorderRadiusDirectional;
}
}
export namespace BorderRadiusDirectional {
export function circular(radius: number): BorderRadiusDirectional {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusDirectional", "circular", [{"name":"radius","required":true,"positional":true}], [radius], {}) as BorderRadiusDirectional;
}
}
export namespace BorderRadiusDirectional {
export function only(options: { topStart?: upstream1.Radius | undefined; topEnd?: upstream1.Radius | undefined; bottomStart?: upstream1.Radius | undefined; bottomEnd?: upstream1.Radius | undefined } = {}): BorderRadiusDirectional {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusDirectional", "only", [{"name":"topStart","required":false,"positional":false},{"name":"topEnd","required":false,"positional":false},{"name":"bottomStart","required":false,"positional":false},{"name":"bottomEnd","required":false,"positional":false}], [], options) as BorderRadiusDirectional;
}
}
export namespace BorderRadiusDirectional { export declare const zero: BorderRadiusDirectional; }
Object.defineProperty(BorderRadiusDirectional, "zero", { get: () => invokeObjectStatic("flax.core/flutter#type:BorderRadiusDirectional", "zero") });
