part of 'config.dart';

const _configFields = {
  'format',
  'name',
  'library',
  'jsPackage',
  'dartOutput',
  'tsOutput',
  'additionalLibraries',
  'imports',
  'types',
  'classes',
  'functions',
  'callbackSnapshots',
};

const _classFields = {
  'constructors',
  'widgetInterfaces',
  'independentWidgetCallbacks',
  'genericScalar',
  'eraseGenerics',
  'asyncIterableFactory',
  'callbackSignatures',
  'callbackOptionalParameters',
  'callbackErrorParameters',
  'callbackScopedParameters',
  'data',
  'kind',
  'proxy',
  'proxyOverrides',
  'proxySuper',
  'staticGetters',
  'errorGetters',
  'setters',
  'disposeMethod',
  'listenerPairs',
  'pageAdapter',
  'typeArguments',
  'methodTypeArguments',
  'deferredFactories',
  'startsRoute',
  'instanceMethods',
  'getters',
  'methods',
  'jsName',
};

const _functionFields = {'parameters', 'typeArguments', 'data', 'route'};
const _functionDataFields = {'parameters', 'result'};
const _routeFields = {'context', 'rootNavigator', 'builders'};
const _dataFields = {'constructors', 'getters', 'methods', 'results'};
const _snapshotFields = {'fields', 'extends'};
const _pageAdapterFields = {'library', 'function'};
const _proxyKinds = {'extends', 'implements', 'host'};

final _classKinds = {
  for (final value in FlaxCodegenClassCategory.values) value.name,
};

FlaxCodegenBindingConfig _parseBindingConfigStrict(
  String contents,
  String source,
) {
  final diagnostics = _StrictDiagnostics(source);
  final rootNode = _loadYamlNode(contents, diagnostics);
  if (rootNode is! YamlMap) {
    diagnostics.add(
      code: FlaxCodegenDiagnosticCode.typeMismatch,
      pointer: '',
      message: 'Expected a mapping.',
      node: rootNode,
    );
    diagnostics.throwIfAny();
    throw StateError('Unreachable root type mismatch');
  }
  final root = _StrictMap(diagnostics, rootNode, '', _configFields);
  final format = root.requiredInt('format');
  if (format != null && format != 1) {
    diagnostics.add(
      code: FlaxCodegenDiagnosticCode.invalidValue,
      pointer: root.child('format'),
      message: 'Expected 1.',
      node: root.node('format'),
    );
  }
  final name = root.requiredString('name');
  final library = root.requiredString('library');
  final jsPackage = root.requiredString('jsPackage');
  final dartOutput = root.requiredString('dartOutput');
  final tsOutput = root.requiredString('tsOutput');
  final additionalLibraries = root.stringList('additionalLibraries');
  final imports = root.stringList('imports');
  final types = root.stringList('types');
  final classes = _readClasses(root);
  final functions = _readFunctions(root);
  final snapshots = _readSnapshots(root);
  diagnostics.throwIfAny();
  return FlaxCodegenBindingConfig(
    name!,
    library!,
    jsPackage!,
    dartOutput!,
    tsOutput!,
    classes,
    additionalLibraries: additionalLibraries,
    imports: imports,
    types: types,
    functions: functions,
    callbackSnapshots: snapshots,
  );
}

YamlNode _loadYamlNode(String contents, _StrictDiagnostics diagnostics) {
  try {
    return loadYamlNode(contents, sourceUrl: Uri(path: diagnostics.source));
  } on YamlException catch (error) {
    final duplicate = error.message == 'Duplicate mapping key.';
    final start = error.span?.start;
    diagnostics.add(
      code: duplicate
          ? FlaxCodegenDiagnosticCode.duplicateKey
          : FlaxCodegenDiagnosticCode.yamlSyntax,
      pointer: '',
      message: error.message,
      offset: start?.offset ?? 0,
      line: (start?.line ?? 0) + 1,
      column: (start?.column ?? 0) + 1,
    );
    diagnostics.throwIfAny();
    throw StateError('Unreachable YAML exception');
  }
}

