// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Alignment extends upstream0.AlignmentGeometry, Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [] }> { readonly __Alignment: unique symbol;

readonly x: number;
readonly y: number;
}
defineObject("flax.core/flutter#type:Alignment", ["x","y"], [], _flaxBindingMethods("flax.core/flutter#type:Alignment", "object", {}, {}), []);
function _AlignmentFactory(x: number, y: number): Alignment {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Alignment", "", [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true}], [x, y], {}) as Alignment;
}
namespace _AlignmentFactory { export declare const topLeft: Alignment; }
Object.defineProperty(_AlignmentFactory, "topLeft", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.topLeft", []) });
namespace _AlignmentFactory { export declare const topCenter: Alignment; }
Object.defineProperty(_AlignmentFactory, "topCenter", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.topCenter", []) });
namespace _AlignmentFactory { export declare const topRight: Alignment; }
Object.defineProperty(_AlignmentFactory, "topRight", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.topRight", []) });
namespace _AlignmentFactory { export declare const centerLeft: Alignment; }
Object.defineProperty(_AlignmentFactory, "centerLeft", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.centerLeft", []) });
namespace _AlignmentFactory { export declare const center: Alignment; }
Object.defineProperty(_AlignmentFactory, "center", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.center", []) });
namespace _AlignmentFactory { export declare const centerRight: Alignment; }
Object.defineProperty(_AlignmentFactory, "centerRight", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.centerRight", []) });
namespace _AlignmentFactory { export declare const bottomLeft: Alignment; }
Object.defineProperty(_AlignmentFactory, "bottomLeft", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.bottomLeft", []) });
namespace _AlignmentFactory { export declare const bottomCenter: Alignment; }
Object.defineProperty(_AlignmentFactory, "bottomCenter", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.bottomCenter", []) });
namespace _AlignmentFactory { export declare const bottomRight: Alignment; }
Object.defineProperty(_AlignmentFactory, "bottomRight", { get: () => invokeTopLevel("flax.core/flutter#read:Alignment.bottomRight", []) });
export const Alignment: typeof _AlignmentFactory & _FlaxInstanceType<Alignment> & _FlaxDartType<Alignment, readonly ["class", "flax.core/flutter#type:Alignment", readonly [], false]> = _flaxBindInstanceType<Alignment, typeof _AlignmentFactory>(_AlignmentFactory, "flax.core/flutter#type:Alignment", ["flax.core/flutter#type:AlignmentGeometry","dart:core::Object"]) as typeof _AlignmentFactory & _FlaxInstanceType<Alignment> & _FlaxDartType<Alignment, readonly ["class", "flax.core/flutter#type:Alignment", readonly [], false]>;
