part of 'parser.dart';

/// Proposes the largest safe binding surface for [seed.library].
///
/// The seed supplies module/package routing only. Its explicit selections are
/// treated as overlays and win over inferred selections. Unsupported public
/// declarations stay out of the returned config and are recorded in [skips].
extension FlaxCodegenAutoBinding on FlaxCodegenBindingParser {
  Future<FlaxCodegenAutoBindingProposal> proposeLibrary(
    FlaxCodegenBindingConfig seed, {
    FlaxCodegenAutoOverrides overrides = const FlaxCodegenAutoOverrides(),
  }) async {
    await prepare([seed]);
    final result = await _contexts.contexts.first.currentSession
        .getLibraryByUri(seed.library);
    if (result is! LibraryElementResult) {
      throw StateError('Cannot resolve ${seed.library}');
    }
    final exports = <String, Element>{
      for (final entry in result.element.exportNamespace.definedNames2.entries)
        entry.key: entry.value,
    };
    final scope = await _openTypeScope(seed);
    final skips = <FlaxCodegenSkip>[];
    final notices = <FlaxCodegenNotice>[];
    final concreteUses = _autoConcreteUses(exports.values);
    final classes = <String, FlaxCodegenClassSelection>{...seed.classes};
    final functions = <String, FlaxCodegenFunctionSelection>{...seed.functions};
    final types = <String>{...seed.types};
    final typedefs = <String>{...seed.typedefs};
    final getters = <String>{...?seed.topLevel?.getters};
    final setters = <String>{...?seed.topLevel?.setters};
    final elements = <String, InterfaceElement>{};
    final excluded = overrides.exclude.toSet();
    final seenOverrides = <String>{};
    final hiddenTypes = <String>{};

    final names =
        exports.keys
            .map((name) => name.replaceFirst(RegExp(r'=$'), ''))
            .toSet()
            .toList()
          ..sort();
    for (final name in names) {
      final element = exports[name] ?? exports['$name='];
      if (element == null || element.isPrivate) continue;
      if (excluded.contains(name)) {
        if (element is InterfaceElement) hiddenTypes.add(identity(element));
        seenOverrides.add(name);
        skips.add(
          FlaxCodegenSkip(target: name, reason: 'Excluded by auto override'),
        );
        continue;
      }
      if (_autoHidden(element)) {
        if (element is InterfaceElement) hiddenTypes.add(identity(element));
        skips.add(
          FlaxCodegenSkip(
            target: name,
            reason: 'Excluded by API visibility annotation',
          ),
        );
        continue;
      }
      if (element.metadata.hasDeprecated) {
        notices.add(
          FlaxCodegenNotice(
            target: name,
            message: 'Deprecated API remains selected',
          ),
        );
      }

      if (element is EnumElement) {
        types.add(name);
        continue;
      }
      if (element is TypeAliasElement) {
        if (_autoTypedefSupported(scope, element, name, skips)) {
          typedefs.add(name);
        }
        continue;
      }
      if (element is TopLevelFunctionElement) {
        if (overrides.functions.containsKey(name)) seenOverrides.add(name);
        if (functions.containsKey(name)) continue;
        // Explicit semantic overrides are checked by the fail-closed parser.
        // Infer the parameter names even when lifecycle inference is blocked.
        if (overrides.functions.containsKey(name)) {
          functions[name] = FlaxCodegenFunctionSelection([
            for (final parameter in element.formalParameters) parameter.name!,
          ]);
          continue;
        }
        final selection = _autoFunctionSelection(
          scope: scope,
          function: element,
          name: name,
          skips: skips,
        );
        if (selection != null) functions[name] = selection;
        continue;
      }
      if (element is GetterElement ||
          element is SetterElement ||
          element is TopLevelVariableElement) {
        _autoTopLevel(
          scope: scope,
          exports: exports,
          name: name,
          element: element,
          getters: getters,
          setters: setters,
          skips: skips,
        );
        continue;
      }
      if (element is! InterfaceElement || classes.containsKey(name)) continue;

      elements[name] = element;
      final classOverride = overrides.classes[name];
      if (classOverride != null) seenOverrides.add(name);
      if (classOverride == null &&
          !_dependencyOwners.containsKey(identity(element)) &&
          element.allSupertypes.any(
            (parent) =>
                parent.element.library.uri.toString() == 'dart:core' &&
                const {
                  'Iterable',
                  'List',
                  'Set',
                  'Map',
                }.contains(parent.element.name),
          )) {
        skips.add(
          FlaxCodegenSkip(
            target: name,
            reason:
                'Custom core collection subclasses require explicit binding; '
                'their native members can conflict with collection bridge methods',
          ),
        );
        continue;
      }
      final FlaxCodegenClassSelection? selection;
      if (_isAutoWidgetInterface(element)) {
        selection = await _autoWidgetInterfaceSelection(
          seed,
          element,
          skips,
          notices,
        );
      } else {
        final proposed = await proposeSelection(
          element,
          library: seed,
          base: _autoProposalBase(classOverride),
          concreteUses: concreteUses[identity(element)] ?? const [],
        );
        skips.addAll(proposed.skips);
        selection = proposed.selection == null
            ? null
            : _filterAutoSelection(
                element,
                proposed.selection!,
                skips,
                notices,
              );
        if (proposed.provider != null && selection == null) {
          skips.add(
            FlaxCodegenSkip(
              target: name,
              reason: 'Reuses existing provider ${proposed.provider}',
            ),
          );
        }
      }
      if (selection != null) classes[name] = selection;
    }

    // A skipped runtime specialization cannot supply values to its consumers.
    // Remove dependent declarations before dependency closure can resurrect it.
    final unavailable = <String>{
      ...hiddenTypes,
      for (final entry in elements.entries)
        if (!classes.containsKey(entry.key) &&
            !_dependencyOwners.containsKey(identity(entry.value)))
          identity(entry.value),
    };
    bool changed;
    do {
      changed = false;
      for (final entry in classes.entries.toList()) {
        if (seed.classes.containsKey(entry.key) ||
            overrides.classes.containsKey(entry.key)) {
          continue;
        }
        final element = elements[entry.key];
        if (element == null) continue;
        final selection = entry.value;
        final signatures = <DartType>[];
        if (element is ClassElement) {
          for (final constructor in element.constructors) {
            final params =
                selection.constructors[constructor.name == 'new'
                    ? ''
                    : constructor.name];
            if (params == null) continue;
            signatures.addAll(
              constructor.formalParameters
                  .where((p) => params.contains(p.name))
                  .map((p) => p.type),
            );
          }
        }
        for (final getter in element.getters) {
          if (selection.getters.contains(getter.name) ||
              selection.staticGetters.contains(getter.name)) {
            signatures.add(getter.returnType);
          }
        }
        for (final setter in element.setters) {
          if (selection.setters.contains(setter.name)) {
            signatures.add(setter.type);
          }
        }
        for (final method in element.methods) {
          if (selection.instanceMethods.containsKey(method.name) ||
              selection.methods.containsKey(method.name)) {
            signatures.add(method.type);
          }
        }
        if (!signatures.any(
          (type) => _autoUsesUnavailable(type, unavailable),
        )) {
          continue;
        }
        classes.remove(entry.key);
        unavailable.add(identity(element));
        skips.add(
          FlaxCodegenSkip(
            target: entry.key,
            reason: 'Signature depends on a skipped declaration',
          ),
        );
        changed = true;
      }
    } while (changed);
    for (final name in functions.keys.toList()) {
      final element = exports[name];
      if (seed.functions.containsKey(name) ||
          overrides.functions.containsKey(name)) {
        continue;
      }
      if (element is TopLevelFunctionElement &&
          _autoUsesUnavailable(element.type, unavailable)) {
        functions.remove(name);
        skips.add(
          FlaxCodegenSkip(
            target: name,
            reason: 'Signature depends on a skipped declaration',
          ),
        );
      }
    }
    for (final name in typedefs.toList()) {
      final element = exports[name];
      if (!seed.typedefs.contains(name) &&
          element is TypeAliasElement &&
          _autoUsesUnavailable(element.aliasedType, unavailable)) {
        typedefs.remove(name);
        skips.add(
          FlaxCodegenSkip(
            target: name,
            reason: 'Alias depends on a skipped declaration',
          ),
        );
      }
    }
    for (final names in [getters, setters]) {
      for (final name in names.toList()) {
        final element = exports[name] ?? exports['$name='];
        final type = switch (element) {
          ExecutableElement() => element.type,
          PropertyInducingElement() => element.type,
          _ => null,
        };
        if (type != null && _autoUsesUnavailable(type, unavailable)) {
          names.remove(name);
          skips.add(
            FlaxCodegenSkip(
              target: name,
              reason: 'Value depends on a skipped declaration',
            ),
          );
        }
      }
    }

    await _attachAutoWidgetInterfaces(
      seed: seed,
      scope: scope,
      classes: classes,
      elements: elements,
      exports: exports,
      skips: skips,
    );

    for (final entry in overrides.classes.entries) {
      final selection = classes[entry.key];
      if (selection == null) {
        throw StateError(
          'Auto override requires a bindable class or mixin: ${entry.key}',
        );
      }
      classes[entry.key] = _applyClassOverride(selection, entry.value);
    }
    for (final entry in overrides.functions.entries) {
      final selection = functions[entry.key];
      if (selection == null) {
        throw StateError(
          'Auto override requires a bindable top-level function: ${entry.key}',
        );
      }
      functions[entry.key] = _applyFunctionOverride(selection, entry.value);
    }
    final unresolvedOverrides = <String>{
      ...overrides.classes.keys,
      ...overrides.functions.keys,
      ...excluded,
    }..removeAll(seenOverrides);
    if (unresolvedOverrides.isNotEmpty) {
      final names = unresolvedOverrides.toList()..sort();
      throw StateError(
        'Auto override target is not a public declaration: ${names.join(', ')}',
      );
    }

    return FlaxCodegenAutoBindingProposal(
      config: FlaxCodegenBindingConfig(
        seed.name,
        seed.library,
        seed.jsPackage,
        seed.dartOutput,
        seed.tsOutput,
        classes,
        additionalLibraries: seed.additionalLibraries,
        functions: functions,
        extensions: seed.extensions,
        callbackSnapshots: seed.callbackSnapshots,
        imports: seed.imports,
        types: types.toList()..sort(),
        typedefs: typedefs.toList()..sort(),
        topLevel: getters.isEmpty && setters.isEmpty
            ? seed.topLevel
            : FlaxCodegenTopLevelSelection(
                seed.topLevel?.jsName,
                getters.toList()..sort(),
                setters: setters.toList()..sort(),
              ),
        publicLibraries: seed.publicLibraries,
      ),
      skips: skips,
      notices: notices,
    );
  }

