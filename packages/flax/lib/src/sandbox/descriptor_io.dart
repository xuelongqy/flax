part of 'file_system.dart';

const _descriptorChunkSize = 64 * 1024;
const _descriptorMaxOffset = 0x7fffffffffffffff;

void _checkDescriptorRange(int offset, int count) {
  if (offset < 0 || count < 0 || offset > _descriptorMaxOffset - count) {
    throw RangeError('Invalid descriptor byte range: $offset + $count');
  }
}

/// A snapshot of the verified native stat layout, never a pathname observation.
final class _DescriptorStat implements FileStat {
  _DescriptorStat(List<int> values)
    : device = values[0],
      inode = values[1],
      mode = values[2],
      size = values[3],
      accessed = DateTime.fromMicrosecondsSinceEpoch(values[4]),
      modified = DateTime.fromMicrosecondsSinceEpoch(values[5]),
      changed = DateTime.fromMicrosecondsSinceEpoch(values[6]),
      type = switch (values[2] & 0xf000) {
        0x8000 => FileSystemEntityType.file,
        0x4000 => FileSystemEntityType.directory,
        0xa000 => FileSystemEntityType.link,
        0xc000 => FileSystemEntityType.unixDomainSock,
        0x1000 => FileSystemEntityType.pipe,
        _ => FileSystemEntityType.notFound,
      };

  _DescriptorStat.notFound()
    : device = 0,
      inode = 0,
      mode = 0,
      size = -1,
      type = FileSystemEntityType.notFound,
      accessed = DateTime.fromMicrosecondsSinceEpoch(0, isUtc: true),
      modified = DateTime.fromMicrosecondsSinceEpoch(0, isUtc: true),
      changed = DateTime.fromMicrosecondsSinceEpoch(0, isUtc: true);

  final int device;
  final int inode;
  (int, int) get identity => (device, inode);
  @override
  final int mode;
  @override
  final int size;
  @override
  final DateTime accessed;
  @override
  final DateTime modified;
  @override
  final DateTime changed;
  @override
  final FileSystemEntityType type;

  @override
  String modeString() {
    const codes = ['---', '--x', '-w-', '-wx', 'r--', 'r-x', 'rw-', 'rwx'];
    return '${(mode & 0x800) != 0 ? '(suid) ' : ''}'
        '${(mode & 0x400) != 0 ? '(guid) ' : ''}'
        '${(mode & 0x200) != 0 ? '(sticky) ' : ''}'
        '${codes[(mode >> 6) & 7]}${codes[(mode >> 3) & 7]}${codes[mode & 7]}';
  }

  @override
  String toString() =>
      'FileStat: type $type\n'
      '          changed $changed\n'
      '          modified $modified\n'
      '          accessed $accessed\n'
      '          mode ${modeString()}\n'
      '          size $size';
}

// These are isolate-local lookups. Only descriptor integers and operation data
// cross the worker port; no library, pointer, owner, closure or File is sent.
final _descriptorPread = _posix._lib
    .lookupFunction<
      IntPtr Function(Int32, Pointer<Uint8>, UintPtr, Int64),
      int Function(int, Pointer<Uint8>, int, int)
    >('pread');
final _descriptorPwrite = _posix._lib
    .lookupFunction<
      IntPtr Function(Int32, Pointer<Uint8>, UintPtr, Int64),
      int Function(int, Pointer<Uint8>, int, int)
    >('pwrite');
final _descriptorWrite = _posix._lib
    .lookupFunction<
      IntPtr Function(Int32, Pointer<Uint8>, UintPtr),
      int Function(int, Pointer<Uint8>, int)
    >('write');
final _descriptorTruncate = _posix._lib
    .lookupFunction<Int32 Function(Int32, Int64), int Function(int, int)>(
      'ftruncate',
    );
final _descriptorFlush = _posix._lib
    .lookupFunction<Int32 Function(Int32), int Function(int)>('fsync');
final _descriptorTimes = _posix._lib
    .lookupFunction<
      Int32 Function(Int32, Pointer<Int64>),
      int Function(int, Pointer<Int64>)
    >('futimens');
final _descriptorFcntl = _posix._lib
    .lookupFunction<
      Int32 Function(Int32, Int32, VarArgs<(Int32,)>),
      int Function(int, int, int)
    >('fcntl');

