part of 'emitter.dart';

extension _EngineGenericEmission on FlaxCodegenBindingEmitter {
  String _vmFunctionName(String id) =>
      '_flaxGenericFunction${_dartModule.ownedFunctions.toList().indexWhere((f) => f.id == id)}';
  String _vmMethodName(
    FlaxCodegenClassModel owner,
    FlaxCodegenMethodModel method, {
    bool superCall = false,
  }) => '_flaxGeneric_${owner.name}_${superCall ? 'super_' : ''}${method.name}';

  Map<Object?, FlaxCodegenTypeRef> _vmParameters(
    List<FlaxCodegenGenericParameter> parameters,
    String prefix,
  ) => {
    for (final (i, p) in parameters.indexed)
      p.genericIdentity: FlaxCodegenTypeRef(
        'parameter',
        name: '$prefix$i',
        genericIdentity: p.genericIdentity,
      ),
  };

  FlaxCodegenMethodModel _vmMethod(
    FlaxCodegenMethodModel method,
    Map<Object?, FlaxCodegenTypeRef> substitutions,
  ) {
    final symbolic = method.specialize(substitutions);
    return FlaxCodegenMethodModel(
      method.name,
      symbolic.parameters,
      symbolic.result,
      instance: method.instance,
      startsRoute: method.startsRoute,
      mustCallSuper: method.mustCallSuper,
      operatorName: method.operatorName,
      typeArguments: [
        for (final p in method.typeParameters)
          substitutions[p.genericIdentity]!.name!,
      ],
      typeParameters: [
        for (final p in symbolic.typeParameters)
          FlaxCodegenGenericParameter(
            substitutions[p.genericIdentity]!.name!,
            p.bound,
            defaultType: p.defaultType,
            genericIdentity: p.genericIdentity,
          ),
      ],
    );
  }

  FlaxCodegenTypeRef _vmDefaultArgument(FlaxCodegenGenericParameter parameter) {
    final bound = parameter.bound.declaration ?? parameter.bound;
    return (_containsParameter(bound, _genericDartParameters)
            ? bound
            : parameter.defaultType ?? bound)
        .declaredAs(null);
  }

  bool _vmRequiresTypeArguments(List<FlaxCodegenGenericParameter> parameters) {
    final local = parameters.map((p) => p.name).toSet();
    return parameters.any(
      (p) =>
          p.defaultType == null &&
          (!_vmFactory || _containsParameter(p.bound, local)),
    );
  }

  FlaxCodegenMethodModel _vmDefaultMethod(FlaxCodegenMethodModel source) {
    if (source.typeParameters.isEmpty) return source;
    if (_vmRequiresTypeArguments(source.typeParameters)) return source;
    final defaults = {
      for (final p in source.typeParameters)
        p.genericIdentity: _vmDefaultArgument(p),
    };
    final closed = source.specialize(defaults);
    return FlaxCodegenMethodModel(
      source.name,
      closed.parameters,
      closed.result,
      instance: source.instance,
      startsRoute: source.startsRoute,
      operatorName: source.operatorName,
      typeArguments: [
        for (final p in source.typeParameters)
          _dartStaticType(defaults[p.genericIdentity]!),
      ],
    );
  }

  String _vmRef(
    FlaxCodegenTypeRef type, {
    bool withinCallback = false,
    String? withinCallbackExpression,
  }) {
    final dart = _dartStaticType(type);
    final context =
        withinCallbackExpression ?? (withinCallback ? 'true' : null);
    final flag = context == null ? '' : ', withinCallback: $context';
    if (type.kind == 'data') {
      return 'const FlaxTypeRef("data", nullable: ${type.nullable})';
    }
    if (type.kind == 'callback') {
      return 'types.define<$dart>(FlaxTypeRef("callback", nullable: ${type.nullable}, callback: ${_callbackBinding(type)})$flag)';
    }
    if (type.kind == 'record') {
      final fields = [
        for (final f in _recordFields(type))
          'FlaxRecordFieldBinding(${_quote(f.name)}, ${withinCallbackExpression == null ? _ref(f.type, withinCallback: withinCallback) : _vmRef(f.type, withinCallbackExpression: withinCallbackExpression)})',
      ];
      final view = _quote(':${_typeId(type, omitNullable: true)}');
      return 'types.define<$dart>(FlaxTypeRef("record", nullable: ${type.nullable}, record: FlaxRecordBinding([${fields.join(',')}], FlaxDartTypes.typeOf<$dart>, signature: types.key<$dart>() + $view))$flag)';
    }
    return 'types.ref<$dart>(${context == null ? '' : 'withinCallback: $context'})';
  }