  bool _autoHidden(Element element) =>
      element.metadata.hasInternal ||
      element.metadata.hasVisibleForTesting ||
      element.metadata.hasProtected;

  bool _autoUsesUnavailable(DartType type, Set<String> unavailable) =>
      switch (type) {
        InterfaceType() =>
          unavailable.contains(identity(type.element)) ||
              type.typeArguments.any(
                (argument) => _autoUsesUnavailable(argument, unavailable),
              ),
        FunctionType() =>
          _autoUsesUnavailable(type.returnType, unavailable) ||
              type.formalParameters.any(
                (p) => _autoUsesUnavailable(p.type, unavailable),
              ),
        RecordType() => [
          ...type.positionalFields,
          ...type.namedFields,
        ].any((field) => _autoUsesUnavailable(field.type, unavailable)),
        _ => false,
      };

  Map<String, List<InterfaceType>> _autoConcreteUses(
    Iterable<Element> elements,
  ) {
    final result = <String, List<InterfaceType>>{};
    final seenElements = <Element>{};

    void type(DartType value) {
      if (value is InterfaceType) {
        if (value.typeArguments.isNotEmpty &&
            value.typeArguments.every(
              (argument) => argument is! TypeParameterType,
            )) {
          result.putIfAbsent(identity(value.element), () => []).add(value);
        }
        for (final argument in value.typeArguments) {
          type(argument);
        }
        return;
      }
      if (value is FunctionType) {
        type(value.returnType);
        for (final parameter in value.formalParameters) {
          type(parameter.type);
        }
        for (final parameter in value.typeParameters) {
          final bound = parameter.bound;
          if (bound != null) type(bound);
        }
        return;
      }
      if (value is RecordType) {
        for (final field in value.positionalFields) {
          type(field.type);
        }
        for (final field in value.namedFields) {
          type(field.type);
        }
      }
    }

    void executable(ExecutableElement member) {
      type(member.returnType);
      for (final parameter in member.formalParameters) {
        type(parameter.type);
      }
      for (final parameter in member.typeParameters) {
        final bound = parameter.bound;
        if (bound != null) type(bound);
      }
    }

    for (final element in elements) {
      if (!seenElements.add(element)) continue;
      if (element is InterfaceElement) {
        for (final supertype in element.allSupertypes) {
          type(supertype);
        }
        if (element is ClassElement) {
          for (final constructor in element.constructors) {
            executable(constructor);
          }
        }
        for (final getter in element.getters) {
          executable(getter);
        }
        for (final setter in element.setters) {
          executable(setter);
        }
        for (final method in element.methods) {
          executable(method);
        }
      } else if (element is TypeAliasElement) {
        type(element.aliasedType);
      } else if (element is ExecutableElement) {
        executable(element);
      } else if (element is PropertyInducingElement) {
        type(element.type);
      }
    }
    return result;
  }

