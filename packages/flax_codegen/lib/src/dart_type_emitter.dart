part of 'emitter.dart';

typedef _DartTypeTarget = ({
  FlaxCodegenClassModel owner,
  FlaxCodegenClassModel binding,
  List<FlaxCodegenTypeRef> arguments,
});

extension _DartTypeEmission on FlaxCodegenBindingEmitter {
  String _dartAliasBinding(FlaxCodegenClassModel type) {
    final owner = _dartTypeSources[type.name];
    return owner == null ? '' : ', aliasOf: ${_quote(owner.id)}';
  }

  String _dartTypeCases(
    FlaxCodegenClassModel owner,
    List<_DartTypeTarget> all,
    String Function(FlaxCodegenTypeRef, {bool input}) convert,
  ) {
    final cases = <String>[];
    for (final target in all.where((target) => target.owner == owner)) {
      final type = target.binding;
      final result =
          '${owner.kind == 'widget' && owner.proxy != null ? '_${owner.name}Native' : owner.name}<${target.arguments.map((arg) => convert(arg, input: false)).join(', ')}>';
      String parameters(FlaxCodegenConstructorModel constructor) {
        final positional = constructor.parameters.where((p) => p.positional);
        final named = constructor.parameters
            .where((p) => !p.positional)
            .toList();
        return [
          for (final p in positional)
            '${p.name}${p.required ? '' : '?'}: ${convert(p.type, input: true)}',
          if (named.isNotEmpty)
            'options${named.every((p) => !p.required) ? '?' : ''}: {${named.map((p) => '${p.name}${p.required ? '' : '?'}: ${convert(p.type, input: true)}${p.required ? '' : ' | undefined'}').join('; ')}}',
        ].join(', ');
      }

      final members = <String>[
        if (owner.proxy?.kind != 'extends' || owner.kind == 'widget')
          for (final ctor in type.constructors)
            '${ctor.name.isEmpty ? '' : '${ctor.name}:'}(${parameters(ctor)})${ctor.name.isEmpty ? ':' : '=>'} $result;',
        'readonly prototype: $result;',
      ];
      final proxy = type.proxy;
      if (proxy != null && type.kind != 'widget') {
        final implementation = [
          for (final method in proxy.methods.where(
            (m) => !proxy.hasSuperMethod(m.name),
          ))
            '${method.name}: ${convert(FlaxCodegenTypeRef('callback', parameters: method.parameters, result: method.result, typeParameters: method.typeParameters), input: true)}',
          for (final getter in proxy.getters.where(
            (g) => !proxy.hasSuperGetter(g.name),
          ))
            'get ${getter.name}(): ${convert(getter.type, input: true)}',
          for (final setter in proxy.setters.where(
            (s) => !proxy.hasSuperSetter(s.name),
          ))
            'set ${setter.name}(value: ${convert(setter.type, input: false)})',
        ].join(';');
        members.add(
          'implement(args: [${parameters(_proxyConstructor(type))}], implementation: {$implementation}): $result;',
        );
      }
      final construct = owner.proxy?.kind == 'extends'
          ? '(abstract new (${parameters(_proxyConstructor(type))}) => $result) & '
          : '';
      cases.add(
        '{ arguments: readonly [${target.arguments.map(_dartTypeKey).join(', ')}]; value: $construct{${members.join()}} & _FlaxInstanceType<$result> & _FlaxDartType<$result, ${_dartTypeOwnerKey(owner, target.arguments)}> }',
      );
    }
    return cases.isEmpty ? '' : ' & _FlaxDartTypeCases<${cases.join(' | ')}>';
  }

  String _dartTypeKey(FlaxCodegenTypeRef type) {
    String render(Object? value) => value is List
        ? 'readonly [${value.map(render).join(', ')}]'
        : jsonEncode(value);
    final description = _dartTypeDescription(type);
    return description == null ? 'never' : render(description);
  }

  String _dartTypeNominalKey(String id, List<FlaxCodegenTypeRef> arguments) =>
      'readonly ["class", ${jsonEncode(id)}, readonly [${arguments.map(_dartTypeKey).join(', ')}], false]';

