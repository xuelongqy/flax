// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_StringAttribute';
import '@flax/dart/ui/_bindings/sdk_dart_ui_StringAttribute';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"range","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SpellOutStringAttribute extends Omit<upstream0.StringAttribute, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:ui::SpellOutStringAttribute": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::StringAttribute": readonly [] }> { readonly __SpellOutStringAttribute: unique symbol;
readonly [_flaxDartTypeValue]: SpellOutStringAttribute;

}
defineObject("flax.core/sdk_dart_ui#type:SpellOutStringAttribute", ["range"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:SpellOutStringAttribute", "object", {"toString":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_dart_ui#type:StringAttribute");
const _SpellOutStringAttributeProxy = {type: "flax.core/sdk_dart_ui#type:SpellOutStringAttribute", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"copy":_flaxMemberParameters1,"toString":_flaxMemberParameters0}, getters: ["range"], setters: [], contextMembers: [], superMembers: ["get:range","copy","toString"]} as const;
export interface SpellOutStringAttribute {
readonly [_flaxDartTypeValue]: SpellOutStringAttribute;

copy(options: {range: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}): upstream0.StringAttribute;
toString(): string;
get range(): upstream1.TextRange;
}
export abstract class SpellOutStringAttribute extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SpellOutStringAttribute>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SpellOutStringAttribute;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:SpellOutStringAttribute", readonly [], false];
constructor(options: {range: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}) { super(_SpellOutStringAttributeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SpellOutStringAttribute.prototype, _SpellOutStringAttributeProxy);
export namespace SpellOutStringAttribute { export function implement(args: [options: {range: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}], implementation: {}): SpellOutStringAttribute {
return constructProxy(_SpellOutStringAttributeProxy, args, implementation) as SpellOutStringAttribute; } }
_flaxBindInstanceType<SpellOutStringAttribute, typeof SpellOutStringAttribute>(SpellOutStringAttribute, "flax.core/sdk_dart_ui#type:SpellOutStringAttribute", ["flax.core/sdk_dart_ui#type:StringAttribute","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "range" | "copy" | "toString" | "__flaxBound:dart:ui::SpellOutStringAttribute" | "__flaxBound:dart:ui::StringAttribute";
