enum FlaxCodegenTypeCategory {
  string('String'),
  boolean('bool'),
  integer('int'),
  number('double'),
  numeric('num'),
  scalar('scalar'),
  data('data'),
  voidType('void'),
  widget('widget'),
  callback('callback'),
  iterable('iterable'),
  list('list'),
  map('map'),
  set('set'),
  any('any'),
  parameter('parameter'),
  future('future'),
  futureOr('futureOr'),
  stream('stream'),
  enumeration('enum'),
  context('context'),
  state('state'),
  route('route'),
  page('page'),
  object('object');

  const FlaxCodegenTypeCategory(this.wireName);
  final String wireName;

  static FlaxCodegenTypeCategory parse(String name) => values.firstWhere(
    (value) => value.wireName == name,
    orElse: () => throw StateError('Unknown model type: $name'),
  );
}

enum FlaxCodegenClassCategory {
  widget,
  widgetInterface,
  members,
  context,
  state,
  stream,
  route,
  page,
  object;

  static FlaxCodegenClassCategory parse(String name) => values.firstWhere(
    (value) => value.name == name,
    orElse: () => throw StateError('Unknown model class: $name'),
  );
}

/// Analyzer-independent input shared by both binding emitters.
class FlaxCodegenTypeRef {
  const FlaxCodegenTypeRef(
    this.kind, {
    this.id,
    this.name,
    this.nullable = false,
    this.item,
    this.key,
    this.parameters = const [],
    this.typeParameters = const [],
    this.result,
    this.typeArguments = const [],
    this.dartArguments = const [],
    this.primitiveKinds = const [],
    this.declaration,
    this.tsArguments = const [],
    this.genericIdentity,
  });
  final String kind;
  final String? id;
  final String? name;
  final bool nullable;
  final FlaxCodegenTypeRef? item;
  final FlaxCodegenTypeRef? key;
  final List<FlaxCodegenParameterModel> parameters;
  final List<FlaxCodegenGenericParameter> typeParameters;
  final FlaxCodegenTypeRef? result;
  final List<String> typeArguments;
  final List<FlaxCodegenTypeRef> dartArguments;
  final List<String> primitiveKinds;
  final FlaxCodegenTypeRef? declaration;
  final List<FlaxCodegenTypeRef> tsArguments;
  final Object? genericIdentity;

  FlaxCodegenTypeRef declaredAs(FlaxCodegenTypeRef type) => FlaxCodegenTypeRef(
    kind,
    id: id,
    name: name,
    nullable: nullable,
    item: item,
    key: key,
    parameters: parameters,
    typeParameters: typeParameters,
    result: result,
    typeArguments: typeArguments,
    dartArguments: dartArguments,
    primitiveKinds: primitiveKinds,
    declaration: type,
    genericIdentity: genericIdentity,
  );

  FlaxCodegenTypeCategory get category => FlaxCodegenTypeCategory.parse(kind);
  bool get containsWidget =>
      kind == 'widget' ||
      (item?.containsWidget ?? false) ||
      (key?.containsWidget ?? false);
  bool get containsCallback =>
      category == FlaxCodegenTypeCategory.callback ||
      (item?.containsCallback ?? false) ||
      (key?.containsCallback ?? false);

