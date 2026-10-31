import 'dart:convert';

import 'package:flax_secure_storage/flax_secure_storage.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  const channel = MethodChannel('dev.flax.secure_storage');
  final records = <String, String>{};
  late List<MethodCall> calls;
  String? failure;
  var number = 0;
  setUp(() {
    debugDefaultTargetPlatformOverride = TargetPlatform.macOS;
    records.clear();
    calls = [];
    failure = null;
    TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger
        .setMockMethodCallHandler(channel, (call) async {
          calls.add(call);
          if (failure != null) throw PlatformException(code: failure!);
          final args = (call.arguments as Map).cast<String, Object?>();
          final key = args['key'] as String?;
          return switch (call.method) {
            'initialize' => null,
            'keys' => records.keys.toList(),
            'read' => records[key],
            'write' => () {
              records[key!] = args['value'] as String;
              return null;
            }(),
            'delete' => () {
              records.remove(key);
              return null;
            }(),
            _ => throw MissingPluginException(),
          };
        });
  });
  tearDown(() {
    debugDefaultTargetPlatformOverride = null;
    TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger
        .setMockMethodCallHandler(channel, null);
  });
  test('unavailable initialization fails and can be retried', () async {
    final namespace = 'test-${number++}';
    failure = 'unavailable';
    await expectLater(
      FlaxPlatformSecureStorage.open(namespace: namespace),
      throwsA(
        isA<FlaxSecureStorageException>().having(
          (e) => e.reason,
          'reason',
          FlaxSecureStorageFailure.unavailable,
        ),
      ),
    );
    expect(calls.map((call) => call.method), ['initialize']);
    failure = null;
    final storage = await FlaxPlatformSecureStorage.open(namespace: namespace);
    expect(calls.map((call) => call.method), ['initialize', 'initialize']);
    await storage.write(
      module: 'permissions',
      owner: 'app-a',
      key: 'state',
      value: Uint8List.fromList([1]),
    );
    expect(
      await storage.read(module: 'permissions', owner: 'app-a', key: 'state'),
      [1],
    );
  });
  test(
    'binary snapshots and owner deletion preserve unrelated modules and owners',
    () async {
      final storage = await FlaxPlatformSecureStorage.open(
        namespace: 'test-${number++}',
      );
      final bytes = Uint8List.fromList([0, 128, 255]);
      final write = storage.write(
        module: 'permissions',
        owner: 'app-a',
        key: 'state',
        value: bytes,
      );
      bytes[0] = 99;
      await write;
      await storage.write(
        module: 'certificates',
        owner: 'app-a',
        key: 'state',
        value: Uint8List(1),
      );
      await storage.write(
        module: 'permissions',
        owner: 'app-b',
        key: 'state',
        value: Uint8List(1),
      );
      expect(
        await storage.read(module: 'permissions', owner: 'app-a', key: 'state'),
        [0, 128, 255],
      );
      expect(records.keys.every((key) => !key.contains('app-a')), isTrue);
      await storage.deleteOwner(owner: 'app-a');
      expect(records.length, 1);
      expect(
        await storage.read(module: 'permissions', owner: 'app-b', key: 'state'),
        [0],
      );
      expect(calls.any((call) => call.method == 'deleteAll'), isFalse);
    },
  );
  test(
    'tampered addresses and native failures cannot become an empty grant store',
    () async {
      final storage = await FlaxPlatformSecureStorage.open(
        namespace: 'test-${number++}',
      );
      await storage.write(
        module: 'permissions',
        owner: 'app-a',
        key: 'state',
        value: Uint8List(1),
      );
      final key = records.keys.single;
      final record = jsonDecode(records[key]!) as Map;
      record['owner'] = 'app-b';
      records[key] = jsonEncode(record);
      await expectLater(
        storage.read(module: 'permissions', owner: 'app-a', key: 'state'),
        throwsA(
          isA<FlaxSecureStorageException>().having(
            (e) => e.reason,
            'reason',
            FlaxSecureStorageFailure.integrityFailure,
          ),
        ),
      );
      failure = 'locked';
      await expectLater(
        storage.read(module: 'permissions', owner: 'app-a', key: 'state'),
        throwsA(
          isA<FlaxSecureStorageException>().having(
            (e) => e.reason,
            'reason',
            FlaxSecureStorageFailure.locked,
          ),
        ),
      );
      failure = null;
      await storage.deleteOwner(owner: 'app-a');
      expect(
        records,
        isEmpty,
        reason: 'Corruption must not prevent explicit owner cleanup',
      );
    },
  );
}
