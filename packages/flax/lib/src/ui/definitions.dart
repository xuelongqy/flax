part of '../../bindings.dart';

/// Active UI protocol for Core-owned code and registry comparison.
const flaxBindingVersion = 20;

/// Protocol-20 baseline has no additive capability identifiers.
const _supportedCapabilities = <String>{};

class FlaxTypeRef {
  const FlaxTypeRef(
    this.kind, {
    this.id,
    this.nullable = false,
    this.item,
    this.key,
    this.collection,
    this.iterable,
    this.future,
    this.stream,
    this.callback,
    this.record,
    this.deferredFactories = const {},
  });
  final String kind;
  final String? id;
  final bool nullable;
  final FlaxTypeRef? item;
  final FlaxTypeRef? key;
  final FlaxCollectionBinding? collection;
  final FlaxTypeRef? iterable;
  final FlaxFutureBinding? future;
  final FlaxStreamBinding? stream;
  final FlaxCallbackBinding? callback;
  final FlaxRecordBinding? record;
  final Map<String, FlaxDeferredFactoryBinding> deferredFactories;
  bool get containsWidget =>
      kind == 'widget' ||
      (item?.containsWidget ?? false) ||
      (key?.containsWidget ?? false) ||
      (record?.fields.any((field) => field.type.containsWidget) ?? false);
  bool get containsCallback =>
      kind == 'callback' ||
      (item?.containsCallback ?? false) ||
      (key?.containsCallback ?? false) ||
      (record?.fields.any((field) => field.type.containsCallback) ?? false);
}

/// Generated structural access for one Dart Record field.
class FlaxRecordFieldBinding {
  const FlaxRecordFieldBinding(this.name, this.type, this.read);
  final String name;
  final FlaxTypeRef type;
  final Object? Function(Object) read;
}

/// Generated reconstruction for one concrete Dart Record shape.
class FlaxRecordBinding {
  const FlaxRecordBinding(this.fields, this.create);
  final List<FlaxRecordFieldBinding> fields;
  final Object Function(List<Object?>) create;
}

/// Generated type adaptation for a JavaScript Promise entering Dart.
class FlaxFutureBinding {
  const FlaxFutureBinding(this.id, this.adapt);
  final String id;
  final Future<Object?> Function(Future<Object?>) adapt;
}

/// Generated type checks and casts for one concrete Dart Stream view.
class FlaxStreamBinding {
  const FlaxStreamBinding(this.id, this.matches, this.adapt);
  final String id;
  final bool Function(Object) matches;
  final Stream<Object?> Function(Object) adapt;
}

/// A generated concrete invocation for a generic factory delayed by JavaScript.
class FlaxDeferredFactoryBinding {
  const FlaxDeferredFactoryBinding(this.id, this.parameters, this.create);
  final String id;
  final List<FlaxParameter> parameters;
  final Object Function(Map<String, Object?>) create;
}

/// Generated typed allocation and runtime checks for Dart collections.
class FlaxCollectionBinding {
  const FlaxCollectionBinding(this.id, this.create, this.matches);
  final String id;
  final Object Function() create;
  final bool Function(Object) matches;
}

/// Generated adapters supply a real Dart function signature without reflection.
abstract interface class FlaxCallback {
  Object? call(
    List<Object?> positionalArguments,
    Map<String, Object?> namedArguments,
  );
}

class FlaxCallbackParameter {
  const FlaxCallbackParameter(
    this.name,
    this.type, {
    required this.required,
    required this.positional,
    FlaxTypeRef? encode,
    this.scoped = false,
  }) : encode = encode ?? type;
  final String name;
  final FlaxTypeRef type;
  final FlaxTypeRef encode;
  final bool required;
  final bool positional;
  final bool scoped;
}

class FlaxCallbackBinding {
  const FlaxCallbackBinding(
    this.parameters,
    this.result,
    this.wrap, {
    required this.id,
    required this.invoke,
    required this.matches,
    this.independentWidgetResult = false,
  });
  final String id;
  final Object? Function(Object, List<Object?>, Map<String, Object?>) invoke;
  final bool Function(Object) matches;
  final bool independentWidgetResult;
  final List<FlaxCallbackParameter> parameters;
  final FlaxTypeRef result;
  final Object Function(FlaxCallback) wrap;
}

