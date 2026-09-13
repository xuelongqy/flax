import 'dart:async';
import 'dart:io';
import 'dart:typed_data';

import 'package:hive_ce/hive_ce.dart';

typedef FlaxStorageChange = ({String? key, String? oldValue, String? newValue});
typedef _StorageKey = (String?, String);

/// Package implementation; the public plugin owns initialization and attachment.
class FlaxLocalStorageStore {
  FlaxLocalStorageStore(this.box, this.quotaBytes) {
    _reindex();
  }

  static const boxName = 'flax_local_storage_v1';
  final Box<List<dynamic>> box;
  final int quotaBytes;
  final _areas = <String?, Map<String, int>>{};
  final _sizes = <String?, int>{};
  final _listeners = <Object, (String?, void Function(FlaxStorageChange))>{};
  final _pending = <Future<void>>{};
  final _pendingRecords = <_StorageKey, (int, int)>{};
  (Object, StackTrace)? _failure;
  (Object, StackTrace)? _unavailable;
  int _nextId = 0;

  static Future<FlaxLocalStorageStore> open(String directory, int quota) async {
    await Directory(directory).create(recursive: true);
    if (Hive.isBoxOpen(boxName)) {
      throw StateError('The Flax localStorage box is already open');
    }
    // An explicit path works before or after the application's Hive.init().
    // Never change Hive's global home directory or close application boxes.
    final box = await Hive.openBox<List<dynamic>>(boxName, path: directory);
    // Hive also deduplicates concurrently opening boxes by name, regardless of path.
    if (box.path == null ||
        File(box.path!).absolute.path !=
            File('$directory/$boxName.hive').absolute.path) {
      throw StateError(
        'The Flax localStorage box name belongs to another directory',
      );
    }
    try {
      return FlaxLocalStorageStore(box, quota);
    } catch (_) {
      await box.close();
      rethrow;
    }
  }

  int get attachments => _listeners.length;
  int get pendingWrites => _pending.length;
  int get pendingRecordIdentities => _pendingRecords.length;

  void attach(
    Object owner,
    String? namespace,
    void Function(FlaxStorageChange) notify,
  ) {
    _checkAvailable();
    _listeners[owner] = (namespace, notify);
  }

  void detach(Object owner) => _listeners.remove(owner);

  Iterable<String> keys(String? namespace) {
    _checkAvailable();
    return _areas[namespace]?.keys ?? const <String>[];
  }

  int length(String? namespace) {
    _checkAvailable();
    return _areas[namespace]?.length ?? 0;
  }

  String? key(String? namespace, int index) {
    _checkAvailable();
    final area = _areas[namespace];
    return area != null && index < area.length
        ? area.keys.elementAt(index)
        : null;
  }

  String? getItem(String? namespace, String key) {
    _checkAvailable();
    final id = _areas[namespace]?[key];
    return id == null ? null : _decode(box.get(id)![2] as Uint8List);
  }

  void setItem(
    String? namespace,
    String key,
    String value,
    Object owner,
    void Function(Object, StackTrace) report,
  ) {
    final old = getItem(namespace, key);
    if (old == value) return;
    final size =
        (_sizes[namespace] ?? 0) +
        2 *
            (value.length -
                (old?.length ?? 0) +
                (old == null ? key.length : 0));
    if (size > quotaBytes) throw const FlaxStorageQuotaExceeded();
    final area = _areas.putIfAbsent(namespace, () => {});
    final record = (namespace, key);
    final id = _retainRecord(record, area[key]);
    try {
      final write = box.put(id, [
        namespace == null ? null : _encode(namespace),
        _encode(key),
        _encode(value),
      ]);
      area[key] = id;
      _sizes[namespace] = size;
      _track(write, report, [record]);
    } catch (_) {
      _releaseRecords([record]);
      rethrow;
    }
    _notify(namespace, owner, (key: key, oldValue: old, newValue: value));
  }

  void removeItem(
    String? namespace,
    String key,
    Object owner,
    void Function(Object, StackTrace) report,
  ) {
    final old = getItem(namespace, key);
    if (old == null) return;
    final area = _areas[namespace]!;
    final record = (namespace, key);
    final id = _retainRecord(record, area[key]);
    try {
      final write = box.delete(id);
      area.remove(key);
      _sizes[namespace] = _sizes[namespace]! - 2 * (key.length + old.length);
      _track(write, report, [record]);
    } catch (_) {
      _releaseRecords([record]);
      rethrow;
    }
    _notify(namespace, owner, (key: key, oldValue: old, newValue: null));
  }

