part of '../../bindings.dart';

/// One compiled template per Dart class; no closed type-argument catalog.
class FlaxDartClassTemplate {
  const FlaxDartClassTemplate(
    this.id,
    this.type,
    this.kind, {
    this.typeFactory,
    this.factory,
    this.requiresTypeArguments = false,
  });
  final String id;
  final Type type;
  final String kind;
  // <T...>() => (FlaxDartTypes types, String id) => FlaxDartClass.
  final Function? typeFactory;
  final Function? factory;
  final bool requiresTypeArguments;
}

class FlaxDartClass {
  const FlaxDartClass(
    this.type,
    this.binding, {
    this.deferredFactories = const {},
  });
  final Type type;
  final FlaxTypeBinding binding;
  final Map<String, FlaxDeferredFactoryBinding> deferredFactories;
}

class FlaxDartShapeTemplate {
  const FlaxDartShapeTemplate(this.key, this.factory);
  final String key;
  // <field/parameter/result types...>() => (FlaxDartTypes, bool) => FlaxTypeRef.
  final Function factory;
}

/// Session-owned Type metadata. Cached adapters never capture business receivers.
class FlaxDartTypes {
  FlaxDartTypes._(this._session);
  final _Session _session;
  FlaxJsRuntime get _runtime => _session.runtime;
  var _instanceTypes = Expando<Type>();
  final _parts = <Type, List<Object?>>{};
  final _refs = <(_BindingContext?, Type, bool, String?), FlaxTypeRef>{};
  final _classes = <String, FlaxDartClassTemplate>{};
  final _shapes = <String, FlaxDartShapeTemplate>{};
  final _sources = <(String, String), List<FlaxDartClassTemplate>>{};
  final _ids = <(String, _BindingContext?, Type), String>{};
  final _typeKeys = <Type, int>{};
  final _projections = <(String, Type), Type?>{};
  final _handles = <(Type, _BindingContext?, String?), FlaxJsObject>{};
  final _handleTypes = <String, Type>{};
  final _handleProviders = <String, Map<Type, String>>{};
  final _selectionContexts = <String, _BindingContext>{};
  final _calls = <String, String>{};
  final _pendingClasses = <String, (FlaxDartClassTemplate, Type)>{};
  final _deferred = <String, Map<String, FlaxDeferredFactoryBinding>>{};
  final _records = <String, FlaxTypeRef>{};
  var _serial = 0;
  bool _indexed = false;

  // Flutter matching tokens and user runtimeType overrides are not VM types.
  Type instanceType(Object value) {
    Type? cached;
    try {
      cached = _instanceTypes[value];
    } on ArgumentError {
      // Primitive/Record/FFI values cannot be Expando keys.
      return _runtime.dartInstanceType(value);
    }
    return cached ?? (_instanceTypes[value] = _runtime.dartInstanceType(value));
  }

  List<Object?> parts(Type type) =>
      _parts.putIfAbsent(type, () => _runtime.dartTypeParts(type));
  List<Type> arguments(Type type) => (parts(type)[4] as List).cast<Type>();

  Object? instantiate(
    Function factory,
    List<Type> arguments,
    List<Object?> values,
  ) => Function.apply(
    _runtime.instantiateDartClosure(factory, arguments),
    values,
  );

  void _index() {
    if (_indexed) return;
    _indexed = true;
    for (final module in [componentsBindings, ..._session.registry.modules]) {
      for (final shape in module.dartShapes) {
        _shapes.putIfAbsent(shape.key, () => shape);
      }
      for (final template in module.dartTypes) {
        if (_classes.containsKey(template.id)) {
          throw StateError('Duplicate Dart type template: ${template.id}');
        }
        _classes[template.id] = template;
        final info = parts(template.type);
        (_sources[(info[2] as String, info[3] as String)] ??= []).add(template);
      }
    }
  }

