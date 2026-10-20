// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { _flaxMemberParameters1, _flaxMemberParameters26 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ChangeNotifier extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __ChangeNotifier: unique symbol;
readonly [_flaxDartTypeValue]: ChangeNotifier;

readonly hasListeners: boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
}
defineObject("flax.core/sdk_foundation#type:ChangeNotifier", ["hasListeners"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:ChangeNotifier", "object", {"dispose":_flaxMemberParameters1}, {}), ["removeListener"], undefined, "flax.core/flutter#type:Listenable");
export function _ChangeNotifierFactory(): ChangeNotifier {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:ChangeNotifier", "", _flaxMemberParameters1, [], {}) as ChangeNotifier;
}
const _ChangeNotifierProxy = {type: "flax.core/sdk_foundation#type:ChangeNotifier", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"addListener":_flaxMemberParameters26,"removeListener":_flaxMemberParameters26,"dispose":_flaxMemberParameters1}, getters: ["hasListeners"], setters: [], contextMembers: [], superMembers: ["get:hasListeners","addListener","removeListener","dispose"]} as const;
export interface _ChangeNotifierNative extends ChangeNotifier {
readonly [_flaxDartTypeValue]: _ChangeNotifierNative;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
get hasListeners(): boolean;
}
export abstract class _ChangeNotifierNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChangeNotifier>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ChangeNotifier;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ChangeNotifier", readonly [], false];
constructor() { super(_ChangeNotifierProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ChangeNotifierNative.prototype, _ChangeNotifierProxy);
export namespace _ChangeNotifierFactory { export function implement(args: [], implementation: {}): ChangeNotifier {
return constructProxy(_ChangeNotifierProxy, args, implementation) as ChangeNotifier; } }
const _ChangeNotifierBinding = _flaxProxyFactory(_ChangeNotifierFactory, _ChangeNotifierNative) as unknown as typeof _ChangeNotifierFactory & (new() => _ChangeNotifierNative);
export namespace _ChangeNotifierFactory { export function debugAssertNotDisposed(notifier: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:ChangeNotifier.debugAssertNotDisposed", [notifier]);
return _flaxResult as boolean;
} }
export namespace _ChangeNotifierFactory { export function maybeDispatchObjectCreation(object: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:ChangeNotifier.maybeDispatchObjectCreation", [object]);
} }
export const ChangeNotifier: typeof _ChangeNotifierBinding & _FlaxInstanceType<ChangeNotifier> & _FlaxDartType<ChangeNotifier, readonly ["class", "flax.core/sdk_foundation#type:ChangeNotifier", readonly [], false]> = _flaxBindInstanceType<ChangeNotifier, typeof _ChangeNotifierBinding>(_ChangeNotifierBinding, "flax.core/sdk_foundation#type:ChangeNotifier", ["dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _ChangeNotifierBinding & _FlaxInstanceType<ChangeNotifier> & _FlaxDartType<ChangeNotifier, readonly ["class", "flax.core/sdk_foundation#type:ChangeNotifier", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
