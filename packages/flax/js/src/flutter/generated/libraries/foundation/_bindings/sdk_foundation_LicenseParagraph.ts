// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"text","required":true,"positional":true},{"name":"indent","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LicenseParagraph extends Readonly<{ "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseParagraph": readonly [] }> { readonly __LicenseParagraph: unique symbol;
readonly [_flaxDartTypeValue]: LicenseParagraph;

}
defineObject("flax.core/sdk_foundation#type:LicenseParagraph", ["text","indent"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:LicenseParagraph", "object", {}, {}), []);
const _LicenseParagraphProxy = {type: "flax.core/sdk_foundation#type:LicenseParagraph", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["text","indent"], setters: [], contextMembers: [], superMembers: ["get:text","get:indent"]} as const;
export interface LicenseParagraph {
readonly [_flaxDartTypeValue]: LicenseParagraph;

get text(): string;
get indent(): number;
}
export abstract class LicenseParagraph extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LicenseParagraph>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LicenseParagraph;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:LicenseParagraph", readonly [], false];
constructor(text: string, indent: number) { super(_LicenseParagraphProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(LicenseParagraph.prototype, _LicenseParagraphProxy);
export namespace LicenseParagraph { export function implement(args: [text: string, indent: number], implementation: {}): LicenseParagraph {
return constructProxy(_LicenseParagraphProxy, args, implementation) as LicenseParagraph; } }
export namespace LicenseParagraph { export declare const centeredIndent: number; }
_flaxDefineStaticGetters(LicenseParagraph, "flax.core/sdk_foundation#read:LicenseParagraph.", ["centeredIndent"]);
_flaxBindInstanceType<LicenseParagraph, typeof LicenseParagraph>(LicenseParagraph, "flax.core/sdk_foundation#type:LicenseParagraph", ["dart:core::Object"]);
