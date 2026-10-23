// The experiment runner supplies the isolated consumer's package graph.
// ignore_for_file: depend_on_referenced_packages, avoid_print
import 'dart:async';
import 'dart:convert';
import 'dart:developer' as developer;
import 'dart:io';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

class PacingProbe extends FlaxPlugin implements FlaxPluginInstance {
  final ready = Completer<void>();
  final samples = <List<int>>[];
  final timings = <int, ui.FrameTiming>{};
  Completer<void>? done;
  late int started, vsync, frame;
  @override
  String get id => 'canvas.pacing';
  @override
  Set<String> get globals => {'__pacing'};
  void begin() {
    started = developer.Timeline.now;
    vsync =
        SchedulerBinding.instance.currentSystemFrameTimeStamp.inMicroseconds;
    frame = ui.PlatformDispatcher.instance.frameData.frameNumber;
  }

  void end(int step) {
    if (step >= 30) {
      samples.add([started, vsync, frame, developer.Timeline.now - started]);
    }
  }

  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    context.registerFunction('__pacing', (_, args) {
      switch ((args[0] as FlaxJsString).value) {
        case 'ready':
          ready.complete();
        case 'begin':
          begin();
        case 'end':
          end((args[1] as FlaxJsNumber).value.toInt());
        case 'done':
          done!.complete();
        default:
          throw StateError('Unknown pacing operation');
      }
      return const FlaxJsUndefined();
    });
    return this;
  }

  @override
  void close() {}
  @override
  void dispose() {}
}

void runPacing(FlaxJsRuntime Function() createRuntime) {
  runZonedGuarded(
    () async {
      final binding = WidgetsFlutterBinding.ensureInitialized();
      final output = Directory('${Directory.systemTemp.path}/afterglow')
        ..createSync(recursive: true);
      Flax.moduleAssets = await FlaxModuleAssets.load(
        bundle: rootBundle,
        manifest: 'assets/flax_modules/modules.json',
      );
      final probe = PacingProbe();
      late FlaxJsRuntime runtime;
      final session = FlaxSession(
        createRuntime: () => runtime = createRuntime(),
        source: await rootBundle.loadString('assets/afterglow.js'),
        bindings: FlaxBindingRegistry([flutterBindings]),
        plugins: [const FlaxCanvasPlugin(), probe],
        onError: (error, stack) => Error.throwWithStackTrace(error, stack),
      );
      runApp(
        Directionality(
          textDirection: TextDirection.ltr,
          child: Center(child: FlaxView.session(session: session)),
        ),
      );
      await probe.ready.future.timeout(const Duration(seconds: 15));
      final deadline = DateTime.now().add(const Duration(seconds: 15));
      while (binding.lifecycleState != AppLifecycleState.resumed) {
        if (DateTime.now().isAfter(deadline)) {
          throw StateError('Application did not resume');
        }
        await Future<void>.delayed(const Duration(milliseconds: 50));
      }
      final service = (await developer.Service.getInfo()).serverUri;
      if (service == null) {
        throw StateError('Pacing diagnostics require the Debug VM service');
      }
      Future<Map<String, dynamic>> rpc(
        String method, [
        Map<String, String>? query,
      ]) async {
        final client = HttpClient();
        try {
          final request = await client.getUrl(
            service.replace(
              path: '${service.path}$method',
              queryParameters: query,
            ),
          );
          final result = jsonDecode(
            await utf8.decoder.bind(await request.close()).join(),
          ) as Map<String, dynamic>;
          if (result.containsKey('error')) throw StateError('$method: $result');
          return result;
        } finally {
          client.close();
        }
      }

      void onTimings(List<ui.FrameTiming> values) {
        for (final value in values) {
          probe.timings[value.frameNumber] = value;
        }
      }

      binding.addTimingsCallback(onTimings);
      final hooks = runtime.getGlobal('pacing') as FlaxJsObject;
      final start = hooks.getProperty('start') as FlaxJsFunction;
      final results = <Map<String, Object>>[];
      final names = ['dart', 'js-idle', 'canvas', 'canvas-alloc', 'dart-after'];
      for (var mode = 0; mode < names.length; mode++) {
        probe.samples.clear();
        probe.timings.clear();
        probe.done = Completer<void>();
        await rpc('setVMTimelineFlags', {
          'recordedStreams': '[Dart,Embedder,GC]',
        });
        await rpc('clearVMTimeline');
        developer.Timeline.instantSync(
          'PacingCase',
          arguments: {'name': names[mode]},
        );
        if (mode == 0 || mode == 4) {
          var step = 0;
          void frame(Duration _) {
            probe.begin();
            probe.end(step);
            if (++step < 390) {
              binding.scheduleFrameCallback(frame);
            } else {
              probe.done!.complete();
            }
          }

          binding.scheduleFrameCallback(frame);
        } else {
          start.call([FlaxJsNumber(mode.toDouble())]);
        }
        await probe.done!.future.timeout(const Duration(seconds: 45));
        await Future<void>.delayed(const Duration(seconds: 1));
        final timeline = await rpc('getVMTimeline');
        await rpc('setVMTimelineFlags', {'recordedStreams': '[]'});
        File('${output.path}/pacing-${names[mode]}-timeline.json')
            .writeAsStringSync(jsonEncode(timeline));
        if (probe.samples.length != 360 ||
            binding.lifecycleState != AppLifecycleState.resumed) {
          throw StateError('Incomplete pacing samples');
        }
        final row = <String, Object>{
          'name': names[mode],
          'columns': [
            'timeline_us',
            'vsync_us',
            'frame',
            'callback_us',
            'build_us',
            'raster_us',
          ],
          'samples': probe.samples
              .map(
                (s) => [
                  ...s,
                  probe.timings[s[2]]?.buildDuration.inMicroseconds ?? -1,
                  probe.timings[s[2]]?.rasterDuration.inMicroseconds ?? -1,
                ],
              )
              .toList(),
        };
        results.add(row);
        print('PACING ${names[mode]} complete');
      }
      final close = hooks.getProperty('close') as FlaxJsFunction;
      close.call([]);
      close.release();
      start.release();
      hooks.release();
      binding.removeTimingsCallback(onTimings);
      runApp(const SizedBox.shrink());
      await binding.endOfFrame;
      await session.close();
      File('${output.path}/pacing.json').writeAsStringSync(
        jsonEncode({
          'complete': true,
          'mode': 'debug',
          'display_hz':
              ui.PlatformDispatcher.instance.views.first.display.refreshRate,
          'pixel_readback_during_frames': false,
          'warmup': 30,
          'results': results,
        }),
      );
      print('AFTERGLOW_PASSED');
      exit(0);
    },
    (error, stack) {
      print('$error\n$stack');
      print('FLAX_ENGINE_FAILED');
      exit(1);
    },
  );
}
