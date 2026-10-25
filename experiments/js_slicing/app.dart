// Alternate native application entrypoint; not a Flax runtime implementation.
// ignore_for_file: depend_on_referenced_packages
import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flax/runtime.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/widgets.dart';

import '../js_worker/app.dart' show Pulse, gaps;
import 'contracts.dart';
import 'scheduling.dart';

final clock = Stopwatch()..start();
final shellKey = GlobalKey<ShellState>();
final frames = <Map<String, num>>[];
final heartbeats = <int>[];
final errors = <String>[];
final checks = <Map<String, Object?>>[];
late Slicing slicing;
int iterations = 100000000;
void Function()? onFrame, dragOnFrame;

void check(String name, bool passed, [Object? detail]) {
  checks.add({'name': name, 'passed': passed, 'detail': detail});
  stdout.writeln('SLICE_CHECK ${jsonEncode(checks.last)}');
  if (!passed) throw StateError('$name: $detail');
}

class Shell extends StatefulWidget {
  const Shell({super.key});
  @override
  State<Shell> createState() => ShellState();
}

class ShellState extends State<Shell> with SingleTickerProviderStateMixin {
  late final animation = AnimationController(
    vsync: this,
    duration: const Duration(seconds: 1),
  )..repeat();
  final scroll = ScrollController();
  final listKey = GlobalKey();
  String mode = 'idle';
  double width = 240;
  bool layoutCalled = false;
  int pausedCallbackRejections = 0;
  final layoutFinished = <String, Object?>{};

  void configure(String value, double extent) {
    setState(() {
      mode = value;
      width = extent;
    });
  }

  Widget layout(BuildContext context, BoxConstraints constraints) {
    if (mode == 'callback' && slicing.paused) {
      try {
        slicing.evaluate('1');
        throw StateError('Unexpected JS entry from paused LayoutBuilder');
      } on StateError catch (error) {
        if (!error.message.contains('reentry is forbidden')) rethrow;
        pausedCallbackRejections++;
      }
    }
    if (mode == 'layout' && !layoutCalled) {
      layoutCalled = true;
      final start = clock.elapsedMicroseconds;
      final result = slicing.evaluate('spin($iterations)', slice: true);
      layoutFinished.addAll({
        'start': start,
        'end': clock.elapsedMicroseconds,
        'result': (result as FlaxJsNumber).value,
      });
    }
    return Text('LayoutBuilder: $mode, ${constraints.maxWidth}');
  }

  @override
  Widget build(BuildContext context) => Directionality(
    textDirection: TextDirection.ltr,
    child: ColoredBox(
      color: const Color(0xfff3f4f6),
      child: DefaultTextStyle(
        style: const TextStyle(color: Color(0xff14253d), fontSize: 18),
        child: Column(
          children: [
            const Padding(
              padding: EdgeInsets.all(12),
              child: Text('Same-thread resumable JS experiment'),
            ),
            SizedBox(
              height: 55,
              width: double.infinity,
              child: CustomPaint(painter: Pulse(animation)),
            ),
            SizedBox(
              height: 65,
              width: width,
              child: LayoutBuilder(builder: layout),
            ),
            Expanded(
              child: ListView.builder(
                key: listKey,
                controller: scroll,
                itemExtent: 48,
                itemCount: 200,
                itemBuilder: (_, i) => Container(
                  color: i.isEven
                      ? const Color(0xffe3eaf5)
                      : const Color(0xfff3f4f6),
                  padding: const EdgeInsets.all(12),
                  child: Text('Native Flutter row $i'),
                ),
              ),
            ),
          ],
        ),
      ),
    ),
  );

  @override
  void dispose() {
    animation.dispose();
    scroll.dispose();
    super.dispose();
  }
}

