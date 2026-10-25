// ignore_for_file: depend_on_referenced_packages, implementation_imports
import 'dart:async';
import 'dart:convert';
import 'dart:ffi';
import 'dart:io';
import 'dart:isolate';

import 'package:flax/flax.dart';
import 'package:flax/src/native/native_runtime.dart';
import 'package:flax_embedded/main.dart' as gallery;
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_test/src/gc.dart';
import 'package:crypto/crypto.dart' as crypto;
import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

import 'shell.dart' as shell;
import '../js_handoff/app.dart' as contracts;
import '../js_handoff/handoff.dart';
import '../js_worker/app.dart' show gaps;
import 'runtime.dart';
import 'metrics.dart';
import 'results_probe.dart';

final checks = <Map<String, Object?>>[];
final errors = <String>[];
final phases = <Map<String, Object?>>[];
final scroll = ScrollController();
final scrollKey = GlobalKey();
final view = ValueNotifier<Widget>(const SizedBox.shrink());
final frameScroll = <Map<String, num>>[];
final metrics = GalleryMetrics(shell.clock)..selfCheck();
void check(String name, bool passed, [Object? detail]) {
  checks.add({'name': name, 'passed': passed, 'detail': detail});
  stdout.writeln('GALLERY_CHECK ${jsonEncode(checks.last)}');
  if (!passed) throw StateError('$name: $detail');
}

int get now => shell.clock.elapsedMicroseconds;

// Pure declaration access only: no runtime, native object, or dart:ui operation.
Map<String, int> warmDartDeclarations() {
  final watch = Stopwatch()..start();
  final registry = FlaxBindingRegistry(
    {
      flutterBindings,
      sdk_animationBindings,
      sdk_dart_uiBindings,
      sdk_dependenciesBindings,
      sdk_foundationBindings,
      sdk_gesturesBindings,
      sdk_paintingBindings,
      sdk_physicsBindings,
      sdk_renderingBindings,
      sdk_schedulerBindings,
      sdk_semanticsBindings,
      sdk_servicesBindings,
      sdk_widgetsBindings,
      ...gallery.embeddedBindings.modules,
      for (final plugin in gallery.galleryPlugins) ...plugin.bindingModules,
    }.toList(),
  );
  return {
    'modules': registry.modules.length,
    'types': registry.modules.fold(0, (n, m) => n + m.types.length),
    'templates': registry.modules.fold(0, (n, m) => n + m.dartTypes.length),
    'elapsedUs': watch.elapsedMicroseconds,
  };
}

Future<Map<String, FlaxJsSource>> preparePinnedSource(
  String path,
  Map<String, dynamic> manifest,
  String inventory,
  String business,
  String probe,
  Map<String, dynamic>? base,
) async {
  final pinned = {
    if (base != null)
      'flax:base': Flax.moduleAssets!.baseHostSourceForExperiment,
    for (final source in Flax.moduleAssets!.sourcesForExperiment)
      source.sourceUrl: source,
  };
  final sink = File(path).openWrite();
  final budget = Stopwatch()..start();
  try {
    for (final source in pinned.values) {
      if (source.sourceUrl == 'flax:base') {
        if (crypto.sha256.convert(source.bytes).toString() !=
            base!['sourceHash']) {
          throw StateError('Changed prepared base host source');
        }
        sink.write('globalThis.__galleryBaseInstall = ${base['factory']};');
      } else {
        sink.add(source.bytes);
      }
      sink.write('\n');
      await sink.flush();
      if (budget.elapsedMicroseconds >= 4000) {
        await frame();
        budget.reset();
      }
    }
    sink.writeln('$inventory; globalThis.__galleryModuleTimes = [];');
    for (final module in manifest['modules'] as List) {
      final specifier = jsonEncode((module as Map)['specifier']);
      sink.writeln(
        '{const start = Date.now(); __flaxModules.require($specifier); '
        '__galleryModuleTimes.push({module:$specifier, ms:Date.now()-start});}',
      );
    }
    sink.writeln(
      'globalThis.__galleryActivate = new Function(${jsonEncode(business)});',
    );
    sink.writeln(probe);
    sink.writeln('undefined;');
  } finally {
    await sink.close();
  }
  return Map.unmodifiable(pinned);
}

