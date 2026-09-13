/// Example selected object for the author template.
class Gauge {
  Gauge({this.value = 0});

  int value;

  void increment([int by = 1]) {
    value += by;
  }
}
