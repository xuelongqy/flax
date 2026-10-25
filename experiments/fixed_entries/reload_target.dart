int get revision => 1;
const _seed = <int>[3, 7];
int score({int amount = 11}) => amount + _seed.first;

class ReloadBox<T> {
  ReloadBox(this.value, {this.seed = _seed});
  final T value;
  final List<int> seed;
  int score({int amount = 11}) => amount + seed.first;
}