  void validate(String location) {
    if (key?.containsCallback ?? false) {
      throw StateError('Callbacks cannot be Map keys at $location');
    }
    final named =
        (category == FlaxCodegenTypeCategory.widget && id != null) ||
        (category == FlaxCodegenTypeCategory.stream && id != null) ||
        switch (category) {
          FlaxCodegenTypeCategory.enumeration ||
          FlaxCodegenTypeCategory.context ||
          FlaxCodegenTypeCategory.state ||
          FlaxCodegenTypeCategory.route ||
          FlaxCodegenTypeCategory.page ||
          FlaxCodegenTypeCategory.object => true,
          _ => false,
        };
    final collection =
        category == FlaxCodegenTypeCategory.iterable ||
        category == FlaxCodegenTypeCategory.list ||
        category == FlaxCodegenTypeCategory.map ||
        category == FlaxCodegenTypeCategory.set ||
        category == FlaxCodegenTypeCategory.future ||
        category == FlaxCodegenTypeCategory.futureOr ||
        category == FlaxCodegenTypeCategory.stream;
    final callback = category == FlaxCodegenTypeCategory.callback;
    if ((named &&
            (id == null || id!.isEmpty || name == null || name!.isEmpty)) ||
        (!named &&
            category != FlaxCodegenTypeCategory.parameter &&
            (id != null ||
                name != null ||
                typeArguments.isNotEmpty ||
                dartArguments.isNotEmpty)) ||
        (collection != (item != null)) ||
        ((category == FlaxCodegenTypeCategory.map) != (key != null)) ||
        (callback != (result != null)) ||
        (!callback && parameters.isNotEmpty) ||
        (!callback && typeParameters.isNotEmpty) ||
        (category == FlaxCodegenTypeCategory.voidType && nullable)) {
      throw StateError('Invalid $kind model at $location');
    }
    declaration?.validate('$location declaration');
    for (final arg in tsArguments) {
      arg.validate('$location type argument');
    }
    for (final arg in dartArguments) {
      arg.validate('$location Dart type argument');
    }
    item?.validate('$location item');
    key?.validate('$location key');
    result?.validate('$location result');
    for (final parameter in parameters) {
      parameter.type.validate('$location.${parameter.name}');
    }
    for (final parameter in typeParameters) {
      parameter.bound.validate('$location.${parameter.name} bound');
      parameter.defaultType?.validate('$location.${parameter.name} erasure');
    }
  }

  void validateResult(String location) {
    if ({'context', 'route'}.contains(kind)) {
      throw StateError('Unsupported Dart result at $location: $kind');
    }
    // Lexical type-parameter results require a bound genericIdentity token.
    if (kind == 'parameter') {
      if (genericIdentity == null) {
        throw StateError('Unsupported Dart result at $location: $kind');
      }
      return;
    }
    if ({
      'iterable',
      'list',
      'map',
      'set',
      'future',
      'futureOr',
      'stream',
    }.contains(kind)) {
      item!.validateResult('$location item');
      key?.validateResult('$location key');
    }
    validateCallbacks(location, input: false);
  }

  /// A collection view exposes reads as well as writes. Validate nested functions
  /// in both directions instead of emitting callable types that cannot be returned.
  void validateCallbacks(String location, {required bool input}) {
    if (kind == 'callback') {
      bool supported(
        FlaxCodegenTypeRef type, {
        required bool toDart,
        bool argument = false,
        bool insideFuture = false,
      }) {
        if (type.kind == 'future' ||
            type.kind == 'futureOr' ||
            type.kind == 'stream') {
          if (insideFuture) return false;
          final item = type.item!;
          if ({
                'context',
                'state',
                'route',
                'page',
                'parameter',
                'future',
                'futureOr',
                'stream',
              }.contains(item.kind) ||
              (item.containsWidget && item.kind != 'widget')) {
            return false;
          }
          return supported(item, toDart: toDart, insideFuture: true);
        }
        if ({'iterable', 'list', 'map', 'set'}.contains(type.kind)) {
          if (type.containsWidget) return false;
          return supported(
                type.item!,
                toDart: toDart,
                argument: argument,
                insideFuture: insideFuture,
              ) &&
              (type.key == null ||
                  supported(
                    type.key!,
                    toDart: toDart,
                    argument: argument,
                    insideFuture: insideFuture,
                  ));
        }
        if (type.kind == 'callback') {
          // A returned function starts a separate invocation and may return its
          // own Future.
          type.validateCallbacks(location, input: toDart);
          return true;
        }
        if (type.kind == 'context') return argument;
        if (type.kind == 'page') return argument && !toDart;
        // Mounted callback result hosts do not inherit a narrower Widget interface.
        if (type.kind == 'widget') return type.id == null;
        if (type.kind == 'route') return toDart && !argument;
        // Lexical type-parameter refs require a bound genericIdentity token.
        if (type.kind == 'parameter') return type.genericIdentity != null;
        return {
          'String',
          'bool',
          'int',
          'double',
          'num',
          'scalar',
          'enum',
          'object',
          'any',
          'data',
          'void',
        }.contains(type.kind);
      }

      if (parameters.any(
            (p) => !supported(p.type, toDart: !input, argument: true),
          ) ||
          !supported(result!, toDart: input)) {
        throw StateError(
          'Unsupported ${input ? "input" : "returned"} callback signature at $location',
        );
      }
      for (final p in parameters) {
        p.type.validateCallbacks('$location.${p.name}', input: !input);
      }
      result!.validateCallbacks('$location result', input: input);
      return;
    }
    item?.validateCallbacks('$location item', input: input);
    key?.validateCallbacks('$location key', input: input);
    if (input && {'iterable', 'list', 'map', 'set'}.contains(kind)) {
      item!.validateCallbacks('$location returned item', input: false);
      key?.validateCallbacks('$location returned key', input: false);
    }
  }
}

