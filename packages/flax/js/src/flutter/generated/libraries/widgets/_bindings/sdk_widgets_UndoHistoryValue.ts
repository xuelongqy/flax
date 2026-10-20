// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters2, _flaxMemberParameters429 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UndoHistoryValue extends Readonly<{ "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryValue": readonly [] }> { readonly __UndoHistoryValue: unique symbol;
readonly [_flaxDartTypeValue]: UndoHistoryValue;

readonly canUndo: boolean;
readonly canRedo: boolean;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:UndoHistoryValue", ["canUndo","canRedo"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:UndoHistoryValue", "object", {"toString":_flaxMemberParameters2}, {}), []);
export function _UndoHistoryValueFactory(options: { canUndo?: boolean | undefined; canRedo?: boolean | undefined } = {}): UndoHistoryValue {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:UndoHistoryValue", "", [{"name":"canUndo"},{"name":"canRedo"}], [], options) as UndoHistoryValue;
}
const _UndoHistoryValueProxy = {type: "flax.core/sdk_widgets#type:UndoHistoryValue", parameters: _flaxMemberParameters429, constructors: {"": _flaxMemberParameters429}, methods: {"toString":_flaxMemberParameters2}, getters: ["canUndo","canRedo"], setters: [], contextMembers: [], superMembers: ["get:canUndo","get:canRedo","toString"]} as const;
export interface _UndoHistoryValueNative extends UndoHistoryValue {
readonly [_flaxDartTypeValue]: _UndoHistoryValueNative;

toString(): string;
get canUndo(): boolean;
get canRedo(): boolean;
}
export abstract class _UndoHistoryValueNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UndoHistoryValue>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: UndoHistoryValue;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:UndoHistoryValue", readonly [], false];
constructor(options?: {canUndo?: boolean | undefined; canRedo?: boolean | undefined}) { super(_UndoHistoryValueProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_UndoHistoryValueNative.prototype, _UndoHistoryValueProxy);
export namespace _UndoHistoryValueFactory { export function implement(args: [options?: {canUndo?: boolean | undefined; canRedo?: boolean | undefined}], implementation: {}): UndoHistoryValue {
return constructProxy(_UndoHistoryValueProxy, args, implementation) as UndoHistoryValue; } }
const _UndoHistoryValueBinding = _flaxProxyFactory(_UndoHistoryValueFactory, _UndoHistoryValueNative) as unknown as typeof _UndoHistoryValueFactory & (new(options?: {canUndo?: boolean | undefined; canRedo?: boolean | undefined}) => _UndoHistoryValueNative);
export namespace _UndoHistoryValueFactory { export declare const empty: UndoHistoryValue; }
_flaxDefineStaticGetters(_UndoHistoryValueFactory, "flax.core/sdk_widgets#read:UndoHistoryValue.", ["empty"]);
export const UndoHistoryValue: typeof _UndoHistoryValueBinding & _FlaxInstanceType<UndoHistoryValue> & _FlaxDartType<UndoHistoryValue, readonly ["class", "flax.core/sdk_widgets#type:UndoHistoryValue", readonly [], false]> = _flaxBindInstanceType<UndoHistoryValue, typeof _UndoHistoryValueBinding>(_UndoHistoryValueBinding, "flax.core/sdk_widgets#type:UndoHistoryValue", ["dart:core::Object"]) as typeof _UndoHistoryValueBinding & _FlaxInstanceType<UndoHistoryValue> & _FlaxDartType<UndoHistoryValue, readonly ["class", "flax.core/sdk_widgets#type:UndoHistoryValue", readonly [], false]>;
