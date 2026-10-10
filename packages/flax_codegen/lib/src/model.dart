import 'dart:convert';

import 'identity.dart';

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
  record('record'),
  enumeration('enum'),
  context('context'),
  state('state'),
  route('route'),
  page('page'),
  object('object'),
  typeOnly('typeOnly');

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
  object,
  enumeration;

  static FlaxCodegenClassCategory parse(String name) => name == 'enum'
      ? enumeration
      : values.firstWhere(
          (value) => value != enumeration && value.name == name,
          orElse: () => throw StateError('Unknown model class: $name'),
        );
}

class FlaxCodegenRecordFieldModel {
  const FlaxCodegenRecordFieldModel({
    required this.name,
    required this.type,
    required this.positional,
  });

  final String name;
  final FlaxCodegenTypeRef type;
  final bool positional;
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
    this.recordFields = const [],
    this.genericIdentity,
    this.originatingUri,
    this.originatingName,
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
  final List<FlaxCodegenRecordFieldModel> recordFields;
  final Object? genericIdentity;
  final String? originatingUri;
  final String? originatingName;

  /// A type-only declaration whose [item] is the erased Dart representation.
  ///
  /// Extension types have no runtime identity, so the wire shape remains the
  /// outer representation while this declaration retains the static Dart type
  /// needed by generated callback signatures and direct calls.
  bool get isExtensionTypeDeclaration => kind == 'typeOnly' && item != null;

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
    tsArguments: tsArguments,
    recordFields: recordFields,
    genericIdentity: genericIdentity,
    originatingUri: originatingUri,
    originatingName: originatingName,
  );

  FlaxCodegenTypeRef asNullable() => nullable
      ? this
      : FlaxCodegenTypeRef(
          kind,
          id: id,
          name: name,
          nullable: true,
          item: item,
          key: key,
          parameters: parameters,
          typeParameters: typeParameters,
          result: result,
          typeArguments: typeArguments,
          dartArguments: dartArguments,
          primitiveKinds: primitiveKinds,
          declaration: declaration,
          tsArguments: tsArguments,
          recordFields: recordFields,
          genericIdentity: genericIdentity,
          originatingUri: originatingUri,
          originatingName: originatingName,
        );

  FlaxCodegenTypeCategory get category => FlaxCodegenTypeCategory.parse(kind);
  bool get containsTypeOnly =>
      kind == 'typeOnly' ||
      [
        ?item,
        ?key,
        ?result,
        ?declaration,
        ...tsArguments,
        ...dartArguments,
        ...parameters.map((p) => p.type),
        ...recordFields.map((f) => f.type),
        ...typeParameters.map((p) => p.bound),
      ].any((type) => type.containsTypeOnly);
  bool get containsWidget =>
      kind == 'widget' ||
      (item?.containsWidget ?? false) ||
      (key?.containsWidget ?? false) ||
      recordFields.any((field) => field.type.containsWidget);
  bool get requiresRouteOwner =>
      (kind == 'callback' && result!.kind == 'route') ||
      (result?.requiresRouteOwner ?? false) ||
      parameters.any((parameter) => parameter.type.requiresRouteOwner) ||
      (item?.requiresRouteOwner ?? false) ||
      (key?.requiresRouteOwner ?? false) ||
      recordFields.any((field) => field.type.requiresRouteOwner);
  bool get isDirectMountedWidgetResult =>
      (kind == 'widget' && id == null) ||
      (kind == 'list' &&
          !nullable &&
          item?.kind == 'widget' &&
          item?.id == null &&
          item?.nullable == false);
  bool get containsCallback =>
      category == FlaxCodegenTypeCategory.callback ||
      (item?.containsCallback ?? false) ||
      (key?.containsCallback ?? false) ||
      recordFields.any((field) => field.type.containsCallback);

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
            category != FlaxCodegenTypeCategory.typeOnly &&
            (id != null ||
                name != null ||
                typeArguments.isNotEmpty ||
                dartArguments.isNotEmpty)) ||
        (category != FlaxCodegenTypeCategory.typeOnly &&
            collection != (item != null)) ||
        ((category == FlaxCodegenTypeCategory.map) != (key != null)) ||
        (callback != (result != null)) ||
        (!callback && parameters.isNotEmpty) ||
        (!callback && typeParameters.isNotEmpty) ||
        (category != FlaxCodegenTypeCategory.record &&
            recordFields.isNotEmpty) ||
        (category == FlaxCodegenTypeCategory.voidType && nullable)) {
      throw StateError('Invalid $kind model at $location');
    }
    if (category == FlaxCodegenTypeCategory.typeOnly) {
      final uri = Uri.tryParse(originatingUri ?? '');
      if (id != null ||
          name == null ||
          name != originatingName ||
          name!.isEmpty ||
          uri == null ||
          !uri.hasScheme ||
          !{'dart', 'package', 'file'}.contains(uri.scheme) ||
          uri.hasQuery ||
          uri.hasFragment ||
          uri.normalizePath().toString() != originatingUri ||
          typeArguments.isNotEmpty ||
          dartArguments.isNotEmpty ||
          declaration != null ||
          (item != null && item!.nullable != nullable)) {
        throw StateError('Invalid type-only reference at $location');
      }
    } else if (originatingUri != null || originatingName != null) {
      throw StateError('Unexpected type-only provenance at $location');
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
    final recordNames = <String>{};
    var sawNamedRecordField = false;
    for (final field in recordFields) {
      if (!recordNames.add(field.name) || field.name.isEmpty) {
        throw StateError('Invalid record field at $location.${field.name}');
      }
      if (field.positional) {
        if (sawNamedRecordField ||
            !RegExp(r'^\$[1-9][0-9]*$').hasMatch(field.name)) {
          throw StateError(
            'Invalid positional record field at $location.${field.name}',
          );
        }
      } else {
        sawNamedRecordField = true;
      }
      field.type.validate('$location.${field.name}');
    }
    for (final parameter in parameters) {
      parameter.type.validate('$location.${parameter.name}');
    }
    for (final parameter in typeParameters) {
      parameter.bound.validate('$location.${parameter.name} bound');
      parameter.defaultType?.validate('$location.${parameter.name} erasure');
    }
  }

  void validateResult(String location) {
    if ({'route', 'page', 'typeOnly'}.contains(kind)) {
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
    if (kind == 'record') {
      for (final field in recordFields) {
        field.type.validateResult('$location.${field.name}');
      }
    }
    validateCallbacks(location, input: false);
  }

  /// A collection view exposes reads as well as writes. Validate nested functions
  /// in both directions instead of emitting callable types that cannot be returned.
  void validateCallbacks(String location, {required bool input}) {
    if (kind == 'typeOnly') {
      throw StateError(
        'Type-only reference cannot be used as a value at $location',
      );
    }
    if (kind == 'callback') {
      String? unsupportedPosition(
        FlaxCodegenTypeRef type,
        String position, {
        required bool toDart,
        bool argument = false,
        bool insideStream = false,
      }) {
        if (type.kind == 'future' || type.kind == 'futureOr') {
          final item = type.item!;
          final itemPosition = '$position item';
          if ({'state', 'route', 'page'}.contains(item.kind)) {
            return itemPosition;
          }
          return unsupportedPosition(
            item,
            itemPosition,
            toDart: toDart,
            insideStream: insideStream,
          );
        }
        if (type.kind == 'stream') {
          if (insideStream) return position;
          final item = type.item!;
          final itemPosition = '$position item';
          if ({
            'state',
            'route',
            'page',
            'parameter',
            'stream',
          }.contains(item.kind)) {
            return itemPosition;
          }
          return unsupportedPosition(
            item,
            itemPosition,
            toDart: toDart,
            insideStream: true,
          );
        }
        if ({'iterable', 'list', 'map', 'set'}.contains(type.kind)) {
          final itemError = unsupportedPosition(
            type.item!,
            '$position item',
            toDart: toDart,
            argument: argument,
            insideStream: insideStream,
          );
          if (itemError != null) return itemError;
          if (type.key != null) {
            return unsupportedPosition(
              type.key!,
              '$position key',
              toDart: toDart,
              argument: argument,
              insideStream: insideStream,
            );
          }
          return null;
        }
        if (type.kind == 'record') {
          for (final field in type.recordFields) {
            final error = unsupportedPosition(
              field.type,
              '$position.${field.name}',
              toDart: toDart,
              argument: argument,
              insideStream: insideStream,
            );
            if (error != null) return error;
          }
          return null;
        }
        if (type.kind == 'callback') {
          // A returned function starts a separate invocation and may return its
          // own Future.
          type.validateCallbacks(position, input: toDart);
          return null;
        }
        if (type.kind == 'context') return null;
        if (type.kind == 'page') return argument && !toDart ? null : position;
        if (type.kind == 'widget') return null;
        if (type.kind == 'route') return toDart && !argument ? null : position;
        // Lexical type-parameter refs require a bound genericIdentity token.
        if (type.kind == 'parameter') {
          return type.genericIdentity != null ? null : position;
        }
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
            }.contains(type.kind)
            ? null
            : position;
      }

      for (final parameter in parameters) {
        final position = '$location.${parameter.name}';
        final unsupported = unsupportedPosition(
          parameter.type,
          position,
          toDart: !input,
          argument: true,
        );
        if (unsupported != null) {
          throw StateError(
            'Unsupported ${input ? "input" : "returned"} callback signature at $unsupported',
          );
        }
      }
      final unsupportedResult = unsupportedPosition(
        result!,
        '$location result',
        toDart: input,
      );
      if (unsupportedResult != null) {
        throw StateError(
          'Unsupported ${input ? "input" : "returned"} callback signature at $unsupportedResult',
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
    for (final field in recordFields) {
      field.type.validateCallbacks('$location.${field.name}', input: input);
    }
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

class FlaxCodegenConstructorSpecializationModel {
  const FlaxCodegenConstructorSpecializationModel({
    required this.typeArguments,
    required this.parameterTypes,
    this.runtimeDomains = const {},
  });

  final List<String> typeArguments;
  final List<FlaxCodegenTypeRef> parameterTypes;

  /// JavaScript-observable runtime domains used only to select among multiple
  /// concrete Dart generic constructor targets.
  final Map<String, String> runtimeDomains;
}

class FlaxCodegenConstructorModel {
  const FlaxCodegenConstructorModel(
    this.name,
    this.parameters, {
    this.specializations = const [],
  });
  final String name;
  final List<FlaxCodegenParameterModel> parameters;
  final List<FlaxCodegenConstructorSpecializationModel> specializations;
}

class FlaxCodegenStateMixinModel {
  const FlaxCodegenStateMixinModel({
    required this.name,
    required this.id,
    required this.library,
    this.typeArguments = const [],
  });

  final String name;
  final String id;
  final String library;
  final List<String> typeArguments;
}

class FlaxCodegenStateInterfaceModel {
  const FlaxCodegenStateInterfaceModel({
    required this.name,
    required this.id,
    required this.library,
    this.wireId,
  });

  final String name;

  /// Analyzer declaration identity (`originatingUri::name`).
  final String id;
  final String library;

  /// Bound Flax provider identity after package ownership is resolved.
  final String? wireId;
}

class FlaxCodegenStateVariantModel {
  const FlaxCodegenStateVariantModel({
    required this.name,
    required this.id,
    required this.stateId,
    required this.mixins,
    this.stateWireId,
    this.interfaces = const [],
    this.getters = const [],
    this.setters = const [],
    this.methods = const [],
    this.superMethods = const [],
    this.mustCallSuperMethods = const [],
    this.providerModule,
  });

  final String name;

  /// Stable runtime identity. The parser uses a local placeholder and package
  /// freezing stamps the final `<moduleId>#stateVariant:<name>` identity.
  final String id;

  /// Analyzer declaration identity for Flutter State.
  final String stateId;

  /// Bound Flax State provider after package ownership is resolved.
  final String? stateWireId;
  final List<FlaxCodegenStateMixinModel> mixins;

  /// Public nominal capabilities implemented by the final Dart composition.
  final List<FlaxCodegenStateInterfaceModel> interfaces;

  /// Members introduced by mixins. Abstract members dispatch to JS; concrete
  /// members are invoked on the real Dart State host.
  final List<FlaxCodegenGetterModel> getters;
  final List<FlaxCodegenGetterModel> setters;
  final List<FlaxCodegenMethodModel> methods;

  /// Concrete members whose direct super implementation is callable from JS.
  final List<String> superMethods;

  /// Overrides whose Analyzer metadata requires an explicit direct-super call.
  final List<String> mustCallSuperMethods;

  /// Final provider module id after package ownership is frozen.
  final String? providerModule;
}

class FlaxCodegenGetterModel {
  const FlaxCodegenGetterModel(
    this.name,
    this.type, {
    this.encodeKind,
    this.id,
    this.cache = false,
  });
  final String name;
  final FlaxCodegenTypeRef type;
  final String? encodeKind;

  /// Static accessor operation identity; instance accessors use their owner.
  final String? id;

  /// Only final primitive enum fields may be cached after a real Dart read.
  final bool cache;
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
    this.operatorName,
  });
  final String? operatorName;
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

/// A Dart-only interface override. No bridge types or wire operations are added.
class FlaxCodegenWidgetMember {
  const FlaxCodegenWidgetMember({
    required this.name,
    required this.kind,
    required this.parameters,
    required this.source,
    required this.imports,
  });
  final String name;
  final String kind;
  final List<String> parameters;
  final String source;
  final Map<String, String> imports;
}

class FlaxCodegenClassModel {
  const FlaxCodegenClassModel({
    required this.name,
    required this.id,
    required this.kind,
    required this.constructors,
    required this.supertypes,
    this.superTypes = const [],
    this.asyncIterableFactory,
    this.typeArguments = const [],
    this.getters = const [],
    this.methods = const [],
    this.pageAdapter,
    this.setters = const [],
    this.disposeMethod,
    this.capabilities = const [],
    this.listenerPairs = const {},
    this.staticGetters = const [],
    this.staticSetters = const [],
    this.typeParameters = const [],
    this.proxy,
    this.widgetInterfaces = const [],
    this.widgetMembers = const [],
    this.jsName,
  });
  final String name;
  final String id;
  final String kind;
  final List<FlaxCodegenGenericParameter> typeParameters;
  final FlaxCodegenProxyModel? proxy;
  final List<FlaxCodegenTypeRef> widgetInterfaces;
  final List<FlaxCodegenWidgetMember> widgetMembers;
  final String? jsName;
  final List<FlaxCodegenConstructorModel> constructors;
  final List<String> supertypes;
  final List<FlaxCodegenTypeRef> superTypes;
  final String? asyncIterableFactory;
  final List<String> typeArguments;
  final List<FlaxCodegenGetterModel> getters;
  final List<FlaxCodegenMethodModel> methods;
  final FlaxCodegenPageAdapterModel? pageAdapter;
  final List<FlaxCodegenGetterModel> setters;
  final String? disposeMethod;

  /// Semantic capabilities describe available API traits. They do not imply
  /// runtime ownership or automatic lifecycle actions.
  final List<String> capabilities;
  final Map<String, String> listenerPairs;
  final List<FlaxCodegenGetterModel> staticGetters;
  final List<FlaxCodegenGetterModel> staticSetters;

  String staticGetterId(FlaxCodegenGetterModel getter) =>
      getter.id ?? _staticAccessorId(getter.name, false);
  String staticSetterId(FlaxCodegenGetterModel setter) =>
      setter.id ?? _staticAccessorId(setter.name, true);

  String _staticAccessorId(String member, bool write) {
    final operation = '$member${write ? '=' : ''}';
    if (id.contains('::')) return '$id.$operation';
    final owner = FlaxCodegenWireId.parse(id);
    final name = '${owner.publicBindingName}.$operation';
    return (write
            ? FlaxCodegenWireId.function(
                moduleId: owner.moduleId,
                publicBindingName: name,
              )
            : FlaxCodegenWireId.read(
                moduleId: owner.moduleId,
                publicBindingName: name,
              ))
        .value;
  }

  Iterable<FlaxCodegenFunctionModel> get staticFunctions sync* {
    for (final getter in staticGetters) {
      yield FlaxCodegenFunctionModel(
        staticGetterId(getter),
        FlaxCodegenMethodModel('get${getter.name}', const [], getter.type),
      );
    }
    for (final setter in staticSetters) {
      yield FlaxCodegenFunctionModel(
        staticSetterId(setter),
        FlaxCodegenMethodModel('set${setter.name}', [
          FlaxCodegenParameterModel(
            name: 'value',
            type: setter.type,
            required: true,
            positional: true,
            defaultCode: 'null',
          ),
        ], const FlaxCodegenTypeRef('void')),
      );
    }
  }

  FlaxCodegenClassCategory get category => FlaxCodegenClassCategory.parse(kind);

  String enumOperationId(String member, String operation, [String? constant]) {
    final name = '$member:$operation${constant == null ? '' : ':$constant'}';
    if (id.contains('::')) return '$id.$name';
    final owner = FlaxCodegenWireId.parse(id);
    return FlaxCodegenWireId.function(
      moduleId: owner.moduleId,
      publicBindingName: '${owner.publicBindingName}.$name',
    ).value;
  }

  Iterable<FlaxCodegenFunctionModel> enumFunctions(
    FlaxCodegenNamedTypeModel constants,
  ) sync* {
    if (kind != 'enum') return;
    FlaxCodegenParameterModel receiver(
      FlaxCodegenTypeRef type, [
      Iterable<FlaxCodegenParameterModel> parameters = const [],
    ]) {
      var name = 'receiver';
      while (parameters.any((parameter) => parameter.name == name)) {
        name = '_$name';
      }
      return FlaxCodegenParameterModel(
        name: name,
        type: type,
        required: true,
        positional: true,
        defaultCode: 'null',
      );
    }

    final receivers = typeParameters.isEmpty
        ? <String?, FlaxCodegenTypeRef>{
            null: FlaxCodegenTypeRef('enum', id: id, name: name),
          }
        : <String?, FlaxCodegenTypeRef>{
            for (final constant in constants.enumValueTypes.entries)
              constant.key: _specializeEnumType(constant.value, const {}),
          };
    final broadType = FlaxCodegenTypeRef(
      'enum',
      id: id,
      name: name,
      dartArguments: [
        for (final parameter in typeParameters) parameter.defaultType!,
      ],
      tsArguments: [
        for (final parameter in typeParameters) parameter.defaultType!,
      ],
    );
    FlaxCodegenFunctionModel operation(
      String member,
      String action,
      List<FlaxCodegenParameterModel> parameters,
      FlaxCodegenTypeRef result, [
      List<FlaxCodegenGenericParameter> generics = const [],
      String? constant,
      List<String> arguments = const [],
      String? operatorName,
    ]) => FlaxCodegenFunctionModel(
      enumOperationId(member, action, constant),
      FlaxCodegenMethodModel(
        '_enum_${name}_${action}_$member${constant == null ? '' : '_$constant'}',
        parameters,
        result,
        typeParameters: generics,
        typeArguments: arguments,
        operatorName: operatorName,
      ),
    );
    // Enum constants have closed types; erased inputs can otherwise turn int
    // into double or List<int> into List<Object?> before Dart checks the call.
    for (final variant in receivers.entries) {
      final arguments = variant.value.dartArguments;
      final substitutions = <Object?, FlaxCodegenTypeRef>{
        for (var index = 0; index < typeParameters.length; index++)
          typeParameters[index].genericIdentity: arguments[index],
      };
      FlaxCodegenTypeRef specialize(FlaxCodegenTypeRef type) =>
          _specializeEnumType(type, substitutions);
      for (final getter in getters) {
        yield operation(
          getter.name,
          'get',
          [receiver(variant.value)],
          specialize(getter.type),
          const [],
          variant.key,
        );
      }
      for (final setter in setters) {
        yield operation(
          setter.name,
          'set',
          [
            receiver(variant.value),
            FlaxCodegenParameterModel(
              name: 'value',
              type: specialize(setter.type),
              required: true,
              positional: true,
              defaultCode: 'null',
            ),
          ],
          const FlaxCodegenTypeRef('void'),
          const [],
          variant.key,
        );
      }
      for (final method in methods.where((method) => method.instance)) {
        yield operation(
          method.name,
          'call',
          [
            receiver(variant.value, method.parameters),
            for (final parameter in method.parameters)
              _specializeEnumParameter(parameter, substitutions),
          ],
          specialize(method.result),
          method.typeParameters,
          variant.key,
          method.typeArguments,
          method.operatorName,
        );
      }
    }
    for (final method in methods.where((method) => !method.instance)) {
      yield operation(
        method.name,
        'call',
        method.parameters,
        method.result,
        method.typeParameters,
        null,
        method.typeArguments,
      );
    }
    for (final constructor in constructors) {
      yield operation(
        constructor.name,
        'factory',
        constructor.parameters,
        broadType,
      );
    }
  }
}

FlaxCodegenParameterModel _specializeEnumParameter(
  FlaxCodegenParameterModel parameter,
  Map<Object?, FlaxCodegenTypeRef> substitutions, [
  FlaxCodegenTypeRef? declaration,
]) => FlaxCodegenParameterModel(
  name: parameter.name,
  type: _specializeEnumType(
    declaration == null
        ? parameter.type
        : parameter.type.declaredAs(declaration),
    substitutions,
  ),
  required: parameter.required,
  positional: parameter.positional,
  defaultCode: parameter.defaultCode,
  omitWhenAbsent: parameter.omitWhenAbsent,
  independentWidgetResult: parameter.independentWidgetResult,
  snapshot: parameter.snapshot,
  encodeKind: parameter.encodeKind,
  scoped: parameter.scoped,
);

FlaxCodegenTypeRef _specializeEnumType(
  FlaxCodegenTypeRef type,
  Map<Object?, FlaxCodegenTypeRef> substitutions,
) {
  final parameter = type.kind == 'parameter' ? type : type.declaration;
  if (parameter?.kind == 'parameter') {
    final replacement = substitutions[parameter!.genericIdentity];
    if (replacement != null) {
      return parameter.nullable ? replacement.asNullable() : replacement;
    }
  }
  FlaxCodegenTypeRef specialize(FlaxCodegenTypeRef type) =>
      _specializeEnumType(type, substitutions);
  final declaration = type.declaration;
  final declaredShape = declaration?.kind == type.kind ? declaration : null;
  FlaxCodegenTypeRef? child(
    FlaxCodegenTypeRef? actual,
    FlaxCodegenTypeRef? declared,
  ) => actual == null
      ? null
      : specialize(declared == null ? actual : actual.declaredAs(declared));
  final arguments = declaration != null && declaration.tsArguments.isNotEmpty
      ? declaration.tsArguments
      : type.tsArguments.isNotEmpty
      ? type.tsArguments
      : type.dartArguments;
  return FlaxCodegenTypeRef(
    type.kind,
    id: type.id,
    name: type.name,
    nullable: type.nullable,
    item: child(type.item, declaredShape?.item),
    key: child(type.key, declaredShape?.key),
    result: child(type.result, declaredShape?.result),
    parameters: [
      for (final (index, parameter) in type.parameters.indexed)
        _specializeEnumParameter(
          parameter,
          substitutions,
          declaredShape?.parameters.length == type.parameters.length
              ? declaredShape!.parameters[index].type
              : null,
        ),
    ],
    typeParameters: [
      for (final parameter in type.typeParameters)
        FlaxCodegenGenericParameter(
          parameter.name,
          specialize(parameter.bound),
          defaultType: parameter.defaultType == null
              ? null
              : specialize(parameter.defaultType!),
          genericIdentity: parameter.genericIdentity,
        ),
    ],
    typeArguments: type.typeArguments,
    dartArguments: [for (final argument in arguments) specialize(argument)],
    tsArguments: [
      for (final argument in type.tsArguments) specialize(argument),
    ],
    declaration: declaration == null ? null : specialize(declaration),
    primitiveKinds: type.primitiveKinds,
    recordFields: [
      for (final (index, field) in type.recordFields.indexed)
        FlaxCodegenRecordFieldModel(
          name: field.name,
          type: child(
            field.type,
            declaredShape?.recordFields.length == type.recordFields.length
                ? declaredShape!.recordFields[index].type
                : null,
          )!,
          positional: field.positional,
        ),
    ],
    genericIdentity: type.genericIdentity,
    originatingUri: type.originatingUri,
    originatingName: type.originatingName,
  );
}

class FlaxCodegenNamedTypeModel {
  const FlaxCodegenNamedTypeModel({
    required this.name,
    required this.id,
    this.enumNames = const [],
    this.enumValueTypes = const {},
    this.typeParameters = const [],
    this.dependencySuperTypes = const [],
  });
  final String name;
  final String id;
  final List<String> enumNames;
  final Map<String, FlaxCodegenTypeRef> enumValueTypes;
  final List<FlaxCodegenGenericParameter> typeParameters;

  /// Parser-only inheritance metadata used to close dependency-only owners.
  ///
  /// This is intentionally not part of the Manifest schema. Once ownership is
  /// resolved, `_freezeModule` copies it onto the generated class model where
  /// the manifest class fields carry the relationship.
  final List<FlaxCodegenTypeRef> dependencySuperTypes;
  bool get isEnum => enumNames.isNotEmpty;
}

/// A public type-only export. Its declaration is provenance, not a wire identity.
class FlaxCodegenTypeAliasModel {
  const FlaxCodegenTypeAliasModel({
    required this.name,
    required this.originatingUri,
    required this.originatingName,
    required this.target,
    this.typeParameters = const [],
  });

  final String name;
  final String originatingUri;
  final String originatingName;
  final FlaxCodegenTypeRef target;
  final List<FlaxCodegenGenericParameter> typeParameters;

  void validate() {
    final identifier = RegExp(r'^[A-Za-z$][A-Za-z0-9_$]*$');
    if (!identifier.hasMatch(name) ||
        !identifier.hasMatch(originatingName) ||
        originatingUri.isEmpty) {
      throw StateError('Invalid typedef declaration: $name');
    }
    for (final parameter in typeParameters) {
      parameter.bound.validate('$name.${parameter.name} bound');
      parameter.defaultType?.validate('$name.${parameter.name} default');
    }
    target.validate(name);
    target.validateCallbacks(name, input: true);
    target.validateCallbacks(name, input: false);
  }
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
    this.extensions = const [],
    this.snapshots = const [],
    this.typedefs = const [],
    this.topLevel,
    this.publicLibraries = const [],
    this.moduleId,
    this.requiredCapabilities = const <String>[
      'instance-checks',
      'native-widget-proxies',
    ],
    this.internalTypeNames = const <String>{},
    this.stateVariants = const [],
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
  final List<FlaxCodegenExtensionModel> extensions;

  Iterable<FlaxCodegenFunctionModel> enumFunctions(
    FlaxCodegenClassModel type,
  ) => type.kind != 'enum'
      ? const []
      : type.enumFunctions(types.singleWhere((named) => named.id == type.id));

  /// All operations that use the existing function binding transport.
  Iterable<FlaxCodegenFunctionModel> get callableFunctions sync* {
    yield* functions;
    for (final type in classes) {
      yield* type.staticFunctions;
      yield* enumFunctions(type);
    }
    for (final setter
        in topLevel?.setters ?? <FlaxCodegenTopLevelSetterModel>[]) {
      yield setter.asFunction();
    }
    for (final extension in extensions) {
      for (final member in extension.members) {
        yield FlaxCodegenFunctionModel(member.id, member.call);
      }
    }
  }

  final List<FlaxCodegenSnapshotModel> snapshots;
  final List<FlaxCodegenTypeAliasModel> typedefs;
  final FlaxCodegenTopLevelModel? topLevel;
  final List<FlaxCodegenLibraryModel> publicLibraries;

  Iterable<FlaxCodegenFunctionModel> get ownedFunctions sync* {
    yield* functions;
    for (final type in classes) {
      yield* type.staticFunctions;
      yield* enumFunctions(type);
    }
    for (final setter
        in topLevel?.setters ?? <FlaxCodegenTopLevelSetterModel>[]) {
      if (!setter.isReference) yield setter.asFunction();
    }
    for (final extension in extensions.where((e) => !e.isReference)) {
      for (final member in extension.members) {
        yield FlaxCodegenFunctionModel(member.id, member.call);
      }
    }
  }

  /// Manifest `moduleId` (`bindingNamespace/name`). Null until freeze stamps
  /// it; the emitter then infers from wireIds or a test fallback.
  final String? moduleId;

  /// Sorted unique capability literals. Protocol 21 is empty.
  final List<String> requiredCapabilities;

  /// Generator-only visibility for dependency-owned nominal types.
  ///
  /// This is intentionally not part of the Manifest schema. These types still
  /// have runtime owners, but aggregate TypeScript output keeps their nominal
  /// declarations private to the generated module.
  final Set<String> internalTypeNames;
  final List<FlaxCodegenStateVariantModel> stateVariants;

  void validate() {
    final names = <String>{
      ...classes.map((c) => c.name),
      ...types.map((t) => t.name),
    };
    for (final type in types) {
      if (type.enumNames.toSet().length != type.enumNames.length ||
          type.enumValueTypes.length != type.enumNames.length ||
          !type.enumValueTypes.keys.toSet().containsAll(type.enumNames)) {
        throw StateError('Invalid enum constants: ${type.name}');
      }
      for (final constant in type.enumValueTypes.entries) {
        final value = constant.value;
        if (value.kind != 'enum' || value.id != type.id || value.nullable) {
          throw StateError(
            'Invalid enum constant type: ${type.name}.${constant.key}',
          );
        }
        value.validate('${type.name}.${constant.key}');
      }
    }
    final variantNames = <String>{};
    final variantIds = <String>{};
    for (final variant in stateVariants) {
      if (!flaxCodegenIsExportName(variant.name) ||
          !variantNames.add(variant.name) ||
          variant.id.isEmpty ||
          !variantIds.add(variant.id) ||
          variant.stateId.isEmpty ||
          (variant.stateWireId?.isEmpty ?? false) ||
          variant.mixins.isEmpty ||
          variant.mixins.map((m) => m.id).toSet().length !=
              variant.mixins.length) {
        throw StateError('Invalid State proxy variant: ${variant.name}');
      }
      for (final interface in variant.interfaces) {
        if (!flaxCodegenIsExportName(interface.name) ||
            interface.id.isEmpty ||
            interface.library.isEmpty ||
            (interface.wireId?.isEmpty ?? false)) {
          throw StateError('Invalid State variant interface: ${variant.name}');
        }
      }
      if (!variant.superMethods.toSet().containsAll(
        variant.mustCallSuperMethods,
      )) {
        throw StateError(
          'Invalid State variant super requirements: ${variant.name}',
        );
      }
      for (final getter in [...variant.getters, ...variant.setters]) {
        getter.type.validate('${variant.name}.${getter.name}');
      }
      for (final method in variant.methods) {
        method.result.validate('${variant.name}.${method.name} result');
        for (final parameter in method.parameters) {
          parameter.type.validate(
            '${variant.name}.${method.name}.${parameter.name}',
          );
        }
      }
    }
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
    final aliasNames = <String>{
      ...names,
      ...snapshots.map((snapshot) => snapshot.name),
      for (final type in classes) ...[?type.jsName],
      '${name}BindingModule',
      // Type names imported by the TypeScript emitter, and intrinsic types
      // that cannot be redeclared by a public alias.
      'NavigationData', 'DartIterable', 'DartIterableInput', 'DartList',
      'DartListInput', 'DartMap', 'DartMapInput', 'DartSet', 'DartSetInput',
      'DartInput',
      'FlaxStreamReference', 'Bindable', 'DartValue', 'DartEnum', 'Widget',
      'WidgetDescription', 'ComponentContext', 'any', 'unknown', 'never',
      'number', 'string', 'boolean', 'symbol', 'bigint', 'object', 'undefined',
      'Promise', 'AsyncIterable', 'NonNullable',
    };
    const reservedValueExports = {
      'Array',
      'Object',
      'globalThis',
      'TypeError',
      'bindingVersion',
      'construct',
      'constructProxy',
      'constructObject',
      'constructDeferredObject',
      'constructStream',
      'constructAsyncIterableStream',
      'defineObject',
      'defineStream',
      'invokeObject',
      'invokeObjectStatic',
      'invokeStream',
      'enumValue',
      'defineEnum',
      'invokeEnum',
      'defineContext',
      'defineState',
      'contextHandle',
      'invokeStatic',
      'invokeInstance',
      'invokeTopLevel',
    };
    for (final extension in extensions) {
      if (!aliasNames.add(extension.name) ||
          !flaxCodegenIsExportName(extension.name) ||
          reservedValueExports.contains(extension.name) ||
          RegExp(r'^upstream[0-9]+$').hasMatch(extension.name)) {
        throw StateError('Conflicting extension export: ${extension.name}');
      }
      extension.validate();
    }
    if (topLevel case final values?) {
      values.validate();
      for (final export
          in values.jsName.isEmpty
              ? [
                  ...values.getters.map((getter) => getter.exportName),
                  ...values.setters.map((setter) => setter.exportName),
                ]
              : [values.jsName]) {
        if (!aliasNames.add(export) ||
            RegExp(r'^upstream[0-9]+$').hasMatch(export) ||
            reservedValueExports.contains(export)) {
          throw StateError('Conflicting top-level export: $export');
        }
      }
    }
    for (final alias in typedefs) {
      alias.validate();
      for (final name in [alias.name, '${alias.name}Input']) {
        if (!aliasNames.add(name)) {
          throw StateError('Conflicting typedef export: $name');
        }
      }
    }
    final selected = <String>{
      ...classes.map((type) => type.name),
      ...types.map((type) => type.name),
      ...functions.map((function) => function.call.name),
      ...extensions.map((extension) => extension.name),
      ...snapshots.map((snapshot) => snapshot.name),
      ...typedefs.map((alias) => alias.name),
      ...?topLevel?.getters.map((getter) => getter.name),
      ...?topLevel?.setters.map((setter) => setter.name),
    };
    final specifiers = <String>{};
    final libraries = <String>{};
    for (final route in publicLibraries) {
      if (!flaxCodegenIsModuleSpecifier(route.jsPackage) ||
          !specifiers.add(route.jsPackage) ||
          !libraries.add(route.library) ||
          route.exports.toSet().length != route.exports.length ||
          !selected.containsAll(route.exports)) {
        throw StateError('Invalid public library: ${route.library}');
      }
    }
    if (publicLibraries.isNotEmpty && topLevel?.jsName.isNotEmpty == true) {
      throw StateError('Public libraries require named top-level exports');
    }
    for (final type in classes) {
      final category = type.category;
      if (category == FlaxCodegenClassCategory.enumeration &&
          (types.where((value) => value.id == type.id && value.isEnum).length !=
                  1 ||
              type.proxy != null ||
              type.jsName != null ||
              type.listenerPairs.isNotEmpty ||
              type.disposeMethod != null)) {
        throw StateError('Invalid enum binding model: ${type.name}');
      }
      if (category == FlaxCodegenClassCategory.enumeration &&
          types
              .singleWhere((named) => named.id == type.id)
              .enumValueTypes
              .values
              .any(
                (constant) =>
                    constant.tsArguments.length != type.typeParameters.length,
              )) {
        throw StateError('Invalid closed enum type arguments: ${type.name}');
      }
      if (type.asyncIterableFactory != null &&
          (category != FlaxCodegenClassCategory.stream ||
              type.typeParameters.length != 1 ||
              !RegExp(r'^[A-Za-z_$][A-Za-z0-9_$]*$')
                  .hasMatch(type.asyncIterableFactory!))) {
        throw StateError(
          'AsyncIterable factories require a single-parameter Stream type: ${type.name}',
        );
      }
      if (type.proxy != null &&
          !{'extends', 'implements'}.contains(type.proxy!.kind)) {
        throw StateError(
          'Invalid proxy kind: ${type.name}.${type.proxy!.kind}',
        );
      }
      if (type.widgetMembers.isNotEmpty) {
        if (!{
          FlaxCodegenClassCategory.widget,
          FlaxCodegenClassCategory.widgetInterface,
        }.contains(category)) {
          throw StateError(
            'Native Widget members require a Widget contract: ${type.name}',
          );
        }
        final keys = <String>{};
        for (final member in type.widgetMembers) {
          if (!{'getter', 'setter', 'method'}.contains(member.kind) ||
              member.name.isEmpty ||
              member.name.startsWith('_') ||
              member.parameters.toSet().length != member.parameters.length ||
              !keys.add('${member.kind}:${member.name}')) {
            throw StateError(
              'Invalid or duplicate native Widget member: ${type.name}.${member.name}',
            );
          }
        }
      }
      if (type.widgetInterfaces.isNotEmpty &&
          category != FlaxCodegenClassCategory.widget) {
        throw StateError('Widget interfaces require a Widget: ${type.name}');
      }
      if (category == FlaxCodegenClassCategory.widgetInterface &&
          (type.constructors.isNotEmpty ||
              type.methods.isNotEmpty ||
              type.setters.isNotEmpty ||
              type.typeParameters.isNotEmpty ||
              type.proxy != null)) {
        throw StateError(
          'Widget interfaces require native members: ${type.name}',
        );
      }
      if ((category != FlaxCodegenClassCategory.object &&
              category != FlaxCodegenClassCategory.stream &&
              type.disposeMethod != null) ||
          (category != FlaxCodegenClassCategory.object &&
              category != FlaxCodegenClassCategory.enumeration &&
              category != FlaxCodegenClassCategory.stream &&
              (type.setters.isNotEmpty || type.listenerPairs.isNotEmpty))) {
        throw StateError('Invalid object binding model: ${type.name}');
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
        if (category == FlaxCodegenClassCategory.enumeration &&
            !flaxCodegenIsExportName(constructor.name)) {
          throw StateError(
            'Expected a named public enum factory: ${type.name}.${constructor.name}',
          );
        }
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
                  !parameter.type.result!.isDirectMountedWidgetResult)) {
            throw StateError(
              'Invalid independent Widget callback: ${type.name}.${constructor.name}.${parameter.name}',
            );
          }
        }
      }
      final staticNames = <String>{
        ...type.methods.map((method) => method.name),
        ...type.constructors
            .map((constructor) => constructor.name)
            .where((name) => name.isNotEmpty),
        if (type.proxy != null) 'implementation',
        if (type.proxy != null) 'extend',
        if (type.asyncIterableFactory != null) type.asyncIterableFactory!,
        if (category == FlaxCodegenClassCategory.enumeration) ...[
          'values',
          ...types.singleWhere((value) => value.id == type.id).enumNames,
        ],
      };
      final staticWrites = <String>{};
      for (final getter in type.staticGetters) {
        if (!flaxCodegenIsExportName(getter.name) ||
            !staticNames.add(getter.name)) {
          throw StateError(
            'Invalid or conflicting static getter: ${type.name}.${getter.name}',
          );
        }
      }
      for (final setter in type.staticSetters) {
        if (!flaxCodegenIsExportName(setter.name) ||
            !staticWrites.add(setter.name)) {
          throw StateError(
            'Invalid or duplicate static setter: ${type.name}.${setter.name}',
          );
        }
        final exported =
            'set${setter.name[0].toUpperCase()}${setter.name.substring(1)}';
        if (!staticNames.add(exported)) {
          throw StateError(
            'Conflicting static setter export: ${type.name}.$exported',
          );
        }
      }
      for (final getter in [
        ...type.getters,
        ...type.setters,
        ...type.staticGetters,
        ...type.staticSetters,
      ]) {
        if (getter.cache &&
            (category != FlaxCodegenClassCategory.enumeration ||
                !type.getters.contains(getter) ||
                type.setters.any((setter) => setter.name == getter.name) ||
                !{
                  'String',
                  'bool',
                  'int',
                  'double',
                  'num',
                }.contains(getter.type.kind))) {
          throw StateError(
            'Invalid enum field cache: ${type.name}.${getter.name}',
          );
        }
        getter.type.validate('${type.name}.${getter.name}');
        if (type.setters.contains(getter) ||
            type.staticSetters.contains(getter)) {
          getter.type.validateCallbacks(
            '${type.name}.${getter.name}',
            input: true,
          );
        } else {
          getter.type.validateResult('${type.name}.${getter.name}');
        }
      }
      if (type.proxy case final proxy?) {
        final names = <String>{};
        for (final method in proxy.methods) {
          if (!names.add(method.name) ||
              proxy.getters.any((getter) => getter.name == method.name) ||
              proxy.setters.any((setter) => setter.name == method.name)) {
            throw StateError(
              'Conflicting proxy member: ${type.name}.${method.name}',
            );
          }
        }
        if (proxy.getters.any((getter) => getter.name == 'runtimeType')) {
          throw StateError(
            'Proxy runtimeType must remain native: ${type.name}',
          );
        }
      }
      if (type.proxy?.methods.any((method) => method.operatorName == '==') ==
              true &&
          !type.proxy!.getters.any((getter) => getter.name == 'hashCode')) {
        throw StateError('Proxy equality requires hashCode: ${type.name}');
      }
      for (final method in [...type.methods, ...?type.proxy?.methods]) {
        if (method.operatorName case final operator?) {
          final arity = {'unary-', '~'}.contains(operator)
              ? 0
              : operator == '[]='
              ? 2
              : 1;
          if (!{'object', 'enum'}.contains(type.kind) ||
              !method.instance ||
              flaxCodegenClassOperators[operator] != method.name ||
              method.parameters.length != arity ||
              method.parameters.any((p) => !p.positional || !p.required) ||
              method.typeParameters.isNotEmpty ||
              method.typeArguments.isNotEmpty ||
              method.startsRoute ||
              method.deferredFactory ||
              operator == '[]=' && method.result.kind != 'void' ||
              operator == '==' &&
                  (method.result.kind != 'bool' || method.result.nullable)) {
            throw StateError(
              'Invalid class operator: ${type.name}.${method.name}',
            );
          }
        }

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
      if (type.proxy case final proxy?) {
        for (final (name, callback) in proxy.callbacks) {
          callback.validate('${type.name}.$name');
          final nativeStateFactory =
              type.kind == 'widget' &&
              proxy.kind == 'extends' &&
              name == 'call:createState' &&
              callback.parameters.isEmpty &&
              callback.result?.kind == 'state' &&
              callback.result?.nullable == false;
          if (!nativeStateFactory) {
            callback.validateCallbacks('${type.name}.$name', input: true);
          }
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

/// Selected top-level accessors. Empty jsName uses named module exports.
class FlaxCodegenTopLevelModel {
  const FlaxCodegenTopLevelModel(
    this.jsName,
    this.getters, {
    this.setters = const [],
  });

  final String jsName;
  final List<FlaxCodegenTopLevelGetterModel> getters;
  final List<FlaxCodegenTopLevelSetterModel> setters;

  void validate() {
    if ((jsName.isNotEmpty && !flaxCodegenIsExportName(jsName)) ||
        (getters.isEmpty && setters.isEmpty)) {
      throw StateError('Invalid top-level namespace: $jsName');
    }
    final names = <String>{};
    for (final getter in getters) {
      final location = '$jsName.${getter.name}';
      if (!RegExp(r'^[A-Za-z$][A-Za-z0-9_$]*$').hasMatch(getter.name) ||
          !names.add(getter.name)) {
        throw StateError(
          'Invalid or duplicate readonly declaration: $location',
        );
      }
      getter.type.validate(location);
      getter.type.validateResult(location);
      if (getter.literal case final literal?) {
        Object? value;
        try {
          value = jsonDecode(literal);
        } on FormatException {
          throw StateError('Invalid constant literal: $location');
        }
        final base = getter.type.kind;
        final valid = value == null
            ? getter.type.nullable
            : value is bool
            ? base == 'bool'
            : value is String
            ? base == 'String'
            : value is num &&
                  value.isFinite &&
                  {'num', 'int', 'double'}.contains(base) &&
                  (base != 'int' || value is int) &&
                  (value is! int || value.abs() <= 9007199254740991);
        if (getter.kind != FlaxCodegenReadonlyKind.constant || !valid) {
          throw StateError('Invalid constant literal type: $location');
        }
      }
      _validateTopLevelOwnership(getter.type, location, input: false);
    }
    final setterNames = <String>{};
    final exportedNames = <String>{
      for (final getter in getters)
        jsName.isEmpty ? getter.exportName : getter.name,
    };
    for (final setter in setters) {
      final location = '$jsName.${setter.name}';
      if (!RegExp(r'^[A-Za-z$][A-Za-z0-9_$]*$').hasMatch(setter.name) ||
          !setterNames.add(setter.name)) {
        throw StateError('Invalid or duplicate top-level setter: $location');
      }
      if (!exportedNames.add(setter.exportName)) {
        throw StateError('Conflicting top-level export: ${setter.exportName}');
      }
      setter.type.validate(location);
      setter.type.validateCallbacks(location, input: true);
      _validateTopLevelOwnership(setter.type, location, input: true);
    }
  }
}

void _validateTopLevelOwnership(
  FlaxCodegenTypeRef type,
  String location, {
  required bool input,
}) {
  if ({'widget', 'state', 'route', 'page'}.contains(type.kind) ||
      (type.kind == 'context' && !input)) {
    throw StateError(
      'Unsupported top-level ownership at $location: ${type.kind}',
    );
  }
  if (type.item case final item?) {
    _validateTopLevelOwnership(item, location, input: input);
  }
  if (type.key case final key?) {
    _validateTopLevelOwnership(key, location, input: input);
  }
  if (type.result case final result?) {
    // Callbacks borrow Contexts in either direction, including nested results.
    _validateTopLevelOwnership(
      result,
      location,
      input: type.kind == 'callback' || input,
    );
  }
  for (final parameter in type.parameters) {
    _validateTopLevelOwnership(
      parameter.type,
      location,
      input: type.kind == 'callback' || input,
    );
  }
  for (final field in type.recordFields) {
    _validateTopLevelOwnership(field.type, location, input: input);
  }
  if (type.declaration case final declaration?) {
    _validateTopLevelOwnership(declaration, location, input: input);
  }
  for (final argument in [...type.dartArguments, ...type.tsArguments]) {
    _validateTopLevelOwnership(argument, location, input: input);
  }
  for (final parameter in type.typeParameters) {
    _validateTopLevelOwnership(parameter.bound, location, input: input);
    if (parameter.defaultType case final defaultType?) {
      _validateTopLevelOwnership(defaultType, location, input: input);
    }
  }
}

enum FlaxCodegenReadonlyKind {
  constant,
  finalValue,
  lateFinal,
  getter,
  mutableValue,
}

class FlaxCodegenTopLevelSetterModel {
  const FlaxCodegenTopLevelSetterModel(
    this.id,
    this.name,
    this.type, {
    this.isReference = false,
  });
  final String id;
  final String name;
  final FlaxCodegenTypeRef type;
  final bool isReference;

  String get exportName => 'set${name[0].toUpperCase()}${name.substring(1)}';

  FlaxCodegenFunctionModel asFunction() => FlaxCodegenFunctionModel(
    id,
    FlaxCodegenMethodModel(exportName, [
      FlaxCodegenParameterModel(
        name: 'value',
        type: type,
        required: true,
        positional: true,
        defaultCode: 'null',
      ),
    ], const FlaxCodegenTypeRef('void')),
  );
}

class FlaxCodegenTopLevelGetterModel {
  const FlaxCodegenTopLevelGetterModel(
    this.id,
    this.name,
    this.type,
    this.kind, {
    this.isReference = false,
    this.literal,
  });

  final String id;
  final String name;
  final FlaxCodegenTypeRef type;
  final FlaxCodegenReadonlyKind kind;

  /// Reuses the authoritative provider's public namespace without registration.
  final bool isReference;
  final String? literal;

  String get exportName => literal != null
      ? name
      : 'get${name[0].toUpperCase()}${name.substring(1)}';
}

/// One explicit public library surface; declaration identities stay on the module.
class FlaxCodegenLibraryModel {
  const FlaxCodegenLibraryModel({
    required this.library,
    required this.jsPackage,
    required this.exports,
    this.tsOutput = '',
  });

  final String library;
  final String jsPackage;
  final List<String> exports;
  final String tsOutput;
}

bool flaxCodegenIsModuleSpecifier(String value) =>
    RegExp(
      r'^(?:@[a-z0-9][a-z0-9._-]*/)?[a-z0-9][a-z0-9._-]*(?:/[A-Za-z0-9_$][A-Za-z0-9._$-]*)*$',
    ).hasMatch(value) &&
    !value.split('/').any((part) => part == '.' || part == '..');

bool flaxCodegenIsExportName(String name) =>
    RegExp(r'^[A-Za-z$][A-Za-z0-9_$]*$').hasMatch(name) &&
    !const {
      'arguments',
      'eval',
      'await',
      'break',
      'case',
      'catch',
      'class',
      'const',
      'continue',
      'debugger',
      'default',
      'delete',
      'do',
      'else',
      'enum',
      'export',
      'extends',
      'false',
      'finally',
      'for',
      'function',
      'if',
      'implements',
      'import',
      'in',
      'instanceof',
      'interface',
      'let',
      'new',
      'null',
      'package',
      'private',
      'protected',
      'public',
      'return',
      'static',
      'super',
      'switch',
      'this',
      'throw',
      'true',
      'try',
      'typeof',
      'var',
      'void',
      'while',
      'with',
      'yield',
    }.contains(name);

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

  bool hasSuperMethod(String name) => superMethods.contains(name);

  bool hasSuperGetter(String name) => superMethods.contains('get:$name');

  bool hasSuperSetter(String name) => superMethods.contains('set:$name');

  bool hasSuperCallback(String name) {
    if (name.startsWith('call:')) {
      return hasSuperMethod(name.substring(5));
    }
    if (name.startsWith('get:')) {
      return hasSuperGetter(name.substring(4));
    }
    if (name.startsWith('set:')) {
      return hasSuperSetter(name.substring(4));
    }
    return false;
  }

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

/// A JS receiver view, never a Dart object or a session-owned reference.
class FlaxCodegenExtensionModel {
  const FlaxCodegenExtensionModel({
    required this.name,
    required this.originatingUri,
    required this.onType,
    this.isReference = false,
    this.typeParameters = const [],
    required this.members,
  });
  final String name;
  final String originatingUri;
  final FlaxCodegenTypeRef onType;
  final bool isReference;
  final List<FlaxCodegenGenericParameter> typeParameters;
  final List<FlaxCodegenExtensionMemberModel> members;

  void validate() {
    if (!flaxCodegenIsExportName(name) ||
        name.startsWith('_') ||
        originatingUri.isEmpty ||
        members.isEmpty) {
      throw StateError('Expected a public named extension: $name');
    }
    onType.validate('$name receiver');
    final names = <String>{};
    final ids = <String>{};
    for (final member in members) {
      if (!names.add('${member.isStatic}:${member.exportName}') ||
          !ids.add(member.id) ||
          !flaxCodegenIsExportName(member.exportName)) {
        throw StateError(
          'Conflicting extension member: $name.${member.call.name}',
        );
      }
      if (!{
        'getter',
        'setter',
        'method',
        'operator',
        'staticGetter',
        'staticMethod',
      }.contains(member.kind)) {
        throw StateError('Invalid extension member kind: ${member.kind}');
      }
      final call = member.call;
      final expectedName = switch (member.kind) {
        'getter' || 'staticGetter' =>
          member.name.isEmpty
              ? ''
              : 'get${member.name[0].toUpperCase()}${member.name.substring(1)}',
        'setter' =>
          member.name.isEmpty
              ? ''
              : 'set${member.name[0].toUpperCase()}${member.name.substring(1)}',
        'operator' => flaxCodegenExtensionOperators[member.name],
        _ => member.name,
      };
      final args = member.isStatic
          ? call.parameters
          : call.parameters.skip(1).toList();
      final arity = switch (member.kind) {
        'getter' || 'staticGetter' => 0,
        'setter' => 1,
        'operator' => switch (member.name) {
          'unary-' || '~' => 0,
          '[]=' => 2,
          _ => 1,
        },
        _ => null,
      };
      if (call.name != expectedName ||
          member.id.isEmpty ||
          member.name.isEmpty ||
          member.name.startsWith('_') ||
          call.instance ||
          call.startsRoute ||
          call.deferredFactory ||
          call.mustCallSuper ||
          call.typeArguments.isNotEmpty ||
          (!member.isStatic &&
              (call.parameters.isEmpty ||
                  !call.parameters.first.positional ||
                  !call.parameters.first.required)) ||
          (arity != null && args.length != arity) ||
          (member.kind == 'setter' && call.result.kind != 'void') ||
          (!member.isStatic &&
              {
                '==',
                'hashCode',
                'runtimeType',
                'toString',
                'noSuchMethod',
              }.contains(member.name))) {
        throw StateError('Invalid extension operation: $name.${member.name}');
      }
      call.result.validate('$name.${call.name}');
      call.result.validateResult('$name.${call.name}');
      for (final p in call.parameters) {
        p.type.validate('$name.${call.name}.${p.name}');
        p.type.validateCallbacks('$name.${call.name}.${p.name}', input: true);
        if (p.type.requiresRouteOwner) {
          throw StateError(
            'Callbacks returning Routes require explicit ownership: '
            '$name.${call.name}.${p.name}',
          );
        }
      }
    }
  }
}

class FlaxCodegenExtensionMemberModel {
  const FlaxCodegenExtensionMemberModel({
    required this.id,
    required this.name,
    required this.kind,
    required this.call,
  });
  final String id;
  final String name;
  final String kind;
  final FlaxCodegenMethodModel call;
  bool get isStatic => kind == 'staticGetter' || kind == 'staticMethod';
  String get exportName =>
      kind == 'getter' || kind == 'staticGetter' ? name : call.name;
}

const flaxCodegenExtensionOperators = <String, String>{
  '[]': 'getIndex',
  '[]=': 'setIndex',
  '+': 'add',
  '-': 'subtract',
  '*': 'multiply',
  '/': 'divide',
  '~/': 'truncateDivide',
  '%': 'modulo',
  '<': 'lessThan',
  '>': 'greaterThan',
  '<=': 'lessThanOrEqual',
  '>=': 'greaterThanOrEqual',
  '&': 'bitAnd',
  '|': 'bitOr',
  '^': 'bitXor',
  '<<': 'shiftLeft',
  '>>': 'shiftRight',
  '>>>': 'unsignedShiftRight',
  '~': 'bitNot',
  'unary-': 'negate',
};

/// Class operators have distinct JS names, without changing JS language operators.
const flaxCodegenClassOperators = <String, String>{
  '[]': 'operatorGetIndex',
  '[]=': 'operatorSetIndex',
  '+': 'operatorAdd',
  '-': 'operatorSubtract',
  '*': 'operatorMultiply',
  '/': 'operatorDivide',
  '~/': 'operatorTruncateDivide',
  '%': 'operatorModulo',
  '<': 'operatorLessThan',
  '>': 'operatorGreaterThan',
  '<=': 'operatorLessThanOrEqual',
  '>=': 'operatorGreaterThanOrEqual',
  '&': 'operatorBitAnd',
  '|': 'operatorBitOr',
  '^': 'operatorBitXor',
  '<<': 'operatorShiftLeft',
  '>>': 'operatorShiftRight',
  '>>>': 'operatorUnsignedShiftRight',
  '~': 'operatorBitNot',
  'unary-': 'operatorNegate',
  '==': 'operatorEquals',
};
