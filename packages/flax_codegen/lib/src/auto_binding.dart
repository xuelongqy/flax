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
    bool inferPublicTypeCarriers = true,
  }) async {
    await prepare([seed]);
    final result = await _contexts.contexts.first.currentSession
        .getLibraryByUri(seed.library);
    if (result is! LibraryElementResult) {
      throw StateError('Cannot resolve ${seed.library}');
    }
    final (publicExports, _) = await _publicExports(seed);
    final exports = seed.hasAutomaticSelection
        ? publicExports
        : result.element.exportNamespace.definedNames2;
    _parseSnapshots(seed, publicExports);
    final requested = {
      ...seed.automaticClasses,
      ...seed.automaticFunctions,
      ...seed.automaticExtensions,
    };
    final scoped = seed.hasAutomaticSelection && !seed.automaticLibrary;
    for (final name in requested) {
      final element = exports[name];
      if (element == null ||
          seed.automaticClasses.contains(name) &&
              element is! InterfaceElement ||
          seed.automaticFunctions.contains(name) &&
              element is! TopLevelFunctionElement ||
          seed.automaticExtensions.contains(name) &&
              element is! ExtensionElement &&
              element is! ExtensionTypeElement) {
        throw StateError('Unknown public automatic declaration: $name');
      }
    }
    final typeCarriers = {
      ..._localDependencyCarriers,
      if (inferPublicTypeCarriers)
        ...await _discoverAutoTypeCarriers(seed.library, result.element),
    };
    final scope = await _openTypeScope(
      seed,
      automaticTypeCarriers: typeCarriers,
    );
    final skips = <FlaxCodegenSkip>[];
    final notices = <FlaxCodegenNotice>[];
    final concreteUses = _autoConcreteUses(exports.values);
    final classes = <String, FlaxCodegenClassSelection>{
      for (final entry in seed.classes.entries)
        if (!seed.automaticClasses.contains(entry.key)) entry.key: entry.value,
    };
    final functions = <String, FlaxCodegenFunctionSelection>{
      for (final entry in seed.functions.entries)
        if (!seed.automaticFunctions.contains(entry.key))
          entry.key: entry.value,
    };
    final extensions = <String, FlaxCodegenExtensionSelection>{
      for (final entry in seed.extensions.entries)
        if (!seed.automaticExtensions.contains(entry.key))
          entry.key: entry.value,
    };
    final types = <String>{...seed.types};
    final typedefs = <String>{...seed.typedefs};
    final getters = <String>{...?seed.topLevel?.getters};
    final setters = <String>{...?seed.topLevel?.setters};
    final elements = <String, InterfaceElement>{};
    final excluded = overrides.exclude.toSet();
    final seenOverrides = <String>{};
    final reusedDeclarations = <String>{};
    final hiddenTypes = <String>{};
    final policySkipped = <String>{};

    final names =
        exports.keys
            .map((name) => name.replaceFirst(RegExp(r'=$'), ''))
            .toSet()
            .toList()
          ..sort();
    for (final name in names) {
      if (scoped && !requested.contains(name)) {
        if (excluded.contains(name)) seenOverrides.add(name);
        continue;
      }
      final element = exports[name] ?? exports['$name='];
      if (element == null || element.isPrivate) continue;
      final localOwner = _localDeclarationOwners[_declarationSource(element)];
      if (seed.automaticLibrary &&
          localOwner != null &&
          localOwner != seed.name &&
          element is! GetterElement &&
          element is! SetterElement &&
          element is! TopLevelVariableElement) {
        reusedDeclarations.add(name);
        skips.add(
          FlaxCodegenSkip(
            target: name,
            reason: 'Reuses sibling module $localOwner',
            code: 'existing_sibling',
          ),
        );
        continue;
      }
      if (excluded.contains(name)) {
        if (element is InterfaceElement) hiddenTypes.add(identity(element));
        seenOverrides.add(name);
        skips.add(
          FlaxCodegenSkip(
            target: name,
            reason: 'Excluded by auto override',
            code: 'excluded_by_override',
          ),
        );
        continue;
      }
      if (_autoHidden(element)) {
        if (element is InterfaceElement) hiddenTypes.add(identity(element));
        skips.add(
          FlaxCodegenSkip(
            target: name,
            reason: 'Excluded by API visibility annotation',
            code: 'visibility_annotation',
          ),
        );
        continue;
      }
      if (element is InterfaceElement) {
        final reason = _dependencyPolicyError(element);
        if (reason != null) {
          policySkipped.add(name);
          hiddenTypes.add(identity(element));
          skips.add(
            FlaxCodegenSkip(
              target: name,
              reason: reason,
              code: 'external_dependency_unbound',
            ),
          );
          continue;
        }
      }
      if (element.metadata.hasDeprecated) {
        notices.add(
          FlaxCodegenNotice(
            target: name,
            message: 'Deprecated API remains selected',
          ),
        );
      }

      if (element is ExtensionTypeElement) {
        if (_autoExtensionTypeSupported(scope, element, name, skips)) {
          types.add(name);
          if (!extensions.containsKey(name)) {
            final view = _autoExtensionSelection(
              scope: scope,
              extension: element,
              name: name,
              skips: skips,
              notices: notices,
            );
            if (view != null) extensions[name] = view;
          }
        }
        continue;
      }
      if (element is ExtensionElement) {
        if (extensions.containsKey(name)) continue;
        final selection = _autoExtensionSelection(
          scope: scope,
          extension: element,
          name: name,
          skips: skips,
          notices: notices,
        );
        if (selection != null) extensions[name] = selection;
        continue;
      }
      if (element is TypeAliasElement) {
        if (_autoTypedefSupported(scope, element, name, skips)) {
          typedefs.add(name);
        }
        continue;
      }
      if (element is TopLevelFunctionElement) {
        final functionOverride = overrides.functions[name];
        if (functionOverride != null) seenOverrides.add(name);
        if (functions.containsKey(name)) continue;
        // Exact parameter overrides are validated by the fail-closed parser.
        if (overrides.functions[name]?.fields.contains('parameters') == true) {
          functions[name] = overrides.functions[name]!.selection;
          continue;
        }
        var selection = _autoFunctionSelection(
          scope: scope,
          function: element,
          name: name,
          skips: skips,
        );
        if (selection != null && functionOverride != null) {
          selection = _applyFunctionOverride(selection, functionOverride);
        }
        final provider =
            _dependencyFunctions['${element.library.uri}::${element.name}'];
        final coreProvider =
            provider?.$1.moduleId?.startsWith('flax.core/') == true;
        final compatible =
            selection != null &&
            provider != null &&
            selection.dataResult == _containsData(provider.$2.call.result) &&
            selection.typeArguments.join(',') ==
                provider.$2.call.typeArguments.join(',') &&
            selection.parameters.every(
              (name) => provider.$2.call.parameters.any(
                (p) =>
                    p.name == name &&
                    selection!.dataParameters.contains(name) ==
                        _containsData(p.type),
              ),
            ) &&
            (selection.route?.builders ?? const <String>[]).every(
              (name) => provider.$2.route?.builders.contains(name) == true,
            );
        if (coreProvider && functionOverride != null && !compatible) {
          throw StateError('Core function override is incompatible: $name');
        }
        if (selection != null &&
            provider != null &&
            (compatible || coreProvider && functionOverride == null)) {
          reusedDeclarations.add(name);
          skips.add(
            FlaxCodegenSkip(
              target: name,
              code: 'existing_provider',
              reason: 'Reuses existing provider ${provider.$1.jsPackage}',
            ),
          );
        } else if (selection != null) {
          functions[name] = selection;
        }
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
      final widgetInterface = _isAutoWidgetInterface(element);
      final inferred = widgetInterface
          ? await _autoWidgetInterfaceSelection(seed, element, skips, notices)
          : null;
      if (widgetInterface && inferred == null) continue;
      final proposed = await _proposeSelection(
        this,
        element,
        library: seed,
        base: _autoProposalBase(classOverride),
        concreteUses: concreteUses[identity(element)] ?? const [],
        automaticTypeCarriers: typeCarriers,
        automaticNotices: notices,
        inferred: inferred,
        expandOwned:
            seed.automaticLibrary || seed.automaticClasses.contains(name),
        inferProxy: !scoped || _localDependencyModuleNames.contains(seed.name),
        selectionOverride: classOverride,
      );
      skips.addAll(proposed.skips);
      final selection = proposed.selection;
      if (proposed.provider != null && selection == null) {
        if (classOverride != null &&
            proposed.skips.any((skip) => skip.code.startsWith('provider_'))) {
          throw StateError(
            proposed.skips.map((skip) => skip.reason).join('\n'),
          );
        }
        reusedDeclarations.add(name);
        skips.add(
          FlaxCodegenSkip(
            target: name,
            reason: 'Reuses existing provider ${proposed.provider}',
            code: 'existing_provider',
          ),
        );
      }
      if (selection != null) classes[name] = selection;
    }

    // Nominal generic bounds need reference tokens even without callable members.
    void boundTypes(DartType type) {
      if (type is! InterfaceType || type.isDartCoreObject) return;
      final element = type.element;
      final name = element.name!;
      if (!classes.containsKey(name) &&
          !types.contains(name) &&
          !excluded.contains(name) &&
          exports[name] == element &&
          !_autoHidden(element) &&
          _nativeJsValueType(element) == null &&
          !_selections.containsKey(identity(element)) &&
          !_dependencyTypeOwners.containsKey(identity(element))) {
        classes[name] = const FlaxCodegenClassSelection({}, kind: 'object');
        for (final parameter in element.typeParameters) {
          if (parameter.bound case final bound?) boundTypes(bound);
        }
      }
      for (final argument in type.typeArguments) {
        boundTypes(argument);
      }
    }

    void bounds(Iterable<TypeParameterElement> parameters) {
      for (final parameter in parameters) {
        if (parameter.bound case final bound?) boundTypes(bound);
      }
    }

    for (final name in classes.keys.toList()) {
      final element = elements[name];
      if (element == null) continue;
      bounds(element.typeParameters);
      for (final member in classes[name]!.instanceMethods.keys) {
        bounds(
          element.thisType
                  .lookUpMethod(member, element.library)
                  ?.typeParameters ??
              [],
        );
      }
      for (final member in classes[name]!.methods.keys) {
        bounds(element.getMethod(member)?.typeParameters ?? []);
      }
    }
    for (final name in functions.keys) {
      final element = exports[name];
      if (element is TopLevelFunctionElement) bounds(element.typeParameters);
    }
    for (final name in extensions.keys) {
      final element = exports[name];
      if (element is ExtensionElement) bounds(element.typeParameters);
    }
    for (final name in typedefs) {
      final element = exports[name];
      if (element is TypeAliasElement) bounds(element.typeParameters);
    }

    // A skipped runtime specialization cannot supply values to its consumers.
    // Remove dependent declarations before dependency closure can resurrect it.
    final unavailable = <String>{
      ...hiddenTypes,
      for (final entry in elements.entries)
        if (!classes.containsKey(entry.key) &&
            !types.contains(entry.key) &&
            _nativeJsValueType(entry.value) == null &&
            !_dependencyTypeOwners.containsKey(identity(entry.value)))
          identity(entry.value),
    };
    bool changed;
    do {
      changed = false;
      for (final entry in classes.entries.toList()) {
        if (seed.classes.containsKey(entry.key) &&
                !seed.automaticClasses.contains(entry.key) ||
            overrides.classes.containsKey(entry.key)) {
          continue;
        }
        final element = elements[entry.key];
        if (element == null) continue;
        final selection = entry.value;
        final signatures = <DartType>[
          for (final parameter in element.typeParameters) ?parameter.bound,
        ];
        if (element is ClassElement || element is EnumElement) {
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
        for (final name in selection.getters) {
          final getter = element.thisType.lookUpGetter(name, element.library);
          if (getter != null) signatures.add(getter.returnType);
        }
        for (final name in selection.staticGetters) {
          final getter = element.getGetter(name);
          if (getter != null) signatures.add(getter.returnType);
        }
        for (final name in selection.setters) {
          final setter = element.thisType.lookUpSetter(name, element.library);
          if (setter != null) signatures.add(setter.type);
        }
        for (final name in selection.staticSetters) {
          final setter = element.getSetter(name);
          if (setter != null) signatures.add(setter.type);
        }
        for (final name in selection.instanceMethods.keys) {
          final method = element.thisType.lookUpMethod(name, element.library);
          if (method != null) signatures.add(method.type);
        }
        for (final name in selection.methods.keys) {
          final method = element.getMethod(name);
          if (method != null) signatures.add(method.type);
        }
        for (final name in selection.operators.keys) {
          final method = _classOperator(element.thisType, name);
          if (method != null) signatures.add(method.type);
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
            code: 'signature_depends_on_skipped',
          ),
        );
        changed = true;
      }
    } while (changed);
    for (final name in functions.keys.toList()) {
      final element = exports[name];
      if (seed.functions.containsKey(name) &&
              !seed.automaticFunctions.contains(name) ||
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
            code: 'signature_depends_on_skipped',
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
            code: 'alias_depends_on_skipped',
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
              code: 'value_depends_on_skipped',
            ),
          );
        }
      }
    }

    await _attachAutoWidgetInterfaces(
      classes: classes,
      elements: elements,
      exports: exports,
    );

    for (final entry in overrides.classes.entries) {
      if (reusedDeclarations.contains(entry.key)) continue;
      final selection = classes[entry.key];
      if (selection == null) {
        throw StateError(
          'Auto override requires a bindable class or mixin: ${entry.key}',
        );
      }
      classes[entry.key] = _applyClassOverride(selection, entry.value);
    }
    for (final entry in overrides.functions.entries) {
      if (reusedDeclarations.contains(entry.key)) continue;
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

    for (final name in requested.difference(excluded)) {
      if (policySkipped.contains(name) ||
          skips.any(
            (skip) =>
                skip.code == 'external_dependency_unbound' &&
                (skip.target == name || skip.target.startsWith('$name.')),
          )) {
        continue;
      }
      final element = exports[name];
      final id = element is InterfaceElement ? identity(element) : null;
      final reused =
          id != null && _dependencyTypeOwners.containsKey(id) ||
          element is TopLevelFunctionElement &&
              _dependencyFunctions.containsKey(
                '${element.library.uri}::${element.name}',
              );
      if (!classes.containsKey(name) &&
          !functions.containsKey(name) &&
          !extensions.containsKey(name) &&
          !types.contains(name) &&
          !reused) {
        final reasons = skips
            .where(
              (skip) => skip.target == name || skip.target.startsWith('$name.'),
            )
            .map((skip) => skip.reason)
            .toSet()
            .join('; ');
        throw StateError('Cannot infer scoped declaration $name: $reasons');
      }
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
        extensions: extensions,
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
      typeCarriers: typeCarriers,
      skips: skips,
      notices: notices,
    );
  }

  Future<Map<String, String>> _discoverAutoTypeCarriers(
    String library,
    LibraryElement seedLibrary,
  ) async {
    final uri = Uri.tryParse(library);
    if (uri == null || uri.scheme != 'package' || uri.pathSegments.length < 2) {
      return const {};
    }

    var libPath = p.normalize(seedLibrary.firstFragment.source.fullName);
    for (var i = 1; i < uri.pathSegments.length; i++) {
      libPath = p.dirname(libPath);
    }
    final lib = Directory(libPath);
    if (!lib.existsSync()) return const {};

    final packageName = uri.pathSegments.first;
    final publicUris = <String>[];
    for (final entity in lib.listSync(recursive: true, followLinks: false)) {
      if (entity is! File || p.extension(entity.path) != '.dart') continue;
      final relative = p.relative(entity.path, from: lib.path);
      final segments = p.split(relative);
      if (segments.isEmpty || segments.first == 'src') continue;
      publicUris.add('package:$packageName/${p.posix.joinAll(segments)}');
    }
    publicUris.sort();
    final publicUriSet = publicUris.toSet();
    final candidates = <String, List<String>>{};
    final declaredPublicly = <String, String>{};
    final session = _contexts.contexts.first.currentSession;
    for (final publicUri in publicUris) {
      final resolved = await session.getLibraryByUri(publicUri);
      if (resolved is! LibraryElementResult) continue;
      for (final element
          in resolved.element.exportNamespace.definedNames2.values) {
        if (element is! InterfaceElement || element.isPrivate) continue;
        final declarationUri = element.library.uri;
        if (declarationUri.scheme != 'package' ||
            declarationUri.pathSegments.isEmpty ||
            declarationUri.pathSegments.first != packageName) {
          continue;
        }
        final id = identity(element);
        candidates.putIfAbsent(id, () => <String>[]).add(publicUri);
        final declaringUri = declarationUri.toString();
        if (publicUriSet.contains(declaringUri)) {
          declaredPublicly[id] = declaringUri;
        }
      }
    }

    return {
      for (final entry in candidates.entries)
        entry.key: declaredPublicly[entry.key] ?? (entry.value..sort()).first,
    };
  }

  bool _autoHidden(Element element) =>
      element.metadata.hasInternal || element.metadata.hasVisibleForTesting;

  bool _autoUsesUnavailable(DartType type, Set<String> unavailable) =>
      switch (type) {
        InterfaceType() =>
          unavailable.contains(identity(type.element)) ||
              type.typeArguments.any(
                (argument) => _autoUsesUnavailable(argument, unavailable),
              ),
        FunctionType() =>
          _autoUsesUnavailable(type.returnType, unavailable) ||
              type.typeParameters.any(
                (p) =>
                    p.bound != null &&
                    _autoUsesUnavailable(p.bound!, unavailable),
              ) ||
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
        if (element is ClassElement || element is EnumElement) {
          for (final constructor in element.constructors) {
            executable(constructor);
            if (constructor.redirectedConstructor case final redirected?) {
              type(redirected.returnType);
            }
          }
        }
        for (final getter in element.getters) {
          // The compiler's erased values list is not a constructor use site.
          if (element is EnumElement &&
              getter.isStatic &&
              getter.name == 'values') {
            continue;
          }
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
        !_isFlutterWidget(element) ||
        element.isBase ||
        element.isFinal ||
        element.isSealed) {
      return false;
    }
    // Interface inheritance must not turn Flutter lifecycle bases into contracts.
    for (InterfaceElement current = element; ;) {
      if (identity(current) ==
          'package:flutter/src/widgets/framework.dart::Widget') {
        return false;
      }
      final parent = current.supertype;
      if (parent == null || parent.isDartCoreObject) return true;
      final declared = parent.element;
      if (declared is! ClassElement ||
          !declared.isAbstract ||
          declared.isBase ||
          declared.isFinal ||
          declared.isSealed) {
        return false;
      }
      current = declared;
    }
  }

  Future<FlaxCodegenClassSelection?> _autoWidgetInterfaceSelection(
    FlaxCodegenBindingConfig seed,
    InterfaceElement element,
    List<FlaxCodegenSkip> skips,
    List<FlaxCodegenNotice> notices,
  ) async {
    try {
      final native = _WidgetInterfaceParser();
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
      final statics = await _proposeSelection(
        this,
        element,
        library: seed,
        ignoreProvider: true,
      );
      skips.addAll(statics.skips.where((skip) => skip.target.contains('.')));
      final selection = FlaxCodegenClassSelection(
        const {},
        staticGetters: statics.selection?.staticGetters ?? const [],
        staticSetters: statics.selection?.staticSetters ?? const [],
        kind: 'widgetInterface',
        getters: getters,
        setters: setters,
        methods: {...methods, ...?statics.selection?.methods},
      );
      if (element.typeParameters.isEmpty) {
        native.parse(element.thisType, selection);
      }
      if (!_dependencyOwners.containsKey(identity(element))) {
        final proxy = FlaxCodegenClassSelection(
          const {},
          kind: 'widgetInterface',
          proxy: 'implements',
          getters: getters,
          setters: setters,
          methods: selection.methods,
          staticGetters: selection.staticGetters,
          staticSetters: selection.staticSetters,
        );
        if (await _proxySelectionParses(this, seed, element.name!, proxy)) {
          return proxy;
        }
      }
      return selection;
    } on StateError catch (error) {
      skips.add(
        FlaxCodegenSkip(
          target: element.name!,
          reason: error.message,
          code: 'widget_interface_shape',
        ),
      );
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
            code: 'visibility_annotation',
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
    if (element is ClassElement || element is EnumElement) {
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
    final staticSetters = [
      for (final name in selection.staticSetters)
        if (visible(element.getSetter(name), '${element.name}.$name=')) name,
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
      staticSetters: staticSetters,
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
      skips.add(
        FlaxCodegenSkip(
          target: name,
          reason: error.message,
          code: 'typedef_shape',
        ),
      );
      return false;
    }
  }

  bool _autoExtensionTypeSupported(
    _FlaxCodegenTypeScope scope,
    ExtensionTypeElement element,
    String name,
    List<FlaxCodegenSkip> skips,
  ) {
    try {
      final representation = scope.typeRef(element.thisType);
      representation.validate('$name representation');
      representation.validateCallbacks('$name representation', input: true);
      return true;
    } on StateError catch (error) {
      skips.add(
        FlaxCodegenSkip(
          target: name,
          reason: error.message,
          code: 'extension_type_representation',
        ),
      );
      return false;
    }
  }

  FlaxCodegenExtensionSelection? _autoExtensionSelection({
    required _FlaxCodegenTypeScope scope,
    required InstanceElement extension,
    required String name,
    required List<FlaxCodegenSkip> skips,
    required List<FlaxCodegenNotice> notices,
  }) {
    try {
      final receiver = scope.typeRef(
        extension is ExtensionTypeElement
            ? extension.representation.type
            : (extension as ExtensionElement).extendedType,
      );
      receiver.validate('$name receiver');
    } on StateError catch (error) {
      skips.add(
        FlaxCodegenSkip(
          target: name,
          reason: error.message,
          code: extension.typeParameters.isEmpty
              ? 'extension_receiver_shape'
              : 'generic_receiver_specialization_required',
        ),
      );
      return null;
    }

    final getters = <String>[];
    final setters = <String>[];
    final methods = <String, List<String>>{};
    final staticGetters = <String>[];
    final staticSetters = <String>[];
    final staticSetterCandidates = <String>[];
    final staticMethods = <String, List<String>>{};
    final operators = <String, List<String>>{};
    final generatedNames = <String>{
      if (extension is ExtensionTypeElement) 'true:view',
    };

    bool visible(ExecutableElement member, String target) {
      if (_autoHidden(member)) {
        skips.add(
          FlaxCodegenSkip(
            target: target,
            reason: 'Excluded by API visibility annotation',
            code: 'visibility_annotation',
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

    bool reserve(String generated, String target, {bool isStatic = false}) {
      if (generatedNames.add('$isStatic:$generated')) {
        return true;
      }
      skips.add(
        FlaxCodegenSkip(
          target: target,
          reason: 'Generated extension export collides: $generated',
          code: 'extension_export_collision',
        ),
      );
      return false;
    }

    bool resultSupported(ExecutableElement member, String target) {
      if (!_supportsDependencySignature(
        member.type,
        target,
        skips,
        scope: scope,
      )) {
        return false;
      }
      try {
        for (final parameter in member.typeParameters) {
          final bound =
              parameter.bound ??
              extension.library.typeProvider.objectQuestionType;
          scope.typeRef(bound, forTypescript: true, typeOnlyPosition: true);
          scope.typeRef(bound, erasing: {parameter});
        }
        final result = scope.typeRef(member.returnType);
        result.validateResult('$target result');
        if (result.kind == 'void' &&
            member.fragments.any(
              (fragment) => fragment.isAsynchronous || fragment.isGenerator,
            )) {
          throw StateError(
            'Extension void members must execute synchronously: $target',
          );
        }
        return true;
      } on StateError catch (error) {
        skips.add(
          FlaxCodegenSkip(
            target: target,
            reason: error.message,
            code: member.typeParameters.isEmpty
                ? 'extension_member_shape'
                : 'generic_member_specialization_required',
          ),
        );
        return false;
      }
    }

    List<String>? parameters(ExecutableElement member, String target) {
      final selected = <String>[];
      for (final parameter in member.formalParameters) {
        final parameterName = parameter.name;
        if (!_usableParameterName(parameter)) {
          if (parameter.isRequired || parameter.isPositional) {
            skips.add(
              FlaxCodegenSkip(
                target: '$target.$parameterName',
                reason: 'Cannot omit required or positional parameter',
                code: 'required_parameter_name',
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
          location: '$target.$parameterName',
          widget: false,
          kind: 'object',
          skips: localSkips,
        );
        if (bound == null) {
          skips.addAll(localSkips);
          if (parameter.isRequired || parameter.isPositional) return null;
          continue;
        }
        selected.add(parameterName!);
      }
      return selected;
    }

    for (final getter in extension.getters) {
      final memberName = getter.name!;
      final target = '$name.$memberName';
      if (getter.isPrivate ||
          {'hashCode', 'runtimeType'}.contains(memberName) ||
          !_usableMemberName(memberName) ||
          !visible(getter, target) ||
          !resultSupported(getter, target)) {
        continue;
      }
      if (!reserve(memberName, target, isStatic: getter.isStatic)) continue;
      (getter.isStatic ? staticGetters : getters).add(memberName);
    }
    for (final setter in extension.setters) {
      final memberName = setter.name!.replaceFirst(RegExp(r'=$'), '');
      final target = '$name.$memberName=';
      if (setter.isPrivate ||
          (setter.variable.isOriginDeclaration &&
              (setter.variable.isConst || setter.variable.isFinal)) ||
          !_usableMemberName(memberName) ||
          !visible(setter, target)) {
        continue;
      }
      final selected = parameters(setter, target);
      if (selected == null) continue;
      if (setter.isStatic) {
        staticSetterCandidates.add(memberName);
        continue;
      }
      final generated =
          'set${memberName[0].toUpperCase()}${memberName.substring(1)}';
      if (!reserve(generated, target)) continue;
      setters.add(memberName);
    }
    for (final method in extension.methods) {
      final memberName = method.name!;
      final target = '$name.$memberName';
      if (method.isPrivate ||
          {'toString', 'noSuchMethod', '=='}.contains(memberName) ||
          !visible(method, target) ||
          !resultSupported(method, target)) {
        continue;
      }
      final selected = parameters(method, target);
      if (selected == null) continue;
      if (method.isOperator) {
        final operatorName =
            method.formalParameters.isEmpty && memberName == '-'
            ? 'unary-'
            : memberName;
        final generated = flaxCodegenExtensionOperators[operatorName];
        if (generated == null) {
          skips.add(
            FlaxCodegenSkip(
              target: target,
              reason: 'Unsupported extension operator: $operatorName',
              code: 'extension_operator',
            ),
          );
          continue;
        }
        if (!reserve(generated, target)) continue;
        operators[operatorName] = selected;
        continue;
      }
      if (!_usableMemberName(memberName) ||
          !reserve(memberName, target, isStatic: method.isStatic)) {
        continue;
      }
      (method.isStatic ? staticMethods : methods)[memberName] = selected;
    }

    // Keep declared static methods when a generated setX name would collide.
    for (final memberName in staticSetterCandidates) {
      final generated =
          'set${memberName[0].toUpperCase()}${memberName.substring(1)}';
      if (reserve(generated, '$name.$memberName=', isStatic: true)) {
        staticSetters.add(memberName);
      }
    }

    if (getters.isEmpty &&
        setters.isEmpty &&
        methods.isEmpty &&
        staticGetters.isEmpty &&
        staticSetters.isEmpty &&
        staticMethods.isEmpty &&
        operators.isEmpty) {
      skips.add(
        FlaxCodegenSkip(
          target: name,
          reason: 'No bindable extension members',
          code: 'no_members',
        ),
      );
      return null;
    }
    return FlaxCodegenExtensionSelection(
      getters: getters,
      setters: setters,
      methods: methods,
      staticGetters: staticGetters,
      staticSetters: staticSetters,
      staticMethods: staticMethods,
      operators: operators,
    );
  }

  FlaxCodegenFunctionSelection? _autoFunctionSelection({
    required _FlaxCodegenTypeScope scope,
    required TopLevelFunctionElement function,
    required String name,
    required List<FlaxCodegenSkip> skips,
  }) {
    if (!_supportsDependencySignature(
      function.type,
      name,
      skips,
      scope: scope,
    )) {
      return null;
    }
    final sharedArguments = function.typeParameters.isEmpty
        ? null
        : _sharedTypeArguments(
            this,
            scope,
            function.typeParameters,
            function.library,
            name,
          );
    if (sharedArguments?.supported == false) {
      skips.add(
        FlaxCodegenSkip(
          target: name,
          reason: sharedArguments!.reason!,
          code: sharedArguments.code!,
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
      skips.add(
        FlaxCodegenSkip(
          target: name,
          reason: error.message,
          code: 'function_result_shape',
        ),
      );
      return null;
    }

    final selected = <String>[];
    for (final parameter in function.formalParameters) {
      final paramName = parameter.name;
      if (!_usableParameterName(parameter)) {
        if (parameter.isRequired || parameter.isPositional) {
          skips.add(
            FlaxCodegenSkip(
              target: '$name.$paramName',
              reason: 'Cannot omit required or positional parameter',
              code: 'required_parameter_name',
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
      final unsupported = type == null;
      if (bound == null || unsupported) {
        skips.addAll(localSkips);
        if (unsupported && localSkips.isEmpty) {
          skips.add(
            FlaxCodegenSkip(
              target: '$name.$paramName',
              reason: 'Unsupported automatic function input',
              code: 'flutter_semantics_configuration_required',
            ),
          );
        }
        if (parameter.isRequired || parameter.isPositional) return null;
        continue;
      }
      selected.add(paramName!);
    }
    return FlaxCodegenFunctionSelection(
      selected,
      typeArguments: sharedArguments?.requiresTypeArguments == true
          ? const []
          : sharedArguments?.sources ?? const [],
    );
  }

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
    bool owned(Element value) =>
        !scope.config.automaticLibrary ||
        (_localDeclarationOwners[_declarationSource(value)] ??
                scope.config.name) ==
            scope.config.name;
    if (getter != null && !_autoHidden(getter) && owned(getter)) {
      try {
        scope.typeRef(getter.returnType).validateResult('$name getter');
        getters.add(name);
      } on StateError catch (error) {
        skips.add(
          FlaxCodegenSkip(
            target: name,
            reason: error.message,
            code: 'top_level_getter_shape',
          ),
        );
      }
    }
    final setterElement = exports['$name='] ?? element;
    final setter = switch (setterElement) {
      SetterElement() => setterElement,
      TopLevelVariableElement() => setterElement.setter,
      GetterElement() => setterElement.correspondingSetter,
      _ => null,
    };
    if (setter == null || _autoHidden(setter) || !owned(setter)) return;
    final variable = setter.variable;
    if (variable is TopLevelVariableElement &&
        (variable.isConst || variable.isFinal)) {
      return;
    }
    try {
      final type = scope.typeRef(setter.formalParameters.single.type);
      FlaxCodegenTopLevelModel(
        '',
        const [],
        setters: [
          FlaxCodegenTopLevelSetterModel(
            '${setter.library.uri}::$name=',
            name,
            type,
          ),
        ],
      ).validate();
      setters.add(name);
    } on StateError catch (error) {
      skips.add(
        FlaxCodegenSkip(
          target: '$name=',
          reason: error.message,
          code: 'top_level_setter_shape',
        ),
      );
    }
  }

  Future<void> _attachAutoWidgetInterfaces({
    required Map<String, FlaxCodegenClassSelection> classes,
    required Map<String, InterfaceElement> elements,
    required Map<String, Element> exports,
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
        if (element.allSupertypes.any(
          (type) => identity(type.element) == identity(contract.value),
        )) {
          matches.add(contract.key);
        }
      }
      for (final parent in element.allSupertypes) {
        if (_selections[identity(parent.element)]?.kind == 'widgetInterface' ||
            _selections[identity(parent.element)]?.kind == 'object' &&
                _isAutoWidgetInterface(parent.element)) {
          matches.add(parent.element.name!);
        }
      }
      matches.removeWhere((name) => name == entry.key);
      final uniqueMatches = matches.toSet().toList()..sort();
      if (uniqueMatches.isEmpty) continue;

      classes[entry.key] = _copyClassSelection(
        entry.value,
        widgetInterfaces: uniqueMatches,
      );
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
    final operators = fields.contains('operators')
        ? selection.operators
        : const <String, List<String>>{};
    final kind = fields.contains('kind') ? selection.kind : null;
    final jsName = fields.contains('jsName') ? selection.jsName : null;
    if (operators.isEmpty &&
        constructors.isEmpty &&
        typeArguments.isEmpty &&
        kind == null &&
        proxy == null &&
        jsName == null) {
      return null;
    }
    return FlaxCodegenClassSelection(
      constructors,
      operators: operators,
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
      instanceMethods: has('instanceMethods')
          ? value.instanceMethods
          : source.instanceMethods,
      startsRoute: has('startsRoute') ? value.startsRoute : source.startsRoute,
      kind: has('kind') ? value.kind : source.kind,
      proxy: has('proxy') ? value.proxy : source.proxy,
      inferredProxy: !has('proxy') && source.inferredProxy,
      proxyVariants: has('proxyVariants')
          ? value.proxyVariants
          : source.proxyVariants,
      staticSetters: has('staticSetters')
          ? value.staticSetters
          : source.staticSetters,
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
      operators: has('operators') ? value.operators : source.operators,
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
    List<String>? getters,
    List<String>? setters,
    List<String>? staticGetters,
    List<String>? staticSetters,
    Map<String, List<String>>? instanceMethods,
    Map<String, List<String>>? methods,
  }) => FlaxCodegenClassSelection(
    constructors ?? source.constructors,
    widgetInterfaces: widgetInterfaces ?? source.widgetInterfaces,
    asyncIterableFactory: source.asyncIterableFactory,
    callbackSignatures: source.callbackSignatures,
    callbackOptionalParameters: source.callbackOptionalParameters,
    callbackErrorParameters: source.callbackErrorParameters,
    callbackScopedParameters: source.callbackScopedParameters,
    typeArguments: source.typeArguments,
    methodTypeArguments: source.methodTypeArguments,
    instanceMethods: instanceMethods ?? source.instanceMethods,
    startsRoute: source.startsRoute,
    kind: source.kind,
    proxy: source.proxy,
    inferredProxy: source.inferredProxy,
    proxyVariants: source.proxyVariants,
    staticGetters: staticGetters ?? source.staticGetters,
    staticSetters: staticSetters ?? source.staticSetters,
    errorGetters: source.errorGetters,
    pageAdapter: source.pageAdapter,
    setters: setters ?? source.setters,
    disposeMethod:
        instanceMethods == null ||
            instanceMethods.containsKey(source.disposeMethod)
        ? source.disposeMethod
        : null,
    listenerPairs: instanceMethods == null
        ? source.listenerPairs
        : {
            for (final pair in source.listenerPairs.entries)
              if (instanceMethods.containsKey(pair.key) &&
                  instanceMethods.containsKey(pair.value))
                pair.key: pair.value,
          },
    getters: getters ?? source.getters,
    methods: methods ?? source.methods,
    operators: source.operators,
    data: source.data,
    jsName: source.jsName,
  );
}
