import 'dart:convert';
import 'dart:io';

import 'package:yaml/yaml.dart';
import 'package:path/path.dart' as p;
import 'package:glob/glob.dart';

import 'diagnostic.dart';
import 'model.dart';

part 'config_strict.dart';

const flaxCodegenOverridesFilename = 'flax_overrides.yaml';
const flaxCodegenDefaultJsPackage = '@flax/app';
const flaxCodegenDefaultBindingConfig = 'format: 2\n';
const flaxCodegenJsBuildPlan = 'bindings/js_modules.json';
const flaxCodegenAggregateDart = 'lib/flax_bindings.dart';

String flaxCodegenDartOutput(String scope) => 'lib/src/generated/$scope.g.dart';
String flaxCodegenTsOutput(String scope) => 'js/src/generated/$scope.ts';
String flaxCodegenPublicLibrary(String scope) =>
    'lib/flax_bindings/$scope.dart';

final flaxCodegenDefaultOutputs = List<String>.unmodifiable([
  flaxCodegenAggregateDart,
  flaxCodegenDartOutput('app'),
  flaxCodegenTsOutput('app'),
  flaxCodegenPublicLibrary('app'),
]);

bool flaxCodegenIsBindingConfigPath(String path) =>
    p.basename(path).startsWith('flax_') &&
    {'.yaml', '.yml'}.contains(p.extension(path)) &&
    p.basenameWithoutExtension(path) != 'flax_overrides';

class FlaxCodegenBindingConfig {
  FlaxCodegenBindingConfig(
    this.name,
    this.library,
    this.jsPackage,
    this.dartOutput,
    this.tsOutput,
    this.classes, {
    this.additionalLibraries = const [],
    this.functions = const {},
    this.extensions = const {},
    this.callbackSnapshots = const {},
    this.imports = const [],
    this.types = const [],
    this.typedefs = const [],
    this.topLevel,
    this.publicLibraries = const {},
    this.automaticLibrary = false,
    this.annotations = false,
    this.sources,
    this.automaticClasses = const [],
    this.automaticFunctions = const [],
    this.automaticExtensions = const [],
    this.overrides = const FlaxCodegenAutoOverrides(),
    this.sandbox = const {},
  });
  final String name;
  final String library;
  final String jsPackage;
  final String dartOutput;
  final String tsOutput;
  final Map<String, FlaxCodegenClassSelection> classes;
  final List<String> additionalLibraries;
  final Map<String, FlaxCodegenFunctionSelection> functions;
  final Map<String, FlaxCodegenExtensionSelection> extensions;
  final Map<String, FlaxCodegenCallbackSnapshotSelection> callbackSnapshots;
  final List<String> imports;
  final List<String> types;
  final List<String> typedefs;
  final FlaxCodegenTopLevelSelection? topLevel;
  final Map<String, FlaxCodegenLibrarySelection> publicLibraries;

  /// Infer the public library surface, rather than an explicit declaration list.
  final bool automaticLibrary;

  /// Select FlaxExport declarations belonging to this scope.
  final bool annotations;

  /// Package-relative source globs, or null for the legacy library entry mode.
  final List<String>? sources;

  final List<String> automaticClasses;
  final List<String> automaticFunctions;
  final List<String> automaticExtensions;
  final FlaxCodegenAutoOverrides overrides;
  final Map<String, dynamic> sandbox;

  FlaxCodegenBindingConfig withOverrides(FlaxCodegenAutoOverrides value) =>
      copyWith(overrides: value);

  FlaxCodegenBindingConfig copyWith({
    String? library,
    String? dartOutput,
    List<String>? additionalLibraries,
    FlaxCodegenAutoOverrides? overrides,
  }) => FlaxCodegenBindingConfig(
    name,
    library ?? this.library,
    jsPackage,
    dartOutput ?? this.dartOutput,
    tsOutput,
    classes,
    additionalLibraries: additionalLibraries ?? this.additionalLibraries,
    functions: functions,
    extensions: extensions,
    callbackSnapshots: callbackSnapshots,
    imports: imports,
    types: types,
    typedefs: typedefs,
    topLevel: topLevel,
    publicLibraries: publicLibraries,
    automaticLibrary: automaticLibrary,
    annotations: annotations,
    sources: sources,
    automaticClasses: automaticClasses,
    automaticFunctions: automaticFunctions,
    automaticExtensions: automaticExtensions,
    overrides: overrides ?? this.overrides,
    sandbox: sandbox,
  );

