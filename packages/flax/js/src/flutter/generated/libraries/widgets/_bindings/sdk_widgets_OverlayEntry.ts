// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"builder","required":true},{"name":"opaque"},{"name":"maintainState"},{"name":"canSizeOverlay"}] as const;
const _flaxMemberParameters2 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OverlayEntry extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __OverlayEntry: unique symbol;
readonly [_flaxDartTypeValue]: OverlayEntry;

}
defineObject("flax.core/sdk_widgets#type:OverlayEntry", ["builder","opaque","maintainState","canSizeOverlay","mounted"], ["opaque","maintainState"], _flaxBindingMethods("flax.core/sdk_widgets#type:OverlayEntry", "object", {"remove":_flaxMemberParameters0,"markNeedsBuild":_flaxMemberParameters0,"dispose":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, {}), ["removeListener"], undefined, "flax.core/flutter#type:Listenable");
const _OverlayEntryProxy = {type: "flax.core/sdk_widgets#type:OverlayEntry", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"addListener":_flaxMemberParameters2,"removeListener":_flaxMemberParameters2,"remove":_flaxMemberParameters0,"markNeedsBuild":_flaxMemberParameters0,"dispose":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, getters: ["builder","opaque","maintainState","canSizeOverlay","mounted"], setters: ["opaque","maintainState"], contextMembers: [], superMembers: ["get:builder","get:opaque","get:maintainState","get:canSizeOverlay","get:mounted","set:opaque","set:maintainState","addListener","removeListener","remove","markNeedsBuild","dispose","toString"]} as const;
export interface OverlayEntry {
readonly [_flaxDartTypeValue]: OverlayEntry;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
remove(): void;
markNeedsBuild(): void;
dispose(): void;
toString(): string;
get builder(): ((context: upstream1.BuildContext) => Widget);
get opaque(): boolean;
get maintainState(): boolean;
get canSizeOverlay(): boolean;
get mounted(): boolean;
set opaque(value: boolean);
set maintainState(value: boolean);
}
export abstract class OverlayEntry extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OverlayEntry>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: OverlayEntry;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:OverlayEntry", readonly [], false];
constructor(options: {builder: ((context: upstream1.BuildContext) => Widget); opaque?: boolean | undefined; maintainState?: boolean | undefined; canSizeOverlay?: boolean | undefined}) { super(_OverlayEntryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(OverlayEntry.prototype, _OverlayEntryProxy);
export namespace OverlayEntry { export function implement(args: [options: {builder: ((context: upstream1.BuildContext) => Widget); opaque?: boolean | undefined; maintainState?: boolean | undefined; canSizeOverlay?: boolean | undefined}], implementation: {}): OverlayEntry {
return constructProxy(_OverlayEntryProxy, args, implementation) as OverlayEntry; } }
_flaxBindInstanceType<OverlayEntry, typeof OverlayEntry>(OverlayEntry, "flax.core/sdk_widgets#type:OverlayEntry", ["dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "builder" | "opaque" | "maintainState" | "canSizeOverlay" | "mounted" | "addListener" | "removeListener" | "remove" | "markNeedsBuild" | "dispose" | "toString" | "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
