import 'dart:convert';
import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/engine.dart';
import '../support/harness.dart' show registry;

void main() {
  test(
    'prefixed assets preserve logical keys and native image variants',
    () async {
      for (final prefix in ['assets/flax', 'custom/business']) {
        final host = _BuiltinBundle(prefix);
        final bundle = FlaxPrefixedAssetBundle(bundle: host, prefix: prefix);
        expect(await bundle.loadString('assets/data.json'), '{"value":1}');
        final buffer = await bundle.loadBuffer('assets/data.json');
        expect(buffer.length, 11);
        buffer.dispose();
        expect(host.lastKey, '$prefix/assets/data.json');
        final manifest = await AssetManifest.loadFromAssetBundle(bundle);
        expect(manifest.listAssets(), ['assets/logo.png']);
        final variant = manifest.getAssetVariants('assets/logo.png')!.last;
        expect(variant.key, 'assets/2.0x/logo.png');
        expect(variant.targetDevicePixelRatio, 2.0);
        final web = jsonDecode(
          await bundle.loadString('AssetManifest.bin.json'),
        ) as String;
        expect(
          const StandardMessageCodec().decodeMessage(
            ByteData.sublistView(base64Decode(web)),
          ),
          contains('assets/logo.png'),
        );
        await expectLater(
          bundle.load('host-only.json'),
          throwsA(isA<FlutterError>()),
        );
        for (final key in ['../escape', '/absolute', r'a\b', 'file:a']) {
          await expectLater(bundle.load(key), throwsA(isA<FlutterError>()));
          await expectLater(
            bundle.loadBuffer(key),
            throwsA(isA<FlutterError>()),
          );
        }
      }
      expect(FlaxPrefixedAssetBundle().prefix, 'assets/flax');
      expect(
        FlaxPrefixedAssetBundle(prefix: 'assets/flax/').prefix,
        'assets/flax',
      );
      expect(
        () => FlaxPrefixedAssetBundle(prefix: '../bad'),
        throwsArgumentError,
      );
    },
  );

  test('business manifest validates identity, format and relative entry', () {
    final json = <String, Object?>{
      'formatVersion': 1,
      'id': 'main',
      'version': '1.2.3',
      'entry': 'app.js',
      'description': 'Example',
    };
    final manifest = FlaxManifest.fromJson(json);
    expect(manifest.id, 'main');
    expect(manifest.version, '1.2.3');
    expect(manifest.entry, 'app.js');
    expect(manifest.description, 'Example');
    for (final change in [
      {'formatVersion': 2},
      {'id': ''},
      {'version': null},
      {'entry': '../app.js'},
      {'entry': '/app.js'},
      {'entry': 'flax.json'},
      {'entry': 'assets/code.js'},
      {'entry': 'AssetManifest.bin'},
      {'entry': 'app.js\u0000suffix'},
      {'description': 1},
    ]) {
      expect(
        () => FlaxManifest.fromJson({...json, ...change}),
        throwsFormatException,
      );
    }
  });

  test(
    'directory assets load text, buffers and native variant metadata',
    () async {
      final root = await Directory.systemTemp.createTemp(
        'flax-directory-assets-',
      );
      try {
        await File('${root.path}/data.json')
            .writeAsString('{"message":"directory"}');
        final manifest = const StandardMessageCodec().encodeMessage({
          'images/logo.png': [
            {'asset': 'images/logo.png'},
            {'asset': 'images/2.0x/logo.png', 'dpr': 2.0},
          ],
        })!;
        await File('${root.path}/AssetManifest.bin').writeAsBytes(
          manifest.buffer.asUint8List(
            manifest.offsetInBytes,
            manifest.lengthInBytes,
          ),
        );
        final bundle = FlaxDirectoryAssetBundle(root);
        expect(await bundle.loadString('data.json'), '{"message":"directory"}');
        final buffer = await bundle.loadBuffer('data.json');
        expect(buffer.length, utf8.encode('{"message":"directory"}').length);
        buffer.dispose();
        final assets = await AssetManifest.loadFromAssetBundle(bundle);
        expect(
          assets
              .getAssetVariants('images/logo.png')!
              .last
              .targetDevicePixelRatio,
          2.0,
        );
        await expectLater(
          bundle.load('missing.json'),
          throwsA(isA<FlutterError>()),
        );
        for (final key in [
          '../escape',
          '/absolute',
          'a/../b',
          r'a\b',
          'file:a',
        ]) {
          await expectLater(bundle.load(key), throwsA(isA<FlutterError>()));
        }
        final outside = await Directory.systemTemp.createTemp(
          'flax-outside-assets-',
        );
        try {
          final secret = await File('${outside.path}/outside.txt')
              .writeAsString('outside');
          await Link('${root.path}/escape').create(secret.path);
          await expectLater(
            bundle.load('escape'),
            throwsA(isA<FlutterError>()),
          );
        } finally {
          await outside.delete(recursive: true);
        }
      } finally {
        await root.delete(recursive: true);
      }
    },
  );

  testWidgets(
    'session assets reach business code, native routes, dialogs and named pages',
    (t) async {
      final errors = <Object>[];
      FlaxJsRuntime? firstRuntime;
      final routes = _Routes();
      final sessions = [
        for (final name in ['first', 'second'])
          FlaxSession(
            createRuntime: () {
              final runtime = createTestRuntime();
              if (name == 'first') firstRuntime = runtime;
              return runtime;
            },
            source: _source,
            assetBundle: _NamedBundle(name),
            bindings: registry,
            plugins: const [],
            onError: (error, _) => errors.add(error),
          ),
      ];
      try {
        await t.pumpWidget(
          MaterialApp(
            navigatorObservers: [routes],
            home: FlaxView.session(session: sessions.first),
          ),
        );
        await t.pumpAndSettle();
        expect(errors, isEmpty);
        expect(find.text('root:first:true'), findsOneWidget);
        expect(find.text('local-page:true'), findsOneWidget);
        expect(find.text('local:true'), findsOneWidget);
        await t.tap(find.text('Open route'));
        final before =
            (firstRuntime!.evaluate('routeBuilds') as FlaxJsNumber).value;
        routes.page!.pageBuilder(
          t.element(find.byType(FlaxView)),
          const AlwaysStoppedAnimation<double>(1),
          const AlwaysStoppedAnimation<double>(0),
        );
        expect(
          (firstRuntime!.evaluate('routeBuilds') as FlaxJsNumber).value,
          before + 1,
        );
        await t.pumpAndSettle();
        expect(find.text('route:first:true'), findsOneWidget);
        await t.tap(find.text('Open dialog'));
        await t.pumpAndSettle();
        expect(find.text('dialog:first:true'), findsOneWidget);
        final navigator = t.state<NavigatorState>(find.byType(Navigator));
        navigator.pop();
        await t.pumpAndSettle();
        navigator.pop();
        await t.pumpAndSettle();
        await t.pumpWidget(
          MaterialApp(
            home: Column(
              children: [
                for (final session in sessions)
                  FlaxView.page(session: session, name: 'assets'),
              ],
            ),
          ),
        );
        await t.pumpAndSettle();
        expect(find.text('named:first:true'), findsOneWidget);
        expect(find.text('named:second:true'), findsOneWidget);
        expect(errors, isEmpty);
      } finally {
        await flaxTestUnmount(t);
        for (final session in sessions) {
          await flaxTestCloseSession(t, session);
        }
      }
    },
  );

  testWidgets(
    'explicit business bundles retain identity across Session replacement',
    (t) async {
      final errors = <Object>[];
      for (final (name, explicit) in [
        ('first', false),
        ('second', false),
        ('first', true),
        ('second', true),
      ]) {
        final inherited = _NamedBundle(name);
        await flaxTestPumpView(
          t,
          DefaultAssetBundle(
            bundle: inherited,
            child: MaterialApp(
              home: FlaxView(
                // This inherited bundle already represents the business root.
                assetBundle: explicit ? _EqualBundle(name) : inherited,
                createRuntime: createTestRuntime,
                source: """
const {runApp, Text} = __flaxModules.require('@flax/flutter/widgets');
const {getAssetBundle} = __flaxModules.require('@flax/core/assets');
runApp(Text(getAssetBundle().toString()));
""",
                bindings: registry,
                plugins: const [],
                onError: (error, _) => errors.add(error),
              ),
            ),
          ),
        );
        await t.pumpAndSettle();
        expect(find.text(name), findsOneWidget);
      }
      await flaxTestUnmount(t);
      await t.pumpAndSettle();
      expect(errors, isEmpty);
    },
  );
}