  bool get hasAutomaticSelection =>
      automaticLibrary ||
      automaticClasses.isNotEmpty ||
      automaticFunctions.isNotEmpty ||
      automaticExtensions.isNotEmpty;

  factory FlaxCodegenBindingConfig.read(
    String filename, {
    String jsPackageRoot = flaxCodegenDefaultJsPackage,
  }) => FlaxCodegenBindingConfig.readStrict(
    filename,
    jsPackageRoot: jsPackageRoot,
  );

  factory FlaxCodegenBindingConfig.fromMap(
    Map<String, dynamic> data, {
    String jsPackageRoot = flaxCodegenDefaultJsPackage,
  }) {
    List<String> scope(String key) =>
        data[key] is List ? (data[key] as List).cast<String>() : const [];
    final automaticClasses = scope('classes');
    final automaticFunctions = scope('functions');
    final automaticExtensions = scope('extensions');
    data = {
      ...data,
      for (final key in ['classes', 'functions', 'extensions'])
        if (data[key] is List)
          key: {
            for (final name in (data[key] as List).cast<String>())
              name: <String, dynamic>{
                if (key == 'functions') 'parameters': <String>[],
              },
          },
    };
    final classes = data['classes'] as Map<String, dynamic>? ?? {};
    final legacy = data.containsKey('library');
    final name = legacy
        ? data['name'] as String
        : data['name'] as String? ?? 'app';
    return FlaxCodegenBindingConfig(
      name,
      data['library'] as String? ?? 'dart:core',
      data.containsKey('jsPackage')
          ? data['jsPackage'] as String
          : '$jsPackageRoot/$name',
      legacy
          ? data['dartOutput'] as String
          : data['dartOutput'] as String? ?? flaxCodegenDartOutput(name),
      legacy
          ? data['tsOutput'] as String
          : data['tsOutput'] as String? ?? flaxCodegenTsOutput(name),
      classes.map((name, value) {
        final selection = value as Map<String, dynamic>;
        final constructors =
            selection['constructors'] as Map<String, dynamic>? ?? {};
        return MapEntry(
          name,
          FlaxCodegenClassSelection(
            constructors.map(
              (name, params) =>
                  MapEntry(name, (params as List<dynamic>).cast<String>()),
            ),
            widgetInterfaces:
                (selection['widgetInterfaces'] as List<dynamic>? ?? [])
                    .cast<String>(),
            asyncIterableFactory: selection['asyncIterableFactory'] as String?,
            callbackSignatures:
                (selection['callbackSignatures'] as Map<String, dynamic>? ?? {})
                    .map(
                      (name, parameters) => MapEntry(
                        name,
                        (parameters as List<dynamic>).cast<String>(),
                      ),
                    ),
            callbackOptionalParameters:
                (selection['callbackOptionalParameters']
                            as Map<String, dynamic>? ??
                        {})
                    .map(
                      (name, parameters) => MapEntry(
                        name,
                        (parameters as List<dynamic>).cast<int>(),
                      ),
                    ),
            callbackErrorParameters:
                (selection['callbackErrorParameters']
                            as Map<String, dynamic>? ??
                        {})
                    .map(
                      (name, parameters) => MapEntry(
                        name,
                        (parameters as List<dynamic>).cast<int>(),
                      ),
                    ),
            callbackScopedParameters:
                (selection['callbackScopedParameters']
                            as Map<String, dynamic>? ??
                        {})
                    .map(
                      (name, parameters) => MapEntry(
                        name,
                        (parameters as List<dynamic>).cast<int>(),
                      ),
                    ),
            data: FlaxCodegenDataSelection.fromMap(
              selection['data'] as Map<String, dynamic>? ?? {},
            ),
            kind: selection['kind'] as String?,
            proxy: selection['proxy'] as String?,
            proxyVariants: _proxyVariantsFromMap(
              selection['proxyVariants'] as Map<String, dynamic>? ?? const {},
            ),
            staticGetters: (selection['staticGetters'] as List<dynamic>? ?? [])
                .cast<String>(),
            staticSetters: (selection['staticSetters'] as List<dynamic>? ?? [])
                .cast<String>(),
            errorGetters: (selection['errorGetters'] as List<dynamic>? ?? [])
                .cast<String>(),
            setters: (selection['setters'] as List<dynamic>? ?? [])
                .cast<String>(),
            disposeMethod: selection['disposeMethod'] as String?,
            listenerPairs:
                (selection['listenerPairs'] as Map<String, dynamic>? ?? {})
                    .cast<String, String>(),
            pageAdapter: selection['pageAdapter'] == null
                ? null
                : FlaxCodegenPageAdapterModel(
                    selection['pageAdapter']['library'] as String,
                    selection['pageAdapter']['function'] as String,
                  ),
            typeArguments: (selection['typeArguments'] as List<dynamic>? ?? [])
                .cast<String>(),
            methodTypeArguments:
                (selection['methodTypeArguments'] as Map<String, dynamic>? ??
                        {})
                    .map(
                      (k, v) =>
                          MapEntry(k, (v as List<dynamic>).cast<String>()),
                    ),
            startsRoute: (selection['startsRoute'] as List<dynamic>? ?? [])
                .cast<String>(),
            operators: (selection['operators'] as Map<String, dynamic>? ?? {})
                .map(
                  (name, params) =>
                      MapEntry(name, (params as List<dynamic>).cast<String>()),
                ),
            instanceMethods:
                (selection['instanceMethods'] as Map<String, dynamic>? ?? {})
                    .map(
                      (k, v) =>
                          MapEntry(k, (v as List<dynamic>).cast<String>()),
                    ),
            getters: (selection['getters'] as List<dynamic>? ?? [])
                .cast<String>(),
            methods: (selection['methods'] as Map<String, dynamic>? ?? {}).map(
              (name, params) =>
                  MapEntry(name, (params as List<dynamic>).cast<String>()),
            ),
            jsName: selection['jsName'] as String?,
          ),
        );
      }),
      extensions: (data['extensions'] as Map<String, dynamic>? ?? {}).map(
        (name, value) => MapEntry(
          name,
          FlaxCodegenExtensionSelection.fromMap(value as Map<String, dynamic>),
        ),
      ),
      automaticClasses: automaticClasses,
      automaticLibrary: data['automatic'] as bool? ?? false,
      annotations: data['annotations'] as bool? ?? !data.containsKey('library'),
      sources: data.containsKey('library')
          ? null
          : (data['sources'] as List<dynamic>? ?? const ['lib/**.dart'])
                .cast<String>(),
      automaticFunctions: automaticFunctions,
      automaticExtensions: automaticExtensions,
      sandbox: (data['sandbox'] as Map<String, dynamic>?) ?? const {},
      overrides: data['overrides'] == null
          ? const FlaxCodegenAutoOverrides()
          : FlaxCodegenAutoOverrides.parseStrict(
              jsonEncode({'format': 2, 'overrides': data['overrides']}),
            ),
      additionalLibraries: (data['additionalLibraries'] as List<dynamic>? ?? [])
          .cast<String>(),
      functions: (data['functions'] as Map<String, dynamic>? ?? {}).map(
        (name, value) => MapEntry(
          name,
          FlaxCodegenFunctionSelection.fromMap(value as Map<String, dynamic>),
        ),
      ),
      callbackSnapshots:
          (data['callbackSnapshots'] as Map<String, dynamic>? ?? {}).map(
            (name, value) => MapEntry(
              name,
              FlaxCodegenCallbackSnapshotSelection.fromMap(
                value as Map<String, dynamic>,
              ),
            ),
          ),
      imports: (data['imports'] as List<dynamic>? ?? []).cast<String>(),
      types: (data['types'] as List<dynamic>? ?? []).cast<String>(),
      typedefs: (data['typedefs'] as List<dynamic>? ?? []).cast<String>(),
      topLevel: data['topLevel'] == null
          ? null
          : FlaxCodegenTopLevelSelection(
              data['topLevel']['jsName'] as String?,
              (data['topLevel']['getters'] as List<dynamic>? ?? const [])
                  .cast<String>(),
              setters:
                  (data['topLevel']['setters'] as List<dynamic>? ?? const [])
                      .cast<String>(),
            ),
      publicLibraries: (data['publicLibraries'] as Map<String, dynamic>? ?? {})
          .map(
            (uri, value) => MapEntry(
              uri,
              FlaxCodegenLibrarySelection(
                jsPackage: value['jsPackage'] as String,
                tsOutput: value['tsOutput'] as String,
              ),
            ),
          ),
    );
  }

