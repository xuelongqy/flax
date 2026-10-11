import 'package:flax/flax.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/interop_bindings.dart';
import '../support/owned_harness.dart';

void main() {
  testWidgets('hot reload transaction preserves mounted component State', (
    tester,
  ) async {
    final h = OwnedHarness(fixture: 'hot_reload', extra: [interopBindings]);
    try {
      await tester.pumpWidget(h.app('hot-reload'));
      await tester.pumpAndSettle();
      expect(h.errors, isEmpty);
      expect(find.text('V1 0'), findsOneWidget);
      expect(h.number('hotReload.initCount'), 1);
      expect(h.number('hotReload.disposeCount'), 0);

      final component = find.byWidgetPredicate(
        (widget) =>
            widget.runtimeType.toString().startsWith('HotReloadWidget@'),
      );
      expect(component, findsOneWidget);
      final element = tester.element(component);
      final state = tester.state(component);

      h.execute('''
          hotReload.state.setCount(7);
          hotReload.state.textController.text = 'edited';
          hotReload.before = hotReload.state;
          hotReload.beforeTextController = hotReload.state.textController;
          hotReload.beforeScrollController = hotReload.state.scrollController;
        ''');
      await tester.pump();
      expect(find.text('V1 7'), findsOneWidget);
      expect(h.string('hotReload.state.textController.text'), 'edited');
      expect(
        h.constructions['flax.core/flutter#type:TextEditingController'],
        1,
      );
      expect(h.constructions['flax.core/flutter#type:ScrollController'], 1);

      h.execute(
        'hotReload.clearCallbackEvents(); hotReload.state.armCallbacks();',
      );
      final reassembleBefore = h.number('hotReload.reassembleCount');
      h.execute('hotReload.reload(2)');
      await tester.pump();
      expect(find.text('V2 7'), findsOneWidget);
      expect(h.number('hotReload.reassembleCount'), reassembleBefore + 1);
      expect(tester.element(component), same(element));
      expect(tester.state(component), same(state));
      expect(h.boolean('hotReload.before === hotReload.state'), isTrue);
      expect(
        h.boolean(
          'hotReload.beforeTextController === hotReload.state.textController',
        ),
        isTrue,
      );
      expect(
        h.boolean(
          'hotReload.beforeScrollController === hotReload.state.scrollController',
        ),
        isTrue,
      );
      expect(h.string('hotReload.state.textController.text'), 'edited');
      expect(h.number('hotReload.initCount'), 1);
      expect(h.number('hotReload.disposeCount'), 0);

      expect(
        () => h.execute('hotReload.selectTickerVariantOnMountedState()'),
        throwsA(
          isA<FlaxJsException>().having(
            (error) => error.toString(),
            'message',
            contains('fresh State'),
          ),
        ),
      );

      expect(
        () => h.execute('hotReload.registerLatePage()'),
        throwsA(
          isA<FlaxJsException>().having(
            (error) => error.toString(),
            'message',
            contains('Page registration is closed'),
          ),
        ),
      );

      h.execute("hotReload.state.textController.text = 'callback'");
      // Device clocks can deliver timers before these listener assertions.
      expect(
        h.string(
          "hotReload.callbackEvents.filter((event) => "
          "event.startsWith('listener:')).join(',')",
        ),
        'listener:v2,listener:v1',
      );
      await tester.pump(const Duration(milliseconds: 25));
      expect(
        h.string(
          "hotReload.callbackEvents.filter((event) => "
          "event.startsWith('timer:')).join(',')",
        ),
        'timer:v2,timer:v1',
      );

      h.execute('hotReload.startFuture(10)');
      await tester.pump();
      expect(h.runtime.pendingPromises, 1);
      expect(
        h.string("hotReload.futureEvents.join(',')"),
        'future:v1:start:10',
      );
      h.execute('hotReload.replaceFutureImplementation()');
      await tester.pump();
      expect(h.runtime.pendingPromises, 1);
      expect(
        h.string("hotReload.futureEvents.join(',')"),
        'future:v1:start:10',
      );
      h.execute('hotReload.completeFuture()');
      h.runtime.drainMicrotasks();
      await tester.pump();
      await tester.pump();
      expect(h.runtime.pendingPromises, 0);
      expect(
        h.string("hotReload.futureEvents.join(',')"),
        'future:v1:start:10,future:v1:end:10,future:result:11',
      );

      h.execute('hotReload.startFuture(20)');
      await tester.pump();
      await tester.pump();
      expect(
        h.string("hotReload.futureEvents.join(',')"),
        'future:v1:start:10,future:v1:end:10,future:result:11,'
        'future:v2:20,future:result:22',
      );

      h.execute('hotReload.state.bump()');
      await tester.pump();
      expect(find.text('V2 9'), findsOneWidget);

      expect(
        () => h.execute('hotReload.failReload()'),
        throwsA(
          isA<FlaxJsException>().having(
            (error) => error.toString(),
            'message',
            contains('staged failure'),
          ),
        ),
      );
      await tester.pump();
      expect(find.text('V2 9'), findsOneWidget);
      expect(tester.state(component), same(state));

      for (final expression in [
        'hotReload.reloadWithField()',
        'hotReload.reloadWithExtraPage()',
        'hotReload.reloadWithoutPage()',
      ]) {
        expect(
          () => h.execute(expression),
          throwsA(
            isA<FlaxJsException>().having(
              (error) => error.toString(),
              'message',
              contains('requires restart'),
            ),
          ),
        );
        await tester.pump();
        expect(find.text('V2 9'), findsOneWidget);
        expect(tester.state(component), same(state));
      }

      final handlesBeforeRepeatedReload = h.runtime.handles;
      for (var version = 3; version <= 7; version++) {
        h.execute('hotReload.reload($version)');
        await tester.pump();
        expect(find.text('V$version 9'), findsOneWidget);
        expect(h.runtime.handles, handlesBeforeRepeatedReload);
      }
      expect(h.number('hotReload.initCount'), 1);
      expect(h.number('hotReload.disposeCount'), 0);
      expect(
        h.constructions['flax.core/flutter#type:TextEditingController'],
        1,
      );
      expect(h.constructions['flax.core/flutter#type:ScrollController'], 1);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(tester);
    }
    expect(h.runtime.handlesAtDispose, 0);
  });

  testWidgets('runApp root uses the same mounted State replacement path', (
    tester,
  ) async {
    final h = OwnedHarness(fixture: 'hot_reload', extra: [interopBindings]);
    try {
      await tester.pumpWidget(
        Directionality(
          textDirection: TextDirection.ltr,
          child: FlaxView.session(session: h.session),
        ),
      );
      await tester.pumpAndSettle();
      expect(find.text('V1 0'), findsOneWidget);
      final component = find.byWidgetPredicate(
        (widget) =>
            widget.runtimeType.toString().startsWith('HotReloadWidget@'),
      );
      final element = tester.element(component);
      final state = tester.state(component);

      h.execute('hotReload.state.setCount(4)');
      await tester.pump();
      h.execute("hotReload.reload(2, 'ROOT')");
      await tester.pump();

      expect(find.text('ROOT 4'), findsOneWidget);
      expect(tester.element(component), same(element));
      expect(tester.state(component), same(state));
      expect(h.number('hotReload.initCount'), 1);
      expect(h.number('hotReload.disposeCount'), 0);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(tester);
    }
  });
}