  bool _isAutoWidgetInterface(InterfaceElement element) {
    if (element is! ClassElement ||
        !element.isAbstract ||
        element.typeParameters.isNotEmpty ||
        !_isFlutterWidget(element) ||
        element.isBase ||
        element.isFinal ||
        element.isSealed) {
      return false;
    }
    return element.supertype?.isDartCoreObject ?? false;
  }

  Future<FlaxCodegenClassSelection?> _autoWidgetInterfaceSelection(
    FlaxCodegenBindingConfig seed,
    InterfaceElement element,
    List<FlaxCodegenSkip> skips,
    List<FlaxCodegenNotice> notices,
  ) async {
    try {
      final (exports, libraries) = await _resolutionExports(seed);
      final native = _WidgetInterfaceParser(
        _contexts.contexts.first.currentSession,
        exports,
        libraries,
      );
      final members = native._members(element.thisType);
      final getters = <String>[];
      final setters = <String>[];
      final methods = <String, List<String>>{};
      for (final entry in members.entries) {
        final split = entry.key.indexOf(':');
        final kind = entry.key.substring(0, split);
        final name = entry.key.substring(split + 1);
        if (_autoHidden(entry.value)) continue;
        if (entry.value.metadata.hasDeprecated) {
          notices.add(
            FlaxCodegenNotice(
              target: '${element.name}.$name',
              message: 'Deprecated API remains selected',
            ),
          );
        }
        switch (kind) {
          case 'getter':
            getters.add(name);
          case 'setter':
            setters.add(name);
          case 'method':
            methods[name] = entry.value.formalParameters
                .map((parameter) => parameter.name!)
                .toList();
        }
      }
      final selection = FlaxCodegenClassSelection(
        const {},
        kind: 'widgetInterface',
        getters: getters,
        setters: setters,
        methods: methods,
      );
      await native.parse(element.thisType, selection);
      return selection;
    } on StateError catch (error) {
      skips.add(FlaxCodegenSkip(target: element.name!, reason: error.message));
      return null;
    }
  }

