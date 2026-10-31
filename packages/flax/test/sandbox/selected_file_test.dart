import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flax/permissions.dart';
import 'package:flax/sandbox.dart';
import 'package:flax/sandbox_ui.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/painting.dart';
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
  FlaxSelectedFile grant(_Backend source, {bool writable = false}) =>
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
      final support = await Directory('${scratch.path}/host-support').create();
      final supportAlias = await Link('${scratch.path}/support-alias')
          .create(support.path);
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
