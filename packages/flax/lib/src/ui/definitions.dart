part of '../../bindings.dart';

/// Active UI protocol for Core-owned code and registry comparison.
const flaxBindingVersion = 24;

/// Additive features supported without changing the UI protocol.
const _supportedCapabilities = <String>{
  'call-layouts',
  'native-functions',
  'native-async-objects',
  'lazy-js-iterables',
  'callback-map-keys',
  'proxy-super-constructors',
  'bottom-types',
  'generic-member-views',
  'inherited-binding-members',
  'shared-static-readers',
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
  'context-instance-methods',
  'proxy-native-members',
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

class FlaxCallbackParameter extends FlaxParameter {
  const factory FlaxCallbackParameter.plain(
    String name,
    FlaxTypeRef type, {
    bool required,
    bool positional,
  }) = _FlaxPlainCallbackParameter;

  const FlaxCallbackParameter(
    super.name,
    super.type, {
    required super.required,
    required this.positional,
    FlaxTypeRef? encode,
    this.scoped = false,
  }) : encode = encode ?? type;
  final FlaxTypeRef encode;
  final bool positional;
  final bool scoped;
}

class _FlaxPlainCallbackParameter implements FlaxCallbackParameter {
  const _FlaxPlainCallbackParameter(
    this.name,
    this.type, {
    this.required = true,
    this.positional = true,
  });
  @override
  final String name;
  @override
  final FlaxTypeRef type;
  @override
  final bool required;
  @override
  final bool positional;
  @override
  FlaxTypeRef get encode => type;
  @override
  bool get scoped => false;
  @override
  Object? get defaultValue => null;
  @override
  bool get omitWhenAbsent => false;
}

class FlaxCallbackBinding {
  const factory FlaxCallbackBinding.signature(
    List<FlaxCallbackParameter> parameters,
    FlaxTypeRef result, {
    required String id,
  }) = _FlaxProxySignature;

  static Never _signatureWrap(FlaxCallback callback) =>
      throw StateError('Proxy signature used as a function wrapper');
  static Never _signatureInvoke(
    Object value,
    List<Object?> positional,
    Map<String, Object?> named,
  ) => throw StateError('Proxy signature used as a function invocation');
  static Never _signatureMatches(Object value) =>
      throw StateError('Proxy signature used as a function type check');
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

// A proxy signature has no function adapter or generic factory to store.
class _FlaxProxySignature implements FlaxCallbackBinding {
  const _FlaxProxySignature(this.parameters, this.result, {required this.id});
  @override
  final List<FlaxCallbackParameter> parameters;
  @override
  final FlaxTypeRef result;
  @override
  final String id;
  @override
  Object Function(FlaxCallback) get wrap => FlaxCallbackBinding._signatureWrap;
  @override
  Object? Function(Object, List<Object?>, Map<String, Object?>) get invoke =>
      FlaxCallbackBinding._signatureInvoke;
  @override
  bool Function(Object) get matches => FlaxCallbackBinding._signatureMatches;
  @override
  bool get independentWidgetResult => false;
  @override
  bool get requiresTypeArguments => false;
  @override
  Function? get genericFactory => null;
}

class FlaxGetter {
  const factory FlaxGetter.plain(
    String name,
    FlaxTypeRef type,
    Object? Function(Object) read,
  ) = _FlaxPlainGetter;

  const FlaxGetter(this.name, this.type, this.read, {FlaxTypeRef? encode})
    : encode = encode ?? type;
  final String name;
  final FlaxTypeRef type;
  final FlaxTypeRef encode;
  final Object? Function(Object) read;
}

class _FlaxPlainGetter implements FlaxGetter {
  const _FlaxPlainGetter(this.name, this.type, this.read);
  @override
  final String name;
  @override
  final FlaxTypeRef type;
  @override
  final Object? Function(Object) read;
  @override
  FlaxTypeRef get encode => type;
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
    List<FlaxGetter> getters,
    Map<String, FlaxInstanceMethod> instanceMethods, {
    required this.constructors,
    required this.create,
    this.disposeMethod,
    this.matches,
    this.nativeInput,
    this.staticGetters = const {},
    super.methods,
    // Named public argument cannot use a private initializing formal.
    List<FlaxSetter> setters = const [],
    this.parent,
    this.listenerPairs = const {},
    this.supertypes = const [],
    this.proxy,
    this.memberView,
    this.memberViewOperations = const {},
    this.collectionView,
    this.aliasOf,
  }) : _getters = getters,
       // ignore: prefer_initializing_formals
       _setters = setters,
       _instanceMethods = instanceMethods;
  final Map<String, List<FlaxParameter>> constructors;
  final Object Function(String, Map<String, Object?>) create;

  /// Shared ordinary members; proxy slots and lexical super entries stay local.
  final FlaxObjectBinding? parent;
  final List<FlaxGetter> _getters;
  final List<FlaxSetter> _setters;
  final Map<String, FlaxInstanceMethod> _instanceMethods;
  List<FlaxGetter> get getters => parent == null ? _getters : _members.getters;
  List<FlaxSetter> get setters => parent == null ? _setters : _members.setters;
  Map<String, FlaxInstanceMethod> get instanceMethods =>
      parent == null ? _instanceMethods : _members.methods;

  static final _inherited =
      Expando<
        ({
          List<FlaxGetter> getters,
          List<FlaxSetter> setters,
          Map<String, FlaxInstanceMethod> methods,
        })
      >();

  ({
    List<FlaxGetter> getters,
    List<FlaxSetter> setters,
    Map<String, FlaxInstanceMethod> methods,
  })
  get _members => _inherited[this] ??= (
    getters: List.unmodifiable(
      {
        for (final member in parent!.getters) member.name: member,
        for (final member in _getters) member.name: member,
      }.values,
    ),
    setters: List.unmodifiable(
      {
        for (final member in parent!.setters) member.name: member,
        for (final member in _setters) member.name: member,
      }.values,
    ),
    methods: Map.unmodifiable({
      for (final entry in parent!.instanceMethods.entries)
        if (!entry.key.startsWith('@super:')) entry.key: entry.value,
      ..._instanceMethods,
    }),
  );
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
  const factory FlaxFunctionBinding.constant(
    String id,
    FlaxTypeRef result,
    Object? value,
  ) = _FlaxConstantFunctionBinding;
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

class _FlaxConstantFunctionBinding extends FlaxFunctionBinding {
  const _FlaxConstantFunctionBinding(String id, FlaxTypeRef result, this.value)
    : super(id, const [], result, _unusedConstantInvoke);
  final Object? value;
  @override
  Object? Function(Map<String, Object?>) get invoke => _read;
  Object? _read(Map<String, Object?> values) => value;
  static Never _unusedConstantInvoke(Map<String, Object?> values) =>
      throw StateError('Invalid constant invocation');
}

/// Static Dart constants share one conversion type and retain readable IDs.
class FlaxConstantGroup {
  const FlaxConstantGroup(this.type, this.values);
  final FlaxTypeRef type;
  final Map<String, Object?> values;
}

/// Navigation admission and UI callback roles for selected function bindings.
class FlaxRouteCallBinding {
  const FlaxRouteCallBinding([this.builders = const []]);
  final List<String> builders;
}

class FlaxInstanceMethod {
  const factory FlaxInstanceMethod.plain(
    List<FlaxParameter> parameters,
    FlaxTypeRef result,
    Object? Function(Object, Map<String, Object?>) invoke,
  ) = _FlaxPlainInstanceMethod;

  const factory FlaxInstanceMethod.shared(
    FlaxCallbackBinding signature,
    Object? Function(Object, Map<String, Object?>) invoke,
  ) = _FlaxSharedInstanceMethod;

  const factory FlaxInstanceMethod.signature(
    FlaxCallbackBinding signature,
    Object? Function(Object, Map<String, Object?>) invoke, {
    bool startsRoute,
    Function? genericFactory,
    List<Type> ownerTypes,
    bool requiresTypeArguments,
  }) = _FlaxSignatureInstanceMethod;

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

// Common methods have no navigation or generic dispatch policy to store.
abstract class _FlaxOrdinaryMethod implements FlaxInstanceMethod {
  const _FlaxOrdinaryMethod();
  @override
  bool get startsRoute => false;
  @override
  Function? get genericFactory => null;
  @override
  List<Type> get ownerTypes => const [];
  @override
  bool get requiresTypeArguments => false;
}

class _FlaxPlainInstanceMethod extends _FlaxOrdinaryMethod {
  const _FlaxPlainInstanceMethod(this.parameters, this.result, this.invoke);
  @override
  final List<FlaxParameter> parameters;
  @override
  final FlaxTypeRef result;
  @override
  final Object? Function(Object, Map<String, Object?>) invoke;
}

class _FlaxSharedInstanceMethod extends _FlaxOrdinaryMethod {
  const _FlaxSharedInstanceMethod(this.signature, this.invoke);
  final FlaxCallbackBinding signature;
  @override
  List<FlaxParameter> get parameters => signature.parameters;
  @override
  FlaxTypeRef get result => signature.result;
  @override
  final Object? Function(Object, Map<String, Object?>) invoke;
}

/// Reuses an existing closed proxy signature without copying its parameter view.
class _FlaxSignatureInstanceMethod implements FlaxInstanceMethod {
  const _FlaxSignatureInstanceMethod(
    this.signature,
    this.invoke, {
    this.startsRoute = false,
    this.genericFactory,
    this.ownerTypes = const [],
    this.requiresTypeArguments = false,
  });
  final FlaxCallbackBinding signature;
  @override
  List<FlaxParameter> get parameters => signature.parameters;
  @override
  FlaxTypeRef get result => signature.result;
  @override
  final Object? Function(Object, Map<String, Object?>) invoke;
  @override
  final bool startsRoute;
  @override
  final Function? genericFactory;
  @override
  final List<Type> ownerTypes;
  @override
  final bool requiresTypeArguments;
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
  const factory FlaxParameter.required(String name, FlaxTypeRef type) =
      _FlaxRequiredParameter;

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

class _FlaxRequiredParameter implements FlaxParameter {
  const _FlaxRequiredParameter(this.name, this.type);
  @override
  final String name;
  @override
  final FlaxTypeRef type;
  @override
  bool get required => true;
  @override
  Object? get defaultValue => null;
  @override
  bool get omitWhenAbsent => false;
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
  const FlaxContextBinding(
    super.id,
    this.getters, {
    this.instanceMethods = const {},
    this.matches,
  });
  final List<FlaxGetter> getters;
  final Map<String, FlaxInstanceMethod> instanceMethods;
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
    List<FlaxFunctionBinding> functions = const [],
    this.constants = const [],
    this.stateVariants = const [],
    this.dependencyModules = const [],
    this.dependencies = const [],
    this.dartTypes = const [],
    this.dartShapes = const [],
  }) : // Named public arguments cannot use private initializing formals.
       // ignore: prefer_initializing_formals
       _functions = functions;
  final String name;
  final List<FlaxTypeBinding> types;
  final String moduleId;
  final int uiProtocol;
  final List<String> requiredCapabilities;
  final List<FlaxFunctionBinding> _functions;
  static final _functionViews = Expando<List<FlaxFunctionBinding>>();

  static final _subtypeIndexes =
      Expando<Map<String, List<FlaxObjectBinding>>>();
  // Immutable declaration metadata is shared across registries and Sessions.
  Map<String, List<FlaxObjectBinding>> get _objectSubtypes =>
      _subtypeIndexes[this] ??= () {
        final index = <String, List<FlaxObjectBinding>>{};
        for (final binding in types) {
          if (binding is! FlaxObjectBinding || binding.aliasOf != null) {
            continue;
          }
          for (final ancestor in binding.supertypes.toSet()) {
            (index[ancestor] ??= []).add(binding);
          }
        }
        return index;
      }();

  /// Complete author-facing metadata; registries index groups without expanding them.
  List<FlaxFunctionBinding> get functions => constants.isEmpty
      ? _functions
      : _functionViews[this] ??= List.unmodifiable([
          ..._functions,
          for (final group in constants)
            for (final entry in group.values.entries)
              FlaxFunctionBinding.constant(entry.key, group.type, entry.value),
        ]);
  final List<FlaxConstantGroup> constants;
  final List<FlaxStateVariantBinding> stateVariants;
  final List<String> dependencyModules;

  /// Dart modules registered with this module, without installing host plugins.
  final List<FlaxBindingModule> dependencies;
  final List<FlaxDartClassTemplate> dartTypes;
  final List<FlaxDartShapeTemplate> dartShapes;
}

/// Registers selected modules and their transitive Dart binding dependencies.
/// Shared module objects are admitted once. A registry never chooses an engine.
class FlaxBindingRegistry {
  FlaxBindingRegistry(List<FlaxBindingModule> modules)
    : modules = _withDependencies(modules) {
    final moduleIds = <String>{};
    final types = <String, FlaxTypeBinding>{};
    final functions = <String, FlaxFunctionBinding>{};
    final constants = <String, FlaxConstantGroup>{};
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
      for (final function in module._functions) {
        if (functions.containsKey(function.id) ||
            constants.containsKey(function.id)) {
          throw ArgumentError('Duplicate function binding: ${function.id}');
        }
        functions[function.id] = function;
        _bindingOwners[function.id] = module;
      }
      for (final group in module.constants) {
        for (final id in group.values.keys) {
          if (functions.containsKey(id) || constants.containsKey(id)) {
            throw ArgumentError('Duplicate function binding: $id');
          }
          constants[id] = group;
          _bindingOwners[id] = module;
        }
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
    _constantGroups.addAll(constants);
    _stateVariants.addAll(stateVariants);
    _componentStateTypes.addAll(componentStateTypes);
  }

  static List<FlaxBindingModule> _withDependencies(
    List<FlaxBindingModule> modules,
  ) {
    final seen = <String, FlaxBindingModule>{
      componentsBindings.moduleId: componentsBindings,
    };
    final expanded = <FlaxBindingModule>[];
    void visit(FlaxBindingModule module) {
      final existing = seen[module.moduleId];
      if (existing != null) {
        if (!identical(existing, module)) {
          throw ArgumentError('Duplicate binding module id ${module.moduleId}');
        }
        return;
      }
      seen[module.moduleId] = module;
      expanded.add(module);
      for (final dependency in module.dependencies) {
        visit(dependency);
      }
    }

    for (final module in modules) {
      visit(module);
    }
    return List.unmodifiable(expanded);
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
  final _constantGroups = <String, FlaxConstantGroup>{};
  final _stateVariants = <String, FlaxStateVariantBinding>{};
  final _componentStateTypes = <String>{};

  @override
  bool operator ==(Object other) =>
      other is FlaxBindingRegistry && listEquals(modules, other.modules);
  @override
  int get hashCode => Object.hashAll(modules);
}

/// Shared typed factories; conversion policies and ownership stay in the bridge.
abstract final class FlaxCallbackAdapters {
  static Object wrap0<R>(FlaxCallback callback) => () {
    return callback.call([], {}) as R;
  };
  static bool matches0<R>(Object value) => value is R Function();
  static Object? invoke0<R>(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function as R Function())();
  }

  static Object wrapVoid0(FlaxCallback callback) => () {
    callback.call([], {});
  };
  static bool matchesVoid0(Object value) => value is void Function();
  static Object? invokeVoid0(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    (function as void Function())();
    return null;
  }

  static Object wrap1<A, R>(FlaxCallback callback) => (A p0) {
    return callback.call([p0], {}) as R;
  };
  static bool matches1<A, R>(Object value) => value is R Function(A);
  static Object? invoke1<A, R>(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function as R Function(A))(positional[0] as A);
  }

  static Object wrapVoid1<A>(FlaxCallback callback) => (A p0) {
    callback.call([p0], {});
  };
  static bool matchesVoid1<A>(Object value) => value is void Function(A);
  static Object? invokeVoid1<A>(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    (function as void Function(A))(positional[0] as A);
    return null;
  }

  static Object wrap2<A, B, R>(FlaxCallback callback) => (A p0, B p1) {
    return callback.call([p0, p1], {}) as R;
  };
  static bool matches2<A, B, R>(Object value) => value is R Function(A, B);
  static Object? invoke2<A, B, R>(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function as R Function(A, B))(
      positional[0] as A,
      positional[1] as B,
    );
  }

  static Object wrapVoid2<A, B>(FlaxCallback callback) => (A p0, B p1) {
    callback.call([p0, p1], {});
  };
  static bool matchesVoid2<A, B>(Object value) => value is void Function(A, B);
  static Object? invokeVoid2<A, B>(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    (function as void Function(A, B))(positional[0] as A, positional[1] as B);
    return null;
  }
}
