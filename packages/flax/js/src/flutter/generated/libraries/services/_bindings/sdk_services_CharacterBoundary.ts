// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { _flaxMemberParameters27, _flaxMemberParameters28 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CharacterBoundary extends Omit<upstream0.TextBoundary, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/text_boundary.dart::CharacterBoundary": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary": readonly [] }> { readonly __CharacterBoundary: unique symbol;
readonly [_flaxDartTypeValue]: CharacterBoundary;

getLeadingTextBoundaryAt(position: number): number | null;
getTrailingTextBoundaryAt(position: number): number | null;
getTextBoundaryAt(position: number): upstream1.TextRange;
}
defineObject("flax.core/sdk_services#type:CharacterBoundary", [], [], _flaxBindingMethods("flax.core/sdk_services#type:CharacterBoundary", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:TextBoundary");
export function _CharacterBoundaryFactory(_text: string): CharacterBoundary {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:CharacterBoundary", "", [{"name":"_text","required":true,"positional":true}], [_text], {}) as CharacterBoundary;
}
const _CharacterBoundaryProxy = {type: "flax.core/sdk_services#type:CharacterBoundary", parameters: _flaxMemberParameters27, constructors: {"": _flaxMemberParameters27}, methods: {"getLeadingTextBoundaryAt":_flaxMemberParameters28,"getTrailingTextBoundaryAt":_flaxMemberParameters28,"getTextBoundaryAt":_flaxMemberParameters28}, getters: [], setters: [], contextMembers: [], superMembers: ["getLeadingTextBoundaryAt","getTrailingTextBoundaryAt","getTextBoundaryAt"]} as const;
export interface _CharacterBoundaryNative extends CharacterBoundary {
readonly [_flaxDartTypeValue]: _CharacterBoundaryNative;

getLeadingTextBoundaryAt(position: number): number | null;
getTrailingTextBoundaryAt(position: number): number | null;
getTextBoundaryAt(position: number): upstream1.TextRange;
}
export abstract class _CharacterBoundaryNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CharacterBoundary>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CharacterBoundary;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:CharacterBoundary", readonly [], false];
constructor(_text: string) { super(_CharacterBoundaryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_CharacterBoundaryNative.prototype, _CharacterBoundaryProxy);
export namespace _CharacterBoundaryFactory { export function implement(args: [_text: string], implementation: {}): CharacterBoundary {
return constructProxy(_CharacterBoundaryProxy, args, implementation) as CharacterBoundary; } }
const _CharacterBoundaryBinding = _flaxProxyFactory(_CharacterBoundaryFactory, _CharacterBoundaryNative) as unknown as typeof _CharacterBoundaryFactory & (new(_text: string) => _CharacterBoundaryNative);
export const CharacterBoundary: typeof _CharacterBoundaryBinding & _FlaxInstanceType<CharacterBoundary> & _FlaxDartType<CharacterBoundary, readonly ["class", "flax.core/sdk_services#type:CharacterBoundary", readonly [], false]> = _flaxBindInstanceType<CharacterBoundary, typeof _CharacterBoundaryBinding>(_CharacterBoundaryBinding, "flax.core/sdk_services#type:CharacterBoundary", ["flax.core/sdk_services#type:TextBoundary","dart:core::Object"]) as typeof _CharacterBoundaryBinding & _FlaxInstanceType<CharacterBoundary> & _FlaxDartType<CharacterBoundary, readonly ["class", "flax.core/sdk_services#type:CharacterBoundary", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getLeadingTextBoundaryAt" | "getTrailingTextBoundaryAt" | "getTextBoundaryAt" | "__flaxBound:package:flutter/src/services/text_boundary.dart::CharacterBoundary" | "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary";
