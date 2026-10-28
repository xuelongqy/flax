import 'dart:async';
import 'dart:convert';
import 'dart:ffi';
import 'dart:io';
import 'dart:math';
import 'dart:typed_data';

import 'package:ffi/ffi.dart';
import 'package:path/path.dart' as p;

import 'sandbox.dart';

/// Session-owned rooted filesystem. No untrusted absolute path reaches Dart IO.
final class FlaxFilePolicy {
  FlaxFilePolicy(FlaxSandbox sandbox, FlaxSandboxScope scope)
    : this._(sandbox.homePath, scope);
  FlaxFilePolicy._(this.homePath, this.scope) {
    _root = _posix.open(homePath, _posix.directoryFlags);
    try {
      final actual = _posix.pathOf(_root);
      if (!p.equals(actual, homePath)) {
        _deny('sandbox.open', 'Sandbox root changed');
      }
      if (File(_fdPath(_root)).statSync().type !=
          FileSystemEntityType.directory) {
        throw UnsupportedError(
          'The platform does not provide rooted file descriptor IO',
        );
      }
    } catch (_) {
      _posix.close(_root);
      rethrow;
    }
  }

  final String homePath;
  final FlaxSandboxScope scope;
  late final int _root;
  final _pending = <Future<void>>{};
  final _streams = <Future<void> Function()>{};
  Future<void>? _closing;

  String checkPath(String input) {
    scope.requireActive();
    if (_closing != null) throw StateError('Closed sandbox filesystem');
    if (!p.isAbsolute(input) || input.contains('\u0000')) {
      _deny('File', 'Expected an absolute application path');
    }
    final normalized = p.normalize(input);
    if (!p.equals(normalized, homePath) && !p.isWithin(homePath, normalized)) {
      _deny('File', 'Path is outside the application home');
    }
    return normalized;
  }

  FlaxSandboxFile file(String path) => FlaxSandboxFile._(this, checkPath(path));
  FlaxSandboxDirectory directory(String path) =>
      FlaxSandboxDirectory._(this, checkPath(path));

  FlaxSandboxFile requireFile(FlaxSandboxScope caller, File value) {
    scope.requireActive();
    if (value is! FlaxSandboxFile ||
        !identical(caller, scope) ||
        !identical(value._policy, this)) {
      _deny('File', 'File does not belong to this session');
    }
    return value;
  }

  FlaxSandboxDirectory requireDirectory(
    FlaxSandboxScope caller,
    Directory value,
  ) {
    scope.requireActive();
    if (value is! FlaxSandboxDirectory ||
        !identical(caller, scope) ||
        !identical(value._policy, this)) {
      _deny('Directory', 'Directory does not belong to this session');
    }
    return value;
  }

  Future<void> close() => _closing ??= () async {
    await Future.wait(List.of(_streams).map((cancel) => cancel()));
    await Future.wait(List.of(_pending));
    _posix.close(_root);
  }();

  Stream<List<int>> _readStream(String path, int? start, int? end) {
    StreamSubscription<List<int>>? source;
    int? descriptor;
    Future<void>? stopping;
    late StreamController<List<int>> controller;
    late Future<void> Function() stop;
    stop = () => stopping ??= () async {
      _streams.remove(stop);
      await source?.cancel();
      if (descriptor case final fd?) {
        _posix.close(fd);
        descriptor = null;
      }
      if (!controller.isClosed) unawaited(controller.close());
    }();
    controller = StreamController<List<int>>(
      onListen: () {
        try {
          descriptor = _open(path, 0);
          if (File(_fdPath(descriptor!)).statSync().type !=
              FileSystemEntityType.file) {
            _deny('File.openRead', 'Expected a regular file');
          }
          _streams.add(stop);
          source = File(_fdPath(descriptor!))
              .openRead(start, end)
              .listen(
                (bytes) {
                  if (scope.isActive && _closing == null) {
                    controller.add(bytes);
                  } else {
                    unawaited(stop());
                  }
                },
                onError: (Object error, StackTrace stack) {
                  controller.addError(error, stack);
                  unawaited(stop());
                },
                onDone: () => unawaited(stop()),
              );
        } catch (error, stack) {
          controller.addError(error, stack);
          unawaited(stop());
        }
      },
      onPause: () => source?.pause(),
      onResume: () => source?.resume(),
      onCancel: stop,
    );
    return controller.stream;
  }

  List<String> _parts(String path) {
    final checked = checkPath(path);
    return p.equals(checked, homePath)
        ? const []
        : p.split(p.relative(checked, from: homePath));
  }

