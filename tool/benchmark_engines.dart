import 'dart:convert';
import 'dart:io';
import 'dart:math';

import 'package:crypto/crypto.dart';

import '../benchmarks/engines/support.dart';
import 'src/package_discovery.dart';
import 'src/package_verification.dart';
import 'src/process.dart';

Future<void> main(List<String> arguments) => command(() async {
  final root = Directory.fromUri(Platform.script.resolve('../'));
  final availableEngines = discoverEngineIds(root.path);
  if (availableEngines.isEmpty) throw StateError('No engine packages found');
  final options = <String, String>{};
  var smoke = false;
  for (final argument in arguments) {
    if (argument == '--help') {
      stdout.writeln(
        'Usage: dart run tool/benchmark_engines.dart [--smoke] '
        '[--engine=${availableEngines.join('|')}|all] [--case=NAME] '
        '[--size=small|medium|large|all] [--output=DIRECTORY]\n'
        'Cases: ${scenarios.join(', ')}',
      );
      return;
    }
    if (argument == '--smoke') {
      smoke = true;
      continue;
    }
    final match = RegExp(r'^--(engine|case|size|output)=(.+)$')
        .firstMatch(argument);
    if (match == null || options.containsKey(match[1])) {
      throw ArgumentError('Invalid or duplicate option: $argument');
    }
    options[match[1]!] = match[2]!;
  }
  final engine = options['engine'] ?? 'all';
  final size = options['size'] ?? (smoke ? 'small' : 'all');
  final selectedCase = options['case'];
  if (!(engine == 'all' || availableEngines.contains(engine)) ||
      ![...sizes, 'all'].contains(size) ||
      (selectedCase != null && !scenarios.contains(selectedCase))) {
    throw ArgumentError('Invalid engine, size or case; use --help');
  }
  if (smoke && size != 'small') {
    throw ArgumentError('Smoke mode uses small inputs');
  }
  if (!Platform.isMacOS ||
      (await capture('uname', ['-m'])).output.trim() != 'arm64') {
    throw UnsupportedError('Benchmarks require macOS arm64');
  }
  final engines = engine == 'all' ? availableEngines : [engine];
  final output = Directory(
    options['output'] ??
        '${root.path}/build/benchmarks/engines/${smoke ? 'smoke' : 'full'}',
  )..createSync(recursive: true);
  if (File('${output.path}/results.json').existsSync()) {
    throw StateError(
      'Report already exists; choose a new --output directory: ${output.path}',
    );
  }
  final temporary = Directory.systemTemp.createTempSync('flax-benchmark-');
  final environment = Map<String, String>.from(Platform.environment)
    ..removeWhere(
      (key, _) =>
          key.startsWith('DYLD_') ||
          key == 'LD_LIBRARY_PATH' ||
          key == 'NODE_PATH' ||
          key.startsWith('FLAX_VERIFY_'),
    );
  final combinationsToRun = combinations(
    selectedCase == null ? scenarios : [selectedCase],
    size == 'all' ? sizes : [size],
  );
  final repetitions = smoke ? 1 : 10;
  final samples = <Map<String, Object?>>[];
  final failures = <Map<String, Object?>>[];
  final calibration = <String, Object?>{};
  final metadata = <String, Object?>{
    'hostMode': 'Dart AOT',
    'seed': inputSeed,
    'engines': engines,
    'cases': selectedCase == null ? scenarios : [selectedCase],
    'sizes': size == 'all' ? sizes : [size],
    'repeats': repetitions,
    'warmup': {'minimum': 15, 'maximum': 50, 'window': 5, 'tolerance': 0.05},
    'measurementBatches': smoke ? 1 : 20,
    'targetBatchUs': 20000,
    'slowestBatchTargetUs': 250000,
    'timeoutSeconds': 120,
    'timeLimitSeconds': 3600,
    'smokeHasNoPerformanceInference': smoke,
  };
  final report = <String, Object?>{
    'schemaVersion': 1,
    'mode': smoke ? 'smoke' : 'full',
    'startedAt': DateTime.now().toUtc().toIso8601String(),
    'metadata': metadata,
    'expectedSamples': combinationsToRun.length * engines.length * repetitions,
    'samples': samples,
    'failures': failures,
    'calibration': calibration,
    'complete': false,
    'elapsedSeconds': 0,
  };
  final watch = Stopwatch();
  final template = File('${root.path}/benchmarks/engines/report.html')
      .readAsStringSync();
  void save({bool summary = false}) {
    report['elapsedSeconds'] = watch.elapsedMilliseconds / 1000;
    report['complete'] = completeRun(
      report['expectedSamples']! as int,
      samples,
      failures,
    );
    report['summary'] = summary ? summarize(samples, smoke: smoke) : <Object>[];
    final json = jsonEncode(report);
    final jsonFile = File('${output.path}/results.json.tmp')
      ..writeAsStringSync(json);
    jsonFile.renameSync('${output.path}/results.json');
    final htmlFile = File('${output.path}/report.html.tmp')
      ..writeAsStringSync(
        template.replaceFirst(
          '__FLAX_REPORT_DATA__',
          json.replaceAll('<', r'\u003c'),
        ),
      );
    htmlFile.renameSync('${output.path}/report.html');
  }

  String digest(File file) => sha256.convert(file.readAsBytesSync()).toString();
  Future<String> info(String executable, List<String> args) async =>
      (await capture(executable, args, directory: root.path)).output.trim();
  try {
    metadata['gitRevision'] = await info('git', ['rev-parse', 'HEAD']);
    metadata['gitStatus'] = await info('git', ['status', '--porcelain']);
    metadata['dart'] = Platform.version;
    metadata['os'] = await info('sw_vers', []);
    metadata['cpu'] = await info('sysctl', ['-n', 'machdep.cpu.brand_string']);
    metadata['physicalMemoryBytes'] = await info('sysctl', [
      '-n',
      'hw.memsize',
    ]);
    metadata['logicalCpus'] = Platform.numberOfProcessors;
    metadata['power'] = await info('pmset', ['-g', 'batt']);
    metadata['loadAtPreparation'] = await info('sysctl', ['-n', 'vm.loadavg']);
    metadata['assets'] = {
      for (final name in engines)
        name: {
          ...jsonDecode(
            File(
              '${root.path}/packages/flax_engine_$name/native/generated/macos_arm64/manifest.json',
            ).readAsStringSync(),
          ) as Map<String, dynamic>,
          'actualSha256': digest(
            File(
              '${root.path}/packages/flax_engine_$name/native/generated/macos_arm64/libflax_$name.dylib',
            ),
          ),
          'libraryBytes': File(
            '${root.path}/packages/flax_engine_$name/native/generated/macos_arm64/libflax_$name.dylib',
          ).lengthSync(),
        },
    };
    metadata['inputHashes'] = {
      for (final name in [
        'benchmarks/engines/cases.js',
        'benchmarks/engines/runner.dart',
        'benchmarks/engines/support.dart',
        'tool/benchmark_engines.dart',
        'pnpm-lock.yaml',
        'pubspec.lock',
      ])
        name: digest(File('${root.path}/$name')),
    };
    copyDartPackages(root, temporary, [
      'flax',
      for (final name in engines) 'flax_engine_$name',
    ]);
    final consumer = Directory('${temporary.path}/consumer')..createSync();
    File('${consumer.path}/pubspec.yaml').writeAsStringSync(
      jsonEncode({
        'name': 'flax_engine_benchmark',
        'publish_to': 'none',
        'environment': {'sdk': '^3.13.2'},
        'dependencies': {
          for (final name in [
            'flax',
            for (final engine in engines) 'flax_engine_$engine',
          ])
            name: {'path': '../$name'},
        },
      }),
    );
    for (final name in ['runner.dart', 'support.dart', 'cases.js']) {
      File('${root.path}/benchmarks/engines/$name')
          .copySync('${consumer.path}/$name');
    }
    final runner = File('${consumer.path}/runner.dart');
    runner.writeAsStringSync(
      runner
          .readAsStringSync()
          .replaceFirst(
            '// __FLAX_ENGINE_IMPORTS__',
            engines
                .map(
                  (name) =>
                      "import 'package:flax_engine_$name/flax_engine_$name.dart';",
                )
                .join('\n'),
          )
          .replaceFirst(
            '    // __FLAX_ENGINE_FACTORIES__',
            engines
                .map(
                  (name) =>
                      "    '$name': ${engineFactoryClass(root.path, name)}.createRuntime,",
                )
                .join('\n'),
          ),
    );
    File('${root.path}/pubspec.lock').copySync('${consumer.path}/pubspec.lock');
    await run(
      'flutter',
      ['pub', 'get', '--offline'],
      directory: consumer.path,
      environment: environment,
      inheritEnvironment: false,
    );
    await run('node', [
      '--input-type=module',
      '-e',
      '''
import {build} from 'esbuild';
await build({stdin:{contents:"export * from './packages/flax/js/src/runtime/index.ts'; export {Text,Column} from './packages/flax/js/src/flutter/index.ts';",resolveDir:process.cwd()},alias:{'@flax/core/bindings':process.cwd()+'/packages/flax/js/src/runtime/bindings.ts','@flax/core':process.cwd()+'/packages/flax/js/src/runtime/index.ts'},bundle:true,format:'iife',globalName:'FlaxBench',outfile:${jsonEncode('${consumer.path}/bundle.js')}});
''',
    ], directory: root.path);
    metadata['consumerLockSha256'] = digest(
      File('${consumer.path}/pubspec.lock'),
    );
    metadata['bundleSha256'] = digest(File('${consumer.path}/bundle.js'));
    metadata['bundleBytes'] = File('${consumer.path}/bundle.js').lengthSync();
    await run(
      Platform.resolvedExecutable,
      [
        'build',
        'cli',
        '--target',
        'runner.dart',
        '--output',
        'build/benchmark',
      ],
      directory: consumer.path,
      environment: environment,
      inheritEnvironment: false,
    );
    final executable = Directory('${consumer.path}/build/benchmark/bundle/bin')
        .listSync()
        .whereType<File>()
        .single;
    metadata['hostExecutableSha256'] = digest(executable);
    final jitProofs = <String, Object?>{};
    for (final name in engines) {
      final verification = engineJitVerification(root.path, name);
      if (verification == null) continue;
      final proof = await capture(
        executable.path,
        [name, 'jit-proof'],
        directory: consumer.path,
        environment: {...environment, verification.environment: '1'},
      );
      if (!'${proof.output}\n${proof.error}'.contains(verification.marker)) {
        throw StateError('$name JIT machine-code proof missing');
      }
      jitProofs[name] = 'Machine code observed in a separate process';
    }
    if (jitProofs.isNotEmpty) metadata['jitProofs'] = jitProofs;
    metadata['loadAtMeasurement'] = await info('sysctl', ['-n', 'vm.loadavg']);
    watch.start();
    Future<Map<String, Object?>> sample(
      String name,
      String scenario,
      String size,
      int count,
      String mode,
    ) async {
      if (watch.elapsed >= const Duration(hours: 1)) {
        report['stopReason'] = '60 minute measurement budget reached';
        throw StateError('Measurement budget exhausted');
      }
      final result = await capture(
        executable.path,
        [name, scenario, size, '$count', mode],
        directory: consumer.path,
        environment: environment,
      );
      return decodeSample(result.output);
    }

    var pair = 0;
    var lastProgress = 0;
    for (final combo in combinationsToRun) {
      if (watch.elapsed >= const Duration(hours: 1)) {
        report['stopReason'] = '60 minute measurement budget reached';
        break;
      }
      final key = '${combo.name}/${combo.size}';
      var count = 1;
      if (!smoke && !combo.name.startsWith('memory.')) {
        final pilots = <Map<String, Object?>>[];
        try {
          // Two independent rounds account for batching overhead without contaminating measured processes.
          for (var round = 0; round < 2; round++) {
            final durations = <double>[];
            for (final name in engineOrder(engines, pair + round)) {
              final pilot = await sample(
                name,
                combo.name,
                combo.size,
                count,
                'pilot',
              );
              pilots.add({'engine': name, ...pilot});
              durations.add(
                median([
                      for (final batch
                          in pilot['measurements'] as List<dynamic>)
                        ((batch as Map<String, dynamic>)['totalUs'] as num)
                            .toDouble(),
                    ]) /
                    count,
              );
            }
            var cap = min(10000, 1000000 ~/ elements(combo.size));
            if (combo.name == 'promise') {
              cap = max(1, 100000 ~/ elements(combo.size));
            }
            if (combo.name == 'bundle' || combo.name == 'lifecycle') cap = 100;
            if (combo.name.contains('string') ||
                combo.name.contains('bytes') ||
                combo.name.startsWith('json.')) {
              cap = min(cap, max(1, 67108864 ~/ byteCount(combo.size)));
            }
            count = calibratedRepeats(durations, cap);
          }
          calibration[key] = {'batchRepeats': count, 'pilots': pilots};
        } catch (error) {
          failures.add({
            'case': combo.name,
            'size': combo.size,
            'phase': 'calibration',
            'error': '$error',
          });
          save();
          continue;
        }
      }
      for (var repeat = 0; repeat < repetitions; repeat++, pair++) {
        if (watch.elapsed >= const Duration(hours: 1)) {
          report['stopReason'] = '60 minute measurement budget reached';
          break;
        }
        for (final name in engineOrder(engines, pair)) {
          if (watch.elapsed >= const Duration(hours: 1)) break;
          try {
            final value = await sample(
              name,
              combo.name,
              combo.size,
              count,
              smoke ? 'smoke' : 'full',
            );
            samples.add({
              'engine': name,
              'case': combo.name,
              'size': combo.size,
              'repeat': repeat,
              'pair': pair,
              ...value,
            });
          } catch (error) {
            failures.add({
              'engine': name,
              'case': combo.name,
              'size': combo.size,
              'repeat': repeat,
              'phase': 'measurement',
              'error': '$error',
            });
          }
          if (watch.elapsed.inSeconds - lastProgress >= 20 || smoke) {
            stdout.writeln(
              '${samples.length}/${report['expectedSamples']} samples; ${failures.length} failures; ${watch.elapsed.inSeconds}s; $key $name',
            );
            lastProgress = watch.elapsed.inSeconds;
          }
        }
        save();
      }
    }
    if (!completeRun(report['expectedSamples']! as int, samples, failures)) {
      exitCode = 1;
    }
  } catch (error) {
    failures.add({'phase': 'preparation', 'error': '$error'});
    exitCode = 1;
    stderr.writeln(error);
  } finally {
    save(summary: true);
    temporary.deleteSync(recursive: true);
    stdout.writeln('Report: ${output.absolute.path}/report.html');
  }
});
