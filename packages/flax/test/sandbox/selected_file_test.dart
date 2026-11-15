import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flax/permissions.dart';
import 'package:flax/sandbox.dart';
import 'package:flax/sandbox_ui.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart' show Curves, FadeInImageTransition;
import 'package:flutter_test/flutter_test.dart';
import 'package:path_provider_platform_interface/path_provider_platform_interface.dart';

class _Scope implements FlaxSandboxScope {
  @override
  bool isActive = true;
  @override
  void requireActive() {
    if (!isActive) throw StateError('Closed scope');
  }
}

class _ImageContext implements FlaxSandboxContext {
  _ImageContext(this.files)
    : assets = FlaxAssetBundlePolicy(rootBundle, files.scope);
  final FlaxFilePolicy files;
  final FlaxAssetBundlePolicy assets;
  @override
  String get appId => files.appId;
  @override
  String get homePath => files.homePath;
  @override
  FlaxSandboxScope get scope => files.scope;
  @override
  P requirePolicy<P extends Object>() {
    if (P == FlaxFilePolicy) return files as P;
    if (P == FlaxAssetBundlePolicy) return assets as P;
    throw StateError('Unexpected image policy $P');
  }
}

class _Paths extends PathProviderPlatform {
  _Paths(this.path);
  final String path;
  @override
  Future<String> getApplicationSupportPath() async => path;
}

class _Backend extends FlaxDocumentBackend {
  _Backend(this.bytes);
  List<int> bytes;
  Completer<void>? delay;
  int reads = 0, closes = 0;
  @override
  String get name => 'selected.png';
  @override
  Future<bool> exists() async => true;
  @override
  Future<int> length() async => bytes.length;
  @override
  Future<Uint8List> read(int offset, int count) async {
    reads++;
    await delay?.future;
    final end = (offset + count).clamp(0, bytes.length);
    return Uint8List.fromList(bytes.sublist(offset.clamp(0, end), end));
  }

  @override
  Future<void> write(
    List<int> value, {
    required FileMode mode,
    required bool flush,
  }) async {
    bytes = [...(mode == FileMode.append ? bytes : <int>[]), ...value];
  }

  @override
  Future<void> close() async {
    closes++;
  }
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  late Directory scratch;
  late FlaxTestPermissions fixture;
  late FlaxPermissionContext context;
  late FlaxFilePolicy files;
  setUp(() async {
    scratch = await Directory.systemTemp.createTemp('flax-selected-');
    fixture = await FlaxTestPermissions.create(
      permissions: {
        'flax.documents.open': {'mode': 'readWrite'},
      },
    );
    context = FlaxPermissionContext(
      policy: fixture.policy,
      manifest: fixture.manifest,
    );
    final sandbox = await FlaxSandbox.create(
      appId: fixture.application.appId,
      appsDirectory: Directory('${scratch.path}/apps'),
    );
    files = FlaxFilePolicy(sandbox, _Scope(), permissions: context);
  });
  tearDown(() async {
    await context.close();
    await files.close();
    await fixture.close();
    await scratch.delete(recursive: true);
  });
  FlaxSelectedFile grant(FlaxDocumentBackend source, {bool writable = false}) =>
      FlaxSelectedFile.grant(
        source: source,
        files: files,
        writable: writable,
        permission: context.lease(
          'flax.documents.open',
          operation: 'select',
          scope: {'mode': writable ? 'readWrite' : 'read'},
        ),
      );

  test('selected File reads in bounded chunks, copies into data and refuses path reconstruction', () async {
    final backend = _Backend(List.generate(150000, (i) => i % 256));
    final file = grant(backend);
    expect(await file.readAsBytes(), backend.bytes);
    expect(backend.reads, 4);
    final copy = await file.copy('${files.homePath}/copy.bin');
    expect(await copy.readAsBytes(), backend.bytes);
    expect(file.path, startsWith('flax-document://'));
    expect(() => files.file(file.path), throwsA(isA<FlaxSandboxException>()));
    expect(() => file.parent, throwsA(isA<FlaxSandboxException>()));
    expect(() => file.readAsBytesSync(), throwsA(isA<FlaxSandboxException>()));
    await expectLater(
      file.rename('${files.homePath}/move'),
      throwsA(isA<FlaxSandboxException>()),
    );
    await expectLater(file.open(), throwsA(isA<FlaxSandboxException>()));
    await expectLater(
      file.writeAsString('no'),
      throwsA(isA<FlaxPermissionException>()),
    );
    await expectLater(
      file.copy('${scratch.path}/host.bin'),
      throwsA(isA<FlaxSandboxException>()),
    );
    expect(await File('${scratch.path}/host.bin').exists(), isFalse);
  });

