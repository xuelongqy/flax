// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import { _flaxMemberParameters2, _flaxMemberParameters490, _flaxMemberParameters436, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStatesController extends Omit<upstream0.ValueNotifier<DartSet<upstream1.WidgetState>>, _flaxOwnMembers0>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<DartSet<upstream1.WidgetState>>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<DartSet<upstream1.WidgetState>> | keyof upstream2.ChangeNotifier>, Omit<upstream4.ValueListenable<DartSet<upstream1.WidgetState>>, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<DartSet<upstream1.WidgetState>> | keyof upstream2.ChangeNotifier | keyof upstream3.Listenable>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream1.WidgetState>] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream1.WidgetState>] }> { readonly __WidgetStatesController: unique symbol;
readonly [_flaxDartTypeValue]: WidgetStatesController;

}
defineObject("flax.core/sdk_widgets#type:WidgetStatesController", ["value","hasListeners"], ["value"], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetStatesController", "object", {"toString":_flaxMemberParameters2,"update":_flaxMemberParameters490}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _WidgetStatesControllerProxy = {type: "flax.core/sdk_widgets#type:WidgetStatesController", parameters: _flaxMemberParameters436, constructors: {"": _flaxMemberParameters436}, methods: {"toString":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2,"update":_flaxMemberParameters490}, getters: ["value","hasListeners"], setters: ["value"], contextMembers: [], superMembers: ["get:value","get:hasListeners","set:value","toString","addListener","removeListener","dispose","update"]} as const;
export interface WidgetStatesController {
readonly [_flaxDartTypeValue]: WidgetStatesController;

toString(): string;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
update(state: upstream1.WidgetState, add: boolean): void;
get value(): DartSet<upstream1.WidgetState>;
get hasListeners(): boolean;
set value(value: DartSetInput<upstream1.WidgetState, upstream1.WidgetState>);
}
export abstract class WidgetStatesController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStatesController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WidgetStatesController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStatesController", readonly [], false];
constructor(value?: DartSetInput<upstream1.WidgetState, upstream1.WidgetState> | null) { super(_WidgetStatesControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(WidgetStatesController.prototype, _WidgetStatesControllerProxy);
export namespace WidgetStatesController { export function implement(args: [value?: DartSetInput<upstream1.WidgetState, upstream1.WidgetState> | null], implementation: {}): WidgetStatesController {
return constructProxy(_WidgetStatesControllerProxy, args, implementation) as WidgetStatesController; } }
_flaxBindInstanceType<WidgetStatesController, typeof WidgetStatesController>(WidgetStatesController, "flax.core/sdk_widgets#type:WidgetStatesController", ["flax.core/sdk_foundation#type:ValueNotifier","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable","flax.core/flutter#type:ValueListenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "hasListeners" | "toString" | "addListener" | "removeListener" | "dispose" | "update" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable";
