import 'dart:convert';
import 'dart:ffi';
import 'dart:io';
import 'dart:ui' as ui;

import 'package:ffi/ffi.dart';

import 'native_calls.dart';
import 'runtime_bindings.g.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

// Uses ABI 2 directly: Gate A does not require current generated binding extensions.
final class ProbeRuntime {
  ProbeRuntime(this.calls) {
    using((arena) {
      final output = arena<Pointer<FlaxRuntime>>();
      checked(arena, (error) => calls.create(output, error));
      handle = output.value;
    });
  }

  final NativeCalls calls;
  late final Pointer<FlaxRuntime> handle;
  bool closed = false;
  int engineNamespace = 0;

  void checked(Arena arena, int Function(Pointer<FlaxError>) action) {
    final error = arena<FlaxError>();
    try {
      if (action(error) != 0) {
        throw StateError(
          error.ref.message == nullptr
              ? 'Native call failed'
              : utf8.decode(
                  error.ref.message.asTypedList(error.ref.message_length),
                ),
        );
      }
    } finally {
      calls.errorClear(error);
    }
  }

  String evaluate(String source) => using((arena) {
    final text = source.toNativeUtf8(allocator: arena);
    final output = arena<Uint64>();
    checked(
      arena,
      (error) => calls.evaluate(
        handle,
        text.cast(),
        utf8.encode(source).length,
        nullptr,
        0,
        output,
        error,
      ),
    );
    final id = output.value;
    engineNamespace = id >> 56;
    final info = arena<FlaxValueInfo>();
    try {
      checked(arena, (error) => calls.inspect(handle, id, info, error));
      check(
        info.ref.kind == FlaxValueKind.FLAX_STRING.value,
        'Probe must return a string',
      );
      return String.fromCharCodes(
        info.ref.string_data.asTypedList(info.ref.string_length),
      );
    } finally {
      calls.bufferFree(info.ref.string_data.cast());
      checked(arena, (error) => calls.releaseValue(handle, id, error));
    }
  });

  void close() {
    if (closed) return;
    using((arena) => checked(arena, (error) => calls.destroy(handle, error)));
    closed = true;
  }
}

