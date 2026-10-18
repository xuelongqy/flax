// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UndoHistoryValue extends Readonly<{ "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryValue": readonly [] }> { readonly __UndoHistoryValue: unique symbol;
readonly [_flaxDartTypeValue]: UndoHistoryValue;

}
defineObject("flax.core/sdk_widgets#type:UndoHistoryValue", ["canUndo","canRedo"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:UndoHistoryValue", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _UndoHistoryValueProxy = {type: "flax.core/sdk_widgets#type:UndoHistoryValue", parameters: [{"name":"canUndo","required":false,"positional":false},{"name":"canRedo","required":false,"positional":false}], constructors: {"":[{"name":"canUndo","required":false,"positional":false},{"name":"canRedo","required":false,"positional":false}]}, methods: {"toString":_flaxMemberParameters0}, getters: ["canUndo","canRedo"], setters: [], contextMembers: [], superMembers: ["get:canUndo","get:canRedo","toString"]} as const;
export interface UndoHistoryValue {
readonly [_flaxDartTypeValue]: UndoHistoryValue;

toString(): string;
get canUndo(): boolean;
get canRedo(): boolean;
}
export abstract class UndoHistoryValue extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UndoHistoryValue>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: UndoHistoryValue;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:UndoHistoryValue", readonly [], false];
constructor(options?: {canUndo?: boolean | undefined; canRedo?: boolean | undefined}) { super(_UndoHistoryValueProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(UndoHistoryValue.prototype, _UndoHistoryValueProxy);
export namespace UndoHistoryValue { export function implement(args: [options?: {canUndo?: boolean | undefined; canRedo?: boolean | undefined}], implementation: {}): UndoHistoryValue {
return constructProxy(_UndoHistoryValueProxy, args, implementation) as UndoHistoryValue; } }
export namespace UndoHistoryValue { export declare const empty: UndoHistoryValue; }
_flaxDefineStaticGetters(UndoHistoryValue, "flax.core/sdk_widgets#read:UndoHistoryValue.", ["empty"]);
_flaxBindInstanceType<UndoHistoryValue, typeof UndoHistoryValue>(UndoHistoryValue, "flax.core/sdk_widgets#type:UndoHistoryValue", ["dart:core::Object"]);
