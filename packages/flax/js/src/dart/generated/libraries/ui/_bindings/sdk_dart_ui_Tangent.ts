// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters161 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Tangent extends Readonly<{ "__flaxBound:dart:ui::Tangent": readonly [] }> { readonly __Tangent: unique symbol;
readonly [_flaxDartTypeValue]: Tangent;

}
defineObject("flax.core/sdk_dart_ui#type:Tangent", ["position","vector","angle"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:Tangent", "object", {}, {}), []);
const _TangentProxy = {type: "flax.core/sdk_dart_ui#type:Tangent", parameters: _flaxMemberParameters161, constructors: {"": _flaxMemberParameters161}, methods: {}, getters: ["position","vector","angle"], setters: [], contextMembers: [], superMembers: ["get:position","get:vector","get:angle"]} as const;
export interface Tangent {
readonly [_flaxDartTypeValue]: Tangent;

get position(): upstream0.Offset;
get vector(): upstream0.Offset;
get angle(): number;
}
export abstract class Tangent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Tangent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Tangent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:Tangent", readonly [], false];
constructor(position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, vector: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) { super(_TangentProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(Tangent.prototype, _TangentProxy);
export namespace Tangent { export function implement(args: [position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, vector: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>], implementation: {}): Tangent {
return constructProxy(_TangentProxy, args, implementation) as Tangent; } }
_flaxBindInstanceType<Tangent, typeof Tangent>(Tangent, "flax.core/sdk_dart_ui#type:Tangent", ["dart:core::Object"]);
