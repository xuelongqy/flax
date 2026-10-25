// Native Flutter app; same UI and measurements as the synchronous slice probe.
// ignore_for_file: depend_on_referenced_packages, implementation_imports
import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flax/runtime.dart';
import 'package:flax/src/native/native_runtime.dart';
import 'package:flax_test/src/gc.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';

import '../js_slicing/app.dart' as ui;
import '../js_slicing/contracts.dart' as contracts;
import '../js_worker/app.dart' show gaps;
import 'jobs.dart';

late AsyncJobs jobs;

Future<Map<String, Object?>> measureAsync(String mode) async {
  final state = ui.shellKey.currentState!;
  state.configure('idle', 240);
  state.scroll.jumpTo(0);
  await Future<void>.delayed(const Duration(milliseconds: 500));
  final before = jobs.stats;
  final gesture = ui.dragList();
  if (mode == 'async-callback') state.configure('callback', 440);
  var start = 0, end = 0;
  final sent = ui.clock.elapsedMicroseconds;
  final result = await jobs.submit(() {
    start = ui.clock.elapsedMicroseconds;
    try {
      return (jobs.evaluate(
        'spin(${ui.iterations})',
        slice: mode != 'async-unsliced',
      ) as FlaxJsNumber).value;
    } finally {
      end = ui.clock.elapsedMicroseconds;
    }
  });
  final delivered = ui.clock.elapsedMicroseconds;
  await gesture;
  await Future<void>.delayed(const Duration(milliseconds: 250));
  final active = ui.frames
      .where((frame) => frame['time']! >= start && frame['time']! <= end)
      .toList();
  return {
    'mode': mode,
    'durationMs': (end - start) / 1000,
    'queueMs': (start - sent) / 1000,
    'deliveryMs': (delivered - end) / 1000,
    'iterations': ui.iterations,
    'result': result,
    'framesWhileBusy': active.length,
    'animationValuesWhileBusy': active
        .map((f) => f['animation'])
        .toSet()
        .length,
    'scrollPositionsWhileBusy': active.map((f) => f['scroll']).toSet().length,
    'heartbeatsWhileBusy': ui.heartbeats
        .where((t) => t >= start && t <= end)
        .length,
    'frames': gaps(
      ui.frames.map((f) => f['time']!.toInt()).toList(),
      start,
      end,
    ),
    'heartbeat': gaps(ui.heartbeats, start, end),
    'nativeBefore': before,
    'nativeAfter': jobs.stats,
  };
}

Future<void> queueContracts() async {
  final second = FlaxEngine.createRuntime();
  final order = <String>[];
  try {
    jobs.runtime.evaluate('globalThis.sessionValue = 11');
    second.evaluate('globalThis.sessionValue = 29');
    final first = jobs.submit(() {
      order.add('first');
      return (jobs.evaluate('sessionValue') as FlaxJsNumber).value;
    });
    final later = jobs.submit(() {
      order.add('second');
      return (second.evaluate('sessionValue') as FlaxJsNumber).value;
    });
    ui.check('submitting jobs returns before any JS starts', order.isEmpty);
    ui.check(
      'shared queue preserves ordering and separate runtime globals',
      listEquals(await Future.wait([first, later]), [11.0, 29.0]) &&
          listEquals(order, ['first', 'second']),
    );
    final queued = Completer<double>();
    var observedPaused = false;
    final timer = Timer(const Duration(milliseconds: 20), () {
      observedPaused = jobs.paused;
      unawaited(
        jobs
            .submit(() {
              order.add('queued');
              return (second.evaluate('sessionValue') as FlaxJsNumber).value;
            })
            .then(queued.complete, onError: queued.completeError),
      );
    });
    await jobs.submit(() {
      jobs.evaluate('spin(${ui.iterations ~/ 4})', slice: true);
      order.add('finished');
    });
    timer.cancel();
    ui.check(
      'job queued during suspension waits until the active JS job returns',
      await queued.future.timeout(const Duration(seconds: 5)) == 29 &&
          observedPaused &&
          listEquals(order.sublist(2), ['finished', 'queued']),
      {'order': order, 'observedPaused': observedPaused},
    );
    Object? failure;
    try {
      await jobs.submit(
        () => jobs.evaluate('throw new Error("async job error")'),
      );
    } catch (error) {
      failure = error;
    }
    ui.check(
      'job errors reach the Future and later jobs still run',
      '$failure'.contains('async job error') &&
          (await jobs.submit(() => jobs.evaluate('7')) as FlaxJsNumber).value ==
              7,
    );
  } finally {
    second.dispose();
  }
}

