part of '../../bindings.dart';

class _CollectionConversion {
  final inputs = <(FlaxJsObject, Object)>[];
  void close() {
    for (final (input, _) in inputs) {
      input.release();
    }
    inputs.clear();
  }

  Object? find(FlaxJsObject value) {
    for (final (input, output) in inputs) {
      if (input.strictEquals(value)) return output;
    }
    return null;
  }
}

class _CollectionCopy {
  _CollectionCopy(this.output, this.shape);
  final FlaxJsObject output;
  final String shape;
  final views = <String>{};
  final values = <List<FlaxJsValue>>[];
}

extension _Collections on _Session {
  _Value decodeCollection(
    FlaxJsObject input,
    FlaxTypeRef type,
    _CollectionConversion memo,
  ) {
    final id = helper('tryObjectHandle').call([input]);
    if (id is FlaxJsNumber) {
      final record = _objects[id.value.toInt()];
      if (record == null || type.collection?.matches(record.value) != true) {
        throw ArgumentError('Incompatible Dart collection');
      }
      return _Value(record.value, [_ObjectBorrow(record, input.retain())]);
    }
    final existing = memo.find(input);
    if (existing != null) {
      if (!type.collection!.matches(existing)) {
        throw ArgumentError('Incompatible shared collection input');
      }
      return _Value(existing);
    }
    final shape = helper('collectionShape').call([input]);
    final isMap = type.kind == 'map';
    final acceptedShapes = switch (type.kind) {
      'list' => const {'list'},
      'map' => const {'map', 'record'},
      'set' => const {'set'},
      'iterable' => const {'list', 'set', 'iterable'},
      _ => const <String>{},
    };
    if (shape is! FlaxJsString ||
        !acceptedShapes.contains(shape.value) ||
        (isMap &&
            shape.value == 'record' &&
            type.key!.kind != 'String' &&
            type.key!.kind != 'any')) {
      throw ArgumentError('Expected a compatible JS ${type.kind}');
    }
    final output = type.collection!.create();
    memo.inputs.add((input.retain(), output));
    final resources = <_Value>[];
    try {
      final entries = helper('collectionEntries').call([input]) as FlaxJsObject;
      try {
        final length = _property(
          entries,
          'length',
          (v) => (v as FlaxJsNumber).value.toInt(),
        );
        for (var i = 0; i < length; i++) {
          if (!isMap) {
            final item = _property(
              entries,
              '$i',
              (v) => decode(v, type.item!, conversion: memo),
            );
            resources.add(item);
            if (output is Set<Object?>) {
              output.add(item.data);
            } else {
              (output as List<Object?>).add(item.data);
            }
          } else {
            _property(entries, '$i', (v) {
              final pair = v as FlaxJsObject;
              final key = _property(
                pair,
                '0',
                (v) => decode(v, type.key!, conversion: memo),
              );
              resources.add(key);
              final value = _property(
                pair,
                '1',
                (v) => decode(v, type.item!, conversion: memo),
              );
              resources.add(value);
              (output as Map<Object?, Object?>)[key.data] = value.data;
            });
          }
        }
      } finally {
        entries.release();
      }
      return _Value(output, resources);
    } catch (_) {
      for (final resource in resources.reversed) {
        resource.release();
      }
      rethrow;
    }
  }

  _Value decodeAny(
    FlaxJsValue input,
    FlaxTypeRef type,
    _CollectionConversion memo,
  ) {
    if (input is FlaxJsNull && type.nullable) return _Value(null);
    if (input is FlaxJsString) return _Value(input.value);
    if (input is FlaxJsBoolean) return _Value(input.value);
    if (input is FlaxJsNumber) {
      _checkInteropNumber(input.value);
      return _Value(input.value);
    }
    if (input is! FlaxJsObject || input is FlaxJsFunction) {
      throw ArgumentError('Unsupported Dart value');
    }
    final enumType = helper('enumType').call([input]);
    if (enumType is FlaxJsString) {
      return decode(input, FlaxTypeRef('enum', id: enumType.value));
    }
    final id = helper('tryObjectHandle').call([input]);
    if (id is FlaxJsNumber) {
      final record = _objects[id.value.toInt()];
      if (record == null) {
        final stream = _streamReferences[id.value.toInt()];
        if (stream != null) {
          return _Value(stream.value, [_StreamBorrow(stream, input.retain())]);
        }
        final error = _dartErrors[id.value.toInt()];
        if (error != null && !error.released) {
          return _Value(error.error, [_DartErrorBorrow(error, input.retain())]);
        }
        throw StateError('Released Dart object');
      }
      if (record is _WidgetReference) {
        throw ArgumentError('Widget references require a Widget position');
      }
      return _Value(record.value, [_ObjectBorrow(record, input.retain())]);
    }
    final details = helper('errorDetails').call([input]);
    if (details is FlaxJsObject) {
      try {
        final message = _textProperty(details, 'message');
        final stack = _property(details, 'stack', (value) {
          if (value is FlaxJsNull) return '';
          return (value as FlaxJsString).value;
        });
        return _Value(FlaxJsException(message, jsStack: stack));
      } finally {
        details.release();
      }
    }
    final shape = helper('collectionShape').call([input]);
    if (shape is FlaxJsString &&
        {'list', 'map', 'record', 'set', 'iterable'}.contains(shape.value)) {
      return decodeCollection(input, switch (shape.value) {
        'list' => _anyList,
        'map' || 'record' => _anyMap,
        'set' => _anySet,
        _ => _anyIterable,
      }, memo);
    }
    throw ArgumentError('Expected a supported value or Dart reference');
  }

