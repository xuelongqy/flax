// This source runs inside the standalone Flutter consumer, not the tool package.
// ignore_for_file: depend_on_referenced_packages

import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart' show FlaxTestRuntimeTracker;
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';

const _widgets = "import {Text, runApp} from '@flax/flutter/widgets';";
const _delay = Duration(seconds: 3);
const _trace = bool.fromEnvironment('FLAX_ENTRY_TRACE');
final _clock = Stopwatch();

class _Probe extends FlaxPlugin implements FlaxPluginInstance {
  final ready = Completer<void>(), done = Completer<void>();
  FlaxJsRuntime? runtime;
  int? waitingFrame, readyUs, doneFrame;
  int pulses = 0;
  final spans = <Map<String, Object?>>[];
  final _starts = <String, List<int>>{};

  void trace(String label, bool enter) {
    if (enter) {
      (_starts[label] ??= []).add(_clock.elapsedMicroseconds);
    } else {
      final start = _starts[label]!.removeLast();
      final elapsed = _clock.elapsedMicroseconds - start;
      if (elapsed >= 4000) {
        spans.add({'label': label, 'startUs': start, 'durationUs': elapsed});
      }
    }
  }

  @override
  String get id => 'flax.entry.profile';
  @override
  Set<String> get globals => {'__entryProbe'};
  void mark(String event) {
    final frame = ui.PlatformDispatcher.instance.frameData.frameNumber;
    switch (event) {
      case 'ready':
        readyUs = _clock.elapsedMicroseconds;
        if (!ready.isCompleted) ready.complete();
      case 'waiting':
        waitingFrame ??= frame;
      case 'done':
        doneFrame = frame;
        if (!done.isCompleted) done.complete();
      case 'pulse':
        pulses++;
      default:
        throw StateError('Unknown entry event: $event');
    }
  }

  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    context.registerFunction('__entryProbe', (_, args) {
      mark((args.single as FlaxJsString).value);
      return const FlaxJsUndefined();
    });
    return this;
  }

  @override
  void close() {}
  @override
  void dispose() {}
}

void main() {
  runZonedGuarded(
    () async {
      WidgetsFlutterBinding.ensureInitialized();
      FlutterError.onError = (details) => Zone.current.handleUncaughtError(
        details.exception,
        details.stack ?? StackTrace.current,
      );
      Flax.moduleAssets = await FlaxModuleAssets.load(
        bundle: rootBundle,
        manifest: 'assets/flax_modules/modules.json',
      );
      runApp(const _Profile());
    },
    (error, stack) {
      stderr.writeln('$error\n$stack');
      stdout.writeln('FLAX_ENTRY_FAILED');
      exit(1);
    },
  );
}

class _Profile extends StatefulWidget {
  const _Profile();
  @override
  State<_Profile> createState() => _ProfileState();
}

class _ProfileState extends State<_Profile> {
  final _timings = <int, ui.FrameTiming>{};
  final _steady = _Probe();
  final _results = <Map<String, Object?>>[];
  final _errors = <String>[];
  List<Widget> _views = [];
  _Probe? _active;
  late HttpServer _server;

  @override
  void initState() {
    super.initState();
    _clock.start();
    WidgetsBinding.instance.addTimingsCallback(_record);
    WidgetsBinding.instance.addPostFrameCallback((_) => unawaited(_run()));
  }

  void _record(List<ui.FrameTiming> frames) {
    for (final frame in frames) {
      _timings[frame.frameNumber] = frame;
    }
  }

  Widget _view(String name, String source, _Probe probe) => SizedBox(
    height: 48,
    child: FlaxView(
      key: ValueKey(name),
      source: source,
      createRuntime: () {
        final started = _clock.elapsedMicroseconds;
        final native = FlaxEngine.createRuntime();
        if (!_trace) return probe.runtime = native;
        probe.spans.add({
          'label': 'runtime:create',
          'startUs': started,
          'durationUs': _clock.elapsedMicroseconds - started,
        });
        return probe.runtime = FlaxTestRuntimeTracker(native)
          ..trace = probe.trace;
      },
      loadModule: (request) {
        probe.mark('waiting');
        return FlaxApplication.loadRemoteModule(request);
      },
      plugins: [probe],
      onError: (error, stack) => _errors.add('$error\n$stack'),
    ),
  );