extension _DescriptorOperations on _SandboxPosix {
  // SDK/NDK C declarations are checked in the patch's compile-only evidence.
  // uint64 allocation supplies stat's required 8-byte alignment. The buffer is
  // exactly the ABI's size; fields are decoded at the verified offsets.
  int get _statBytes => switch (Abi.current()) {
    Abi.macosArm64 ||
    Abi.macosArm64e ||
    Abi.macosX64 ||
    Abi.iosArm64 ||
    Abi.iosArm64e ||
    Abi.iosX64 => 144,
    Abi.androidArm64 || Abi.linuxArm64 => 128,
    Abi.androidX64 || Abi.linuxX64 => 144,
    _ => throw UnsupportedError('Unsupported descriptor ABI: ${Abi.current()}'),
  };

  List<int> statValues(int fd) => using((arena) {
    final bytes = _statBytes;
    final buffer = arena<Uint64>(bytes ~/ 8).cast<Uint8>();
    _retryDescriptor(() => _fstat(fd, buffer), 'fstat');
    final data = ByteData.sublistView(buffer.asTypedList(bytes));
    final modeOffset = _darwin ? 4 : (_arm64Linux ? 16 : 24);
    final timeOffset = _darwin ? 32 : 72;
    int timestamp(int offset) {
      final seconds = data.getInt64(offset, Endian.host);
      final nanos = data.getInt64(offset + 8, Endian.host);
      if (nanos < 0 || nanos >= 1000000000) {
        throw StateError('Invalid native stat timestamp');
      }
      // Match the SDK FileStat's microsecond precision; its DateTime snapshot
      // uses the default local zone, while only notFound uses the UTC epoch.
      return seconds * Duration.microsecondsPerSecond + nanos ~/ 1000;
    }

    return [
      _darwin ? data.getUint32(0, Endian.host) : data.getUint64(0, Endian.host),
      data.getUint64(8, Endian.host),
      _darwin
          ? data.getUint16(modeOffset, Endian.host)
          : data.getUint32(modeOffset, Endian.host),
      data.getInt64(_darwin ? 96 : 48, Endian.host),
      timestamp(timeOffset),
      timestamp(timeOffset + 16),
      timestamp(timeOffset + 32),
    ];
  });

  _DescriptorStat stat(int fd) => _DescriptorStat(statValues(fd));

  int _retryDescriptor(int Function() call, String operation) {
    while (true) {
      final result = call();
      if (result >= 0) return result;
      final error = _errno().value;
      if (error == 4) continue; // EINTR, on every supported ABI.
      throw FileSystemException(
        operation,
        '',
        OSError('POSIX operation failed', error),
      );
    }
  }

  Uint8List readRange(int fd, int offset, int count) {
    _checkDescriptorRange(offset, count);
    if (count == 0) return Uint8List(0);
    return using((arena) {
      final capacity = min(count, _descriptorChunkSize);
      final buffer = arena<Uint8>(capacity);
      final result = BytesBuilder(copy: false);
      var position = offset;
      var remaining = count;
      while (remaining > 0) {
        final length = _retryDescriptor(
          () =>
              _descriptorPread(fd, buffer, min(remaining, capacity), position),
          'pread',
        );
        if (length == 0) break;
        result.add(Uint8List.fromList(buffer.asTypedList(length)));
        position += length;
        remaining -= length;
      }
      return result.takeBytes();
    });
  }

  Uint8List readAll(int fd) {
    final result = BytesBuilder(copy: false);
    var offset = 0;
    while (offset < _descriptorMaxOffset) {
      final count = min(_descriptorChunkSize, _descriptorMaxOffset - offset);
      final bytes = readRange(fd, offset, count);
      if (bytes.isEmpty) break;
      result.add(bytes);
      offset += bytes.length;
    }
    return result.takeBytes();
  }

  void prepareWrite(int fd, {required bool append}) {
    final flags = _retryDescriptor(
      () => _descriptorFcntl(fd, 3, 0),
      'fcntl(F_GETFL)',
    );
    final appendFlag = _darwin ? 8 : 0x400;
    final updated = append ? flags | appendFlag : flags & ~appendFlag;
    if (flags != updated) {
      _retryDescriptor(
        () => _descriptorFcntl(fd, 4, updated),
        'fcntl(F_SETFL)',
      );
    }
    if (!append) truncate(fd, 0);
  }

