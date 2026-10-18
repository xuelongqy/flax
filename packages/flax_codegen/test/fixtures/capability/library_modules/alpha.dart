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

class CaseValue {
  CaseValue();
}

CaseValue get caseValue => CaseValue();

enum CaseMode { one }

const defaultCaseMode = CaseMode.one;

class DefaultMode {
  DefaultMode([CaseMode mode = defaultCaseMode]);
}

class WideEntry {
  WideEntry();
}

class NarrowEntry extends WideEntry {
  NarrowEntry();
}

abstract interface class WideTarget {
  void handle(WideEntry entry);
  void reorder({String? label, CaseMode mode = CaseMode.one});
}

class ConcreteTarget implements WideTarget {
  ConcreteTarget();
  @override
  void handle(covariant NarrowEntry entry) {}
  @override
  void reorder({CaseMode mode = CaseMode.one, String? label}) {}
}

class DerivedTarget extends ConcreteTarget implements WideTarget {
  DerivedTarget();
}

class GenericHolder<T> {
  GenericHolder(this.value);
  final T value;
}

class SpecializedHolder extends GenericHolder<CaseValue> {
  SpecializedHolder(super.value);
}

void acceptSpecialized(SpecializedHolder value) {}

class DependentHolder<T extends WideEntry, U extends GenericHolder<T>> {
  DependentHolder();
}

class EnumHolder extends GenericHolder<Set<CaseMode>> {
  EnumHolder(super.value);
}