  Future<void> _run() async {
    _server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
    _server.listen((request) async {
      _active?.mark('waiting');
      await Future<void>.delayed(_delay);
      request.response.headers
        ..set('content-type', 'text/javascript')
        ..set('cache-control', 'no-store');
      request.response.write('export const value = 42;');
      await request.response.close();
    });
    final steady = _view('steady', """
      $_widgets
      function tick() { __entryProbe('pulse'); requestAnimationFrame(tick); }
      requestAnimationFrame(tick);
      runApp(Text('Steady Flax animation'));
      __entryProbe('ready');
    """, _steady);
    setState(() => _views = [steady]);
    await _steady.ready.future.timeout(const Duration(seconds: 30));
    await Future<void>.delayed(const Duration(seconds: 2));
    for (var round = 0; round < 3; round++) {
      for (final scenario in [
        'baseline',
        'top-level-await',
        'remote-static',
        'remote-dynamic',
      ]) {
        await _sample(scenario, round, steady);
      }
    }
    await _sample('external-https', 0, steady);
    await _sample('blocking-control', 0, steady);
    if (_errors.isNotEmpty) throw StateError(_errors.join('\n'));
    final control = _results.last;
    final controlGap = (control['waitingGapsMs'] as Map)['max'] as num;
    if (controlGap < 150) {
      throw StateError('The frame probe did not detect the blocking control');
    }
    setState(() => _views = []);
    await SchedulerBinding.instance.endOfFrame;
    await _closed([_steady]);
    await _server.close(force: true);
    WidgetsBinding.instance.removeTimingsCallback(_record);
    final data = {
      'completed': true,
      'sourceLoaded': true,
      'delayMs': _delay.inMilliseconds,
      'platform': Platform.operatingSystem,
      'rssBytes': ProcessInfo.currentRss,
      'results': _results,
      'errors': _errors,
    };
    final encoded = base64Encode(gzip.encode(utf8.encode(jsonEncode(data))));
    for (var offset = 0; offset < encoded.length; offset += 800) {
      final end = (offset + 800).clamp(0, encoded.length);
      stdout.writeln(
        'FLAX_ENTRY_RESULT_GZIP_BASE64:${encoded.substring(offset, end)}',
      );
    }
    stdout.writeln('FLAX_ENTRY_PASSED');
    exit(0);
  }