class _BuiltinBundle extends CachingAssetBundle {
  _BuiltinBundle(this.prefix);
  final String prefix;
  String? lastKey;

  @override
  Future<ByteData> load(String key) async {
    lastKey = key;
    if (key == '$prefix/assets/data.json') {
      return ByteData.sublistView(utf8.encode('{"value":1}'));
    }
    if (key == 'AssetManifest.bin') {
      return const StandardMessageCodec().encodeMessage({
        '$prefix/assets/logo.png': [
          {'asset': '$prefix/assets/logo.png'},
          {'asset': '$prefix/assets/2.0x/logo.png', 'dpr': 2.0},
        ],
        'host-only.json': [
          {'asset': 'host-only.json'},
        ],
      })!;
    }
    throw FlutterError('Unable to load asset: "$key".');
  }
}

class _NamedBundle extends CachingAssetBundle {
  _NamedBundle(this.name);
  final String name;
  @override
  Future<ByteData> load(String key) async =>
      throw FlutterError('No resource: $key');
  @override
  String toString() => name;
}

class _EqualBundle extends _NamedBundle {
  _EqualBundle(super.name);
  @override
  bool operator ==(Object other) => other is _EqualBundle;
  @override
  int get hashCode => 0;
}

class _Routes extends NavigatorObserver {
  PageRouteBuilder<dynamic>? page;
  @override
  void didPush(Route<dynamic> route, Route<dynamic>? previousRoute) {
    if (route is PageRouteBuilder<dynamic>) page = route;
  }
}

