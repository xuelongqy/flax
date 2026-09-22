import 'dart:async';

const answer = 42;
int seed = 10;
int reads = 0;
int failures = 0;
int finalInitializations = 0;
int lateInitializations = 0;

int get changing {
  reads++;
  return seed;
}

final initialized = _initializeFinal();
int _initializeFinal() {
  finalInitializations++;
  return seed;
}

// Keep the modifier to exercise late-final reads through the bridge.
// ignore: unnecessary_late
late final int lazy = _initializeLate();
int _initializeLate() {
  lateInitializations++;
  return seed;
}

late final String assigned;
int? get optional => null;

class ReadonlyProbe {
  int value = 7;
  bool disposed = false;
  void dispose() => disposed = true;
}

final probe = ReadonlyProbe();
final numbers = <int>[1, 2];
final groups = <String, List<ReadonlyProbe>>{
  'probes': [probe],
};
typedef ReadonlyTransform = int Function(int value);
typedef ReadonlyIdentity = T Function<T>(T value);
ReadonlyTransform get transform =>
    (value) => value + seed;
ReadonlyIdentity get identity =>
    <T>(T value) => value;
Future<int> get later => Future.value(seed);
Future<int> get laterFailure =>
    Future.error(StateError('readonly future failure'));
final pendingCompletion = Completer<int>();
Future<int> get pending => pendingCompletion.future;

int get failing {
  failures++;
  throw StateError('readonly read failure $failures');
}

void get sideEffect {
  reads++;
}
