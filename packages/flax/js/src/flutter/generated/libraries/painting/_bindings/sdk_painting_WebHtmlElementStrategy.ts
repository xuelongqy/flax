// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WebHtmlElementStrategy extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/painting/image_provider.dart::WebHtmlElementStrategy">, Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::WebHtmlElementStrategy": readonly [] }> { readonly __WebHtmlElementStrategy: unique symbol;
readonly [_flaxDartTypeValue]: WebHtmlElementStrategy;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_painting#type:WebHtmlElementStrategy", ["never","fallback","prefer"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_WebHtmlElementStrategy_api = {
never: enumValue<WebHtmlElementStrategy>("flax.core/sdk_painting#type:WebHtmlElementStrategy", "never"),
fallback: enumValue<WebHtmlElementStrategy>("flax.core/sdk_painting#type:WebHtmlElementStrategy", "fallback"),
prefer: enumValue<WebHtmlElementStrategy>("flax.core/sdk_painting#type:WebHtmlElementStrategy", "prefer"),
values: Object.freeze([enumValue<WebHtmlElementStrategy>("flax.core/sdk_painting#type:WebHtmlElementStrategy", "never"), enumValue<WebHtmlElementStrategy>("flax.core/sdk_painting#type:WebHtmlElementStrategy", "fallback"), enumValue<WebHtmlElementStrategy>("flax.core/sdk_painting#type:WebHtmlElementStrategy", "prefer")]),
};
export const WebHtmlElementStrategy = Object.freeze(_flaxBindInstanceType<WebHtmlElementStrategy, typeof _flaxEnum_WebHtmlElementStrategy_api>(_flaxEnum_WebHtmlElementStrategy_api, "flax.core/sdk_painting#type:WebHtmlElementStrategy", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_WebHtmlElementStrategy_api & _FlaxInstanceType<WebHtmlElementStrategy> & _FlaxDartType<WebHtmlElementStrategy, readonly ["class", "flax.core/sdk_painting#type:WebHtmlElementStrategy", readonly [], false]>);
