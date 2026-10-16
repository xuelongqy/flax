part of '../../bindings.dart';

/// Active UI protocol for Core-owned code and registry comparison.
const flaxBindingVersion = 24;

/// Additive features supported without changing the UI protocol.
const _supportedCapabilities = <String>{
  'native-functions',
  'lazy-js-iterables',
  'callback-map-keys',
  'proxy-super-constructors',
  'bottom-types',
  'generic-member-views',
  'dart-type-tokens',
  'generic-call-types',
  'engine-type-handles',
  'explicit-generic-types',
  'instance-checks',
  'native-core-inputs',
  'native-bigint',
  'native-widget-proxies',
  'native-navigation-objects',
  'widget-interface-proxies',
  'shared-uint8',
  'shared-buffers',
};

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
    this.objectView,
    this.deferredFactories = const {},
    this.dartType,
  });
  final String kind;
  final Type Function()? dartType;
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
  final FlaxObjectViewBinding? objectView;
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

/// Field conversion metadata; native Record access is shared across all layouts.
class FlaxRecordFieldBinding {
  const FlaxRecordFieldBinding(this.name, this.type);
  final String name;
  final FlaxTypeRef type;
}

/// A concrete Record signature. No business value is retained by this metadata.
class FlaxRecordBinding {
  const FlaxRecordBinding(
    this.fields,
    this.dartType, {
    required this.signature,
  });

  /// Positional fields first, then named fields in VM name order.
  final List<FlaxRecordFieldBinding> fields;
  final Type Function() dartType;
  final String signature;
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
  const FlaxCollectionBinding(
    this.id,
    this.create,
    this.matches, {
    this.snapshot,
    this.restore,
  });
  final String id;
  final Object Function() create;
  final bool Function(Object) matches;
  // Runtime Type factories restore erased JS copies with the actual element types.
  final Object Function(Object)? restore;
  // Widget snapshots preserve the declared subtype inside other typed containers.
  final List<Widget?> Function(Iterable<Object?>)? snapshot;
}

/// Generated adapters supply a real Dart function signature without reflection.
abstract interface class FlaxCallback {
  Object? call(
    List<Object?> positionalArguments,
    Map<String, Object?> namedArguments, {
    FlaxCallbackBinding? signature,
  });
  FlaxCallbackBinding genericSignature(
    int member,
    List<Type> types,
    FlaxCallbackBinding Function(FlaxDartTypes) create,
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
    this.requiresTypeArguments = false,
    this.genericFactory,
  });
  final String id;
  final bool requiresTypeArguments;
  final Function? genericFactory;
  final Object? Function(Object, List<Object?>, Map<String, Object?>) invoke;
  final bool Function(Object) matches;
  // Retained for generated module compatibility. Shared result conversion owns
  // returned configurations without adding a separate result host.
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
    this.nativeInput,
    this.staticGetters = const {},
    super.methods,
    this.setters = const [],
    this.listenerPairs = const {},
    this.supertypes = const [],
    this.proxy,
    this.memberView,
    this.memberViewOperations = const {},
    this.collectionView,
    this.aliasOf,
  });
  final Map<String, List<FlaxParameter>> constructors;
  final Object Function(String, Map<String, Object?>) create;
  final List<FlaxGetter> getters;
  final List<FlaxSetter> setters;
  final Map<String, FlaxInstanceMethod> instanceMethods;
  final String? disposeMethod;
  final bool Function(Object)? matches;

  /// Native JS input for an exact Dart SDK declaration, never for its subtypes.
  final String? nativeInput;
  final Map<String, FlaxStaticGetter> staticGetters;
  final Map<String, String> listenerPairs;
  final List<String> supertypes;
  final FlaxProxyBinding? proxy;

  /// Select once on the first affected operation; shared members bypass this.
  final FlaxObjectMemberView? Function(Object)? memberView;
  final Set<String> memberViewOperations;

  /// The collection interface of a bound subclass; selected native members win.
  final FlaxTypeRef? collectionView;

  /// Explicit closed type entry; excluded from automatic subtype discovery.
  final String? aliasOf;
}