  test(
    'readWrite returns the same File and revocation rejects an in-flight read',
    () async {
      final backend = _Backend(utf8.encode('old'));
      final file = grant(backend, writable: true);
      expect(await file.writeAsString('new'), same(file));
      expect(await file.readAsString(), 'new');
      backend.delay = Completer<void>();
      final read = file.readAsBytes();
      final rejection = expectLater(
        read,
        throwsA(anyOf(isA<FlaxPermissionException>(), isA<StateError>())),
      );
      await Future<void>.delayed(Duration.zero);
      await fixture.manager.revoke(fixture.application, 'flax.documents.open');
      await rejection.timeout(const Duration(seconds: 2));
      backend.delay!.complete();
      await files.close();
      expect(backend.closes, 1);
    },
  );

  test(
    'local backend pins the chosen file and rejects host-managed resources',
    () async {
      final previous = PathProviderPlatform.instance;
      final support = await Directory(
        '${scratch.path}/host-support/application',
      ).create(recursive: true);
      final supportAlias = await Link(
        '${scratch.path}/host-support/support-alias',
      ).create(support.path);
      PathProviderPlatform.instance = _Paths(supportAlias.path);
      addTearDown(() => PathProviderPlatform.instance = previous);
      final original = await File('${scratch.path}/external.txt')
          .writeAsString('selected');
      final backend = await FlaxLocalDocumentBackend.open(
        original,
        writable: true,
      );
      try {
        await original.rename('${scratch.path}/moved.txt');
        await original.writeAsString('replacement');
        expect(utf8.decode(await backend.read(0, 99)), 'selected');
        await backend.write(
          utf8.encode('changed'),
          mode: FileMode.write,
          flush: true,
        );
        expect(await original.readAsString(), 'replacement');
        expect(
          await File('${scratch.path}/moved.txt').readAsString(),
          'changed',
        );
        final metadata = await backend.stat();
        expect(metadata.type, FileSystemEntityType.file);
        expect(metadata.size, 7);
        final expectedMetadata = await File('${scratch.path}/moved.txt').stat();
        expect(metadata.modified.isUtc, expectedMetadata.modified.isUtc);
        expect(
          metadata.modified.timeZoneName,
          expectedMetadata.modified.timeZoneName,
        );
        expect(
          metadata.modified.timeZoneOffset,
          expectedMetadata.modified.timeZoneOffset,
        );
        expect(
          metadata.modified.toIso8601String(),
          expectedMetadata.modified.toIso8601String(),
        );
        expect(
          metadata.modified.microsecondsSinceEpoch,
          expectedMetadata.modified.microsecondsSinceEpoch,
        );
        await File('${scratch.path}/moved.txt').delete();
        expect(await backend.exists(), isTrue);
        expect(await backend.length(), 7);
        expect(utf8.decode(await backend.read(2, 3)), 'ang');
        await backend.write(
          utf8.encode('+'),
          mode: FileMode.append,
          flush: true,
        );
        expect(utf8.decode(await backend.read(0, 99)), 'changed+');
        expect((await backend.stat()).size, 8);
        expect(await backend.read(0x7fffffffffffffff, 0), isEmpty);
        await expectLater(backend.read(-1, 1), throwsRangeError);
        await expectLater(backend.read(0, -1), throwsRangeError);
        await expectLater(
          backend.read(0x7fffffffffffffff, 1),
          throwsRangeError,
        );
        expect(utf8.decode(await backend.read(0, 99)), 'changed+');
        final secret = await File('${support.path}/permissions')
            .writeAsString('secret');
        await expectLater(
          FlaxLocalDocumentBackend.open(secret),
          throwsA(isA<FlaxSandboxException>()),
        );
        final alias = '${scratch.path}/secret-hardlink';
        expect((await Process.run('ln', [secret.path, alias])).exitCode, 0);
        await expectLater(
          FlaxLocalDocumentBackend.open(
            File(alias),
            protectedPaths: [secret.path],
          ),
          throwsA(isA<FlaxSandboxException>()),
        );
        final internal = await File('${files.homePath}/internal')
            .writeAsString('internal');
        await expectLater(
          FlaxLocalDocumentBackend.open(internal),
          throwsA(isA<FlaxSandboxException>()),
        );
      } finally {
        await backend.close();
      }
    },
  );

