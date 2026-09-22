// Extension type fixtures for the Stage 2 mechanism matrix.

extension type const Meters(int value) {
  int get doubled => value * 2;
}

class MetersBox {
  MetersBox(this.meters);

  final Meters meters;

  int get total => meters.doubled;

  int double(Meters input) => input.value * 2;
}