  List<String> _vmTypeTemplates(FlaxCodegenModuleModel module) => [
    for (final type in module.classes.where((t) => t.kind != 'members'))
      'FlaxDartClassTemplate(${_quote(type.id)}, ${_dartName(type.name)}${_typeArgs(type.typeArguments)}, ${_quote(type.kind == 'widgetInterface' || module.library == 'package:flutter/widgets.dart' && module.name == 'components' && type.name == 'StatefulWidget' ? 'widget' : type.kind)}${type.typeParameters.isEmpty ? '' : ', typeFactory: _flaxType_${type.name}, factory: _flaxClass_${type.name}'}${type.requiresTypeArguments ? ', requiresTypeArguments: true' : ''})',
    for (final type in module.types.where(
      (t) =>
          t.isEnum &&
          !module.classes.any((c) => c.id == t.id) &&
          _owners[t.id] == module,
    ))
      'FlaxDartClassTemplate(${_quote(type.id)}, ${_dartName(type.name)}, "enum")',
  ];

  void _writeVmFactories(StringBuffer out, FlaxCodegenModuleModel module) {
    if (module.ownedFunctions.any((f) => f.call.deferredFactory)) {
      out.writeln(
        'Object? _flaxDeferredRequiresType(Map<String, Object?> values) => throw ArgumentError("Deferred factory requires a target type");',
      );
    }
    for (final owner in module.classes.where(
      (c) =>
          c.kind != 'enum' &&
          c.typeParameters.isNotEmpty &&
          c.methods.any((m) => m.instance && m.typeParameters.isNotEmpty),
    )) {
      for (final (index, argument) in owner.typeArguments.indexed) {
        out.writeln(
          'typedef _flaxDefault_${owner.name}_$index = ${_dartTypeArgument(argument)};',
        );
      }
    }
    for (final function in module.ownedFunctions) {
      final method = function.call;
      if (method.typeParameters.isEmpty) continue;
      _writeVmFactory(
        out,
        method,
        _vmFunctionName(function.id),
        functionId: function.id,
        route: function.route,
      );
    }
    for (final owner in module.classes) {
      for (final method in owner.methods.where(
        (m) =>
            owner.kind != 'enum' &&
            m.instance &&
            m.typeParameters.isNotEmpty &&
            !m.deferredFactory,
      )) {
        _writeVmFactory(
          out,
          method,
          _vmMethodName(owner, method),
          owner: owner,
        );
        if (owner.proxy?.kind == 'extends' &&
            owner.proxy!.hasSuperMethod(method.name)) {
          _writeVmFactory(
            out,
            method,
            _vmMethodName(owner, method, superCall: true),
            owner: owner,
            superCall: true,
          );
        }
      }
      if (owner.typeParameters.isNotEmpty && owner.kind != 'members') {
        if (owner.kind == 'enum') {
          _genericDartParameters.addAll(
            owner.typeParameters.map((p) => p.name),
          );
          out.writeln(
            'Type _flaxType_${owner.name}${_dartStaticGenerics(owner.typeParameters)}() => ${_dartName(owner.name)}${_typeArgs(owner.typeParameters.map((p) => p.name).toList())};',
          );
          final use = _typeArgs(
            owner.typeParameters.map((p) => p.name).toList(),
          );
          final constants = module.types
              .singleWhere((t) => t.id == owner.id)
              .enumNames;
          out.writeln(
            'Function _flaxClass_${owner.name}${_dartStaticGenerics(owner.typeParameters)}() => (FlaxDartTypes types, String id) => FlaxDartClass(${_dartName(owner.name)}$use, FlaxEnumBinding(id, {',
          );
          for (final constant in constants) {
            out.writeln(
              'if (${_dartName(owner.name)}.$constant is ${_dartName(owner.name)}$use) ${_quote(constant)}: ${_dartName(owner.name)}.$constant,',
            );
          }
          out.writeln(
            '}, supertypes: [${_quote(owner.id)}, ...${jsonEncode(owner.supertypes)}]));',
          );
          _genericDartParameters.removeAll(
            owner.typeParameters.map((p) => p.name),
          );
        } else {
          _writeVmClass(out, owner);
        }
      }
    }
  }