class FlaxCodegenParameterModel {
  const FlaxCodegenParameterModel({
    required this.name,
    required this.type,
    required this.required,
    required this.positional,
    required this.defaultCode,
    this.omitWhenAbsent = false,
    this.independentWidgetResult = false,
    this.snapshot,
    this.encodeKind,
    this.scoped = false,
  });
  final String name;
  final FlaxCodegenTypeRef type;
  final bool required;
  final bool positional;
  final String? snapshot;
  final String? encodeKind;
  final bool scoped;

  /// Dart expression with public names, qualified by the emitter.
  final String defaultCode;
  final bool omitWhenAbsent;
  final bool independentWidgetResult;
}

class FlaxCodegenConstructorModel {
  const FlaxCodegenConstructorModel(this.name, this.parameters);
  final String name;
  final List<FlaxCodegenParameterModel> parameters;
}

class FlaxCodegenGetterModel {
  const FlaxCodegenGetterModel(this.name, this.type, {this.encodeKind});
  final String name;
  final FlaxCodegenTypeRef type;
  final String? encodeKind;
}

class FlaxCodegenMethodModel {
  const FlaxCodegenMethodModel(
    this.name,
    this.parameters,
    this.result, {
    this.instance = false,
    this.typeArguments = const [],
    this.startsRoute = false,
    this.typeParameters = const [],
    this.mustCallSuper = false,
    this.deferredFactory = false,
  });
  final bool mustCallSuper;
  final List<FlaxCodegenGenericParameter> typeParameters;
  final bool instance;
  final List<String> typeArguments;
  final bool startsRoute;
  final bool deferredFactory;
  final String name;
  final List<FlaxCodegenParameterModel> parameters;
  final FlaxCodegenTypeRef result;
}

class FlaxCodegenClassModel {
  const FlaxCodegenClassModel({
    required this.name,
    required this.id,
    required this.kind,
    required this.constructors,
    required this.supertypes,
    this.superTypes = const [],
    this.genericScalar = false,
    this.asyncIterableFactory,
    this.typeArguments = const [],
    this.getters = const [],
    this.methods = const [],
    this.pageAdapter,
    this.setters = const [],
    this.disposeMethod,
    this.listenerPairs = const {},
    this.staticGetters = const [],
    this.typeParameters = const [],
    this.proxy,
    this.widgetInterfaces = const [],
    this.widgetGetters = const [],
    this.jsName,
  });
  final String name;
  final String id;
  final String kind;
  final List<FlaxCodegenGenericParameter> typeParameters;
  final FlaxCodegenProxyModel? proxy;
  final List<FlaxCodegenTypeRef> widgetInterfaces;
  final List<FlaxCodegenGetterModel> widgetGetters;
  final String? jsName;
  final List<FlaxCodegenConstructorModel> constructors;
  final List<String> supertypes;
  final List<FlaxCodegenTypeRef> superTypes;
  final bool genericScalar;
  final String? asyncIterableFactory;
  final List<String> typeArguments;
  final List<FlaxCodegenGetterModel> getters;
  final List<FlaxCodegenMethodModel> methods;
  final FlaxCodegenPageAdapterModel? pageAdapter;
  final List<FlaxCodegenGetterModel> setters;
  final String? disposeMethod;
  final Map<String, String> listenerPairs;
  final List<FlaxCodegenGetterModel> staticGetters;