  void writeBytes(
    int fd,
    List<int> bytes, {
    int offset = 0,
    bool append = false,
  }) {
    _checkDescriptorRange(offset, bytes.length);
    if (bytes.isEmpty) return;
    using((arena) {
      final buffer = arena<Uint8>(min(bytes.length, _descriptorChunkSize));
      var consumed = 0;
      while (consumed < bytes.length) {
        final count = min(bytes.length - consumed, _descriptorChunkSize);
        final native = buffer.asTypedList(count);
        for (var index = 0; index < count; index++) {
          native[index] = bytes[consumed + index];
        }
        var written = 0;
        while (written < count) {
          final length = _retryDescriptor(
            () => append
                ? _descriptorWrite(fd, buffer + written, count - written)
                : _descriptorPwrite(
                    fd,
                    buffer + written,
                    count - written,
                    offset + consumed + written,
                  ),
            append ? 'write' : 'pwrite',
          );
          if (length == 0) {
            throw FileSystemException('Descriptor write made no progress');
          }
          written += length;
        }
        consumed += count;
      }
    });
  }

  void truncate(int fd, int length) {
    _checkDescriptorRange(length, 0);
    _retryDescriptor(() => _descriptorTruncate(fd, length), 'ftruncate');
  }

  void flush(int fd) {
    _retryDescriptor(() => _descriptorFlush(fd), 'fsync');
  }

  void setTimestamp(int fd, int microseconds, {required bool accessed}) {
    using((arena) {
      // Two real 16-byte timespecs, int64 seconds and int64 nanoseconds.
      final times = arena<Int64>(4);
      final omit = _darwin
          ? -2
          : 1073741822; // UTIME_OMIT, not a read/modify/write.
      times[0] = 0;
      times[1] = omit;
      times[2] = 0;
      times[3] = omit;
      final index = accessed ? 0 : 2;
      final remainder = microseconds % Duration.microsecondsPerSecond;
      times[index] =
          (microseconds - remainder) ~/ Duration.microsecondsPerSecond;
      times[index + 1] = remainder * 1000;
      _retryDescriptor(() => _descriptorTimes(fd, times), 'futimens');
    });
  }
}

/// Internal operations on a borrowed descriptor. The caller owns its lifetime.
final class _DescriptorFile {
  _DescriptorFile(this.descriptor);
  final int descriptor;

  _DescriptorStat statSync() => _posix.stat(descriptor);
  int lengthSync() => statSync().size;
  Uint8List readAsBytesSync() => _posix.readAll(descriptor);
  void setLastAccessedSync(DateTime value) => _posix.setTimestamp(
    descriptor,
    value.microsecondsSinceEpoch,
    accessed: true,
  );
  void setLastModifiedSync(DateTime value) => _posix.setTimestamp(
    descriptor,
    value.microsecondsSinceEpoch,
    accessed: false,
  );
  void writeAsBytesSync(
    List<int> bytes, {
    required FileMode mode,
    required bool flush,
  }) {
    final append = mode == FileMode.append || mode == FileMode.writeOnlyAppend;
    _posix.prepareWrite(descriptor, append: append);
    _posix.writeBytes(descriptor, bytes, append: append);
    if (flush) _posix.flush(descriptor);
  }

  Future<FileStat> stat() => _withDescriptorIo((io) => io.stat(descriptor));
  Future<int> length() => stat().then((value) => value.size);
  Future<DateTime> lastAccessed() => stat().then((value) => value.accessed);
  Future<DateTime> lastModified() => stat().then((value) => value.modified);
  Future<Uint8List> readAsBytes() =>
      _withDescriptorIo((io) => io.readAll(descriptor));
  Future<void> setLastAccessed(DateTime value) => _withDescriptorIo(
    (io) => io.setTimestamp(
      descriptor,
      value.microsecondsSinceEpoch,
      accessed: true,
    ),
  );
  Future<void> setLastModified(DateTime value) => _withDescriptorIo(
    (io) => io.setTimestamp(
      descriptor,
      value.microsecondsSinceEpoch,
      accessed: false,
    ),
  );
  Future<void> writeAsBytes(
    List<int> bytes, {
    required FileMode mode,
    required bool flush,
  }) {
    final snapshot = Uint8List.fromList(bytes);
    return _withDescriptorIo(
      (io) => io.write(
        descriptor,
        snapshot,
        append: mode == FileMode.append || mode == FileMode.writeOnlyAppend,
        flush: flush,
      ),
    );
  }

  Future<void> writeStream(Stream<List<int>> source, void Function() check) =>
      _withDescriptorIo((io) async {
        check();
        await io.prepareWrite(descriptor);
        var offset = 0;
        await for (final bytes in source) {
          check();
          _checkDescriptorRange(offset, bytes.length);
          await io.writeAt(descriptor, offset, Uint8List.fromList(bytes));
          offset += bytes.length;
        }
        check();
        await io.flush(descriptor);
      });
}

