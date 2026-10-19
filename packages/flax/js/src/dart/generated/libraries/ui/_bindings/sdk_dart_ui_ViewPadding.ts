// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ViewPadding extends Readonly<{ "__flaxBound:dart:ui::ViewPadding": readonly [] }> { readonly __ViewPadding: unique symbol;
readonly [_flaxDartTypeValue]: ViewPadding;

readonly left: number;
readonly top: number;
readonly right: number;
readonly bottom: number;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:ViewPadding", ["left","top","right","bottom"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:ViewPadding", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _ViewPaddingProxy = {type: "flax.core/sdk_dart_ui#type:ViewPadding", parameters: _flaxMemberParameters0, constructors: {}, methods: {"toString":_flaxMemberParameters0}, getters: ["left","top","right","bottom"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _ViewPaddingFactory { export function implement(args: [], implementation: {toString: (() => string); get left(): number; get top(): number; get right(): number; get bottom(): number}): ViewPadding {
return constructProxy(_ViewPaddingProxy, args, implementation) as ViewPadding; } }
export namespace _ViewPaddingFactory { export declare const zero: ViewPadding; }
_flaxDefineStaticGetters(_ViewPaddingFactory, "flax.core/sdk_dart_ui#read:ViewPadding.", ["zero"]);
export const ViewPadding: typeof _ViewPaddingFactory & _FlaxInstanceType<ViewPadding> & _FlaxDartType<ViewPadding, readonly ["class", "flax.core/sdk_dart_ui#type:ViewPadding", readonly [], false]> = _flaxBindInstanceType<ViewPadding, typeof _ViewPaddingFactory>(_ViewPaddingFactory, "flax.core/sdk_dart_ui#type:ViewPadding", ["dart:core::Object"]) as typeof _ViewPaddingFactory & _FlaxInstanceType<ViewPadding> & _FlaxDartType<ViewPadding, readonly ["class", "flax.core/sdk_dart_ui#type:ViewPadding", readonly [], false]>;