  FlaxCodegenClassSelection _filterAutoSelection(
    InterfaceElement element,
    FlaxCodegenClassSelection selection,
    List<FlaxCodegenSkip> skips,
    List<FlaxCodegenNotice> notices,
  ) {
    bool visible(ExecutableElement? member, String target) {
      if (member == null) return true;
      if (_autoHidden(member)) {
        skips.add(
          FlaxCodegenSkip(
            target: target,
            reason: 'Excluded by API visibility annotation',
          ),
        );
        return false;
      }
      if (member.metadata.hasDeprecated) {
        notices.add(
          FlaxCodegenNotice(
            target: target,
            message: 'Deprecated API remains selected',
          ),
        );
      }
      return true;
    }

    final constructors = <String, List<String>>{};
    if (element is ClassElement) {
      for (final entry in selection.constructors.entries) {
        final constructor = element.constructors
            .where(
              (candidate) =>
                  (candidate.name == 'new' ? '' : candidate.name) == entry.key,
            )
            .firstOrNull;
        if (visible(constructor, '${element.name}.${entry.key}')) {
          constructors[entry.key] = entry.value;
        }
      }
    }
    final getters = [
      for (final name in selection.getters)
        if (visible(
          element.thisType.lookUpGetter(name, element.library),
          '${element.name}.$name',
        ))
          name,
    ];
    final setters = [
      for (final name in selection.setters)
        if (visible(
          element.thisType.lookUpSetter(name, element.library),
          '${element.name}.$name=',
        ))
          name,
    ];
    final staticGetters = [
      for (final name in selection.staticGetters)
        if (visible(element.getGetter(name), '${element.name}.$name')) name,
    ];
    final instanceMethods = <String, List<String>>{
      for (final entry in selection.instanceMethods.entries)
        if (visible(
          element.thisType.lookUpMethod(entry.key, element.library),
          '${element.name}.${entry.key}',
        ))
          entry.key: entry.value,
    };
    final methods = <String, List<String>>{
      for (final entry in selection.methods.entries)
        if (visible(
          element.getMethod(entry.key),
          '${element.name}.${entry.key}',
        ))
          entry.key: entry.value,
    };
    return _copyClassSelection(
      selection,
      constructors: constructors,
      getters: getters,
      setters: setters,
      staticGetters: staticGetters,
      instanceMethods: instanceMethods,
      methods: methods,
    );
  }

