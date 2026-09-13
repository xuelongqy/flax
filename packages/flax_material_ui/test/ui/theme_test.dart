import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart' show host;
import '../support/owned_harness.dart';

Widget app(Widget view, ThemeData theme) => MaterialApp(
  theme: theme,
  themeAnimationDuration: Duration.zero,
  home: Material(child: view),
);

ThemeData theme(
  Brightness brightness, {
  Color seed = const Color(0xff315cba),
}) => ThemeData(
  colorScheme: ColorScheme.fromSeed(seedColor: seed, brightness: brightness),
  textTheme: const TextTheme(
    titleLarge: TextStyle(
      fontSize: 22,
      fontFamily: 'Host font',
      wordSpacing: 3,
    ),
  ),
);

void main() {
  testWidgets(
    'host dependencies, derived themes and independent themes preserve editing identity',
    (t) async {
      final h = OwnedHarness(fixture: 'theme');
      final view = FlaxView.page(session: h.session, name: 'theme');
      var nativeBuilds = 0;
      final scene = Column(
        children: [
          Expanded(child: view),
          Theme(
            data: ThemeData(
              colorScheme: ColorScheme.fromSeed(
                seedColor: const Color(0xff793ac1),
                brightness: Brightness.dark,
              ),
            ),
            child: Builder(
              builder: (context) {
                nativeBuilds++;
                Theme.of(context);
                return const Text('Native theme control');
              },
            ),
          ),
        ],
      );
      await t.pumpWidget(app(scene, theme(Brightness.light)));
      await t.pumpAndSettle();
      expect(h.errors, isEmpty);
      expect(find.text('Host light'), findsOneWidget);
      expect(find.text('Derived light'), findsOneWidget);
      expect(find.text('Local dark'), findsOneWidget);
      final derived = t.widget<Text>(find.text('Derived light')).style!;
      expect(derived.fontSize, 30);
      expect(
        derived.fontFamily,
        'Host font',
      ); // Not exposed to JS; real copyWith retains it.
      expect(derived.wordSpacing, 3);
      final field = t.widget<TextField>(find.byType(TextField));
      final controller = field.controller!;
      final inputState = t.state(find.byType(EditableText));
      final localState = t.state(host('local-reader'));
      await t.enterText(find.byType(TextField), '中文🌱');
      controller.selection = const TextSelection(
        baseOffset: 4,
        extentOffset: 1,
      );
      h.execute('themes.count.value = 7');
      await t.pump();
      final localBuilds = h.number('themes.localBuilds');
      final nativeBefore = nativeBuilds;
      final hostBuilds = h.number('themes.hostBuilds');
      final oldLocalStyle = t.widget<Text>(find.text('Local dark')).style;
      await t.pumpWidget(app(scene, theme(Brightness.dark)));
      await t.pumpAndSettle();
      expect(find.text('Host dark'), findsOneWidget);
      expect(find.text('Derived dark'), findsOneWidget);
      expect(find.text('Local dark'), findsOneWidget);
      expect(
        t.widget<Text>(find.text('Local dark')).style,
        same(oldLocalStyle),
      );
      expect(h.number('themes.hostBuilds'), hostBuilds + 1);
      // Theme.of also depends on inherited Cupertino data, including in pure Dart.
      expect(
        h.number('themes.localBuilds') - localBuilds,
        nativeBuilds - nativeBefore,
      );
      expect(h.number('themes.factories'), 1);
      expect(h.created, hasLength(2));
      expect(controller.text, '中文🌱');
      expect(
        controller.selection,
        const TextSelection(baseOffset: 4, extentOffset: 1),
      );
      expect(t.state(find.byType(EditableText)), same(inputState));
      expect(field.focusNode!.hasFocus, isTrue);
      expect(find.text('Count 7'), findsOneWidget);
      h.execute(
        'themes.local.value = themes.ThemeData({colorScheme: themes.ColorScheme.fromSeed({seedColor: themes.Color(0xff218a42)})})',
      );
      await t.pumpAndSettle();
      expect(find.text('Local light'), findsOneWidget);
      expect(find.text('Host dark'), findsOneWidget);
      expect(h.number('themes.hostBuilds'), hostBuilds + 1);
      expect(t.state(host('local-reader')), same(localState));
      expect(
        t.widget<TextField>(find.byType(TextField)).controller,
        same(controller),
      );
      expect(
        controller.selection,
        const TextSelection(baseOffset: 4, extentOffset: 1),
      );
      await h.finish(t);
      expect(h.actualDisposals, 2);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'generated theme factories and copyWith preserve Dart defaults and canonical enums',
    (t) async {
      final h = OwnedHarness(fixture: 'theme');
      await t.pumpWidget(h.app('theme'));
      await t.pumpAndSettle();
      h.execute('''
      var seed = themes.Color(0xff315cba);
      var scheme = themes.ColorScheme.fromSeed({seedColor: seed});
      var dark = themes.ColorScheme.fromSeed({seedColor: seed, brightness: themes.Brightness.dark});
      var copied = dark.copyWith({primary: seed, surface: null});
      var text = themes.TextStyle({fontSize: 17});
      var fonts = themes.TextTheme({titleLarge: text});
      var data = themes.ThemeData({colorScheme: copied, textTheme: fonts});
      var replacement = data.copyWith({colorScheme: null, textTheme: data.textTheme.copyWith({titleLarge: text.copyWith({fontSize: 25})})});
      themes.local.value = replacement;
    ''');
      expect(
        h.boolean(
          'scheme.brightness === themes.Brightness.light && dark.brightness === themes.Brightness.dark',
        ),
        isTrue,
      );
      final expected = ColorScheme.fromSeed(seedColor: const Color(0xff315cba));
      expect(
        h.number('scheme.primary.toARGB32()'),
        expected.primary.toARGB32(),
      );
      expect(
        h.number('scheme.onSurface.toARGB32()'),
        expected.onSurface.toARGB32(),
      );
      expect(
        h.boolean('copied.primary === seed && copied.surface === dark.surface'),
        isTrue,
      );
      expect(
        h.boolean(
          'fonts.bodyMedium === null && fonts.copyWith({titleLarge: null}).titleLarge === text',
        ),
        isTrue,
      );
      expect(
        h.boolean(
          'replacement.colorScheme !== data.colorScheme && replacement.colorScheme.primary === data.colorScheme.primary && replacement.colorScheme.brightness === data.colorScheme.brightness && replacement.textTheme.titleLarge.fontSize === 25 && data.textTheme.titleLarge.fontSize === 17',
        ),
        isTrue,
      );
      expect(
        h.boolean(
          'Object.isFrozen(data) && Object.isFrozen(data.colorScheme) && Object.isFrozen(data.textTheme)',
        ),
        isTrue,
      );
      expect(
        h.boolean(
          'themes.ThemeData({colorSchemeSeed: seed, brightness: themes.Brightness.dark}).brightness === themes.Brightness.dark',
        ),
        isTrue,
      );
      expect(
        h.boolean('themes.ThemeData().brightness === themes.Brightness.light'),
        isTrue,
      );
      await t.pump();
      expect(t.widget<Text>(find.text('Local dark')).style!.fontSize, 25);
      await h.finish(t);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'theme invalidations remain local, errors retain data and repeated updates release resources',
    (t) async {
      final h = OwnedHarness(fixture: 'theme');
      final view = FlaxView.page(session: h.session, name: 'theme');
      final light = theme(Brightness.light);
      final dark = theme(Brightness.dark);
      await t.pumpWidget(app(view, light));
      await t.pumpAndSettle();
      final built = <Key?>[];
      debugOnRebuildDirtyWidget = (element, _) {
        if (element.widget is FlaxWidgetHost) built.add(element.widget.key);
      };
      addTearDown(() => debugOnRebuildDirtyWidget = null);
      final constructions = Map.of(h.constructions);
      final memberCalls = Map.of(h.runtime.hostCalls);
      h.execute(
        'themes.count.value = 1; themes.count.value = 2; themes.count.value = 3',
      );
      await t.pump();
      expect(built, [const ValueKey('theme-count')]);
      expect(h.constructions, constructions);
      expect(h.runtime.hostCalls['__flaxCall'], memberCalls['__flaxCall']);
      expect(h.number('themes.staticBuilds'), 1);
      debugPrint(
        'Theme signal cost: ${h.runtime.hostCalls.map((key, value) => MapEntry(key, value - (memberCalls[key] ?? 0)))}; no Dart value constructions.',
      );
      debugOnRebuildDirtyWidget = null;
      h.execute(
        'var validTheme = themes.local.value; themes.local.value = themes.Color(1)',
      );
      await t.pump();
      expect(find.text('Local dark'), findsOneWidget);
      expect(h.errors, hasLength(1));
      h.errors.clear();
      h.execute('themes.local.value = validTheme');
      await t.pump();
      for (final code in [
        'themes.ThemeData({colorScheme: themes.Color(0)})',
        'themes.ColorScheme.fromSeed({seedColor: null})',
        'themes.TextTheme({titleLarge: 4})',
        'themes.local.value.copyWith({textTheme: {}})',
      ]) {
        expect(
          () => h.execute(code),
          throwsA(isA<FlaxJsException>()),
          reason: code,
        );
      }
      await t.pumpWidget(app(view, dark));
      await t.pumpAndSettle();
      final handles = h.runtime.handles;
      final subscriptions = h.runtime.activeSubscriptions;
      final bridge = h.runtime.hostCalls['__flaxCall'] ?? 0;
      final localReads = h.number('themes.localBuilds');
      for (var i = 0; i < 20; i++) {
        await t.pumpWidget(app(view, i.isEven ? light : dark));
        await t.pumpAndSettle();
        expect(h.runtime.handles, handles);
        expect(h.runtime.activeSubscriptions, subscriptions);
      }
      expect(h.runtime.hostCalls['__flaxCall'], bridge + 60); // Host, derived and inherited Cupertino dependencies; matched against Dart above.
      expect(h.number('themes.factories'), 1);
      expect(h.number('themes.localBuilds'), localReads + 20);
      expect(h.number('themes.staticBuilds'), 1);
      debugPrint(
        'Theme cost: $handles handles, $subscriptions subscriptions; 20 host changes / 60 Theme.of calls; 3 signal writes / 1 Flax rebuild; constructions=${h.constructions}; methods=${h.calls}.',
      );
      int? remountedHandles;
      for (var i = 0; i < 5; i++) {
        await t.pumpWidget(app(const SizedBox(), light));
        await t.pumpAndSettle();
        expect(h.runtime.activeSubscriptions, 0);
        await t.pumpWidget(app(view, light));
        await t.pumpAndSettle();
        expect(h.runtime.activeSubscriptions, subscriptions);
        // First cleanup loads the cached releaseContext/releaseObject helpers.
        remountedHandles ??= h.runtime.handles;
        expect(h.runtime.handles, remountedHandles);
      }
      debugPrint(
        'Theme remount cost: $remountedHandles steady handles after 5 content replacements.',
      );
      await h.finish(t);
      expect(h.actualDisposals, 12);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets('styles from a foreign runtime fail before invoking Dart', (
    t,
  ) async {
    final a = OwnedHarness(fixture: 'theme');
    final b = OwnedHarness(fixture: 'theme');
    await t.pumpWidget(
      MaterialApp(
        home: Material(
          child: Row(
            children: [
              Expanded(
                child: FlaxView.page(session: a.session, name: 'theme'),
              ),
              Expanded(
                child: FlaxView.page(session: b.session, name: 'theme'),
              ),
            ],
          ),
        ),
      ),
    );
    final foreign = a.runtime.evaluate('themes.local.value') as FlaxJsObject;
    final accept =
        b.runtime.evaluate('(value) => value.copyWith()') as FlaxJsFunction;
    final calls = Map.of(b.runtime.hostCalls);
    try {
      expect(() => accept.call([foreign]), throwsArgumentError);
      expect(b.runtime.hostCalls, calls);
    } finally {
      foreign.release();
      accept.release();
      await a.finish(t);
      await b.finish(t);
    }
    expect(a.errors, isEmpty);
    expect(b.errors, isEmpty);
  });
}