  FlaxCodegenClassCategory get category => FlaxCodegenClassCategory.parse(kind);
}

class FlaxCodegenNamedTypeModel {
  const FlaxCodegenNamedTypeModel({
    required this.name,
    required this.id,
    this.enumNames = const [],
    this.typeParameters = const [],
  });
  final String name;
  final String id;
  final List<String> enumNames;
  final List<FlaxCodegenGenericParameter> typeParameters;
  bool get isEnum => enumNames.isNotEmpty;
}

class FlaxCodegenModuleModel {
  const FlaxCodegenModuleModel({
    required this.name,
    required this.library,
    required this.jsPackage,
    required this.dartOutput,
    required this.tsOutput,
    required this.classes,
    required this.types,
    this.typeLibraries = const {},
    this.functions = const [],
    this.snapshots = const [],
    this.moduleId,
    this.requiredCapabilities = const <String>[],
  });
  final String name;
  final String library;
  final String jsPackage;
  final String dartOutput;
  final String tsOutput;
  final List<FlaxCodegenClassModel> classes;
  final List<FlaxCodegenNamedTypeModel> types;
  final Map<String, String> typeLibraries;
  final List<FlaxCodegenFunctionModel> functions;
  final List<FlaxCodegenSnapshotModel> snapshots;

  /// Manifest 2 `moduleId` (`bindingNamespace/name`). Null until freeze stamps
  /// it; the emitter then infers from wireIds or a test fallback.
  final String? moduleId;

  /// Sorted unique capability literals. Protocol 20 is empty.
  final List<String> requiredCapabilities;

