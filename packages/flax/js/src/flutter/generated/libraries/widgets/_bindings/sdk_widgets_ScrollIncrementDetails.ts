// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIncrementType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIncrementType';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollIncrementDetails extends Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIncrementDetails": readonly [] }> { readonly __ScrollIncrementDetails: unique symbol;
readonly [_flaxDartTypeValue]: ScrollIncrementDetails;

}
defineObject("flax.core/sdk_widgets#type:ScrollIncrementDetails", ["type","metrics"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollIncrementDetails", "object", {}, {}), []);
const _ScrollIncrementDetailsProxy = {type: "flax.core/sdk_widgets#type:ScrollIncrementDetails", parameters: [{"name":"type","required":true,"positional":false},{"name":"metrics","required":true,"positional":false}], constructors: {"":[{"name":"type","required":true,"positional":false},{"name":"metrics","required":true,"positional":false}]}, methods: {}, getters: ["type","metrics"], setters: [], contextMembers: [], superMembers: ["get:type","get:metrics"]} as const;
export interface ScrollIncrementDetails {
readonly [_flaxDartTypeValue]: ScrollIncrementDetails;

get type(): upstream0.ScrollIncrementType;
get metrics(): upstream1.ScrollMetrics;
}
export abstract class ScrollIncrementDetails extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollIncrementDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollIncrementDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollIncrementDetails", readonly [], false];
constructor(options: {type: upstream0.ScrollIncrementType; metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>}) { super(_ScrollIncrementDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ScrollIncrementDetails.prototype, _ScrollIncrementDetailsProxy);
export namespace ScrollIncrementDetails { export function implement(args: [options: {type: upstream0.ScrollIncrementType; metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>}], implementation: {}): ScrollIncrementDetails {
return constructProxy(_ScrollIncrementDetailsProxy, args, implementation) as ScrollIncrementDetails; } }
_flaxBindInstanceType<ScrollIncrementDetails, typeof ScrollIncrementDetails>(ScrollIncrementDetails, "flax.core/sdk_widgets#type:ScrollIncrementDetails", ["dart:core::Object"]);
