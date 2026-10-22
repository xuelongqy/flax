// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_VertexMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_VertexMode';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { _flaxMemberParameters0, _flaxMemberParameters185 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Vertices extends Readonly<{ "__flaxBound:dart:ui::Vertices": readonly [] }> { readonly __Vertices: unique symbol;
readonly [_flaxDartTypeValue]: Vertices;

readonly debugDisposed: boolean;
dispose(): void;
}
defineObject("flax.core/sdk_dart_ui#type:Vertices", ["debugDisposed"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:Vertices", "object", {"dispose":_flaxMemberParameters0}, {}), []);
export function _VerticesFactory(mode: upstream0.VertexMode, positions: DartListInput<upstream1.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options: { colors?: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>> | null | undefined; textureCoordinates?: DartListInput<upstream1.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>> | null | undefined; indices?: DartListInput<number, number> | null | undefined } = {}): Vertices {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:Vertices", "", [{"name":"mode","required":true,"positional":true},{"name":"positions","required":true,"positional":true},{"name":"colors"},{"name":"textureCoordinates"},{"name":"indices"}], [mode, positions], options) as Vertices;
}
export namespace _VerticesFactory {
export function raw(mode: upstream0.VertexMode, positions: globalThis.Float32Array, options: { colors?: globalThis.Int32Array | null | undefined; textureCoordinates?: globalThis.Float32Array | null | undefined; indices?: globalThis.Uint16Array | null | undefined } = {}): Vertices {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:Vertices", "raw", [{"name":"mode","required":true,"positional":true},{"name":"positions","required":true,"positional":true},{"name":"colors"},{"name":"textureCoordinates"},{"name":"indices"}], [mode, positions], options) as Vertices;
}
}
const _VerticesProxy = {type: "flax.core/sdk_dart_ui#type:Vertices", parameters: _flaxMemberParameters185, constructors: {"": _flaxMemberParameters185,"raw": _flaxMemberParameters185}, methods: {"dispose":_flaxMemberParameters0}, getters: ["debugDisposed"], setters: [], contextMembers: [], superMembers: ["get:debugDisposed","dispose"]} as const;
export interface _VerticesNative extends Vertices {
readonly [_flaxDartTypeValue]: _VerticesNative;
readonly [_flaxDartConstructors]?: {"": (mode: upstream0.VertexMode, positions: DartListInput<upstream1.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options?: {colors?: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>> | null | undefined; textureCoordinates?: DartListInput<upstream1.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>> | null | undefined; indices?: DartListInput<number, number> | null | undefined}) => void;"raw": (mode: upstream0.VertexMode, positions: globalThis.Float32Array, options?: {colors?: globalThis.Int32Array | null | undefined; textureCoordinates?: globalThis.Float32Array | null | undefined; indices?: globalThis.Uint16Array | null | undefined}) => void;};

dispose(): void;
get debugDisposed(): boolean;
}
export abstract class _VerticesNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Vertices>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Vertices;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:Vertices", readonly [], false];
constructor(mode: upstream0.VertexMode, positions: DartListInput<upstream1.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options?: {colors?: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>> | null | undefined; textureCoordinates?: DartListInput<upstream1.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>> | null | undefined; indices?: DartListInput<number, number> | null | undefined}); constructor(call: _FlaxProxySuper<_VerticesNative>); constructor(...args: unknown[]) { super(_VerticesProxy, args); }
}
_flaxDefineProxyBase(_VerticesNative.prototype, _VerticesProxy);
export namespace _VerticesFactory { export function implement(args: [mode: upstream0.VertexMode, positions: DartListInput<upstream1.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options?: {colors?: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>> | null | undefined; textureCoordinates?: DartListInput<upstream1.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>> | null | undefined; indices?: DartListInput<number, number> | null | undefined}], implementation: {}): Vertices {
return constructProxy(_VerticesProxy, args, implementation) as Vertices; } }
const _VerticesBinding = _flaxProxyFactory(_VerticesFactory, _VerticesNative) as unknown as typeof _VerticesFactory & (new(mode: upstream0.VertexMode, positions: DartListInput<upstream1.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options?: {colors?: DartListInput<upstream2.Color, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>> | null | undefined; textureCoordinates?: DartListInput<upstream1.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>> | null | undefined; indices?: DartListInput<number, number> | null | undefined}) => _VerticesNative) & (new(call: _FlaxProxySuper<_VerticesNative>) => _VerticesNative);
export const Vertices: typeof _VerticesBinding & _FlaxInstanceType<Vertices> & _FlaxDartType<Vertices, readonly ["class", "flax.core/sdk_dart_ui#type:Vertices", readonly [], false]> = _flaxBindInstanceType<Vertices, typeof _VerticesBinding>(_VerticesBinding, "flax.core/sdk_dart_ui#type:Vertices", ["dart:core::Object"]) as typeof _VerticesBinding & _FlaxInstanceType<Vertices> & _FlaxDartType<Vertices, readonly ["class", "flax.core/sdk_dart_ui#type:Vertices", readonly [], false]>;
