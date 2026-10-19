// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters2, _flaxMemberParameters0 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnimationLocalListenersMixin extends Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [] }> { readonly __AnimationLocalListenersMixin: unique symbol;
readonly [_flaxDartTypeValue]: AnimationLocalListenersMixin;

didRegisterListener(): void;
didUnregisterListener(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
clearListeners(): void;
notifyListeners(): void;
}
defineObject("flax.core/sdk_animation#type:AnimationLocalListenersMixin", [], [], _flaxBindingMethods("flax.core/sdk_animation#type:AnimationLocalListenersMixin", "object", {"didRegisterListener":_flaxMemberParameters2,"didUnregisterListener":_flaxMemberParameters2,"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"clearListeners":_flaxMemberParameters2,"notifyListeners":_flaxMemberParameters2}, {}), []);
export const AnimationLocalListenersMixin: object & _FlaxInstanceType<AnimationLocalListenersMixin> & _FlaxDartType<AnimationLocalListenersMixin, readonly ["class", "flax.core/sdk_animation#type:AnimationLocalListenersMixin", readonly [], false]> = _flaxBindInstanceType<AnimationLocalListenersMixin, object>({}, "flax.core/sdk_animation#type:AnimationLocalListenersMixin", ["dart:core::Object"]) as object & _FlaxInstanceType<AnimationLocalListenersMixin> & _FlaxDartType<AnimationLocalListenersMixin, readonly ["class", "flax.core/sdk_animation#type:AnimationLocalListenersMixin", readonly [], false]>;
