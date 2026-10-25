// ignore_for_file: depend_on_referenced_packages

import 'package:flax/bindings.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import 'shared.dart';

class Derived extends Box<String> {
  Derived() : super('derived');
  @override
  int score({int extra = 17}) => super.score(extra: extra) * 2;
  int base() =>
      flaxInvokeWithDefaults(super.score, [null], [0], const ['extra']) as int;
}

void main() {
  test('cached dependencies retain new fixed entries and private defaults', () {
    final column = flaxInvokeWithDefaults(
      Column.new,
      [null, null, null, null, null, null, null, null, null],
      [0],
      const [
        'key',
        'mainAxisAlignment',
        'mainAxisSize',
        'crossAxisAlignment',
        'textDirection',
        'verticalDirection',
        'textBaseline',
        'spacing',
        'children',
      ],
    ) as Column;
    expect(column.children, isEmpty);
    final box = flaxInvokeWithDefaults(
      Box<List<String>>.new,
      [
        <String>['nested'],
        null,
        null,
      ],
      [1],
      const ['', 'seed', 'callback'],
    ) as Box<List<String>>;
    expect(box.value.single, 'nested');
    expect(hasOriginalDefaults(box), isTrue);
    expect(flaxInvokeWithDefaults(readSeed, [null], [0], const ['seed']), 3);
    expect(
      flaxInvokeWithDefaults(Box.global, [null], [0], const ['extra']),
      13,
    );
    final Box<String> derived = Derived();
    expect(
      flaxInvokeWithDefaults(derived.score, [null], [0], const ['extra']),
      derived.score(),
    );
    expect((derived as Derived).base(), 17);
  });
}
