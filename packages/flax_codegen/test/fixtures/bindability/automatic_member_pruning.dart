final class UnavailableValue {
  const UnavailableValue();
}

final class PartiallyUsable {
  const PartiallyUsable();
  const PartiallyUsable.withUnavailable(UnavailableValue value);

  int healthy() => 42;
  UnavailableValue unavailable(UnavailableValue value) => value;
  UnavailableValue get unavailableGetter => const UnavailableValue();
  set unavailableSetter(UnavailableValue value) {}
  static UnavailableValue staticUnavailable() => const UnavailableValue();
  T genericUnavailable<T>(UnavailableValue dependency, T value) => value;
}

final class DownstreamUsable {
  const DownstreamUsable();
  PartiallyUsable echo(PartiallyUsable value) => value;
}

abstract final class EmptyAfterPruning {
  static UnavailableValue only() => const UnavailableValue();
}

abstract interface class RequiredProxy {
  int healthy();
  UnavailableValue requiredValue();
}
