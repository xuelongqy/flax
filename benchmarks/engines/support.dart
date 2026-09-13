import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:math';

const inputSeed = 1729;
const scenarios = [
  'lifecycle',
  'source',
  'bundle',
  'number.integer',
  'number.float',
  'array.traverse',
  'array.map',
  'array.sort',
  'object.properties',
  'collection.map-set',
  'string.transform',
  'json.parse',
  'json.stringify',
  'function.plain',
  'function.closure',
  'function.higher-order',
  'promise',
  'allocation',
  'bridge.dart-js-number',
  'bridge.dart-js-string',
  'bridge.dart-js-object',
  'bridge.dart-js-bytes',
  'bridge.js-dart-number',
  'bridge.js-dart-string',
  'bridge.js-dart-object',
  'bridge.js-dart-bytes',
  'bridge.reentry',
  'flax.signals',
  'flax.batch',
  'flax.descriptors',
  'memory.one',
  'memory.four',
];
const sizes = ['small', 'medium', 'large'];
int elements(String size) => [100, 1000, 10000][sizes.indexOf(size)];
int byteCount(String size) => [1024, 65536, 1048576][sizes.indexOf(size)];
bool fixedSize(String name) =>
    ['lifecycle', 'bundle'].contains(name) || name.startsWith('memory.');

List<({String name, String size})> combinations(
  List<String> cases,
  List<String> selectedSizes,
) {
  final result = [
    for (final name in cases)
      for (final size in fixedSize(name) ? ['small'] : selectedSizes)
        (name: name, size: size),
  ];
  result.shuffle(Random(inputSeed));
  return result;
}

List<String> engineOrder(List<String> engines, int pair) =>
    pair.isEven ? engines : engines.reversed.toList();

double quantile(List<double> values, double p) {
  if (values.isEmpty) throw ArgumentError('Empty sample');
  final sorted = [...values]..sort();
  final index = (sorted.length - 1) * p;
  final low = index.floor();
  final high = index.ceil();
  return sorted[low] + (sorted[high] - sorted[low]) * (index - low);
}

double median(List<double> values) => quantile(values, 0.5);

bool stable(List<double> values) {
  if (values.length < 15) return false;
  final tail = values.sublist(values.length - 15);
  final windows = [
    for (var i = 0; i < 15; i += 5) median(tail.sublist(i, i + 5)),
  ];
  final minimum = windows.reduce(min);
  return minimum > 0 && windows.reduce(max) / minimum <= 1.05;
}

// Keep identical work across engines while bounding extreme throughput differences.
int calibratedRepeats(List<double> perWorkUs, int cap) {
  final fastest = perWorkUs.reduce(min);
  final slowest = perWorkUs.reduce(max);
  return min(
    (20000 / max(fastest, 0.001)).ceil(),
    max(1, (250000 / max(slowest, 0.001)).floor()),
  ).clamp(1, cap);
}

Map<String, Object> distribution(List<double> values) => {
  'processes': values.length,
  'median': median(values),
  'q1': quantile(values, 0.25),
  'q3': quantile(values, 0.75),
};

List<double> pairedInterval(List<double> hermes, List<double> v8) {
  if (hermes.length != v8.length ||
      hermes.length < 10 ||
      hermes.any((v) => v <= 0)) {
    throw ArgumentError('At least ten positive paired samples are required');
  }
  final random = Random(inputSeed);
  final ratios = <double>[];
  for (var b = 0; b < 2000; b++) {
    final indices = List.generate(
      hermes.length,
      (_) => random.nextInt(hermes.length),
    );
    ratios.add(
      median([for (final i in indices) v8[i]]) /
          median([for (final i in indices) hermes[i]]),
    );
  }
  return [quantile(ratios, 0.025), quantile(ratios, 0.975)];
}

