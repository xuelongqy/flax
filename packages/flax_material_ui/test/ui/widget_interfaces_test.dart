import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/widget_interfaces_bindings.dart';
import '../fixtures/widget_interfaces.dart';
import '../support/harness.dart' show host;
import '../support/owned_harness.dart';

OwnedHarness harness() => OwnedHarness(
  fixture: 'widget_interfaces',
  extra: [widget_interfacesBindings],
);

Widget comparison(
  OwnedHarness h, {
  double? height,
  double? bottom,
  double themeHeight = 80,
}) => MaterialApp(
  theme: ThemeData(appBarTheme: AppBarThemeData(toolbarHeight: themeHeight)),
  home: MediaQuery(
    data: const MediaQueryData(padding: EdgeInsets.only(top: 20)),
    child: Row(
      children: [
        Expanded(
          child: FlaxView.page(session: h.session, name: 'scaffold-test'),
        ),
        Expanded(
          child: Scaffold(
            key: const ValueKey('native-scaffold'),
            appBar: AppBar(
              toolbarHeight: height,
              title: const Text('Native'),
              bottom: bottom == null
                  ? null
                  : PreferredSize(
                      preferredSize: Size.fromHeight(bottom),
                      child: const Text('Bottom'),
                    ),
            ),
            body: const SizedBox.expand(key: ValueKey('native-body')),
          ),
        ),
      ],
    ),
  ),
);