  Future<void> _sample(String scenario, int round, Widget steady) async {
    final probe = _active = _Probe(), sibling = _Probe();
    final remote =
        'http://127.0.0.1:${_server.port}/value.js?scenario=$scenario&round=$round';
    const complete =
        "runApp(Text('Entry ready')); __entryProbe('ready'); __entryProbe('done');";
    final source = switch (scenario) {
      'top-level-await' =>
        "$_widgets __entryProbe('waiting'); await(new Promise(resolve => setTimeout(resolve, 3000))); $complete",
      'remote-static' =>
        "$_widgets import {value} from '$remote'; if (value !== 42) throw new Error('Wrong remote export'); $complete",
      'remote-dynamic' =>
        """$_widgets
        runApp(Text('Dynamic import active')); __entryProbe('ready');
        setTimeout(async () => {
          __entryProbe('waiting'); const {value} = await import('$remote');
          if (value !== 42) throw new Error('Wrong dynamic export');
          __entryProbe('done');
        }, 100);
      """,
      'external-https' =>
        """$_widgets
        import {name} from 'https://mdn.github.io/js-examples/module-examples/basic-modules/modules/square.js';
        if (name !== 'square') throw new Error('Wrong HTTPS export'); $complete
      """,
      'blocking-control' =>
        """$_widgets
        runApp(Text('Blocking control')); __entryProbe('ready');
        setTimeout(() => {
          __entryProbe('waiting'); const end = Date.now() + 250;
          while (Date.now() < end) {} __entryProbe('done');
        }, 100);
      """,
      _ => "$_widgets $complete",
    };
    final beginFrame = ui.PlatformDispatcher.instance.frameData.frameNumber;
    final beginUs = _clock.elapsedMicroseconds, pulses = _steady.pulses;
    final subject = _view('$scenario-$round', source, probe);
    setState(() => _views = [steady, subject]);
    final siblingStart = beginUs + 200000;
    final timer = Timer(const Duration(milliseconds: 200), () {
      setState(
        () => _views = [
          steady,
          subject,
          _view(
            'sibling-$scenario-$round',
            "$_widgets runApp(Text('Independent entry')); __entryProbe('ready');",
            sibling,
          ),
        ],
      );
    });
    try {
      await probe.done.future.timeout(const Duration(seconds: 40));
      if (scenario == 'baseline') {
        probe.waitingFrame =
            ui.PlatformDispatcher.instance.frameData.frameNumber;
        await Future<void>.delayed(_delay);
      }
      if (scenario == 'external-https') {
        await Future<void>.delayed(_delay);
      }
      await sibling.ready.future.timeout(const Duration(seconds: 30));
      await SchedulerBinding.instance.endOfFrame;
      await SchedulerBinding.instance.endOfFrame;
      final endFrame = ui.PlatformDispatcher.instance.frameData.frameNumber;
      final elapsedUs = _clock.elapsedMicroseconds - beginUs;
      final pulseCount = _steady.pulses - pulses;
      await Future<void>.delayed(const Duration(milliseconds: 1100));
      final frames =
          _timings.values
              .where(
                (f) => f.frameNumber >= beginFrame && f.frameNumber <= endFrame,
              )
              .toList()
            ..sort((a, b) => a.frameNumber.compareTo(b.frameNumber));
      final gaps = [
        for (var i = 1; i < frames.length; i++)
          (frames[i].timestampInMicroseconds(ui.FramePhase.vsyncStart) -
                  frames[i - 1].timestampInMicroseconds(
                    ui.FramePhase.vsyncStart,
                  )) /
              1000,
      ];
      final waitingGaps = [
        for (var i = 1; i < frames.length; i++)
          if (frames[i - 1].frameNumber >= (probe.waitingFrame ?? beginFrame))
            (frames[i].timestampInMicroseconds(ui.FramePhase.vsyncStart) -
                    frames[i - 1].timestampInMicroseconds(
                      ui.FramePhase.vsyncStart,
                    )) /
                1000,
      ];
      final siblingUs = sibling.readyUs! - siblingStart;
      if (frames.isEmpty || _errors.isNotEmpty) {
        throw StateError('Missing frames or entry error: $_errors');
      }
      if (scenario != 'blocking-control' &&
          (_stats(gaps)['max']! > 500 ||
              siblingUs > 1000000 ||
              pulseCount < 45)) {
        throw StateError(
          'Entry blocked animation or sibling startup: $scenario',
        );
      }
      final result = <String, Object?>{
        'scenario': scenario,
        'round': round,
        'beginUs': beginUs,
        'elapsedUs': elapsedUs,
        'entryReadyUs': probe.readyUs! - beginUs,
        'siblingReadyUs': siblingUs,
        'steadyPulses': pulseCount,
        'frames': frames.length,
        'gapsMs': _stats(gaps),
        'waitingGapsMs': _stats(waitingGaps),
        'buildMs': _stats(
          frames.map((f) => f.buildDuration.inMicroseconds / 1000),
        ),
        'rasterMs': _stats(
          frames.map((f) => f.rasterDuration.inMicroseconds / 1000),
        ),
        'over33ms': gaps.where((gap) => gap > 33.34).length,
        'waitingFrame': probe.waitingFrame,
        if (_trace) 'trace': [...probe.spans, ...sibling.spans],
        'rawFrames': [
          for (final f in frames)
            [
              f.frameNumber,
              f.timestampInMicroseconds(ui.FramePhase.vsyncStart),
              f.buildDuration.inMicroseconds,
              f.rasterDuration.inMicroseconds,
            ],
        ],
      };
      _results.add(result);
      stdout.writeln(
        'FLAX_ENTRY_SAMPLE:${jsonEncode({...result}..remove('rawFrames'))}',
      );
    } finally {
      timer.cancel();
      setState(() => _views = [steady]);
      await SchedulerBinding.instance.endOfFrame;
      await _closed([probe, sibling]);
      _active = null;
    }
  }

  Future<void> _closed(List<_Probe> probes) async {
    for (
      var turn = 0;
      turn < 1000 && probes.any((probe) => probe.runtime?.isDisposed == false);
      turn++
    ) {
      await Future<void>.delayed(const Duration(milliseconds: 2));
    }
    if (probes.any((probe) => probe.runtime?.isDisposed == false)) {
      throw StateError('An entry runtime did not close');
    }
  }

  Map<String, double> _stats(Iterable<num> values) {
    final sorted = values.map((v) => v.toDouble()).toList()..sort();
    if (sorted.isEmpty) return {'p50': 0, 'p95': 0, 'max': 0};
    return {
      'p50': sorted[((sorted.length - 1) * .5).round()],
      'p95': sorted[((sorted.length - 1) * .95).round()],
      'max': sorted.last,
    };
  }

  @override
  Widget build(BuildContext context) => MaterialApp(
    home: Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            const SizedBox(height: 16),
            const SizedBox(
              width: 32,
              height: 32,
              child: CircularProgressIndicator(),
            ),
            ..._views,
          ],
        ),
      ),
    ),
  );
}
