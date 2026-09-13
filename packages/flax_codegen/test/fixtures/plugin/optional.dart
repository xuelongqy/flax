class Options {
  Options(this.label, {this.count = 3});
  final String label;
  final int count;
  Options copyWith({int? count}) => Options(label, count: count ?? this.count);
  static int read({int count = 4}) => count;
}

abstract class Operation {
  Operation({this.count = 2});
  final int count;
  int apply(int value);
}
