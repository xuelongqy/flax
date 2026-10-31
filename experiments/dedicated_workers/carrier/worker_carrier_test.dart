import 'dart:async';
import 'dart:ffi';
import 'dart:isolate';

import 'package:ffi/ffi.dart';
import 'package:flutter_test/flutter_test.dart';

final _library = DynamicLibrary.process();
final _create = _library
    .lookupFunction<Uint64 Function(Int64), int Function(int)>(
      'flax_worker_probe_create',
    );
final _eval = _library
    .lookupFunction<
      Int32 Function(Uint64, Pointer<Utf8>, Pointer<Double>),
      int Function(int, Pointer<Utf8>, Pointer<Double>)
    >('flax_worker_probe_eval');
final _pump = _library
    .lookupFunction<Int32 Function(Uint64), int Function(int)>(
      'flax_worker_probe_pump',
    );
final _destroy = _library
    .lookupFunction<Int32 Function(Uint64), int Function(int)>(
      'flax_worker_probe_destroy',
    );
final _interrupt = _library
    .lookupFunction<Void Function(Uint64), void Function(int)>(
      'flax_worker_probe_interrupt',
    );
final _thread = _library.lookupFunction<Uint64 Function(), int Function()>(
  'flax_worker_probe_thread',
);

(int, double) _execute(int id, String source) => using((arena) {
  final result = arena<Double>();
  final status = _eval(id, source.toNativeUtf8(allocator: arena), result);
  return (status, result.value);
});

void _carrier(SendPort parent) {
  final receive = ReceivePort();
  final id = _create(parent.nativePort);
  parent.send((receive.sendPort, id, _thread()));
  receive.listen((dynamic command) {
    final (String action, Object? input) = command as (String, Object?);
    if (action == 'eval') {
      parent.send((_execute(id, input! as String), _thread()));
    } else if (action == 'pump') {
      parent.send((_pump(id), _thread()));
    } else if (action == 'close') {
      parent.send((_destroy(id), _thread()));
      receive.close();
    }
  });
}

void main() {
  test(
    'detached V8 in a Dart isolate executes, yields, compiles Wasm and retires',
    () async {
      final events = ReceivePort();
      final stream = StreamIterator<dynamic>(events);
      await Isolate.spawn(_carrier, events.sendPort);
      expect(await stream.moveNext(), isTrue);
      final (SendPort commands, int id, int workerThread) =
          stream.current as (SendPort, int, int);
      expect(id, isNonZero);
      expect(workerThread, isNot(_thread()));
      commands.send((
        'eval',
        'globalThis.onmessage = e => postMessage(e.data * 2); onmessage({data:21}); 7',
      ));
      expect(await stream.moveNext(), isTrue);
      expect(stream.current, 42.0);
      expect(await stream.moveNext(), isTrue);
      expect((stream.current as ((int, double), int)).$1, (0, 7.0));
      commands.send((
        'eval',
        '''globalThis.wasmDone = 0;
      WebAssembly.compile(new Uint8Array([0,97,115,109,1,0,0,0])).then(() => {
        wasmDone = 1; postMessage(99);
      }); 0''',
      ));
      expect(await stream.moveNext(), isTrue);
      var wasm = false;
      for (var i = 0; i < 100 && !wasm; i++) {
        await Future<void>.delayed(const Duration(milliseconds: 5));
        commands.send(('pump', null));
        expect(await stream.moveNext(), isTrue);
        if (stream.current == 99.0) {
          wasm = true;
          expect(await stream.moveNext(), isTrue);
        }
      }
      expect(wasm, isTrue);
      commands.send(('close', null));
      expect(await stream.moveNext(), isTrue);
      expect((stream.current as (int, int)).$1, 0);
      await stream.cancel();
      events.close();
    },
  );

  test(
    'native interruption unwinds executing V8 before Dart isolate cleanup',
    () async {
      final events = ReceivePort();
      final stream = StreamIterator<dynamic>(events);
      await Isolate.spawn(_carrier, events.sendPort);
      expect(await stream.moveNext(), isTrue);
      final (SendPort commands, int id, int _) =
          stream.current as (SendPort, int, int);
      commands.send(('eval', 'postMessage(1); for (;;) {}'));
      expect(await stream.moveNext(), isTrue);
      expect(stream.current, 1.0);
      final clock = Stopwatch()..start();
      _interrupt(id);
      expect(await stream.moveNext(), isTrue);
      expect((stream.current as ((int, double), int)).$1.$1, 2);
      commands.send(('close', null));
      expect(await stream.moveNext(), isTrue);
      expect((stream.current as (int, int)).$1, 0);
      expect(clock.elapsedMilliseconds, lessThan(2000));
      await stream.cancel();
      events.close();
    },
  );
}
