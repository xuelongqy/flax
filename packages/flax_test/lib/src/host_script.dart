import 'package:flax/runtime.dart';
import 'package:flutter_test/flutter_test.dart';

import 'harness.dart';

Future<void> flaxTestRunHostScript(
  WidgetTester tester,
  FlaxTestHarness harness,
  String script,
) async {
  harness.execute(
    'globalThis.hostResult = null; (async () => {$script})().then(() => hostResult = "ok", e => hostResult = String(e.stack || e)); undefined;',
  );
  harness.execute('queueMicrotask(() => {}); undefined;');
  for (var i = 0; i < 1000; i++) {
    await tester.pump(const Duration(milliseconds: 10));
    final value = harness.runtime.getGlobal('hostResult');
    if (value is FlaxJsString) {
      expect(value.value, 'ok');
      return;
    }
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 10)),
    );
  }
  fail('Host script did not complete: ${harness.errors}');
}
