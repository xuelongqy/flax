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
import type * as upstream4 from '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewBuilder';
import '@flax/flutter/widget_previews/_bindings/sdk_widget_previews_PreviewBuilder';
import { _flaxMemberParameters0, _flaxMemberParameters1 } from "@flax/flutter/widget_previews/_bindings/sdk_widget_previews.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widget_previews/_bindings/sdk_widget_previews.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Preview extends Readonly<{ "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::Preview": readonly [] }> { readonly __Preview: unique symbol;
readonly [_flaxDartTypeValue]: Preview;

}
defineObject("flax.core/sdk_widget_previews#type:Preview", ["group","name","size","textScaleFactor","wrapper","theme","brightness","localizations"], [], _flaxBindingMethods("flax.core/sdk_widget_previews#type:Preview", "object", {"transform":_flaxMemberParameters0,"toBuilder":_flaxMemberParameters0}, {}), []);
const _PreviewProxy = {type: "flax.core/sdk_widget_previews#type:Preview", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"transform":_flaxMemberParameters0,"toBuilder":_flaxMemberParameters0}, getters: ["group","name","size","textScaleFactor","wrapper","theme","brightness","localizations"], setters: [], contextMembers: [], superMembers: ["get:group","get:name","get:size","get:textScaleFactor","get:wrapper","get:theme","get:brightness","get:localizations","transform","toBuilder"]} as const;
export interface Preview {
readonly [_flaxDartTypeValue]: Preview;

transform(): Preview;
toBuilder(): upstream4.PreviewBuilder;
get group(): string;
get name(): string | null;
get size(): upstream0.Size | null;
get textScaleFactor(): number | null;
get wrapper(): ((p0: Widget) => Widget) | null;
get theme(): (() => upstream1.PreviewThemeData) | null;
get brightness(): upstream2.Brightness | null;
get localizations(): (() => upstream3.PreviewLocalizationsData) | null;
}
export abstract class Preview extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Preview>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Preview;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widget_previews#type:Preview", readonly [], false];
constructor(options?: {group?: string | undefined; name?: string | null | undefined; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; textScaleFactor?: number | null | undefined; wrapper?: ((p0: Widget) => Widget) | null | undefined; theme?: (() => Readonly<{ "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewThemeData": readonly [] }>) | null | undefined; brightness?: upstream2.Brightness | null | undefined; localizations?: (() => Readonly<{ "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewLocalizationsData": readonly [] }>) | null | undefined}) { super(_PreviewProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(Preview.prototype, _PreviewProxy);
export namespace Preview { export function implement(args: [options?: {group?: string | undefined; name?: string | null | undefined; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; textScaleFactor?: number | null | undefined; wrapper?: ((p0: Widget) => Widget) | null | undefined; theme?: (() => Readonly<{ "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewThemeData": readonly [] }>) | null | undefined; brightness?: upstream2.Brightness | null | undefined; localizations?: (() => Readonly<{ "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewLocalizationsData": readonly [] }>) | null | undefined}], implementation: {}): Preview {
return constructProxy(_PreviewProxy, args, implementation) as Preview; } }
_flaxBindInstanceType<Preview, typeof Preview>(Preview, "flax.core/sdk_widget_previews#type:Preview", ["dart:core::Object"]);
