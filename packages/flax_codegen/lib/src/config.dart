import 'dart:io';

import 'package:yaml/yaml.dart';

import 'diagnostic.dart';
import 'model.dart';

part 'config_strict.dart';

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
    this.callbackSnapshots = const {},
    this.imports = const [],
    this.types = const [],
  });
  final String name;
  final String library;
  final String jsPackage;
  final String dartOutput;
  final String tsOutput;
  final Map<String, FlaxCodegenClassSelection> classes;
  final List<String> additionalLibraries;
  final Map<String, FlaxCodegenFunctionSelection> functions;
  final Map<String, FlaxCodegenCallbackSnapshotSelection> callbackSnapshots;
  final List<String> imports;
  final List<String> types;

  factory FlaxCodegenBindingConfig.read(String filename) =>
      FlaxCodegenBindingConfig.readStrict(filename);

  factory FlaxCodegenBindingConfig.fromMap(Map<String, dynamic> data) {
    final classes = data['classes'] as Map<String, dynamic>? ?? {};
    return FlaxCodegenBindingConfig(
      data['name'] as String,
      data['library'] as String,
      data['jsPackage'] as String,
      data['dartOutput'] as String,
      data['tsOutput'] as String,
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
            independentWidgetCallbacks:
                (selection['independentWidgetCallbacks']
                            as Map<String, dynamic>? ??
                        {})
                    .map(
                      (name, params) => MapEntry(
                        name,
                        (params as List<dynamic>).cast<String>(),
                      ),
                    ),
            genericScalar: selection['genericScalar'] as bool? ?? false,
            eraseGenerics: selection['eraseGenerics'] as bool? ?? false,
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
            proxyOverrides:
                (selection['proxyOverrides'] as List<dynamic>? ?? [])
                    .cast<String>(),
            proxySuper: (selection['proxySuper'] as List<dynamic>? ?? [])
                .cast<String>(),
            staticGetters: (selection['staticGetters'] as List<dynamic>? ?? [])
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
            deferredFactories:
                (selection['deferredFactories'] as List<dynamic>? ?? [])
                    .cast<String>(),
            startsRoute: (selection['startsRoute'] as List<dynamic>? ?? [])
                .cast<String>(),
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
    );
  }

  factory FlaxCodegenBindingConfig.parseStrict(
    String contents, {
    String source = 'config.yaml',
  }) => _parseBindingConfigStrict(contents, source);

  factory FlaxCodegenBindingConfig.readStrict(String filename) {
    try {
      return FlaxCodegenBindingConfig.parseStrict(
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
    if (route != null &&
        route.keys.any(
          (k) => !{'context', 'rootNavigator', 'builders'}.contains(k),
        )) {
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
              route['context'] as String,
              route['rootNavigator'] as String,
              (route['builders'] as List<dynamic>).cast<String>(),
            ),
    );
  }
}

class FlaxCodegenClassSelection {
  const FlaxCodegenClassSelection(
    this.constructors, {
    this.widgetInterfaces = const [],
    this.independentWidgetCallbacks = const {},
    this.genericScalar = false,
    this.eraseGenerics = false,
    this.asyncIterableFactory,
    this.callbackSignatures = const {},
    this.callbackOptionalParameters = const {},
    this.callbackErrorParameters = const {},
    this.callbackScopedParameters = const {},
    this.typeArguments = const [],
    this.methodTypeArguments = const {},
    this.deferredFactories = const [],
    this.instanceMethods = const {},
    this.startsRoute = const [],
    this.kind,
    this.proxy,
    this.proxyOverrides = const [],
    this.proxySuper = const [],
    this.staticGetters = const [],
    this.errorGetters = const [],
    this.pageAdapter,
    this.setters = const [],
    this.disposeMethod,
    this.listenerPairs = const {},
    this.getters = const [],
    this.methods = const {},
    this.data = const FlaxCodegenDataSelection(),
    this.jsName,
  });
  final Map<String, List<String>> constructors;
  final List<String> widgetInterfaces;
  final Map<String, List<String>> independentWidgetCallbacks;

  /// Specialize a single unconstrained scalar type parameter as String or int.
  final bool genericScalar;

  /// Instantiate selected generic members with their analyzer upper bounds.
  final bool eraseGenerics;

  /// Adds a lazy JavaScript AsyncIterable factory to a generated Stream type.
  final String? asyncIterableFactory;

  /// Explicit signatures for upstream parameters declared only as Function.
  final Map<String, List<String>> callbackSignatures;
  final Map<String, List<int>> callbackOptionalParameters;
  final Map<String, List<int>> callbackErrorParameters;
  final Map<String, List<int>> callbackScopedParameters;
  final List<String> typeArguments;
  final Map<String, List<String>> methodTypeArguments;
  final List<String> deferredFactories;
  final Map<String, List<String>> instanceMethods;
  final List<String> startsRoute;

  /// Explicit lifecycle categories for objects and Flutter hosts.
  final String? kind;
  final String? proxy;
  final List<String> proxyOverrides;
  final List<String> proxySuper;
  final List<String> staticGetters;
  final List<String> errorGetters;
  final FlaxCodegenPageAdapterModel? pageAdapter;
  final List<String> setters;
  final String? disposeMethod;
  final Map<String, String> listenerPairs;
  final List<String> getters;
  final Map<String, List<String>> methods;
  final FlaxCodegenDataSelection data;
  final String? jsName;
}

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