  void _writeVmFactory(
    StringBuffer out,
    FlaxCodegenMethodModel source,
    String name, {
    FlaxCodegenClassModel? owner,
    String? functionId,
    FlaxCodegenRouteCallModel? route,
    bool superCall = false,
  }) {
    final ownerParameters = owner == null
        ? <Object?, FlaxCodegenTypeRef>{}
        : _vmParameters(owner.typeParameters, '_Owner');
    if (owner != null && owner.typeParameters.isNotEmpty) {
      owner = _vmClass(owner, ownerParameters);
    }
    final substitutions = <Object?, FlaxCodegenTypeRef>{
      ...ownerParameters,
      ..._vmParameters(source.typeParameters, '_Method'),
    };
    final method = _vmMethod(source, substitutions);
    final previousCallbacks = Map<FlaxCodegenTypeRef, String>.of(_callbacks);
    final previousFactory = _vmFactory;
    final previousParameters = Set<String>.of(_genericDartParameters);
    _vmFactory = true;
    _genericDartParameters.addAll(
      substitutions.values
          .where((p) => p.kind == 'parameter')
          .map((p) => p.name!),
    );
    _callbacks.clear();
    out.writeln(
      'Function $name${_dartStaticGenerics([...?owner?.typeParameters, ...method.typeParameters])}() => (FlaxDartTypes types) {',
    );
    out.writeln(
      'Object? invoke(${method.instance ? 'Object receiver, ' : ''}Map<String, Object?> values) {',
    );
    String target;
    if (owner != null) {
      target = superCall
          ? '(receiver as _${owner.name}Proxy${_typeArgs(owner.typeArguments)})._flaxSuper_${method.name}${_typeArgs(method.typeArguments)}'
          : _methodTarget(owner, method);
    } else {
      final extension = _dartModule.extensions
          .where((e) => e.members.any((m) => m.id == functionId))
          .firstOrNull;
      final member = extension?.members
          .where((m) => m.id == functionId)
          .firstOrNull;
      if (extension != null && member != null) {
        final ownerArgs = method.typeArguments
            .take(member.isStatic ? 0 : extension.typeParameters.length)
            .toList();
        final methodArgs = method.typeArguments.skip(ownerArgs.length).toList();
        final receiver = member.isStatic
            ? _dartName(extension.name)
            : extension.isExtensionType
            ? '(values[${_quote(method.parameters.first.name)}] as ${_dartName(extension.name)}${_typeArgs(ownerArgs)})'
            : '${_dartName(extension.name)}${_typeArgs(ownerArgs)}(${_cast('values[${_quote(method.parameters.first.name)}]', method.parameters.first.type)})';
        target = '$receiver.${member.name}${_typeArgs(methodArgs)}';
        final inputs = member.isStatic
            ? method.parameters
            : method.parameters.skip(1).toList();
        _emitCallableCall(
          out,
          FlaxCodegenMethodModel(method.name, inputs, method.result),
          (args) {
            if (member.kind == 'getter' || member.kind == 'staticGetter') {
              return '$receiver.${member.name}';
            }
            if (member.kind == 'setter' || member.kind == 'staticSetter') {
              return '$receiver.${member.name} = $args';
            }
            if (member.kind == 'operator') {
              return _operatorExpression(receiver, member.name, [
                for (final p in inputs)
                  _cast('values[${_quote(p.name)}]', p.type),
              ]);
            }
            return '$target($args)';
          },
          tearOff: target,
        );
        target = '';
      } else {
        FlaxCodegenMethodModel? enumMethod;
        FlaxCodegenClassModel? enumFactoryOwner;
        String? enumConstructor;
        for (final enumOwner in _dartModule.classes.where(
          (c) => c.kind == 'enum',
        )) {
          for (final ctor in enumOwner.constructors) {
            if (enumOwner.enumOperationId(ctor.name, 'factory') == functionId) {
              enumFactoryOwner = enumOwner;
              enumConstructor = ctor.name;
            }
          }
          final constants = _dartModule.types
              .singleWhere((t) => t.id == enumOwner.id)
              .enumNames;
          for (final member in enumOwner.methods.where((m) => m.instance)) {
            for (final constant
                in enumOwner.typeParameters.isEmpty
                    ? <String?>[null]
                    : constants) {
              if (enumOwner.enumOperationId(member.name, 'call', constant) ==
                  functionId) {
                enumMethod = member;
              }
            }
          }
        }
        if (enumFactoryOwner != null) {
          target =
              '${_dartName(enumFactoryOwner.name)}${_typeArgs(method.typeArguments)}.${enumConstructor!}';
        } else if (enumMethod != null) {
          final receiver = _cast(
            'values[${_quote(method.parameters.first.name)}]',
            method.parameters.first.type,
          );
          target =
              '($receiver).${enumMethod.name}${_typeArgs(method.typeArguments)}';
          _emitCallableCall(
            out,
            FlaxCodegenMethodModel(
              method.name,
              method.parameters.skip(1).toList(),
              method.result,
            ),
            (args) => '$target($args)',
            tearOff: target,
          );
          target = '';
        } else {
          final staticOwner = _dartModule.classes
              .where(
                (c) => c.methods.any(
                  (m) =>
                      !m.instance &&
                      (c.kind == 'enum'
                              ? c.enumOperationId(m.name, 'call')
                              : c.staticMethodId(m)) ==
                          functionId,
                ),
              )
              .firstOrNull;
          target = staticOwner == null
              ? '${_dartName(method.name)}${_typeArgs(method.typeArguments)}'
              : '${_dartName(staticOwner.name)}.${staticOwner.methods.firstWhere((m) => !m.instance && (staticOwner.kind == 'enum' ? staticOwner.enumOperationId(m.name, 'call') : staticOwner.staticMethodId(m)) == functionId).name}${_typeArgs(method.typeArguments)}';
        }
      }
    }
    if (target.isNotEmpty) {
      _emitCallableCall(
        out,
        FlaxCodegenMethodModel(method.name, method.parameters, method.result),
        (args) => '$target($args)',
        tearOff: target,
      );
    }
    out.writeln('}');
    final parameters = [
      for (final p in method.parameters)
        'FlaxParameter(${_quote(p.name)}, ${_ref(p.type)}, required: ${p.required}, defaultValue: ${_default(p)}, omitWhenAbsent: ${p.omitWhenAbsent})',
    ];
    final result = _ref(method.result);
    _usesVmCallbackResult |= _writeCallbackAdapters(
      out,
      _callbacks.entries.toList(),
    );
    out.writeln(
      'return ${method.instance ? 'FlaxInstanceMethod' : 'FlaxFunctionBinding'}(${method.instance ? '' : '${_quote(functionId!)}, '}[${parameters.join(',')}], $result, invoke${method.startsRoute && method.instance ? ', startsRoute: true' : ''}${route == null ? '' : ', route: FlaxRouteCallBinding(${jsonEncode(route.builders)})'});',
    );
    out.writeln('};');
    _callbacks
      ..clear()
      ..addAll(previousCallbacks);
    _vmFactory = previousFactory;
    _genericDartParameters
      ..clear()
      ..addAll(previousParameters);
  }

