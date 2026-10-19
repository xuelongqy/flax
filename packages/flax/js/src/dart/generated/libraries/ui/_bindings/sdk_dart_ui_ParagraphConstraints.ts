// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"width","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ParagraphConstraints extends Readonly<{ "__flaxBound:dart:ui::ParagraphConstraints": readonly [] }> { readonly __ParagraphConstraints: unique symbol;
readonly [_flaxDartTypeValue]: ParagraphConstraints;

}
defineObject("flax.core/sdk_dart_ui#type:ParagraphConstraints", ["width"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:ParagraphConstraints", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _ParagraphConstraintsProxy = {type: "flax.core/sdk_dart_ui#type:ParagraphConstraints", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["width"], setters: [], contextMembers: [], superMembers: ["get:width","toString"]} as const;
export interface ParagraphConstraints {
readonly [_flaxDartTypeValue]: ParagraphConstraints;

toString(): string;
get width(): number;
}
export abstract class ParagraphConstraints extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ParagraphConstraints>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ParagraphConstraints;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:ParagraphConstraints", readonly [], false];
constructor(options: {width: number}) { super(_ParagraphConstraintsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ParagraphConstraints.prototype, _ParagraphConstraintsProxy);
export namespace ParagraphConstraints { export function implement(args: [options: {width: number}], implementation: {}): ParagraphConstraints {
return constructProxy(_ParagraphConstraintsProxy, args, implementation) as ParagraphConstraints; } }
_flaxBindInstanceType<ParagraphConstraints, typeof ParagraphConstraints>(ParagraphConstraints, "flax.core/sdk_dart_ui#type:ParagraphConstraints", ["dart:core::Object"]);
