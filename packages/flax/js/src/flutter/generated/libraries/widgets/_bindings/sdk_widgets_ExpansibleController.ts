// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters0, _flaxMemberParameters2, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ExpansibleController extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/expansible.dart::ExpansibleController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __ExpansibleController: unique symbol;
readonly [_flaxDartTypeValue]: ExpansibleController;

readonly hasListeners: boolean;
readonly isExpanded: boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
expand(): void;
collapse(): void;
toggle(): void;
}
defineObject("flax.core/sdk_widgets#type:ExpansibleController", ["hasListeners","isExpanded"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ExpansibleController", "object", {"expand":_flaxMemberParameters2,"collapse":_flaxMemberParameters2,"toggle":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _ExpansibleControllerFactory(): ExpansibleController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ExpansibleController", "", _flaxMemberParameters2, [], {}) as ExpansibleController;
}
const _ExpansibleControllerProxy = {type: "flax.core/sdk_widgets#type:ExpansibleController", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2,"expand":_flaxMemberParameters2,"collapse":_flaxMemberParameters2,"toggle":_flaxMemberParameters2}, getters: ["isExpanded","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:isExpanded","get:hasListeners","addListener","removeListener","dispose","expand","collapse","toggle"]} as const;
export interface _ExpansibleControllerNative extends ExpansibleController {
readonly [_flaxDartTypeValue]: _ExpansibleControllerNative;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
expand(): void;
collapse(): void;
toggle(): void;
get isExpanded(): boolean;
get hasListeners(): boolean;
}
export abstract class _ExpansibleControllerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ExpansibleController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ExpansibleController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ExpansibleController", readonly [], false];
constructor() { super(_ExpansibleControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ExpansibleControllerNative.prototype, _ExpansibleControllerProxy);
export namespace _ExpansibleControllerFactory { export function implement(args: [], implementation: {}): ExpansibleController {
return constructProxy(_ExpansibleControllerProxy, args, implementation) as ExpansibleController; } }
const _ExpansibleControllerBinding = _flaxProxyFactory(_ExpansibleControllerFactory, _ExpansibleControllerNative) as unknown as typeof _ExpansibleControllerFactory & (new() => _ExpansibleControllerNative);
export namespace _ExpansibleControllerFactory { export function of(context: upstream2.BuildContext): ExpansibleController {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ExpansibleController.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as ExpansibleController;
} }
export namespace _ExpansibleControllerFactory { export function maybeOf(context: upstream2.BuildContext): ExpansibleController | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ExpansibleController.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as ExpansibleController | null;
} }
export const ExpansibleController: typeof _ExpansibleControllerBinding & _FlaxInstanceType<ExpansibleController> & _FlaxDartType<ExpansibleController, readonly ["class", "flax.core/sdk_widgets#type:ExpansibleController", readonly [], false]> = _flaxBindInstanceType<ExpansibleController, typeof _ExpansibleControllerBinding>(_ExpansibleControllerBinding, "flax.core/sdk_widgets#type:ExpansibleController", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _ExpansibleControllerBinding & _FlaxInstanceType<ExpansibleController> & _FlaxDartType<ExpansibleController, readonly ["class", "flax.core/sdk_widgets#type:ExpansibleController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "isExpanded" | "addListener" | "removeListener" | "dispose" | "expand" | "collapse" | "toggle" | "__flaxBound:package:flutter/src/widgets/expansible.dart::ExpansibleController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
