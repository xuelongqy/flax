import 'package:flutter/widgets.dart';
export 'package:flutter/widgets.dart';

class _OmissionToken {
  const _OmissionToken(this.value);
  final int value;
}

int _increment(int value) => value + 1;

int omissionTotal({
  Object? token = const _OmissionToken(1),
  List<int>? numbers = const [1, 2],
  Map<String, int>? mapping = const {'a': 3},
  int Function(int)? callback = _increment,
  List<String>? labels = const ['default'],
  Object? extra = const _OmissionToken(6),
}) =>
    (token == null ? -1 : (token as _OmissionToken).value) +
    (numbers?.fold<int>(0, (a, b) => a + b) ?? -1) +
    (mapping?['a'] ?? -1) +
    (callback?.call(4) ?? -1) +
    (labels?.length ?? -1) +
    (extra == null ? -1 : (extra as _OmissionToken).value);

typedef OmissionCallback = int Function({
  Object? token,
  List<int>? numbers,
  Map<String, int>? mapping,
  int Function(int)? callback,
  List<String>? labels,
  Object? extra,
});

class OmissionCalls {
  const OmissionCalls({
    this.token = const _OmissionToken(1),
    this.numbers = const [1, 2],
    this.mapping = const {'a': 3},
    this.callback = _increment,
    this.labels = const ['default'],
    this.extra = const _OmissionToken(6),
  });
  final Object? token;
  final List<int>? numbers;
  final Map<String, int>? mapping;
  final int Function(int)? callback;
  final List<String>? labels;
  final Object? extra;
  int get total => omissionTotal(
    token: token,
    numbers: numbers,
    mapping: mapping,
    callback: callback,
    labels: labels,
    extra: extra,
  );
  int compute({
    Object? token = const _OmissionToken(1),
    List<int>? numbers = const [1, 2],
    Map<String, int>? mapping = const {'a': 3},
    int Function(int)? callback = _increment,
    List<String>? labels = const ['default'],
    Object? extra = const _OmissionToken(6),
  }) => omissionTotal(
    token: token,
    numbers: numbers,
    mapping: mapping,
    callback: callback,
    labels: labels,
    extra: extra,
  );
  static int measure({
    Object? token = const _OmissionToken(1),
    List<int>? numbers = const [1, 2],
    Map<String, int>? mapping = const {'a': 3},
    int Function(int)? callback = _increment,
    List<String>? labels = const ['default'],
    Object? extra = const _OmissionToken(6),
  }) => omissionTotal(
    token: token,
    numbers: numbers,
    mapping: mapping,
    callback: callback,
    labels: labels,
    extra: extra,
  );
  OmissionCallback get returned => omissionTotal;
}

class OmissionChild extends OmissionCalls {
  const OmissionChild({
    super.token,
    super.numbers,
    super.mapping,
    super.callback,
    super.labels,
    super.extra,
  });
}

class OmissionGeneric<T> extends OmissionCalls {
  const OmissionGeneric(
    this.value, {
    super.token,
    super.numbers,
    super.mapping,
    super.callback,
    super.labels,
    super.extra,
  });
  final T value;
}

abstract class OmissionFactory {
  factory OmissionFactory({Object? token}) = _OmissionFactoryMiddle;
  Object? get token;
  bool get defaulted;
}

abstract class _OmissionFactoryMiddle implements OmissionFactory {
  factory _OmissionFactoryMiddle({Object? token}) = _OmissionFactoryLeaf;
}

class _OmissionFactoryLeaf implements _OmissionFactoryMiddle {
  _OmissionFactoryLeaf({this.token = const _OmissionToken(8)});
  @override
  final Object? token;
  @override
  bool get defaulted =>
      token is _OmissionToken && (token as _OmissionToken).value == 8;
}

class OmissionPositional {
  OmissionPositional([
    this.first = const _OmissionToken(6),
    this.second = const _OmissionToken(7),
    this.count = 4,
  ]);
  final Object? first;
  final Object? second;
  final int count;
  int get total =>
      (first == null ? -1 : (first as _OmissionToken).value) +
      (second == null ? -1 : (second as _OmissionToken).value) +
      count;
}

class OmissionProxy extends OmissionCalls {
  const OmissionProxy({
    super.token,
    super.numbers,
    super.mapping,
    super.callback,
    super.labels,
    super.extra,
  });
  Future<int> trigger() => work();

  @mustCallSuper
  Future<int> work({
    Object? token = const _OmissionToken(1),
    List<int>? numbers = const [1, 2],
    Map<String, int>? mapping = const {'a': 3},
    int Function(int)? callback = _increment,
    List<String>? labels = const ['default'],
    Object? extra = const _OmissionToken(6),
  }) async => omissionTotal(
    token: token,
    numbers: numbers,
    mapping: mapping,
    callback: callback,
    labels: labels,
    extra: extra,
  );
}

class OmissionWidget extends StatelessWidget {
  const OmissionWidget({
    super.key,
    this.labels = const ['default'],
    this.padding = const [8],
    this.numbers = const [1, 2],
    this.mapping = const {'a': 3},
    this.token = const _OmissionToken(1),
    this.extra = const _OmissionToken(6),
  });
  final List<String>? labels;
  final List<int>? padding;
  final List<int>? numbers;
  final Map<String, int>? mapping;
  final Object? token;
  final Object? extra;
  @override
  Widget build(BuildContext context) => Padding(
    padding: EdgeInsets.all((padding?.first ?? 0).toDouble()),
    child: Text(labels?.join(',') ?? 'null'),
  );
}
