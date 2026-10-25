// Built as an alternate entrypoint of examples/embedded, using its dependencies.
// ignore_for_file: depend_on_referenced_packages

import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:ui' show FrameTiming;

import 'package:flax/runtime.dart';
import 'package:flax_test/src/gc.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/widgets.dart';

import 'transport.dart';

final clock = Stopwatch()..start();
final shellKey = GlobalKey<ShellState>();
final frames = <Map<String, num>>[];
final heartbeats = <int>[];
final raster = <FrameTiming>[];
final errors = <String>[];
final checks = <Map<String, Object?>>[];
final nodes = <int, Node>{};
late Worker worker;

void check(String name, bool condition, [Object? detail]) {
  checks.add({'name': name, 'passed': condition, 'detail': detail});
  if (!condition) throw StateError('$name: $detail');
}

class DartBase {
  DartBase(this.id);
  final int id;
  String describe() => 'DartBase($id)';
}

class DartProxy extends DartBase {
  DartProxy() : super(7);
  @override
  String describe() => worker.evaluateSync('dartChild.describe()') as String;
}

class Node {
  Node(this.id, this.callback);
  final int id;
  final Future<Object?> Function() callback;
}

@pragma('vm:never-inline')
WeakReference<Node> makeNode() {
  final node = Node(19, () => worker.evaluate('bridgeRoots.get(19)()'));
  nodes[19] = node;
  return WeakReference(node);
}