  bool _autoTypedefSupported(
    _FlaxCodegenTypeScope scope,
    TypeAliasElement element,
    String name,
    List<FlaxCodegenSkip> skips,
  ) {
    try {
      final typeOnlyBounds = element.typeParameters.any(
        (parameter) => scope
            .typeRef(
              parameter.bound ??
                  element.library.typeProvider.objectQuestionType,
              forTypescript: true,
              typeOnlyPosition: true,
            )
            .containsTypeOnly,
      );
      final alias = FlaxCodegenTypeAliasModel(
        name: name,
        originatingUri: element.library.uri.toString(),
        originatingName: element.name!,
        target: scope.typeRef(
          element.aliasedType,
          forTypescript: typeOnlyBounds,
        ),
        typeParameters: [
          for (final parameter in element.typeParameters)
            FlaxCodegenGenericParameter(
              parameter.name!,
              scope.typeRef(
                parameter.bound ??
                    element.library.typeProvider.objectQuestionType,
                forTypescript: true,
                typeOnlyPosition: true,
              ),
              defaultType: typeOnlyBounds
                  ? null
                  : scope
                        .typeRef(
                          parameter.bound ??
                              element.library.typeProvider.objectQuestionType,
                          erasing: {parameter},
                        )
                        .declaredAs(
                          scope.typeRef(
                            parameter.bound ??
                                element.library.typeProvider.objectQuestionType,
                            forTypescript: true,
                            typeOnlyPosition: true,
                          ),
                        ),
              genericIdentity: parameter,
            ),
        ],
      );
      alias.validate();
      return true;
    } on StateError catch (error) {
      skips.add(FlaxCodegenSkip(target: name, reason: error.message));
      return false;
    }
  }

  FlaxCodegenFunctionSelection? _autoFunctionSelection({
    required _FlaxCodegenTypeScope scope,
    required TopLevelFunctionElement function,
    required String name,
    required List<FlaxCodegenSkip> skips,
  }) {
    if (function.typeParameters.isNotEmpty) {
      skips.add(
        FlaxCodegenSkip(
          target: name,
          reason: 'Explicit runtime type arguments required: $name',
        ),
      );
      return null;
    }
    try {
      final result = scope.typeRef(function.returnType);
      result.validateResult('$name result');
      if (result.kind == 'void' &&
          function.fragments.any(
            (fragment) => fragment.isAsynchronous || fragment.isGenerator,
          )) {
        throw StateError('Top-level void functions must execute synchronously');
      }
    } on StateError catch (error) {
      skips.add(FlaxCodegenSkip(target: name, reason: error.message));
      return null;
    }

    final selected = <String>[];
    for (final parameter in function.formalParameters) {
      final paramName = parameter.name;
      if (!_usableMemberName(paramName)) {
        if (parameter.isRequired || parameter.isPositional) {
          skips.add(
            FlaxCodegenSkip(
              target: '$name.$paramName',
              reason: 'Cannot omit required or positional parameter',
            ),
          );
          return null;
        }
        continue;
      }
      final localSkips = <FlaxCodegenSkip>[];
      final bound = _bindParameter(
        parser: this,
        scope: scope,
        parameter: parameter,
        location: '$name.$paramName',
        widget: false,
        kind: 'object',
        skips: localSkips,
      );
      final type = scope.tryTypeRef(parameter.type).type;
      final unsupported =
          type == null ||
          {'page', 'state', 'future', 'stream', 'route'}.contains(type.kind) ||
          (type.containsWidget &&
              !{'widget', 'callback'}.contains(type.kind)) ||
          _autoNeedsWidgetOwner(type);
      if (bound == null || unsupported) {
        skips.addAll(localSkips);
        if (unsupported && localSkips.isEmpty) {
          skips.add(
            FlaxCodegenSkip(
              target: '$name.$paramName',
              reason: 'Unsupported automatic function input',
            ),
          );
        }
        if (parameter.isRequired || parameter.isPositional) return null;
        continue;
      }
      selected.add(paramName!);
    }
    return FlaxCodegenFunctionSelection(selected);
  }

