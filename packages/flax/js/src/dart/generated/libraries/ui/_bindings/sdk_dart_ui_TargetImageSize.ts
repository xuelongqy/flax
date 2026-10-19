// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters162 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TargetImageSize extends Readonly<{ "__flaxBound:dart:ui::TargetImageSize": readonly [] }> { readonly __TargetImageSize: unique symbol;
readonly [_flaxDartTypeValue]: TargetImageSize;

}
defineObject("flax.core/sdk_dart_ui#type:TargetImageSize", ["width","height"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:TargetImageSize", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _TargetImageSizeProxy = {type: "flax.core/sdk_dart_ui#type:TargetImageSize", parameters: _flaxMemberParameters162, constructors: {"": _flaxMemberParameters162}, methods: {"toString":_flaxMemberParameters0}, getters: ["width","height"], setters: [], contextMembers: [], superMembers: ["get:width","get:height","toString"]} as const;
export interface TargetImageSize {
readonly [_flaxDartTypeValue]: TargetImageSize;

toString(): string;
get width(): number | null;
get height(): number | null;
}
export abstract class TargetImageSize extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TargetImageSize>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TargetImageSize;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:TargetImageSize", readonly [], false];
constructor(options?: {width?: number | null | undefined; height?: number | null | undefined}) { super(_TargetImageSizeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TargetImageSize.prototype, _TargetImageSizeProxy);
export namespace TargetImageSize { export function implement(args: [options?: {width?: number | null | undefined; height?: number | null | undefined}], implementation: {}): TargetImageSize {
return constructProxy(_TargetImageSizeProxy, args, implementation) as TargetImageSize; } }
_flaxBindInstanceType<TargetImageSize, typeof TargetImageSize>(TargetImageSize, "flax.core/sdk_dart_ui#type:TargetImageSize", ["dart:core::Object"]);
