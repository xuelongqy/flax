part of 'parser.dart';

List<FlaxCodegenSkip> _providerSurfaceSkips({
  required String typeName,
  required String provider,
  required FlaxCodegenClassSelection requested,
  required FlaxCodegenClassSelection available,
}) {
  final skips = <FlaxCodegenSkip>[];

  void missingName(String target, String section, String member) {
    skips.add(
      FlaxCodegenSkip(
        target: target,
        reason:
            'Provider surface insufficient: $provider\n'
            'Dependency path: $target -> provider $provider\n'
            'Suggested provider additions:\n'
            '$typeName:\n'
            '  $section:\n'
            '    - $member',
      ),
    );
  }

  void requireNames(
    Iterable<String> required,
    Iterable<String> present,
    String section,
  ) {
    final availableNames = present.toSet();
    for (final member in required) {
      if (!availableNames.contains(member)) {
        missingName('$typeName.$member', section, member);
      }
    }
  }

  void requireCalls(
    Map<String, List<String>> required,
    Map<String, List<String>> present,
    String section,
  ) {
    for (final entry in required.entries) {
      final actual = present[entry.key];
      if (actual == null) {
        final parameters = entry.value.join(', ');
        missingName(
          '$typeName.${entry.key}',
          section,
          '${entry.key}: [$parameters]',
        );
        continue;
      }
      final actualNames = actual.toSet();
      for (final parameter in entry.value) {
        if (!actualNames.contains(parameter)) {
          final parameters = entry.value.join(', ');
          missingName(
            '$typeName.${entry.key}.$parameter',
            section,
            '${entry.key}: [$parameters]',
          );
        }
      }
    }
  }

  requireNames(requested.getters, available.getters, 'getters');
  requireNames(requested.setters, available.setters, 'setters');
  requireNames(
    requested.staticGetters,
    available.staticGetters,
    'staticGetters',
  );
  requireCalls(requested.constructors, available.constructors, 'constructors');
  requireCalls(requested.methods, available.methods, 'methods');
  requireCalls(
    requested.instanceMethods,
    available.instanceMethods,
    'instanceMethods',
  );
  requireNames(
    requested.deferredFactories,
    available.deferredFactories,
    'deferredFactories',
  );
  requireNames(
    requested.proxyOverrides,
    available.proxyOverrides,
    'proxyOverrides',
  );
  requireNames(requested.proxySuper, available.proxySuper, 'proxySuper');
  requireNames(
    requested.widgetInterfaces,
    available.widgetInterfaces,
    'widgetInterfaces',
  );
  requireNames(requested.startsRoute, available.startsRoute, 'startsRoute');
  requireNames(requested.errorGetters, available.errorGetters, 'errorGetters');

  if (requested.proxy != null && requested.proxy != available.proxy ||
      requested.kind != null && requested.kind != available.kind ||
      requested.genericScalar && !available.genericScalar ||
      requested.jsName != null && requested.jsName != available.jsName ||
      requested.asyncIterableFactory != null &&
          requested.asyncIterableFactory != available.asyncIterableFactory ||
      requested.typeArguments.isNotEmpty &&
          requested.typeArguments.join(',') !=
              available.typeArguments.join(',')) {
    skips.add(
      FlaxCodegenSkip(
        target: typeName,
        reason:
            'Owner adaptation is incompatible: $provider\n'
            'Dependency path: $typeName -> provider $provider',
      ),
    );
  }
  return skips;
}

