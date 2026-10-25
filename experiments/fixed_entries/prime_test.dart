// ignore_for_file: depend_on_referenced_packages

import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import 'shared.dart';

void main() {
  test('prime dependency libraries without fixed entries', () {
    expect(Column().children, isEmpty);
    expect(Box('prime').score(), 17);
  });
}
