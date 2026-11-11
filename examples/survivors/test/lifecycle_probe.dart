import 'dart:ui' as ui;

import 'package:flutter/widgets.dart';

mixin SurvivorsObserverTracking on WidgetsBinding {
  late final trackedObservers = <WidgetsBindingObserver>[];
  @override
  void addObserver(WidgetsBindingObserver observer) {
    super.addObserver(observer);
    trackedObservers.add(observer);
  }

  @override
  bool removeObserver(WidgetsBindingObserver observer) {
    final removed = super.removeObserver(observer);
    if (removed) trackedObservers.remove(observer);
    return removed;
  }
}

class SurvivorsImageProbe {
  SurvivorsImageProbe() {
    previousCreate = ui.Image.onCreate;
    previousDispose = ui.Image.onDispose;
    create = (image) {
      previousCreate?.call(image);
      final id = next++;
      identities[image] = id;
      live[id] = {'id': id, 'width': image.width, 'height': image.height};
      created++;
    };
    dispose = (image) {
      previousDispose?.call(image);
      if (live.remove(identities[image]) != null) disposed++;
    };
    ui.Image.onCreate = create;
    ui.Image.onDispose = dispose;
  }
  late final ui.ImageEventCallback? previousCreate;
  late final ui.ImageEventCallback? previousDispose;
  late final ui.ImageEventCallback create;
  late final ui.ImageEventCallback dispose;
  final identities = Expando<int>();
  final live = <int, Map<String, Object?>>{};
  var next = 0, created = 0, disposed = 0;
  final bitmaps = <String, Map<String, Object?>>{};
  var completedInputs = 0, completedTransforms = 0, completedBakes = 0;
  var failedInputs = 0;
  var closedBitmaps = 0, sessionDisposedBitmaps = 0;

  void bitmapCreated(int session, int id, String operation) {
    if (id <= 0) return;
    final key = '$session:$id';
    if (bitmaps.containsKey(key)) throw StateError('Duplicate bitmap $key');
    if (operation == 'createImageBitmap') completedInputs++;
    if (operation == 'transformImageBitmap') completedTransforms++;
    if (operation == 'transferToImageBitmap') completedBakes++;
    bitmaps[key] = {
      'session': session,
      'id': id,
      'operation': operation,
      'refs': 1,
    };
  }

  void bitmapRetained(int session, int id) {
    final bitmap = bitmaps['$session:$id'];
    if (bitmap == null) {
      throw StateError('Unknown retained bitmap $session:$id');
    }
    bitmap['refs'] = (bitmap['refs'] as int) + 1;
  }

  void bitmapClosed(int session, int id) {
    final key = '$session:$id', bitmap = bitmaps['$session:$id'];
    if (bitmap == null) return; // Native close is also idempotent.
    final refs = (bitmap['refs'] as int) - 1;
    if (refs == 0) {
      bitmaps.remove(key);
      closedBitmaps++;
    } else {
      bitmap['refs'] = refs;
    }
  }

  void sessionDisposed(int session) {
    sessionDisposedBitmaps += bitmaps.values
        .where((bitmap) => bitmap['session'] == session)
        .length;
    bitmaps.removeWhere((_, bitmap) => bitmap['session'] == session);
  }

  Map<String, Object?> snapshot() => {
    'live': live.length,
    'bitmapOutcomesBalanced':
        completedInputs + completedTransforms + completedBakes ==
        closedBitmaps + sessionDisposedBitmaps + bitmaps.length,
    'completedInputs': completedInputs,
    'completedTransforms': completedTransforms,
    'completedBakes': completedBakes,
    'failedInputs': failedInputs,
    'closedBitmaps': closedBitmaps,
    'sessionDisposedBitmaps': sessionDisposedBitmaps,
    'inputs': bitmaps.values
        .where((v) => v['operation'] == 'createImageBitmap')
        .length,
    'baked': bitmaps.values
        .where((v) => v['operation'] == 'transferToImageBitmap')
        .length,
    'transformed': bitmaps.values
        .where((v) => v['operation'] == 'transformImageBitmap')
        .length,
    'retained': bitmaps.values.fold<int>(
      0,
      (total, bitmap) => total + (bitmap['refs'] as int) - 1,
    ),
    'bitmaps': bitmaps.values.map((v) => Map<String, Object?>.of(v)).toList(),
    'identityMeaning': 'Image handles and successful Canvas bitmap IDs are independent ledgers; no per-handle role inference',
    'handles': live.values.map((v) => Map<String, Object?>.of(v)).toList(),
    'created': created,
    'disposed': disposed,
  };
  void close() {
    ui.Image.onCreate = previousCreate;
    ui.Image.onDispose = previousDispose;
  }
}
