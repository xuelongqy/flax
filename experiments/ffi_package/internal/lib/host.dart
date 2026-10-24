import 'dart:convert';
import 'dart:ffi';
import 'dart:io';
import 'dart:isolate';
import 'dart:ui' as ui;

import 'package:ffi/ffi.dart';

import 'gate_a_probe.dart' show ProbeRuntime, check;
import 'native_calls.dart';
import 'runtime_bindings.g.dart';
import 'selection.g.dart';

// Only the common installer is Dart-visible; target functions have no Dart wrappers.
typedef _InstallNative = Int32 Function(
  Pointer<FlaxRuntime>,
  Pointer<Void>,
  Int64,
  Pointer<FlaxError>,
);
typedef _Install = int Function(
  Pointer<FlaxRuntime>,
  Pointer<Void>,
  int,
  Pointer<FlaxError>,
);
typedef _CloseNative = Int32 Function(
  Pointer<FlaxRuntime>,
  Pointer<Int32>,
  Pointer<FlaxError>,
);
typedef _Close = int Function(
  Pointer<FlaxRuntime>,
  Pointer<Int32>,
  Pointer<FlaxError>,
);

void _report(Map<String, dynamic> result) {
  final line = 'FLAX_FFI_PACKAGE_RESULT ${jsonEncode(result)}';
  if (Platform.isAndroid) {
    // ignore: avoid_print -- Android forwards Dart print to logcat.
    print(line);
  } else {
    stdout.writeln(line);
  }
}

Future<void> runPackageProbe() async {
  try {
    final library = Platform.isAndroid
        ? DynamicLibrary.open('libflutter.so')
        : DynamicLibrary.process();
    final calls = NativeCalls(
      FlaxBindings(library).flax_engine_get_api(FLAX_ABI_VERSION).ref,
    );
    final runtime = ProbeRuntime(calls);
    final port = ReceivePort();
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
    try {
      using((arena) {
        final name = 'packageControl'.toNativeUtf16(allocator: arena);
        runtime.checked(
          arena,
          (error) => calls.registerHost(
            runtime.handle,
            name.cast(),
            14,
            control.nativeFunction,
            nullptr,
            error,
          ),
        );
      });
      check(
        runtime.evaluate("String(packageControl())") == '1',
        'Dart positive control',
      );
      if (providerIds.isNotEmpty) {
        final install = library.lookupFunction<_InstallNative, _Install>(
          'flax_ffi_experiment_install',
        );
        using(
          (arena) => runtime.checked(
            arena,
            (error) => install(
              runtime.handle,
              packagedProvider(0),
              port.sendPort.nativePort,
              error,
            ),
          ),
        );
        installed = true;
        runtime.evaluate(
          'globalThis.__flaxFfiProviders = Object.freeze({'
          '${jsonEncode(providerIds.single)}: ffi}); "installed"',
        );
      }
      final script = utf8.decode(base64Decode(packageBundleBase64));
      final result =
          jsonDecode(runtime.evaluate(script)) as Map<String, dynamic>;
      check(
        dartEntries == 1,
        'No Dart business dispatch during packaged native calls',
      );
      result.addAll({
        'providers': providerIds,
        'dartPositiveControl': dartEntries,
        'dartBusinessDispatches': dartEntries - 1,
        'engineNamespace': runtime.engineNamespace,
      });
      if (installed) {
        final close = library.lookupFunction<_CloseNative, _Close>(
          'flax_ffi_experiment_close',
        );
        using((arena) {
          final done = arena<Int32>();
          runtime.checked(arena, (error) => close(runtime.handle, done, error));
          check(done.value == 1, 'Native retirement completed');
        });
        installed = false;
      }
      runtime.close();
      if (providerIds.isNotEmpty) {
        final stat = library
            .lookupFunction<Uint64 Function(Uint32), int Function(int)>(
              'flax_ffi_experiment_stat',
            );
        check(
          [0, 1, 2, 3].every((index) => stat(index) == 0),
          'Native counts returned to zero',
        );
        result['nativeCountsZero'] = true;
      }
      _report(result);
    } finally {
      if (installed) {
        final close = library.lookupFunction<_CloseNative, _Close>(
          'flax_ffi_experiment_close',
        );
        using((arena) {
          final done = arena<Int32>();
          runtime.checked(arena, (error) => close(runtime.handle, done, error));
          check(done.value == 1, 'Failed probe still retires native resources');
        });
      }
      if (!runtime.closed) runtime.close();
      control.close();
      port.close();
    }
  } catch (error, stack) {
    stderr.writeln('FLAX_FFI_PACKAGE_ERROR $error\n$stack');
    _report({'error': '$error'});
    exitCode = 1;
  }
  final recorder = ui.PictureRecorder();
  ui.Canvas(recorder).drawColor(const ui.Color(0xff123456), ui.BlendMode.src);
  final scene = ui.SceneBuilder()
    ..addPicture(ui.Offset.zero, recorder.endRecording());
  ui.PlatformDispatcher.instance.views.first.render(scene.build());
}
