part of '../../bindings.dart';

// Borrowed packets exist only during one synchronous host callback.
abstract class _WidgetBatchValue extends FlaxJsValue {
  _WidgetBatchValue(this.original);
  final FlaxJsObject original;
}

class _WidgetPacket extends _WidgetBatchValue {
  _WidgetPacket(super.original, this.id, this.ctor, this.arguments);
  final String id, ctor;
  final Map<String, FlaxJsValue> arguments;
}

class _WidgetArrayPacket extends _WidgetBatchValue {
  _WidgetArrayPacket(super.original, this.items);
  final List<FlaxJsValue> items;
}

_WidgetPacket _parseWidgetBatch(List<FlaxJsValue> values) {
  if (values.isEmpty || values.length > 4097 || values.first is! FlaxJsString) {
    throw ArgumentError('Invalid Widget batch');
  }
  final text = (values.first as FlaxJsString).value;
  if (text.length > 262144) throw ArgumentError('Oversized Widget batch');
  final plan = jsonDecode(text);
  if (plan is! List ||
      plan.length != 2 ||
      plan[0] is! int ||
      plan[1] is! List) {
    throw ArgumentError('Invalid Widget batch plan');
  }
  final nodes = plan[1] as List;
  if (nodes.isEmpty || nodes.length > 512) {
    throw ArgumentError('Invalid Widget batch size');
  }
  final packets = <int, _WidgetBatchValue>{};
  final visiting = <int>{};
  var visits = 0;
  FlaxJsObject original(Object? index) {
    if (index is! int || index < 0 || index + 1 >= values.length) {
      throw ArgumentError('Invalid Widget batch reference');
    }
    final result = values[index + 1];
    if (result is! FlaxJsObject) throw ArgumentError('Invalid Widget object');
    return result;
  }

  FlaxJsValue read(Object? token, int depth) {
    if (++visits > 4096) {
      throw ArgumentError('Oversized Widget batch traversal');
    }
    if (token is! int || token == 0 || depth > 64) {
      throw ArgumentError('Invalid Widget batch token');
    }
    if (token < 0) {
      if (-token >= values.length) {
        throw ArgumentError('Invalid Widget batch value');
      }
      return values[-token];
    }
    final cached = packets[token];
    if (cached != null) return cached;
    if (token > nodes.length || !visiting.add(token)) {
      throw ArgumentError('Cyclic or invalid Widget batch');
    }
    final node = nodes[token - 1];
    late final _WidgetBatchValue result;
    if (node is List && node.length == 3 && node[0] == 1 && node[2] is List) {
      result = _WidgetArrayPacket(original(node[1]), [
        for (final child in node[2] as List) read(child, depth + 1),
      ]);
    } else if (node is List &&
        node.length == 5 &&
        node[0] == 0 &&
        node[2] is String &&
        node[3] is String &&
        node[4] is List) {
      final fields = node[4] as List;
      if (fields.length.isOdd) throw ArgumentError('Invalid Widget fields');
      final arguments = <String, FlaxJsValue>{};
      for (var i = 0; i < fields.length; i += 2) {
        final name = fields[i];
        if (name is! String || arguments.containsKey(name)) {
          throw ArgumentError('Invalid Widget field name');
        }
        arguments[name] = read(fields[i + 1], depth + 1);
      }
      result = _WidgetPacket(
        original(node[1]),
        node[2] as String,
        node[3] as String,
        arguments,
      );
    } else {
      throw ArgumentError('Invalid Widget batch node');
    }
    visiting.remove(token);
    return packets[token] = result;
  }

  final result = read(plan[0], 0);
  if (result is! _WidgetPacket) throw ArgumentError('Expected a Widget root');
  return result;
}

extension _WidgetBatchExperiment on _Session {
  _Value? _readWidgetBatch(
    FlaxJsObject value,
    FlaxTypeRef type,
    _CallbackScope callbackScope,
    _CollectionConversion? conversion,
  ) {
    final reader = _widgetBatchReader;
    if (reader == null) return null;
    final previous = _widgetBatchReceiver;
    var received = false;
    _Value? prepared;
    (Object, StackTrace)? failure;
    _widgetBatchReceiver = (values) {
      final tracing = Flax.traceForExperiment;
      var traced = false;
      _widgetBatchDepth++;
      try {
        if (received) throw ArgumentError('Repeated Widget batch');
        received = true;
        tracing?.call('dart:widget-batch', true);
        traced = true;
        prepared = decode(
          _parseWidgetBatch(values),
          type,
          callbackScope: callbackScope,
          conversion: conversion,
        );
      } catch (error, stack) {
        failure ??= (error, stack);
      } finally {
        _widgetBatchDepth--;
        try {
          if (traced) tracing?.call('dart:widget-batch', false);
        } catch (error, stack) {
          failure ??= (error, stack);
        }
      }
    };
    try {
      final result = reader.call([value]);
      try {
        if (failure case final error?) {
          Error.throwWithStackTrace(error.$1, error.$2);
        }
        if (result is! FlaxJsBoolean || result.value != received) {
          throw ArgumentError('Invalid Widget batch result');
        }
        return prepared;
      } finally {
        _releaseJs(result);
      }
    } catch (_) {
      prepared?.release();
      rethrow;
    } finally {
      _widgetBatchReceiver = previous;
    }
  }

  _Value _decodeWidgetBatchValue(
    _WidgetBatchValue value,
    FlaxTypeRef type,
    _CallbackScope callbackScope,
    _CollectionConversion? conversion,
  ) {
    if (value is _WidgetPacket && type.kind == 'widget') {
      final definition = value.id == _pageContentBinding.id
          ? _pageContentBinding
          : _typeBinding(value.id);
      if (definition is! FlaxWidgetBinding) {
        throw ArgumentError('Unknown or incompatible binding: ${value.id}');
      }
      final parameters = definition.constructors[value.ctor];
      if (parameters == null) {
        throw ArgumentError(
          'Unsupported constructor: ${value.id}.${value.ctor}',
        );
      }
      final sources = _inBindingContext(
        definition.id,
        () => _convertArguments(
          null,
          value.arguments,
          parameters,
          allowBindings: true,
        ),
      );
      return _createWidget(definition, value.ctor, parameters, sources, type);
    }
    if (value is _WidgetArrayPacket &&
        type.kind == 'list' &&
        type.item!.kind == 'widget') {
      final items = <_Value>[];
      try {
        for (final child in value.items) {
          items.add(decode(child, type.item!));
        }
        final widgets = widgetSnapshot(items.map((item) => item.data), type);
        _checkWidgetKeys(widgets.whereType<Widget>());
        return _Value(widgets, items);
      } catch (_) {
        for (final child in items.reversed) {
          child.release();
        }
        rethrow;
      }
    }
    return decode(
      value.original,
      type,
      callbackScope: callbackScope,
      conversion: conversion,
    );
  }
}
