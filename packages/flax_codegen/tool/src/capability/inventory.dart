import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/element/element.dart';
import 'package:analyzer/dart/element/type.dart';

import 'model.dart';
import 'workspace.dart';

final _jsName = RegExp(r'^[A-Za-z][A-Za-z0-9]*$');

bool isJsLegalName(String? name) =>
    name != null &&
    name.isNotEmpty &&
    !name.startsWith('_') &&
    _jsName.hasMatch(name);

String publicElementName(Element element) {
  final name = element.name ?? '<unnamed>';
  if (element is SetterElement || name.endsWith('=')) {
    return name.endsWith('=') ? name.substring(0, name.length - 1) : name;
  }
  return name;
}

String declarationId(Element element) {
  final library = element.library?.uri.toString() ?? '<unknown>';
  return '$library::${publicElementName(element)}';
}

String declarationKind(Element element) {
  if (element is EnumElement) return 'enum';
  if (element is MixinElement) return 'mixin';
  if (element is ClassElement) return 'class';
  if (element is ExtensionTypeElement) return 'extensionType';
  if (element is ExtensionElement) return 'extension';
  if (element is TypeAliasElement) return 'typedef';
  if (element is TopLevelFunctionElement) return 'function';
  if (element is TopLevelVariableElement) {
    return element.isConst ? 'const' : 'variable';
  }
  if (element is GetterElement) return 'getter';
  if (element is SetterElement) return 'setter';
  if (element is PropertyAccessorElement) {
    return (element.name ?? '').endsWith('=') ? 'setter' : 'getter';
  }
  return 'other';
}

Future<LibraryInventory> inventoryLibrary({
  required AnalysisContextCollection collection,
  required String uri,
}) async {
  final watch = Stopwatch()..start();
  final result = await resolveLibrary(collection, uri);
  if (result is! LibraryElementResult) {
    return LibraryInventory(
      entry: uri,
      resolved: false,
      elapsedMilliseconds: watch.elapsedMilliseconds,
      declarations: const [],
      error: 'Cannot resolve $uri',
    );
  }
  final grouped = <String, _PendingDeclaration>{};
  for (final entry in result.element.exportNamespace.definedNames2.entries) {
    final element = entry.value;
    if (element is PrefixElement) continue;
    final id = declarationId(element);
    final pending = grouped.putIfAbsent(
      id,
      () => _PendingDeclaration(id: id, element: element),
    );
    if (!pending.elements.contains(element)) {
      pending.elements.add(element);
    }
    pending.exportNames.add(entry.key);
  }
  final declarations = [
    for (final pending in grouped.values) _record(pending, publicEntry: uri),
  ]..sort((a, b) => a.id.compareTo(b.id));
  return LibraryInventory(
    entry: uri,
    resolved: true,
    elapsedMilliseconds: watch.elapsedMilliseconds,
    declarations: declarations,
  );
}

