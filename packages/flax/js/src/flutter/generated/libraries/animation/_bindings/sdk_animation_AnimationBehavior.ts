// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnimationBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationBehavior">, Readonly<{ "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationBehavior": readonly [] }> { readonly __AnimationBehavior: unique symbol;
readonly [_flaxDartTypeValue]: AnimationBehavior;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_animation#type:AnimationBehavior", ["normal","preserve"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_AnimationBehavior_api = {
normal: enumValue<AnimationBehavior>("flax.core/sdk_animation#type:AnimationBehavior", "normal"),
preserve: enumValue<AnimationBehavior>("flax.core/sdk_animation#type:AnimationBehavior", "preserve"),
values: Object.freeze([enumValue<AnimationBehavior>("flax.core/sdk_animation#type:AnimationBehavior", "normal"), enumValue<AnimationBehavior>("flax.core/sdk_animation#type:AnimationBehavior", "preserve")]),
};
export const AnimationBehavior = Object.freeze(_flaxBindInstanceType<AnimationBehavior, typeof _flaxEnum_AnimationBehavior_api>(_flaxEnum_AnimationBehavior_api, "flax.core/sdk_animation#type:AnimationBehavior", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_AnimationBehavior_api & _FlaxInstanceType<AnimationBehavior> & _FlaxDartType<AnimationBehavior, readonly ["class", "flax.core/sdk_animation#type:AnimationBehavior", readonly [], false]>);
