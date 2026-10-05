import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/proxy_operators_bindings.dart';
import '../fixtures/proxy_operators.dart';
import '../support/owned_harness.dart';

void main() {
  testWidgets(
    'operators preserve typed Dart dispatch, JS super, hashes and errors',
    (tester) async {
      final values = <NumberBox>[];
      final adders = <AbstractAdder>[];
      final data = <DataOperator>[];
      final callbacks = <CallbackOperator>[];
      final mixed = <MixedOperator>[];
      final h = OwnedHarness(
        fixture: 'proxy_operators',
        extra: [proxy_operatorsBindings],
        onCreate: (_, value) {
          if (value is NumberBox) values.add(value);
          if (value is AbstractAdder) adders.add(value);
          if (value is DataOperator) data.add(value);
          if (value is CallbackOperator) callbacks.add(value);
          if (value is MixedOperator) mixed.add(value);
        },
      );
      try {
        await tester.pumpWidget(h.app('proxy-operators'));
        h.execute(
          'var box = operatorHooks.create(6); var other = operatorHooks.create(6); var adder = operatorHooks.abstract(); var data = operatorHooks.data(); var callback = operatorHooks.callback()',
        );
        expect(data.single + {'answer': 42}, {'answer': 42});
        final received = <int>[];
        expect(callbacks.single + ((int value) => received.add(value)), 2);
        expect(received, [3, 1]);
        expect(h.number('callback.operatorAdd(value => {})'), 2);
        h.execute('var mixed = operatorHooks.mixed()');
        expect(mixed.single + 0.5, 12.5);
        expect(h.number('mixed.operatorAdd(0.5)'), 12.5);
        final first = values.first;
        expect(first + 2, 18);
        expect(first - 2, 4);
        expect(-first, -6);
        expect(first * 2, 12);
        expect(first / 2, 3);
        expect(first ~/ 2, 3);
        expect(first % 4, 2);
        expect(first < 7, isTrue);
        expect(first > 7, isFalse);
        expect(first <= 6, isTrue);
        expect(first >= 6, isTrue);
        expect(first & 3, 2);
        expect(first | 1, 7);
        expect(first ^ 2, 4);
        expect(first << 1, 12);
        expect(first >> 1, 3);
        expect(first >>> 1, 3);
        expect(~first, -7);
        expect(first[2], 8);
        first[2] = 9;
        expect(first.lastWrite, 11);
        expect({first, values.last}, hasLength(1));
        expect(<NumberBox, int>{first: 9}[values.last], 9);
        expect(first, isNotNull);
        expect(first.toString(), 'NumberBox(6)');
        expect(adders.single + 3, 23);
        expect(h.number('box.operatorAdd(2)'), 18);
        h.execute('box.operatorSetIndex(1, 3)');
        expect(first.lastWrite, 4);
        expect(h.boolean('box === other'), isFalse);
        h.execute('operatorHooks.fail(true)');
        expect(() => first + 1, throwsA(anything));
        h.execute('operatorHooks.fail(false); operatorHooks.badResult(true)');
        expect(() => first + 1, throwsA(anything));
        h.execute('operatorHooks.badResult(false)');
        expect(first + 1, 17);
      } finally {
        await h.finish(tester);
      }
      expect(() => values.first + 1, throwsA(anything));
    },
  );
}
