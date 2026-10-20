// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaEntry';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import { _flaxMemberParameters33, _flaxMemberParameters8, _flaxMemberParameters7 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GestureArenaManager extends Readonly<{ "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaManager": readonly [] }> { readonly __GestureArenaManager: unique symbol;
readonly [_flaxDartTypeValue]: GestureArenaManager;

add(pointer: number, member: Readonly<{ "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [] }>): upstream0.GestureArenaEntry;
close(pointer: number): void;
sweep(pointer: number): void;
hold(pointer: number): void;
release(pointer: number): void;
}
defineObject("flax.core/sdk_gestures#type:GestureArenaManager", [], [], _flaxBindingMethods("flax.core/sdk_gestures#type:GestureArenaManager", "object", {"add":_flaxMemberParameters33,"close":_flaxMemberParameters8,"sweep":_flaxMemberParameters8,"hold":_flaxMemberParameters8,"release":_flaxMemberParameters8}, {}), []);
export function _GestureArenaManagerFactory(): GestureArenaManager {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:GestureArenaManager", "", [], [], {}) as GestureArenaManager;
}
const _GestureArenaManagerProxy = {type: "flax.core/sdk_gestures#type:GestureArenaManager", parameters: _flaxMemberParameters7, constructors: {"": _flaxMemberParameters7}, methods: {"add":_flaxMemberParameters33,"close":_flaxMemberParameters8,"sweep":_flaxMemberParameters8,"hold":_flaxMemberParameters8,"release":_flaxMemberParameters8}, getters: [], setters: [], contextMembers: [], superMembers: ["add","close","sweep","hold","release"]} as const;
export interface _GestureArenaManagerNative extends GestureArenaManager {
readonly [_flaxDartTypeValue]: _GestureArenaManagerNative;

add(pointer: number, member: Readonly<{ "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [] }>): upstream0.GestureArenaEntry;
close(pointer: number): void;
sweep(pointer: number): void;
hold(pointer: number): void;
release(pointer: number): void;
}
export abstract class _GestureArenaManagerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GestureArenaManager>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GestureArenaManager;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:GestureArenaManager", readonly [], false];
constructor() { super(_GestureArenaManagerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_GestureArenaManagerNative.prototype, _GestureArenaManagerProxy);
export namespace _GestureArenaManagerFactory { export function implement(args: [], implementation: {}): GestureArenaManager {
return constructProxy(_GestureArenaManagerProxy, args, implementation) as GestureArenaManager; } }
const _GestureArenaManagerBinding = _flaxProxyFactory(_GestureArenaManagerFactory, _GestureArenaManagerNative) as unknown as typeof _GestureArenaManagerFactory & (new() => _GestureArenaManagerNative);
export const GestureArenaManager: typeof _GestureArenaManagerBinding & _FlaxInstanceType<GestureArenaManager> & _FlaxDartType<GestureArenaManager, readonly ["class", "flax.core/sdk_gestures#type:GestureArenaManager", readonly [], false]> = _flaxBindInstanceType<GestureArenaManager, typeof _GestureArenaManagerBinding>(_GestureArenaManagerBinding, "flax.core/sdk_gestures#type:GestureArenaManager", ["dart:core::Object"]) as typeof _GestureArenaManagerBinding & _FlaxInstanceType<GestureArenaManager> & _FlaxDartType<GestureArenaManager, readonly ["class", "flax.core/sdk_gestures#type:GestureArenaManager", readonly [], false]>;
