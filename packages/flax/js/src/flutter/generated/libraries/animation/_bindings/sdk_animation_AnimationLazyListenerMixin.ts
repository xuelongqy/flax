// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnimationLazyListenerMixin extends Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLazyListenerMixin": readonly [] }> { readonly __AnimationLazyListenerMixin: unique symbol;
readonly [_flaxDartTypeValue]: AnimationLazyListenerMixin;

readonly isListening: boolean;
didRegisterListener(): void;
didUnregisterListener(): void;
didStartListening(): void;
didStopListening(): void;
}
defineObject("flax.core/sdk_animation#type:AnimationLazyListenerMixin", ["isListening"], [], _flaxBindingMethods("flax.core/sdk_animation#type:AnimationLazyListenerMixin", "object", {"didRegisterListener":_flaxMemberParameters0,"didUnregisterListener":_flaxMemberParameters0,"didStartListening":_flaxMemberParameters0,"didStopListening":_flaxMemberParameters0}, {}), []);
export const AnimationLazyListenerMixin: object & _FlaxInstanceType<AnimationLazyListenerMixin> & _FlaxDartType<AnimationLazyListenerMixin, readonly ["class", "flax.core/sdk_animation#type:AnimationLazyListenerMixin", readonly [], false]> = _flaxBindInstanceType<AnimationLazyListenerMixin, object>({}, "flax.core/sdk_animation#type:AnimationLazyListenerMixin", ["dart:core::Object"]) as object & _FlaxInstanceType<AnimationLazyListenerMixin> & _FlaxDartType<AnimationLazyListenerMixin, readonly ["class", "flax.core/sdk_animation#type:AnimationLazyListenerMixin", readonly [], false]>;