Map<String, FlaxCodegenClassSelection> _readClasses(_StrictMap root) {
  final node = root.dynamicMap('classes');
  if (node == null) return const {};
  final classes = <String, FlaxCodegenClassSelection>{};
  _forEachNamed(root.diagnostics, node, root.child('classes'), (
    name,
    value,
    pointer,
  ) {
    classes[name] = _readClass(
      _StrictMap(root.diagnostics, value, pointer, _classFields),
    );
  });
  return classes;
}

FlaxCodegenClassSelection _readClass(_StrictMap selection) {
  final kind = selection.optionalString('kind');
  if (kind != null && !_classKinds.contains(kind)) {
    selection.diagnostics.add(
      code: FlaxCodegenDiagnosticCode.invalidValue,
      pointer: selection.child('kind'),
      message: 'Unknown class kind.',
      node: selection.node('kind'),
    );
  }
  final proxy = selection.optionalString('proxy');
  if (proxy != null && !_proxyKinds.contains(proxy)) {
    selection.diagnostics.add(
      code: FlaxCodegenDiagnosticCode.invalidValue,
      pointer: selection.child('proxy'),
      message: 'Unknown proxy kind.',
      node: selection.node('proxy'),
    );
  }
  final adapter = selection.schemaMap('pageAdapter', _pageAdapterFields);
  return FlaxCodegenClassSelection(
    selection.stringListMap('constructors', allowEmptyKeys: true),
    widgetInterfaces: selection.stringList('widgetInterfaces'),
    independentWidgetCallbacks: selection.stringListMap(
      'independentWidgetCallbacks',
    ),
    genericScalar: selection.boolean('genericScalar'),
    eraseGenerics: selection.boolean('eraseGenerics'),
    asyncIterableFactory: selection.optionalString('asyncIterableFactory'),
    callbackSignatures: selection.stringListMap('callbackSignatures'),
    callbackOptionalParameters: selection.intListMap(
      'callbackOptionalParameters',
    ),
    callbackErrorParameters: selection.intListMap('callbackErrorParameters'),
    callbackScopedParameters: selection.intListMap('callbackScopedParameters'),
    data: _readData(selection),
    kind: kind,
    proxy: proxy,
    proxyOverrides: selection.stringList('proxyOverrides'),
    proxySuper: selection.stringList('proxySuper'),
    staticGetters: selection.stringList('staticGetters'),
    errorGetters: selection.stringList('errorGetters'),
    setters: selection.stringList('setters'),
    disposeMethod: selection.optionalString('disposeMethod'),
    listenerPairs: selection.stringMap('listenerPairs'),
    pageAdapter: adapter == null ? null : _pageAdapter(adapter),
    typeArguments: selection.stringList('typeArguments', unique: false),
    methodTypeArguments: selection.stringListMap(
      'methodTypeArguments',
      uniqueValues: false,
    ),
    deferredFactories: selection.stringList('deferredFactories'),
    startsRoute: selection.stringList('startsRoute'),
    instanceMethods: selection.stringListMap('instanceMethods'),
    getters: selection.stringList('getters'),
    methods: selection.stringListMap('methods'),
    jsName: selection.optionalString('jsName'),
  );
}

FlaxCodegenPageAdapterModel? _pageAdapter(_StrictMap adapter) {
  final library = adapter.requiredString('library');
  final function = adapter.requiredString('function');
  if (library == null || function == null) return null;
  return FlaxCodegenPageAdapterModel(library, function);
}

FlaxCodegenDataSelection _readData(_StrictMap selection) {
  final data = selection.schemaMap('data', _dataFields);
  if (data == null) return const FlaxCodegenDataSelection();
  return FlaxCodegenDataSelection(
    constructors: data.stringListMap('constructors', allowEmptyKeys: true),
    getters: data.stringList('getters'),
    methods: data.stringListMap('methods'),
    results: data.stringList('results'),
  );
}

