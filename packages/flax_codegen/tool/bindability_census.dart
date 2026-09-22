import 'dart:convert';
import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/element/element.dart';
import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;

/// Experimental bindability census using [FlaxCodegenBindingParser.proposeSelection].
///
/// `okAnyMode` is a non-empty selection, not complete member coverage. For
/// declaration-kind inventory and corrected partial/complete counts, use
/// `capability_verify.dart`.
///
/// Usage (from repo root or this package):
///   dart run packages/flax_codegen/tool/bindability_census.dart
Future<void> main() async {
  final root = _workspaceRoot();
  final outDir = Directory(p.join(root, '.local/flax-binding-census'))
    ..createSync(recursive: true);
  final flutter = FlaxCodegenBindingConfig.read(
    p.join(root, 'packages/flax/bindings/config.yaml'),
  );
  final material = FlaxCodegenBindingConfig.read(
    p.join(root, 'packages/flax_material_ui/bindings/config.yaml'),
  );
  final collection = AnalysisContextCollection(includedPaths: [root]);
  try {
    final parser = FlaxCodegenBindingParser(root);
    try {
      stdout.writeln('Parsing official Flutter pool…');
      await parser.prepare([flutter, material]);
      await parser.parse(flutter);
      final flutterPool = parser.checkpoint();
      stdout.writeln('Parsing official Material pool…');
      await parser.parse(material);
      final bothPool = parser.checkpoint();

      final reports = <String, Object?>{
        'generatedAt': DateTime.now().toUtc().toIso8601String(),
        'widgetsAlone': await _libraryReport(
          collection: collection,
          parser: parser,
          pool: flutterPool,
          poolConfig: flutter,
          library: 'package:flutter/widgets.dart',
          additionalLibraries: const [],
          selected: flutter,
        ),
        'widgetsWithOfficialLibraries': await _libraryReport(
          collection: collection,
          parser: parser,
          pool: flutterPool,
          poolConfig: flutter,
          library: flutter.library,
          additionalLibraries: flutter.additionalLibraries,
          selected: flutter,
        ),
        'foundationAlone': await _libraryReport(
          collection: collection,
          parser: parser,
          pool: flutterPool,
          poolConfig: flutter,
          library: 'package:flutter/foundation.dart',
          additionalLibraries: const [],
          selected: flutter,
        ),
        'materialUi': await _libraryReport(
          collection: collection,
          parser: parser,
          pool: bothPool,
          poolConfig: material,
          library: material.library,
          additionalLibraries: material.additionalLibraries,
          selected: material,
        ),
      };

      final file = File(p.join(outDir.path, 'results.json'));
      file.writeAsStringSync(
        const JsonEncoder.withIndent('  ').convert(reports),
      );
      stdout.writeln('Wrote ${file.path}');
      _printSummary(reports);
    } finally {
      parser.dispose();
    }
  } finally {
    collection.dispose();
  }
}

String _workspaceRoot() {
  final fromScript = p.normalize(
    p.join(p.dirname(Platform.script.toFilePath()), '../../'),
  );
  if (File(p.join(fromScript, 'melos.yaml')).existsSync()) return fromScript;
  return p.current;
}

