// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import { _flaxMemberParameters106, _flaxMemberParameters379, _flaxMemberParameters2, _flaxMemberParameters380 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollActivityDelegate extends Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }> { readonly __ScrollActivityDelegate: unique symbol;
readonly [_flaxDartTypeValue]: ScrollActivityDelegate;

readonly axisDirection: upstream0.AxisDirection;
setPixels(pixels: number): number;
applyUserOffset(delta: number): void;
goIdle(): void;
goBallistic(velocity: number): void;
}
defineObject("flax.core/sdk_widgets#type:ScrollActivityDelegate", ["axisDirection"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollActivityDelegate", "object", {"setPixels":_flaxMemberParameters106,"applyUserOffset":_flaxMemberParameters379,"goIdle":_flaxMemberParameters2,"goBallistic":_flaxMemberParameters380}, {}), []);
const _ScrollActivityDelegateProxy = {type: "flax.core/sdk_widgets#type:ScrollActivityDelegate", parameters: _flaxMemberParameters2, constructors: {}, methods: {"setPixels":_flaxMemberParameters106,"applyUserOffset":_flaxMemberParameters379,"goIdle":_flaxMemberParameters2,"goBallistic":_flaxMemberParameters380}, getters: ["axisDirection"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _ScrollActivityDelegateFactory { export function implement(args: [], implementation: {setPixels: ((pixels: number) => number); applyUserOffset: ((delta: number) => void); goIdle: (() => void); goBallistic: ((velocity: number) => void); get axisDirection(): upstream0.AxisDirection}): ScrollActivityDelegate {
return constructProxy(_ScrollActivityDelegateProxy, args, implementation) as ScrollActivityDelegate; } }
export const ScrollActivityDelegate: typeof _ScrollActivityDelegateFactory & _FlaxInstanceType<ScrollActivityDelegate> & _FlaxDartType<ScrollActivityDelegate, readonly ["class", "flax.core/sdk_widgets#type:ScrollActivityDelegate", readonly [], false]> = _flaxBindInstanceType<ScrollActivityDelegate, typeof _ScrollActivityDelegateFactory>(_ScrollActivityDelegateFactory, "flax.core/sdk_widgets#type:ScrollActivityDelegate", ["dart:core::Object"]) as typeof _ScrollActivityDelegateFactory & _FlaxInstanceType<ScrollActivityDelegate> & _FlaxDartType<ScrollActivityDelegate, readonly ["class", "flax.core/sdk_widgets#type:ScrollActivityDelegate", readonly [], false]>;