  int _openDirectory(List<String> parts, {bool create = false}) {
    var fd = _posix.dup(_root);
    try {
      for (final part in parts) {
        int next;
        try {
          next = _posix.openAt(fd, part, _posix.directoryFlags);
        } on FileSystemException catch (error) {
          if (!create || error.osError?.errorCode != 2) rethrow;
          try {
            _posix.mkdir(fd, part);
          } on FileSystemException catch (error) {
            if (error.osError?.errorCode != 17) rethrow;
          }
          next = _posix.openAt(fd, part, _posix.directoryFlags);
        }
        _posix.close(fd);
        fd = next;
      }
      return fd;
    } catch (_) {
      _posix.close(fd);
      rethrow;
    }
  }

  (int, String) _parent(String path, {bool create = false}) {
    final parts = _parts(path);
    if (parts.isEmpty) {
      _deny('Directory', 'The application root cannot be changed');
    }
    return (
      _openDirectory(parts.sublist(0, parts.length - 1), create: create),
      parts.last,
    );
  }

  int _open(String path, int flags, {bool recursive = false}) {
    final parts = _parts(path);
    if (parts.isEmpty) return _posix.dup(_root);
    final (parent, leaf) = _parent(path, create: recursive);
    try {
      return _posix.openAt(parent, leaf, flags);
    } finally {
      _posix.close(parent);
    }
  }

  T _fileSync<T>(
    String path,
    int flags,
    T Function(File) action, {
    bool directory = false,
  }) {
    final fd = _open(path, flags);
    try {
      final file = File(_fdPath(fd));
      final type = file.statSync().type;
      if (type != FileSystemEntityType.file &&
          !(directory && type == FileSystemEntityType.directory)) {
        throw FileSystemException('Not a regular application file', path);
      }
      return action(file);
    } finally {
      _posix.close(fd);
    }
  }

  Future<T> _fileAsync<T>(
    String path,
    int flags,
    Future<T> Function(File) action, {
    bool directory = false,
  }) {
    try {
      final fd = _open(path, flags);
      late final Future<T> work;
      try {
        final file = File(_fdPath(fd));
        final type = file.statSync().type;
        if (type != FileSystemEntityType.file &&
            !(directory && type == FileSystemEntityType.directory)) {
          throw FileSystemException('Not a regular application file', path);
        }
        work = action(file).whenComplete(() => _posix.close(fd));
      } catch (_) {
        _posix.close(fd);
        rethrow;
      }
      return _track(work);
    } catch (error, stack) {
      return Future<T>.error(error, stack);
    }
  }

  Future<T> _track<T>(Future<T> work) {
    late Future<void> settled;
    settled = work
        .then<void>((_) {}, onError: (Object _, StackTrace _) {})
        .whenComplete(() => _pending.remove(settled));
    _pending.add(settled);
    return work.then((value) {
      scope.requireActive();
      return value;
    });
  }

  FileStat statSync(String path) {
    try {
      return _fileSync(path, 0, (file) => file.statSync(), directory: true);
    } on FileSystemException catch (error) {
      if (error.osError?.errorCode == 2 || error.osError?.errorCode == 20) {
        return FileStat.statSync(_fdPath(-1));
      }
      rethrow;
    }
  }

  Future<FileStat> stat(String path) => Future.sync(() => statSync(path));

  FileSystemEntityType typeSync(String path, {bool followLinks = true}) {
    final parts = _parts(path);
    if (parts.isEmpty) return FileSystemEntityType.directory;
    try {
      final (parent, leaf) = _parent(path);
      try {
        if (_posix.isLink(parent, leaf)) {
          if (followLinks) {
            _deny('FileSystemEntity.type', 'Symbolic links are not supported');
          }
          return FileSystemEntityType.link;
        }
        final fd = _posix.openAt(parent, leaf, 0);
        try {
          return File(_fdPath(fd)).statSync().type;
        } finally {
          _posix.close(fd);
        }
      } finally {
        _posix.close(parent);
      }
    } on FileSystemException catch (error) {
      if (error.osError?.errorCode == 2 || error.osError?.errorCode == 20) {
        return FileSystemEntityType.notFound;
      }
      rethrow;
    }
  }

  Future<FileSystemEntityType> type(String path, {bool followLinks = true}) =>
      Future.sync(() => typeSync(path, followLinks: followLinks));

  bool areIdenticalSync(String a, String b) => _fileSync(
    a,
    0,
    (first) => _fileSync(
      b,
      0,
      (second) => FileSystemEntity.identicalSync(first.path, second.path),
      directory: true,
    ),
    directory: true,
  );
  Future<bool> areIdentical(String a, String b) =>
      Future.sync(() => areIdenticalSync(a, b));

