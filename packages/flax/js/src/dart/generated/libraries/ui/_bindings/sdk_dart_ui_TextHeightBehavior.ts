// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextHeightBehavior extends Readonly<{ "__flaxBound:dart:ui::TextHeightBehavior": readonly [] }> { readonly __TextHeightBehavior: unique symbol;
readonly [_flaxDartTypeValue]: TextHeightBehavior;

}
defineObject("flax.core/sdk_dart_ui#type:TextHeightBehavior", ["applyHeightToFirstAscent","applyHeightToLastDescent","leadingDistribution"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:TextHeightBehavior", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _TextHeightBehaviorProxy = {type: "flax.core/sdk_dart_ui#type:TextHeightBehavior", parameters: [{"name":"applyHeightToFirstAscent","required":false,"positional":false},{"name":"applyHeightToLastDescent","required":false,"positional":false},{"name":"leadingDistribution","required":false,"positional":false}], constructors: {"":[{"name":"applyHeightToFirstAscent","required":false,"positional":false},{"name":"applyHeightToLastDescent","required":false,"positional":false},{"name":"leadingDistribution","required":false,"positional":false}]}, methods: {"toString":_flaxMemberParameters0}, getters: ["applyHeightToFirstAscent","applyHeightToLastDescent","leadingDistribution"], setters: [], contextMembers: [], superMembers: ["get:applyHeightToFirstAscent","get:applyHeightToLastDescent","get:leadingDistribution","toString"]} as const;
export interface TextHeightBehavior {
readonly [_flaxDartTypeValue]: TextHeightBehavior;

toString(): string;
get applyHeightToFirstAscent(): boolean;
get applyHeightToLastDescent(): boolean;
get leadingDistribution(): upstream0.TextLeadingDistribution;
}
export abstract class TextHeightBehavior extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextHeightBehavior>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextHeightBehavior;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:TextHeightBehavior", readonly [], false];
constructor(options?: {applyHeightToFirstAscent?: boolean | undefined; applyHeightToLastDescent?: boolean | undefined; leadingDistribution?: upstream0.TextLeadingDistribution | undefined}) { super(_TextHeightBehaviorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TextHeightBehavior.prototype, _TextHeightBehaviorProxy);
export namespace TextHeightBehavior { export function implement(args: [options?: {applyHeightToFirstAscent?: boolean | undefined; applyHeightToLastDescent?: boolean | undefined; leadingDistribution?: upstream0.TextLeadingDistribution | undefined}], implementation: {}): TextHeightBehavior {
return constructProxy(_TextHeightBehaviorProxy, args, implementation) as TextHeightBehavior; } }
_flaxBindInstanceType<TextHeightBehavior, typeof TextHeightBehavior>(TextHeightBehavior, "flax.core/sdk_dart_ui#type:TextHeightBehavior", ["dart:core::Object"]);