  test('local document close drains admitted writes in source order', () async {
    final previous = PathProviderPlatform.instance;
    final support = await Directory('${scratch.path}/host-support/application')
        .create(recursive: true);
    PathProviderPlatform.instance = _Paths(support.path);
    addTearDown(() => PathProviderPlatform.instance = previous);
    final original = await File('${scratch.path}/queued.txt')
        .writeAsString('old');
    final backend = await FlaxLocalDocumentBackend.open(
      original,
      writable: true,
    );
    final prefix = List.generate(192 * 1024, (index) => index % 251);
    final writes = [
      backend.write(prefix, mode: FileMode.write, flush: false),
      backend.write([1, 2], mode: FileMode.append, flush: false),
      backend.write([3, 4], mode: FileMode.append, flush: true),
    ];
    final size = backend.length();
    final closing = backend.close();
    expect(backend.close(), same(closing));
    await Future.wait(writes);
    expect(await size, prefix.length + 4);
    await closing;
    expect(await original.readAsBytes(), [...prefix, 1, 2, 3, 4]);
    await expectLater(backend.read(0, 1), throwsStateError);
    await expectLater(
      backend.write([9], mode: FileMode.write, flush: false),
      throwsStateError,
    );
  });

  test(
    'revocation drains a paused local reader before backend close',
    () async {
      final previous = PathProviderPlatform.instance;
      final support = await Directory(
        '${scratch.path}/host-support/application',
      ).create(recursive: true);
      PathProviderPlatform.instance = _Paths(support.path);
      addTearDown(() => PathProviderPlatform.instance = previous);
      final original = await File('${scratch.path}/paused.bin')
          .writeAsBytes(List.filled(192 * 1024, 7));
      final backend = await FlaxLocalDocumentBackend.open(original);
      final file = grant(backend);
      final first = Completer<void>(), done = Completer<void>();
      var received = 0;
      final errors = <Object>[];
      late StreamSubscription<List<int>> subscription;
      subscription = file.openRead().listen(
        (bytes) {
          received += bytes.length;
          if (!first.isCompleted) {
            subscription.pause();
            first.complete();
          }
        },
        onError: (Object error) => errors.add(error),
        onDone: done.complete,
      );
      try {
        await first.future;
        final beforeRevoke = received;
        await fixture.manager.revoke(
          fixture.application,
          'flax.documents.open',
        );
        await files.close().timeout(const Duration(seconds: 2));
        subscription.resume();
        await done.future.timeout(const Duration(seconds: 2));
        expect(received, beforeRevoke);
        expect(errors, [isA<FlaxPermissionException>()]);
        await expectLater(backend.read(0, 1), throwsStateError);
        await backend.close();
      } finally {
        await subscription.cancel();
      }
    },
  );

  test(
    'policy close drains a selected read before a late microtask pause',
    () async {
      final previous = PathProviderPlatform.instance;
      final support = await Directory(
        '${scratch.path}/host-support/application',
      ).create(recursive: true);
      PathProviderPlatform.instance = _Paths(support.path);
      addTearDown(() => PathProviderPlatform.instance = previous);
      final original = await File('${scratch.path}/late-pause.bin')
          .writeAsBytes(List.filled(256 * 1024, 7));
      final backend = await FlaxLocalDocumentBackend.open(original);
      final file = grant(backend);
      final first = Completer<void>();
      Future<void>? closing;
      var chunks = 0;
      var pauseRan = false;
      final errors = <Object>[];
      late StreamSubscription<List<int>> subscription;
      subscription = file.openRead().listen(
        (_) {
          chunks++;
          if (chunks == 1) {
            // Keep permission active: explicit policy close stops the producer.
            // Pause after stop, while the already admitted source read drains.
            closing = files.close();
            scheduleMicrotask(() {
              pauseRan = true;
              subscription.pause();
            });
            first.complete();
          }
        },
        onError: (Object error, StackTrace stack) {
          if (!first.isCompleted) {
            first.completeError(error, stack);
          } else {
            errors.add(error);
          }
        },
        onDone: () {
          if (!first.isCompleted) {
            first.completeError(
              StateError('Reader ended before its first chunk'),
            );
          }
        },
      );
      try {
        await first.future;
        await closing!.timeout(const Duration(seconds: 2));
        expect(pauseRan, isTrue);
        expect(files.scope.isActive, isTrue);
        context.require(
          'flax.documents.open',
          operation: 'afterPolicyClose',
          scope: {'mode': 'read'},
        );
        expect(chunks, 1);
        expect(errors, isEmpty);
        await expectLater(backend.read(0, 1), throwsStateError);
      } finally {
        subscription.resume();
        await subscription.cancel();
        await closing;
        await backend.close();
      }
    },
  );