  FlaxCodegenClassModel _vmClass(
    FlaxCodegenClassModel owner,
    Map<Object?, FlaxCodegenTypeRef> substitutions,
  ) {
    List<FlaxCodegenGetterModel> accessors(
      List<FlaxCodegenGetterModel> members,
    ) => [
      for (final g in members)
        FlaxCodegenGetterModel(
          g.name,
          g.type.specialize(substitutions),
          encodeKind: g.encodeKind,
          id: g.id,
          cache: g.cache,
        ),
    ];
    final proxy = owner.proxy;
    return FlaxCodegenClassModel(
      name: owner.name,
      id: owner.id,
      kind: owner.kind,
      constructors: [
        for (final ctor in owner.constructors)
          FlaxCodegenConstructorModel(ctor.name, [
            for (final p in ctor.parameters) p.specialize(substitutions),
          ]),
      ],
      supertypes: owner.supertypes,
      superTypes: [
        for (final p in owner.superTypes) p.specialize(substitutions),
      ],
      typeArguments: [
        for (final p in owner.typeParameters)
          substitutions[p.genericIdentity]!.name!,
      ],
      typeParameters: [
        for (final p in owner.typeParameters)
          FlaxCodegenGenericParameter(
            substitutions[p.genericIdentity]!.name!,
            p.bound.specialize(substitutions),
            defaultType: p.defaultType,
            genericIdentity: p.genericIdentity,
          ),
      ],
      getters: accessors(owner.getters),
      setters: accessors(owner.setters),
      methods: [for (final m in owner.methods) m.specialize(substitutions)],
      proxy: proxy == null
          ? null
          : FlaxCodegenProxyModel(
              proxy.kind,
              [for (final m in proxy.methods) m.specialize(substitutions)],
              widgetInterface: proxy.widgetInterface,
              getters: accessors(proxy.getters),
              setters: accessors(proxy.setters),
              superMethods: proxy.superMethods,
              mustCallSuperAccessors: proxy.mustCallSuperAccessors,
            ),
      pageAdapter: owner.pageAdapter,
      disposeMethod: owner.disposeMethod,
      capabilities: owner.capabilities,
      listenerPairs: owner.listenerPairs,
      staticGetters: owner.staticGetters,
      staticSetters: owner.staticSetters,
      widgetInterfaces: [
        for (final i in owner.widgetInterfaces) i.specialize(substitutions),
      ],
      widgetMembers: owner.widgetMembers,
    );
  }