Future<FlaxCodegenProposedBinding> _proposeSelection(
  FlaxCodegenBindingParser parser,
  InterfaceElement element, {
  required FlaxCodegenBindingConfig library,
  FlaxCodegenClassSelection? base,
  Iterable<InterfaceType> concreteUses = const [],
  Map<String, String> automaticTypeCarriers = const {},
}) async {
  final name = element.name!;
  final id = identity(element);
  final skips = <FlaxCodegenSkip>[];
  void skip(String target, String reason) =>
      skips.add(FlaxCodegenSkip(target: target, reason: reason));

  if (parser._dependencyOwners[id] case final owner?) {
    final surface = _selectionFromModel(
      owner.classes.singleWhere((type) => type.id == id),
    );
    if (base != null) {
      skips.addAll(
        _providerSurfaceSkips(
          typeName: name,
          provider: owner.jsPackage,
          requested: base,
          available: surface,
        ),
      );
    }
    return FlaxCodegenProposedBinding(
      name: name,
      id: id,
      provider: owner.jsPackage,
      skips: skips,
    );
  }

  if (parser._adaptations.containsKey(id) ||
      parser._selections.containsKey(id)) {
    if (base != null) {
      skip(name, 'Owned type is not expanded');
      return FlaxCodegenProposedBinding(
        name: name,
        id: id,
        selection: base,
        skips: skips,
      );
    }
    skip(name, 'Already adapted');
    return FlaxCodegenProposedBinding(name: name, id: id, skips: skips);
  }

  if (element is EnumElement) {
    skip(name, 'Enums use types selection');
    return FlaxCodegenProposedBinding(name: name, id: id, skips: skips);
  }
  if (element is! ClassElement && element is! MixinElement) {
    skip(name, 'Expected a class or mixin');
    return FlaxCodegenProposedBinding(name: name, id: id, skips: skips);
  }

  final widget = parser._isFlutterWidget(element);
  final kind = base?.kind ?? (widget ? null : 'object');
  if (base != null &&
      (base.proxy == 'host' ||
          base.independentWidgetCallbacks.isNotEmpty ||
          base.pageAdapter != null ||
          base.widgetInterfaces.isNotEmpty ||
          _hasData(base.data))) {
    skip(name, 'Overlay selections stay YAML-only');
  }

  final scope = await parser._openTypeScope(
    library,
    automaticTypeCarriers: automaticTypeCarriers,
  );
  final inferredDeferredFactories = <String>{
    for (final method in element.methods)
      if (!method.metadata.hasInternal &&
          !method.metadata.hasVisibleForTesting &&
          !method.metadata.hasProtected &&
          _isInferredDeferredFactory(scope, element, method))
        method.name!,
  };
  final hasDeferredFactory =
      inferredDeferredFactories.isNotEmpty ||
      (base?.deferredFactories.isNotEmpty ?? false);
  final typeArguments = [...?base?.typeArguments];
  if (element.typeParameters.isNotEmpty &&
      !((base?.genericScalar) ?? false) &&
      !hasDeferredFactory &&
      typeArguments.length != element.typeParameters.length) {
    if (typeArguments.isNotEmpty) {
      skip(name, 'Explicit runtime type arguments required: $name');
      return FlaxCodegenProposedBinding(name: name, id: id, skips: skips);
    }
    final uses = [
      for (final use in concreteUses)
        if (identity(use.element) == id) use,
    ];
    if (uses.isNotEmpty) {
      final inferred = _concreteTypeArguments(parser, element, uses);
      if (inferred == null) {
        skip(name, 'Explicit runtime type arguments required: $name');
        return FlaxCodegenProposedBinding(name: name, id: id, skips: skips);
      }
      try {
        parser._checkBounds(
          element.typeParameters,
          inferred.arguments,
          element.library,
          false,
        );
      } on StateError catch (error) {
        skip(name, error.message);
        return FlaxCodegenProposedBinding(name: name, id: id, skips: skips);
      }
      typeArguments.addAll(inferred.sources);
    } else {
      final defaults = _defaultTypeArguments(parser, element);
      if (defaults == null) {
        skip(name, 'Explicit runtime type arguments required: $name');
        return FlaxCodegenProposedBinding(name: name, id: id, skips: skips);
      }
      typeArguments.addAll(defaults);
    }
  }

  final constructors = <String, List<String>>{};
  if (element is ClassElement) {
    for (final constructor in element.constructors) {
      if (!constructor.isPublic) continue;
      final ctorName = constructor.name == 'new' ? '' : constructor.name!;
      if (!_usableMemberName(ctorName) && ctorName.isNotEmpty) continue;
      final bound = _bindConstructor(
        parser: parser,
        scope: scope,
        element: element,
        constructor: constructor,
        ctorName: ctorName,
        widget: widget,
        kind: kind,
        skips: skips,
      );
      if (bound != null) {
        constructors[ctorName] = bound;
      }
    }
  } else if (widget) {
    skip(name, 'Mixins require a non-constructible object selection');
    return FlaxCodegenProposedBinding(name: name, id: id, skips: skips);
  }

  final ctorFields = {for (final params in constructors.values) ...params};
  final getters = <String>[];
  final setters = <String>[];
  final staticGetters = <String>[];
  final instanceMethods = <String, List<String>>{};
  final methods = <String, List<String>>{};
  final deferredFactories = <String>{};
  String? inferredDisposeMethod;

  if (!widget) {
    for (final getter in element.getters) {
      if (!getter.isPublic) continue;
      final getterName = getter.name!;
      if (!_usableMemberName(getterName) ||
          {'hashCode', 'runtimeType'}.contains(getterName) ||
          {'kind', 'type', 'ctor', 'args'}.contains(getterName)) {
        continue;
      }
      if (getter.isStatic) {
        if (getter.variable.setter != null) continue;
        final converted = _tryMemberType(
          scope,
          getter.returnType,
          '$name.$getterName',
          skips,
        );
        if (converted != null) staticGetters.add(getterName);
        continue;
      }
      final converted = _tryMemberType(
        scope,
        getter.returnType,
        '$name.$getterName',
        skips,
        allowed: _getterKinds,
      );
      if (converted != null) getters.add(getterName);
    }
    for (final setter in element.setters) {
      if (!setter.isPublic || setter.isStatic) continue;
      final setterName = setter.name!.replaceFirst(RegExp(r'=$'), '');
      if (!_usableMemberName(setterName)) continue;
      final converted = _tryMemberType(
        scope,
        setter.formalParameters.single.type,
        '$name.$setterName=',
        skips,
        allowed: _setterKinds,
        input: true,
      );
      if (converted != null) setters.add(setterName);
    }
    for (final method in element.methods) {
      if (!method.isPublic) continue;
      final methodName = method.name!;
      if (!_usableMemberName(methodName) ||
          methodName == 'toString' ||
          methodName == 'noSuchMethod') {
        continue;
      }
      final deferredFactory =
          inferredDeferredFactories.contains(methodName) ||
          (base?.deferredFactories.contains(methodName) ?? false);
      final bound = _bindMethod(
        parser: parser,
        scope: scope,
        element: element,
        method: method,
        location: '$name.$methodName',
        skips: skips,
        deferredFactory: deferredFactory,
      );
      if (bound == null) continue;
      if (method.isStatic) {
        methods[methodName] = bound;
        if (deferredFactory) deferredFactories.add(methodName);
      } else {
        instanceMethods[methodName] = bound;
      }
    }

    // Public instance API is inherited in Dart. Collect the effective member
    // from thisType so generic substitutions and overrides match what callers
    // actually see, while keeping static members declaration-local.
    for (final parent in element.allSupertypes) {
      if (parent.isDartCoreObject) continue;
      for (final declared in parent.getters) {
        final getterName = declared.name!;
        if (getters.contains(getterName) ||
            !_usableMemberName(getterName) ||
            {'hashCode', 'runtimeType'}.contains(getterName) ||
            {'kind', 'type', 'ctor', 'args'}.contains(getterName)) {
          continue;
        }
        final getter = element.thisType.lookUpGetter(
          getterName,
          element.library,
        );
        if (getter == null || !getter.isPublic || getter.isStatic) continue;
        final converted = _tryMemberType(
          scope,
          getter.returnType,
          '$name.$getterName',
          skips,
          allowed: _getterKinds,
        );
        if (converted != null) getters.add(getterName);
      }
      for (final declared in parent.setters) {
        final setterName = declared.name!.replaceFirst(RegExp(r'=$'), '');
        if (setters.contains(setterName) || !_usableMemberName(setterName)) {
          continue;
        }
        final setter = element.thisType.lookUpSetter(
          setterName,
          element.library,
        );
        if (setter == null || !setter.isPublic || setter.isStatic) continue;
        final converted = _tryMemberType(
          scope,
          setter.formalParameters.single.type,
          '$name.$setterName=',
          skips,
          allowed: _setterKinds,
          input: true,
        );
        if (converted != null) setters.add(setterName);
      }
      for (final declared in parent.methods) {
        final methodName = declared.name!;
        if (instanceMethods.containsKey(methodName) ||
            !_usableMemberName(methodName) ||
            {'toString', 'noSuchMethod'}.contains(methodName)) {
          continue;
        }
        final method = element.thisType.lookUpMethod(
          methodName,
          element.library,
        );
        if (method == null || !method.isPublic || method.isStatic) continue;
        final bound = _bindMethod(
          parser: parser,
          scope: scope,
          element: element,
          method: method,
          location: '$name.$methodName',
          skips: skips,
        );
        if (bound != null) instanceMethods[methodName] = bound;
      }
    }

    // `dispose()` is ordinary application code. Automatic binding may expose
    // the conventional Flutter/Dart disposer (including an inherited one),
    // but this only records what happens when the application calls it. It
    // never assigns ownership or schedules disposal on session/widget close.
    if (kind == 'object' && base?.disposeMethod == null) {
      final disposer = element.thisType.lookUpMethod(
        'dispose',
        element.library,
      );
      if (_isConventionalDisposer(disposer)) {
        final bound =
            instanceMethods['dispose'] ??
            _bindMethod(
              parser: parser,
              scope: scope,
              element: element,
              method: disposer!,
              location: '$name.dispose',
              skips: skips,
            );
        if (bound != null && bound.isEmpty) {
          instanceMethods['dispose'] = bound;
          inferredDisposeMethod = 'dispose';
        }
      }
    }
  } else {
    for (final getter in element.getters) {
      if (!getter.isPublic || getter.isStatic) continue;
      final getterName = getter.name!;
      if (!_usableMemberName(getterName) ||
          {'hashCode', 'runtimeType'}.contains(getterName)) {
        continue;
      }
      if (!ctorFields.contains(getterName)) {
        skip(
          '$name.$getterName',
          'Value getters require selected constructor fields',
        );
      }
    }
    for (final method in element.methods) {
      if (!method.isPublic || method.isStatic) continue;
      final methodName = method.name!;
      if (!_usableMemberName(methodName) ||
          methodName == 'toString' ||
          methodName == 'noSuchMethod') {
        continue;
      }
      skip(
        '$name.$methodName',
        'Widget instance methods are not auto-selected',
      );
    }
  }

  final recommendation = await _proxyRecommendation(
    parser: parser,
    element: element,
    library: library,
    scope: scope,
    typeArguments: typeArguments,
    constructors: constructors,
    getters: getters,
    setters: setters,
    instanceMethods: instanceMethods,
    kind: kind,
  );
  final proxyCapability = recommendation.capability;
  if (base?.proxy == 'host') {
    return FlaxCodegenProposedBinding(
      name: name,
      id: id,
      selection: base,
      skips: skips,
      proxyCapability: proxyCapability,
    );
  }
  final explicitProxy = {'extends', 'implements'}.contains(base?.proxy)
      ? base!.proxy
      : null;
  final proxy = explicitProxy ?? recommendation.proxy;
  Map<String, List<String>> selectedConstructors = constructors;
  List<String> selectedGetters = getters;
  List<String> selectedSetters = setters;
  Map<String, List<String>> selectedInstanceMethods = instanceMethods;
  if (element is ClassElement && proxy == 'extends') {
    final requested = base?.proxy == 'extends' && base!.constructors.isNotEmpty
        ? base.constructors.keys
        : null;
    final constructorName = explicitProxy == null
        ? recommendation.constructorName
        : _preferredExtendsConstructor(
            element,
            constructors,
            requested: requested,
          );
    selectedConstructors = constructorName == null
        ? const {}
        : {constructorName: constructors[constructorName]!};
    selectedGetters = [
      for (final member in getters)
        if (_proxyAccessorCanOverride(element, member, setter: false)) member,
    ];
    selectedSetters = [
      for (final member in setters)
        if (_proxyAccessorCanOverride(element, member, setter: true)) member,
    ];
    selectedInstanceMethods = {
      for (final entry in instanceMethods.entries)
        if (_proxyMethodCanOverride(element, entry.key)) entry.key: entry.value,
    };
  } else if (element is ClassElement && proxy == 'implements') {
    if (base?.proxy == 'implements' && base!.constructors.isNotEmpty) {
      selectedConstructors = {
        for (final name in base.constructors.keys)
          if (constructors.containsKey(name)) name: constructors[name]!,
      };
    } else {
      selectedConstructors = _factoryProxyConstructors(element, constructors);
    }
  } else if (element is ClassElement && element.isAbstract) {
    selectedConstructors = _factoryProxyConstructors(element, constructors);
    for (final entry in constructors.entries) {
      if (!selectedConstructors.containsKey(entry.key)) {
        skip(
          '$name.${entry.key}',
          'Abstract generative constructor requires an extends proxy',
        );
      }
    }
  }

  if (widget && constructors.isEmpty) {
    skip(name, 'No bindable constructors');
    return FlaxCodegenProposedBinding(
      name: name,
      id: id,
      skips: skips,
      proxyCapability: proxyCapability,
    );
  }
  if (element.typeParameters.isNotEmpty &&
      !(base?.genericScalar ?? false) &&
      typeArguments.length != element.typeParameters.length &&
      deferredFactories.isEmpty) {
    skip(name, 'Explicit runtime type arguments required: $name');
    return FlaxCodegenProposedBinding(
      name: name,
      id: id,
      skips: skips,
      proxyCapability: proxyCapability,
    );
  }
  if (!widget &&
      selectedConstructors.isEmpty &&
      getters.isEmpty &&
      setters.isEmpty &&
      staticGetters.isEmpty &&
      instanceMethods.isEmpty &&
      methods.isEmpty &&
      proxy == null) {
    skip(name, 'No bindable members');
    return FlaxCodegenProposedBinding(
      name: name,
      id: id,
      skips: skips,
      proxyCapability: proxyCapability,
    );
  }

  final selection = FlaxCodegenClassSelection(
    selectedConstructors,
    kind: kind,
    proxy: proxy,
    typeArguments: typeArguments,
    getters: selectedGetters,
    setters: selectedSetters,
    staticGetters: staticGetters,
    instanceMethods: selectedInstanceMethods,
    methods: methods,
    deferredFactories: deferredFactories.toList()..sort(),
    disposeMethod: base?.disposeMethod ?? inferredDisposeMethod,
    genericScalar: base?.genericScalar ?? false,
    jsName: base?.jsName,
  );
  return FlaxCodegenProposedBinding(
    name: name,
    id: id,
    selection: selection,
    skips: skips,
    proxyCapability: proxyCapability,
  );
}

