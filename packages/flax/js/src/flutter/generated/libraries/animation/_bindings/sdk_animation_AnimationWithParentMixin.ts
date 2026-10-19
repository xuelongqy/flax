// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import { _flaxMemberParameters0 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnimationWithParentMixin<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/animation/animations.dart::AnimationWithParentMixin": readonly [T] }> { readonly __AnimationWithParentMixin: unique symbol;
readonly [_flaxDartTypeValue]: AnimationWithParentMixin<T>;

readonly parent: upstream0.Animation<T>;
readonly status: upstream1.AnimationStatus;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
addStatusListener(listener: ((status: upstream1.AnimationStatus) => void)): void;
removeStatusListener(listener: ((status: upstream1.AnimationStatus) => void)): void;
}
defineObject("flax.core/sdk_animation#type:AnimationWithParentMixin", ["parent","status"], [], _flaxBindingMethods("flax.core/sdk_animation#type:AnimationWithParentMixin", "object", {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"addStatusListener":_flaxMemberParameters0,"removeStatusListener":_flaxMemberParameters0}, {}), []);
export const AnimationWithParentMixin: object & _FlaxInstanceType<AnimationWithParentMixin<unknown | null>> & _FlaxDartType<AnimationWithParentMixin<unknown | null>, readonly ["class", "flax.core/sdk_animation#type:AnimationWithParentMixin", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<AnimationWithParentMixin<unknown | null>, object>({}, "flax.core/sdk_animation#type:AnimationWithParentMixin", ["dart:core::Object"]) as object & _FlaxInstanceType<AnimationWithParentMixin<unknown | null>> & _FlaxDartType<AnimationWithParentMixin<unknown | null>, readonly ["class", "flax.core/sdk_animation#type:AnimationWithParentMixin", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(AnimationWithParentMixin, "flax.core/sdk_animation#type:AnimationWithParentMixin", {"category":"object","constructors":{}});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {readonly prototype: AnimationWithParentMixin<_Selected0>;} & _FlaxInstanceType<AnimationWithParentMixin<_Selected0>> & _FlaxDartType<AnimationWithParentMixin<_Selected0>> : never : never; }
