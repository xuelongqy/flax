// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_TransitionDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TransitionDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteTransitionRecord';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteTransitionRecord';
const _flaxMemberParameters0 = [{"name":"locationToExitingPageRoute","required":true},{"name":"newPageRouteHistory","required":true},{"name":"pageRouteToPagelessRoutes","required":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DefaultTransitionDelegate<T extends unknown | null = unknown | null> extends Omit<upstream0.TransitionDelegate<T>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::DefaultTransitionDelegate": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::TransitionDelegate": readonly [T] }> { readonly __DefaultTransitionDelegate: unique symbol;
readonly [_flaxDartTypeValue]: DefaultTransitionDelegate<T>;

}
defineObject("flax.core/sdk_widgets#type:DefaultTransitionDelegate", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DefaultTransitionDelegate", "object", {"resolve":_flaxMemberParameters0}, {}), []);
const _DefaultTransitionDelegateProxy = {type: "flax.core/sdk_widgets#type:DefaultTransitionDelegate", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"resolve":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: ["resolve"]} as const;
export interface DefaultTransitionDelegate<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: DefaultTransitionDelegate<T>;

resolve(options: {newPageRouteHistory: DartListInput<upstream1.RouteTransitionRecord, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [] }>>; locationToExitingPageRoute: DartMapInput<upstream1.RouteTransitionRecord | null, upstream1.RouteTransitionRecord, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [] }> | null, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [] }>>; pageRouteToPagelessRoutes: DartMapInput<upstream1.RouteTransitionRecord | null, DartList<upstream1.RouteTransitionRecord>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [] }> | null, DartListInput<upstream1.RouteTransitionRecord, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [] }>>>}): DartIterable<upstream1.RouteTransitionRecord>;
}
export abstract class DefaultTransitionDelegate<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DefaultTransitionDelegate<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DefaultTransitionDelegate<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DefaultTransitionDelegate", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_DefaultTransitionDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DefaultTransitionDelegate.prototype, _DefaultTransitionDelegateProxy);
export namespace DefaultTransitionDelegate { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {}): DefaultTransitionDelegate<T> {
return constructProxy(_DefaultTransitionDelegateProxy, args, implementation) as DefaultTransitionDelegate<T>; } }
_flaxBindInstanceType<DefaultTransitionDelegate<unknown | null>, typeof DefaultTransitionDelegate>(DefaultTransitionDelegate, "flax.core/sdk_widgets#type:DefaultTransitionDelegate", ["flax.core/sdk_widgets#type:TransitionDelegate","dart:core::Object"]);
_flaxDefineDartTypes(DefaultTransitionDelegate, "flax.core/sdk_widgets#type:DefaultTransitionDelegate", {...{"category":"object","constructors":{}}, proxy: _DefaultTransitionDelegateProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "resolve" | "__flaxBound:package:flutter/src/widgets/navigator.dart::DefaultTransitionDelegate" | "__flaxBound:package:flutter/src/widgets/navigator.dart::TransitionDelegate";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => DefaultTransitionDelegate<_Selected0>) & {readonly prototype: DefaultTransitionDelegate<_Selected0>;implement(args: readonly [], implementation: Partial<DefaultTransitionDelegate<_Selected0>>): DefaultTransitionDelegate<_Selected0>;} & _FlaxInstanceType<DefaultTransitionDelegate<_Selected0>> & _FlaxDartType<DefaultTransitionDelegate<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => DefaultTransitionDelegate<_Selected0>) & {readonly prototype: DefaultTransitionDelegate<_Selected0>;implement(args: readonly [], implementation: Partial<DefaultTransitionDelegate<_Selected0>>): DefaultTransitionDelegate<_Selected0>;} & _FlaxInstanceType<DefaultTransitionDelegate<_Selected0>> & _FlaxDartType<DefaultTransitionDelegate<_Selected0>> : never : never; }
