class Span {
  const Span({required this.low, required this.high});
  const Span.point(int offset) : low = offset, high = offset;
  final int low;
  final int high;
  bool get collapsed => low == high;
  static const empty = Span.point(-1);
  Span copyWith({int? low, int? high}) =>
      Span(low: low ?? this.low, high: high ?? this.high);
}

class Marker extends Span {
  const Marker({required super.low, required super.high});
}