  FlaxDartClassTemplate? _template(List<Object?> info, Type type) {
    _index();
    final candidates = _sources[(info[2] as String, info[3] as String)];
    if (candidates == null) return null;
    final context = _bindingContext;
    final explicit = context?.dartProviders[type];
    if (explicit != null) return _classes[explicit];
    if (context == null) {
      if (candidates.length == 1) return candidates.single;
      throw StateError('Ambiguous Dart type provider: ${info[0]}');
    }
    final own = candidates.where(
      (t) =>
          _session.registry._bindingOwners[t.id]?.moduleId == context.moduleId,
    );
    if (own.isNotEmpty) return own.single;
    final dependencies = candidates.where(
      (t) => context.dependencies.contains(
        _session.registry._bindingOwners[t.id]?.moduleId,
      ),
    );
    if (dependencies.length == 1) return dependencies.single;
    if (candidates.length == 1) return candidates.single;
    throw StateError('Missing or ambiguous Dart type provider: ${info[0]}');
  }

  String _id(String owner, Type type) {
    final context =
        _bindingContext?.dartProviders.isNotEmpty == true ||
            !_classes.containsKey(owner)
        ? _bindingContext
        : _session._contextForBinding(owner);
    final id = _ids.putIfAbsent((owner, context, type), () {
      final id = '$owner@type:${_session._componentSessionId}:${_serial++}';
      _session._specializedOwners[id] = owner;
      _session._specializedContexts[id] =
          context ?? _session._contextForBinding(owner);
      return id;
    });
    return id;
  }

  static Type typeOf<T>() => T;

  static Never requireArguments([Object? receiver, Object? values]) =>
      throw ArgumentError(
        'Explicit Dart type arguments required; use dartType',
      );

  String key<T>() => _id('shape', T);
  String typeKey(Type type) =>
      '${_typeKeys.putIfAbsent(type, () => _typeKeys.length)}';

  FlaxTypeRef ref<T>({bool withinCallback = false}) =>
      resolve(T, withinCallback: withinCallback);

  FlaxTypeRef _resolveRef(FlaxTypeRef ref) =>
      ref.dartType == null ? ref : resolve(ref.dartType!(), binding: ref.id);

  // One Dart Type can have distinct borrowing and data-conversion contracts.
  FlaxTypeRef define<T>(FlaxTypeRef value, {bool withinCallback = false}) =>
      _refs.putIfAbsent((
        _bindingContext,
        T,
        withinCallback,
        value.callback?.id ?? value.record?.signature,
      ), () => value);

