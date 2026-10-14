class SelectorMethod<T> {
  SelectorMethod();
  static String $type() => 'method';
}

class SelectorGetter<T> {
  SelectorGetter();
  static String get $type => 'getter';
}

class SelectorConstructor<T> {
  SelectorConstructor();
  SelectorConstructor.$type();
}

class OrdinarySelector {
  OrdinarySelector();
  static String $type() => 'ordinary';
}