  factory FlaxCodegenBindingConfig.parseStrict(
    String contents, {
    String source = 'flax_bindings.yaml',
    String jsPackageRoot = flaxCodegenDefaultJsPackage,
    Map<String, String> scopeJsPackages = const {},
  }) => _parseBindingConfigStrict(
    contents,
    source,
    jsPackageRoot,
    scopeJsPackages,
  );

  factory FlaxCodegenBindingConfig.readStrict(
    String filename, {
    String jsPackageRoot = flaxCodegenDefaultJsPackage,
  }) {
    try {
      return FlaxCodegenBindingConfig.parseStrict(
        File(filename).readAsStringSync(),
        source: filename,
        jsPackageRoot: jsPackageRoot,
      );
    } on FileSystemException {
      throw FlaxCodegenException([
        FlaxCodegenDiagnostic(
          code: FlaxCodegenDiagnosticCode.path,
          source: filename,
          offset: 0,
          line: 1,
          column: 1,
          pointer: '',
          message: 'Cannot read file.',
        ),
      ]);
    }
  }
}

/// Optional exceptions applied on top of automatic `--library` inference.
///
/// This file intentionally carries no package, library, or output routing.
/// Those come from the CLI target and `flax_package.yaml`.
final class FlaxCodegenAutoOverrides {
  const FlaxCodegenAutoOverrides({
    this.classes = const {},
    this.functions = const {},
    this.exclude = const [],
  });

