// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters80 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LicenseParagraph extends Readonly<{ "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseParagraph": readonly [] }> { readonly __LicenseParagraph: unique symbol;
readonly [_flaxDartTypeValue]: LicenseParagraph;

readonly text: string;
readonly indent: number;
}
defineObject("flax.core/sdk_foundation#type:LicenseParagraph", ["text","indent"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:LicenseParagraph", "object", {}, {}), []);
export function _LicenseParagraphFactory(text: string, indent: number): LicenseParagraph {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:LicenseParagraph", "", [{"name":"text","required":true,"positional":true},{"name":"indent","required":true,"positional":true}], [text, indent], {}) as LicenseParagraph;
}
const _LicenseParagraphProxy = {type: "flax.core/sdk_foundation#type:LicenseParagraph", parameters: _flaxMemberParameters80, constructors: {"": _flaxMemberParameters80}, methods: {}, getters: ["text","indent"], setters: [], contextMembers: [], superMembers: ["get:text","get:indent"]} as const;
export interface _LicenseParagraphNative extends LicenseParagraph {
readonly [_flaxDartTypeValue]: _LicenseParagraphNative;

get text(): string;
get indent(): number;
}
export abstract class _LicenseParagraphNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LicenseParagraph>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LicenseParagraph;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:LicenseParagraph", readonly [], false];
constructor(text: string, indent: number) { super(_LicenseParagraphProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_LicenseParagraphNative.prototype, _LicenseParagraphProxy);
export namespace _LicenseParagraphFactory { export function implement(args: [text: string, indent: number], implementation: {}): LicenseParagraph {
return constructProxy(_LicenseParagraphProxy, args, implementation) as LicenseParagraph; } }
const _LicenseParagraphBinding = _flaxProxyFactory(_LicenseParagraphFactory, _LicenseParagraphNative) as unknown as typeof _LicenseParagraphFactory & (new(text: string, indent: number) => _LicenseParagraphNative);
export namespace _LicenseParagraphFactory { export declare const centeredIndent: number; }
_flaxDefineStaticGetters(_LicenseParagraphFactory, "flax.core/sdk_foundation#read:LicenseParagraph.", ["centeredIndent"]);
export const LicenseParagraph: typeof _LicenseParagraphBinding & _FlaxInstanceType<LicenseParagraph> & _FlaxDartType<LicenseParagraph, readonly ["class", "flax.core/sdk_foundation#type:LicenseParagraph", readonly [], false]> = _flaxBindInstanceType<LicenseParagraph, typeof _LicenseParagraphBinding>(_LicenseParagraphBinding, "flax.core/sdk_foundation#type:LicenseParagraph", ["dart:core::Object"]) as typeof _LicenseParagraphBinding & _FlaxInstanceType<LicenseParagraph> & _FlaxDartType<LicenseParagraph, readonly ["class", "flax.core/sdk_foundation#type:LicenseParagraph", readonly [], false]>;