  void validate() {
    final names = <String>{
      ...classes.map((c) => c.name),
      ...types.map((t) => t.name),
    };
    for (final function in functions) {
      final call = function.call;
      if (!names.add(call.name)) {
        throw StateError('Conflicting function export: ${call.name}');
      }
      call.result.validate(call.name);
      call.result.validateResult(call.name);
      for (final parameter in call.parameters) {
        parameter.type.validate('${call.name}.${parameter.name}');
        parameter.type.validateCallbacks(
          '${call.name}.${parameter.name}',
          input: true,
        );
      }
    }
    if (functions.isNotEmpty && classes.any((c) => c.proxy?.kind == 'host')) {
      throw StateError('Host proxy modules cannot contain functions');
    }
    if (classes.any((c) => c.proxy?.kind == 'host') &&
        classes.any(
          (c) =>
              c.proxy?.kind != 'host' &&
              (c.proxy != null ||
                  c.constructors.isNotEmpty ||
                  c.getters.isNotEmpty ||
                  c.setters.isNotEmpty ||
                  c.methods.isNotEmpty ||
                  c.staticGetters.isNotEmpty),
        )) {
      throw StateError(
        'Host modules may only include host proxies and empty type identities',
      );
    }
    for (final type in classes) {
      final category = type.category;
      if (type.asyncIterableFactory != null &&
          (category != FlaxCodegenClassCategory.stream ||
              type.typeParameters.length != 1 ||
              !RegExp(r'^[A-Za-z_$][A-Za-z0-9_$]*$')
                  .hasMatch(type.asyncIterableFactory!))) {
        throw StateError(
          'AsyncIterable factories require a single-parameter Stream type: ${type.name}',
        );
      }
      if (type.widgetInterfaces.isNotEmpty &&
          (category != FlaxCodegenClassCategory.widget ||
              type.constructors.any(
                (c) => c.parameters.any((p) => p.type.containsCallback),
              ))) {
        throw StateError(
          'Interface Widgets require fixed inputs without callbacks: ${type.name}',
        );
      }
      if (category == FlaxCodegenClassCategory.widgetInterface &&
          (type.constructors.isNotEmpty ||
              type.methods.isNotEmpty ||
              type.setters.isNotEmpty ||
              type.staticGetters.isNotEmpty ||
              type.typeParameters.isNotEmpty ||
              type.proxy != null)) {
        throw StateError(
          'Widget interfaces only expose readonly configuration getters: ${type.name}',
        );
      }
      if ((category != FlaxCodegenClassCategory.object &&
              category != FlaxCodegenClassCategory.stream &&
              type.disposeMethod != null) ||
          (category != FlaxCodegenClassCategory.object &&
              category != FlaxCodegenClassCategory.stream &&
              (type.setters.isNotEmpty || type.listenerPairs.isNotEmpty))) {
        throw StateError('Invalid object ownership model: ${type.name}');
      }
      if ((category == FlaxCodegenClassCategory.context ||
              category == FlaxCodegenClassCategory.state) &&
          type.constructors.isNotEmpty) {
        throw StateError('Borrowed ${type.name} cannot have constructors');
      }
      if ((type.pageAdapter != null &&
              category != FlaxCodegenClassCategory.page) ||
          (category == FlaxCodegenClassCategory.page &&
              type.constructors.isNotEmpty &&
              type.pageAdapter == null)) {
        throw StateError(
          'Constructible Pages require an explicit Page Route adapter',
        );
      }
      for (final constructor in type.constructors) {
        for (final parameter in constructor.parameters) {
          parameter.type.validate(
            '${type.name}.${constructor.name}.${parameter.name}',
          );
          parameter.type.validateCallbacks(
            '${type.name}.${constructor.name}.${parameter.name}',
            input: true,
          );
          if (parameter.independentWidgetResult &&
              (category != FlaxCodegenClassCategory.widget ||
                  parameter.type.category != FlaxCodegenTypeCategory.callback ||
                  parameter.type.result!.category !=
                      FlaxCodegenTypeCategory.widget ||
                  parameter.type.parameters.isEmpty ||
                  parameter.type.parameters.first.type.category !=
                      FlaxCodegenTypeCategory.context ||
                  parameter.type.parameters.first.type.nullable)) {
            throw StateError(
              'Invalid independent Widget callback: ${type.name}.${constructor.name}.${parameter.name}',
            );
          }
        }
      }
      for (final getter in [
        ...type.getters,
        ...type.setters,
        ...type.staticGetters,
        ...type.widgetGetters,
      ]) {
        getter.type.validate('${type.name}.${getter.name}');
        if (type.setters.contains(getter)) {
          getter.type.validateCallbacks(
            '${type.name}.${getter.name}',
            input: true,
          );
        } else {
          getter.type.validateResult('${type.name}.${getter.name}');
        }
      }
      for (final method in [...type.methods, ...?type.proxy?.methods]) {
        method.result.validate('${type.name}.${method.name} result');
        method.result.validateResult('${type.name}.${method.name} result');
        for (final parameter in method.parameters) {
          parameter.type.validate(
            '${type.name}.${method.name}.${parameter.name}',
          );
          parameter.type.validateCallbacks(
            '${type.name}.${method.name}.${parameter.name}',
            input: true,
          );
        }
      }
      if (type.proxy case final proxy? when proxy.kind != 'host') {
        for (final (name, callback) in proxy.callbacks) {
          callback.validate('${type.name}.$name');
          callback.validateCallbacks('${type.name}.$name', input: true);
          if (!name.startsWith('call:')) {
            bool supported(FlaxCodegenTypeRef value) =>
                !{
                  'future',
                  'stream',
                  'widget',
                  'route',
                  'context',
                  'state',
                  'page',
                }.contains(value.kind) &&
                (value.item == null || supported(value.item!)) &&
                (value.key == null || supported(value.key!)) &&
                (value.result == null || supported(value.result!)) &&
                value.parameters.every((p) => supported(p.type));
            if (!supported(callback)) {
              throw StateError(
                'Unsupported proxy property: ${type.name}.$name',
              );
            }
          }
        }
      }
    }
  }
}