  FlaxTypeRef resolve(
    Type type, {
    bool withinCallback = false,
    String? binding,
  }) {
    final key = (_bindingContext, type, withinCallback, binding);
    final existing = _refs[key];
    if (existing != null) return existing;
    final info = parts(type);
    final nullable = info[1] as bool;
    final name = info[3] as String;
    final children = (info[4] as List).cast<Type>();
    if (info[2] == 'package:flutter/src/widgets/framework.dart' &&
        name == 'Widget') {
      return _refs[key] = FlaxTypeRef('widget', nullable: nullable);
    }
    if (info[2] == 'dart:typed_data' &&
        FlaxBufferType.byDartName.containsKey(name)) {
      return _refs[key] = FlaxTypeRef(name, nullable: nullable);
    }
    if (info[2] == 'dart:core') {
      final scalar = switch (name) {
        'String' => 'String',
        'bool' => 'bool',
        'int' => 'int',
        'double' => 'double',
        'num' => 'num',
        'BigInt' => 'BigInt',
        'Object' || 'dynamic' => 'any',
        'Null' => 'never',
        'void' => 'void',
        'Never' => 'never',
        _ => null,
      };
      if (scalar != null) {
        return _refs[key] = FlaxTypeRef(
          scalar,
          nullable: nullable || name == 'dynamic' || name == 'Null',
        );
      }
      if (name == 'List' || name == 'Set' || name == 'Iterable') {
        final item = resolve(children.single, withinCallback: withinCallback);
        return _refs[key] = instantiate(
          <E>() => _collection<E>(name, type, item, nullable, withinCallback),
          children,
          const [],
        ) as FlaxTypeRef;
      }
      if (name == 'Map') {
        final keyRef = resolve(children[0], withinCallback: withinCallback);
        final item = resolve(children[1], withinCallback: withinCallback);
        return _refs[key] = instantiate(
          <K, V>() => FlaxTypeRef(
            'map',
            nullable: nullable,
            key: keyRef,
            item: item,
            collection: FlaxCollectionBinding(
              _id('map', type),
              () => <K, V>{},
              (value) => value is Map<K, V>,
              restore: (value) => (value as Map<Object?, Object?>).map<K, V>(
                (key, value) => MapEntry(
                  _nativeValue(key, keyRef) as K,
                  _nativeValue(value, item) as V,
                ),
              ),
            ),
          ),
          children,
          const [],
        ) as FlaxTypeRef;
      }
    }
    if (info[2] == 'dart:async' && (name == 'Future' || name == 'FutureOr')) {
      final item = resolve(children.single, withinCallback: withinCallback);
      return _refs[key] = instantiate(
        <E>() => FlaxTypeRef(
          name == 'Future' ? 'future' : 'futureOr',
          nullable: nullable,
          item: item,
          future: FlaxFutureBinding(_id('future', type), (value) {
            if (value is Future<E>) return value;
            final result = value.then<E>((v) => _nativeValue(v, item) as E);
            // A bridge conversion can fail before its Future is delivered.
            result.ignore();
            return result;
          }),
        ),
        children,
        const [],
      ) as FlaxTypeRef;
    }
    if (info[2] == 'dart:async' && name == 'Stream') {
      final template = _template(info, type);
      if (template == null) throw StateError('Missing Dart Stream provider');
      return _refs[key] = _stream(
        type,
        template,
        children.single,
        nullable,
        withinCallback,
      );
    }
    if (name == 'Function' && info[5] == null) {
      return _refs[key] = FlaxTypeRef('function', nullable: nullable);
    }
    if (info[5] != null && (name == 'Record' || name == 'Function')) {
      _index();
      final layout = name == 'Record'
          ? ['record', info[4] is List ? (info[4] as List).length : 0, info[5]]
          : ['callback', info[5]];
      final shape = _shapes[jsonEncode(layout)];
      if (shape == null) {
        if (name == 'Record') {
          final record = _sources[('dart:core', 'Record')]?.single;
          if (record == null) throw StateError('Missing Dart Record provider');
          return _refs[key] = FlaxTypeRef(
            'object',
            id: record.id,
            nullable: nullable,
          );
        }
        return _refs[key] = _nativeFunction(
          type,
          info,
          nullable,
          withinCallback,
        );
      }
      final factory =
          instantiate(shape.factory, children, const []) as Function;
      final result =
          Function.apply(factory, [this, withinCallback]) as FlaxTypeRef;
      return _refs[key] = _nullableRef(result, nullable);
    }
    _index();
    final template = binding == null
        ? _template(info, type)
        : _classes[_session._specializedOwners[binding] ?? binding];
    if (template == null) {
      for (final parent in (info[6] as List? ?? const []).cast<Type>()) {
        if (parent == Object || parent == FlaxDartTypes.typeOf<Object?>()) {
          continue;
        }
        try {
          final view = resolve(parent, withinCallback: withinCallback);
          if (view.kind == 'any') continue;
          return _refs[key] = _nullableRef(view, nullable);
        } on UnsupportedError {
          /* Try another supported parent. */
        }
      }
      return _refs[key] = FlaxTypeRef('any', nullable: nullable);
    }
    if (template.kind == 'stream') {
      final core = _template(parts(Stream<Object?>), Stream<Object?>)!;
      final eventType = arguments(_projection(core.id, type)!).single;
      return _refs[key] = _stream(
        type,
        template,
        eventType,
        nullable,
        withinCallback,
      );
    }
    final id = template.factory == null ? template.id : _id(template.id, type);
    // Reserve the reference before constructing mutually recursive member metadata.
    final result = _refs[key] = FlaxTypeRef(
      template.kind,
      id: id,
      nullable: nullable,
    );
    if (template.factory != null) _pendingClasses[id] = (template, type);
    return result;
  }

