// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectableChipAttributes extends Readonly<{ "__flaxBound:package:flutter/src/material/chip.dart::SelectableChipAttributes": readonly [] }> { readonly __SelectableChipAttributes: unique symbol;
readonly [_flaxDartTypeValue]: SelectableChipAttributes;

readonly selected: boolean;
readonly onSelected: ((value: boolean) => void) | null;
readonly pressElevation: number | null;
readonly selectedColor: upstream0.Color | null;
readonly selectedShadowColor: upstream0.Color | null;
readonly tooltip: string | null;
readonly avatarBorder: upstream1.ShapeBorder;
}
defineObject("flax.core/sdk_material#type:SelectableChipAttributes", ["selected","onSelected","pressElevation","selectedColor","selectedShadowColor","tooltip","avatarBorder"], [], _flaxBindingMethods("flax.core/sdk_material#type:SelectableChipAttributes", "object", {}, {}), []);
const _SelectableChipAttributesProxy = {type: "flax.core/sdk_material#type:SelectableChipAttributes", parameters: _flaxMemberParameters0, constructors: {}, methods: {}, getters: ["selected","onSelected","pressElevation","selectedColor","selectedShadowColor","tooltip","avatarBorder"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _SelectableChipAttributesFactory { export function implement(args: [], implementation: {get selected(): boolean; get onSelected(): ((value: boolean) => void) | null; get pressElevation(): number | null; get selectedColor(): Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null; get selectedShadowColor(): Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null; get tooltip(): string | null; get avatarBorder(): Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>}): SelectableChipAttributes {
return constructProxy(_SelectableChipAttributesProxy, args, implementation) as SelectableChipAttributes; } }
export const SelectableChipAttributes: typeof _SelectableChipAttributesFactory & _FlaxInstanceType<SelectableChipAttributes> & _FlaxDartType<SelectableChipAttributes, readonly ["class", "flax.core/sdk_material#type:SelectableChipAttributes", readonly [], false]> = _flaxBindInstanceType<SelectableChipAttributes, typeof _SelectableChipAttributesFactory>(_SelectableChipAttributesFactory, "flax.core/sdk_material#type:SelectableChipAttributes", ["dart:core::Object"]) as typeof _SelectableChipAttributesFactory & _FlaxInstanceType<SelectableChipAttributes> & _FlaxDartType<SelectableChipAttributes, readonly ["class", "flax.core/sdk_material#type:SelectableChipAttributes", readonly [], false]>;