  test(
    'asset and fade adapters retain logical caches and nullable defaults',
    () async {
      final c = _ImageContext(files);
      const configuration = ImageConfiguration(devicePixelRatio: 1.5);
      for (final logical in [false, true]) {
        final asset = sandboxImageAsset(
          c,
          c.assets,
          'main.png',
          scale: 1,
          cacheWidth: 2,
          cacheHeight: 3,
          useLogicalCacheSize: logical,
        );
        final provider = asset.image as ResizeImage;
        final physical = ResizeImage(
          provider.imageProvider,
          width: logical ? 3 : 2,
          height: logical ? 5 : 3,
        );
        expect(
          await provider.obtainKey(configuration),
          await physical.obtainKey(configuration),
        );
        final local =
            sandboxImageFile(
                  c,
                  files,
                  files.file('${files.homePath}/logical.png'),
                  cacheWidth: 2,
                  cacheHeight: 3,
                  useLogicalCacheSize: logical,
                ).image
                as ResizeImage;
        final resized = sandboxResizeImage(
          c,
          c.assets,
          local.imageProvider,
          width: 2,
          height: 3,
          useLogicalSize: logical,
        );
        final localPhysical = ResizeImage(
          local.imageProvider,
          width: logical ? 3 : 2,
          height: logical ? 5 : 3,
        );
        expect(
          await local.obtainKey(configuration),
          await localPhysical.obtainKey(configuration),
        );
        expect(
          await resized.obtainKey(configuration),
          await local.obtainKey(configuration),
        );
        for (final explicitNull in [false, true]) {
          final fade = explicitNull
              ? sandboxFadeAssetNetwork(
                  c,
                  c.assets,
                  placeholder: 'placeholder.png',
                  image: 'https://example.test/image.png',
                  placeholderScale: 1,
                  fadeOutDuration: null,
                  fadeOutCurve: null,
                  transition: FadeInImageTransition.fadeInOver,
                  placeholderCacheWidth: 2,
                  imageCacheWidth: 3,
                  useLogicalCacheSize: logical,
                )
              : sandboxFadeAssetNetwork(
                  c,
                  c.assets,
                  placeholder: 'placeholder.png',
                  image: 'https://example.test/image.png',
                  placeholderScale: 1,
                  transition: FadeInImageTransition.fadeInOver,
                  placeholderCacheWidth: 2,
                  imageCacheWidth: 3,
                  useLogicalCacheSize: logical,
                );
          expect(fade.transition, FadeInImageTransition.fadeInOver);
          expect(fade.fadeOutDuration, const Duration(milliseconds: 300));
          expect(fade.fadeOutCurve, Curves.easeOut);
          expect((fade.placeholder as ResizeImage).useLogicalSize, logical);
          expect((fade.image as ResizeImage).useLogicalSize, logical);
        }
      }
      final sequential = sandboxFadeAssetNetwork(
        c,
        c.assets,
        placeholder: 'placeholder.png',
        image: 'https://example.test/image.png',
      );
      expect(sequential.transition, FadeInImageTransition.sequential);
      expect(sequential.fadeOutDuration, const Duration(milliseconds: 300));
      expect(sequential.fadeOutCurve, Curves.easeOut);
      final custom = sandboxFadeAssetNetwork(
        c,
        c.assets,
        placeholder: 'placeholder.png',
        image: 'https://example.test/image.png',
        fadeOutDuration: const Duration(milliseconds: 41),
        fadeOutCurve: Curves.linear,
      );
      expect(custom.fadeOutDuration, const Duration(milliseconds: 41));
      expect(custom.fadeOutCurve, Curves.linear);
      expect(
        () => sandboxFadeAssetNetwork(
          c,
          c.assets,
          placeholder: 'placeholder.png',
          image: 'https://example.test/image.png',
          transition: FadeInImageTransition.fadeInOver,
          fadeOutDuration: const Duration(milliseconds: 41),
        ),
        throwsAssertionError,
      );
    },
  );

