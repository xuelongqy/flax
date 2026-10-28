part of 'parser.dart';

/// Resolve guards against declarations, before package ownership rewrites IDs.
extension FlaxCodegenSandboxSelection on FlaxCodegenBindingParser {
  Future<List<FlaxCodegenSandboxRule>> _sandboxRules(
    FlaxCodegenBindingConfig config,
    _FlaxCodegenTypeScope scope,
    FlaxCodegenModuleModel module,
    Set<String> skippedTargets,
  ) async {
    if (config.sandbox.isNotEmpty &&
        (config.sandbox['version'] != 1 ||
            config.sandbox.keys.any(
              (key) => !{
                'version',
                'classes',
                'functions',
                'topLevel',
                'extensions',
              }.contains(key),
            ))) {
      throw StateError(
        'Expected sandbox version 1 with known configuration fields',
      );
    }
    final rules = <FlaxCodegenSandboxRule>[];
    final used = <String>{};
    final configured = <String, Object?>{};
    void entries(String prefix, Object? input) {
      if (input is! Map) throw StateError('Expected sandbox mapping: $prefix');
      for (final entry in input.entries) {
        configured['$prefix/${entry.key}'] = entry.value;
      }
    }

    for (final group in ['classes', 'extensions']) {
      final owners = config.sandbox[group];
      if (owners == null) continue;
      if (owners is! Map) throw StateError('Expected sandbox.$group mapping');
      for (final owner in owners.entries) {
        if (owner.value is! Map) {
          throw StateError('Expected sandbox owner mapping');
        }
        for (final selection in (owner.value as Map).entries) {
          entries('$group/${owner.key}/${selection.key}', selection.value);
        }
      }
    }
    if (config.sandbox['functions'] case final input?) {
      entries('functions', input);
    }
    if (config.sandbox['topLevel'] case final input?) {
      if (input is! Map) throw StateError('Expected sandbox.topLevel mapping');
      for (final entry in input.entries) {
        entries('topLevel/${entry.key}', entry.value);
      }
    }

    final sourceBodies = <String, Map<int, FunctionBody>>{};
    bool synchronousBody(ExecutableElement handler) {
      final fragment = handler.firstFragment;
      final source = fragment.libraryFragment.source.fullName;
      final bodies = sourceBodies.putIfAbsent(source, () {
        final bodies = <int, FunctionBody>{};
        void visit(AstNode node) {
          if (node is FunctionDeclaration) {
            bodies[node.name.offset] = node.functionExpression.body;
          }
          if (node is MethodDeclaration) bodies[node.name.offset] = node.body;
          for (final child in node.childEntities.whereType<AstNode>()) {
            visit(child);
          }
        }

        visit(
          parseString(
            content: File(source).readAsStringSync(),
            throwIfDiagnostics: false,
          ).unit,
        );
        return bodies;
      });
      final body = bodies[fragment.nameOffset];
      return body != null &&
          !body.isAsynchronous &&
          !body.isGenerator &&
          body is! EmptyFunctionBody;
    }

    Future<Element> symbol(String value) async {
      final separator = value.lastIndexOf('#');
      if (separator <= 0 || separator == value.length - 1) {
        throw StateError('Expected sandbox symbol library#name: $value');
      }
      final result = await _libraryByUri(value.substring(0, separator));
      if (result is! LibraryElementResult) {
        throw StateError('Unresolved sandbox library: $value');
      }
      final path = value.substring(separator + 1).split('.');
      Element? element = result.element.exportNamespace.get2(path.first);
      if (path.length == 2 && element is InterfaceElement) {
        element = element.getMethod(path.last);
      } else if (path.length != 1) {
        element = null;
      }
      if (element == null ||
          element.isPrivate ||
          element.enclosingElement is InterfaceElement &&
              element.enclosingElement!.isPrivate) {
        throw StateError('Unresolved public sandbox symbol: $value');
      }
      return element;
    }

    Future<void> add({
      required String selector,
      required ExecutableElement? element,
      required String owner,
      required String kind,
      required String name,
      required List<FlaxCodegenParameterModel> parameters,
      DartType? receiverType,
      bool receiverParameter = false,
    }) async {
      if (element == null) return;
      var marker = _flaxAnnotation(element, 'FlaxSandboxGuard');
      if (marker == null && element is PropertyAccessorElement) {
        marker = _flaxAnnotation(element.variable, 'FlaxSandboxGuard');
      }
      Object? selected = configured[selector];
      if (selected != null) used.add(selector);
      // Inherited projections use the rule on the original declaring class.
      if (element.enclosingElement case final InterfaceElement declaration) {
        final section = element is ConstructorElement
            ? 'constructors'
            : element is GetterElement
            ? element.isStatic
                  ? 'staticGetters'
                  : 'getters'
            : element is SetterElement
            ? element.isStatic
                  ? 'staticSetters'
                  : 'setters'
            : element is MethodElement && element.isOperator
            ? 'operators'
            : element.isStatic
            ? 'methods'
            : 'instanceMethods';
        final original =
            'classes/${declaration.name}/$section/${element is ConstructorElement && element.name == 'new' ? '' : element.name}';
        final inherited = configured[original];
        if (inherited != null) {
          used.add(original);
          if (selected != null &&
              jsonEncode(selected) != jsonEncode(inherited)) {
            throw StateError(
              'Conflicting sandbox declarations: $selector and $original',
            );
          }
          selected ??= inherited;
        }
      }
      if (selected == null && marker == null) return;
      Future<
        ({
          bool deny,
          bool replace,
          DartType? policy,
          ExecutableElement? handler,
        })
      >
      parse(Object? value, DartObject? annotation) async {
        if (annotation?.getField('deny')?.toBoolValue() == true ||
            value == 'deny') {
          return (deny: true, replace: true, policy: null, handler: null);
        }
        DartType? policy;
        ExecutableElement? handler;
        var replace = false;
        if (annotation != null) {
          policy = annotation.getField('policyType')?.toTypeValue();
          handler = annotation.getField('handler')?.toFunctionValue();
          replace = annotation.getField('replace')?.toBoolValue() ?? false;
        } else {
          if (value is! Map ||
              value.keys.any(
                (k) => !{'policyType', 'handler', 'replace'}.contains(k),
              ) ||
              value['policyType'] is! String ||
              value['handler'] is! String ||
              (value.containsKey('replace') && value['replace'] is! bool)) {
            throw StateError('Invalid sandbox guard: $selector');
          }
          final policyElement = await symbol(value['policyType'] as String);
          policy = switch (policyElement) {
            InterfaceElement() => policyElement.thisType,
            TypeAliasElement() => policyElement.aliasedType,
            _ => null,
          };
          final handlerElement = await symbol(value['handler'] as String);
          handler = handlerElement is ExecutableElement ? handlerElement : null;
          replace = value['replace'] == true;
        }
        return (
          deny: false,
          replace: replace,
          policy: policy,
          handler: handler,
        );
      }

      final rule = await parse(selected, selected == null ? marker : null);
      if (selected != null && marker != null) {
        final other = await parse(null, marker);
        if (rule != other) {
          throw StateError(
            'Conflicting annotation and YAML sandbox guard: $selector',
          );
        }
      }
      String reference(Element value) =>
          '${value.library!.uri}#${value is MethodElement ? '${value.enclosingElement!.name}.' : ''}${value.name}';
      final handler = rule.handler;
      final policy = rule.policy;
      final guardParameters = <FlaxCodegenParameterModel>[];
      if (!rule.deny) {
        if (policy is! InterfaceType ||
            policy.nullabilitySuffix != NullabilitySuffix.none ||
            policy.isDartCoreObject ||
            policy.element.isPrivate ||
            policy.typeArguments.isNotEmpty ||
            _hasOpenTypeParameter(policy) ||
            handler == null ||
            handler.isPrivate ||
            handler.enclosingElement is InterfaceElement &&
                handler.enclosingElement!.isPrivate ||
            handler.typeParameters.isNotEmpty ||
            handler is MethodElement && !handler.isStatic) {
          throw StateError(
            'Expected a concrete policy and public synchronous handler: $selector',
          );
        }
        if (!synchronousBody(handler)) {
          throw StateError(
            'Sandbox handler must have a synchronous body: $selector',
          );
        }
        if (!rule.replace &&
            handler.returnType is! VoidType &&
            handler.returnType is! NeverType) {
          throw StateError('Check handlers must return void: $selector');
        }
        final args = handler.formalParameters;
        final prefix = receiverType == null || receiverParameter ? 2 : 3;
        final context = await symbol(
          'package:flax/sandbox.dart#FlaxSandboxContext',
        );
        final system = handler.library.typeSystem;
        if (args.length < prefix ||
            args.take(prefix).any((p) => !p.isRequiredPositional) ||
            context is! InterfaceElement ||
            args[0].type != context.thisType ||
            args[1].type != policy ||
            prefix == 3 &&
                !system.isAssignableTo(receiverType!, args[2].type)) {
          throw StateError(
            'Expected handler(context, policy${prefix == 3 ? ', receiver' : ''}, ...): $selector',
          );
        }
        for (final argument in args.skip(prefix)) {
          final target = parameters
              .where((p) => p.name == argument.name)
              .firstOrNull;
          if (target == null) {
            throw StateError(
              'Unknown handler argument ${argument.name}: $selector',
            );
          }
          final declared = element.formalParameters
              .where((p) => p.name == argument.name)
              .firstOrNull;
          if (declared != null &&
              !_hasOpenTypeParameter(declared.type) &&
              !system.isAssignableTo(declared.type, argument.type)) {
            throw StateError(
              'Incompatible handler argument ${argument.name}: $selector',
            );
          }
          if (argument.isRequired &&
              !target.required &&
              target.omitWhenAbsent) {
            throw StateError(
              'Handler must preserve optional argument ${argument.name}: $selector',
            );
          }
          guardParameters.add(
            FlaxCodegenParameterModel(
              name: target.name,
              type: target.type,
              required: argument.isRequired,
              positional: argument.isPositional,
              defaultCode: target.defaultCode,
              omitWhenAbsent: target.omitWhenAbsent,
            ),
          );
        }
        if (rule.replace &&
            parameters.any(
              (p) => !guardParameters.any((a) => a.name == p.name),
            )) {
          throw StateError(
            'Replacement handler must accept all selected arguments: $selector',
          );
        }
        DartType publicResult(DartType type) {
          if (type is InterfaceType) {
            return type.allSupertypes
                    .where(
                      (parent) =>
                          parent.element.library.uri.toString() ==
                              'dart:async' &&
                          parent.element.name == 'Future',
                    )
                    .firstOrNull ??
                type;
          }
          return type;
        }

        if (rule.replace &&
            element.returnType is VoidType &&
            handler.returnType is! VoidType &&
            handler.returnType is! NeverType) {
          throw StateError('Void replacements must return void: $selector');
        }
        if (rule.replace &&
            !_hasOpenTypeParameter(element.baseElement.returnType) &&
            !system.isAssignableTo(
              publicResult(handler.returnType),
              publicResult(element.returnType),
            )) {
          throw StateError(
            'Replacement handler result must match the binding: $selector',
          );
        }
      }
      rules.add(
        FlaxCodegenSandboxRule(
          owner: owner,
          kind: kind,
          name: name,
          operation: selector,
          deny: rule.deny,
          replace: rule.replace,
          policy: policy is InterfaceType ? reference(policy.element) : null,
          handler: handler == null ? null : reference(handler),
          receiver: receiverType != null && !receiverParameter,
          returnsVoid: handler?.returnType is VoidType,
          parameters: guardParameters,
        ),
      );
    }

    for (final type in module.classes) {
      final element = _elementsByIdentity[type.id] ?? scope.exports[type.name];
      if (element is! InterfaceElement) continue;
      if (_flaxAnnotation(element, 'FlaxSandboxGuard') != null) {
        throw StateError(
          'Annotate individual binding operations, not ${type.name}',
        );
      }
      for (final ctor in type.constructors) {
        await add(
          selector: 'classes/${type.name}/constructors/${ctor.name}',
          element: element.getNamedConstructor(
            ctor.name.isEmpty ? 'new' : ctor.name,
          ),
          owner: type.id,
          kind: 'construct',
          name: ctor.name,
          parameters: ctor.parameters,
        );
      }
      for (final method in type.methods) {
        final original = method.operatorName ?? method.name;
        await add(
          selector:
              'classes/${type.name}/${method.operatorName != null
                  ? 'operators'
                  : method.instance
                  ? 'instanceMethods'
                  : 'methods'}/$original',
          element: method.instance
              ? element.thisType.lookUpMethod(
                  original == 'unary-' ? '-' : original,
                  element.library,
                )
              : element.getMethod(original),
          owner: method.instance ? type.id : type.staticMethodId(method),
          kind: 'call',
          name: method.instance ? method.name : '',
          parameters: method.parameters,
          receiverType: method.instance ? element.thisType : null,
        );
      }
      for (final (group, members, setter, isStatic) in [
        ('getters', type.getters, false, false),
        ('setters', type.setters, true, false),
        ('staticGetters', type.staticGetters, false, true),
        ('staticSetters', type.staticSetters, true, true),
      ]) {
        for (final member in members) {
          await add(
            selector: 'classes/${type.name}/$group/${member.name}',
            element: setter
                ? (isStatic
                      ? element.getSetter(member.name)
                      : element.thisType.lookUpSetter(
                          member.name,
                          element.library,
                        ))
                : (isStatic
                      ? element.getGetter(member.name)
                      : element.thisType.lookUpGetter(
                          member.name,
                          element.library,
                        )),
            owner: !isStatic
                ? type.id
                : setter
                ? type.staticSetterId(member)
                : type.staticGetterId(member),
            kind: isStatic
                ? 'call'
                : setter
                ? 'set'
                : 'get',
            name: isStatic ? '' : member.name,
            parameters: setter
                ? [
                    FlaxCodegenParameterModel(
                      name: 'value',
                      type: member.type,
                      required: true,
                      positional: true,
                      defaultCode: 'null',
                    ),
                  ]
                : const [],
            receiverType: isStatic ? null : element.thisType,
          );
        }
      }
    }
    for (final function in module.functions) {
      final element = scope.exports[function.call.name];
      await add(
        selector: 'functions/${function.call.name}',
        element: element is ExecutableElement ? element : null,
        owner: function.id,
        kind: 'call',
        name: '',
        parameters: function.call.parameters,
      );
    }
    for (final getter
        in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[]) {
      final value = scope.exports[getter.name];
      await add(
        selector: 'topLevel/getters/${getter.name}',
        element: value is TopLevelVariableElement
            ? value.getter
            : value is GetterElement
            ? value
            : null,
        owner: getter.id,
        kind: 'call',
        name: '',
        parameters: const [],
      );
    }
    for (final setter
        in module.topLevel?.setters ?? <FlaxCodegenTopLevelSetterModel>[]) {
      final value =
          scope.exports['${setter.name}='] ?? scope.exports[setter.name];
      await add(
        selector: 'topLevel/setters/${setter.name}',
        element: value is TopLevelVariableElement
            ? value.setter
            : value is SetterElement
            ? value
            : null,
        owner: setter.id,
        kind: 'call',
        name: '',
        parameters: [
          FlaxCodegenParameterModel(
            name: 'value',
            type: setter.type,
            required: true,
            positional: true,
            defaultCode: 'null',
          ),
        ],
      );
    }
    for (final extension in module.extensions) {
      final element = scope.exports[extension.name];
      if (element is! ExtensionElement && element is! ExtensionTypeElement) {
        continue;
      }
      if (_flaxAnnotation(element!, 'FlaxSandboxGuard') != null) {
        throw StateError(
          'Annotate individual extension operations, not ${extension.name}',
        );
      }
      for (final member in extension.members) {
        final declaration = element as InstanceElement;
        final target = member.kind.toLowerCase().contains('getter')
            ? declaration.getGetter(member.name)
            : member.kind.toLowerCase().contains('setter')
            ? declaration.getSetter(member.name)
            : declaration.getMethod(member.name);
        final group = switch (member.kind) {
          'getter' => 'getters',
          'setter' => 'setters',
          'staticGetter' => 'staticGetters',
          'staticSetter' => 'staticSetters',
          'staticMethod' => 'staticMethods',
          'operator' => 'operators',
          _ => 'methods',
        };
        await add(
          selector: 'extensions/${extension.name}/$group/${member.name}',
          element: target,
          owner: member.id,
          kind: 'call',
          name: '',
          parameters: member.call.parameters,
          receiverParameter: !member.isStatic,
        );
      }
    }
    final unused = configured.keys.toSet().difference(used);
    // Automatic selection may omit APIs whose types have no selected binding.
    // Its existing skip diagnostic remains authoritative; no callable is emitted.
    unused.removeWhere((selector) {
      final parts = selector.split('/');
      final owner = parts.length == 4 ? parts[1] : parts.last;
      final member = parts.length == 4 ? parts.last : '';
      return skippedTargets.contains(owner) ||
          skippedTargets.contains('$owner.$member');
    });
    if (unused.isNotEmpty) {
      throw StateError(
        'Sandbox selectors do not select binding APIs: ${unused.join(', ')}',
      );
    }
    for (final type in module.types.where(
      (type) => type.enumNames.isNotEmpty,
    )) {
      final element = _elementsByIdentity[type.id] ?? scope.exports[type.name];
      if (element is EnumElement &&
          element.fields.any(
            (field) =>
                field.isEnumConstant &&
                _flaxAnnotation(field, 'FlaxSandboxGuard') != null,
          )) {
        throw StateError(
          'Inline enum constants cannot carry sandbox guards: ${type.name}',
        );
      }
    }
    // Enums use top-level transport, including a value argument for instance APIs.
    final normalized = <FlaxCodegenSandboxRule>[];
    for (final rule in rules) {
      final type = module.classes
          .where(
            (type) =>
                type.kind == 'enum' &&
                (rule.owner == type.id ||
                    type.methods.any(
                      (method) =>
                          !method.instance &&
                          rule.owner == type.staticMethodId(method),
                    )),
          )
          .firstOrNull;
      if (type == null) {
        normalized.add(rule);
        continue;
      }
      final action = rule.kind == 'construct' ? 'factory' : rule.kind;
      final member = rule.owner == type.id
          ? rule.name
          : type.methods
                .singleWhere(
                  (method) =>
                      !method.instance &&
                      type.staticMethodId(method) == rule.owner,
                )
                .name;
      final constants = module.types.singleWhere(
        (value) => value.id == type.id,
      );
      final variants = rule.receiver && type.typeParameters.isNotEmpty
          ? constants.enumNames.cast<String?>()
          : <String?>[null];
      for (final constant in variants) {
        final owner = type.enumOperationId(member, action, constant);
        final call = module
            .enumFunctions(type)
            .singleWhere((call) => call.id == owner);
        normalized.add(
          FlaxCodegenSandboxRule(
            owner: owner,
            kind: 'call',
            name: '',
            operation: rule.operation,
            policy: rule.policy,
            handler: rule.handler,
            deny: rule.deny,
            replace: rule.replace,
            returnsVoid: rule.returnsVoid,
            parameters: [
              if (rule.receiver && !rule.deny) call.call.parameters.first,
              ...rule.parameters,
            ],
          ),
        );
      }
    }
    return normalized;
  }
}
