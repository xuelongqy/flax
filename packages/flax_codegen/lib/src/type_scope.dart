part of 'parser.dart';

/// Type conversion for one [parse] or [FlaxCodegenBindingParser.proposeSelection].
final class _FlaxCodegenTypeScope {
  _FlaxCodegenTypeScope({
    required this.parser,
    required this.config,
    required this.exports,
    required this.publicLibraries,
    required this.automaticTypeCarriers,
    required this.objectQuestionType,
  });

  final FlaxCodegenBindingParser parser;
  final FlaxCodegenBindingConfig config;
  final Map<String, Element> exports;
  final Map<String, String> publicLibraries;
  final Map<String, String> automaticTypeCarriers;
  // Substituted function type parameters can have no enclosing library.
  final InterfaceType objectQuestionType;

  final types = <String, FlaxCodegenNamedTypeModel>{};
  final extensionTypeDeclarations = <String, ({String name, String library})>{};
  final _callbackIdentities = Map<TypeParameterElement, Object>.identity();
  var usesWidget = false;
  var usesFutureOr = false;
  var usesStream = false;

  ({FlaxCodegenTypeRef? type, String? skip}) tryTypeRef(
    DartType type, {
    bool scalar = false,
    bool forTypescript = false,
    Set<TypeParameterElement>? erasing,
    bool allowRecursiveErasure = false,
    bool typeOnlyPosition = false,
  }) {
    try {
      return (
        type: typeRef(
          type,
          scalar: scalar,
          forTypescript: forTypescript,
          typeOnlyPosition: typeOnlyPosition,
          erasing: erasing,
          allowRecursiveErasure: allowRecursiveErasure,
        ),
        skip: null,
      );
    } on StateError catch (error) {
      return (type: null, skip: error.message);
    }
  }

  FlaxCodegenTypeRef typeOnlyReference(InterfaceType type) {
    final element = type.element;
    final name = element.name!;
    final nullable = type.nullabilitySuffix == NullabilitySuffix.question;
    return FlaxCodegenTypeRef(
      'typeOnly',
      name: name,
      nullable: nullable,
      originatingUri: element.library.uri.toString(),
      originatingName: name,
      // Primitive wrappers cannot carry phantom TS members. Keep the same
      // primitive projection used by ordinary nominal references; Dart's
      // specialization check remains authoritative for generic arguments.
      primitiveKinds: [
        for (final entry in {
          'String': element.library.typeProvider.stringType,
          'bool': element.library.typeProvider.boolType,
          'int': element.library.typeProvider.intType,
          'double': element.library.typeProvider.doubleType,
          'num': element.library.typeProvider.numType,
        }.entries)
          if (element.library.typeSystem.isSubtypeOf(entry.value, type) ||
              (type.typeArguments.any((t) => t is TypeParameterType) &&
                  entry.value.allSupertypes.any(
                    (parent) => parent.element == element,
                  )))
            entry.key,
      ],
      tsArguments: [
        for (final argument in type.typeArguments)
          typeRef(argument, forTypescript: true, typeOnlyPosition: true),
      ],
    );
  }

