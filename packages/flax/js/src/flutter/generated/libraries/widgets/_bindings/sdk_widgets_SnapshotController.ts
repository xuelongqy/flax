// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SnapshotController extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __SnapshotController: unique symbol;
readonly [_flaxDartTypeValue]: SnapshotController;

}
defineObject("flax.core/sdk_widgets#type:SnapshotController", ["hasListeners","allowSnapshotting"], ["allowSnapshotting"], _flaxBindingMethods("flax.core/sdk_widgets#type:SnapshotController", "object", {"clear":_flaxMemberParameters0}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _SnapshotControllerProxy = {type: "flax.core/sdk_widgets#type:SnapshotController", parameters: [{"name":"allowSnapshotting","required":false,"positional":false}], constructors: {"":[{"name":"allowSnapshotting","required":false,"positional":false}]}, methods: {"addListener":_flaxMemberParameters1,"removeListener":_flaxMemberParameters1,"dispose":_flaxMemberParameters0,"clear":_flaxMemberParameters0}, getters: ["allowSnapshotting","hasListeners"], setters: ["allowSnapshotting"], contextMembers: [], superMembers: ["get:allowSnapshotting","get:hasListeners","set:allowSnapshotting","addListener","removeListener","dispose","clear"]} as const;
export interface SnapshotController {
readonly [_flaxDartTypeValue]: SnapshotController;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
clear(): void;
get allowSnapshotting(): boolean;
get hasListeners(): boolean;
set allowSnapshotting(value: boolean);
}
export abstract class SnapshotController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SnapshotController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SnapshotController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SnapshotController", readonly [], false];
constructor(options?: {allowSnapshotting?: boolean | undefined}) { super(_SnapshotControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SnapshotController.prototype, _SnapshotControllerProxy);
export namespace SnapshotController { export function implement(args: [options?: {allowSnapshotting?: boolean | undefined}], implementation: {}): SnapshotController {
return constructProxy(_SnapshotControllerProxy, args, implementation) as SnapshotController; } }
_flaxBindInstanceType<SnapshotController, typeof SnapshotController>(SnapshotController, "flax.core/sdk_widgets#type:SnapshotController", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "allowSnapshotting" | "addListener" | "removeListener" | "dispose" | "clear" | "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
