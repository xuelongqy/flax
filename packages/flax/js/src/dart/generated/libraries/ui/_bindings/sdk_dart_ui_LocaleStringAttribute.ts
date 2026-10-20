// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_StringAttribute';
import '@flax/dart/ui/_bindings/sdk_dart_ui_StringAttribute';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import { _flaxMemberParameters0, _flaxMemberParameters68, _flaxMemberParameters69 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LocaleStringAttribute extends Omit<upstream0.StringAttribute, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:ui::LocaleStringAttribute": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::StringAttribute": readonly [] }> { readonly __LocaleStringAttribute: unique symbol;
readonly [_flaxDartTypeValue]: LocaleStringAttribute;

readonly range: upstream1.TextRange;
readonly locale: upstream2.Locale;
copy(options: {range: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}): upstream0.StringAttribute;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:LocaleStringAttribute", ["range","locale"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:LocaleStringAttribute", "object", {"toString":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_dart_ui#type:StringAttribute");
export function _LocaleStringAttributeFactory(options: { range: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; locale: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> }): LocaleStringAttribute {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:LocaleStringAttribute", "", [{"name":"range","required":true},{"name":"locale","required":true}], [], options) as LocaleStringAttribute;
}
const _LocaleStringAttributeProxy = {type: "flax.core/sdk_dart_ui#type:LocaleStringAttribute", parameters: _flaxMemberParameters68, constructors: {"": _flaxMemberParameters68}, methods: {"copy":_flaxMemberParameters69,"toString":_flaxMemberParameters0}, getters: ["locale","range"], setters: [], contextMembers: [], superMembers: ["get:locale","get:range","copy","toString"]} as const;
export interface _LocaleStringAttributeNative extends LocaleStringAttribute {
readonly [_flaxDartTypeValue]: _LocaleStringAttributeNative;

copy(options: {range: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}): upstream0.StringAttribute;
toString(): string;
get locale(): upstream2.Locale;
get range(): upstream1.TextRange;
}
export abstract class _LocaleStringAttributeNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LocaleStringAttribute>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LocaleStringAttribute;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:LocaleStringAttribute", readonly [], false];
constructor(options: {range: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; locale: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>}) { super(_LocaleStringAttributeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_LocaleStringAttributeNative.prototype, _LocaleStringAttributeProxy);
export namespace _LocaleStringAttributeFactory { export function implement(args: [options: {range: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; locale: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>}], implementation: {}): LocaleStringAttribute {
return constructProxy(_LocaleStringAttributeProxy, args, implementation) as LocaleStringAttribute; } }
const _LocaleStringAttributeBinding = _flaxProxyFactory(_LocaleStringAttributeFactory, _LocaleStringAttributeNative) as unknown as typeof _LocaleStringAttributeFactory & (new(options: {range: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; locale: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>}) => _LocaleStringAttributeNative);
export const LocaleStringAttribute: typeof _LocaleStringAttributeBinding & _FlaxInstanceType<LocaleStringAttribute> & _FlaxDartType<LocaleStringAttribute, readonly ["class", "flax.core/sdk_dart_ui#type:LocaleStringAttribute", readonly [], false]> = _flaxBindInstanceType<LocaleStringAttribute, typeof _LocaleStringAttributeBinding>(_LocaleStringAttributeBinding, "flax.core/sdk_dart_ui#type:LocaleStringAttribute", ["flax.core/sdk_dart_ui#type:StringAttribute","dart:core::Object"]) as typeof _LocaleStringAttributeBinding & _FlaxInstanceType<LocaleStringAttribute> & _FlaxDartType<LocaleStringAttribute, readonly ["class", "flax.core/sdk_dart_ui#type:LocaleStringAttribute", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "range" | "locale" | "copy" | "toString" | "__flaxBound:dart:ui::LocaleStringAttribute" | "__flaxBound:dart:ui::StringAttribute";
