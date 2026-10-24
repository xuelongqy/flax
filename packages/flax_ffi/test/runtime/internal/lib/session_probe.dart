import 'dart:async';
import 'dart:convert';
import 'dart:ffi';

import 'package:ffi/ffi.dart';
import 'package:flax/flax.dart';
// ignore: implementation_imports
import 'package:flax/src/native/native_runtime.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter/services.dart';

import 'probe_runtime.dart' show check;
import 'joint_gc_probe.dart';
import 'native_calls.dart';
import 'runtime_bindings.g.dart';

Future<Map<String, Object?>> runSessionProbe(
  String source,
  String layoutSource,
) async {
  WidgetsFlutterBinding.ensureInitialized();
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  final library = DynamicLibrary.process();
  final calls = NativeCalls(
    FlaxBindings(library).flax_engine_get_api(FLAX_ABI_VERSION).ref,
  );
  final collect = library
      .lookupFunction<
        Int32 Function(Pointer<FlaxError>),
        int Function(Pointer<FlaxError>)
      >('flax_ffi_dlopen_collect_session_pending');
  void collectOnly() => using((arena) {
    final error = arena<FlaxError>();
    try {
      if (collect(error) != 0) {
        throw StateError(
          error.ref.message == nullptr
              ? 'Collect the idle real Session runtime'
              : utf8.decode(
                  error.ref.message.asTypedList(error.ref.message_length),
                ),
        );
      }
    } finally {
      calls.errorClear(error);
    }
  });
  final stops = library.lookupFunction<Uint32 Function(), int Function()>(
    'flax_static_worker_stop_count',
  );
  final frees = library.lookupFunction<Uint32 Function(), int Function()>(
    'flax_static_finalizer_count',
  );
  final initialStops = stops(), initialFrees = frees();
  final counter = library
      .lookupFunction<Uint32 Function(Uint32), int Function(int)>(
        'flax_static_counter_stat',
      );
  final initialCounterAllocations = counter(0),
      initialCounterFrees = counter(1);
  final errors = <Object>[];
  final handlerFailure = StateError('Session onError failed');
  var throwFromErrorHandler = false;
  late FlaxJsRuntime runtime;
  final session = FlaxSession(
    createRuntime: () => runtime = FlaxEngine.createRuntime(),
    source: source,
    bindings: FlaxBindingRegistry([]),
    onError: (error, _) {
      errors.add(error);
      if (throwFromErrorHandler) throw handlerFailure;
    },
  );
  final frame = Completer<void>();
  WidgetsBinding.instance.addPostFrameCallback((_) => frame.complete());
  runApp(FlaxView.session(session: session));
  await frame.future.timeout(const Duration(seconds: 30));
  await Future<void>.delayed(Duration.zero);
  check(errors.isEmpty, 'Real session initialization: $errors');
  final asyncDeadline = DateTime.now().add(const Duration(seconds: 180));
  Map<String, Object?>? asyncResult;
  while (DateTime.now().isBefore(asyncDeadline)) {
    final text = (runtime.evaluate(
      'JSON.stringify(asyncFfiResult)',
    ) as FlaxJsString).value;
    if (text != 'null') {
      asyncResult = (jsonDecode(text) as Map).cast<String, Object?>();
      break;
    }
    await Future<void>.delayed(const Duration(milliseconds: 10));
  }
  check(
    asyncResult?['checks'] is int,
    'Background calls and real SQLite: $asyncResult; $errors',
  );
  final stat = library
      .lookupFunction<Uint64 Function(Uint32), int Function(int)>(
        'flax_ffi_dlopen_stat',
      );
  final wakeRecords = stat(9), wakePayloads = stat(17);
  runtime.evaluate('sessionPrepareCleanupWake()');
  collectOnly();
  final wakeDeadline = DateTime.now().add(const Duration(seconds: 10));
  var cleanupNotifications = 0;
  while (DateTime.now().isBefore(wakeDeadline)) {
    await Future<void>.delayed(const Duration(milliseconds: 10));
    cleanupNotifications = (runtime.evaluate(
      'sessionCleanupWakeCount',
    ) as FlaxJsNumber).value.toInt();
    if (cleanupNotifications == 129) break;
  }
  check(
    cleanupNotifications == 129 &&
        stat(9) == wakeRecords &&
        stat(16) == 0 &&
        stat(17) == wakePayloads + 129 &&
        errors.isEmpty,
    'Worker notifications arriving during cleanup survive coalescing and batch limits: '
    'delivered=$cleanupNotifications, records=${stat(9)}/$wakeRecords, '
    'bytes=${stat(16)}, payloads=${stat(17)}/$wakePayloads, errors=$errors',
  );
  collectOnly();
  await Future<void>.delayed(const Duration(milliseconds: 20));
  check(
    (runtime.evaluate('sessionCleanupWakeCount') as FlaxJsNumber).value == 129,
    'Repeated GC does not resend cleanup notifications',
  );
  runtime.evaluate('sessionFinishCleanupWake()');
  runtime.evaluate('sessionQueueCallback()');
  // Hold the owner turn until the foreign delivery is queued, without pumping it.
  final queuedDeadline = Stopwatch()..start();
  while (stat(12) == 0 && queuedDeadline.elapsedMilliseconds < 2000) {}
  check(stat(12) == 1, 'Foreign callback is queued before sibling unregister');
  runtime.evaluate('sessionUnregisterSibling()');
  check(
    stat(12) == 1,
    'Unregister leaves the sibling callback delivery pending',
  );
  final deliveryDeadline = DateTime.now().add(const Duration(seconds: 3));
  Object? delivered;
  while (DateTime.now().isBefore(deliveryDeadline)) {
    delivered = jsonDecode(
      (runtime.evaluate(
        'JSON.stringify(sessionQueuedResult)',
      ) as FlaxJsString).value,
    );
    if (delivered != null) break;
    await Future<void>.delayed(const Duration(milliseconds: 1));
  }
  check(
    delivered == 42 && errors.isEmpty,
    'Sibling callback completes normally',
  );
  runtime.evaluate('sessionQueueNotification()');
  check(stat(13) == 4, 'Listener owns copied bytes before unregister');
  runtime.evaluate('sessionUnregisterNotification()');
  final bytesAfterUnregister = stat(13);
  final releasedPayloads = stat(17);
  runtime.evaluate('sessionStartListenerLifetime()');
  check(stat(16) == 16, 'Four queued listener messages own copied payloads');
  final listenerDeadline = DateTime.now().add(const Duration(seconds: 3));
  while (stat(16) != 0 && DateTime.now().isBefore(listenerDeadline)) {
    await Future<void>.delayed(const Duration(milliseconds: 1));
  }
  check(
    stat(16) == 0 &&
        stat(17) == releasedPayloads + 4 &&
        (runtime.evaluate('sessionListenerDeliveries') as FlaxJsNumber).value ==
            2 &&
        errors.isEmpty,
    'Active listener payload survives cleanup and each message releases once: $errors',
  );
  runtime.evaluate('sessionFinishListenerLifetime()');
  check(
    stat(17) == releasedPayloads + 4,
    'Repeated library close cannot release payloads twice',
  );
  runtime.evaluate('sessionQueueListenerErrors()');
  check(stat(16) == 12, 'Three failing listeners own copied payloads');
  final listenerErrorsDeadline = DateTime.now().add(const Duration(seconds: 3));
  while (errors.length < 3 && DateTime.now().isBefore(listenerErrorsDeadline)) {
    await Future<void>.delayed(const Duration(milliseconds: 1));
  }
  check(
    errors.length == 3 &&
        [0, 1, 2].every(
          (id) =>
              errors
                  .where(
                    (error) => error.toString().contains(
                      'listener callback failure $id',
                    ),
                  )
                  .length ==
              1,
        ),
    'Every listener exception reaches the Session once: $errors',
  );
  check(
    stat(16) == 0 && stat(17) == releasedPayloads + 7,
    'Each throwing listener releases its copied payload once',
  );
  runtime.evaluate('sessionFinishListenerErrors()');
  check(
    stat(17) == releasedPayloads + 7,
    'Unregister cannot repeat payload release',
  );
  errors.clear();
  final pauseDelivery = library
      .lookupFunction<Void Function(Uint8), void Function(int)>(
        'flax_ffi_dlopen_pause_delivery',
      );
  final beginLate = library.lookupFunction<Void Function(), void Function()>(
    'flax_static_late_begin',
  );
  final lateStat = library
      .lookupFunction<Int32 Function(Uint32), int Function(int)>(
        'flax_static_late_stat',
      );
  for (final completed in [false, true]) {
    for (final closeLibrary in [false, true]) {
      pauseDelivery(completed ? 1 : 0);
      try {
        runtime.evaluate('sessionStartManagedCompletion($closeLibrary)');
        beginLate();
        final deadline = Stopwatch()..start();
        final index = completed ? 14 : 12;
        while (stat(index) != 1 && deadline.elapsedMilliseconds < 3000) {
          // Pending cancellation must win before an owner checkpoint can deliver JS.
          if (completed)
            await Future<void>.delayed(const Duration(milliseconds: 1));
        }
        check(
          stat(index) == 1,
          'Managed callback reaches the selected delivery state',
        );
        runtime.evaluate('sessionFinishManagedCompletion()');
        check(
          lateStat(0) == (completed ? 42 : -17) &&
              lateStat(1) == 0 &&
              (runtime.evaluate(
                    'sessionManagedCompletions',
                  ) as FlaxJsNumber).value ==
                  (completed ? 1 : 0),
          'First delivery outcome wins: completed=$completed, closeLibrary=$closeLibrary',
        );
      } finally {
        pauseDelivery(0);
      }
    }
  }
  final value = runtime.evaluate('sessionFfiResult()') as FlaxJsString;
  final result = (jsonDecode(value.value) as Map).cast<String, Object?>();
  check(
    result['notifications'] == 1 && result['assets'] == 7,
    'Session checkpoint and automatically packaged source/static/prebuilt libraries',
  );
  check(
    result['counter'] == 81 &&
        counter(0) == initialCounterAllocations + 2 &&
        counter(1) == initialCounterFrees,
    'Session retains a usable class instance without manual cleanup',
  );
  runtime.evaluate('sessionDropCounter()');
  collectOnly();
  check(
    counter(1) == initialCounterFrees,
    'Collection alone does not sweep native finalizers',
  );
  // Observe C counters directly: JS FFI calls would sweep and mask a missed wakeup.
  final deadline = DateTime.now().add(const Duration(seconds: 5));
  while (counter(1) == initialCounterFrees &&
      DateTime.now().isBefore(deadline)) {
    await Future<void>.delayed(const Duration(milliseconds: 10));
  }
  check(
    counter(1) == initialCounterFrees + 1 && errors.isEmpty,
    'Session wakeup automatically releases the collected instance: $errors',
  );
  collectOnly();
  await Future<void>.delayed(const Duration(milliseconds: 50));
  check(
    counter(1) == initialCounterFrees + 1 && counter(2) == 0,
    'Repeated collection does not release twice or touch the retained instance',
  );
  check(
    (runtime.evaluate('sessionCounter.value') as FlaxJsNumber).value == 81,
    'Retained Session instance remains usable after automatic cleanup',
  );
  final beforeBulkFrees = frees(), beforeBulkRecords = stat(9);
  final beforeStopImages = stat(5);
  final imageRuntimes = List.generate(
    2,
    (_) => FlaxEngine.createRuntime() as FlaxNativeJsRuntime,
  );
  try {
    final path = (runtime.evaluate('fixturePath') as FlaxJsString).value;
    for (final other in imageRuntimes) {
      other.installNativeFfi(other.checkpointNativeFfi);
      other.evaluate('''
        globalThis.image = __flaxFfiDlopen(${jsonEncode(path)});
        globalThis.add = image.getFunction('flax_dynamic_add', {
          arguments: ['int32', 'int32'], return: 'int32'
        });
      ''');
    }
    check(stat(5) == beforeStopImages + 1, 'Sessions share one loaded image');
    imageRuntimes.first.evaluate('image.close()');
    check(
      (imageRuntimes.last.evaluate('add(20, 22)') as FlaxJsNumber).value == 42,
      'Closing one library preserves the other Session image',
    );
    imageRuntimes.last.evaluate('image.close()');
    check(
      stat(5) == beforeStopImages,
      'Both library closes release the shared image before Session destruction',
    );
    for (final other in imageRuntimes) {
      other.evaluate('''
        globalThis.image = __flaxFfiDlopen(${jsonEncode(path)});
        globalThis.factory = __flaxFfiMemory.finalizer(image.getFunction(
          'flax_dynamic_finalizer_free', { arguments: ['pointer'], return: 'void' }));
        image.close();
      ''');
    }
    check(
      stat(5) == beforeStopImages + 1,
      'Finalizer factories retain their image',
    );
    check(imageRuntimes.first.retireNativeFfi(), 'First image owner retires');
    check(
      stat(5) == beforeStopImages + 1,
      'Other Session factory keeps its code',
    );
    check(imageRuntimes.last.retireNativeFfi(), 'Last image owner retires');
    check(
      stat(5) == beforeStopImages,
      'Retirement releases images before surviving factories are collected',
    );
  } finally {
    for (final other in imageRuntimes.reversed) {
      while (!other.retireNativeFfi()) {
        await Future<void>.delayed(Duration.zero);
      }
      other.dispose();
    }
  }
  runtime.evaluate('sessionPrepareStopImage()');
  await Future<void>.delayed(const Duration(milliseconds: 20));
  check(
    stat(5) == beforeStopImages + 1,
    'Callback stop retains its closed library image',
  );
  runtime.evaluate('sessionReleaseStopImage()');
  await Future<void>.delayed(const Duration(milliseconds: 20));
  check(
    stat(5) == beforeStopImages,
    'Stopping the callback releases its image without another GC',
  );
  runtime.evaluate('sessionPrepareBulk()');
  final beforeBulkWakeups = stat(18);
  collectOnly();
  check(frees() == beforeBulkFrees, 'GC only queues bulk native cleanup');
  runtime.evaluate('sessionCancelBulk()');
  check(
    frees() == beforeBulkFrees && stat(9) == beforeBulkRecords + 992,
    'Detach cancels queued records immediately without running cleanup',
  );
  final bulkDeadline = DateTime.now().add(const Duration(seconds: 10));
  while (frees() < beforeBulkFrees + 992 &&
      DateTime.now().isBefore(bulkDeadline)) {
    await Future<void>.delayed(const Duration(milliseconds: 10));
  }
  final bulkWakeups = stat(18) - beforeBulkWakeups;
  check(
    frees() == beforeBulkFrees + 992 &&
        stat(9) == beforeBulkRecords &&
        bulkWakeups > 1 &&
        bulkWakeups < 32 &&
        stat(19) <= 128,
    'Bulk cleanup yields in bounded batches with coalesced wakeups: $bulkWakeups',
  );
  collectOnly();
  await Future<void>.delayed(const Duration(milliseconds: 20));
  check(
    frees() == beforeBulkFrees + 992,
    'Queued detach tombstones cannot free twice',
  );
  runtime.evaluate('sessionRetainBulk()');
  final previousFlutterError = FlutterError.onError;
  final handlerReports = <FlutterErrorDetails>[];
  Future<void>? closing;
  pauseDelivery(1);
  try {
    FlutterError.onError = handlerReports.add;
    throwFromErrorHandler = true;
    runtime.evaluate('sessionBeginCompletedCallbacks()');
    final completedDeadline = DateTime.now().add(const Duration(seconds: 3));
    while (stat(14) != 6 && DateTime.now().isBefore(completedDeadline)) {
      await Future<void>.delayed(const Duration(milliseconds: 1));
    }
    check(stat(14) == 6, 'Six completed callbacks pause before native return');
    runtime.evaluate('sessionAbortCompletedCall()');
    runtime.evaluate('sessionBeginCleanup()');
    final waiting = library.lookupFunction<Uint32 Function(), int Function()>(
      'flax_static_wait_started',
    );
    final waitingDeadline = DateTime.now().add(const Duration(seconds: 3));
    while (waiting() == 0 && DateTime.now().isBefore(waitingDeadline)) {
      await Future<void>.delayed(const Duration(milliseconds: 1));
    }
    check(
      waiting() == 1,
      'Session closes while native work waits for producer stop',
    );
    runtime.evaluate('sessionPrepareBulk()');
    collectOnly();
    final close = session.close();
    closing = close;
    check(
      identical(session.close(), close),
      'Repeated close joins the same retirement',
    );
    final retiringDeadline = DateTime.now().add(const Duration(seconds: 3));
    while (stat(15) == 0 && DateTime.now().isBefore(retiringDeadline)) {
      await Future<void>.delayed(const Duration(milliseconds: 1));
    }
    check(
      stat(15) == 1,
      'Session retirement starts before native callback return',
    );
    runtime.evaluate('sessionReleaseCompletedDuringOwnerCall()');
    final unmounted = Completer<void>();
    WidgetsBinding.instance.addPostFrameCallback((_) => unmounted.complete());
    runApp(const SizedBox.shrink());
    await unmounted.future.timeout(const Duration(seconds: 30));
    await close.timeout(const Duration(seconds: 30));
  } finally {
    pauseDelivery(0);
    throwFromErrorHandler = false;
    FlutterError.onError = previousFlutterError;
  }
  final callbackStat = library
      .lookupFunction<Uint32 Function(Uint32), int Function(int)>(
        'flax_static_callback_retirement_stat',
      );
  check(
    callbackStat(0) == 2,
    'Completed callback pointers are consumed and freed once: ${callbackStat(0)}',
  );
  check(
    callbackStat(1) == 1,
    'Completed callback error survives Session retirement',
  );
  check(
    callbackStat(2) == 1,
    'Background cancellation settles after callback return',
  );
  check(
    bytesAfterUnregister == 0,
    'Unregister releases queued listener bytes immediately: $bytesAfterUnregister',
  );
  check(
    errors.length == 3 &&
        [0, 1, 2].every(
          (id) =>
              errors
                  .where(
                    (error) => error.toString().contains(
                      'completed producer callback failure $id',
                    ),
                  )
                  .length ==
              1,
        ),
    'Every completed foreign callback error is reported once during retirement: $errors',
  );
  check(
    handlerReports.length == 3 &&
        handlerReports.every(
          (report) =>
              identical(report.exception, handlerFailure) &&
              report.library == 'flax error callback',
        ),
    'Throwing onError reports each failure to Flutter without recursive delivery',
  );
  errors.clear();
  check(stops() == initialStops + 1, 'Session close joins the native producer');
  check(
    lateStat(0) == -13 && lateStat(1) == 0,
    'Callbacks entering during Session stop return fallback without a wait cycle',
  );
  check(
    frees() == initialFrees + 3 + 992 + 2048,
    'Session close drains long Promise cleanup before native finalizers',
  );
  check(
    counter(1) == initialCounterFrees + 2 && counter(2) == 0,
    'Session close frees its remaining class instance exactly once',
  );
  check(
    identical(session.close(), closing),
    'Completed close remains idempotent',
  );
  await session.close();
  await Future<void>.delayed(const Duration(milliseconds: 20));
  check(
    stops() == initialStops + 1 &&
        frees() == initialFrees + 3 + 992 + 2048 &&
        counter(1) == initialCounterFrees + 2 &&
        callbackStat(0) == 2 &&
        stat(16) == 0 &&
        stat(17) == releasedPayloads + 7,
    'Repeated close cannot repeat producer, pointer or listener cleanup',
  );
  var revoked = false;
  try {
    runtime.evaluate('1');
  } on StateError {
    revoked = true;
  }
  check(revoked, 'Session VM is destroyed after native retirement');
  final layoutSession = FlaxSession(
    createRuntime: FlaxEngine.createRuntime,
    source: layoutSource,
    bindings: FlaxBindingRegistry([]),
    onError: (error, _) => errors.add(error),
  );
  final layoutFrame = Completer<void>();
  WidgetsBinding.instance.addPostFrameCallback((_) => layoutFrame.complete());
  runApp(FlaxView.session(session: layoutSession));
  await layoutFrame.future.timeout(const Duration(seconds: 30));
  final layoutClosed = layoutSession.close();
  final layoutUnmounted = Completer<void>();
  WidgetsBinding.instance.addPostFrameCallback(
    (_) => layoutUnmounted.complete(),
  );
  runApp(const SizedBox.shrink());
  await layoutUnmounted.future.timeout(const Duration(seconds: 30));
  await layoutClosed.timeout(const Duration(seconds: 30));
  check(errors.isEmpty, 'Layout-only entry installs and retires FFI: $errors');
  return {
    ...await runJointGcProbe(),
    'bulkGcFinalizers': 992,
    'cleanupWorkerNotifications': cleanupNotifications,
    'queuedGcAtRetirement': 1024,
    'crossSessionImageReleaseVerified': true,
    'factoryImageReleasedAtRetirement': true,
    'callbackStopImageReleasedWithoutGc': true,
    'bulkGcDetached': 32,
    'bulkGcWakeups': bulkWakeups,
    'bulkRetirementFinalizers': 1024,
    'largestCleanupBatch': stat(19),
    'asyncFfiChecks': asyncResult!['checks'],
    'asyncFfiStress': asyncResult['metrics'],
    'asyncSessionCloseVerified': true,
    'callbackRetirementRacesVerified': true,
    'completedCallbackRetirementVerified': true,
    'foreignCallbackErrorDuringRetirementVerified': true,
    'multipleCallbackErrorsVerified': true,
    'completedCallbackErrorRoutingVerified': true,
    'throwingErrorHandlerCloseVerified': true,
    'throwingListenerPayloadReleaseOnceVerified': true,
    'errorRetirementReleaseOnceVerified': true,
    'cancelledCallbackNeverDeliveredVerified': true,
    'listenerActivePayloadLifetimeVerified': true,
    'listenerPayloadReleaseOnceVerified': true,
    'completedCallbackUnregisterVerified': true,
    'listenerUnregisterReleasesPayloadVerified': true,
    'layoutOnlyVerified': true,
    'sessionLifecycleVerified': true,
    'classBindingSessionCloseVerified': true,
    'classBindingSessionGcVerified': true,
    'selectedNativeAssetKinds': [
      'sources',
      'static',
      'dynamic',
      'framework',
      'xcframework',
      'cmake',
      'dependent',
    ],
    'sessionNotifications': result['notifications'],
  };
}
