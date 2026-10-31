part of 'file_system.dart';

/// Host-only backend for exactly the resource returned by a trusted picker.
/// Native URI/security-scope providers implement this without inventing a path.
abstract class FlaxDocumentBackend {
  String get name;
  Future<int> length();
  Future<bool> exists();
  Future<Uint8List> read(int offset, int count);
  Future<void> write(
    List<int> bytes, {
    required FileMode mode,
    required bool flush,
  });
  Future<FileStat> stat() =>
      Future.error(UnsupportedError('Document metadata is unavailable'));

  /// Stop new work, cancel or drain native IO, then release retained access.
  Future<void> close();
}

/// Pins a selected local file before issuing a grant. No later path lookup is used.
final class FlaxLocalDocumentBackend extends FlaxDocumentBackend {
  FlaxLocalDocumentBackend._(
    this._descriptor,
    this._file,
    this.name,
    this._writable,
  );
  final int _descriptor;
  final RandomAccessFile _file;
  final bool _writable;
  @override
  final String name;
  Future<void> _queue = Future.value();
  Future<void>? _closing;

  /// [protectedPaths] includes host-specific secret stores not known to Core.
  static Future<FlaxLocalDocumentBackend> open(
    File file, {
    bool writable = false,
    Iterable<String> protectedPaths = const [],
  }) async {
    final support = p.normalize(
      (await getApplicationSupportDirectory()).absolute.path,
    );
    final roots = <String>[support];
    if (Platform.isAndroid) {
      roots.add(p.dirname(support));
    } else if (Platform.isMacOS || Platform.isIOS) {
      final marker = support.indexOf('/Library/Application Support');
      if (marker >= 0) {
        final container = support.substring(0, marker);
        roots.add(
          Platform.isIOS ||
                  container.contains('/Library/Containers/') ||
                  container.contains('/Library/Group Containers/')
              ? container
              : p.join(container, 'Library'),
        );
      }
    }
    for (final root in protectedPaths) {
      if (!p.isAbsolute(root)) {
        throw ArgumentError('Protected document roots must be absolute');
      }
      roots.add(await File(root).resolveSymbolicLinks());
    }
    for (var index = 0; index < roots.length; index++) {
      final root = roots[index];
      if (FileSystemEntity.typeSync(root) != FileSystemEntityType.notFound) {
        roots[index] = await File(root).resolveSymbolicLinks();
      }
    }
    final descriptor = _posix.open(file.absolute.path, writable ? 2 : 0);
    try {
      final actual = _posix.pathOf(descriptor);
      if (FlaxSandbox.isManagedPath(actual) ||
          roots.any(
            (root) => p.equals(root, actual) || p.isWithin(root, actual),
          ) ||
          roots.any(
            (root) =>
                FileSystemEntity.typeSync(root) == FileSystemEntityType.file &&
                _posix.isSameFile(descriptor, root),
          )) {
        _deny('documents.open', 'Host-managed records cannot be selected');
      }
      final stat = File(_fdPath(descriptor)).statSync();
      if (stat.type != FileSystemEntityType.file ||
          (stat.mode & 0xf000) != 0x8000) {
        _deny('documents.open', 'Select a regular file');
      }
      final handle = await File(_fdPath(descriptor))
          .open(mode: writable ? FileMode.append : FileMode.read);
      return FlaxLocalDocumentBackend._(
        descriptor,
        handle,
        p.basename(actual),
        writable,
      );
    } catch (_) {
      _posix.close(descriptor);
      rethrow;
    }
  }

  Future<T> _run<T>(Future<T> Function() action) {
    if (_closing != null) {
      return Future.error(StateError('Closed document backend'));
    }
    final result = _queue.then((_) => action());
    _queue = result.then<void>((_) {}, onError: (Object _) {});
    return result;
  }

  @override
  Future<int> length() => _run(_file.length);
  @override
  Future<bool> exists() => _run(() async {
    await _file.length();
    return true;
  });
  @override
  Future<FileStat> stat() => _run(() => File(_fdPath(_descriptor)).stat());
  @override
  Future<Uint8List> read(int offset, int count) => _run(() async {
    await _file.setPosition(offset);
    return _file.read(count);
  });
  @override
  Future<void> write(
    List<int> bytes, {
    required FileMode mode,
    required bool flush,
  }) {
    if (!_writable) {
      return Future.error(UnsupportedError('Read-only document backend'));
    }
    if (mode != FileMode.write && mode != FileMode.append) {
      return Future.error(
        UnsupportedError('Document write mode is unsupported'),
      );
    }
    return _run(() async {
      if (mode == FileMode.write) await _file.truncate(0);
      await _file.setPosition(
        mode == FileMode.append ? await _file.length() : 0,
      );
      await _file.writeFrom(bytes);
      if (flush) await _file.flush();
    });
  }

