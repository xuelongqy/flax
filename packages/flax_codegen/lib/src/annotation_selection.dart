part of 'parser.dart';

const _annotationsLibrary = 'package:flax_annotations/flax_annotations.dart';

DartObject? _flaxAnnotation(Element element, String name) {
  DartObject? selected;
  for (final annotation in element.metadata.annotations) {
    final referenced = annotation.element;
    if (referenced == null) {
      _annotationError(
        element,
        'Cannot resolve annotation ${annotation.toSource()}.',
      );
    }
    final value = annotation.computeConstantValue();
    final type = value?.type;
    if (type is InterfaceType &&
        type.element.library.uri.toString() == _annotationsLibrary &&
        type.element.name == name) {
      if (selected != null) {
        _annotationError(
          element,
          'Use only one $name annotation per declaration.',
        );
      }
      selected = value;
      continue;
    }
    if (referenced is ConstructorElement &&
        referenced.library.uri.toString() == _annotationsLibrary &&
        referenced.enclosingElement.name == name) {
      _annotationError(element, 'Invalid constant $name annotation.');
    }
  }
  return selected;
}

bool _flaxIgnored(Element element) =>
    _flaxAnnotation(element, 'FlaxIgnore') != null ||
    element is PropertyAccessorElement &&
        _flaxAnnotation(element.variable, 'FlaxIgnore') != null;

Never _annotationError(Element element, String message) {
  final fragment = element.firstFragment;
  final library = fragment.libraryFragment ?? element.library!.firstFragment;
  final offset = fragment.nameOffset ?? 0;
  final location = library.lineInfo.getLocation(offset);
  throw FlaxCodegenException([
    FlaxCodegenDiagnostic(
      code: FlaxCodegenDiagnosticCode.invalidValue,
      source: library.source.fullName,
      offset: offset,
      line: location.lineNumber,
      column: location.columnNumber,
      pointer: '',
      message: message,
    ),
  ]);
}

bool _skipIgnoredAnnotation(
  FlaxCodegenBindingConfig config,
  Element? element,
  String target,
  List<FlaxCodegenSkip> skips,
) {
  if (!config.annotations || element == null || !_flaxIgnored(element)) {
    return false;
  }
  skips.add(
    FlaxCodegenSkip(
      target: target,
      reason: 'Excluded by FlaxIgnore',
      code: 'annotation_ignored',
    ),
  );
  return true;
}

