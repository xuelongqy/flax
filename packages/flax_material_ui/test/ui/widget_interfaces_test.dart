import 'package:flax_test/flax_test.dart';
import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/widget_interfaces_bindings.dart';
import '../fixtures/widget_interfaces.dart';
import '../support/harness.dart' show collectWidgetConfigurations, host;
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
        await collectWidgetConfigurations(t);
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
          await collectWidgetConfigurations(t);
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
        await flaxTestUnmount(t);
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
  testWidgets(
    'mounted callback returns preserve native Widget and interface identity',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('callback-fixture'));
        await t.pumpAndSettle();
        h.execute('widgetCallbacks.mode.value="native"');
        await t.pumpAndSettle();
        expect(InterfaceBuilder.last, same(ExtentProbe.native));
        h.execute('widgetCallbacks.kind.value="base"');
        await t.pumpAndSettle();
        expect(WidgetResultBuilder.last, same(ExtentProbe.plain));
        expect(h.errors, isEmpty);
      } finally {
        InterfaceBuilder.last = null;
        WidgetResultBuilder.last = null;
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'interface callback lists and nested callbacks retain local signals',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('callback-fixture'));
        await t.pumpAndSettle();
        final first = InterfaceBuilder.last;
        expect(first, isA<LabelledContract>());
        h.execute('widgetCallbacks.label.value="Updated callback child"');
        await t.pumpAndSettle();
        expect(InterfaceBuilder.last, same(first));
        expect(find.text('Updated callback child'), findsOneWidget);
        h.execute('widgetCallbacks.kind.value="list"');
        await t.pumpAndSettle();
        expect(find.text('Updated callback child'), findsNWidgets(2));
        h.execute('widgetCallbacks.kind.value="nested"');
        await t.pumpAndSettle();
        expect(find.text('Updated callback child'), findsOneWidget);
        expect(h.errors, isEmpty);
      } finally {
        InterfaceBuilder.last = null;
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'narrow callback failures propagate the original error and recover',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('callback-fixture'));
        await t.pumpAndSettle();
        for (final kind in ['interface', 'list', 'nested']) {
          h.execute(
            'widgetCallbacks.kind.value="$kind";widgetCallbacks.mode.value="invalid"',
          );
          await t.pumpAndSettle();
          expect(t.takeException(), isA<ArgumentError>());
          expect(
            h.errors.last.toString(),
            contains('Widget does not implement'),
          );
          h.execute('widgetCallbacks.mode.value="native"');
          await t.pumpAndSettle();
          expect(t.takeException(), isNull);
          expect(
            find.text('Native tile'),
            kind == 'list' ? findsNWidgets(2) : findsOneWidget,
          );
        }
        h.execute(
          'widgetCallbacks.kind.value="interface";widgetCallbacks.mode.value="throw"',
        );
        await t.pumpAndSettle();
        expect(
          t.takeException().toString(),
          contains('interface callback failure'),
        );
        expect(h.errors, hasLength(4));
        h.execute(
          'widgetCallbacks.kind.value="nullable";widgetCallbacks.mode.value="null"',
        );
        await t.pumpAndSettle();
        expect(t.takeException(), isNull);
        expect(find.text('Native tile'), findsNothing);
      } finally {
        InterfaceBuilder.last = null;
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'mounted asynchronous interface callbacks preserve typed results and errors',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('callback-fixture'));
        await t.pumpAndSettle();
        h.execute(
          'widgetCallbacks.kind.value="async";widgetCallbacks.mode.value="native"',
        );
        await t.pumpAndSettle();
        expect(find.text('Native tile'), findsOneWidget);
        h.execute('widgetCallbacks.mode.value="throw"');
        await t.pumpAndSettle();
        expect(find.textContaining('Async error:'), findsOneWidget);
        h.execute('widgetCallbacks.mode.value="generated"');
        await t.pumpAndSettle();
        expect(find.text('Callback child'), findsOneWidget);
        expect(t.takeException(), isNull);
      } finally {
        InterfaceBuilder.last = null;
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'mounted FutureOr and Stream callbacks preserve interface results',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('callback-fixture'));
        await t.pumpAndSettle();
        for (final kind in ['future-or', 'future-or-async', 'stream']) {
          h.execute(
            'widgetCallbacks.kind.value="$kind";widgetCallbacks.mode.value="native"',
          );
          await t.pumpAndSettle();
          expect(find.text('Native tile'), findsOneWidget);
          h.execute('widgetCallbacks.mode.value="generated"');
          await t.pumpAndSettle();
          expect(find.text('Callback child'), findsOneWidget);
          h.execute('widgetCallbacks.label.value="Async typed child"');
          await t.pumpAndSettle();
          expect(find.text('Async typed child'), findsOneWidget);
          h.execute('widgetCallbacks.label.value="Callback child"');
          await t.pumpAndSettle();
        }
        expect(h.errors, isEmpty);
        expect(t.takeException(), isNull);
      } finally {
        InterfaceBuilder.last = null;
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'Dart can retain an unmounted interface configuration for later mounting',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('callback-fixture'));
        await t.pumpAndSettle();
        h.execute('widgetCallbacks.discard.value=true');
        await t.pumpAndSettle();
        final saved = InterfaceBuilder.last!;
        InterfaceBuilder.last = null;
        expect(find.text('Callback child'), findsNothing);
        await collectWidgetConfigurations(t);
        await t.pumpWidget(MaterialApp(home: saved));
        await t.pumpAndSettle();
        expect(find.text('Callback child'), findsOneWidget);
        h.execute('widgetCallbacks.label.value="Mounted later"');
        await t.pumpAndSettle();
        expect(find.text('Mounted later'), findsOneWidget);
        expect(h.errors, isEmpty);
      } finally {
        InterfaceBuilder.last = null;
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'discarded interface configurations are collected without extra subscriptions',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('callback-fixture'));
        await t.pumpAndSettle();
        h.execute('widgetCallbacks.discard.value=true');
        await t.pumpAndSettle();
        InterfaceBuilder.last = null;
        await collectWidgetConfigurations(t);
        final baseline = h.runtime.handles;
        final subscriptions = h.runtime.activeSubscriptions;
        for (var i = 0; i < 30; i++) {
          h.execute('widgetCallbacks.revision.value++');
          await t.pumpAndSettle();
          expect(h.runtime.activeSubscriptions, subscriptions);
        }
        final beforeGc = h.runtime.handles;
        InterfaceBuilder.last = null;
        await collectWidgetConfigurations(t);
        expect(h.runtime.handles, baseline);
        expect(h.errors, isEmpty);
        // ignore: avoid_print
        print(
          'Widget configurations: $baseline -> $beforeGc -> ${h.runtime.handles} handles after real GC; $subscriptions subscriptions.',
        );
      } finally {
        InterfaceBuilder.last = null;
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'fixed native configurations keep generated children alive across reuse',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('callback-fixture'));
        await t.pumpAndSettle();
        final saved =
            (InterfaceBuilder.last as FlaxWidgetHost).configuration
                as ExtentTile;
        InterfaceBuilder.last = null;
        await flaxTestUnmount(t);
        await t.pumpAndSettle();
        await collectWidgetConfigurations(t);
        await t.pumpWidget(MaterialApp(home: saved));
        await t.pumpAndSettle();
        expect(find.text('Callback child'), findsOneWidget);
        h.execute('widgetCallbacks.label.value="Native configuration reused"');
        await t.pumpAndSettle();
        expect(find.text('Native configuration reused'), findsOneWidget);
        expect(h.errors, isEmpty);
      } finally {
        InterfaceBuilder.last = null;
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'fixed interface callbacks survive native configuration reuse and session close',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('callback-fixture'));
        await t.pumpAndSettle();
        h.execute('widgetCallbacks.mode.value="callback"');
        await t.pumpAndSettle();
        final saved =
            (InterfaceBuilder.last as FlaxWidgetHost).configuration
                as CallbackTile;
        await t.tap(find.text('Callback tile'));
        expect(h.number('widgetCallbacks.taps'), 2);
        InterfaceBuilder.last = null;
        await flaxTestUnmount(t);
        await t.pumpAndSettle();
        await collectWidgetConfigurations(t);
        await t.pumpWidget(MaterialApp(home: saved));
        await t.pumpAndSettle();
        await t.tap(find.text('Callback tile'));
        expect(h.number('widgetCallbacks.taps'), 4);
        await h.finish(t);
        final calls = Map.of(h.runtime.jsCalls);
        saved.callback();
        for (final callback in saved.callbacks) {
          callback();
        }
        expect(h.runtime.jsCalls, calls);
        expect(h.runtime.handlesAtDispose, 0);
        expect(h.runtime.activeSubscriptions, 0);
      } finally {
        InterfaceBuilder.last = null;
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'typed Route builders use native Context and retire at navigation completion',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(
          MaterialApp(
            navigatorObservers: [FlaxNavigatorObserver()],
            home: h.page('callback-fixture'),
          ),
        );
        await t.pumpAndSettle();
        for (final open in ['open', 'openPanel']) {
          h.execute('void widgetCallbacks.$open()');
          await t.pumpAndSettle();
          expect(find.text('Callback child'), findsOneWidget);
          h.execute('widgetCallbacks.label.value="Route update"');
          await t.pumpAndSettle();
          expect(find.text('Route update'), findsOneWidget);
          h.execute('widgetCallbacks.pop()');
          await t.pumpAndSettle();
          h.execute('widgetCallbacks.label.value="Callback child"');
          await t.pumpAndSettle();
        }
        expect(h.errors, isEmpty);
      } finally {
        InterfaceBuilder.last = null;
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'typed Page callbacks retain updated configurations until their Routes retire',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('callback-pages'));
        await t.pumpAndSettle();
        expect(find.text('Native tile'), findsOneWidget);
        h.execute('widgetCallbacks.setPage(1)');
        await t.pumpAndSettle();
        expect(find.text('Page 1'), findsOneWidget);
        final route = ModalRoute.of(t.element(find.text('Page 1')));
        h.execute('widgetCallbacks.setPage(2)');
        await t.pumpAndSettle();
        expect(find.text('Page 2'), findsOneWidget);
        expect(ModalRoute.of(t.element(find.text('Page 2'))), same(route));
        h.execute('widgetCallbacks.clearPages()');
        await t.pumpAndSettle();
        expect(find.text('Page 2'), findsNothing);
        expect(find.text('Native tile'), findsOneWidget);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );
}