  test(
    'decoration rejects foreign and revoked providers on either input',
    () async {
      final c = _ImageContext(files);
      final valid = sandboxAssetImage(c, c.assets, 'main.png');
      final placeholder = sandboxResizeImage(
        c,
        c.assets,
        sandboxAssetImage(c, c.assets, 'placeholder.png'),
        width: 2,
        useLogicalSize: true,
      );
      checkSandboxDecorationImages(c, c.assets, image: valid);
      checkSandboxDecorationImages(
        c,
        c.assets,
        image: valid,
        placeholder: placeholder,
      );
      final foreign = AssetImage('foreign.png', bundle: PlatformAssetBundle());
      for (final input in [(foreign, valid), (valid, foreign)]) {
        expect(
          () => checkSandboxDecorationImages(
            c,
            c.assets,
            image: input.$1,
            placeholder: input.$2,
          ),
          throwsA(isA<FlaxSandboxException>()),
        );
      }
      final file = grant(_Backend([0]));
      final selected = sandboxResizeImage(
        c,
        c.assets,
        sandboxFileImage(c, files, file),
        width: 2,
      );
      checkSandboxDecorationImages(
        c,
        c.assets,
        image: valid,
        placeholder: selected,
      );
      await fixture.manager.revoke(fixture.application, 'flax.documents.open');
      expect(
        () => checkSandboxDecorationImages(
          c,
          c.assets,
          image: valid,
          placeholder: selected,
        ),
        throwsA(isA<FlaxPermissionException>()),
      );
      (files.scope as _Scope).isActive = false;
      expect(
        () => checkSandboxDecorationImages(c, c.assets, image: valid),
        throwsStateError,
      );
    },
  );

  test(
    'logical selected wrappers retain DPR eviction and no-resize identity',
    () async {
      final c = _ImageContext(files);
      final file = grant(_Backend([0]), writable: true);
      final provider = sandboxFileImage(c, files, file);
      expect(
        sandboxResizeIfNeeded(
          c,
          c.assets,
          null,
          null,
          provider,
          useLogicalSize: true,
        ),
        same(provider),
      );
      final wrappers = [
        sandboxResizeImage(
          c,
          c.assets,
          provider,
          width: 2,
          height: 3,
          useLogicalSize: true,
        ),
        sandboxResizeIfNeeded(c, c.assets, 2, 3, provider, useLogicalSize: true)
            as ResizeImage,
        sandboxImageFile(
              c,
              files,
              file,
              cacheWidth: 2,
              cacheHeight: 3,
              useLogicalCacheSize: true,
            ).image
            as ResizeImage,
      ];
      final keys = <Object>{};
      final requests = <(ResizeImage, ImageConfiguration)>[];
      for (final wrapper in wrappers) {
        for (final dimensions in [
          (1.5, 3, 5),
          (2.0, 4, 6),
          (1.0, 2, 3),
          (null, 2, 3),
        ]) {
          final configuration = ImageConfiguration(
            devicePixelRatio: dimensions.$1,
          );
          final key = await sandboxResizeImageKey(
            c,
            c.assets,
            wrapper,
            configuration,
          );
          final physical = ResizeImage(
            wrapper.imageProvider,
            width: dimensions.$2,
            height: dimensions.$3,
          );
          expect(key, await physical.obtainKey(configuration));
          checkSandboxImageKey(c, c.assets, wrapper, key);
          keys.add(key);
          requests.add((wrapper, configuration));
        }
      }
      expect(keys, hasLength(3));
      void cache(Object key) => PaintingBinding.instance.imageCache.putIfAbsent(
        key,
        () => OneFrameImageStreamCompleter(Completer<ImageInfo>().future),
      );
      for (final key in keys) {
        cache(key);
        expect(PaintingBinding.instance.imageCache.containsKey(key), isTrue);
      }
      await file.writeAsBytes([1]);
      for (final key in keys) {
        expect(PaintingBinding.instance.imageCache.containsKey(key), isFalse);
      }
      // A reload obtains/tracks its key again before inserting a fresh cache entry.
      for (final (wrapper, configuration) in requests) {
        final key = await sandboxResizeImageKey(
          c,
          c.assets,
          wrapper,
          configuration,
        );
        expect(keys, contains(key));
        cache(key);
      }
      await fixture.manager.revoke(fixture.application, 'flax.documents.open');
      for (final key in keys) {
        expect(PaintingBinding.instance.imageCache.containsKey(key), isFalse);
      }
      expect(
        () => sandboxResizeIfNeeded(
          c,
          c.assets,
          null,
          null,
          provider,
          useLogicalSize: true,
        ),
        throwsA(isA<FlaxPermissionException>()),
      );
      expect(
        () => wrappers.first.obtainKey(ImageConfiguration.empty),
        throwsA(isA<FlaxPermissionException>()),
      );
    },
  );

