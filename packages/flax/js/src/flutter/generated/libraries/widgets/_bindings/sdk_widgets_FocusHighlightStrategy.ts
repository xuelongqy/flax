// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FocusHighlightStrategy extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusHighlightStrategy">, Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusHighlightStrategy": readonly [] }> { readonly __FocusHighlightStrategy: unique symbol;
readonly [_flaxDartTypeValue]: FocusHighlightStrategy;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_widgets#type:FocusHighlightStrategy", ["automatic","alwaysTouch","alwaysTraditional"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_FocusHighlightStrategy_api = {
automatic: enumValue<FocusHighlightStrategy>("flax.core/sdk_widgets#type:FocusHighlightStrategy", "automatic"),
alwaysTouch: enumValue<FocusHighlightStrategy>("flax.core/sdk_widgets#type:FocusHighlightStrategy", "alwaysTouch"),
alwaysTraditional: enumValue<FocusHighlightStrategy>("flax.core/sdk_widgets#type:FocusHighlightStrategy", "alwaysTraditional"),
values: Object.freeze([enumValue<FocusHighlightStrategy>("flax.core/sdk_widgets#type:FocusHighlightStrategy", "automatic"), enumValue<FocusHighlightStrategy>("flax.core/sdk_widgets#type:FocusHighlightStrategy", "alwaysTouch"), enumValue<FocusHighlightStrategy>("flax.core/sdk_widgets#type:FocusHighlightStrategy", "alwaysTraditional")]),
};
export const FocusHighlightStrategy = Object.freeze(_flaxBindInstanceType<FocusHighlightStrategy, typeof _flaxEnum_FocusHighlightStrategy_api>(_flaxEnum_FocusHighlightStrategy_api, "flax.core/sdk_widgets#type:FocusHighlightStrategy", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_FocusHighlightStrategy_api & _FlaxInstanceType<FocusHighlightStrategy> & _FlaxDartType<FocusHighlightStrategy, readonly ["class", "flax.core/sdk_widgets#type:FocusHighlightStrategy", readonly [], false]>);
