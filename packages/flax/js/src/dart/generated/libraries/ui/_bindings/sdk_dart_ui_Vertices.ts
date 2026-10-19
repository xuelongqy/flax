// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_VertexMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_VertexMode';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { _flaxMemberParameters0, _flaxMemberParameters172 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Vertices extends Readonly<{ "__flaxBound:dart:ui::Vertices": readonly [] }> { readonly __Vertices: unique symbol;
readonly [_flaxDartTypeValue]: Vertices;

}
defineObject("flax.core/sdk_dart_ui#type:Vertices", ["debugDisposed"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:Vertices", "object", {"dispose":_flaxMemberParameters0}, {}), []);
const _VerticesProxy = {type: "flax.core/sdk_dart_ui#type:Vertices", parameters: _flaxMemberParameters172, constructors: {"": _flaxMemberParameters172}, methods: {"dispose":_flaxMemberParameters0}, getters: ["debugDisposed"], setters: [], contextMembers: [], superMembers: ["get:debugDisposed","dispose"]} as const;
export interface Vertices {
readonly [_flaxDartTypeValue]: Vertices;

dispose(): void;
get debugDisposed(): boolean;
}
export abstract class Vertices extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Vertices>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Vertices;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:Vertices", readonly [], false];
constructor(mode: upstream0.VertexMode, positions: DartListInput<upstream1.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options?: {colors?: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>> | null | undefined; textureCoordinates?: DartListInput<upstream1.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>> | null | undefined; indices?: DartListInput<number, number> | null | undefined}) { super(_VerticesProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(Vertices.prototype, _VerticesProxy);
export namespace Vertices { export function implement(args: [mode: upstream0.VertexMode, positions: DartListInput<upstream1.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options?: {colors?: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>> | null | undefined; textureCoordinates?: DartListInput<upstream1.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>> | null | undefined; indices?: DartListInput<number, number> | null | undefined}], implementation: {}): Vertices {
return constructProxy(_VerticesProxy, args, implementation) as Vertices; } }
_flaxBindInstanceType<Vertices, typeof Vertices>(Vertices, "flax.core/sdk_dart_ui#type:Vertices", ["dart:core::Object"]);
