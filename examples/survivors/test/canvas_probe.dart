import 'dart:ui' as ui;

import 'package:audioplayers/audioplayers.dart' as audio;
import 'package:audioplayers_platform_interface/audioplayers_platform_interface.dart';
import 'package:flax/flax.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flutter/scheduler.dart';

import 'lifecycle_probe.dart';
import 'native_audio_probe.dart';

// Acceptance-only callback timing follows experiments/canvas_native/draw_image_app.dart.
class CanvasProbe extends FlaxPlugin {
  CanvasProbe({this.images});
  final SurvivorsImageProbe? images;
  int _session = 0;
  static const canvas = FlaxCanvasPlugin();
  final commits = <({int frame, int vsync, double milliseconds})>[];
  bool recordCommits = true;
  final operations = <String, int>{};
  @override
  String get id => canvas.id;
  @override
  Set<String> get globals => {
    ...canvas.globals,
    '__survivorsObserveAudioPlayer',
    '__survivorsBitmapSettled',
  };
  @override
  Set<String> get jsModules => canvas.jsModules;
  @override
  List<FlaxBindingModule> get bindingModules => canvas.bindingModules;
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    context.registerFunction('__survivorsObserveAudioPlayer', (_, arguments) {
      final platform = AudioplayersPlatformInterface.instance;
      if (platform is NativeAudioProbe) {
        platform.observePlayer(
          context.requireObject<audio.AudioPlayer>(
            arguments.single,
            'flax.audio/audio#type:AudioPlayer',
          ),
        );
      }
      return const FlaxJsUndefined();
    });
    final session = ++_session;
    final observed = _ProbeContext(context, this, session);
    context.registerFunction('__survivorsBitmapSettled', (_, arguments) {
      observed.bitmapSettled(arguments);
      return const FlaxJsUndefined();
    });
    return _ProbeInstance(canvas.install(observed), images, session);
  }
}

class _ProbeContext implements FlaxHostContext {
  _ProbeContext(this.context, this.probe, this.session);
  final int session;
  final _pendingBitmaps = <int, String>{};

  void bitmapSettled(List<FlaxJsValue> arguments) {
    final request = (arguments[0] as FlaxJsNumber).value.toInt();
    final operation = _pendingBitmaps.remove(request);
    if (operation == null) return;
    if (!(arguments[1] as FlaxJsBoolean).value) {
      probe.images?.failedInputs++;
      return;
    }
    final id = operation == 'transformImageBitmap'
        ? (arguments[2] as FlaxJsNumber).value.toInt()
        : ((arguments[2] as FlaxJsObject).getProperty('0') as FlaxJsNumber)
              .value
              .toInt();
    probe.images?.bitmapCreated(session, id, operation);
  }

  final FlaxHostContext context;
  final CanvasProbe probe;
  @override
  void registerFunction(
    String name,
    FlaxJsHostFunction callback, {
    bool allowClosing = false,
  }) {
    context.registerFunction(name, (receiver, arguments) {
      final operation = (arguments.first as FlaxJsString).value;
      probe.operations.update(
        operation,
        (count) => count + 1,
        ifAbsent: () => 1,
      );
      if (operation != 'commit' || !probe.recordCommits) {
        final request =
            probe.images != null &&
                (operation == 'createImageBitmap' ||
                    operation == 'transformImageBitmap')
            ? (arguments[1] as FlaxJsNumber).value.toInt()
            : null;
        if (request != null) _pendingBitmaps[request] = operation;
        FlaxJsValue result;
        try {
          result = callback(receiver, arguments);
        } catch (_) {
          if (request != null) _pendingBitmaps.remove(request);
          rethrow;
        }
        if (operation == 'transferToImageBitmap') {
          probe.images?.bitmapCreated(
            session,
            (result as FlaxJsNumber).value.toInt(),
            operation,
          );
        } else if (operation == 'retainImage') {
          probe.images?.bitmapRetained(
            session,
            (arguments[1] as FlaxJsNumber).value.toInt(),
          );
        } else if (operation == 'closeImage') {
          probe.images?.bitmapClosed(
            session,
            (arguments[1] as FlaxJsNumber).value.toInt(),
          );
        }
        return result;
      }
      final watch = Stopwatch()..start();
      try {
        return callback(receiver, arguments);
      } finally {
        watch.stop();
        // The framework timestamp is the frame target, not native vsync start.
        final vsync = SchedulerBinding
            .instance
            .currentSystemFrameTimeStamp
            .inMicroseconds;
        final milliseconds = watch.elapsedMicroseconds / 1000;
        SchedulerBinding.instance.addPostFrameCallback((_) {
          probe.commits.add((
            frame: ui.PlatformDispatcher.instance.frameData.frameNumber,
            vsync: vsync,
            milliseconds: milliseconds,
          ));
        });
      }
    }, allowClosing: allowClosing);
  }

  @override
  String? get namespace => context.namespace;
  @override
  FlaxSandboxContext? get sandbox => context.sandbox;
  @override
  FlaxPermissionContext? get permissions => context.permissions;
  @override
  ui.FlaxFontCollection? get fontCollection => context.fontCollection;
  @override
  FlaxJsRuntime get runtime => context.runtime;
  @override
  List<FlaxBindingModule> get bindingModules => context.bindingModules;
  @override
  bool get isClosing => context.isClosing;
  @override
  bool get isActive => context.isActive;
  @override
  FlaxJsValue evaluate(String source, {String sourceUrl = 'flax:host'}) {
    final result = context.evaluate(source, sourceUrl: sourceUrl);
    if (sourceUrl == 'flax:canvas' && probe.images != null) {
      // Observe the real successful async reply, not the native codec callback's Zone.
      final state = result as FlaxJsObject;
      final original = state.getProperty('settle') as FlaxJsFunction;
      final factory = context.runtime.evaluate(
        '(settle)=>(...args)=>{__survivorsBitmapSettled(...args);return settle(...args)}',
      ) as FlaxJsFunction;
      try {
        final wrapped = factory.call([original]) as FlaxJsFunction;
        try {
          state.setProperty('settle', wrapped);
        } finally {
          wrapped.release();
        }
      } finally {
        original.release();
        factory.release();
      }
    }
    return result;
  }

  @override
  FlaxJsValue evaluateSource(FlaxJsSource source) =>
      context.evaluateSource(source);
  @override
  void enqueue(void Function() action) => context.enqueue(action);
  @override
  void requestCheckpoint() => context.requestCheckpoint();
  @override
  void report(Object error, StackTrace stack) => context.report(error, stack);
  @override
  FlaxJsObject exposeObject(Object value, String typeId) =>
      context.exposeObject(value, typeId);
  @override
  T requireObject<T>(FlaxJsValue value, String typeId) =>
      context.requireObject<T>(value, typeId);
}

class _ProbeInstance implements FlaxPluginInstance {
  _ProbeInstance(this.canvas, this.images, this.session);
  final FlaxPluginInstance canvas;
  final SurvivorsImageProbe? images;
  final int session;
  @override
  void close() => canvas.close();
  @override
  void dispose() {
    canvas.dispose();
    images?.sessionDisposed(session);
  }
}
