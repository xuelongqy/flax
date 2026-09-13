import 'package:flax_local_storage/flax_local_storage.dart';

import '../test/support/storage_scenario.dart';

import 'package:flax_embedded/main.dart' as app;
import 'package:flax_embedded/navigation.dart' show MiniAppPage;
import 'package:flutter/widgets.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:material_ui/material_ui.dart'
    show Theme, TextField, AppBar, AlertDialog;

void main() {
  final binding = IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  binding.framePolicy = LiveTestWidgetsFlutterBindingFramePolicy.benchmarkLive;
  testWidgets(
    'real macOS events update independent JS regions and dynamic children',
    (tester) async {
      await app.main();
      await _pumpUntilFound(tester, find.text('Count: 0'));
      Finder inRegion(String name, String label) => find.descendant(
        of: find.byKey(ValueKey(name)),
        matching: find.text(label),
      );
      Future<void> tap(Finder finder) async {
        await tester.ensureVisible(finder);
        await _pumpApplicationFrame(tester);
        await tester.tap(finder);
        await _pumpApplicationFrame(tester);
      }

      expect(find.text('Count: 0'), findsNWidgets(2));
      expect(find.text('Direction: LTR'), findsNWidgets(2));
      await tap(inRegion('left', 'Increment'));
      expect(inRegion('left', 'Count: 1'), findsOneWidget);
      expect(inRegion('right', 'Count: 0'), findsOneWidget);
      await tap(find.byKey(const ValueKey('toggle-direction')));
      expect(find.text('Direction: RTL'), findsNWidgets(2));
      expect(inRegion('left', 'Count: 1'), findsOneWidget);
      await tap(find.byKey(const ValueKey('toggle-width')));
      expect(find.text('Layout: Compact'), findsNWidgets(2));
      expect(inRegion('left', 'Count: 1'), findsOneWidget);
      await tap(inRegion('left', 'Toggle detail'));
      expect(inRegion('left', 'Conditional detail'), findsNothing);
      await tap(inRegion('left', 'Add item'));
      expect(inRegion('left', 'Item 4'), findsOneWidget);
      await tap(inRegion('left', 'Reverse items'));
      expect(
        tester.getTopLeft(inRegion('left', 'Item 4')).dy,
        lessThan(tester.getTopLeft(inRegion('left', 'Item 1')).dy),
      );
      await tap(inRegion('left', 'Remove item'));
      expect(inRegion('left', 'Item 1'), findsNothing);
      await tap(inRegion('right', 'Batch +3'));
      expect(inRegion('right', 'Count: 3'), findsOneWidget);
      await tap(find.byKey(const ValueKey('toggle-left')));
      expect(find.byKey(const ValueKey('left')), findsNothing);
      expect(inRegion('right', 'Count: 3'), findsOneWidget);
      await tap(find.byKey(const ValueKey('toggle-left')));
      expect(inRegion('left', 'Count: 0'), findsOneWidget);
      expect(inRegion('right', 'Count: 3'), findsOneWidget);
      expect(find.text('Direction: RTL'), findsNWidgets(2));
      expect(find.text('Layout: Compact'), findsNWidgets(2));
      await tap(find.byKey(const ValueKey('scroll-demo')));
      final scroll = find.byType(SingleChildScrollView);
      await tester.drag(scroll, const Offset(0, -160));
      await _pumpApplicationFrame(tester);
      expect(find.text('Scroll offset: 0'), findsNothing);
      await tap(find.text('Back to top'));
      expect(find.text('Scroll offset: 0'), findsOneWidget);
      await tap(find.text('Replace controller'));
      await tester.drag(scroll, const Offset(0, -100));
      await _pumpApplicationFrame(tester);
      expect(find.text('Scroll offset: 0'), findsNothing);
      Navigator.of(tester.element(scroll)).pop();
      await _pumpApplicationFrame(tester);
      await tap(find.byKey(const ValueKey('scroll-demo')));
      expect(find.text('Scroll offset: 0'), findsOneWidget);
      Navigator.of(tester.element(find.text('Scroll offset: 0'))).pop();
      await _pumpApplicationFrame(tester);
      await tap(find.byKey(const ValueKey('text-editing-demo')));
      final input = find.descendant(
        of: find.byKey(const ValueKey('text-input')).first,
        matching: find.byType(EditableText),
      );
      // Inject through Flutter's input channel; this is not an OS IME test.
      tester.testTextInput.register();
      await tester.enterText(input, '中文🌱');
      await _pumpApplicationFrame(tester);
      expect(find.text('Editing: 中文🌱'), findsOneWidget);
      tester.testTextInput.updateEditingValue(
        const TextEditingValue(
          text: '中文🌱',
          selection: TextSelection.collapsed(offset: 2),
          composing: TextRange(start: 0, end: 2),
        ),
      );
      await _pumpApplicationFrame(tester);
      expect(find.text('Selection 2:2 · Composing 0:2'), findsOneWidget);
      tester.testTextInput.updateEditingValue(
        const TextEditingValue(
          text: '中文🌱',
          selection: TextSelection.collapsed(offset: 4),
        ),
      );
      await tester.testTextInput.receiveAction(TextInputAction.done);
      await _pumpApplicationFrame(tester);
      expect(find.text('User changes: 1 · Submitted: 中文🌱'), findsOneWidget);
      await tap(find.text('Replace editing value'));
      expect(find.text('Editing: Hello 🌱'), findsOneWidget);
      await tap(find.text('Clear input'));
      expect(find.text('Editing: '), findsOneWidget);
      await tap(find.text('Replace text controller'));
      expect(find.text('Editing: Replacement'), findsOneWidget);
      Navigator.of(tester.element(input)).pop();
      await _pumpApplicationFrame(tester);
      await tap(find.byKey(const ValueKey('text-editing-demo')));
      expect(find.text('Editing: '), findsOneWidget);
      Navigator.of(tester.element(find.byType(EditableText).first)).pop();
      await _pumpApplicationFrame(tester);
      await tap(find.byKey(const ValueKey('focus-demo')));
      final firstFocusInput = find.byType(EditableText).first;
      await tester.enterText(firstFocusInput, 'a12345');
      await _pumpApplicationFrame(tester);
      expect(
        tester.widget<EditableText>(firstFocusInput).controller.text,
        '1234',
      );
      await tester.sendKeyEvent(LogicalKeyboardKey.tab);
      await _pumpApplicationFrame(tester);
      expect(find.text('Focused: Second input'), findsOneWidget);
      await tap(find.text('Focus first'));
      expect(find.text('Focused: First input'), findsOneWidget);
      await tap(find.text('Focus second'));
      expect(find.text('Focused: Second input'), findsOneWidget);
      await tap(find.text('Use custom formatter'));
      await tester.enterText(firstFocusInput, 'hello');
      await _pumpApplicationFrame(tester);
      await tester.enterText(firstFocusInput, 'hello!');
      await _pumpApplicationFrame(tester);
      expect(
        tester.widget<EditableText>(firstFocusInput).controller.text,
        'hello',
      );
      await tap(find.text('Replace focus node'));
      await tap(find.text('Focus first'));
      expect(find.text('Focused: First input'), findsOneWidget);
      Navigator.of(tester.element(firstFocusInput)).pop();
      await _pumpApplicationFrame(tester);
      await tap(find.byKey(const ValueKey('styles-demo')));
      final styledInput = find.descendant(
        of: find.byKey(const ValueKey('styled-input')).first,
        matching: find.byType(EditableText),
      );
      await tester.enterText(styledInput, '中文🌱');
      await _pumpApplicationFrame(tester);
      final styledController = tester
          .widget<EditableText>(styledInput)
          .controller;
      styledController.selection = const TextSelection(
        baseOffset: 4,
        extentOffset: 1,
      );
      await tap(find.text('Increment styled count'));
      await tap(find.byKey(const ValueKey('host-brightness')));
      expect(find.text('Host theme: dark'), findsOneWidget);
      expect(find.text('Local theme: dark'), findsOneWidget);
      await tap(find.byKey(const ValueKey('host-seed')));
      await tap(find.text('Toggle local theme'));
      await tap(find.text('Toggle generated button style'));
      expect(find.text('Local theme: light'), findsOneWidget);
      expect(styledController.text, '中文🌱');
      expect(
        styledController.selection,
        const TextSelection(baseOffset: 4, extentOffset: 1),
      );
      await tap(find.text('Open style detail'));
      await tap(find.text('Return to styles'));
      expect(find.text('Styled count: 1'), findsOneWidget);
      expect(
        tester.widget<EditableText>(styledInput).controller,
        same(styledController),
      );
      await tap(find.text('Clear input and error'));
      await tap(find.text('Show input error'));
      expect(find.text('Enter a name'), findsOneWidget);
      await tap(find.text('Clear input and error'));
      expect(find.text('Enter a name'), findsNothing);
      Navigator.of(tester.element(styledInput)).pop();
      await _pumpApplicationFrame(tester);
      await tap(find.byKey(const ValueKey('styles-demo')));
      expect(find.text('Styled count: 0'), findsOneWidget);
      expect(tester.widget<EditableText>(styledInput).controller.text, '');
      Navigator.of(tester.element(styledInput)).pop();
      await _pumpApplicationFrame(tester);
      tester.testTextInput.unregister();
      await tap(find.byKey(const ValueKey('lazy-list-demo')));
      expect(find.text('Items: 10000'), findsOneWidget);
      expect(find.text('Refreshes: 0'), findsOneWidget);
      await tester.drag(find.byType(ListView), const Offset(0, 320));
      await _pumpUntilFound(tester, find.text('Refreshes: 1'));
      expect(find.text('Refreshes: 1'), findsOneWidget);
      await tap(find.text('Item 0: 0'));
      await tap(find.text('Swap first two'));
      expect(find.text('Item 0: 1'), findsOneWidget);
      await tap(find.text('Add first'));
      expect(find.text('Items: 10001'), findsOneWidget);
      await tap(find.text('Remove first'));
      await tester.drag(find.byType(ListView), const Offset(0, -500));
      await _pumpApplicationFrame(tester);
      expect(find.text('Item 0: 1'), findsNothing);
      await tap(find.text('Back to top'));
      expect(find.text('Item 0: 1'), findsOneWidget);
      Navigator.of(tester.element(find.byType(ListView))).pop();
      await _pumpApplicationFrame(tester);
      await tap(find.byKey(const ValueKey('lazy-list-demo')));
      expect(find.text('Item 0: 0'), findsOneWidget);
      Navigator.of(tester.element(find.byType(ListView))).pop();
      await _pumpApplicationFrame(tester);
      await tap(find.byKey(const ValueKey('layout-demo')));
      final layoutController = tester
          .widget<EditableText>(find.byType(EditableText))
          .controller;
      await tester.enterText(find.byType(EditableText), 'Item 1');
      await _pumpApplicationFrame(tester);
      expect(find.text('Matches: 1111'), findsOneWidget);
      await tap(find.text('Page count: 0'));
      await tap(find.text('Item 1: 0'));
      await tap(find.byKey(const ValueKey('layout-size')));
      await tap(find.byKey(const ValueKey('layout-direction')));
      await tap(find.byKey(const ValueKey('layout-theme')));
      await tap(find.text('Toggle clipping'));
      expect(
        Theme.of(tester.element(find.byType(EditableText))).brightness,
        Brightness.dark,
      );
      expect(find.byType(ClipPath), findsWidgets);
      await tap(find.text('Change flex'));
      await tap(find.text('Move button'));
      await tap(find.text('Change alignment'));
      expect(
        tester.widget<EditableText>(find.byType(EditableText)).controller,
        same(layoutController),
      );
      expect(layoutController.text, 'Item 1');
      expect(find.text('Page count: 1'), findsOneWidget);
      final layoutScroll = tester
          .widget<ListView>(find.byType(ListView))
          .controller!;
      await tester.drag(find.byType(ListView), const Offset(0, -400));
      await _pumpApplicationFrame(tester);
      expect(layoutScroll.offset, greaterThan(0));
      await tap(find.text('Back to top'));
      expect(layoutScroll.offset, 0);
      expect(find.text('Item 1: 1'), findsOneWidget);
      Navigator.of(tester.element(find.byType(ListView))).pop();
      await _pumpApplicationFrame(tester);
      await tap(find.byKey(const ValueKey('layout-demo')));
      expect(find.text('Matches: 10000'), findsOneWidget);
      expect(find.text('Page count: 0'), findsOneWidget);
      Navigator.of(tester.element(find.byType(ListView))).pop();
      await _pumpApplicationFrame(tester);
      await tap(find.byKey(const ValueKey('shared-navigation')));
      expect(find.text('Shared host navigation'), findsOneWidget);
      await tap(find.text('Open JS detail'));
      await tap(find.text('Increment page'));
      expect(find.text('Page count: 1'), findsOneWidget);
      await tap(find.text('Return selection'));
      expect(find.text('Visits: 1'), findsOneWidget);
      expect(
        find.text('Selection: {"count":1,"selected":["alpha","beta"]}'),
        findsOneWidget,
      );
      await tap(find.text('Choose in Dart'));
      await tap(find.text('Accept Dart selection'));
      expect(
        find.text('Selection: {"selected":["alpha"],"native":true}'),
        findsOneWidget,
      );
      await tap(find.text('Replace JS entry'));
      await tap(find.text('Increment page'));
      expect(find.text('Page count: 1'), findsOneWidget);
      await tap(find.text('Return selection'));
      expect(find.byKey(const ValueKey('shared-navigation')), findsOneWidget);
      await tap(find.byKey(const ValueKey('shared-navigation')));
      expect(find.text('Visits: 1'), findsOneWidget);
      await tap(find.text('Back to Dart home'));
      await tap(find.byKey(const ValueKey('nested-navigation')));
      expect(find.text('Mini-app navigation'), findsOneWidget);
      await tap(find.text('Open JS detail'));
      await tap(find.text('Return selection'));
      expect(find.text('Visits: 1'), findsOneWidget);
      ModalRoute.of(tester.element(find.byType(MiniAppPage)))!
          .changedExternalState();
      await _pumpApplicationFrame(tester);
      expect(find.text('Visits: 1'), findsOneWidget);
      await tap(find.text('Exit mini-app'));
      await tap(find.byKey(const ValueKey('nested-navigation')));
      expect(find.text('Visits: 0'), findsOneWidget);
      await tap(find.text('Exit mini-app'));
      await tap(find.byKey(const ValueKey('pages-demo')));
      expect(find.text('Order 42 · all'), findsOneWidget);
      await tap(find.text('Increment order'));
      await tap(find.text('Update filter'));
      expect(find.text('Order 42 · recent'), findsOneWidget);
      expect(find.text('Order count: 1'), findsOneWidget);
      await tap(find.text('Open second instance'));
      expect(find.text('Order count: 0'), findsOneWidget);
      await tap(find.text('Return order').last);
      expect(find.text('Order count: 1'), findsOneWidget);
      await tap(find.text('Replace page key'));
      expect(find.text('Order count: 0'), findsOneWidget);
      await tap(find.text('Show JS Pages'));
      expect(find.text('JS declarative Pages'), findsOneWidget);
      await tap(find.text('Add JS Page'));
      await tap(find.text('Increment order').last);
      await tap(find.text('Update JS Page'));
      expect(find.text('Order 1 · recent'), findsOneWidget);
      expect(find.text('Order count: 1'), findsOneWidget);
      await tap(find.text('Return order').last);
      expect(find.text('Order 0 · all'), findsOneWidget);
      expect(
        find.text('Page result: {"orderId":"1","count":1}'),
        findsOneWidget,
      );
      await tap(find.text('Add JS Page'));
      await tap(find.text('Push order overlay').last);
      expect(find.text('Close order overlay'), findsOneWidget);
      await tap(find.text('Remove JS Page'));
      expect(find.text('Close order overlay'), findsNothing);
      await tap(find.text('Exit Pages demo'));
      await tap(find.byKey(const ValueKey('components-demo')));
      final componentController = tester
          .widget<TextField>(find.byType(TextField))
          .controller!;
      await tester.enterText(find.byType(TextField), 'State input 🙂');
      await _pumpApplicationFrame(tester);
      expect(find.text('Editing length: 14'), findsOneWidget);
      expect(find.text('Static editing child'), findsOneWidget);
      expect(find.text('Editor focused: true'), findsOneWidget);
      await tap(find.text('Count first'));
      expect(find.text('first: 1'), findsOneWidget);
      await tap(find.text('Signal first'));
      expect(find.text('Ancestor: ComponentsPage'), findsOneWidget);
      await tap(find.text('Measure component'));
      expect(find.text('Component size: not measured'), findsNothing);
      expect(find.textContaining('Component size:'), findsOneWidget);
      await tap(find.text('Switch component type'));
      expect(find.text('first: 0'), findsOneWidget);
      await tap(find.text('Switch component type'));
      await tap(find.text('Count first'));
      expect(find.text('first: 1'), findsOneWidget);
      await tap(find.text('Update initial prop'));
      await tap(find.byKey(const ValueKey('components-theme')));
      expect(
        tester.widget<TextField>(find.byType(TextField)).controller,
        same(componentController),
      );
      expect(componentController.text, 'State input 🙂');
      await tap(find.text('Push component page'));
      await tap(find.text('Count route'));
      expect(find.text('route: 1'), findsOneWidget);
      await tap(find.text('Return to components'));
      expect(find.text('first: 1'), findsOneWidget);
      await tap(find.byTooltip('Back'));
      await tap(find.byKey(const ValueKey('scaffold-demo')));
      final scaffoldController = tester
          .widget<TextField>(find.byType(TextField))
          .controller!;
      await tester.enterText(find.byType(TextField), 'Scaffold input 🙂');
      await tap(find.text('Open generated dialog'));
      expect(find.byType(AlertDialog), findsOneWidget);
      await tap(find.text('Update dialog value'));
      expect(find.text('Dialog count: 1'), findsOneWidget);
      await tap(find.text('Accept generated dialog'));
      expect(find.text('Dialog result: {"count":1}'), findsOneWidget);
      expect(scaffoldController.text, 'Scaffold input 🙂');
      await tap(find.text('Page count'));
      await tap(find.text('Change title'));
      expect(find.text('Updated JS title'), findsOneWidget);
      await tap(find.text('Change bar height'));
      expect(tester.widget<AppBar>(find.byType(AppBar)).toolbarHeight, 96);
      await tap(find.text('Toggle bar bottom'));
      expect(
        tester.widget<AppBar>(find.byType(AppBar)).preferredSize.height,
        120,
      );
      await tap(find.byKey(const ValueKey('scaffold-theme')));
      await tap(find.text('Toggle custom bar'));
      expect(find.text('Custom JS toolbar'), findsOneWidget);
      expect(scaffoldController.text, 'Scaffold input 🙂');
      expect(
        tester.widget<TextField>(find.byType(TextField)).controller,
        same(scaffoldController),
      );
      expect(find.text('Page count: 1'), findsOneWidget);
      await tap(find.text('Back to host'));
      await tap(find.byKey(const ValueKey('scaffold-demo')));
      expect(find.text('Page count: 0'), findsOneWidget);
      await tap(find.byTooltip('Back'));
      binding.reportData = {
        'scenario': 'embedded-navigation-pages-router',
        'stylesAndThemes': true,
        'lazyList': true,
        'generatedLayout': true,
        'generatedDecoration': true,
        'flutterState': true,
        'generatedListenableBuilders': true,
        'componentTypesAndMeasurements': true,
        'widgetInterfacesAndScaffold': true,
        'generatedTopLevelDialog': true,
        'completed': true,
      };
    },
  );
  testWidgets('persistent namespaces work in the macOS application', (
    tester,
  ) async {
    // The desktop target verifies path_provider's real default-directory channel.
    await tester.runAsync(() => FlaxLocalStoragePlugin.initialize());
    await tester.runAsync(() => FlaxLocalStoragePlugin.shutdown());
    await storageScenario(tester);
    binding.reportData = {...?binding.reportData, 'localStorage': true};
  });
}

Future<void> _pumpUntilFound(WidgetTester tester, Finder finder) async {
  for (var i = 0; i < 500 && finder.evaluate().isEmpty; i++) {
    await tester.pump(const Duration(milliseconds: 10));
  }
  expect(finder, findsWidgets);
}

Future<void> _pumpApplicationFrame(WidgetTester tester) async {
  // A real app may keep scheduling cursor or plugin frames indefinitely.
  await tester.pump();
  await tester.pump(const Duration(milliseconds: 500));
  await tester.pump();
}