  @override
  Future<void> close() => _closing ??= () async {
    await _queue;
    try {
      await _file.close();
    } finally {
      _posix.close(_descriptor);
    }
  }();
}

/// A File-compatible, Session-bound resource. Its path is an opaque cache identity.
final class FlaxSelectedFile implements File {
  FlaxSelectedFile._(
    this._source,
    this._permission,
    this._policy,
    this._writable,
  ) : path =
          'flax-document://${_randomName()}/${Uri.encodeComponent(_source.name)}' {
    _policy?._selectedFiles.add(this);
    _permission.onRevoke(() => _close().ignore());
  }

  static FlaxSelectedFile grant({
    required FlaxDocumentBackend source,
    required FlaxPermissionLease permission,
    FlaxFilePolicy? files,
    bool writable = false,
  }) {
    permission.requireActive();
    if (permission.permission != 'flax.documents.open' ||
        writable && (permission.scope as Map)['mode'] != 'readWrite' ||
        files != null &&
            (files.permissions == null ||
                !permission.belongsTo(files.permissions!))) {
      throw const FlaxPermissionException(
        permission: 'flax.documents.open',
        operation: 'documents.open',
        reason: 'foreignOrInsufficientGrant',
      );
    }
    return FlaxSelectedFile._(source, permission, files, writable);
  }

  final FlaxDocumentBackend _source;
  final FlaxPermissionLease _permission;
  final FlaxFilePolicy? _policy;
  final bool _writable;
  final _changes = <void Function()>{};
  final _streams = <Future<void> Function()>{};
  final _pending = <Future<void>>{};
  int _imageRevision = 0;
  Future<void>? _closing;
  @override
  final String path;
  FlaxPermissionLease get permission => _permission;
  int get imageRevision => _imageRevision;
  void requireActive() {
    _permission.requireActive();
    _policy?.scope.requireActive();
    if (_closing != null) throw StateError('Closed document');
  }

  void Function() onChanged(void Function() callback) {
    requireActive();
    _changes.add(callback);
    return () => _changes.remove(callback);
  }

  Future<T> _work<T>(Future<T> Function() action) {
    final future = _permission
        .guardFuture(() {
          requireActive();
          return action();
        })
        .then((value) {
          requireActive();
          return value;
        });
    final tracked = future.then<void>((_) {}, onError: (Object _) {});
    _pending.add(tracked);
    unawaited(tracked.whenComplete(() => _pending.remove(tracked)));
    return future;
  }

  Future<void> _close() => _closing ??= () async {
    await Future.wait(_streams.toList().map((cancel) => cancel()));
    await Future.wait(_pending.toList());
    try {
      await _source.close();
    } finally {
      _policy?._selectedFiles.remove(this);
      _permission.close();
      _changes.clear();
    }
  }();

  @override
  bool get isAbsolute => true;
  @override
  Uri get uri => Uri.parse(path);
  @override
  File get absolute {
    requireActive();
    return this;
  }

  @override
  Directory get parent =>
      _deny('File.parent', 'A document grant has no directory access');
  @override
  Future<int> length() => _work(_source.length);
  @override
  Future<bool> exists() => _work(_source.exists);
  @override
  Future<FileStat> stat() => _work(_source.stat);
  @override
  Future<DateTime> lastAccessed() => stat().then((value) => value.accessed);
  @override
  Future<DateTime> lastModified() => stat().then((value) => value.modified);