ApiDeclarationRecord _record(
  _PendingDeclaration pending, {
  required String publicEntry,
}) {
  final accessors = [
    for (final element in pending.elements)
      if (element is GetterElement || element is SetterElement) element,
  ];
  if (accessors.isNotEmpty && accessors.length == pending.elements.length) {
    return _recordAccessors(pending, publicEntry: publicEntry);
  }
  final element = pending.element;
  final members = <ApiCallableRecord>[];
  final inherited = <ApiCallableRecord>[];
  final dependencies = <String>{};
  final typeParameters = <String>[];
  final supertypes = <String>[];
  final modifiers = <String, bool>{};
  if (element is TypeParameterizedElement) {
    for (final parameter in element.typeParameters) {
      typeParameters.add(parameter.name ?? '<unnamed>');
      if (parameter.bound != null) {
        _collectDependencies(parameter.bound!, dependencies);
      }
    }
  }
  if (element is InterfaceElement) {
    if (element is ClassElement) {
      modifiers['abstract'] = element.isAbstract;
      modifiers['base'] = element.isBase;
      modifiers['final'] = element.isFinal;
      modifiers['sealed'] = element.isSealed;
      modifiers['mixinClass'] = element.isMixinClass;
      modifiers['interface'] = element.isInterface;
    } else if (element is MixinElement) {
      modifiers['base'] = element.isBase;
    }
    for (final type in element.allSupertypes) {
      if (type.isDartCoreObject) continue;
      supertypes.add(declarationId(type.element));
      _collectDependencies(type, dependencies);
    }
    final declared = _interfaceMembers(element, inherited: false);
    members.addAll(declared);
    final declaredKeys = {
      for (final member in declared) '${member.kind}.${member.name}',
    };
    for (final type in element.allSupertypes) {
      if (type.isDartCoreObject) continue;
      for (final member in _interfaceMembers(type.element, inherited: true)) {
        if (declaredKeys.add('${member.kind}.${member.name}')) {
          inherited.add(member);
        }
      }
    }
  } else if (element is ExtensionElement) {
    members.addAll(_executables(element.getters, kind: 'getter'));
    members.addAll(_executables(element.setters, kind: 'setter'));
    members.addAll(_executables(element.methods, kind: 'method'));
    _collectDependencies(element.extendedType, dependencies);
  } else if (element is TypeAliasElement) {
    _collectDependencies(element.aliasedType, dependencies);
  } else if (element is TopLevelFunctionElement) {
    members.add(_executable(element, kind: 'function'));
  } else if (element is ExecutableElement) {
    members.add(_executable(element, kind: declarationKind(element)));
  }
  for (final member in members) {
    dependencies.addAll(member.dependencies);
  }
  return ApiDeclarationRecord(
    id: pending.id,
    name: publicElementName(element),
    kind: declarationKind(element),
    sourceLibrary: element.library?.uri.toString() ?? '<unknown>',
    publicEntries: [publicEntry],
    exportNames: pending.exportNames.toList()..sort(),
    signature: _signature(element),
    typeParameters: typeParameters,
    supertypes: supertypes,
    dependencies: (dependencies.toList()..sort()),
    declaredMembers: members,
    interfaceMembers: inherited,
    modifiers: modifiers,
    isDeprecated: element.metadata.hasDeprecated,
  );
}

ApiDeclarationRecord _recordAccessors(
  _PendingDeclaration pending, {
  required String publicEntry,
}) {
  GetterElement? getter;
  SetterElement? setter;
  for (final element in pending.elements) {
    if (element is GetterElement) getter = element;
    if (element is SetterElement) setter = element;
  }
  final representative = getter ?? setter!;
  final variable = getter?.variable ?? setter?.variable;
  final members = <ApiCallableRecord>[
    if (getter != null) _executable(getter, kind: 'getter'),
    if (setter != null) _executable(setter, kind: 'setter'),
  ];
  final dependencies = <String>{
    for (final member in members) ...member.dependencies,
  };
  return ApiDeclarationRecord(
    id: pending.id,
    name: publicElementName(representative),
    kind: _accessorKind(
      variable,
      hasGetter: getter != null,
      hasSetter: setter != null,
    ),
    sourceLibrary: representative.library.uri.toString(),
    publicEntries: [publicEntry],
    exportNames: pending.exportNames.toList()..sort(),
    signature: _signature(representative),
    typeParameters: const [],
    supertypes: const [],
    dependencies: (dependencies.toList()..sort()),
    declaredMembers: members,
    interfaceMembers: const [],
    modifiers: {
      if (variable is TopLevelVariableElement) ...{
        'const': variable.isConst,
        'final': variable.isFinal,
        'late': variable.isLate,
      },
    },
    isDeprecated: representative.metadata.hasDeprecated,
  );
}

String _accessorKind(
  PropertyInducingElement? variable, {
  required bool hasGetter,
  required bool hasSetter,
}) {
  // Analyzer 13 dropped Element.isSynthetic; declared variables have a name
  // offset, synthetic variables for custom getters do not.
  if (variable is TopLevelVariableElement &&
      variable.firstFragment.nameOffset != null) {
    return variable.isConst ? 'const' : 'variable';
  }
  if (hasSetter && !hasGetter) return 'setter';
  return 'getter';
}

String _signature(Element element) {
  if (element is InterfaceElement) {
    return element.thisType.getDisplayString();
  }
  if (element is ExecutableElement) {
    return element.type.getDisplayString();
  }
  if (element is TypeAliasElement) {
    return element.aliasedType.getDisplayString();
  }
  return publicElementName(element);
}

