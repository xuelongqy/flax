import 'dart:async';

/// Borrowed authority follows async bridge views; only the resource owner closes it.
final class FlaxPermissionDelivery {
  const FlaxPermissionDelivery(this.requireActive, this.guardStream);

  final void Function() requireActive;
  final Stream<T> Function<T>(Stream<T>) guardStream;
  static final _resources =
      Expando<({Set<FlaxPermissionDelivery> checks, bool errorsOnly})>();

  static ({Set<FlaxPermissionDelivery> checks, bool errorsOnly})? of(
    Object? resource,
  ) =>
      resource is Future<Object?> ||
          resource is Stream<Object?> ||
          resource is StreamSubscription<Object?> ||
          resource is StreamIterator<Object?>
      ? _resources[resource!]
      : null;

  static void attach(
    Object? resource,
    Iterable<FlaxPermissionDelivery> checks, {
    bool errorsOnly = false,
  }) {
    if (resource is! Future<Object?> &&
        resource is! Stream<Object?> &&
        resource is! StreamSubscription<Object?> &&
        resource is! StreamIterator<Object?>) {
      return;
    }
    final previous = _resources[resource!];
    final combined = {...?previous?.checks, ...checks};
    if (combined.isEmpty) return;
    _resources[resource] = (
      checks: Set.unmodifiable(combined),
      errorsOnly: errorsOnly && (previous?.errorsOnly ?? true),
    );
  }

  static void inherit(
    Object? source,
    Object? target, {
    bool errorsOnly = false,
  }) {
    final metadata = of(source);
    if (metadata == null || identical(source, target)) return;
    attach(
      target,
      metadata.checks,
      errorsOnly: errorsOnly || metadata.errorsOnly,
    );
  }
}
