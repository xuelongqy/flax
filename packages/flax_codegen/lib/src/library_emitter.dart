part of 'emitter.dart';

const _libraryGeneratedHeader =
    '// GENERATED CODE. Selected public API subset; do not edit.\n'
    '// Regenerate with dart run melos run bindings:generate.\n';

const _moduleHelpers =
    'construct, constructProxy, constructObject, '
    'constructDeferredObject, constructStream, constructAsyncIterableStream, '
    'defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, '
    'enumValue, defineContext, defineState, contextHandle, invokeStatic, '
    'invokeInstance, invokeTopLevel';

/// The complete deterministic TypeScript inventory, before any files are written.
List<String> flaxCodegenTypescriptOutputPaths(FlaxCodegenModuleModel module) {
  if (module.publicLibraries.isEmpty) return [module.tsOutput];
  final layout = _LibraryLayout(module);
  return [
    for (final route in module.publicLibraries) route.tsOutput,
    layout.installPath,
    if (layout.internalNames.isNotEmpty) layout.internalPath,
    for (final name in layout.names) layout.path(name),
  ]..sort();
}

/// Maps every generated TypeScript output path to the module specifier that
/// resolves that file. Consumers that compile split output should use this
/// instead of reconstructing the public-library layout themselves.
Map<String, String> flaxCodegenTypescriptOutputSpecifiers(
  FlaxCodegenModuleModel module,
) {
  if (module.publicLibraries.isEmpty) {
    return {module.tsOutput: module.jsPackage};
  }
  final layout = _LibraryLayout(module);
  return {
    for (final route in layout.routes) route.tsOutput: route.jsPackage,
    layout.installPath: layout.installSpecifier,
    if (layout.internalNames.isNotEmpty)
      layout.internalPath: layout.internalSpecifier,
    for (final name in layout.names) layout.path(name): layout.specifier(name),
  };
}

class _LibraryLayout {
  _LibraryLayout(this.module)
    : routes = [...module.publicLibraries]
        ..sort((a, b) => a.jsPackage.compareTo(b.jsPackage));

  final FlaxCodegenModuleModel module;
  final List<FlaxCodegenLibraryModel> routes;

  Set<String> get publicNames => {
    for (final route in routes) ...route.exports,
    ...module.stateVariants.map((variant) => variant.name),
  };

  Set<String> get allNames => {
    ...module.classes.map((type) => type.name),
    ...module.types.map((type) => type.name),
    ...module.functions.map((function) => function.call.name),
    ...module.extensions.map((extension) => extension.name),
    ...module.snapshots.map((snapshot) => snapshot.name),
    ...module.typedefs.map((alias) => alias.name),
    ...?module.topLevel?.getters.map((getter) => getter.name),
    ...?module.topLevel?.setters.map((setter) => setter.name),
  };

  Set<String> get internalNames => allNames.difference(publicNames);

  Set<String> get names => publicNames;

  FlaxCodegenLibraryModel route(String name) => routes.firstWhere(
    (route) => route.exports.contains(name),
    orElse: () => routes.first,
  );

  String filename(String name) => '${module.name}_$name';
  String path(String name) => p.join(
    p.dirname(route(name).tsOutput),
    '_bindings',
    '${filename(name)}.ts',
  );
  String specifier(String name) =>
      '${route(name).jsPackage}/_bindings/${filename(name)}';
  String get installPath => p.join(
    p.dirname(routes.first.tsOutput),
    '_bindings',
    '${module.name}.__module.ts',
  );
  String get installSpecifier =>
      '${routes.first.jsPackage}/_bindings/${module.name}.__module';
  String get internalPath => p.join(
    p.dirname(routes.first.tsOutput),
    '_bindings',
    '${module.name}.__internal.ts',
  );
  String get internalSpecifier =>
      '${routes.first.jsPackage}/_bindings/${module.name}.__internal';
}

