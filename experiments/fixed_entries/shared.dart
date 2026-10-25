const _seed = <int>[3, 7];
int _double(int value) => value * 2;

class Box<T> {
  Box(this.value, {this.seed = _seed, this.callback = _double});
  final T value;
  final List<int> seed;
  final int Function(int) callback;
  int score({int extra = 11}) => extra + callback(seed.first);
  static int global({int extra = 13}) => extra;
}

int readSeed({List<int> seed = _seed}) => seed.first;
bool hasOriginalDefaults(Box<Object?> value) =>
    identical(value.seed, _seed) && identical(value.callback, _double);
