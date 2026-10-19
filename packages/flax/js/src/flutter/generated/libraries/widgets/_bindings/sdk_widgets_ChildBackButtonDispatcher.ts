// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
const _flaxMemberParameters0 = [{"name":"defaultValue","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"parent","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"child","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"callback","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ChildBackButtonDispatcher extends Omit<upstream0.BackButtonDispatcher, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }> { readonly __ChildBackButtonDispatcher: unique symbol;
readonly [_flaxDartTypeValue]: ChildBackButtonDispatcher;

}
defineObject("flax.core/sdk_widgets#type:ChildBackButtonDispatcher", ["hasCallbacks","parent"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ChildBackButtonDispatcher", "object", {"notifiedByParent":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:BackButtonDispatcher");
const _ChildBackButtonDispatcherProxy = {type: "flax.core/sdk_widgets#type:ChildBackButtonDispatcher", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"invokeCallback":_flaxMemberParameters0,"createChildBackButtonDispatcher":_flaxMemberParameters2,"takePriority":_flaxMemberParameters2,"deferTo":_flaxMemberParameters3,"forget":_flaxMemberParameters3,"addCallback":_flaxMemberParameters4,"removeCallback":_flaxMemberParameters4,"notifiedByParent":_flaxMemberParameters0}, getters: ["parent","hasCallbacks"], setters: [], contextMembers: [], superMembers: ["get:parent","get:hasCallbacks","invokeCallback","createChildBackButtonDispatcher","takePriority","deferTo","forget","addCallback","removeCallback","notifiedByParent"]} as const;
export interface ChildBackButtonDispatcher {
readonly [_flaxDartTypeValue]: ChildBackButtonDispatcher;

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
export abstract class ChildBackButtonDispatcher extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChildBackButtonDispatcher>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ChildBackButtonDispatcher;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ChildBackButtonDispatcher", readonly [], false];
constructor(parent: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>) { super(_ChildBackButtonDispatcherProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ChildBackButtonDispatcher.prototype, _ChildBackButtonDispatcherProxy);
export namespace ChildBackButtonDispatcher { export function implement(args: [parent: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>], implementation: {}): ChildBackButtonDispatcher {
return constructProxy(_ChildBackButtonDispatcherProxy, args, implementation) as ChildBackButtonDispatcher; } }
_flaxBindInstanceType<ChildBackButtonDispatcher, typeof ChildBackButtonDispatcher>(ChildBackButtonDispatcher, "flax.core/sdk_widgets#type:ChildBackButtonDispatcher", ["flax.core/sdk_widgets#type:BackButtonDispatcher","package:flutter/src/widgets/router.dart::_CallbackHookProvider","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasCallbacks" | "parent" | "invokeCallback" | "createChildBackButtonDispatcher" | "takePriority" | "deferTo" | "forget" | "addCallback" | "removeCallback" | "notifiedByParent" | "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher" | "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher" | "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider";
