// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIncrementType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIncrementType';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import { _flaxMemberParameters346 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollIncrementDetails extends Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIncrementDetails": readonly [] }> { readonly __ScrollIncrementDetails: unique symbol;
readonly [_flaxDartTypeValue]: ScrollIncrementDetails;

readonly type: upstream0.ScrollIncrementType;
readonly metrics: upstream1.ScrollMetrics;
}
defineObject("flax.core/sdk_widgets#type:ScrollIncrementDetails", ["type","metrics"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollIncrementDetails", "object", {}, {}), []);
export function _ScrollIncrementDetailsFactory(options: { type: upstream0.ScrollIncrementType; metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }> }): ScrollIncrementDetails {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ScrollIncrementDetails", "", [{"name":"type","required":true},{"name":"metrics","required":true}], [], options) as ScrollIncrementDetails;
}
const _ScrollIncrementDetailsProxy = {type: "flax.core/sdk_widgets#type:ScrollIncrementDetails", parameters: _flaxMemberParameters346, constructors: {"": _flaxMemberParameters346}, methods: {}, getters: ["type","metrics"], setters: [], contextMembers: [], superMembers: ["get:type","get:metrics"]} as const;
export interface _ScrollIncrementDetailsNative extends ScrollIncrementDetails {
readonly [_flaxDartTypeValue]: _ScrollIncrementDetailsNative;

get type(): upstream0.ScrollIncrementType;
get metrics(): upstream1.ScrollMetrics;
}
export abstract class _ScrollIncrementDetailsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollIncrementDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollIncrementDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollIncrementDetails", readonly [], false];
constructor(options: {type: upstream0.ScrollIncrementType; metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>}) { super(_ScrollIncrementDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ScrollIncrementDetailsNative.prototype, _ScrollIncrementDetailsProxy);
export namespace _ScrollIncrementDetailsFactory { export function implement(args: [options: {type: upstream0.ScrollIncrementType; metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>}], implementation: {}): ScrollIncrementDetails {
return constructProxy(_ScrollIncrementDetailsProxy, args, implementation) as ScrollIncrementDetails; } }
const _ScrollIncrementDetailsBinding = _flaxProxyFactory(_ScrollIncrementDetailsFactory, _ScrollIncrementDetailsNative) as unknown as typeof _ScrollIncrementDetailsFactory & (new(options: {type: upstream0.ScrollIncrementType; metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>}) => _ScrollIncrementDetailsNative);
export const ScrollIncrementDetails: typeof _ScrollIncrementDetailsBinding & _FlaxInstanceType<ScrollIncrementDetails> & _FlaxDartType<ScrollIncrementDetails, readonly ["class", "flax.core/sdk_widgets#type:ScrollIncrementDetails", readonly [], false]> = _flaxBindInstanceType<ScrollIncrementDetails, typeof _ScrollIncrementDetailsBinding>(_ScrollIncrementDetailsBinding, "flax.core/sdk_widgets#type:ScrollIncrementDetails", ["dart:core::Object"]) as typeof _ScrollIncrementDetailsBinding & _FlaxInstanceType<ScrollIncrementDetails> & _FlaxDartType<ScrollIncrementDetails, readonly ["class", "flax.core/sdk_widgets#type:ScrollIncrementDetails", readonly [], false]>;
