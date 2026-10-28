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

/// Applies a synchronous isolation check or replacement to an exported operation.
///
/// This annotation does not export the declaration or authorize ordinary Dart calls.
class FlaxSandboxGuard {
  const FlaxSandboxGuard({
    required Type policyType,
    required Function handler,
    this.replace = false,
    // Ordinary guards require both values; only deny stores null.
    // ignore: prefer_initializing_formals
  }) : policyType = policyType,
       // ignore: prefer_initializing_formals
       handler = handler,
       deny = false;
  const FlaxSandboxGuard.deny()
    : policyType = null,
      handler = null,
      replace = true,
      deny = true;
  final Type? policyType;
  final Function? handler;
  final bool replace;
  final bool deny;
}