void main() {
  testWidgets(
    'native didUpdateWidget can read an old unmounted interface configuration',
    (t) async {
      final h = harness();
      try {
        MetadataFrame.previous = null;
        MetadataFrame.failure = null;
        await t.pumpWidget(h.app('metadata-only'));
        await t.pumpAndSettle();
        expect(find.text('Never mounted'), findsNothing);
        expect(find.text('Metadata 24.0'), findsOneWidget);
        h.execute('interfaces.extent.value = 40');
        await t.pump();
        expect(t.takeException(), isNull);
        expect(MetadataFrame.failure, isNull);
        expect(MetadataFrame.previous, 24);
        expect(find.text('Metadata 40.0'), findsOneWidget);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );
  testWidgets(
    'generated interface getters read the cached real configuration without bridge work',
    (t) async {
      final h = harness();
      try {
        ExtentTile.constructions = 0;
        ExtentTile.reads = 0;
        await t.pumpWidget(h.app('interface-fixture'));
        await t.pumpAndSettle();
        expect(h.errors, isEmpty);
        final widgets = t
            .widgetList(
              find.byWidgetPredicate(
                (w) => w is FlaxWidgetHost && w is LabelledContract,
              ),
            )
            .toList();
        expect(widgets, hasLength(3));
        final constructions = ExtentTile.constructions;
        final calls = Map<String, int>.of(h.runtime.hostCalls);
        final handles = h.runtime.handles;
        final reads = ExtentTile.reads;
        for (var i = 0; i < 100; i++) {
          expect((widgets.first as LabelledContract).extent, 24);
          expect((widgets.first as LabelledContract).label, 'Tile');
        }
        expect(ExtentTile.reads, reads + 100);
        expect(ExtentTile.constructions, constructions);
        expect(h.runtime.hostCalls, calls);
        expect(h.runtime.handles, handles);
        final duplicates = t.elementList(find.text('Tile child')).toList();
        expect(duplicates, hasLength(2));
        expect(duplicates[0], isNot(same(duplicates[1])));
        h.execute(
          "interfaces.tileLabel.value = 'Changed'; interfaces.extent.value = 40",
        );
        await t.pumpAndSettle();
        expect(find.text('Changed'), findsNWidgets(2));
        for (final source in ['native', 'opaque']) {
          h.execute("interfaces.itemMode.value = '$source'");
          await t.pumpAndSettle();
          expect(find.text('Native tile'), findsOneWidget);
        }
        expect(h.errors, isEmpty);
        // ignore: avoid_print
        print(
          'Interface reads: 100 reads, 0 bridge calls, 0 additional constructions; $handles handles.',
        );
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'Scaffold reads native preferred sizes and preserves private theme defaults',
    (t) async {
      final h = harness();
      try {
        for (final values in [
          (null, null, 80.0),
          (96.0, null, 80.0),
          (96.0, 24.0, 80.0),
          (null, 24.0, 72.0),
          (null, null, 72.0),
        ]) {
          if (h.runtime.hostCalls.isNotEmpty) {
            h.execute(
              'interfaces.height.value = ${values.$1}; interfaces.bottomHeight.value = ${values.$2}',
            );
          }
          await t.pumpWidget(
            comparison(
              h,
              height: values.$1,
              bottom: values.$2,
              themeHeight: values.$3,
            ),
          );
          await t.pumpAndSettle();
          expect(h.errors, isEmpty);
          final actual = t.getRect(host('body'));
          final native = t.getRect(find.byKey(const ValueKey('native-body')));
          expect(actual.top, native.top);
          expect(actual.height, native.height);
          final scaffold = t.widget<Scaffold>(
            find.descendant(
              of: host('scaffold'),
              matching: find.byType(Scaffold),
            ),
          );
          final preferred = scaffold.appBar!.preferredSize;
          final direct = AppBar(
            toolbarHeight: values.$1,
            bottom: values.$2 == null
                ? null
                : PreferredSize(
                    preferredSize: Size.fromHeight(values.$2!),
                    child: const Text('Bottom'),
                  ),
          ).preferredSize;
          expect(preferred.runtimeType, direct.runtimeType);
          expect(preferred, direct);
        }
        expect(h.number('interfaces.factories'), 1);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'title signals stay local and fixed configuration replacement preserves state',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('scaffold-test'));
        await t.pumpAndSettle();
        final field = t.widget<TextField>(find.byType(TextField));
        final editing = field.controller!;
        final focus = field.focusNode!;
        await t.enterText(find.byType(TextField), 'Unchanged state');
        editing.selection = const TextSelection(baseOffset: 1, extentOffset: 5);
        await t.tap(find.text('Count 0'));
        focus.requestFocus();
        await t.pump();
        final body = t.element(host('body'));
        final static = t.element(host('static-sibling'));
        final appbarState = t.state(find.byType(AppBar));
        final rebuilt = <Key?>[];
        debugOnRebuildDirtyWidget = (e, _) {
          if (e.widget is FlaxWidgetHost) rebuilt.add(e.widget.key);
        };
        addTearDown(() => debugOnRebuildDirtyWidget = null);
        h.execute("interfaces.title.value = 'Updated title'");
        await t.pump();
        expect(rebuilt, [const ValueKey('bar-title')]);
        rebuilt.clear();
        h.execute('interfaces.height.value = 64; interfaces.height.value = 90');
        await t.pump();
        expect(
          rebuilt.where((k) => k == const ValueKey('scaffold')),
          hasLength(1),
        );
        expect(rebuilt, isNot(contains(const ValueKey('body'))));
        expect(rebuilt, isNot(contains(const ValueKey('static-sibling'))));
        expect(t.state(find.byType(AppBar)), same(appbarState));
        expect(t.element(host('body')), same(body));
        expect(t.element(host('static-sibling')), same(static));
        expect(
          t.widget<TextField>(find.byType(TextField)).controller,
          same(editing),
        );
        expect(editing.text, 'Unchanged state');
        expect(
          editing.selection,
          const TextSelection(baseOffset: 1, extentOffset: 5),
        );
        expect(focus.hasFocus, isTrue);
        expect(find.text('Count 1'), findsOneWidget);
        expect(h.number('interfaces.factories'), 1);
        debugOnRebuildDirtyWidget = null;
        h.execute("interfaces.mode.value = 'custom'");
        await t.pump();
        await t.tap(find.text('Toolbar 0'));
        await t.pump();
        h.execute('interfaces.height.value = 100');
        await t.pump();
        expect(find.text('Toolbar 1'), findsOneWidget);
        h.execute("interfaces.key.value = 'replacement'");
        await t.pump();
        expect(find.text('Toolbar 0'), findsOneWidget);
        expect(find.text('Count 1'), findsOneWidget);
        expect(h.errors, isEmpty);
      } finally {
        debugOnRebuildDirtyWidget = null;
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'invalid interface updates preserve accepted configuration and recover',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('scaffold-test'));
        await t.pumpAndSettle();
        final appbar = t.widget<AppBar>(find.byType(AppBar));
        for (final mode in ['invalid', 'native', 'builder', 'fixed-bind']) {
          h.execute("interfaces.mode.value = '$mode'");
          await t.pumpAndSettle();
          expect(t.widget<AppBar>(find.byType(AppBar)), same(appbar));
          expect(h.errors, hasLength(1));
          h.errors.clear();
        }
        for (final code in [
          'interfaces.AppBar({toolbarHeight: interfaces.height.bind})',
          'interfaces.PreferredSize({preferredSize: interfaces.Size.fromHeight(40), child: interfaces.title.bind})',
        ]) {
          expect(() => h.execute(code), throwsA(isA<FlaxJsException>()));
        }
        h.execute(
          "interfaces.mode.value = 'appbar'; interfaces.height.value = 72",
        );
        await t.pumpAndSettle();
        expect(t.widget<AppBar>(find.byType(AppBar)).toolbarHeight, 72);
        h.execute("interfaces.mode.value = 'native-header'");
        await t.pumpAndSettle();
        final scaffold = t.widget<Scaffold>(
          find.descendant(
            of: host('scaffold'),
            matching: find.byType(Scaffold),
          ),
        );
        expect(scaffold.appBar, same(ExtentProbe.header));
        expect(find.byWidget(ExtentProbe.header), findsOneWidget);
        h.execute("interfaces.mode.value = 'none'");
        await t.pumpAndSettle();
        expect(find.byType(AppBar), findsNothing);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'repeated interface replacements release subscriptions and closing waits for the mounted page',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('scaffold-test'));
        await t.pumpAndSettle();
        var baseline = h.runtime.handles;
        final initialLabels = h.runtime.handleLabels.toSet();
        final subscriptions = h.runtime.activeSubscriptions;
        for (var i = 0; i < 30; i++) {
          h.execute(
            "interfaces.mode.value = 'custom'; interfaces.height.value = ${70 + i}",
          );
          await t.pump();
          h.execute(
            "interfaces.mode.value = 'appbar'; interfaces.height.value = 56",
          );
          await t.pump();
          expect(h.runtime.activeSubscriptions, subscriptions);
          if (i == 0) {
            // First use of a custom State loads its shared lifecycle helpers.
            // ignore: avoid_print
            print(
              'First custom toolbar helpers: ${h.runtime.handleLabels.toSet().difference(initialLabels)}',
            );
            baseline = h.runtime.handles;
          }
          expect(h.runtime.handles, lessThanOrEqualTo(baseline));
        }
        var closed = false;
        final closing = h.session.close().then((_) => closed = true);
        await t.pump();
        expect(closed, isFalse);
        h.execute('interfaces.height.value = 80');
        await t.pump();
        expect(t.widget<AppBar>(find.byType(AppBar)).toolbarHeight, 80);
        await t.pumpWidget(const SizedBox());
        await t.pumpAndSettle();
        await closing;
        expect(closed, isTrue);
        expect(h.runtime.handlesAtDispose, 0);
        expect(h.errors, isEmpty);
        // ignore: avoid_print
        print(
          'Interface replacements: 30 round trips; $baseline handle baseline, $subscriptions subscriptions; zero at close.',
        );
      } finally {
        await h.finish(t);
      }
    },
  );
}
