// ignore_for_file: depend_on_referenced_packages, implementation_imports, avoid_print
import 'dart:async';
import 'dart:convert';

import 'package:flax/bindings.dart';
import 'package:flax/runtime.dart';
import 'package:flax/src/native/native_runtime.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/widgets.dart';

import 'reload_target.dart' as target;

class _DerivedBox extends target.ReloadBox<String> {
  _DerivedBox() : super('derived');
  @override
  int score({int amount = 17}) => super.score(amount: amount) + 1;
  int base() =>
      flaxInvokeWithDefaults(super.score, [null], [0], const ['amount']) as int;
}

class _Owner {
  int value = 7;
  FlaxJsFunction? callback;
}

@pragma('vm:never-inline')
_Owner _cycle(FlaxNativeJsRuntime runtime) {
  final owner = _Owner();
  runtime.registerHostFunction(
    'reloadTick',
    (_, _) => FlaxJsNumber((++owner.value).toDouble()),
  );
  runtime.evaluate('''
    class ReloadBase {
      #offset = 10;
      constructor(tick) { this.tick = tick; }
      run() { return this.tick() + this.#offset; }
    }
    class ReloadChild extends ReloadBase {
      run() { return super.run() + 1; }
    }
    globalThis.reloadRoot = new ReloadChild(reloadTick);
    globalThis.reloadWeak = new WeakRef(reloadRoot);
    delete globalThis.reloadTick;
  ''');
  owner.callback =
      runtime.evaluate('reloadRoot.run.bind(reloadRoot)') as FlaxJsFunction;
  return owner;
}

@pragma('vm:never-inline')
bool _alive(WeakReference<_Owner> owner) => owner.target != null;

@pragma('vm:never-inline')
int _call(WeakReference<_Owner> owner) =>
    (owner.target!.callback!.call([]) as FlaxJsNumber).value.toInt();

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  FlutterError.onError = (details) {
    print(
      'FLAX_RELOAD_RESULT:${jsonEncode({'passed': false, 'error': '${details.exception}', 'stack': '${details.stack}'})}',
    );
  };
  runApp(
    const Directionality(textDirection: TextDirection.ltr, child: _Probe()),
  );
}

class _Probe extends StatefulWidget {
  const _Probe();
  @override
  State<_Probe> createState() => _ProbeState();
}

class _ProbeState extends State<_Probe> {
  late final FlaxNativeJsRuntime runtime;
  late final FlaxJsFunction echo;
  late final FlaxJsObject result;
  _Owner? root;
  late final WeakReference<_Owner> weak;
  final epoch = DateTime.now().microsecondsSinceEpoch;
  // The driver requests one initial reassemble after Flutter's service is ready.
  int reassemblies = -1;
  int reported = 0;
  int initialCells = 0;
  bool checking = false;

  @override
  void initState() {
    super.initState();
    runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
    runtime.useEngineResultsForExperiment(
      const bool.fromEnvironment('FLAX_ENGINE_RESULTS', defaultValue: true),
      arguments: const bool.fromEnvironment('FLAX_ENGINE_ARGUMENTS'),
    );
    echo = runtime.evaluate('(value) => value') as FlaxJsFunction;
    result = runtime.evaluate(
      "({text:'a\\u0000b', object:{value:7}, fn:()=>7, get bad(){throw Error('expected getter');}})",
    ) as FlaxJsObject;
    initialCells = runtime.bridgeCellCount;
    root = _cycle(runtime);
    weak = WeakReference(root!);
  }

  @override
  void reassemble() {
    super.reassemble();
    reassemblies++;
    WidgetsBinding.instance.addPostFrameCallback((_) => unawaited(verify()));
  }

  bool jsAlive() {
    final value = (runtime.evaluate(
      'reloadWeak.deref() !== undefined',
    ) as FlaxJsBoolean).value;
    runtime.drainMicrotasks();
    return value;
  }

