// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
const _flaxMemberParameters0 = [{"name":"i","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"i","required":true,"positional":true},{"name":"opacity"},{"name":"transform"}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"i","required":true,"positional":true},{"name":"transform"},{"name":"opacity"}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlowPaintingContext extends Readonly<{ "__flaxBound:package:flutter/src/rendering/flow.dart::FlowPaintingContext": readonly [] }> { readonly __FlowPaintingContext: unique symbol;
readonly [_flaxDartTypeValue]: FlowPaintingContext;

readonly size: upstream0.Size;
readonly childCount: number;
getChildSize(i: number): upstream0.Size | null;
paintChild(i: number, options?: {opacity?: number | undefined; transform?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | undefined}): void;
}
defineObject("flax.core/sdk_rendering#type:FlowPaintingContext", ["size","childCount"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:FlowPaintingContext", "object", {"getChildSize":_flaxMemberParameters0,"paintChild":_flaxMemberParameters1}, {}), []);
const _FlowPaintingContextProxy = {type: "flax.core/sdk_rendering#type:FlowPaintingContext", parameters: _flaxMemberParameters2, constructors: {}, methods: {"getChildSize":_flaxMemberParameters0,"paintChild":_flaxMemberParameters3}, getters: ["size","childCount"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _FlowPaintingContextFactory { export function implement(args: [], implementation: {getChildSize: ((i: number) => Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null); paintChild: ((i: number, options?: { transform?: upstream1.Matrix4 | undefined; opacity?: number | undefined }) => void); get size(): Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; get childCount(): number}): FlowPaintingContext {
return constructProxy(_FlowPaintingContextProxy, args, implementation) as FlowPaintingContext; } }
export const FlowPaintingContext: typeof _FlowPaintingContextFactory & _FlaxInstanceType<FlowPaintingContext> & _FlaxDartType<FlowPaintingContext, readonly ["class", "flax.core/sdk_rendering#type:FlowPaintingContext", readonly [], false]> = _flaxBindInstanceType<FlowPaintingContext, typeof _FlowPaintingContextFactory>(_FlowPaintingContextFactory, "flax.core/sdk_rendering#type:FlowPaintingContext", ["dart:core::Object"]) as typeof _FlowPaintingContextFactory & _FlaxInstanceType<FlowPaintingContext> & _FlaxDartType<FlowPaintingContext, readonly ["class", "flax.core/sdk_rendering#type:FlowPaintingContext", readonly [], false]>;