const _source = r"""
const { getAssetBundle } = __flaxModules.require('@flax/core/assets');
const { getRootBundle } = __flaxModules.require('@flax/flutter/services');
const {
  runApp,
  registerPage,
  Builder,
  Column,
  Text,
  Navigator,
  DefaultAssetBundle,
  PageContent,
  GestureDetector,
  PageRouteBuilder,
  showGeneralDialog,
} = __flaxModules.require('@flax/flutter/widgets');
const startupBundle = getAssetBundle();
globalThis.routeBuilds = 0;
function label(context, name) {
  const bundle = DefaultAssetBundle.of(context);
  return Text(
    name + ':' + bundle.toString() + ':' + (bundle === startupBundle),
  );
}
registerPage('assets', () =>
  Builder({ builder: (context) => label(context, 'named') }),
);
registerPage('local-assets', () =>
  Builder({ builder: (context) => Text('local-page:' +
    (DefaultAssetBundle.of(context) === getRootBundle())) }),
);
runApp(
  Builder({
    builder: (context) =>
      Column({
        children: [
          label(context, 'root'),
          DefaultAssetBundle({
            bundle: getRootBundle(),
            child: Column({ children: [Builder({
              builder: (localContext) =>
                Text(
                  'local:' +
                    (DefaultAssetBundle.of(localContext) === getRootBundle()),
                ),
            }), PageContent('local-assets')] }),
          }),
          GestureDetector({
            child: Text('Open route'),
            onTap: () =>
              Navigator.of(context).push(
                PageRouteBuilder({
                  pageBuilder: () => {
                    globalThis.routeBuilds++;
                    return Builder({
                      builder: (routeContext) =>
                        Column({
                          children: [
                            label(routeContext, 'route'),
                            GestureDetector({
                              child: Text('Open dialog'),
                              onTap: () =>
                                showGeneralDialog({
                                  context: routeContext,
                                  pageBuilder: () =>
                                    Builder({
                                      builder: (dialogContext) =>
                                        label(dialogContext, 'dialog'),
                                    }),
                                }),
                            }),
                          ],
                        }),
                    });
                  },
                }),
              ),
          }),
        ],
      }),
  }),
);
""";
