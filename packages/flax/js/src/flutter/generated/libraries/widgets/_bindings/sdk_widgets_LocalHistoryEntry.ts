// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"onRemove"},{"name":"impliesAppBarDismissal"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LocalHistoryEntry extends Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryEntry": readonly [] }> { readonly __LocalHistoryEntry: unique symbol;
readonly [_flaxDartTypeValue]: LocalHistoryEntry;

}
defineObject("flax.core/sdk_widgets#type:LocalHistoryEntry", ["onRemove","impliesAppBarDismissal"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:LocalHistoryEntry", "object", {"remove":_flaxMemberParameters0}, {}), []);
const _LocalHistoryEntryProxy = {type: "flax.core/sdk_widgets#type:LocalHistoryEntry", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"remove":_flaxMemberParameters0}, getters: ["onRemove","impliesAppBarDismissal"], setters: [], contextMembers: [], superMembers: ["get:onRemove","get:impliesAppBarDismissal","remove"]} as const;
export interface LocalHistoryEntry {
readonly [_flaxDartTypeValue]: LocalHistoryEntry;

remove(): void;
get onRemove(): (() => void) | null;
get impliesAppBarDismissal(): boolean;
}
export abstract class LocalHistoryEntry extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LocalHistoryEntry>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LocalHistoryEntry;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LocalHistoryEntry", readonly [], false];
constructor(options?: {onRemove?: (() => void) | null | undefined; impliesAppBarDismissal?: boolean | undefined}) { super(_LocalHistoryEntryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(LocalHistoryEntry.prototype, _LocalHistoryEntryProxy);
export namespace LocalHistoryEntry { export function implement(args: [options?: {onRemove?: (() => void) | null | undefined; impliesAppBarDismissal?: boolean | undefined}], implementation: {}): LocalHistoryEntry {
return constructProxy(_LocalHistoryEntryProxy, args, implementation) as LocalHistoryEntry; } }
_flaxBindInstanceType<LocalHistoryEntry, typeof LocalHistoryEntry>(LocalHistoryEntry, "flax.core/sdk_widgets#type:LocalHistoryEntry", ["dart:core::Object"]);