extension FlaxCodegenAnnotationSelection on FlaxCodegenBindingParser {
  /// Discover declarations from this package's libraries, before merging names.
  Future<void> discoverAnnotationSources(
    List<FlaxCodegenBindingConfig> configs, {
    required String package,
    required Map<String, String> sources,
    FlaxCodegenBindingConfig Function(String)? createScope,
  }) async {
    final scopes = {for (final config in configs) config.name: config};
    final sourceConfigs = configs
        .where((config) => config.sources != null)
        .toList();
    final patterns = {
      for (final config in sourceConfigs)
        config.name: config.sources!.map(Glob.new).toList(),
    };
    final names = {
      for (final config in sourceConfigs) config.name: <String, Element>{},
    };
    final libraries = {
      for (final config in sourceConfigs) config.name: <String, String>{},
    };
    final units = {
      for (final entry in sources.entries)
        entry.key: parseString(
          content: entry.value,
          throwIfDiagnostics: false,
        ).unit,
    };
    bool hasAnnotation(AstNode node) =>
        node is Annotation ||
        node.childEntities.whereType<AstNode>().any(hasAnnotation);

    Set<String> selectedNames(FlaxCodegenBindingConfig config) => {
      ...config.classes.keys,
      ...config.functions.keys,
      ...config.types,
      ...config.typedefs,
      ...config.extensions.keys,
      ...config.callbackSnapshots.keys,
      ...?config.topLevel?.getters,
      for (final name in config.topLevel?.setters ?? const <String>[]) '$name=',
    };
    for (final entry in units.entries) {
      if (entry.value.directives.any((d) => d is PartOfDirective)) continue;
      final uri = Uri(
        scheme: 'package',
        path: '$package/${entry.key.substring('lib/'.length)}',
      );
      final files = {
        entry.key,
        for (final part
            in entry.value.directives
                .whereType<PartDirective>()
                .map((part) => part.uri.stringValue)
                .whereType<String>()
                .map(Uri.tryParse)
                .whereType<Uri>()
                .map(uri.resolveUri))
          if (part.scheme == 'package' &&
              part.pathSegments.firstOrNull == package)
            'lib/${part.pathSegments.skip(1).join('/')}',
      };
      final active = sourceConfigs
          .where(
            (config) => files.any(
              (file) => patterns[config.name]!.any(
                (pattern) => pattern.matches(file),
              ),
            ),
          )
          .toList();
      if (active.isEmpty ||
          !files.any(
                (file) => units[file] != null && hasAnnotation(units[file]!),
              ) &&
              active.every((config) => selectedNames(config).isEmpty)) {
        continue;
      }
      final result = await _libraryByUri(uri.toString());
      if (result is! LibraryElementResult) {
        throw StateError('Cannot resolve annotation source $uri');
      }
      final library = result.element;
      for (final declaration in <Element>[
        ...library.classes,
        ...library.enums,
        ...library.mixins,
        ...library.extensionTypes,
        ...library.extensions,
        ...library.topLevelFunctions,
        ...library.topLevelVariables,
        ...library.getters,
        ...library.setters,
        ...library.typeAliases,
      ].where((element) => element.isPrivate)) {
        if (_flaxAnnotation(declaration, 'FlaxExport') != null) {
          _annotationError(
            declaration,
            'FlaxExport cannot export a private Dart declaration.',
          );
        }
      }
      for (final declaration
          in result.element.exportNamespace.definedNames2.entries) {
        final exported = declaration.value;
        if (exported.library?.uri != uri) continue;
        final element =
            exported is PropertyAccessorElement && exported.isOriginVariable
            ? exported.variable
            : exported;
        _checkAnnotationTargets(element);
        final marker = _flaxAnnotation(element, 'FlaxExport');
        final scope = marker?.getField('scope')?.toStringValue();
        if (scope != null &&
            !scopes.containsKey(scope) &&
            createScope != null) {
          final config = createScope(scope);
          configs.add(config);
          scopes[scope] = config;
          sourceConfigs.add(config);
          patterns[scope] = config.sources!.map(Glob.new).toList();
          names[scope] = <String, Element>{};
          libraries[scope] = <String, String>{};
          active.add(config);
        }
        if (marker != null && (scope == null || !scopes.containsKey(scope))) {
          _annotationError(
            element,
            'Unknown FlaxExport scope: $scope. Add a binding configuration named $scope or specify a configured scope.',
          );
        }
        if (marker != null && !scopes[scope]!.annotations) {
          _annotationError(
            element,
            'FlaxExport scope $scope must enable annotations in YAML.',
          );
        }
        for (final config in active) {
          final explicit = selectedNames(config).contains(declaration.key);
          if (marker != null && scope != config.name && explicit) {
            _annotationError(
              element,
              'YAML scope ${config.name} conflicts with FlaxExport scope $scope.',
            );
          }
          if (scope != config.name && !explicit) continue;
          final previous = names[config.name]![declaration.key];
          if (previous != null && previous != exported) {
            _annotationError(
              element,
              'Conflicting public declaration ${declaration.key} in scope ${config.name}.',
            );
          }
          names[config.name]![declaration.key] = exported;
          libraries[config.name]![declaration.key] = uri.toString();
        }
      }
    }
    for (final (index, seed) in configs.indexed) {
      if (seed.sources == null) continue;
      final inputs = libraries[seed.name]!.values.toSet().toList()..sort();
      // Empty scopes need a resolvable library while emitting no application API.
      configs[index] = seed.copyWith(
        library: inputs.firstOrNull ?? 'dart:core',
        additionalLibraries: inputs.skip(1).toList(),
      );
      _sourceInputs[seed.name] = (names[seed.name]!, libraries[seed.name]!);
    }
  }

