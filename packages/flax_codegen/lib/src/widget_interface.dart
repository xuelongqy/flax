part of 'parser.dart';

/// Native signatures deliberately never enter the Dart/JS conversion graph.
final class _WidgetInterfaceParser {
  _WidgetInterfaceParser(this.session, this.exports, this.publicLibraries) {
    final libraries = {
      ...publicLibraries.values,
      'dart:core',
      'dart:async',
    }.toList()..sort();
    for (final uri in libraries) {
      _prefixes[uri] = '_flaxNative${_prefixes.length}';
    }
  }
  final AnalysisSession session;
  final Map<String, Element> exports;
  final Map<String, String> publicLibraries;
  final _prefixes = <String, String>{};
  final _resolved = <LibraryElement, ResolvedLibraryResult>{};
  final _usedImports = <String, String>{};
  String _location = '';

  String _memberName(ExecutableElement member) =>
      member is MethodElement &&
          member.name == '-' &&
          member.formalParameters.isEmpty
      ? 'unary-'
      : member.name!;

  Never _fail(String message) =>
      throw StateError('Widget interface $_location: $message');

  String _reference(Element element) {
    if (element is GetterElement &&
        element.variable is TopLevelVariableElement) {
      element = element.variable;
    }
    final name = element.name;
    if (name == null || element.isPrivate) {
      _fail('Inaccessible Dart declaration: $element');
    }
    final library = element.library;
    if (library == null) {
      _fail('Dart declaration has no importable library: $name');
    }
    final uri = exports[name]?.baseElement == element.baseElement
        ? publicLibraries[name] ?? library.uri.toString()
        : library.uri.toString();
    // Private implementation libraries are only used through a public export.
    if (uri.contains('/src/') ||
        Uri.parse(uri).pathSegments.any((s) => s.startsWith('_'))) {
      _fail('No public export for Dart declaration: $name ($uri)');
    }
    final prefix = _prefixes.putIfAbsent(
      uri,
      () => '_flaxNative${_prefixes.length}',
    );
    _usedImports[uri] = prefix;
    return '$prefix.$name';
  }

  String _type(DartType type) {
    final suffix = type.nullabilitySuffix == NullabilitySuffix.question
        ? '?'
        : '';
    final alias = type.alias;
    if (alias != null) {
      final args = alias.typeArguments;
      return '${_reference(alias.element)}${args.isEmpty ? '' : '<${args.map(_type).join(', ')}>'}$suffix';
    }
    if (type is TypeParameterType) return '${type.element.name}$suffix';
    if (type is InterfaceType) {
      final args = type.typeArguments;
      return '${_reference(type.element)}${args.isEmpty ? '' : '<${args.map(_type).join(', ')}>'}$suffix';
    }
    if (type is FunctionType) {
      return '${_type(type.returnType)} Function${_generics(type.typeParameters)}(${_parameterList(type.formalParameters, const {})})$suffix';
    }
    if (type is RecordType) {
      final positional = type.positionalFields
          .map((f) => _type(f.type))
          .toList();
      final named = type.namedFields
          .map((f) => '${_type(f.type)} ${f.name}')
          .toList();
      final fields = [
        ...positional,
        if (named.isNotEmpty) '{${named.join(', ')}}',
      ];
      return '(${fields.join(', ')}${positional.length == 1 && named.isEmpty ? ',' : ''})$suffix';
    }
    if (type is VoidType) return 'void';
    if (type is DynamicType) return 'dynamic';
    if (type is NeverType) return 'Never$suffix';
    _fail('Unsupported native Dart type: $type');
  }

  String _generics(List<TypeParameterElement> parameters) {
    if (parameters.isEmpty) return '';
    for (final parameter in parameters) {
      if (parameter.name!.startsWith('_flaxNative')) {
        _fail('Reserved generated import name: ${parameter.name}');
      }
    }
    return '<${parameters.map((p) => '${p.name}${p.bound == null ? '' : ' extends ${_type(p.bound!)}'}').join(', ')}>';
  }

