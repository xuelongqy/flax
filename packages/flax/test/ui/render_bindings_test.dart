import 'dart:convert';

import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/engine.dart';

FlaxOwnedTestHarness _harness(List<WeakReference<RenderProxyBox>> peers) {
  final manifest = jsonDecode(
    flaxTestFixtureFile('modules/modules.json', packageName: 'flax'),
  ) as Map;
  String require(String name) {
    final module = (manifest['modules'] as List)
        .cast<Map<dynamic, dynamic>>()
        .singleWhere((module) => module['specifier'] == name);
    return '__flaxModules.require(${jsonEncode(name)}, '
        '${jsonEncode(module['version'])}, ${jsonEncode(module['artifact'])})';
  }

  return FlaxOwnedTestHarness(
    createRuntime: createTestRuntime,
    bindings: FlaxBindingRegistry([flutterBindings]),
    extra: [sdk_renderingBindings],
    onCreate: (binding, value) {
      if (binding.id == 'flax.core/sdk_rendering#type:RenderProxyBox') {
        peers.add(WeakReference(value as RenderProxyBox));
      }
    },
    source:
        '''
      var R = ${require('@flax/flutter/rendering')};
      var W = ${require('@flax/flutter/widgets')};
      var counts = {get: 0, compute: 0};
      var captureVisitor = false;
      var weakCallback;
      class Probe extends R.RenderProxyBox {
        #increment = 7;
        getMinIntrinsicWidth(height) {
          counts.get++;
          return super.getMinIntrinsicWidth(height) + 1;
        }
        computeMinIntrinsicWidth(height) {
          counts.compute++;
          return super.computeMinIntrinsicWidth(height) + this.#increment;
        }
        visitChildren(visitor) {
          if (captureVisitor) {
            this.savedVisitor = visitor;
            weakCallback = new WeakRef(visitor);
          }
          super.visitChildren(visitor);
        }
      }
      var plain = R.RenderProxyBox.implement([], {});
      var probe = new Probe();
      var weakProbe = new WeakRef(probe);
      var tight = R.BoxConstraints.tightFor({width: 32, height: 16});
      function renderBatch(kind, iterations) {
        const box = kind === 'plain' ? plain : probe;
        let checksum = 0;
        for (let i = 0; i < iterations; i++) {
          box.markNeedsLayout();
          box.layout(tight);
          checksum += box.getMinIntrinsicWidth(i) + box.getDryLayout(tight).width;
        }
        return checksum;
      }
      W.registerPage('renderBindings', () => W.SizedBox());
    ''',
  );
}

// Keep temporary native roots off the async test's stack during collection.
@pragma('vm:never-inline')
void _nativeChecksAndBenchmark(
  FlaxOwnedTestHarness h,
  WeakReference<RenderProxyBox> peer,
) {
  final child = peer.target!;
  final parent = RenderProxyBox(child);
  final RenderObject object = parent;
  final RenderBox box = parent;
  const tight = BoxConstraints.tightFor(width: 32, height: 16);
  try {
    object.layout(tight);
    expect(box.size, const Size(32, 16));
    expect(box.constraints, tight);
    expect(box.getDryLayout(tight), const Size(32, 16));
    expect(box.getMinIntrinsicWidth(73), 8);
    final children = <RenderObject>[];
    object.visitChildren(children.add);
    expect(children, [child]);
    expect(h.number('counts.get'), greaterThan(0));
    expect(h.number('counts.compute'), greaterThan(0));

    const iterations = 200;
    final results = <String, Object?>{};
    void measure(String name, num Function() run, num expected) {
      for (var i = 0; i < 2; i++) {
        expect(run(), expected);
      }
      final samples = <int>[];
      final checksums = <num>[];
      for (var i = 0; i < 5; i++) {
        final watch = Stopwatch()..start();
        final checksum = run();
        watch.stop();
        samples.add(watch.elapsedMicroseconds);
        checksums.add(checksum);
        expect(checksum, expected);
      }
      results[name] = {'microseconds': samples, 'checksums': checksums};
    }

    measure(
      'jsInherited',
      () => h.number('renderBatch("plain", $iterations)'),
      iterations * 32,
    );
    measure(
      'jsOverrideSuper',
      () => h.number('renderBatch("probe", $iterations)'),
      iterations * 40,
    );
    measure('nativeParentOverrideSuper', () {
      var checksum = 0.0;
      for (var i = 0; i < iterations; i++) {
        child.markNeedsLayout();
        object.layout(tight);
        checksum +=
            box.getMinIntrinsicWidth(i.toDouble()) +
            box.getDryLayout(tight).width;
      }
      return checksum;
    }, iterations * 40);
    // Instrumented, single-process observations; no timing acceptance threshold.
    // ignore: avoid_print
    print(
      'FLAX_RENDER_BINDINGS_BENCHMARK:${jsonEncode({'mode': kReleaseMode ? 'release' : (kProfileMode ? 'profile' : 'debug'), 'iterations': iterations, 'warmupBatches': 2, 'samples': results})}',
    );
  } finally {
    parent.child = null;
    parent.dispose();
  }
}

