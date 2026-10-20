// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { _flaxMemberParameters2, _flaxMemberParameters392, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SnapshotController extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __SnapshotController: unique symbol;
readonly [_flaxDartTypeValue]: SnapshotController;

readonly hasListeners: boolean;
get allowSnapshotting(): boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
clear(): void;
set allowSnapshotting(value: boolean);
}
defineObject("flax.core/sdk_widgets#type:SnapshotController", ["hasListeners","allowSnapshotting"], ["allowSnapshotting"], _flaxBindingMethods("flax.core/sdk_widgets#type:SnapshotController", "object", {"clear":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _SnapshotControllerFactory(options: { allowSnapshotting?: boolean | undefined } = {}): SnapshotController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SnapshotController", "", [{"name":"allowSnapshotting"}], [], options) as SnapshotController;
}
const _SnapshotControllerProxy = {type: "flax.core/sdk_widgets#type:SnapshotController", parameters: _flaxMemberParameters392, constructors: {"": _flaxMemberParameters392}, methods: {"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2,"clear":_flaxMemberParameters2}, getters: ["allowSnapshotting","hasListeners"], setters: ["allowSnapshotting"], contextMembers: [], superMembers: ["get:allowSnapshotting","get:hasListeners","set:allowSnapshotting","addListener","removeListener","dispose","clear"]} as const;
export interface _SnapshotControllerNative extends SnapshotController {
readonly [_flaxDartTypeValue]: _SnapshotControllerNative;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
clear(): void;
get allowSnapshotting(): boolean;
get hasListeners(): boolean;
set allowSnapshotting(value: boolean);
}
export abstract class _SnapshotControllerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SnapshotController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SnapshotController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SnapshotController", readonly [], false];
constructor(options?: {allowSnapshotting?: boolean | undefined}) { super(_SnapshotControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SnapshotControllerNative.prototype, _SnapshotControllerProxy);
export namespace _SnapshotControllerFactory { export function implement(args: [options?: {allowSnapshotting?: boolean | undefined}], implementation: {}): SnapshotController {
return constructProxy(_SnapshotControllerProxy, args, implementation) as SnapshotController; } }
const _SnapshotControllerBinding = _flaxProxyFactory(_SnapshotControllerFactory, _SnapshotControllerNative) as unknown as typeof _SnapshotControllerFactory & (new(options?: {allowSnapshotting?: boolean | undefined}) => _SnapshotControllerNative);
export const SnapshotController: typeof _SnapshotControllerBinding & _FlaxInstanceType<SnapshotController> & _FlaxDartType<SnapshotController, readonly ["class", "flax.core/sdk_widgets#type:SnapshotController", readonly [], false]> = _flaxBindInstanceType<SnapshotController, typeof _SnapshotControllerBinding>(_SnapshotControllerBinding, "flax.core/sdk_widgets#type:SnapshotController", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _SnapshotControllerBinding & _FlaxInstanceType<SnapshotController> & _FlaxDartType<SnapshotController, readonly ["class", "flax.core/sdk_widgets#type:SnapshotController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "allowSnapshotting" | "addListener" | "removeListener" | "dispose" | "clear" | "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
