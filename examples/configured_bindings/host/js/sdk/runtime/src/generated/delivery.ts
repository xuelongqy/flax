// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
export const deliveryBindingModule = _flaxInstallBindingModule("example.shop/delivery", 24, Object.freeze(["generic-member-views","inherited-binding-members","instance-checks","native-navigation-objects","native-widget-proxies"]) as readonly string[]);
const { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineDartTypes: _flaxDefineDartTypes, bindInstanceType: _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = deliveryBindingModule;
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DeliveryEstimate extends Readonly<{ "__flaxBound:package:configured_delivery/configured_delivery.dart::DeliveryEstimate": readonly [] }> { readonly __DeliveryEstimate: unique symbol;
readonly [_flaxDartTypeValue]: DeliveryEstimate;

readonly days: number;
}
defineObject("example.shop/delivery#type:DeliveryEstimate", ["days"], [], _flaxBindingMethods("example.shop/delivery#type:DeliveryEstimate", "object", {}, {}), []);
export function _DeliveryEstimateFactory(options: { days: number }): DeliveryEstimate {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "example.shop/delivery#type:DeliveryEstimate", "", [{"name":"days","required":true}], [], options) as DeliveryEstimate;
}
export const DeliveryEstimate: typeof _DeliveryEstimateFactory & _FlaxInstanceType<DeliveryEstimate> & _FlaxDartType<DeliveryEstimate, readonly ["class", "example.shop/delivery#type:DeliveryEstimate", readonly [], false]> = _flaxBindInstanceType<DeliveryEstimate, typeof _DeliveryEstimateFactory>(_DeliveryEstimateFactory, "example.shop/delivery#type:DeliveryEstimate", ["dart:core::Object"]) as typeof _DeliveryEstimateFactory & _FlaxInstanceType<DeliveryEstimate> & _FlaxDartType<DeliveryEstimate, readonly ["class", "example.shop/delivery#type:DeliveryEstimate", readonly [], false]>;
