part of '../../bindings.dart';

// Finalizer tokens own bridge cleanup only, never their Dart referent. Explicit
// release and session shutdown use the same path without waiting for either GC.
final _bridgeFinalizer = Finalizer<_BridgeReference>(
  (reference) => reference.release(),
);

abstract class _BridgeReference {
  _BridgeReference(_Session session) : _session = WeakReference(session) {
    session._references.add(this);
  }

  final WeakReference<_Session> _session;
  bool retired = false;
  bool released = false;
  int _running = 0;

  void attach(Object referent) =>
      _bridgeFinalizer.attach(referent, this, detach: this);

  void enter() {
    if (retired) throw StateError('Retired bridge reference');
    _running++;
  }

  void leave() {
    assert(_running > 0);
    _running--;
    if (retired) release();
  }

  void release() {
    retired = true;
    _bridgeFinalizer.detach(this);
    if (_running != 0 || released) return;
    released = true;
    _session.target?._references.remove(this);
    close();
  }

  void close();
}
