// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TraversalDirection extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::TraversalDirection">, Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::TraversalDirection": readonly [] }> { readonly __TraversalDirection: unique symbol;
readonly [_flaxDartTypeValue]: TraversalDirection;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_widgets#type:TraversalDirection", ["up","right","down","left"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_TraversalDirection_api = {
up: enumValue<TraversalDirection>("flax.core/sdk_widgets#type:TraversalDirection", "up"),
right: enumValue<TraversalDirection>("flax.core/sdk_widgets#type:TraversalDirection", "right"),
down: enumValue<TraversalDirection>("flax.core/sdk_widgets#type:TraversalDirection", "down"),
left: enumValue<TraversalDirection>("flax.core/sdk_widgets#type:TraversalDirection", "left"),
values: Object.freeze([enumValue<TraversalDirection>("flax.core/sdk_widgets#type:TraversalDirection", "up"), enumValue<TraversalDirection>("flax.core/sdk_widgets#type:TraversalDirection", "right"), enumValue<TraversalDirection>("flax.core/sdk_widgets#type:TraversalDirection", "down"), enumValue<TraversalDirection>("flax.core/sdk_widgets#type:TraversalDirection", "left")]),
};
export const TraversalDirection = Object.freeze(_flaxBindInstanceType<TraversalDirection, typeof _flaxEnum_TraversalDirection_api>(_flaxEnum_TraversalDirection_api, "flax.core/sdk_widgets#type:TraversalDirection", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_TraversalDirection_api & _FlaxInstanceType<TraversalDirection> & _FlaxDartType<TraversalDirection, readonly ["class", "flax.core/sdk_widgets#type:TraversalDirection", readonly [], false]>);
