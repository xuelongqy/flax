// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/sdk_gestures_Drag';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Drag';
const _flaxMemberParameters0 = [{"name":"disposition","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"starter","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"initialPosition","required":true,"positional":true},{"name":"kind","required":true,"positional":true},{"name":"gestureSettings","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MultiDragPointerState extends Readonly<{ "__flaxBound:package:flutter/src/gestures/multidrag.dart::MultiDragPointerState": readonly [] }> { readonly __MultiDragPointerState: unique symbol;
readonly [_flaxDartTypeValue]: MultiDragPointerState;

}
defineObject("flax.core/sdk_gestures#type:MultiDragPointerState", ["gestureSettings","initialPosition","kind","pendingDelta"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:MultiDragPointerState", "object", {"resolve":_flaxMemberParameters0,"checkForResolutionAfterMove":_flaxMemberParameters1,"accepted":_flaxMemberParameters2,"rejected":_flaxMemberParameters1,"dispose":_flaxMemberParameters1}, {}), []);
const _MultiDragPointerStateProxy = {type: "flax.core/sdk_gestures#type:MultiDragPointerState", parameters: _flaxMemberParameters3, constructors: {"": _flaxMemberParameters3}, methods: {"resolve":_flaxMemberParameters0,"checkForResolutionAfterMove":_flaxMemberParameters1,"accepted":_flaxMemberParameters2,"rejected":_flaxMemberParameters1,"dispose":_flaxMemberParameters1}, getters: ["gestureSettings","initialPosition","kind","pendingDelta"], setters: [], contextMembers: [], superMembers: ["get:gestureSettings","get:initialPosition","get:kind","get:pendingDelta","resolve","checkForResolutionAfterMove","rejected","dispose"]} as const;
export interface MultiDragPointerState {
readonly [_flaxDartTypeValue]: MultiDragPointerState;

resolve(disposition: upstream3.GestureDisposition): void;
checkForResolutionAfterMove(): void;
rejected(): void;
dispose(): void;
get gestureSettings(): upstream2.DeviceGestureSettings | null;
get initialPosition(): upstream0.Offset;
get kind(): upstream1.PointerDeviceKind;
get pendingDelta(): upstream0.Offset | null;
}
export abstract class MultiDragPointerState extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MultiDragPointerState>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MultiDragPointerState;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:MultiDragPointerState", readonly [], false];
constructor(initialPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, kind: upstream1.PointerDeviceKind, gestureSettings: Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [] }> | null) { super(_MultiDragPointerStateProxy, Array.from(arguments)); }
abstract accepted(starter: ((position: upstream0.Offset) => Readonly<{ "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [] }> | null)): void;
}
_flaxDefineProxyBase(MultiDragPointerState.prototype, _MultiDragPointerStateProxy);
export namespace MultiDragPointerState { export function implement(args: [initialPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, kind: upstream1.PointerDeviceKind, gestureSettings: Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [] }> | null], implementation: {accepted: ((starter: ((position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => upstream4.Drag | null)) => void)}): MultiDragPointerState {
return constructProxy(_MultiDragPointerStateProxy, args, implementation) as MultiDragPointerState; } }
_flaxBindInstanceType<MultiDragPointerState, typeof MultiDragPointerState>(MultiDragPointerState, "flax.core/sdk_gestures#type:MultiDragPointerState", ["dart:core::Object"]);
