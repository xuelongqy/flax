// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AndroidViewController';
import '@flax/flutter/services/_bindings/sdk_services_AndroidViewController';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_PlatformViewController';
import '@flax/flutter/services/_bindings/sdk_services_PlatformViewController';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_AndroidMotionEvent';
import '@flax/flutter/services/_bindings/sdk_services_AndroidMotionEvent';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ExpensiveAndroidViewController extends Omit<upstream0.AndroidViewController, _flaxOwnMembers0>, Omit<upstream1.PlatformViewController, _flaxOwnMembers0 | keyof upstream0.AndroidViewController>, Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::ExpensiveAndroidViewController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidViewController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::PlatformViewController": readonly [] }> { readonly __ExpensiveAndroidViewController: unique symbol;
readonly [_flaxDartTypeValue]: ExpensiveAndroidViewController;

readonly viewId: number;
readonly awaitingCreation: boolean;
readonly textureId: number | null;
readonly requiresViewComposition: boolean;
get pointTransformer(): ((position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => upstream2.Offset);
readonly isCreated: boolean;
create(options?: {position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}): Promise<void>;
setSize(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): Promise<upstream3.Size>;
setOffset(off: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): Promise<void>;
sendMotionEvent(event: Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidMotionEvent": readonly [] }>): Promise<void>;
addOnPlatformViewCreatedListener(listener: ((id: number) => void)): void;
removeOnPlatformViewCreatedListener(listener: ((id: number) => void)): void;
setLayoutDirection(layoutDirection: upstream5.TextDirection): Promise<void>;
dispatchPointerEvent(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): Promise<void>;
clearFocus(): Promise<void>;
dispose(): Promise<void>;
set pointTransformer(value: ((position: upstream2.Offset) => Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>));
}
defineObject("flax.core/sdk_services#type:ExpensiveAndroidViewController", ["viewId","awaitingCreation","textureId","requiresViewComposition","pointTransformer","isCreated"], ["pointTransformer"], _flaxBindingMethods("flax.core/sdk_services#type:ExpensiveAndroidViewController", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:AndroidViewController");
export const ExpensiveAndroidViewController: object & _FlaxInstanceType<ExpensiveAndroidViewController> & _FlaxDartType<ExpensiveAndroidViewController, readonly ["class", "flax.core/sdk_services#type:ExpensiveAndroidViewController", readonly [], false]> = _flaxBindInstanceType<ExpensiveAndroidViewController, object>({}, "flax.core/sdk_services#type:ExpensiveAndroidViewController", ["flax.core/sdk_services#type:AndroidViewController","flax.core/sdk_services#type:PlatformViewController","dart:core::Object"]) as object & _FlaxInstanceType<ExpensiveAndroidViewController> & _FlaxDartType<ExpensiveAndroidViewController, readonly ["class", "flax.core/sdk_services#type:ExpensiveAndroidViewController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "viewId" | "awaitingCreation" | "textureId" | "requiresViewComposition" | "pointTransformer" | "isCreated" | "create" | "setSize" | "setOffset" | "sendMotionEvent" | "addOnPlatformViewCreatedListener" | "removeOnPlatformViewCreatedListener" | "setLayoutDirection" | "dispatchPointerEvent" | "clearFocus" | "dispose" | "__flaxBound:package:flutter/src/services/platform_views.dart::ExpensiveAndroidViewController" | "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidViewController" | "__flaxBound:package:flutter/src/services/platform_views.dart::PlatformViewController";
