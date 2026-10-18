// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverOverlapAbsorberHandle extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/nested_scroll_view.dart::SliverOverlapAbsorberHandle": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __SliverOverlapAbsorberHandle: unique symbol;
readonly [_flaxDartTypeValue]: SliverOverlapAbsorberHandle;

}
defineObject("flax.core/sdk_widgets#type:SliverOverlapAbsorberHandle", ["hasListeners","layoutExtent","scrollExtent"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SliverOverlapAbsorberHandle", "object", {"toString":_flaxMemberParameters0}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _SliverOverlapAbsorberHandleProxy = {type: "flax.core/sdk_widgets#type:SliverOverlapAbsorberHandle", parameters: [], constructors: {"":[]}, methods: {"addListener":_flaxMemberParameters1,"removeListener":_flaxMemberParameters1,"dispose":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, getters: ["layoutExtent","scrollExtent","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:layoutExtent","get:scrollExtent","get:hasListeners","addListener","removeListener","dispose","toString"]} as const;
export interface SliverOverlapAbsorberHandle {
readonly [_flaxDartTypeValue]: SliverOverlapAbsorberHandle;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
toString(): string;
get layoutExtent(): number | null;
get scrollExtent(): number | null;
get hasListeners(): boolean;
}
export abstract class SliverOverlapAbsorberHandle extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverOverlapAbsorberHandle>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverOverlapAbsorberHandle;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SliverOverlapAbsorberHandle", readonly [], false];
constructor() { super(_SliverOverlapAbsorberHandleProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SliverOverlapAbsorberHandle.prototype, _SliverOverlapAbsorberHandleProxy);
export namespace SliverOverlapAbsorberHandle { export function implement(args: [], implementation: {}): SliverOverlapAbsorberHandle {
return constructProxy(_SliverOverlapAbsorberHandleProxy, args, implementation) as SliverOverlapAbsorberHandle; } }
_flaxBindInstanceType<SliverOverlapAbsorberHandle, typeof SliverOverlapAbsorberHandle>(SliverOverlapAbsorberHandle, "flax.core/sdk_widgets#type:SliverOverlapAbsorberHandle", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "layoutExtent" | "scrollExtent" | "addListener" | "removeListener" | "dispose" | "toString" | "__flaxBound:package:flutter/src/widgets/nested_scroll_view.dart::SliverOverlapAbsorberHandle" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