  FlaxJsValue collectionResult(Object value, FlaxTypeRef type) {
    final definition = type.collection!;
    if (!definition.matches(value)) {
      throw ArgumentError('Incompatible collection result');
    }
    var record = _collectionViews[value]?[definition.id];
    final created = record == null;
    if (record == null) {
      final item = type.item!;
      const integer = FlaxTypeRef('int');
      const nothing = FlaxTypeRef('void');
      FlaxParameter parameter(String name, FlaxTypeRef t) =>
          FlaxParameter(name, t, required: true, defaultValue: null);
      FlaxInstanceMethod method(
        List<FlaxParameter> args,
        FlaxTypeRef result,
        Object? Function(Object, Map<String, Object?>) invoke,
      ) => FlaxInstanceMethod(args, result, invoke);
      final methods = <String, FlaxInstanceMethod>{
        if (type.kind != 'map') ...{
          'contains': method(
            [parameter('value', item)],
            const FlaxTypeRef('bool'),
            (v, a) => (v as Iterable<Object?>).contains(a['value']),
          ),
          'toArray': method(
            [],
            FlaxTypeRef('copy', item: type.iterable ?? type),
            (v, _) => v,
          ),
        },
      };
      if (type.kind == 'list') {
        methods.addAll({
          'get': method(
            [parameter('index', integer)],
            item,
            (v, a) => (v as List<Object?>)[a['index'] as int],
          ),
          'set': method(
            [parameter('index', integer), parameter('value', item)],
            nothing,
            (v, a) {
              (v as List<Object?>)[a['index'] as int] = a['value'];
              return null;
            },
          ),
          'add': method([parameter('value', item)], nothing, (v, a) {
            (v as List<Object?>).add(a['value']);
            return null;
          }),
          'addAll': method([parameter('values', type.iterable!)], nothing, (
            v,
            a,
          ) {
            (v as List<Object?>).addAll(a['values'] as Iterable<Object?>);
            return null;
          }),
          'removeAt': method(
            [parameter('index', integer)],
            item,
            (v, a) => (v as List<Object?>).removeAt(a['index'] as int),
          ),
          'clear': method([], nothing, (v, _) {
            (v as List<Object?>).clear();
            return null;
          }),
        });
      } else if (type.kind == 'set') {
        methods.addAll({
          'add': method(
            [parameter('value', item)],
            const FlaxTypeRef('bool'),
            (v, a) => (v as Set<Object?>).add(a['value']),
          ),
          'addAll': method([parameter('values', type.iterable!)], nothing, (
            v,
            a,
          ) {
            (v as Set<Object?>).addAll(a['values'] as Iterable<Object?>);
            return null;
          }),
          'remove': method(
            [parameter('value', item)],
            const FlaxTypeRef('bool'),
            (v, a) => (v as Set<Object?>).remove(a['value']),
          ),
          'clear': method([], nothing, (v, _) {
            (v as Set<Object?>).clear();
            return null;
          }),
          'toSet': method([], FlaxTypeRef('copy', item: type), (v, _) => v),
        });
      } else if (type.kind == 'map') {
        final key = type.key!;
        final nullableItem = FlaxTypeRef(
          item.kind,
          id: item.id,
          nullable: true,
          item: item.item,
          key: item.key,
          collection: item.collection,
          iterable: item.iterable,
          callback: item.callback,
          deferredFactories: item.deferredFactories,
        );
        methods.addAll({
          'get': method(
            [parameter('key', key)],
            nullableItem,
            (v, a) => (v as Map<Object?, Object?>)[a['key']],
          ),
          'set': method(
            [parameter('key', key), parameter('value', item)],
            nothing,
            (v, a) {
              (v as Map<Object?, Object?>)[a['key']] = a['value'];
              return null;
            },
          ),
          'containsKey': method(
            [parameter('key', key)],
            const FlaxTypeRef('bool'),
            (v, a) => (v as Map<Object?, Object?>).containsKey(a['key']),
          ),
          'remove': method(
            [parameter('key', key)],
            nullableItem,
            (v, a) => (v as Map<Object?, Object?>).remove(a['key']),
          ),
          'clear': method([], nothing, (v, _) {
            (v as Map<Object?, Object?>).clear();
            return null;
          }),
          'toMap': method([], FlaxTypeRef('copy', item: type), (v, _) => v),
        });
      }
      final binding = FlaxObjectBinding(
        definition.id,
        [
          FlaxGetter(
            'length',
            integer,
            (v) => v is Map ? v.length : (v as Iterable).length,
          ),
          if (type.kind != 'map')
            FlaxGetter(
              'isEmpty',
              const FlaxTypeRef('bool'),
              (v) => (v as Iterable).isEmpty,
            ),
        ],
        methods,
        constructors: const {},
        create: _noCollectionConstructor,
        matches: definition.matches,
      );
      record = _CollectionReference(this, _nextObject++, binding, value);
      _objects[record.id] = record;
      (_collectionViews[value] ??= {})[definition.id] = record;
    }
    try {
      if (created) {
        _releaseJs(
          helper('defineCollection')
              .call([FlaxJsString(definition.id), FlaxJsString(type.kind)]),
        );
      }
      return helper('object').call([
        FlaxJsString(record.binding.id),
        FlaxJsNumber(record.id.toDouble()),
      ]);
    } catch (_) {
      if (created) record.release();
      rethrow;
    }
  }

