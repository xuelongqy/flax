import 'dart:async';
import 'dart:io';

// Hold real byte-cache publication while preserving native file handles and errors.
final class SurvivorsAudioIoBoundary extends IOOverrides {
  SurvivorsAudioIoBoundary({this.gate = 'write'});

  final String gate;
  final opened = Completer<void>();
  final proceed = Completer<void>();
  Object? writeError, renameError, deleteError;
  int pending = 0;

  Future<void> wait(String point) async {
    if (point == gate) {
      if (!opened.isCompleted) opened.complete();
      await proceed.future;
    }
  }

  @override
  File createFile(String path) {
    final file = super.createFile(path);
    return path.endsWith('.tmp') ? _BoundaryFile(file, this) : file;
  }
}

class _BoundaryFile implements File {
  _BoundaryFile(this.file, this.boundary);
  final File file;
  final SurvivorsAudioIoBoundary boundary;
  @override
  String get path => file.path;

  @override
  Future<File> writeAsBytes(
    List<int> bytes, {
    FileMode mode = FileMode.write,
    bool flush = false,
  }) async {
    boundary.pending++;
    RandomAccessFile? handle;
    try {
      handle = await file.open(mode: mode);
      await boundary.wait('write');
      if (boundary.writeError case final error?) {
        await handle.writeFrom(bytes, 0, bytes.length ~/ 2);
        throw error;
      }
      await handle.writeFrom(bytes);
      if (flush) await handle.flush();
    } finally {
      await handle?.close();
      boundary.pending--;
    }
    return this;
  }

  @override
  Future<File> rename(String path) async {
    boundary.pending++;
    try {
      await boundary.wait('rename');
      if (boundary.renameError case final error?) throw error;
      return await file.rename(path);
    } finally {
      boundary.pending--;
    }
  }

  @override
  Future<FileSystemEntity> delete({bool recursive = false}) {
    if (boundary.deleteError case final error?) throw error;
    return file.delete(recursive: recursive);
  }

  @override
  dynamic noSuchMethod(Invocation invocation) => super.noSuchMethod(invocation);
}
