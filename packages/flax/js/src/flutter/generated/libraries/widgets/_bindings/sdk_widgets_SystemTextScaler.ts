// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import { _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SystemTextScaler extends Omit<upstream0.TextScaler, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/media_query.dart::SystemTextScaler": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> { readonly __SystemTextScaler: unique symbol;
readonly [_flaxDartTypeValue]: SystemTextScaler;

readonly textScaleFactor: number;
scale(fontSize: number): number;
clamp(options?: {maxScaleFactor?: number | undefined; minScaleFactor?: number | undefined}): upstream0.TextScaler;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:SystemTextScaler", ["textScaleFactor"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SystemTextScaler", "object", {"toString":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_painting#type:TextScaler");
export const SystemTextScaler: object & _FlaxInstanceType<SystemTextScaler> & _FlaxDartType<SystemTextScaler, readonly ["class", "flax.core/sdk_widgets#type:SystemTextScaler", readonly [], false]> = _flaxBindInstanceType<SystemTextScaler, object>({}, "flax.core/sdk_widgets#type:SystemTextScaler", ["flax.core/sdk_painting#type:TextScaler","dart:core::Object"]) as object & _FlaxInstanceType<SystemTextScaler> & _FlaxDartType<SystemTextScaler, readonly ["class", "flax.core/sdk_widgets#type:SystemTextScaler", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "textScaleFactor" | "scale" | "clamp" | "toString" | "__flaxBound:package:flutter/src/widgets/media_query.dart::SystemTextScaler" | "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler";