  void _createFile(
    String path, {
    bool recursive = false,
    bool exclusive = false,
  }) {
    final fd = _open(
      path,
      _posix.createFlag | (exclusive ? _posix.exclusiveFlag : 0),
      recursive: recursive,
    );
    try {
      if (File(_fdPath(fd)).statSync().type != FileSystemEntityType.file) {
        throw FileSystemException('Not a regular application file', path);
      }
    } finally {
      _posix.close(fd);
    }
  }

  void _createDirectory(String path, {bool recursive = false}) {
    final parts = _parts(path);
    if (recursive || parts.isEmpty) {
      _posix.close(_openDirectory(parts, create: true));
      return;
    }
    final (parent, leaf) = _parent(path);
    try {
      try {
        _posix.mkdir(parent, leaf);
      } on FileSystemException catch (error) {
        if (error.osError?.errorCode != 17) rethrow;
        final fd = _posix.openAt(parent, leaf, _posix.directoryFlags);
        _posix.close(fd);
      }
    } finally {
      _posix.close(parent);
    }
  }

  void _delete(
    String path, {
    required bool recursive,
    required bool directory,
  }) {
    final (parent, leaf) = _parent(path);
    try {
      if (typeSync(path, followLinks: false) == FileSystemEntityType.link) {
        _deny('File.delete', 'Symbolic links are not supported');
      }
      if (directory && recursive) {
        final fd = _posix.openAt(parent, leaf, _posix.directoryFlags);
        try {
          _deleteChildren(fd);
        } finally {
          _posix.close(fd);
        }
      }
      _posix.unlink(parent, leaf, directory);
    } finally {
      _posix.close(parent);
    }
  }

  void _deleteChildren(int directory) {
    scope.requireActive();
    for (final name in _posix.names(directory)) {
      if (_posix.isLink(directory, name)) {
        _deny('Directory.delete', 'Symbolic links are not supported');
      }
      final fd = _posix.openAt(directory, name, 0);
      try {
        final isDirectory =
            File(_fdPath(fd)).statSync().type == FileSystemEntityType.directory;
        if (isDirectory) _deleteChildren(fd);
        _posix.unlink(directory, name, isDirectory);
      } finally {
        _posix.close(fd);
      }
    }
  }

  String _rename(
    String source,
    String destination, {
    bool checkContents = true,
  }) {
    checkPath(destination);
    final (a, nameA) = _parent(source);
    try {
      final (b, nameB) = _parent(destination);
      try {
        // A moved tree must not introduce links into native storage directories.
        final sourceType = typeSync(source);
        if (checkContents && sourceType == FileSystemEntityType.directory) {
          _list(source, true);
        }
        typeSync(destination);
        _posix.rename(a, nameA, b, nameB);
        return checkPath(destination);
      } finally {
        _posix.close(b);
      }
    } finally {
      _posix.close(a);
    }
  }

  Future<String> _renameAsync(String source, String destination) async {
    checkPath(destination);
    if (p.equals(checkPath(source), homePath)) {
      _deny('Directory', 'The application root cannot be changed');
    }
    if (typeSync(source) == FileSystemEntityType.directory) {
      await _streamList(source, true).drain<void>();
    }
    // Contents are validated asynchronously; recheck both endpoints before moving.
    return _rename(source, destination, checkContents: false);
  }

  List<FileSystemEntity> _list(String path, bool recursive) {
    final fd = _openDirectory(_parts(path));
    try {
      final result = <FileSystemEntity>[];
      for (final name in _posix.names(fd)) {
        scope.requireActive();
        if (_posix.isLink(fd, name)) {
          _deny('Directory.list', 'Symbolic links are not supported');
        }
        final child = p.join(path, name);
        final type = typeSync(child);
        if (type == FileSystemEntityType.directory) {
          result.add(directory(child));
          if (recursive) result.addAll(_list(child, true));
        } else if (type == FileSystemEntityType.file) {
          result.add(file(child));
        } else if (type != FileSystemEntityType.notFound) {
          _deny('Directory.list', 'Unsupported application file type');
        }
      }
      return result;
    } finally {
      _posix.close(fd);
    }
  }

