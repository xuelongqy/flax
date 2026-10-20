// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { _flaxMemberParameters2 } from "@flax/material-ui/_bindings/material.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DisabledChipAttributes extends Readonly<{ "__flaxBound:package:material_ui/src/chip.dart::DisabledChipAttributes": readonly [] }> { readonly __DisabledChipAttributes: unique symbol;
readonly [_flaxDartTypeValue]: DisabledChipAttributes;

readonly isEnabled: boolean;
readonly disabledColor: upstream0.Color | null;
}
defineObject("flax.material/material#type:DisabledChipAttributes", ["isEnabled","disabledColor"], [], _flaxBindingMethods("flax.material/material#type:DisabledChipAttributes", "object", {}, {}), []);
const _DisabledChipAttributesProxy = {type: "flax.material/material#type:DisabledChipAttributes", parameters: _flaxMemberParameters2, constructors: {}, methods: {}, getters: ["isEnabled","disabledColor"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _DisabledChipAttributesFactory { export function implement(args: [], implementation: {get isEnabled(): boolean; get disabledColor(): Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null}): DisabledChipAttributes {
return constructProxy(_DisabledChipAttributesProxy, args, implementation) as DisabledChipAttributes; } }
export const DisabledChipAttributes: typeof _DisabledChipAttributesFactory & _FlaxInstanceType<DisabledChipAttributes> & _FlaxDartType<DisabledChipAttributes, readonly ["class", "flax.material/material#type:DisabledChipAttributes", readonly [], false]> = _flaxBindInstanceType<DisabledChipAttributes, typeof _DisabledChipAttributesFactory>(_DisabledChipAttributesFactory, "flax.material/material#type:DisabledChipAttributes", ["dart:core::Object"]) as typeof _DisabledChipAttributesFactory & _FlaxInstanceType<DisabledChipAttributes> & _FlaxDartType<DisabledChipAttributes, readonly ["class", "flax.material/material#type:DisabledChipAttributes", readonly [], false]>;