Map<String, Object?> decodeSample(String output) {
  final lines = const LineSplitter()
      .convert(output)
      .where((line) => line.startsWith('FLAX_BENCH:'));
  if (lines.length != 1) {
    throw const FormatException('Expected exactly one sample');
  }
  final value = jsonDecode(
    lines.single.substring('FLAX_BENCH:'.length),
  ) as Map<String, dynamic>;
  if (value['validated'] != true ||
      value['first'] is! Map ||
      value['measurements'] is! List ||
      value['warmup'] is! List) {
    throw const FormatException('Invalid benchmark sample');
  }
  for (final batch in [
    value['first'],
    ...value['warmup'] as List<dynamic>,
    ...value['measurements'] as List<dynamic>,
  ]) {
    if (batch is! Map ||
        batch['totalUs'] is! num ||
        !(batch['totalUs'] as num).isFinite ||
        (batch['totalUs'] as num) < 0) {
      throw const FormatException('Invalid duration');
    }
  }
  return value;
}

Future<({String output, String error})> capture(
  String executable,
  List<String> arguments, {
  String? directory,
  Map<String, String>? environment,
  Duration timeout = const Duration(seconds: 120),
}) async {
  final process = await Process.start(
    executable,
    arguments,
    workingDirectory: directory,
    environment: environment,
    includeParentEnvironment: environment == null,
  );
  final output = process.stdout.transform(utf8.decoder).join();
  final error = process.stderr.transform(utf8.decoder).join();
  int code;
  try {
    code = await process.exitCode.timeout(timeout);
  } on TimeoutException {
    process.kill(ProcessSignal.sigkill);
    await process.exitCode;
    await Future.wait([output, error]);
    rethrow;
  }
  final result = (output: await output, error: await error);
  if (code != 0) {
    throw ProcessException(
      executable,
      arguments,
      '${result.output}\n${result.error}',
      code,
    );
  }
  return result;
}

bool completeRun(
  int expected,
  List<Map<String, Object?>> samples,
  List<Map<String, Object?>> failures,
) => failures.isEmpty && samples.length == expected;

List<Map<String, Object?>> summarize(
  List<Map<String, Object?>> samples, {
  required bool smoke,
}) {
  final groups = <String, List<Map<String, Object?>>>{};
  for (final sample in samples) {
    if ((sample['case'] as String).startsWith('memory.')) continue;
    final key = '${sample['case']}/${sample['size']}';
    groups.putIfAbsent(key, () => []).add(sample);
  }
  final result = <Map<String, Object?>>[];
  for (final key in groups.keys.toList()..sort()) {
    final group = groups[key]!;
    final first = group.first['first'] as Map<String, dynamic>;
    for (final phase in ['first', 'measurements']) {
      for (final metric in first.keys.where((key) => key.endsWith('Us'))) {
        final perEngine = <String, Map<int, double>>{};
        var unstable = 0;
        for (final sample in group) {
          if (sample['stable'] != true && phase == 'measurements') unstable++;
          final batches = phase == 'first'
              ? [sample['first']]
              : sample['measurements'] as List<dynamic>;
          if (batches.isEmpty) continue;
          final work = phase == 'first' ? 1 : sample['batchRepeats'] as int;
          final value = median([
            for (final batch in batches)
              ((batch as Map<String, dynamic>)[metric] as num).toDouble() /
                  work,
          ]);
          perEngine.putIfAbsent(
            sample['engine'] as String,
            () => {},
          )[sample['repeat'] as int] = value;
        }
        final row = <String, Object?>{
          'group': key,
          'phase': phase,
          'metric': metric,
          'unstableProcesses': unstable,
          for (final engine in perEngine.keys)
            engine: distribution(perEngine[engine]!.values.toList()),
        };
        final h = perEngine['hermes'];
        final v = perEngine['v8'];
        if (!smoke && h != null && v != null) {
          final pairs = h.keys.where(v.containsKey).toList()..sort();
          if (pairs.isNotEmpty && pairs.every((i) => h[i]! > 0)) {
            final hv = [for (final i in pairs) h[i]!];
            final vv = [for (final i in pairs) v[i]!];
            row['pairedProcesses'] = pairs.length;
            row['v8OverHermes'] = median(vv) / median(hv);
            if (pairs.length >= 10) row['ratio95'] = pairedInterval(hv, vv);
          }
        }
        result.add(row);
      }
    }
  }
  return result;
}
