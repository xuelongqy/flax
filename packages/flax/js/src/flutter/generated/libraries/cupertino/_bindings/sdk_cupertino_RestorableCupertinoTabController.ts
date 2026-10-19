// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableChangeNotifier';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableChangeNotifier';
import type * as upstream1 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoTabController';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoTabController';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableListenable';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableListenable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import { _flaxMemberParameters62, _flaxMemberParameters0, _flaxMemberParameters63, _flaxMemberParameters52, _flaxMemberParameters53 } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableCupertinoTabController extends Omit<upstream0.RestorableChangeNotifier<upstream1.CupertinoTabController>, _flaxOwnMembers0>, Omit<upstream2.RestorableListenable<upstream1.CupertinoTabController>, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.CupertinoTabController>>, Omit<upstream3.RestorableProperty<upstream1.CupertinoTabController>, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.CupertinoTabController> | keyof upstream2.RestorableListenable<upstream1.CupertinoTabController>>, Omit<upstream4.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.CupertinoTabController> | keyof upstream2.RestorableListenable<upstream1.CupertinoTabController> | keyof upstream3.RestorableProperty<upstream1.CupertinoTabController>>, Omit<upstream5.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.CupertinoTabController> | keyof upstream2.RestorableListenable<upstream1.CupertinoTabController> | keyof upstream3.RestorableProperty<upstream1.CupertinoTabController> | keyof upstream4.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/tab_scaffold.dart::RestorableCupertinoTabController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableChangeNotifier": readonly [upstream1.CupertinoTabController] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableListenable": readonly [upstream1.CupertinoTabController] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [upstream1.CupertinoTabController] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableCupertinoTabController: unique symbol;
readonly [_flaxDartTypeValue]: RestorableCupertinoTabController;

}
defineObject("flax.core/sdk_cupertino#type:RestorableCupertinoTabController", ["value","enabled","state","isRegistered","hasListeners"], [], _flaxBindingMethods("flax.core/sdk_cupertino#type:RestorableCupertinoTabController", "object", {"initWithValue":_flaxMemberParameters62,"createDefaultValue":_flaxMemberParameters0,"fromPrimitives":_flaxMemberParameters63,"toPrimitives":_flaxMemberParameters0}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _RestorableCupertinoTabControllerProxy = {type: "flax.core/sdk_cupertino#type:RestorableCupertinoTabController", parameters: _flaxMemberParameters52, constructors: {"": _flaxMemberParameters52}, methods: {"initWithValue":_flaxMemberParameters62,"dispose":_flaxMemberParameters0,"createDefaultValue":_flaxMemberParameters0,"fromPrimitives":_flaxMemberParameters63,"toPrimitives":_flaxMemberParameters0,"addListener":_flaxMemberParameters53,"removeListener":_flaxMemberParameters53}, getters: ["value","enabled","state","isRegistered","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:value","get:enabled","get:state","get:isRegistered","get:hasListeners","initWithValue","dispose","createDefaultValue","fromPrimitives","toPrimitives","addListener","removeListener"]} as const;
export interface RestorableCupertinoTabController {
readonly [_flaxDartTypeValue]: RestorableCupertinoTabController;

initWithValue(value: Readonly<{ "__flaxBound:package:flutter/src/cupertino/tab_scaffold.dart::CupertinoTabController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): void;
dispose(): void;
createDefaultValue(): upstream1.CupertinoTabController;
fromPrimitives(data: unknown | null): upstream1.CupertinoTabController;
toPrimitives(): unknown | null;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
get value(): upstream1.CupertinoTabController;
get enabled(): boolean;
get state(): upstream6.State<upstream7.StatefulWidget>;
get isRegistered(): boolean;
get hasListeners(): boolean;
}
export abstract class RestorableCupertinoTabController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableCupertinoTabController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableCupertinoTabController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:RestorableCupertinoTabController", readonly [], false];
constructor(options?: {initialIndex?: number | undefined}) { super(_RestorableCupertinoTabControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RestorableCupertinoTabController.prototype, _RestorableCupertinoTabControllerProxy);
export namespace RestorableCupertinoTabController { export function implement(args: [options?: {initialIndex?: number | undefined}], implementation: {}): RestorableCupertinoTabController {
return constructProxy(_RestorableCupertinoTabControllerProxy, args, implementation) as RestorableCupertinoTabController; } }
_flaxBindInstanceType<RestorableCupertinoTabController, typeof RestorableCupertinoTabController>(RestorableCupertinoTabController, "flax.core/sdk_cupertino#type:RestorableCupertinoTabController", ["flax.core/sdk_widgets#type:RestorableChangeNotifier","flax.core/sdk_widgets#type:RestorableListenable","flax.core/sdk_widgets#type:RestorableProperty","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "dispose" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/cupertino/tab_scaffold.dart::RestorableCupertinoTabController" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableChangeNotifier" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableListenable" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
