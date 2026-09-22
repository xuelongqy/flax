// Class modifier fixtures for the Stage 2 mechanism matrix.
//
// `mixin` and `mixin class` are intentionally absent: that mechanism is not
// part of this round.

abstract class AbstractBox {
  const AbstractBox();

  int get value => 1;
}

abstract class PureContract {
  int read();
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