bool _isConventionalDisposer(MethodElement? method) =>
    method != null &&
    !method.isStatic &&
    method.isPublic &&
    method.typeParameters.isEmpty &&
    method.formalParameters.isEmpty &&
    method.returnType is VoidType &&
    !method.baseElement.fragments.any(
      (fragment) => fragment.isAsynchronous || fragment.isGenerator,
    );

const _getterKinds = {
  'void',
  'String',
  'bool',
  'int',
  'double',
  'num',
  'enum',
  'data',
  'any',
  'iterable',
  'list',
  'map',
  'record',
  'set',
  'scalar',
  'object',
  'future',
  'futureOr',
  'stream',
  'callback',
  'widget',
};

const _setterKinds = {
  'String',
  'bool',
  'int',
  'double',
  'num',
  'enum',
  'data',
  'any',
  'iterable',
  'list',
  'map',
  'record',
  'set',
  'object',
  'future',
  'futureOr',
  'stream',
  'callback',
};

bool _hasData(FlaxCodegenDataSelection data) =>
    data.constructors.isNotEmpty ||
    data.getters.isNotEmpty ||
    data.methods.isNotEmpty ||
    data.results.isNotEmpty;

bool _usableMemberName(String? name) =>
    name != null &&
    name.isNotEmpty &&
    !name.startsWith('_') &&
    RegExp(r'^[A-Za-z][A-Za-z0-9]*$').hasMatch(name);

