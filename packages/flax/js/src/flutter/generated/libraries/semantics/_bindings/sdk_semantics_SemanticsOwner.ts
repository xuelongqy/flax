// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsUpdate';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsUpdate';
import type * as upstream3 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsNode';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsNode';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters14, _flaxMemberParameters2, _flaxMemberParameters41, _flaxMemberParameters42, _flaxMemberParameters43, _flaxMemberParameters21 } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SemanticsOwner extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsOwner": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __SemanticsOwner: unique symbol;
readonly [_flaxDartTypeValue]: SemanticsOwner;

readonly hasListeners: boolean;
readonly onSemanticsUpdate: ((update: Readonly<{ "__flaxBound:dart:ui::SemanticsUpdate": readonly [] }>) => void);
readonly rootSemanticsNode: upstream3.SemanticsNode | null;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
getSemanticsNode(id: number): upstream3.SemanticsNode | null;
sendSemanticsUpdate(): void;
performAction(id: number, action: Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }>, args?: unknown | null): void;
performActionAt(position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, action: Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }>, args?: unknown | null): void;
toString(): string;
}
defineObject("flax.core/sdk_semantics#type:SemanticsOwner", ["hasListeners","onSemanticsUpdate","rootSemanticsNode"], [], _flaxBindingMethods("flax.core/sdk_semantics#type:SemanticsOwner", "object", {"getSemanticsNode":_flaxMemberParameters14,"sendSemanticsUpdate":_flaxMemberParameters2,"performAction":_flaxMemberParameters41,"performActionAt":_flaxMemberParameters42,"toString":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _SemanticsOwnerFactory(options: { onSemanticsUpdate: ((update: upstream2.SemanticsUpdate) => void) }): SemanticsOwner {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_semantics#type:SemanticsOwner", "", [{"name":"onSemanticsUpdate","required":true}], [], options) as SemanticsOwner;
}
const _SemanticsOwnerProxy = {type: "flax.core/sdk_semantics#type:SemanticsOwner", parameters: _flaxMemberParameters43, constructors: {"": _flaxMemberParameters43}, methods: {"addListener":_flaxMemberParameters21,"removeListener":_flaxMemberParameters21,"dispose":_flaxMemberParameters2,"getSemanticsNode":_flaxMemberParameters14,"sendSemanticsUpdate":_flaxMemberParameters2,"performAction":_flaxMemberParameters41,"performActionAt":_flaxMemberParameters42,"toString":_flaxMemberParameters2}, getters: ["onSemanticsUpdate","rootSemanticsNode","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:onSemanticsUpdate","get:rootSemanticsNode","get:hasListeners","addListener","removeListener","dispose","getSemanticsNode","sendSemanticsUpdate","performAction","performActionAt","toString"]} as const;
export interface _SemanticsOwnerNative extends SemanticsOwner {
readonly [_flaxDartTypeValue]: _SemanticsOwnerNative;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
getSemanticsNode(id: number): upstream3.SemanticsNode | null;
sendSemanticsUpdate(): void;
performAction(id: number, action: Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }>, args?: unknown | null): void;
performActionAt(position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, action: Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }>, args?: unknown | null): void;
toString(): string;
get onSemanticsUpdate(): ((update: Readonly<{ "__flaxBound:dart:ui::SemanticsUpdate": readonly [] }>) => void);
get rootSemanticsNode(): upstream3.SemanticsNode | null;
get hasListeners(): boolean;
}
export abstract class _SemanticsOwnerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsOwner>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SemanticsOwner;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:SemanticsOwner", readonly [], false];
constructor(options: {onSemanticsUpdate: ((update: upstream2.SemanticsUpdate) => void)}) { super(_SemanticsOwnerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SemanticsOwnerNative.prototype, _SemanticsOwnerProxy);
export namespace _SemanticsOwnerFactory { export function implement(args: [options: {onSemanticsUpdate: ((update: upstream2.SemanticsUpdate) => void)}], implementation: {}): SemanticsOwner {
return constructProxy(_SemanticsOwnerProxy, args, implementation) as SemanticsOwner; } }
const _SemanticsOwnerBinding = _flaxProxyFactory(_SemanticsOwnerFactory, _SemanticsOwnerNative) as unknown as typeof _SemanticsOwnerFactory & (new(options: {onSemanticsUpdate: ((update: upstream2.SemanticsUpdate) => void)}) => _SemanticsOwnerNative);
export const SemanticsOwner: typeof _SemanticsOwnerBinding & _FlaxInstanceType<SemanticsOwner> & _FlaxDartType<SemanticsOwner, readonly ["class", "flax.core/sdk_semantics#type:SemanticsOwner", readonly [], false]> = _flaxBindInstanceType<SemanticsOwner, typeof _SemanticsOwnerBinding>(_SemanticsOwnerBinding, "flax.core/sdk_semantics#type:SemanticsOwner", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _SemanticsOwnerBinding & _FlaxInstanceType<SemanticsOwner> & _FlaxDartType<SemanticsOwner, readonly ["class", "flax.core/sdk_semantics#type:SemanticsOwner", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "onSemanticsUpdate" | "rootSemanticsNode" | "addListener" | "removeListener" | "dispose" | "getSemanticsNode" | "sendSemanticsUpdate" | "performAction" | "performActionAt" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsOwner" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
