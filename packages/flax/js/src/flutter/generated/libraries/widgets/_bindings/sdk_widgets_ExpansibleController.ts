// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ExpansibleController extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/expansible.dart::ExpansibleController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __ExpansibleController: unique symbol;
readonly [_flaxDartTypeValue]: ExpansibleController;

}
defineObject("flax.core/sdk_widgets#type:ExpansibleController", ["hasListeners","isExpanded"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ExpansibleController", "object", {"expand":_flaxMemberParameters0,"collapse":_flaxMemberParameters0,"toggle":_flaxMemberParameters0}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _ExpansibleControllerProxy = {type: "flax.core/sdk_widgets#type:ExpansibleController", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"addListener":_flaxMemberParameters1,"removeListener":_flaxMemberParameters1,"dispose":_flaxMemberParameters0,"expand":_flaxMemberParameters0,"collapse":_flaxMemberParameters0,"toggle":_flaxMemberParameters0}, getters: ["isExpanded","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:isExpanded","get:hasListeners","addListener","removeListener","dispose","expand","collapse","toggle"]} as const;
export interface ExpansibleController {
readonly [_flaxDartTypeValue]: ExpansibleController;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
expand(): void;
collapse(): void;
toggle(): void;
get isExpanded(): boolean;
get hasListeners(): boolean;
}
export abstract class ExpansibleController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ExpansibleController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ExpansibleController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ExpansibleController", readonly [], false];
constructor() { super(_ExpansibleControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ExpansibleController.prototype, _ExpansibleControllerProxy);
export namespace ExpansibleController { export function implement(args: [], implementation: {}): ExpansibleController {
return constructProxy(_ExpansibleControllerProxy, args, implementation) as ExpansibleController; } }
export namespace ExpansibleController { export function of(context: upstream2.BuildContext): ExpansibleController {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ExpansibleController.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as ExpansibleController;
} }
export namespace ExpansibleController { export function maybeOf(context: upstream2.BuildContext): ExpansibleController | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ExpansibleController.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as ExpansibleController | null;
} }
_flaxBindInstanceType<ExpansibleController, typeof ExpansibleController>(ExpansibleController, "flax.core/sdk_widgets#type:ExpansibleController", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "isExpanded" | "addListener" | "removeListener" | "dispose" | "expand" | "collapse" | "toggle" | "__flaxBound:package:flutter/src/widgets/expansible.dart::ExpansibleController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
