// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface Alignment extends upstream0.AlignmentGeometry, Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }> { readonly __Alignment: unique symbol;
readonly x: number;
readonly y: number;
}
defineObject("flax.core/flutter#type:Alignment", ["x","y"], [], _flaxBindingMethods("flax.core/flutter#type:Alignment", "object", {}), []);
export function Alignment(x: number, y: number): Alignment {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Alignment", "", [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true}], [x, y], {}) as Alignment;
}
export namespace Alignment { export declare const topLeft: Alignment; }
Object.defineProperty(Alignment, "topLeft", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.topLeft", []) });
export namespace Alignment { export declare const topCenter: Alignment; }
Object.defineProperty(Alignment, "topCenter", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.topCenter", []) });
export namespace Alignment { export declare const topRight: Alignment; }
Object.defineProperty(Alignment, "topRight", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.topRight", []) });
export namespace Alignment { export declare const centerLeft: Alignment; }
Object.defineProperty(Alignment, "centerLeft", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.centerLeft", []) });
export namespace Alignment { export declare const center: Alignment; }
Object.defineProperty(Alignment, "center", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.center", []) });
export namespace Alignment { export declare const centerRight: Alignment; }
Object.defineProperty(Alignment, "centerRight", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.centerRight", []) });
export namespace Alignment { export declare const bottomLeft: Alignment; }
Object.defineProperty(Alignment, "bottomLeft", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.bottomLeft", []) });
export namespace Alignment { export declare const bottomCenter: Alignment; }
Object.defineProperty(Alignment, "bottomCenter", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.bottomCenter", []) });
export namespace Alignment { export declare const bottomRight: Alignment; }
Object.defineProperty(Alignment, "bottomRight", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.bottomRight", []) });
