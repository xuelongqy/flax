// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface AlignmentDirectional extends upstream0.AlignmentGeometry, Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [] }> { readonly __AlignmentDirectional: unique symbol;
readonly start: number;
readonly y: number;
}
defineObject("flax.core/flutter#type:AlignmentDirectional", ["start","y"], [], _flaxBindingMethods("flax.core/flutter#type:AlignmentDirectional", "object", {}), []);
function _AlignmentDirectionalFactory(start: number, y: number): AlignmentDirectional {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AlignmentDirectional", "", [{"name":"start","required":true,"positional":true},{"name":"y","required":true,"positional":true}], [start, y], {}) as AlignmentDirectional;
}
namespace _AlignmentDirectionalFactory { export declare const topStart: AlignmentDirectional; }
Object.defineProperty(_AlignmentDirectionalFactory, "topStart", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.topStart", []) });
namespace _AlignmentDirectionalFactory { export declare const topCenter: AlignmentDirectional; }
Object.defineProperty(_AlignmentDirectionalFactory, "topCenter", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.topCenter", []) });
namespace _AlignmentDirectionalFactory { export declare const topEnd: AlignmentDirectional; }
Object.defineProperty(_AlignmentDirectionalFactory, "topEnd", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.topEnd", []) });
namespace _AlignmentDirectionalFactory { export declare const centerStart: AlignmentDirectional; }
Object.defineProperty(_AlignmentDirectionalFactory, "centerStart", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.centerStart", []) });
namespace _AlignmentDirectionalFactory { export declare const center: AlignmentDirectional; }
Object.defineProperty(_AlignmentDirectionalFactory, "center", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.center", []) });
namespace _AlignmentDirectionalFactory { export declare const centerEnd: AlignmentDirectional; }
Object.defineProperty(_AlignmentDirectionalFactory, "centerEnd", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.centerEnd", []) });
namespace _AlignmentDirectionalFactory { export declare const bottomStart: AlignmentDirectional; }
Object.defineProperty(_AlignmentDirectionalFactory, "bottomStart", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.bottomStart", []) });
namespace _AlignmentDirectionalFactory { export declare const bottomCenter: AlignmentDirectional; }
Object.defineProperty(_AlignmentDirectionalFactory, "bottomCenter", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.bottomCenter", []) });
namespace _AlignmentDirectionalFactory { export declare const bottomEnd: AlignmentDirectional; }
Object.defineProperty(_AlignmentDirectionalFactory, "bottomEnd", { get: () => invokeTopLevel("flax.core/flutter#read:AlignmentDirectional.bottomEnd", []) });
export const AlignmentDirectional: typeof _AlignmentDirectionalFactory & _FlaxInstanceType<AlignmentDirectional> = _flaxBindInstanceType<AlignmentDirectional, typeof _AlignmentDirectionalFactory>(_AlignmentDirectionalFactory, "flax.core/flutter#type:AlignmentDirectional", ["flax.core/flutter#type:AlignmentGeometry","dart:core::Object"]);
