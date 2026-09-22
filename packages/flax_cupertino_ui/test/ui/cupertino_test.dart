import 'package:cupertino_ui/cupertino_ui.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/harness.dart';

void main() {
  testWidgets('plugin installs bindings for the selected Cupertino slice', (
    tester,
  ) async {
    final harness = CupertinoHarness();
    await tester.pumpWidget(harness.view());
    await tester.pumpAndSettle();

    expect(harness.errors, isEmpty);
    expect(find.byType(CupertinoApp), findsOneWidget);
    expect(find.byType(CupertinoPageScaffold), findsOneWidget);
    expect(find.byType(CupertinoButton), findsOneWidget);
    expect(find.text('Cupertino ready'), findsOneWidget);

    final app = tester.widget<CupertinoApp>(find.byType(CupertinoApp));
    expect(app.debugShowCheckedModeBanner, isFalse);
    expect(app.theme, isA<CupertinoThemeData>());
    expect(app.theme?.primaryColor, const Color(0xff1565c0));
    expect(app.theme?.scaffoldBackgroundColor, const Color(0xffe3f2fd));

    final scaffold = tester.widget<CupertinoPageScaffold>(
      find.byType(CupertinoPageScaffold),
    );
    expect(scaffold.backgroundColor, const Color(0xfffafafa));
    expect(scaffold.resizeToAvoidBottomInset, isFalse);

    expect(harness.number('cupertinoPilot.presses'), 0);
    await tester.tap(find.byType(CupertinoButton));
    await tester.pumpAndSettle();
    expect(harness.number('cupertinoPilot.presses'), 1);

    final navigationBar = tester.widget<CupertinoNavigationBar>(
      find.byType(CupertinoNavigationBar),
    );
    final context = tester.element(find.byType(CupertinoPageScaffold));
    expect(scaffold.navigationBar, isA<ObstructingPreferredSizeWidget>());
    expect(
      scaffold.navigationBar!.shouldFullyObstruct(context),
      navigationBar.shouldFullyObstruct(context),
    );
    expect(scaffold.navigationBar!.shouldFullyObstruct(context), isTrue);
    expect(scaffold.navigationBar!.preferredSize, navigationBar.preferredSize);
    final opaqueTop = tester.getTopLeft(find.byType(CupertinoButton)).dy;
    harness.number('(() => { cupertinoPilot.setOpaque(false); return 0; })()');
    await tester.pumpAndSettle();
    final updated = tester.widget<CupertinoPageScaffold>(
      find.byType(CupertinoPageScaffold),
    );
    expect(updated.navigationBar!.shouldFullyObstruct(context), isFalse);
    expect(find.text('Translucent bar'), findsOneWidget);
    expect(
      tester.getTopLeft(find.byType(CupertinoButton)).dy,
      lessThan(opaqueTop),
    );
    // Flutter may retain the previous configuration during didUpdateWidget.
    expect(scaffold.navigationBar!.shouldFullyObstruct(context), isTrue);

    await tester.pumpWidget(const SizedBox());
    await tester.pumpAndSettle();
    expect(harness.runtime.isDisposed, isTrue);
    expect(harness.runtime.handlesAtDispose, 0);
  });

  testWidgets('recreating FlaxView creates a fresh Cupertino session', (
    tester,
  ) async {
    final first = CupertinoHarness();
    await tester.pumpWidget(first.view());
    await tester.pumpAndSettle();
    await tester.tap(find.byType(CupertinoButton));
    await tester.pumpAndSettle();
    expect(first.number('cupertinoPilot.presses'), 1);

    await tester.pumpWidget(const SizedBox());
    await tester.pumpAndSettle();
    expect(first.runtime.isDisposed, isTrue);
    expect(first.runtime.handlesAtDispose, 0);

    final second = CupertinoHarness();
    await tester.pumpWidget(second.view());
    await tester.pumpAndSettle();
    expect(second.errors, isEmpty);
    expect(second.number('cupertinoPilot.presses'), 0);
    expect(find.text('Opaque bar'), findsOneWidget);

    await tester.pumpWidget(const SizedBox());
    await tester.pumpAndSettle();
    expect(second.runtime.isDisposed, isTrue);
    expect(second.runtime.handlesAtDispose, 0);
  });
}
