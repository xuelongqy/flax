import 'model.dart';

/// Rewrites analyzer/wire identity strings on a module tree.
///
/// Fixture models keep `file://` typeLibraries, so this must not round-trip
/// Manifest 2 JSON. Unmapped ids are left unchanged.
FlaxCodegenModuleModel flaxCodegenRewriteModuleIds(
  FlaxCodegenModuleModel module,
  Map<String, String> idMap,
) {
  if (idMap.isEmpty) return module;
  return _ModuleIdRewriter(idMap).mapModule(module);
}

final class _ModuleIdRewriter {
  _ModuleIdRewriter(this._idMap);
  final Map<String, String> _idMap;

  String mapId(String id) => _idMap[id] ?? id;

  String? mapOptionalId(String? id) => id == null ? null : mapId(id);

  FlaxCodegenModuleModel mapModule(FlaxCodegenModuleModel module) {
    return FlaxCodegenModuleModel(
      name: module.name,
      library: module.library,
      jsPackage: module.jsPackage,
      dartOutput: module.dartOutput,
      tsOutput: module.tsOutput,
      classes: [for (final type in module.classes) mapClass(type)],
      types: [
        for (final type in module.types)
          FlaxCodegenNamedTypeModel(
            name: type.name,
            id: mapId(type.id),
            enumNames: type.enumNames,
            typeParameters: [
              for (final parameter in type.typeParameters)
                mapGeneric(parameter),
            ],
          ),
      ],
      typeLibraries: module.typeLibraries,
      functions: [
        for (final function in module.functions)
          FlaxCodegenFunctionModel(
            mapId(function.id),
            mapMethod(function.call),
            route: function.route,
          ),
      ],
      snapshots: [
        for (final snapshot in module.snapshots)
          FlaxCodegenSnapshotModel(
            name: snapshot.name,
            id: mapId(snapshot.id),
            fields: snapshot.fields,
            parent: snapshot.parent,
          ),
      ],
      moduleId: module.moduleId,
      requiredCapabilities: module.requiredCapabilities,
    );
  }

  FlaxCodegenTypeRef mapType(FlaxCodegenTypeRef type) {
    return FlaxCodegenTypeRef(
      type.kind,
      id: mapOptionalId(type.id),
      name: type.name,
      nullable: type.nullable,
      item: type.item == null ? null : mapType(type.item!),
      key: type.key == null ? null : mapType(type.key!),
      parameters: [
        for (final parameter in type.parameters) mapParameter(parameter),
      ],
      typeParameters: [
        for (final parameter in type.typeParameters) mapGeneric(parameter),
      ],
      result: type.result == null ? null : mapType(type.result!),
      typeArguments: type.typeArguments,
      dartArguments: [
        for (final argument in type.dartArguments) mapType(argument),
      ],
      primitiveKinds: type.primitiveKinds,
      declaration: type.declaration == null ? null : mapType(type.declaration!),
      tsArguments: [for (final argument in type.tsArguments) mapType(argument)],
      genericIdentity: type.genericIdentity,
    );
  }

  FlaxCodegenParameterModel mapParameter(FlaxCodegenParameterModel parameter) {
    return FlaxCodegenParameterModel(
      name: parameter.name,
      type: mapType(parameter.type),
      required: parameter.required,
      positional: parameter.positional,
      defaultCode: parameter.defaultCode,
      omitWhenAbsent: parameter.omitWhenAbsent,
      independentWidgetResult: parameter.independentWidgetResult,
      snapshot: parameter.snapshot,
      encodeKind: parameter.encodeKind,
      scoped: parameter.scoped,
    );
  }

  FlaxCodegenGenericParameter mapGeneric(
    FlaxCodegenGenericParameter parameter,
  ) {
    return FlaxCodegenGenericParameter(
      parameter.name,
      mapType(parameter.bound),
      defaultType: parameter.defaultType == null
          ? null
          : mapType(parameter.defaultType!),
      genericIdentity: parameter.genericIdentity,
    );
  }

  FlaxCodegenGetterModel mapGetter(FlaxCodegenGetterModel getter) {
    return FlaxCodegenGetterModel(
      getter.name,
      mapType(getter.type),
      encodeKind: getter.encodeKind,
    );
  }

  FlaxCodegenMethodModel mapMethod(FlaxCodegenMethodModel method) {
    return FlaxCodegenMethodModel(
      method.name,
      [for (final parameter in method.parameters) mapParameter(parameter)],
      mapType(method.result),
      instance: method.instance,
      typeArguments: method.typeArguments,
      startsRoute: method.startsRoute,
      typeParameters: [
        for (final parameter in method.typeParameters) mapGeneric(parameter),
      ],
      mustCallSuper: method.mustCallSuper,
      deferredFactory: method.deferredFactory,
    );
  }

  FlaxCodegenClassModel mapClass(FlaxCodegenClassModel type) {
    return FlaxCodegenClassModel(
      name: type.name,
      id: mapId(type.id),
      kind: type.kind,
      constructors: [
        for (final constructor in type.constructors)
          FlaxCodegenConstructorModel(constructor.name, [
            for (final parameter in constructor.parameters)
              mapParameter(parameter),
          ]),
      ],
      supertypes: [for (final id in type.supertypes) mapId(id)],
      superTypes: [for (final superType in type.superTypes) mapType(superType)],
      genericScalar: type.genericScalar,
      asyncIterableFactory: type.asyncIterableFactory,
      typeArguments: type.typeArguments,
      getters: [for (final getter in type.getters) mapGetter(getter)],
      methods: [for (final method in type.methods) mapMethod(method)],
      pageAdapter: type.pageAdapter,
      setters: [for (final setter in type.setters) mapGetter(setter)],
      disposeMethod: type.disposeMethod,
      listenerPairs: type.listenerPairs,
      staticGetters: [
        for (final getter in type.staticGetters) mapGetter(getter),
      ],
      typeParameters: [
        for (final parameter in type.typeParameters) mapGeneric(parameter),
      ],
      proxy: type.proxy == null
          ? null
          : FlaxCodegenProxyModel(
              type.proxy!.kind,
              [for (final method in type.proxy!.methods) mapMethod(method)],
              superMethods: type.proxy!.superMethods,
              getters: [
                for (final getter in type.proxy!.getters) mapGetter(getter),
              ],
              setters: [
                for (final setter in type.proxy!.setters) mapGetter(setter),
              ],
            ),
      widgetInterfaces: [
        for (final interface in type.widgetInterfaces) mapType(interface),
      ],
      widgetGetters: [
        for (final getter in type.widgetGetters) mapGetter(getter),
      ],
      jsName: type.jsName,
    );
  }
}
