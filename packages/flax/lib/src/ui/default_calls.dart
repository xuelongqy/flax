part of '../../bindings.dart';

/// Compiler marker used by generated bindings to preserve native defaults.
///
/// The maintained compiler replaces the slot and mask lists with scalar
/// arguments. Dynamic function values use the ordinary callback adapter instead.
Object? flaxInvokeWithDefaults(
  Function target,
  List<Object?> slots,
  List<int> provided,
  List<String> layout,
) => throw UnsupportedError(
  'Generated default calls require the matching Flax compiler and SDK',
);
