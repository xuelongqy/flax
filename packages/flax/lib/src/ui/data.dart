part of '../../bindings.dart';

Object? _copyNavigationData(Object? value, [Set<Object>? ancestors]) {
  if (value == null || value is String || value is bool) return value;
  if (value is num) {
    if (!value.isFinite ||
        (value == value.truncateToDouble() && value.abs() > 9007199254740991)) {
      throw ArgumentError('Expected a finite, losslessly representable number');
    }
    return value;
  }
  if (value is! List && value is! Map) {
    throw ArgumentError('Expected plain navigation data');
  }
  final path = ancestors ?? Set<Object>.identity();
  if (!path.add(value)) throw ArgumentError('Cyclic navigation data');
  try {
    if (value is List) {
      return List<Object?>.unmodifiable(
        value.map((v) => _copyNavigationData(v, path)),
      );
    }
    final result = <String, Object?>{};
    for (final entry in (value as Map).entries) {
      if (entry.key is! String) {
        throw ArgumentError('Navigation data requires string keys');
      }
      result[entry.key as String] = _copyNavigationData(entry.value, path);
    }
    return Map<String, Object?>.unmodifiable(result);
  } finally {
    path.remove(value);
  }
}

bool _sameNavigationData(Object? a, Object? b) {
  if (a is num && b is num) {
    return a == b && (a != 0 || a.isNegative == b.isNegative);
  }
  if (a is List && b is List) {
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; i++) {
      if (!_sameNavigationData(a[i], b[i])) return false;
    }
    return true;
  }
  if (a is Map && b is Map) {
    if (a.length != b.length) return false;
    for (final key in a.keys) {
      if (!b.containsKey(key) || !_sameNavigationData(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a == b;
}

extension _NavigationData on _Session {
  Object? decodeData(FlaxJsValue value) {
    final copy = helper('copyData').call([value]);
    try {
      return _readData(copy);
    } finally {
      _releaseJs(copy);
    }
  }

  Object? _readData(FlaxJsValue value) {
    if (value is FlaxJsNull) return null;
    if (value is FlaxJsBoolean) return value.value;
    if (value is FlaxJsString) return value.value;
    if (value is FlaxJsNumber) return value.value;
    if (value is! FlaxJsObject) throw ArgumentError('Invalid navigation data');
    final array = _arrayCheck!.call([value]) as FlaxJsBoolean;
    if (array.value) {
      final length = _property(
        value,
        'length',
        (v) => (v as FlaxJsNumber).value.toInt(),
      );
      return [
        for (var i = 0; i < length; i++) _property(value, '$i', _readData),
      ];
    }
    return {
      for (final key in keys(value)) key: _property(value, key, _readData),
    };
  }

  FlaxJsValue encodeData(Object? value, [Set<Object>? ancestors]) {
    if (value == null) return const FlaxJsNull();
    if (value is bool) return FlaxJsBoolean(value);
    if (value is String) return FlaxJsString(value);
    if (value is num) {
      if (!value.isFinite ||
          (value == value.truncateToDouble() &&
              value.abs() > 9007199254740991)) {
        throw ArgumentError(
          'Expected a finite, losslessly representable number',
        );
      }
      return FlaxJsNumber(value.toDouble());
    }
    if (value is! List && value is! Map) {
      throw ArgumentError('Expected plain navigation data');
    }
    final path = ancestors ?? Set<Object>.identity();
    if (!path.add(value)) throw ArgumentError('Cyclic navigation data');
    final args = <FlaxJsValue>[];
    try {
      if (value is List) {
        for (final item in value) {
          args.add(encodeData(item, path));
        }
      } else {
        for (final entry in (value as Map).entries) {
          if (entry.key is! String) {
            throw ArgumentError('Navigation data requires string keys');
          }
          args.add(FlaxJsString(entry.key as String));
          args.add(encodeData(entry.value, path));
        }
      }
      return helper(value is List ? 'array' : 'record').call(args);
    } finally {
      path.remove(value);
      for (final arg in args) {
        _releaseJs(arg);
      }
    }
  }
}
