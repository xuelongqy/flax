import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:crypto/crypto.dart';
import 'package:flax/flax.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/engine.dart';
import '../support/harness.dart' show registry;

void main() {
  test(
    'HTTP cache revalidates bytes and partitions authorization and hashes',
    () async {
      final previous = HttpOverrides.current;
      HttpOverrides.global = null;
      final root = await Directory.systemTemp.createTemp('flax-network-');
      final server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
      var source = 'first';
      var etag = '"v1"';
      var status = 200;
      String? responseEtag;
      var noStore = false;
      var compressed = false;
      final validators = <String?>[];
      final authorization = <String?>[];
      server.listen((request) async {
        validators.add(request.headers.value('if-none-match'));
        authorization.add(request.headers.value('authorization'));
        final response = request.response;
        if (request.uri.path == '/redirect') {
          response.statusCode = 302;
          response.headers.set('location', '/artifact?secret=token');
        } else if (request.uri.path == '/external') {
          response.statusCode = 302;
          response.headers.set(
            'location',
            'http://localhost:${server.port}/artifact',
          );
        } else if (status != 200) {
          response.statusCode = status;
        } else {
          response.headers.set('etag', responseEtag ?? etag);
          if (noStore) response.headers.set('cache-control', 'no-store');
          if (request.headers.value('if-none-match') == etag) {
            response.statusCode = 304;
          } else {
            final bytes = utf8.encode(source);
            if (compressed) response.headers.set('content-encoding', 'gzip');
            final payload = compressed ? gzip.encode(bytes) : bytes;
            response.contentLength = payload.length;
            response.add(payload);
          }
        }
        await response.close();
      });
      final uri = Uri.parse(
        'http://127.0.0.1:${server.port}/artifact?secret=token',
      );
      Future<FlaxApplication> load({String token = 'a', String? digest}) =>
          FlaxApplication.network(
            uri: uri,
            format: FlaxRemoteFormat.javascript,
            headers: {'Authorization': token},
            expectedSha256: digest,
            cacheDirectory: root,
            assetBundle: rootBundle,
          );
      try {
        final first = await load();
        expect(first.source, 'first');
        expect(first.sourceUrl, endsWith('/artifact'));
        expect(first.assetBundle, same(rootBundle));
        expect(first.manifest, isNull);
        expect((await load()).source, 'first');
        expect(validators, [null, '"v1"']);
        final oldRecord = await Directory('${root.path}/requests')
            .list()
            .single;
        final oldMetadata = jsonDecode(
          await File(oldRecord.path).readAsString(),
        ) as Map<String, dynamic>;
        oldMetadata['formatVersion'] = 1;
        await File(oldRecord.path).writeAsString(jsonEncode(oldMetadata));
        await load();
        expect(
          validators.last,
          isNull,
        ); // Old validators lack a redirect-safe policy.
        responseEtag = '"refreshed"';
        await load();
        etag = '"refreshed"';
        responseEtag = null;
        await load();
        expect(validators.last, '"refreshed"');
        await load(token: 'b');
        expect(validators.last, isNull);
        expect(authorization, ['a', 'a', 'a', 'a', 'a', 'b']);

        etag = '"v1"';
        await load();
        final blob = File(
          '${root.path}/blobs/${sha256.convert(utf8.encode('first'))}',
        );
        await blob.writeAsString(
          'wrong',
        ); // Same size: length alone is insufficient.
        expect((await load()).source, 'first');
        expect(validators.last, isNull);
        source = 'second';
        etag = '"v2"';
        expect((await load()).source, 'second');
        expect(validators.last, '"v1"');
        final digest = sha256.convert(utf8.encode(source)).toString();
        expect((await load(digest: digest.toUpperCase())).source, 'second');
        expect(
          validators.last,
          isNull,
        ); // Expected digest is part of cache identity.
        expect((await load(digest: digest)).source, 'second');
        expect(validators.last, '"v2"');
        final pinnedBlob = File('${root.path}/blobs/$digest');
        await pinnedBlob.writeAsString(
          'broken',
        ); // Same byte count as the pinned script.
        expect((await load(digest: digest)).source, 'second');
        expect(validators.last, isNull);
        source = 'wrong payload';
        etag = '"unexpected"';
        await expectLater(load(digest: digest), throwsFormatException);
        source = 'second';
        etag = '"v2"';
        expect((await load(digest: digest)).source, 'second');
        expect(
          validators.last,
          '"v2"',
        ); // A failed pinned update retained its record.
        final before = await Directory('${root.path}/requests').list().length;
        await expectLater(load(digest: '0' * 64), throwsFormatException);
        expect(await Directory('${root.path}/requests').list().length, before);
        status = 503;
        await expectLater(load(), throwsA(isA<HttpException>()));
        status = 304;
        await expectLater(
          load(token: 'new-account'),
          throwsA(isA<HttpException>()),
        );
        status = 200;
        noStore = true;
        expect(
          (await load()).source,
          'second',
        ); // 304 can revoke a cached record.
        expect((await load()).source, 'second');
        expect(validators.last, isNull);
        expect(
          await root
              .list()
              .where((entry) => entry.path.contains('.download-'))
              .length,
          0,
        );
        noStore = false;
        compressed = true;
        expect((await load(token: 'gzip')).source, 'second');
        expect(
          (await FlaxApplication.network(
            uri: uri.replace(path: '/redirect'),
            format: FlaxRemoteFormat.javascript,
            cacheDirectory: root,
          )).source,
          'second',
        );
        await expectLater(
          FlaxApplication.network(
            uri: uri.replace(path: '/external'),
            format: FlaxRemoteFormat.javascript,
            cacheDirectory: root,
          ),
          throwsA(isA<HttpException>()),
        );
      } finally {
        await server.close(force: true);
        await root.delete(recursive: true);
        HttpOverrides.global = previous;
      }
    },
  );

  test(
    'injected downloader cannot publish incomplete or mismatched bytes',
    () async {
      final root = await Directory.systemTemp.createTemp('flax-adapter-');
      var closed = 0;
      var calls = 0;
      var length = '10';
      final seenHeaders = <Map<String, String>>[];
      Future<FlaxDownloadResponse> download(FlaxDownloadRequest request) async {
        calls++;
        seenHeaders.add(request.headers);
        return FlaxDownloadResponse(
          statusCode: 200,
          headers: {'Content-Length': length, 'ETag': '"a"'},
          body: Stream.value(utf8.encode('script')),
          onClose: () => closed++,
        );
      }

      Future<FlaxApplication> load({String? digest}) => FlaxApplication.network(
        uri: Uri.parse('https://example.invalid/no-extension'),
        format: FlaxRemoteFormat.javascript,
        headers: {'X-Test': 'yes'},
        cacheDirectory: root,
        expectedSha256: digest,
        download: download,
      );
      try {
        await expectLater(load(), throwsFormatException);
        expect(closed, 1);
        expect(await Directory('${root.path}/blobs').list().length, 0);
        expect(await Directory('${root.path}/requests').list().length, 0);
        length = '6';
        await expectLater(load(digest: 'f' * 64), throwsFormatException);
        expect((await load()).source, 'script');
        expect(seenHeaders.last['x-test'], 'yes');
        expect(closed, 3);
        await expectLater(load(digest: 'invalid'), throwsArgumentError);
        expect(calls, 3);
        final cancelled = Completer<void>();
        final listening = Completer<void>();
        var bodyCancelled = false;
        final body = StreamController<List<int>>(
          onListen: listening.complete,
          onCancel: () => bodyCancelled = true,
        );
        final active = FlaxApplication.network(
          uri: Uri.parse('https://example.invalid/streaming'),
          format: FlaxRemoteFormat.javascript,
          cacheDirectory: root,
          cancelled: cancelled.future,
          download: (_) async =>
              FlaxDownloadResponse(statusCode: 200, body: body.stream),
        );
        final failed = expectLater(active, throwsStateError);
        await listening.future;
        body.add([1, 2, 3]);
        cancelled.complete();
        await failed;
        expect(bodyCancelled, isTrue);
        await body.close();
        expect(
          await root
              .list()
              .where((entry) => entry.path.contains('.download-'))
              .length,
          0,
        );

        await expectLater(
          FlaxApplication.network(
            uri: Uri.parse('file:///tmp/application.js'),
            format: FlaxRemoteFormat.javascript,
            download: download,
          ),
          throwsArgumentError,
        );
        await expectLater(
          FlaxApplication.network(
            uri: Uri.parse(
              'https://secret-user:secret-pass@example.invalid/code?signature=secret-token#fragment',
            ),
            format: FlaxRemoteFormat.javascript,
            download: download,
          ),
          throwsA(
            isA<ArgumentError>().having(
              (error) => error.toString(),
              'redacted URI',
              allOf(
                isNot(contains('secret-pass')),
                isNot(contains('secret-token')),
              ),
            ),
          ),
        );
      } finally {
        await root.delete(recursive: true);
      }
    },
  );

  for (final beforeDownload in [true, false]) {
    test(
      'cancellation covers ${beforeDownload ? 'cache preparation' : 'download completion'}',
      () async {
        final root = await Directory.systemTemp.createTemp(
          'flax-cancel-boundary-',
        );
        final cache = Directory('${root.path}/downloads');
        final cancelled = Completer<void>();
        var calls = 0;
        if (beforeDownload) cancelled.complete();
        try {
          await expectLater(
            FlaxApplication.network(
              uri: Uri.parse('https://example.invalid/cancelled'),
              format: FlaxRemoteFormat.javascript,
              cacheDirectory: cache,
              cancelled: cancelled.future,
              download: (_) async {
                calls++;
                return FlaxDownloadResponse(
                  statusCode: 200,
                  body: Stream.value(utf8.encode('code')),
                  onClose: () {
                    if (!cancelled.isCompleted) cancelled.complete();
                  },
                );
              },
            ),
            throwsStateError,
          );
          expect(calls, beforeDownload ? 0 : 1);
          if (beforeDownload) expect(await cache.exists(), isFalse);
        } finally {
          await root.delete(recursive: true);
        }
      },
    );
  }

  test('redirect targets cannot share an artifact validator', () async {
    final previous = HttpOverrides.current;
    HttpOverrides.global = null;
    final root = await Directory.systemTemp.createTemp('flax-redirect-');
    final server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
    var target = '/first';
    server.listen((request) async {
      if (request.uri.path == '/entry') {
        request.response.statusCode = HttpStatus.found;
        request.response.headers.set('location', target);
      } else {
        request.response.headers.set('etag', '"version-1"');
        if (request.headers.value('if-none-match') == '"version-1"') {
          request.response.statusCode = HttpStatus.notModified;
        } else {
          request.response.write(request.uri.path);
        }
      }
      await request.response.close();
    });
    Future<FlaxApplication> load() => FlaxApplication.network(
      uri: Uri.parse('http://127.0.0.1:${server.port}/entry'),
      format: FlaxRemoteFormat.javascript,
      cacheDirectory: root,
    );
    try {
      expect((await load()).source, '/first');
      target = '/second'; // ETags are scoped to a resource, not its origin.
      expect((await load()).source, '/second');
    } finally {
      await server.close(force: true);
      await root.delete(recursive: true);
      HttpOverrides.global = previous;
    }
  });

  test(
    'unused error response bodies are cancelled without an onClose callback',
    () async {
      final root = await Directory.systemTemp.createTemp('flax-unused-body-');
      try {
        for (final status in [500, 304, 200]) {
          var cancelled = false;
          final body = StreamController<List<int>>(
            onCancel: () => cancelled = true,
          );
          try {
            await expectLater(
              FlaxApplication.network(
                uri: Uri.parse('https://example.invalid/error-$status'),
                format: FlaxRemoteFormat.javascript,
                cacheDirectory: root,
                download: (_) async => FlaxDownloadResponse(
                  statusCode: status,
                  body: body.stream,
                  headers: status == 200 ? {'content-length': 'invalid'} : {},
                ),
              ),
              throwsA(anything),
            );
            expect(cancelled, isTrue, reason: 'HTTP $status');
          } finally {
            if (!cancelled) await body.stream.listen(null).cancel();
            await body.close();
          }
        }
      } finally {
        await root.delete(recursive: true);
      }
    },
  );

  test(
    'validation cleanup does not wait for onClose before invoking it',
    () async {
      final root = await Directory.systemTemp.createTemp('flax-close-order-');
      final released = Completer<void>();
      final listening = Completer<void>();
      final body = StreamController<List<int>>(
        onListen: listening.complete,
        onCancel: () => released.future,
      );
      final loaded = FlaxApplication.network(
        uri: Uri.parse('https://example.invalid/oversized'),
        format: FlaxRemoteFormat.javascript,
        cacheDirectory: root,
        download: (_) async => FlaxDownloadResponse(
          statusCode: 200,
          headers: {'content-length': '1'},
          body: body.stream,
          onClose: () {
            if (!released.isCompleted) released.complete();
          },
        ),
      );
      final checked = expectLater(
        loaded.timeout(const Duration(seconds: 2)),
        throwsFormatException,
      );
      try {
        await listening.future;
        body.add([1, 2]);
        await checked;
      } finally {
        if (!released.isCompleted) released.complete();
        await loaded.then<void>((_) {}, onError: (Object _, StackTrace _) {});
        await body.close();
        await root.delete(recursive: true);
      }
    },
  );

  test(
    'concurrent no-store revalidations can remove the same request record',
    () async {
      final root = await Directory.systemTemp.createTemp('flax-no-store-');
      final ready = Completer<void>();
      var callers = 0;
      var revalidate = false;
      Future<FlaxDownloadResponse> download(FlaxDownloadRequest request) async {
        if (!revalidate) {
          return FlaxDownloadResponse(
            statusCode: 200,
            headers: {'etag': '"v1"'},
            body: Stream.value(utf8.encode('code')),
          );
        }
        callers++;
        if (callers == 6) ready.complete();
        await ready.future;
        return FlaxDownloadResponse(
          statusCode: 304,
          headers: {'cache-control': 'no-store'},
          body: const Stream.empty(),
        );
      }

      Future<FlaxApplication> load() => FlaxApplication.network(
        uri: Uri.parse('https://example.invalid/no-store'),
        format: FlaxRemoteFormat.javascript,
        cacheDirectory: root,
        download: download,
      );
      try {
        await load();
        revalidate = true;
        final applications = await Future.wait(List.generate(6, (_) => load()));
        expect(
          applications.map((application) => application.source),
          everyElement('code'),
        );
        expect(await Directory('${root.path}/requests').list().length, 0);
      } finally {
        await root.delete(recursive: true);
      }
    },
  );

  testWidgets(
    'network identity preserves Session and unmount cancels a late response',
    (t) async {
      final root = await t.runAsync(
        () => Directory.systemTemp.createTemp('flax-network-view-'),
      );
      var calls = 0;
      var runtimes = 0;
      FlaxJsRuntime runtime() {
        runtimes++;
        return createTestRuntime();
      }

      Future<FlaxDownloadResponse> download(FlaxDownloadRequest request) async {
        calls++;
        return FlaxDownloadResponse(
          statusCode: 200,
          body: Stream.value(utf8.encode(_source)),
        );
      }

      Widget view(Map<String, String> headers) => Directionality(
        textDirection: TextDirection.ltr,
        child: FlaxView.network(
          createRuntime: runtime,
          bindings: registry,
          uri: Uri.parse('https://example.invalid/app'),
          format: FlaxRemoteFormat.javascript,
          cacheDirectory: root,
          download: download,
          headers: headers,
        ),
      );
      try {
        await t.pumpWidget(view({'X-A': 'a', 'X-B': 'b'}));
        await _pumpUntil(t, find.text('remote loaded'));
        await t.pumpWidget(view({'x-b': 'b', 'x-a': 'a'}));
        await t.pumpAndSettle();
        expect(calls, 1);
        expect(runtimes, 1);
        await t.pumpWidget(view({'x-a': 'different-account'}));
        await _pumpUntil(t, find.text('remote loaded'));
        expect(calls, 2);
        expect(runtimes, 2);
        final pending = Completer<FlaxDownloadResponse>();
        final started = Completer<FlaxDownloadRequest>();
        var closed = false;
        var lateBodyCancelled = false;
        final lateBody = StreamController<List<int>>(
          onCancel: () => lateBodyCancelled = true,
        );
        await t.pumpWidget(
          FlaxView.network(
            createRuntime: runtime,
            bindings: registry,
            uri: Uri.parse('https://example.invalid/pending'),
            format: FlaxRemoteFormat.javascript,
            cacheDirectory: root,
            download: (request) {
              started.complete(request);
              return pending.future;
            },
          ),
        );
        for (var i = 0; i < 200 && !started.isCompleted; i++) {
          await t.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 5)),
          );
          await t.pump();
        }
        expect(started.isCompleted, isTrue);
        final request = await started.future;
        await t.pumpWidget(const SizedBox());
        await request.cancelled;
        pending.complete(
          FlaxDownloadResponse(
            statusCode: 200,
            body: lateBody.stream,
            onClose: () => closed = true,
          ),
        );
        await t.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 10)),
        );
        await t.pumpAndSettle();
        expect(closed, isTrue);
        expect(lateBodyCancelled, isTrue);
        await t.runAsync(() => lateBody.close());
        expect(runtimes, 2);
        var neverStarted = false;
        await t.pumpWidget(
          FlaxView.network(
            createRuntime: runtime,
            bindings: registry,
            uri: Uri.parse('https://example.invalid/never'),
            format: FlaxRemoteFormat.javascript,
            cacheDirectory: root,
            download: (_) {
              neverStarted = true;
              return Completer<FlaxDownloadResponse>().future;
            },
          ),
        );
        for (var i = 0; i < 200 && !neverStarted; i++) {
          await t.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 5)),
          );
          await t.pump();
        }
        expect(neverStarted, isTrue);
        await t.pumpWidget(const SizedBox());
        await t
            .pump(); // No timeout Timer may remain after abandoning an adapter.
        expect(t.takeException(), isNull);
        expect(
          () => FlaxView.bundle(
            createRuntime: runtime,
            bindings: registry,
            assetBundle: rootBundle,
            prefix: 'another',
          ),
          throwsArgumentError,
        );
        expect(
          () => FlaxView.network(
            createRuntime: runtime,
            bindings: registry,
            uri: request.uri,
            format: FlaxRemoteFormat.package,
            assetBundle: rootBundle,
          ),
          throwsArgumentError,
        );
      } finally {
        await t.pumpWidget(const SizedBox());
        await t.runAsync(() => root!.delete(recursive: true));
      }
    },
  );
}

Future<void> _pumpUntil(WidgetTester t, Finder finder) async {
  for (var i = 0; i < 200 && finder.evaluate().isEmpty; i++) {
    await t.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 5)),
    );
    await t.pump();
  }
  expect(finder, findsOneWidget);
}

const _source = r"""
const { runApp, Text } = __flaxModules.require('@flax/flutter/widgets');
runApp(Text('remote loaded'));
""";