Future<Map<String, Object?>> _libraryReport({
  required AnalysisContextCollection collection,
  required FlaxCodegenBindingParser parser,
  required FlaxCodegenParserCheckpoint pool,
  required FlaxCodegenBindingConfig poolConfig,
  required String library,
  required List<String> additionalLibraries,
  required FlaxCodegenBindingConfig selected,
}) async {
  final exports = await _exports(collection, [library, ...additionalLibraries]);
  final selectedClasses = selected.classes.keys.toSet();
  final selectedTypes = selected.types.toSet();
  final selectedFunctions = selected.functions.keys.toSet();
  var classCount = 0;
  var mixinCount = 0;
  var enumCount = 0;
  var functionCount = 0;
  var otherCount = 0;
  final probes = <Map<String, Object?>>[];
  final expand = <Map<String, Object?>>[];
  stdout.writeln(
    'Scanning $library (${additionalLibraries.length} additional)…',
  );
  final names = exports.keys.toList()..sort();
  var index = 0;
  for (final name in names) {
    index++;
    if (index % 50 == 0) {
      stdout.writeln('  $index/${names.length}');
    }
    final element = exports[name]!;
    if (element is EnumElement) {
      enumCount++;
      continue;
    }
    if (element is TopLevelFunctionElement) {
      functionCount++;
      if (!selectedFunctions.contains(name) && element.isPublic) {
        probes.add(
          await _probeFunction(
            parser: parser,
            pool: pool,
            poolConfig: poolConfig,
            library: library,
            additionalLibraries: additionalLibraries,
            function: element,
          ),
        );
      }
      continue;
    }
    if (element is MixinElement) {
      mixinCount++;
      if (!selectedClasses.contains(name)) {
        probes.add(
          await _probeType(
            parser: parser,
            pool: pool,
            poolConfig: poolConfig,
            library: library,
            additionalLibraries: additionalLibraries,
            element: element,
            selected: false,
          ),
        );
      }
      continue;
    }
    if (element is ClassElement) {
      classCount++;
      if (selectedClasses.contains(name)) {
        expand.add(
          await _probeType(
            parser: parser,
            pool: pool,
            poolConfig: poolConfig,
            library: library,
            additionalLibraries: additionalLibraries,
            element: element,
            selected: true,
            base: selected.classes[name],
          ),
        );
      } else {
        probes.add(
          await _probeType(
            parser: parser,
            pool: pool,
            poolConfig: poolConfig,
            library: library,
            additionalLibraries: additionalLibraries,
            element: element,
            selected: false,
          ),
        );
      }
      continue;
    }
    otherCount++;
  }
  return {
    'library': library,
    'additionalLibraries': additionalLibraries,
    'exports': {
      'classes': classCount,
      'mixins': mixinCount,
      'enums': enumCount,
      'functions': functionCount,
      'other': otherCount,
      'total': names.length,
    },
    'alreadySelected': {
      'classes': selectedClasses.length,
      'types': selectedTypes.length,
      'functions': selectedFunctions.length,
    },
    'unselectedProbes': probes.length,
    'expandSelectedProbes': expand.length,
    'unselected': _summarize(probes),
    'expandSelected': _summarize(expand),
    'probes': probes,
    'expand': expand,
  };
}

Future<Map<String, Element>> _exports(
  AnalysisContextCollection collection,
  List<String> uris,
) async {
  final names = <String, Element>{};
  final session = collection.contexts.first.currentSession;
  for (final uri in uris) {
    final result = await session.getLibraryByUri(uri);
    if (result is! LibraryElementResult) {
      throw StateError('Cannot resolve $uri');
    }
    for (final entry in result.element.exportNamespace.definedNames2.entries) {
      names.putIfAbsent(entry.key, () => entry.value);
    }
  }
  return names;
}

Future<Map<String, Object?>> _probeType({
  required FlaxCodegenBindingParser parser,
  required FlaxCodegenParserCheckpoint pool,
  required FlaxCodegenBindingConfig poolConfig,
  required String library,
  required List<String> additionalLibraries,
  required InterfaceElement element,
  required bool selected,
  FlaxCodegenClassSelection? base,
}) async {
  parser.restore(pool);
  final config = FlaxCodegenBindingConfig(
    'census',
    library,
    poolConfig.jsPackage,
    'unused.dart',
    'unused.ts',
    const {},
    additionalLibraries: additionalLibraries,
  );
  final proposed = await parser.proposeSelection(
    element,
    library: config,
    base: selected ? base : null,
  );
  final skips = [
    for (final skip in proposed.skips)
      {'target': skip.target, 'reason': skip.reason},
  ];
  final selection = proposed.selection;
  return {
    'name': element.name,
    'element': element is MixinElement ? 'mixin' : 'class',
    'widget': _isWidget(element),
    'alreadySelected': selected,
    'ok': selection != null,
    'bestMode': selection == null
        ? null
        : selected
        ? 'owned'
        : 'proposeSelection',
    'skips': skips,
    if (selection != null)
      'selection': {
        'kind': selection.kind,
        'typeArguments': selection.typeArguments,
        'constructors': {
          for (final entry in selection.constructors.entries)
            entry.key: entry.value,
        },
        'getters': selection.getters,
        'setters': selection.setters,
        'staticGetters': selection.staticGetters,
        'instanceMethods': {
          for (final entry in selection.instanceMethods.entries)
            entry.key: entry.value,
        },
        'methods': {
          for (final entry in selection.methods.entries) entry.key: entry.value,
        },
      },
    'attempts': [
      {
        'mode': 'proposeSelection',
        'ok': selection != null,
        if (selection == null)
          'bucket': proposed.skips.firstOrNull?.reason ?? 'unselected',
      },
    ],
  };
}

