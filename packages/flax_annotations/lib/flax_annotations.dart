/// Selects public Dart APIs for the existing Flax binding generator.
library;

/// Exports a public class, enum or top-level function into one binding scope.
///
/// [scope] defaults to app. With no scope YAML, app is configured implicitly;
/// otherwise it must match an annotation-enabled configured scope.
/// A class exports its supported public members, except those marked [FlaxIgnore].
class FlaxExport {
  const FlaxExport({this.scope = 'app'});

  final String scope;
}

/// Excludes a declaration or class member from annotation-enabled inference.
///
/// An explicit YAML selection of an ignored API is an error. This annotation
/// does not change Dart visibility, object ownership or runtime capabilities.
class FlaxIgnore {
  const FlaxIgnore();
}