  @override
  Stream<List<int>> openRead([int? start, int? end]) {
    final offset = start ?? 0;
    if (offset < 0 || end != null && end < offset) {
      throw RangeError('Invalid read interval');
    }
    final done = Completer<void>();
    Completer<void>? resumed;
    var stopped = false;
    late StreamController<List<int>> controller;
    Future<void> stop() async {
      stopped = true;
      if (resumed case final waiting?) {
        resumed = null;
        waiting.complete();
      }
      if (!controller.isClosed) unawaited(controller.close());
      await done.future;
    }

    Future<void> read() async {
      var position = offset;
      try {
        while (!stopped && (end == null || position < end)) {
          if (resumed case final waiting?) await waiting.future;
          if (stopped) break;
          requireActive();
          final count = end == null ? 65536 : min(65536, end - position);
          final bytes = await _work(() => _source.read(position, count));
          if (stopped) break;
          if (bytes.length > count) {
            throw StateError('Document backend exceeded requested range');
          }
          if (bytes.isEmpty) break;
          position += bytes.length;
          controller.add(bytes);
        }
      } catch (error, stack) {
        if (!stopped) controller.addError(error, stack);
      } finally {
        _streams.remove(stop);
        if (!controller.isClosed) unawaited(controller.close());
        done.complete();
      }
    }

    controller = StreamController<List<int>>(
      onListen: () {
        _streams.add(stop);
        unawaited(read());
      },
      onPause: () => resumed ??= Completer<void>(),
      onResume: () {
        final waiting = resumed;
        resumed = null;
        waiting?.complete();
      },
      onCancel: stop,
    );
    return _permission.guardStream(
      () => controller.stream
          .map((bytes) {
            requireActive();
            return bytes;
          })
          .handleError((Object error, StackTrace stack) {
            requireActive();
            Error.throwWithStackTrace(error, stack);
          }),
    );
  }

  @override
  Future<Uint8List> readAsBytes() async {
    final bytes = BytesBuilder(copy: false);
    await for (final chunk in openRead()) {
      bytes.add(chunk);
    }
    requireActive();
    return bytes.takeBytes();
  }

  @override
  Future<String> readAsString({Encoding encoding = utf8}) =>
      readAsBytes().then(encoding.decode);
  @override
  Future<List<String>> readAsLines({Encoding encoding = utf8}) =>
      readAsString(encoding: encoding).then(const LineSplitter().convert);
  @override
  Future<File> writeAsBytes(
    List<int> bytes, {
    FileMode mode = FileMode.write,
    bool flush = false,
  }) => _work(() async {
    if (!_writable) {
      throw const FlaxPermissionException(
        permission: 'flax.documents.open',
        operation: 'File.writeAsBytes',
        reason: 'readOnly',
      );
    }
    await _source.write(bytes, mode: mode, flush: flush);
    requireActive();
    _imageRevision++;
    for (final callback in _changes.toList()) {
      callback();
    }
    return this;
  });
  @override
  Future<File> writeAsString(
    String contents, {
    FileMode mode = FileMode.write,
    Encoding encoding = utf8,
    bool flush = false,
  }) => writeAsBytes(encoding.encode(contents), mode: mode, flush: flush);
  @override
  Future<File> copy(String newPath) => _work(() async {
    final policy = _policy;
    if (policy == null) {
      throw UnsupportedError('Document copy requires a sandbox data directory');
    }
    final destination = policy.file(newPath);
    await policy._fileAsync(destination.path, _writeFlags(FileMode.write), (
      file,
    ) async {
      final handle = await file.open(mode: FileMode.write);
      try {
        await for (final bytes in openRead()) {
          policy.scope.requireActive();
          requireActive();
          await handle.writeFrom(bytes);
        }
        await handle.flush();
      } finally {
        await handle.close();
      }
    });
    return destination;
  });

  FlaxSandboxException _blocked(String operation) => FlaxSandboxException(
    operation: operation,
    message: 'This operation is unavailable for a selected document',
  );
  @override
  Future<File> create({bool recursive = false, bool exclusive = false}) =>
      Future.error(_blocked('File.create'));
  @override
  Future<File> delete({bool recursive = false}) =>
      Future.error(_blocked('File.delete'));
  @override
  Future<File> rename(String newPath) => Future.error(_blocked('File.rename'));
  @override
  Future<void> setLastAccessed(DateTime time) =>
      Future.error(_blocked('File.setLastAccessed'));
  @override
  Future<void> setLastModified(DateTime time) =>
      Future.error(_blocked('File.setLastModified'));
  @override
  Future<String> resolveSymbolicLinks() =>
      Future.error(_blocked('File.resolveSymbolicLinks'));
  @override
  Future<RandomAccessFile> open({FileMode mode = FileMode.read}) =>
      Future.error(_blocked('File.open'));
  @override
  IOSink openWrite({
    FileMode mode = FileMode.write,
    Encoding encoding = utf8,
  }) => throw _blocked('File.openWrite');
  @override
  Stream<FileSystemEvent> watch({
    int events = FileSystemEvent.all,
    bool recursive = false,
  }) => Stream.error(_blocked('File.watch'));
  @override
  Never noSuchMethod(Invocation invocation) =>
      throw _blocked('File.unsupported');
}