List<String>? _defaultTypeArguments(
  FlaxCodegenBindingParser parser,
  InterfaceElement element,
) {
  final library = element.library;
  final arguments = <DartType>[];
  final names = <String>[];
  for (final parameter in element.typeParameters) {
    final objectQuestion = library.typeProvider.objectQuestionType;
    try {
      parser._checkBounds([parameter], [objectQuestion], library, false);
      arguments.add(objectQuestion);
      names.add('Object?');
      continue;
    } on StateError {
      final bound = parameter.bound;
      if (bound == null) return null;
      final name = _typeArgumentSource(parser, bound);
      if (name == null) return null;
      try {
        parser._checkBounds([parameter], [bound], library, false);
      } on StateError {
        return null;
      }
      arguments.add(bound);
      names.add(name);
    }
  }
  try {
    parser._checkBounds(element.typeParameters, arguments, library, false);
  } on StateError {
    return null;
  }
  return names;
}

({List<String> sources, List<DartType> arguments})? _concreteTypeArguments(
  FlaxCodegenBindingParser parser,
  InterfaceElement element,
  List<InterfaceType> uses,
) {
  List<String>? expectedKeys;
  List<String>? expectedSources;
  List<DartType>? expectedArguments;

  for (final use in uses) {
    if (use.typeArguments.length != element.typeParameters.length) return null;
    final keys = <String>[];
    final sources = <String>[];
    final arguments = <DartType>[];
    for (final argument in use.typeArguments) {
      final local = _localConcreteTypeArgument(parser, element, argument);
      if (local == null) return null;
      final source = _typeArgumentSource(parser, local);
      if (source == null) return null;
      keys.add(_concreteTypeArgumentKey(local));
      sources.add(source);
      arguments.add(local);
    }
    if (expectedKeys == null) {
      expectedKeys = keys;
      expectedSources = sources;
      expectedArguments = arguments;
      continue;
    }
    if (keys.length != expectedKeys.length) return null;
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] != expectedKeys[i]) return null;
    }
  }

  if (expectedSources == null || expectedArguments == null) return null;
  return (sources: expectedSources, arguments: expectedArguments);
}

