import 'dart:async';
import 'dart:convert';
import 'dart:ffi';
import 'dart:io';

import 'package:ffi/ffi.dart';
import 'package:flax/flax.dart';
// ignore: implementation_imports
import 'package:flax/src/native/native_calls.dart';
// ignore: implementation_imports
import 'package:flax/src/native/runtime_bindings.g.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

Future<void> main() async {
  final results = <String, Object?>{};
  FlaxSession? session;
  DynamicLibrary? fixture;
  try {
    WidgetsFlutterBinding.ensureInitialized();
    Flax.moduleAssets = await FlaxModuleAssets.load(
      bundle: rootBundle,
      manifest: 'assets/flax_modules/modules.json',
    );
    final process = DynamicLibrary.process();
    final calls = NativeCalls(
      FlaxBindings(process).flax_engine_get_api(FLAX_ABI_VERSION).ref,
    );
    final collect = process
        .lookupFunction<
          Int32 Function(Pointer<FlaxError>),
          int Function(Pointer<FlaxError>)
        >('flax_ffi_dlopen_collect_session_pending');
    void check(bool value, String reason) {
      if (!value) throw StateError(reason);
    }

    void collectOnly() => using((arena) {
      final error = arena<FlaxError>();
      try {
        check(collect(error) == 0, 'Collect real JS engine');
      } finally {
        calls.errorClear(error);
      }
    });
    late FlaxJsRuntime runtime;
    final errors = <Object>[];
    session = FlaxSession(
      createRuntime: () => runtime = FlaxEngine.createRuntime(),
      source: await rootBundle.loadString('assets/wallet.js'),
      bindings: FlaxBindingRegistry([]),
      onError: (error, _) => errors.add(error),
    );
    final frame = Completer<void>();
    WidgetsBinding.instance.addPostFrameCallback((_) => frame.complete());
    runApp(FlaxView.session(session: session));
    await frame.future.timeout(const Duration(seconds: 30));
    await Future<void>.delayed(Duration.zero);
    check(errors.isEmpty, 'Session initialization: $errors');
    fixture = DynamicLibrary.open(
      (runtime.evaluate('walletProbePath') as FlaxJsString).value,
    );
    final stat = fixture
        .lookupFunction<Uint32 Function(Int32), int Function(int)>(
          'WCProbeStat',
        );
    int alive() => stat(2);
    int freed() => stat(1);
    results.addAll(
      (jsonDecode(
        (runtime.evaluate(
          'JSON.stringify(walletResult)',
        ) as FlaxJsString).value,
      ) as Map).cast<String, Object?>(),
    );
    check(
      alive() == 2 && freed() == 2,
      'Generated classes retain two real Wallet Core keys',
    );
    runtime.evaluate('walletDrop()');
    collectOnly();
    check(freed() == 2, 'Collection alone did not sweep finalizers');
    // Observe C counters only: JS FFI calls would sweep and hide a missed wakeup.
    final deadline = DateTime.now().add(const Duration(seconds: 5));
    while (freed() == 2 && DateTime.now().isBefore(deadline)) {
      await Future<void>.delayed(const Duration(milliseconds: 10));
    }
    check(
      freed() == 3 && alive() == 1 && errors.isEmpty,
      'Session automatically releases the unreachable Wallet Core key once',
    );
    collectOnly();
    await Future<void>.delayed(const Duration(milliseconds: 50));
    check(
      freed() == 3 && alive() == 1,
      'Repeated GC does not double free or release the retained object',
    );
    check(
      (runtime.evaluate('walletRetainedValue()') as FlaxJsBoolean).value,
      'Retained class remains usable',
    );
    runApp(const SizedBox.shrink());
    await WidgetsBinding.instance.endOfFrame;
    await session.close().timeout(const Duration(seconds: 10));
    check(
      freed() == 4 && alive() == 0 && errors.isEmpty,
      'Session close releases retained class exactly once',
    );
    await session.close();
    check(freed() == 4, 'Repeated Session close does not repeat cleanup');
    results.addAll({
      'lifecycleChecks': 7,
      'allocated': stat(0),
      'freed': freed(),
      'alive': alive(),
    });
  } catch (error, stack) {
    results.addAll({'error': '$error', 'stack': '$stack'});
  } finally {
    await session?.close();
    fixture?.close();
    stdout.writeln('FLAX_FFI_WALLET_CORE_RESULT ${jsonEncode(results)}');
  }
}