  Stream<FileSystemEntity> _streamList(String path, bool recursive) async* {
    final fd = _openDirectory(_parts(path));
    late final Pointer<Void> listing;
    try {
      listing = _posix.openListing(fd);
    } finally {
      _posix.close(fd);
    }
    var closed = false;
    late Future<void> Function() stop;
    stop = () async {
      if (closed) return;
      closed = true;
      _posix.closeListing(listing);
      _streams.remove(stop);
    };
    _streams.add(stop);
    try {
      var count = 0;
      while (true) {
        // Darwin cannot enumerate directories through /dev/fd; bound POSIX work per turn.
        if (count++ % 32 == 0) await Future<void>.delayed(Duration.zero);
        if (closed) return;
        scope.requireActive();
        final name = _posix.nextName(listing);
        if (name == null) return;
        final child = p.join(path, name);
        final type = typeSync(child);
        if (type == FileSystemEntityType.directory) {
          yield directory(child);
          if (recursive) yield* _streamList(child, true);
        } else if (type == FileSystemEntityType.file) {
          yield file(child);
        } else if (type != FileSystemEntityType.notFound) {
          _deny('Directory.list', 'Unsupported application file type');
        }
      }
    } finally {
      await stop();
    }
  }
}

final _posix = _SandboxPosix();
String _fdPath(int fd) =>
    Platform.isMacOS || Platform.isIOS ? '/dev/fd/$fd' : '/proc/self/fd/$fd';
String _randomName() => List.generate(
  16,
  (_) => Random.secure().nextInt(256).toRadixString(16).padLeft(2, '0'),
).join();
Never _deny(String operation, String message) =>
    throw FlaxSandboxException(operation: operation, message: message);

final class _SandboxPosix {
  final _lib = DynamicLibrary.process();
  bool get _darwin => Platform.isMacOS || Platform.isIOS;
  int get directoryFlags => _darwin ? 0x100000 : 0x10000;
  int get createFlag => _darwin ? 0x200 : 0x40;
  int get exclusiveFlag => _darwin ? 0x800 : 0x80;
  late final _open = _lib
      .lookupFunction<
        Int32 Function(Pointer<Utf8>, Int32, VarArgs<(Uint32,)>),
        int Function(Pointer<Utf8>, int, int)
      >('open');
  late final _openAt = _lib
      .lookupFunction<
        Int32 Function(Int32, Pointer<Utf8>, Int32, VarArgs<(Uint32,)>),
        int Function(int, Pointer<Utf8>, int, int)
      >('openat');
  late final _dup = _lib
      .lookupFunction<Int32 Function(Int32), int Function(int)>('dup');
  late final _close = _lib
      .lookupFunction<Int32 Function(Int32), int Function(int)>('close');
  late final _mkdir = _lib
      .lookupFunction<
        Int32 Function(Int32, Pointer<Utf8>, Uint32),
        int Function(int, Pointer<Utf8>, int)
      >('mkdirat');
  late final _unlink = _lib
      .lookupFunction<
        Int32 Function(Int32, Pointer<Utf8>, Int32),
        int Function(int, Pointer<Utf8>, int)
      >('unlinkat');
  late final _rename = _lib
      .lookupFunction<
        Int32 Function(Int32, Pointer<Utf8>, Int32, Pointer<Utf8>),
        int Function(int, Pointer<Utf8>, int, Pointer<Utf8>)
      >('renameat');
  late final _errno = _lib
      .lookupFunction<Pointer<Int32> Function(), Pointer<Int32> Function()>(
        _darwin
            ? '__error'
            : Platform.isAndroid
            ? '__errno'
            : '__errno_location',
      );
  late final _fcntlPath = _lib
      .lookupFunction<
        Int32 Function(Int32, Int32, VarArgs<(Pointer<Utf8>,)>),
        int Function(int, int, Pointer<Utf8>)
      >('fcntl');
  late final _readlink = _lib
      .lookupFunction<
        IntPtr Function(Int32, Pointer<Utf8>, Pointer<Uint8>, UintPtr),
        int Function(int, Pointer<Utf8>, Pointer<Uint8>, int)
      >('readlinkat');
  late final _fdopendir = _lib
      .lookupFunction<
        Pointer<Void> Function(Int32),
        Pointer<Void> Function(int)
      >('fdopendir');
  late final _readdir = _lib
      .lookupFunction<
        Pointer<Void> Function(Pointer<Void>),
        Pointer<Void> Function(Pointer<Void>)
      >('readdir');
  late final _closedir = _lib
      .lookupFunction<
        Int32 Function(Pointer<Void>),
        int Function(Pointer<Void>)
      >('closedir');

  String pathOf(int fd) {
    if (!_darwin) return Directory(_fdPath(fd)).resolveSymbolicLinksSync();
    return using((arena) {
      final buffer = arena<Uint8>(4096).cast<Utf8>();
      _check(_fcntlPath(fd, 50, buffer), 'fcntl(F_GETPATH)');
      return buffer.toDartString();
    });
  }

  bool isLink(int fd, String name) => using((arena) {
    final result = _readlink(
      fd,
      name.toNativeUtf8(allocator: arena),
      arena<Uint8>(1),
      1,
    );
    if (result >= 0) return true;
    final error = _errno().value;
    if (error == 22 || error == 2) return false;
    throw FileSystemException(
      'readlinkat',
      name,
      OSError('POSIX operation failed', error),
    );
  });