Map<String, FlaxCodegenFunctionSelection> _readFunctions(_StrictMap root) {
  final node = root.dynamicMap('functions');
  if (node == null) return const {};
  final functions = <String, FlaxCodegenFunctionSelection>{};
  _forEachNamed(root.diagnostics, node, root.child('functions'), (
    name,
    value,
    pointer,
  ) {
    final selection = _StrictMap(
      root.diagnostics,
      value,
      pointer,
      _functionFields,
    );
    final parameters = selection.requiredStringList('parameters');
    final data = selection.schemaMap('data', _functionDataFields);
    final route = selection.schemaMap('route', _routeFields);
    functions[name] = FlaxCodegenFunctionSelection(
      parameters ?? const [],
      typeArguments: selection.stringList('typeArguments', unique: false),
      dataParameters: data?.stringList('parameters') ?? const [],
      dataResult: data?.boolean('result') ?? false,
      route: route == null ? null : _route(route),
    );
  });
  return functions;
}

FlaxCodegenRouteCallModel? _route(_StrictMap route) {
  final context = route.requiredString('context');
  final rootNavigator = route.requiredString('rootNavigator');
  final builders = route.requiredStringList('builders');
  if (context == null || rootNavigator == null || builders == null) {
    return null;
  }
  return FlaxCodegenRouteCallModel(context, rootNavigator, builders);
}

Map<String, FlaxCodegenCallbackSnapshotSelection> _readSnapshots(
  _StrictMap root,
) {
  final node = root.dynamicMap('callbackSnapshots');
  if (node == null) return const {};
  final snapshots = <String, FlaxCodegenCallbackSnapshotSelection>{};
  _forEachNamed(root.diagnostics, node, root.child('callbackSnapshots'), (
    name,
    value,
    pointer,
  ) {
    final selection = _StrictMap(
      root.diagnostics,
      value,
      pointer,
      _snapshotFields,
    );
    final fields = selection.tryStringList('fields');
    final extendsName = selection.optionalString('extends');
    if (fields != null && fields.isEmpty && extendsName == null) {
      root.diagnostics.add(
        code: FlaxCodegenDiagnosticCode.incompatibleFields,
        pointer: pointer,
        message: 'Callback snapshot fields required.',
        node: value,
      );
    }
    snapshots[name] = FlaxCodegenCallbackSnapshotSelection(
      fields: fields ?? const [],
      extendsName: extendsName,
    );
  });
  return snapshots;
}

void _forEachNamed(
  _StrictDiagnostics diagnostics,
  YamlMap map,
  String parent,
  void Function(String name, YamlMap value, String pointer) read,
) {
  for (final entry in map.nodes.entries) {
    final name = _mappingKey(diagnostics, entry.key, parent);
    final value = entry.value;
    if (value is! YamlMap) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.typeMismatch,
        pointer: name == null ? parent : _pointer(parent, name),
        message: 'Expected a mapping.',
        node: value,
      );
      continue;
    }
    if (name == null) continue;
    read(name, value, _pointer(parent, name));
  }
}

String? _mappingKey(
  _StrictDiagnostics diagnostics,
  Object? key,
  String parent, {
  bool allowEmpty = false,
}) {
  final keyNode = key as YamlNode;
  final name = keyNode.value;
  if (name is! String) {
    diagnostics.add(
      code: FlaxCodegenDiagnosticCode.typeMismatch,
      pointer: parent,
      message: 'Mapping keys must be strings.',
      node: keyNode,
    );
    return null;
  }
  if (!allowEmpty && name.isEmpty) {
    diagnostics.add(
      code: FlaxCodegenDiagnosticCode.invalidValue,
      pointer: _pointer(parent, name),
      message: 'Expected a nonempty string.',
      node: keyNode,
    );
    return null;
  }
  return name;
}

