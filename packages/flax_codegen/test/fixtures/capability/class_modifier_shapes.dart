// Class modifier fixtures for the Stage 2 mechanism matrix.

abstract class AbstractBox {
  const AbstractBox();

  int get value => 1;
}

abstract class PureContract {
  int read();
}

mixin PlainMixin {
  int get value => 1;
  int normalize(int input) => input;
}

mixin class UtilityMixinClass {
  int get value => 1;
  int normalize(int input) => input;
}

base class BaseBox {
  BaseBox();

  int get value => 1;
}

final class FinalBox {
  FinalBox();

  int get value => 1;
}

interface class InterfaceBox {
  InterfaceBox();

  int get value => 1;
}

class InterfaceBoxImpl implements InterfaceBox {
  InterfaceBoxImpl();

  @override
  int get value => 1;
}

class NamedOnlyBox {
  NamedOnlyBox.named();

  int get value => 1;
}

class AmbiguousBox {
  AmbiguousBox.left();
  AmbiguousBox.right();

  int get value => 1;
}

sealed class SealedBox {
  SealedBox();

  int get value => 1;
}

final class SealedBoxChild extends SealedBox {
  SealedBoxChild();
}

abstract interface class AbstractInterfaceBox {
  AbstractInterfaceBox();

  int get value => 1;
}

class AbstractInterfaceBoxImpl implements AbstractInterfaceBox {
  AbstractInterfaceBoxImpl();

  @override
  int get value => 1;
}

class DisposableBase {
  int get inheritedValue => 1;
  String get kind => 'reserved';
  set inheritedValue(int value) {}
  int normalize(int value) => value + 1;
  void dispose() {}
}

class DisposableBox extends DisposableBase {
  DisposableBox();

  int get value => 1;
}

class OddDisposeBox {
  OddDisposeBox();

  int dispose(int value) => value;
}
