import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:archive/archive.dart';
import 'package:crypto/crypto.dart';
import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/engine.dart';
import '../support/harness.dart' show registry;

void main() {
  test(
    'application loaders and Sessions share the default business bundle',
    () async {
      final root = await Directory.systemTemp.createTemp('flax-script-bundle-');
      final session = FlaxSession(
        createRuntime: createTestRuntime,
        source: _source,
        bindings: registry,
      );
      try {
        expect(session.assetBundle, isA<FlaxPrefixedAssetBundle>());
        final sessionBundle = session.assetBundle as FlaxPrefixedAssetBundle;
        expect(sessionBundle.bundle, same(rootBundle));
        expect(sessionBundle.prefix, 'assets/flax');
        final file = await File('${root.path}/app.js').writeAsString(_source);
        for (final explicit in [null, rootBundle]) {
          final applications = [
            await FlaxApplication.file(file, assetBundle: explicit),
            await FlaxApplication.network(
              uri: Uri.parse('https://example.invalid/app.js'),
              format: FlaxRemoteFormat.javascript,
              assetBundle: explicit,
              cacheDirectory: root,
              download: (request) async => FlaxDownloadResponse(
                finalUri: request.uri,
                statusCode: 200,
                headers: {'content-type': 'application/javascript'},
                body: Stream.value(utf8.encode(_source)),
              ),
            ),
          ];
          for (final application in applications) {
            expect(application.source, _source);
            expect(application.manifest, isNull);
            if (explicit != null) {
              expect(application.assetBundle, same(explicit));
            } else {
              final bundle = application.assetBundle as FlaxPrefixedAssetBundle;
              expect(bundle.bundle, same(rootBundle));
              expect(bundle.prefix, 'assets/flax');
            }
          }
        }
      } finally {
        await session.close();
        await root.delete(recursive: true);
      }
    },
  );

  for (final mode in ['source', 'file', 'network']) {
    testWidgets('$mode business assets survive rebuilds and honor overrides', (
      t,
    ) async {
      final root = await t.runAsync(
        () => Directory.systemTemp.createTemp('flax-view-bundle-'),
      );
      final file = await t.runAsync(
        () => File('${root!.path}/app.js').writeAsString(_resourceSource),
      );
      var host = _resourceBundle('first', prefix: 'assets/flax/');
      AssetBundle? explicit;
      var starts = 0;
      var downloads = 0;
      FlaxJsRuntime runtime() {
        starts++;
        return createTestRuntime();
      }

      Future<FlaxDownloadResponse> download(FlaxDownloadRequest request) async {
        downloads++;
        return FlaxDownloadResponse(
          finalUri: request.uri,
          statusCode: 200,
          headers: {'content-type': 'application/javascript'},
          body: Stream.value(utf8.encode(_resourceSource)),
        );
      }

      Widget view() => DefaultAssetBundle(
        bundle: host,
        child: Directionality(
          textDirection: TextDirection.ltr,
          child: switch (mode) {
            'source' => FlaxView(
              source: _resourceSource,
              assetBundle: explicit,
              createRuntime: runtime,
              bindings: registry,
            ),
            'file' => FlaxView.file(
              file: file!,
              assetBundle: explicit,
              createRuntime: runtime,
              bindings: registry,
            ),
            _ => FlaxView.network(
              uri: Uri.parse('https://example.invalid/app.js'),
              format: FlaxRemoteFormat.javascript,
              assetBundle: explicit,
              cacheDirectory: root,
              download: download,
              createRuntime: runtime,
              bindings: registry,
            ),
          },
        ),
      );

      Future<AssetBundle> verify(String message) async {
        await _pumpUntil(t, find.text(message));
        final bundle = DefaultAssetBundle.of(t.element(find.text(message)));
        final key = await t.runAsync(
          () => AssetImage(
            'assets/icon.png',
            bundle: bundle,
          ).obtainKey(const ImageConfiguration(devicePixelRatio: 2)),
        );
        expect(key!.name, 'assets/2.0x/icon.png');
        expect(key.scale, 2);
        expect(key.bundle, same(bundle));
        return bundle;
      }

      try {
        await t.pumpWidget(view());
        final first = await verify('first');
        expect((first as FlaxPrefixedAssetBundle).bundle, same(host));
        expect(starts, 1);
        await t.pumpWidget(view());
        expect(await verify('first'), same(first));
        expect(starts, 1);
        expect(downloads, mode == 'network' ? 1 : 0);

        host = _resourceBundle('second', prefix: 'assets/flax/');
        await t.pumpWidget(view());
        final second = await verify('second');
        expect(second, isNot(same(first)));
        expect(starts, 2);

        explicit = host;
        await t.pumpWidget(view());
        expect(await verify('host'), same(host));
        expect(starts, 3);
        explicit = null;
        await t.pumpWidget(view());
        expect(await verify('second'), isA<FlaxPrefixedAssetBundle>());
        expect(starts, 4);

        explicit = _resourceBundle('explicit');
        await t.pumpWidget(view());
        expect(await verify('explicit'), same(explicit));
        expect(starts, 5);
        host = _resourceBundle('ignored', prefix: 'assets/flax/');
        await t.pumpWidget(view());
        expect(await verify('explicit'), same(explicit));
        expect(starts, 5);
        expect(downloads, mode == 'network' ? 5 : 0);
        expect(t.takeException(), isNull);
      } finally {
        await t.pumpWidget(const SizedBox());
        await t.pumpAndSettle();
        await t.runAsync(() => root!.delete(recursive: true));
      }
    });
  }

  test(
    'package installation checks integrity and reuses immutable content',
    () async {
      final root = await Directory.systemTemp.createTemp('flax-install-test-');
      try {
        final file = await File('${root.path}/application.flax')
            .writeAsBytes(_zip(_files()));
        final destination = Directory('${root.path}/flax');
        final results = await Future.wait([
          FlaxPackage.install(file, installationDirectory: destination),
          FlaxPackage.install(file, installationDirectory: destination),
        ]);
        expect(results.first.path, results.last.path);
        final installed = results.first;
        final receipt = File('${installed.path}.install.json');
        expect(
          await File('${installed.path}/.flax-install.json').exists(),
          isFalse,
        );
        final before = await receipt.lastModified();
        final loaded = await FlaxApplication.package(
          file,
          installationDirectory: destination,
        );
        expect(
          (loaded.assetBundle as FlaxDirectoryAssetBundle).directory.path,
          installed.path,
        );
        expect(await receipt.lastModified(), before);
        expect(loaded.manifest!.id, 'main');
        expect(
          await loaded.assetBundle.loadString('assets/data.json'),
          '{"message":"first"}',
        );
        final assets = await AssetManifest.loadFromAssetBundle(
          loaded.assetBundle,
        );
        expect(
          assets
              .getAssetVariants('assets/icon.png')!
              .last
              .targetDevicePixelRatio,
          2.0,
        );
        final explicit = FlaxSession.application(
          application: loaded,
          createRuntime: createTestRuntime,
          bindings: registry,
        );
        expect(explicit.assetBundle, same(loaded.assetBundle));
        await explicit.close();

        final resource = File('${installed.path}/assets/data.json');
        final original = await resource.readAsBytes();
        final damaged = List<int>.filled(original.length, 0);
        await resource.writeAsBytes(damaged);
        await expectLater(
          FlaxPackage.install(file, installationDirectory: destination),
          throwsFormatException,
        );
        expect(await resource.readAsBytes(), damaged);
        expect(await receipt.lastModified(), before);
        await resource.writeAsBytes(original);

        // Same id/version, different bytes: both installations remain usable.
        await file.writeAsBytes(_zip(_files(message: 'second')));
        final next = await FlaxPackage.install(
          file,
          installationDirectory: destination,
        );
        expect(next.path, isNot(installed.path));
        expect(
          await loaded.assetBundle.loadString('assets/data.json'),
          '{"message":"first"}',
        );
        await File('${next.path}/assets/data.json').delete();
        await expectLater(
          FlaxPackage.install(file, installationDirectory: destination),
          throwsA(anything),
        );
        expect(await receipt.lastModified(), before);
      } finally {
        await root.delete(recursive: true);
      }
    },
  );

  test(
    'flat bundles retain their hash and require explicit replacement',
    () async {
      final root = await Directory.systemTemp.createTemp('flax-flat-bundle-');
      try {
        final sandbox = await FlaxSandbox.create(
          appId: 'flat.application',
          appsDirectory: Directory('${root.path}/apps'),
        );
        final bytes = _zip(_files());
        final archive = await File('${root.path}/app.flax').writeAsBytes(bytes);
        final application = await FlaxApplication.package(
          archive,
          sandbox: sandbox,
        );
        final installed =
            (application.assetBundle as FlaxDirectoryAssetBundle).directory;
        expect(installed.path, '${sandbox.applicationPath}/bundle');
        final receipt = File('${sandbox.applicationPath}/.flax-install.json');
        expect(
          await File('${installed.path}/.flax-install.json').exists(),
          isFalse,
        );
        final receiptTime = await receipt.lastModified();
        expect(
          jsonDecode(await receipt.readAsString())['digest'],
          sha256.convert(bytes).toString(),
        );
        final note = await File('${sandbox.homePath}/note.txt')
            .writeAsString('saved data');
        final session = FlaxSession.application(
          application: application,
          createRuntime: createTestRuntime,
          bindings: registry,
        );
        final replacement = _zip(_files(message: 'updated'));
        try {
          await session.ready;
          await archive.writeAsBytes(replacement);
          await expectLater(
            FlaxPackage.install(archive, sandbox: sandbox),
            throwsStateError,
          );
          expect(await receipt.lastModified(), receiptTime);
          expect(
            await File('${installed.path}/assets/data.json').readAsString(),
            '{"message":"first"}',
          );
          expect(await note.readAsString(), 'saved data');
        } finally {
          await session.close();
        }

        // The host owns stopping sessions and explicitly clearing the old code.
        await installed.delete(recursive: true);
        final updated = await FlaxApplication.package(
          archive,
          sandbox: sandbox,
        );
        expect(
          (updated.assetBundle as FlaxDirectoryAssetBundle).directory.path,
          installed.path,
        );
        expect(
          jsonDecode(await receipt.readAsString())['digest'],
          sha256.convert(replacement).toString(),
        );
        expect(
          await updated.assetBundle.loadString('assets/data.json'),
          '{"message":"updated"}',
        );
        expect(await note.readAsString(), 'saved data');
      } finally {
        await root.delete(recursive: true);
      }
    },
  );

  test(
    'only complete validated package directories count as installed',
    () async {
      final root = await Directory.systemTemp.createTemp('flax-install-state-');
      try {
        final sandbox = await FlaxSandbox.create(
          appId: 'install.state',
          appsDirectory: Directory('${root.path}/apps'),
        );
        final incomplete = await Directory(
          '${sandbox.applicationPath}/.install-interrupted',
        ).create(recursive: true);
        await File('${incomplete.path}/app.js').writeAsString('unfinished');
        final file = await File('${root.path}/app.flax')
            .writeAsBytes(_zip(_files()));
        final installed = await FlaxPackage.install(file, sandbox: sandbox);
        final receipt = File('${sandbox.applicationPath}/.flax-install.json');
        expect(installed.path, isNot(incomplete.path));
        expect(await receipt.exists(), isTrue);
        expect(
          await File('${incomplete.path}/app.js').readAsString(),
          'unfinished',
        );

        await receipt.delete();
        await expectLater(
          FlaxPackage.install(file, sandbox: sandbox),
          throwsA(anything),
        );
        expect(await receipt.exists(), isFalse);
        expect(await File('${installed.path}/app.js').exists(), isTrue);

        final link = await Link(receipt.path)
            .create('${incomplete.path}/app.js');
        await expectLater(
          FlaxPackage.install(file, sandbox: sandbox),
          throwsFormatException,
        );
        expect(
          await File('${incomplete.path}/app.js').readAsString(),
          'unfinished',
        );
        await link.delete();

        await installed.delete(recursive: true);
        final invalidReceipt = await Directory(receipt.path).create();
        await expectLater(
          FlaxPackage.install(file, sandbox: sandbox),
          throwsFormatException,
        );
        expect(await installed.exists(), isFalse);
        await invalidReceipt.delete();
        final invalid = await File(installed.path)
            .writeAsString('not a directory');
        await expectLater(
          FlaxPackage.install(file, sandbox: sandbox),
          throwsFormatException,
        );
        expect(await invalid.readAsString(), 'not a directory');
      } finally {
        await root.delete(recursive: true);
      }
    },
  );

  test(
    'sandbox packages and downloads stay inside their application root',
    () async {
      final root = await Directory.systemTemp.createTemp('flax-app-layout-');
      try {
        final bytes = _zip(_files());
        final archive = await File('${root.path}/application.flax')
            .writeAsBytes(bytes);
        final installedPaths = <String>[];
        for (final id in ['first', 'second']) {
          final sandbox = await FlaxSandbox.create(
            appId: id,
            appsDirectory: Directory('${root.path}/apps'),
          );
          final local = await FlaxApplication.package(
            archive,
            sandbox: sandbox,
          );
          final installed =
              (local.assetBundle as FlaxDirectoryAssetBundle).directory;
          expect(installed.path, '${sandbox.applicationPath}/bundle');
          expect(await File('${installed.path}/app.js').exists(), isTrue);
          expect(
            jsonDecode(
              await File('${sandbox.applicationPath}/.flax-install.json')
                  .readAsString(),
            )['digest'],
            sha256.convert(bytes).toString(),
          );
          expect(
            (await FlaxPackage.install(archive, sandbox: sandbox)).path,
            installed.path,
          );
          final remote = await FlaxApplication.network(
            uri: Uri.parse('https://example.invalid/application.flax'),
            format: FlaxRemoteFormat.package,
            sandbox: sandbox,
            download: (_) async => FlaxDownloadResponse(
              statusCode: 200,
              body: Stream.value(bytes),
            ),
          );
          expect(
            (remote.assetBundle as FlaxDirectoryAssetBundle).directory.path,
            installed.path,
          );
          expect(
            await Directory('${sandbox.applicationPath}/downloads/blobs')
                .list()
                .length,
            1,
          );
          expect(
            await Directory('${sandbox.applicationPath}/downloads/requests')
                .list()
                .length,
            1,
          );
          expect(await Directory(sandbox.homePath).list().toList(), isEmpty);
          installedPaths.add(installed.path);
          await expectLater(
            FlaxApplication.package(
              archive,
              sandbox: sandbox,
              installationDirectory: Directory(sandbox.homePath),
            ),
            throwsArgumentError,
          );
        }
        expect(installedPaths.first, isNot(installedPaths.last));
      } finally {
        await root.delete(recursive: true);
      }
    },
  );

  test(
    'invalid archives cannot publish an installation or escape its root',
    () async {
      final root = await Directory.systemTemp.createTemp(
        'flax-invalid-package-',
      );
      try {
        final destination = Directory('${root.path}/flax');
        final valid = _files();
        final cases = <List<int>>[
          [1, 2, 3],
          _zip({...valid, '../escape.txt': utf8.encode('escape')}),
          _zip({...valid, '/absolute.txt': []}),
          _zip({...valid, '.flax-install.json': []}),
          _zip({...valid, 'APP.JS': valid['app.js']!}),
          _zip({...valid}..remove('flax.json')),
          _zip({...valid}..remove('app.js')),
          _zip({...valid}..remove('assets/icon.png')),
          _zip({
            ...valid,
            'flax.assets.json': utf8.encode(
              '{"formatVersion":1,"assets":{"../bad":[]}}',
            ),
          }),
          _zip(valid, damageInventory: true),
          _zip(valid, includeInventory: false),
        ];
        // Corrupt a stored payload while preserving ZIP metadata and inventory.
        final corrupt = _zip(valid, stored: true);
        final offset = _indexOf(corrupt, utf8.encode('{"message":"first"}'));
        expect(offset, greaterThan(0));
        corrupt[offset + 12] ^= 1;
        cases.add(corrupt);
        for (var i = 0; i < cases.length; i++) {
          final archive = await File('${root.path}/bad-$i.flax')
              .writeAsBytes(cases[i]);
          await expectLater(
            FlaxPackage.install(archive, installationDirectory: destination),
            throwsA(anything),
            reason: 'case $i',
          );
          final installations = Directory('${destination.path}/installed');
          if (await installations.exists()) {
            expect(await installations.list().toList(), isEmpty);
          }
        }
        expect(await File('${root.path}/escape.txt').exists(), isFalse);

        final linkArchive = Archive();
        linkArchive.add(
          ArchiveFile.string('assets/link', '../escape.txt')..mode = 0xa1ff,
        );
        final file = await File('${root.path}/link.flax')
            .writeAsBytes(ZipEncoder().encode(linkArchive));
        await expectLater(
          FlaxPackage.install(file, installationDirectory: destination),
          throwsA(anything),
        );
      } finally {
        await root.delete(recursive: true);
      }
    },
  );

  testWidgets(
    'bundle and file entrances load once and preserve Session across rebuilds',
    (t) async {
      final bundle = _Bundle(_files());
      var runtimes = 0;
      FlaxJsRuntime runtime() {
        runtimes++;
        return createTestRuntime();
      }

      Widget build() => Directionality(
        textDirection: TextDirection.ltr,
        child: DefaultAssetBundle(
          bundle: bundle,
          child: FlaxView.bundle(
            assetBundle: bundle,
            createRuntime: runtime,
            bindings: registry,
          ),
        ),
      );
      await flaxTestPumpView(t, build());
      await t.pumpAndSettle();
      expect(find.text('application loaded'), findsOneWidget);
      expect(bundle.loads['flax.json'], 1);
      expect(runtimes, 1);
      await flaxTestPumpView(t, build());
      await t.pumpAndSettle();
      expect(bundle.loads['flax.json'], 1);
      expect(runtimes, 1);
      final root = await t.runAsync(
        () => Directory.systemTemp.createTemp('flax-script-'),
      );
      try {
        final file = await t.runAsync(
          () => File('${root!.path}/single.js').writeAsString(_source),
        );
        await t.pumpWidget(
          Directionality(
            textDirection: TextDirection.ltr,
            child: FlaxView.file(
              file: file!,
              assetBundle: bundle,
              createRuntime: runtime,
              bindings: registry,
            ),
          ),
        );
        await _pumpUntil(t, find.text('application loaded'));
        expect(runtimes, 2);
        expect(
          bundle.loads['flax.json'],
          1,
        ); // A file entry does not discover a companion descriptor.
        await t.pumpWidget(const SizedBox());
        await t.pumpAndSettle();
      } finally {
        await t.runAsync(() => root!.delete(recursive: true));
      }
    },
  );

  testWidgets(
    'default bundle prefix, errors and abandoned loads have bounded lifetimes',
    (t) async {
      final host = _Bundle({
        for (final entry in _files().entries)
          'assets/flax/${entry.key}': entry.value,
      });
      await flaxTestPumpView(
        t,
        Directionality(
          textDirection: TextDirection.ltr,
          child: DefaultAssetBundle(
            bundle: host,
            child: FlaxView.bundle(
              createRuntime: createTestRuntime,
              bindings: registry,
            ),
          ),
        ),
      );
      await t.pumpAndSettle();
      expect(find.text('application loaded'), findsOneWidget);
      expect(host.loads['assets/flax/flax.json'], 1);
      final delayed = _DelayedBundle();
      var runtimes = 0;
      await t.pumpWidget(
        FlaxView.bundle(
          assetBundle: delayed,
          createRuntime: () {
            runtimes++;
            return createTestRuntime();
          },
          bindings: registry,
          loadingBuilder: (_) =>
              const Text('loading', textDirection: TextDirection.ltr),
        ),
      );
      expect(find.text('loading'), findsOneWidget);
      await t.pumpWidget(const SizedBox());
      delayed.pending.completeError(const FormatException('cancelled load'));
      await t.pumpAndSettle();
      expect(runtimes, 0);
      expect(t.takeException(), isNull);
      final errors = <Object>[];
      await t.pumpWidget(
        FlaxView.bundle(
          assetBundle: _Bundle({}),
          createRuntime: createTestRuntime,
          bindings: registry,
          onError: (error, _) => errors.add(error),
          errorBuilder: (_, error, _) =>
              Text('failed:$error', textDirection: TextDirection.ltr),
        ),
      );
      await t.pumpAndSettle();
      expect(errors, hasLength(1));
      expect(find.textContaining('failed:'), findsOneWidget);
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
    },
  );
}

