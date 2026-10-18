// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnimationStatus extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::AnimationStatus": readonly [] }> { readonly __AnimationStatus: unique symbol;
readonly [_flaxDartTypeValue]: AnimationStatus;
readonly name: string;
readonly index: number;

readonly isDismissed: boolean;
readonly isCompleted: boolean;
readonly isAnimating: boolean;
readonly isForwardOrCompleted: boolean;
}
defineEnum("flax.core/sdk_animation#type:AnimationStatus", ["dismissed","forward","reverse","completed"], {
get isDismissed(): boolean { return invokeTopLevel("flax.core/sdk_animation#function:AnimationStatus.isDismissed%3Aget", [this]) as boolean; },
get isCompleted(): boolean { return invokeTopLevel("flax.core/sdk_animation#function:AnimationStatus.isCompleted%3Aget", [this]) as boolean; },
get isAnimating(): boolean { return invokeTopLevel("flax.core/sdk_animation#function:AnimationStatus.isAnimating%3Aget", [this]) as boolean; },
get isForwardOrCompleted(): boolean { return invokeTopLevel("flax.core/sdk_animation#function:AnimationStatus.isForwardOrCompleted%3Aget", [this]) as boolean; },
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_AnimationStatus_api = {
dismissed: enumValue<AnimationStatus>("flax.core/sdk_animation#type:AnimationStatus", "dismissed"),
forward: enumValue<AnimationStatus>("flax.core/sdk_animation#type:AnimationStatus", "forward"),
reverse: enumValue<AnimationStatus>("flax.core/sdk_animation#type:AnimationStatus", "reverse"),
completed: enumValue<AnimationStatus>("flax.core/sdk_animation#type:AnimationStatus", "completed"),
values: Object.freeze([enumValue<AnimationStatus>("flax.core/sdk_animation#type:AnimationStatus", "dismissed"), enumValue<AnimationStatus>("flax.core/sdk_animation#type:AnimationStatus", "forward"), enumValue<AnimationStatus>("flax.core/sdk_animation#type:AnimationStatus", "reverse"), enumValue<AnimationStatus>("flax.core/sdk_animation#type:AnimationStatus", "completed")]),
};
export const AnimationStatus = Object.freeze(_flaxBindInstanceType<AnimationStatus, typeof _flaxEnum_AnimationStatus_api>(_flaxEnum_AnimationStatus_api, "flax.core/sdk_animation#type:AnimationStatus", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_AnimationStatus_api & _FlaxInstanceType<AnimationStatus> & _FlaxDartType<AnimationStatus, readonly ["class", "flax.core/sdk_animation#type:AnimationStatus", readonly [], false]>);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isDismissed" | "isCompleted" | "isAnimating" | "isForwardOrCompleted" | "__flaxBound:package:flutter/src/animation/animation.dart::AnimationStatus";
