import 'dart:convert';
import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/package_pipeline.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

void main() {
  group('literal module tuple emission', () {
    test(
      'dart pins moduleId, uiProtocol, and requiredCapabilities literals',
      () {
        final module = _richModule(
          typeLibraries: {
            'Widget': 'package:flutter/widgets.dart',
            'Element': 'package:flutter/element.dart',
          },
          listenerPairs: {'watch': 'unwatch', 'addListener': 'removeListener'},
        );
        final dart = FlaxCodegenBindingEmitter([module]).dart(module);
        expect(dart, contains('moduleId: "com.acme.widgets/widgets"'));
        expect(dart, contains('uiProtocol: 21'));
        expect(dart, contains('requiredCapabilities: const <String>[]'));
        expect(dart, isNot(contains('version:')));
        expect(dart, isNot(contains('flaxBindingVersion')));
      },
    );

    test(
      'typescript validates the tuple before defineObject and host calls',
      () {
        final module = _richModule(
          typeLibraries: {
            'Widget': 'package:flutter/widgets.dart',
            'Element': 'package:flutter/element.dart',
          },
          listenerPairs: {'watch': 'unwatch', 'addListener': 'removeListener'},
        );
        final typescript = FlaxCodegenBindingEmitter([module])
            .typescript(module);
        final installAt = typescript.indexOf('_flaxInstallBindingModule(');
        final defineAt = typescript.indexOf('defineObject(');
        final enumAt = typescript.indexOf('enumValue<');
        expect(installAt, greaterThan(0));
        expect(defineAt, greaterThan(installAt));
        expect(enumAt, greaterThan(installAt));
        expect(
          typescript,
          contains(
            '_flaxInstallBindingModule("com.acme.widgets/widgets", 21, Object.freeze([]) as readonly string[])',
          ),
        );
        expect(typescript, contains('export const widgetsBindingModule'));
        expect(typescript, isNot(contains('version: 20')));
      },
    );

    test('zero-member modules still emit and validate the literal tuple', () {
      const module = FlaxCodegenModuleModel(
        name: 'host',
        library: 'package:example/host.dart',
        jsPackage: '@example/host',
        dartOutput: 'host.dart',
        tsOutput: 'host.ts',
        classes: [],
        types: [],
        moduleId: 'example.host/host',
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      final dart = emitter.dart(module);
      expect(dart, contains('moduleId: "example.host/host"'));
      expect(dart, contains('uiProtocol: 21'));
      expect(dart, contains('requiredCapabilities: const <String>[]'));
      expect(dart, isNot(contains('version:')));
      final typescript = emitter.typescript(module);
      expect(
        typescript,
        contains(
          '_flaxInstallBindingModule("example.host/host", 21, Object.freeze([]) as readonly string[])',
        ),
      );
      expect(typescript, contains('export const hostBindingModule'));
      expect(typescript, isNot(contains('defineObject(')));
    });

    test('requiredCapabilities literals are sorted and unique', () {
      final module = FlaxCodegenModuleModel(
        name: 'host',
        library: 'package:example/host.dart',
        jsPackage: '@example/host',
        dartOutput: 'host.dart',
        tsOutput: 'host.ts',
        classes: const [],
        types: const [],
        moduleId: 'example.host/host',
        requiredCapabilities: const ['zeta', 'alpha', 'alpha'],
      );
      final dart = FlaxCodegenBindingEmitter([module]).dart(module);
      expect(
        dart,
        contains('requiredCapabilities: const <String>["alpha", "zeta"]'),
      );
      final typescript = FlaxCodegenBindingEmitter([module]).typescript(module);
      expect(
        typescript,
        contains(
          '_flaxInstallBindingModule("example.host/host", 21, Object.freeze(["alpha","zeta"]) as readonly string[])',
        ),
      );
    });

    test(
      'record bindings use top-level readers in the const binding table',
      () {
        const record = FlaxCodegenTypeRef(
          'record',
          recordFields: [
            FlaxCodegenRecordFieldModel(
              name: '\$1',
              type: FlaxCodegenTypeRef('int'),
              positional: true,
            ),
            FlaxCodegenRecordFieldModel(
              name: 'label',
              type: FlaxCodegenTypeRef('String'),
              positional: false,
            ),
          ],
        );
        final module = FlaxCodegenModuleModel(
          name: 'records',
          library: 'package:example/records.dart',
          jsPackage: '@example/records',
          dartOutput: 'records.dart',
          tsOutput: 'records.ts',
          classes: const [],
          types: const [],
          functions: [
            FlaxCodegenFunctionModel(
              'example.records/records#function:echo',
              FlaxCodegenMethodModel('echo', const [
                FlaxCodegenParameterModel(
                  name: 'value',
                  type: record,
                  required: true,
                  positional: true,
                  defaultCode: 'null',
                ),
              ], record),
            ),
          ],
        );

        final dart = FlaxCodegenBindingEmitter([module]).dart(module);
        expect(dart, contains('_record0Read0),'));
        expect(dart, contains('_record0Read1),'));
        expect(dart, contains('Object? _record0Read0(Object value) =>'));
        expect(dart, contains('Object? _record0Read1(Object value) =>'));
        expect(
          dart,
          contains('Object _record0Create(List<Object?> values) =>'),
        );
      },
    );
  });

  group('intrinsic Stream emission', () {
    test('signature-only Stream uses the dedicated bridge adapter', () {
      const streamId = 'dart:async::Stream';
      const streamType = FlaxCodegenTypeRef(
        'stream',
        id: streamId,
        name: 'Stream',
        item: FlaxCodegenTypeRef('int'),
      );
      const module = FlaxCodegenModuleModel(
        name: 'streams',
        library: 'package:example/streams.dart',
        jsPackage: '@example/streams',
        dartOutput: 'streams.dart',
        tsOutput: 'streams.ts',
        classes: [
          FlaxCodegenClassModel(
            name: 'Watcher',
            id: 'example.streams/streams#type:Watcher',
            kind: 'object',
            constructors: [FlaxCodegenConstructorModel('', [])],
            supertypes: [],
            methods: [
              FlaxCodegenMethodModel('watch', [], streamType, instance: true),
            ],
          ),
        ],
        types: [
          FlaxCodegenNamedTypeModel(
            name: 'Stream',
            id: streamId,
            typeParameters: [
              FlaxCodegenGenericParameter(
                'T',
                FlaxCodegenTypeRef('any', nullable: true),
              ),
            ],
          ),
        ],
        typeLibraries: {'Stream': 'dart:async'},
      );

      final emitter = FlaxCodegenBindingEmitter([module]);
      final dart = emitter.dart(module);
      final typescript = emitter.typescript(module);

      expect(
        dart,
        contains('stream: FlaxStreamBinding("stream:dart:async::Stream'),
      );
      expect(typescript, contains('interface Stream'));
      expect(typescript, contains('extends FlaxStreamReference<T>'));
      expect(typescript, contains('watch(): Stream<number>'));
      expect(typescript, isNot(contains('defineStream("dart:async::Stream"')));
    });
  });

  group('FlaxCodegenBindingEmitter determinism', () {
    test('repeated dart and typescript calls are byte-identical', () {
      final module = _richModule(
        typeLibraries: {
          'Widget': 'package:flutter/widgets.dart',
          'Element': 'package:flutter/element.dart',
        },
        listenerPairs: {'watch': 'unwatch', 'addListener': 'removeListener'},
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      final dart = emitter.dart(module);
      final typescript = emitter.typescript(module);
      expect(emitter.dart(module), dart);
      expect(emitter.typescript(module), typescript);
      expect(emitter.dart(module), dart);
      expect(emitter.typescript(module), typescript);
    });

    test('emitter module-list permutation leaves target bytes identical', () {
      final core = _coreModule();
      final app = _appModule();
      final forward = FlaxCodegenBindingEmitter([core, app]);
      final reversed = FlaxCodegenBindingEmitter([app, core]);
      expect(forward.dart(app), reversed.dart(app));
      expect(forward.typescript(app), reversed.typescript(app));
      expect(forward.dart(core), reversed.dart(core));
      expect(forward.typescript(core), reversed.typescript(core));
    });

    test('reversed typeLibraries and listenerPairs insertion produce identical bytes', () {
      final forward = _richModule(
        typeLibraries: {
          'Widget': 'package:flutter/widgets.dart',
          'Element': 'package:flutter/element.dart',
        },
        listenerPairs: {'watch': 'unwatch', 'addListener': 'removeListener'},
      );
      final reversed = _richModule(
        typeLibraries: {
          'Element': 'package:flutter/element.dart',
          'Widget': 'package:flutter/widgets.dart',
        },
        listenerPairs: {'addListener': 'removeListener', 'watch': 'unwatch'},
      );
      expect(forward.typeLibraries.keys.toList(), ['Widget', 'Element']);
      expect(reversed.typeLibraries.keys.toList(), ['Element', 'Widget']);
      expect(forward.classes.single.listenerPairs.keys.toList(), [
        'watch',
        'addListener',
      ]);
      expect(reversed.classes.single.listenerPairs.keys.toList(), [
        'addListener',
        'watch',
      ]);

      final forwardEmitter = FlaxCodegenBindingEmitter([forward]);
      final reversedEmitter = FlaxCodegenBindingEmitter([reversed]);
      expect(forwardEmitter.dart(forward), reversedEmitter.dart(reversed));
      expect(
        forwardEmitter.typescript(forward),
        reversedEmitter.typescript(reversed),
      );
    });
  });

  group('TypeScript signature-owner reachability', () {
    test('discovers dependency-only refs from nested TypeRefs, proxy surfaces, and named-type generics', () {
      final modules = _reachabilityModules();
      final local = modules.local;
      final typescript = FlaxCodegenBindingEmitter([local, modules.dependency])
          .typescript(local);

      expect(
        typescript,
        contains("import type * as upstream0 from '@dep/base';"),
      );
      expect(typescript, contains('upstream0.DepNestedDecl'));
      expect(typescript, contains('upstream0.DepNestedGeneric'));
      expect(typescript, contains('upstream0.DepGetter'));
      expect(typescript, contains('upstream0.DepSetter'));
      expect(typescript, contains('upstream0.DepMethodGeneric'));
      expect(typescript, contains('upstream0.DepBound'));
      expect(typescript, contains('upstream0.DepDefault'));
      expect(typescript, isNot(contains('null.DepNestedDecl')));
      expect(typescript, isNot(contains('null.DepNestedGeneric')));
      expect(typescript, isNot(contains('null.DepGetter')));
      expect(typescript, isNot(contains('null.DepSetter')));
      expect(typescript, isNot(contains('null.DepMethodGeneric')));
      expect(typescript, isNot(contains('null.DepBound')));
      expect(typescript, isNot(contains('null.DepDefault')));
    });
  });

  group('TypeScript emission self-containment', () {
    test(
      'raw typescript bytes are identical under changed cwd and empty PATH',
      () async {
        final module = _richModule(
          typeLibraries: {
            'Widget': 'package:flutter/widgets.dart',
            'Element': 'package:flutter/element.dart',
          },
          listenerPairs: {'watch': 'unwatch', 'addListener': 'removeListener'},
        );
        final emitter = FlaxCodegenBindingEmitter([module]);
        final baseline = emitter.typescript(module);
        expect(baseline, isNotEmpty);

        final packageRoot = Directory.current.path;
        final packageConfig = _packageConfigFile(packageRoot);
        expect(
          packageConfig.existsSync(),
          isTrue,
          reason: 'expected package_config near $packageRoot',
        );

        final temp = Directory.systemTemp.createTempSync('flax_emission_');
        addTearDown(() {
          if (temp.existsSync()) {
            temp.deleteSync(recursive: true);
          }
        });

        final probe = File(p.join(temp.path, 'emit_probe.dart'))
          ..writeAsStringSync(_cwdPathProbeSource);
        final output = File(p.join(temp.path, 'emitted.ts'));
        final environment = <String, String>{
          for (final entry in Platform.environment.entries)
            if (!_environmentKeysToDrop.contains(entry.key))
              entry.key: entry.value,
          'PATH': '',
        };
        final result = await Process.run(
          Platform.resolvedExecutable,
          ['--packages=${packageConfig.uri}', 'run', probe.path, output.path],
          workingDirectory: temp.path,
          environment: environment,
        );
        expect(
          result.exitCode,
          0,
          reason: 'probe failed:\n${result.stdout}\n${result.stderr}',
        );
        expect(
          output.readAsStringSync(),
          baseline,
          reason:
              'typescript emission must stay byte-identical with empty PATH '
              'and a non-package working directory',
        );
      },
    );
  });

  group('FlaxCodegenPackagePipeline', () {
    late Directory packageRoot;

    setUp(() {
      packageRoot = Directory.systemTemp.createTempSync('flax_pipeline_pkg_');
    });

    tearDown(() {
      if (packageRoot.existsSync()) {
        packageRoot.deleteSync(recursive: true);
      }
    });

    test(
      'emit is deterministic, immutable, formats Dart only via injected runner',
      () async {
        final left = _pipelineModule(
          name: 'beta',
          dartOutput: 'lib/beta.dart',
          tsOutput: 'js/beta.ts',
          typeId: 'com.example/beta#type:Beta',
        );
        final right = _pipelineModule(
          name: 'alpha',
          dartOutput: 'lib/alpha.dart',
          tsOutput: 'js/alpha.ts',
          typeId: 'com.example/alpha#type:Alpha',
        );
        final formatMarker = '/*formatted*/\n';
        final runnerCalls = <({String executable, List<String> arguments})>[];
        Future<ProcessResult> runner(
          String executable,
          List<String> arguments,
        ) async {
          runnerCalls.add((
            executable: executable,
            arguments: List<String>.from(arguments),
          ));
          expect(executable, Platform.resolvedExecutable);
          expect(arguments.length, 3);
          expect(arguments[0], 'format');
          expect(arguments[1], '--page-width=80');
          final tempPath = arguments[2];
          final file = File(tempPath);
          expect(file.existsSync(), isTrue);
          expect(p.extension(tempPath), '.dart');
          final before = file.readAsStringSync();
          file.writeAsStringSync('$formatMarker$before');
          return ProcessResult(1, 0, '', '');
        }

        final pipeline = FlaxCodegenPackagePipeline(
          packageRoot: packageRoot.path,
          processRunner: runner,
        );
        final first = await pipeline.emit([left, right]);
        expect(runnerCalls, hasLength(2));
        final firstRunnerCalls = List.of(runnerCalls);
        runnerCalls.clear();
        final second = await pipeline.emit([left, right]);
        expect(runnerCalls, hasLength(2));
        runnerCalls.clear();
        final reversed = await pipeline.emit([right, left]);
        expect(runnerCalls, hasLength(2));

        expect(first.keys.toList(), [
          'js/alpha.ts',
          'js/beta.ts',
          'lib/alpha.dart',
          'lib/beta.dart',
        ]);
        expect(second.keys.toList(), first.keys.toList());
        expect(reversed.keys.toList(), first.keys.toList());
        for (final key in first.keys) {
          expect(second[key], first[key]);
          expect(reversed[key], first[key]);
        }

        expect(() => first['extra'] = <int>[], throwsUnsupportedError);
        expect(() => first.values.first.add(0), throwsUnsupportedError);

        expect(firstRunnerCalls.map((call) => call.executable).toSet(), {
          Platform.resolvedExecutable,
        });
        for (final call in firstRunnerCalls) {
          expect(call.arguments[0], 'format');
          expect(call.arguments[1], '--page-width=80');
          expect(call.arguments[2], isNot(contains(packageRoot.path)));
        }
        final dartTempPaths = firstRunnerCalls
            .map((call) => call.arguments[2])
            .toList();
        expect(dartTempPaths.toSet(), hasLength(2));

        final emitter = FlaxCodegenBindingEmitter([left, right]);
        expect(first['js/alpha.ts'], utf8.encode(emitter.typescript(right)));
        expect(first['js/beta.ts'], utf8.encode(emitter.typescript(left)));
        expect(
          first['lib/alpha.dart'],
          utf8.encode('$formatMarker${emitter.dart(right)}'),
        );
        expect(
          first['lib/beta.dart'],
          utf8.encode('$formatMarker${emitter.dart(left)}'),
        );
        expect(
          firstRunnerCalls.every((call) => call.arguments[2].endsWith('.dart')),
          isTrue,
        );
      },
    );

    test('path collisions and illegal paths fail before emitter and runner', () async {
      Future<void> expectPathFailure(
        List<FlaxCodegenModuleModel> modules, {
        required String reason,
        required String expectedMessage,
      }) async {
        final runnerCalls = <Object>[];
        final pipeline = FlaxCodegenPackagePipeline(
          packageRoot: packageRoot.path,
          processRunner: (executable, arguments) async {
            runnerCalls.add([executable, ...arguments]);
            return ProcessResult(1, 0, '', '');
          },
        );
        await expectLater(
          pipeline.emit(modules),
          throwsA(
            isA<StateError>().having(
              (error) => error.message,
              'message',
              allOf(
                expectedMessage,
                isNot(contains('Duplicate class binding')),
                isNot(contains('Duplicate function binding')),
              ),
            ),
          ),
          reason: reason,
        );
        expect(runnerCalls, isEmpty, reason: '$reason: runner must not run');
      }

      const sharedId = 'com.example/clash#type:Clash';
      await expectPathFailure(
        [
          _pipelineModule(
            name: 'same',
            dartOutput: 'lib/same.dart',
            tsOutput: 'lib/same.dart',
            typeId: sharedId,
          ),
          _pipelineModule(
            name: 'other',
            dartOutput: 'lib/other.dart',
            tsOutput: 'js/other.ts',
            typeId: sharedId,
          ),
        ],
        reason: 'same-module dartOutput == tsOutput',
        expectedMessage:
            "Duplicate generated output path 'lib/same.dart' "
            '(same:dartOutput and same:tsOutput).',
      );

      await expectPathFailure(
        [
          _pipelineModule(
            name: 'a',
            dartOutput: 'lib/shared.dart',
            tsOutput: 'js/a.ts',
            typeId: sharedId,
          ),
          _pipelineModule(
            name: 'b',
            dartOutput: './lib/shared.dart',
            tsOutput: 'js/b.ts',
            typeId: sharedId,
          ),
        ],
        reason: 'cross-module normalized path collision',
        expectedMessage:
            "Duplicate generated output path 'lib/shared.dart' "
            '(a:dartOutput and b:dartOutput).',
      );

      final absoluteDart = p.join(packageRoot.path, 'lib', 'abs.dart');
      await expectPathFailure(
        [
          _pipelineModule(
            name: 'abs',
            dartOutput: absoluteDart,
            tsOutput: 'js/abs.ts',
            typeId: sharedId,
          ),
          _pipelineModule(
            name: 'dup',
            dartOutput: 'lib/dup.dart',
            tsOutput: 'js/dup.ts',
            typeId: sharedId,
          ),
        ],
        reason: 'absolute dartOutput',
        expectedMessage:
            "Generated output path must be package-relative: '$absoluteDart'.",
      );

      await expectPathFailure(
        [
          _pipelineModule(
            name: 'empty',
            dartOutput: '',
            tsOutput: 'js/empty.ts',
            typeId: sharedId,
          ),
          _pipelineModule(
            name: 'dup',
            dartOutput: 'lib/dup.dart',
            tsOutput: 'js/dup.ts',
            typeId: sharedId,
          ),
        ],
        reason: 'empty dartOutput',
        expectedMessage: 'Generated output path must not be empty.',
      );

      await expectPathFailure(
        [
          _pipelineModule(
            name: 'dot',
            dartOutput: '.',
            tsOutput: 'js/dot.ts',
            typeId: sharedId,
          ),
          _pipelineModule(
            name: 'dup',
            dartOutput: 'lib/dup.dart',
            tsOutput: 'js/dup.ts',
            typeId: sharedId,
          ),
        ],
        reason: 'current-directory dartOutput',
        expectedMessage:
            "Generated output path must not be the current directory: '.'.",
      );

      await expectPathFailure(
        [
          _pipelineModule(
            name: 'escape',
            dartOutput: '../outside.dart',
            tsOutput: 'js/escape.ts',
            typeId: sharedId,
          ),
          _pipelineModule(
            name: 'dup',
            dartOutput: 'lib/dup.dart',
            tsOutput: 'js/dup.ts',
            typeId: sharedId,
          ),
        ],
        reason: 'escaping package-relative dartOutput',
        expectedMessage: "Generated output path escapes the package root: '../outside.dart'.",
      );
    });

    test(
      'same module.name path collision message is stable across input order',
      () async {
        final left = _pipelineModule(
          name: 'same',
          library: 'package:example/left.dart',
          jsPackage: '@example/left',
          dartOutput: 'lib/shared.dart',
          tsOutput: 'js/left.ts',
          typeName: 'Left',
          typeId: 'com.example/left#type:Left',
        );
        final right = _pipelineModule(
          name: 'same',
          library: 'package:example/right.dart',
          jsPackage: '@example/right',
          dartOutput: 'lib/right.dart',
          tsOutput: './lib/shared.dart',
          typeName: 'Right',
          typeId: 'com.example/right#type:Right',
        );
        expect(left.name, right.name);
        expect(left.library, isNot(right.library));
        expect(left.classes.single.id, isNot(right.classes.single.id));
        expect(left.dartOutput, isNot(right.dartOutput));
        expect(left.tsOutput, isNot(right.tsOutput));
        expect(p.normalize(left.dartOutput), p.normalize(right.tsOutput));

        const expectedMessage =
            "Duplicate generated output path 'lib/shared.dart' "
            '(same:dartOutput and same:tsOutput).';

        Future<String> expectCollision(
          List<FlaxCodegenModuleModel> modules,
        ) async {
          final runnerCalls = <Object>[];
          final pipeline = FlaxCodegenPackagePipeline(
            packageRoot: packageRoot.path,
            processRunner: (executable, arguments) async {
              runnerCalls.add([executable, ...arguments]);
              return ProcessResult(1, 0, '', '');
            },
          );
          Object? caught;
          try {
            await pipeline.emit(modules);
          } catch (error) {
            caught = error;
          }
          expect(caught, isA<StateError>());
          final message = (caught! as StateError).message;
          expect(message, expectedMessage);
          expect(message, isNot(contains('Duplicate class binding')));
          expect(message, isNot(contains('Duplicate function binding')));
          expect(runnerCalls, isEmpty);
          return message;
        }

        final forward = await expectCollision([left, right]);
        final reversed = await expectCollision([right, left]);
        expect(reversed, forward);
      },
    );

    test(
      'formatter start and nonzero failures aggregate in sorted package paths',
      () async {
        final alpha = _pipelineModule(
          name: 'alpha',
          dartOutput: 'lib/alpha.dart',
          tsOutput: 'js/alpha.ts',
          typeId: 'com.example/alpha#type:Alpha',
        );
        final beta = _pipelineModule(
          name: 'beta',
          dartOutput: 'lib/beta.dart',
          tsOutput: 'js/beta.ts',
          typeId: 'com.example/beta#type:Beta',
        );
        final gamma = _pipelineModule(
          name: 'gamma',
          dartOutput: 'lib/gamma.dart',
          tsOutput: 'js/gamma.ts',
          typeId: 'com.example/gamma#type:Gamma',
        );

        Future<void> expectAggregatedFailure(
          Future<ProcessResult> Function(String, List<String>) runner, {
          required String expectedMessage,
        }) async {
          final pipeline = FlaxCodegenPackagePipeline(
            packageRoot: packageRoot.path,
            processRunner: runner,
          );
          Object? caught;
          try {
            await pipeline.emit([gamma, alpha, beta]);
          } catch (error) {
            caught = error;
          }
          expect(caught, isA<StateError>());
          final message = (caught! as StateError).message;
          expect(message, expectedMessage);
          expect(message, isNot(contains(Directory.systemTemp.path)));
          expect(message, isNot(contains(packageRoot.path)));
          expect(message, isNot(contains(Directory.current.path)));
          expect(message, isNot(contains('beta-out')));
          expect(message, isNot(contains('beta-err')));
          expect(message, isNot(contains('gamma-out')));
          expect(message, isNot(contains('gamma-err')));
        }

        var callIndex = 0;
        await expectAggregatedFailure(
          (executable, arguments) async {
            final packagePath = [
              'lib/alpha.dart',
              'lib/beta.dart',
              'lib/gamma.dart',
            ][callIndex++];
            expect(arguments[0], 'format');
            expect(arguments[1], '--page-width=80');
            if (packagePath == 'lib/alpha.dart') {
              throw ProcessException(executable, arguments, 'start failed', 1);
            }
            if (packagePath == 'lib/beta.dart') {
              return ProcessResult(1, 7, 'beta-out', 'beta-err');
            }
            return ProcessResult(1, 3, 'gamma-out', 'gamma-err');
          },
          expectedMessage: [
            "Formatting failed to start for 'lib/alpha.dart': start failed.",
            "Formatting failed for 'lib/beta.dart' (exit code 7).",
            "Formatting failed for 'lib/gamma.dart' (exit code 3).",
          ].join('\n'),
        );

        callIndex = 0;
        await expectAggregatedFailure(
          (executable, arguments) async {
            callIndex++;
            throw ProcessException(executable, arguments, 'cannot start', 2);
          },
          expectedMessage: [
            "Formatting failed to start for 'lib/alpha.dart': cannot start.",
            "Formatting failed to start for 'lib/beta.dart': cannot start.",
            "Formatting failed to start for 'lib/gamma.dart': cannot start.",
          ].join('\n'),
        );
        expect(callIndex, 3);
      },
    );

    test(
      'same module.name with distinct libraries and outputs emits each path',
      () async {
        final left = _pipelineModule(
          name: 'shared',
          library: 'package:example/left.dart',
          jsPackage: '@example/left',
          dartOutput: 'lib/left.dart',
          tsOutput: 'js/left.ts',
          typeName: 'Left',
          typeId: 'com.example/left#type:Left',
        );
        final right = _pipelineModule(
          name: 'shared',
          library: 'package:example/right.dart',
          jsPackage: '@example/right',
          dartOutput: 'lib/right.dart',
          tsOutput: 'js/right.ts',
          typeName: 'Right',
          typeId: 'com.example/right#type:Right',
        );
        expect(left.name, right.name);
        expect(left.library, isNot(right.library));
        expect(left.dartOutput, isNot(right.dartOutput));
        expect(left.tsOutput, isNot(right.tsOutput));
        expect(left.classes.single.id, isNot(right.classes.single.id));

        final pipeline = FlaxCodegenPackagePipeline(
          packageRoot: packageRoot.path,
          processRunner: (executable, arguments) async {
            expect(executable, Platform.resolvedExecutable);
            expect(arguments.take(2), ['format', '--page-width=80']);
            return ProcessResult(1, 0, '', '');
          },
        );

        final forward = await pipeline.emit([left, right]);
        final reversed = await pipeline.emit([right, left]);
        expect(forward.keys.toList(), [
          'js/left.ts',
          'js/right.ts',
          'lib/left.dart',
          'lib/right.dart',
        ]);
        expect(reversed.keys.toList(), forward.keys.toList());

        final emitter = FlaxCodegenBindingEmitter([left, right]);
        expect(forward['lib/left.dart'], utf8.encode(emitter.dart(left)));
        expect(forward['lib/right.dart'], utf8.encode(emitter.dart(right)));
        expect(forward['js/left.ts'], utf8.encode(emitter.typescript(left)));
        expect(forward['js/right.ts'], utf8.encode(emitter.typescript(right)));
        expect(
          utf8.decode(forward['lib/left.dart']!),
          isNot(utf8.decode(forward['lib/right.dart']!)),
        );
        expect(
          utf8.decode(forward['js/left.ts']!),
          isNot(utf8.decode(forward['js/right.ts']!)),
        );
        for (final key in forward.keys) {
          expect(reversed[key], forward[key]);
        }
      },
    );

    test('successful formatting stages temps and leaves no caller-visible mutation', () async {
      final module = _pipelineModule(
        name: 'solo',
        dartOutput: 'lib/solo.dart',
        tsOutput: 'js/solo.ts',
        typeId: 'com.example/solo#type:Solo',
      );
      final originalDartOutput = module.dartOutput;
      final originalTsOutput = module.tsOutput;
      final beforeListing =
          packageRoot
              .listSync(recursive: true)
              .map((entity) => entity.path)
              .toList()
            ..sort();
      final staged = <String>[];
      final pipeline = FlaxCodegenPackagePipeline(
        packageRoot: packageRoot.path,
        processRunner: (executable, arguments) async {
          expect(executable, Platform.resolvedExecutable);
          expect(arguments, ['format', '--page-width=80', arguments[2]]);
          staged.add(arguments[2]);
          final file = File(arguments[2]);
          expect(file.existsSync(), isTrue);
          expect(
            p.isWithin(packageRoot.path, p.normalize(file.absolute.path)),
            isFalse,
            reason: 'formatter temp must be staged outside package root',
          );
          file.writeAsStringSync('x${file.readAsStringSync()}');
          return ProcessResult(1, 0, '', '');
        },
      );

      final emitted = await pipeline.emit([module]);
      expect(emitted.keys.toList(), ['js/solo.ts', 'lib/solo.dart']);
      expect(module.dartOutput, originalDartOutput);
      expect(module.tsOutput, originalTsOutput);
      final afterListing =
          packageRoot
              .listSync(recursive: true)
              .map((entity) => entity.path)
              .toList()
            ..sort();
      expect(afterListing, beforeListing);
      expect(staged, hasLength(1));
      expect(File(staged.single).existsSync(), isFalse);
    });
  });
}

/// Keys that could point a subprocess at Node/pnpm/Prettier tooling.
const _environmentKeysToDrop = {
  'PATH',
  'NODE',
  'NODE_PATH',
  'NPM_CONFIG_USERCONFIG',
  'NPM_CONFIG_PREFIX',
  'PNPM_HOME',
  'PNPM_SCRIPT_SRC_DIR',
  'BUN_INSTALL',
  'COREPACK_ROOT',
};

File _packageConfigFile(String from) {
  var directory = Directory(from);
  while (true) {
    final candidate = File(
      p.join(directory.path, '.dart_tool', 'package_config.json'),
    );
    if (candidate.existsSync()) return candidate;
    final parent = directory.parent;
    if (parent.path == directory.path) {
      return File(p.join(from, '.dart_tool', 'package_config.json'));
    }
    directory = parent;
  }
}

/// Standalone probe: same fixture as [_richModule], writes typescript bytes.
const _cwdPathProbeSource = r'''
import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';

void main(List<String> args) {
  const intType = FlaxCodegenTypeRef('int');
  const voidType = FlaxCodegenTypeRef('void');
  final module = FlaxCodegenModuleModel(
    name: 'widgets',
    library: 'package:acme_widgets/widgets.dart',
    jsPackage: '@acme/widgets',
    dartOutput: 'widgets.dart',
    tsOutput: 'widgets.ts',
    classes: [
      FlaxCodegenClassModel(
        name: 'Gauge',
        id: 'com.acme.widgets/widgets#type:Gauge',
        kind: 'object',
        constructors: [
          FlaxCodegenConstructorModel('named', [
            FlaxCodegenParameterModel(
              name: 'value',
              type: intType,
              required: true,
              positional: false,
              defaultCode: '0',
            ),
          ]),
        ],
        supertypes: const [],
        getters: const [FlaxCodegenGetterModel('value', intType)],
        setters: const [FlaxCodegenGetterModel('value', intType)],
        methods: [
          FlaxCodegenMethodModel('run', [
            FlaxCodegenParameterModel(
              name: 'value',
              type: intType,
              required: true,
              positional: true,
              defaultCode: '0',
            ),
          ], voidType),
        ],
        disposeMethod: 'dispose',
        listenerPairs: {
          'watch': 'unwatch',
          'addListener': 'removeListener',
        },
        staticGetters: const [FlaxCodegenGetterModel('zero', intType)],
      ),
    ],
    types: const [
      FlaxCodegenNamedTypeModel(
        name: 'Axis',
        id: 'com.acme.widgets/widgets#type:Axis',
        enumNames: ['horizontal', 'vertical'],
      ),
    ],
    typeLibraries: {
      'Widget': 'package:flutter/widgets.dart',
      'Element': 'package:flutter/element.dart',
    },
    functions: [
      FlaxCodegenFunctionModel(
        'com.acme.widgets/widgets#function:show',
        FlaxCodegenMethodModel('show', [
          FlaxCodegenParameterModel(
            name: 'value',
            type: intType,
            required: true,
            positional: true,
            defaultCode: '0',
          ),
        ], voidType),
      ),
    ],
    snapshots: const [
      FlaxCodegenSnapshotModel(
        name: 'Scroll',
        id: 'com.acme.widgets/widgets#type:Scroll',
        fields: [
          FlaxCodegenSnapshotFieldModel(
            name: 'dx',
            kind: 'double',
            nullable: true,
          ),
        ],
      ),
    ],
  );
  final typescript = FlaxCodegenBindingEmitter([module]).typescript(module);
  File(args.single).writeAsStringSync(typescript);
}
''';

FlaxCodegenModuleModel _pipelineModule({
  required String name,
  required String dartOutput,
  required String tsOutput,
  required String typeId,
  String? library,
  String? jsPackage,
  String? typeName,
}) {
  final resolvedTypeName =
      typeName ?? (name[0].toUpperCase() + name.substring(1));
  return FlaxCodegenModuleModel(
    name: name,
    library: library ?? 'package:example/$name.dart',
    jsPackage: jsPackage ?? '@example/$name',
    dartOutput: dartOutput,
    tsOutput: tsOutput,
    classes: [
      FlaxCodegenClassModel(
        name: resolvedTypeName,
        id: typeId,
        kind: 'object',
        constructors: const [],
        supertypes: const [],
        getters: const [
          FlaxCodegenGetterModel('id', FlaxCodegenTypeRef('int')),
        ],
      ),
    ],
    types: const [],
  );
}

FlaxCodegenModuleModel _richModule({
  required Map<String, String> typeLibraries,
  required Map<String, String> listenerPairs,
}) {
  const intType = FlaxCodegenTypeRef('int');
  const voidType = FlaxCodegenTypeRef('void');
  return FlaxCodegenModuleModel(
    name: 'widgets',
    library: 'package:acme_widgets/widgets.dart',
    jsPackage: '@acme/widgets',
    dartOutput: 'widgets.dart',
    tsOutput: 'widgets.ts',
    classes: [
      FlaxCodegenClassModel(
        name: 'Gauge',
        id: 'com.acme.widgets/widgets#type:Gauge',
        kind: 'object',
        constructors: [
          FlaxCodegenConstructorModel('named', [
            FlaxCodegenParameterModel(
              name: 'value',
              type: intType,
              required: true,
              positional: false,
              defaultCode: '0',
            ),
          ]),
        ],
        supertypes: const [],
        getters: const [FlaxCodegenGetterModel('value', intType)],
        setters: const [FlaxCodegenGetterModel('value', intType)],
        methods: [
          FlaxCodegenMethodModel('run', [
            FlaxCodegenParameterModel(
              name: 'value',
              type: intType,
              required: true,
              positional: true,
              defaultCode: '0',
            ),
          ], voidType),
        ],
        disposeMethod: 'dispose',
        listenerPairs: listenerPairs,
        staticGetters: const [FlaxCodegenGetterModel('zero', intType)],
      ),
    ],
    types: const [
      FlaxCodegenNamedTypeModel(
        name: 'Axis',
        id: 'com.acme.widgets/widgets#type:Axis',
        enumNames: ['horizontal', 'vertical'],
      ),
    ],
    typeLibraries: typeLibraries,
    functions: [
      FlaxCodegenFunctionModel(
        'com.acme.widgets/widgets#function:show',
        FlaxCodegenMethodModel('show', [
          FlaxCodegenParameterModel(
            name: 'value',
            type: intType,
            required: true,
            positional: true,
            defaultCode: '0',
          ),
        ], voidType),
      ),
    ],
    snapshots: const [
      FlaxCodegenSnapshotModel(
        name: 'Scroll',
        id: 'com.acme.widgets/widgets#type:Scroll',
        fields: [
          FlaxCodegenSnapshotFieldModel(
            name: 'dx',
            kind: 'double',
            nullable: true,
          ),
        ],
      ),
    ],
  );
}

FlaxCodegenModuleModel _coreModule() => const FlaxCodegenModuleModel(
  name: 'core',
  library: 'package:acme_core/core.dart',
  jsPackage: '@acme/core',
  dartOutput: 'core.dart',
  tsOutput: 'core.ts',
  classes: [
    FlaxCodegenClassModel(
      name: 'Token',
      id: 'com.acme.core/core#type:Token',
      kind: 'object',
      constructors: [],
      supertypes: [],
      getters: [FlaxCodegenGetterModel('id', FlaxCodegenTypeRef('int'))],
    ),
  ],
  types: [
    FlaxCodegenNamedTypeModel(
      name: 'Token',
      id: 'com.acme.core/core#type:Token',
    ),
  ],
);

({FlaxCodegenModuleModel dependency, FlaxCodegenModuleModel local})
_reachabilityModules() {
  FlaxCodegenTypeRef dep(String name) => FlaxCodegenTypeRef(
    'object',
    id: 'example.dep/base#type:$name',
    name: name,
  );
  FlaxCodegenClassModel depClass(String name) => FlaxCodegenClassModel(
    name: name,
    id: 'example.dep/base#type:$name',
    kind: 'object',
    constructors: const [],
    supertypes: const [],
    getters: const [FlaxCodegenGetterModel('id', FlaxCodegenTypeRef('int'))],
  );

  const voidType = FlaxCodegenTypeRef('void');
  const localBoxId = 'example.host/child#type:LocalBox';
  final dependency = FlaxCodegenModuleModel(
    name: 'base',
    library: 'package:dep_pkg/base.dart',
    jsPackage: '@dep/base',
    dartOutput: 'lib/base.g.dart',
    tsOutput: 'js/base.ts',
    classes: [
      for (final name in [
        'DepNestedDecl',
        'DepNestedGeneric',
        'DepGetter',
        'DepSetter',
        'DepMethodGeneric',
        'DepBound',
        'DepDefault',
      ])
        depClass(name),
    ],
    types: const [],
  );

  final local = FlaxCodegenModuleModel(
    name: 'child',
    library: 'package:host_pkg/child.dart',
    jsPackage: '@host/child',
    dartOutput: 'lib/child.g.dart',
    tsOutput: 'js/child.ts',
    classes: [
      FlaxCodegenClassModel(
        name: 'Host',
        id: 'example.host/child#type:Host',
        kind: 'object',
        constructors: const [FlaxCodegenConstructorModel('', [])],
        methods: [
          FlaxCodegenMethodModel(
            'listen',
            [
              FlaxCodegenParameterModel(
                name: 'handler',
                type: FlaxCodegenTypeRef(
                  'callback',
                  parameters: [
                    FlaxCodegenParameterModel(
                      name: 'genericPayload',
                      type: FlaxCodegenTypeRef(
                        'callback',
                        parameters: const [],
                        result: voidType,
                        typeParameters: [
                          FlaxCodegenGenericParameter(
                            'X',
                            dep('DepNestedGeneric'),
                          ),
                        ],
                      ),
                      required: true,
                      positional: true,
                      defaultCode: 'null',
                    ),
                    FlaxCodegenParameterModel(
                      name: 'declaredPayload',
                      type: FlaxCodegenTypeRef(
                        'any',
                        declaration: dep('DepNestedDecl'),
                      ),
                      required: true,
                      positional: true,
                      defaultCode: 'null',
                    ),
                  ],
                  result: voidType,
                ),
                required: true,
                positional: true,
                defaultCode: 'null',
              ),
            ],
            voidType,
            instance: true,
          ),
        ],
        proxy: FlaxCodegenProxyModel(
          'implements',
          [
            FlaxCodegenMethodModel(
              'run',
              const [],
              voidType,
              typeParameters: [
                FlaxCodegenGenericParameter('T', dep('DepMethodGeneric')),
              ],
            ),
          ],
          getters: [FlaxCodegenGetterModel('label', dep('DepGetter'))],
          setters: [FlaxCodegenGetterModel('label', dep('DepSetter'))],
        ),
        supertypes: const [],
      ),
      const FlaxCodegenClassModel(
        name: 'LocalBoxValue',
        id: 'example.host/child#type:LocalBoxValue',
        kind: 'object',
        constructors: [],
        supertypes: [localBoxId],
      ),
    ],
    types: [
      FlaxCodegenNamedTypeModel(
        name: 'LocalBox',
        id: localBoxId,
        typeParameters: [
          FlaxCodegenGenericParameter(
            'T',
            dep('DepBound'),
            defaultType: dep('DepDefault'),
          ),
        ],
      ),
    ],
  );
  return (dependency: dependency, local: local);
}

FlaxCodegenModuleModel _appModule() {
  const token = FlaxCodegenTypeRef(
    'object',
    id: 'com.acme.core/core#type:Token',
    name: 'Token',
  );
  return FlaxCodegenModuleModel(
    name: 'app',
    library: 'package:acme_app/app.dart',
    jsPackage: '@acme/app',
    dartOutput: 'app.dart',
    tsOutput: 'app.ts',
    classes: [
      FlaxCodegenClassModel(
        name: 'Root',
        id: 'com.acme.app/app#type:Root',
        kind: 'object',
        constructors: [
          FlaxCodegenConstructorModel('', [
            FlaxCodegenParameterModel(
              name: 'token',
              type: token,
              required: true,
              positional: false,
              defaultCode: 'null',
            ),
          ]),
        ],
        supertypes: const [],
      ),
    ],
    types: const [
      FlaxCodegenNamedTypeModel(
        name: 'Token',
        id: 'com.acme.core/core#type:Token',
      ),
    ],
  );
}