Future<void> dragList() async {
  final render =
      shellKey.currentState!.listKey.currentContext!.findRenderObject()!
          as RenderBox;
  var position = render.localToGlobal(Offset(80, render.size.height * .8));
  final binding = GestureBinding.instance;
  binding.handlePointerEvent(
    PointerDownEvent(pointer: 1, position: position, timeStamp: clock.elapsed),
  );
  for (var i = 0; i < 80; i++) {
    await Future<void>.delayed(const Duration(milliseconds: 16));
    position -= const Offset(0, 4);
    binding.handlePointerEvent(
      PointerMoveEvent(
        pointer: 1,
        position: position,
        delta: const Offset(0, -4),
        timeStamp: clock.elapsed,
      ),
    );
  }
  binding.handlePointerEvent(
    PointerUpEvent(pointer: 1, position: position, timeStamp: clock.elapsed),
  );
}

// Independent of Dart's blocked event-message queue, like native frame delivery.
// Synthetic pointers still pass through the real Flutter gesture recognizers.
Future<void> dragByFrames() {
  final render =
      shellKey.currentState!.listKey.currentContext!.findRenderObject()!
          as RenderBox;
  var position = render.localToGlobal(Offset(80, render.size.height * .8));
  final binding = GestureBinding.instance;
  binding.handlePointerEvent(
    PointerDownEvent(pointer: 2, position: position, timeStamp: clock.elapsed),
  );
  final done = Completer<void>();
  var moves = 0, previous = clock.elapsedMicroseconds;
  dragOnFrame = () {
    if (clock.elapsedMicroseconds - previous < 16000) return;
    previous = clock.elapsedMicroseconds;
    position -= const Offset(0, 4);
    binding.handlePointerEvent(
      PointerMoveEvent(
        pointer: 2,
        position: position,
        delta: const Offset(0, -4),
        timeStamp: clock.elapsed,
      ),
    );
    if (++moves == 80) {
      binding.handlePointerEvent(
        PointerUpEvent(
          pointer: 2,
          position: position,
          timeStamp: clock.elapsed,
        ),
      );
      dragOnFrame = null;
      done.complete();
    }
  };
  void tick(Duration _) {
    dragOnFrame?.call();
    if (dragOnFrame != null) {
      WidgetsBinding.instance.scheduleFrameCallback(tick);
    }
  }

  WidgetsBinding.instance.scheduleFrameCallback(tick);
  return done.future;
}

Future<Map<String, Object?>> measure(String mode) async {
  final state = shellKey.currentState!;
  state.configure('idle', 240);
  state.scroll.jumpTo(0);
  await Future<void>.delayed(const Duration(milliseconds: 500));
  final before = slicing.stats;
  final start = clock.elapsedMicroseconds;
  final gesture = mode == 'sliced-frames' || mode == 'sliced-callback'
      ? dragByFrames()
      : dragList();
  if (mode == 'sliced-callback') state.configure('callback', 440);
  Object? result;
  if (mode == 'idle') {
    await Future<void>.delayed(const Duration(seconds: 2));
  } else if (mode == 'layout') {
    state.configure('layout', 440);
    await WidgetsBinding.instance.endOfFrame;
    result = state.layoutFinished;
  } else {
    result = (slicing.evaluate(
      'spin($iterations)',
      slice: mode.startsWith('sliced'),
    ) as FlaxJsNumber).value;
  }
  final end = clock.elapsedMicroseconds;
  await gesture;
  await Future<void>.delayed(const Duration(milliseconds: 250));
  final active = frames
      .where((f) => f['time']! >= start && f['time']! <= end)
      .toList();
  final after = slicing.stats;
  return {
    'mode': mode,
    'start': start,
    'end': end,
    'durationMs': (end - start) / 1000,
    'result': result,
    'iterations': iterations,
    'heartbeatsWhileBusy': heartbeats
        .where((t) => t >= start && t <= end)
        .length,
    'framesWhileBusy': active.length,
    'scrollPositionsWhileBusy': active.map((f) => f['scroll']).toSet().length,
    'animationValuesWhileBusy': active
        .map((f) => f['animation'])
        .toSet()
        .length,
    'frames': gaps(frames.map((f) => f['time']!.toInt()).toList(), start, end),
    'heartbeat': gaps(heartbeats, start, end),
    'nativeBefore': before,
    'nativeAfter': after,
  };
}

