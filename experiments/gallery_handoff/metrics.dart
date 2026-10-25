// ignore_for_file: depend_on_referenced_packages
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';

/// Scalar-only nested timings; no Widget, Context or JS value is retained.
class GalleryMetrics {
  GalleryMetrics(this.clock);
  final Stopwatch clock;
  bool enabled = false;
  int _depth = 0;
  final _labels = <String>[];
  final _starts = <int>[];
  final _children = <int>[];
  final _totals = <String, _Timing>{};
  Map<String, _Timing>? _frame;
  final frames = <Map<String, Object?>>[];

  void event(String label, bool enter) {
    if (!enabled) return;
    final now = clock.elapsedTicks;
    if (enter) {
      if (_depth == _labels.length) {
        _labels.add(label);
        _starts.add(now);
        _children.add(0);
      } else {
        _labels[_depth] = label;
        _starts[_depth] = now;
        _children[_depth] = 0;
      }
      _depth++;
    } else {
      if (_depth == 0 || _labels[_depth - 1] != label) {
        throw StateError('Unbalanced timing span: $label');
      }
      _depth--;
      final inclusive = now - _starts[_depth];
      final exclusive = inclusive - _children[_depth];
      if (_depth > 0) _children[_depth - 1] += inclusive;
      (_totals[label] ??= _Timing()).add(inclusive, exclusive);
      if (_frame case final frame?) {
        (frame[label] ??= _Timing()).add(inclusive, exclusive);
      }
    }
  }

  T measure<T>(String label, T Function() work) {
    if (!enabled) return work();
    event(label, true);
    try {
      return work();
    } finally {
      event(label, false);
    }
  }

  Map<String, Object?> snapshot() => _snapshot(_totals);
  Map<String, Object?> _snapshot(Map<String, _Timing> values) => {
    for (final entry in values.entries)
      entry.key: entry.value.json(clock.frequency),
  };

  void frame(VoidCallback work) {
    if (!enabled) {
      final start = clock.elapsedMicroseconds;
      try {
        work();
      } finally {
        final end = clock.elapsedMicroseconds;
        frames.add({
          'start': start,
          'end': end,
          'timings': {
            'flutter:frame': {
              'calls': 1,
              'inclusiveUs': end - start,
              'exclusiveUs': end - start,
              'maxUs': end - start,
            },
          },
        });
      }
      return;
    }
    if (_depth != 0 || _frame != null) {
      throw StateError('Unexpected recursive Flutter frame');
    }
    final start = clock.elapsedMicroseconds;
    _frame = {};
    try {
      measure('flutter:frame', work);
    } finally {
      frames.add({
        'start': start,
        'end': clock.elapsedMicroseconds,
        'timings': _snapshot(_frame!),
      });
      _frame = null;
      if (_depth != 0) throw StateError('Unfinished frame timing');
    }
  }

  void selfCheck() {
    enabled = true;
    measure('outer', () => measure('inner', () => clock.elapsedTicks));
    final outer = _totals['outer']!, inner = _totals['inner']!;
    if (outer.inclusive != outer.exclusive + inner.inclusive || _depth != 0) {
      throw StateError('Nested timings must not count children twice');
    }
    _totals.clear();
    enabled = false;
  }
}

class _Timing {
  int calls = 0, inclusive = 0, exclusive = 0, max = 0;
  void add(int total, int own) {
    calls++;
    inclusive += total;
    exclusive += own;
    if (total > max) max = total;
  }

  Map<String, Object> json(int frequency) => {
    'calls': calls,
    'inclusiveUs': inclusive * 1000000 / frequency,
    'exclusiveUs': exclusive * 1000000 / frequency,
    'maxUs': max * 1000000 / frequency,
  };
}

class GalleryBinding extends WidgetsFlutterBinding {
  GalleryBinding(this.metrics);
  final GalleryMetrics metrics;
  BuildOwner? _measuredOwner;
  @override
  BuildOwner? get buildOwner {
    final original = super.buildOwner;
    if (original == null) return null;
    // Keep Flutter's actual focus manager and scheduled-build callback.
    return _measuredOwner ??= _BuildOwner(metrics, original.focusManager);
  }

  @override
  PipelineOwner createRootPipelineOwner() => _PipelineOwner(metrics);
  @override
  void drawFrame() => metrics.frame(super.drawFrame);
}

class _BuildOwner extends BuildOwner {
  _BuildOwner(this.metrics, FocusManager focus) : super(focusManager: focus);
  final GalleryMetrics metrics;
  @override
  void buildScope(Element context, [VoidCallback? callback]) => metrics.measure(
    'flutter:build',
    () => super.buildScope(context, callback),
  );
  @override
  void finalizeTree() =>
      metrics.measure('flutter:finalize', super.finalizeTree);
}

final class _PipelineOwner extends PipelineOwner {
  _PipelineOwner(this.metrics);
  final GalleryMetrics metrics;
  @override
  void flushLayout() => metrics.measure('flutter:layout', super.flushLayout);
  @override
  void flushCompositingBits() =>
      metrics.measure('flutter:compositing', super.flushCompositingBits);
  @override
  void flushPaint() => metrics.measure('flutter:paint', super.flushPaint);
  @override
  void flushSemantics() =>
      metrics.measure('flutter:semantics', super.flushSemantics);
}
