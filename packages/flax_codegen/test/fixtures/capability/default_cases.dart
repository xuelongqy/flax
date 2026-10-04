class _PrivateDefault {
  const _PrivateDefault(this.value);
  final int value;
}

class Default3 {
  const Default3({
    this.p1 = const _PrivateDefault(1),
    this.p2 = const _PrivateDefault(2),
    this.p3 = const _PrivateDefault(3),
  });
  final Object p1;
  final Object p2;
  final Object p3;
  int get fingerprint => <int>[
    (p1 as _PrivateDefault).value,
    (p2 as _PrivateDefault).value,
    (p3 as _PrivateDefault).value,
  ].fold(0, (a, b) => a + b);
}

/// Nullable inputs with non-null private defaults distinguish omission from null.
class NullableDefault6 {
  const NullableDefault6({
    this.p1 = const _PrivateDefault(1),
    this.p2 = const _PrivateDefault(2),
    this.p3 = const _PrivateDefault(3),
    this.p4 = const _PrivateDefault(4),
    this.p5 = const _PrivateDefault(5),
    this.p6 = const _PrivateDefault(6),
  });

  final Object? p1;
  final Object? p2;
  final Object? p3;
  final Object? p4;
  final Object? p5;
  final Object? p6;
}

class Default5 {
  const Default5({
    this.p1 = const _PrivateDefault(1),
    this.p2 = const _PrivateDefault(2),
    this.p3 = const _PrivateDefault(3),
    this.p4 = const _PrivateDefault(4),
    this.p5 = const _PrivateDefault(5),
  });
  final Object p1;
  final Object p2;
  final Object p3;
  final Object p4;
  final Object p5;
  int get fingerprint => <int>[
    (p1 as _PrivateDefault).value,
    (p2 as _PrivateDefault).value,
    (p3 as _PrivateDefault).value,
    (p4 as _PrivateDefault).value,
    (p5 as _PrivateDefault).value,
  ].fold(0, (a, b) => a + b);
}

class Default6 {
  const Default6({
    this.p1 = const _PrivateDefault(1),
    this.p2 = const _PrivateDefault(2),
    this.p3 = const _PrivateDefault(3),
    this.p4 = const _PrivateDefault(4),
    this.p5 = const _PrivateDefault(5),
    this.p6 = const _PrivateDefault(6),
  });
  final Object p1;
  final Object p2;
  final Object p3;
  final Object p4;
  final Object p5;
  final Object p6;
  int get fingerprint => <int>[
    (p1 as _PrivateDefault).value,
    (p2 as _PrivateDefault).value,
    (p3 as _PrivateDefault).value,
    (p4 as _PrivateDefault).value,
    (p5 as _PrivateDefault).value,
    (p6 as _PrivateDefault).value,
  ].fold(0, (a, b) => a + b);
}

class Default8 {
  const Default8({
    this.p1 = const _PrivateDefault(1),
    this.p2 = const _PrivateDefault(2),
    this.p3 = const _PrivateDefault(3),
    this.p4 = const _PrivateDefault(4),
    this.p5 = const _PrivateDefault(5),
    this.p6 = const _PrivateDefault(6),
    this.p7 = const _PrivateDefault(7),
    this.p8 = const _PrivateDefault(8),
  });
  final Object p1;
  final Object p2;
  final Object p3;
  final Object p4;
  final Object p5;
  final Object p6;
  final Object p7;
  final Object p8;
  int get fingerprint => <int>[
    (p1 as _PrivateDefault).value,
    (p2 as _PrivateDefault).value,
    (p3 as _PrivateDefault).value,
    (p4 as _PrivateDefault).value,
    (p5 as _PrivateDefault).value,
    (p6 as _PrivateDefault).value,
    (p7 as _PrivateDefault).value,
    (p8 as _PrivateDefault).value,
  ].fold(0, (a, b) => a + b);
}

class Default10 {
  const Default10({
    this.p1 = const _PrivateDefault(1),
    this.p2 = const _PrivateDefault(2),
    this.p3 = const _PrivateDefault(3),
    this.p4 = const _PrivateDefault(4),
    this.p5 = const _PrivateDefault(5),
    this.p6 = const _PrivateDefault(6),
    this.p7 = const _PrivateDefault(7),
    this.p8 = const _PrivateDefault(8),
    this.p9 = const _PrivateDefault(9),
    this.p10 = const _PrivateDefault(10),
  });
  final Object p1;
  final Object p2;
  final Object p3;
  final Object p4;
  final Object p5;
  final Object p6;
  final Object p7;
  final Object p8;
  final Object p9;
  final Object p10;
  int get fingerprint => <int>[
    (p1 as _PrivateDefault).value,
    (p2 as _PrivateDefault).value,
    (p3 as _PrivateDefault).value,
    (p4 as _PrivateDefault).value,
    (p5 as _PrivateDefault).value,
    (p6 as _PrivateDefault).value,
    (p7 as _PrivateDefault).value,
    (p8 as _PrivateDefault).value,
    (p9 as _PrivateDefault).value,
    (p10 as _PrivateDefault).value,
  ].fold(0, (a, b) => a + b);
}

