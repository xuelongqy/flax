import 'dart:async';

abstract interface class EnumReadable {
  String describe();
}

mixin EnumDetails implements EnumReadable {
  String details() => 'detail:${describe()}';
}

class EnumPayload {
  const EnumPayload(this.value);
  final int value;
}

const _payload = EnumPayload(7);
int _adjust(int value) => value + 2;

enum EnhancedStatus with EnumDetails implements EnumReadable {
  ready('Ready', 200),
  disabled('Disabled', 403);

  const EnhancedStatus(this.label, this.code);
  factory EnhancedStatus.fromCode(int code) =>
      values.firstWhere((value) => value.code == code);

  final String label;
  final int code;
  static int reads = 0;
  static final history = <String>[];
  String get liveLabel {
    reads++;
    return label;
  }

  String get recorded => history.last;
  set recorded(Object value) => history.add('$value');
  EnumPayload get payload => _payload;
  int Function(int) get adjust => _adjust;
  EnhancedStatus get next => this == ready ? disabled : ready;
  List<EnhancedStatus> get states => values;
  Future<EnhancedStatus> get later async => this;
  Stream<EnhancedStatus> get events => Stream.value(this);
  String get failure => throw StateError('enum getter failure');
  String format(String prefix, {String separator = ':'}) =>
      '$prefix$separator$label';
  int preserveReceiverName(int receiver) => receiver;
  EnhancedStatus through(EnhancedStatus Function(EnhancedStatus) callback) =>
      callback(this);
  EnhancedStatus operator +(int steps) => steps.isOdd ? next : this;
  @override
  String describe() => label;
  static EnhancedStatus lookup(int code) => EnhancedStatus.fromCode(code);
}

enum MetadataNames {
  value;

  String get kind => 'business-kind';
  int get type => 42;
  String get name => 'business-name';
}

enum GenericKind<T> {
  number<int>(3),
  text<String>('three'),
  decimal<double>(3.5),
  numbers<List<int>>([1, 2]),
  maybe<int?>(null);

  const GenericKind(this.sample);
  final T sample;
  T echo(T value) => value;
  T Function(T) get repeat => echo;
  T transform(T Function(T) callback) => callback(sample);
  List<T> group(T value) => [value];
}

enum EnumBuildFlag {
  value;

  const EnumBuildFlag();
  final bool enabled = const bool.fromEnvironment('FLAX_ENUM_FLAG');
}

enum EnumFactory<T> {
  number<int>(1),
  text<String>('one');

  const EnumFactory(this.sample);
  factory EnumFactory.from(T value) {
    if (T == int) return number as EnumFactory<T>;
    if (T == String) return text as EnumFactory<T>;
    throw StateError('Unsupported enum factory type: $T');
  }

  final T sample;
}

EnhancedStatus enumIdentity(EnhancedStatus value) => value;
EnumReadable enumReadable(EnumReadable value) => value;
GenericKind<int> enumNumber(GenericKind<int> value) => value;
Object enumObject(Object value) => value;
