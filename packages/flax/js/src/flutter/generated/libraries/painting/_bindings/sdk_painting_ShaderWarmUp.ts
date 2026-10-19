// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
const _flaxMemberParameters0 = [{"name":"canvas","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShaderWarmUp extends Readonly<{ "__flaxBound:package:flutter/src/painting/shader_warm_up.dart::ShaderWarmUp": readonly [] }> { readonly __ShaderWarmUp: unique symbol;
readonly [_flaxDartTypeValue]: ShaderWarmUp;

}
defineObject("flax.core/sdk_painting#type:ShaderWarmUp", ["size"], [], _flaxBindingMethods("flax.core/sdk_painting#type:ShaderWarmUp", "object", {"warmUpOnCanvas":_flaxMemberParameters0,"execute":_flaxMemberParameters1}, {}), []);
const _ShaderWarmUpProxy = {type: "flax.core/sdk_painting#type:ShaderWarmUp", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"warmUpOnCanvas":_flaxMemberParameters0,"execute":_flaxMemberParameters1}, getters: ["size"], setters: [], contextMembers: [], superMembers: ["get:size","execute"]} as const;
export interface ShaderWarmUp {
readonly [_flaxDartTypeValue]: ShaderWarmUp;

execute(): Promise<void>;
get size(): upstream0.Size;
}
export abstract class ShaderWarmUp extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShaderWarmUp>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ShaderWarmUp;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ShaderWarmUp", readonly [], false];
constructor() { super(_ShaderWarmUpProxy, Array.from(arguments)); }
abstract warmUpOnCanvas(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>): Promise<void>;
}
_flaxDefineProxyBase(ShaderWarmUp.prototype, _ShaderWarmUpProxy);
export namespace ShaderWarmUp { export function implement(args: [], implementation: {warmUpOnCanvas: ((canvas: upstream1.Canvas) => Promise<void>)}): ShaderWarmUp {
return constructProxy(_ShaderWarmUpProxy, args, implementation) as ShaderWarmUp; } }
_flaxBindInstanceType<ShaderWarmUp, typeof ShaderWarmUp>(ShaderWarmUp, "flax.core/sdk_painting#type:ShaderWarmUp", ["dart:core::Object"]);