  Future<void> verify() async {
    final version = target.revision;
    if (checking || reported == version) return;
    checking = true;
    final checks = <String>[];
    void check(String name, bool valid) {
      if (!valid) throw StateError(name);
      checks.add(name);
    }

    try {
      final fixed = flaxInvokeWithDefaults(target.score, [null], [0], const [
        'amount',
      ]) as int;
      check('fixed default equals Dart', fixed == target.score());
      final box = flaxInvokeWithDefaults(
        target.ReloadBox<List<String>>.new,
        [
          <String>['nested'],
          null,
        ],
        [1],
        const ['', 'seed'],
      ) as target.ReloadBox<List<String>>;
      check(
        'generic constructor/private default',
        box.value.single == 'nested' && box.seed.first == 3,
      );
      final target.ReloadBox<String> derived = _DerivedBox();
      check(
        'virtual override default',
        flaxInvokeWithDefaults(derived.score, [null], [0], const ['amount']) ==
            derived.score(),
      );
      check('typed lexical super', (derived as _DerivedBox).base() == 14);
      check(
        'combined call',
        (echo.call([FlaxJsNumber(fixed.toDouble())]) as FlaxJsNumber).value ==
            fixed,
      );
      check(
        'combined UTF16',
        (result.getProperty('text') as FlaxJsString).value == 'a\u0000b',
      );
      final object = result.getProperty('object') as FlaxJsObject;
      final fn = result.getProperty('fn') as FlaxJsFunction;
      try {
        check(
          'owned object/function',
          (object.getProperty('value') as FlaxJsNumber).value == 7 &&
              (fn.call([]) as FlaxJsNumber).value == 7,
        );
      } finally {
        object.release();
        fn.release();
      }
      var rejected = false;
      try {
        result.getProperty('bad');
      } on FlaxJsException {
        rejected = true;
      }
      check(
        'getter rejection recovers',
        rejected &&
            (echo.call([const FlaxJsNumber(5)]) as FlaxJsNumber).value == 5,
      );
      if (version == 2) root = null;
      if (version == 3) {
        root = weak.target;
        runtime.evaluate('delete globalThis.reloadRoot');
      }
      if (version == 4) root = null;
      for (var attempt = 0; attempt < 60; attempt++) {
        await flaxTestCollectDartGarbage();
        runtime.evaluate(flaxTestJsGarbagePressure);
        runtime.drainMicrotasks();
        await Future<void>.delayed(const Duration(milliseconds: 20));
        if (version != 4 && attempt == 2) break;
        if (version == 4 &&
            !_alive(weak) &&
            !jsAlive() &&
            runtime.bridgeCallbackCount == 0 &&
            runtime.bridgeCellCount <= initialCells) {
          break;
        }
      }
      check(
        'Dart/JS reachability',
        _alive(weak) == (version != 4) && jsAlive() == (version != 4),
      );
      if (version != 4) {
        check('JS inheritance/private field/super', _call(weak) >= 19);
      }
      if (version == 4) {
        check(
          'unrooted cycle collected before close',
          runtime.bridgeCallbackCount == 0 &&
              runtime.bridgeCellCount <= initialCells,
        );
      }
      check(
        'same State and runtime',
        reassemblies == version - 1 && !runtime.isDisposed,
      );
      reported = version;
      print(
        'FLAX_RELOAD_RESULT:${jsonEncode({'revision': version, 'epoch': epoch, 'reassemblies': reassemblies, 'fixed': fixed, 'checks': checks, 'cells': runtime.bridgeCellCount, 'callbacks': runtime.bridgeCallbackCount, 'passed': true})}',
      );
    } catch (error, stack) {
      print(
        'FLAX_RELOAD_RESULT:${jsonEncode({'revision': version, 'epoch': epoch, 'passed': false, 'error': '$error', 'stack': '$stack', 'checks': checks})}',
      );
    } finally {
      checking = false;
    }
  }

  @override
  Widget build(BuildContext context) => Center(
    child: LayoutBuilder(
      builder: (_, constraints) {
        final value = flaxInvokeWithDefaults(target.score, [null], [0], const [
          'amount',
        ]);
        final label = (echo.call([
          FlaxJsString('score=$value width=${constraints.maxWidth}'),
        ]) as FlaxJsString).value;
        return Text(label, textDirection: TextDirection.ltr);
      },
    ),
  );

  @override
  void dispose() {
    echo.release();
    result.release();
    runtime.dispose();
    super.dispose();
  }
}
