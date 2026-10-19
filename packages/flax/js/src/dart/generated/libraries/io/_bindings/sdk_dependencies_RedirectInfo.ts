// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RedirectInfo extends Readonly<{ "__flaxBound:dart:_http::RedirectInfo": readonly [] }> { readonly __RedirectInfo: unique symbol;
readonly [_flaxDartTypeValue]: RedirectInfo;

readonly statusCode: number;
readonly method: string;
readonly location: upstream0.Uri;
}
defineObject("flax.core/sdk_dependencies#type:RedirectInfo", ["statusCode","method","location"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:RedirectInfo", "object", {}, {}), []);
export const RedirectInfo: object & _FlaxInstanceType<RedirectInfo> & _FlaxDartType<RedirectInfo, readonly ["class", "flax.core/sdk_dependencies#type:RedirectInfo", readonly [], false]> = _flaxBindInstanceType<RedirectInfo, object>({}, "flax.core/sdk_dependencies#type:RedirectInfo", ["dart:core::Object"]) as object & _FlaxInstanceType<RedirectInfo> & _FlaxDartType<RedirectInfo, readonly ["class", "flax.core/sdk_dependencies#type:RedirectInfo", readonly [], false]>;
