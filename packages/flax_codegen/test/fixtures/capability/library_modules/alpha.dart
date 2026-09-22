import 'beta.dart';

class Alpha {
  Alpha(this.value);
  final int value;
  Beta? get peer => null;
  ConcreteResult concreteResult() => ConcreteResult(value);
}

class Child extends Alpha {
  Child(super.value);
}

class ConcreteResult extends Alpha {
  ConcreteResult(super.value);
}

typedef Identity<T> = T Function(T value);

const answer = 42;
const negative = -1;
const ratio = 0.5;
const message = 'hello';
const enabled = true;
const int? absent = null;
const buildFlag = bool.fromEnvironment('FLAX_LIBRARY_TEST');
const constantAlias = answer;
const largeInteger = 9007199254740992;
final initialized = 7;
late final int assigned;
int _reads = 0;
int get changing => ++_reads;
int get failing => throw StateError('readonly failure');
int getChanging() => 0;
