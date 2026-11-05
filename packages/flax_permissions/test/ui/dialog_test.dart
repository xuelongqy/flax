import 'dart:async';

import 'package:flax/permissions.dart';
import 'package:flax_permissions/flax_permissions.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart' as host;

import '../support/storage.dart';

const _orders = FlaxPermissionDefinition(
  id: 'example.orders.read',
  title: 'Read orders',
  authorization: FlaxPermissionAuthorization.runtime,
);
const _a = {
  'origins': ['https://a.example'],
};
const _both = {
  'origins': ['https://a.example', 'https://b.example'],
};

Future<FlaxPermissionContext> _context(
  FlaxPermissionRequestHandler callback,
) async {
  final manager = FlaxPermissionManager(
    storage: PermissionTestStorage(),
    providers: const [
      FlaxPermissionProvider(_orders, scope: FlaxOriginPermissionScope()),
    ],
  );
  final app = await manager.approveInstallation(
    sourceIdentity: 'test:trusted',
    manifest: FlaxPermissionManifest(
      appId: 'test.orders',
      name: 'Trusted orders',
      defaultLocale: 'en',
      permissions: {
        _orders.id: FlaxPermissionDeclaration(
          purpose: const {'en': 'Read your orders', 'zh': '显示订单'},
          scope: _both,
        ),
      },
    ),
  );
  return FlaxPermissionContext(
    manifest: app.manifest,
    policy: FlaxPermissionPolicy(
      application: app,
      allow: {_orders.id},
      locale: 'zh-Hans-CN',
      onRequest: callback,
    ),
  );
}

Future<void> _pumpUntil(WidgetTester tester, bool Function() condition) async {
  for (var i = 0; i < 100; i++) {
    await tester.pump(const Duration(milliseconds: 10));
    if (condition()) return;
  }
  fail('Permission dialog checkpoint was not reached');
}

Future<void> _drain(WidgetTester tester, Future<void> work) async {
  var done = false;
  final result = work.whenComplete(() => done = true);
  // Queue callbacks must drain before the widget test leaves its fake clock.
  await _pumpUntil(tester, () => done);
  await result;
}