/// Only the members whose conversion changes for a closed generic Dart owner.
class FlaxObjectMemberView {
  const FlaxObjectMemberView({
    this.getters = const {},
    this.setters = const {},
    this.instanceMethods = const {},
    this.collectionView,
  });
  final Map<String, FlaxGetter> getters;
  final Map<String, FlaxSetter> setters;
  final Map<String, FlaxInstanceMethod> instanceMethods;
  final FlaxTypeRef? collectionView;
}

/// Conversion for one declared generic signature, sharing the owner's JS class.
class FlaxObjectViewBinding {
  const FlaxObjectViewBinding(this.id, this.matches, this.members);
  final String id;
  final bool Function(Object) matches;
  // Lazy metadata allows self-referential member signatures.
  final FlaxObjectMemberView Function() members;
}

/// One selected Dart member; metadata is shared by every proxy of this type.
class FlaxProxyMember {
  const FlaxProxyMember(
    this.name,
    this.kind,
    this.signature, {
    this.hasSuper = false,
    this.hasCallContext = false,
  });
  final String name;

  /// 0: method, 1: getter, 2: setter.
  final int kind;
  final FlaxCallbackBinding signature;
  final bool hasSuper;
  final bool hasCallContext;
}

class FlaxProxyBinding {
  const FlaxProxyBinding(this.members);
  final List<FlaxProxyMember> members;
}

/// Generated subclasses retain one peer, without per-member callback fields.
abstract interface class FlaxProxyPeer {
  /// False once the JS implementation has been retired.
  bool get active;
  FlaxCallbackBinding genericSignature(
    int member,
    List<Type> types,
    FlaxCallbackBinding Function(FlaxDartTypes) create,
  );
  (bool handled, Object? value) call(
    int member,
    List<Object?> positional,
    Map<String, Object?> named, {
    FlaxCallbackBinding? signature,
    Function? superCall,
  });
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
    this.genericFactory,
    this.requiresTypeArguments = false,
  });
  final Function? genericFactory;
  final bool requiresTypeArguments;
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
    this.genericFactory,
    this.ownerTypes = const [],
    this.requiresTypeArguments = false,
  });
  final Function? genericFactory;
  final bool requiresTypeArguments;
  final List<Type> ownerTypes;
  final List<FlaxParameter> parameters;
  final FlaxTypeRef result;
  final Object? Function(Object, Map<String, Object?>) invoke;
  final bool startsRoute;
}

class FlaxStateBinding extends FlaxTypeBinding {
  const FlaxStateBinding(
    super.id,
    this.getters,
    this.instanceMethods, {
    this.matches,
  });
  final List<FlaxGetter> getters;
  final Map<String, FlaxInstanceMethod> instanceMethods;
  final bool Function(Object)? matches;
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
  const FlaxContextBinding(super.id, this.getters, {this.matches});
  final List<FlaxGetter> getters;
  final bool Function(Object)? matches;
}

class FlaxStaticGetter {
  const FlaxStaticGetter(this.type, this.read);
  final FlaxTypeRef type;
  final Object? Function() read;
}

class FlaxEnumBinding extends FlaxTypeBinding {
  const FlaxEnumBinding(super.id, this.values, {this.supertypes = const []});
  final Map<String, Object> values;
  final List<String> supertypes;
}

class FlaxWidgetBinding extends FlaxTypeBinding {
  const FlaxWidgetBinding(
    super.id,
    this.constructors,
    this.createHost, {
    super.methods,
    this.matches,
    this.objectView,
  });
  final Map<String, List<FlaxParameter>> constructors;
  final FlaxWidgetHost Function(FlaxNode) createHost;
  final FlaxObjectBinding? objectView;
  final bool Function(Object)? matches;
}

