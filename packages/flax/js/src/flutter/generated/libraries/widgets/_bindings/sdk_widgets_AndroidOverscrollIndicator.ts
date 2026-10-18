// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AndroidOverscrollIndicator extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::AndroidOverscrollIndicator">, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::AndroidOverscrollIndicator": readonly [] }> { readonly __AndroidOverscrollIndicator: unique symbol;
readonly [_flaxDartTypeValue]: AndroidOverscrollIndicator;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_widgets#type:AndroidOverscrollIndicator", ["stretch","glow"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_AndroidOverscrollIndicator_api = {
stretch: enumValue<AndroidOverscrollIndicator>("flax.core/sdk_widgets#type:AndroidOverscrollIndicator", "stretch"),
glow: enumValue<AndroidOverscrollIndicator>("flax.core/sdk_widgets#type:AndroidOverscrollIndicator", "glow"),
values: Object.freeze([enumValue<AndroidOverscrollIndicator>("flax.core/sdk_widgets#type:AndroidOverscrollIndicator", "stretch"), enumValue<AndroidOverscrollIndicator>("flax.core/sdk_widgets#type:AndroidOverscrollIndicator", "glow")]),
};
export const AndroidOverscrollIndicator = Object.freeze(_flaxBindInstanceType<AndroidOverscrollIndicator, typeof _flaxEnum_AndroidOverscrollIndicator_api>(_flaxEnum_AndroidOverscrollIndicator_api, "flax.core/sdk_widgets#type:AndroidOverscrollIndicator", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_AndroidOverscrollIndicator_api & _FlaxInstanceType<AndroidOverscrollIndicator> & _FlaxDartType<AndroidOverscrollIndicator, readonly ["class", "flax.core/sdk_widgets#type:AndroidOverscrollIndicator", readonly [], false]>);