Future<void> frame() async {
  final binding = WidgetsBinding.instance;
  await binding.endOfFrame.timeout(
    const Duration(seconds: 5),
    onTimeout: () => throw StateError(
      'Frame delivery stopped: lifecycle=${binding.lifecycleState}, '
      'enabled=${binding.framesEnabled}, phase=${binding.schedulerPhase}, '
      'scheduled=${binding.hasScheduledFrame}',
    ),
  );
  await Future<void>.delayed(Duration.zero);
}

Future<T> phase<T>(String name, FutureOr<T> Function() work) async {
  final start = now;
  final value = await work();
  phases.add({'name': name, 'start': start, 'end': now});
  // A frame boundary prevents the following phase's stall contaminating this one.
  await frame();
  return value;
}

List<Element> elements() {
  final values = <Element>[];
  void visit(Element element) {
    if (element.widget case Offstage(offstage: true)) return;
    values.add(element);
    element.visitChildren(visit);
  }

  WidgetsBinding.instance.rootElement!.visitChildren(visit);
  return values;
}

Set<String> texts() => elements()
    .map((e) => e.widget)
    .whereType<Text>()
    .map((w) => w.data)
    .whereType<String>()
    .toSet();
Map<String, Object> elementCounts() {
  var total = 0, hosts = 0;
  final byType = <String, int>{};
  for (final element in elements()) {
    total++;
    if (element.widget is FlaxWidgetHost) hosts++;
    byType.update(
      element.widget.runtimeType.toString(),
      (n) => n + 1,
      ifAbsent: () => 1,
    );
  }
  return {'total': total, 'flaxHosts': hosts, 'byType': byType};
}

Future<void> until(bool Function() done) async {
  final timeout = Stopwatch()..start();
  while (!done()) {
    if (timeout.elapsed > const Duration(seconds: 10)) {
      throw StateError('Gallery did not reach expected state');
    }
    await frame();
    await Future<void>.delayed(const Duration(milliseconds: 20));
  }
}

Future<void> tap({String? text, String? key}) async {
  final element = elements()
      .where(
        (e) => key != null
            ? e.widget.key == ValueKey(key)
            : e.widget is Text && (e.widget as Text).data == text,
      )
      .last;
  await Scrollable.ensureVisible(
    element,
    duration: const Duration(milliseconds: 50),
  );
  await frame();
  final box = element.findRenderObject()! as RenderBox;
  final point = box.localToGlobal(box.size.center(Offset.zero));
  GestureBinding.instance.handlePointerEvent(
    PointerDownEvent(pointer: 3, position: point),
  );
  GestureBinding.instance.handlePointerEvent(
    PointerUpEvent(pointer: 3, position: point),
  );
  await Future<void>.delayed(const Duration(milliseconds: 450));
  await frame();
}

Future<void> drag() async {
  final box = scrollKey.currentContext!.findRenderObject()! as RenderBox;
  final origin = box.localToGlobal(Offset(60, box.size.height * .8));
  final binding = GestureBinding.instance;
  binding.handlePointerEvent(PointerDownEvent(pointer: 1, position: origin));
  for (var i = 1; i <= 80; i++) {
    await Future<void>.delayed(const Duration(milliseconds: 16));
    binding.handlePointerEvent(
      PointerMoveEvent(
        pointer: 1,
        position: origin - Offset(0, i * 3.0),
        delta: const Offset(0, -3),
      ),
    );
  }
  binding.handlePointerEvent(
    PointerUpEvent(pointer: 1, position: origin - const Offset(0, 240)),
  );
}

@pragma('vm:never-inline')
void captureStates(List<WeakReference<State>> states) {
  for (final element in elements().whereType<StatefulElement>()) {
    if (element.state is FlaxComponentStateBase) {
      states.add(WeakReference(element.state));
    }
  }
}

@pragma('vm:never-inline')
int aliveStates(List<WeakReference<State>> states) =>
    states.where((s) => s.target != null).length;

