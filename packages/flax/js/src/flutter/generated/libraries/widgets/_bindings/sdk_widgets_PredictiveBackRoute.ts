// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"progress","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"progress","required":true,"positional":false}] as const;
const _flaxMemberParameters2 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PredictiveBackRoute extends Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [] }> { readonly __PredictiveBackRoute: unique symbol;
readonly [_flaxDartTypeValue]: PredictiveBackRoute;

readonly isCurrent: boolean;
readonly popGestureEnabled: boolean;
handleStartBackGesture(options?: {progress?: number | undefined}): void;
handleUpdateBackGestureProgress(options: {progress: number}): void;
handleCommitBackGesture(): void;
handleCancelBackGesture(): void;
}
defineObject("flax.core/sdk_widgets#type:PredictiveBackRoute", ["isCurrent","popGestureEnabled"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PredictiveBackRoute", "object", {"handleStartBackGesture":_flaxMemberParameters0,"handleUpdateBackGestureProgress":_flaxMemberParameters1,"handleCommitBackGesture":_flaxMemberParameters2,"handleCancelBackGesture":_flaxMemberParameters2}, {}), []);
const _PredictiveBackRouteProxy = {type: "flax.core/sdk_widgets#type:PredictiveBackRoute", parameters: [], constructors: {}, methods: {"handleStartBackGesture":_flaxMemberParameters0,"handleUpdateBackGestureProgress":_flaxMemberParameters1,"handleCommitBackGesture":_flaxMemberParameters2,"handleCancelBackGesture":_flaxMemberParameters2}, getters: ["isCurrent","popGestureEnabled"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _PredictiveBackRouteFactory { export function implement(args: [], implementation: {handleStartBackGesture: ((options?: { progress?: number | undefined }) => void); handleUpdateBackGestureProgress: ((options: { progress: number }) => void); handleCommitBackGesture: (() => void); handleCancelBackGesture: (() => void); get isCurrent(): boolean; get popGestureEnabled(): boolean}): PredictiveBackRoute {
return constructProxy(_PredictiveBackRouteProxy, args, implementation) as PredictiveBackRoute; } }
export const PredictiveBackRoute: typeof _PredictiveBackRouteFactory & _FlaxInstanceType<PredictiveBackRoute> & _FlaxDartType<PredictiveBackRoute, readonly ["class", "flax.core/sdk_widgets#type:PredictiveBackRoute", readonly [], false]> = _flaxBindInstanceType<PredictiveBackRoute, typeof _PredictiveBackRouteFactory>(_PredictiveBackRouteFactory, "flax.core/sdk_widgets#type:PredictiveBackRoute", ["dart:core::Object"]) as typeof _PredictiveBackRouteFactory & _FlaxInstanceType<PredictiveBackRoute> & _FlaxDartType<PredictiveBackRoute, readonly ["class", "flax.core/sdk_widgets#type:PredictiveBackRoute", readonly [], false]>;
