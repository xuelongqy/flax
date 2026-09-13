import 'package:flutter/foundation.dart';

enum Mode { quiet, active }

class GaugeBase<T> extends ChangeNotifier {
  GaugeBase(this.reading);
  T reading;
  void watch(VoidCallback observer) => addListener(observer);
  void unwatch(VoidCallback observer) => removeListener(observer);
  int finishes = 0;
  bool failFinish = false;
  void finish() {
    finishes++;
    dispose();
    if (failFinish) throw StateError('release failed after disposal');
  }
}

class Gauge extends GaugeBase<int> {
  Gauge({int initial = 7}) : super(initial) {
    if (initial < 0) throw ArgumentError('construction failed');
  }
  Mode mode = Mode.quiet;
  Gauge get self => this;
  Gauge? echo(Gauge? input) => input;
  void move(int amount) {
    reading = amount;
    notifyListeners();
  }

  void badWatch(int input) {}
  int badFinish() => 0;
  // Deliberately invalid object binding: the signature hides asynchronous work.
  // ignore: avoid_void_async
  void badAsync() async {}
}

void checkedMove(Gauge receiver, int amount) {
  if (amount < 0) throw ArgumentError('Expected a nonnegative reading');
  receiver.move(amount);
}

void wrongMove(Gauge receiver, String amount) {}
