import 'dart:async';

int counter = 1;
int delete = 0;
late int delayed;
int? optional;
int reads = 0;
int writes = 0;
int failures = 0;

int get flexible => counter;
set flexible(num value) => counter = value.round();

int get tracked {
  reads++;
  return counter;
}

set tracked(int value) {
  writes++;
  counter = value;
}

set writeOnly(int value) {
  writes++;
  counter = value;
}

set failing(int value) {
  failures++;
  throw StateError('write failure $value');
}

const constant = 7;
final frozen = DateTime.now().millisecondsSinceEpoch;
late final int assigned;
// Keep the modifier to exercise initialized late-final setter rejection.
// ignore: unnecessary_late
late final int initialized = frozen;
int get readOnly => counter;
int _hidden = 0;
int hiddenValue() => _hidden;

enum MutableMode { first, second }

class MutableToken {
  MutableToken(this.value);
  int value;
}

MutableMode mode = MutableMode.first;
MutableToken token = MutableToken(3);
List<int> numbers = [1, 2];
Map<String, List<MutableToken>> groups = {};
(int, {String label}) record = (1, label: 'initial');
typedef IntTransform = int Function(int value);
IntTransform transform = (value) => value + 1;
typedef GenericIdentity = T Function<T>(T value);
GenericIdentity identityCallback = <T>(T value) => value;
Future<int> later = Future.value(1);
FutureOr<int> immediate = 2;

void setCounter(int value) => counter = value;
// Distinct Dart names deliberately map to the same generated setCounter export.
// ignore: non_constant_identifier_names
int Counter = 0;
