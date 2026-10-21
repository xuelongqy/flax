// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AndroidViewController';
import '@flax/flutter/services/_bindings/sdk_services_AndroidViewController';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_SurfaceAndroidViewController';
import '@flax/flutter/services/_bindings/sdk_services_SurfaceAndroidViewController';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_ExpensiveAndroidViewController';
import '@flax/flutter/services/_bindings/sdk_services_ExpensiveAndroidViewController';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_HybridAndroidViewController';
import '@flax/flutter/services/_bindings/sdk_services_HybridAndroidViewController';
import type * as upstream6 from '@flax/flutter/services/_bindings/sdk_services_UiKitViewController';
import '@flax/flutter/services/_bindings/sdk_services_UiKitViewController';
import type * as upstream7 from '@flax/flutter/services/_bindings/sdk_services_UiKitViewGestureBlockingPolicy';
import '@flax/flutter/services/_bindings/sdk_services_UiKitViewGestureBlockingPolicy';
import type * as upstream8 from '@flax/flutter/services/_bindings/sdk_services_AppKitViewController';
import '@flax/flutter/services/_bindings/sdk_services_AppKitViewController';
import { _flaxMemberParameters73, _flaxMemberParameters74 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlatformViewsService extends Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::PlatformViewsService": readonly [] }> { readonly __PlatformViewsService: unique symbol;
readonly [_flaxDartTypeValue]: PlatformViewsService;

}
defineObject("flax.core/sdk_services#type:PlatformViewsService", [], [], _flaxBindingMethods("flax.core/sdk_services#type:PlatformViewsService", "object", {}, {}), []);
export namespace _PlatformViewsServiceFactory { export function initAndroidView(options: { creationParams?: unknown | null | undefined; creationParamsCodec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }> | null | undefined; id: number; layoutDirection: upstream2.TextDirection; onFocus?: (() => void) | null | undefined; viewType: string }): upstream0.AndroidViewController {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["creationParams","creationParamsCodec","id","layoutDirection","onFocus","viewType"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:PlatformViewsService.initAndroidView", [options.creationParams, options.creationParamsCodec, options.id, options.layoutDirection, options.onFocus, options.viewType], _flaxMemberParameters73);
return _flaxResult as upstream0.AndroidViewController;
} }
export namespace _PlatformViewsServiceFactory { export function initSurfaceAndroidView(options: { creationParams?: unknown | null | undefined; creationParamsCodec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }> | null | undefined; id: number; layoutDirection: upstream2.TextDirection; onFocus?: (() => void) | null | undefined; viewType: string }): upstream3.SurfaceAndroidViewController {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["creationParams","creationParamsCodec","id","layoutDirection","onFocus","viewType"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:PlatformViewsService.initSurfaceAndroidView", [options.creationParams, options.creationParamsCodec, options.id, options.layoutDirection, options.onFocus, options.viewType], _flaxMemberParameters73);
return _flaxResult as upstream3.SurfaceAndroidViewController;
} }
export namespace _PlatformViewsServiceFactory { export function initExpensiveAndroidView(options: { creationParams?: unknown | null | undefined; creationParamsCodec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }> | null | undefined; id: number; layoutDirection: upstream2.TextDirection; onFocus?: (() => void) | null | undefined; viewType: string }): upstream4.ExpensiveAndroidViewController {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["creationParams","creationParamsCodec","id","layoutDirection","onFocus","viewType"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:PlatformViewsService.initExpensiveAndroidView", [options.creationParams, options.creationParamsCodec, options.id, options.layoutDirection, options.onFocus, options.viewType], _flaxMemberParameters73);
return _flaxResult as upstream4.ExpensiveAndroidViewController;
} }
export namespace _PlatformViewsServiceFactory { export function initHybridAndroidView(options: { creationParams?: unknown | null | undefined; creationParamsCodec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }> | null | undefined; id: number; layoutDirection: upstream2.TextDirection; onFocus?: (() => void) | null | undefined; viewType: string }): upstream5.HybridAndroidViewController {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["creationParams","creationParamsCodec","id","layoutDirection","onFocus","viewType"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:PlatformViewsService.initHybridAndroidView", [options.creationParams, options.creationParamsCodec, options.id, options.layoutDirection, options.onFocus, options.viewType], _flaxMemberParameters73);
return _flaxResult as upstream5.HybridAndroidViewController;
} }
export namespace _PlatformViewsServiceFactory { export function initUiKitView(options: { creationParams?: unknown | null | undefined; creationParamsCodec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }> | null | undefined; gestureBlockingPolicy?: upstream7.UiKitViewGestureBlockingPolicy | undefined; id: number; layoutDirection: upstream2.TextDirection; onFocus?: (() => void) | null | undefined; viewType: string }): Promise<upstream6.UiKitViewController> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["creationParams","creationParamsCodec","gestureBlockingPolicy","id","layoutDirection","onFocus","viewType"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:PlatformViewsService.initUiKitView", [options.creationParams, options.creationParamsCodec, options.gestureBlockingPolicy, options.id, options.layoutDirection, options.onFocus, options.viewType], _flaxMemberParameters74);
return _flaxResult as Promise<upstream6.UiKitViewController>;
} }
export namespace _PlatformViewsServiceFactory { export function initAppKitView(options: { creationParams?: unknown | null | undefined; creationParamsCodec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }> | null | undefined; id: number; layoutDirection: upstream2.TextDirection; onFocus?: (() => void) | null | undefined; viewType: string }): Promise<upstream8.AppKitViewController> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["creationParams","creationParamsCodec","id","layoutDirection","onFocus","viewType"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:PlatformViewsService.initAppKitView", [options.creationParams, options.creationParamsCodec, options.id, options.layoutDirection, options.onFocus, options.viewType], _flaxMemberParameters73);
return _flaxResult as Promise<upstream8.AppKitViewController>;
} }
export const PlatformViewsService: typeof _PlatformViewsServiceFactory & _FlaxInstanceType<PlatformViewsService> & _FlaxDartType<PlatformViewsService, readonly ["class", "flax.core/sdk_services#type:PlatformViewsService", readonly [], false]> = _flaxBindInstanceType<PlatformViewsService, typeof _PlatformViewsServiceFactory>(_PlatformViewsServiceFactory, "flax.core/sdk_services#type:PlatformViewsService", ["dart:core::Object"]) as typeof _PlatformViewsServiceFactory & _FlaxInstanceType<PlatformViewsService> & _FlaxDartType<PlatformViewsService, readonly ["class", "flax.core/sdk_services#type:PlatformViewsService", readonly [], false]>;