class FlaxGetter {
  const FlaxGetter(this.name, this.type, this.read, {FlaxTypeRef? encode})
    : encode = encode ?? type;
  final String name;
  final FlaxTypeRef type;
  final FlaxTypeRef encode;
  final Object? Function(Object) read;
}

class FlaxSetter {
  const FlaxSetter(this.name, this.type, this.write);
  final String name;
  final FlaxTypeRef type;
  final void Function(Object, Object?) write;
}

/// Real Dart objects. Disposal remains an application responsibility.
class FlaxObjectBinding extends FlaxTypeBinding {
  const FlaxObjectBinding(
    super.id,
    this.getters,
    this.instanceMethods, {
    required this.constructors,
    required this.create,
    this.disposeMethod,
    this.matches,
    this.staticGetters = const {},
    super.methods,
    this.setters = const [],
    this.listenerPairs = const {},
    this.supertypes = const [],
  });
  final Map<String, List<FlaxParameter>> constructors;
  final Object Function(String, Map<String, Object?>) create;
  final List<FlaxGetter> getters;
  final List<FlaxSetter> setters;
  final Map<String, FlaxInstanceMethod> instanceMethods;
  final String? disposeMethod;
  final bool Function(Object)? matches;
  final Map<String, FlaxStaticGetter> staticGetters;
  final Map<String, String> listenerPairs;
  final List<String> supertypes;
}

/// Generated direct calls for the Dart Stream class at its erased runtime type.
class FlaxStreamTypeBinding extends FlaxTypeBinding {
  const FlaxStreamTypeBinding(
    super.id,
    this.getters,
    this.instanceMethods, {
    required this.view,
    required this.constructors,
    required this.create,
    required this.matches,
    super.methods,
  });

  final FlaxTypeRef view;
  final Map<String, List<FlaxParameter>> constructors;
  final Object Function(String, Map<String, Object?>) create;
  final List<FlaxGetter> getters;
  final Map<String, FlaxInstanceMethod> instanceMethods;
  final bool Function(Object) matches;
}

class FlaxStaticMethod {
  const FlaxStaticMethod(this.parameters, this.result, this.invoke);
  final List<FlaxParameter> parameters;
  final FlaxTypeRef result;
  final Object? Function(Map<String, Object?>) invoke;
}

/// A selected public top-level Dart function, called through one shared entry.
class FlaxFunctionBinding extends FlaxStaticMethod {
  const FlaxFunctionBinding(
    this.id,
    super.parameters,
    super.result,
    super.invoke, {
    this.route,
  });
  final String id;
  final FlaxRouteCallBinding? route;
}

/// Explicit parameter roles for functions that synchronously push a Route.
class FlaxRouteCallBinding {
  const FlaxRouteCallBinding(this.context, this.rootNavigator, this.builders);
  final String context;
  final String rootNavigator;
  final List<String> builders;
}

class FlaxInstanceMethod {
  const FlaxInstanceMethod(
    this.parameters,
    this.result,
    this.invoke, {
    this.startsRoute = false,
  });
  final List<FlaxParameter> parameters;
  final FlaxTypeRef result;
  final Object? Function(Object, Map<String, Object?>) invoke;
  final bool startsRoute;
}

class FlaxStateBinding extends FlaxTypeBinding {
  const FlaxStateBinding(super.id, this.getters, this.instanceMethods);
  final List<FlaxGetter> getters;
  final Map<String, FlaxInstanceMethod> instanceMethods;
}

class FlaxRouteBinding extends FlaxTypeBinding {
  const FlaxRouteBinding(
    super.id,
    this.constructors,
    this.create,
    this.supertypes,
  );
  final Map<String, List<FlaxParameter>> constructors;
  final Route<Object?> Function(String, Map<String, Object?>, FlaxRouteLease)
  create;
  final List<String> supertypes;
}

/// A generated Page configuration keeps callbacks alive until its Route retires.
class FlaxPageBinding extends FlaxTypeBinding {
  const FlaxPageBinding(
    super.id,
    this.constructors,
    this.create,
    this.supertypes,
  );
  final Map<String, List<FlaxParameter>> constructors;
  final Page<Object?> Function(String, Map<String, Object?>, FlaxPageLease)
  create;
  final List<String> supertypes;
}

