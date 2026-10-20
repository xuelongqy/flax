// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsConfiguration';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsConfiguration';
import type * as upstream1 from '@flax/flutter/semantics/_bindings/sdk_semantics_ChildSemanticsConfigurationsResult';
import '@flax/flutter/semantics/_bindings/sdk_semantics_ChildSemanticsConfigurationsResult';
import { _flaxMemberParameters11, _flaxMemberParameters12, _flaxMemberParameters2 } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ChildSemanticsConfigurationsResultBuilder extends Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::ChildSemanticsConfigurationsResultBuilder": readonly [] }> { readonly __ChildSemanticsConfigurationsResultBuilder: unique symbol;
readonly [_flaxDartTypeValue]: ChildSemanticsConfigurationsResultBuilder;

markAsMergeUp(config: Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [] }>): void;
markAsSiblingMergeGroup(configs: DartListInput<upstream0.SemanticsConfiguration, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [] }>>): void;
build(): upstream1.ChildSemanticsConfigurationsResult;
}
defineObject("flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResultBuilder", [], [], _flaxBindingMethods("flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResultBuilder", "object", {"markAsMergeUp":_flaxMemberParameters11,"markAsSiblingMergeGroup":_flaxMemberParameters12,"build":_flaxMemberParameters2}, {}), []);
export function _ChildSemanticsConfigurationsResultBuilderFactory(): ChildSemanticsConfigurationsResultBuilder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResultBuilder", "", _flaxMemberParameters2, [], {}) as ChildSemanticsConfigurationsResultBuilder;
}
const _ChildSemanticsConfigurationsResultBuilderProxy = {type: "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResultBuilder", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"markAsMergeUp":_flaxMemberParameters11,"markAsSiblingMergeGroup":_flaxMemberParameters12,"build":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: ["markAsMergeUp","markAsSiblingMergeGroup","build"]} as const;
export interface _ChildSemanticsConfigurationsResultBuilderNative extends ChildSemanticsConfigurationsResultBuilder {
readonly [_flaxDartTypeValue]: _ChildSemanticsConfigurationsResultBuilderNative;

markAsMergeUp(config: Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [] }>): void;
markAsSiblingMergeGroup(configs: DartListInput<upstream0.SemanticsConfiguration, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [] }>>): void;
build(): upstream1.ChildSemanticsConfigurationsResult;
}
export abstract class _ChildSemanticsConfigurationsResultBuilderNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChildSemanticsConfigurationsResultBuilder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ChildSemanticsConfigurationsResultBuilder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResultBuilder", readonly [], false];
constructor() { super(_ChildSemanticsConfigurationsResultBuilderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ChildSemanticsConfigurationsResultBuilderNative.prototype, _ChildSemanticsConfigurationsResultBuilderProxy);
export namespace _ChildSemanticsConfigurationsResultBuilderFactory { export function implement(args: [], implementation: {}): ChildSemanticsConfigurationsResultBuilder {
return constructProxy(_ChildSemanticsConfigurationsResultBuilderProxy, args, implementation) as ChildSemanticsConfigurationsResultBuilder; } }
const _ChildSemanticsConfigurationsResultBuilderBinding = _flaxProxyFactory(_ChildSemanticsConfigurationsResultBuilderFactory, _ChildSemanticsConfigurationsResultBuilderNative) as unknown as typeof _ChildSemanticsConfigurationsResultBuilderFactory & (new() => _ChildSemanticsConfigurationsResultBuilderNative);
export const ChildSemanticsConfigurationsResultBuilder: typeof _ChildSemanticsConfigurationsResultBuilderBinding & _FlaxInstanceType<ChildSemanticsConfigurationsResultBuilder> & _FlaxDartType<ChildSemanticsConfigurationsResultBuilder, readonly ["class", "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResultBuilder", readonly [], false]> = _flaxBindInstanceType<ChildSemanticsConfigurationsResultBuilder, typeof _ChildSemanticsConfigurationsResultBuilderBinding>(_ChildSemanticsConfigurationsResultBuilderBinding, "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResultBuilder", ["dart:core::Object"]) as typeof _ChildSemanticsConfigurationsResultBuilderBinding & _FlaxInstanceType<ChildSemanticsConfigurationsResultBuilder> & _FlaxDartType<ChildSemanticsConfigurationsResultBuilder, readonly ["class", "flax.core/sdk_semantics#type:ChildSemanticsConfigurationsResultBuilder", readonly [], false]>;