  String? _vmShapeKey(FlaxCodegenTypeRef type) {
    if (type.kind != 'callback' || type.typeParameters.isNotEmpty) return null;
    final positional = type.parameters.where((p) => p.positional).toList();
    final named = type.parameters.where((p) => !p.positional).toList()
      ..sort((a, b) => a.name.compareTo(b.name));
    return jsonEncode([
      'callback',
      [
        positional.length,
        positional.where((p) => p.required).length,
        named.map((p) => p.name).toList(),
        named.map((p) => p.required).toList(),
      ],
    ]);
  }

  void _rememberVmShape(FlaxCodegenTypeRef type) {
    final key = _vmShapeKey(type);
    if (key != null) _vmShapes.putIfAbsent(key, () => type);
  }

  void _writeVmShapes(StringBuffer out) {
    final previousCallbacks = Map<FlaxCodegenTypeRef, String>.of(_callbacks);
    final previousFactory = _vmFactory;
    final previousParameters = Set<String>.of(_genericDartParameters);
    _vmFactory = true;
    final shapes = _vmShapes.entries.toList();
    out.writeln('const _flaxDartShapes = <FlaxDartShapeTemplate>[');
    for (final (i, shape) in shapes.indexed) {
      out.writeln('FlaxDartShapeTemplate(${_quote(shape.key)}, _flaxShape$i),');
    }
    out.writeln('];');
    for (final (i, shape) in shapes.indexed) {
      _callbacks.clear();
      final source = shape.value;
      final names = <String>[];
      FlaxCodegenTypeRef field() {
        final name = '_Shape${names.length}';
        names.add(name);
        _genericDartParameters.add(name);
        return FlaxCodegenTypeRef(
          'parameter',
          name: name,
          genericIdentity: Object(),
        );
      }

      final parameters = [
        ...source.parameters.where((p) => p.positional),
        ...(source.parameters.where((p) => !p.positional).toList()
          ..sort((a, b) => a.name.compareTo(b.name))),
      ];
      final inputs = [
        for (final p in parameters)
          FlaxCodegenParameterModel(
            name: p.name,
            type: field(),
            required: p.required,
            positional: p.positional,
            defaultCode: 'null',
            omitWhenAbsent: !p.required,
          ),
      ];
      final type = FlaxCodegenTypeRef(
        'callback',
        parameters: inputs,
        result: field(),
      );
      out.writeln(
        'Function _flaxShape$i<${names.join(',')}>() => (FlaxDartTypes types, bool withinCallback) {',
      );
      final ref = _vmRef(type, withinCallbackExpression: 'withinCallback');
      _usesVmCallbackResult |= _writeCallbackAdapters(
        out,
        _callbacks.entries.toList(),
      );
      out.writeln('return $ref;\n};');
    }
    _callbacks
      ..clear()
      ..addAll(previousCallbacks);
    _vmFactory = previousFactory;
    _genericDartParameters
      ..clear()
      ..addAll(previousParameters);
  }