  final Map<String, FlaxCodegenClassOverride> classes;
  final Map<String, FlaxCodegenFunctionOverride> functions;
  final List<String> exclude;

  factory FlaxCodegenAutoOverrides.parseStrict(
    String contents, {
    String source = flaxCodegenOverridesFilename,
  }) => _parseAutoOverridesStrict(contents, source);

  factory FlaxCodegenAutoOverrides.readStrict(String filename) {
    try {
      return FlaxCodegenAutoOverrides.parseStrict(
        File(filename).readAsStringSync(),
        source: filename,
      );
    } on FileSystemException {
      throw FlaxCodegenException([
        FlaxCodegenDiagnostic(
          code: FlaxCodegenDiagnosticCode.path,
          source: filename,
          offset: 0,
          line: 1,
          column: 1,
          pointer: '',
          message: 'Cannot read file.',
        ),
      ]);
    }
  }
}

/// A partial class selection. Only [fields] replace inferred values.
final class FlaxCodegenClassOverride {
  const FlaxCodegenClassOverride(this.selection, this.fields);

  final FlaxCodegenClassSelection selection;
  final Set<String> fields;
}

/// A partial top-level function selection. Only [fields] replace inferred values.
final class FlaxCodegenFunctionOverride {
  const FlaxCodegenFunctionOverride(this.selection, this.fields);

  final FlaxCodegenFunctionSelection selection;
  final Set<String> fields;
}

class FlaxCodegenTopLevelSelection {
  const FlaxCodegenTopLevelSelection(
    String? jsName,
    this.getters, {
    this.setters = const [],
  }) : jsName = jsName ?? '';

  final String jsName;
  final List<String> getters;
  final List<String> setters;
}

class FlaxCodegenLibrarySelection {
  const FlaxCodegenLibrarySelection({
    required this.jsPackage,
    required this.tsOutput,
  });

  final String jsPackage;
  final String tsOutput;
}

class FlaxCodegenFunctionSelection {
  const FlaxCodegenFunctionSelection(
    this.parameters, {
    this.typeArguments = const [],
    this.dataParameters = const [],
    this.dataResult = false,
    this.route,
  });
  final List<String> parameters;
  final List<String> typeArguments;
  final List<String> dataParameters;
  final bool dataResult;
  final FlaxCodegenRouteCallModel? route;

  factory FlaxCodegenFunctionSelection.fromMap(Map<String, dynamic> value) {
    if (value.keys.any(
      (k) => !{'parameters', 'typeArguments', 'data', 'route'}.contains(k),
    )) {
      throw StateError('Unknown function selection field');
    }
    final data = value['data'] as Map<String, dynamic>? ?? {};
    if (data.keys.any((k) => !{'parameters', 'result'}.contains(k))) {
      throw StateError('Unknown function data selection');
    }
    final route = value['route'] as Map<String, dynamic>?;
    if (route != null && route.keys.any((k) => k != 'builders')) {
      throw StateError('Unknown function Route selection');
    }
    return FlaxCodegenFunctionSelection(
      (value['parameters'] as List<dynamic>).cast<String>(),
      typeArguments: (value['typeArguments'] as List<dynamic>? ?? [])
          .cast<String>(),
      dataParameters: (data['parameters'] as List<dynamic>? ?? [])
          .cast<String>(),
      dataResult: data['result'] as bool? ?? false,
      route: route == null
          ? null
          : FlaxCodegenRouteCallModel(
              (route['builders'] as List<dynamic>? ?? []).cast<String>(),
            ),
    );
  }
}

