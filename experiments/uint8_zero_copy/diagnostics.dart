// Test-only counters and GC probes; byte conversion uses the public runtime API.
// ignore_for_file: depend_on_referenced_packages, implementation_imports
import 'dart:ffi';
import 'dart:typed_data';

import 'package:ffi/ffi.dart';
import 'package:flax/flax.dart';

import 'diagnostics_bindings.g.dart' as native;

final _probes = native.FlaxUint8PrototypeBindings(DynamicLibrary.process());

extension Uint8TestProbes on FlaxJsRuntime {
  int prototypeJsAddress(FlaxJsObject value) {
    final function = getGlobal('__flaxUint8Address') as FlaxJsFunction;
    try {
      return (function.call([value]) as FlaxJsNumber).value.toInt();
    } finally {
      function.release();
    }
  }

  void prototypeCollect({bool young = false, bool compact = true}) {
    if (isDisposed) throw StateError('Runtime has been disposed');
    using((arena) {
      final error = arena<native.FlaxError>();
      try {
        final status = _probes.flax_uint8_collect(
          nullptr,
          young ? 1 : 0,
          compact ? 1 : 0,
          error,
        );
        if (status != 0) {
          throw StateError(
            error.ref.message.cast<Utf8>().toDartString(
              length: error.ref.message_length,
            ),
          );
        }
      } finally {
        calloc.free(error.ref.message);
        calloc.free(error.ref.stack);
      }
    });
  }
}

int flaxPrototypeUint8Address(Uint8List bytes) =>
    _probes.flax_uint8_dart_address(bytes);

int flaxUint8JsExternalBytes() => _probes.flax_uint8_counter(5);

Map<String, int> flaxPrototypeUint8Stats() => {
  'pins': _probes.flax_uint8_counter(0),
  'pinnedPages': _probes.flax_uint8_counter(1),
  'promotions': _probes.flax_uint8_counter(2),
  'dartViews': _probes.flax_uint8_counter(3),
  'liveStores': _probes.flax_uint8_counter(4),
};
