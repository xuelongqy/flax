// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TappableChipAttributes extends Readonly<{ "__flaxBound:package:flutter/src/material/chip.dart::TappableChipAttributes": readonly [] }> { readonly __TappableChipAttributes: unique symbol;
readonly [_flaxDartTypeValue]: TappableChipAttributes;

readonly onPressed: (() => void) | null;
readonly pressElevation: number | null;
readonly tooltip: string | null;
}
defineObject("flax.core/sdk_material#type:TappableChipAttributes", ["onPressed","pressElevation","tooltip"], [], _flaxBindingMethods("flax.core/sdk_material#type:TappableChipAttributes", "object", {}, {}), []);
const _TappableChipAttributesProxy = {type: "flax.core/sdk_material#type:TappableChipAttributes", parameters: _flaxMemberParameters0, constructors: {}, methods: {}, getters: ["onPressed","pressElevation","tooltip"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _TappableChipAttributesFactory { export function implement(args: [], implementation: {get onPressed(): (() => void) | null; get pressElevation(): number | null; get tooltip(): string | null}): TappableChipAttributes {
return constructProxy(_TappableChipAttributesProxy, args, implementation) as TappableChipAttributes; } }
export const TappableChipAttributes: typeof _TappableChipAttributesFactory & _FlaxInstanceType<TappableChipAttributes> & _FlaxDartType<TappableChipAttributes, readonly ["class", "flax.core/sdk_material#type:TappableChipAttributes", readonly [], false]> = _flaxBindInstanceType<TappableChipAttributes, typeof _TappableChipAttributesFactory>(_TappableChipAttributesFactory, "flax.core/sdk_material#type:TappableChipAttributes", ["dart:core::Object"]) as typeof _TappableChipAttributesFactory & _FlaxInstanceType<TappableChipAttributes> & _FlaxDartType<TappableChipAttributes, readonly ["class", "flax.core/sdk_material#type:TappableChipAttributes", readonly [], false]>;
