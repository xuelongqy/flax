// ignore_for_file: redirect_to_non_class, recursive_constructor_redirect, redirect_to_invalid_function_type, unused_element_parameter
// Intentionally invalid declarations exercise fail-closed default resolution.
abstract class MissingDefault {
  factory MissingDefault({Object? token}) = UnknownTarget;
}

abstract class CyclicDefault {
  factory CyclicDefault({Object? token}) = CyclicDefaultNext;
}

abstract class CyclicDefaultNext implements CyclicDefault {
  factory CyclicDefaultNext({Object? token}) = CyclicDefault;
}

abstract class MismatchedDefault {
  factory MismatchedDefault({Object? token}) = _MismatchedDefault;
}

class _MismatchedDefault implements MismatchedDefault {
  _MismatchedDefault({Object? other});
}
