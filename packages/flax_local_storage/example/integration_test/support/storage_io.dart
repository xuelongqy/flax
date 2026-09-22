import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flutter_test/flutter_test.dart';

Future<void> flushStorage(WidgetTester tester) =>
    _wait(tester, FlaxLocalStoragePlugin.flush());

Future<void> closeStorage(WidgetTester tester) =>
    _wait(tester, FlaxLocalStoragePlugin.shutdown());

Future<void> _wait(WidgetTester tester, Future<void> operation) async {
  var completed = false;
  Object? error;
  operation.then(
    (_) => completed = true,
    onError: (Object failure) {
      error = failure;
      completed = true;
    },
  );
  for (var i = 0; i < 500 && !completed; i++) {
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 2)),
    );
    await tester.pump();
  }
  expect(completed, isTrue, reason: 'Hive I/O did not finish');
  if (error != null) throw error!;
}