Future<T> _withDescriptorIo<T>(
  Future<T> Function(_DescriptorIoLease) action,
) async {
  final io = await _descriptorIo.acquire();
  try {
    return await action(io);
  } finally {
    await io.release();
  }
}

enum _DescriptorOp {
  stat,
  read,
  readAll,
  write,
  prepareWrite,
  writeAt,
  flush,
  accessed,
  modified,
}

// One coordinator per owning isolate. Idle policies/documents retain no lease.
// Start is shared; a replacement cannot start until the previous onExit arrives.
final _descriptorIo = _DescriptorIo();

final class _DescriptorIo {
  _DescriptorWorker? _worker;
  Future<_DescriptorWorker>? _starting;
  Future<void>? _stopping;
  int _users = 0;

  Future<_DescriptorIoLease> acquire() async {
    _users++;
    try {
      await _stopping;
      final worker = _worker ??= await (_starting ??=
          _DescriptorWorker.start());
      if (worker.hasExited) throw StateError('Descriptor worker has exited');
      return _DescriptorIoLease(this, worker);
    } catch (_) {
      await _release();
      rethrow;
    }
  }

  Future<void> _release() {
    assert(_users > 0);
    if (--_users != 0) return Future.value();
    final worker = _worker;
    _worker = null;
    _starting = null;
    if (worker == null) return Future.value();
    late Future<void> stopping;
    stopping = worker.shutdown().whenComplete(() {
      if (identical(_stopping, stopping)) _stopping = null;
    });
    _stopping = stopping;
    return stopping;
  }
}

final class _DescriptorIoLease {
  _DescriptorIoLease(this._owner, this._worker);
  final _DescriptorIo _owner;
  final _DescriptorWorker _worker;
  final _pending = <Future<void>>{};
  Future<void>? _releasing;

  Future<Object?> _request(
    _DescriptorOp operation,
    int fd, [
    List<Object?> data = const [],
  ]) {
    if (_releasing != null) {
      return Future.error(StateError('Released descriptor worker lease'));
    }
    final work = _worker.request(operation, fd, data);
    late Future<void> settled;
    settled = work
        .then<void>((_) {}, onError: (Object _, StackTrace _) {})
        .whenComplete(() => _pending.remove(settled));
    _pending.add(settled);
    return work;
  }

  Future<_DescriptorStat> stat(int fd) async => _DescriptorStat(
    (await _request(_DescriptorOp.stat, fd) as List<Object?>).cast<int>(),
  );
  Future<Uint8List> read(int fd, int offset, int count) async {
    _checkDescriptorRange(offset, count);
    return await _request(_DescriptorOp.read, fd, [offset, count]) as Uint8List;
  }

  Future<Uint8List> readAll(int fd) async =>
      await _request(_DescriptorOp.readAll, fd) as Uint8List;
  Future<void> write(
    int fd,
    Uint8List bytes, {
    required bool append,
    required bool flush,
  }) async {
    await _request(_DescriptorOp.write, fd, [bytes, append, flush]);
  }

  Future<void> prepareWrite(int fd) async {
    await _request(_DescriptorOp.prepareWrite, fd);
  }

  Future<void> writeAt(int fd, int offset, Uint8List bytes) async {
    _checkDescriptorRange(offset, bytes.length);
    await _request(_DescriptorOp.writeAt, fd, [offset, bytes]);
  }

  Future<void> flush(int fd) async {
    await _request(_DescriptorOp.flush, fd);
  }

  Future<void> setTimestamp(
    int fd,
    int micros, {
    required bool accessed,
  }) async {
    await _request(
      accessed ? _DescriptorOp.accessed : _DescriptorOp.modified,
      fd,
      [micros],
    );
  }

  Future<void> release() => _releasing ??= () async {
    await Future.wait(List.of(_pending));
    await _owner._release();
  }();
}

final class _DescriptorWorker {
  _DescriptorWorker._() {
    _events.listen(_receive);
    // Startup exit can arrive before Isolate.spawn's Future completes.
    _ready.future.ignore();
  }
  final _events = ReceivePort();
  final _ready = Completer<SendPort>();
  final _exited = Completer<void>();
  final _pending = <int, Completer<Object?>>{};
  SendPort? _commands;
  int _nextId = 0;
  bool _stopping = false;
  String? _failure;
  bool get hasExited => _exited.isCompleted;