List<ApiCallableRecord> _interfaceMembers(
  InterfaceElement element, {
  required bool inherited,
}) {
  return [
    if (!inherited && element is ClassElement)
      for (final constructor in element.constructors)
        if (constructor.isPublic) _executable(constructor, kind: 'constructor'),
    ..._executables(element.getters, kind: 'getter', inherited: inherited),
    ..._executables(element.setters, kind: 'setter', inherited: inherited),
    ..._executables(element.methods, kind: 'method', inherited: inherited),
  ];
}

List<ApiCallableRecord> _executables(
  Iterable<ExecutableElement> elements, {
  required String kind,
  bool inherited = false,
}) {
  return [
    for (final element in elements)
      if (element.isPublic && !_ignoredMember(element))
        _executable(element, kind: kind, inherited: inherited),
  ];
}

bool _ignoredMember(ExecutableElement element) {
  final name = element.name;
  return name == 'hashCode' ||
      name == 'runtimeType' ||
      name == 'toString' ||
      name == 'noSuchMethod';
}

ApiCallableRecord _executable(
  ExecutableElement element, {
  required String kind,
  bool inherited = false,
}) {
  final name = element is ConstructorElement
      ? (element.name == 'new' ? '' : element.name ?? '')
      : publicElementName(element);
  final dependencies = <String>{};
  _collectDependencies(element.returnType, dependencies);
  final parameters = [
    for (final parameter in element.formalParameters)
      _parameter(parameter, dependencies),
  ];
  for (final parameter in element.typeParameters) {
    if (parameter.bound != null) {
      _collectDependencies(parameter.bound!, dependencies);
    }
  }
  final owner = element.enclosingElement;
  final ownerId = owner is Element
      ? declarationId(owner)
      : declarationId(element);
  return ApiCallableRecord(
    id: '$ownerId.$kind.${name.isEmpty ? 'new' : name}',
    name: name,
    kind: kind,
    signature: element.type.getDisplayString(),
    resultType: element.returnType.getDisplayString(),
    parameters: parameters,
    typeParameters: [
      for (final parameter in element.typeParameters)
        parameter.name ?? '<unnamed>',
    ],
    dependencies: (dependencies.toList()..sort()),
    isStatic: element.isStatic,
    isInherited: inherited,
    isAbstract: element is MethodElement && element.isAbstract,
    isDeprecated: element.metadata.hasDeprecated,
    isOperator: element is MethodElement && element.isOperator,
    isProtected: element.metadata.hasProtected,
    isVisibleForTesting: element.metadata.hasVisibleForTesting,
    declaredBy: owner is Element ? declarationId(owner) : null,
  );
}

ApiParameterRecord _parameter(
  FormalParameterElement parameter,
  Set<String> dependencies,
) {
  _collectDependencies(parameter.type, dependencies);
  return ApiParameterRecord(
    name: parameter.name ?? '<unnamed>',
    type: parameter.type.getDisplayString(),
    required: parameter.isRequired,
    positional: parameter.isPositional,
    named: parameter.isNamed,
    hasDefault: parameter.hasDefaultValue,
    defaultCode: parameter.hasDefaultValue ? parameter.defaultValueCode : null,
  );
}

void _collectDependencies(DartType type, Set<String> dependencies) {
  if (type is InterfaceType) {
    dependencies.add(declarationId(type.element));
    for (final argument in type.typeArguments) {
      _collectDependencies(argument, dependencies);
    }
    return;
  }
  if (type is FunctionType) {
    _collectDependencies(type.returnType, dependencies);
    for (final parameter in type.formalParameters) {
      _collectDependencies(parameter.type, dependencies);
    }
    for (final parameter in type.typeParameters) {
      if (parameter.bound != null) {
        _collectDependencies(parameter.bound!, dependencies);
      }
    }
    return;
  }
  if (type is RecordType) {
    for (final field in type.positionalFields) {
      _collectDependencies(field.type, dependencies);
    }
    for (final field in type.namedFields) {
      _collectDependencies(field.type, dependencies);
    }
  }
}

class _PendingDeclaration {
  _PendingDeclaration({required this.id, required Element element})
    : elements = [element];

  final String id;
  final List<Element> elements;
  final Set<String> exportNames = {};

  Element get element => elements.first;
}
