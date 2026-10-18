// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_DarwinPlatformViewController';
import '@flax/flutter/services/_bindings/sdk_services_DarwinPlatformViewController';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UiKitViewController extends Omit<upstream0.DarwinPlatformViewController, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::UiKitViewController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::DarwinPlatformViewController": readonly [] }> { readonly __UiKitViewController: unique symbol;
readonly [_flaxDartTypeValue]: UiKitViewController;

readonly id: number;
setLayoutDirection(layoutDirection: upstream1.TextDirection): Promise<void>;
acceptGesture(): Promise<void>;
rejectGesture(): Promise<void>;
dispose(): Promise<void>;
}
defineObject("flax.core/sdk_services#type:UiKitViewController", ["id"], [], _flaxBindingMethods("flax.core/sdk_services#type:UiKitViewController", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:DarwinPlatformViewController");
export const UiKitViewController: object & _FlaxInstanceType<UiKitViewController> & _FlaxDartType<UiKitViewController, readonly ["class", "flax.core/sdk_services#type:UiKitViewController", readonly [], false]> = _flaxBindInstanceType<UiKitViewController, object>({}, "flax.core/sdk_services#type:UiKitViewController", ["flax.core/sdk_services#type:DarwinPlatformViewController","dart:core::Object"]) as object & _FlaxInstanceType<UiKitViewController> & _FlaxDartType<UiKitViewController, readonly ["class", "flax.core/sdk_services#type:UiKitViewController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "id" | "setLayoutDirection" | "acceptGesture" | "rejectGesture" | "dispose" | "__flaxBound:package:flutter/src/services/platform_views.dart::UiKitViewController" | "__flaxBound:package:flutter/src/services/platform_views.dart::DarwinPlatformViewController";
