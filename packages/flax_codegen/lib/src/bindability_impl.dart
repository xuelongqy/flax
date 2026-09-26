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
        code: 'provider_surface_insufficient',
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
    requested.widgetInterfaces,
    available.widgetInterfaces,
    'widgetInterfaces',
  );
  requireNames(requested.startsRoute, available.startsRoute, 'startsRoute');
  requireNames(requested.errorGetters, available.errorGetters, 'errorGetters');

  if (requested.proxy != null && requested.proxy != available.proxy ||
      requested.kind != null && requested.kind != available.kind ||
      requested.jsName != null && requested.jsName != available.jsName ||
      requested.asyncIterableFactory != null &&
          requested.asyncIterableFactory != available.asyncIterableFactory ||
      requested.typeArguments.isNotEmpty &&
          requested.typeArguments.join(',') !=
              available.typeArguments.join(',')) {
    skips.add(
      FlaxCodegenSkip(
        target: typeName,
        code: 'provider_adaptation_incompatible',
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
  void skip(String target, String reason, {required String code}) =>
      skips.add(FlaxCodegenSkip(target: target, reason: reason, code: code));

  // Keep the current emitter naming boundary, but never silently lose a
  // public API that needs an escaped name or an operator adapter.
  bool usableMemberName(String? member) {
    if (_usableMemberName(member)) return true;
    if (member != null && member.isNotEmpty && !member.startsWith('_')) {
      final target = '$name.$member';
      if (!skips.any((skip) =>
          skip.target == target && skip.code == 'unsupported_public_member_name')) {
        skip(
          target,
          'Public member requires an export-name or operator mapping',
          code: 'unsupported_public_member_name',
        );
      }
    }
    return false;
  }

  bool reservedDescriptorField(String member) {
    if (!{'kind', 'type', 'ctor', 'args'}.contains(member)) return false;
    final target = '$name.$member';
    if (!skips.any((skip) =>
        skip.target == target && skip.code == 'descriptor_field_conflict')) {
      skip(
        target,
        'Public getter conflicts with a generated descriptor field',
        code: 'descriptor_field_conflict',
      );
    }
    return true;
  }

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

  if (parser._dependencyTypeOwners[id] case final owner?) {
    if (base != null) {
      skip(
        name,
        'Existing provider type is not expanded',
        code: 'existing_provider_type',
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
      skip(name, 'Owned type is not expanded', code: 'owned_type_not_expanded');
      return FlaxCodegenProposedBinding(
        name: name,
        id: id,
        selection: base,
        skips: skips,
      );
    }
    skip(name, 'Already adapted', code: 'already_adapted');
    return FlaxCodegenProposedBinding(name: name, id: id, skips: skips);
  }

  if (element is EnumElement) {
    skip(name, 'Enums use types selection', code: 'enum_uses_type_selection');
    return FlaxCodegenProposedBinding(name: name, id: id, skips: skips);
  }
  if (element is! ClassElement && element is! MixinElement) {
    skip(
      name,
      'Expected a class or mixin',
      code: 'unsupported_interface_declaration',
    );
    return FlaxCodegenProposedBinding(name: name, id: id, skips: skips);
  }

  final widget = parser._isFlutterWidget(element);
  final kind = base?.kind ?? (widget ? null : 'object');
  if (base != null &&
      (base.pageAdapter != null ||
          base.widgetInterfaces.isNotEmpty ||
          base.proxyVariants.isNotEmpty ||
          _hasData(base.data))) {
    skip(
      name,
      'Overlay selections stay YAML-only',
      code: 'overlay_configuration_required',
    );
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
  final typeArguments = [...?base?.typeArguments];
  if (element.typeParameters.isNotEmpty &&
      typeArguments.length != element.typeParameters.length) {
    if (typeArguments.isNotEmpty) {
      skip(
        name,
        'Explicit runtime type arguments required: $name',
        code: 'explicit_runtime_type_arguments',
      );
      return FlaxCodegenProposedBinding(name: name, id: id, skips: skips);
    }
    final sharedOwner = _defaultTypeArguments(parser, scope, element);
    if (!sharedOwner.supported) {
      skip(
        name,
        sharedOwner.reason ?? 'Explicit runtime type arguments required: $name',
        code: sharedOwner.code!,
      );
      return FlaxCodegenProposedBinding(name: name, id: id, skips: skips);
    }
  }

  final constructors = <String, List<String>>{};
  if (element is ClassElement) {
    for (final constructor in element.constructors) {
      if (!constructor.isPublic) continue;
      final ctorName = constructor.name == 'new' ? '' : constructor.name!;
      if (!usableMemberName(ctorName) && ctorName.isNotEmpty) continue;
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
        if (element.typeParameters.isNotEmpty && typeArguments.isEmpty) {
          final plan = _constructorSpecializationPlan(
            parser: parser,
            element: element,
            constructor: constructor,
            selectedParameters: bound,
            concreteUses: concreteUses,
          );
          if (!plan.supported) {
            skip(
              '$name.$ctorName',
              plan.reason ?? 'Generic constructor specialization unavailable',
              code: plan.code!,
            );
            continue;
          }
        }
        constructors[ctorName] = bound;
      }
    }
  } else if (widget) {
    skip(
      name,
      'Mixins require a non-constructible object selection',
      code: 'mixin_non_constructible',
    );
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
      if (!usableMemberName(getterName) ||
          {'hashCode', 'runtimeType'}.contains(getterName) ||
          reservedDescriptorField(getterName)) {
        continue;
      }
      if (getter.isStatic) {
        if (getter.variable.setter != null) {
          skip(
            '$name.$getterName',
            'Mutable static fields require a class-level read/write binding',
            code: 'static_mutable_member',
          );
          continue;
        }
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
      if (!setter.isPublic) continue;
      final setterName = setter.name!.replaceFirst(RegExp(r'=$'), '');
      if (setter.isStatic) {
        skip(
          '$name.$setterName=',
          'Static setters require a class-level read/write binding',
          code: 'static_mutable_member',
        );
        continue;
      }
      if (!usableMemberName(setterName)) continue;
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
      if (!usableMemberName(methodName) ||
          methodName == 'toString' ||
          methodName == 'noSuchMethod') {
        continue;
      }
      final deferredFactory = inferredDeferredFactories.contains(methodName);
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
            !usableMemberName(getterName) ||
            {'hashCode', 'runtimeType'}.contains(getterName) ||
            reservedDescriptorField(getterName)) {
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
        if (setters.contains(setterName) || !usableMemberName(setterName)) {
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
            !usableMemberName(methodName) ||
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
      if (!usableMemberName(getterName) ||
          {'hashCode', 'runtimeType'}.contains(getterName)) {
        continue;
      }
      if (!ctorFields.contains(getterName)) {
        skip(
          '$name.$getterName',
          'Value getters require selected constructor fields',
          code: 'widget_getter_requires_constructor_field',
        );
      }
    }
    for (final method in element.methods) {
      if (!method.isPublic || method.isStatic) continue;
      final methodName = method.name!;
      if (!usableMemberName(methodName) ||
          methodName == 'toString' ||
          methodName == 'noSuchMethod') {
        continue;
      }
      skip(
        '$name.$methodName',
        'Widget instance methods are not auto-selected',
        code: 'widget_instance_method',
      );
    }
  }

  final methodTypeArguments = <String, List<String>>{};
  for (final methodName in {...methods.keys, ...instanceMethods.keys}) {
    if (deferredFactories.contains(methodName)) continue;
    final method = instanceMethods.containsKey(methodName)
        ? element.thisType.lookUpMethod(methodName, element.library)
        : element.getMethod(methodName);
    if (method == null || method.typeParameters.isEmpty) continue;
    final plan = _sharedTypeArguments(
      parser,
      scope,
      method.typeParameters,
      element.library,
      '$name.$methodName',
    );
    if (!plan.supported) {
      // _bindMethod checked the same plan before selecting this member.
      throw StateError('Selected method has no runtime type arguments: $name.$methodName');
    }
    methodTypeArguments[methodName] = plan.sources;
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
    methodTypeArguments: methodTypeArguments,
    kind: kind,
  );
  final proxyCapability = recommendation.capability;
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
          code: 'abstract_constructor_requires_extends',
        );
      }
    }
  }

  if (widget && constructors.isEmpty) {
    skip(name, 'No bindable constructors', code: 'no_constructors');
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
    skip(name, 'No bindable members', code: 'no_members');
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
    methodTypeArguments: {
      for (final entry in methodTypeArguments.entries)
        if (selectedInstanceMethods.containsKey(entry.key) ||
            methods.containsKey(entry.key))
          entry.key: entry.value,
    },
    methods: methods,
    disposeMethod: base?.disposeMethod ?? inferredDisposeMethod,
    proxyVariants: base?.proxyVariants ?? const {},
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

const _complexGenericBoundCode = 'complex_generic_bound';
const _constructorSpecializationMissingUseSiteCode =
    'constructor_specialization_missing_use_site';
const _constructorSpecializationAmbiguousCode =
    'constructor_specialization_ambiguous';

final class _SharedTypeArgumentPlan {
  const _SharedTypeArgumentPlan({
    this.sources = const [],
    this.arguments = const [],
    this.reason,
    this.code,
  }) : assert((reason == null) == (code == null));

  final List<String> sources;
  final List<DartType> arguments;
  final String? reason;
  final String? code;

  bool get supported => reason == null;
}

_SharedTypeArgumentPlan _defaultTypeArguments(
  FlaxCodegenBindingParser parser,
  _FlaxCodegenTypeScope scope,
  InterfaceElement element,
) => _sharedTypeArguments(
  parser,
  scope,
  element.typeParameters,
  element.library,
  element.name!,
);

_SharedTypeArgumentPlan _sharedTypeArguments(
  FlaxCodegenBindingParser parser,
  _FlaxCodegenTypeScope scope,
  List<TypeParameterElement> parameters,
  LibraryElement library,
  String ownerName,
) {
  final arguments = <DartType>[];
  final names = <String>[];
  final unresolved = parameters.toSet();
  for (final parameter in parameters) {
    final objectQuestion = library.typeProvider.objectQuestionType;
    try {
      parser._checkBounds([parameter], [objectQuestion], library, false);
      arguments.add(objectQuestion);
      names.add('Object?');
      continue;
    } on StateError {
      final bound = parameter.bound;
      if (bound == null || _containsDeferredTypeParameter(bound, unresolved)) {
        return _SharedTypeArgumentPlan(
          reason:
              'Complex generic bound requires explicit runtime type arguments: '
              '$ownerName.${parameter.name}',
          code: _complexGenericBoundCode,
        );
      }
      final name = _closedTypeArgumentSource(bound);
      if (name == null) {
        return _SharedTypeArgumentPlan(
          reason:
              'Complex generic bound requires explicit runtime type arguments: '
              '$ownerName.${parameter.name}',
          code: _complexGenericBoundCode,
        );
      }
      try {
        // Register the complete bound through the normal dependency/type
        // routing path. This preserves provider reuse and public-carrier
        // diagnostics instead of treating a closed bound as a special import.
        scope.typeRef(bound);
      } on StateError catch (error) {
        return _SharedTypeArgumentPlan(
          reason: error.message,
          code: 'unsupported_binding_type',
        );
      }
      try {
        parser._checkBounds([parameter], [bound], library, false);
      } on StateError {
        return _SharedTypeArgumentPlan(
          reason:
              'Complex generic bound requires explicit runtime type arguments: '
              '$ownerName.${parameter.name}',
          code: _complexGenericBoundCode,
        );
      }
      arguments.add(bound);
      names.add(name);
    }
  }
  try {
    parser._checkBounds(parameters, arguments, library, false);
  } on StateError {
    return _SharedTypeArgumentPlan(
      reason:
          'Complex generic bound requires explicit runtime type arguments: '
          '$ownerName',
      code: _complexGenericBoundCode,
    );
  }
  return _SharedTypeArgumentPlan(sources: names, arguments: arguments);
}

String? _closedTypeArgumentSource(DartType type) {
  if (type is DynamicType) return 'dynamic';
  if (type is! InterfaceType) return null;
  final arguments = <String>[];
  for (final argument in type.typeArguments) {
    final source = _closedTypeArgumentSource(argument);
    if (source == null) return null;
    arguments.add(source);
  }
  final suffix = type.nullabilitySuffix == NullabilitySuffix.question
      ? '?'
      : '';
  return '${type.element.name}'
      '${arguments.isEmpty ? '' : '<${arguments.join(', ')}>'}'
      '$suffix';
}

final class _ConstructorSpecializationTarget {
  const _ConstructorSpecializationTarget({
    required this.type,
    required this.typeArguments,
    required this.runtimeDomains,
  });

  final InterfaceType type;
  final List<String> typeArguments;
  final Map<String, String> runtimeDomains;
}

final class _ConstructorSpecializationPlan {
  const _ConstructorSpecializationPlan(
    this.targets, {
    this.reason,
    this.code,
    this.scalarParameters = const {},
  }) : assert((reason == null) == (code == null));

  final List<_ConstructorSpecializationTarget> targets;
  final String? reason;
  final String? code;
  final Set<String> scalarParameters;

  bool get supported => reason == null && targets.isNotEmpty;
}

_ConstructorSpecializationPlan _constructorSpecializationPlan({
  required FlaxCodegenBindingParser parser,
  required InterfaceElement element,
  required ConstructorElement constructor,
  required List<String> selectedParameters,
  required Iterable<InterfaceType> concreteUses,
}) {
  final parameters = element.typeParameters;
  if (parameters.isEmpty) {
    return const _ConstructorSpecializationPlan([]);
  }
  final directInputs = <TypeParameterElement, FormalParameterElement>{};
  for (final typeParameter in parameters) {
    final input = constructor.formalParameters.where((parameter) {
      if (!selectedParameters.contains(parameter.name) ||
          !parameter.isRequired) {
        return false;
      }
      final type = parameter.type;
      return type is TypeParameterType && type.element == typeParameter;
    }).firstOrNull;
    if (input == null) {
      return _ConstructorSpecializationPlan(
        const [],
        reason:
            'Generic constructor specialization requires every type parameter '
            'as a required direct input',
        code: _constructorSpecializationMissingUseSiteCode,
      );
    }
    directInputs[typeParameter] = input;
  }

  final targets = <_ConstructorSpecializationTarget>[];
  final seen = <String>{};
  for (final use in concreteUses) {
    if (identity(use.element) != identity(element) ||
        use.typeArguments.length != parameters.length) {
      continue;
    }
    final localArguments = <DartType>[];
    final sources = <String>[];
    var representable = true;
    for (final argument in use.typeArguments) {
      final local = _localConcreteTypeArgument(parser, element, argument);
      final source = local == null ? null : _typeArgumentSource(parser, local);
      if (local == null || source == null) {
        representable = false;
        break;
      }
      localArguments.add(local);
      sources.add(source);
    }
    if (!representable) continue;
    try {
      parser._checkBounds(parameters, localArguments, element.library, false);
    } on StateError catch (error) {
      return _ConstructorSpecializationPlan(
        const [],
        reason: error.message,
        code: 'constructor_specialization_bound_failure',
      );
    }
    final key = sources.join('|');
    if (!seen.add(key)) continue;
    final target = element.instantiate(
      typeArguments: localArguments,
      nullabilitySuffix: NullabilitySuffix.none,
    );
    final targetConstructor = target.constructors
        .where((candidate) => candidate.name == constructor.name)
        .firstOrNull;
    if (targetConstructor == null) {
      return const _ConstructorSpecializationPlan(
        [],
        reason: 'Generic constructor specialization target is unavailable',
        code: _constructorSpecializationMissingUseSiteCode,
      );
    }
    final domains = <String, String>{};
    for (final entry in directInputs.entries) {
      final concrete = targetConstructor.formalParameters
          .firstWhere((parameter) => parameter.name == entry.value.name)
          .type;
      final domain = _constructorJsDomain(concrete);
      if (domain != null) domains[entry.value.name!] = domain;
    }
    targets.add(
      _ConstructorSpecializationTarget(
        type: target,
        typeArguments: sources,
        runtimeDomains: domains,
      ),
    );
  }

  // String and safe integers are the two stable scalar bridge domains. Once
  // Analyzer evidence selects either one for a direct generic input, complete
  // the pair when both satisfy the declared Dart bound.
  if (parameters.length == 1 && targets.isNotEmpty) {
    final observed = targets
        .map((target) => target.typeArguments.single)
        .toSet();
    if (observed.difference(const {'String', 'int'}).isEmpty) {
      final provider = element.library.typeProvider;
      for (final argument in [provider.stringType, provider.intType]) {
        final source = _typeArgumentSource(parser, argument)!;
        if (!seen.add(source)) continue;
        try {
          parser._checkBounds(parameters, [argument], element.library, false);
        } on StateError {
          continue;
        }
        final target = element.instantiate(
          typeArguments: [argument],
          nullabilitySuffix: NullabilitySuffix.none,
        );
        final targetConstructor = target.constructors
            .where((candidate) => candidate.name == constructor.name)
            .firstOrNull;
        if (targetConstructor == null) continue;
        final domains = <String, String>{};
        for (final entry in directInputs.entries) {
          final concrete = targetConstructor.formalParameters
              .firstWhere((parameter) => parameter.name == entry.value.name)
              .type;
          final domain = _constructorJsDomain(concrete);
          if (domain != null) domains[entry.value.name!] = domain;
        }
        targets.add(
          _ConstructorSpecializationTarget(
            type: target,
            typeArguments: [source],
            runtimeDomains: domains,
          ),
        );
      }
    }
  }
  if (targets.isEmpty) {
    return const _ConstructorSpecializationPlan(
      [],
      reason: 'Generic constructor specialization needs a concrete use-site',
      code: _constructorSpecializationMissingUseSiteCode,
    );
  }
  final scalarTypeParameters = <TypeParameterElement>{};
  if (parameters.length == 1 &&
      targets.length == 2 &&
      targets.map((target) => target.typeArguments.single).toSet().containsAll(
        const {'String', 'int'},
      )) {
    scalarTypeParameters.add(parameters.single);
  }
  final scalarParameters = <String>{
    for (final parameter in constructor.formalParameters)
      if (selectedParameters.contains(parameter.name) &&
          parameter.type is TypeParameterType &&
          scalarTypeParameters.contains(
            (parameter.type as TypeParameterType).element,
          ))
        parameter.name!,
  };
  if (targets.length == 1) {
    return _ConstructorSpecializationPlan(
      targets,
      scalarParameters: scalarParameters,
    );
  }

  for (var left = 0; left < targets.length; left++) {
    for (var right = left + 1; right < targets.length; right++) {
      final a = targets[left].runtimeDomains;
      final b = targets[right].runtimeDomains;
      var disjoint = false;
      for (final name in directInputs.values.map(
        (parameter) => parameter.name!,
      )) {
        final aDomain = a[name];
        final bDomain = b[name];
        if (aDomain != null &&
            bDomain != null &&
            !_constructorDomainsOverlap(aDomain, bDomain)) {
          disjoint = true;
          break;
        }
      }
      if (!disjoint) {
        return const _ConstructorSpecializationPlan(
          [],
          reason: 'Generic constructor specializations have overlapping JS runtime domains',
          code: _constructorSpecializationAmbiguousCode,
        );
      }
    }
  }
  return _ConstructorSpecializationPlan(
    targets,
    scalarParameters: scalarParameters,
  );
}

String? _constructorJsDomain(DartType type) {
  if (type is! InterfaceType || type.typeArguments.isNotEmpty) return null;
  final element = type.element;
  if (!element.library.isDartCore) return null;
  final base = switch (element.name) {
    'String' => 'string',
    'bool' => 'boolean',
    'int' || 'double' || 'num' => 'number',
    _ => null,
  };
  if (base == null) return null;
  return type.nullabilitySuffix == NullabilitySuffix.question ? '$base?' : base;
}

bool _constructorDomainsOverlap(String left, String right) {
  Set<String> values(String value) {
    final nullable = value.endsWith('?');
    final base = nullable ? value.substring(0, value.length - 1) : value;
    return {base, if (nullable) 'null'};
  }

  return values(left).intersection(values(right)).isNotEmpty;
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
    if (!usableMemberName(paramName)) {
      if (parameter.isRequired || parameter.isPositional) {
        skips.add(
          FlaxCodegenSkip(
            target: '$location.$paramName',
            code: 'required_parameter_name',
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
          code: 'omit_cap',
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
        code: 'missing_callback_signature',
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
        code: 'unsupported_binding_type',
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
    skips.add(
      FlaxCodegenSkip(
        target: location,
        reason: error.message,
        code: 'unsupported_input_shape',
      ),
    );
    return null;
  }
  if (type.kind == 'context' || type.kind == 'void') {
    skips.add(
      FlaxCodegenSkip(
        target: location,
        reason: 'Context inputs are currently callback-only',
        code: 'context_input_callback_only',
      ),
    );
    return null;
  }
  if (widget &&
      type.kind == 'callback' &&
      type.result!.containsWidget &&
      !type.result!.isDirectMountedWidgetResult) {
    skips.add(
      FlaxCodegenSkip(
        target: location,
        reason: 'Unsupported mounted Widget callback result: $location',
        code: 'unsupported_mounted_widget_result',
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
        code: 'stored_callback_owner_required',
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
      skips.add(
        FlaxCodegenSkip(
          target: location,
          reason: error.message,
          code: 'unsupported_default_value',
        ),
      );
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
        code: 'unsupported_binding_type',
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
    skips.add(
      FlaxCodegenSkip(
        target: location,
        reason: error.message,
        code: 'unsupported_member_shape',
      ),
    );
    return null;
  }
  if (allowed != null && !allowed.contains(result.kind)) {
    skips.add(
      FlaxCodegenSkip(
        target: location,
        reason: 'Unsupported member type: $type',
        code: 'unsupported_member_type',
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
  var signature = method.type;
  if (method.typeParameters.isNotEmpty && !deferredFactory) {
    final plan = _sharedTypeArguments(
      parser,
      scope,
      method.typeParameters,
      element.library,
      location,
    );
    if (!plan.supported) {
      skips.add(
        FlaxCodegenSkip(
          target: location,
          reason: plan.reason!,
          code: plan.code!,
        ),
      );
      return null;
    }
    // Match the actual signature that the fail-closed parser will emit.
    // Deferred factories keep their separate, existing inference path.
    signature = method.type.instantiate(plan.arguments);
  }
  final result = _tryMemberType(
    scope,
    signature.returnType,
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
  for (final parameter in signature.formalParameters) {
    final paramName = parameter.name;
    if (!_usableMemberName(paramName)) {
      if (parameter.isRequired || parameter.isPositional) {
        skips.add(
          FlaxCodegenSkip(
            target: '$location.$paramName',
            code: 'required_parameter_name',
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
  required Map<String, List<String>> methodTypeArguments,
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
        methodTypeArguments: {
          for (final entry in methodTypeArguments.entries)
            if (extendMethods.containsKey(entry.key)) entry.key: entry.value,
        },
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
        methodTypeArguments: {
          for (final entry in methodTypeArguments.entries)
            if (instanceMethods.containsKey(entry.key)) entry.key: entry.value,
        },
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
