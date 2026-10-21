// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream1 from '@flax/flutter/semantics/_bindings/sdk_semantics_Assertiveness';
import '@flax/flutter/semantics/_bindings/sdk_semantics_Assertiveness';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import { _flaxMemberParameters45, _flaxMemberParameters46, _flaxMemberParameters47 } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SemanticsService extends Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics_service.dart::SemanticsService": readonly [] }> { readonly __SemanticsService: unique symbol;
readonly [_flaxDartTypeValue]: SemanticsService;

}
defineObject("flax.core/sdk_semantics#type:SemanticsService", [], [], _flaxBindingMethods("flax.core/sdk_semantics#type:SemanticsService", "object", {}, {}), []);
export namespace _SemanticsServiceFactory { export function announce(message: string, textDirection: upstream0.TextDirection, options: { assertiveness?: upstream1.Assertiveness | undefined } = {}): Promise<void> {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["assertiveness"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_semantics#function:SemanticsService.announce", [message, textDirection, options.assertiveness], _flaxMemberParameters45);
return _flaxResult as Promise<void>;
} }
export namespace _SemanticsServiceFactory { export function sendAnnouncement(view: Readonly<{ "__flaxBound:dart:ui::FlutterView": readonly [] }>, message: string, textDirection: upstream0.TextDirection, options: { assertiveness?: upstream1.Assertiveness | undefined } = {}): Promise<void> {
if (arguments.length > 4) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["assertiveness"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_semantics#function:SemanticsService.sendAnnouncement", [view, message, textDirection, options.assertiveness], _flaxMemberParameters46);
return _flaxResult as Promise<void>;
} }
export namespace _SemanticsServiceFactory { export function tooltip(message: string): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_semantics#function:SemanticsService.tooltip", [message], _flaxMemberParameters47);
return _flaxResult as Promise<void>;
} }
export const SemanticsService: typeof _SemanticsServiceFactory & _FlaxInstanceType<SemanticsService> & _FlaxDartType<SemanticsService, readonly ["class", "flax.core/sdk_semantics#type:SemanticsService", readonly [], false]> = _flaxBindInstanceType<SemanticsService, typeof _SemanticsServiceFactory>(_SemanticsServiceFactory, "flax.core/sdk_semantics#type:SemanticsService", ["dart:core::Object"]) as typeof _SemanticsServiceFactory & _FlaxInstanceType<SemanticsService> & _FlaxDartType<SemanticsService, readonly ["class", "flax.core/sdk_semantics#type:SemanticsService", readonly [], false]>;