  bool _autoNeedsWidgetOwner(FlaxCodegenTypeRef type) => type.kind == 'callback'
      ? type.result!.kind == 'route' ||
            type.parameters.any((parameter) => parameter.type.kind == 'context')
      : (type.item != null && _autoNeedsWidgetOwner(type.item!)) ||
            (type.key != null && _autoNeedsWidgetOwner(type.key!)) ||
            type.recordFields.any((field) => _autoNeedsWidgetOwner(field.type));

  void _autoTopLevel({
    required _FlaxCodegenTypeScope scope,
    required Map<String, Element> exports,
    required String name,
    required Element element,
    required Set<String> getters,
    required Set<String> setters,
    required List<FlaxCodegenSkip> skips,
  }) {
    final getter = switch (element) {
      GetterElement() => element,
      TopLevelVariableElement() => element.getter,
      _ => null,
    };
    if (getter != null && !_autoHidden(getter)) {
      try {
        scope.typeRef(getter.returnType).validateResult('$name getter');
        getters.add(name);
      } on StateError catch (error) {
        skips.add(FlaxCodegenSkip(target: name, reason: error.message));
      }
    }
    final setterElement = exports['$name='] ?? element;
    final setter = switch (setterElement) {
      SetterElement() => setterElement,
      TopLevelVariableElement() => setterElement.setter,
      GetterElement() => setterElement.correspondingSetter,
      _ => null,
    };
    if (setter == null || _autoHidden(setter)) return;
    final variable = setter.variable;
    if (variable is TopLevelVariableElement &&
        (variable.isConst || variable.isFinal)) {
      return;
    }
    try {
      final type = scope.typeRef(setter.formalParameters.single.type);
      type.validate('$name setter');
      type.validateCallbacks('$name setter', input: true);
      if (type.containsWidget ||
          {'context', 'state', 'route', 'page'}.contains(type.kind)) {
        throw StateError(
          'Flutter tree/reference semantics require an explicit override',
        );
      }
      setters.add(name);
    } on StateError catch (error) {
      skips.add(FlaxCodegenSkip(target: '$name=', reason: error.message));
    }
  }

