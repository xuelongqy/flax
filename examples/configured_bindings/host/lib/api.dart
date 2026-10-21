import 'dart:async';

import 'package:configured_delivery/configured_delivery.dart';
import 'package:configured_prices/api.dart';

export 'package:configured_delivery/configured_delivery.dart';

class Cart {
  int _quantity = 1;
  final _changes = StreamController<int>.broadcast();
  final unitPrice = Money(cents: 1200);

  int get quantity => _quantity;

  set quantity(int value) {
    if (_quantity == value) return;
    _quantity = value;
    _changes.add(value);
  }

  Stream<int> get quantities => _changes.stream;

  Money add(int count) {
    quantity += count;
    return Money(cents: quantity * unitPrice.cents);
  }

  DeliveryEstimate delivery() => DeliveryEstimate(days: quantity + 1);
}

final hostCart = Cart();

// Dart-only diagnostics; not selected by the binding configurations.
bool get cartHasSubscribers => hostCart._changes.hasListener;

Cart currentCart() => hostCart;

// Select this in the shop YAML when trying the additive host upgrade in the guide.
int sdkRevision() => 2;

int adminCalls = 0;

Money resetCart() {
  adminCalls++;
  hostCart.quantity = 1;
  return hostCart.unitPrice;
}
