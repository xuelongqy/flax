import 'dart:async';
import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_example_support/flax_example_support.dart';
import 'package:flax_sandbox_example/flax_sandbox_example.dart';
import 'package:flax_secure_storage/flax_secure_storage.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart' show SelectableText, TextButton;
import 'package:path_provider_platform_interface/path_provider_platform_interface.dart';

const _notifications = MethodChannel('dev.flax.example.notifications');
const _secureStorage = MethodChannel('dev.flax.secure_storage');

class _TestPaths extends PathProviderPlatform {
  _TestPaths(this.directory);
  final String directory;
  @override
  Future<String?> getApplicationSupportPath() async => directory;
}

class _TestStorage implements FlaxSecureStorage {
  final values = <(String, String, String), Uint8List>{};
  @override
  Future<Uint8List?> read({
    required String module,
    required String owner,
    required String key,
  }) async => values[(module, owner, key)];
  @override
  Future<void> write({
    required String module,
    required String owner,
    required String key,
    required Uint8List value,
  }) async => values[(module, owner, key)] = Uint8List.fromList(value);
  @override
  Future<void> delete({
    required String module,
    required String owner,
    required String key,
  }) async => values.remove((module, owner, key));
  @override
  Future<void> deleteOwner({required String owner}) async =>
      values.removeWhere((key, _) => key.$2 == owner);
}