Map<String, List<int>> _files({String message = 'first'}) => {
  'flax.json': utf8.encode(
    jsonEncode({'id': 'main', 'version': '1', 'entry': 'app.js'}),
  ),
  'app.js': utf8.encode(_source),
  'flax.assets.json': utf8.encode(
    jsonEncode({
      'formatVersion': 1,
      'assets': {
        'assets/icon.png': [
          {'asset': 'assets/icon.png'},
          {'asset': 'assets/2.0x/icon.png', 'dpr': 2},
        ],
        'assets/data.json': [
          {'asset': 'assets/data.json'},
        ],
      },
    }),
  ),
  'assets/icon.png': [1, 2, 3],
  'assets/2.0x/icon.png': [4, 5, 6],
  'assets/data.json': utf8.encode(jsonEncode({'message': message})),
};

List<int> _zip(
  Map<String, List<int>> files, {
  bool stored = false,
  bool damageInventory = false,
  bool includeInventory = true,
}) {
  final archive = Archive();
  final inventory = <String, Object>{};
  for (final entry in files.entries) {
    archive.add(
      stored
          ? ArchiveFile.noCompress(entry.key, entry.value.length, entry.value)
          : ArchiveFile.bytes(entry.key, entry.value),
    );
    inventory[entry.key] = {
      'size': entry.value.length,
      'sha256': damageInventory
          ? '0' * 64
          : sha256.convert(entry.value).toString(),
    };
  }
  if (includeInventory) {
    archive.add(
      ArchiveFile.string(
        'flax.files.json',
        jsonEncode({'formatVersion': 1, 'files': inventory}),
      ),
    );
  }
  return ZipEncoder().encode(archive);
}

