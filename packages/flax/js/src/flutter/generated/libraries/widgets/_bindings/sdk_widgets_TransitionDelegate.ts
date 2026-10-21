// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteTransitionRecord';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteTransitionRecord';
import { _flaxMemberParameters79, _flaxMemberParameters2, _flaxMemberParameters477 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TransitionDelegate<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::TransitionDelegate": readonly [T] }> { readonly __TransitionDelegate: unique symbol;
readonly [_flaxDartTypeValue]: TransitionDelegate<T>;

}
defineObject("flax.core/sdk_widgets#type:TransitionDelegate", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TransitionDelegate", "object", {"resolve":_flaxMemberParameters79}, {}), []);
const _TransitionDelegateProxy = {type: "flax.core/sdk_widgets#type:TransitionDelegate", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"resolve":_flaxMemberParameters477}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export interface TransitionDelegate<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: TransitionDelegate<T>;

}
export abstract class TransitionDelegate<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TransitionDelegate<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TransitionDelegate<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TransitionDelegate", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_TransitionDelegateProxy, Array.from(arguments)); }
abstract resolve(options: {newPageRouteHistory: DartListInput<upstream0.RouteTransitionRecord, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [] }>>; locationToExitingPageRoute: DartMapInput<upstream0.RouteTransitionRecord | null, upstream0.RouteTransitionRecord, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [] }> | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [] }>>; pageRouteToPagelessRoutes: DartMapInput<upstream0.RouteTransitionRecord | null, DartList<upstream0.RouteTransitionRecord>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [] }> | null, DartListInput<upstream0.RouteTransitionRecord, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [] }>>>}): DartIterable<upstream0.RouteTransitionRecord>;
}
_flaxDefineProxyBase(TransitionDelegate.prototype, _TransitionDelegateProxy);
export namespace TransitionDelegate { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {resolve: ((options: { newPageRouteHistory: DartList<upstream0.RouteTransitionRecord>; locationToExitingPageRoute: DartMap<upstream0.RouteTransitionRecord | null, upstream0.RouteTransitionRecord>; pageRouteToPagelessRoutes: DartMap<upstream0.RouteTransitionRecord | null, DartList<upstream0.RouteTransitionRecord>> }) => DartIterableInput<upstream0.RouteTransitionRecord, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [] }>>)}): TransitionDelegate<T> {
return constructProxy(_TransitionDelegateProxy, args, implementation) as TransitionDelegate<T>; } }
_flaxBindInstanceType<TransitionDelegate<unknown | null>, typeof TransitionDelegate>(TransitionDelegate, "flax.core/sdk_widgets#type:TransitionDelegate", ["dart:core::Object"]);
_flaxDefineDartTypes(TransitionDelegate, "flax.core/sdk_widgets#type:TransitionDelegate", {...{"category":"object","constructors":{}}, proxy: _TransitionDelegateProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => TransitionDelegate<_Selected0>) & {readonly prototype: TransitionDelegate<_Selected0>;implement(args: readonly [], implementation: Partial<TransitionDelegate<_Selected0>>): TransitionDelegate<_Selected0>;} & _FlaxInstanceType<TransitionDelegate<_Selected0>> & _FlaxDartType<TransitionDelegate<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => TransitionDelegate<_Selected0>) & {readonly prototype: TransitionDelegate<_Selected0>;implement(args: readonly [], implementation: Partial<TransitionDelegate<_Selected0>>): TransitionDelegate<_Selected0>;} & _FlaxInstanceType<TransitionDelegate<_Selected0>> & _FlaxDartType<TransitionDelegate<_Selected0>> : never : never; }
