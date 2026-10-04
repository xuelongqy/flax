import 'dart:convert';

import 'package:flax_codegen/flax_codegen.dart';

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
      await parser.dispose();
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
    final applyCalls = RegExp('Function.apply\\(api\\.$name\\.new')
        .allMatches(dart)
        .length;
    return {
      'name': name,
      'requested': parameters.length,
      'ok': true,
      'estimated': false,
      'dartBytes': utf8.encode(dart).length,
      'tsBytes': utf8.encode(typescript).length,
      'dartBranches': branches,
      'applyCalls': applyCalls,
      'strategy': applyCalls == 0 ? 'direct' : 'apply',
      'expectedBranches': parameters.length <= 5 ? 1 << parameters.length : 0,
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

Future<List<Map<String, Object?>>> runOmitScaleExperiments({
  required String workspaceRoot,
  required FlaxCodegenBindingConfig library,
}) async {
  final results = <Map<String, Object?>>[];

  for (final count in [3, 5, 6, 8, 10]) {
    final name = 'Default$count';
    final parameters = [for (var i = 1; i <= count; i++) 'p$i'];
    final parser = FlaxCodegenBindingParser(workspaceRoot);
    try {
      final measurement = await measureOmitEmission(
        parser: parser,
        library: library,
        name: name,
        parameters: parameters,
      );
      results.add(measurement);
    } finally {
      await parser.dispose();
    }
  }
  return results;
}
