// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { _flaxMemberParameters49, _flaxMemberParameters50, _flaxMemberParameters51, _flaxMemberParameters1, _flaxMemberParameters52 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CustomClipper<T extends unknown | null = unknown | null> extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __CustomClipper: unique symbol;
readonly [_flaxDartTypeValue]: CustomClipper<T>;

}
defineObject("flax.core/sdk_rendering#type:CustomClipper", [], [], _flaxBindingMethods("flax.core/sdk_rendering#type:CustomClipper", "object", {"addListener":_flaxMemberParameters49,"removeListener":_flaxMemberParameters49,"getClip":_flaxMemberParameters50,"getApproximateClipRect":_flaxMemberParameters50,"shouldReclip":_flaxMemberParameters51,"toString":_flaxMemberParameters1}, {}), ["removeListener"]);
const _CustomClipperProxy = {type: "flax.core/sdk_rendering#type:CustomClipper", parameters: _flaxMemberParameters52, constructors: {"": _flaxMemberParameters52}, methods: {"addListener":_flaxMemberParameters49,"removeListener":_flaxMemberParameters49,"getClip":_flaxMemberParameters50,"getApproximateClipRect":_flaxMemberParameters50,"shouldReclip":_flaxMemberParameters51,"toString":_flaxMemberParameters1}, getters: [], setters: [], contextMembers: [], superMembers: ["addListener","removeListener","getApproximateClipRect","toString"]} as const;
export interface CustomClipper<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: CustomClipper<T>;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
getApproximateClipRect(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream2.Rect;
toString(): string;
}
export abstract class CustomClipper<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CustomClipper<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CustomClipper<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:CustomClipper", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options?: {reclip?: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}) { super(_CustomClipperProxy, Array.from(arguments)); }
abstract getClip(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): T;
abstract shouldReclip(oldClipper: Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper": readonly [T] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
}
_flaxDefineProxyBase(CustomClipper.prototype, _CustomClipperProxy);
export namespace CustomClipper { export function implement<T extends unknown | null = unknown | null>(args: [options?: {reclip?: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}], implementation: {getClip: ((size: upstream5.Size) => (T | DartInput<T>)); shouldReclip: ((oldClipper: CustomClipper<T>) => boolean)}): CustomClipper<T> {
return constructProxy(_CustomClipperProxy, args, implementation) as CustomClipper<T>; } }
_flaxBindInstanceType<CustomClipper<unknown | null>, typeof CustomClipper>(CustomClipper, "flax.core/sdk_rendering#type:CustomClipper", ["flax.core/flutter#type:Listenable","dart:core::Object"]);
_flaxDefineDartTypes(CustomClipper, "flax.core/sdk_rendering#type:CustomClipper", {...{"category":"object","constructors":{}}, proxy: _CustomClipperProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "addListener" | "removeListener" | "getClip" | "getApproximateClipRect" | "shouldReclip" | "toString" | "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options?: {reclip?: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}) => CustomClipper<_Selected0>) & {readonly prototype: CustomClipper<_Selected0>;implement(args: readonly [options?: {reclip?: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}], implementation: Partial<CustomClipper<_Selected0>>): CustomClipper<_Selected0>;} & _FlaxInstanceType<CustomClipper<_Selected0>> & _FlaxDartType<CustomClipper<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options?: {reclip?: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}) => CustomClipper<_Selected0>) & {readonly prototype: CustomClipper<_Selected0>;implement(args: readonly [options?: {reclip?: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}], implementation: Partial<CustomClipper<_Selected0>>): CustomClipper<_Selected0>;} & _FlaxInstanceType<CustomClipper<_Selected0>> & _FlaxDartType<CustomClipper<_Selected0>> : never : never; }
