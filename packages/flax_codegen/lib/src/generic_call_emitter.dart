part of 'emitter.dart';

extension _GenericCallEmission on FlaxCodegenBindingEmitter {
  List<String> _genericContextMembers(FlaxCodegenProxyModel proxy) => [
    for (final method in proxy.methods)
      if (method.typeParameters.isNotEmpty && proxy.hasSuperMethod(method.name))
        method.name,
  ];
  String _genericCallMetadata(FlaxCodegenMethodModel method, String id) {
    return jsonEncode({
      'id': id,
      'parameters': _memberParameters(method.parameters),
    });
  }

  String _genericMethodMetadata(FlaxCodegenClassModel type) =>
      '{${type.methods.where((m) => m.instance && m.typeParameters.isNotEmpty && !m.deferredFactory).map((m) => '${jsonEncode(m.name)}:${_genericCallMetadata(m, m.name)}').join(',')}}';
}