DartType? _localConcreteTypeArgument(
  FlaxCodegenBindingParser parser,
  InterfaceElement target,
  DartType type,
) {
  if (type is DynamicType) {
    return target.library.typeProvider.objectQuestionType;
  }
  if (type is! InterfaceType || type.typeArguments.isNotEmpty) return null;

  final sourceElement = type.element;
  InterfaceElement? localElement;
  if (sourceElement.library.isDartCore &&
      {
        'Object',
        'String',
        'bool',
        'int',
        'double',
        'num',
      }.contains(sourceElement.name)) {
    final provider = target.library.typeProvider;
    localElement = switch (sourceElement.name) {
      'Object' => provider.objectType.element,
      'String' => provider.stringType.element,
      'bool' => provider.boolType.element,
      'int' => provider.intType.element,
      'double' => provider.doubleType.element,
      'num' => provider.numType.element,
      _ => null,
    };
  } else {
    localElement = parser._elementsByIdentity[identity(sourceElement)];
  }
  if (localElement == null || localElement.typeParameters.isNotEmpty) {
    return null;
  }

  final local = localElement.instantiate(
    typeArguments: const [],
    nullabilitySuffix: type.nullabilitySuffix,
  );
  return _typeArgumentSource(parser, local) == null ? null : local;
}

String _concreteTypeArgumentKey(DartType type) {
  if (type is! InterfaceType) return type.runtimeType.toString();
  return '${identity(type.element)}|${type.nullabilitySuffix.name}';
}

String? _typeArgumentSource(FlaxCodegenBindingParser parser, DartType type) {
  if (type is DynamicType) return 'Object?';
  if (type is! InterfaceType) return null;
  final element = type.element;
  final name = element.name!;
  final nullable = type.nullabilitySuffix == NullabilitySuffix.question;
  if (element.library.isDartCore &&
      {'Object', 'String', 'bool', 'int', 'double', 'num'}.contains(name)) {
    return nullable ? '$name?' : name;
  }
  if (!parser._isPoolType(element) &&
      !parser._adaptations.containsKey(identity(element))) {
    return null;
  }
  return nullable ? '$name?' : name;
}

List<String>? _bindConstructor({
  required FlaxCodegenBindingParser parser,
  required _FlaxCodegenTypeScope scope,
  required InterfaceElement element,
  required ConstructorElement constructor,
  required String ctorName,
  required bool widget,
  required String? kind,
  required List<FlaxCodegenSkip> skips,
}) {
  final location = '${element.name}.$ctorName';
  final chosen = <String>[];
  final omit = <String>[];
  for (final parameter in constructor.formalParameters) {
    final paramName = parameter.name;
    if (!_usableMemberName(paramName)) {
      if (parameter.isRequired || parameter.isPositional) {
        skips.add(
          FlaxCodegenSkip(
            target: '$location.$paramName',
            reason:
                'Cannot omit required or positional parameter $location.$paramName',
          ),
        );
        return null;
      }
      continue;
    }
    final bound = _bindParameter(
      parser: parser,
      scope: scope,
      parameter: parameter,
      location: '$location.$paramName',
      widget: widget,
      kind: kind,
      skips: skips,
    );
    if (bound == null) {
      if (parameter.isRequired || parameter.isPositional) return null;
      continue;
    }
    chosen.add(paramName!);
    if (bound.omitWhenAbsent) omit.add(paramName);
  }
  var kept = chosen;
  if (omit.length > FlaxCodegenBindability.omitWhenAbsentCap) {
    final extra = omit.skip(FlaxCodegenBindability.omitWhenAbsentCap).toSet();
    kept = [
      for (final name in chosen)
        if (!extra.contains(name)) name,
    ];
    for (final name in extra) {
      skips.add(
        FlaxCodegenSkip(
          target: '$location.$name',
          reason:
              'omitWhenAbsent cap ${FlaxCodegenBindability.omitWhenAbsentCap}',
        ),
      );
    }
  }
  return kept;
}