Future<Map<String, Object?>> _probeFunction({
  required FlaxCodegenBindingParser parser,
  required FlaxCodegenParserCheckpoint pool,
  required FlaxCodegenBindingConfig poolConfig,
  required String library,
  required List<String> additionalLibraries,
  required TopLevelFunctionElement function,
}) async {
  final parameters = [
    for (final parameter in function.formalParameters)
      if (_usableName(parameter.name)) parameter.name!,
  ];
  parser.restore(pool);
  try {
    await parser.parse(
      FlaxCodegenBindingConfig(
        'census',
        library,
        poolConfig.jsPackage,
        'unused.dart',
        'unused.ts',
        const {},
        additionalLibraries: additionalLibraries,
        functions: {function.name!: FlaxCodegenFunctionSelection(parameters)},
      ),
    );
    return {
      'name': function.name,
      'element': 'function',
      'ok': true,
      'bestMode': 'allParams',
      'attempts': [
        {'mode': 'allParams', 'ok': true},
      ],
    };
  } catch (error) {
    return {
      'name': function.name,
      'element': 'function',
      'ok': false,
      'attempts': [
        {
          'mode': 'allParams',
          'ok': false,
          'bucket': _bucket(error),
          'error': error.toString().split('\n').first,
        },
      ],
    };
  }
}

bool _isWidget(InterfaceElement element) {
  const widgetLibrary = 'package:flutter/src/widgets/framework.dart';
  bool isWidgetType(InterfaceElement candidate) =>
      candidate.name == 'Widget' &&
      candidate.library.uri.toString() == widgetLibrary;
  return isWidgetType(element) ||
      element.allSupertypes.any((type) => isWidgetType(type.element));
}

bool _usableName(String? name) =>
    name != null &&
    name.isNotEmpty &&
    !name.startsWith('_') &&
    RegExp(r'^[A-Za-z][A-Za-z0-9]*$').hasMatch(name);

String _bucket(Object error) {
  final message = error.toString();
  const needles = [
    'Unsupported binding type',
    'Unsupported callback signature',
    'Unsupported core type',
    'Unsupported getter type',
    'Unsupported setter type',
    'Unsupported method arguments',
    'Unsupported Dart result',
    'Unsupported function input',
    'Unsupported constant default',
    'must publicly export the referenced type',
    'Missing callback signature',
    'Cannot omit required or positional parameter',
    'Unknown constructor',
    'Unknown adapted class',
    'Unknown selected parameter',
    'Context inputs are currently callback-only',
    'Stored callbacks currently require a mounted Widget owner',
    'Explicit runtime type arguments required',
    'Unbound runtime type argument',
    'Unbound generic callback bound',
    'Recursive generic callback bound',
    'Value getters require selected constructor fields',
    'Invalid independent Widget callback selection',
    'Independent callbacks require selected Widget constructors',
    'Adapted types cannot expose constructors',
    'Selected public libraries must export Widget',
    'Callbacks cannot be Map keys',
    'Widget collections',
    'Invalid ',
    'Duplicate selection',
    'Conflicting adaptation',
    'Proxy properties must be public',
    'A proxy needs a generative super constructor',
    'Host proxies',
    'Expected an implementable non-generic Widget interface',
  ];
  for (final needle in needles) {
    if (message.contains(needle)) return needle;
  }
  final match = RegExp(r'^[^:\n]+').firstMatch(message);
  return match?.group(0) ?? 'other';
}

Map<String, Object?> _summarize(List<Map<String, Object?>> probes) {
  final buckets = <String, int>{};
  var ok = 0;
  var identityOnly = 0;
  var ctors = 0;
  var ownFull = 0;
  for (final probe in probes) {
    if (probe['ok'] == true) {
      ok++;
      // Do not treat a non-empty selection as complete member coverage.
      continue;
    }
    final attempts = probe['attempts'] as List<dynamic>;
    final last = attempts.last as Map<String, dynamic>;
    final bucket = last['bucket'] as String? ?? 'other';
    buckets[bucket] = (buckets[bucket] ?? 0) + 1;
  }
  return {
    'okAnyMode': ok,
    'okNonEmptySelection': ok,
    'okOwnFull': ownFull,
    'okCtorsOnly': ctors,
    'okIdentityOnly': identityOnly,
    'failed': probes.length - ok,
    'failureBuckets': buckets,
    'note': 'okAnyMode counts a non-empty proposeSelection, not full member coverage.',
  };
}

void _printSummary(Map<String, Object?> reports) {
  for (final name in [
    'widgetsAlone',
    'widgetsWithOfficialLibraries',
    'foundationAlone',
    'materialUi',
  ]) {
    final report = reports[name] as Map<String, Object?>;
    stdout.writeln('\n== $name ==');
    stdout.writeln('exports: ${jsonEncode(report['exports'])}');
    stdout.writeln('unselected: ${jsonEncode(report['unselected'])}');
    stdout.writeln('expandSelected: ${jsonEncode(report['expandSelected'])}');
  }
}
