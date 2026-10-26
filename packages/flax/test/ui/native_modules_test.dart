import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart'
    show
        FlaxTestRuntimeTracker,
        flaxTestCloseSession,
        flaxTestUnmount,
        flaxTestWaitForRuntimeDisposal;
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/engine.dart';
import '../support/harness.dart' show registry;

void main() {
  test(
    'application entries use module scope and preserve synchronous errors',
    () async {
      final runtime = FlaxTestRuntimeTracker(createTestRuntime());
      final loader = FlaxModuleLoader(
        runtime: runtime,
        loadSource: (_) async => throw StateError('Unexpected fetch'),
      );
      try {
        final pending = loader.start(
          FlaxModuleSource(
            uri: Uri.parse('flax://test/entry.js'),
            kind: FlaxModuleKind.javascript,
            bytes: utf8.encode("const local = 42; globalThis.result = local;"),
          ),
        );
        expect(pending, isNull);
        expect((runtime.getGlobal('result') as FlaxJsNumber).value, 42);
        expect(runtime.getGlobal('local'), isA<FlaxJsUndefined>());
      } finally {
        loader.close();
        expect(runtime.handles, 0);
        runtime.dispose();
      }
      final throwing = FlaxTestRuntimeTracker(createTestRuntime());
      final failures = FlaxModuleLoader(
        runtime: throwing,
        loadSource: (_) async => throw StateError('Unexpected fetch'),
      );
      try {
        expect(
          () => failures.start(
            FlaxModuleSource(
              uri: Uri.parse('flax://test/failure.js'),
              kind: FlaxModuleKind.javascript,
              bytes: utf8.encode(
                "globalThis.attempts = (globalThis.attempts ?? 0) + 1; throw new SyntaxError('entry failure');",
              ),
            ),
          ),
          throwsA(isA<FlaxJsException>()),
        );
        expect((throwing.getGlobal('attempts') as FlaxJsNumber).value, 1);
      } finally {
        failures.close();
        expect(throwing.handles, 0);
        throwing.dispose();
      }
    },
  );

  testWidgets('top-level await does not hold another owning View startup', (
    t,
  ) async {
    final runtimes = <FlaxTestRuntimeTracker>[];
    final errors = <Object>[];
    FlaxJsRuntime create() {
      final runtime = FlaxTestRuntimeTracker(createTestRuntime());
      runtimes.add(runtime);
      return runtime;
    }

    addTearDown(() {
      for (final runtime in runtimes) {
        if (!runtime.isDisposed) runtime.dispose();
      }
    });
    await t.pumpWidget(
      Directionality(
        textDirection: TextDirection.ltr,
        child: Column(
          children: [
            FlaxView(
              createRuntime: create,
              bindings: registry,
              source: """
            import {Text, runApp} from '@flax/flutter/widgets';
            await(new Promise(resolve => { globalThis.releaseEntry = resolve; }));
            runApp(Text('await complete'));
          """,
              onError: (error, _) => errors.add(error),
            ),
            FlaxView(
              createRuntime: create,
              bindings: registry,
              source: "const {Text, runApp} = __flaxModules.require('@flax/flutter/widgets'); runApp(Text('independent'));",
              onError: (error, _) => errors.add(error),
            ),
          ],
        ),
      ),
    );
    try {
      for (
        var turn = 0;
        turn < 5000 &&
            find.text('independent').evaluate().isEmpty &&
            errors.isEmpty;
        turn++
      ) {
        await t.pump(const Duration(milliseconds: 16));
        await t.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 1)),
        );
      }
      expect(errors, isEmpty);
      expect(find.text('independent'), findsOneWidget);
      expect(find.text('await complete'), findsNothing);
      runtimes.first.evaluate('releaseEntry()');
      for (
        var turn = 0;
        turn < 100 && find.text('await complete').evaluate().isEmpty;
        turn++
      ) {
        await t.pump(const Duration(milliseconds: 16));
        await t.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 1)),
        );
      }
      expect(find.text('await complete'), findsOneWidget);
    } finally {
      await flaxTestUnmount(t);
      for (final runtime in runtimes) {
        await flaxTestWaitForRuntimeDisposal(t, runtime);
        expect(runtime.handlesAtDispose, 0);
      }
    }
  });

  testWidgets('owning module Views preserve asynchronous application loading', (
    t,
  ) async {
    final runtime = FlaxTestRuntimeTracker(createTestRuntime());
    addTearDown(() {
      if (!runtime.isDisposed) runtime.dispose();
    });
    final errors = <Object>[];
    await t.pumpWidget(
      Directionality(
        textDirection: TextDirection.ltr,
        child: FlaxView.bundle(
          assetBundle: _ModulesBundle(),
          createRuntime: () => runtime,
          bindings: registry,
          onError: (error, _) => errors.add(error),
        ),
      ),
    );
    try {
      for (
        var i = 0;
        i < 50 && errors.isEmpty && find.text('module:42').evaluate().isEmpty;
        i++
      ) {
        await t.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 5)),
        );
        await t.pump(const Duration(milliseconds: 5));
      }
      expect(errors, isEmpty);
      expect(find.text('module:42'), findsOneWidget);
    } finally {
      await flaxTestUnmount(t);
      await flaxTestWaitForRuntimeDisposal(t, runtime);
    }
    expect(runtime.isDisposed, isTrue);
    expect(runtime.handlesAtDispose, 0);
  });

  test(
    'failed module entries are cached, bounded and release their handles',
    () async {
      final runtime = FlaxTestRuntimeTracker(createTestRuntime());
      final loader = FlaxModuleLoader(
        runtime: runtime,
        loadSource: (_) async => throw StateError('Unexpected fetch'),
      );
      FlaxModuleSource invalid(int id) => FlaxModuleSource(
        uri: Uri.parse('flax://test/invalid-$id.js'),
        kind: FlaxModuleKind.javascript,
        bytes: utf8.encode('export const = ;'),
      );
      try {
        await expectLater(
          loader.load(invalid(0)),
          throwsA(isA<FlaxJsException>()),
        );
        final handles = runtime.handles;
        for (var i = 0; i < 20; i++) {
          await expectLater(
            loader.load(invalid(0)),
            throwsA(isA<FlaxJsException>()),
          );
        }
        expect(runtime.handles, handles);
        for (var i = 1; i < 256; i++) {
          await expectLater(
            loader.load(invalid(i)),
            throwsA(isA<FlaxJsException>()),
          );
        }
        await expectLater(loader.load(invalid(256)), throwsStateError);
        await expectLater(
          loader.importModule(Uri.parse('flax://test/over-limit.js')),
          throwsStateError,
        );
      } finally {
        loader.close();
        final remaining = runtime.handles;
        runtime.dispose();
        expect(remaining, 0);
      }
    },
  );

  testWidgets('module host jobs run before a delayed SDK import', (t) async {
    final runtime = FlaxTestRuntimeTracker(createTestRuntime());
    final errors = <String>[];
    final session = FlaxSession(
      source: '''
        await new Promise(resolve => setTimeout(resolve, 5));
        const {runApp, Text} = await import('@flax/flutter/widgets');
        runApp(Text('late SDK'));
      ''',
      sourceUrl: 'flax://test/late-sdk.js',

      createRuntime: () => runtime,
      bindings: registry,
      onError: (error, stack) => errors.add('$error\n$stack'),
    );
    try {
      await t.pumpWidget(
        Directionality(
          textDirection: TextDirection.ltr,
          child: FlaxView.session(session: session),
        ),
      );
      for (
        var i = 0;
        i < 50 && errors.isEmpty && find.text('late SDK').evaluate().isEmpty;
        i++
      ) {
        await t.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 5)),
        );
        await t.pump(const Duration(milliseconds: 5));
      }
      expect(errors, isEmpty);
      expect(find.text('late SDK'), findsOneWidget);
    } finally {
      await t.pumpWidget(const SizedBox());
      await flaxTestCloseSession(t, session);
    }
    expect(runtime.handlesAtDispose, 0);
  });

  testWidgets(
    'module root and named page share readiness and the installed SDK',
    (t) async {
      final bundle = _ModulesBundle();
      final runtime = FlaxTestRuntimeTracker(createTestRuntime());
      final errors = <Object>[];
      final session = FlaxSession.application(
        application: await FlaxApplication.bundle(bundle),
        createRuntime: () => runtime,
        bindings: registry,
        onError: (error, _) => errors.add(error),
      );
      try {
        await t.pumpWidget(
          Directionality(
            textDirection: TextDirection.ltr,
            child: Row(
              children: [
                Expanded(child: FlaxView.session(session: session)),
                Expanded(
                  child: FlaxView.page(session: session, name: 'details'),
                ),
              ],
            ),
          ),
        );
        for (
          var i = 0;
          i < 50 &&
              (find.text('module:42').evaluate().isEmpty ||
                  find.text('page:42').evaluate().isEmpty);
          i++
        ) {
          await t.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 5)),
          );
          await t.pump();
        }
        expect(errors, isEmpty);
        expect(find.text('module:42'), findsOneWidget);
        expect(find.text('page:42'), findsOneWidget);
      } finally {
        await t.pumpWidget(const SizedBox());
        await flaxTestCloseSession(t, session);
      }
      expect(runtime.handlesAtDispose, 0);
    },
  );

  test('module responses retain final URLs through revalidation and partition credentials', () async {
    final root = await Directory.systemTemp.createTemp('flax-module-network-');
    final observed = <(Uri, String?, String?)>[];
    final initial = Uri.parse(
      'https://modules.invalid/start?token=secret#entry',
    );
    final finalUri = Uri.parse(
      'https://modules.invalid/version/main.js?revision=1',
    );
    Future<FlaxDownloadResponse> download(FlaxDownloadRequest request) async {
      observed.add((
        request.uri,
        request.headers['authorization'],
        request.headers['if-none-match'],
      ));
      final entry = request.uri.path == '/start';
      final json = request.uri.path.endsWith('.json');
      final source = entry
          ? '''
        import settings from './data.json' with {type: 'json'};
        import { other } from 'https://other.invalid/other.js';
        globalThis.result = settings.value + other;
        globalThis.entryURL = import.meta.url;
        const { runApp, Text } = await import('@flax/flutter/widgets');
        runApp(Text(String(result)));
      '''
          : json
          ? '{"value":40}'
          : 'export const other = 2;';
      return FlaxDownloadResponse(
        statusCode: request.headers.containsKey('if-none-match') ? 304 : 200,
        finalUri: entry ? finalUri : request.uri,
        headers: {
          if (!request.headers.containsKey('if-none-match'))
            'content-type': json ? 'application/json' : 'text/javascript',
          'etag': '"module-v1"',
        },
        body: Stream.value(utf8.encode(source)),
      );
    }

    try {
      for (var pass = 0; pass < 2; pass++) {
        final headers = {'Authorization': 'private'};
        final application = await FlaxApplication.network(
          uri: initial,
          format: FlaxRemoteFormat.javascript,
          headers: headers,
          download: download,
          cacheDirectory: root,
        );
        headers['Authorization'] = 'changed-account';
        expect(application.entryUri, finalUri.replace(fragment: 'entry'));
        expect(
          application.sourceUrl,
          'https://modules.invalid/version/main.js',
        );
        final runtime = createTestRuntime();
        final session = FlaxSession.application(
          application: application,
          createRuntime: () => runtime,
          bindings: registry,
        );
        try {
          await session.ready;
          expect((runtime.getGlobal('result') as FlaxJsNumber).value, 42);
          expect(
            (runtime.getGlobal('entryURL') as FlaxJsString).value,
            application.entryUri.toString(),
          );
        } finally {
          await session.close();
        }
      }
      expect(observed.where((item) => item.$1.hasFragment), isEmpty);
      expect(
        observed
            .where((item) => item.$1.host == 'other.invalid')
            .map((item) => item.$2),
        everyElement(isNull),
      );
      expect(
        observed
            .where((item) => item.$1.host == 'modules.invalid')
            .map((item) => item.$2),
        everyElement('private'),
      );
      expect(observed.where((item) => item.$3 != null).length, 2);
      expect(
        observed
            .where((item) => item.$1.path == '/start')
            .map((item) => item.$3),
        everyElement(isNull),
      );
    } finally {
      await root.delete(recursive: true);
    }
  });

  test('module transport rejects missing MIME, credentials, oversized bodies and bad hashes', () async {
    final root = await Directory.systemTemp.createTemp('flax-module-invalid-');
    try {
      for (final mode in ['mime', 'css', 'url', 'size', 'hash', 'final-url']) {
        await expectLater(
          FlaxApplication.network(
            uri: Uri.parse('https://modules.invalid/$mode.js'),
            format: FlaxRemoteFormat.javascript,

            expectedSha256: mode == 'hash' ? '0' * 64 : null,
            cacheDirectory: root,
            download: (request) async => FlaxDownloadResponse(
              statusCode: 200,
              finalUri: mode == 'url'
                  ? Uri.parse('https://private:secret@modules.invalid/main.js')
                  : mode == 'final-url'
                  ? null
                  : request.uri,
              headers: {
                if (mode != 'mime')
                  'content-type': mode == 'css'
                      ? 'text/css'
                      : 'text/javascript',
                if (mode == 'size') 'content-length': '${4 * 1024 * 1024 + 1}',
              },
              body: Stream.value(utf8.encode('export const value = 1;')),
            ),
          ),
          throwsFormatException,
        );
      }
    } finally {
      await root.delete(recursive: true);
    }
  });

  test(
    'reserved sandbox fails before downloads, runtime allocation or plugins',
    () async {
      var sideEffects = 0;
      await expectLater(
        FlaxApplication.network(
          uri: Uri.parse('https://modules.invalid/main.js'),
          format: FlaxRemoteFormat.javascript,

          sandbox: true,
          download: (_) async {
            sideEffects++;
            throw StateError('Must not download');
          },
        ),
        throwsUnsupportedError,
      );
      expect(
        () => FlaxSession(
          source: '',
          bindings: registry,
          sandbox: true,
          createRuntime: () {
            sideEffects++;
            throw StateError('Must not allocate');
          },
        ),
        throwsUnsupportedError,
      );
      expect(sideEffects, 0);
    },
  );

  test(
    'closing a Session cancels readiness during unresolved module await',
    () async {
      final session = FlaxSession(
        source: 'await new Promise(() => {});',
        sourceUrl: 'https://modules.invalid/main.js',

        createRuntime: createTestRuntime,
        bindings: registry,
      );
      final failed = expectLater(session.ready, throwsStateError);
      await session.close();
      await failed;
    },
  );
}