/// A selected native Widget contract, independent of its generated implementations.
class FlaxWidgetInterfaceBinding extends FlaxTypeBinding {
  const FlaxWidgetInterfaceBinding(super.id, this.matches);
  final bool Function(Object) matches;
}

/// A pre-generated real Flutter State composition selected by a JS State.
class FlaxStateVariantBinding {
  const FlaxStateVariantBinding(
    this.id,
    this.create, {
    required this.stateType,
    this.interfaces = const [],
    this.getters = const [],
    this.setters = const [],
    this.methods = const {},
  });

  final String id;
  final FlaxComponentStateBase Function(Object seed) create;
  final String stateType;
  final List<String> interfaces;
  final List<FlaxGetter> getters;
  final List<FlaxSetter> setters;
  final Map<String, FlaxInstanceMethod> methods;
}

class FlaxBindingModule {
  const FlaxBindingModule(
    this.name,
    this.types, {
    required this.moduleId,
    required this.uiProtocol,
    required this.requiredCapabilities,
    this.functions = const [],
    this.stateVariants = const [],
    this.dependencyModules = const [],
    this.dartTypes = const [],
    this.dartShapes = const [],
  });
  final String name;
  final List<FlaxTypeBinding> types;
  final String moduleId;
  final int uiProtocol;
  final List<String> requiredCapabilities;
  final List<FlaxFunctionBinding> functions;
  final List<FlaxStateVariantBinding> stateVariants;
  final List<String> dependencyModules;
  final List<FlaxDartClassTemplate> dartTypes;
  final List<FlaxDartShapeTemplate> dartShapes;
}

/// Register generated modules explicitly. A registry never chooses an engine.
class FlaxBindingRegistry {
  FlaxBindingRegistry(List<FlaxBindingModule> modules)
    : modules = List.unmodifiable(modules) {
    final moduleIds = <String>{};
    final types = <String, FlaxTypeBinding>{};
    final functions = <String, FlaxFunctionBinding>{};
    final stateVariants = <String, FlaxStateVariantBinding>{};
    final componentStateTypes = <String>{};
    for (final module in [componentsBindings, ...this.modules]) {
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
      for (final type in module.types) {
        if (types.containsKey(type.id)) {
          throw ArgumentError('Duplicate binding: ${type.id}');
        }
        types[type.id] = type;
        _bindingOwners[type.id] = module;
      }
      for (final function in module.functions) {
        if (functions.containsKey(function.id)) {
          throw ArgumentError('Duplicate function binding: ${function.id}');
        }
        functions[function.id] = function;
        _bindingOwners[function.id] = module;
      }
      for (final variant in module.stateVariants) {
        if (stateVariants.containsKey(variant.id)) {
          throw ArgumentError('Duplicate State variant: ${variant.id}');
        }
        stateVariants[variant.id] = variant;
        componentStateTypes.add(variant.stateType);
      }
    }
    _types.addAll(types);
    _functions.addAll(functions);
    _stateVariants.addAll(stateVariants);
    _componentStateTypes.addAll(componentStateTypes);
  }
  final List<FlaxBindingModule> modules;
  final _bindingOwners = <String, FlaxBindingModule>{};
  final _types = <String, FlaxTypeBinding>{};
  late final _contextType = _types.values
      .whereType<FlaxContextBinding>()
      .singleWhere(
        (type) =>
            _bindingOwners[type.id]!.moduleId.split('/').first == 'flax.core',
      );
  final _functions = <String, FlaxFunctionBinding>{};
  final _stateVariants = <String, FlaxStateVariantBinding>{};
  final _componentStateTypes = <String>{};

  @override
  bool operator ==(Object other) =>
      other is FlaxBindingRegistry && listEquals(modules, other.modules);
  @override
  int get hashCode => Object.hashAll(modules);
}