  void _writeVmWidgetHost(StringBuffer out, FlaxCodegenClassModel source) {
    final previousNames = Set<String>.of(_genericDartParameters);
    final type = source.typeParameters.isEmpty
        ? source
        : _vmClass(source, _vmParameters(source.typeParameters, '_Owner'));
    _genericDartParameters.addAll(type.typeArguments);
    final args = _typeArgs(type.typeArguments);
    final generics = _dartStaticGenerics(type.typeParameters);
    final helper = '_flaxWidget${type.name}Create';
    if (source.typeParameters.isNotEmpty) {
      out.writeln(
        '${_dartName('Widget')} $helper$generics(String ctor, Map<String, Object?> values) { switch (ctor) {',
      );
      for (final constructor in type.constructors) {
        out.writeln('case ${_quote(constructor.name)}:');
        _emitConstructorCalls(out, type, constructor);
      }
      out.writeln(
        'default: throw ArgumentError("Unknown Widget constructor"); } }',
      );
    }
    out.writeln('class _${type.name}Host$generics extends FlaxWidgetHost {');
    out.writeln('_${type.name}Host(super.node);');
    out.writeln(
      '@override ${_dartName('Widget')} buildNative(Map<String, Object?> values) => ${source.typeParameters.isEmpty ? '_create${type.name}' : '$helper$args'}(node.ctor, values); }',
    );
    _genericDartParameters
      ..clear()
      ..addAll(previousNames);
  }