({bool omitWhenAbsent})? _bindParameter({
  required FlaxCodegenBindingParser parser,
  required _FlaxCodegenTypeScope scope,
  required FormalParameterElement parameter,
  required String location,
  required bool widget,
  required String? kind,
  required List<FlaxCodegenSkip> skips,
  bool allowRecursiveErasure = false,
}) {
  if (parameter.type is InterfaceType &&
      (parameter.type as InterfaceType).element.name == 'Function' &&
      (parameter.type as InterfaceType).element.library.isDartCore) {
    skips.add(
      FlaxCodegenSkip(
        target: location,
        reason: 'Missing callback signature: $location',
      ),
    );
    return null;
  }
  final converted = scope.tryTypeRef(
    parameter.type,
    allowRecursiveErasure: allowRecursiveErasure,
  );
  if (converted.skip != null || converted.type == null) {
    skips.add(
      FlaxCodegenSkip(
        target: location,
        reason: converted.skip ?? 'Unsupported binding type',
      ),
    );
    return null;
  }
  var type = converted.type!;
  try {
    type.validate(location);
    if (type.kind == 'callback') {
      type.validateCallbacks(location, input: true);
    }
  } on StateError catch (error) {
    skips.add(FlaxCodegenSkip(target: location, reason: error.message));
    return null;
  }
  if (type.kind == 'context' || type.kind == 'void') {
    skips.add(
      FlaxCodegenSkip(
        target: location,
        reason: 'Context inputs are currently callback-only',
      ),
    );
    return null;
  }
  if (widget &&
      type.kind == 'callback' &&
      type.result!.containsWidget &&
      !_isDirectMountedWidgetResult(type.result!)) {
    skips.add(
      FlaxCodegenSkip(
        target: location,
        reason: 'Unsupported mounted Widget callback result: $location',
      ),
    );
    return null;
  }
  if (!widget &&
      kind != 'object' &&
      kind != 'stream' &&
      kind != 'route' &&
      kind != 'page' &&
      type.kind == 'callback') {
    skips.add(
      FlaxCodegenSkip(
        target: location,
        reason: 'Stored callbacks currently require a mounted Widget owner',
      ),
    );
    return null;
  }
  FormalParameterElement defaults = parameter.baseElement;
  while (!defaults.hasDefaultValue &&
      defaults is SuperFormalParameterElement &&
      defaults.superConstructorParameter != null) {
    defaults = defaults.superConstructorParameter!;
  }
  final constant = defaults.computeConstantValue();
  final callbackDefault =
      type.kind == 'callback' && constant?.toFunctionValue() != null;
  final hiddenDefault =
      !parameter.isRequired &&
      parameter.isNamed &&
      parameter.type.nullabilitySuffix != NullabilitySuffix.question &&
      !defaults.hasDefaultValue;
  final omitWhenAbsent =
      !parameter.isRequired &&
      (hiddenDefault ||
          callbackDefault ||
          constant?.toListValue() != null ||
          constant?.toMapValue() != null ||
          ({'object', 'any', 'data'}.contains(type.kind) &&
              constant != null &&
              !constant.isNull));
  final usesNullDefault =
      parameter.isRequired ||
      hiddenDefault ||
      callbackDefault ||
      (omitWhenAbsent &&
          {
            'object',
            'any',
            'data',
            'iterable',
            'list',
            'map',
            'set',
          }.contains(type.kind));
  if (!usesNullDefault) {
    try {
      parser._default(constant, type);
    } on StateError catch (error) {
      skips.add(FlaxCodegenSkip(target: location, reason: error.message));
      return null;
    }
  }
  return (omitWhenAbsent: omitWhenAbsent);
}

FlaxCodegenTypeRef? _tryMemberType(
  _FlaxCodegenTypeScope scope,
  DartType type,
  String location,
  List<FlaxCodegenSkip> skips, {
  Set<String>? allowed,
  bool input = false,
  bool allowRecursiveErasure = false,
}) {
  final converted = scope.tryTypeRef(
    type,
    allowRecursiveErasure: allowRecursiveErasure,
  );
  if (converted.skip != null || converted.type == null) {
    skips.add(
      FlaxCodegenSkip(
        target: location,
        reason: converted.skip ?? 'Unsupported binding type',
      ),
    );
    return null;
  }
  final result = converted.type!;
  try {
    result.validate(location);
    if (result.kind == 'callback') {
      result.validateCallbacks(location, input: input);
    }
  } on StateError catch (error) {
    skips.add(FlaxCodegenSkip(target: location, reason: error.message));
    return null;
  }
  if (allowed != null && !allowed.contains(result.kind)) {
    skips.add(
      FlaxCodegenSkip(
        target: location,
        reason: 'Unsupported member type: $type',
      ),
    );
    return null;
  }
  return result;
}

