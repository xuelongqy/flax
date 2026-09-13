import 'dart:io';
import 'dart:typed_data';

/// Fail a real Hive file write without replacing Hive's cache or rollback logic.
final class FailingWrites extends IOOverrides {
  bool fail = false;
  int failures = 0;

  bool takeFailure() {
    if (fail) return true;
    if (failures == 0) return false;
    failures--;
    return true;
  }

  @override
  File createFile(String path) {
    final file = super.createFile(path);
    return path.endsWith('.hive') ? _File(file, this) : file;
  }
}

class _File implements File {
  _File(this.file, this.failure);
  final File file;
  final FailingWrites failure;
  @override
  String get path => file.path;
  @override
  File get absolute => file.absolute;
  @override
  Future<bool> exists() => file.exists();
  @override
  Future<Uint8List> readAsBytes() => file.readAsBytes();
  @override
  Future<File> create({bool recursive = false, bool exclusive = false}) =>
      file.create(recursive: recursive, exclusive: exclusive);
  @override
  Future<RandomAccessFile> open({FileMode mode = FileMode.read}) async {
    final handle = await file.open(mode: mode);
    return mode == FileMode.writeOnlyAppend ? _Writer(handle, failure) : handle;
  }

  @override
  dynamic noSuchMethod(Invocation invocation) => super.noSuchMethod(invocation);
}

class _Writer implements RandomAccessFile {
  _Writer(this.file, this.failure);
  final RandomAccessFile file;
  final FailingWrites failure;
  @override
  Future<int> length() => file.length();
  @override
  Future<RandomAccessFile> writeFrom(
    List<int> buffer, [
    int start = 0,
    int? end,
  ]) {
    if (failure.takeFailure()) {
      return Future.error(const FileSystemException('injected disk failure'));
    }
    return file.writeFrom(buffer, start, end);
  }

  @override
  Future<RandomAccessFile> setPosition(int position) =>
      file.setPosition(position);
  @override
  Future<RandomAccessFile> flush() => file.flush();
  @override
  Future<void> close() => file.close();
  @override
  dynamic noSuchMethod(Invocation invocation) => super.noSuchMethod(invocation);
}
