import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_embedded/pages.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/bindings.dart';
import '../support/runtime_tracker.dart';

void main() {
  testWidgets(
    'native Router opens a named page directly and updates one identity',
    (t) async {
      final runtime = RuntimeTracker();
      final errors = <Object>[];
      final session = FlaxSession(
        createRuntime: () => runtime,
        source: File('assets/pages.js').readAsStringSync(),
        bindings: registry,
        onError: (e, _) => errors.add(e),
      );
      final delegate = OrdersRouter(session);
      final provider = PlatformRouteInformationProvider(
        initialRouteInformation: RouteInformation(
          uri: Uri.parse('/orders/42?filter=all'),
        ),
      );
      await t.pumpWidget(
        MaterialApp(
          builder: (_, child) => Material(child: child),
          home: Router<Uri>(
            routerDelegate: delegate,
            routeInformationParser: const OrderPathParser(),
            routeInformationProvider: provider,
          ),
        ),
      );
      await t.pumpAndSettle();
      expect(find.text('Order 42 · all'), findsOneWidget);
      expect(runtime.jsCalls['__flaxBindings.createPage'], 1);
      await t.tap(find.text('Increment order'));
      await t.pumpAndSettle();
      delegate.updateFilter();
      await t.pumpAndSettle();
      expect(find.text('Order 42 · recent'), findsOneWidget);
      expect(find.text('Order count: 1'), findsOneWidget);
      delegate.openSecond();
      await t.pumpAndSettle();
      expect(runtime.jsCalls['__flaxBindings.createPage'], 2);
      await t.tap(find.text('Return order'));
      await t.pumpAndSettle();
      expect(runtime.jsCalls['__flaxBindings.createPage'], 2);
      expect(find.text('Order count: 1'), findsOneWidget);
      delegate.replaceIdentity();
      await t.pumpAndSettle();
      expect(runtime.jsCalls['__flaxBindings.createPage'], 3);
      expect(find.text('Order count: 0'), findsOneWidget);
      expect(errors, isEmpty);
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      provider.dispose();
      delegate.dispose();
      await session.close();
      expect(runtime.handlesAtDispose, 0);
      expect(runtime.activeSubscriptions, 0);
    },
  );

  testWidgets(
    'a native Page retains its session until TransitionRoute.completed',
    (t) async {
      final runtime = RuntimeTracker();
      final errors = <Object>[];
      final session = FlaxSession(
        createRuntime: () => runtime,
        source: File('assets/pages.js').readAsStringSync(),
        bindings: registry,
        onError: (e, _) => errors.add(e),
      );
      final key = GlobalKey<NavigatorState>();
      final show = ValueNotifier(true);
      var closed = false;
      await t.pumpWidget(
        MaterialApp(
          builder: (_, child) => Material(child: child),
          home: ValueListenableBuilder<bool>(
            valueListenable: show,
            builder: (_, visible, _) => Navigator(
              key: key,
              pages: [
                const MaterialPage<void>(
                  key: ValueKey('home'),
                  child: Text('Native home'),
                ),
                if (visible)
                  MaterialPage<Object?>(
                    key: const ValueKey('order'),
                    child: FlaxView.page(
                      session: session,
                      name: 'orderDetails',
                      arguments: const {'orderId': '42', 'filter': 'all'},
                    ),
                  ),
              ],
              onDidRemovePage: (_) {},
            ),
          ),
        ),
      );
      await t.pumpAndSettle();
      final route = ModalRoute.of(t.element(find.text('Order 42 · all')))!;
      var completed = false;
      route.completed.then((_) => completed = true);
      final closing = session.close().then((_) => closed = true);
      show.value = false;
      await t.pump();
      expect(completed, false);
      expect(closed, false);
      expect(runtime.isDisposed, false);
      await t.pumpAndSettle();
      await closing;
      expect(completed, true);
      expect(closed, true);
      expect(find.text('Native home'), findsOneWidget);
      expect(errors, isEmpty);
      expect(runtime.handlesAtDispose, 0);
      await t.pumpWidget(const SizedBox());
      show.dispose();
    },
  );
}
