import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  final root = p.normalize(p.join(p.current, '../..'));
  const header = '''
format: 2
name: duration_probe
library: dart:core
jsPackage: '@example/duration-probe'
dartOutput: lib/generated.dart
tsOutput: js/generated.ts
''';

  test('default discovery accepts only prefixed binding selections', () {
    for (final name in [
      'flax_bindings.yaml',
      'flax_components.yaml',
      'flax_ui.yml',
    ]) {
      expect(flaxCodegenIsBindingConfigPath('/bindings/$name'), isTrue);
    }
    for (final name in [
      'config.yaml',
      'notes.yml',
      'flax_overrides.yaml',
      'flax_overrides.yml',
      'flax_bindings.YAML',
      'flax_bindings.json',
    ]) {
      expect(flaxCodegenIsBindingConfigPath('/bindings/$name'), isFalse);
    }
  });

  test('explicitly scoped opaque types retain reference tokens', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final module = await parser.parse(
      FlaxCodegenBindingConfig.parseStrict('''
${header}classes: [Type, Symbol, Invocation]
'''),
    );
    expect(
      module.classes.map((value) => value.name),
      containsAll(['Type', 'Invocation']),
    );
    expect(
      module.classes.singleWhere((value) => value.name == 'Type').constructors,
      isEmpty,
    );
  });

  test(
    'scoped stream factories and public constants reuse native rules',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final module = await parser.parse(
        FlaxCodegenBindingConfig.parseStrict('''
${header}additionalLibraries: [dart:async]
classes: [StackTrace, Stream, StreamSubscription]
overrides:
  classes:
    Stream: {kind: stream}
'''),
      );
      final stream = module.classes.singleWhere(
        (value) => value.name == 'Stream',
      );
      expect(
        stream.constructors.map((value) => value.name),
        containsAll(['empty', 'value', 'fromIterable']),
      );
      final trace = module.classes.singleWhere(
        (value) => value.name == 'StackTrace',
      );
      expect(trace.staticGetters.map((value) => value.name), contains('empty'));
      expect(trace.methods.map((value) => value.name), contains('toString'));
    },
  );

  test(
    'scoped Widget members preserve snapshot callbacks and parent types',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final module = await parser.parse(
        FlaxCodegenBindingConfig.parseStrict('''
${header.replaceFirst('dart:core', 'package:flutter/widgets.dart')}additionalLibraries: [package:flutter/gestures.dart]
classes: [Listener, Key, StatefulBuilder, StatefulWidget, State, BuildContext]
callbackSnapshots:
  PointerEvent: {fields: [pointer]}
overrides:
  classes:
    StatefulWidget: {kind: object}
    State: {kind: state}
    BuildContext: {kind: context}
'''),
      );
      final listener = module.classes.singleWhere(
        (value) => value.name == 'Listener',
      );
      expect(
        listener.constructors.single.parameters.map((value) => value.name),
        contains('onPointerDown'),
      );
      final widget = module.classes.singleWhere(
        (value) => value.name == 'StatefulBuilder',
      );
      expect(
        widget.superTypes.map((value) => value.name),
        contains('StatefulWidget'),
      );
    },
  );

  test('scoped members do not claim unselected dependency types', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final module = await parser.parse(
      FlaxCodegenBindingConfig.parseStrict('''
${header.replaceFirst('dart:core', Uri.file(p.join(root, 'packages/flax_codegen/test/fixtures/bindability/objects.dart')).toString())}classes: [Partial]
'''),
    );
    final value = module.classes.single;
    expect(value.constructors.single.parameters.map((value) => value.name), [
      'ok',
    ]);
    expect(value.getters.map((value) => value.name), ['ok']);
    expect(module.types.map((value) => value.name), isNot(contains('Uri')));
    expect(
      parser.automaticSkips.any((skip) => skip.target == 'Partial.bad'),
      isTrue,
    );
  });

  test(
    'scoped Duration inference preserves the explicit API and native calls',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final module = await parser.parse(
        FlaxCodegenBindingConfig.parseStrict('''
${header}classes: [Duration]
functions: [identical]
'''),
      );
      final duration = module.classes.single;
      expect(duration.name, 'Duration');
      expect(duration.proxy, isNull);
      expect(
        duration.constructors.single.parameters.map((value) => value.name),
        ['days', 'hours', 'minutes', 'seconds', 'milliseconds', 'microseconds'],
      );
      expect(
        duration.getters.map((value) => value.name),
        containsAll([
          'inDays',
          'inHours',
          'inMinutes',
          'inSeconds',
          'inMilliseconds',
          'inMicroseconds',
        ]),
      );
      expect(
        duration.staticGetters.map((value) => value.name),
        contains('zero'),
      );
      expect(duration.methods.map((value) => value.name), contains('abs'));
      expect(module.functions.single.call.name, 'identical');
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([module]),
        module,
        emitDeclarations: true,
        consumerSource: '''
import { Duration, identical } from './plugin.js';
export const publicDurationFactory = Duration;
const value = Duration({seconds: 2});
const total: number = value.inSeconds;
const positive: Duration = value.abs();
const sum: Duration = value.operatorAdd(Duration.zero);
identical(value, positive);
''',
        dartTestSource: '''
void main() {
  test('inferred Duration calls use the real Dart object', () {
    final binding = duration_probeBindings.types.whereType<FlaxObjectBinding>().single;
    final value = binding.create('', {'days': 0, 'hours': 0, 'minutes': 0,
        'seconds': -2, 'milliseconds': 0, 'microseconds': 0}) as api.Duration;
    expect(value.inSeconds, -2);
    expect(binding.instanceMethods['abs']!.invoke(value, {}), api.Duration(seconds: 2));
  });
}
''',
      );
    },
    timeout: const Timeout(Duration(minutes: 3)),
  );

  test(
    'scoped inference retains explicit overrides without widening the scope',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final module = await parser.parse(
        FlaxCodegenBindingConfig.parseStrict('''
${header}classes: [Duration]
overrides:
  classes:
    Duration:
      getters: [inSeconds]
      instanceMethods: {}
      operators: {}
'''),
      );
      expect(module.classes.single.getters.map((value) => value.name), [
        'inSeconds',
      ]);
      expect(
        module.classes.single.methods.where((value) => value.instance),
        isEmpty,
      );
      expect(module.classes.map((value) => value.name), ['Duration']);
    },
  );

  test('invalid scoped declarations and overrides fail closed', () async {
    expect(
      () => FlaxCodegenBindingConfig.parseStrict(
        '${header}classes: {Duration: {kind: object}}\n'
        'overrides: {classes: {Duration: {getters: [inSeconds]}}}',
      ),
      throwsA(isA<FlaxCodegenException>()),
    );
    for (final selection in [
      'classes: [MissingDuration]',
      'classes: [identical]',
      'classes: [Duration]\noverrides: {classes: {Duration: {getters: [missing]}}}',
    ]) {
      final parser = FlaxCodegenBindingParser(root);
      try {
        await expectLater(
          parser.parse(
            FlaxCodegenBindingConfig.parseStrict('$header$selection'),
          ),
          throwsStateError,
        );
      } finally {
        await parser.dispose();
      }
    }
  });
}
