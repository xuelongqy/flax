import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:archive/archive.dart';
import 'package:crypto/crypto.dart';
import 'package:flax/flax.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/engine.dart';
import '../support/harness.dart' show registry;

void main() {
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
        final receipt = File('${installed.path}/.flax-install.json');
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
      await t.pumpWidget(build());
      await t.pumpAndSettle();
      expect(find.text('application loaded'), findsOneWidget);
      expect(bundle.loads['flax.json'], 1);
      expect(runtimes, 1);
      await t.pumpWidget(build());
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
        ); // Script mode does not discover metadata.
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
      await t.pumpWidget(
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
      final pending = Completer<ByteData>();
      var runtimes = 0;
      await t.pumpWidget(
        FlaxView.bundle(
          assetBundle: _DelayedBundle(pending.future),
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
      pending.completeError(const FormatException('cancelled load'));
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
    jsonEncode({
      'formatVersion': 1,
      'id': 'main',
      'version': '1',
      'entry': 'app.js',
    }),
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
  for (var i = 0; i < 200 && finder.evaluate().isEmpty; i++) {
    await t.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 5)),
    );
    await t.pump();
  }
  expect(finder, findsOneWidget);
}

class _Bundle extends CachingAssetBundle {
  _Bundle(this.files);
  final Map<String, List<int>> files;
  final loads = <String, int>{};
  @override
  Future<ByteData> load(String key) async {
    loads.update(key, (n) => n + 1, ifAbsent: () => 1);
    if (key == 'AssetManifest.bin') {
      return const StandardMessageCodec().encodeMessage(<String, Object>{})!;
    }
    final bytes = files[key];
    if (bytes == null) throw FlutterError('Missing asset: $key');
    return ByteData.sublistView(Uint8List.fromList(bytes));
  }
}

class _DelayedBundle extends CachingAssetBundle {
  _DelayedBundle(this.pending);
  final Future<ByteData> pending;
  @override
  Future<ByteData> load(String key) => pending;
}

const _source = r"""
const { runApp, Text } = __flaxModules.require('@flax/flutter/widgets');
runApp(Text('application loaded'));
""";