List<String>? _bindMethod({
  required FlaxCodegenBindingParser parser,
  required _FlaxCodegenTypeScope scope,
  required InterfaceElement element,
  required MethodElement method,
  required String location,
  required List<FlaxCodegenSkip> skips,
  bool deferredFactory = false,
}) {
  if (method.typeParameters.isNotEmpty && !deferredFactory) {
    skips.add(
      FlaxCodegenSkip(
        target: location,
        reason: 'Explicit runtime type arguments required: ${method.name}',
      ),
    );
    return null;
  }
  final result = _tryMemberType(
    scope,
    method.returnType,
    '$location result',
    skips,
    allowed: {
      'String',
      'bool',
      'int',
      'double',
      'num',
      'enum',
      'void',
      'data',
      'any',
      'iterable',
      'list',
      'map',
      'record',
      'set',
      'state',
      'object',
      'future',
      'futureOr',
      'stream',
      'callback',
      'widget',
    },
    allowRecursiveErasure: deferredFactory,
  );
  if (result == null) return null;
  final chosen = <String>[];
  for (final parameter in method.formalParameters) {
    final paramName = parameter.name;
    if (!_usableMemberName(paramName)) {
      if (parameter.isRequired || parameter.isPositional) {
        skips.add(
          FlaxCodegenSkip(
            target: '$location.$paramName',
            reason:
                'Cannot omit required or positional parameter $location.$paramName',
          ),
        );
        return null;
      }
      continue;
    }
    final bound = _bindParameter(
      parser: parser,
      scope: scope,
      parameter: parameter,
      location: '$location.$paramName',
      widget: false,
      kind: 'object',
      skips: skips,
      allowRecursiveErasure: deferredFactory,
    );
    if (bound == null) {
      if (parameter.isRequired || parameter.isPositional) return null;
      continue;
    }
    chosen.add(paramName!);
  }
  return chosen;
}

bool _isDirectMountedWidgetResult(FlaxCodegenTypeRef type) =>
    type.kind == 'widget' ||
    (type.kind == 'list' &&
        !type.nullable &&
        type.item?.kind == 'widget' &&
        type.item?.nullable == false);

Future<
  ({
    FlaxCodegenProxyCapability capability,
    String? proxy,
    String? constructorName,
  })
>
_proxyRecommendation({
  required FlaxCodegenBindingParser parser,
  required InterfaceElement element,
  required FlaxCodegenBindingConfig library,
  required _FlaxCodegenTypeScope scope,
  required List<String> typeArguments,
  required Map<String, List<String>> constructors,
  required List<String> getters,
  required List<String> setters,
  required Map<String, List<String>> instanceMethods,
  required String? kind,
}) async {
  if (_requiresFlutterSemantics(parser, element)) {
    return (
      capability: FlaxCodegenProxyCapability.flutterSemantics,
      proxy: null,
      constructorName: null,
    );
  }
  if (kind != 'object' ||
      element is! ClassElement ||
      element.isFinal ||
      element.isSealed) {
    return (
      capability: FlaxCodegenProxyCapability.unsupported,
      proxy: null,
      constructorName: null,
    );
  }
  if (getters.isEmpty && setters.isEmpty && instanceMethods.isEmpty) {
    return (
      capability: FlaxCodegenProxyCapability.unsupported,
      proxy: null,
      constructorName: null,
    );
  }

  final extendGetters = [
    for (final member in getters)
      if (_proxyAccessorCanOverride(element, member, setter: false)) member,
  ];
  final extendSetters = [
    for (final member in setters)
      if (_proxyAccessorCanOverride(element, member, setter: true)) member,
  ];
  final extendMethods = {
    for (final entry in instanceMethods.entries)
      if (_proxyMethodCanOverride(element, entry.key)) entry.key: entry.value,
  };
  final constructorName = _preferredExtendsConstructor(element, constructors);
  var canExtend = false;
  if (!element.isInterface && constructorName != null) {
    canExtend = await _proxySelectionParses(
      parser,
      library,
      element.name!,
      FlaxCodegenClassSelection(
        {constructorName: constructors[constructorName]!},
        kind: 'object',
        proxy: 'extends',
        typeArguments: typeArguments,
        getters: extendGetters,
        setters: extendSetters,
        instanceMethods: extendMethods,
      ),
    );
  }

  final hasConcreteBehavior =
      extendGetters.any(
        (member) =>
            !(element.thisType
                    .lookUpGetter(member, element.library)
                    ?.isAbstract ??
                true),
      ) ||
      extendSetters.any(
        (member) =>
            !(element.thisType
                    .lookUpSetter(member, element.library)
                    ?.isAbstract ??
                true),
      ) ||
      extendMethods.keys.any(
        (member) =>
            !(element.thisType
                    .lookUpMethod(member, element.library)
                    ?.isAbstract ??
                true),
      ) ||
      _hasInheritedBindableConcreteBehavior(
        parser: parser,
        scope: scope,
        element: element,
      );
  if ((hasConcreteBehavior || element.isBase) && canExtend) {
    return (
      capability: FlaxCodegenProxyCapability.canExtend,
      proxy: 'extends',
      constructorName: constructorName,
    );
  }

  if (!element.isBase) {
    final canImplement = await _proxySelectionParses(
      parser,
      library,
      element.name!,
      FlaxCodegenClassSelection(
        _factoryProxyConstructors(element, constructors),
        kind: 'object',
        proxy: 'implements',
        typeArguments: typeArguments,
        getters: getters,
        setters: setters,
        instanceMethods: instanceMethods,
      ),
    );
    if (canImplement) {
      return (
        capability: FlaxCodegenProxyCapability.canImplement,
        proxy: 'implements',
        constructorName: null,
      );
    }
  }

  if (canExtend) {
    return (
      capability: FlaxCodegenProxyCapability.canExtend,
      proxy: 'extends',
      constructorName: constructorName,
    );
  }
  return (
    capability: FlaxCodegenProxyCapability.unsupported,
    proxy: null,
    constructorName: null,
  );
}

