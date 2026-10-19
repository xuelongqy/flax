// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewThemeData';
import '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewThemeData';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream3 from '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewLocalizationsData';
import '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewLocalizationsData';
import type * as upstream4 from '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_Preview';
import '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_Preview';
const _flaxMemberParameters0 = [{"name":"newWrapper","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widget_previews/_bindings/sdk_widget_previews.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PreviewBuilder extends Readonly<{ "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewBuilder": readonly [] }> { readonly __PreviewBuilder: unique symbol;
readonly [_flaxDartTypeValue]: PreviewBuilder;

get group(): string | null;
get name(): string | null;
get size(): upstream0.Size | null;
get textScaleFactor(): number | null;
get wrapper(): ((p0: Widget) => Widget) | null;
get theme(): (() => upstream1.PreviewThemeData) | null;
get brightness(): upstream2.Brightness | null;
get localizations(): (() => upstream3.PreviewLocalizationsData) | null;
addWrapper(newWrapper: ((p0: Widget) => Widget)): void;
build(): upstream4.Preview;
set group(value: string | null);
set name(value: string | null);
set size(value: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null);
set textScaleFactor(value: number | null);
set wrapper(value: ((p0: Widget) => Widget) | null);
set theme(value: (() => Readonly<{ "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewThemeData": readonly [] }>) | null);
set brightness(value: upstream2.Brightness | null);
set localizations(value: (() => Readonly<{ "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewLocalizationsData": readonly [] }>) | null);
}
defineObject("flax.core/sdk_widget_previews#type:PreviewBuilder", ["group","name","size","textScaleFactor","wrapper","theme","brightness","localizations"], ["group","name","size","textScaleFactor","wrapper","theme","brightness","localizations"], _flaxBindingMethods("flax.core/sdk_widget_previews#type:PreviewBuilder", "object", {"addWrapper":_flaxMemberParameters0,"build":_flaxMemberParameters1}, {}), []);
export function _PreviewBuilderFactory(): PreviewBuilder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widget_previews#type:PreviewBuilder", "", _flaxMemberParameters1, [], {}) as PreviewBuilder;
}
export const PreviewBuilder: typeof _PreviewBuilderFactory & _FlaxInstanceType<PreviewBuilder> & _FlaxDartType<PreviewBuilder, readonly ["class", "flax.core/sdk_widget_previews#type:PreviewBuilder", readonly [], false]> = _flaxBindInstanceType<PreviewBuilder, typeof _PreviewBuilderFactory>(_PreviewBuilderFactory, "flax.core/sdk_widget_previews#type:PreviewBuilder", ["dart:core::Object"]) as typeof _PreviewBuilderFactory & _FlaxInstanceType<PreviewBuilder> & _FlaxDartType<PreviewBuilder, readonly ["class", "flax.core/sdk_widget_previews#type:PreviewBuilder", readonly [], false]>;