  String _dartTypeOwnerKey(
    FlaxCodegenClassModel type, [
    List<FlaxCodegenTypeRef>? arguments,
  ]) => _dartTypeNominalKey(
    type.id,
    arguments ?? type.typeParameters.map((p) => p.defaultType!).toList(),
  );

  String _dartTypeDefaults(FlaxCodegenClassModel type) {
    final defaults = type.typeParameters
        .map((parameter) => _dartTypeDescription(parameter.defaultType!))
        .toList();
    return defaults.any((value) => value == null)
        ? 'null'
        : jsonEncode(defaults);
  }

  String _dartTypeRegistration(
    FlaxCodegenClassModel owner,
    List<_DartTypeTarget> targets,
  ) {
    final data = <String>[];
    for (final target in targets) {
      final type = target.binding;
      final constructors = {
        for (final ctor in _bindingConstructors(
          type,
        ).where((ctor) => !ctor.name.startsWith('@')))
          ctor.name: [
            for (final p in ctor.parameters)
              {
                'name': p.name,
                'required': p.required,
                'positional': p.positional,
              },
          ],
      };
      final proxy = type.proxy;
      final definition = proxy == null
          ? ''
          : ', proxy: ${jsonEncode({
              if (type.kind == 'widget') 'nativeWidget': true,
              'type': type.id,
              'parameters': [
                for (final p in _proxyConstructor(type).parameters) {'name': p.name, 'required': p.required, 'positional': p.positional},
              ],
              'methods': {for (final method in proxy.methods) method.name: _memberParameters(method.parameters)},
              'getters': proxy.getters.map((g) => g.name).toList(),
              'setters': proxy.setters.map((g) => g.name).toList(),
              'superMembers': proxy.superMethods,
            })}';
      data.add(
        '{arguments: ${jsonEncode(target.arguments.map(_dartTypeDescription).toList())}, id: ${jsonEncode(type.id)}, constructors: ${jsonEncode(constructors)}$definition}',
      );
    }
    return '_flaxDefineDartTypes(${owner.name}, ${jsonEncode(owner.id)}, ${_dartTypeDefaults(owner)}, [${data.join(',')}]);';
  }

  Object? _dartTypeDescription(FlaxCodegenTypeRef input) {
    final type = input.declaration ?? input;
    if (_containsAnyParameter(type)) return null;
    final arguments = <Object?>[];
    final nominal =
        type.id != null &&
        (_classes.containsKey(type.id) || type.kind == 'enum');
    final children = type.kind == 'stream'
        ? [type.item!]
        : nominal
        ? type.dartArguments.isNotEmpty
              ? type.dartArguments
              : type.tsArguments
        : [if (type.key != null) type.key!, if (type.item != null) type.item!];
    if (!nominal &&
        !{
          'String',
          'bool',
          'int',
          'double',
          'num',
          'any',
          'data',
          'list',
          'map',
          'set',
          'iterable',
        }.contains(type.kind)) {
      return null;
    }
    for (final argument in children) {
      final description = _dartTypeDescription(argument);
      if (description == null) return null;
      arguments.add(description);
    }
    return [
      nominal
          ? 'class'
          : type.kind == 'data'
          ? 'any'
          : type.kind,
      nominal ? type.id : null,
      arguments,
      type.nullable,
    ];
  }

  List<_DartTypeTarget> _prepareDartTypes(FlaxCodegenModuleModel module) {
    _dartModule = module;
    _dartImports.putIfAbsent(module.library, () => 'api');
    final found = <_DartTypeTarget>[];
    for (final owner in module.classes.where(
      (type) =>
          type.typeParameters.isNotEmpty &&
          (type.kind == 'object' || _hasWidgetObjectView(type)),
    )) {
      final defaults = [
        for (final parameter in owner.typeParameters) parameter.defaultType!,
      ];
      final targets = <String, List<FlaxCodegenTypeRef>>{};
      void add(List<FlaxCodegenTypeRef> arguments) {
        if (arguments.length != owner.typeParameters.length) return;
        final descriptions = arguments.map(_dartTypeDescription).toList();
        if (descriptions.any((value) => value == null)) return;
        targets.putIfAbsent(jsonEncode(descriptions), () => arguments);
      }

      add(defaults);
      for (final constructor in owner.constructors) {
        for (final specialization in constructor.specializations) {
          final substitutions = _constructorTypeArguments(
            owner,
            constructor,
            specialization,
          );
          add([
            for (final parameter in owner.typeParameters)
              substitutions[parameter.genericIdentity]!,
          ]);
        }
      }
      for (final signature in _typescriptSignatureTypes(module)) {
        if (signature.id == owner.id) add(signature.dartArguments);
      }
      final defaultKey = jsonEncode(
        defaults.map(_dartTypeDescription).toList(),
      );
      for (final (index, entry)
          in (targets.entries.toList()..sort((a, b) => a.key.compareTo(b.key)))
              .indexed) {
        if (entry.key == defaultKey) {
          found.add((owner: owner, binding: owner, arguments: entry.value));
          continue;
        }
        if (index >= _maxMemberViewExpansion) {
          throw StateError(
            'Dart type target expansion exceeds $_maxMemberViewExpansion: ${owner.name}',
          );
        }
        final name = '_${owner.name}DartType$index';
        final id =
            '${_literalModuleId(module)}::dartType:${owner.id}:${entry.key}';
        final arguments = entry.value;
        final substitutions = <Object?, FlaxCodegenTypeRef>{
          for (final (i, parameter) in owner.typeParameters.indexed)
            parameter.genericIdentity: arguments[i],
        };
        List<FlaxCodegenGetterModel> accessors(
          List<FlaxCodegenGetterModel> values,
        ) => [
          for (final value in values)
            FlaxCodegenGetterModel(
              value.name,
              value.type.specialize(substitutions),
              encodeKind: value.encodeKind,
            ),
        ];
        final proxy = owner.proxy;
        final binding = FlaxCodegenClassModel(
          name: name,
          id: id,
          kind: owner.kind,
          typeArguments: arguments.map(_dartDeclaredType).toList(),
          constructors: [
            for (final constructor in owner.constructors)
              FlaxCodegenConstructorModel(constructor.name, [
                for (final (parameterIndex, parameter)
                    in constructor.parameters.indexed)
                  parameter.withType(
                    (constructor.specializations
                                .where(
                                  (target) =>
                                      jsonEncode(
                                        target.typeArgumentTypes
                                            .map(_dartTypeDescription)
                                            .toList(),
                                      ) ==
                                      entry.key,
                                )
                                .firstOrNull
                                ?.parameterTypes[parameterIndex] ??
                            parameter.type)
                        .specialize(substitutions),
                  ),
              ]),
          ],
          supertypes: [owner.id, ...owner.supertypes],
          superTypes: [
            for (final parent in owner.superTypes)
              parent.specialize(substitutions),
          ],
          getters: accessors(owner.getters),
          setters: accessors(owner.setters),
          methods: [
            for (final method in owner.methods.where((value) => value.instance))
              method.specialize(substitutions),
          ],
          disposeMethod: owner.disposeMethod,
          listenerPairs: owner.listenerPairs,
          widgetInterfaces: [
            for (final type in owner.widgetInterfaces)
              type.specialize(substitutions),
          ],
          widgetMembers: owner.widgetMembers,
          proxy: proxy == null
              ? null
              : FlaxCodegenProxyModel(
                  proxy.kind,
                  [
                    for (final method in proxy.methods)
                      method.specialize(substitutions),
                  ],
                  getters: accessors(proxy.getters),
                  setters: accessors(proxy.setters),
                  superMethods: proxy.superMethods,
                  mustCallSuperAccessors: proxy.mustCallSuperAccessors,
                ),
        );
        _dartTypeSources[name] = owner;
        found.add((owner: owner, binding: binding, arguments: arguments));
      }
    }
    return found;
  }
}
