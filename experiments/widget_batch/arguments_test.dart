// ignore_for_file: depend_on_referenced_packages, implementation_imports
import 'package:flax/runtime.dart';
import 'package:flax/src/native/native_runtime.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  for (final combined in [false, true]) {
    test(
      'borrowed argument decoding preserves values and reentry ($combined)',
      () {
        final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
        runtime.useEngineResultsForExperiment(true, arguments: combined);
        FlaxJsObject? borrowed;
        FlaxJsObject? retained;
        final echo = runtime.evaluate('(value) => value') as FlaxJsFunction;
        var calls = 0;
        runtime.registerHostFunction('inputHost', (receiver, args) {
          calls++;
          expect(receiver, isA<FlaxJsObject>());
          expect(args.length, 11);
          expect(() => args.add(const FlaxJsNull()), throwsUnsupportedError);
          expect(args[0], isA<FlaxJsUndefined>());
          expect(args[1], isA<FlaxJsNull>());
          expect((args[2] as FlaxJsBoolean).value, isFalse);
          expect((args[3] as FlaxJsNumber).value.isNegative, isTrue);
          expect((args[4] as FlaxJsNumber).value.isNaN, isTrue);
          expect((args[5] as FlaxJsNumber).value, double.infinity);
          expect((args[6] as FlaxJsString).value.codeUnits, [
            0,
            0xd800,
            0xdfff,
          ]);
          expect(
            (args[7] as FlaxJsBigInt).value,
            BigInt.parse('12345678901234567890'),
          );
          borrowed = args[8] as FlaxJsObject;
          retained = borrowed!.retain();
          final result = (args[9] as FlaxJsFunction).call([args[10]]);
          try {
            expect((result as FlaxJsNumber).value, 42);
          } finally {
            if (result is FlaxJsObject) result.release();
          }
          return echo.call([borrowed!]);
        });
        try {
          final result = runtime.evaluate(r'''
const argumentObject = {alive:true};
inputHost.call({}, undefined, null, false, -0, NaN, Infinity,
  '\u0000\ud800\udfff', 12345678901234567890n, argumentObject, x => x+1, 41)
  === argumentObject;
''') as FlaxJsBoolean;
          expect(result.value, isTrue);
          expect(calls, 1);
          expect(() => borrowed!.getProperty('alive'), throwsStateError);
          expect(
            (retained!.getProperty('alive') as FlaxJsBoolean).value,
            isTrue,
          );
        } finally {
          retained?.release();
          echo.release();
          runtime.dispose();
        }
      },
    );

    test(
      'failed borrowed descriptions release unconsumed strings ($combined)',
      () {
        final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
        runtime.useEngineResultsForExperiment(true, arguments: combined);
        var calls = 0;
        runtime.registerHostFunction('inputHost', (_, args) {
          calls++;
          return args.single;
        });
        try {
          expect(
            () => runtime.evaluate(
              "inputHost('allocated first', Symbol('unsupported'), 'last')",
            ),
            throwsA(isA<FlaxJsException>()),
          );
          expect(calls, 0);
          runtime.traceForExperiment = (name, beginning) {
            if (name == 'native:borrowed-input' && beginning) {
              throw StateError('input trace sentinel');
            }
          };
          expect(
            () => runtime.evaluate("inputHost('first', 'unconsumed string')"),
            throwsA(isA<FlaxJsException>()),
          );
          runtime.traceForExperiment = null;
          expect((runtime.evaluate('inputHost(42)') as FlaxJsNumber).value, 42);
          expect(calls, 1);
        } finally {
          runtime.traceForExperiment = null;
          runtime.dispose();
        }
      },
    );
  }
}