final class _StrictDiagnostics {
  _StrictDiagnostics(this.source);

  final String source;
  final List<FlaxCodegenDiagnostic> items = [];

  void throwIfAny() {
    if (items.isEmpty) return;
    throw FlaxCodegenException(items);
  }

  void add({
    required FlaxCodegenDiagnosticCode code,
    required String pointer,
    required String message,
    YamlNode? node,
    int? offset,
    int? line,
    int? column,
  }) {
    final start = node?.span.start;
    items.add(
      FlaxCodegenDiagnostic(
        code: code,
        source: source,
        offset: offset ?? start?.offset ?? 0,
        line: line ?? (start == null ? 1 : start.line + 1),
        column: column ?? (start == null ? 1 : start.column + 1),
        pointer: pointer,
        message: message,
      ),
    );
  }
}

final class _StrictMap {
  _StrictMap(this.diagnostics, this.map, this.pointer, Set<String> known) {
    for (final entry in map.nodes.entries) {
      final keyNode = entry.key as YamlNode;
      final key = keyNode.value;
      if (key is! String) {
        diagnostics.add(
          code: FlaxCodegenDiagnosticCode.typeMismatch,
          pointer: pointer,
          message: 'Mapping keys must be strings.',
          node: keyNode,
        );
        continue;
      }
      if (!known.contains(key)) {
        diagnostics.add(
          code: FlaxCodegenDiagnosticCode.unknownField,
          pointer: child(key),
          message: 'Unknown field.',
          node: keyNode,
        );
      }
    }
  }

  final _StrictDiagnostics diagnostics;
  final YamlMap map;
  final String pointer;

  String child(String key) => _pointer(pointer, key);

  YamlNode? node(String key) => map.nodes[key];