  FlaxCodegenTypeRef typeRef(
    DartType type, {
    bool scalar = false,
    bool forTypescript = false,
    Set<TypeParameterElement>? erasing,
    bool allowRecursiveErasure = false,
    bool typeOnlyPosition = false,
  }) {
    bool containsErasedParameter(DartType value) {
      if (value is TypeParameterType) {
        return erasing?.contains(value.element) ?? false;
      }
      if (value is InterfaceType) {
        return value.typeArguments.any(containsErasedParameter);
      }
      if (value is FunctionType) {
        return containsErasedParameter(value.returnType) ||
            value.formalParameters.any(
              (parameter) => containsErasedParameter(parameter.type),
            );
      }
      if (value is RecordType) {
        return value.positionalFields.any(
              (field) => containsErasedParameter(field.type),
            ) ||
            value.namedFields.any(
              (field) => containsErasedParameter(field.type),
            );
      }
      return false;
    }

    final nullable = type.nullabilitySuffix == NullabilitySuffix.question;
    if (type is TypeParameterType && forTypescript) {
      return FlaxCodegenTypeRef(
        'parameter',
        name: type.element.name,
        nullable: nullable,
        genericIdentity: _callbackIdentities[type.element] ?? type.element,
      );
    }
    if (type is TypeParameterType && scalar) {
      return FlaxCodegenTypeRef('scalar', nullable: nullable);
    }
    if (type is TypeParameterType) {
      final path = erasing ?? <TypeParameterElement>{};
      if (!path.add(type.element)) {
        if (allowRecursiveErasure) {
          return const FlaxCodegenTypeRef('any', nullable: true);
        }
        throw StateError('Recursive generic callback bound: $type');
      }
      try {
        final bound = type.element.bound ?? objectQuestionType;
        final erased = typeRef(
          bound,
          scalar: scalar,
          erasing: path,
          allowRecursiveErasure: allowRecursiveErasure,
        );
        return (nullable ? erased.asNullable() : erased).declaredAs(
          typeRef(type, forTypescript: true),
        );
      } finally {
        path.remove(type.element);
      }
    }
    if (type is DynamicType) {
      return const FlaxCodegenTypeRef('any', nullable: true);
    }
    if (type is VoidType) return const FlaxCodegenTypeRef('void');
    if (type is FunctionType) {
      // The declaration view introduces a separate callback scope. Runtime
      // binders retain analyzer identity for parameters shared with proxy methods.
      final previous = {
        if (forTypescript)
          for (final parameter in type.typeParameters)
            parameter: _callbackIdentities[parameter],
      };
      for (final parameter in previous.keys) {
        _callbackIdentities[parameter] = Object();
      }
      try {
        final typeParameters = [
          for (final parameter in type.typeParameters)
            FlaxCodegenGenericParameter(
              parameter.name!,
              typeRef(
                parameter.bound ?? objectQuestionType,
                forTypescript: true,
                typeOnlyPosition: true,
              ),
              defaultType: typeRef(
                parameter.bound ?? objectQuestionType,
                forTypescript: forTypescript,
                typeOnlyPosition: forTypescript,
                erasing: forTypescript ? null : {parameter},
              ),
              genericIdentity: _callbackIdentities[parameter] ?? parameter,
            ),
        ];
        final parameters = [
          for (final (index, p) in type.formalParameters.indexed)
            FlaxCodegenParameterModel(
              name: p.name ?? 'p$index',
              type: forTypescript
                  ? typeRef(
                      p.type,
                      forTypescript: true,
                      typeOnlyPosition: typeOnlyPosition,
                    )
                  : typeRef(
                      p.type,
                      allowRecursiveErasure: allowRecursiveErasure,
                    ).declaredAs(
                      typeRef(
                        p.type,
                        forTypescript: true,
                        typeOnlyPosition: typeOnlyPosition,
                      ),
                    ),
              required: p.isRequired,
              positional: p.isPositional,
              defaultCode: 'null',
              snapshot: p.type is InterfaceType
                  ? parser._snapshotFor((p.type as InterfaceType).element)?.name
                  : null,
            ),
        ];
        final result = forTypescript
            ? typeRef(
                type.returnType,
                forTypescript: true,
                typeOnlyPosition: typeOnlyPosition,
              )
            : typeRef(
                type.returnType,
                allowRecursiveErasure: allowRecursiveErasure,
              ).declaredAs(
                typeRef(
                  type.returnType,
                  forTypescript: true,
                  typeOnlyPosition: typeOnlyPosition,
                ),
              );
        const incoming = {
          'callback',
          'String',
          'bool',
          'int',
          'double',
          'num',
          'enum',
          'context',
          'widget',
          'object',
          'page',
          'data',
          'any',
          'iterable',
          'list',
          'map',
          'set',
          'future',
          'futureOr',
          'stream',
          'record',
        };
        const outgoing = {
          'callback',
          'String',
          'bool',
          'int',
          'double',
          'num',
          'enum',
          'widget',
          'route',
          'object',
          'data',
          'any',
          'iterable',
          'list',
          'map',
          'set',
          'void',
          'future',
          'futureOr',
          'stream',
          'record',
        };
        if (!forTypescript &&
            (parameters.any((p) => !incoming.contains(p.type.kind)) ||
                !outgoing.contains(result.kind))) {
          throw StateError('Unsupported callback signature: $type');
        }
        return FlaxCodegenTypeRef(
          'callback',
          nullable: nullable,
          parameters: parameters,
          result: result,
          typeParameters: typeParameters,
        );
      } finally {
        for (final entry in previous.entries) {
          if (entry.value case final identity?) {
            _callbackIdentities[entry.key] = identity;
          } else {
            _callbackIdentities.remove(entry.key);
          }
        }
      }
    }
    if (type is RecordType) {
      if (!allowRecursiveErasure &&
          erasing != null &&
          containsErasedParameter(type)) {
        throw StateError('Recursive generic callback bound: $type');
      }
      final named = type.namedFields.toList()
        ..sort((a, b) => a.name.compareTo(b.name));
      return FlaxCodegenTypeRef(
        'record',
        nullable: nullable,
        recordFields: [
          for (final (index, field) in type.positionalFields.indexed)
            FlaxCodegenRecordFieldModel(
              name: '\$${index + 1}',
              type: typeRef(
                field.type,
                scalar: scalar,
                forTypescript: forTypescript,
                typeOnlyPosition: typeOnlyPosition,
                erasing: erasing,
                allowRecursiveErasure: allowRecursiveErasure,
              ),
              positional: true,
            ),
          for (final field in named)
            FlaxCodegenRecordFieldModel(
              name: field.name,
              type: typeRef(
                field.type,
                scalar: scalar,
                forTypescript: forTypescript,
                typeOnlyPosition: typeOnlyPosition,
                erasing: erasing,
                allowRecursiveErasure: allowRecursiveErasure,
              ),
              positional: false,
            ),
        ],
      );
    }
    if (type is! InterfaceType) {
      throw StateError('Unsupported binding type: $type');
    }
    if (!allowRecursiveErasure &&
        erasing != null &&
        type.typeArguments.any(containsErasedParameter)) {
      if (typeRef(
        type,
        forTypescript: true,
        typeOnlyPosition: true,
      ).containsTypeOnly) {
        throw StateError(
          'Concrete runtime specialization required for type-only bound: $type',
        );
      }
      throw StateError('Recursive generic callback bound: $type');
    }
    final element = type.element;
    final name = element.name!;
    if (element is ExtensionTypeElement) {
      final id = identity(element);
      final automaticCarrier = automaticTypeCarriers[id];
      String? carrier;
      if (exports[name] == element) {
        carrier = publicLibraries[name] ?? config.library;
      } else if (automaticCarrier != null) {
        publicLibraries.putIfAbsent(name, () => automaticCarrier);
        carrier = automaticCarrier;
      } else if (!parser._isPoolType(element)) {
        throw StateError(
          '${config.library} must publicly export the referenced type $name',
        );
      } else {
        carrier = parser._publicLibraryFor(element, name);
        if (carrier != null) publicLibraries.putIfAbsent(name, () => carrier!);
      }
      carrier ??= publicLibraries[name];
      if (carrier == null) {
        throw StateError(
          '${config.library} must publicly export the referenced type $name',
        );
      }
      extensionTypeDeclarations[id] = (name: name, library: carrier);
      final representation = Substitution.fromPairs2(
        element.typeParameters,
        type.typeArguments,
      ).substituteType(element.typeErasure);
      final converted = typeRef(
        representation,
        scalar: scalar,
        forTypescript: forTypescript,
        typeOnlyPosition: typeOnlyPosition,
        erasing: erasing,
        allowRecursiveErasure: allowRecursiveErasure,
      );
      final represented = nullable ? converted.asNullable() : converted;
      final source = typeOnlyReference(type);
      return represented.declaredAs(
        FlaxCodegenTypeRef(
          'typeOnly',
          name: source.name,
          nullable: source.nullable,
          item: represented,
          primitiveKinds: source.primitiveKinds,
          tsArguments: source.tsArguments,
          originatingUri: source.originatingUri,
          originatingName: source.originatingName,
        ),
      );
    }
    if (typeOnlyPosition &&
        !parser._adaptations.containsKey(identity(element)) &&
        !(element.library.isDartCore &&
            {
              'Object',
              'String',
              'bool',
              'int',
              'double',
              'num',
              'Iterable',
              'List',
              'Map',
              'Set',
            }.contains(name)) &&
        !(element.library.uri.toString() == 'dart:async' &&
            {'Future', 'FutureOr', 'Stream'}.contains(name))) {
      return typeOnlyReference(type);
    }
    final snapshot = parser._snapshotFor(element);
    if (snapshot != null) {
      return FlaxCodegenTypeRef(
        'object',
        id: snapshot.id,
        name: snapshot.name,
        nullable: nullable,
      );
    }
    if (element.library.uri.toString() == 'dart:async' && name == 'Future') {
      return FlaxCodegenTypeRef(
        'future',
        item: typeRef(
          type.typeArguments.single,
          forTypescript: forTypescript,
          typeOnlyPosition: typeOnlyPosition,
          erasing: erasing,
          allowRecursiveErasure: allowRecursiveErasure,
        ),
        nullable: nullable,
      );
    }
    if (element.library.uri.toString() == 'dart:async' && name == 'FutureOr') {
      usesFutureOr = true;
      return FlaxCodegenTypeRef(
        'futureOr',
        item: typeRef(
          type.typeArguments.single,
          forTypescript: forTypescript,
          typeOnlyPosition: typeOnlyPosition,
          erasing: erasing,
          allowRecursiveErasure: allowRecursiveErasure,
        ),
        nullable: nullable,
      );
    }
    if (element.library.uri.toString() == 'dart:async' && name == 'Stream') {
      final streamId = identity(element);
      final selected = parser._adaptations[streamId] == 'stream';
      if (selected) usesStream = true;
      if (selected && !types.containsKey(streamId)) {
        types[streamId] = FlaxCodegenNamedTypeModel(
          name: name,
          id: streamId,
          typeParameters: [
            for (final parameter in element.typeParameters)
              FlaxCodegenGenericParameter(
                parameter.name!,
                typeRef(
                  parameter.bound ??
                      element.library.typeProvider.objectQuestionType,
                  forTypescript: true,
                  typeOnlyPosition: true,
                ),
                genericIdentity: parameter,
              ),
          ],
        );
      }
      return FlaxCodegenTypeRef(
        'stream',
        id: selected ? streamId : null,
        name: selected ? name : null,
        item: typeRef(
          type.typeArguments.single,
          forTypescript: forTypescript,
          typeOnlyPosition: typeOnlyPosition,
          erasing: erasing,
          allowRecursiveErasure: allowRecursiveErasure,
        ),
        nullable: nullable,
      );
    }
    if (element.library.isDartCore) {
      if (name == 'Object') {
        return FlaxCodegenTypeRef('any', nullable: nullable);
      }
      if (['String', 'bool', 'int', 'double', 'num'].contains(name)) {
        return FlaxCodegenTypeRef(name, nullable: nullable);
      }
      if ({'Iterable', 'List', 'Map', 'Set'}.contains(name)) {
        return FlaxCodegenTypeRef(
          switch (name) {
            'Iterable' => 'iterable',
            'List' => 'list',
            'Map' => 'map',
            _ => 'set',
          },
          nullable: nullable,
          item: typeRef(
            type.typeArguments.last,
            scalar: scalar,
            forTypescript: forTypescript,
            typeOnlyPosition: typeOnlyPosition,
            erasing: erasing,
            allowRecursiveErasure: allowRecursiveErasure,
          ),
          key: name == 'Map'
              ? typeRef(
                  type.typeArguments.first,
                  scalar: scalar,
                  forTypescript: forTypescript,
                  typeOnlyPosition: typeOnlyPosition,
                  erasing: erasing,
                  allowRecursiveErasure: allowRecursiveErasure,
                )
              : null,
        );
      }
      if (!parser._adaptations.containsKey(identity(element))) {
        throw StateError('Unsupported core type: $type');
      }
    }
    if (name == 'Widget' &&
        element.library.uri.toString() ==
            'package:flutter/src/widgets/framework.dart') {
      if (exports[name] != element) {
        throw StateError('Selected public libraries must export Widget');
      }
      usesWidget = true;
      return FlaxCodegenTypeRef('widget', nullable: nullable);
    }
    final id = identity(element);
    final automaticCarrier = automaticTypeCarriers[id];
    if (exports[name] != element) {
      if (automaticCarrier != null) {
        publicLibraries.putIfAbsent(name, () => automaticCarrier);
      } else if (!parser._isPoolType(element)) {
        throw StateError(
          '${config.library} must publicly export the referenced type $name',
        );
      } else {
        final uri = parser._publicLibraryFor(element, name);
        if (uri != null) {
          publicLibraries.putIfAbsent(name, () => uri);
        }
      }
    }
    if (erasing != null &&
        !parser._adaptations.containsKey(id) &&
        exports[name] != element &&
        automaticCarrier == null) {
      throw StateError('Unbound generic callback bound: $type');
    }
    final widgetInterface = parser._adaptations[id] == 'widgetInterface';
    if (widgetInterface) usesWidget = true;
    if (!types.containsKey(id)) {
      final dependencyOwner = parser._dependencyTypeOwners[id];
      final dependencyType = dependencyOwner?.types
          .where((type) => type.id == id)
          .firstOrNull;
      if (dependencyType != null) {
        types[id] = dependencyType;
      }
    }
    if (!types.containsKey(id)) {
      // Seed the identity before resolving recursive generic bounds.
      types[id] = FlaxCodegenNamedTypeModel(name: name, id: id);
      final typeParameters = [
        for (final parameter in element.typeParameters)
          FlaxCodegenGenericParameter(
            parameter.name!,
            typeRef(
              parameter.bound ??
                  element.library.typeProvider.objectQuestionType,
              forTypescript: true,
              typeOnlyPosition: true,
            ),
            genericIdentity: parameter,
          ),
      ];
      final dependencySuperTypes =
          element is! EnumElement && !parser._adaptations.containsKey(id)
          ? <FlaxCodegenTypeRef>[
              typeOnlyReference(element.thisType),
              for (final parent in element.thisType.allSupertypes)
                if (!parent.isDartCoreObject &&
                    !parser._adaptations.containsKey(
                      identity(parent.element),
                    ) &&
                    parent.element.library.isDartCore)
                  typeOnlyReference(parent),
              if (element.supertype case final parent?
                  when !parent.isDartCoreObject)
                typeRef(parent)
                    .declaredAs(typeRef(parent, forTypescript: true)),
              for (final parent in element.interfaces)
                if (!parent.element.library.isDartCore ||
                    parser._adaptations.containsKey(identity(parent.element)))
                  typeRef(parent)
                      .declaredAs(typeRef(parent, forTypescript: true)),
            ]
          : const <FlaxCodegenTypeRef>[];
      types[id] = FlaxCodegenNamedTypeModel(
        name: name,
        id: id,
        typeParameters: typeParameters,
        dependencySuperTypes: dependencySuperTypes,
        enumNames: element is EnumElement
            ? element.fields
                  .where((field) => field.isEnumConstant)
                  .map((field) => field.name!)
                  .toList()
            : [],
      );
    }
    return FlaxCodegenTypeRef(
      element is EnumElement
          ? 'enum'
          : widgetInterface
          ? 'widget'
          : parser._adaptations[id] ?? 'object',
      id: id,
      name: name,
      nullable: nullable,
      typeArguments: parser._argumentsByType[id] ?? const [],
      dartArguments: forTypescript
          ? const []
          : type.typeArguments
                .map(
                  (t) => typeRef(
                    t,
                    erasing: erasing,
                    allowRecursiveErasure: allowRecursiveErasure,
                  ),
                )
                .toList(),
      tsArguments: forTypescript
          ? type.typeArguments
                .map(
                  (t) => typeRef(
                    t,
                    forTypescript: true,
                    typeOnlyPosition: typeOnlyPosition,
                  ),
                )
                .toList()
          : const [],
      primitiveKinds: element is EnumElement
          ? const []
          : [
              for (final entry in {
                'String': element.library.typeProvider.stringType,
                'bool': element.library.typeProvider.boolType,
                'int': element.library.typeProvider.intType,
                'double': element.library.typeProvider.doubleType,
                'num': element.library.typeProvider.numType,
              }.entries)
                if (element.library.typeSystem.isSubtypeOf(entry.value, type))
                  entry.key,
            ],
    );
  }
}
