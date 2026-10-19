// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_UndoHistoryValue';
import '@flax/flutter/widgets/_bindings/sdk_widgets_UndoHistoryValue';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"value"}] as const;
const _flaxMemberParameters2 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UndoHistoryController extends Omit<upstream0.ValueNotifier<upstream1.UndoHistoryValue>, _flaxOwnMembers0>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.UndoHistoryValue>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.UndoHistoryValue> | keyof upstream2.ChangeNotifier>, Omit<upstream4.ValueListenable<upstream1.UndoHistoryValue>, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.UndoHistoryValue> | keyof upstream2.ChangeNotifier | keyof upstream3.Listenable>, Readonly<{ "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream1.UndoHistoryValue] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.UndoHistoryValue] }> { readonly __UndoHistoryController: unique symbol;
readonly [_flaxDartTypeValue]: UndoHistoryController;

}
defineObject("flax.core/sdk_widgets#type:UndoHistoryController", ["value","hasListeners","onUndo","onRedo"], ["value"], _flaxBindingMethods("flax.core/sdk_widgets#type:UndoHistoryController", "object", {"toString":_flaxMemberParameters0,"undo":_flaxMemberParameters0,"redo":_flaxMemberParameters0}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _UndoHistoryControllerProxy = {type: "flax.core/sdk_widgets#type:UndoHistoryController", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0,"addListener":_flaxMemberParameters2,"removeListener":_flaxMemberParameters2,"dispose":_flaxMemberParameters0,"undo":_flaxMemberParameters0,"redo":_flaxMemberParameters0}, getters: ["onUndo","onRedo","value","hasListeners"], setters: ["value"], contextMembers: [], superMembers: ["get:onUndo","get:onRedo","get:value","get:hasListeners","set:value","toString","addListener","removeListener","dispose","undo","redo"]} as const;
export interface UndoHistoryController {
readonly [_flaxDartTypeValue]: UndoHistoryController;

toString(): string;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
undo(): void;
redo(): void;
get onUndo(): upstream2.ChangeNotifier;
get onRedo(): upstream2.ChangeNotifier;
get value(): upstream1.UndoHistoryValue;
get hasListeners(): boolean;
set value(value: Readonly<{ "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryValue": readonly [] }>);
}
export abstract class UndoHistoryController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UndoHistoryController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: UndoHistoryController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:UndoHistoryController", readonly [], false];
constructor(options?: {value?: Readonly<{ "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryValue": readonly [] }> | null | undefined}) { super(_UndoHistoryControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(UndoHistoryController.prototype, _UndoHistoryControllerProxy);
export namespace UndoHistoryController { export function implement(args: [options?: {value?: Readonly<{ "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryValue": readonly [] }> | null | undefined}], implementation: {}): UndoHistoryController {
return constructProxy(_UndoHistoryControllerProxy, args, implementation) as UndoHistoryController; } }
_flaxBindInstanceType<UndoHistoryController, typeof UndoHistoryController>(UndoHistoryController, "flax.core/sdk_widgets#type:UndoHistoryController", ["flax.core/sdk_foundation#type:ValueNotifier","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable","flax.core/flutter#type:ValueListenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "hasListeners" | "onUndo" | "onRedo" | "toString" | "addListener" | "removeListener" | "dispose" | "undo" | "redo" | "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable";