void main() {
  testWidgets(
    'alternate Material host supplies content and barrier with captured theme and focus loop',
    (tester) async {
      final denyFocus = FocusNode();
      final allowFocus = FocusNode();
      addTearDown(denyFocus.dispose);
      addTearDown(allowFocus.dispose);
      final localTheme = host.ThemeData(
        platform: TargetPlatform.macOS,
        colorScheme: host.ColorScheme.fromSeed(
          seedColor: const Color(0xffba1c54),
        ),
      );
      late BuildContext caller;
      await tester.pumpWidget(
        host.MaterialApp(
          locale: const Locale('zh'),
          supportedLocales: const [Locale('zh')],
          localizationsDelegates: host.GlobalMaterialLocalizations.delegates,
          home: host.Theme(
            data: localTheme,
            child: Builder(
              builder: (context) {
                caller = context;
                return const SizedBox();
              },
            ),
          ),
        ),
      );
      await tester.pumpAndSettle();
      expect(
        Localizations.of<MaterialLocalizations>(caller, MaterialLocalizations),
        isNull,
      );
      final barrierLabel = host.MaterialLocalizations.of(caller)
          .modalBarrierDismissLabel;
      expect(barrierLabel, isNot('Dismiss'));
      ModalRoute<Object?>? route;
      Color? capturedPrimary;
      final context = await _context(
        (request) => showFlaxPermissionDialog(
          context: caller,
          request: request,
          barrierLabel: barrierLabel,
          builder: (dialogContext) {
            expect(
              Localizations.of<MaterialLocalizations>(
                dialogContext,
                MaterialLocalizations,
              ),
              isNull,
            );
            route = ModalRoute.of(dialogContext);
            capturedPrimary = host.Theme.of(dialogContext).colorScheme.primary;
            return host.AlertDialog(
              title: Text(
                '${request.applicationName}: ${request.definition.title}',
              ),
              content: Text(request.purpose),
              actions: [
                host.TextButton(
                  focusNode: denyFocus,
                  onPressed: () =>
                      Navigator.pop(dialogContext, FlaxPermissionDecision.deny),
                  child: const Text('Deny'),
                ),
                host.TextButton(
                  focusNode: allowFocus,
                  onPressed: () => Navigator.pop(
                    dialogContext,
                    FlaxPermissionDecision.allow,
                  ),
                  child: const Text('Allow module'),
                ),
              ],
            );
          },
        ),
      );
      final semantics = tester.ensureSemantics();
      try {
        var done = false;
        final pending = context
            .request(_orders.id)
            .whenComplete(() => done = true);
        await _pumpUntil(
          tester,
          () => find.text('Allow module').evaluate().isNotEmpty,
        );
        await tester.pumpAndSettle();
        expect(capturedPrimary, localTheme.colorScheme.primary);
        expect(route!.traversalEdgeBehavior, TraversalEdgeBehavior.closedLoop);
        expect(find.bySemanticsLabel(barrierLabel), findsOneWidget);
        denyFocus.requestFocus();
        await tester.pump();
        expect(denyFocus.hasFocus, isTrue);
        await tester.sendKeyEvent(LogicalKeyboardKey.tab);
        await tester.pump();
        expect(allowFocus.hasFocus, isTrue);
        await tester.sendKeyEvent(LogicalKeyboardKey.tab);
        await tester.pump();
        expect(denyFocus.hasFocus, isTrue);
        await tester.tap(find.text('Allow module'));
        await _pumpUntil(tester, () => done);
        expect((await pending).state, FlaxPermissionState.granted);
        expect(tester.takeException(), isNull);
      } finally {
        semantics.dispose();
        await _drain(tester, context.manager!.close());
      }
    },
    timeout: const Timeout(Duration(seconds: 30)),
  );

  testWidgets(
    'default dialog shows trusted identity, translated purpose and supplemental scopes',
    (tester) async {
      late BuildContext host;
      await tester.pumpWidget(
        MaterialApp(
          home: Builder(
            builder: (context) {
              host = context;
              return const SizedBox();
            },
          ),
        ),
      );
      var show = false;
      final context = await _context(
        (request) => show
            ? showFlaxPermissionDialog(context: host, request: request)
            : Future.value(FlaxPermissionDecision.allow),
      );
      try {
        var initialDone = false;
        final initial = context
            .request(_orders.id, scope: _a)
            .whenComplete(() => initialDone = true);
        await _pumpUntil(tester, () => initialDone);
        expect((await initial).state, FlaxPermissionState.granted);
        show = true;
        var done = false;
        final result = context
            .request(_orders.id)
            .whenComplete(() => done = true);
        await _pumpUntil(
          tester,
          () => find.text('Allow module').evaluate().isNotEmpty,
        );
        expect(find.text('Trusted orders: Read orders'), findsOneWidget);
        expect(find.textContaining('显示订单'), findsOneWidget);
        expect(find.textContaining('Requested scope: $_both'), findsOneWidget);
        expect(find.textContaining('Previously approved: $_a'), findsOneWidget);
        await tester.tap(find.text('Allow module'));
        await _pumpUntil(tester, () => done);
        expect((await result).state, FlaxPermissionState.granted);
        await tester.pumpAndSettle();
      } finally {
        await _drain(tester, context.manager!.close());
      }
    },
    timeout: const Timeout(Duration(seconds: 30)),
  );

  for (final dismissal in ['barrier', 'back']) {
    testWidgets('$dismissal dismisses the module dialog as cancel', (
      tester,
    ) async {
      late BuildContext host;
      await tester.pumpWidget(
        MaterialApp(
          home: Builder(
            builder: (context) {
              host = context;
              return const SizedBox();
            },
          ),
        ),
      );
      FlaxPermissionDecision? decision;
      final context = await _context((request) async {
        return decision = await showFlaxPermissionDialog(
          context: host,
          request: request,
        );
      });
      try {
        final result = context.request(_orders.id);
        await _pumpUntil(
          tester,
          () => find.text('Allow module').evaluate().isNotEmpty,
        );
        if (dismissal == 'barrier') {
          await tester.tapAt(const Offset(5, 5));
        } else {
          Navigator.of(host, rootNavigator: true).pop();
        }
        await _pumpUntil(tester, () => decision != null);
        expect(decision, FlaxPermissionDecision.cancel);
        expect((await result).state, FlaxPermissionState.prompt);
        await tester.pumpAndSettle();
      } finally {
        await _drain(tester, context.manager!.close());
      }
    }, timeout: const Timeout(Duration(seconds: 30)));
  }

  testWidgets(
    'custom builder replaces content and cancellation removes only its own route',
    (tester) async {
      final navigator = GlobalKey<NavigatorState>();
      late BuildContext host;
      await tester.pumpWidget(
        MaterialApp(
          navigatorKey: navigator,
          home: Builder(
            builder: (context) {
              host = context;
              return const SizedBox();
            },
          ),
        ),
      );
      var customBuilds = 0;
      final context = await _context(
        (request) => showFlaxPermissionDialog(
          context: host,
          request: request,
          builder: (_) {
            customBuilds++;
            return AlertDialog(content: Text('Custom: ${request.purpose}'));
          },
        ),
      );
      try {
        final result = context.request(_orders.id);
        await _pumpUntil(tester, () => customBuilds != 0);
        expect(find.text('Custom: 显示订单'), findsOneWidget);
        final unrelated = DialogRoute<void>(
          context: host,
          builder: (_) => const AlertDialog(content: Text('Host route')),
        );
        unawaited(navigator.currentState!.push(unrelated));
        await tester.pumpAndSettle();
        await context.manager!.revoke(context.policy!.application, _orders.id);
        await tester.pumpAndSettle();
        expect(unrelated.isActive, isTrue);
        expect(find.text('Host route'), findsOneWidget);
        expect((await result).state, FlaxPermissionState.denied);
        navigator.currentState!.removeRoute(unrelated);
        await tester.pumpAndSettle();
        expect(find.text('Custom: 显示订单'), findsNothing);
      } finally {
        await _drain(tester, context.manager!.close());
      }
    },
    timeout: const Timeout(Duration(seconds: 30)),
  );

  testWidgets(
    'cancelled requests and unmounted host contexts never open stale UI',
    (tester) async {
      late BuildContext host;
      await tester.pumpWidget(
        MaterialApp(
          home: Builder(
            builder: (context) {
              host = context;
              return const SizedBox();
            },
          ),
        ),
      );
      FlaxPermissionRequest? captured;
      final answer = Completer<FlaxPermissionDecision>();
      final context = await _context((request) {
        captured = request;
        return answer.future;
      });
      FlaxPermissionContext? next;
      try {
        final result = context.request(_orders.id);
        final closed = expectLater(result, throwsStateError);
        await _pumpUntil(tester, () => captured != null);
        await _drain(tester, context.close());
        await closed;
        expect(
          await showFlaxPermissionDialog(context: host, request: captured!),
          FlaxPermissionDecision.cancel,
        );
        expect(find.byType(AlertDialog), findsNothing);
        answer.complete(FlaxPermissionDecision.allow);

        final nextAnswer = Completer<FlaxPermissionDecision>();
        next = await _context((request) {
          captured = request;
          return nextAnswer.future;
        });
        captured = null;
        var pendingDone = false;
        final pending = next
            .request(_orders.id)
            .whenComplete(() => pendingDone = true);
        await _pumpUntil(tester, () => captured != null);
        await tester.pumpWidget(const SizedBox());
        expect(host.mounted, isFalse);
        expect(
          await showFlaxPermissionDialog(context: host, request: captured!),
          FlaxPermissionDecision.cancel,
        );
        nextAnswer.complete(FlaxPermissionDecision.cancel);
        await _pumpUntil(tester, () => pendingDone);
        await pending;
      } finally {
        await _drain(tester, context.manager!.close());
        if (next != null) await _drain(tester, next.manager!.close());
      }
    },
    timeout: const Timeout(Duration(seconds: 30)),
  );
}
