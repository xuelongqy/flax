// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import { _flaxMemberParameters2, _flaxMemberParameters331 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RouteTransitionRecord extends Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [] }> { readonly __RouteTransitionRecord: unique symbol;
readonly [_flaxDartTypeValue]: RouteTransitionRecord;

}
defineObject("flax.core/sdk_widgets#type:RouteTransitionRecord", ["route","isWaitingForEnteringDecision","isWaitingForExitingDecision"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RouteTransitionRecord", "object", {"markForPush":_flaxMemberParameters2,"markForAdd":_flaxMemberParameters2,"markForPop":_flaxMemberParameters331,"markForComplete":_flaxMemberParameters331,"markForRemove":_flaxMemberParameters2}, {}), []);
const _RouteTransitionRecordProxy = {type: "flax.core/sdk_widgets#type:RouteTransitionRecord", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"markForPush":_flaxMemberParameters2,"markForAdd":_flaxMemberParameters2,"markForPop":_flaxMemberParameters331,"markForComplete":_flaxMemberParameters331,"markForRemove":_flaxMemberParameters2}, getters: ["route","isWaitingForEnteringDecision","isWaitingForExitingDecision"], setters: [], contextMembers: [], superMembers: ["markForRemove"]} as const;
export interface RouteTransitionRecord {
readonly [_flaxDartTypeValue]: RouteTransitionRecord;

markForRemove(): void;
}
export abstract class RouteTransitionRecord extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouteTransitionRecord>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RouteTransitionRecord;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouteTransitionRecord", readonly [], false];
constructor() { super(_RouteTransitionRecordProxy, Array.from(arguments)); }
abstract markForPush(): void;
abstract markForAdd(): void;
abstract markForPop(result?: unknown | null): void;
abstract markForComplete(result?: unknown | null): void;
abstract get route(): upstream0.Route<unknown | null>;
abstract get isWaitingForEnteringDecision(): boolean;
abstract get isWaitingForExitingDecision(): boolean;
}
_flaxDefineProxyBase(RouteTransitionRecord.prototype, _RouteTransitionRecordProxy);
export namespace RouteTransitionRecord { export function implement(args: [], implementation: {markForPush: (() => void); markForAdd: (() => void); markForPop: ((result?: unknown | null) => void); markForComplete: ((result?: unknown | null) => void); get route(): Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }>; get isWaitingForEnteringDecision(): boolean; get isWaitingForExitingDecision(): boolean}): RouteTransitionRecord {
return constructProxy(_RouteTransitionRecordProxy, args, implementation) as RouteTransitionRecord; } }
_flaxBindInstanceType<RouteTransitionRecord, typeof RouteTransitionRecord>(RouteTransitionRecord, "flax.core/sdk_widgets#type:RouteTransitionRecord", ["dart:core::Object"]);