int _indexOf(List<int> data, List<int> pattern) {
  for (var i = 0; i <= data.length - pattern.length; i++) {
    var matches = true;
    for (var n = 0; n < pattern.length; n++) {
      if (data[i + n] != pattern[n]) {
        matches = false;
        break;
      }
    }
    if (matches) {
      return i;
    }
  }
  return -1;
}

Future<void> _pumpUntil(WidgetTester t, Finder finder) async {
  await flaxTestWaitForViews(t);
  for (var i = 0; i < 200 && finder.evaluate().isEmpty; i++) {
    await t.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 5)),
    );
    await t.pump(const Duration(milliseconds: 16));
  }
  expect(finder, findsOneWidget);
}

class _Bundle extends CachingAssetBundle {
  _Bundle(this.files, {this.manifest = const {}});
  final Map<String, List<int>> files;
  final Map<String, Object> manifest;
  final loads = <String, int>{};
  @override
  Future<ByteData> load(String key) async {
    loads.update(key, (n) => n + 1, ifAbsent: () => 1);
    if (key == 'AssetManifest.bin') {
      return const StandardMessageCodec().encodeMessage(manifest)!;
    }
    final bytes = files[key];
    if (bytes == null) throw FlutterError('Missing asset: $key');
    return ByteData.sublistView(Uint8List.fromList(bytes));
  }
}

