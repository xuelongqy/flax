// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface AlignmentDirectional extends upstream0.AlignmentGeometry, Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [] }> { readonly __AlignmentDirectional: unique symbol;
readonly start: number;
readonly y: number;
}
defineObject("flax.core/flutter#type:AlignmentDirectional", ["start","y"], [], _flaxBindingMethods("flax.core/flutter#type:AlignmentDirectional", "object", {}), []);
export function AlignmentDirectional(start: number, y: number): AlignmentDirectional {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AlignmentDirectional", "", [{"name":"start","required":true,"positional":true},{"name":"y","required":true,"positional":true}], [start, y], {}) as AlignmentDirectional;
}
export namespace AlignmentDirectional { export declare const topStart: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "topStart", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.topStart", []) });
export namespace AlignmentDirectional { export declare const topCenter: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "topCenter", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.topCenter", []) });
export namespace AlignmentDirectional { export declare const topEnd: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "topEnd", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.topEnd", []) });
export namespace AlignmentDirectional { export declare const centerStart: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "centerStart", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.centerStart", []) });
export namespace AlignmentDirectional { export declare const center: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "center", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.center", []) });
export namespace AlignmentDirectional { export declare const centerEnd: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "centerEnd", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.centerEnd", []) });
export namespace AlignmentDirectional { export declare const bottomStart: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "bottomStart", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.bottomStart", []) });
export namespace AlignmentDirectional { export declare const bottomCenter: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "bottomCenter", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.bottomCenter", []) });
export namespace AlignmentDirectional { export declare const bottomEnd: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "bottomEnd", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.bottomEnd", []) });
