// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"listener","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PipelineManifold extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PipelineManifold": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __PipelineManifold: unique symbol;
readonly [_flaxDartTypeValue]: PipelineManifold;

readonly semanticsEnabled: boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
requestVisualUpdate(): void;
}
defineObject("flax.core/sdk_rendering#type:PipelineManifold", ["semanticsEnabled"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:PipelineManifold", "object", {"requestVisualUpdate":_flaxMemberParameters0}, {}), ["removeListener"], undefined, "flax.core/flutter#type:Listenable");
const _PipelineManifoldProxy = {type: "flax.core/sdk_rendering#type:PipelineManifold", parameters: _flaxMemberParameters0, constructors: {}, methods: {"addListener":_flaxMemberParameters1,"removeListener":_flaxMemberParameters1,"requestVisualUpdate":_flaxMemberParameters0}, getters: ["semanticsEnabled"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _PipelineManifoldFactory { export function implement(args: [], implementation: {addListener: ((listener: (() => void)) => void); removeListener: ((listener: (() => void)) => void); requestVisualUpdate: (() => void); get semanticsEnabled(): boolean}): PipelineManifold {
return constructProxy(_PipelineManifoldProxy, args, implementation) as PipelineManifold; } }
export const PipelineManifold: typeof _PipelineManifoldFactory & _FlaxInstanceType<PipelineManifold> & _FlaxDartType<PipelineManifold, readonly ["class", "flax.core/sdk_rendering#type:PipelineManifold", readonly [], false]> = _flaxBindInstanceType<PipelineManifold, typeof _PipelineManifoldFactory>(_PipelineManifoldFactory, "flax.core/sdk_rendering#type:PipelineManifold", ["dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _PipelineManifoldFactory & _FlaxInstanceType<PipelineManifold> & _FlaxDartType<PipelineManifold, readonly ["class", "flax.core/sdk_rendering#type:PipelineManifold", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "semanticsEnabled" | "addListener" | "removeListener" | "requestVisualUpdate" | "__flaxBound:package:flutter/src/rendering/object.dart::PipelineManifold" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