extension FlaxCodegenLibraryEmission on FlaxCodegenBindingEmitter {
  /// Split implementation at declaration boundaries. Public facades never import
  /// an aggregate SDK module, and every declaration keeps its original wire ID.
  Map<String, String> typescriptOutputs(FlaxCodegenModuleModel module) {
    if (modules.every((source) => source.publicLibraries.isEmpty)) {
      return {module.tsOutput: typescript(module)};
    }
    final layouts = {
      for (final source in modules)
        if (source.publicLibraries.isNotEmpty) source: _LibraryLayout(source),
    };
    final chunks =
        <FlaxCodegenModuleModel, Map<String, FlaxCodegenModuleModel>>{};
    final internalChunks = <FlaxCodegenModuleModel, FlaxCodegenModuleModel>{};
    final splitModules = <FlaxCodegenModuleModel>[];

    FlaxCodegenModuleModel chunkForNames(
      FlaxCodegenModuleModel source,
      Iterable<String> names, {
      required String jsPackage,
      required String tsOutput,
    }) {
      final selected = names.toSet();
      final snapshots = source.snapshots
          .where((snapshot) => selected.contains(snapshot.name))
          .toList();
      final snapshotMap = {
        for (final value in source.snapshots) value.name: value,
      };
      final getters =
          source.topLevel?.getters
              .where((getter) => selected.contains(getter.name))
              .toList() ??
          const <FlaxCodegenTopLevelGetterModel>[];
      final setters =
          source.topLevel?.setters
              .where((setter) => selected.contains(setter.name))
              .toList() ??
          const <FlaxCodegenTopLevelSetterModel>[];
      return FlaxCodegenModuleModel(
        name: source.name,
        moduleId: source.moduleId,
        requiredCapabilities: source.requiredCapabilities,
        library: source.library,
        jsPackage: jsPackage,
        dartOutput: source.dartOutput,
        tsOutput: tsOutput,
        classes: source.classes
            .where((type) => selected.contains(type.name))
            .toList(),
        types: source.types
            .where((type) => selected.contains(type.name))
            .toList(),
        typeLibraries: source.typeLibraries,
        extensions: source.extensions
            .where((extension) => selected.contains(extension.name))
            .toList(),
        functions: source.functions
            .where((function) => selected.contains(function.call.name))
            .toList(),
        snapshots: [
          for (final snapshot in snapshots)
            FlaxCodegenSnapshotModel(
              name: snapshot.name,
              id: snapshot.id,
              fields: snapshot.allFields(snapshotMap),
            ),
        ],
        typedefs: source.typedefs
            .where((alias) => selected.contains(alias.name))
            .toList(),
        topLevel: getters.isEmpty && setters.isEmpty
            ? null
            : FlaxCodegenTopLevelModel('', getters, setters: setters),
        stateVariants: [
          for (final variant in source.stateVariants)
            if (selected.contains(variant.name)) variant,
        ],
      );
    }

    for (final source in modules) {
      final layout = layouts[source];
      if (layout == null) {
        splitModules.add(source);
        continue;
      }
      final named = <String, FlaxCodegenModuleModel>{};
      chunks[source] = named;
      for (final name in layout.names.toList()..sort()) {
        final classes = source.classes
            .where((type) => type.name == name)
            .toList();
        final types = source.types.where((type) => type.name == name).toList();
        final getters =
            source.topLevel?.getters
                .where((getter) => getter.name == name)
                .toList() ??
            [];
        // References are emitted as re-exports, never as a second registration.
        if (classes.isEmpty &&
            types.isNotEmpty &&
            _owners[types.single.id] != source) {
          continue;
        }
        if (getters.isNotEmpty &&
            getters.single.isReference &&
            !(source.topLevel?.setters.any((setter) => setter.name == name) ??
                false) &&
            _owners[getters.single.id]!.topLevel!.jsName.isEmpty) {
          continue;
        }
        final chunk = chunkForNames(
          source,
          [name],
          jsPackage: layout.specifier(name),
          tsOutput: layout.path(name),
        );
        named[name] = chunk;
        splitModules.add(chunk);
      }
      if (layout.internalNames.isNotEmpty) {
        final chunk = chunkForNames(
          source,
          layout.internalNames,
          jsPackage: layout.internalSpecifier,
          tsOutput: layout.internalPath,
        );
        internalChunks[source] = chunk;
        splitModules.add(chunk);
      }
    }
    final split = FlaxCodegenBindingEmitter(
      splitModules,
      requireDeferredTargets: requireDeferredTargets,
    );
    if (module.publicLibraries.isEmpty) {
      return {module.tsOutput: split.typescript(module)};
    }
    final layout = layouts[module]!;
    final files = <String, String>{};
    final install = StringBuffer(_libraryGeneratedHeader)
      ..writeln(_typescriptHostImport);
    _writeTypescriptModuleInstall(install, module);
    install.writeln('export { $_moduleHelpers };');
    files[layout.installPath] = install.toString();

    String localSpecifier(String name) => layout.internalNames.contains(name)
        ? layout.internalSpecifier
        : layout.specifier(name);

    String addSnapshotImports(
      String source,
      FlaxCodegenModuleModel chunk,
      Set<String> localNames,
    ) {
      final imports = <String, Set<String>>{};
      for (final snapshot in chunk.snapshots) {
        for (final field in snapshot.fields) {
          final dependency = field.snapshot;
          if (field.kind != 'snapshot' ||
              dependency == null ||
              localNames.contains(dependency)) {
            continue;
          }
          imports
              .putIfAbsent(localSpecifier(dependency), () => <String>{})
              .add(dependency);
        }
      }
      if (imports.isEmpty) return source;
      final lines = <String>[];
      final entries = imports.entries.toList()
        ..sort((left, right) => left.key.compareTo(right.key));
      for (final entry in entries) {
        final names = entry.value.toList()..sort();
        lines.add(
          'import type { ${names.join(', ')} } from ${jsonEncode(entry.key)};',
        );
      }
      return source.replaceFirst(
        _libraryGeneratedHeader,
        '$_libraryGeneratedHeader${lines.join('\n')}\n',
      );
    }

    final internalChunk = internalChunks[module];
    if (internalChunk != null) {
      var source = split.typescript(
        internalChunk,
        moduleInstallImport: layout.installSpecifier,
      );
      source = addSnapshotImports(source, internalChunk, layout.internalNames);
      source = source.replaceFirst(
        _libraryGeneratedHeader,
        '// GENERATED CODE. Internal binding dependencies; do not import.\n'
        '// Regenerate with dart run melos run bindings:generate.\n',
      );
      files[layout.internalPath] = source;
    }

    String sourceFor(String name) {
      final local = chunks[module]![name];
      if (local != null) return local.jsPackage;
      final id =
          module.types.where((type) => type.name == name).firstOrNull?.id ??
          module.topLevel?.getters
              .where((getter) => getter.name == name)
              .firstOrNull
              ?.id ??
          module.topLevel?.setters
              .where((setter) => setter.name == name)
              .firstOrNull
              ?.id;
      final owner = _owners[id];
      if (owner == null) throw StateError('Missing provider for $name');
      return layouts[owner]?.specifier(name) ?? owner.jsPackage;
    }

    for (final name in layout.names.toList()..sort()) {
      final chunk = chunks[module]![name];
      if (chunk == null) {
        files[layout.path(name)] =
            _libraryGeneratedHeader +
            _libraryReexports(module, name, sourceFor(name));
        continue;
      }
      var source = split.typescript(
        chunk,
        moduleInstallImport: layout.installSpecifier,
      );
      // Snapshot fields are structural references, outside ordinary TypeRefs.
      source = addSnapshotImports(source, chunk, {name});
      files[layout.path(name)] = source;
    }
    for (final route in layout.routes) {
      final out = StringBuffer(_libraryGeneratedHeader);
      final runtimeRegistrations =
          layout.names
              .where(
                (name) =>
                    identical(layout.route(name), route) &&
                    _libraryNeedsRuntimeRegistration(module, name),
              )
              .toList()
            ..sort();
      for (final name in runtimeRegistrations) {
        out.writeln('import ${jsonEncode(sourceFor(name))};');
      }
      final exports = <String>{
        ...route.exports,
        if (identical(route, layout.routes.first))
          ...module.stateVariants.map((variant) => variant.name),
      }.toList()..sort();
      for (final name in exports) {
        out.write(_libraryReexports(module, name, sourceFor(name)));
      }
      if (exports.isEmpty) out.writeln('export {};');
      files[route.tsOutput] = out.toString();
    }
    return files;
  }

