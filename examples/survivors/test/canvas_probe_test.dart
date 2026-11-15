import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter_test/flutter_test.dart';

import 'canvas_probe.dart';

class _CanvasContext extends Fake implements FlaxHostContext {
  final functions = <String, FlaxJsHostFunction>{};
  final closingAllowed = <String, bool>{};
  final callbackError = StateError('Canvas callback failed');
  final state = _CanvasState();

  @override
  ui.FlaxFontCollection? get fontCollection => null;

  @override
  void registerFunction(
    String name,
    FlaxJsHostFunction callback, {
    bool allowClosing = false,
  }) {
    functions[name] = callback;
    closingAllowed[name] = allowClosing;
  }

  @override
  FlaxJsValue evaluate(String source, {String sourceUrl = 'flax:host'}) =>
      state;

  @override
  T requireObject<T>(FlaxJsValue value, String typeId) => throw callbackError;

  @override
  void enqueue(void Function() action) {}
}

class _CanvasState extends Fake implements FlaxJsObject {
  @override
  void release() {}
}

void main() {
  testWidgets('eligible commit keeps target and duration until post-frame ID', (
    tester,
  ) async {
    final probe = CanvasProbe(), context = _CanvasContext();
    final instance = probe.install(context);
    addTearDown(instance.dispose);
    final binding = tester.binding;
    int? target, postFrameId;
    double? synchronousDuration;
    binding.addPostFrameCallback((_) {
      postFrameId = ui.PlatformDispatcher.instance.frameData.frameNumber;
      // The real endWindow boundary runs before this frame's deferred append.
      probe.recordCommits = false;
      expect(probe.commits, isEmpty);
      final delay = Stopwatch()..start();
      while (delay.elapsedMilliseconds < 20) {
        // Make deferred waiting observable without a fixed timing threshold.
      }
    });
    binding.scheduleFrameCallback((_) {
      expect(binding.schedulerPhase, SchedulerPhase.transientCallbacks);
      target = binding.currentSystemFrameTimeStamp.inMicroseconds;
      final invocation = Stopwatch()..start();
      expect(
        () => context.functions['__flaxCanvasCall']!(const FlaxJsUndefined(), [
          const FlaxJsString('commit'),
          const FlaxJsNumber(0),
        ]),
        throwsA(same(context.callbackError)),
      );
      invocation.stop();
      synchronousDuration = invocation.elapsedMicroseconds / 1000;
      expect(probe.commits, isEmpty);
    });
    await tester.pump(const Duration(milliseconds: 17));
    expect(probe.recordCommits, isFalse);
    final commit = probe.commits.single;
    expect(commit.frame, postFrameId);
    expect(commit.vsync, target);
    expect(commit.milliseconds, lessThanOrEqualTo(synchronousDuration!));
    expect(probe.operations['commit'], 1);
    expect(context.closingAllowed['__flaxCanvasCall'], isTrue);
    expect(binding.hasScheduledFrame, isFalse);
  });

  testWidgets('disabled-at-entry commit stays excluded after boundary opens', (
    tester,
  ) async {
    final probe = CanvasProbe()..recordCommits = false;
    final context = _CanvasContext();
    final instance = probe.install(context);
    addTearDown(instance.dispose);
    tester.binding.addPostFrameCallback((_) => probe.recordCommits = true);
    tester.binding.scheduleFrameCallback((_) {
      expect(
        () => context.functions['__flaxCanvasCall']!(const FlaxJsUndefined(), [
          const FlaxJsString('commit'),
          const FlaxJsNumber(0),
        ]),
        throwsA(same(context.callbackError)),
      );
    });
    await tester.pump(const Duration(milliseconds: 17));
    expect(probe.recordCommits, isTrue);
    expect(probe.commits, isEmpty);
    expect(probe.operations['commit'], 1);
  });
}