Future<Map<String, Object?>> gcContracts() async {
  final runtime = jobs.runtime as FlaxNativeJsRuntime;
  final weak = contracts.makeCycle(runtime);
  var pausedFrames = 0, allocated = 0, lost = false;
  final window = <Uint8List>[];
  ui.onFrame = () {
    if (!jobs.paused) return;
    pausedFrames++;
    lost |= !contracts.alive(weak);
    if (allocated < 120) {
      window.add(Uint8List(1024 * 1024));
      allocated++;
      if (window.length > 12) window.removeAt(0);
    }
  };
  final watch = Stopwatch()..start();
  final before = jobs.stats;
  try {
    final result = await jobs.submit(
      () => jobs.evaluate('''
      (() => { const current = root; delete globalThis.root;
        return current.run(${ui.iterations}); })()
    ''', slice: true),
    ) as FlaxJsNumber;
    ui.check(
      'suspended JS stack retains Dart callback target under allocation pressure',
      result.value == 18 && pausedFrames > 0 && allocated > 0 && !lost,
      {
        'frames': pausedFrames,
        'allocatedMiB': allocated,
        'value': result.value,
      },
    );
  } finally {
    ui.onFrame = null;
    window.clear();
  }
  final busyMicros = watch.elapsedMicroseconds;
  await contracts.reclaimed(runtime, weak, ui.check, 'async JS stack root');
  final dartWeak = contracts.makeCycle(runtime);
  final roots = [dartWeak.target!];
  runtime.evaluate('delete globalThis.root');
  await flaxTestCollectDartGarbage();
  await Future<void>.delayed(const Duration(milliseconds: 1200));
  ui.check(
    'Dart business root retains JS callback and private fields',
    contracts.alive(dartWeak) &&
        (await jobs.submit(
              () => roots.single.callback!.call([]),
            ) as FlaxJsNumber).value ==
            18,
  );
  roots.clear();
  await contracts.reclaimed(runtime, dartWeak, ui.check, 'async Dart root');
  return {
    'busyMs': busyMicros / 1000,
    'totalMs': watch.elapsedMicroseconds / 1000,
    'pausedFrames': pausedFrames,
    'allocatedMiB': allocated,
    'nativeBefore': before,
    'nativeAfter': jobs.stats,
    'remainingCells': runtime.bridgeCellCount,
    'remainingCallbacks': runtime.bridgeCallbackCount,
  };
}

