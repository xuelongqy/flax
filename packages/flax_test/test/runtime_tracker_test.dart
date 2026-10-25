import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';

@pragma('vm:never-inline')
WeakReference<Object> _abandon(FlaxTestRuntimeTracker runtime) =>
    WeakReference(runtime.evaluate('({value: 1})') as FlaxJsObject);

@pragma('vm:never-inline')
bool _alive(WeakReference<Object> reference) => reference.target != null;

void main() {
  testWidgets('tracker keeps independent retains and borrowed facades', (
    tester,
  ) async {
    final runtime = FlaxTestRuntimeTracker(FlaxEngine.createRuntime());
    try {
      final first = runtime.evaluate('({})') as FlaxJsObject;
      final alias = first.retain();
      for (var i = 0; i < 600; i++) {
        (runtime.evaluate('({})') as FlaxJsObject).release();
      }
      expect(runtime.handles, 2);
      first.release();
      expect(runtime.handles, 1);
      alias.release();
      expect(runtime.handles, 0);
      final borrowed = runtime.wrap(
        runtime.inner.evaluate('({})'),
        'borrowed',
        owned: false,
      ) as FlaxJsObject;
      expect(runtime.handles, 0);
      borrowed.release();
    } finally {
      runtime.dispose();
    }
    expect(runtime.handlesAtDispose, 0);
  });

  testWidgets('tracker weak slots do not keep abandoned facades alive', (
    tester,
  ) async {
    final runtime = FlaxTestRuntimeTracker(FlaxEngine.createRuntime());
    try {
      final weak = _abandon(runtime);
      for (var i = 0; i < 15 && _alive(weak); i++) {
        await tester.runAsync(flaxTestCollectDartGarbage);
      }
      expect(_alive(weak), isFalse);
      expect(runtime.handles, 0);
    } finally {
      runtime.dispose();
    }
    expect(runtime.handlesAtDispose, 0);
  });
}