bool _hasInheritedBindableConcreteBehavior({
  required FlaxCodegenBindingParser parser,
  required _FlaxCodegenTypeScope scope,
  required ClassElement element,
}) {
  final inherited = element.allSupertypes.where(
    (type) =>
        !(type.element.library.isDartCore && type.element.name == 'Object'),
  );
  final skips = <FlaxCodegenSkip>[];

  for (final name
      in inherited.expand((type) => type.getters).map((e) => e.name!)) {
    if (!_usableMemberName(name) ||
        {'hashCode', 'runtimeType'}.contains(name)) {
      continue;
    }
    final getter = element.thisType.lookUpGetter(name, element.library);
    if (getter == null ||
        getter.isAbstract ||
        getter.isStatic ||
        getter.metadata.hasNonVirtual) {
      continue;
    }
    skips.clear();
    if (_tryMemberType(
          scope,
          getter.returnType,
          '${element.name}.$name',
          skips,
          allowed: _getterKinds,
        ) !=
        null) {
      return true;
    }
  }
  for (final name
      in inherited.expand((type) => type.setters).map((e) => e.name!)) {
    final member = name.replaceFirst(RegExp(r'=$'), '');
    if (!_usableMemberName(member)) continue;
    final setter = element.thisType.lookUpSetter(member, element.library);
    if (setter == null ||
        setter.isAbstract ||
        setter.isStatic ||
        setter.metadata.hasNonVirtual) {
      continue;
    }
    skips.clear();
    if (_tryMemberType(
          scope,
          setter.formalParameters.single.type,
          '${element.name}.$member=',
          skips,
          allowed: _setterKinds,
          input: true,
        ) !=
        null) {
      return true;
    }
  }
  for (final name
      in inherited.expand((type) => type.methods).map((e) => e.name!)) {
    if (!_usableMemberName(name) ||
        {'toString', 'noSuchMethod'}.contains(name)) {
      continue;
    }
    final method = element.thisType.lookUpMethod(name, element.library);
    if (method == null ||
        method.isAbstract ||
        method.isStatic ||
        method.metadata.hasNonVirtual) {
      continue;
    }
    skips.clear();
    if (_bindMethod(
          parser: parser,
          scope: scope,
          element: element,
          method: method,
          location: '${element.name}.$name',
          skips: skips,
        ) !=
        null) {
      return true;
    }
  }
  return false;
}

Map<String, List<String>> _factoryProxyConstructors(
  ClassElement element,
  Map<String, List<String>> constructors,
) => {
  for (final constructor in element.constructors)
    if (constructor.isFactory &&
        constructors.containsKey(
          constructor.name == 'new' ? '' : constructor.name!,
        ))
      constructor.name == 'new' ? '' : constructor.name!:
          constructors[constructor.name == 'new' ? '' : constructor.name!]!,
};

String? _preferredExtendsConstructor(
  ClassElement element,
  Map<String, List<String>> constructors, {
  Iterable<String>? requested,
}) {
  final generative = [
    for (final constructor in element.constructors)
      if (constructor.isPublic && !constructor.isFactory)
        constructor.name == 'new' ? '' : constructor.name!,
  ].where(constructors.containsKey).toList();
  if (requested != null) {
    final names = requested.toList();
    return names.length == 1 && generative.contains(names.single)
        ? names.single
        : null;
  }
  if (generative.contains('')) return '';
  return generative.length == 1 ? generative.single : null;
}

bool _proxyAccessorCanOverride(
  ClassElement element,
  String name, {
  required bool setter,
}) {
  final accessor = setter
      ? element.thisType.lookUpSetter(name, element.library)
      : element.thisType.lookUpGetter(name, element.library);
  return accessor != null &&
      (accessor.isAbstract || !accessor.metadata.hasNonVirtual);
}

bool _proxyMethodCanOverride(ClassElement element, String name) {
  final method = element.thisType.lookUpMethod(name, element.library);
  return method != null &&
      (method.isAbstract || !method.metadata.hasNonVirtual);
}

bool _requiresFlutterSemantics(
  FlaxCodegenBindingParser parser,
  InterfaceElement element,
) {
  if (parser._isFlutterWidget(element)) return true;
  const identities = {
    'package:flutter/src/widgets/framework.dart::BuildContext',
    'package:flutter/src/widgets/framework.dart::State',
    'package:flutter/src/widgets/navigator.dart::Route',
    'package:flutter/src/widgets/navigator.dart::Page',
  };
  return [
    element.thisType,
    ...element.allSupertypes,
  ].any((type) => identities.contains(identity(type.element)));
}

Future<bool> _proxySelectionParses(
  FlaxCodegenBindingParser parser,
  FlaxCodegenBindingConfig library,
  String name,
  FlaxCodegenClassSelection selection,
) async {
  final checkpoint = parser.checkpoint();
  try {
    await parser.parse(
      FlaxCodegenBindingConfig(
        library.name,
        library.library,
        library.jsPackage,
        library.dartOutput,
        library.tsOutput,
        {name: selection},
        additionalLibraries: library.additionalLibraries,
        imports: library.imports,
        types: library.types,
        publicLibraries: library.publicLibraries,
      ),
    );
    return true;
  } on StateError {
    return false;
  } finally {
    parser.restore(checkpoint);
  }
}
