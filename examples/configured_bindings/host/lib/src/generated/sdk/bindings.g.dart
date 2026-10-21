// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:configured_host/api.dart' as api;
import 'package:flax/bindings.dart';
import 'package:configured_prices/api.dart' as api1;

import 'dart:async' as api2;

import "package:configured_prices/src/generated/bindings.g.dart"
    as _flaxBindings0;

// ignore: unused_element
const _flaxOmitted = Object();
const shopBindings = FlaxBindingModule(
  'shop',
  [_flaxBinding11],
  functions: [
    FlaxFunctionBinding(
      "example.shop/shop#function:currentCart",
      [],
      _flaxBinding12,
      _function_currentCart,
    ),
  ],
  constants: [],
  moduleId: "example.shop/shop",
  dependencyModules: [
    "example.prices/prices",
    "example.shop/delivery",
    "flax.core/flutter",
  ],
  dependencies: [_flaxBindings0.pricesBindings],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "native-navigation-objects",
    "native-widget-proxies",
  ],
  stateVariants: [],
  dartTypes: [
    FlaxDartClassTemplate("example.shop/shop#type:Cart", api.Cart, "object"),
  ],
  dartShapes: _flaxDartShapes,
);
Object? _function_currentCart(Map<String, Object?> values) {
  return api.currentCart();
}

bool _isCart(Object value) => value is api.Cart;
Object? _Cart_unitPrice(Object value) => (value as api.Cart).unitPrice;
Object? _Cart_quantity(Object value) => (value as api.Cart).quantity;
Object? _Cart_quantities(Object value) => (value as api.Cart).quantities;
void _Cart_set_quantity(Object receiver, Object? value) {
  (receiver as api.Cart).quantity = value as int;
}

Object? _Cart_add(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Cart).add(values["count"] as int);
}

Object? _Cart_delivery(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Cart).delivery();
}

Object _createCart(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Cart();
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

const _flaxDartShapes = <FlaxDartShapeTemplate>[];
bool _stream0Matches(Object value) => value is api2.Stream<int>;
api2.Stream<Object?> _stream0Adapt(Object value) =>
    (value is api2.Stream<int>
            ? value
            : (value as api2.Stream<Object?>).map<int>(
                (event) => _genericCallbackResult<int>(event),
              ))
        as api2.Stream<Object?>;
T _genericCallbackResult<T>(Object? value) {
  // Test assignability to cover both nullable and non-nullable numeric T.
  // Broad bounds keep their decoded representation; only the Dart use site
  // selects a more specific numeric representation.
  if (value is num && value is! T) {
    if (0 is T && 0.0 is! T) {
      if (!value.isFinite ||
          value.abs() > 9007199254740991 ||
          value != value.truncateToDouble()) {
        throw ArgumentError('Expected a safe integer');
      }
      return value.toInt() as T;
    }
    if (0.0 is T && 0 is! T) return value.toDouble() as T;
  }
  return value as T;
}

const _flaxBinding0 = FlaxTypeRef(
  "object",
  id: "example.prices/prices#type:Money",
);
const _flaxBinding1 = FlaxGetter.plain(
  "unitPrice",
  _flaxBinding0,
  _Cart_unitPrice,
);
const _flaxBinding2 = FlaxGetter.plain("quantity", flaxIntType, _Cart_quantity);
const _flaxBinding3 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api2.Stream<int>>,
  item: flaxIntType,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[int:]",
    _stream0Matches,
    _stream0Adapt,
  ),
);
const _flaxBinding4 = FlaxGetter.plain(
  "quantities",
  _flaxBinding3,
  _Cart_quantities,
);
const _flaxBinding5 = FlaxSetter("quantity", flaxIntType, _Cart_set_quantity);
const _flaxBinding6 = <FlaxParameter>[
  FlaxParameter.required("count", flaxIntType),
];
const _flaxBinding7 = FlaxInstanceMethod.plain(
  _flaxBinding6,
  _flaxBinding0,
  _Cart_add,
);
const _flaxBinding8 = FlaxTypeRef(
  "object",
  id: "example.shop/delivery#type:DeliveryEstimate",
);
const _flaxBinding9 = <FlaxParameter>[];
const _flaxBinding10 = FlaxInstanceMethod.plain(
  _flaxBinding9,
  _flaxBinding8,
  _Cart_delivery,
);
const _flaxBinding11 = FlaxObjectBinding(
  "example.shop/shop#type:Cart",
  [_flaxBinding1, _flaxBinding2, _flaxBinding4],
  {"add": _flaxBinding7, "delivery": _flaxBinding10},
  constructors: {"": _flaxBinding9},
  create: _createCart,
  matches: _isCart,
  setters: [_flaxBinding5],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding12 = FlaxTypeRef("object", id: "example.shop/shop#type:Cart");
