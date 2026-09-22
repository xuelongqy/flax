import 'closure_dep.dart';

/// Exposes [ClosureDep] in its public API without exporting the declaration.
class ClosureHolder {
  ClosureHolder(this.dep);
  final ClosureDep dep;
}
