// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import { _flaxMemberParameters30, _flaxMemberParameters44, _flaxMemberParameters2, _flaxMemberParameters31, _flaxMemberParameters32 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ChildBackButtonDispatcher extends Omit<upstream0.BackButtonDispatcher, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }> { readonly __ChildBackButtonDispatcher: unique symbol;
readonly [_flaxDartTypeValue]: ChildBackButtonDispatcher;

readonly hasCallbacks: boolean;
readonly parent: upstream0.BackButtonDispatcher;
invokeCallback(defaultValue: Promise<boolean>): Promise<boolean>;
createChildBackButtonDispatcher(): ChildBackButtonDispatcher;
takePriority(): void;
deferTo(child: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>): void;
forget(child: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>): void;
addCallback(callback: (() => Promise<boolean>)): void;
removeCallback(callback: (() => Promise<boolean>)): void;
notifiedByParent(defaultValue: Promise<boolean>): Promise<boolean>;
}
defineObject("flax.core/sdk_widgets#type:ChildBackButtonDispatcher", ["hasCallbacks","parent"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ChildBackButtonDispatcher", "object", {"notifiedByParent":_flaxMemberParameters30}, {}), [], undefined, "flax.core/sdk_widgets#type:BackButtonDispatcher");
export function _ChildBackButtonDispatcherFactory(parent: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>): ChildBackButtonDispatcher {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ChildBackButtonDispatcher", "", [{"name":"parent","required":true,"positional":true}], [parent], {}) as ChildBackButtonDispatcher;
}
const _ChildBackButtonDispatcherProxy = {type: "flax.core/sdk_widgets#type:ChildBackButtonDispatcher", parameters: _flaxMemberParameters44, constructors: {"": _flaxMemberParameters44}, methods: {"invokeCallback":_flaxMemberParameters30,"createChildBackButtonDispatcher":_flaxMemberParameters2,"takePriority":_flaxMemberParameters2,"deferTo":_flaxMemberParameters31,"forget":_flaxMemberParameters31,"addCallback":_flaxMemberParameters32,"removeCallback":_flaxMemberParameters32,"notifiedByParent":_flaxMemberParameters30}, getters: ["parent","hasCallbacks"], setters: [], contextMembers: [], superMembers: ["get:parent","get:hasCallbacks","invokeCallback","createChildBackButtonDispatcher","takePriority","deferTo","forget","addCallback","removeCallback","notifiedByParent"]} as const;
export interface _ChildBackButtonDispatcherNative extends ChildBackButtonDispatcher {
readonly [_flaxDartTypeValue]: _ChildBackButtonDispatcherNative;

invokeCallback(defaultValue: Promise<boolean>): Promise<boolean>;
createChildBackButtonDispatcher(): ChildBackButtonDispatcher;
takePriority(): void;
deferTo(child: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>): void;
forget(child: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>): void;
addCallback(callback: (() => Promise<boolean>)): void;
removeCallback(callback: (() => Promise<boolean>)): void;
notifiedByParent(defaultValue: Promise<boolean>): Promise<boolean>;
get parent(): upstream0.BackButtonDispatcher;
get hasCallbacks(): boolean;
}
export abstract class _ChildBackButtonDispatcherNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChildBackButtonDispatcher>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ChildBackButtonDispatcher;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ChildBackButtonDispatcher", readonly [], false];
constructor(parent: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>) { super(_ChildBackButtonDispatcherProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ChildBackButtonDispatcherNative.prototype, _ChildBackButtonDispatcherProxy);
export namespace _ChildBackButtonDispatcherFactory { export function implement(args: [parent: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>], implementation: {}): ChildBackButtonDispatcher {
return constructProxy(_ChildBackButtonDispatcherProxy, args, implementation) as ChildBackButtonDispatcher; } }
const _ChildBackButtonDispatcherBinding = _flaxProxyFactory(_ChildBackButtonDispatcherFactory, _ChildBackButtonDispatcherNative) as unknown as typeof _ChildBackButtonDispatcherFactory & (new(parent: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>) => _ChildBackButtonDispatcherNative);
export const ChildBackButtonDispatcher: typeof _ChildBackButtonDispatcherBinding & _FlaxInstanceType<ChildBackButtonDispatcher> & _FlaxDartType<ChildBackButtonDispatcher, readonly ["class", "flax.core/sdk_widgets#type:ChildBackButtonDispatcher", readonly [], false]> = _flaxBindInstanceType<ChildBackButtonDispatcher, typeof _ChildBackButtonDispatcherBinding>(_ChildBackButtonDispatcherBinding, "flax.core/sdk_widgets#type:ChildBackButtonDispatcher", ["flax.core/sdk_widgets#type:BackButtonDispatcher","package:flutter/src/widgets/router.dart::_CallbackHookProvider","dart:core::Object"]) as typeof _ChildBackButtonDispatcherBinding & _FlaxInstanceType<ChildBackButtonDispatcher> & _FlaxDartType<ChildBackButtonDispatcher, readonly ["class", "flax.core/sdk_widgets#type:ChildBackButtonDispatcher", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasCallbacks" | "parent" | "invokeCallback" | "createChildBackButtonDispatcher" | "takePriority" | "deferTo" | "forget" | "addCallback" | "removeCallback" | "notifiedByParent" | "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher" | "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher" | "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider";