  void _writeVmClass(StringBuffer out, FlaxCodegenClassModel owner) {
    final substitutions = _vmParameters(owner.typeParameters, '_Owner');
    final type = _vmClass(owner, substitutions);
    final args = '<${type.typeArguments.join(", ")}>';
    final previousCallbacks = Map<FlaxCodegenTypeRef, String>.of(_callbacks);
    final previousFactory = _vmFactory;
    final previousParameters = Set<String>.of(_genericDartParameters);
    final previousDeferred = Map.of(_deferred);
    _deferred.clear();
    _vmFactory = true;
    _genericDartParameters.addAll(type.typeArguments);
    _callbacks.clear();
    out.writeln(
      'Type _flaxType_${owner.name}${_dartStaticGenerics(type.typeParameters)}() => ${_dartName(owner.name)}$args;',
    );
    out.writeln(
      'Function _flaxClass_${owner.name}${_dartStaticGenerics(type.typeParameters)}() => (FlaxDartTypes types, String id) {',
    );
    out.writeln(
      '// ignore: unused_element\nbool _is${owner.name}(Object value) => value is ${_dartName(owner.name)}$args;',
    );
    for (final getter in type.getters) {
      final read = '(value as ${_dartName(type.name)}$args).${getter.name}';
      out.writeln(
        '// ignore: unused_element\nObject? _${type.name}_${getter.name}(Object value) ${getter.type.kind == 'void' ? '{ $read; return null; }' : '=> $read;'}',
      );
    }
    for (final setter in type.setters) {
      out.writeln(
        'void _${type.name}_set_${setter.name}(Object value, Object? input) { (value as ${_dartName(type.name)}$args).${setter.name} = ${_cast('input', setter.type)}; }',
      );
    }
    if (type.proxy?.kind == 'extends') {
      final proxy = type.proxy!;
      for (final getter in proxy.getters.where(
        (g) => proxy.hasSuperGetter(g.name),
      )) {
        out.writeln(
          'Object? _${type.name}_super_get_${getter.name}(Object value, Map<String, Object?> values) => (value as _${type.name}Proxy$args)._flaxSuperGet_${getter.name};',
        );
      }
      for (final setter in proxy.setters.where(
        (g) => proxy.hasSuperSetter(g.name),
      )) {
        out.writeln(
          'Object? _${type.name}_super_set_${setter.name}(Object value, Map<String, Object?> values) { (value as _${type.name}Proxy$args)._flaxSuperSet_${setter.name}(${_cast("values['value']", setter.type)}); return null; }',
        );
      }
    }
    for (final method in type.methods.where(
      (m) => m.instance && !m.deferredFactory,
    )) {
      _writeMethod(out, type, _vmDefaultMethod(method));
      if (type.proxy?.kind == 'extends' &&
          type.proxy!.hasSuperMethod(method.name)) {
        final closed = _vmDefaultMethod(method);
        out.writeln(
          'Object? _${type.name}_super_${method.name}(Object receiver, Map<String, Object?> values) {',
        );
        final target =
            '(receiver as _${type.name}Proxy$args)._flaxSuper_${method.name}${_typeArgs(closed.typeArguments)}';
        _emitCallableCall(
          out,
          closed,
          (inputs) => '$target($inputs)',
          tearOff: target,
        );
        out.writeln('}');
      }
    }
    out.writeln(
      '// ignore: unused_element\nObject _create${type.name}(String ctor, Map<String, Object?> values) {',
    );
    out.writeln('switch (ctor) {');
    for (final ctor in _bindingConstructors(type)) {
      out.writeln('case ${_quote(ctor.name)}:');
      _emitConstructorCalls(
        out,
        type,
        ctor.name == '@implementation'
            ? _proxyConstructor(type)
            : ctor.name.startsWith('@implementation:')
            ? _runtimeConstructor(
                type.constructors.firstWhere(
                  (c) =>
                      c.name == ctor.name.substring('@implementation:'.length),
                ),
              )
            : ctor,
        proxyImplementation: ctor.name.startsWith('@implementation'),
      );
    }
    out.writeln('default: throw ArgumentError("Unknown constructor"); } }');
    final getters =
        '[${type.getters.map((g) => 'FlaxGetter(${_quote(g.name)}, ${_ref(g.type)}, _${type.name}_${g.name}${g.encodeKind == null ? '' : ', encode: const FlaxTypeRef(${_quote(g.encodeKind!)})'})').join(',')}]';
    final setters =
        '[${type.setters.map((g) => 'FlaxSetter(${_quote(g.name)}, ${_ref(g.type)}, _${type.name}_set_${g.name})').join(',')}]';
    final methods = _instanceMethods(type);
    final object =
        'FlaxObjectBinding(id, $getters, $methods, constructors: ${_constructors(type)}, create: _create${type.name}, matches: _is${type.name}, setters: $setters, supertypes: [${_quote(owner.id)}, ...${jsonEncode(owner.supertypes)}], listenerPairs: ${jsonEncode(_sortedStringMap(owner.listenerPairs))}, disposeMethod: ${owner.disposeMethod == null ? 'null' : _quote(owner.disposeMethod!)}${_proxyBinding(type)}${_collectionViewBinding(type)})';
    final binding = switch (type.kind) {
      'object' => object,
      'context' => 'FlaxContextBinding(id, $getters, matches: _is${type.name})',
      'state' =>
        'FlaxStateBinding(id, $getters, $methods, matches: _is${type.name})',
      'stream' =>
        'FlaxStreamTypeBinding(id, $getters, $methods, constructors: ${_constructors(type)}, create: _create${type.name}, matches: _is${type.name}, view: types.ref<${_dartName(type.name)}$args>())',
      'widgetInterface' => 'FlaxWidgetInterfaceBinding(id, _is${type.name})',
      'widget' when _nativeWidgetFactory(type) => object,
      'widget' =>
        'FlaxWidgetBinding(id, ${_constructors(type)}, _${type.name}Host$args.new, matches: _is${type.name}${_hasWidgetObjectView(type) ? ', objectView: $object' : ''})',
      _ => throw StateError('Unknown generic class category: ${type.kind}'),
    };
    final deferred = _deferredLiteral(
      _deferredBindings(
        FlaxCodegenTypeRef(
          'object',
          id: owner.id,
          name: owner.name,
          dartArguments: substitutions.values.toList(),
        ),
      ),
    );
    _writeDeferredHelpers(out);
    _usesVmCallbackResult |= _writeCallbackAdapters(
      out,
      _callbacks.entries.toList(),
    );
    out.writeln(
      'return FlaxDartClass(${_dartName(owner.name)}$args, $binding$deferred);',
    );
    out.writeln('};');
    _callbacks
      ..clear()
      ..addAll(previousCallbacks);
    _deferred
      ..clear()
      ..addAll(previousDeferred);
    _vmFactory = previousFactory;
    _genericDartParameters
      ..clear()
      ..addAll(previousParameters);
  }
}