  FlaxTypeRef _nativeFunction(
    Type type,
    List<Object?> info,
    bool nullable,
    bool withinCallback,
  ) {
    final shape = info[5] as List;
    final positional = shape[0] as int;
    final fixed = shape[1] as int;
    final names = (shape[2] as List).cast<String>();
    final required = (shape[3] as List).cast<bool>();
    final children = (info[4] as List).cast<Type>();
    final refs = [
      for (final child in children)
        resolve(child, withinCallback: withinCallback),
    ];
    final matches = instantiate(
      <F>() =>
          (Object value) => value is F,
      [type],
      const [],
    ) as bool Function(Object);
    return FlaxTypeRef(
      'callback',
      nullable: nullable,
      callback: FlaxCallbackBinding(
        [
          for (var i = 0; i < refs.length - 1; i++)
            FlaxCallbackParameter(
              i < positional ? 'p$i' : names[i - positional],
              refs[i],
              required: i < positional ? i < fixed : required[i - positional],
              positional: i < positional,
            ),
        ],
        refs.last,
        (_) => throw UnsupportedError(
          'A JS function requires a selected typed callback signature',
        ),
        id: _id('native-function', type),
        invoke: (value, positional, named) => Function.apply(
          value as Function,
          positional,
          {for (final entry in named.entries) Symbol(entry.key): entry.value},
        ),
        matches: matches,
      ),
    );
  }

  FlaxTypeRef _nullableRef(FlaxTypeRef value, bool nullable) =>
      value.nullable == nullable
      ? value
      : FlaxTypeRef(
          value.kind,
          id: value.id,
          nullable: nullable,
          item: value.item,
          key: value.key,
          collection: value.collection,
          iterable: value.iterable,
          future: value.future,
          stream: value.stream,
          callback: value.callback,
          record: value.record,
          objectView: value.objectView,
          deferredFactories: value.deferredFactories,
          dartType: value.dartType,
        );

  FlaxTypeRef _stream(
    Type type,
    FlaxDartClassTemplate template,
    Type event,
    bool nullable,
    bool withinCallback,
  ) {
    final id = template.factory == null ? template.id : _id(template.id, type);
    if (template.factory != null) _pendingClasses[id] = (template, type);
    final item = resolve(event, withinCallback: withinCallback);
    return instantiate(
      <E>() => FlaxTypeRef(
        'stream',
        id: id,
        nullable: nullable,
        item: item,
        stream: FlaxStreamBinding(
          id,
          (value) =>
              value is Stream<E> &&
              (_session._typeBinding(id) as FlaxStreamTypeBinding).matches(
                value,
              ),
          (value) => value is Stream<E>
              ? value
              : (value as Stream<Object?>).map<E>(
                  (v) => _nativeValue(v, item) as E,
                ),
        ),
      ),
      [event],
      const [],
    ) as FlaxTypeRef;
  }

  // Native async values use the same conversions without crossing JS again.
  Object? _nativeValue(Object? value, FlaxTypeRef type) {
    if (type.kind == 'never' && !(value == null && type.nullable)) {
      throw ArgumentError('Never has no values');
    }
    if (value == null) return null;
    if (type.kind == 'void') return value;
    if (type.kind == 'double' && value is num) return value.toDouble();
    if (type.kind == 'int' &&
        value is num &&
        value.isFinite &&
        value == value.truncateToDouble() &&
        value.abs() <= 9007199254740991) {
      return value.toInt();
    }
    if (type.kind == 'future' || type.kind == 'futureOr') {
      if (value is Future<Object?>) return type.future!.adapt(value);
      if (type.kind == 'futureOr') return _nativeValue(value, type.item!);
      return type.future!.adapt(Future<Object?>.value(value));
    }
    if (type.kind == 'stream') {
      return type.stream!.adapt(value as Stream<Object?>);
    }
    if (type.collection case final collection?) {
      if (collection.matches(value)) return value;
      Object restore(Object value) {
        if (collection.restore != null) return collection.restore!(value);
        final result = collection.create();
        if (result is Map) {
          for (final entry in (value as Map).entries) {
            result[_nativeValue(entry.key, type.key!)] = _nativeValue(
              entry.value,
              type.item!,
            );
          }
        } else {
          for (final element in value as Iterable) {
            final item = _nativeValue(element, type.item!);
            if (result is List) {
              result.add(item);
            } else {
              (result as Set).add(item);
            }
          }
        }
        return result;
      }

      final result = flaxRestoreJsCollection(value, type.kind, restore);
      if (type.kind == 'list' && collection.snapshot != null) {
        return collection.snapshot!(result as Iterable<Object?>);
      }
      return result;
    }
    if (type.kind == 'record') {
      final record = type.record!;
      if (record.matches(value)) return value;
      if (value is! Record) {
        return flaxRestoreJsCollection(
          value,
          'record',
          (value) => record.create([
            for (final f in record.fields)
              _nativeValue((value as Map)[f.name], f.type),
          ]),
        );
      }
      return record.create([
        for (final f in record.fields) _nativeValue(f.read(value), f.type),
      ]);
    }
    return value;
  }

