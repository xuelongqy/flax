import 'dart:typed_data';

/// A JS value. Primitive values are independent of any runtime.
abstract class FlaxJsValue {
  const FlaxJsValue();
}

final class FlaxJsUndefined extends FlaxJsValue {
  const FlaxJsUndefined();
}

final class FlaxJsNull extends FlaxJsValue {
  const FlaxJsNull();
}

final class FlaxJsBoolean extends FlaxJsValue {
  const FlaxJsBoolean(this.value);
  final bool value;
}

final class FlaxJsNumber extends FlaxJsValue {
  const FlaxJsNumber(this.value);
  final double value;
}

final class FlaxJsString extends FlaxJsValue {
  const FlaxJsString(this.value);
  final String value;
}

/// A reference into one runtime. Release owned references when no longer needed.
/// Callback references are borrowed; retain them before storing them for later.
abstract class FlaxJsObject extends FlaxJsValue {
  FlaxJsValue getProperty(String name);
  void setProperty(String name, FlaxJsValue value);
  bool strictEquals(FlaxJsObject other);
  FlaxJsObject retain();
  void release();
  bool get isReleased;
}

abstract class FlaxJsFunction extends FlaxJsObject {
  FlaxJsValue call(
    List<FlaxJsValue> arguments, {
    FlaxJsValue thisValue = const FlaxJsUndefined(),
  });
}

/// Arguments and receiver are borrowed until the callback returns.
/// Returning a reference does not transfer or release the Dart reference.
typedef FlaxJsHostFunction = FlaxJsValue Function(
  FlaxJsValue thisValue,
  List<FlaxJsValue> arguments,
);

abstract class FlaxJsRuntime {
  FlaxJsValue evaluate(String source, {String sourceUrl = 'flax:eval'});
  FlaxJsValue getGlobal(String name);

  /// Copies bytes into an owned JavaScript ArrayBuffer reference.
  FlaxJsObject createArrayBuffer(Uint8List bytes);

  /// Copies an ArrayBuffer or the actual range of a TypedArray/DataView.
  Uint8List readBytes(FlaxJsObject value);
  void registerHostFunction(String name, FlaxJsHostFunction callback);

  /// Explicit checkpoint. The engine treats [maxJobsHint] as a best-effort hint,
  /// not a time limit. Returns whether the microtask queue is empty.
  bool drainMicrotasks({int maxJobsHint = -1});

  /// Releases all native values and callbacks. Repeated disposal is safe.
  /// Disposal during evaluation or a host callback throws [StateError].
  void dispose();
  bool get isDisposed;
}

final class FlaxJsException implements Exception {
  const FlaxJsException(this.message, {this.jsStack = ''});
  final String message;
  final String jsStack;

  @override
  String toString() => jsStack.isEmpty
      ? 'FlaxJsException: $message'
      : 'FlaxJsException: $message\n$jsStack';
}
