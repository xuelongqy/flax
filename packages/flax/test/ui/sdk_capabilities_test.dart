import 'dart:convert';

import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/engine.dart';

String _require(String name) {
  final manifest = jsonDecode(
    flaxTestFixtureFile('modules/modules.json', packageName: 'flax'),
  ) as Map;
  final module = (manifest['modules'] as List)
      .cast<Map<dynamic, dynamic>>()
      .singleWhere((module) => module['specifier'] == name);
  return '__flaxModules.require(${jsonEncode(name)}, '
      '${jsonEncode(module['version'])}, ${jsonEncode(module['artifact'])})';
}

FlaxOwnedTestHarness _harness(
  String source, {
  void Function(FlaxObjectBinding, Object)? onCreate,
}) => FlaxOwnedTestHarness(
  createRuntime: createTestRuntime,
  bindings: FlaxBindingRegistry([flutterBindings]),
  extra: [sdk_widgetsBindings, sdk_dependenciesBindings],
  onCreate: onCreate,
  source:
      '''
        var W = ${_require('@flax/flutter/widgets')};
        var P = ${_require('@flax/flutter/painting')};
        var B = ${_require('@flax/core/bindings')};
        $source
      ''',
);

@pragma('vm:never-inline')
bool _alive(WeakReference<Object> peer) => peer.target != null;

void main() {
  testWidgets(
    'native non-virtual calls retain JS overrides, super and joint collection',
    (tester) async {
      final peers = <WeakReference<Object>>[];
      final h = _harness(
        '''
      var calls = 0;
      class Order extends W.NumericFocusOrder {
        #offset = 0;
        doCompare(other) { calls++; return super.doCompare(other) + this.#offset; }
      }
      var order = new Order(1);
      var other = new Order(2);
      var weak = new WeakRef(order);
      order.self = order;
      var comparison = order.compareTo(other);
      var callable = typeof new P.AssetImage('not-loaded.png').resolve === 'function' &&
        typeof new P.ImageStreamCompleter().maybeDispose === 'function';
      W.registerPage('sdk', () => W.SizedBox());
    ''',
        onCreate: (binding, value) {
          if (binding.id.endsWith('#type:NumericFocusOrder')) {
            peers.add(WeakReference(value));
          }
        },
      );
      try {
        await tester.pumpWidget(h.page('sdk'));
        expect(h.errors, isEmpty);
        expect(h.boolean('callable'), isTrue);
        expect(h.number('comparison'), -1);
        expect(h.number('calls'), 1);
        expect(peers, hasLength(2));
        h.execute('order = null; other = null;');
        for (var round = 0; round < 8 && peers.any(_alive); round++) {
          h.runtime.drainMicrotasks();
          h.execute(flaxTestJsGarbagePressure);
          await tester.runAsync(flaxTestCollectDartGarbage);
          await tester.pump();
        }
        expect(peers.any(_alive), isFalse);
        expect(h.boolean('weak.deref() === undefined'), isTrue);
      } finally {
        await h.finish(tester);
      }
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'Context methods share typed calls, callbacks and checked generic queries',
    (tester) async {
      final h = _harness('''
      var savedContext;
      var visits = 0;
      W.registerPage('sdk', () => W.Builder({builder: context => {
        savedContext = context;
        return W.SizedBox({width: 17, height: 19});
      }}));
      function inspectContext() {
        savedContext.visitAncestorElements(element => { visits++; return true; });
        return savedContext.findRenderObject() !== null &&
          B.dartType(savedContext, 'findAncestorWidgetOfExactType', W.Directionality)() !== null;
      }
    ''');
      try {
        await tester.pumpWidget(
          Directionality(
            textDirection: TextDirection.ltr,
            child: h.page('sdk'),
          ),
        );
        expect(h.errors, isEmpty);
        expect(h.boolean('inspectContext()'), isTrue);
        expect(h.number('visits'), greaterThan(0));
        await tester.pumpWidget(const SizedBox());
        expect(h.boolean('savedContext.mounted'), isFalse);
        expect(
          h.boolean(
            '(() => { try { savedContext.findRenderObject(); return false; } catch (_) { return true; } })()',
          ),
          isTrue,
        );
      } finally {
        await h.finish(tester);
      }
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'selected dependencies and abstract omission use ordinary object conversion',
    (tester) async {
      final h = _harness('''
      var V = ${_require('@flax/flutter/vector_math')};
      var C = ${_require('@flax/dart/convert')};
      var D = ${_require('@flax/dart/developer')};
      var Core = ${_require('@flax/dart/core')};
      var vector = V.Vector3(1, 2, 3);
      var matrix = W.Matrix4.translation(vector);
      var encoding = C.Utf8Codec();
      var decoded = encoding.decode(encoding.encode('Flax'));
      var wrongListRejected = false;
      try { encoding.decode(new Float64Array([65.5])); } catch (_) { wrongListRejected = true; }
      var watch = Core.Stopwatch();
      watch.start(); watch.stop();
      var flow = D.Flow.begin({id: 73});
      var decoration = B.asDart(P.BoxDecoration(), P.Decoration);
      // Call the abstract declaration, whose callback is non-null when supplied.
      var painterSlot = __flaxResolveOperation(24,
        'flax.core/flutter#type:Decoration', 'object', 'call', 'createBoxPainter',
        [{name: 'onChanged', positional: true}]);
      var createPainter = (...args) => __flaxInvokeOperation(painterSlot,
        __flaxBindings.objectHandle(decoration), ...args);
      var painter = createPainter();
      painter.dispose();
      painter = createPainter(undefined); painter.dispose();
      var rejectedNull = String(createPainter(null).error).includes('Unexpected null');
      var constructors = typeof W.Action === 'function';
      class NativeAction extends W.Action {
        invoke(intent) { return 'handled'; }
      }
      var actionResult = new W.ActionDispatcher().invokeAction(
        new NativeAction(), new W.ActivateIntent());
      W.registerPage('sdk', () => W.SizedBox());
    ''');
      try {
        await tester.pumpWidget(h.page('sdk'));
        expect(h.errors, isEmpty);
        expect(h.number('matrix.getTranslation().x'), 1);
        expect(h.string('decoded'), 'Flax');
        expect(h.boolean('watch.elapsedMicroseconds >= 0'), isTrue);
        expect(h.boolean('rejectedNull'), isTrue);
        expect(h.boolean('constructors'), isTrue);
        expect(h.string('actionResult'), 'handled');
        expect(h.boolean('wrongListRejected'), isTrue);
      } finally {
        await h.finish(tester);
      }
      expect(h.errors, isEmpty);
    },
  );
}
