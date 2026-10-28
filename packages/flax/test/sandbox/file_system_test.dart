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
    scratch = await Directory(Platform.environment['TMPDIR']!)
        .createTemp('flax-sandbox-');
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