  Pointer<Void> openListing(int fd) {
    final copy = openAt(fd, '.', directoryFlags);
    final directory = _fdopendir(copy);
    if (directory == nullptr) {
      final error = _errno().value;
      close(copy);
      throw FileSystemException(
        'fdopendir',
        '',
        OSError('POSIX operation failed', error),
      );
    }
    return directory;
  }

  String? nextName(Pointer<Void> directory) {
    while (true) {
      _errno().value = 0;
      final entry = _readdir(directory);
      if (entry == nullptr) {
        final error = _errno().value;
        if (error != 0) {
          throw FileSystemException(
            'readdir',
            '',
            OSError('POSIX operation failed', error),
          );
        }
        return null;
      }
      // Both maintained ABIs use 64-bit inode/offset fields; Darwin adds namlen.
      final name = (entry.cast<Uint8>() + (_darwin ? 21 : 19))
          .cast<Utf8>()
          .toDartString();
      if (name != '.' && name != '..') return name;
    }
  }

  void closeListing(Pointer<Void> directory) => _closedir(directory);

  List<String> names(int fd) {
    final directory = openListing(fd);
    try {
      final result = <String>[];
      for (
        var name = nextName(directory);
        name != null;
        name = nextName(directory)
      ) {
        result.add(name);
      }
      return result;
    } finally {
      closeListing(directory);
    }
  }

  int _flags(int flags) =>
      flags |
      (_darwin ? 0x100 : 0x20000) |
      (_darwin ? 0x1000000 : 0x80000) |
      (_darwin ? 4 : 0x800);
  int _check(int result, String operation, [String? path]) {
    if (result >= 0) return result;
    final error = _errno().value;
    if (error == (_darwin ? 62 : 40)) {
      _deny(operation, 'Symbolic links are not supported');
    }
    throw FileSystemException(
      operation,
      path ?? '',
      OSError('POSIX operation failed', error),
    );
  }

  int open(String path, int flags) => using(
    (arena) => _check(
      _open(path.toNativeUtf8(allocator: arena), _flags(flags), 0x1b6),
      'open',
      path,
    ),
  );
  int openAt(int fd, String name, int flags) => using((arena) {
    final result = _openAt(
      fd,
      name.toNativeUtf8(allocator: arena),
      _flags(flags),
      0x1b6,
    );
    if (result < 0) {
      final error = _errno().value;
      if (error == 20 && isLink(fd, name)) {
        _deny('openat', 'Symbolic links are not supported');
      }
      if (error == (_darwin ? 62 : 40)) {
        _deny('openat', 'Symbolic links are not supported');
      }
      throw FileSystemException(
        'openat',
        name,
        OSError('POSIX operation failed', error),
      );
    }
    return result;
  });
  int dup(int fd) => _check(_dup(fd), 'dup');
  void close(int fd) {
    _close(fd);
  }

  void mkdir(int fd, String name) => using((arena) {
    _check(
      _mkdir(fd, name.toNativeUtf8(allocator: arena), 0x1ff),
      'mkdirat',
      name,
    );
  });
  void unlink(int fd, String name, bool directory) => using((arena) {
    _check(
      _unlink(
        fd,
        name.toNativeUtf8(allocator: arena),
        directory ? (_darwin ? 0x80 : 0x200) : 0,
      ),
      'unlinkat',
      name,
    );
  });
  void rename(int a, String nameA, int b, String nameB) => using((arena) {
    _check(
      _rename(
        a,
        nameA.toNativeUtf8(allocator: arena),
        b,
        nameB.toNativeUtf8(allocator: arena),
      ),
      'renameat',
      nameA,
    );
  });
}

final class FlaxSandboxFile implements File {
  FlaxSandboxFile._(this._policy, this.path);
  final FlaxFilePolicy _policy;
  @override
  final String path;
  @override
  bool get isAbsolute => true;
  @override
  Uri get uri => Uri.file(path);
  @override
  File get absolute {
    _policy.checkPath(path);
    return this;
  }

  @override
  Directory get parent => _policy.directory(p.dirname(path));
  @override
  Future<bool> exists() =>
      _policy.type(path).then((type) => type == FileSystemEntityType.file);
  @override
  bool existsSync() => _policy.typeSync(path) == FileSystemEntityType.file;
  @override
  Future<FileStat> stat() => _policy.stat(path);
  @override
  FileStat statSync() => _policy.statSync(path);
  @override
  Future<String> resolveSymbolicLinks() =>
      Future.sync(resolveSymbolicLinksSync);
  @override
  String resolveSymbolicLinksSync() {
    if (_policy.statSync(path).type == FileSystemEntityType.notFound) {
      throw FileSystemException('File does not exist', path);
    }
    return path;
  }