class FlaxCodegenFunctionModel {
  const FlaxCodegenFunctionModel(this.id, this.call, {this.route});
  final String id;
  final FlaxCodegenMethodModel call;
  final FlaxCodegenRouteCallModel? route;
}

class FlaxCodegenRouteCallModel {
  const FlaxCodegenRouteCallModel(
    this.context,
    this.rootNavigator,
    this.builders,
  );
  final String context;
  final String rootNavigator;
  final List<String> builders;
}

class FlaxCodegenPageAdapterModel {
  const FlaxCodegenPageAdapterModel(this.library, this.function);
  final String library;
  final String function;
}

class FlaxCodegenGenericParameter {
  const FlaxCodegenGenericParameter(
    this.name,
    this.bound, {
    this.defaultType,
    this.genericIdentity,
  });
  final String name;
  final FlaxCodegenTypeRef bound;
  final FlaxCodegenTypeRef? defaultType;
  final Object? genericIdentity;
}

class FlaxCodegenProxyModel {
  const FlaxCodegenProxyModel(
    this.kind,
    this.methods, {
    this.superMethods = const [],
    this.getters = const [],
    this.setters = const [],
  });
  final List<String> superMethods;
  final String kind;
  final List<FlaxCodegenMethodModel> methods;
  final List<FlaxCodegenGetterModel> getters;
  final List<FlaxCodegenGetterModel> setters;

  Iterable<(String, FlaxCodegenTypeRef)> get callbacks sync* {
    for (final method in methods) {
      yield (
        'call:${method.name}',
        FlaxCodegenTypeRef(
          'callback',
          parameters: method.parameters,
          result: method.result,
          typeParameters: method.typeParameters,
        ),
      );
    }
    for (final getter in getters) {
      yield (
        'get:${getter.name}',
        FlaxCodegenTypeRef('callback', result: getter.type),
      );
    }
    for (final setter in setters) {
      yield (
        'set:${setter.name}',
        FlaxCodegenTypeRef(
          'callback',
          parameters: [
            FlaxCodegenParameterModel(
              name: 'value',
              type: setter.type,
              required: true,
              positional: true,
              defaultCode: 'null',
            ),
          ],
          result: const FlaxCodegenTypeRef('void'),
        ),
      );
    }
  }
}

class FlaxCodegenSnapshotFieldModel {
  const FlaxCodegenSnapshotFieldModel({
    required this.name,
    required this.kind,
    this.enumNames = const [],
    this.snapshot,
    this.nullable = false,
  });
  final String name;
  final String kind;
  final List<String> enumNames;
  final String? snapshot;
  final bool nullable;
}

class FlaxCodegenSnapshotModel {
  const FlaxCodegenSnapshotModel({
    required this.name,
    required this.id,
    required this.fields,
    this.parent,
  });
  final String name;
  final String id;
  final String? parent;
  final List<FlaxCodegenSnapshotFieldModel> fields;

  List<FlaxCodegenSnapshotFieldModel> allFields(
    Map<String, FlaxCodegenSnapshotModel> byName,
  ) {
    final inherited = parent == null
        ? const <FlaxCodegenSnapshotFieldModel>[]
        : byName[parent]!.allFields(byName);
    return [...inherited, ...fields];
  }
}