  bool _libraryNeedsRuntimeRegistration(
    FlaxCodegenModuleModel module,
    String name,
  ) {
    final namedType = module.types
        .where((type) => type.name == name)
        .firstOrNull;
    final type =
        module.classes.where((type) => type.name == name).firstOrNull ??
        _classes[namedType?.id];
    if (type == null) return false;
    return const {'context', 'state', 'object', 'stream'}.contains(type.kind);
  }

  String _libraryReexports(
    FlaxCodegenModuleModel module,
    String name,
    String from,
  ) {
    final source = jsonEncode(from);
    if (module.stateVariants.any((variant) => variant.name == name)) {
      return 'export { $name } from $source;\n';
    }
    final alias = module.typedefs
        .where((alias) => alias.name == name)
        .firstOrNull;
    if (alias != null) {
      return 'export type { $name, ${name}Input } from $source;\n';
    }
    final getter = module.topLevel?.getters
        .where((getter) => getter.name == name)
        .firstOrNull;
    final setter = module.topLevel?.setters
        .where((setter) => setter.name == name)
        .firstOrNull;
    if (getter != null || setter != null) {
      final names = [
        if (getter != null) getter.exportName,
        if (setter != null) setter.exportName,
      ];
      return 'export { ${names.join(', ')} } from $source;\n';
    }
    final namedType = module.types
        .where((type) => type.name == name)
        .firstOrNull;
    final type =
        module.classes.where((type) => type.name == name).firstOrNull ??
        _classes[namedType?.id];
    if (type != null) {
      final stateVariants = module.stateVariants
          .where((variant) => variant.stateId == type.id)
          .map((variant) => variant.name)
          .toList();
      if (stateVariants.isNotEmpty) {
        return 'export { ${stateVariants.join(', ')} } from $source;\n';
      }
      final hasValue =
          type.proxy != null ||
          type.asyncIterableFactory != null ||
          type.staticGetters.isNotEmpty ||
          type.methods.any((method) => !method.instance) ||
          type.constructors.any(
            (ctor) => ctor.name.isNotEmpty || type.jsName == null,
          );
      return 'export ${hasValue ? '' : 'type '}{ $name } from $source;\n'
          '${type.jsName == null ? '' : 'export { ${type.jsName} } from $source;\n'}';
    }
    final hasValue =
        namedType?.isEnum == true ||
        module.functions.any((function) => function.call.name == name) ||
        module.extensions.any((extension) => extension.name == name);
    return 'export ${hasValue ? '' : 'type '}{ $name } from $source;\n';
  }
}