_Bundle _resourceBundle(String message, {String prefix = ''}) => _Bundle(
  {
    if (prefix.isNotEmpty)
      'assets/data.json': utf8.encode('{"message":"host"}'),
    '${prefix}assets/data.json': utf8.encode(jsonEncode({'message': message})),
  },
  manifest: {
    if (prefix.isNotEmpty)
      'assets/icon.png': [
        {'asset': 'assets/icon.png'},
        {'asset': 'assets/2.0x/icon.png', 'dpr': 2.0},
      ],
    '${prefix}assets/icon.png': [
      {'asset': '${prefix}assets/icon.png'},
      {'asset': '${prefix}assets/2.0x/icon.png', 'dpr': 2.0},
    ],
  },
);

const _resourceSource = r"""
const { runApp, Text, FutureBuilder } = __flaxModules.require('@flax/flutter/widgets');
const { getAssetBundle } = __flaxModules.require('@flax/core/assets');
runApp(FutureBuilder({
  future: getAssetBundle().loadString('assets/data.json'),
  builder: (_, snapshot) => Text(snapshot.hasData
    ? JSON.parse(snapshot.requireData).message
    : (snapshot.hasError ? String(snapshot.error) : 'loading')),
}));
""";

class _DelayedBundle extends CachingAssetBundle {
  // Native live frames load in their own error zone; create the Future there.
  late final pending = Completer<ByteData>();
  @override
  Future<ByteData> load(String key) => pending.future;
}

const _source = r"""
const { runApp, Text } = __flaxModules.require('@flax/flutter/widgets');
runApp(Text('application loaded'));
""";
