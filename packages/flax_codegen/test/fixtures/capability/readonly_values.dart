import 'dart:async';

const answer = 42;
const enabled = true;
int reads = 0;
int seed = 10;
int finalInitializations = 0;
int lateInitializations = 0;
int failures = 0;

int get changing {
  reads++;
  return seed;
}

int _initializeFinal() {
  finalInitializations++;
  return seed;
}

int _initializeLate() {
  lateInitializations++;
  return seed;
}

final initialized = _initializeFinal();
// Keep the modifier to exercise late-final declaration selection.
// ignore: unnecessary_late
late final int lazy = _initializeLate();
late final String assigned;
int? get optional => null;

enum ReadonlyMode { first, second }

const mode = ReadonlyMode.second;

class ReadonlyToken {
  ReadonlyToken(this.value);
  int value;
  bool disposed = false;
  void dispose() => disposed = true;
}

final token = ReadonlyToken(7);
final numbers = <int>[1, 2];
final groups = <String, List<ReadonlyToken>>{
  'tokens': [token],
};
typedef IntTransform = int Function(int value);
IntTransform get transform =>
    (value) => value + seed;
typedef GenericIdentity = T Function<T>(T value);
GenericIdentity get genericIdentity =>
    <T>(T value) => value;
Future<int> get later => Future.value(seed);
Future<int> get laterFailure => Future.error(StateError('later failure'));
final pendingCompletion = Completer<int>();
Future<int> get pending => pendingCompletion.future;

int get failing {
  failures++;
  throw StateError('read failure $failures');
}

void get sideEffect {
  reads++;
}

int mutable = 1;
int get writable => mutable;
set writable(int value) => mutable = value;
set writeOnly(int value) => mutable = value;
// Private declarations and unsupported result shapes must fail selection.
const _hidden = 3;
(int, int) get record => (1, 2);
int privateValue() => _hidden;