Future<void> main() async {
  final binding = WidgetsFlutterBinding.ensureInitialized();
  FlutterError.onError = (details) {
    ui.errors.add(details.toString());
    FlutterError.presentError(details);
  };
  binding.addPersistentFrameCallback((_) {
    ui.onFrame?.call();
    final state = ui.shellKey.currentState;
    if (state != null && state.scroll.hasClients) {
      ui.frames.add({
        'time': ui.clock.elapsedMicroseconds,
        'scroll': state.scroll.offset,
        'animation': state.animation.value,
      });
    }
  });
  final heartbeat = Timer.periodic(
    const Duration(milliseconds: 2),
    (_) => ui.heartbeats.add(ui.clock.elapsedMicroseconds),
  );
  runApp(ui.Shell(key: ui.shellKey));
  final runtime = FlaxEngine.createRuntime();
  final root = Platform.environment['FLAX_SLICE_ROOT']!;
  jobs = AsyncJobs(
    '$root/.local/async-jobs/native/libflax_async_jobs_probe.dylib',
    runtime,
  );
  ui.slicing = jobs;
  final rows = <Map<String, Object?>>[];
  Map<String, Object?>? gc;
  final suite = Platform.environment['FLAX_SLICE_SUITE'] ?? 'all';
  var passed = false;
  try {
    runtime.evaluate('''
      function spin(n) {
        let checksum = 0;
        for (let i = 0; i < n; i++) checksum = Math.imul(checksum ^ i, 1664525) + 1013904223 | 0;
        return checksum;
      }
      spin(10000000);
    ''');
    final calibration = Stopwatch()..start();
    runtime.evaluate('spin(100000000)');
    ui.iterations = (100000000 * 2000000 / calibration.elapsedMicroseconds)
        .round();
    stdout.writeln('ASYNC_CALIBRATION iterations=${ui.iterations}');
    await Future<void>.delayed(const Duration(seconds: 1));
    if (suite == 'all' || suite == 'performance') {
      for (final mode in [
        'idle',
        'control',
        'sliced',
        'async-unsliced',
        'async-sliced',
        'async-callback',
        'layout',
      ]) {
        stdout.writeln('ASYNC_CASE $mode');
        final row = mode.startsWith('async')
            ? await measureAsync(mode)
            : await ui.measure(mode);
        rows.add(row);
        stdout.writeln('ASYNC_ROW ${jsonEncode(row)}');
      }
      final sliced = rows[4];
      ui.check(
        'all timed jobs execute identical iterations and checksums',
        rows.sublist(1, 6).every((r) => r['result'] == rows[1]['result']),
      );
      ui.check(
        'async entry alone still blocks native frames and timers',
        rows[3]['framesWhileBusy'] == 0 && rows[3]['heartbeatsWhileBusy'] == 0,
      );
      ui.check(
        'async sliced job permits native Flutter animation and timer-driven scrolling',
        (sliced['framesWhileBusy'] as int) > 1 &&
            (sliced['animationValuesWhileBusy'] as int) > 1 &&
            (sliced['scrollPositionsWhileBusy'] as int) > 1,
      );
      ui.check(
        'Dart Timer advances inside the actual JS execution interval',
        (sliced['heartbeatsWhileBusy'] as int) > 1,
        sliced['heartbeat'],
      );
      ui.check(
        'synchronous LayoutBuilder cannot enter an interrupted JS isolate',
        ui.shellKey.currentState!.pausedCallbackRejections > 0 &&
            jobs.rejectedReentries > 0,
      );
      final layoutBefore = rows.last['nativeBefore'] as Map;
      final layoutAfter = rows.last['nativeAfter'] as Map;
      ui.check(
        'long LayoutBuilder JS retains the synchronous frame dependency',
        layoutAfter['yields'] == layoutBefore['yields'],
      );
    }
    ui.shellKey.currentState!.configure('idle', 240);
    await Future<void>.delayed(const Duration(milliseconds: 100));
    if (suite == 'all' || suite == 'language') {
      await queueContracts();
      await jobs.submit(
        () => contracts.languageContracts(jobs, ui.iterations, ui.check),
      );
    }
    if (suite == 'all' || suite == 'gc') gc = await gcContracts();
    ui.check(
      'all JS and pause callbacks stay on the owning UI thread',
      jobs.stats['wrongThread'] == 0,
    );
    ui.check('no Flutter errors', ui.errors.isEmpty, ui.errors);
    passed = true;
  } catch (error, stack) {
    ui.errors.add('$error\n$stack');
    stderr.writeln('$error\n$stack');
  } finally {
    final native = jobs.stats;
    final count = jobs.completedJobs, rearmed = jobs.rearmed;
    jobs.close();
    runtime.dispose();
    heartbeat.cancel();
    runApp(const SizedBox.shrink());
    await binding.endOfFrame;
    stdout.writeln(
      'ASYNC_RESULT ${jsonEncode({'passed': passed, 'suite': suite, 'build': kReleaseMode ? 'release' : 'debug', 'rows': rows, 'checks': ui.checks, 'errors': ui.errors, 'frames': ui.frames, 'heartbeats': ui.heartbeats, 'native': native, 'jobs': count, 'rearmed': rearmed, 'gc': gc})}',
    );
    exit(passed ? 0 : 1);
  }
}
