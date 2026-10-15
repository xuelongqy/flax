part of 'emitter.dart';

extension _DartTypeEmission on FlaxCodegenBindingEmitter {
  String _dartAliasBinding(FlaxCodegenClassModel type) {
    final owner = _dartTypeSources[type.name];
    return owner == null ? '' : ', aliasOf: ${_quote(owner.id)}';
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
    arguments ??
        (type.requiresTypeArguments
            ? []
            : type.typeParameters.map((p) => p.defaultType!).toList()),
  );

  String _dartTypeRegistration(FlaxCodegenClassModel owner) {
    final constructors = {
      for (final ctor in _bindingConstructors(
        owner,
      ).where((c) => !c.name.startsWith('@')))
        ctor.name: [
          for (final p in ctor.parameters)
            {
              'name': p.name,
              'required': p.required,
              'positional': p.positional,
            },
        ],
    };
    final proxy = owner.proxy;
    final metadata = {
      'category': owner.kind == 'widget' && _hasWidgetObjectView(owner)
          ? 'object'
          : owner.kind,
      'constructors': constructors,
      if (owner.kind == 'enum')
        'factories': {
          for (final ctor in owner.constructors)
            ctor.name: owner.enumOperationId(ctor.name, 'factory'),
        },
    };
    final encoded = jsonEncode(metadata);
    return '_flaxDefineDartTypes(${owner.name}, ${jsonEncode(owner.id)}, ${proxy == null ? encoded : '{...$encoded, proxy: _${owner.name}Proxy}'});';
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
}