class _ModulesBundle extends CachingAssetBundle {
  @override
  Future<ByteData> load(String key) async {
    if (key == 'AssetManifest.bin') {
      return const StandardMessageCodec().encodeMessage(<String, Object>{})!;
    }
    final source = switch (key) {
      'flax.json' => jsonEncode({
        'id': 'modules',
        'version': '1.0.0',
        'entry': 'main.js',
        'requiredCapabilities': ['esm', 'json-modules'],
        'modules': {
          'main.js': 'javascript',
          'child.js': 'javascript',
          'data.json': 'json',
        },
      }),
      'main.js' =>
        '''
        import {runApp, Text, registerPage} from '@flax/flutter/widgets';
        import settings from './data.json' with {type: 'json'};
        const { value, sameText } = await import('./child.js');
        if (sameText !== Text) throw new Error('Duplicate SDK constructor');
        runApp(Text('module:' + (settings.value + value)));
        registerPage('details', () => Text('page:' + (settings.value + value)));
      ''',
      'child.js' => "export {Text as sameText} from '@flax/flutter/widgets/index'; export const value = 2;",
      'data.json' => '{"value":40}',
      _ => throw StateError('Unexpected module asset: $key'),
    };
    return ByteData.sublistView(utf8.encode(source));
  }
}