abstract class RedirectDefaults {
  factory RedirectDefaults.named({Object? token}) = _RedirectMiddle.named;
  factory RedirectDefaults.positional([Object? token]) =
      _RedirectMiddle.positional;
  Object? get token;
}

abstract class _RedirectMiddle implements RedirectDefaults {
  factory _RedirectMiddle.named({Object? token}) = _RedirectLeaf.named;
  factory _RedirectMiddle.positional([Object? token]) =
      _RedirectLeaf.positional;
}

class _RedirectLeaf implements _RedirectMiddle {
  _RedirectLeaf.named({this.token = const _PrivateDefault(8)});
  _RedirectLeaf.positional([this.token = const _PrivateDefault(9)]);
  @override
  final Object? token;
}

class OwnDefaults {
  OwnDefaults([this.token]);
  OwnDefaults.redirect([Object? token]) : this(token);
  factory OwnDefaults.factory([Object? token]) => OwnDefaults(token);
  final Object? token;
}

class NullableDefault3 {
  const NullableDefault3({
    this.p1 = const _PrivateDefault(1),
    this.p2 = const _PrivateDefault(2),
    this.p3 = const _PrivateDefault(3),
  });
  final Object? p1;
  final Object? p2;
  final Object? p3;
  int get fingerprint => <int>[
    (p1 as _PrivateDefault).value,
    (p2 as _PrivateDefault).value,
    (p3 as _PrivateDefault).value,
  ].fold(0, (a, b) => a + b);
}

class NullableDefault5 {
  const NullableDefault5({
    this.p1 = const _PrivateDefault(1),
    this.p2 = const _PrivateDefault(2),
    this.p3 = const _PrivateDefault(3),
    this.p4 = const _PrivateDefault(4),
    this.p5 = const _PrivateDefault(5),
  });
  final Object? p1;
  final Object? p2;
  final Object? p3;
  final Object? p4;
  final Object? p5;
  int get fingerprint => <int>[
    (p1 as _PrivateDefault).value,
    (p2 as _PrivateDefault).value,
    (p3 as _PrivateDefault).value,
    (p4 as _PrivateDefault).value,
    (p5 as _PrivateDefault).value,
  ].fold(0, (a, b) => a + b);
}

class NullableDefault8 {
  const NullableDefault8({
    this.p1 = const _PrivateDefault(1),
    this.p2 = const _PrivateDefault(2),
    this.p3 = const _PrivateDefault(3),
    this.p4 = const _PrivateDefault(4),
    this.p5 = const _PrivateDefault(5),
    this.p6 = const _PrivateDefault(6),
    this.p7 = const _PrivateDefault(7),
    this.p8 = const _PrivateDefault(8),
  });
  final Object? p1;
  final Object? p2;
  final Object? p3;
  final Object? p4;
  final Object? p5;
  final Object? p6;
  final Object? p7;
  final Object? p8;
  int get fingerprint => <int>[
    (p1 as _PrivateDefault).value,
    (p2 as _PrivateDefault).value,
    (p3 as _PrivateDefault).value,
    (p4 as _PrivateDefault).value,
    (p5 as _PrivateDefault).value,
    (p6 as _PrivateDefault).value,
    (p7 as _PrivateDefault).value,
    (p8 as _PrivateDefault).value,
  ].fold(0, (a, b) => a + b);
}

class NullableDefault10 {
  const NullableDefault10({
    this.p1 = const _PrivateDefault(1),
    this.p2 = const _PrivateDefault(2),
    this.p3 = const _PrivateDefault(3),
    this.p4 = const _PrivateDefault(4),
    this.p5 = const _PrivateDefault(5),
    this.p6 = const _PrivateDefault(6),
    this.p7 = const _PrivateDefault(7),
    this.p8 = const _PrivateDefault(8),
    this.p9 = const _PrivateDefault(9),
    this.p10 = const _PrivateDefault(10),
  });
  final Object? p1;
  final Object? p2;
  final Object? p3;
  final Object? p4;
  final Object? p5;
  final Object? p6;
  final Object? p7;
  final Object? p8;
  final Object? p9;
  final Object? p10;
  int get fingerprint => <int>[
    (p1 as _PrivateDefault).value,
    (p2 as _PrivateDefault).value,
    (p3 as _PrivateDefault).value,
    (p4 as _PrivateDefault).value,
    (p5 as _PrivateDefault).value,
    (p6 as _PrivateDefault).value,
    (p7 as _PrivateDefault).value,
    (p8 as _PrivateDefault).value,
    (p9 as _PrivateDefault).value,
    (p10 as _PrivateDefault).value,
  ].fold(0, (a, b) => a + b);
}
