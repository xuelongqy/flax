// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DeletableChipAttributes extends Readonly<{ "__flaxBound:package:flutter/src/material/chip.dart::DeletableChipAttributes": readonly [] }> { readonly __DeletableChipAttributes: unique symbol;
readonly [_flaxDartTypeValue]: DeletableChipAttributes;

readonly deleteIcon: Widget | null;
readonly onDeleted: (() => void) | null;
readonly deleteIconColor: upstream0.Color | null;
readonly deleteButtonTooltipMessage: string | null;
readonly deleteIconBoxConstraints: upstream1.BoxConstraints | null;
}
defineObject("flax.core/sdk_material#type:DeletableChipAttributes", ["deleteIcon","onDeleted","deleteIconColor","deleteButtonTooltipMessage","deleteIconBoxConstraints"], [], _flaxBindingMethods("flax.core/sdk_material#type:DeletableChipAttributes", "object", {}, {}), []);
const _DeletableChipAttributesProxy = {type: "flax.core/sdk_material#type:DeletableChipAttributes", parameters: _flaxMemberParameters0, constructors: {}, methods: {}, getters: ["deleteIcon","onDeleted","deleteIconColor","deleteButtonTooltipMessage","deleteIconBoxConstraints"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _DeletableChipAttributesFactory { export function implement(args: [], implementation: {get deleteIcon(): Widget | null; get onDeleted(): (() => void) | null; get deleteIconColor(): Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null; get deleteButtonTooltipMessage(): string | null; get deleteIconBoxConstraints(): Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null}): DeletableChipAttributes {
return constructProxy(_DeletableChipAttributesProxy, args, implementation) as DeletableChipAttributes; } }
export const DeletableChipAttributes: typeof _DeletableChipAttributesFactory & _FlaxInstanceType<DeletableChipAttributes> & _FlaxDartType<DeletableChipAttributes, readonly ["class", "flax.core/sdk_material#type:DeletableChipAttributes", readonly [], false]> = _flaxBindInstanceType<DeletableChipAttributes, typeof _DeletableChipAttributesFactory>(_DeletableChipAttributesFactory, "flax.core/sdk_material#type:DeletableChipAttributes", ["dart:core::Object"]) as typeof _DeletableChipAttributesFactory & _FlaxInstanceType<DeletableChipAttributes> & _FlaxDartType<DeletableChipAttributes, readonly ["class", "flax.core/sdk_material#type:DeletableChipAttributes", readonly [], false]>;
