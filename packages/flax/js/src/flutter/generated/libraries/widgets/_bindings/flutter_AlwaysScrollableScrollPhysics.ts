// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AlwaysScrollableScrollPhysics extends upstream0.ScrollPhysics, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::AlwaysScrollableScrollPhysics": readonly [] }> { readonly __AlwaysScrollableScrollPhysics: unique symbol;

readonly parent: upstream0.ScrollPhysics | null;
}
defineObject("flax.core/flutter#type:AlwaysScrollableScrollPhysics", ["parent"], [], _flaxBindingMethods("flax.core/flutter#type:AlwaysScrollableScrollPhysics", "object", {}, {}), []);
function _AlwaysScrollableScrollPhysicsFactory(options: { parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined } = {}): AlwaysScrollableScrollPhysics {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AlwaysScrollableScrollPhysics", "", [{"name":"parent","required":false,"positional":false}], [], options) as AlwaysScrollableScrollPhysics;
}
export const AlwaysScrollableScrollPhysics: typeof _AlwaysScrollableScrollPhysicsFactory & _FlaxInstanceType<AlwaysScrollableScrollPhysics> & _FlaxDartType<AlwaysScrollableScrollPhysics, readonly ["class", "flax.core/flutter#type:AlwaysScrollableScrollPhysics", readonly [], false]> = _flaxBindInstanceType<AlwaysScrollableScrollPhysics, typeof _AlwaysScrollableScrollPhysicsFactory>(_AlwaysScrollableScrollPhysicsFactory, "flax.core/flutter#type:AlwaysScrollableScrollPhysics", ["flax.core/flutter#type:ScrollPhysics","dart:core::Object"]) as typeof _AlwaysScrollableScrollPhysicsFactory & _FlaxInstanceType<AlwaysScrollableScrollPhysics> & _FlaxDartType<AlwaysScrollableScrollPhysics, readonly ["class", "flax.core/flutter#type:AlwaysScrollableScrollPhysics", readonly [], false]>;