  @override
  Future<File> create({bool recursive = false, bool exclusive = false}) =>
      Future.sync(() => createSync(recursive: recursive, exclusive: exclusive))
          .then((_) => this);
  @override
  void createSync({bool recursive = false, bool exclusive = false}) =>
      _policy._createFile(path, recursive: recursive, exclusive: exclusive);
  @override
  Future<File> delete({bool recursive = false}) =>
      Future.sync(() => deleteSync(recursive: recursive)).then((_) => this);
  @override
  void deleteSync({bool recursive = false}) =>
      _policy._delete(path, recursive: recursive, directory: false);
  @override
  Future<File> rename(String newPath) =>
      _policy._renameAsync(path, newPath).then(_policy.file);
  @override
  File renameSync(String newPath) =>
      _policy.file(_policy._rename(path, newPath));
  @override
  Future<File> copy(String newPath) => Future.sync(() {
    final destination = _policy.file(newPath);
    return readAsBytes().then(destination.writeAsBytes);
  });
  @override
  File copySync(String newPath) =>
      _policy.file(newPath)..writeAsBytesSync(readAsBytesSync());
  @override
  Future<int> length() => _policy._fileAsync(path, 0, (file) => file.length());
  @override
  int lengthSync() => _policy._fileSync(path, 0, (file) => file.lengthSync());
  @override
  Future<DateTime> lastAccessed() =>
      _policy._fileAsync(path, 0, (file) => file.lastAccessed());
  @override
  DateTime lastAccessedSync() => statSync().accessed;
  @override
  Future<DateTime> lastModified() =>
      _policy._fileAsync(path, 0, (file) => file.lastModified());
  @override
  DateTime lastModifiedSync() => statSync().modified;
  @override
  Future<void> setLastAccessed(DateTime time) =>
      _policy._fileAsync(path, 0, (file) => file.setLastAccessed(time));
  @override
  void setLastAccessedSync(DateTime time) =>
      _policy._fileSync(path, 0, (file) => file.setLastAccessedSync(time));
  @override
  Future<void> setLastModified(DateTime time) =>
      _policy._fileAsync(path, 0, (file) => file.setLastModified(time));
  @override
  void setLastModifiedSync(DateTime time) =>
      _policy._fileSync(path, 0, (file) => file.setLastModifiedSync(time));
  @override
  Future<Uint8List> readAsBytes() =>
      _policy._fileAsync(path, 0, (file) => file.readAsBytes());
  @override
  Uint8List readAsBytesSync() =>
      _policy._fileSync(path, 0, (file) => file.readAsBytesSync());
  @override
  Future<String> readAsString({Encoding encoding = utf8}) =>
      readAsBytes().then(encoding.decode);
  @override
  String readAsStringSync({Encoding encoding = utf8}) =>
      encoding.decode(readAsBytesSync());
  @override
  Future<List<String>> readAsLines({Encoding encoding = utf8}) =>
      readAsString(encoding: encoding).then(const LineSplitter().convert);
  @override
  List<String> readAsLinesSync({Encoding encoding = utf8}) =>
      const LineSplitter().convert(readAsStringSync(encoding: encoding));
  @override
  Stream<List<int>> openRead([int? start, int? end]) =>
      _policy._readStream(path, start, end);
  @override
  Future<File> writeAsBytes(
    List<int> bytes, {
    FileMode mode = FileMode.write,
    bool flush = false,
  }) {
    return _policy
        ._fileAsync(
          path,
          _writeFlags(mode),
          (file) => file.writeAsBytes(bytes, mode: mode, flush: flush),
        )
        .then((_) => this);
  }

  @override
  void writeAsBytesSync(
    List<int> bytes, {
    FileMode mode = FileMode.write,
    bool flush = false,
  }) => _policy._fileSync(
    path,
    _writeFlags(mode),
    (file) => file.writeAsBytesSync(bytes, mode: mode, flush: flush),
  );
  @override
  Future<File> writeAsString(
    String contents, {
    FileMode mode = FileMode.write,
    Encoding encoding = utf8,
    bool flush = false,
  }) => writeAsBytes(encoding.encode(contents), mode: mode, flush: flush);
  @override
  void writeAsStringSync(
    String contents, {
    FileMode mode = FileMode.write,
    Encoding encoding = utf8,
    bool flush = false,
  }) => writeAsBytesSync(encoding.encode(contents), mode: mode, flush: flush);
  @override
  Future<RandomAccessFile> open({FileMode mode = FileMode.read}) =>
      Future.error(
        const FlaxSandboxException(
          operation: 'File.open',
          message: 'Raw file handles are unavailable',
        ),
      );
  @override
  RandomAccessFile openSync({FileMode mode = FileMode.read}) =>
      _deny('File.openSync', 'Raw file handles are unavailable');
  @override
  IOSink openWrite({
    FileMode mode = FileMode.write,
    Encoding encoding = utf8,
  }) => _deny('File.openWrite', 'Raw file sinks are unavailable');
  @override
  Stream<FileSystemEvent> watch({
    int events = FileSystemEvent.all,
    bool recursive = false,
  }) => Stream.error(
    const FlaxSandboxException(
      operation: 'File.watch',
      message: 'File watchers are unavailable',
    ),
  );
  @override
  String toString() => "File: '$path'";
}

