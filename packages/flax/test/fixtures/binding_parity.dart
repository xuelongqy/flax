import 'package:flutter/widgets.dart';

extension type NullValue(Null value) {}

abstract class TileContract implements Widget {
  String get label;
  void trigger();
}

abstract class SizedTileContract extends TileContract {
  double get extent;
}

class CallbackTile extends StatelessWidget implements SizedTileContract {
  const CallbackTile({
    super.key,
    required this.onTap,
    this.callbacks = const [],
    this.label = 'callback tile',
  });

  final void Function() onTap;
  final List<void Function()> callbacks;
  @override
  final String label;
  @override
  double get extent => 24;
  @override
  void trigger() {
    onTap();
    for (final callback in callbacks) {
      callback();
    }
  }

  @override
  Widget build(BuildContext context) => Text(label);
}

class WritableTile extends StatelessWidget {
  const WritableTile({super.key});

  static int stored = 0;
  static int writes = 0;
  int get setting => stored;
  set setting(num value) {
    writes++;
    stored = value.toInt();
  }

  set writeOnly(int value) => setting = value;

  @override
  Widget build(BuildContext context) => const Text('writable tile');
}

class InheritedWritableTile extends WritableTile {
  const InheritedWritableTile({super.key});
}

class BusinessFieldsBase {
  BusinessFieldsBase(this.value);
  String value;
  String get kind => value;
  set kind(String input) => value = input;
  String get type => 'type:$value';
  String get ctor => 'ctor:$value';
  List<String> get args => [value];
}

class BusinessFields extends BusinessFieldsBase {
  BusinessFields(super.value);
}

BusinessFields createBusinessFields(String value) => BusinessFields(value);

class DescriptorValue {
  const DescriptorValue(this.kind);
  final String kind;
}

class CoreValues {
  CoreValues();
  static final failure = StateError('Never result');
  static Record? retainedRecord;
  static WeakReference<Object>? _payload;
  static bool get payloadAlive => _payload?.target != null;
  Type get type => String;
  Symbol get symbol => const Symbol('bindingParity');
  Record get record => ('record', 7);
  Object? unknownRecord() => (17, label: true);
  Type echoType(Type value) => value;
  Symbol echoSymbol(Symbol value) => value;
  Record echoRecord(Record value) => value;
  (String, int) typedRecord(Record value) => value as (String, int);
  Record callbackRecord(void Function() callback) {
    final payload = Object();
    _payload = WeakReference(payload);
    return (payload, callback);
  }

  void callRecord(Record value) => (value as (Object, void Function())).$2();
  Type visitType(Type Function(Type) callback) => callback(String);
  Symbol visitSymbol(Symbol Function(Symbol) callback) => callback(symbol);
  Record visitRecord(Record Function(Record) callback) => callback(record);
  Never fail() => throw failure;
  bool matchesFailure(Object error) => identical(error, failure);
  Never get failureValue => throw failure;
  Never Function() get failingCallback => fail;
  Future<Never> failLater() => Future<Never>.error(failure);
  Never invokeNever(Never Function() callback) => callback();
  Future<Never> invokeFutureNever(Future<Never> Function() callback) =>
      callback();
  Never? nullOnly(Never? value) => value;
  NullValue echoNullValue(NullValue value) => value;
  List<Never> emptyValues() => [];
  Stream<Never> emptyEvents() => const Stream.empty();
}

CoreValues createCoreValues() => CoreValues();