  String _parameterList(
    List<FormalParameterElement> parameters,
    Map<String, String> defaults, {
    bool declaration = false,
  }) {
    String render(FormalParameterElement p) =>
        '${declaration && p.isCovariant ? 'covariant ' : ''}${p.isRequiredNamed ? 'required ' : ''}${_type(p.type)} ${p.name ?? 'arg${parameters.indexOf(p)}'}${defaults.containsKey(p.name) ? ' = ${defaults[p.name]}' : ''}';
    final required = parameters
        .where((p) => p.isRequiredPositional)
        .map(render);
    final optional = parameters
        .where((p) => p.isOptionalPositional)
        .map(render)
        .toList();
    final named = parameters.where((p) => p.isNamed).map(render).toList();
    return [
      ...required,
      if (optional.isNotEmpty) '[${optional.join(', ')}]',
      if (named.isNotEmpty) '{${named.join(', ')}}',
    ].join(', ');
  }

  Future<String?> _default(FormalParameterElement parameter) async {
    final base = parameter.baseElement;
    if (!base.hasDefaultValue) return null;
    final library = base.library!;
    var resolved = _resolved[library];
    if (resolved == null) {
      final result = await session.getResolvedLibraryByElement(library);
      if (result is! ResolvedLibraryResult) {
        _fail('Cannot resolve parameter default: ${parameter.name}');
      }
      _resolved[library] = resolved = result;
    }
    final node = resolved.getFragmentDeclaration(base.firstFragment)?.node;
    final defaultNode = node is FormalParameter
        ? node.defaultClause?.value
        : null;
    if (defaultNode == null) {
      _fail('Cannot resolve parameter default: ${parameter.name}');
    }
    final edits = <(int, int, String)>[];
    defaultNode.accept(_WidgetDefaultVisitor(this, edits));
    // Use original source offsets; toSource may normalize whitespace.
    final unit = defaultNode.thisOrAncestorOfType<CompilationUnit>()!;
    final content = resolved.units
        .firstWhere((u) => identical(u.unit, unit))
        .content;
    var source = content.substring(defaultNode.offset, defaultNode.end);
    edits.sort((a, b) => b.$1.compareTo(a.$1));
    for (final edit in edits) {
      source = source.replaceRange(
        edit.$1 - defaultNode.offset,
        edit.$2 - defaultNode.offset,
        edit.$3,
      );
    }
    return source;
  }

  Map<String, ExecutableElement> _members(InterfaceType type) {
    final widget = type.allSupertypes.firstWhere(
      (t) =>
          identity(t.element) ==
          'package:flutter/src/widgets/framework.dart::Widget',
    );
    final supplied = <String>{};
    for (final base in [widget, ...widget.allSupertypes]) {
      supplied.addAll(base.element.methods.map((m) => 'method:${m.name}'));
      supplied.addAll(base.element.getters.map((m) => 'getter:${m.name}'));
      supplied.addAll(base.element.setters.map((m) => 'setter:${m.name}'));
    }
    final result = <String, ExecutableElement>{};
    for (final base in [type, ...type.allSupertypes]) {
      for (final (kind, members) in <(String, Iterable<ExecutableElement>)>[
        ('getter', base.element.getters),
        ('setter', base.element.setters),
        ('method', base.element.methods),
      ]) {
        for (final member in members) {
          if (member.isStatic) continue;
          if ({
            'configuration',
            'node',
            'buildNative',
            'createState',
          }.contains(member.name)) {
            _fail(
              'Member conflicts with the FlaxWidgetHost lifecycle: ${member.name}',
            );
          }
          final name = _memberName(member);
          final key = '$kind:$name';
          if (supplied.contains(key)) continue;
          if (member.isPrivate) {
            _fail('Interface requires inaccessible member: ${member.name}');
          }
          result.putIfAbsent(
            key,
            () => switch (kind) {
              'getter' =>
                type.lookUpGetter(member.name!, type.element.library) ??
                    _fail('Cannot resolve getter ${member.name}'),
              'setter' =>
                type.lookUpSetter(member.name!, type.element.library) ??
                    _fail('Cannot resolve setter ${member.name}'),
              _ =>
                type.lookUpMethod(name, type.element.library) ??
                    _fail(
                      'Cannot resolve method ${member.name} (${member.type})',
                    ),
            },
          );
        }
      }
    }
    return result;
  }