  void clear(
    String? namespace,
    Object owner,
    void Function(Object, StackTrace) report,
  ) {
    _checkAvailable();
    final area = _areas[namespace];
    if (area == null || area.isEmpty) return;
    final records = [for (final entry in area.entries) (namespace, entry.key)];
    final ids = [
      for (var i = 0; i < records.length; i++)
        _retainRecord(records[i], area[records[i].$2]),
    ];
    try {
      final write = box.deleteAll(ids);
      area.clear();
      _sizes[namespace] = 0;
      _track(write, report, records);
    } catch (_) {
      _releaseRecords(records);
      rethrow;
    }
    _notify(namespace, owner, (key: null, oldValue: null, newValue: null));
  }

  void _notify(String? namespace, Object owner, FlaxStorageChange change) {
    for (final entry in _listeners.entries.toList()) {
      if (!identical(owner, entry.key) && entry.value.$1 == namespace) {
        entry.value.$2(change);
      }
    }
  }

  int _retainRecord(_StorageKey key, int? currentId) {
    final pending = _pendingRecords[key];
    final id = currentId ?? pending?.$1 ?? _nextId++;
    _pendingRecords[key] = (id, (pending?.$2 ?? 0) + 1);
    return id;
  }

  void _releaseRecords(Iterable<_StorageKey> records) {
    for (final key in records) {
      final pending = _pendingRecords[key]!;
      if (pending.$2 == 1) {
        _pendingRecords.remove(key);
      } else {
        _pendingRecords[key] = (pending.$1, pending.$2 - 1);
      }
    }
  }

  void _track(
    Future<void> write,
    void Function(Object, StackTrace) report,
    List<_StorageKey> records,
  ) {
    late final Future<void> pending;
    pending = write
        .then<void>(
          (_) {},
          onError: (Object error, StackTrace stack) {
            _failure ??= (error, stack);
            try {
              // Hive owns rollback; metadata follows its current transaction state.
              _reindex();
            } catch (reindexError, reindexStack) {
              _unavailable ??= (reindexError, reindexStack);
            }
            try {
              report(error, stack);
            } catch (_) {
              // flush() still reports the original persistence failure.
            }
          },
        )
        .whenComplete(() {
          _releaseRecords(records);
          _pending.remove(pending);
        });
    _pending.add(pending);
  }

  Future<void> flush() async {
    (Object, StackTrace)? flushFailure;
    try {
      await Future.wait(_pending.toList());
      await box.flush();
    } catch (error, stack) {
      flushFailure = (error, stack);
    }
    final failure = _failure;
    _failure = null;
    final result = failure ?? flushFailure ?? _unavailable;
    if (result != null) Error.throwWithStackTrace(result.$1, result.$2);
  }

  Future<void> close() async {
    if (attachments != 0) {
      throw StateError('localStorage is still used by Flax sessions');
    }
    try {
      await flush();
    } finally {
      await box.close();
    }
  }

  void _reindex() {
    final areas = <String?, Map<String, int>>{};
    final sizes = <String?, int>{};
    var nextId = _nextId;
    for (final id in box.keys.cast<int>()) {
      final record = box.get(id)!;
      if (record.length != 3) {
        throw StateError('Invalid Flax localStorage record');
      }
      final namespace = record[0] == null
          ? null
          : _decode(record[0] as Uint8List);
      final key = _decode(record[1] as Uint8List);
      final value = record[2] as Uint8List;
      if (value.length.isOdd) throw StateError('Invalid UTF-16 storage value');
      final area = areas.putIfAbsent(namespace, () => {});
      if (area.containsKey(key)) {
        throw StateError('Duplicate Flax localStorage record');
      }
      area[key] = id;
      sizes[namespace] =
          (sizes[namespace] ?? 0) + key.length * 2 + value.length;
      if (id >= nextId) nextId = id + 1;
    }
    _areas
      ..clear()
      ..addAll(areas);
    _sizes
      ..clear()
      ..addAll(sizes);
    _nextId = nextId;
  }

  void _checkAvailable() {
    final unavailable = _unavailable;
    if (unavailable != null) {
      Error.throwWithStackTrace(
        StateError('localStorage is unavailable: ${unavailable.$1}'),
        unavailable.$2,
      );
    }
  }

  static Uint8List _encode(String value) {
    final data = ByteData(value.length * 2);
    for (var i = 0; i < value.length; i++) {
      data.setUint16(i * 2, value.codeUnitAt(i), Endian.little);
    }
    return data.buffer.asUint8List();
  }

  static String _decode(Uint8List bytes) {
    if (bytes.length.isOdd) throw StateError('Invalid UTF-16 storage value');
    final data = ByteData.sublistView(bytes);
    return String.fromCharCodes(
      List.generate(
        bytes.length ~/ 2,
        (i) => data.getUint16(i * 2, Endian.little),
      ),
    );
  }
}

class FlaxStorageQuotaExceeded implements Exception {
  const FlaxStorageQuotaExceeded();
}
