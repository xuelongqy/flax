import 'dart:io';

import 'package:flax_local_storage/src/store.dart';
import 'package:hive_ce/hive_ce.dart';
import 'package:test/test.dart';

import 'support/failing_io.dart';

void main() {
  late Directory directory;
  late FlaxLocalStorageStore store;
  final errors = <Object>[];
  final owner = Object();
  void report(Object error, StackTrace stack) => errors.add(error);
  setUp(() async {
    directory = await Directory.systemTemp.createTemp('flax-storage-test-');
    store = await FlaxLocalStorageStore.open(directory.path, 10485760);
    errors.clear();
  });
  tearDown(() async {
    if (store.box.isOpen) await store.close();
    await directory.delete(recursive: true);
  });

  test(
    'areas share one box and support arbitrary UTF-16 keys and values',
    () async {
      final key = '汉😀\u0000\ud800' * 100;
      const value = 'value\udfff\u0000';
      store.setItem(null, key, value, owner, report);
      store.setItem('global', key, 'named', owner, report);
      store.setItem('Shop', key, 'upper', owner, report);
      store.setItem('shop', key, '', owner, report);
      expect(store.getItem(null, key), value);
      expect(store.getItem('global', key), 'named');
      expect(store.getItem('Shop', key), 'upper');
      expect(store.getItem('shop', key), '');
      expect(store.getItem('absent', key), isNull);
      await store.close();
      store = await FlaxLocalStorageStore.open(directory.path, 10485760);
      expect(store.getItem(null, key), value);
      expect(store.getItem('shop', key), '');
      expect(errors, isEmpty);
    },
  );

  test('quota replacement and no-op writes preserve state', () async {
    await store.close();
    store = await FlaxLocalStorageStore.open(directory.path, 12);
    store.setItem(null, 'key', 'abc', owner, report);
    await store.flush();
    store.setItem(null, 'key', 'abc', owner, report);
    store.removeItem(null, 'absent', owner, report);
    store.clear('absent', owner, report);
    expect(store.pendingWrites, 0);
    expect(
      () => store.setItem(null, 'key', 'abcd', owner, report),
      throwsA(isA<FlaxStorageQuotaExceeded>()),
    );
    expect(store.getItem(null, 'key'), 'abc');
    store.setItem(null, 'key', 'a', owner, report);
    store.setItem(null, 'x', 'y', owner, report);
    expect(store.length(null), 2);
    store.clear(null, owner, report);
    expect(store.length(null), 0);
    store.setItem(null, 'key', 'abc', owner, report);
    expect(errors, isEmpty);
  });

  test(
    'logical notifications exclude source, other areas and no-ops',
    () async {
      final source = <FlaxStorageChange>[],
          peer = <FlaxStorageChange>[],
          other = <FlaxStorageChange>[];
      final b = Object(), c = Object();
      store.attach(owner, 'shop', source.add);
      store.attach(b, 'shop', peer.add);
      store.attach(c, null, other.add);
      store.setItem('shop', 'x', '1', owner, report);
      store.setItem('shop', 'x', '1', owner, report);
      store.setItem('shop', 'x', '2', owner, report);
      store.removeItem('shop', 'x', owner, report);
      store.setItem('shop', 'y', '3', owner, report);
      store.clear('shop', owner, report);
      store.clear('shop', owner, report);
      expect(source, isEmpty);
      expect(other, isEmpty);
      expect(peer, [
        (key: 'x', oldValue: null, newValue: '1'),
        (key: 'x', oldValue: '1', newValue: '2'),
        (key: 'x', oldValue: '2', newValue: null),
        (key: 'y', oldValue: null, newValue: '3'),
        (key: null, oldValue: null, newValue: null),
      ]);
      await expectLater(store.close(), throwsStateError);
      store.detach(owner);
      store.detach(b);
      store.detach(c);
      expect(store.attachments, 0);
    },
  );

  test(
    'clear is scoped and continuous writes settle without retained work',
    () async {
      store.setItem('other', 'x', 'keep', owner, report);
      for (var i = 0; i < 100; i++) {
        store.setItem(null, 'key$i', '$i', owner, report);
        store.setItem(null, 'key$i', 'new$i', owner, report);
      }
      store.clear(null, owner, report);
      store.setItem(null, 'last', 'ok', owner, report);
      await store.flush();
      expect(store.pendingWrites, 0);
      expect(store.keys(null), ['last']);
      expect(store.getItem('other', 'x'), 'keep');
      expect(store.key(null, 1), isNull);
      expect(errors, isEmpty);
    },
  );

  test('storage preserves an initialized application Hive directory', () async {
    await store.close();
    final appDirectory = await Directory('${directory.path}/app').create();
    Hive.init(appDirectory.path);
    final app = await Hive.openBox<String>('application_before');
    Box<String>? after;
    try {
      await app.put('x', 'app');
      store = await FlaxLocalStorageStore.open(
        '${directory.path}/flax',
        10485760,
      );
      store.setItem(null, 'x', 'flax', owner, report);
      await store.close();
      expect(app.isOpen, isTrue);
      expect(app.get('x'), 'app');
      after = await Hive.openBox<String>('application_after');
      expect(after.path, startsWith(appDirectory.path));
      await after.put('x', 'still app');
      expect(after.get('x'), 'still app');
    } finally {
      await after?.close();
      await app.close();
    }
  });

  test(
    'a foreign open box with the reserved name is not adopted or closed',
    () async {
      await store.close();
      final app = await Hive.openBox<List<dynamic>>(
        FlaxLocalStorageStore.boxName,
        path: '${directory.path}/foreign',
      );
      try {
        await app.put('host', ['owned by host']);
        await expectLater(
          FlaxLocalStorageStore.open(directory.path, 100),
          throwsStateError,
        );
        expect(app.isOpen, isTrue);
        expect(app.get('host'), ['owned by host']);
      } finally {
        await app.close();
      }
    },
  );

  test(
    'concurrent application box opening is not redirected or closed',
    () async {
      await store.close();
      final application = Hive.openBox<List<dynamic>>(
        FlaxLocalStorageStore.boxName,
        path: '${directory.path}/concurrent',
      );
      await expectLater(
        FlaxLocalStorageStore.open(directory.path, 100),
        throwsStateError,
      );
      final box = await application;
      expect(box.isOpen, isTrue);
      await box.close();
    },
  );

  test(
    'failed persistence uses Hive rollback and repairs quota and indexes',
    () async {
      await store.close();
      final io = FailingWrites();
      await IOOverrides.runWithIOOverrides(() async {
        store = await FlaxLocalStorageStore.open(directory.path, 12);
        store.setItem(null, 'k', 'old', owner, report);
        await store.flush();
        io.fail = true;
        store.setItem(null, 'k', 'new', owner, report);
        expect(store.getItem(null, 'k'), 'new');
        await expectLater(store.flush(), throwsA(isA<FileSystemException>()));
        expect(store.getItem(null, 'k'), 'old');
        expect(store.keys(null), ['k']);
        expect(errors, hasLength(1));
        store.setItem(null, 'x', 'y', owner, report);
        await expectLater(store.flush(), throwsA(isA<FileSystemException>()));
        expect(store.getItem(null, 'x'), isNull);
        io.fail = false;
        store.setItem(null, 'x', 'y', owner, report);
        await store.flush();
        expect(store.getItem(null, 'x'), 'y');
        expect(store.pendingWrites, 0);
        expect(
          () => store.setItem(null, 'z', 'z', owner, report),
          throwsA(isA<FlaxStorageQuotaExceeded>()),
        );
      }, io);
    },
  );

  test(
    'failed deletion keeps record identity for later successful writes',
    () async {
      await store.close();
      final io = FailingWrites();
      await IOOverrides.runWithIOOverrides(() async {
        store = await FlaxLocalStorageStore.open(directory.path, 10485760);
        store.setItem(null, 'removed', 'old', owner, report);
        store.setItem('clear', 'updated', 'old', owner, report);
        store.setItem('clear', 'restored', 'old', owner, report);
        await store.flush();

        io.failures = 1;
        store.removeItem(null, 'removed', owner, report);
        store.setItem(null, 'removed', 'new', owner, report);
        await expectLater(store.flush(), throwsA(isA<FileSystemException>()));
        expect(store.getItem(null, 'removed'), 'new');

        io.failures = 1;
        store.clear('clear', owner, report);
        store.setItem('clear', 'updated', 'new', owner, report);
        await expectLater(store.flush(), throwsA(isA<FileSystemException>()));
        expect(store.getItem('clear', 'updated'), 'new');
        expect(store.getItem('clear', 'restored'), 'old');
        expect(store.pendingRecordIdentities, 0);

        await store.close();
        store = await FlaxLocalStorageStore.open(directory.path, 10485760);
        expect(store.getItem(null, 'removed'), 'new');
        expect(store.getItem('clear', 'updated'), 'new');
        expect(store.getItem('clear', 'restored'), 'old');
        expect(store.length('clear'), 2);
      }, io);
    },
  );

  test(
    'multiple failed operations restore one record without duplicates',
    () async {
      await store.close();
      final io = FailingWrites();
      await IOOverrides.runWithIOOverrides(() async {
        store = await FlaxLocalStorageStore.open(directory.path, 10485760);
        store.setItem(null, 'key', 'old', owner, report);
        await store.flush();
        io.fail = true;
        store.removeItem(null, 'key', owner, report);
        store.setItem(null, 'key', 'new', owner, report);
        await expectLater(store.flush(), throwsA(isA<FileSystemException>()));
        expect(store.getItem(null, 'key'), 'old');
        expect(store.pendingRecordIdentities, 0);
        io.fail = false;
        await store.close();
        store = await FlaxLocalStorageStore.open(directory.path, 10485760);
        expect(store.getItem(null, 'key'), 'old');
        expect(store.length(null), 1);
      }, io);
    },
  );

  test(
    'index failure disables access without hiding the write error',
    () async {
      await store.close();
      final io = FailingWrites();
      await IOOverrides.runWithIOOverrides(() async {
        store = await FlaxLocalStorageStore.open(directory.path, 10485760);
        await store.box.put(99, ['invalid']);
        io.fail = true;
        store.setItem(null, 'key', 'value', owner, (error, stack) {
          throw StateError('report failed');
        });
        await expectLater(store.flush(), throwsA(isA<FileSystemException>()));
        expect(() => store.getItem(null, 'key'), throwsStateError);
        expect(store.pendingRecordIdentities, 0);
        io.fail = false;
        await expectLater(store.close(), throwsStateError);
      }, io);
    },
  );

  test(
    'persisted data is read in a fresh Dart process without Hive.init',
    () async {
      const key = 'key\ud800', value = 'value\udfff';
      store.setItem('process', key, value, owner, report);
      await store.close();
      final result = await Process.run('dart', [
        'run',
        'test/support/read_process.dart',
        directory.path,
      ], workingDirectory: Directory.current.path);
      expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
      expect(result.stdout, contains('persisted UTF-16 verified'));
    },
  );

  test('existing duplicate records reject initialization', () async {
    store.setItem(null, 'key', 'value', owner, report);
    await store.flush();
    final record = List<dynamic>.of(store.box.get(0)!);
    await store.box.put(99, record);
    await store.close();
    await expectLater(
      FlaxLocalStorageStore.open(directory.path, 10485760),
      throwsStateError,
    );
    expect(Hive.isBoxOpen(FlaxLocalStorageStore.boxName), isFalse);
  });
}
