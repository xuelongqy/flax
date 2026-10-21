// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_RestorationBucket';
import '@flax/flutter/services/_bindings/sdk_services_RestorationBucket';
import { _flaxMemberParameters0, _flaxMemberParameters92, _flaxMemberParameters93, _flaxMemberParameters8 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorationManager extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/services/restoration.dart::RestorationManager": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorationManager: unique symbol;
readonly [_flaxDartTypeValue]: RestorationManager;

readonly hasListeners: boolean;
readonly rootBucket: Promise<upstream2.RestorationBucket | null>;
readonly isReplacing: boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
initChannels(): void;
handleRestorationUpdateFromEngine(options: {data: globalThis.Uint8Array | null; enabled: boolean}): void;
sendToEngine(encodedData: globalThis.Uint8Array): Promise<void>;
flushData(): void;
}
defineObject("flax.core/sdk_services#type:RestorationManager", ["hasListeners","rootBucket","isReplacing"], [], _flaxBindingMethods("flax.core/sdk_services#type:RestorationManager", "object", {"initChannels":_flaxMemberParameters0,"handleRestorationUpdateFromEngine":_flaxMemberParameters92,"sendToEngine":_flaxMemberParameters93,"flushData":_flaxMemberParameters0}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _RestorationManagerFactory(): RestorationManager {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:RestorationManager", "", _flaxMemberParameters0, [], {}) as RestorationManager;
}
const _RestorationManagerProxy = {type: "flax.core/sdk_services#type:RestorationManager", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"addListener":_flaxMemberParameters8,"removeListener":_flaxMemberParameters8,"dispose":_flaxMemberParameters0,"initChannels":_flaxMemberParameters0,"handleRestorationUpdateFromEngine":_flaxMemberParameters92,"sendToEngine":_flaxMemberParameters93,"flushData":_flaxMemberParameters0}, getters: ["rootBucket","isReplacing","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:rootBucket","get:isReplacing","get:hasListeners","addListener","removeListener","dispose","initChannels","handleRestorationUpdateFromEngine","sendToEngine","flushData"]} as const;
export interface _RestorationManagerNative extends RestorationManager {
readonly [_flaxDartTypeValue]: _RestorationManagerNative;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
initChannels(): void;
handleRestorationUpdateFromEngine(options: {enabled: boolean; data: globalThis.Uint8Array | null}): void;
sendToEngine(encodedData: globalThis.Uint8Array): Promise<void>;
flushData(): void;
get rootBucket(): Promise<upstream2.RestorationBucket | null>;
get isReplacing(): boolean;
get hasListeners(): boolean;
}
export abstract class _RestorationManagerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorationManager>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorationManager;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RestorationManager", readonly [], false];
constructor() { super(_RestorationManagerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RestorationManagerNative.prototype, _RestorationManagerProxy);
export namespace _RestorationManagerFactory { export function implement(args: [], implementation: {}): RestorationManager {
return constructProxy(_RestorationManagerProxy, args, implementation) as RestorationManager; } }
const _RestorationManagerBinding = _flaxProxyFactory(_RestorationManagerFactory, _RestorationManagerNative) as unknown as typeof _RestorationManagerFactory & (new() => _RestorationManagerNative);
export const RestorationManager: typeof _RestorationManagerBinding & _FlaxInstanceType<RestorationManager> & _FlaxDartType<RestorationManager, readonly ["class", "flax.core/sdk_services#type:RestorationManager", readonly [], false]> = _flaxBindInstanceType<RestorationManager, typeof _RestorationManagerBinding>(_RestorationManagerBinding, "flax.core/sdk_services#type:RestorationManager", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _RestorationManagerBinding & _FlaxInstanceType<RestorationManager> & _FlaxDartType<RestorationManager, readonly ["class", "flax.core/sdk_services#type:RestorationManager", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "rootBucket" | "isReplacing" | "addListener" | "removeListener" | "dispose" | "initChannels" | "handleRestorationUpdateFromEngine" | "sendToEngine" | "flushData" | "__flaxBound:package:flutter/src/services/restoration.dart::RestorationManager" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