Future<void> tour(int sample, List<WeakReference<State>> states) async {
  const entries = {
    'core': 'Small pieces. Real Flutter.',
    'material': 'Material, in full color.',
    'cupertino': 'Quiet details. Native feel.',
    'canvas': 'Make light linger.',
    'fetch': 'Ask. Receive. Explore.',
    'websocket': 'A conversation, in real time.',
    'storage': 'A little memory goes a long way.',
  };
  for (final entry in entries.entries) {
    await tap(key: 'open-${entry.key}');
    await until(() => texts().contains(entry.value));
    captureStates(states);
    switch (entry.key) {
      case 'core':
        await tap(text: 'Increment JS');
        check(
          'sample $sample Core signal and callbacks',
          texts().containsAll({'Count: 1', 'Doubled: 2'}),
        );
      case 'material' || 'cupertino':
        await tap(text: 'Filled button');
        check(
          'sample $sample ${entry.key} State override updates',
          texts().contains('Button presses: 1'),
        );
      case 'canvas':
        await tap(key: 'palette-1');
        check(
          'sample $sample Canvas callback',
          texts().contains('Bloom · Ember · crisp light'),
        );
      case 'fetch':
        check('sample $sample Fetch entrance', texts().contains('Fetch ready'));
      case 'websocket':
        await tap(text: 'Send message');
        check(
          'sample $sample WebSocket callback',
          texts().contains('Connect to a server first.'),
        );
      case 'storage':
        await tap(text: 'Clear area');
        await tap(text: 'Store +1');
        await FlaxLocalStoragePlugin.flush();
        check('sample $sample storage callback', texts().contains('Stored: 1'));
    }
    await tap(key: 'gallery-back');
    await until(() => texts().contains('Choose your playground'));
  }
}

int readInt(GalleryRuntime runtime, String field) =>
    (runtime.evaluate('galleryProbe.$field') as FlaxJsNumber).value.toInt();

