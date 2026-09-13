import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_embedded/scaffold.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

void main() {
  testWidgets(
    'JS page owns its Scaffold and retains body state across bar and host changes',
    (t) async {
      final source = File('assets/pages.js').readAsStringSync();
      final observer = FlaxNavigatorObserver();
      Widget app() => MaterialApp(
        navigatorObservers: [observer],
        home: Builder(
          builder: (context) => TextButton(
            onPressed: () => Navigator.of(context).push(
              MaterialPageRoute<void>(
                builder: (_) => ScaffoldDemo(source: source),
              ),
            ),
            child: const Text('Open'),
          ),
        ),
      );
      Future<void> press(String label) async {
        await t.tap(find.widgetWithText(TextButton, label));
        await t.pumpAndSettle();
      }

      await t.pumpWidget(app());
      await press('Open');
      expect(find.byType(Scaffold), findsOneWidget);
      final field = t.widget<TextField>(find.byType(TextField));
      await t.enterText(find.byType(TextField), 'Orders 编辑🙂');
      await press('Open generated dialog');
      expect(find.byType(AlertDialog), findsOneWidget);
      await press('Update dialog value');
      expect(find.text('Dialog count: 1'), findsOneWidget);
      await press('Accept generated dialog');
      expect(find.text('Dialog result: {"count":1}'), findsOneWidget);
      expect(field.controller!.text, 'Orders 编辑🙂');
      await press('Page count');
      await press('Change title');
      expect(find.text('Updated JS title'), findsOneWidget);
      await press('Change bar height');
      expect(t.widget<AppBar>(find.byType(AppBar)).toolbarHeight, 96);
      await press('Toggle bar bottom');
      expect(t.widget<AppBar>(find.byType(AppBar)).preferredSize.height, 120);
      await press('Change host theme');
      await press('Toggle custom bar');
      expect(find.text('Custom JS toolbar'), findsOneWidget);
      expect(find.byType(AppBar), findsNothing);
      expect(
        t.widget<TextField>(find.byType(TextField)).controller,
        same(field.controller),
      );
      expect(
        t.widget<TextField>(find.byType(TextField)).focusNode,
        same(field.focusNode),
      );
      expect(field.controller!.text, 'Orders 编辑🙂');
      expect(find.text('Page count: 1'), findsOneWidget);
      await press('Back to host');
      await press('Open');
      expect(
        t.widget<TextField>(find.byType(TextField)).controller!.text,
        'Page-owned input',
      );
      expect(find.text('Page count: 0'), findsOneWidget);
      await t.tap(find.byTooltip('Back'));
      await t.pumpAndSettle();
      expect(find.text('Open'), findsOneWidget);
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      expect(t.takeException(), isNull);
    },
  );
}