class FlaxParameter {
  const FlaxParameter(
    this.name,
    this.type, {
    required this.required,
    this.defaultValue,
    this.omitWhenAbsent = false,
  });
  final String name;
  final FlaxTypeRef type;
  final bool required;
  final Object? defaultValue;
  final bool omitWhenAbsent;
}

sealed class FlaxTypeBinding {
  const FlaxTypeBinding(this.id, {this.methods = const {}});
  final String id;
  final Map<String, FlaxStaticMethod> methods;
}

class FlaxMemberBinding extends FlaxTypeBinding {
  const FlaxMemberBinding(super.id, Map<String, FlaxStaticMethod> methods)
    : super(methods: methods);
}

class FlaxContextBinding extends FlaxTypeBinding {
  const FlaxContextBinding(super.id, this.getters);
  final List<FlaxGetter> getters;
}

class FlaxStaticGetter {
  const FlaxStaticGetter(this.type, this.read);
  final FlaxTypeRef type;
  final Object? Function() read;
}

class FlaxEnumBinding extends FlaxTypeBinding {
  const FlaxEnumBinding(super.id, this.values);
  final Map<String, Object> values;
}

class FlaxWidgetBinding extends FlaxTypeBinding {
  const FlaxWidgetBinding(
    super.id,
    this.constructors,
    this.createHost, {
    super.methods,
    this.fixedArguments = false,
  });
  final Map<String, List<FlaxParameter>> constructors;
  final FlaxWidgetHost Function(FlaxNode) createHost;
  final bool fixedArguments;
}

/// A selected native Widget contract, independent of its generated implementations.
class FlaxWidgetInterfaceBinding extends FlaxTypeBinding {
  const FlaxWidgetInterfaceBinding(super.id, this.matches);
  final bool Function(Object) matches;
}

class FlaxBindingModule {
  const FlaxBindingModule(
    this.name,
    this.types, {
    required this.moduleId,
    required this.uiProtocol,
    required this.requiredCapabilities,
    this.functions = const [],
  });
  final String name;
  final List<FlaxTypeBinding> types;
  final String moduleId;
  final int uiProtocol;
  final List<String> requiredCapabilities;
  final List<FlaxFunctionBinding> functions;
}

/// Register generated modules explicitly. A registry never chooses an engine.
class FlaxBindingRegistry {
  FlaxBindingRegistry(List<FlaxBindingModule> modules)
    : modules = List.unmodifiable(modules) {
    final names = <String>{};
    final moduleIds = <String>{};
    final types = <String, FlaxTypeBinding>{};
    final functions = <String, FlaxFunctionBinding>{};
    for (final module in this.modules) {
      if (module.uiProtocol != flaxBindingVersion) {
        throw ArgumentError('Incompatible binding module ${module.name}');
      }
      for (final capability in module.requiredCapabilities) {
        if (!_supportedCapabilities.contains(capability)) {
          throw ArgumentError(
            'Unsupported binding capability $capability in ${module.name}',
          );
        }
      }
      if (!moduleIds.add(module.moduleId)) {
        throw ArgumentError('Duplicate binding module id ${module.moduleId}');
      }
      if (!names.add(module.name)) {
        throw ArgumentError('Duplicate binding module ${module.name}');
      }
      for (final type in module.types) {
        if (types.containsKey(type.id)) {
          throw ArgumentError('Duplicate binding: ${type.id}');
        }
        types[type.id] = type;
      }
      for (final function in module.functions) {
        if (functions.containsKey(function.id)) {
          throw ArgumentError('Duplicate function binding: ${function.id}');
        }
        functions[function.id] = function;
      }
    }
    _types.addAll(types);
    _functions.addAll(functions);
  }
  final List<FlaxBindingModule> modules;
  final _types = <String, FlaxTypeBinding>{};
  final _functions = <String, FlaxFunctionBinding>{};

  @override
  bool operator ==(Object other) =>
      other is FlaxBindingRegistry && listEquals(modules, other.modules);
  @override
  int get hashCode => Object.hashAll(modules);
}