  int? requiredInt(String key) {
    final value = node(key);
    if (value == null) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.missingField,
        pointer: child(key),
        message: 'Missing field.',
        node: map,
      );
      return null;
    }
    if (value.value is! int) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.typeMismatch,
        pointer: child(key),
        message: 'Expected an integer.',
        node: value,
      );
      return null;
    }
    return value.value as int;
  }

  String? requiredString(String key) {
    final value = node(key);
    if (value == null) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.missingField,
        pointer: child(key),
        message: 'Missing field.',
        node: map,
      );
      return null;
    }
    return _asString(value, child(key));
  }

  String? optionalString(String key) {
    final value = node(key);
    if (value == null) return null;
    return _asString(value, child(key));
  }

  bool boolean(String key) {
    final value = node(key);
    if (value == null) return false;
    if (value.value is! bool) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.typeMismatch,
        pointer: child(key),
        message: 'Expected a boolean.',
        node: value,
      );
      return false;
    }
    return value.value as bool;
  }

  List<String> stringList(String key, {bool unique = true}) =>
      tryStringList(key, unique: unique) ?? const [];

  List<String>? tryStringList(String key, {bool unique = true}) {
    final value = node(key);
    if (value == null) return const [];
    return _readStringList(value, child(key), unique: unique);
  }

  List<String>? requiredStringList(String key, {bool unique = true}) {
    final value = node(key);
    if (value == null) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.missingField,
        pointer: child(key),
        message: 'Missing field.',
        node: map,
      );
      return null;
    }
    return _readStringList(value, child(key), unique: unique);
  }

  Map<String, List<String>> stringListMap(
    String key, {
    bool allowEmptyKeys = false,
    bool uniqueValues = true,
  }) {
    final value = dynamicMap(key);
    if (value == null) return const {};
    final result = <String, List<String>>{};
    for (final entry in value.nodes.entries) {
      final name = _mappingKey(
        diagnostics,
        entry.key,
        child(key),
        allowEmpty: allowEmptyKeys,
      );
      if (name == null) continue;
      final pointer = _pointer(child(key), name);
      final items = _readStringList(entry.value, pointer, unique: uniqueValues);
      if (items != null) result[name] = items;
    }
    return result;
  }

  Map<String, List<int>> intListMap(String key) {
    final value = dynamicMap(key);
    if (value == null) return const {};
    final result = <String, List<int>>{};
    for (final entry in value.nodes.entries) {
      final name = _mappingKey(diagnostics, entry.key, child(key));
      if (name == null) continue;
      final pointer = _pointer(child(key), name);
      final items = _readIntList(entry.value, pointer);
      if (items != null) result[name] = items;
    }
    return result;
  }

  Map<String, String> stringMap(String key) {
    final value = dynamicMap(key);
    if (value == null) return const {};
    final result = <String, String>{};
    for (final entry in value.nodes.entries) {
      final name = _mappingKey(diagnostics, entry.key, child(key));
      if (name == null) continue;
      final text = _asString(entry.value, _pointer(child(key), name));
      if (text != null) result[name] = text;
    }
    return result;
  }

  _StrictMap? schemaMap(String key, Set<String> known) {
    final value = node(key);
    if (value == null) return null;
    if (value is! YamlMap) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.typeMismatch,
        pointer: child(key),
        message: 'Expected a mapping.',
        node: value,
      );
      return null;
    }
    return _StrictMap(diagnostics, value, child(key), known);
  }

  YamlMap? dynamicMap(String key) {
    final value = node(key);
    if (value == null) return null;
    if (value is! YamlMap) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.typeMismatch,
        pointer: child(key),
        message: 'Expected a mapping.',
        node: value,
      );
      return null;
    }
    return value;
  }

  List<String>? _readStringList(
    YamlNode value,
    String pointer, {
    bool unique = true,
  }) {
    if (value is! YamlList) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.typeMismatch,
        pointer: pointer,
        message: 'Expected a list of strings.',
        node: value,
      );
      return null;
    }
    final values = <String>[];
    final seen = <String>{};
    for (var index = 0; index < value.nodes.length; index++) {
      final item = value.nodes[index];
      final itemPointer = '$pointer/$index';
      final text = _asString(item, itemPointer);
      if (text == null) continue;
      if (unique && !seen.add(text)) {
        diagnostics.add(
          code: FlaxCodegenDiagnosticCode.duplicateValue,
          pointer: itemPointer,
          message: 'Duplicate value.',
          node: item,
        );
        continue;
      }
      values.add(text);
    }
    return values;
  }

  List<int>? _readIntList(YamlNode value, String pointer) {
    if (value is! YamlList) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.typeMismatch,
        pointer: pointer,
        message: 'Expected a list of integers.',
        node: value,
      );
      return null;
    }
    final values = <int>[];
    final seen = <int>{};
    for (var index = 0; index < value.nodes.length; index++) {
      final item = value.nodes[index];
      final itemPointer = '$pointer/$index';
      if (item.value is! int) {
        diagnostics.add(
          code: FlaxCodegenDiagnosticCode.typeMismatch,
          pointer: itemPointer,
          message: 'Expected an integer.',
          node: item,
        );
        continue;
      }
      final number = item.value as int;
      if (!seen.add(number)) {
        diagnostics.add(
          code: FlaxCodegenDiagnosticCode.duplicateValue,
          pointer: itemPointer,
          message: 'Duplicate value.',
          node: item,
        );
        continue;
      }
      values.add(number);
    }
    return values;
  }

  String? _asString(YamlNode value, String pointer) {
    if (value.value is! String) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.typeMismatch,
        pointer: pointer,
        message: 'Expected a string.',
        node: value,
      );
      return null;
    }
    final text = value.value as String;
    if (text.isEmpty) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.invalidValue,
        pointer: pointer,
        message: 'Expected a nonempty string.',
        node: value,
      );
      return null;
    }
    return text;
  }
}

String _pointer(String parent, String token) =>
    '$parent/${FlaxCodegenDiagnostic.jsonPointerToken(token)}';