  FlaxTypeBinding? materialize(String id) {
    final cached = _session._typeBindings[id];
    if (cached != null) return cached;
    final pending = _pendingClasses[id];
    if (pending == null) return null;
    final (template, type) = pending;
    FlaxTypeBinding create() {
      final factory =
          instantiate(template.factory!, arguments(type), const []) as Function;
      final selected = Function.apply(factory, [this, id]) as FlaxDartClass;
      _deferred[id] = selected.deferredFactories;
      return _session._typeBindings[id] = selected.binding;
    }

    final context = _session._specializedContexts[id];
    return context == null ? create() : context.run(create);
  }

  FlaxTypeRef _collection<E>(
    String name,
    Type type,
    FlaxTypeRef item,
    bool nullable,
    bool withinCallback,
  ) {
    Iterable<E> restore(Object value) => (value as Iterable<Object?>).map<E>(
      (element) => _nativeValue(element, item) as E,
    );
    final iterable = FlaxTypeRef(
      'iterable',
      nullable: name == 'Iterable' && nullable,
      item: item,
      collection: FlaxCollectionBinding(
        _id('iterable', type),
        () => <E>[],
        (v) => v is Iterable<E>,
        restore: restore,
        snapshot: item.kind == 'widget'
            ? (values) =>
                  List<E>.unmodifiable(values.cast<E>()) as List<Widget?>
            : null,
      ),
    );
    if (name == 'Iterable') return iterable;
    return FlaxTypeRef(
      name == 'List' ? 'list' : 'set',
      nullable: nullable,
      item: item,
      iterable: iterable,
      collection: FlaxCollectionBinding(
        _id(name, type),
        name == 'List' ? () => <E>[] : () => <E>{},
        name == 'List' ? (v) => v is List<E> : (v) => v is Set<E>,
        restore: name == 'List'
            ? (v) => restore(v).toList()
            : (v) => restore(v).toSet(),
        snapshot: item.kind == 'widget'
            ? (values) =>
                  List<E>.unmodifiable(values.cast<E>()) as List<Widget?>
            : null,
      ),
    );
  }

  bool hasGenericClass(String id) {
    _index();
    return _classes[id]?.factory != null;
  }

  Type classType(String id, List<Type> arguments) {
    _index();
    final template =
        _classes[id] ?? (throw ArgumentError('Unregistered Dart type: $id'));
    if (arguments.isEmpty) {
      if (template.requiresTypeArguments) requireArguments();
      return template.type;
    }
    final factory = template.typeFactory;
    if (factory == null) {
      throw ArgumentError('Dart type has no type parameters');
    }
    return instantiate(factory, arguments, const []) as Type;
  }

  Type? _projection(String id, Type type) =>
      _projections.putIfAbsent((id, type), () {
        _index();
        final template = _classes[id];
        if (template == null) return null;
        final source = parts(template.type);
        final pending = [type];
        final visited = <Type>{};
        while (pending.isNotEmpty) {
          final current = pending.removeLast();
          if (!visited.add(current)) continue;
          final info = parts(current);
          if (info[2] == source[2] && info[3] == source[3]) return current;
          pending.addAll((info[6] as List? ?? const []).cast<Type>());
        }
        return null;
      });

  FlaxTypeBinding? bindingFor(String id, Object value) {
    _index();
    final template = _classes[id];
    if (template?.factory == null) return null;
    final type = _projection(id, instanceType(value));
    if (type == null) return null;
    final selectedId = _id(id, type);
    _pendingClasses[selectedId] = (template!, type);
    return materialize(selectedId);
  }

