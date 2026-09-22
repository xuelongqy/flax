// Record shape fixtures for the Stage 2 mechanism matrix.
//
// `RecordBox.seed` is a record field, the remaining members put records in
// parameter, result and nested positions.

import 'dart:async';

class RecordBox {
  RecordBox(this.seed);

  final (int, int) seed;

  (int, String) take((int, String) value) => value;

  (int, String) pair(int first, String second) => (first, second);

  ({int a, String b}) takeNamed(({int a, String b}) value) => value;

  List<(int, String)> takeAll(List<(int, String)> values) => values;

  Future<(int, String)> takeFuture(Future<(int, String)> value) => value;
}
