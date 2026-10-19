// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters97 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TapMoveDetails extends Readonly<{ "__flaxBound:package:flutter/src/gestures/tap.dart::TapMoveDetails": readonly [] }> { readonly __TapMoveDetails: unique symbol;
readonly [_flaxDartTypeValue]: TapMoveDetails;

}
defineObject("flax.core/sdk_gestures#type:TapMoveDetails", ["globalPosition","localPosition","kind","delta"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:TapMoveDetails", "object", {}, {}), []);
const _TapMoveDetailsProxy = {type: "flax.core/sdk_gestures#type:TapMoveDetails", parameters: _flaxMemberParameters97, constructors: {"": _flaxMemberParameters97}, methods: {}, getters: ["globalPosition","localPosition","kind","delta"], setters: [], contextMembers: [], superMembers: ["get:globalPosition","get:localPosition","get:kind","get:delta"]} as const;
export interface TapMoveDetails {
readonly [_flaxDartTypeValue]: TapMoveDetails;

get globalPosition(): upstream1.Offset;
get localPosition(): upstream1.Offset;
get kind(): upstream0.PointerDeviceKind;
get delta(): upstream1.Offset;
}
export abstract class TapMoveDetails extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TapMoveDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TapMoveDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:TapMoveDetails", readonly [], false];
constructor(options: {kind: upstream0.PointerDeviceKind; globalPosition?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; delta?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; localPosition?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}) { super(_TapMoveDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TapMoveDetails.prototype, _TapMoveDetailsProxy);
export namespace TapMoveDetails { export function implement(args: [options: {kind: upstream0.PointerDeviceKind; globalPosition?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; delta?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; localPosition?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}], implementation: {}): TapMoveDetails {
return constructProxy(_TapMoveDetailsProxy, args, implementation) as TapMoveDetails; } }
_flaxBindInstanceType<TapMoveDetails, typeof TapMoveDetails>(TapMoveDetails, "flax.core/sdk_gestures#type:TapMoveDetails", ["dart:core::Object"]);