  FlaxObjectMemberView? membersFor(String id, Object value) {
    final selected = _objectView(bindingFor(id, value));
    if (selected == null) return null;
    return FlaxObjectMemberView(
      getters: {for (final getter in selected.getters) getter.name: getter},
      setters: {for (final setter in selected.setters) setter.name: setter},
      instanceMethods: selected.instanceMethods,
      collectionView: selected.collectionView,
    );
  }

  FlaxJsObject handle(Type type, {String? binding}) =>
      _handles.putIfAbsent((type, _bindingContext, binding), () {
        _index();
        final id = '${_session._componentSessionId}:${_serial++}';
        final value = _session.helper('dartType').call([
          FlaxJsString(id),
          FlaxJsString(type.toString()),
        ]) as FlaxJsObject;
        _runtime.bindDartPeer(value, type);
        _handleTypes[id] = type;
        final providers = {...?_bindingContext?.dartProviders};
        final owner = _session._specializedOwners[binding] ?? binding;
        if (owner != null && _classes.containsKey(owner)) {
          final projection = _projection(owner, type);
          if (projection != null) providers[projection] = owner;
        }
        _handleProviders[id] = providers;
        return value;
      });

  Type description(Object? input, {Map<Type, String>? providers}) {
    if (input is! List ||
        input.length != 4 ||
        input[0] is! String ||
        input[2] is! List ||
        input[3] is! bool) {
      throw ArgumentError('Invalid Dart type description');
    }
    final arguments = [
      for (final child in input[2] as List)
        description(child, providers: providers),
    ];
    final id = input[1];
    if (input[0] != 'class' && input[0] != 'native' && id != null) {
      throw ArgumentError('Unexpected Dart type identity');
    }
    if (const {
          'String',
          'bool',
          'int',
          'double',
          'num',
          'any',
          'BigInt',
          'void',
          'Never',
          'Null',
        }.contains(input[0]) &&
        arguments.isNotEmpty) {
      throw ArgumentError('Scalar Dart types have no type arguments');
    }
    final Type type;
    switch (input[0]) {
      case 'native':
        if (id is! String ||
            arguments.isNotEmpty ||
            !_handleTypes.containsKey(id)) {
          throw ArgumentError('Foreign Dart type handle');
        }
        type = _handleTypes[id]!;
        for (final entry in _handleProviders[id]!.entries) {
          _prefer(providers, entry.key, entry.value);
        }
      case 'class':
        if (id is! String) throw ArgumentError('Invalid Dart class identity');
        type = classType(id, arguments);
        _prefer(providers, type, id);
      case 'String':
        type = String;
      case 'bool':
        type = bool;
      case 'int':
        type = int;
      case 'double':
        type = double;
      case 'num':
        type = num;
      case 'any':
        type = Object;
      case 'BigInt':
        type = BigInt;
      case 'void':
        type = typeOf<void>();
      case 'Never':
        type = Never;
      case 'Null':
        type = Null;
      case 'list':
        type = instantiate(<E>() => List<E>, arguments, const []) as Type;
      case 'set':
        type = instantiate(<E>() => Set<E>, arguments, const []) as Type;
      case 'iterable':
        type = instantiate(<E>() => Iterable<E>, arguments, const []) as Type;
      case 'map':
        type = instantiate(<K, V>() => Map<K, V>, arguments, const []) as Type;
      case 'future':
        type = instantiate(<E>() => Future<E>, arguments, const []) as Type;
      case 'futureOr':
        type = instantiate(<E>() => FutureOr<E>, arguments, const []) as Type;
      case 'stream':
        type = instantiate(<E>() => Stream<E>, arguments, const []) as Type;
      default:
        throw ArgumentError('Unsupported Dart type constructor');
    }
    final result = input[3] as bool ? _runtime.nullableDartType(type) : type;
    final provider = providers?[type];
    if (provider != null && result != type) {
      _prefer(providers, result, provider);
    }
    return result;
  }

  void _prefer(Map<Type, String>? providers, Type type, String id) {
    if (providers == null) return;
    final previous = providers[type];
    if (previous != null && previous != id) {
      throw ArgumentError(
        'Conflicting binding providers for the same Dart type',
      );
    }
    providers[type] = id;
  }

