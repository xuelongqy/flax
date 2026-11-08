import 'package:flax/flax.dart';
// Native cell counts distinguish unlink from later collection.
// ignore: implementation_imports
import 'package:flax/src/native/native_runtime.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

const _controllerType = FlaxTypeRef(
  'object',
  id: 'flax.core/flutter#type:TextEditingController',
);

const _setup = r'''
  globalThis.core = __flaxModules.require('@flax/core');
  globalThis.widgets = __flaxModules.require('@flax/flutter/widgets');
  globalThis.check = function (value, message) {
    if (!value) throw new Error(message);
  };
  globalThis.rejectsTypeError = function (operation) {
    try {
      operation();
    } catch (error) {
      if (error instanceof TypeError) return;
      throw error;
    }
    throw new Error('Expected TypeError');
  };
  widgets.runApp(widgets.Builder({builder: context => {
    rejectsTypeError(() => core.ownJointObject(context));
    return widgets.SizedBox();
  }}));
''';

void main() {
  testWidgets('owned views unlink exactly one native target cell', (
    tester,
  ) async {
    final controller = TextEditingController(text: 'native');
    final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
    runtime.registerHostFunction('testCellCount', (_, _) {
      return FlaxJsNumber(runtime.bridgeCellCount.toDouble());
    });
    runtime.registerHostFunction('testNativeJointRejects', (_, args) {
      final view = args[1] as FlaxJsObject;
      try {
        if ((args[0] as FlaxJsBoolean).value) {
          runtime.bindOwnedDartPeer(view, controller);
        } else {
          runtime.unlinkOwnedDartPeer(view);
        }
      } on ArgumentError {
        return const FlaxJsBoolean(true);
      }
      return const FlaxJsBoolean(false);
    });
    final errors = <Object>[];
    final session = FlaxSession(
      createRuntime: () => runtime,
      bindings: FlaxBindingRegistry([
        flutterBindings,
        FlaxBindingModule(
          'joint-unlink',
          const [],
          moduleId: 'test/joint-unlink',
          dependencyModules: [flutterBindings.moduleId],
          uiProtocol: flaxBindingVersion,
          requiredCapabilities: const [],
          functions: [
            FlaxFunctionBinding(
              'test/joint-unlink#function:controller',
              const [],
              _controllerType,
              (_) => controller,
            ),
            FlaxFunctionBinding(
              'test/joint-unlink#function:sameController',
              const [FlaxParameter.required('candidate', _controllerType)],
              const FlaxTypeRef('bool'),
              (args) => identical(args['candidate'], controller),
            ),
          ],
        ),
      ]),
      source: _setup,
      onError: (error, _) => errors.add(error),
    );
    try {
      await flaxTestPumpView(tester, FlaxView.session(session: session));
      runtime.evaluate(r'''
        var bindings = __flaxModules.require('@flax/core/bindings');
        var readController = () => bindings.invokeTopLevel(
          'test/joint-unlink#function:controller', []);
        var canonical = readController();
        // Resolve the cold helpers and release the transient Dart result first.
        check(core.unlinkJoint(core.ownJointObject(canonical)), 'Warmup unlink failed');
        var startCells = testCellCount();
        var first = core.ownJointObject(canonical);
        var second = core.ownJointObject(first);
        var joinedCells = testCellCount();
        check(joinedCells === startCells + 2,
          'Each view needs one cell: ' + startCells + ' -> ' + joinedCells);
        check(first !== second && first !== canonical, 'Views must be fresh');
        check(first instanceof widgets.TextEditingController, 'Missing typed view');
        check(readController() === canonical, 'Lookup selected an owned view');
        check(bindings.invokeTopLevel(
          'test/joint-unlink#function:sameController', [first]), 'Dart identity changed');
        check(testNativeJointRejects(true, canonical), 'Native retagged canonical view');
        check(testNativeJointRejects(true, first), 'Native rebound an owned view');
        check(testNativeJointRejects(false, canonical), 'Native unlinked canonical view');
        check(testNativeJointRejects(false, new Proxy(first, {})), 'Native unlinked a proxy');
        for (const wrong of [null, 1, {}, canonical, new Proxy(first, {})]) {
          rejectsTypeError(() => core.unlinkJoint(wrong));
        }

        var invoke = __flaxInvokeOperation;
        var failure = new Error('injected unlink failure');
        try {
          globalThis.__flaxInvokeOperation = () => { throw failure; };
          try {
            core.unlinkJoint(first);
            throw new Error('Expected injected failure');
          } catch (error) {
            check(error === failure, 'Unlink hid the original failure');
          }
        } finally {
          globalThis.__flaxInvokeOperation = invoke;
        }
        check(first.text === 'native', 'Failed unlink invalidated the view');

        var cells = testCellCount();
        check(core.unlinkJoint(first), 'First unlink failed');
        var remainingCells = testCellCount();
        check(remainingCells === cells - 1,
          'Native cell survived unlink: ' + cells + ' -> ' + remainingCells);
        check(!core.unlinkJoint(first), 'Repeat unlink changed state');
        check(testNativeJointRejects(false, first), 'Native target survived unlink');
        check(testNativeJointRejects(true, first), 'Native retagged a retired view');
        var ownSlot = __flaxResolveOperation(bindings.bindingVersion, '', 'joint', 'own', '');
        var forged = __flaxInvokeOperation(ownSlot, 0, canonical, canonical);
        check(__flaxBindings.callFailure(forged), 'Host accepted an unissued view');
        check(!(first instanceof widgets.TextEditingController), 'View is still live');
        rejectsTypeError(() => core.ownJointObject(first));
        second.text = 'retained';
        check(canonical.text === 'retained', 'Independent views lost their target');
        var jsRoot = core.ownJointObject(widgets.TextEditingController({text: 'JS root'}));
        var reverseRoot = new WeakRef(canonical);
        canonical = null;
      ''');
      expect(controller.text, 'retained');
      expect(
        () => runtime.evaluate('first.text'),
        throwsA(isA<FlaxJsException>()),
      );
      final second = runtime.getGlobal('second') as FlaxJsObject;
      final other = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
      try {
        expect(() => other.unlinkOwnedDartPeer(second), throwsArgumentError);
      } finally {
        second.release();
        other.dispose();
      }
      runtime.evaluate(
        "check(core.unlinkJoint(second), 'Second view could not unlink')",
      );
      runtime.drainMicrotasks();
      await flaxTestRunIdle(tester, () async {
        runtime.evaluate(flaxTestJsGarbagePressure);
        await flaxTestCollectDartGarbage();
      });
      runtime.evaluate(r'''
        check(jsRoot.text === 'JS root', 'Lost the owned JS-to-Dart target');
        check(core.unlinkJoint(jsRoot), 'JS-rooted view could not unlink');
        check(reverseRoot.deref()?.text === 'retained', 'Lost the Dart origin');
        check(readController() === reverseRoot.deref(), 'Canonical identity changed');
        var valueListenable = __flaxModules.require('@flax/flutter/foundation').ValueListenable;
        var custom = valueListenable.implement([], {
          value: 1, addListener() {}, removeListener() {},
        });
        rejectsTypeError(() => core.ownJointObject(custom));
        var disposed = core.ownJointObject(readController());
        disposed.dispose();
        rejectsTypeError(() => core.ownJointObject(disposed));
        rejectsTypeError(() => core.ownJointObject(readController()));
        check(core.unlinkJoint(disposed), 'Disposed view retained its owned cell');
      ''');
      expect(errors, isEmpty);
    } finally {
      await tester.pumpWidget(const SizedBox());
      await flaxTestCloseSession(tester, session);
    }
  });

  testWidgets('duplicate joint listeners can unlink themselves independently', (
    tester,
  ) async {
    final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
    final errors = <Object>[];
    final session = FlaxSession(
      createRuntime: () => runtime,
      bindings: FlaxBindingRegistry([flutterBindings]),
      source: _setup,
      onError: (error, _) => errors.add(error),
    );
    try {
      await flaxTestPumpView(tester, FlaxView.session(session: session));
      runtime.evaluate(r'''
        (() => {
          const owner = widgets.TextEditingController();
          const view = core.ownJointObject(owner);
          let first;
          let started = 0;
          let finished = 0;
          const callback = () => {
            if (++started === 2) {
              check(core.unlinkJoint(first), 'Self-unlink failed');
              check(!core.unlinkJoint(first), 'Self-unlink repeated');
            }
            finished++;
          };
          owner.addListener(callback);
          first = core.addJointListener(view, callback);
          const second = core.addJointListener(view, callback);
          rejectsTypeError(() => core.addJointListener(widgets.TextEditingValue(), callback));
          rejectsTypeError(() => core.addJointListener(owner, 1));
          rejectsTypeError(() => core.unlinkJoint({...second}));
          check(core.unlinkJoint(view), 'Owner view could not unlink');
          owner.text = 'first';
          check(started === 3 && finished === 3, 'Self-unlink interrupted dispatch');
          owner.text = 'second';
          check(started === 5 && finished === 5, 'Another registration was removed');
          check(core.unlinkJoint(second) && !core.unlinkJoint(second), 'Duplicate unlink failed');
          owner.text = 'third';
          check(started === 6 && finished === 6, 'Ordinary registration was removed');
          owner.removeListener(callback);
          check(!owner.hasListeners, 'Native registration survived unlink');
          const last = core.addJointListener(owner, callback);
          owner.dispose();
          rejectsTypeError(() => core.addJointListener(owner, callback));
          check(core.unlinkJoint(last) && !core.unlinkJoint(last), 'Disposed listener unlink failed');
        })();
      ''');
      expect(errors, isEmpty);
    } finally {
      await tester.pumpWidget(const SizedBox());
      await flaxTestCloseSession(tester, session);
    }
  });
}