@pragma('vm:never-inline')
bool alive(WeakReference<Node> weak) => weak.target != null;

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
  String layoutMode = 'none';
  double width = 240;
  Map<dynamic, dynamic>? snapshot;
  double? requestedWidth;
  int revision = 0, discarded = 0, layoutRequests = 0;
  final layoutReceipts = <Map<String, Object?>>[];

  void layout(String mode, double value) {
    setState(() {
      layoutMode = mode;
      width = value;
      requestedWidth = null;
      revision++;
    });
  }

  Widget builder(BuildContext context, BoxConstraints constraints) {
    if (layoutMode == 'sync') {
      snapshot =
          worker.evaluateSync('describeLayout(${constraints.maxWidth})') as Map;
    } else if (layoutMode == 'async' &&
        requestedWidth != constraints.maxWidth) {
      requestedWidth = constraints.maxWidth;
      final version = revision;
      final target = constraints.maxWidth;
      final sent = clock.elapsedMicroseconds;
      layoutRequests++;
      unawaited(
        worker.evaluate('describeLayout($target)').then((value) {
          if (!mounted ||
              layoutMode != 'async' ||
              version != revision ||
              target != width) {
            discarded++;
            return;
          }
          setState(() => snapshot = value as Map);
          layoutReceipts.add({
            'width': target,
            'sent': sent,
            'applied': clock.elapsedMicroseconds,
          });
        }),
      );
    }
    return Text(
      'LayoutBuilder $layoutMode: ${snapshot ?? 'pending'}',
      style: const TextStyle(fontSize: 16),
    );
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
              child: Text('Independent JS worker experiment'),
            ),
            SizedBox(
              height: 55,
              width: double.infinity,
              child: CustomPaint(painter: Pulse(animation)),
            ),
            SizedBox(
              height: 65,
              width: width,
              child: LayoutBuilder(builder: builder),
            ),
            Expanded(
              child: ListView.builder(
                key: listKey,
                controller: scroll,
                itemExtent: 48,
                itemCount: 200,
                itemBuilder: (_, index) => Container(
                  color: index.isEven
                      ? const Color(0xffe3eaf5)
                      : const Color(0xfff3f4f6),
                  padding: const EdgeInsets.all(12),
                  child: Text('Native Flutter row $index'),
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

class Pulse extends CustomPainter {
  Pulse(this.animation) : super(repaint: animation);
  final Animation<double> animation;
  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawCircle(
      Offset(20 + (size.width - 40) * animation.value, 25),
      16,
      Paint()..color = const Color(0xff28775c),
    );
  }

  @override
  bool shouldRepaint(Pulse oldDelegate) => false;
}

Future<void> dragList() async {
  final render =
      shellKey.currentState!.listKey.currentContext!.findRenderObject()!
          as RenderBox;
  var position = render.localToGlobal(Offset(80, render.size.height * 0.8));
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

Map<String, Object> gaps(List<int> times, int start, int end) {
  final values = <int>[];
  for (var i = 1; i < times.length; i++) {
    if (times[i] >= start && times[i - 1] <= end) {
      values.add(times[i] - times[i - 1]);
    }
  }
  values.sort();
  return {
    'count': values.length,
    'maxMs': values.isEmpty ? 0 : values.last / 1000,
    'p95Ms': values.isEmpty
        ? 0
        : values[((values.length - 1) * .95).round()] / 1000,
    'over20ms': values.where((v) => v > 20000).length,
    'micros': values,
  };
}

Future<Map<String, Object?>> measure(String mode, FlaxJsRuntime normal) async {
  final state = shellKey.currentState!;
  state.layout('none', 240);
  state.snapshot = null;
  state.scroll.jumpTo(0);
  await Future<void>.delayed(const Duration(milliseconds: 500));
  final start = clock.elapsedMicroseconds;
  final gesture = dragList();
  Object? result;
  if (mode == 'ui-control') {
    final value = normal.evaluate('JSON.stringify(busy(2000))') as FlaxJsString;
    result = jsonDecode(value.value);
  } else if (mode == 'idle') {
    await Future<void>.delayed(const Duration(seconds: 2));
  } else {
    final job = worker.submit('busy(2000)');
    await job.started.future;
    if (mode == 'layout-sync') state.layout('sync', 440);
    if (mode == 'layout-async') {
      state.layout('async', 240);
      await Future<void>.delayed(const Duration(milliseconds: 100));
      state.layout('async', 440);
    }
    result = await job.result.future;
  }
  final end = clock.elapsedMicroseconds;
  await gesture;
  await Future<void>.delayed(const Duration(milliseconds: 250));
  final active = frames
      .where((row) => row['time']! >= start && row['time']! <= end)
      .toList();
  final row = <String, Object?>{
    'mode': mode,
    'startMicros': start,
    'endMicros': end,
    'durationMs': (end - start) / 1000,
    'js': result,
    'framesWhileBusy': active.length,
    'scrollPositionsWhileBusy': active.map((r) => r['scroll']).toSet().length,
    'animationValuesWhileBusy': active
        .map((r) => r['animation'])
        .toSet()
        .length,
    'scrollEnd': state.scroll.offset,
    'frames': gaps(frames.map((r) => r['time']!.toInt()).toList(), start, end),
    'heartbeat': gaps(heartbeats, start, end),
    'layoutSnapshot': state.snapshot,
  };
  if (mode == 'worker' || mode == 'layout-async') {
    check(
      '$mode: native animation advances during worker computation',
      (row['animationValuesWhileBusy'] as int) > 1,
      row['animationValuesWhileBusy'],
    );
    check(
      '$mode: pointer-driven scrolling advances during worker computation',
      (row['scrollPositionsWhileBusy'] as int) > 1,
      row['scrollPositionsWhileBusy'],
    );
  }
  if (mode == 'layout-async') {
    check(
      'async layout eventually uses latest constraints',
      state.snapshot?['width'] == 440,
      state.snapshot,
    );
    check(
      'obsolete layout result discarded',
      state.discarded > 0,
      state.discarded,
    );
    row['layoutRequests'] = state.layoutRequests;
    row['discardedLayouts'] = state.discarded;
    row['layoutReceipts'] = state.layoutReceipts.toList();
  }
  return row;
}

Future<void> transportGc() async {
  final weak = makeNode();
  await worker.evaluate('createCycle(19)');
  await worker.evaluate('@gc');
  await flaxTestCollectDartGarbage();
  check(
    'transport JS business root can call Dart object',
    await worker.evaluate('businessRoot.callback()') == 'node19',
  );
  await worker.evaluate('businessRoot = null');
  await worker.evaluate('@gc');
  await flaxTestCollectDartGarbage();
  check(
    'Dart transport root retains JS callback',
    await nodes[19]!.callback() == 'node19',
  );
  // This table is now the only Dart root; it is transport ownership, not business ownership.
  for (var i = 0; i < 3; i++) {
    await worker.evaluate('@gc');
    await flaxTestCollectDartGarbage();
  }
  final retained =
      alive(weak) &&
      await worker.evaluate('weakPeer.deref() !== undefined') == true;
  check(
    'negative control: strong handle transport leaks a rootless cycle',
    retained,
  );
  nodes.clear();
  await worker.evaluate('bridgeRoots.clear()');
  for (var i = 0; i < 8; i++) {
    await worker.evaluate('@gc');
    await flaxTestCollectDartGarbage();
    if (!alive(weak)) break;
  }
  check('explicit transport release collects Dart peer', !alive(weak));
  check(
    'explicit transport release collects JS peer',
    await worker.evaluate('weakPeer.deref() === undefined') == true,
  );
}

Future<void> main() async {
  final binding = WidgetsFlutterBinding.ensureInitialized();
  FlutterError.onError = (details) {
    errors.add(details.toString());
    FlutterError.presentError(details);
  };
  binding.addTimingsCallback(raster.addAll);
  binding.addPersistentFrameCallback((_) {
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
  final root = Platform.environment['FLAX_WORKER_ROOT']!;
  final normal = FlaxEngine.createRuntime();
  worker = Worker('$root/.local/js-worker/native/libflax_worker_probe.dylib', (
    request,
  ) {
    switch (request['operation']) {
      case 'base':
        return DartBase(request['id'] as int).describe();
      case 'node':
        return 'node${nodes[request['id']]!.id}';
      default:
        throw ArgumentError('Unknown host operation');
    }
  });
  var passed = false;
  int? closeMicros;
  final rows = <Map<String, Object?>>[];
  try {
    await worker.ready.future.timeout(const Duration(seconds: 10));
    final source = File('$root/experiments/js_worker/probe.js')
        .readAsStringSync();
    await worker.evaluate(source);
    normal.evaluate(source);
    check(
      'worker JS inheritance, private field and lexical super',
      await worker.evaluate('localChild.describe()') == 'base/child',
    );
    check(
      'JS override calls real Dart base through super',
      await worker.evaluate('dartChild.describe()') == 'DartBase(7)/override',
    );
    String? rejected;
    try {
      DartProxy().describe();
    } catch (error) {
      rejected = '$error';
    }
    check(
      'Dart synchronous override with super is rejected before deadlock',
      rejected?.contains('would deadlock') == true,
      rejected,
    );
    check(
      'worker recovers after rejected reentry',
      await worker.evaluate('dartChild.describe()') == 'DartBase(7)/override',
    );
    await Future<void>.delayed(const Duration(seconds: 1));
    for (final mode in [
      'idle',
      'worker',
      'ui-control',
      'layout-sync',
      'layout-async',
    ]) {
      rows.add(await measure(mode, normal));
    }
    shellKey.currentState!.layout('none', 240);
    await binding.endOfFrame;
    await transportGc();
    final closing = worker.submit('busy(2000)');
    final cancelled = closing.result.future.then(
      (_) => false,
      onError: (_) => true,
    );
    await closing.started.future;
    final closeStart = clock.elapsedMicroseconds;
    await worker.close();
    closeMicros = clock.elapsedMicroseconds - closeStart;
    check('closing a busy worker cancels pending evaluation', await cancelled);
    check('no Flutter errors', errors.isEmpty, errors);
    passed = true;
  } catch (error, stack) {
    errors.add('$error\n$stack');
    stderr.writeln('$error\n$stack');
  } finally {
    await worker.close();
    normal.dispose();
    heartbeat.cancel();
    runApp(const SizedBox.shrink());
    await binding.endOfFrame;
    final result = {
      'passed': passed,
      'build': kReleaseMode ? 'release' : 'debug',
      'rows': rows,
      'checks': checks,
      'errors': errors,
      'hostCalls': worker.hostCalls,
      'closeMicros': closeMicros,
      'frameSamples': frames,
      'rasterMicros': raster
          .map((t) => t.rasterDuration.inMicroseconds)
          .toList(),
      'jointGcOnWorker': 'not implemented; strong-handle negative control only; original-engine tests run separately',
    };
    stdout.writeln('WORKER_RESULT ${jsonEncode(result)}');
    exit(passed ? 0 : 1);
  }
}
