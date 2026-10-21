// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ChildBackButtonDispatcher';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ChildBackButtonDispatcher';
import { _flaxMemberParameters35, _flaxMemberParameters2, _flaxMemberParameters36, _flaxMemberParameters37 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BackButtonDispatcher extends Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }> { readonly __BackButtonDispatcher: unique symbol;
readonly [_flaxDartTypeValue]: BackButtonDispatcher;

}
defineObject("flax.core/sdk_widgets#type:BackButtonDispatcher", ["hasCallbacks"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:BackButtonDispatcher", "object", {"invokeCallback":_flaxMemberParameters35,"createChildBackButtonDispatcher":_flaxMemberParameters2,"takePriority":_flaxMemberParameters2,"deferTo":_flaxMemberParameters36,"forget":_flaxMemberParameters36,"addCallback":_flaxMemberParameters37,"removeCallback":_flaxMemberParameters37}, {}), []);
const _BackButtonDispatcherProxy = {type: "flax.core/sdk_widgets#type:BackButtonDispatcher", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"invokeCallback":_flaxMemberParameters35,"createChildBackButtonDispatcher":_flaxMemberParameters2,"takePriority":_flaxMemberParameters2,"deferTo":_flaxMemberParameters36,"forget":_flaxMemberParameters36,"addCallback":_flaxMemberParameters37,"removeCallback":_flaxMemberParameters37}, getters: ["hasCallbacks"], setters: [], contextMembers: [], superMembers: ["get:hasCallbacks","invokeCallback","createChildBackButtonDispatcher","takePriority","deferTo","forget","addCallback","removeCallback"]} as const;
export interface BackButtonDispatcher {
readonly [_flaxDartTypeValue]: BackButtonDispatcher;

invokeCallback(defaultValue: Promise<boolean>): Promise<boolean>;
createChildBackButtonDispatcher(): upstream0.ChildBackButtonDispatcher;
takePriority(): void;
deferTo(child: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>): void;
forget(child: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>): void;
addCallback(callback: (() => Promise<boolean>)): void;
removeCallback(callback: (() => Promise<boolean>)): void;
get hasCallbacks(): boolean;
}
export abstract class BackButtonDispatcher extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BackButtonDispatcher>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BackButtonDispatcher;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:BackButtonDispatcher", readonly [], false];
constructor() { super(_BackButtonDispatcherProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(BackButtonDispatcher.prototype, _BackButtonDispatcherProxy);
export namespace BackButtonDispatcher { export function implement(args: [], implementation: {}): BackButtonDispatcher {
return constructProxy(_BackButtonDispatcherProxy, args, implementation) as BackButtonDispatcher; } }
_flaxBindInstanceType<BackButtonDispatcher, typeof BackButtonDispatcher>(BackButtonDispatcher, "flax.core/sdk_widgets#type:BackButtonDispatcher", ["package:flutter/src/widgets/router.dart::_CallbackHookProvider","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasCallbacks" | "invokeCallback" | "createChildBackButtonDispatcher" | "takePriority" | "deferTo" | "forget" | "addCallback" | "removeCallback" | "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher" | "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider";