Future<void> main() async {
  if (Platform.environment['FLAX_ENGINE_RESULTS_PROBE'] == '1') {
    try {
      runResultsProbe();
      exit(0);
    } catch (error, stack) {
      stderr.writeln('$error\n$stack');
      exit(1);
    }
  }
  final binding = GalleryBinding(metrics);
  final profiling = Platform.environment['FLAX_GALLERY_PROFILE'] == '1';
  final root = Platform.environment['FLAX_HANDOFF_ROOT']!;
  final mode = Platform.environment['FLAX_GALLERY_MODE'] ?? 'handoff';
  if (!{
    'baseline',
    'handoff',
    'file',
    'staged',
    'identity',
    'prewarmed',
    'factory',
  }.contains(mode)) {
    throw ArgumentError(mode);
  }
  final preloaded = mode != 'baseline';
  final staged = {'staged', 'identity', 'prewarmed', 'factory'}.contains(mode);
  final pinned = {'identity', 'prewarmed', 'factory'}.contains(mode);
  final directory = Directory('$root/.local/gallery-handoff/storage-$pid')
    ..createSync(recursive: true);
  FlutterError.onError = (details) {
    errors.add(details.toString());
    FlutterError.presentError(details);
  };
  binding.addPersistentFrameCallback((_) {
    shell.tickTimes.add(now);
    if (scroll.hasClients) {
      frameScroll.add({'time': now, 'offset': scroll.offset});
    }
  });
  binding.addTimingsCallback(shell.frameTimes.addAll);
  final timer = Timer.periodic(
    const Duration(milliseconds: 2),
    (_) => shell.timerTimes.add(now),
  );
  shell.child.value = Row(
    children: [
      SizedBox(
        width: 160,
        child: ListView.builder(
          key: scrollKey,
          controller: scroll,
          itemExtent: 40,
          itemCount: 200,
          itemBuilder: (_, i) => Text('Native row $i'),
        ),
      ),
      Expanded(
        child: ValueListenableBuilder<Widget>(
          valueListenable: view,
          builder: (_, child, _) => child,
        ),
      ),
    ],
  );
  runApp(const shell.Shell());
  var passed = false;
  final samples = <Map<String, Object?>>[];
  try {
    await Future<void>.delayed(const Duration(milliseconds: 700));
    metrics.enabled = profiling;
    Flax.traceForExperiment = profiling ? metrics.event : null;
    final requestStart = now;
    final inputs = await phase('assets', () async {
      final source = await gallery.loadAggregateSource(
        storageDirectory: directory.path,
      );
      final manifest = jsonDecode(
        await rootBundle.loadString('assets/flax_modules/modules.json'),
      ) as Map<String, dynamic>;
      final paths = <String>[
        manifest['bootstrap'] as String,
        for (final m in manifest['modules'] as List)
          (m as Map)['asset'] as String,
      ];
      final sources = <String, Uint8List>{};
      for (final path in paths) {
        sources[path] = (await rootBundle.load(path)).buffer.asUint8List();
      }
      return (
        source: source,
        manifest: manifest,
        sources: sources,
        background: mode == 'handoff'
            ? await File('$root/.local/gallery-handoff/background.js')
                  .readAsString()
            : '',
        metadata: jsonDecode(
          await File('$root/.local/gallery-handoff/assets.json').readAsString(),
        ) as Map,
      );
    });
    final probe = await File('$root/experiments/gallery_handoff/probe.js')
        .readAsString();
    final pinnedPath = '$root/.local/gallery-handoff/background-pinned-$pid.js';
    final base = mode == 'factory'
        ? jsonDecode(
            await File('$root/.local/gallery-handoff/base-prepared.json')
                .readAsString(),
          ) as Map<String, dynamic>
        : null;
    final pinnedSources = pinned
        ? await phase(
            'pin-sources',
            () => preparePinnedSource(
              pinnedPath,
              inputs.manifest,
              inputs.metadata['inventory'] as String,
              inputs.source,
              probe,
              base,
            ),
          )
        : null;
    Map<String, int>? prewarm;
    if (mode == 'prewarmed') {
      final warmed = await phase(
        'dart-metadata',
        () => Isolate.run(warmDartDeclarations),
      );
      prewarm = warmed;
      check(
        'background Dart preparation contains only metadata',
        warmed['modules']! >= 16 && warmed['types']! > 1000,
        warmed,
      );
    }
    for (var sample = 0; sample < 2; sample++) {
      final start = now;
      final firstTiming = shell.frameTimes.length;
      final steps = <Map<String, Object?>>[];
      scroll.jumpTo(0);
      final native = await phase(
        '$sample:runtime',
        () => (FlaxEngine.createRuntime() as FlaxNativeJsRuntime)
          ..useEngineResultsForExperiment(
            Platform.environment['FLAX_ENGINE_RESULTS'] == '1',
          ),
      );
      await phase(
        '$sample:native-probe-library',
        () => DynamicLibrary.open(
          '$root/.local/js-handoff/native/libflax_handoff_probe.dylib',
        ),
      );
      final handoff = await phase('$sample:handoff-setup', () async {
        final value = Handoff(
          '$root/.local/js-handoff/native/libflax_handoff_probe.dylib',
          native,
        );
        await contracts.emptyBridge(native);
        return value;
      });
      final gesture = drag();
      Map<String, dynamic>? background;
      if (preloaded) {
        native.evaluate('globalThis.__flaxStartupLazy = $staged; undefined;');
        background = await phase(
          '$sample:background',
          () => mode == 'handoff'
              ? handoff.initialize(inputs.background, background: true)
              : handoff.initializeSourceFile(
                  pinned
                      ? pinnedPath
                      : '$root/.local/gallery-handoff/background.js',
                ),
        );
        check(
          'sample $sample full background initialization',
          background!['ok'] == true,
          background,
        );
      }
      handoff.close();
      final runtime = GalleryRuntime(
        native,
        preloaded: preloaded,
        sources: inputs.sources,
        bootstrap: inputs.manifest['bootstrap'] as String,
        inventory: inputs.metadata['inventory'] as String,
        business: inputs.source,
        pinnedSources: pinnedSources,
      );
      metrics.enabled = profiling;
      runtime.trace = profiling ? metrics.event : null;
      native.traceForExperiment = profiling ? metrics.event : null;
      Flax.traceForExperiment = profiling ? metrics.event : null;
      final session = await phase(
        '$sample:session',
        () => FlaxSession(
          createRuntime: () => runtime,
          source: inputs.source,
          sourceUrl: 'flax:embedded/aggregate',
          bindings: gallery.embeddedBindings,
          plugins: gallery.galleryPlugins,
          namespace: 'gallery-handoff',
          onError: (error, stack) {
            errors.add('$error');
            stderr.writeln('$error\n$stack');
          },
        ),
      );
      await phase('$sample:activation', () async {
        if (staged) {
          await session.prepareForExperiment(
            onStep: (name, us) => steps.add({'name': name, 'microseconds': us}),
          );
        }
        view.value = FlaxView.session(session: session);
        await binding.endOfFrame;
      });
      final firstFrame = now;
      if (pinned) {
        var rejected = false;
        try {
          runtime.evaluateSource(
            FlaxJsSource(
              'undefined;',
              sourceUrl: inputs.manifest['bootstrap'] as String,
            ),
          );
        } on StateError {
          rejected = true;
        }
        check(
          'sample $sample rejects foreign source with the same URL',
          rejected,
        );
      }
      await gesture;
      await Future<void>.delayed(const Duration(milliseconds: 150));
      check(
        'sample $sample all seven real gallery entrances',
        texts().containsAll({
          '7 modules',
          'Choose your playground',
          'Core & signals',
          'Material UI',
          'Cupertino UI',
          'Canvas 2D',
          'Fetch',
          'WebSocket',
          'Local storage',
        }),
        texts().toList(),
      );
      if (!preloaded) runtime.evaluate('$probe\nundefined;');
      check(
        'sample $sample closure/private fields/prototypes survive adoption',
        (runtime.evaluate(
          'galleryProbe.child.value() === 42 && galleryProbe.child instanceof galleryProbe.Base && galleryProbe.child instanceof galleryProbe.Child',
        ) as FlaxJsBoolean).value,
      );
      runtime.evaluate('galleryProbe.child.increment(); undefined;');
      check(
        'sample $sample mutable captured state survives',
        readInt(runtime, 'child.value()') == 43,
      );
      final loadMetrics = <String, Object?>{
        'sample': sample,
        'start': start,
        'firstFrame': firstFrame,
        'loadUs': firstFrame - start,
        'includingPreparationUs':
            firstFrame - (sample == 0 ? requestStart : start),
        'dartPrewarm': prewarm,
        'background': background,
        'rssAfter': ProcessInfo.currentRss,
        'elements': elementCounts(),
        'skippedSources': runtime.skippedSources,
        'inventoryChecks': runtime.inventoryChecks,
        'comparisonUs': runtime.compareUs,
        'typePartsCalls': runtime.typePartsCalls,
        'typePartsUs': runtime.typePartsUs,
        'evaluations': Map<String, int>.from(runtime.evaluationMicroseconds),
        'steps': steps,
        'frameTimings': [
          for (final timing in shell.frameTimes.skip(firstTiming))
            {
              'buildUs': timing.buildDuration.inMicroseconds,
              'rasterUs': timing.rasterDuration.inMicroseconds,
            },
        ],
      };
      samples.add(loadMetrics);
      loadMetrics['profile'] = metrics.frames
          .where(
            (f) =>
                (f['start']! as int) >= start &&
                (f['start']! as int) <= firstFrame,
          )
          .toList();
      metrics.enabled = false;
      runtime.trace = null;
      native.traceForExperiment = null;
      Flax.traceForExperiment = null;
      final dartStates = <WeakReference<State>>[];
      await tour(sample, dartStates);
      // The gallery becomes visible before the departing Route finishes disposal.
      await until(
        () => readInt(runtime, 'disposed') == readInt(runtime, 'initialized'),
      );
      // Each of the six current Stateful examples explicitly forwards disposal.
      check(
        'sample $sample real State super.initState and super.dispose',
        readInt(runtime, 'initialized') == 6 &&
            readInt(runtime, 'disposed') == 6,
        {
          'initialized': readInt(runtime, 'initialized'),
          'disposed': readInt(runtime, 'disposed'),
          'proxyCalls': runtime.proxyCalls,
        },
      );
      for (var attempt = 0; attempt < 35; attempt++) {
        await flaxTestCollectDartGarbage();
        await Future<void>.delayed(const Duration(milliseconds: 100));
        final remaining = readInt(runtime, 'aliveStates');
        runtime.drainMicrotasks();
        if (remaining == 0 && aliveStates(dartStates) == 0) break;
      }
      check(
        'sample $sample departed JS State objects collect before Session close',
        readInt(runtime, 'aliveStates') == 0 &&
            // Native helper widgets may add Dart States beyond the six JS States.
            dartStates.length >= readInt(runtime, 'initialized') &&
            aliveStates(dartStates) == 0,
        {
          'aliveJsStates': readInt(runtime, 'aliveStates'),
          'dartStatePeersSeen': dartStates.length,
          'dartStatePeersAlive': aliveStates(dartStates),
        },
      );
      loadMetrics['gc'] = {
        'jsStateAlive': readInt(runtime, 'aliveStates'),
        'dartStatePeersSeen': dartStates.length,
        'dartStatePeersAlive': aliveStates(dartStates),
      };
      view.value = const SizedBox.shrink();
      await frame();
      await session.close().timeout(const Duration(seconds: 15));
      check(
        'sample $sample close releases every tracked handle',
        runtime.isDisposed && runtime.handlesAtDispose == 0,
        {'handlesAtDispose': runtime.handlesAtDispose},
      );
      loadMetrics['completed'] = true;
      await Future<void>.delayed(const Duration(milliseconds: 300));
    }
    await FlaxLocalStoragePlugin.shutdown();
    if (pinned) await File(pinnedPath).delete();
    // Reuse the real generated ordinary-object override/super and joint-GC contract.
    final native = (FlaxEngine.createRuntime() as FlaxNativeJsRuntime)
      ..useEngineResultsForExperiment(
        Platform.environment['FLAX_ENGINE_RESULTS'] == '1',
      );
    final proxyHandoff = Handoff(
      '$root/.local/js-handoff/native/libflax_handoff_probe.dylib',
      native,
    );
    await contracts.emptyBridge(native);
    final absent = await proxyHandoff.initializeSourceFile(
      '$root/.local/gallery-handoff/missing-$pid.js',
    );
    check(
      'background file failure restores UI ownership',
      absent['ok'] == false &&
          (native.evaluate('1 + 1') as FlaxJsNumber).value == 2,
      absent,
    );
    final proxyPrepared = await proxyHandoff.initialize(
      'globalThis.handoff = (() => { const captured = 3; return {makeBoxClass(Base) { return class extends Base { #bonus = 1; operatorAdd(value) { return super.operatorAdd(value) + this.#bonus + captured; } }; }}; })(); undefined;',
      background: true,
    );
    check(
      'generated proxy factory initializes on worker',
      proxyPrepared['ok'] == true,
      proxyPrepared,
    );
    proxyHandoff.close();
    await contracts.generated(native, root);
    check(
      'real generated override, super and both weak peers',
      contracts.checks.every((c) => c['passed'] == true),
      contracts.checks,
    );
    check('no Flutter or Session errors', errors.isEmpty, errors);
    passed = true;
  } catch (error, stack) {
    errors.add('$error\n$stack');
    stderr.writeln('$error\n$stack');
  } finally {
    timer.cancel();
    for (final row in phases) {
      final start = row['start']! as int, end = row['end']! as int;
      row['durationUs'] = end - start;
      row['frames'] = gaps(shell.tickTimes, start, end);
      row['timer'] = gaps(shell.timerTimes, start, end);
      row['scrollPositions'] = frameScroll
          .where((s) => s['time']! >= start && s['time']! <= end)
          .map((s) => s['offset'])
          .toSet()
          .length;
    }
    stdout.writeln(
      'GALLERY_RESULT ${jsonEncode({'passed': passed, 'mode': mode, 'profiling': profiling, 'traceTotals': metrics.snapshot(), 'build': kReleaseMode ? 'release' : 'debug', 'checks': checks, 'samples': samples, 'phases': phases, 'errors': errors})}',
    );
    if (passed) await directory.delete(recursive: true);
    exit(passed ? 0 : 1);
  }
}