  Future<void> _attachAutoWidgetInterfaces({
    required FlaxCodegenBindingConfig seed,
    required _FlaxCodegenTypeScope scope,
    required Map<String, FlaxCodegenClassSelection> classes,
    required Map<String, InterfaceElement> elements,
    required Map<String, Element> exports,
    required List<FlaxCodegenSkip> skips,
  }) async {
    final interfaces = <String, InterfaceElement>{
      for (final entry in classes.entries)
        if (entry.value.kind == 'widgetInterface' &&
            exports[entry.key] is InterfaceElement)
          entry.key: exports[entry.key]! as InterfaceElement,
    };
    for (final entry in classes.entries.toList()) {
      if (entry.value.kind != null || interfaces.containsKey(entry.key)) {
        continue;
      }
      final element = elements[entry.key] ?? exports[entry.key];
      if (element is! ClassElement || !_isFlutterWidget(element)) continue;
      final matches = <String>[];
      for (final contract in interfaces.entries) {
        if (element.library.typeSystem.isSubtypeOf(
          element.thisType,
          contract.value.thisType,
        )) {
          matches.add(contract.key);
        }
      }
      for (final parent in element.allSupertypes) {
        if (_adaptations[identity(parent.element)] == 'widgetInterface') {
          matches.add(parent.element.name!);
        }
      }
      matches.removeWhere((name) => name == entry.key);
      final uniqueMatches = matches.toSet().toList()..sort();
      if (uniqueMatches.isEmpty) continue;

      var selection = entry.value;
      var blocked = false;
      final constructors = <String, List<String>>{};
      for (final constructorEntry in selection.constructors.entries) {
        final constructor = element.constructors.firstWhere(
          (candidate) =>
              (candidate.name == 'new' ? '' : candidate.name) ==
              constructorEntry.key,
        );
        final kept = <String>[];
        for (final name in constructorEntry.value) {
          final parameter = constructor.formalParameters.firstWhere(
            (candidate) => candidate.name == name,
          );
          final type = scope.tryTypeRef(parameter.type).type;
          if (type?.containsCallback != true) {
            kept.add(name);
            continue;
          }
          if (parameter.isRequired || parameter.isPositional) {
            blocked = true;
            break;
          }
          skips.add(
            FlaxCodegenSkip(
              target: '${entry.key}.${constructorEntry.key}.$name',
              reason: 'Fixed Widget interface inputs exclude callbacks',
            ),
          );
        }
        if (blocked) break;
        constructors[constructorEntry.key] = kept;
      }
      if (blocked) {
        skips.add(
          FlaxCodegenSkip(
            target: entry.key,
            reason:
                'Widget interface requires a fixed-input constructor surface',
          ),
        );
        continue;
      }
      selection = _copyClassSelection(
        selection,
        constructors: constructors,
        widgetInterfaces: uniqueMatches,
      );
      classes[entry.key] = selection;
    }
  }

  FlaxCodegenClassSelection? _autoProposalBase(
    FlaxCodegenClassOverride? override,
  ) {
    if (override == null) return null;
    final selection = override.selection;
    final fields = override.fields;
    final proxy =
        fields.contains('proxy') &&
            {'extends', 'implements'}.contains(selection.proxy)
        ? selection.proxy
        : null;
    final constructors = fields.contains('constructors')
        ? selection.constructors
        : const <String, List<String>>{};
    final typeArguments = fields.contains('typeArguments')
        ? selection.typeArguments
        : const <String>[];
    final deferredFactories = fields.contains('deferredFactories')
        ? selection.deferredFactories
        : const <String>[];
    final genericScalar =
        fields.contains('genericScalar') && selection.genericScalar;
    final kind = fields.contains('kind') ? selection.kind : null;
    final jsName = fields.contains('jsName') ? selection.jsName : null;
    if (constructors.isEmpty &&
        typeArguments.isEmpty &&
        deferredFactories.isEmpty &&
        !genericScalar &&
        kind == null &&
        proxy == null &&
        jsName == null) {
      return null;
    }
    return FlaxCodegenClassSelection(
      constructors,
      genericScalar: genericScalar,
      deferredFactories: deferredFactories,
      typeArguments: typeArguments,
      kind: kind,
      proxy: proxy,
      jsName: jsName,
    );
  }