  FlaxJsValue anyResult(Object? value) {
    if (value == null) return const FlaxJsNull();
    if (value is String) return FlaxJsString(value);
    if (value is bool) return FlaxJsBoolean(value);
    if (value is num) {
      _checkInteropNumber(value);
      return FlaxJsNumber(value.toDouble());
    }
    if (value is List) return collectionResult(value, _anyList);
    if (value is Map) return collectionResult(value, _anyMap);
    if (value is Set) return collectionResult(value, _anySet);
    if (value is Iterable) return collectionResult(value, _anyIterable);
    for (final binding in registry._types.values.whereType<FlaxEnumBinding>()) {
      for (final entry in binding.values.entries) {
        if (identical(entry.value, value)) {
          return enumResult(value, FlaxTypeRef('enum', id: binding.id));
        }
      }
    }
    for (final binding
        in registry._types.values.whereType<FlaxObjectBinding>()) {
      if (binding.matches?.call(value) == true) {
        return objectResult(value, FlaxTypeRef('object', id: binding.id));
      }
    }
    throw ArgumentError('Unbound Dart value: ${value.runtimeType}');
  }

  FlaxJsValue copyCollection(Object value, FlaxTypeRef type) {
    final copies = Map<Object, _CollectionCopy>.identity();
    final temporary = <FlaxJsObject>[];
    FlaxJsValue copy(Object? input, FlaxTypeRef declared) {
      if (declared.kind == 'any' && input is Object) {
        declared = input is List
            ? _anyList
            : input is Map
            ? _anyMap
            : input is Set
            ? _anySet
            : input is Iterable
            ? _anyIterable
            : declared;
      }
      if (!{'iterable', 'list', 'map', 'set'}.contains(declared.kind)) {
        final result = memberResult(input, declared);
        if (result is FlaxJsObject) temporary.add(result);
        return result;
      }
      if (input == null && declared.nullable) return const FlaxJsNull();
      if (input == null || !declared.collection!.matches(input)) {
        throw ArgumentError('Incompatible collection copy');
      }
      final shape = declared.kind == 'iterable' ? 'list' : declared.kind;
      var record = copies[input];
      final first = record == null;
      if (record == null) {
        final result = helper(
          'emptyCollection',
        ).call([FlaxJsString(shape)]) as FlaxJsObject;
        temporary.add(result);
        record = _CollectionCopy(result, shape);
        copies[input] = record;
      } else if (record.shape != shape) {
        throw ArgumentError('Incompatible shared collection copy views');
      }
      // Revisit a shared container under each declaration; identity alone must not
      // hide a callback or data conversion required by another view.
      if (!record.views.add(declared.collection!.id)) return record.output;
      final values = <FlaxJsValue>[];
      record.values.add(values);
      if (input is Iterable && input is! Map) {
        var index = 0;
        for (final source in input) {
          final item = copy(source, declared.item!);
          values.add(item);
          if (first) {
            if (declared.kind == 'set') {
              _releaseJs(helper('setAdd').call([record.output, item]));
            } else {
              record.output.setProperty('${index++}', item);
            }
          }
        }
      } else {
        for (final entry in (input as Map).entries) {
          final key = copy(entry.key, declared.key!);
          final item = copy(entry.value, declared.item!);
          values.addAll([key, item]);
          if (first) {
            _releaseJs(helper('mapSet').call([record.output, key, item]));
          }
        }
      }
      return record.output;
    }

    try {
      final result = copy(value, type);
      for (final record in copies.values) {
        final first = record.values.first;
        for (final other in record.values.skip(1)) {
          if (first.length != other.length ||
              !Iterable<int>.generate(first.length)
                  .every((i) => _sameJsValue(first[i], other[i]))) {
            throw ArgumentError('Incompatible shared collection copy views');
          }
        }
      }
      temporary.remove(result);
      return result;
    } finally {
      for (final handle in temporary.reversed) {
        handle.release();
      }
    }
  }
}

