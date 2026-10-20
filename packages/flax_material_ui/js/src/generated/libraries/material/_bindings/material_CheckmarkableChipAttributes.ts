// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { _flaxMemberParameters2 } from "@flax/material-ui/_bindings/material.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CheckmarkableChipAttributes extends Readonly<{ "__flaxBound:package:material_ui/src/chip.dart::CheckmarkableChipAttributes": readonly [] }> { readonly __CheckmarkableChipAttributes: unique symbol;
readonly [_flaxDartTypeValue]: CheckmarkableChipAttributes;

readonly showCheckmark: boolean | null;
readonly checkmarkColor: upstream0.Color | null;
}
defineObject("flax.material/material#type:CheckmarkableChipAttributes", ["showCheckmark","checkmarkColor"], [], _flaxBindingMethods("flax.material/material#type:CheckmarkableChipAttributes", "object", {}, {}), []);
const _CheckmarkableChipAttributesProxy = {type: "flax.material/material#type:CheckmarkableChipAttributes", parameters: _flaxMemberParameters2, constructors: {}, methods: {}, getters: ["showCheckmark","checkmarkColor"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _CheckmarkableChipAttributesFactory { export function implement(args: [], implementation: {get showCheckmark(): boolean | null; get checkmarkColor(): Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null}): CheckmarkableChipAttributes {
return constructProxy(_CheckmarkableChipAttributesProxy, args, implementation) as CheckmarkableChipAttributes; } }
export const CheckmarkableChipAttributes: typeof _CheckmarkableChipAttributesFactory & _FlaxInstanceType<CheckmarkableChipAttributes> & _FlaxDartType<CheckmarkableChipAttributes, readonly ["class", "flax.material/material#type:CheckmarkableChipAttributes", readonly [], false]> = _flaxBindInstanceType<CheckmarkableChipAttributes, typeof _CheckmarkableChipAttributesFactory>(_CheckmarkableChipAttributesFactory, "flax.material/material#type:CheckmarkableChipAttributes", ["dart:core::Object"]) as typeof _CheckmarkableChipAttributesFactory & _FlaxInstanceType<CheckmarkableChipAttributes> & _FlaxDartType<CheckmarkableChipAttributes, readonly ["class", "flax.material/material#type:CheckmarkableChipAttributes", readonly [], false]>;
