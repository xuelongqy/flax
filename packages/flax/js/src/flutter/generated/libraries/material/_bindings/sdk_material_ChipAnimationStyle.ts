// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStyle';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStyle';
const _flaxMemberParameters0 = [{"name":"enableAnimation"},{"name":"selectAnimation"},{"name":"avatarDrawerAnimation"},{"name":"deleteDrawerAnimation"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ChipAnimationStyle extends Readonly<{ "__flaxBound:package:flutter/src/material/chip.dart::ChipAnimationStyle": readonly [] }> { readonly __ChipAnimationStyle: unique symbol;
readonly [_flaxDartTypeValue]: ChipAnimationStyle;

}
defineObject("flax.core/sdk_material#type:ChipAnimationStyle", ["enableAnimation","selectAnimation","avatarDrawerAnimation","deleteDrawerAnimation"], [], _flaxBindingMethods("flax.core/sdk_material#type:ChipAnimationStyle", "object", {}, {}), []);
const _ChipAnimationStyleProxy = {type: "flax.core/sdk_material#type:ChipAnimationStyle", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["enableAnimation","selectAnimation","avatarDrawerAnimation","deleteDrawerAnimation"], setters: [], contextMembers: [], superMembers: ["get:enableAnimation","get:selectAnimation","get:avatarDrawerAnimation","get:deleteDrawerAnimation"]} as const;
export interface ChipAnimationStyle {
readonly [_flaxDartTypeValue]: ChipAnimationStyle;

get enableAnimation(): upstream0.AnimationStyle | null;
get selectAnimation(): upstream0.AnimationStyle | null;
get avatarDrawerAnimation(): upstream0.AnimationStyle | null;
get deleteDrawerAnimation(): upstream0.AnimationStyle | null;
}
export abstract class ChipAnimationStyle extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChipAnimationStyle>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ChipAnimationStyle;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ChipAnimationStyle", readonly [], false];
constructor(options?: {enableAnimation?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; selectAnimation?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; avatarDrawerAnimation?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; deleteDrawerAnimation?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_ChipAnimationStyleProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ChipAnimationStyle.prototype, _ChipAnimationStyleProxy);
export namespace ChipAnimationStyle { export function implement(args: [options?: {enableAnimation?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; selectAnimation?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; avatarDrawerAnimation?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; deleteDrawerAnimation?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {}): ChipAnimationStyle {
return constructProxy(_ChipAnimationStyleProxy, args, implementation) as ChipAnimationStyle; } }
_flaxBindInstanceType<ChipAnimationStyle, typeof ChipAnimationStyle>(ChipAnimationStyle, "flax.core/sdk_material#type:ChipAnimationStyle", ["dart:core::Object"]);
