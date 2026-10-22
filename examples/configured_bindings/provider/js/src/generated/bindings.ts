// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
export const pricesBindingModule = _flaxInstallBindingModule("example.prices/prices", 24, Object.freeze(["call-layouts","generic-member-views","inherited-binding-members","instance-checks","native-navigation-objects","native-widget-proxies"]) as readonly string[]);
const { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineDartTypes: _flaxDefineDartTypes, bindInstanceType: _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = pricesBindingModule;
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Money extends Readonly<{ "__flaxBound:package:configured_prices/api.dart::Money": readonly [] }> { readonly __Money: unique symbol;
readonly [_flaxDartTypeValue]: Money;

readonly cents: number;
}
defineObject("example.prices/prices#type:Money", ["cents"], [], _flaxBindingMethods("example.prices/prices#type:Money", "object", {}, {}), []);
export function _MoneyFactory(options: { cents: number }): Money {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "example.prices/prices#type:Money", "", [{"name":"cents","required":true}], [], options) as Money;
}
export const Money: typeof _MoneyFactory & _FlaxInstanceType<Money> & _FlaxDartType<Money, readonly ["class", "example.prices/prices#type:Money", readonly [], false]> = _flaxBindInstanceType<Money, typeof _MoneyFactory>(_MoneyFactory, "example.prices/prices#type:Money", ["dart:core::Object"]) as typeof _MoneyFactory & _FlaxInstanceType<Money> & _FlaxDartType<Money, readonly ["class", "example.prices/prices#type:Money", readonly [], false]>;