  T selection<T>(Map<Type, String> providers, T Function() action) {
    if (providers.isEmpty) return action();
    final base = _bindingContext!;
    final selected = {...base.dartProviders};
    for (final entry in providers.entries) {
      _prefer(selected, entry.key, entry.value);
    }
    final entries = selected.entries.toList()
      ..sort((a, b) => typeKey(a.key).compareTo(typeKey(b.key)));
    final key =
        '${base.moduleId}:${entries.map((e) => '${typeKey(e.key)}:${e.value}').join('|')}';
    final context = _selectionContexts.putIfAbsent(
      key,
      () => _BindingContext(
        base.moduleId,
        base.dependencies,
        dartProviders: Map.unmodifiable(selected),
      ),
    );
    return context.run(action);
  }

  String get _providerKey =>
      '${_bindingContext?.moduleId}:${_bindingContext?.dartProviders.entries.map((e) => '${typeKey(e.key)}:${e.value}').join('|')}';

  String selectFunction(String id, List<Type> types) => _calls.putIfAbsent(
    'function:$id:${types.map(typeKey).join(',')}:$_providerKey',
    () {
      final base =
          _session._functionBindings[id] ??
          (throw ArgumentError('Unknown generic function'));
      final selected = function(base, types);
      final target = '$id@call:${_session._componentSessionId}:${_serial++}';
      _session._specializedOwners[target] = id;
      _session._specializedContexts[target] =
          _bindingContext ?? _session._contextForBinding(id);
      _session._functionBindings[target] = FlaxFunctionBinding(
        target,
        selected.parameters,
        selected.result,
        selected.invoke,
        route: selected.route,
      );
      return target;
    },
  );

  String selectMethod(
    String id,
    String name,
    List<Type> types,
    Object? receiver,
  ) {
    final binding = receiver == null
        ? _session._typeBinding(id)
        : bindingFor(_session._specializedOwners[id] ?? id, receiver) ??
              _session._typeBinding(id);
    final methods = switch (binding) {
      FlaxObjectBinding() => binding.instanceMethods,
      FlaxWidgetBinding() => binding.objectView?.instanceMethods,
      FlaxStateBinding() => binding.instanceMethods,
      FlaxStreamTypeBinding() => binding.instanceMethods,
      _ => null,
    };
    final base =
        methods?[name] ?? (throw ArgumentError('Unknown generic method'));
    final key =
        'method:$id:${binding!.id}:$name:${types.map(typeKey).join(',')}:$_providerKey';
    return _calls.putIfAbsent(key, () {
      final selected = method(base, types);
      final target = '@call:$name:${_serial++}';
      _session._genericMethods[(id, target)] = selected;
      _session._specializedContexts[target] = _bindingContext;
      return target;
    });
  }

  String selectClass(String id, List<Type> types) {
    final type = classType(id, types);
    _index();
    final template = _classes[id]!;
    if (template.factory == null) return id;
    final target = _id(id, type);
    _pendingClasses[target] = (template, type);
    materialize(target);
    return target;
  }

  FlaxFunctionBinding function(FlaxFunctionBinding base, List<Type> types) {
    final factory = base.genericFactory;
    if (factory == null) throw ArgumentError('Not a generic Dart callable');
    final adapter = instantiate(factory, types, const []) as Function;
    return Function.apply(adapter, [this]) as FlaxFunctionBinding;
  }

  FlaxInstanceMethod method(FlaxInstanceMethod base, List<Type> types) {
    if (types.isEmpty) return base;
    final factory = base.genericFactory;
    if (factory == null) throw ArgumentError('Not a generic Dart method');
    final adapter = instantiate(factory, [
      ...base.ownerTypes,
      ...types,
    ], const []) as Function;
    return Function.apply(adapter, [this]) as FlaxInstanceMethod;
  }

  void close() {
    _instanceTypes = Expando<Type>();
    for (final handle in _handles.values) {
      if (!handle.isReleased) handle.release();
    }
    _handles.clear();
    _handleTypes.clear();
    _handleProviders.clear();
    _selectionContexts.clear();
    _calls.clear();
    _pendingClasses.clear();
    _deferred.clear();
    _records.clear();
    _parts.clear();
    _refs.clear();
    _classes.clear();
    _sources.clear();
    _shapes.clear();
    _ids.clear();
    _typeKeys.clear();
    _projections.clear();
  }
}