  FlaxCodegenClassSelection _applyClassOverride(
    FlaxCodegenClassSelection source,
    FlaxCodegenClassOverride override,
  ) {
    final value = override.selection;
    final fields = override.fields;
    bool has(String name) => fields.contains(name);
    return FlaxCodegenClassSelection(
      has('constructors') ? value.constructors : source.constructors,
      widgetInterfaces: has('widgetInterfaces')
          ? value.widgetInterfaces
          : source.widgetInterfaces,
      independentWidgetCallbacks: has('independentWidgetCallbacks')
          ? value.independentWidgetCallbacks
          : source.independentWidgetCallbacks,
      genericScalar: has('genericScalar')
          ? value.genericScalar
          : source.genericScalar,
      eraseGenerics: has('eraseGenerics')
          ? value.eraseGenerics
          : source.eraseGenerics,
      asyncIterableFactory: has('asyncIterableFactory')
          ? value.asyncIterableFactory
          : source.asyncIterableFactory,
      callbackSignatures: has('callbackSignatures')
          ? value.callbackSignatures
          : source.callbackSignatures,
      callbackOptionalParameters: has('callbackOptionalParameters')
          ? value.callbackOptionalParameters
          : source.callbackOptionalParameters,
      callbackErrorParameters: has('callbackErrorParameters')
          ? value.callbackErrorParameters
          : source.callbackErrorParameters,
      callbackScopedParameters: has('callbackScopedParameters')
          ? value.callbackScopedParameters
          : source.callbackScopedParameters,
      typeArguments: has('typeArguments')
          ? value.typeArguments
          : source.typeArguments,
      methodTypeArguments: has('methodTypeArguments')
          ? value.methodTypeArguments
          : source.methodTypeArguments,
      deferredFactories: has('deferredFactories')
          ? value.deferredFactories
          : source.deferredFactories,
      instanceMethods: has('instanceMethods')
          ? value.instanceMethods
          : source.instanceMethods,
      startsRoute: has('startsRoute') ? value.startsRoute : source.startsRoute,
      kind: has('kind') ? value.kind : source.kind,
      proxy: has('proxy') ? value.proxy : source.proxy,
      proxyOverrides: has('proxyOverrides')
          ? value.proxyOverrides
          : source.proxyOverrides,
      proxySuper: has('proxySuper') ? value.proxySuper : source.proxySuper,
      staticGetters: has('staticGetters')
          ? value.staticGetters
          : source.staticGetters,
      errorGetters: has('errorGetters')
          ? value.errorGetters
          : source.errorGetters,
      pageAdapter: has('pageAdapter') ? value.pageAdapter : source.pageAdapter,
      setters: has('setters') ? value.setters : source.setters,
      disposeMethod: has('disposeMethod')
          ? value.disposeMethod
          : source.disposeMethod,
      listenerPairs: has('listenerPairs')
          ? value.listenerPairs
          : source.listenerPairs,
      getters: has('getters') ? value.getters : source.getters,
      methods: has('methods') ? value.methods : source.methods,
      data: has('data') ? value.data : source.data,
      jsName: has('jsName') ? value.jsName : source.jsName,
    );
  }

  FlaxCodegenFunctionSelection _applyFunctionOverride(
    FlaxCodegenFunctionSelection source,
    FlaxCodegenFunctionOverride override,
  ) {
    final value = override.selection;
    final fields = override.fields;
    return FlaxCodegenFunctionSelection(
      fields.contains('parameters') ? value.parameters : source.parameters,
      typeArguments: fields.contains('typeArguments')
          ? value.typeArguments
          : source.typeArguments,
      dataParameters: fields.contains('data')
          ? value.dataParameters
          : source.dataParameters,
      dataResult: fields.contains('data')
          ? value.dataResult
          : source.dataResult,
      route: fields.contains('route') ? value.route : source.route,
    );
  }

  FlaxCodegenClassSelection _copyClassSelection(
    FlaxCodegenClassSelection source, {
    Map<String, List<String>>? constructors,
    List<String>? widgetInterfaces,
    Map<String, List<String>>? independentWidgetCallbacks,
    List<String>? getters,
    List<String>? setters,
    List<String>? staticGetters,
    Map<String, List<String>>? instanceMethods,
    Map<String, List<String>>? methods,
  }) => FlaxCodegenClassSelection(
    constructors ?? source.constructors,
    widgetInterfaces: widgetInterfaces ?? source.widgetInterfaces,
    independentWidgetCallbacks:
        independentWidgetCallbacks ?? source.independentWidgetCallbacks,
    genericScalar: source.genericScalar,
    eraseGenerics: source.eraseGenerics,
    asyncIterableFactory: source.asyncIterableFactory,
    callbackSignatures: source.callbackSignatures,
    callbackOptionalParameters: source.callbackOptionalParameters,
    callbackErrorParameters: source.callbackErrorParameters,
    callbackScopedParameters: source.callbackScopedParameters,
    typeArguments: source.typeArguments,
    methodTypeArguments: source.methodTypeArguments,
    deferredFactories: source.deferredFactories,
    instanceMethods: instanceMethods ?? source.instanceMethods,
    startsRoute: source.startsRoute,
    kind: source.kind,
    proxy: source.proxy,
    proxyOverrides: source.proxyOverrides,
    proxySuper: source.proxySuper,
    staticGetters: staticGetters ?? source.staticGetters,
    errorGetters: source.errorGetters,
    pageAdapter: source.pageAdapter,
    setters: setters ?? source.setters,
    disposeMethod: source.disposeMethod,
    listenerPairs: source.listenerPairs,
    getters: getters ?? source.getters,
    methods: methods ?? source.methods,
    data: source.data,
    jsName: source.jsName,
  );
}