@pragma('vm:never-inline')
RenderProxyBox _callbackCycle(WeakReference<RenderProxyBox> peer) {
  final probe = peer.target!;
  probe.visitChildren((_) => probe.markNeedsLayout());
  return RenderProxyBox(probe);
}

@pragma('vm:never-inline')
bool _alive(WeakReference<RenderProxyBox> peer) => peer.target != null;

Future<void> _collect(WidgetTester tester, FlaxOwnedTestHarness h) async {
  h.runtime.drainMicrotasks();
  h.execute(flaxTestJsGarbagePressure);
  await tester.pumpAndSettle();
  await tester.runAsync(flaxTestCollectDartGarbage);
}

void main() {
  testWidgets(
    'full rendering bindings dispatch inherited calls and native super',
    (tester) async {
      final peers = <WeakReference<RenderProxyBox>>[];
      final h = _harness(peers);
      try {
        await tester.pumpWidget(h.page('renderBindings'));
        expect(h.errors, isEmpty);
        expect(peers, hasLength(2));
        expect(
          h.boolean(
            'probe instanceof R.RenderObject && '
            'probe instanceof R.RenderBox && probe instanceof R.RenderProxyBox',
          ),
          isTrue,
        );
        h.execute('plain.layout(tight, {parentUsesSize: false});');
        expect(
          h.boolean(
            'plain.size.width === 32 && plain.size.height === 16 && '
            'plain.constraints.minWidth === 32 && plain.constraints.maxHeight === 16 && '
            'plain.getDryLayout(tight).width === 32 && plain.getDryLayout(tight).height === 16',
          ),
          isTrue,
        );
        expect(h.number('plain.getMinIntrinsicWidth(71)'), 0);
        h.execute('''
        var visits = 0;
        plain.visitChildren(() => visits++);
      ''');
        expect(h.number('visits'), 0);
        h.execute('''
        plain.child = probe;
        plain.visitChildren(child => {
          if (child !== probe) throw new Error('Render child identity lost');
          visits++;
        });
        plain.child = null;
      ''');
        expect(h.number('visits'), 1);
        expect(h.number('probe.getMinIntrinsicWidth(71)'), 8);
        h.execute('''
          var foreignSuper = __flaxInvokeOperation(
            __flaxResolveOperation(24, 'flax.core/sdk_rendering#type:RenderBox',
              'object', 'call', '@super:computeMinIntrinsicWidth'),
            __flaxBindings.objectHandle(probe), 71);
        ''');
        expect(
          h.string('String(foreignSuper.error)'),
          contains('Foreign Dart proxy super receiver'),
        );
        _nativeChecksAndBenchmark(h, peers.last);
        h.execute('''
          class MissingSuper extends R.RenderProxyBox {
            getMinIntrinsicWidth(height) { return 5; }
          }
          var missingSuper = new MissingSuper();
        ''');
        final badParent = RenderProxyBox(peers.last.target!);
        final RenderBox nativeBox = badParent;
        try {
          expect(
            () => nativeBox.getMinIntrinsicWidth(0),
            throwsA(
              isA<StateError>().having(
                (error) => error.message,
                'message',
                contains(
                  'getMinIntrinsicWidth must call super.getMinIntrinsicWidth()',
                ),
              ),
            ),
          );
        } finally {
          badParent.child = null;
          badParent.dispose();
        }
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(tester);
      }
    },
  );

  testWidgets(
    'render callback cycle follows Dart and JS roots before collection',
    (tester) async {
      final peers = <WeakReference<RenderProxyBox>>[];
      final h = _harness(peers);
      RenderProxyBox? dartRoot;
      try {
        await tester.pumpWidget(h.page('renderBindings'));
        expect(h.errors, isEmpty);
        h.execute('captureVisitor = true;');
        dartRoot = _callbackCycle(peers.last);
        // The harness records disposable objects strongly, independently of JS roots.
        h.created.clear();
        h.execute('probe = null;');
        await _collect(tester, h);
        expect(_alive(peers.last), isTrue);
        expect(
          h.boolean(
            'weakProbe.deref() !== undefined && '
            'weakCallback.deref() !== undefined',
          ),
          isTrue,
        );
        expect(dartRoot.getMinIntrinsicWidth(91), 8);

        h.execute('probe = weakProbe.deref(); probe.savedVisitor(probe);');
        dartRoot.child = null;
        dartRoot.dispose();
        dartRoot = null;
        await _collect(tester, h);
        expect(_alive(peers.last), isTrue);
        expect(h.number('probe.getMinIntrinsicWidth(92)'), 8);

        h.execute('probe = null;');
        for (var i = 0; i < 40; i++) {
          await _collect(tester, h);
          if (!_alive(peers.last) &&
              h.boolean(
                'weakProbe.deref() === undefined && '
                'weakCallback.deref() === undefined',
              )) {
            break;
          }
        }
        expect(_alive(peers.last), isFalse);
        expect(
          h.boolean(
            'weakProbe.deref() === undefined && '
            'weakCallback.deref() === undefined',
          ),
          isTrue,
        );
        expect(h.runtime.isDisposed, isFalse);
        expect(h.errors, isEmpty);
      } finally {
        if (dartRoot != null) {
          dartRoot.child = null;
          dartRoot.dispose();
        }
        await h.finish(tester);
      }
    },
  );
}
