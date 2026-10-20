import 'package:flutter/foundation.dart' show nonVirtual;

abstract class DefaultAccessors<T> {
  T get selected => throw UnsupportedError('Interface default');
  set selected(T value) {}

  T get unselected => throw UnsupportedError('Interface default');
  set unselected(T value) {}
}

class InheritedAccessors<T> {
  InheritedAccessors(T value) : _value = value;
  T _value;
  int writes = 0;

  T get inherited => _value;
  set inherited(T value) {
    _value = value;
    writes++;
  }

  @nonVirtual
  T get fixed => _value;
  @nonVirtual
  set fixed(T value) => _value = value;
}

abstract class NeedsDefaults<T> extends InheritedAccessors<T>
    implements DefaultAccessors<T> {
  NeedsDefaults(super.value);
}
