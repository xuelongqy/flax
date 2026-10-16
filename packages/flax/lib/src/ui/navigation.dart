part of '../../bindings.dart';

/// Optional host observer. Session lifetime does not depend on navigation.
class FlaxNavigatorObserver extends NavigatorObserver {}

class _StateReference {
  _StateReference(State state, this.type, {bool pending = false})
    : target = WeakReference(state),
      pendingState = pending ? state : null;
  final WeakReference<State> target;
  final String type;
  State? pendingState;
  bool claimed = false;
  State? get mounted {
    final state = target.target;
    return state != null && state.mounted ? state : null;
  }
}

extension _StateResults on _Session {
  FlaxJsValue stateResult(State state, FlaxTypeRef type) {
    final binding = dartTypes.bindingFor(
      _specializedOwners[type.id] ?? type.id!,
      state,
    );
    final idType = binding?.id ?? type.id!;
    final pending = !state.mounted;
    if (pending && _nativeStateFactories.isEmpty) {
      throw StateError('Unmounted State');
    }
    _states.removeWhere(
      (_, ref) => ref.mounted == null && ref.pendingState == null,
    );
    final views = _stateIds[state] ??= {};
    final id = views.putIfAbsent(idType, () => _nextState++);
    _states.putIfAbsent(
      id,
      () => _StateReference(state, idType, pending: pending),
    );
    if (pending) _nativeStateFactories.last.add(id);
    // Wrappers do not own the Flutter State or need a native reference cache.
    return helper('state').call([
      FlaxJsString(idType),
      FlaxJsNumber(id.toDouble()),
      FlaxJsString(_specializedOwners[idType] ?? idType),
    ]);
  }
}