void main() {
  final binding = TestWidgetsFlutterBinding.ensureInitialized();
  late Directory temporary;
  late PathProviderPlatform previousPaths;
  late _TestStorage storage;
  var nativeStatus = 'notDetermined';
  var nativeResult = 'authorized';
  var requests = 0, sends = 0;
  Completer<void>? physicalRequest;
  final order = <String>[];

  setUpAll(() async {
    Flax.moduleAssets = await FlaxModuleAssets.load(
      bundle: rootBundle,
      manifest: 'assets/flax_modules/modules.json',
    );
  });
  setUp(() async {
    temporary = await Directory.systemTemp.createTemp('notification-example-');
    previousPaths = PathProviderPlatform.instance;
    PathProviderPlatform.instance = _TestPaths(temporary.path);
    storage = _TestStorage();
    nativeStatus = 'notDetermined';
    nativeResult = 'authorized';
    requests = sends = 0;
    physicalRequest = null;
    order.clear();
    binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
    binding.defaultBinaryMessenger.setMockMethodCallHandler(_notifications, (
      call,
    ) async {
      switch (call.method) {
        case 'query':
          return nativeStatus;
        case 'request':
          requests++;
          order.add('native request');
          await physicalRequest?.future;
          nativeStatus = nativeResult;
          order.add('native settled');
          return null;
        case 'send':
          sends++;
          order.add('native send');
          expect(nativeStatus, 'authorized');
          expect((call.arguments as Map)['module'], startsWith('example.'));
          return null;
        case 'clear':
          return null;
      }
      throw StateError('Unexpected notification operation ${call.method}');
    });
  });
  tearDown(() async {
    PathProviderPlatform.instance = previousPaths;
    binding.defaultBinaryMessenger.setMockMethodCallHandler(
      _notifications,
      null,
    );
    binding.defaultBinaryMessenger.setMockMethodCallHandler(
      _secureStorage,
      null,
    );
    await temporary.delete(recursive: true);
  });

  Future<void> mount(
    WidgetTester tester, {
    bool platformStorage = false,
  }) async {
    tester.view.physicalSize = const Size(1400, 1400);
    tester.view.devicePixelRatio = 1;
    await tester.pumpWidget(
      FlaxExampleApp(
        title: 'Notification example acceptance',
        child: FlaxPermissionsExample(
          storage: platformStorage ? null : storage,
        ),
      ),
    );
  }

  Future<void> runModule(WidgetTester tester) async {
    await _tap(tester, 'Approve manifest & run');
    await _tap(tester, 'Approve installation');
    await _until(
      tester,
      () => find.text('Query module notifications').evaluate().isNotEmpty,
    );
  }

  Future<void> close(WidgetTester tester) async {
    await flaxTestUnmount(tester);
    await _finish(tester, FlaxPermissionManager(storage: storage).close());
    tester.view.resetPhysicalSize();
    tester.view.resetDevicePixelRatio();
  }

  testWidgets(
    'actual module requires native then independent revocable consent',
    (tester) async {
      await mount(tester);
      try {
        await runModule(tester);
        await _tap(tester, 'Query module notifications');
        await _until(tester, () => _module('"requested":false'));
        expect(requests, 0);
        expect(_module('hostPermissionRequired'), isTrue);
        expect(_contains('not determined · system request available'), isTrue);
        await _tap(tester, 'Send notification (guarded)');
        await _until(tester, () => _contains('FLAX_PERMISSION_DENIED'));
        expect((requests, sends), (0, 0));

        nativeResult = 'denied';
        await _tap(tester, 'Request module notifications');
        await _until(
          tester,
          () =>
              requests == 1 &&
              find.text('denied: hostPermissionRequired').evaluate().isNotEmpty,
        );
        expect(find.text('Allow module'), findsNothing);
        expect(_module('"requested":false'), isTrue);
        expect(
          _contains(
            'denied · change permission in macOS notification settings',
          ),
          isTrue,
        );

        nativeStatus = 'notDetermined';
        nativeResult = 'authorized';
        await _tap(tester, 'Request module notifications');
        await _until(
          tester,
          () => find.text('Allow module').evaluate().isNotEmpty,
        );
        expect(requests, 2);
        expect(order, [
          'native request',
          'native settled',
          'native request',
          'native settled',
        ]);
        expect(_contains('separate module consent opened'), isTrue);
        await _tap(tester, 'Deny');
        await _until(tester, () => _module('moduleDenied'));
        expect(_module('"requested":true'), isTrue);
        expect(_contains('Host OS notifications: granted'), isTrue);
        await _tap(tester, 'Send notification (guarded)');
        await _until(tester, () => _contains('FLAX_PERMISSION_DENIED'));
        expect(sends, 0);

        await _tap(tester, 'Request module notifications');
        await _until(
          tester,
          () => find.text('Allow module').evaluate().isNotEmpty,
        );
        await _tap(tester, 'Allow module');
        await _until(tester, () => _module('"state":"granted"'));
        await _tap(tester, 'Send notification (guarded)');
        await _until(
          tester,
          () => _contains('Notification submitted to macOS.'),
        );
        expect((requests, sends), (2, 1));

        await _tap(tester, 'Reload saved approval');
        await _until(
          tester,
          () => find.text('Query module notifications').evaluate().isNotEmpty,
        );
        await _tap(tester, 'Query module notifications');
        await _until(tester, () => _module('"state":"granted"'));
        await _tap(tester, 'Revoke module notifications');
        await _tap(tester, 'Query module notifications');
        await _until(tester, () => _module('moduleDenied'));
        expect(nativeStatus, 'authorized');
        await _tap(tester, 'Send notification (guarded)');
        await _until(tester, () => _contains('FLAX_PERMISSION_DENIED'));
        expect(sends, 1);

        await tester.enterText(
          find.byType(EditableText).first,
          'example.permissions.b',
        );
        await runModule(tester);
        await _tap(tester, 'Query module notifications');
        await _until(tester, () => _module('"state":"prompt"'));
        expect(_module('"requested":false'), isTrue);
        expect((requests, sends), (2, 1));
      } finally {
        await close(tester);
      }
    },
  );

  testWidgets(
    'declaration and host allow block OS work; host grant is separate',
    (tester) async {
      await mount(tester);
      try {
        await _tap(tester, 'Declare notifications');
        await runModule(tester);
        await _tap(tester, 'Request module notifications');
        await _until(tester, () => _module('notDeclared'));
        expect((requests, sends), (0, 0));

        await _tap(tester, 'Declare notifications');
        await _tap(tester, 'Host allows module notifications');
        await runModule(tester);
        await _tap(tester, 'Request module notifications');
        await _until(tester, () => _module('hostDenied'));
        expect((requests, sends), (0, 0));
        await _tap(tester, 'Request host notification permission');
        await _until(tester, () => _contains('Host OS notifications: granted'));
        expect(requests, 1);
        expect(find.text('Allow module'), findsNothing);

        await _tap(tester, 'Host allows module notifications');
        await _tap(tester, 'Reload saved approval');
        await _until(
          tester,
          () => find.text('Query module notifications').evaluate().isNotEmpty,
        );
        await _tap(tester, 'Query module notifications');
        await _until(tester, () => _module('"state":"prompt"'));
        expect(_module('"requested":false'), isTrue);
        await _tap(tester, 'Send notification (guarded)');
        await _until(tester, () => _contains('FLAX_PERMISSION_DENIED'));
        expect(sends, 0);
      } finally {
        await close(tester);
      }
    },
  );

  testWidgets(
    'closing native work or module dialog cannot grant a later session',
    (tester) async {
      await mount(tester);
      try {
        await runModule(tester);
        physicalRequest = Completer<void>();
        await _tap(tester, 'Request module notifications');
        await _until(tester, () => requests == 1);
        await _tap(tester, 'Request host notification permission');
        expect(
          requests,
          1,
          reason: 'Host and module share one physical OS request',
        );
        await flaxTestUnmount(tester);
        expect(find.text('Allow module'), findsNothing);
        physicalRequest!.complete();
        await _until(tester, () => nativeStatus == 'authorized');
        await tester.pump(const Duration(milliseconds: 100));
        expect(find.text('Allow module'), findsNothing);
        await mount(tester);
        await _tap(tester, 'Reload saved approval');
        await _until(
          tester,
          () => find.text('Query module notifications').evaluate().isNotEmpty,
        );
        await _tap(tester, 'Query module notifications');
        await _until(tester, () => _module('"state":"prompt"'));
        expect(_module('"requested":false'), isTrue);
        await _tap(tester, 'Request module notifications');
        await _until(
          tester,
          () => find.text('Allow module').evaluate().isNotEmpty,
        );
        await flaxTestUnmount(tester);
        await _until(
          tester,
          () => find.text('Allow module').evaluate().isEmpty,
        );
        await mount(tester);
        await _tap(tester, 'Reload saved approval');
        await _until(
          tester,
          () => find.text('Query module notifications').evaluate().isNotEmpty,
        );
        await _tap(tester, 'Query module notifications');
        await _until(tester, () => _module('"state":"prompt"'));
        // Opening module consent records a request, but closing cannot grant it.
        expect(_module('"requested":true'), isTrue);
        expect(sends, 0);
      } finally {
        if (physicalRequest case final pending? when !pending.isCompleted) {
          pending.complete();
        }
        await close(tester);
      }
    },
  );

  testWidgets(
    'aggregate policy and repeated default playground have distinct stores',
    (tester) async {
      final records = <(String, String), String>{};
      final namespaces = <String>{};
      binding.defaultBinaryMessenger.setMockMethodCallHandler(_secureStorage, (
        call,
      ) async {
        final arguments = (call.arguments as Map).cast<String, Object?>();
        final namespace = arguments['namespace']! as String;
        namespaces.add(namespace);
        final key = arguments['key'] as String?;
        switch (call.method) {
          case 'initialize':
            return null;
          case 'read':
            return records[(namespace, key!)];
          case 'write':
            records[(namespace, key!)] = arguments['value']! as String;
            return null;
          case 'delete':
            records.remove((namespace, key!));
            return null;
          case 'keys':
            return records.keys
                .where((key) => key.$1 == namespace)
                .map((key) => key.$2)
                .toList();
        }
        throw StateError('Unexpected secure storage operation ${call.method}');
      });
      await tester.runAsync(
        () => approveTrustedExamplePermissions('example.notification-gallery'),
      );
      await mount(tester, platformStorage: true);
      try {
        await runModule(tester);
        expect(namespaces, hasLength(2));
        expect(
          _contains('One permission manager must own a storage backend'),
          isFalse,
        );
        await flaxTestUnmount(tester);
        await mount(tester, platformStorage: true);
        await _tap(tester, 'Reload saved approval');
        await _until(
          tester,
          () => find.text('Query module notifications').evaluate().isNotEmpty,
        );
        expect(namespaces, hasLength(2));
      } finally {
        await flaxTestUnmount(tester);
        await _finish(tester, () async {
          for (final namespace in ['flax', 'flax.permission-playground']) {
            final backend = await FlaxPlatformSecureStorage.open(
              namespace: namespace,
            );
            await FlaxPermissionManager(storage: backend).close();
          }
        }());
        tester.view.resetPhysicalSize();
        tester.view.resetDevicePixelRatio();
      }
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

bool _module(String text) => find
    .byWidgetPredicate(
      (widget) =>
          widget is Text &&
          (widget.data?.startsWith(
                'Module notifications (last query/request):',
              ) ??
              false) &&
          widget.data!.contains(text),
    )
    .evaluate()
    .isNotEmpty;

Future<void> _tap(WidgetTester tester, String text) async {
  final target = find.text(text).last;
  await _until(tester, () {
    if (target.evaluate().isEmpty) return false;
    final buttons = find
        .ancestor(of: target, matching: find.byType(TextButton))
        .evaluate();
    return buttons.isEmpty ||
        buttons.any(
          (element) => (element.widget as TextButton).onPressed != null,
        );
  });
  await tester.ensureVisible(target);
  await tester.pump();
  await tester.tap(target);
  await tester.pump(const Duration(milliseconds: 16));
}

Future<void> _until(WidgetTester tester, bool Function() ready) async {
  final timer = Stopwatch()..start();
  while (!ready() && timer.elapsed < const Duration(seconds: 20)) {
    await tester.pump(const Duration(milliseconds: 16));
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 5)),
    );
  }
  expect(
    ready(),
    isTrue,
    reason:
        'Notification example did not reach its state. ${find.byType(Text).evaluate().map((e) => (e.widget as Text).data).join('\n')}',
  );
}

Future<void> _finish(WidgetTester tester, Future<void> future) async {
  var done = false;
  Object? failure;
  future.then(
    (_) => done = true,
    onError: (Object error) {
      failure = error;
      done = true;
    },
  );
  await _until(tester, () => done);
  if (failure != null) throw failure!;
}
