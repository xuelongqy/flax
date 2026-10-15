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

final class FlaxJsBigInt extends FlaxJsValue {
  const FlaxJsBigInt(this.value);
  final BigInt value;
}

/// Native view kinds. Indices match the checked engine binding extension.
enum FlaxBufferType {
  byteBuffer('ByteBuffer'),
  int8('Int8List'),
  uint8('Uint8List'),
  uint8Clamped('Uint8ClampedList'),
  int16('Int16List'),
  uint16('Uint16List'),
  int32('Int32List'),
  uint32('Uint32List'),
  int64('Int64List'),
  uint64('Uint64List'),
  float32('Float32List'),
  float64('Float64List'),
  byteData('ByteData');

  const FlaxBufferType(this.dartName);
  final String dartName;

  static final Map<String, FlaxBufferType> byDartName = Map.unmodifiable({
    for (final type in values) type.dartName: type,
  });

  static FlaxBufferType? of(Object? value) => switch (value) {
    ByteBuffer() => byteBuffer,
    Int8List() => int8,
    Uint8List() => uint8,
    Uint8ClampedList() => uint8Clamped,
    Int16List() => int16,
    Uint16List() => uint16,
    Int32List() => int32,
    Uint32List() => uint32,
    Int64List() => int64,
    Uint64List() => uint64,
    Float32List() => float32,
    Float64List() => float64,
    ByteData() => byteData,
    _ => null,
  };
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
  /// Internal maintained-engine Type operations. All handles stay in Dart.
  Type dartInstanceType(Object value);
  List<Object?> dartTypeParts(Type type);
  Type nullableDartType(Type type);
  Function instantiateDartClosure(Function factory, List<Type> types);
  List<Object?> dartRecordFields(Record value);

  /// Constructs a value from converted fields. Null selects a runtime layout;
  /// [names] contains its sorted named fields, after any positional fields.
  Record newDartRecord(Type? type, List<String> names, List<Object?> fields);

  FlaxJsValue evaluate(String source, {String sourceUrl = 'flax:eval'});
  FlaxJsValue getGlobal(String name);

  /// Copies bytes into an owned JavaScript ArrayBuffer reference.
  FlaxJsObject createArrayBuffer(Uint8List bytes);

  /// Copies an ArrayBuffer or the actual range of a TypedArray/DataView.
  Uint8List readBytes(FlaxJsObject value);

  /// Shares writable, fixed bytes with JavaScript. Changes in either language
  /// are visible to the other; the memory lives until the last view is collected.
  FlaxJsObject createUint8Array(Uint8List bytes);

  /// Shares the actual range of an attached Uint8Array. The returned Dart view
  /// keeps its bytes alive after JS transfer, GC, or runtime disposal.
  Uint8List readUint8Array(FlaxJsObject value);

  /// Shares a writable primitive TypedData view or ByteBuffer as its native
  /// TypedArray, DataView or ArrayBuffer. No payload copy is made.
  FlaxJsObject createSharedBuffer(Object data);

  /// Imports the exact native view kind. Retained Dart data survives transfer,
  /// GC and runtime disposal. Shared, resizable and detached stores are rejected.
  Object readSharedBuffer(FlaxJsObject value, FlaxBufferType type);
  void registerHostFunction(String name, FlaxJsHostFunction callback);

  /// Internal binding edge. JS reachability retains [target]; Dart reachability
  /// of [origin] retains the actual JS object. Neither registration is a root.
  void bindDartPeer(FlaxJsObject object, Object target, {Object? origin});

  /// Registers type-shared current-member dispatch metadata in this runtime.
  int registerProxyMembers(FlaxJsObject layout);

  /// Null means the generated Dart default is current. JS null is a real value.
  FlaxJsValue? invokeProxyMember(
    FlaxJsObject receiver,
    int member,
    List<FlaxJsValue> arguments,
  );

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
