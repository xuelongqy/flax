import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import 'package:flax_test/flax_test.dart';

import '../support/harness.dart';

void main() {
  for (final keyed in [false, true]) {
    testWidgets('mixed component list identity with stable keys: $keyed', (
      t,
    ) async {
      var native = <Widget>[
        const _Notice(),
        _Counter(key: keyed ? const ValueKey('counter') : null),
      ];
      final h = Harness();
      final code =
          '''${flaxTestFixtureSource('components')}
class Notice extends componentApi.Counter {}
class Counter extends componentApi.Counter {}
var makeNotice = () => new Notice('notice');
var makeCounter = () => new Counter('counter', 0, ${keyed ? "{key: componentApi.ValueKey('counter')}" : '{}'});
var items = componentApi.signal([makeNotice(), makeCounter()]);
componentApi.runApp(componentApi.Column({children: items.bind}));
''';
      Widget tree() => MaterialApp(
        home: Row(
          children: [
            SizedBox(width: 350, child: Column(children: native)),
            SizedBox(width: 350, child: h.view(code: code)),
          ],
        ),
      );
      await t.pumpWidget(tree());
      t.state<_CounterState>(find.byType(_Counter)).increment();
      h.execute(
        'componentHooks.states[1].setState(() => componentHooks.states[1].count++)',
      );
      await t.pump();
      expect(find.text('native:1'), findsOneWidget);
      expect(find.text('counter:1:ltr'), findsOneWidget);
      native = [_Counter(key: keyed ? const ValueKey('counter') : null)];
      h.execute('items.value = [makeCounter()]');
      await t.pumpWidget(tree());
      expect(find.text('native:1'), findsOneWidget);
      if (keyed) {
        expect(find.text('counter:1:ltr'), findsOneWidget);
        expect(h.number('componentHooks.states.length'), 2);
        // Insert and move another type without replacing the keyed Counter.
        h.execute('items.value = [makeNotice(), makeCounter()]');
        await t.pump();
        h.execute('items.value = [makeCounter(), makeNotice()]');
        await t.pump();
        expect(find.text('counter:1:ltr'), findsOneWidget);
        expect(h.number('Number(componentHooks.states[1].mounted)'), 1);
      } else {
        expect(find.text('counter:1:ltr'), findsOneWidget);
        expect(h.number('Number(componentHooks.states[1].mounted)'), 1);
      }
      await t.pumpWidget(const SizedBox());
      expect(h.errors, isEmpty);
      expect(h.runtime.isDisposed, isTrue);
    });
  }
}

class _Notice extends StatelessWidget {
  const _Notice();
  @override
  Widget build(BuildContext context) => const Text('native notice');
}

class _Counter extends StatefulWidget {
  const _Counter({super.key});
  @override
  State<_Counter> createState() => _CounterState();
}

class _CounterState extends State<_Counter> {
  int count = 0;
  void increment() => setState(() => count++);
  @override
  Widget build(BuildContext context) => Text('native:$count');
}