  Future<List<FlaxCodegenWidgetMember>> parse(
    InterfaceType type,
    FlaxCodegenClassSelection selection,
  ) async {
    _location = type.element.name!;
    final members = _members(type);
    final selected = <String, List<String>>{
      for (final name in selection.getters) 'getter:$name': [],
      for (final name in selection.setters) 'setter:$name': [],
      for (final entry in selection.methods.entries)
        'method:${entry.key}': entry.value,
    };
    if (selection.constructors.isNotEmpty ||
        selection.instanceMethods.isNotEmpty ||
        selection.staticGetters.isNotEmpty ||
        selection.proxy != null) {
      _fail('Only native getters, setters and methods may be selected');
    }
    for (final key in {...members.keys, ...selected.keys}) {
      if (!members.containsKey(key)) {
        _fail('Unknown or host-supplied member: $key');
      }
      if (!selected.containsKey(key)) {
        _fail('Select every interface member; missing $key');
      }
    }
    final result = <FlaxCodegenWidgetMember>[];
    for (final key in members.keys.toList()..sort()) {
      final member = members[key]!;
      if (key.startsWith('method:') &&
          (selected[key]!.join(',') !=
              member.formalParameters.map((p) => p.name).join(','))) {
        _fail('Select all parameters in declaration order: $key');
      }
      result.add(await _emit(type, key.split(':').first, member));
    }
    return result;
  }

  Future<List<FlaxCodegenWidgetMember>> implement(
    InterfaceType actual,
    List<(InterfaceType, FlaxCodegenClassSelection)> contracts,
  ) async {
    final requirements = <String, List<(InterfaceType, ExecutableElement)>>{};
    for (final (contract, selection) in contracts) {
      await parse(contract, selection);
      for (final entry in _members(contract).entries) {
        requirements.putIfAbsent(entry.key, () => []).add((
          contract,
          entry.value,
        ));
      }
    }
    final result = <FlaxCodegenWidgetMember>[];
    for (final key in requirements.keys.toList()..sort()) {
      final kind = key.split(':').first;
      final name = key.substring(kind.length + 1);
      final member = switch (kind) {
        'getter' => actual.lookUpGetter(name, actual.element.library),
        'setter' => actual.lookUpSetter(name, actual.element.library),
        _ => actual.lookUpMethod(name, actual.element.library),
      };
      _location = '${actual.element.name}.$name';
      if (member == null) _fail('Missing implementation');
      // Analyzer has resolved inheritance/substitution. A single effective
      // implementation must satisfy every selected contract.
      for (final obligation in requirements[key]!) {
        if (!actual.element.library.typeSystem.isSubtypeOf(
              member.type,
              obligation.$2.type,
            ) &&
            !member.formalParameters.any((p) => p.isCovariant)) {
          _fail('Conflicting interface signatures');
        }
      }
      final candidates = requirements[key]!;
      var selected = candidates
          .where(
            (candidate) => candidates.every(
              (other) => actual.element.library.typeSystem.isSubtypeOf(
                candidate.$2.type,
                other.$2.type,
              ),
            ),
          )
          .firstOrNull;
      if (selected != null && kind == 'method') {
        final signature = selected.$2;
        for (final parameter in signature.formalParameters.where(
          (p) => !p.isRequired,
        )) {
          final implementation = _implementationParameter(
            signature,
            parameter,
            member,
          );
          final valueType =
              implementation.computeConstantValue()?.type ??
              actual.element.library.typeProvider.nullType;
          if (!actual.element.library.typeSystem.isAssignableTo(
            valueType,
            parameter.type,
          )) {
            selected = null;
            break;
          }
        }
      }
      // Prefer the public contract: concrete getters may return private subtypes.
      // Use the resolved implementation only when multiple contracts require a
      // combined signature that none of the individual contracts provides.
      result.add(
        await _emit(
          selected?.$1 ?? actual,
          kind,
          selected?.$2 ?? member,
          defaultsFrom: member,
        ),
      );
    }
    return result;
  }