class FlaxCodegenClassSelection {
  const FlaxCodegenClassSelection(
    this.constructors, {
    this.widgetInterfaces = const [],
    this.asyncIterableFactory,
    this.callbackSignatures = const {},
    this.callbackOptionalParameters = const {},
    this.callbackErrorParameters = const {},
    this.callbackScopedParameters = const {},
    this.typeArguments = const [],
    this.methodTypeArguments = const {},
    this.instanceMethods = const {},
    this.startsRoute = const [],
    this.kind,
    this.proxy,
    this.inferredProxy = false,
    this.proxyVariants = const {},
    this.staticGetters = const [],
    this.staticSetters = const [],
    this.errorGetters = const [],
    this.pageAdapter,
    this.setters = const [],
    this.disposeMethod,
    this.listenerPairs = const {},
    this.getters = const [],
    this.methods = const {},
    this.operators = const {},
    this.data = const FlaxCodegenDataSelection(),
    this.jsName,
  });
  final Map<String, List<String>> constructors;
  final List<String> widgetInterfaces;

  /// Adds a lazy JavaScript AsyncIterable factory to a generated Stream type.
  final String? asyncIterableFactory;

  /// Explicit signatures for upstream parameters declared only as Function.
  final Map<String, List<String>> callbackSignatures;
  final Map<String, List<int>> callbackOptionalParameters;
  final Map<String, List<int>> callbackErrorParameters;
  final Map<String, List<int>> callbackScopedParameters;
  final List<String> typeArguments;
  final Map<String, List<String>> methodTypeArguments;
  final Map<String, List<String>> instanceMethods;
  final List<String> startsRoute;

  /// Binding role. Flutter-specific roles preserve Flutter semantics but do
  /// not assign application ownership or automatic disposal.
  final String? kind;
  final String? proxy;
  final bool inferredProxy;
  final Map<String, FlaxCodegenProxyVariantSelection> proxyVariants;
  final List<String> staticGetters;
  final List<String> staticSetters;
  final List<String> errorGetters;
  final FlaxCodegenPageAdapterModel? pageAdapter;
  final List<String> setters;
  final String? disposeMethod;
  final Map<String, String> listenerPairs;
  final List<String> getters;
  final Map<String, List<String>> methods;
  final Map<String, List<String>> operators;
  final FlaxCodegenDataSelection data;
  final String? jsName;
}

final class FlaxCodegenMixinSelection {
  const FlaxCodegenMixinSelection(this.name, {this.library});

  final String name;
  final String? library;
}

final class FlaxCodegenProxyVariantSelection {
  const FlaxCodegenProxyVariantSelection({required this.mixins});

  final List<FlaxCodegenMixinSelection> mixins;
}

bool flaxCodegenIsStateVariantOverlay(FlaxCodegenClassSelection selection) =>
    selection.proxyVariants.isNotEmpty &&
    selection.constructors.isEmpty &&
    selection.widgetInterfaces.isEmpty &&
    selection.asyncIterableFactory == null &&
    selection.callbackSignatures.isEmpty &&
    selection.callbackOptionalParameters.isEmpty &&
    selection.callbackErrorParameters.isEmpty &&
    selection.callbackScopedParameters.isEmpty &&
    selection.typeArguments.isEmpty &&
    selection.methodTypeArguments.isEmpty &&
    selection.instanceMethods.isEmpty &&
    selection.operators.isEmpty &&
    selection.startsRoute.isEmpty &&
    selection.kind == null &&
    selection.proxy == null &&
    selection.staticGetters.isEmpty &&
    selection.staticSetters.isEmpty &&
    selection.errorGetters.isEmpty &&
    selection.pageAdapter == null &&
    selection.setters.isEmpty &&
    selection.disposeMethod == null &&
    selection.listenerPairs.isEmpty &&
    selection.getters.isEmpty &&
    selection.methods.isEmpty &&
    selection.data.constructors.isEmpty &&
    selection.data.getters.isEmpty &&
    selection.data.methods.isEmpty &&
    selection.data.results.isEmpty &&
    selection.jsName == null;

