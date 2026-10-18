// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_ValueKey';
import '@flax/flutter/foundation/_bindings/flutter_ValueKey';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StandardComponentType extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/standard_component_type.dart::StandardComponentType": readonly [] }> { readonly __StandardComponentType: unique symbol;
readonly [_flaxDartTypeValue]: StandardComponentType;
readonly name: string;
readonly index: number;

readonly key: upstream1.ValueKey<StandardComponentType>;
}
defineEnum("flax.core/sdk_widgets#type:StandardComponentType", ["backButton","closeButton","moreButton","drawerButton"], {
get key(): upstream1.ValueKey<StandardComponentType> { return invokeTopLevel("flax.core/sdk_widgets#function:StandardComponentType.key%3Aget", [this]) as upstream1.ValueKey<StandardComponentType>; },
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_StandardComponentType_api = {
backButton: enumValue<StandardComponentType>("flax.core/sdk_widgets#type:StandardComponentType", "backButton"),
closeButton: enumValue<StandardComponentType>("flax.core/sdk_widgets#type:StandardComponentType", "closeButton"),
moreButton: enumValue<StandardComponentType>("flax.core/sdk_widgets#type:StandardComponentType", "moreButton"),
drawerButton: enumValue<StandardComponentType>("flax.core/sdk_widgets#type:StandardComponentType", "drawerButton"),
values: Object.freeze([enumValue<StandardComponentType>("flax.core/sdk_widgets#type:StandardComponentType", "backButton"), enumValue<StandardComponentType>("flax.core/sdk_widgets#type:StandardComponentType", "closeButton"), enumValue<StandardComponentType>("flax.core/sdk_widgets#type:StandardComponentType", "moreButton"), enumValue<StandardComponentType>("flax.core/sdk_widgets#type:StandardComponentType", "drawerButton")]),
};
export const StandardComponentType = Object.freeze(_flaxBindInstanceType<StandardComponentType, typeof _flaxEnum_StandardComponentType_api>(_flaxEnum_StandardComponentType_api, "flax.core/sdk_widgets#type:StandardComponentType", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_StandardComponentType_api & _FlaxInstanceType<StandardComponentType> & _FlaxDartType<StandardComponentType, readonly ["class", "flax.core/sdk_widgets#type:StandardComponentType", readonly [], false]>);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "key" | "__flaxBound:package:flutter/src/widgets/standard_component_type.dart::StandardComponentType";