Map<String, Object?> runProbe() {
  final library = DynamicLibrary.process();
  final engine = FlaxBindings(library);
  final original = engine.flax_engine_get_api(FLAX_ABI_VERSION);
  check(original != nullptr, 'Maintained engine ABI 2 is unavailable');
  final decorate = library
      .lookupFunction<
        Pointer<FlaxApi> Function(Pointer<FlaxApi>),
        Pointer<FlaxApi> Function(Pointer<FlaxApi>)
      >('flax_gate_a_get_api');
  final stat = library
      .lookupFunction<Uint64 Function(Uint32), int Function(int)>(
        'flax_gate_a_stat',
      );
  final table = decorate(original);
  check(table != nullptr, 'Gate A rejected the engine table');
  final calls = NativeCalls(table.ref);
  final first = ProbeRuntime(calls);
  ProbeRuntime? second;
  var dartObserved = 0;
  final callback = NativeCallable<FlaxHostCallbackFunction>.isolateLocal((
    Pointer<Void> context,
    Pointer<FlaxRuntime> runtime,
    int receiver,
    Pointer<Uint64> arguments,
    int count,
    Pointer<Uint64> result,
    Pointer<FlaxError> error,
  ) {
    dartObserved++;
    return calls.makeValue(
      runtime,
      FlaxValueKind.FLAX_NUMBER.value,
      42,
      nullptr,
      0,
      result,
      error,
    );
  }, exceptionalReturn: FLAX_CALLBACK_FAILURE);
  try {
    using((arena) {
      const name = '__gateDartPositiveControl';
      final text = name.toNativeUtf16(allocator: arena);
      first.checked(
        arena,
        (error) => calls.registerHost(
          first.handle,
          text.cast(),
          name.length,
          callback.nativeFunction,
          nullptr,
          error,
        ),
      );
    });
    check(
      first.evaluate('String(__gateDartPositiveControl())') == '42',
      'Dart positive control returned an incorrect value',
    );
    check(
      dartObserved == 1 && stat(1) == 1,
      'Dart entry instrumentation did not observe the positive control',
    );
    final nativeBefore = stat(0);
    final dartBefore = stat(1);
    final result = jsonDecode(
      first.evaluate(r'''
(() => {
  let checks = 0;
  const check = (condition, message) => {
    if (!condition) throw new Error(message);
    checks++;
  };
  const rejects = (action, message) => {
    let failed = false;
    try { action(); } catch (_) { failed = true; }
    check(failed, message);
  };
  check(gate_add_i32(20, 22) === 42, 'integer result');
  check(gate_add_i32(-2147483648, 2147483647) === -1, 'integer bounds');
  check(gate_add_i32(2147483647, 2147483647) === 4294967294, 'widened result');
  check(gate_affine_f64(1.25, 2, 0.5) === 3, 'double result');
  check(Object.is(gate_affine_f64(-0, 1, -0), -0), 'negative zero');
  check(Number.isNaN(gate_affine_f64(NaN, 1, 0)), 'NaN');
  rejects(() => gate_add_i32(1.5, 2), 'fraction rejected');
  rejects(() => gate_add_i32(2147483648, 0), 'range rejected');
  rejects(() => gate_add_i32('1', 2), 'string rejected');
  rejects(() => gate_add_i32(1), 'arity rejected');
  const counter = gate_counter_create(7);
  const alias = counter;
  check(gate_counter_add(alias, 5) === 12, 'opaque native counter');
  rejects(() => gate_counter_add({}, 1), 'forged owner rejected');
  gate_counter_close(counter);
  gate_counter_close(alias);
  rejects(() => gate_counter_add(alias, 1), 'closed alias rejected');
  globalThis.savedCounter = gate_counter_create(10);
  let checksum = 0;
  for (let i = 0; i < 10000; i++) {
    checksum += gate_add_i32(i, 1);
    checksum += gate_affine_f64(i, 0.5, 0.25);
  }
  check(checksum === 75005000, 'repeated-call checksum');
  return JSON.stringify({checks, iterations: 10000, checksum});
})()
'''),
    ) as Map<String, dynamic>;
    second = ProbeRuntime(calls);
    check(
      second.evaluate(
            'globalThis.savedCounter = gate_counter_create(20); "ready"',
          ) ==
          'ready',
      'Second runtime creation failed',
    );
    first.close();
    check(
      second.evaluate('String(gate_counter_add(savedCounter, 1))') == '21',
      'Closing the first runtime affected the second',
    );
    second.close();
    check(
      dartObserved == 1 && stat(1) == dartBefore,
      'Native calls entered Dart business dispatch',
    );
    check(stat(2) == 0, 'Native runtime state leaked');
    check(
      stat(5) == 3 && stat(6) == 3,
      'Counter destruction was not exact-once',
    );
    final expected = Platform.isIOS ? 1 : 2;
    check(
      first.engineNamespace == expected && second.engineNamespace == expected,
      'The engine namespace does not match the requested engine',
    );
    return {
      'passed': true,
      'engine': expected == 1 ? 'hermes' : 'v8',
      'engineNamespace': expected,
      'js': result,
      'nativeDispatchEntries': stat(0) - nativeBefore,
      'dartDispatchEntries': stat(1) - dartBefore,
      'dartPositiveControlEntries': dartObserved,
      'cIntegerCalls': stat(3),
      'cDoubleCalls': stat(4),
      'countersCreated': stat(5),
      'countersDestroyed': stat(6),
      'remainingRuntimes': stat(2),
      'nativeAbi': original.ref.version,
      'uiProtocolAndBindingExtensionUsed': false,
    };
  } finally {
    second?.close();
    first.close();
    callback.close();
  }
}

void main() {
  Map<String, Object?> result;
  try {
    check(
      ui.PlatformDispatcher.instance.views.isNotEmpty,
      'Gate A must run in a real Flutter UI isolate',
    );
    result = runProbe();
  } catch (error, stack) {
    result = {'passed': false, 'error': '$error', 'stack': '$stack'};
  }
  stdout.writeln('FLAX_FFI_GATE_A_RESULT ${jsonEncode(result)}');
}
