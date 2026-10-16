import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/dart_types_bindings.dart';
import '../../.dart_tool/flax/ui/interop_bindings.dart';
import '../../.dart_tool/flax/ui/extensions_bindings.dart';
import '../fixtures/dart_types.dart' as fixture;
import '../fixtures/interop.dart' as interop;
import '../support/owned_harness.dart';

@pragma('vm:never-inline')
String _callDartRoot(List<Object> roots) => roots
    .whereType<fixture.CodegenTypeProcessor<String>>()
    .single
    .transform('root');

@pragma('vm:never-inline')
bool _ownersAlive(List<WeakReference<Object>> owners) =>
    owners.every((owner) => owner.target != null);

void main() {
  testWidgets('compiled generics retain inheritance and typed async super', (
    tester,
  ) async {
    final h = OwnedHarness(
      fixture: 'typescript_generics',
      extra: [dart_typesBindings, interopBindings, extensionsBindings],
    );
    try {
      await tester.pumpWidget(h.app('compiler'));
      h.execute(
        'compilerHooks.exercise().then(value => {globalThis.compilerResult = value;});',
      );
      for (var i = 0; i < 40; i++) {
        h.runtime.drainMicrotasks();
        await tester.pump(const Duration(milliseconds: 1));
        if (h.boolean('globalThis.compilerResult === "verified"')) break;
      }
      expect(h.boolean('globalThis.compilerResult === "verified"'), isTrue);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(tester);
    }
  });

  testWidgets('compiled generic proxy follows Dart roots and collects cycles', (
    tester,
  ) async {
    final roots = <Object>[];
    final owners = <WeakReference<Object>>[];
    final h = OwnedHarness(
      fixture: 'typescript_generics',
      extra: [dart_typesBindings, interopBindings, extensionsBindings],
      onCreate: (_, value) {
        if (value is fixture.CodegenTypeProcessor<String> &&
                value.seed == 'gc' ||
            value is interop.CodegenGenericMethods) {
          owners.add(WeakReference(value));
          roots.add(value);
        }
      },
    );
    try {
      await tester.pumpWidget(h.app('compiler'));
      h.execute('compilerHooks.cycle()');
      await tester.runAsync(flaxTestCollectDartGarbage);
      expect(h.boolean('compilerWeak.deref() !== undefined'), isTrue);
      expect(_callDartRoot(roots), 'root!?');
      h.execute('compilerHooks.retain()');
      roots.clear();
      await tester.runAsync(flaxTestCollectDartGarbage);
      expect(_ownersAlive(owners), isTrue);
      h.execute('compilerHooks.release()');
      for (var i = 0; i < 40; i++) {
        h.runtime.drainMicrotasks();
        h.execute(flaxTestJsGarbagePressure);
        await tester.pumpAndSettle();
        await tester.runAsync(flaxTestCollectDartGarbage);
        if (h.boolean(
          'compilerWeak.deref() === undefined && compilerMethodsWeak.deref() === undefined',
        )) {
          break;
        }
      }
      expect(h.boolean('compilerWeak.deref() === undefined'), isTrue);
      expect(h.boolean('compilerMethodsWeak.deref() === undefined'), isTrue);
      expect(owners, hasLength(2));
      expect(owners.every((owner) => owner.target == null), isTrue);
      expect(h.errors, isEmpty);
    } finally {
      roots.clear();
      await h.finish(tester);
    }
  });
}
