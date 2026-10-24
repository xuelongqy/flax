import 'dart:convert';
import 'dart:ffi';

import 'package:ffi/ffi.dart';

import 'native_calls.dart';
import 'runtime_bindings.g.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

// Bare-runtime acceptance uses ABI 2 without generated binding extensions.
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
