// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Display';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Display';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewConstraints';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewConstraints';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewPadding';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewPadding';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_GestureSettings';
import '@flax/dart/ui/_bindings/sdk_dart_ui_GestureSettings';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeature';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeature';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayCornerRadii';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayCornerRadii';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsUpdate';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsUpdate';
import { _flaxMemberParameters44, _flaxMemberParameters45, _flaxMemberParameters0 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlutterView extends Readonly<{ "__flaxBound:dart:ui::FlutterView": readonly [] }> { readonly __FlutterView: unique symbol;
readonly [_flaxDartTypeValue]: FlutterView;

readonly viewId: number;
readonly platformDispatcher: upstream0.PlatformDispatcher;
readonly display: upstream1.Display;
readonly devicePixelRatio: number;
readonly physicalConstraints: upstream2.ViewConstraints;
readonly physicalSize: upstream3.Size;
readonly viewInsets: upstream4.ViewPadding;
readonly viewPadding: upstream4.ViewPadding;
readonly systemGestureInsets: upstream4.ViewPadding;
readonly padding: upstream4.ViewPadding;
readonly gestureSettings: upstream5.GestureSettings;
readonly displayFeatures: DartList<upstream6.DisplayFeature>;
readonly displayCornerRadii: upstream7.DisplayCornerRadii | null;
render(scene: Readonly<{ "__flaxBound:dart:ui::Scene": readonly [] }>, options?: {size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}): void;
updateSemantics(update: Readonly<{ "__flaxBound:dart:ui::SemanticsUpdate": readonly [] }>): void;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:FlutterView", ["viewId","platformDispatcher","display","devicePixelRatio","physicalConstraints","physicalSize","viewInsets","viewPadding","systemGestureInsets","padding","gestureSettings","displayFeatures","displayCornerRadii"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:FlutterView", "object", {"render":_flaxMemberParameters44,"updateSemantics":_flaxMemberParameters45,"toString":_flaxMemberParameters0}, {}), []);
export const FlutterView: object & _FlaxInstanceType<FlutterView> & _FlaxDartType<FlutterView, readonly ["class", "flax.core/sdk_dart_ui#type:FlutterView", readonly [], false]> = _flaxBindInstanceType<FlutterView, object>({}, "flax.core/sdk_dart_ui#type:FlutterView", ["dart:core::Object"]) as object & _FlaxInstanceType<FlutterView> & _FlaxDartType<FlutterView, readonly ["class", "flax.core/sdk_dart_ui#type:FlutterView", readonly [], false]>;
