class PulseBase {
  int get count => 7;
}

mixin Pulse on PulseBase {
  static final Pulse _shared = _Pulse();
  static Pulse get instance => _shared;
  Future<void> get completed => Future<void>.value();
  Future<int> get reading => Future<int>.value(count);
  Stream<int> get ticks => Stream<int>.value(count);
  Stream<String> get labels => Stream<String>.fromIterable(const ['a', 'b']);
}

class _Pulse extends PulseBase with Pulse {}
