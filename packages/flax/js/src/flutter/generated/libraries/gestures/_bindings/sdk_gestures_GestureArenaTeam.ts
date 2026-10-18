// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaEntry';
const _flaxMemberParameters0 = [{"name":"pointer","required":true,"positional":true},{"name":"member","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GestureArenaTeam extends Readonly<{ "__flaxBound:package:flutter/src/gestures/team.dart::GestureArenaTeam": readonly [] }> { readonly __GestureArenaTeam: unique symbol;
readonly [_flaxDartTypeValue]: GestureArenaTeam;

}
defineObject("flax.core/sdk_gestures#type:GestureArenaTeam", ["captain"], ["captain"], _flaxBindingMethods("flax.core/sdk_gestures#type:GestureArenaTeam", "object", {"add":_flaxMemberParameters0}, {}), []);
const _GestureArenaTeamProxy = {type: "flax.core/sdk_gestures#type:GestureArenaTeam", parameters: [], constructors: {"":[]}, methods: {"add":_flaxMemberParameters0}, getters: ["captain"], setters: ["captain"], contextMembers: [], superMembers: ["get:captain","set:captain","add"]} as const;
export interface GestureArenaTeam {
readonly [_flaxDartTypeValue]: GestureArenaTeam;

add(pointer: number, member: Readonly<{ "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [] }>): upstream1.GestureArenaEntry;
get captain(): upstream0.GestureArenaMember | null;
set captain(value: Readonly<{ "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [] }> | null);
}
export abstract class GestureArenaTeam extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GestureArenaTeam>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GestureArenaTeam;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:GestureArenaTeam", readonly [], false];
constructor() { super(_GestureArenaTeamProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(GestureArenaTeam.prototype, _GestureArenaTeamProxy);
export namespace GestureArenaTeam { export function implement(args: [], implementation: {}): GestureArenaTeam {
return constructProxy(_GestureArenaTeamProxy, args, implementation) as GestureArenaTeam; } }
_flaxBindInstanceType<GestureArenaTeam, typeof GestureArenaTeam>(GestureArenaTeam, "flax.core/sdk_gestures#type:GestureArenaTeam", ["dart:core::Object"]);