  testWidgets('logical selected image revocation denies an in-flight decode', (
    tester,
  ) async {
    final backend = _Backend(
      base64Decode(
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
      ),
    )..delay = Completer<void>();
    final file = grant(backend);
    final c = _ImageContext(files);
    final provider = sandboxResizeImage(
      c,
      c.assets,
      sandboxFileImage(c, files, file),
      width: 2,
      useLogicalSize: true,
    );
    final errors = <Object>[];
    var images = 0;
    final stream = provider.resolve(
      const ImageConfiguration(devicePixelRatio: 2),
    );
    final listener = ImageStreamListener((image, _) {
      images++;
      image.dispose();
    }, onError: (Object error, StackTrace? stack) => errors.add(error));
    stream.addListener(listener);
    try {
      for (var i = 0; i < 100 && backend.reads == 0; i++) {
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 5)),
        );
        await tester.pump();
      }
      expect(backend.reads, greaterThan(0));
      await tester.runAsync(
        () =>
            fixture.manager.revoke(fixture.application, 'flax.documents.open'),
      );
      backend.delay!.complete();
      await tester.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 5)),
      );
      await tester.pump();
      expect(images, 0);
      expect(errors, [isA<FlaxPermissionException>()]);
    } finally {
      if (!backend.delay!.isCompleted) backend.delay!.complete();
      stream.removeListener(listener);
    }
  });

  testWidgets(
    'selected FileImage cache is isolated and invalidated on write and revoke',
    (tester) async {
      final png = base64Decode(
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
      );
      final backend = _Backend(png), otherBackend = _Backend(png);
      final file = grant(backend, writable: true), other = grant(otherBackend);
      final provider = FlaxSelectedFileImage(file),
          otherProvider = FlaxSelectedFileImage(other);
      final key = await provider.obtainKey(ImageConfiguration.empty);
      expect(
        key,
        isNot(await otherProvider.obtainKey(ImageConfiguration.empty)),
      );
      final stream = provider.resolve(ImageConfiguration.empty);
      var images = 0;
      final errors = <Object>[];
      final listener = ImageStreamListener((image, _) {
        images++;
        image.dispose();
      }, onError: (error, _) => errors.add(error));
      stream.addListener(listener);
      for (var i = 0; i < 100 && images == 0 && errors.isEmpty; i++) {
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 5)),
        );
        await tester.pump();
      }
      expect(errors, isEmpty);
      expect(images, 1);
      expect(PaintingBinding.instance.imageCache.containsKey(key), isTrue);
      final reads = backend.reads;
      final repeated = provider.resolve(ImageConfiguration.empty);
      expect(repeated.completer, same(stream.completer));
      expect(
        backend.reads,
        reads,
        reason: 'Static selected images reuse the cache',
      );
      await tester.runAsync(() => file.writeAsBytes(png));
      expect(PaintingBinding.instance.imageCache.containsKey(key), isFalse);
      for (var i = 0; i < 100 && images < 2; i++) {
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 5)),
        );
        await tester.pump();
      }
      expect(images, 2);
      await tester.runAsync(
        () =>
            fixture.manager.revoke(fixture.application, 'flax.documents.open'),
      );
      expect(
        () => provider.obtainKey(ImageConfiguration.empty),
        throwsA(isA<FlaxPermissionException>()),
      );
      expect(errors, isNotEmpty);
      stream.removeListener(listener);
    },
  );
}