Future<void> main() async {
  final binding = WidgetsFlutterBinding.ensureInitialized();
  FlutterError.onError = (details) {
    errors.add(details.toString());
    FlutterError.presentError(details);
  };
  binding.addPersistentFrameCallback((_) {
    onFrame?.call();
    final state = shellKey.currentState;
    if (state != null && state.scroll.hasClients) {
      frames.add({
        'time': clock.elapsedMicroseconds,
        'scroll': state.scroll.offset,
        'animation': state.animation.value,
      });
    }
  });
  final heartbeat = Timer.periodic(
    const Duration(milliseconds: 2),
    (_) => heartbeats.add(clock.elapsedMicroseconds),
  );
  runApp(Shell(key: shellKey));
  final runtime = FlaxEngine.createRuntime();
  final root = Platform.environment['FLAX_SLICE_ROOT']!;
  slicing = Slicing(
    '$root/.local/js-slicing/native/libflax_slice_probe.dylib',
    runtime,
  );
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
    calibration.stop();
    iterations = (100000000 * 2000000 / calibration.elapsedMicroseconds)
        .round();
    stdout.writeln(
      'SLICE_CALIBRATION ${calibration.elapsedMilliseconds}ms, iterations=$iterations',
    );
    await Future<void>.delayed(const Duration(seconds: 1));
    if (suite == 'all' || suite == 'performance') {
      for (final mode in [
        'idle',
        'control',
        'sliced',
        'sliced-frames',
        'sliced-callback',
        'layout',
      ]) {
        stdout.writeln('SLICE_CASE $mode');
        final row = await measure(mode);
        rows.add(row);
        stdout.writeln('SLICE_ROW ${jsonEncode(row)}');
      }
      check(
        'identical work resumes with identical checksum',
        rows[1]['result'] == rows[2]['result'],
      );
      check(
        'native Flutter frames and animation progress while JS is paused',
        (rows[2]['framesWhileBusy'] as int) > 1 &&
            (rows[2]['animationValuesWhileBusy'] as int) > 1,
      );
      check(
        'frame-driven pointer events scroll while JS is paused',
        (rows[3]['scrollPositionsWhileBusy'] as int) > 1 &&
            rows[1]['result'] == rows[3]['result'],
      );
      check(
        'negative control: Dart timers remain queued behind original call',
        rows[2]['heartbeatsWhileBusy'] == 0,
      );
      check(
        'paused JS cannot synchronously serve a LayoutBuilder callback',
        shellKey.currentState!.pausedCallbackRejections > 0 &&
            slicing.rejectedReentries > 0,
      );
      final layoutBefore = rows.last['nativeBefore'] as Map;
      final layoutAfter = rows.last['nativeAfter'] as Map;
      check(
        'long synchronous LayoutBuilder cannot yield a nested frame',
        layoutAfter['yields'] == layoutBefore['yields'] &&
            (layoutAfter['suppressed'] as int) >
                (layoutBefore['suppressed'] as int),
      );
      check(
        'JS and pause callback stay on the owning UI thread',
        slicing.stats['wrongThread'] == 0,
      );
    }
    shellKey.currentState!.configure('idle', 240);
    await Future<void>.delayed(const Duration(milliseconds: 100));
    if (suite == 'all' || suite == 'language') {
      languageContracts(slicing, iterations, check);
    }
    if (suite == 'all' || suite == 'gc') {
      await Future<void>.delayed(const Duration(milliseconds: 100));
      gc = await gcContracts(
        slicing,
        iterations,
        check,
        (callback) => onFrame = callback,
      );
    }
    check('no Flutter errors', errors.isEmpty, errors);
    passed = true;
  } catch (error, stack) {
    errors.add('$error\n$stack');
    stderr.writeln('$error\n$stack');
  } finally {
    slicing.close();
    runtime.dispose();
    heartbeat.cancel();
    runApp(const SizedBox.shrink());
    await binding.endOfFrame;
    stdout.writeln(
      'SLICE_RESULT ${jsonEncode({'passed': passed, 'suite': suite, 'build': kReleaseMode ? 'release' : 'debug', 'rows': rows, 'checks': checks, 'errors': errors, 'frames': frames, 'heartbeats': heartbeats, 'native': slicing.stats, 'gc': gc, 'rejectedReentries': slicing.rejectedReentries})}',
    );
    exit(passed ? 0 : 1);
  }
}
