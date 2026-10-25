// ignore_for_file: implementation_imports
import 'dart:convert';
import 'dart:io';

import 'package:flax/runtime.dart';
import 'package:flax/src/native/native_runtime.dart';

/// Same AOT binary and runtime; only the two native result entries change.
void runResultsProbe() {
  final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
  final rows = <Map<String, Object>>[];
  final checks = <String>[];
  void check(String name, bool valid) {
    if (!valid) throw StateError(name);
    checks.add(name);
  }

  final object = runtime.evaluate(r'''
    globalThis.resultProbe = {
      number: 41, text: 'metadata\u0000\ud800\udc00\udfff',
      object: {alive: true}, fn: () => 7,
      get throwing() { throw new TypeError('getter failure'); },
      get reentrant() { return resultHost(23); },
      get symbol() { return Symbol('unsupported'); },
    }; resultProbe;
  ''') as FlaxJsObject;
  final echo = runtime.evaluate('(x) => x') as FlaxJsFunction;
  final getNumber =
      runtime.evaluate('() => resultProbe.number') as FlaxJsFunction;
  final getText = runtime.evaluate('() => resultProbe.text') as FlaxJsFunction;
  final getObject =
      runtime.evaluate('() => resultProbe.object') as FlaxJsFunction;
  final throwing = runtime.evaluate(
    "() => { throw new Error('call failure'); }",
  ) as FlaxJsFunction;
  final symbol =
      runtime.evaluate("() => Symbol('unsupported')") as FlaxJsFunction;
  final thisCall = runtime.evaluate(
    "(function() { 'use strict'; return this; })",
  ) as FlaxJsFunction;
  runtime.registerHostFunction('resultHost', (_, args) => echo.call(args));
  var checksum = 0;
  final text = String.fromCharCodes([
    ...'metadata'.codeUnits,
    0,
    0xd800,
    0xdc00,
    0xdfff,
  ]);
  try {
    for (final enabled in [false, true]) {
      runtime.useEngineResultsForExperiment(enabled);
      for (final value in <FlaxJsValue>[
        const FlaxJsUndefined(),
        const FlaxJsNull(),
        const FlaxJsBoolean(false),
        const FlaxJsBoolean(true),
        const FlaxJsNumber(-0.0),
        const FlaxJsNumber(double.nan),
        const FlaxJsNumber(double.infinity),
        const FlaxJsNumber(-41.25),
        const FlaxJsString(''),
        FlaxJsString(text),
        FlaxJsBigInt(BigInt.parse('-1234567890123456789012345678901234567890')),
      ]) {
        final actual = echo.call([value]);
        final same = switch ((value, actual)) {
          (FlaxJsUndefined(), FlaxJsUndefined()) ||
          (FlaxJsNull(), FlaxJsNull()) => true,
          (FlaxJsBoolean(value: final a), FlaxJsBoolean(value: final b)) =>
            a == b,
          (FlaxJsNumber(value: final a), FlaxJsNumber(value: final b)) =>
            a.isNaN ? b.isNaN : a == b && a.isNegative == b.isNegative,
          (FlaxJsString(value: final a), FlaxJsString(value: final b)) =>
            a == b,
          (FlaxJsBigInt(value: final a), FlaxJsBigInt(value: final b)) =>
            a == b,
          _ => false,
        };
        check('$enabled ${value.runtimeType}', same);
      }
      check(
        '$enabled property UTF16',
        (object.getProperty('text') as FlaxJsString).value == text,
      );
      check(
        '$enabled primitive receiver',
        (thisCall.call(
              [],
              thisValue: const FlaxJsNumber(12),
            ) as FlaxJsNumber).value ==
            12,
      );
      check(
        '$enabled getter reentry',
        (object.getProperty('reentrant') as FlaxJsNumber).value == 23,
      );
      final a = object.getProperty('object') as FlaxJsObject;
      final b = getObject.call([]) as FlaxJsObject;
      try {
        check('$enabled identity', a.strictEquals(b));
      } finally {
        a.release();
        b.release();
      }
      final fn = object.getProperty('fn') as FlaxJsFunction;
      try {
        check('$enabled function', (fn.call([]) as FlaxJsNumber).value == 7);
      } finally {
        fn.release();
      }
      for (final operation in <FlaxJsValue Function()>[
        () => throwing.call([]),
        () => object.getProperty('throwing'),
        () => symbol.call([]),
        () => object.getProperty('symbol'),
      ]) {
        var rejected = false;
        try {
          operation();
        } on FlaxJsException {
          rejected = true;
        } on ArgumentError {
          rejected = true;
        }
        check(
          '$enabled rejection and recovery',
          rejected &&
              (echo.call([const FlaxJsNumber(5)]) as FlaxJsNumber).value == 5,
        );
      }
    }
    final operations = <String, void Function()>{
      'call-number': () {
        checksum += (getNumber.call([]) as FlaxJsNumber).value.toInt();
      },
      'call-string': () {
        checksum += (getText.call([]) as FlaxJsString).value.length;
      },
      'property-number': () {
        checksum += (object.getProperty('number') as FlaxJsNumber).value
            .toInt();
      },
      'property-string': () {
        checksum += (object.getProperty('text') as FlaxJsString).value.length;
      },
      'call-object': () {
        (getObject.call([]) as FlaxJsObject).release();
        checksum++;
      },
      'property-object': () {
        (object.getProperty('object') as FlaxJsObject).release();
        checksum++;
      },
    };
    for (final entry in operations.entries) {
      for (final enabled in [false, true]) {
        runtime.useEngineResultsForExperiment(enabled);
        for (var i = 0; i < 1000; i++) {
          entry.value();
        }
      }
      for (var round = 0; round < 6; round++) {
        for (final enabled in round.isEven ? [false, true] : [true, false]) {
          runtime.useEngineResultsForExperiment(enabled);
          final timer = Stopwatch()..start();
          for (var i = 0; i < 10000; i++) {
            entry.value();
          }
          rows.add({
            'operation': entry.key,
            'enabled': enabled,
            'round': round,
            'iterations': 10000,
            'us': timer.elapsedMicroseconds,
          });
        }
      }
    }
    check(
      'benchmark checksum',
      checksum == 122000 * (41 + text.length + 41 + text.length + 1 + 1),
    );
  } finally {
    for (final value in [
      object,
      echo,
      getNumber,
      getText,
      getObject,
      throwing,
      symbol,
      thisCall,
    ]) {
      value.release();
    }
    runtime.dispose();
  }
  stdout.writeln(
    'ENGINE_RESULTS_PROBE ${jsonEncode({'checks': checks, 'rows': rows, 'disposed': runtime.isDisposed})}',
  );
}