  /// Collect every scope before the existing package ownership and inference pass.
  Future<void> selectAnnotations(List<FlaxCodegenBindingConfig> configs) async {
    final scopes = {for (final config in configs) config.name: config};
    for (var index = 0; index < configs.length; index++) {
      final seed = configs[index];
      if (!seed.annotations) continue;
      final (exports, _) = await _publicExports(seed);
      final classes = Map.of(seed.classes);
      final functions = Map.of(seed.functions);
      final automaticClasses = seed.automaticClasses.toSet();
      final automaticFunctions = seed.automaticFunctions.toSet();
      final selected = {
        ...classes.keys,
        ...functions.keys,
        ...seed.types,
        ...seed.typedefs,
        ...seed.extensions.keys,
        ...?seed.topLevel?.getters,
        for (final name in seed.topLevel?.setters ?? const <String>[]) '$name=',
      };
      final targets = <String, Element>{};
      final package = Uri.parse(seed.library).pathSegments.first;
      for (final entry in exports.entries) {
        final exported = entry.value;
        final element =
            exported is PropertyAccessorElement && exported.isOriginVariable
            ? exported.variable
            : exported;
        if (selected.contains(entry.key) && _flaxIgnored(element)) {
          _annotationError(
            element,
            'YAML scope ${seed.name} explicitly selects a FlaxIgnore declaration.',
          );
        }
        // Reexported dependencies are references, not annotation discovery roots.
        if (element.library?.uri.scheme != 'package' ||
            element.library!.uri.pathSegments.first != package) {
          continue;
        }
        _checkAnnotationTargets(element);
        final marker = _flaxAnnotation(element, 'FlaxExport');
        if (marker == null) continue;
        final scope = marker.getField('scope')?.toStringValue();
        if (scope == null || !scopes.containsKey(scope)) {
          _annotationError(element, 'Unknown FlaxExport scope: $scope.');
        }
        if (!scopes[scope]!.annotations) {
          _annotationError(
            element,
            'FlaxExport scope $scope must enable annotations in YAML.',
          );
        }
        if (scope != seed.name) {
          if (selected.contains(entry.key)) {
            _annotationError(
              element,
              'YAML scope ${seed.name} conflicts with FlaxExport scope $scope.',
            );
          }
          continue;
        }
        if (_flaxIgnored(element) || _autoHidden(element)) {
          _annotationError(
            element,
            'FlaxExport cannot export an ignored or internal declaration.',
          );
        }
        targets[entry.key] = element;
        if (element is ClassElement || element is EnumElement) {
          if (!classes.containsKey(entry.key)) {
            classes[entry.key] = const FlaxCodegenClassSelection({});
            automaticClasses.add(entry.key);
          }
        } else if (element is TopLevelFunctionElement) {
          if (!functions.containsKey(entry.key)) {
            functions[entry.key] = const FlaxCodegenFunctionSelection([]);
            automaticFunctions.add(entry.key);
          }
        } else {
          _annotationError(
            element,
            'FlaxExport supports public classes, enums and top-level functions.',
          );
        }
      }
      _annotationTargets[seed.name] = targets;
      configs[index] = FlaxCodegenBindingConfig(
        seed.name,
        seed.library,
        seed.jsPackage,
        seed.dartOutput,
        seed.tsOutput,
        classes,
        annotations: true,
        sources: seed.sources,
        additionalLibraries: seed.additionalLibraries,
        functions: functions,
        extensions: seed.extensions,
        callbackSnapshots: seed.callbackSnapshots,
        imports: seed.imports,
        types: seed.types,
        typedefs: seed.typedefs,
        topLevel: seed.topLevel,
        publicLibraries: seed.publicLibraries,
        automaticClasses: automaticClasses.toList()..sort(),
        automaticFunctions: automaticFunctions.toList()..sort(),
        automaticExtensions: seed.automaticExtensions,
        overrides: seed.overrides,
      );
    }
  }

