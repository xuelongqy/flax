// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import { _flaxMemberParameters0, _flaxMemberParameters176 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextHeightBehavior extends Readonly<{ "__flaxBound:dart:ui::TextHeightBehavior": readonly [] }> { readonly __TextHeightBehavior: unique symbol;
readonly [_flaxDartTypeValue]: TextHeightBehavior;

readonly applyHeightToFirstAscent: boolean;
readonly applyHeightToLastDescent: boolean;
readonly leadingDistribution: upstream0.TextLeadingDistribution;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:TextHeightBehavior", ["applyHeightToFirstAscent","applyHeightToLastDescent","leadingDistribution"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:TextHeightBehavior", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _TextHeightBehaviorFactory(options: { applyHeightToFirstAscent?: boolean | undefined; applyHeightToLastDescent?: boolean | undefined; leadingDistribution?: upstream0.TextLeadingDistribution | undefined } = {}): TextHeightBehavior {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:TextHeightBehavior", "", [{"name":"applyHeightToFirstAscent"},{"name":"applyHeightToLastDescent"},{"name":"leadingDistribution"}], [], options) as TextHeightBehavior;
}
const _TextHeightBehaviorProxy = {type: "flax.core/sdk_dart_ui#type:TextHeightBehavior", parameters: _flaxMemberParameters176, constructors: {"": _flaxMemberParameters176}, methods: {"toString":_flaxMemberParameters0}, getters: ["applyHeightToFirstAscent","applyHeightToLastDescent","leadingDistribution"], setters: [], contextMembers: [], superMembers: ["get:applyHeightToFirstAscent","get:applyHeightToLastDescent","get:leadingDistribution","toString"]} as const;
export interface _TextHeightBehaviorNative extends TextHeightBehavior {
readonly [_flaxDartTypeValue]: _TextHeightBehaviorNative;

toString(): string;
get applyHeightToFirstAscent(): boolean;
get applyHeightToLastDescent(): boolean;
get leadingDistribution(): upstream0.TextLeadingDistribution;
}
export abstract class _TextHeightBehaviorNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextHeightBehavior>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextHeightBehavior;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:TextHeightBehavior", readonly [], false];
constructor(options?: {applyHeightToFirstAscent?: boolean | undefined; applyHeightToLastDescent?: boolean | undefined; leadingDistribution?: upstream0.TextLeadingDistribution | undefined}) { super(_TextHeightBehaviorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextHeightBehaviorNative.prototype, _TextHeightBehaviorProxy);
export namespace _TextHeightBehaviorFactory { export function implement(args: [options?: {applyHeightToFirstAscent?: boolean | undefined; applyHeightToLastDescent?: boolean | undefined; leadingDistribution?: upstream0.TextLeadingDistribution | undefined}], implementation: {}): TextHeightBehavior {
return constructProxy(_TextHeightBehaviorProxy, args, implementation) as TextHeightBehavior; } }
const _TextHeightBehaviorBinding = _flaxProxyFactory(_TextHeightBehaviorFactory, _TextHeightBehaviorNative) as unknown as typeof _TextHeightBehaviorFactory & (new(options?: {applyHeightToFirstAscent?: boolean | undefined; applyHeightToLastDescent?: boolean | undefined; leadingDistribution?: upstream0.TextLeadingDistribution | undefined}) => _TextHeightBehaviorNative);
export const TextHeightBehavior: typeof _TextHeightBehaviorBinding & _FlaxInstanceType<TextHeightBehavior> & _FlaxDartType<TextHeightBehavior, readonly ["class", "flax.core/sdk_dart_ui#type:TextHeightBehavior", readonly [], false]> = _flaxBindInstanceType<TextHeightBehavior, typeof _TextHeightBehaviorBinding>(_TextHeightBehaviorBinding, "flax.core/sdk_dart_ui#type:TextHeightBehavior", ["dart:core::Object"]) as typeof _TextHeightBehaviorBinding & _FlaxInstanceType<TextHeightBehavior> & _FlaxDartType<TextHeightBehavior, readonly ["class", "flax.core/sdk_dart_ui#type:TextHeightBehavior", readonly [], false]>;
