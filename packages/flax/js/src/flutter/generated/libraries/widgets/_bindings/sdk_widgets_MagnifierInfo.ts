// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { _flaxMemberParameters2, _flaxMemberParameters240 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MagnifierInfo extends Readonly<{ "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierInfo": readonly [] }> { readonly __MagnifierInfo: unique symbol;
readonly [_flaxDartTypeValue]: MagnifierInfo;

}
defineObject("flax.core/sdk_widgets#type:MagnifierInfo", ["globalGesturePosition","currentLineBoundaries","caretRect","fieldBounds"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:MagnifierInfo", "object", {"toString":_flaxMemberParameters2}, {}), []);
const _MagnifierInfoProxy = {type: "flax.core/sdk_widgets#type:MagnifierInfo", parameters: _flaxMemberParameters240, constructors: {"": _flaxMemberParameters240}, methods: {"toString":_flaxMemberParameters2}, getters: ["globalGesturePosition","currentLineBoundaries","caretRect","fieldBounds"], setters: [], contextMembers: [], superMembers: ["get:globalGesturePosition","get:currentLineBoundaries","get:caretRect","get:fieldBounds","toString"]} as const;
export interface MagnifierInfo {
readonly [_flaxDartTypeValue]: MagnifierInfo;

toString(): string;
get globalGesturePosition(): upstream0.Offset;
get currentLineBoundaries(): upstream1.Rect;
get caretRect(): upstream1.Rect;
get fieldBounds(): upstream1.Rect;
}
export abstract class MagnifierInfo extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MagnifierInfo>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MagnifierInfo;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:MagnifierInfo", readonly [], false];
constructor(options: {globalGesturePosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; caretRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; fieldBounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; currentLineBoundaries: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>}) { super(_MagnifierInfoProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MagnifierInfo.prototype, _MagnifierInfoProxy);
export namespace MagnifierInfo { export function implement(args: [options: {globalGesturePosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; caretRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; fieldBounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; currentLineBoundaries: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>}], implementation: {}): MagnifierInfo {
return constructProxy(_MagnifierInfoProxy, args, implementation) as MagnifierInfo; } }
export namespace MagnifierInfo { export declare const empty: MagnifierInfo; }
_flaxDefineStaticGetters(MagnifierInfo, "flax.core/sdk_widgets#read:MagnifierInfo.", ["empty"]);
_flaxBindInstanceType<MagnifierInfo, typeof MagnifierInfo>(MagnifierInfo, "flax.core/sdk_widgets#type:MagnifierInfo", ["dart:core::Object"]);
