// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FocusHighlightMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusHighlightMode">, Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusHighlightMode": readonly [] }> { readonly __FocusHighlightMode: unique symbol;
readonly [_flaxDartTypeValue]: FocusHighlightMode;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_widgets#type:FocusHighlightMode", ["touch","traditional"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_FocusHighlightMode_api = {
touch: enumValue<FocusHighlightMode>("flax.core/sdk_widgets#type:FocusHighlightMode", "touch"),
traditional: enumValue<FocusHighlightMode>("flax.core/sdk_widgets#type:FocusHighlightMode", "traditional"),
values: Object.freeze([enumValue<FocusHighlightMode>("flax.core/sdk_widgets#type:FocusHighlightMode", "touch"), enumValue<FocusHighlightMode>("flax.core/sdk_widgets#type:FocusHighlightMode", "traditional")]),
};
export const FocusHighlightMode = Object.freeze(_flaxBindInstanceType<FocusHighlightMode, typeof _flaxEnum_FocusHighlightMode_api>(_flaxEnum_FocusHighlightMode_api, "flax.core/sdk_widgets#type:FocusHighlightMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_FocusHighlightMode_api & _FlaxInstanceType<FocusHighlightMode> & _FlaxDartType<FocusHighlightMode, readonly ["class", "flax.core/sdk_widgets#type:FocusHighlightMode", readonly [], false]>);
