// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@example/prices/api';
import '@example/prices/api';
import type * as upstream1 from '@flax/dart/async';
import type * as upstream2 from '@example/shop/delivery';
import '@example/shop/delivery';
const _flaxMemberParameters0 = [{"name":"count","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
export const shopBindingModule = _flaxInstallBindingModule("example.shop/shop", 24, Object.freeze(["generic-member-views","inherited-binding-members","instance-checks","native-navigation-objects","native-widget-proxies"]) as readonly string[]);
const { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineDartTypes: _flaxDefineDartTypes, bindInstanceType: _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = shopBindingModule;
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Cart extends Readonly<{ "__flaxBound:package:configured_host/api.dart::Cart": readonly [] }> { readonly __Cart: unique symbol;
readonly [_flaxDartTypeValue]: Cart;

readonly unitPrice: upstream0.Money;
get quantity(): number;
readonly quantities: upstream1.Stream<number>;
add(count: number): upstream0.Money;
delivery(): upstream2.DeliveryEstimate;
set quantity(value: number);
}
defineObject("example.shop/shop#type:Cart", ["unitPrice","quantity","quantities"], ["quantity"], _flaxBindingMethods("example.shop/shop#type:Cart", "object", {"add":_flaxMemberParameters0,"delivery":_flaxMemberParameters1}, {}), []);
export function _CartFactory(): Cart {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "example.shop/shop#type:Cart", "", _flaxMemberParameters1, [], {}) as Cart;
}
export const Cart: typeof _CartFactory & _FlaxInstanceType<Cart> & _FlaxDartType<Cart, readonly ["class", "example.shop/shop#type:Cart", readonly [], false]> = _flaxBindInstanceType<Cart, typeof _CartFactory>(_CartFactory, "example.shop/shop#type:Cart", ["dart:core::Object"]) as typeof _CartFactory & _FlaxInstanceType<Cart> & _FlaxDartType<Cart, readonly ["class", "example.shop/shop#type:Cart", readonly [], false]>;
function _flaxTopLevel_currentCart(): Cart {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("example.shop/shop#function:currentCart", []);
return _flaxResult as Cart;
}
export { _flaxTopLevel_currentCart as currentCart };