/// Each type view owns its handle, while all views operate on the same collection.
class _CollectionReference extends _ObjectReference {
  _CollectionReference(super.session, super.id, super.binding, super.value);

  @override
  void release() {
    final receiver = _value;
    _value = null;
    session._objects.remove(id);
    final views = session._collectionViews[receiver];
    views?.remove(binding.id);
    if (views != null && views.isEmpty) {
      session._collectionViews.remove(receiver);
    }
  }
}

Object _noCollectionConstructor(String ctor, Map<String, Object?> values) =>
    throw UnsupportedError('Collections are created by conversion');
Object _newAnyList() => <Object?>[];
Object _newAnyMap() => <Object?, Object?>{};
Object _newAnySet() => <Object?>{};
bool _isAnyList(Object value) => value is List;
bool _isAnyMap(Object value) => value is Map;
bool _isAnySet(Object value) => value is Set;
bool _isAnyIterable(Object value) => value is Iterable;
const _any = FlaxTypeRef('any', nullable: true);
const _anyList = FlaxTypeRef(
  'list',
  item: _any,
  collection: FlaxCollectionBinding('list:[any?:]', _newAnyList, _isAnyList),
  iterable: _anyIterable,
);
const _anyMap = FlaxTypeRef(
  'map',
  item: _any,
  key: _any,
  collection: FlaxCollectionBinding(
    'map:[any?:][any?:]',
    _newAnyMap,
    _isAnyMap,
  ),
);
const _anyIterable = FlaxTypeRef(
  'iterable',
  item: _any,
  collection: FlaxCollectionBinding(
    'iterable:[any?:]',
    _newAnyList,
    _isAnyIterable,
  ),
);
const _anySet = FlaxTypeRef(
  'set',
  item: _any,
  collection: FlaxCollectionBinding('set:[any?:]', _newAnySet, _isAnySet),
  iterable: _anyIterable,
);

// Doubles may contain non-finite values, but integral values must survive JS exactly.
void _checkInteropNumber(num value) {
  if (value.isFinite &&
      value == value.truncateToDouble() &&
      value.abs() > 9007199254740991) {
    throw ArgumentError('Expected a losslessly representable number');
  }
}

bool _sameJsValue(FlaxJsValue a, FlaxJsValue b) {
  if (a is FlaxJsObject && b is FlaxJsObject) return a.strictEquals(b);
  if (a is FlaxJsNull && b is FlaxJsNull ||
      a is FlaxJsUndefined && b is FlaxJsUndefined) {
    return true;
  }
  if (a is FlaxJsString && b is FlaxJsString) return a.value == b.value;
  if (a is FlaxJsBoolean && b is FlaxJsBoolean) return a.value == b.value;
  if (a is FlaxJsNumber && b is FlaxJsNumber) {
    return a.value == b.value || (a.value.isNaN && b.value.isNaN);
  }
  return false;
}
