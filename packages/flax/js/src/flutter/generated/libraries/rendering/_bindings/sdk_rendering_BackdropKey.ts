// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BackdropKey extends Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::BackdropKey": readonly [] }> { readonly __BackdropKey: unique symbol;
readonly [_flaxDartTypeValue]: BackdropKey;

}
defineObject("flax.core/sdk_rendering#type:BackdropKey", [], [], _flaxBindingMethods("flax.core/sdk_rendering#type:BackdropKey", "object", {}, {}), []);
export function _BackdropKeyFactory(): BackdropKey {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:BackdropKey", "", [], [], {}) as BackdropKey;
}
export const BackdropKey: typeof _BackdropKeyFactory & _FlaxInstanceType<BackdropKey> & _FlaxDartType<BackdropKey, readonly ["class", "flax.core/sdk_rendering#type:BackdropKey", readonly [], false]> = _flaxBindInstanceType<BackdropKey, typeof _BackdropKeyFactory>(_BackdropKeyFactory, "flax.core/sdk_rendering#type:BackdropKey", ["dart:core::Object"]) as typeof _BackdropKeyFactory & _FlaxInstanceType<BackdropKey> & _FlaxDartType<BackdropKey, readonly ["class", "flax.core/sdk_rendering#type:BackdropKey", readonly [], false]>;
