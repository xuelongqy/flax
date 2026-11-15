import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:crypto/crypto.dart';
import 'package:flax/sandbox.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:path/path.dart' as p;

class _Scope implements FlaxSandboxScope {
  @override
  bool isActive = true;
  @override
  void requireActive() {
    if (!isActive) throw StateError('Closed test scope');
  }
}

void main() {
  late Directory scratch;
  late FlaxSandbox sandbox;
  late _Scope scope;
  late FlaxFilePolicy files;

  setUp(() async {
    scratch = await Directory(
      Platform.environment['TMPDIR'] ?? Directory.systemTemp.path,
    ).createTemp('flax-sandbox-');
    sandbox = await FlaxSandbox.create(
      appId: 'test.reader',
      appsDirectory: Directory(p.join(scratch.path, 'apps')),
    );
    scope = _Scope();
    files = FlaxFilePolicy(sandbox, scope);
  });
  tearDown(() async {
    scope.isActive = false;
    await files.close();
    await scratch.delete(recursive: true);
  });

  test('application layout isolates data from host-managed siblings', () async {
    final apps = Directory(p.join(scratch.path, 'apps'));
    expect(
      sandbox.applicationPath,
      p.join(
        await apps.resolveSymbolicLinks(),
        sha256.convert(utf8.encode('test.reader')).toString(),
      ),
    );
    expect(sandbox.homePath, p.join(sandbox.applicationPath, 'data'));
    expect(
      await Directory(p.join(sandbox.applicationPath, 'bundle')).exists(),
      isFalse,
    );
    expect(
      await Directory(p.join(sandbox.applicationPath, 'downloads')).exists(),
      isFalse,
    );
    await files
        .file(p.join(sandbox.homePath, 'note.txt'))
        .writeAsString('saved');
    final reopened = await FlaxSandbox.create(
      appId: sandbox.appId,
      appsDirectory: apps,
    );
    expect(reopened.applicationPath, sandbox.applicationPath);
    expect(
      await File(p.join(reopened.homePath, 'note.txt')).readAsString(),
      'saved',
    );
    for (final name in ['bundle', 'downloads']) {
      final sibling = await Directory(p.join(sandbox.applicationPath, name))
          .create();
      final file = await File(p.join(sibling.path, 'host.txt'))
          .writeAsString('host');
      expect(() => files.file(file.path), throwsA(isA<FlaxSandboxException>()));
      await expectLater(
        FlaxSandbox.create(appId: 'nested.$name', appsDirectory: sibling),
        throwsArgumentError,
      );
    }
  });

  test(
    'application creation rejects linked roots and data directories',
    () async {
      for (final child in ['', 'data']) {
        final appId = 'linked.$child';
        final application = p.join(
          scratch.path,
          'apps',
          sha256.convert(utf8.encode(appId)).toString(),
        );
        if (child.isNotEmpty) await Directory(application).create();
        final path = child.isEmpty ? application : p.join(application, child);
        await Link(path).create(scratch.path);
        await expectLater(
          FlaxSandbox.create(
            appId: appId,
            appsDirectory: Directory(p.join(scratch.path, 'apps')),
          ),
          throwsA(isA<FlaxSandboxException>()),
        );
      }
    },
  );

  test('real file operations return the same restricted file', () async {
    final file = files.file(p.join(sandbox.homePath, 'note.txt'));
    expect(await file.writeAsString('hello\nworld'), same(file));
    expect(await file.readAsLines(), ['hello', 'world']);
    expect(file.readAsStringSync(), 'hello\nworld');
    expect(await file.length(), 11);
    expect(await file.exists(), isTrue);
    expect((await file.stat()).type, FileSystemEntityType.file);
    expect(file.path, startsWith(sandbox.homePath));
  });

  test(
    'descriptor metadata matches SDK timestamp zones and missing snapshots',
    () async {
      final file = files.file(p.join(sandbox.homePath, 'metadata'));
      file.writeAsStringSync('metadata');
      final host = File(file.path);
      final modified = DateTime.utc(2001, 2, 3, 4, 5, 6, 789, 123);
      final accessed = DateTime.utc(2002, 3, 4, 5, 6, 7, 123, 456);
      void sameTime(DateTime actual, DateTime expected) {
        expect(actual.isUtc, expected.isUtc);
        expect(actual.timeZoneName, expected.timeZoneName);
        expect(actual.timeZoneOffset, expected.timeZoneOffset);
        expect(actual.toIso8601String(), expected.toIso8601String());
        expect(actual.microsecondsSinceEpoch, expected.microsecondsSinceEpoch);
      }

      file.setLastModifiedSync(modified);
      await file.setLastAccessed(accessed);
      final expected = host.statSync();
      final expectedAsync = await host.stat();
      for (final stat in [file.statSync(), await file.stat()]) {
        expect(stat.type, FileSystemEntityType.file);
        expect(stat.size, 8);
        expect(stat.mode, expected.mode);
        expect(stat.modeString(), expected.modeString());
        expect(
          stat.accessed.microsecondsSinceEpoch,
          accessed.microsecondsSinceEpoch,
        );
        expect(
          stat.modified.microsecondsSinceEpoch,
          modified.microsecondsSinceEpoch,
        );
        for (final reference in [expected, expectedAsync]) {
          sameTime(stat.accessed, reference.accessed);
          sameTime(stat.modified, reference.modified);
          sameTime(stat.changed, reference.changed);
        }
      }
      final changedAccess = accessed.add(const Duration(seconds: 7));
      final changedModified = modified.add(const Duration(seconds: 11));
      file.setLastAccessedSync(changedAccess);
      await file.setLastModified(changedModified);
      final updated = host.statSync();
      expect(
        updated.accessed.microsecondsSinceEpoch,
        changedAccess.microsecondsSinceEpoch,
      );
      expect(
        updated.modified.microsecondsSinceEpoch,
        changedModified.microsecondsSinceEpoch,
      );
      sameTime(await file.lastAccessed(), updated.accessed);
      sameTime(file.lastAccessedSync(), updated.accessed);
      sameTime(await file.lastModified(), updated.modified);
      sameTime(file.lastModifiedSync(), updated.modified);
      expect(
        (await files.directory(sandbox.homePath).stat()).type,
        FileSystemEntityType.directory,
      );
      for (final missing in [
        files.file('${file.path}-missing').statSync(),
        await files.file('${file.path}-missing').stat(),
      ]) {
        expect(missing.type, FileSystemEntityType.notFound);
        expect(missing.size, -1);
        expect(missing.mode, 0);
        expect(missing.modeString(), '---------');
        for (final time in [
          missing.changed,
          missing.modified,
          missing.accessed,
        ]) {
          expect(time, DateTime.fromMillisecondsSinceEpoch(0, isUtc: true));
          expect(time.isUtc, isTrue);
        }
      }
    },
  );

  test(
    'descriptor writes truncate, append, flush and preserve ranged reads',
    () async {
      final file = files.file(p.join(sandbox.homePath, 'modes'));
      await file.writeAsString('long initial value', flush: true);
      file.writeAsStringSync('short', mode: FileMode.writeOnly, flush: true);
      expect(await file.readAsString(), 'short');
      await file.writeAsString('+one', mode: FileMode.append, flush: true);
      file.writeAsStringSync(
        '+two',
        mode: FileMode.writeOnlyAppend,
        flush: true,
      );
      expect(file.readAsStringSync(), 'short+one+two');
      expect(
        await file.openRead(5, 9).expand((chunk) => chunk).toList(),
        utf8.encode('+one'),
      );
      expect(await file.openRead(4, 4).toList(), isEmpty);
      expect(await file.openRead(100).toList(), isEmpty);
      expect(await file.openRead(0x7fffffffffffffff).toList(), isEmpty);
      expect(() => file.openRead(-1), throwsRangeError);
      expect(() => file.openRead(9, 5), throwsRangeError);
      await file.writeAsBytes([], flush: true);
      expect(file.lengthSync(), 0);
      expect(await file.readAsBytes(), isEmpty);
      await file.writeAsBytes([-1, 256, 257]);
      expect(file.readAsBytesSync(), [255, 0, 1]);
      expect(
        () => file.writeAsBytes([2], mode: FileMode.read),
        throwsArgumentError,
      );
      expect(file.readAsBytesSync(), [255, 0, 1]);
    },
  );

  test(
    'an active ranged read retains its file through replacement and unlink',
    () async {
      final file = files.file(p.join(sandbox.homePath, 'pinned'));
      final original = List.generate(256 * 1024, (index) => index % 251);
      file.writeAsBytesSync(original);
      final first = Completer<void>(), done = Completer<void>();
      final received = <int>[];
      late StreamSubscription<List<int>> subscription;
      subscription = file
          .openRead(17, original.length - 13)
          .listen(
            (bytes) {
              received.addAll(bytes);
              if (!first.isCompleted) {
                subscription.pause();
                first.complete();
              }
            },
            onError: (Object error, StackTrace stack) =>
                done.completeError(error, stack),
            onDone: done.complete,
          );
      try {
        await first.future;
        final pausedLength = received.length;
        final moved = File(file.path).renameSync('${file.path}-old');
        File(file.path).writeAsStringSync('replacement');
        moved.deleteSync();
        await Future<void>.delayed(Duration.zero);
        expect(received.length, pausedLength);
        subscription.resume();
        await done.future;
        expect(received, original.sublist(17, original.length - 13));
        expect(await file.readAsString(), 'replacement');
      } finally {
        await subscription.cancel();
      }
    },
  );

  test('only application absolute paths are accepted', () {
    for (final path in [
      'note.txt',
      '../note.txt',
      p.join(sandbox.homePath, '..', 'secret'),
      '${sandbox.homePath}-other/note',
    ]) {
      expect(() => files.file(path), throwsA(isA<FlaxSandboxException>()));
    }
    expect(
      files.file(p.join(sandbox.homePath, 'draft', '..', 'note')).path,
      p.join(sandbox.homePath, 'note'),
    );
  });

  test(
    'final and parent symlinks cannot read or overwrite host files',
    () async {
      final outside = await File(p.join(scratch.path, 'secret'))
          .writeAsString('host secret');
      final link = Link(p.join(sandbox.homePath, 'escape'));
      await link.create(outside.path);
      expect(
        files.file(link.path).readAsString(),
        throwsA(isA<FlaxSandboxException>()),
      );
      expect(
        files.file(link.path).writeAsString('overwritten'),
        throwsA(isA<FlaxSandboxException>()),
      );
      await Link(p.join(sandbox.homePath, 'parent')).create(scratch.path);
      expect(
        files.file(p.join(sandbox.homePath, 'parent', 'secret')).readAsString(),
        throwsA(isA<FlaxSandboxException>()),
      );
      expect(await outside.readAsString(), 'host secret');
      expect(
        await files.type(link.path, followLinks: false),
        FileSystemEntityType.link,
      );
    },
  );

  test(
    'directory creation and lazy enumeration preserve resource ownership',
    () async {
      final directory = files.directory(p.join(sandbox.homePath, 'nested'));
      await directory.create(recursive: true);
      await files.file(p.join(directory.path, 'value')).writeAsString('one');
      final children = await directory.list(recursive: true).toList();
      expect(children, hasLength(1));
      expect(
        files.requireFile(scope, children.single as File),
        same(children.single),
      );
      final temporary = await directory.createTemp('tmp-');
      expect(p.isWithin(directory.path, temporary.path), isTrue);
      expect(files.requireDirectory(scope, temporary), same(temporary));
    },
  );

  test(
    'copy and rename check destination and root mutation is forbidden',
    () async {
      final original = files.file(p.join(sandbox.homePath, 'source'));
      await original.writeAsString('value');
      expect(
        original.copy(p.join(scratch.path, 'host-copy')),
        throwsA(isA<FlaxSandboxException>()),
      );
      expect(
        original.rename(p.join(scratch.path, 'host-rename')),
        throwsA(isA<FlaxSandboxException>()),
      );
      final copy = await original.copy(p.join(sandbox.homePath, 'copy'));
      expect(copy, isA<FlaxSandboxFile>());
      expect(await copy.readAsString(), 'value');
      final renamed = await copy.rename(p.join(sandbox.homePath, 'renamed'));
      expect(await files.areIdentical(original.path, renamed.path), isFalse);
      expect(await files.areIdentical(renamed.path, renamed.path), isTrue);
      expect(
        files.directory(sandbox.homePath).delete(recursive: true),
        throwsA(isA<FlaxSandboxException>()),
      );
      expect(
        files
            .directory(sandbox.homePath)
            .rename(p.join(sandbox.homePath, 'moved')),
        throwsA(isA<FlaxSandboxException>()),
      );
      final linkedTree = Directory(p.join(sandbox.homePath, 'linked-tree'))
        ..createSync();
      Link(p.join(linkedTree.path, 'host')).createSync(scratch.path);
      expect(
        files
            .directory(linkedTree.path)
            .rename(p.join(sandbox.homePath, 'local_storage')),
        throwsA(isA<FlaxSandboxException>()),
      );
    },
  );

  test(
    'async listing yields to the event loop before its first entry',
    () async {
      final directory = files.directory(p.join(sandbox.homePath, 'many'));
      directory.createSync();
      for (var i = 0; i < 128; i++) {
        File(p.join(directory.path, '$i')).writeAsStringSync('value');
      }
      var timerRan = false;
      final timer = Timer(Duration.zero, () => timerRan = true);
      try {
        final first = await directory.list().first;
        expect(timerRan, isTrue);
        expect(files.requireFile(scope, first as File), same(first));
      } finally {
        timer.cancel();
      }
      var listed = 0;
      int? entriesAtTimer;
      Timer? duringListing;
      try {
        await for (final _ in directory.list()) {
          if (++listed == 1) {
            duringListing = Timer(Duration.zero, () => entriesAtTimer = listed);
          }
        }
        expect(listed, 128);
        expect(entriesAtTimer, isNotNull);
        expect(entriesAtTimer, lessThan(listed));
      } finally {
        duringListing?.cancel();
      }
    },
  );

  test('recursive listing checks entries only when consumed', () async {
    final directory = files.directory(p.join(sandbox.homePath, 'tree'));
    final nested = files.directory(p.join(directory.path, 'nested'));
    nested.createSync(recursive: true);
    Link(p.join(nested.path, 'host')).createSync(scratch.path);

    final first = await directory.list(recursive: true).first;
    expect(first.path, nested.path);
    expect(files.requireDirectory(scope, first as Directory), same(first));
    await expectLater(
      directory.list(recursive: true).toList(),
      throwsA(isA<FlaxSandboxException>()),
    );
  });

  test(
    'async directory rename yields and preserves restricted results',
    () async {
      final directory = files.directory(p.join(sandbox.homePath, 'tree'));
      directory.createSync();
      for (var i = 0; i < 128; i++) {
        File(p.join(directory.path, '$i')).writeAsStringSync('value');
      }
      var timerRan = false;
      final timer = Timer(Duration.zero, () => timerRan = true);
      try {
        final moved = await directory.rename('${directory.path}-moved');
        expect(timerRan, isTrue);
        expect(files.requireDirectory(scope, moved), same(moved));
        expect(await directory.exists(), isFalse);
        expect(
          await files.file(p.join(moved.path, '127')).readAsString(),
          'value',
        );
        final restored = moved.renameSync(directory.path);
        expect(files.requireDirectory(scope, restored), same(restored));
      } finally {
        timer.cancel();
      }
    },
  );

  test(
    'resource from another session and raw host files are rejected',
    () async {
      final otherScope = _Scope();
      final other = FlaxFilePolicy(sandbox, otherScope);
      try {
        final file = files.file(p.join(sandbox.homePath, 'shared'));
        await file.writeAsString('shared data');
        expect(
          () => other.requireFile(otherScope, file),
          throwsA(isA<FlaxSandboxException>()),
        );
        expect(
          () => files.requireFile(scope, File(file.path)),
          throwsA(isA<FlaxSandboxException>()),
        );
        scope.isActive = false;
        await files.close();
        expect(await other.file(file.path).readAsString(), 'shared data');
        expect(file.readAsString(), throwsStateError);
      } finally {
        otherScope.isActive = false;
        await other.close();
      }
    },
  );

  test(
    'a replaced directory cannot redirect a lazy read outside the root',
    () async {
      final directory = Directory(p.join(sandbox.homePath, 'swap'))
        ..createSync();
      File(p.join(directory.path, 'value')).writeAsStringSync('application');
      final file = files.file(p.join(directory.path, 'value'));
      final stream = file.openRead();
      final entries = files.directory(directory.path).list();
      directory.renameSync('${directory.path}-old');
      File(p.join(scratch.path, 'value')).writeAsStringSync('host');
      Link(directory.path).createSync(scratch.path);
      expect(stream.toList(), throwsA(isA<FlaxSandboxException>()));
      expect(entries.toList(), throwsA(isA<FlaxSandboxException>()));
    },
  );

  test(
    'closing a session cancels paused readers without waiting for JS',
    () async {
      final file = files.file(p.join(sandbox.homePath, 'large'));
      await file.writeAsBytes(List.filled(256 * 1024, 1));
      final received = Completer<void>();
      late StreamSubscription<List<int>> subscription;
      subscription = file.openRead().listen((_) {
        subscription.pause();
        if (!received.isCompleted) received.complete();
      });
      await received.future;
      scope.isActive = false;
      await files.close().timeout(const Duration(seconds: 2));
      await subscription.cancel();
    },
  );

  test(
    'explicit close drains a read when a later microtask pauses it',
    () async {
      final file = files.file(p.join(sandbox.homePath, 'late-pause'));
      file.writeAsBytesSync(List.filled(256 * 1024, 1));
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
            // Async data delivery lets the producer admit its next read first.
            // close's empty selected-file wait resumes before this later pause.
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
        expect(scope.isActive, isTrue);
        expect(chunks, 1);
        expect(errors, isEmpty);
      } finally {
        // Also release the old implementation's stuck waiter after a timeout.
        subscription.resume();
        await subscription.cancel();
        await closing;
      }
    },
  );

  test('closing cancels paused directory enumeration', () async {
    for (var i = 0; i < 128; i++) {
      File(p.join(sandbox.homePath, '$i')).writeAsStringSync('value');
    }
    final received = Completer<void>();
    late StreamSubscription<FileSystemEntity> subscription;
    subscription = files.directory(sandbox.homePath).list().listen((_) {
      subscription.pause();
      if (!received.isCompleted) received.complete();
    });
    try {
      await received.future;
      scope.isActive = false;
      await files.close().timeout(const Duration(seconds: 2));
    } finally {
      await subscription.cancel();
    }
  });
}