Map<String, FlaxCodegenProxyVariantSelection> _proxyVariantsFromMap(
  Map<String, dynamic> values,
) => values.map((name, value) {
  final map = value as Map<String, dynamic>;
  final mixins = (map['mixins'] as List<dynamic>? ?? const []).map((entry) {
    if (entry is String) return FlaxCodegenMixinSelection(entry);
    final item = entry as Map<String, dynamic>;
    return FlaxCodegenMixinSelection(
      item['name'] as String,
      library: item['library'] as String?,
    );
  }).toList();
  return MapEntry(name, FlaxCodegenProxyVariantSelection(mixins: mixins));
});

/// Selected Object/dynamic positions that copy plain application data.
class FlaxCodegenDataSelection {
  const FlaxCodegenDataSelection({
    this.constructors = const {},
    this.getters = const [],
    this.methods = const {},
    this.results = const [],
  });
  final Map<String, List<String>> constructors;
  final List<String> getters;
  final Map<String, List<String>> methods;
  final List<String> results;

  factory FlaxCodegenDataSelection.fromMap(Map<String, dynamic> value) {
    if (value.keys.any(
      (key) => !{'constructors', 'getters', 'methods', 'results'}.contains(key),
    )) {
      throw StateError('Unknown data selection');
    }
    Map<String, List<String>> parameters(String key) =>
        (value[key] as Map<String, dynamic>? ?? {}).map(
          (name, params) => MapEntry(name, (params as List).cast<String>()),
        );
    return FlaxCodegenDataSelection(
      constructors: parameters('constructors'),
      getters: (value['getters'] as List? ?? []).cast<String>(),
      methods: parameters('methods'),
      results: (value['results'] as List? ?? []).cast<String>(),
    );
  }
}

class FlaxCodegenCallbackSnapshotSelection {
  const FlaxCodegenCallbackSnapshotSelection({
    required this.fields,
    this.extendsName,
  });
  final List<String> fields;
  final String? extendsName;

  factory FlaxCodegenCallbackSnapshotSelection.fromMap(
    Map<String, dynamic> value,
  ) {
    if (value.keys.any((key) => !{'fields', 'extends'}.contains(key))) {
      throw StateError('Unknown callback snapshot selection');
    }
    final fields = (value['fields'] as List? ?? []).cast<String>();
    final extendsName = value['extends'] as String?;
    if (fields.isEmpty && extendsName == null) {
      throw StateError('Callback snapshot fields required');
    }
    if (fields.toSet().length != fields.length) {
      throw StateError('Duplicate callback snapshot field');
    }
    return FlaxCodegenCallbackSnapshotSelection(
      fields: fields,
      extendsName: extendsName,
    );
  }
}

/// Explicit members of a public, named Dart extension.
class FlaxCodegenExtensionSelection {
  const FlaxCodegenExtensionSelection({
    this.getters = const [],
    this.setters = const [],
    this.methods = const {},
    this.staticGetters = const [],
    this.staticSetters = const [],
    this.staticMethods = const {},
    this.operators = const {},
  });
  final List<String> getters;
  final List<String> setters;
  final Map<String, List<String>> methods;
  final List<String> staticGetters;
  final List<String> staticSetters;
  final Map<String, List<String>> staticMethods;
  final Map<String, List<String>> operators;

  factory FlaxCodegenExtensionSelection.fromMap(Map<String, dynamic> data) {
    List<String> names(String key) =>
        (data[key] as List<dynamic>? ?? []).cast<String>();
    Map<String, List<String>> calls(String key) =>
        (data[key] as Map<String, dynamic>? ?? {}).map(
          (k, v) => MapEntry(k, (v as List<dynamic>).cast<String>()),
        );
    return FlaxCodegenExtensionSelection(
      getters: names('getters'),
      setters: names('setters'),
      methods: calls('methods'),
      staticGetters: names('staticGetters'),
      staticSetters: names('staticSetters'),
      staticMethods: calls('staticMethods'),
      operators: calls('operators'),
    );
  }
}

/// Retired selection metadata retained only for migration diagnostics.
class FlaxCodegenPageAdapterModel {
  const FlaxCodegenPageAdapterModel(this.library, this.function);
  final String library;
  final String function;
}
