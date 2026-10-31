import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_example_support/flax_example_support.dart';
import 'package:flax_sandbox_example/flax_sandbox_example.dart';
import 'package:flax_secure_storage/flax_secure_storage.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:material_ui/material_ui.dart' show SelectableText, TextButton;

void permissionsScenario() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  testWidgets(
    'native secure storage isolates modules and deletes only one owner',
    (tester) async {
      await tester.runAsync(() async {
        final storage = await FlaxPlatformSecureStorage.open(
          namespace:
              'flax.native-permission-acceptance.${DateTime.now().microsecondsSinceEpoch}',
        );
        try {
          await storage.write(
            module: 'permissions',
            owner: 'test-a',
            key: 'state',
            value: Uint8List.fromList([0, 128, 255]),
          );
          await storage.write(
            module: 'certificates',
            owner: 'test-a',
            key: 'state',
            value: Uint8List.fromList([2]),
          );
          await storage.write(
            module: 'permissions',
            owner: 'test-b',
            key: 'state',
            value: Uint8List.fromList([3]),
          );
          expect(
            await storage.read(
              module: 'permissions',
              owner: 'test-a',
              key: 'state',
            ),
            [0, 128, 255],
          );
          await storage.deleteOwner(owner: 'test-a');
          expect(
            await storage.read(
              module: 'certificates',
              owner: 'test-a',
              key: 'state',
            ),
            isNull,
          );
          expect(
            await storage.read(
              module: 'permissions',
              owner: 'test-b',
              key: 'state',
            ),
            [3],
          );
        } finally {
          await storage.deleteOwner(owner: 'test-a');
          await storage.deleteOwner(owner: 'test-b');
        }
      });
    },
  );

  testWidgets(
    'native permission playground approves, shares consent, revokes and reloads',
    (tester) async {
      tester.testTextInput.register();
      addTearDown(tester.testTextInput.unregister);
      tester.view.physicalSize = const Size(1200, 1200);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.resetPhysicalSize);
      addTearDown(tester.view.resetDevicePixelRatio);
      final id =
          'example.permission.acceptance.${DateTime.now().microsecondsSinceEpoch}';
      final storage = (await tester.runAsync(
        () => FlaxPlatformSecureStorage.open(
          namespace: 'flax.permission-ui-acceptance.$id',
        ),
      ))!;
      Flax.moduleAssets = await tester.runAsync(
        () => FlaxModuleAssets.load(
          bundle: rootBundle,
          manifest: 'assets/flax_modules/modules.json',
        ),
      );
      await tester.pumpWidget(
        FlaxExampleApp(
          title: 'Permission acceptance',
          child: FlaxPermissionsExample(storage: storage),
        ),
      );
      await tester.enterText(find.byType(EditableText).first, id);
      await _tap(tester, 'Approve manifest & run');
      await _tap(tester, 'Approve installation');
      await _until(
        tester,
        () => find.text('Query orders').evaluate().isNotEmpty,
      );
      await _tap(tester, 'Query orders');
      await _until(tester, () => _contains('"state":"prompt"'));
      await _tap(tester, 'Request orders');
      await _until(
        tester,
        () => find.text('Allow module').evaluate().isNotEmpty,
      );
      await _tap(tester, 'Allow module');
      await _until(tester, () => _contains('"state":"granted"'));
      await _tap(tester, 'Load orders (Future)');
      await _until(
        tester,
        () => find.text('3 orders loaded').evaluate().isNotEmpty,
      );
      await _tap(tester, 'Watch orders (Stream)');
      await _until(tester, () => _contains('order event'));
      await _tap(tester, 'Revoke orders');
      await _until(tester, () => _contains('FLAX_PERMISSION_DENIED'));
      await _tap(tester, 'Reload saved approval');
      await _until(
        tester,
        () =>
            find.text('Query orders').evaluate().isNotEmpty &&
            !_contains('FLAX_PERMISSION_DENIED'),
      );
      await _tap(tester, 'Query orders');
      await _until(tester, () => _contains('"state":"denied"'));
      await _tap(tester, 'Uninstall approval');
      await _until(
        tester,
        () => _contains('Secure installation records deleted'),
      );
      await flaxTestUnmount(tester);
      await tester.runAsync(() async {
        final manager = FlaxPermissionManager(storage: storage);
        await manager.close();
        await storage.deleteOwner(owner: 'flax.host.installations');
        final sandbox = await FlaxSandbox.create(appId: id);
        final directory = Directory(sandbox.applicationPath);
        if (await directory.exists()) await directory.delete(recursive: true);
      });
    },
  );
}

bool _contains(String text) => find
    .byWidgetPredicate(
      (widget) =>
          widget is Text && (widget.data?.contains(text) ?? false) ||
          widget is SelectableText && (widget.data?.contains(text) ?? false),
    )
    .evaluate()
    .isNotEmpty;

Future<void> _tap(WidgetTester tester, String text) async {
  final target = find.text(text).last;
  await _until(tester, () {
    final buttons = find
        .ancestor(
          of: target,
          matching: find.byWidgetPredicate((widget) => widget is TextButton),
        )
        .evaluate();
    return buttons.isEmpty ||
        buttons.any(
          (element) => (element.widget as TextButton).onPressed != null,
        );
  });
  await tester.ensureVisible(target);
  await tester.tap(target);
  await tester.pump(const Duration(milliseconds: 16));
}

Future<void> _until(WidgetTester tester, bool Function() ready) async {
  final timer = Stopwatch()..start();
  while (!ready() && timer.elapsed < const Duration(seconds: 20)) {
    await tester.pump(const Duration(milliseconds: 16));
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 10)),
    );
  }
  expect(
    ready(),
    isTrue,
    reason:
        'Permission example did not reach the requested state: ${find.byWidgetPredicate((widget) => widget is Text || widget is SelectableText).evaluate().map((element) {
          final widget = element.widget;
          return widget is Text ? widget.data : (widget as SelectableText).data;
        }).join('\n')}',
  );
}
