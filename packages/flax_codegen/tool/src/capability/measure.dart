import 'dart:convert';

import 'package:flax_codegen/flax_codegen.dart';

/// Stop generating larger omitWhenAbsent combinations past this Dart size.
const flaxCapabilityOmitDartByteBudget = 400000;

/// Stop generating larger omitWhenAbsent combinations past this emit time.
const flaxCapabilityOmitEmitMsBudget = 8000;

FlaxCodegenBindingConfig capabilitySelectionConfig(
  FlaxCodegenBindingConfig library,
  Map<String, FlaxCodegenClassSelection> classes,
) => FlaxCodegenBindingConfig(
  library.name,
  library.library,
  library.jsPackage,
  library.dartOutput,
  library.tsOutput,
  classes,
);

Future<Map<String, Object?>> tryParseSelection({
  required FlaxCodegenBindingParser parser,
  required FlaxCodegenBindingConfig library,
  required Map<String, FlaxCodegenClassSelection> classes,
}) async {
  try {
    final module = await parser.parse(
      capabilitySelectionConfig(library, classes),
    );
    return {
      'ok': true,
      'classes': [for (final type in module.classes) type.name],
      'typeArguments': {
        for (final type in module.classes)
          if (type.typeArguments.isNotEmpty) type.name: type.typeArguments,
      },
      'methods': {
        for (final type in module.classes)
          type.name: [for (final method in type.methods) method.name],
      },
    };
  } on Object catch (error) {
    return {'ok': false, 'error': error.toString().split('\n').first};
  }
}

Future<List<Map<String, Object?>>> runExplicitGenericExperiments({
  required String workspaceRoot,
  required FlaxCodegenBindingConfig library,
}) async {
  final results = <Map<String, Object?>>[];

  Future<void> run(
    String title,
    Map<String, FlaxCodegenClassSelection> classes,
  ) async {
    final parser = FlaxCodegenBindingParser(workspaceRoot);
    try {
      final parsed = await tryParseSelection(
        parser: parser,
        library: library,
        classes: classes,
      );
      results.add({'title': title, ...parsed});
    } finally {
      parser.dispose();
    }
  }

  await run('DependentBox explicit num,int', {
    'DependentBox': const FlaxCodegenClassSelection(
      {
        '': ['first', 'second'],
      },
      kind: 'object',
      typeArguments: ['num', 'int'],
      instanceMethods: {
        'choose': ['ignored', 'value'],
      },
    ),
  });
  await run('DependentBox illegal String,int', {
    'DependentBox': const FlaxCodegenClassSelection(
      {
        '': ['first', 'second'],
      },
      kind: 'object',
      typeArguments: ['String', 'int'],
    ),
  });
  await run('RecursiveBox without adapted argument type', {
    'RecursiveBox': const FlaxCodegenClassSelection(
      {
        '': ['value'],
      },
      kind: 'object',
      typeArguments: ['ComparableLeaf'],
    ),
  });
  await run('RecursiveBox with adapted ComparableLeaf', {
    'ComparableLeaf': const FlaxCodegenClassSelection({
      '': ['value'],
    }, kind: 'object'),
    'RecursiveBox': const FlaxCodegenClassSelection(
      {
        '': ['value'],
      },
      kind: 'object',
      typeArguments: ['ComparableLeaf'],
      instanceMethods: {
        'echo': ['input'],
      },
    ),
  });
  await run('GenericMethods identity instantiated as int', {
    'GenericMethods': const FlaxCodegenClassSelection(
      {'': []},
      kind: 'object',
      instanceMethods: {
        'identity': ['value'],
      },
      methods: {
        'staticIdentity': ['value'],
      },
      methodTypeArguments: {
        'identity': ['int'],
        'staticIdentity': ['int'],
      },
    ),
  });
  await run('GenericMethods identity illegal String', {
    'GenericMethods': const FlaxCodegenClassSelection(
      {'': []},
      kind: 'object',
      instanceMethods: {
        'identity': ['value'],
      },
      methodTypeArguments: {
        'identity': ['String'],
      },
    ),
  });
  return results;
}

Future<Map<String, Object?>> measureOmitEmission({
  required FlaxCodegenBindingParser parser,
  required FlaxCodegenBindingConfig library,
  required String name,
  required List<String> parameters,
}) async {
  final stopwatch = Stopwatch()..start();
  try {
    final module = await parser.parse(
      capabilitySelectionConfig(library, {
        name: FlaxCodegenClassSelection({'': parameters}, kind: 'object'),
      }),
    );
    final emitter = FlaxCodegenBindingEmitter([module]);
    final dart = emitter.dart(module);
    final typescript = emitter.typescript(module);
    final elapsed = stopwatch.elapsedMilliseconds;
    final branches = RegExp('return api\\.$name\\(').allMatches(dart).length;
    return {
      'name': name,
      'requested': parameters.length,
      'ok': true,
      'estimated': false,
      'dartBytes': utf8.encode(dart).length,
      'tsBytes': utf8.encode(typescript).length,
      'dartBranches': branches,
      'expectedBranches': 1 << parameters.length,
      'emitMilliseconds': elapsed,
    };
  } on Object catch (error) {
    return {
      'name': name,
      'requested': parameters.length,
      'ok': false,
      'estimated': false,
      'error': error.toString().split('\n').first,
      'emitMilliseconds': stopwatch.elapsedMilliseconds,
    };
  }
}

Map<String, Object?> estimateOmitEmission({
  required String name,
  required int requested,
  required Map<String, Object?> baseline,
}) {
  final from = baseline['requested'] as int;
  final scale = (1 << requested) / (1 << from);
  int scaled(String key) => ((baseline[key] as num).toDouble() * scale).round();
  return {
    'name': name,
    'requested': requested,
    'ok': true,
    'estimated': true,
    'dartBytes': scaled('dartBytes'),
    'tsBytes': scaled('tsBytes'),
    'dartBranches': 1 << requested,
    'expectedBranches': 1 << requested,
    'emitMilliseconds': scaled('emitMilliseconds'),
    'note':
        'Estimated from ${baseline['name']} using 2^N constructor combinations; '
        'not generated.',
  };
}

bool exceedsOmitBudget(Map<String, Object?> measurement) {
  if (measurement['ok'] != true || measurement['estimated'] == true) {
    return false;
  }
  final dartBytes = measurement['dartBytes'] as int? ?? 0;
  final emitMs = measurement['emitMilliseconds'] as int? ?? 0;
  return dartBytes > flaxCapabilityOmitDartByteBudget ||
      emitMs > flaxCapabilityOmitEmitMsBudget;
}

Future<List<Map<String, Object?>>> runOmitScaleExperiments({
  required String workspaceRoot,
  required FlaxCodegenBindingConfig library,
}) async {
  final results = <Map<String, Object?>>[];
  Map<String, Object?>? generatedBaseline;

  for (final count in [3, 6, 8, 10]) {
    final name = 'Default$count';
    final parameters = [for (var i = 1; i <= count; i++) 'p$i'];
    if (generatedBaseline != null && exceedsOmitBudget(generatedBaseline)) {
      results.add(
        estimateOmitEmission(
          name: name,
          requested: count,
          baseline: generatedBaseline,
        ),
      );
      continue;
    }
    final parser = FlaxCodegenBindingParser(workspaceRoot);
    try {
      final measurement = await measureOmitEmission(
        parser: parser,
        library: library,
        name: name,
        parameters: parameters,
      );
      results.add(measurement);
      if (measurement['ok'] == true) {
        generatedBaseline = measurement;
      }
    } finally {
      parser.dispose();
    }
  }
  return results;
}