  static Future<_DescriptorWorker> start() async {
    final worker = _DescriptorWorker._();
    try {
      await Isolate.spawn<SendPort>(
        _descriptorWorkerMain,
        worker._events.sendPort,
        onError: worker._events.sendPort,
        onExit: worker._events.sendPort,
        errorsAreFatal: true,
        debugName: 'flax-descriptor-io',
      );
    } catch (_) {
      worker._events.close();
      rethrow;
    }
    worker._commands = await worker._ready.future;
    return worker;
  }

  void _receive(Object? message) {
    if (message is SendPort) {
      _ready.complete(message);
      return;
    }
    if (message == null) {
      // Only onExit can fail unacknowledged work: native calls have finished and
      // no worker can still access a descriptor that its owner now closes.
      final error = StateError(
        _failure ?? 'Descriptor worker exited before completion',
      );
      if (!_ready.isCompleted) _ready.completeError(error);
      for (final pending in _pending.values) {
        pending.completeError(error);
      }
      _pending.clear();
      _exited.complete();
      _events.close();
      return;
    }
    final values = message as List<Object?>;
    if (values.length == 2 && values[0] is String) {
      // Fatal error notification precedes exit, but does not release an fd lease.
      _failure = '${values[0]}\n${values[1]}';
      return;
    }
    final pending = _pending.remove(values[0] as int)!;
    if (values[1] == 0) {
      pending.complete(values[2]);
    } else if (values[1] == 1) {
      pending.completeError(
        FileSystemException(
          values[2] as String,
          values[3] as String?,
          values[4] == null
              ? null
              : OSError('POSIX operation failed', values[4] as int),
        ),
        StackTrace.fromString(values[5] as String),
      );
    } else {
      pending.completeError(
        StateError(values[2] as String),
        StackTrace.fromString(values[3] as String),
      );
    }
  }

  Future<Object?> request(_DescriptorOp operation, int fd, List<Object?> data) {
    if (_stopping || hasExited) {
      return Future.error(StateError('Descriptor worker is closed'));
    }
    final id = _nextId++;
    final result = Completer<Object?>();
    _pending[id] = result;
    try {
      _commands!.send([id, operation.index, fd, ...data]);
    } catch (error, stack) {
      _pending.remove(id);
      result.completeError(error, stack);
    }
    return result.future;
  }

  Future<void> shutdown() async {
    if (!_stopping && !hasExited) {
      _stopping = true;
      // Last lease has drained all requests. The worker closes its only port.
      _commands!.send(null);
    }
    await _exited.future;
  }
}

// A top-level entry avoids capturing UI/Session state. Native functions are
// ordinary non-leaf FFI calls; no native thread calls back into Dart or Flax.
void _descriptorWorkerMain(SendPort replies) {
  final commands = ReceivePort();
  commands.listen((Object? message) {
    if (message == null) {
      commands.close();
      return;
    }
    final values = message as List<Object?>;
    final id = values[0] as int;
    final fd = values[2] as int;
    try {
      Object? result;
      switch (_DescriptorOp.values[values[1] as int]) {
        case _DescriptorOp.stat:
          result = _posix.statValues(fd);
        case _DescriptorOp.read:
          result = _posix.readRange(fd, values[3] as int, values[4] as int);
        case _DescriptorOp.readAll:
          result = _posix.readAll(fd);
        case _DescriptorOp.write:
          final append = values[4] as bool;
          _posix.prepareWrite(fd, append: append);
          _posix.writeBytes(fd, values[3] as Uint8List, append: append);
          if (values[5] as bool) _posix.flush(fd);
        case _DescriptorOp.prepareWrite:
          _posix.prepareWrite(fd, append: false);
        case _DescriptorOp.writeAt:
          _posix.writeBytes(
            fd,
            values[4] as Uint8List,
            offset: values[3] as int,
          );
        case _DescriptorOp.flush:
          _posix.flush(fd);
        case _DescriptorOp.accessed:
          _posix.setTimestamp(fd, values[3] as int, accessed: true);
        case _DescriptorOp.modified:
          _posix.setTimestamp(fd, values[3] as int, accessed: false);
      }
      replies.send([id, 0, result]);
    } on FileSystemException catch (error, stack) {
      replies.send([
        id,
        1,
        error.message,
        error.path,
        error.osError?.errorCode,
        stack.toString(),
      ]);
    } catch (error, stack) {
      replies.send([id, 2, error.toString(), stack.toString()]);
    }
  });
  replies.send(commands.sendPort);
}
