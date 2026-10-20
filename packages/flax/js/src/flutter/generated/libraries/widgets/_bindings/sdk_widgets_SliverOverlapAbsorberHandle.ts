// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { _flaxMemberParameters2, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverOverlapAbsorberHandle extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/nested_scroll_view.dart::SliverOverlapAbsorberHandle": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __SliverOverlapAbsorberHandle: unique symbol;
readonly [_flaxDartTypeValue]: SliverOverlapAbsorberHandle;

readonly hasListeners: boolean;
readonly layoutExtent: number | null;
readonly scrollExtent: number | null;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:SliverOverlapAbsorberHandle", ["hasListeners","layoutExtent","scrollExtent"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SliverOverlapAbsorberHandle", "object", {"toString":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _SliverOverlapAbsorberHandleFactory(): SliverOverlapAbsorberHandle {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SliverOverlapAbsorberHandle", "", _flaxMemberParameters2, [], {}) as SliverOverlapAbsorberHandle;
}
const _SliverOverlapAbsorberHandleProxy = {type: "flax.core/sdk_widgets#type:SliverOverlapAbsorberHandle", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, getters: ["layoutExtent","scrollExtent","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:layoutExtent","get:scrollExtent","get:hasListeners","addListener","removeListener","dispose","toString"]} as const;
export interface _SliverOverlapAbsorberHandleNative extends SliverOverlapAbsorberHandle {
readonly [_flaxDartTypeValue]: _SliverOverlapAbsorberHandleNative;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
toString(): string;
get layoutExtent(): number | null;
get scrollExtent(): number | null;
get hasListeners(): boolean;
}
export abstract class _SliverOverlapAbsorberHandleNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverOverlapAbsorberHandle>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverOverlapAbsorberHandle;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SliverOverlapAbsorberHandle", readonly [], false];
constructor() { super(_SliverOverlapAbsorberHandleProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SliverOverlapAbsorberHandleNative.prototype, _SliverOverlapAbsorberHandleProxy);
export namespace _SliverOverlapAbsorberHandleFactory { export function implement(args: [], implementation: {}): SliverOverlapAbsorberHandle {
return constructProxy(_SliverOverlapAbsorberHandleProxy, args, implementation) as SliverOverlapAbsorberHandle; } }
const _SliverOverlapAbsorberHandleBinding = _flaxProxyFactory(_SliverOverlapAbsorberHandleFactory, _SliverOverlapAbsorberHandleNative) as unknown as typeof _SliverOverlapAbsorberHandleFactory & (new() => _SliverOverlapAbsorberHandleNative);
export const SliverOverlapAbsorberHandle: typeof _SliverOverlapAbsorberHandleBinding & _FlaxInstanceType<SliverOverlapAbsorberHandle> & _FlaxDartType<SliverOverlapAbsorberHandle, readonly ["class", "flax.core/sdk_widgets#type:SliverOverlapAbsorberHandle", readonly [], false]> = _flaxBindInstanceType<SliverOverlapAbsorberHandle, typeof _SliverOverlapAbsorberHandleBinding>(_SliverOverlapAbsorberHandleBinding, "flax.core/sdk_widgets#type:SliverOverlapAbsorberHandle", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _SliverOverlapAbsorberHandleBinding & _FlaxInstanceType<SliverOverlapAbsorberHandle> & _FlaxDartType<SliverOverlapAbsorberHandle, readonly ["class", "flax.core/sdk_widgets#type:SliverOverlapAbsorberHandle", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "layoutExtent" | "scrollExtent" | "addListener" | "removeListener" | "dispose" | "toString" | "__flaxBound:package:flutter/src/widgets/nested_scroll_view.dart::SliverOverlapAbsorberHandle" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
