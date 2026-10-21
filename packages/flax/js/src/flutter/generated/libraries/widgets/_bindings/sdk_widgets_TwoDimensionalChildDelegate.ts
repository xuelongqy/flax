// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ChildVicinity';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ChildVicinity';
import { _flaxMemberParameters483, _flaxMemberParameters43, _flaxMemberParameters2, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TwoDimensionalChildDelegate extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __TwoDimensionalChildDelegate: unique symbol;
readonly [_flaxDartTypeValue]: TwoDimensionalChildDelegate;

}
defineObject("flax.core/sdk_widgets#type:TwoDimensionalChildDelegate", ["hasListeners"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TwoDimensionalChildDelegate", "object", {"build":_flaxMemberParameters483,"shouldRebuild":_flaxMemberParameters43}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _TwoDimensionalChildDelegateProxy = {type: "flax.core/sdk_widgets#type:TwoDimensionalChildDelegate", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2,"build":_flaxMemberParameters483,"shouldRebuild":_flaxMemberParameters43}, getters: ["hasListeners"], setters: [], contextMembers: [], superMembers: ["get:hasListeners","addListener","removeListener","dispose"]} as const;
export interface TwoDimensionalChildDelegate {
readonly [_flaxDartTypeValue]: TwoDimensionalChildDelegate;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
get hasListeners(): boolean;
}
export abstract class TwoDimensionalChildDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TwoDimensionalChildDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TwoDimensionalChildDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TwoDimensionalChildDelegate", readonly [], false];
constructor() { super(_TwoDimensionalChildDelegateProxy, Array.from(arguments)); }
abstract build(context: upstream2.BuildContext, vicinity: Readonly<{ "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream3.ChildVicinity] }>): Widget | null;
abstract shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
}
_flaxDefineProxyBase(TwoDimensionalChildDelegate.prototype, _TwoDimensionalChildDelegateProxy);
export namespace TwoDimensionalChildDelegate { export function implement(args: [], implementation: {build: ((context: upstream2.BuildContext, vicinity: upstream3.ChildVicinity) => Widget | null); shouldRebuild: ((oldDelegate: TwoDimensionalChildDelegate) => boolean)}): TwoDimensionalChildDelegate {
return constructProxy(_TwoDimensionalChildDelegateProxy, args, implementation) as TwoDimensionalChildDelegate; } }
_flaxBindInstanceType<TwoDimensionalChildDelegate, typeof TwoDimensionalChildDelegate>(TwoDimensionalChildDelegate, "flax.core/sdk_widgets#type:TwoDimensionalChildDelegate", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "addListener" | "removeListener" | "dispose" | "build" | "shouldRebuild" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
