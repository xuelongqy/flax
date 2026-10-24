import 'dart:convert';
import 'dart:ffi';
import 'dart:io';
import 'dart:isolate';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:ffi/ffi.dart';

import 'probe_runtime.dart' show ProbeRuntime, check;
import 'native_calls.dart';
import 'runtime_bindings.g.dart';
import 'selection.g.dart';
import 'session_selection.g.dart';

typedef _OperationNative = Int32 Function(
  Pointer<FlaxRuntime>,
  Pointer<FlaxError>,
);
typedef _Operation = int Function(Pointer<FlaxRuntime>, Pointer<FlaxError>);
typedef _ReadViewNative = Handle Function(
  Pointer<FlaxRuntime>,
  Pointer<FlaxError>,
);
typedef _ReadView = Object Function(Pointer<FlaxRuntime>, Pointer<FlaxError>);
typedef _CheckpointNative = Int32 Function(
  Pointer<FlaxRuntime>,
  Int64,
  Pointer<FlaxError>,
);
typedef _Checkpoint = int Function(
  Pointer<FlaxRuntime>,
  int,
  Pointer<FlaxError>,
);

Future<void> runDlopenProbe() async {
  try {
    final library = DynamicLibrary.process();
    final calls = NativeCalls(
      FlaxBindings(library).flax_engine_get_api(FLAX_ABI_VERSION).ref,
    );
    final runtime = ProbeRuntime(calls);
    final install = library.lookupFunction<_OperationNative, _Operation>(
      'flax_ffi_dlopen_install',
    );
    final close = library.lookupFunction<_OperationNative, _Operation>(
      'flax_ffi_dlopen_close',
    );
    final collect = library.lookupFunction<_OperationNative, _Operation>(
      'flax_ffi_dlopen_collect',
    );
    final collectPending = library.lookupFunction<_OperationNative, _Operation>(
      'flax_ffi_dlopen_collect_pending',
    );
    final readView = library.lookupFunction<_ReadViewNative, _ReadView>(
      'flax_ffi_dlopen_read_test_view',
    );
    final stat = library
        .lookupFunction<Uint64 Function(Uint32), int Function(int)>(
          'flax_ffi_dlopen_stat',
        );
    final checkpoint = library.lookupFunction<_CheckpointNative, _Checkpoint>(
      'flax_ffi_dlopen_checkpoint',
    );
    var dartEntries = 0;
    final control = NativeCallable<FlaxHostCallbackFunction>.isolateLocal((
      Pointer<Void> context,
      Pointer<FlaxRuntime> handle,
      int receiver,
      Pointer<Uint64> args,
      int count,
      Pointer<Uint64> result,
      Pointer<FlaxError> error,
    ) {
      dartEntries++;
      return calls.makeValue(
        handle,
        FlaxValueKind.FLAX_NUMBER.value,
        1,
        nullptr,
        0,
        result,
        error,
      );
    }, exceptionalReturn: FLAX_CALLBACK_FAILURE);
    var installed = false;
    final wakeups = ReceivePort();
    final callbackErrors = <String>[];
    void pump() {
      if (!installed || runtime.closed) return;
      try {
        using(
          (arena) => runtime.checked(
            arena,
            (error) =>
                checkpoint(runtime.handle, wakeups.sendPort.nativePort, error),
          ),
        );
      } catch (error) {
        callbackErrors.add('$error');
      }
    }

    wakeups.listen((_) => pump());
    String? nativePath;
    DynamicLibrary? dynamicControl;
    Uint8List? survivor;
    try {
      using((arena) {
        final name = 'dlopenControl'.toNativeUtf16(allocator: arena);
        runtime.checked(
          arena,
          (error) => calls.registerHost(
            runtime.handle,
            name.cast(),
            13,
            control.nativeFunction,
            nullptr,
            error,
          ),
        );
      });
      check(runtime.evaluate('String(dlopenControl())') == '1', 'Dart control');
      if (ffiEnabled) {
        using(
          (arena) =>
              runtime.checked(arena, (error) => install(runtime.handle, error)),
        );
        installed = true;
        pump();
        final executable = File(Platform.resolvedExecutable).parent;
        final base = Platform.isMacOS ? executable.parent : executable;
        final path =
            '${base.path}/Frameworks/flax_ffi_dlopen_fixture.framework/'
            'flax_ffi_dlopen_fixture';
        nativePath = path;
        check(
          File(path).existsSync(),
          'Automatically embedded dynamic fixture',
        );
        runtime.evaluate(
          'globalThis.fixturePath = ${jsonEncode(path)}; "ready"',
        );
      }
      final result = jsonDecode(
        runtime.evaluate(utf8.decode(base64Decode(scriptBase64))),
      ) as Map<String, dynamic>;
      check(
        !result.containsKey('error'),
        '${result['error']}\n${result['stack']}',
      );
      if (installed) {
        dynamicControl = DynamicLibrary.open(nativePath!);
        using((arena) {
          final complete = arena<Int32>();
          runtime.checked(
            arena,
            (error) =>
                calls.drainMicrotasks(runtime.handle, -1, complete, error),
          );
          check(complete.value != 0, 'Contract Promise jobs complete');
        });
        await Future<void>.delayed(Duration.zero);
        pump();
        check(callbackErrors.isEmpty, 'Initial callback checkpoint');
        runtime.evaluate('''
          (() => {
            if (typeof ffiPreparePending === 'function') ffiPreparePending();
            return 'prepared';
          })()
        ''');
        using(
          (arena) => runtime.checked(
            arena,
            (error) => collectPending(runtime.handle, error),
          ),
        );
        runtime.evaluate('''
          (() => {
            if (typeof ffiCancelPending === 'function') ffiCancelPending();
            return 'cancelled';
          })()
        ''');
        for (var phase = 1; phase <= 2; phase++) {
          using(
            (arena) => runtime.checked(
              arena,
              (error) => collect(runtime.handle, error),
            ),
          );
          result.addAll(
            jsonDecode(runtime.evaluate('memoryPhase($phase)'))
                as Map<String, dynamic>,
          );
          pump();
          final complete = runtime.evaluate('''
            typeof ffiCompletePhase === 'function' ? ffiCompletePhase($phase) : '{}'
          ''');
          result.addAll(jsonDecode(complete) as Map<String, dynamic>);
          pump();
          if (result.containsKey('completeChecks') && phase == 1) {
            check(
              callbackErrors.length == 1 &&
                  callbackErrors.single.contains('owner isolate/thread'),
              'Wrong-thread callback failure reported at the owner checkpoint',
            );
            result['wrongThreadCallbackReported'] = true;
            callbackErrors.clear();
          }
          check(callbackErrors.isEmpty, 'No unexpected callback failures');
        }
        if (runtime.evaluate('typeof ffiRunCounterProbe') == 'function') {
          runtime.evaluate('ffiRunCounterProbe(); "ready"');
          for (var phase = 1; phase <= 3; phase++) {
            using(
              (arena) => runtime.checked(
                arena,
                (error) => collect(runtime.handle, error),
              ),
            );
            pump();
            result.addAll(
              jsonDecode(runtime.evaluate('ffiCounterPhase($phase)'))
                  as Map<String, dynamic>,
            );
          }
          check(callbackErrors.isEmpty, 'Class binding cleanup has no errors');
        }
        survivor = using((arena) {
          final error = arena<FlaxError>();
          try {
            final bytes = readView(runtime.handle, error);
            check(
              error.ref.code == 0 && bytes is Uint8List,
              'Actual zero-copy Dart byte view',
            );
            return bytes as Uint8List;
          } finally {
            calls.errorClear(error);
          }
        });
        check(survivor![0] == 77, 'Native bytes exported without a copy');
      }
      check(dartEntries == 1, 'No Dart dispatch for native business calls');
      result.addAll({
        'engineNamespace': runtime.engineNamespace,
        'dartPositiveControl': dartEntries,
        'dartBusinessDispatches': dartEntries - 1,
        'directNativeCalls': stat(4),
        'loadedImages': stat(5),
      });
      if (installed) {
        check(
          stat(4) > 0 && stat(5) == 1,
          'One deduplicated active dynamic image',
        );
        using(
          (arena) =>
              runtime.checked(arena, (error) => close(runtime.handle, error)),
        );
        installed = false;
        check(
          runtime.evaluate('''
          (() => {
            let rejected = 0;
            try { savedProcessCall(20, 22); } catch (error) {
              if (String(error).includes('closed')) rejected++;
            }
            try { savedOpen(null, {}); } catch (error) {
              if (String(error).includes('closed')) rejected++;
            }
            try { savedMemoryRead(); } catch (error) {
              if (String(error).includes('closed')) rejected++;
            }
            if (ffiSurvivor[0] === 77) rejected++;
            return String(rejected);
          })()
        ''') ==
              '4',
          'Retirement revokes FFI calls and preserves existing views',
        );
        result['retirementChecks'] = 4;
      } else {
        check(stat(4) == 0 && stat(5) == 0, 'No FFI calls or code image pins');
      }
      runtime.close();
      if (ffiEnabled) {
        check(
          survivor![0] == 77 && stat(6) == 0 && stat(7) == 1,
          'Borrowed static bytes survive VM destruction through a Dart byte view: '
          'byte=${survivor[0]}, '
          'views=${stat(7)}, memories=${stat(6)}',
        );
        survivor[1] = 78;
        check(survivor[1] == 78, 'Surviving external storage remains writable');
        survivor = null;
        for (var turn = 0; turn < 20 && stat(7) != 0; turn++) {
          using(
            (arena) =>
                runtime.checked(arena, (error) => collect(nullptr, error)),
          );
          await Future<void>.delayed(Duration.zero);
        }
        using(
          (arena) => runtime.checked(arena, (error) => collect(nullptr, error)),
        );
        try {
          final counter = dynamicControl!
              .lookupFunction<Uint32 Function(Uint32), int Function(int)>(
                'flax_dynamic_memory_stat',
              );
          check(
            counter(0) == 2 && counter(1) == 2 && counter(2) == 0,
            'All C allocations manually freed once before VM destruction',
          );
          result.addAll({
            'dynamicFinalFrees': counter(1),
            'wrongThreadFrees': counter(2),
            'viewSurvivedVm': true,
            'manualCleanupCompleted': true,
          });
        } finally {
          dynamicControl!.close();
          dynamicControl = null;
        }
        if (result.containsKey('expectedShutdownFrees')) {
          final finalizerCount = library
              .lookupFunction<Uint32 Function(), int Function()>(
                'flax_static_finalizer_count',
              );
          check(
            finalizerCount() == result['expectedShutdownFrees'],
            'Native finalizer cleanup completes before normal runtime shutdown',
          );
        }
        if (result.containsKey('expectedClassBindingFrees')) {
          final counter = library
              .lookupFunction<Uint32 Function(Uint32), int Function(int)>(
                'flax_static_counter_stat',
              );
          check(
            counter(1) == result['expectedClassBindingFrees'] &&
                counter(2) == 0,
            'Runtime retirement never repeats collected class instance cleanup',
          );
          result['classBindingRetirementVerified'] = true;
        }
      }
      final remaining = {
        for (final index in [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11])
          index: stat(index),
      };
      check(
        remaining.values.every((count) => count == 0),
        'Native metadata released: $remaining',
      );
      check(dartEntries == 1, 'Retirement does not use Dart business dispatch');
      if (sessionScriptBase64.isNotEmpty) {
        result.addAll(
          await runSessionProbe(
            'globalThis.fixturePath = ${jsonEncode(nativePath)};\n'
            '${utf8.decode(base64Decode(sessionScriptBase64))}',
            utf8.decode(base64Decode(layoutScriptBase64)),
          ),
        );
        check(
          [
            0,
            1,
            2,
            3,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
          ].every((index) => stat(index) == 0),
          'Session native metadata released',
        );
        final stopped = library
            .lookupFunction<Uint32 Function(), int Function()>(
              'flax_static_worker_stop_count',
            );
        final freed = library.lookupFunction<Uint32 Function(), int Function()>(
          'flax_static_finalizer_count',
        );
        final beforeStops = stopped(), beforeFrees = freed();
        final shutdownRuntime = ProbeRuntime(calls);
        final shutdownPort = ReceivePort();
        using(
          (arena) => shutdownRuntime.checked(
            arena,
            (error) => install(shutdownRuntime.handle, error),
          ),
        );
        using(
          (arena) => shutdownRuntime.checked(
            arena,
            (error) => checkpoint(
              shutdownRuntime.handle,
              shutdownPort.sendPort.nativePort,
              error,
            ),
          ),
        );
        final asyncStat = library
            .lookupFunction<Uint32 Function(Uint32), int Function(int)>(
              'flax_static_async_stat',
            );
        final beforeAsyncAllocations = asyncStat(0),
            beforeAsyncFrees = asyncStat(1);
        final shutdownSource = utf8.decode(base64Decode(shutdownScriptBase64));
        shutdownRuntime.evaluate('$shutdownSource\n"ready"');
        final allocationDeadline = DateTime.now().add(
          const Duration(seconds: 3),
        );
        while (asyncStat(0) == beforeAsyncAllocations &&
            DateTime.now().isBefore(allocationDeadline)) {
          await Future<void>.delayed(const Duration(milliseconds: 1));
        }
        check(
          asyncStat(0) == beforeAsyncAllocations + 1,
          'Forced shutdown starts with an active native allocation',
        );
        library.lookupFunction<Void Function(), void Function()>(
          'flax_ffi_dlopen_shutdown_test',
        )();
        shutdownRuntime.closed = true;
        shutdownPort.close();
        check(
          asyncStat(1) == beforeAsyncFrees + 1,
          'Forced shutdown releases the undelivered native result exactly once',
        );
        result['asyncForcedShutdownVerified'] = true;
        check(
          stopped() == beforeStops + 1 && freed() == beforeFrees + 1,
          'Actual isolate shutdown hook joins native producers and cleans native finalizers',
        );
        check(
          [
            0,
            1,
            2,
            3,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
          ].every((index) => stat(index) == 0),
          'Forced shutdown native metadata released',
        );
        result['isolateShutdownVerified'] = true;
      }
      result['nativeCountsZero'] = true;
      stdout.writeln('FLAX_FFI_DLOPEN_RESULT ${jsonEncode(result)}');
    } finally {
      if (installed) {
        using(
          (arena) =>
              runtime.checked(arena, (error) => close(runtime.handle, error)),
        );
      }
      if (!runtime.closed) runtime.close();
      dynamicControl?.close();
      wakeups.close();
      survivor = null;
      using(
        (arena) => runtime.checked(arena, (error) => collect(nullptr, error)),
      );
      control.close();
    }
  } catch (error, stack) {
    stderr.writeln('FLAX_FFI_DLOPEN_ERROR $error\n$stack');
    stdout.writeln('FLAX_FFI_DLOPEN_RESULT ${jsonEncode({'error': '$error'})}');
    exitCode = 1;
  }
  final recorder = ui.PictureRecorder();
  ui.Canvas(recorder).drawColor(const ui.Color(0xff123456), ui.BlendMode.src);
  final scene = ui.SceneBuilder()
    ..addPicture(ui.Offset.zero, recorder.endRecording());
  ui.PlatformDispatcher.instance.views.first.render(scene.build());
}