extension _DartTypeOperations on _Session {
  void registerDartTypes() {
    _registerBindingHostFunction(
      '__flaxDartType',
      (_, args) => bindingCall(() {
        requireOpen();
        if (args.length < 3 ||
            args[0] is! FlaxJsNumber ||
            (args[0] as FlaxJsNumber).value != flaxBindingVersion ||
            args[1] is! FlaxJsString) {
          throw ArgumentError('Invalid Dart type request');
        }
        final operation = (args[1] as FlaxJsString).value;
        if (operation == 'of') {
          if (args.length != 3 || args[2] is! FlaxJsObject) {
            throw ArgumentError('Expected a Dart reference');
          }
          final handle = helper('nativeRecordType').call([args[2]]);
          if (handle is FlaxJsObject) return holdHostResult(handle);
          final (value, source) = _dartReferenceValue(args[2]);
          return holdHostResult(
            dartTypes
                .handle(
                  dartTypes.instanceType(value),
                  binding: source?.binding.id,
                )
                .retain(),
          );
        }
        if (args[2] is! FlaxJsString) {
          throw ArgumentError('Invalid Dart type target');
        }
        final id = (args[2] as FlaxJsString).value;
        if (operation == 'resolve') {
          if (args.length != 3) {
            throw ArgumentError('Invalid Dart type description');
          }
          return holdHostResult(
            dartTypes.handle(dartTypes.description(jsonDecode(id))).retain(),
          );
        }
        if (args.length < 4 || args[3] is! FlaxJsString) {
          throw ArgumentError('Invalid Dart type arguments');
        }
        final input = jsonDecode((args[3] as FlaxJsString).value);
        if (input is! List) throw ArgumentError('Expected Dart type arguments');
        final providers = <Type, String>{};
        final types = [
          for (final item in input)
            dartTypes.description(item, providers: providers),
        ];
        if (operation == 'callback') {
          if (args.length != 5 || args[4] is! FlaxJsNumber) {
            throw ArgumentError('Invalid Dart callback selection');
          }
          final referenceId = (args[4] as FlaxJsNumber).value;
          if (!referenceId.isFinite ||
              referenceId < 0 ||
              referenceId != referenceId.truncateToDouble()) {
            throw ArgumentError('Invalid Dart callback reference');
          }
          final reference = _objects[referenceId.toInt()];
          if (reference is! _FunctionReference ||
              reference.signature.id != id) {
            throw StateError('Foreign or released Dart function');
          }
          final factory = reference.signature.genericFactory;
          if (factory == null) {
            throw ArgumentError('Not a generic Dart callback');
          }
          final function = reference.value as Function;
          final source = _callbackSources[function];
          if (source != null && !source.active) {
            throw StateError('Retired JS callback');
          }
          FlaxJsValue select() => dartTypes.selection(providers, () {
            final signature = dartTypes.instantiate(factory, types, [
              dartTypes,
            ]) as FlaxCallbackBinding;
            final selected = runtime.instantiateDartClosure(function, types);
            return holdHostResult(functionResult(selected, signature));
          });
          return reference.context == null
              ? select()
              : reference.context!.run(select);
        }
        return _inBindingContext(id, () {
          return dartTypes.selection(providers, () {
            if (operation == 'class' && args.length == 4) {
              return FlaxJsString(dartTypes.selectClass(id, types));
            }
            if (operation == 'function' && args.length == 4) {
              return FlaxJsString(dartTypes.selectFunction(id, types));
            }
            if (operation == 'method' &&
                args.length == 6 &&
                args[4] is FlaxJsString) {
              final name = (args[4] as FlaxJsString).value;
              final receiver = args[5] is FlaxJsNull
                  ? null
                  : _dartReferenceValue(args[5]).$1;
              return FlaxJsString(
                dartTypes.selectMethod(id, name, types, receiver),
              );
            }
            throw ArgumentError('Unknown Dart type operation');
          });
        });
      }),
    );
  }
}
