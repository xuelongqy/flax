// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawMenuOverlayInfo extends Readonly<{ "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::RawMenuOverlayInfo": readonly [] }> { readonly __RawMenuOverlayInfo: unique symbol;
readonly [_flaxDartTypeValue]: RawMenuOverlayInfo;

}
defineObject("flax.core/sdk_widgets#type:RawMenuOverlayInfo", ["anchorRect","overlaySize","position","tapRegionGroupId"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RawMenuOverlayInfo", "object", {}, {}), []);
const _RawMenuOverlayInfoProxy = {type: "flax.core/sdk_widgets#type:RawMenuOverlayInfo", parameters: [{"name":"anchorRect","required":true,"positional":false},{"name":"overlaySize","required":true,"positional":false},{"name":"tapRegionGroupId","required":true,"positional":false},{"name":"position","required":false,"positional":false}], constructors: {"":[{"name":"anchorRect","required":true,"positional":false},{"name":"overlaySize","required":true,"positional":false},{"name":"tapRegionGroupId","required":true,"positional":false},{"name":"position","required":false,"positional":false}]}, methods: {}, getters: ["anchorRect","overlaySize","position","tapRegionGroupId"], setters: [], contextMembers: [], superMembers: ["get:anchorRect","get:overlaySize","get:position","get:tapRegionGroupId"]} as const;
export interface RawMenuOverlayInfo {
readonly [_flaxDartTypeValue]: RawMenuOverlayInfo;

get anchorRect(): upstream0.Rect;
get overlaySize(): upstream1.Size;
get position(): upstream2.Offset | null;
get tapRegionGroupId(): {};
}
export abstract class RawMenuOverlayInfo extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawMenuOverlayInfo>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RawMenuOverlayInfo;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RawMenuOverlayInfo", readonly [], false];
constructor(options: {anchorRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; overlaySize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; tapRegionGroupId: {}; position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}) { super(_RawMenuOverlayInfoProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RawMenuOverlayInfo.prototype, _RawMenuOverlayInfoProxy);
export namespace RawMenuOverlayInfo { export function implement(args: [options: {anchorRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; overlaySize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; tapRegionGroupId: {}; position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}], implementation: {}): RawMenuOverlayInfo {
return constructProxy(_RawMenuOverlayInfoProxy, args, implementation) as RawMenuOverlayInfo; } }
_flaxBindInstanceType<RawMenuOverlayInfo, typeof RawMenuOverlayInfo>(RawMenuOverlayInfo, "flax.core/sdk_widgets#type:RawMenuOverlayInfo", ["dart:core::Object"]);
