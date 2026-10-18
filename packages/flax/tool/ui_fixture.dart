import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';

import '../../flax_codegen/tool/src/fixture_emitter.dart';

import '../test/fixtures/interop_selection.dart';
import '../test/fixtures/enums_selection.dart';
import '../test/fixtures/native_widgets_selection.dart';
import '../test/fixtures/default_omission_selection.dart';
import '../test/fixtures/repeated_selection.dart';
import '../test/fixtures/static_accessors_selection.dart';
import '../test/fixtures/proxy_operators_selection.dart';
import '../test/fixtures/context_streams_selection.dart';
import '../test/fixtures/extensions_selection.dart';
import '../test/fixtures/dart_types_selection.dart';
import '../test/fixtures/binding_completion_selection.dart';

Future<void> main() async {
  final package = Directory.current.absolute;
  final output = Directory('${package.path}/.dart_tool/flax/ui')
    ..createSync(recursive: true);
  final emitter = FlaxCodegenFixtureEmitter(
    package.path,
    File('${package.path}/bindings/manifest.json'),
  );
  try {
    await _generate(
      package,
      output,
      'binding_completion',
      bindingCompletionSelection,
      emitter,
      functions: bindingCompletionFunctions,
      extensions: bindingCompletionExtensions,
    );
    await _generate(package, output, 'dart_types', dartTypesSelection, emitter);
    await _generate(
      package,
      output,
      'binding_parity',
      const {},
      emitter,
      automatic: true,
    );
    await _generate(
      package,
      output,
      'complex_bounds',
      const {},
      emitter,
      automatic: true,
    );
    await _generate(
      package,
      output,
      'collection_members',
      const {},
      emitter,
      automatic: true,
    );
    await _generate(
      package,
      output,
      'widget_members',
      const {},
      emitter,
      automatic: true,
    );
    await _generate(
      package,
      output,
      'extensions',
      extensionClasses(
        package.uri.resolve('test/fixtures/extensions.dart').toString(),
      ),
      emitter,
      functions: extensionFunctions,
      topLevel: extensionTopLevel,
      extensions: extensionSelection,
    );
    await _generate(
      package,
      output,
      'context_streams',
      contextStreamsSelection,
      emitter,
    );
    await _generate(
      package,
      output,
      'native_widgets',
      nativeWidgetsSelection,
      emitter,
    );
    await _generate(
      package,
      output,
      'interop',
      interopSelection,
      emitter,
      functions: {
        ...enumFunctions,
        'codegenWrapTop': const FlaxCodegenFunctionSelection(['value']),
      },
      typedefs: [
        'CodegenOnChanged',
        'CodegenNames',
        'CodegenAttributes',
        'CodegenTransform',
        'CodegenMapper',
        'CodegenItems',
        'CodegenGenericMapper',
        'CodegenConverter',
        'CodegenAsyncMapper',
        'CodegenAsyncGenericMapper',
        'CodegenNullableMapper',
        'NestedAsyncMapper',
      ],
    );
    await _generate(
      package,
      output,
      'default_omission',
      defaultOmissionSelection,
      emitter,
      functions: const {
        'omissionTotal': FlaxCodegenFunctionSelection(omissionParameters),
      },
    );
    await _generate(
      package,
      output,
      'static_accessors',
      staticAccessorsSelection,
      emitter,
    );
    await _generate(
      package,
      output,
      'proxy_operators',
      proxyOperatorsSelection,
      emitter,
    );
    await _generate(
      package,
      output,
      'repeated',
      repeatedSelection,
      emitter,
      functions: const {
        'echoWidgetContext': FlaxCodegenFunctionSelection(['value']),
      },
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
  List<String> typedefs = const [],
  Map<String, FlaxCodegenFunctionSelection> functions = const {},
  Map<String, FlaxCodegenExtensionSelection> extensions = const {},
  FlaxCodegenTopLevelSelection? topLevel,
  bool automatic = false,
}) async {
  final config = FlaxCodegenBindingConfig(
    name,
    package.uri.resolve('test/fixtures/$name.dart').toString(),
    '@test/$name',
    'unused.dart',
    'unused.ts',
    classes,
    typedefs: typedefs,
    functions: functions,
    extensions: extensions,
    topLevel: topLevel,
  );
  await emitter.generate(config, output, automatic: automatic);
}