  FormalParameterElement _implementationParameter(
    ExecutableElement signature,
    FormalParameterElement parameter,
    ExecutableElement implementation,
  ) {
    if (parameter.isNamed) {
      return implementation.formalParameters.firstWhere(
        (p) => p.name == parameter.name,
      );
    }
    final index = signature.formalParameters
        .where((p) => p.isPositional)
        .toList()
        .indexWhere((p) => p.name == parameter.name);
    return implementation.formalParameters
        .where((p) => p.isPositional)
        .elementAt(index);
  }

  Future<FlaxCodegenWidgetMember> _emit(
    InterfaceType target,
    String kind,
    ExecutableElement member, {
    ExecutableElement? defaultsFrom,
  }) async {
    _location = '${target.element.name}.${member.name}';
    _usedImports.clear();
    final receiver = '(configuration as ${_type(target)})';
    final name = _memberName(member);
    String source;
    if (kind == 'getter') {
      source = '${_type(member.returnType)} get $name => $receiver.$name;';
    } else if (kind == 'setter') {
      source =
          'set $name(${member.formalParameters.single.isCovariant ? 'covariant ' : ''}${_type(member.formalParameters.single.type)} value) { $receiver.$name = value; }';
    } else {
      final defaults = <String, String>{};
      for (final p in member.formalParameters) {
        if (p.name!.startsWith('_flaxNative')) {
          _fail('Reserved generated import name: ${p.name}');
        }
        // Defaults belong to the concrete Dart implementation, not the
        // interface declaration used to express its public signature.
        final value = await _default(
          defaultsFrom == null
              ? p
              : _implementationParameter(member, p, defaultsFrom),
        );
        if (value != null) defaults[p.name!] = value;
      }
      final generic = _generics(member.typeParameters);
      final typeArgs = member.typeParameters.isEmpty
          ? ''
          : '<${member.typeParameters.map((p) => p.name).join(', ')}>';
      final params = _parameterList(
        member.formalParameters,
        defaults,
        declaration: true,
      );
      final args = member.formalParameters
          .map((p) => '${p.isNamed ? '${p.name}: ' : ''}${p.name}')
          .join(', ');
      final operator = member is MethodElement && member.isOperator;
      final names = member.formalParameters.map((p) => p.name).toList();
      final invocation = !operator
          ? '$receiver.$name$typeArgs($args)'
          : switch (name) {
              '[]' => '$receiver[${names.single}]',
              '[]=' => '$receiver[${names[0]}] = ${names[1]}',
              'unary-' => '-$receiver',
              '~' => '~$receiver',
              _ => '$receiver $name ${names.single}',
            };
      source =
          '${_type(member.returnType)} ${operator ? 'operator ${name == 'unary-' ? '-' : name}' : '$name$generic'}($params) => $invocation;';
    }
    return FlaxCodegenWidgetMember(
      name: name,
      kind: kind,
      parameters: kind == 'method'
          ? member.formalParameters.map((p) => p.name!).toList()
          : [],
      source: '@override\n$source',
      imports: Map.of(_usedImports),
    );
  }
}

final class _WidgetDefaultVisitor extends RecursiveAstVisitor<void> {
  _WidgetDefaultVisitor(this.parser, this.edits);
  final _WidgetInterfaceParser parser;
  final List<(int, int, String)> edits;
  @override
  void visitNamedType(NamedType node) {
    edits.add((node.offset, node.end, parser._type(node.type!)));
  }

  @override
  void visitPrefixedIdentifier(PrefixedIdentifier node) {
    final element = node.element;
    if (node.prefix.element is PrefixElement && element != null) {
      edits.add((node.offset, node.end, parser._reference(element)));
    } else {
      super.visitPrefixedIdentifier(node);
    }
  }

  @override
  void visitSimpleIdentifier(SimpleIdentifier node) {
    final element = node.element;
    if (element == null) return;
    if (element.isPrivate) {
      parser._fail('Inaccessible default: ${element.name}');
    }
    if (element is InterfaceElement ||
        element is TypeAliasElement ||
        element is TopLevelFunctionElement ||
        element is TopLevelVariableElement ||
        element is GetterElement &&
            element.enclosingElement is LibraryElement) {
      edits.add((node.offset, node.end, parser._reference(element)));
    }
  }
}