int _writeFlags(FileMode mode) {
  if (mode == FileMode.read) {
    throw ArgumentError.value(mode, 'mode', 'Expected a writable mode');
  }
  final append = mode == FileMode.append || mode == FileMode.writeOnlyAppend;
  final writeOnly =
      mode == FileMode.writeOnly || mode == FileMode.writeOnlyAppend;
  return (writeOnly ? 1 : 2) |
      _posix.createFlag |
      (append
          ? (Platform.isMacOS || Platform.isIOS ? 8 : 0x400)
          : (Platform.isMacOS || Platform.isIOS ? 0x400 : 0x200));
}

final class FlaxSandboxDirectory implements Directory {
  FlaxSandboxDirectory._(this._policy, this.path);
  final FlaxFilePolicy _policy;
  @override
  final String path;
  @override
  bool get isAbsolute => true;
  @override
  Uri get uri => Uri.directory(path);
  @override
  Directory get absolute {
    _policy.checkPath(path);
    return this;
  }

  @override
  Directory get parent => _policy.directory(p.dirname(path));
  @override
  Future<bool> exists() =>
      _policy.type(path).then((type) => type == FileSystemEntityType.directory);
  @override
  bool existsSync() => _policy.typeSync(path) == FileSystemEntityType.directory;
  @override
  Future<FileStat> stat() => _policy.stat(path);
  @override
  FileStat statSync() => _policy.statSync(path);
  @override
  Future<String> resolveSymbolicLinks() =>
      Future.sync(resolveSymbolicLinksSync);
  @override
  String resolveSymbolicLinksSync() {
    if (_policy.statSync(path).type == FileSystemEntityType.notFound) {
      throw FileSystemException('Directory does not exist', path);
    }
    return path;
  }

  @override
  Future<Directory> create({bool recursive = false}) =>
      Future.sync(() => createSync(recursive: recursive)).then((_) => this);
  @override
  void createSync({bool recursive = false}) =>
      _policy._createDirectory(path, recursive: recursive);
  @override
  Future<Directory> createTemp([String? prefix]) =>
      Future.sync(() => createTempSync(prefix));
  @override
  Directory createTempSync([String? prefix]) {
    for (var attempt = 0; attempt < 64; attempt++) {
      final target = _policy.checkPath(
        p.join(path, '${prefix ?? ''}${_randomName()}'),
      );
      final (parent, leaf) = _policy._parent(target);
      try {
        _posix.mkdir(parent, leaf);
        return _policy.directory(target);
      } on FileSystemException catch (error) {
        if (error.osError?.errorCode != 17) rethrow;
      } finally {
        _posix.close(parent);
      }
    }
    throw FileSystemException(
      'Could not create an exclusive temporary directory',
      path,
    );
  }

  @override
  Future<Directory> delete({bool recursive = false}) =>
      Future.sync(() => deleteSync(recursive: recursive)).then((_) => this);
  @override
  void deleteSync({bool recursive = false}) =>
      _policy._delete(path, recursive: recursive, directory: true);
  @override
  Future<Directory> rename(String newPath) =>
      _policy._renameAsync(path, newPath).then(_policy.directory);
  @override
  Directory renameSync(String newPath) =>
      _policy.directory(_policy._rename(path, newPath));
  @override
  List<FileSystemEntity> listSync({
    bool recursive = false,
    bool followLinks = true,
  }) => _policy._list(path, recursive);
  @override
  Stream<FileSystemEntity> list({
    bool recursive = false,
    bool followLinks = true,
  }) => _policy._streamList(path, recursive);
  @override
  Stream<FileSystemEvent> watch({
    int events = FileSystemEvent.all,
    bool recursive = false,
  }) => Stream.error(
    const FlaxSandboxException(
      operation: 'Directory.watch',
      message: 'File watchers are unavailable',
    ),
  );
  @override
  String toString() => "Directory: '$path'";
}

