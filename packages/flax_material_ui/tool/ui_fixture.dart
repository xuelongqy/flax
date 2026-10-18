import 'dart:io';
import 'dart:isolate';

import 'package:flax_codegen/flax_codegen.dart';

import '../../flax_codegen/tool/src/fixture_emitter.dart';

import '../test/fixtures/functions_selection.dart';
import '../test/fixtures/repeated_selection.dart';
import '../test/fixtures/state_variant_selection.dart';
import '../test/fixtures/widget_interfaces_selection.dart';

Future<void> main() async {
  final package = Directory.current.absolute;
  final output = Directory('${package.path}/.dart_tool/flax/ui')
    ..createSync(recursive: true);
  final flaxLibrary = Isolate.resolvePackageUriSync(
    Uri.parse('package:flax/flax.dart'),
  );
  if (flaxLibrary == null) throw StateError('Cannot resolve package:flax');
  final flaxRoot = File.fromUri(flaxLibrary).parent.parent;
  final emitter = FlaxCodegenFixtureEmitter(
    package.path,
    File('${flaxRoot.path}/bindings/manifest.json'),
  );
  try {
    await _generate(
      package,
      output,
      'functions',
      functionClasses,
      emitter,
      functions: functionSelections,
      topLevel: const FlaxCodegenTopLevelSelection(
        'ContextValues',
        ['selectedContextMounted'],
        setters: ['selectedContext', 'selectedContextListener'],
      ),
    );
    await _generate(
      package,
      output,
      'material_repeated',
      repeatedSelection,
      emitter,
      libraryName: 'repeated',
    );
    await _generate(
      package,
      output,
      'widget_interfaces',
      widgetInterfacesSelection,
      emitter,
      functions: const {
        'interfaceStream': FlaxCodegenFunctionSelection(['value']),
        'openInterfacePanel': FlaxCodegenFunctionSelection(
          ['origin', 'content', 'root'],
          dataResult: true,
          route: FlaxCodegenRouteCallModel(['content']),
        ),
      },
    );
    await _generate(
      package,
      output,
      'state_variant',
      stateVariantSelection,
      emitter,
    );
    await _generate(
      package,
      output,
      'readonly_values',
      const {
        'ReadonlyProbe': FlaxCodegenClassSelection(
          {},
          kind: 'object',
          getters: ['value', 'disposed'],
          setters: ['value'],
          instanceMethods: {'dispose': []},
        ),
      },
      emitter,
      typedefs: const ['ReadonlyTransform', 'ReadonlyIdentity'],
      topLevel: const FlaxCodegenTopLevelSelection('FixtureValues', [
        'answer',
        'changing',
        'initialized',
        'lazy',
        'assigned',
        'optional',
        'probe',
        'numbers',
        'groups',
        'transform',
        'identity',
        'later',
        'laterFailure',
        'pending',
        'failing',
        'sideEffect',
      ]),
    );
  } finally {
    await emitter.dispose();
  }
}

Future<void> _generate(
  Directory package,
  Directory output,
  String name,
  Map<String, FlaxCodegenClassSelection> classes,
  FlaxCodegenFixtureEmitter emitter, {
  Map<String, FlaxCodegenFunctionSelection> functions = const {},
  List<String> typedefs = const [],
  FlaxCodegenTopLevelSelection? topLevel,
  String? libraryName,
}) async {
  final config = FlaxCodegenBindingConfig(
    name,
    package.uri.resolve('test/fixtures/${libraryName ?? name}.dart').toString(),
    '@test/$name',
    'unused.dart',
    'unused.ts',
    classes,
    functions: functions,
    typedefs: typedefs,
    topLevel: topLevel,
  );
  await emitter.generate(config, output);
}