  /// Check explicit members after shared and scope-local overrides are merged.
  Future<void> validateAnnotationMembers(
    List<FlaxCodegenBindingConfig> configs,
  ) async {
    for (final config in configs.where((config) => config.annotations)) {
      final (exports, _) = await _publicExports(config);
      for (final entry in config.classes.entries) {
        final element = exports[entry.key];
        if (element is! InterfaceElement) continue;
        if (!config.automaticClasses.contains(entry.key)) {
          _checkIgnoredMembers(element, entry.value, config.name);
        }
        final override = config.overrides.classes[entry.key];
        if (override != null) {
          _checkIgnoredMembers(element, override.selection, config.name);
        }
      }
    }
  }

  void _checkAnnotationTargets(Element declaration) {
    final members = declaration is InterfaceElement
        ? <Element>[
            ...declaration.constructors,
            ...declaration.fields,
            ...declaration.getters,
            ...declaration.setters,
            ...declaration.methods,
          ]
        : const <Element>[];
    for (final member in members) {
      if (member is FieldElement &&
          member.isEnumConstant &&
          _flaxIgnored(member)) {
        _annotationError(
          member,
          'FlaxIgnore cannot remove enum values; expose a separate API instead.',
        );
      }
      if (_flaxAnnotation(member, 'FlaxExport') != null) {
        _annotationError(
          member,
          'Put FlaxExport on the class; use YAML to select individual members.',
        );
      }
    }
    for (final callable in [
      declaration,
      ...members,
    ].whereType<ExecutableElement>()) {
      for (final parameter in callable.formalParameters) {
        if (_flaxAnnotation(parameter, 'FlaxExport') != null ||
            _flaxAnnotation(parameter, 'FlaxIgnore') != null) {
          _annotationError(
            parameter,
            'Flax annotations do not select parameters; use YAML parameter selections.',
          );
        }
      }
    }
  }

  void _checkIgnoredMembers(
    InterfaceElement element,
    FlaxCodegenClassSelection selection,
    String scope,
  ) {
    final members = <Element?>[
      for (final name in selection.constructors.keys)
        element.constructors
            .where((c) => (c.name == 'new' ? '' : c.name) == name)
            .firstOrNull,
      for (final name in selection.getters)
        element.thisType.lookUpGetter(name, element.library),
      for (final name in selection.setters)
        element.thisType.lookUpSetter(name, element.library),
      for (final name in selection.staticGetters) element.getGetter(name),
      for (final name in selection.staticSetters) element.getSetter(name),
      for (final name in selection.instanceMethods.keys)
        element.thisType.lookUpMethod(name, element.library),
      for (final name in selection.methods.keys) element.getMethod(name),
      for (final name in selection.operators.keys)
        _classOperator(element.thisType, name),
      if (selection.disposeMethod case final name?)
        element.thisType.lookUpMethod(name, element.library),
      for (final pair in selection.listenerPairs.entries) ...[
        element.thisType.lookUpMethod(pair.key, element.library),
        element.thisType.lookUpMethod(pair.value, element.library),
      ],
    ];
    for (final member in members) {
      if (member != null && _flaxIgnored(member)) {
        _annotationError(
          member,
          'YAML scope $scope explicitly selects a FlaxIgnore member.',
        );
      }
    }
  }

  /// An explicitly annotated root must not silently disappear during inference.
  void validateAnnotationSelection(
    FlaxCodegenBindingConfig seed,
    FlaxCodegenBindingConfig resolved,
    List<FlaxCodegenSkip> skips,
  ) {
    for (final entry
        in (_annotationTargets[seed.name] ?? const <String, Element>{})
            .entries) {
      if (resolved.classes.containsKey(entry.key) ||
          resolved.functions.containsKey(entry.key)) {
        continue;
      }
      final reasons = skips
          .where(
            (s) =>
                s.target == entry.key || s.target.startsWith('${entry.key}.'),
          )
          .map((s) => s.reason)
          .join('; ');
      _annotationError(
        entry.value,
        'Cannot generate FlaxExport ${entry.key}: $reasons',
      );
    }
  }
}