File createSandboxFile(
  FlaxSandboxContext context,
  FlaxFilePolicy policy,
  String path,
) => policy.file(path);
File createSandboxFileFromUri(
  FlaxSandboxContext context,
  FlaxFilePolicy policy,
  Uri uri,
) => policy.file(_fileUri(uri));
Directory createSandboxDirectory(
  FlaxSandboxContext context,
  FlaxFilePolicy policy,
  String path,
) => policy.directory(path);
Directory createSandboxDirectoryFromUri(
  FlaxSandboxContext context,
  FlaxFilePolicy policy,
  Uri uri,
) => policy.directory(_fileUri(uri));
String _fileUri(Uri uri) {
  if (uri.scheme != 'file' ||
      uri.host.isNotEmpty ||
      uri.hasQuery ||
      uri.hasFragment ||
      !uri.hasAbsolutePath) {
    _deny('File.fromUri', 'Expected an absolute local file URI');
  }
  return uri.toFilePath();
}

void checkSandboxFile(FlaxSandboxContext c, FlaxFilePolicy p, File receiver) {
  p.requireFile(c.scope, receiver);
}

void checkSandboxDirectory(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  Directory receiver,
) {
  p.requireDirectory(c.scope, receiver);
}

void checkSandboxEntity(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  FileSystemEntity receiver,
) {
  if (receiver is File) {
    p.requireFile(c.scope, receiver);
  } else if (receiver is Directory) {
    p.requireDirectory(c.scope, receiver);
  } else {
    _deny('FileSystemEntity', 'Unsupported or foreign filesystem entity');
  }
}

FileStat sandboxStatSync(FlaxSandboxContext c, FlaxFilePolicy p, String path) =>
    p.statSync(path);
Future<FileStat> sandboxStat(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  String path,
) => p.stat(path);
bool sandboxIdenticalSync(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  String path1,
  String path2,
) => p.areIdenticalSync(path1, path2);
Future<bool> sandboxIdentical(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  String path1,
  String path2,
) => p.areIdentical(path1, path2);
FileSystemEntityType sandboxTypeSync(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  String path, {
  bool followLinks = true,
}) => p.typeSync(path, followLinks: followLinks);
Future<FileSystemEntityType> sandboxType(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  String path, {
  bool followLinks = true,
}) => p.type(path, followLinks: followLinks);
bool sandboxIsFileSync(FlaxSandboxContext c, FlaxFilePolicy p, String path) =>
    p.typeSync(path) == FileSystemEntityType.file;
Future<bool> sandboxIsFile(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  String path,
) => p.type(path).then((t) => t == FileSystemEntityType.file);
bool sandboxIsDirectorySync(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  String path,
) => p.typeSync(path) == FileSystemEntityType.directory;
Future<bool> sandboxIsDirectory(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  String path,
) => p.type(path).then((t) => t == FileSystemEntityType.directory);
bool sandboxIsLinkSync(FlaxSandboxContext c, FlaxFilePolicy p, String path) =>
    p.typeSync(path, followLinks: false) == FileSystemEntityType.link;
Future<bool> sandboxIsLink(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  String path,
) => p
    .type(path, followLinks: false)
    .then((t) => t == FileSystemEntityType.link);
void sandboxPrivateKey(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  SecurityContext receiver,
  String file, {
  String? password,
}) => receiver.usePrivateKeyBytes(
  p.file(file).readAsBytesSync(),
  password: password,
);
void sandboxTrustedCertificates(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  SecurityContext receiver,
  String file, {
  String? password,
}) => receiver.setTrustedCertificatesBytes(
  p.file(file).readAsBytesSync(),
  password: password,
);
void sandboxCertificateChain(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  SecurityContext receiver,
  String file, {
  String? password,
}) => receiver.useCertificateChainBytes(
  p.file(file).readAsBytesSync(),
  password: password,
);
void sandboxClientAuthorities(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  SecurityContext receiver,
  String file, {
  String? password,
}) => receiver.setClientAuthoritiesBytes(
  p.file(file).readAsBytesSync(),
  password: password,
);

/// Package-internal immutable resource reader; handles are scoped to this IO.
Future<Uint8List> readFlaxRootedBytes(String root, String relativePath) async {
  final scope = _ResourceReadScope();
  final policy = FlaxFilePolicy._(root, scope);
  try {
    return await policy.file(p.join(root, relativePath)).readAsBytes();
  } finally {
    scope.active = false;
    await policy.close();
  }
}

class _ResourceReadScope implements FlaxSandboxScope {
  bool active = true;
  @override
  bool get isActive => active;
  @override
  void requireActive() {
    if (!active) throw StateError('Closed resource read');
  }
}
