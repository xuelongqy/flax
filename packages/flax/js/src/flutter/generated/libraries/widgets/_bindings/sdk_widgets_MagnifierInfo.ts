// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { _flaxMemberParameters2, _flaxMemberParameters223 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MagnifierInfo extends Readonly<{ "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierInfo": readonly [] }> { readonly __MagnifierInfo: unique symbol;
readonly [_flaxDartTypeValue]: MagnifierInfo;

readonly globalGesturePosition: upstream0.Offset;
readonly currentLineBoundaries: upstream1.Rect;
readonly caretRect: upstream1.Rect;
readonly fieldBounds: upstream1.Rect;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:MagnifierInfo", ["globalGesturePosition","currentLineBoundaries","caretRect","fieldBounds"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:MagnifierInfo", "object", {"toString":_flaxMemberParameters2}, {}), []);
export function _MagnifierInfoFactory(options: { globalGesturePosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; caretRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; fieldBounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; currentLineBoundaries: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> }): MagnifierInfo {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:MagnifierInfo", "", [{"name":"globalGesturePosition","required":true},{"name":"caretRect","required":true},{"name":"fieldBounds","required":true},{"name":"currentLineBoundaries","required":true}], [], options) as MagnifierInfo;
}
const _MagnifierInfoProxy = {type: "flax.core/sdk_widgets#type:MagnifierInfo", parameters: _flaxMemberParameters223, constructors: {"": _flaxMemberParameters223}, methods: {"toString":_flaxMemberParameters2}, getters: ["globalGesturePosition","currentLineBoundaries","caretRect","fieldBounds"], setters: [], contextMembers: [], superMembers: ["get:globalGesturePosition","get:currentLineBoundaries","get:caretRect","get:fieldBounds","toString"]} as const;
export interface _MagnifierInfoNative extends MagnifierInfo {
readonly [_flaxDartTypeValue]: _MagnifierInfoNative;

toString(): string;
get globalGesturePosition(): upstream0.Offset;
get currentLineBoundaries(): upstream1.Rect;
get caretRect(): upstream1.Rect;
get fieldBounds(): upstream1.Rect;
}
export abstract class _MagnifierInfoNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MagnifierInfo>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MagnifierInfo;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:MagnifierInfo", readonly [], false];
constructor(options: {globalGesturePosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; caretRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; fieldBounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; currentLineBoundaries: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>}) { super(_MagnifierInfoProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MagnifierInfoNative.prototype, _MagnifierInfoProxy);
export namespace _MagnifierInfoFactory { export function implement(args: [options: {globalGesturePosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; caretRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; fieldBounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; currentLineBoundaries: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>}], implementation: {}): MagnifierInfo {
return constructProxy(_MagnifierInfoProxy, args, implementation) as MagnifierInfo; } }
const _MagnifierInfoBinding = _flaxProxyFactory(_MagnifierInfoFactory, _MagnifierInfoNative) as unknown as typeof _MagnifierInfoFactory & (new(options: {globalGesturePosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; caretRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; fieldBounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; currentLineBoundaries: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>}) => _MagnifierInfoNative);
export namespace _MagnifierInfoFactory { export declare const empty: MagnifierInfo; }
_flaxDefineStaticGetters(_MagnifierInfoFactory, "flax.core/sdk_widgets#read:MagnifierInfo.", ["empty"]);
export const MagnifierInfo: typeof _MagnifierInfoBinding & _FlaxInstanceType<MagnifierInfo> & _FlaxDartType<MagnifierInfo, readonly ["class", "flax.core/sdk_widgets#type:MagnifierInfo", readonly [], false]> = _flaxBindInstanceType<MagnifierInfo, typeof _MagnifierInfoBinding>(_MagnifierInfoBinding, "flax.core/sdk_widgets#type:MagnifierInfo", ["dart:core::Object"]) as typeof _MagnifierInfoBinding & _FlaxInstanceType<MagnifierInfo> & _FlaxDartType<MagnifierInfo, readonly ["class", "flax.core/sdk_widgets#type:MagnifierInfo", readonly [], false]>;
