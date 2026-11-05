import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:flax/permissions.dart';
import 'package:flax/secure_storage.dart';
import 'package:test/test.dart';

const orders = FlaxPermissionDefinition(
  id: 'example.orders.read',
  title: 'Read orders',
  authorization: FlaxPermissionAuthorization.runtime,
);

class _Storage implements FlaxSecureStorage {
  final values = <(String, String, String), Uint8List>{};
  Future<void> Function(String module, Uint8List value)? beforeWrite;
  Future<void> Function(String module, String key)? beforeDelete;
  Future<void> Function(String module, String key)? afterDelete;
  bool failWrites = false;
  bool failAfterWrite = false;
  @override
  Future<Uint8List?> read({
    required String module,
    required String owner,
    required String key,
  }) async {
    final value = values[(module, owner, key)];
    return value == null ? null : Uint8List.fromList(value);
  }

  @override
  Future<void> write({
    required String module,
    required String owner,
    required String key,
    required Uint8List value,
  }) async {
    await beforeWrite?.call(module, value);
    if (failWrites) {
      throw const FlaxSecureStorageException(
        FlaxSecureStorageFailure.ioFailure,
      );
    }
    values[(module, owner, key)] = Uint8List.fromList(value);
    if (failAfterWrite &&
        String.fromCharCodes(value).contains('"lastDecision":"allow"')) {
      throw const FlaxSecureStorageException(
        FlaxSecureStorageFailure.ioFailure,
      );
    }
  }

  @override
  Future<void> delete({
    required String module,
    required String owner,
    required String key,
  }) async {
    await beforeDelete?.call(module, key);
    values.remove((module, owner, key));
    await afterDelete?.call(module, key);
  }

  @override
  Future<void> deleteOwner({required String owner}) async {
    values.removeWhere((key, _) => key.$2 == owner);
  }
}

class _Native implements FlaxNativePermissionAdapter {
  FlaxPermissionState state = FlaxPermissionState.denied;
  bool canRequest = false;
  int queries = 0;
  Future<FlaxNativePermissionStatus> Function(Object scope)? answer;
  @override
  Future<FlaxNativePermissionStatus> query(String permission, Object scope) {
    queries++;
    return answer?.call(scope) ??
        Future.value(
          FlaxNativePermissionStatus(state: state, canRequest: canRequest),
        );
  }
}

class _RequestingNative extends _Native
    implements FlaxNativePermissionRequester {
  _RequestingNative() {
    canRequest = true;
  }
  final requests = <FlaxNativePermissionRequest>[];
  Future<void> Function(FlaxNativePermissionRequest)? onRequest;
  @override
  Future<void> request(FlaxNativePermissionRequest request) async {
    requests.add(request);
    if (onRequest != null) {
      await onRequest!(request);
    } else {
      state = FlaxPermissionState.granted;
    }
  }
}

FlaxPermissionManifest _manifest({
  String appId = 'example.app',
  String permission = 'example.orders.read',
  Object? scope,
  String purpose = 'Show orders',
}) => FlaxPermissionManifest(
  appId: appId,
  defaultLocale: 'en',
  permissions: {
    permission: FlaxPermissionDeclaration(
      purpose: {'en': purpose},
      scope: scope,
    ),
  },
);

Future<FlaxPermissionApplication> _approve(
  FlaxPermissionManager manager, {
  FlaxPermissionManifest? manifest,
  String source = 'host:trusted',
}) => manager.approveInstallation(
  manifest: manifest ?? _manifest(),
  sourceIdentity: source,
);

FlaxPermissionContext _context(
  FlaxPermissionApplication application, {
  Future<FlaxPermissionDecision> Function(FlaxPermissionRequest)? onRequest,
  Set<String>? allow,
  String? account,
  bool Function()? canInteract,
  void Function(Object, StackTrace)? onError,
}) => FlaxPermissionContext(
  manifest: application.manifest,
  canInteract: canInteract,
  onError: onError,
  policy: FlaxPermissionPolicy(
    application: application,
    allow: allow ?? application.manifest.permissions.keys.toSet(),
    onRequest: onRequest,
    account: account,
  ),
);

Future<void> _until(bool Function() condition) async {
  for (var i = 0; i < 100; i++) {
    if (condition()) return;
    await Future<void>.delayed(Duration.zero);
  }
  fail('Expected asynchronous checkpoint was not reached');
}

void main() {
  late _Storage storage;
  late FlaxPermissionManager manager;
  setUp(() {
    storage = _Storage();
    manager = FlaxPermissionManager(
      storage: storage,
      providers: const [FlaxPermissionProvider(orders)],
    );
  });
  tearDown(() => manager.close());

  test(
    'manifest requires translated purpose and preserves script fallback',
    () {
      expect(() => _manifest(appId: '\ud800'), throwsFormatException);
      expect(
        FlaxPermissionManifest(
          appId: 'example.app',
          defaultLocale: 'en-x-host',
          permissions: const {},
        ).defaultLocale,
        'en-x-host',
      );
      expect(
        () => FlaxPermissionManifest.fromJson({
          'id': 'example.app',
          'permissions': {
            'flax.network': {'purpose': 'network'},
          },
        }),
        throwsFormatException,
      );
      final manifest = FlaxPermissionManifest.fromJson({
        'id': 'example.app',
        'defaultLocale': 'en',
        'permissions': {
          'flax.network': {
            'purpose': {'en': 'Network', 'zh-Hant': '網路'},
          },
        },
      });
      expect(manifest.purpose('flax.network', 'zh-Hant-HK'), '網路');
      expect(manifest.purpose('flax.network', 'de-DE'), 'Network');
    },
  );

  test(
    'missing declarations, approval and host policy are separate denials',
    () async {
      final raw = FlaxPermissionContext();
      expect((await raw.query('flax.network')).reason, 'notDeclared');
      final manifest = _manifest();
      final unapproved = FlaxPermissionContext(
        manifest: manifest,
        definitions: const [orders],
      );
      expect((await unapproved.query(orders.id)).reason, 'notApproved');
      final app = await _approve(manager);
      final denied = _context(app, allow: {});
      expect((await denied.request(orders.id)).reason, 'hostDenied');
      expect((await denied.query(orders.id)).requested, isFalse);
      raw.close();
      unapproved.close();
      denied.close();
    },
  );

  test(
    'configuration permissions use approved origins without a dialog',
    () async {
      final app = await _approve(
        manager,
        manifest: _manifest(
          permission: 'flax.network',
          scope: {
            'origins': ['https://api.example.com', 'wss://socket.example.com'],
          },
        ),
      );
      final context = _context(
        app,
        onRequest: (_) => throw StateError('Must not prompt'),
      );
      context.network(Uri.parse('https://api.example.com/path')).close();
      context.network(Uri.parse('wss://socket.example.com/events')).close();
      expect(
        () => context.network(Uri.parse('https://other.example.com')),
        throwsA(isA<FlaxPermissionException>()),
      );
      expect(
        (await context.request('flax.network')).state,
        FlaxPermissionState.granted,
      );
      expect((await context.query('flax.network')).requested, isFalse);
      await manager.revoke(app, 'flax.network');
      expect((await context.request('flax.network')).reason, 'notApproved');
      context.close();
    },
  );

  test('same permission is shared across APIs and Sessions, accounts stay separate', () async {
    final app = await _approve(manager);
    final answer = Completer<FlaxPermissionDecision>();
    var dialogs = 0;
    Future<FlaxPermissionDecision> prompt(FlaxPermissionRequest _) {
      dialogs++;
      return answer.future;
    }

    final first = _context(app, onRequest: prompt, account: 'a');
    final second = _context(app, onRequest: prompt, account: 'a');
    final request1 = first.request(orders.id),
        request2 = second.request(orders.id);
    await _until(() => dialogs == 1);
    answer.complete(FlaxPermissionDecision.allow);
    expect((await request1).state, FlaxPermissionState.granted);
    expect((await request2).state, FlaxPermissionState.granted);
    first.require(orders.id, operation: 'orders.list');
    second.require(orders.id, operation: 'orders.details');
    final other = _context(app, account: 'b');
    expect((await other.query(orders.id)).state, FlaxPermissionState.prompt);
    expect(dialogs, 1);
    first.close();
    second.close();
    other.close();
  });

  test(
    'equivalent translated purposes share consent regardless of key order',
    () async {
      FlaxPermissionManifest manifest(Map<String, String> purpose) =>
          FlaxPermissionManifest(
            appId: 'example.app',
            defaultLocale: 'en',
            permissions: {
              orders.id: FlaxPermissionDeclaration(purpose: purpose),
            },
          );
      final app = await _approve(
        manager,
        manifest: manifest({'en': 'Show orders', 'zh': '显示订单'}),
      );
      final answer = Completer<FlaxPermissionDecision>();
      var dialogs = 0;
      final first = _context(
        app,
        onRequest: (_) {
          dialogs++;
          return answer.future;
        },
      );
      final second = FlaxPermissionContext(
        manifest: manifest({'zh': '显示订单', 'en': 'Show orders'}),
        policy: first.policy,
      );
      final request1 = first.request(orders.id);
      await _until(() => dialogs == 1);
      var settled = false;
      final request2 = second.request(orders.id).then((result) {
        settled = true;
        return result;
      });
      final otherAccount = _context(
        app,
        account: 'other',
        onRequest: (_) async {
          fail('Different accounts must not join active consent');
        },
      );
      expect((await otherAccount.request(orders.id)).reason, 'busy');
      await Future<void>.delayed(Duration.zero);
      expect(settled, isFalse);
      answer.complete(FlaxPermissionDecision.allow);
      expect((await request1).state, FlaxPermissionState.granted);
      expect((await request2).state, FlaxPermissionState.granted);
      expect(dialogs, 1);
      await first.close();
      await second.close();
      await otherAccount.close();
    },
  );

  test(
    'closing one merged waiter preserves the other legitimate request',
    () async {
      final app = await _approve(manager);
      final answer = Completer<FlaxPermissionDecision>();
      var shown = false;
      Future<FlaxPermissionDecision> prompt(FlaxPermissionRequest _) {
        shown = true;
        return answer.future;
      }

      final first = _context(app, onRequest: prompt),
          second = _context(app, onRequest: prompt);
      final request1 = first.request(orders.id),
          request2 = second.request(orders.id);
      final closed = expectLater(request1, throwsStateError);
      await _until(() => shown);
      first.close();
      answer.complete(FlaxPermissionDecision.allow);
      await closed;
      expect((await request2).state, FlaxPermissionState.granted);
      second.close();
    },
  );

  test(
    'revocation cancels the dialog and late consent cannot restore approval',
    () async {
      final app = await _approve(manager);
      final answer = Completer<FlaxPermissionDecision>();
      FlaxPermissionRequest? shown;
      final context = _context(
        app,
        onRequest: (request) {
          shown = request;
          return answer.future;
        },
      );
      final pending = context.request(orders.id);
      await _until(() => shown != null);
      await manager.revoke(app, orders.id);
      await shown!.whenCancelled;
      answer.complete(FlaxPermissionDecision.allow);
      expect((await pending).state, FlaxPermissionState.denied);
      expect(
        (await context.query(orders.id)).state,
        FlaxPermissionState.denied,
      );
      context.close();
    },
  );

  test(
    'revoke wins over a grant write that already reached the backend',
    () async {
      final app = await _approve(manager);
      final writing = Completer<void>(), release = Completer<void>();
      storage.beforeWrite = (module, bytes) async {
        if (module == 'flax.permissions' &&
            String.fromCharCodes(bytes).contains('"approvedScope"')) {
          storage.beforeWrite = null;
          writing.complete();
          await release.future;
        }
      };
      final context = _context(
        app,
        onRequest: (_) async => FlaxPermissionDecision.allow,
      );
      final pending = context.request(orders.id);
      await writing.future;
      final revoked = manager.revoke(app, orders.id);
      release.complete();
      await revoked;
      await pending;
      expect(
        (await context.query(orders.id)).state,
        FlaxPermissionState.denied,
      );
      context.close();
      await manager.close();
      manager = FlaxPermissionManager(
        storage: storage,
        providers: const [FlaxPermissionProvider(orders)],
      );
      final reopened = await manager.openApplication(
        appId: app.appId,
        sourceIdentity: 'host:trusted',
      );
      final reloaded = _context(reopened!);
      expect(
        (await reloaded.query(orders.id)).state,
        FlaxPermissionState.denied,
      );
      reloaded.close();
    },
  );

  test(
    'backend failure never publishes approval or falls back to memory',
    () async {
      final app = await _approve(manager);
      final context = _context(
        app,
        onRequest: (_) async => FlaxPermissionDecision.allow,
      );
      storage.failWrites = true;
      await expectLater(
        context.request(orders.id),
        throwsA(isA<FlaxSecureStorageException>()),
      );
      expect(
        (await context.query(orders.id)).state,
        FlaxPermissionState.unavailable,
      );
      expect(
        () => context.require(orders.id, operation: 'orders.list'),
        throwsA(isA<FlaxPermissionException>()),
      );
      context.close();
    },
  );

  test(
    'leases stop on revocation and never revive after later approval',
    () async {
      final app = await _approve(manager);
      final context = _context(
        app,
        onRequest: (_) async => FlaxPermissionDecision.allow,
      );
      await context.request(orders.id);
      var stopped = 0;
      final lease = context.lease(orders.id, operation: 'orders.subscribe')
        ..onRevoke(() => stopped++);
      await manager.revoke(app, orders.id);
      expect(stopped, 1);
      await context.request(orders.id);
      expect(
        () => lease.requireActive(),
        throwsA(isA<FlaxPermissionException>()),
      );
      context.close();
    },
  );

  group('scoped native refresh', () {
    const a = {
      'origins': ['https://a.example'],
    };
    const b = {
      'origins': ['https://b.example'],
    };
    const both = {
      'origins': ['https://a.example', 'https://b.example'],
    };
    late _Native native;
    late FlaxPermissionApplication app;
    late FlaxPermissionContext context;

    setUp(() async {
      await manager.close();
      native = _Native()
        ..answer = (target) async => FlaxNativePermissionStatus(
          state: FlaxPermissionState.granted,
          scope: target,
        );
      manager = FlaxPermissionManager(
        storage: storage,
        native: native,
        providers: const [
          FlaxPermissionProvider(
            orders,
            requiresNative: true,
            scope: FlaxOriginPermissionScope(),
          ),
        ],
      );
      app = await _approve(manager, manifest: _manifest(scope: both));
      context = _context(
        app,
        onRequest: (_) async => FlaxPermissionDecision.allow,
      );
    });
    tearDown(() => context.close());
    bool allowed(Object scope) {
      try {
        context.require(orders.id, operation: 'scoped.read', scope: scope);
        return true;
      } on FlaxPermissionException {
        return false;
      }
    }

    test('a covering native target admits a smaller operation without another query', () async {
      await context.request(orders.id);
      expect(allowed(a), isTrue);
      expect(allowed(b), isTrue);
      manager.invalidateNative();
      native.answer = (_) async => const FlaxNativePermissionStatus(
        state: FlaxPermissionState.granted,
        scope: both,
      );
      await context.query(orders.id, scope: a);
      expect(allowed(a), isTrue);
      // A broad returned scope does not prove that B was actually queried.
      expect(allowed(b), isFalse);
      await context.query(orders.id, scope: b);
      expect(allowed(b), isTrue);
    });

    for (final restriction in [
      'limited',
      'denied',
      'failure',
      'invalid scope',
    ]) {
      test(
        'first broad $restriction fences cached and pending narrow grants',
        () async {
          await context.request(orders.id, scope: a);
          final old = Completer<FlaxNativePermissionStatus>();
          native.answer = (target) {
            if ((target as Map)['origins'].length == 1) return old.future;
            if (restriction == 'failure') {
              return Future.error(StateError('native failure'));
            }
            return Future.value(
              FlaxNativePermissionStatus(
                state: restriction == 'denied'
                    ? FlaxPermissionState.denied
                    : FlaxPermissionState.limited,
                scope: restriction == 'invalid scope' ? {'invalid': true} : b,
              ),
            );
          };
          final late = context.query(orders.id, scope: a);
          try {
            if (restriction == 'failure' || restriction == 'invalid scope') {
              await expectLater(
                context.query(orders.id),
                throwsA(
                  restriction == 'failure'
                      ? isA<StateError>()
                      : isA<ArgumentError>(),
                ),
              );
            } else {
              expect(
                (await context.query(orders.id)).state,
                isNot(FlaxPermissionState.granted),
              );
            }
            final beforeLate = allowed(a);
            old.complete(
              const FlaxNativePermissionStatus(
                state: FlaxPermissionState.granted,
                scope: a,
              ),
            );
            await late;
            expect(beforeLate, isFalse);
            expect(allowed(a), isFalse);
            native.answer = (target) async => FlaxNativePermissionStatus(
              state: FlaxPermissionState.granted,
              scope: target,
            );
            await context.query(orders.id, scope: a);
            expect(allowed(a), isTrue);
          } finally {
            if (!old.isCompleted) {
              old.complete(
                const FlaxNativePermissionStatus(
                  state: FlaxPermissionState.denied,
                ),
              );
            }
            await late;
          }
        },
      );
    }

    test('fresh narrow denial removes a broad grant without merging unrelated observations', () async {
      await context.request(orders.id);
      native.answer = (_) async =>
          const FlaxNativePermissionStatus(state: FlaxPermissionState.denied);
      await context.query(orders.id, scope: a);
      expect(allowed(both), isFalse);
      native.answer = (target) async => FlaxNativePermissionStatus(
        state: FlaxPermissionState.granted,
        scope: target,
      );
      await context.query(orders.id, scope: b);
      expect(allowed(b), isTrue);
      expect(allowed(a), isFalse);
      expect(allowed(both), isFalse);
    });

    test('target-specific supplemental consent and disjoint denial preserve A authority', () async {
      await context.request(orders.id, scope: a);
      await context.request(orders.id, scope: b);
      expect([allowed(a), allowed(b)], [true, true]);
      final lease = context.lease(orders.id, operation: 'read.A', scope: a);
      native.answer = (_) async =>
          const FlaxNativePermissionStatus(state: FlaxPermissionState.denied);
      await context.query(orders.id, scope: b);
      expect(allowed(a), isTrue);
      expect(lease.requireActive, returnsNormally);
      expect(allowed(b), isFalse);
    });

    test(
      'overlapping full native queries do not invalidate one another',
      () async {
        await context.request(orders.id);
        final broad = Completer<FlaxNativePermissionStatus>();
        final narrow = Completer<FlaxNativePermissionStatus>();
        native.answer = (target) => (target as Map)['origins'].length == 1
            ? narrow.future
            : broad.future;
        final ab = context.query(orders.id);
        final onlyA = context.query(orders.id, scope: a);
        narrow.complete(
          const FlaxNativePermissionStatus(
            state: FlaxPermissionState.granted,
            scope: a,
          ),
        );
        expect((await onlyA).state, FlaxPermissionState.granted);
        broad.complete(
          const FlaxNativePermissionStatus(
            state: FlaxPermissionState.granted,
            scope: both,
          ),
        );
        expect((await ab).state, FlaxPermissionState.granted);
        expect([allowed(a), allowed(b)], [true, true]);
      },
    );

    test('equal concurrent requests share native work and consent while one waiter closes', () async {
      final response = Completer<FlaxPermissionDecision>();
      var prompts = 0;
      final first = _context(
        app,
        onRequest: (_) {
          prompts++;
          return response.future;
        },
      );
      final second = _context(
        app,
        onRequest: (_) {
          prompts++;
          return response.future;
        },
      );
      final nativeCalls = <Completer<FlaxNativePermissionStatus>>[];
      native.answer = (_) {
        final c = Completer<FlaxNativePermissionStatus>();
        nativeCalls.add(c);
        return c.future;
      };
      final closedRequest = first.request(orders.id);
      final observedClosed = expectLater(closedRequest, throwsStateError);
      final liveRequest = second.request(orders.id);
      await first.close();
      for (final call in nativeCalls) {
        call.complete(
          const FlaxNativePermissionStatus(
            state: FlaxPermissionState.granted,
            scope: both,
          ),
        );
      }
      await _until(() => prompts == 1);
      native.answer = (target) async => FlaxNativePermissionStatus(
        state: FlaxPermissionState.granted,
        scope: target,
      );
      response.complete(FlaxPermissionDecision.allow);
      expect((await liveRequest).state, FlaxPermissionState.granted);
      await observedClosed;
      expect(nativeCalls, hasLength(1));
      expect(prompts, 1);
      await second.close();
    });

    for (final error in [false, true]) {
      test(
        'old broad ${error ? 'error' : 'restriction'} preserves newer narrow authority and consent',
        () async {
          await context.request(orders.id);
          final broad = Completer<FlaxNativePermissionStatus>();
          native.answer = (target) => (target as Map)['origins'].length == 2
              ? broad.future
              : Future.value(
                  FlaxNativePermissionStatus(
                    state: FlaxPermissionState.granted,
                    scope: target,
                  ),
                );
          final old = context.query(orders.id);
          final observed = error
              ? expectLater(old, throwsStateError)
              : old.then<void>((_) {});
          await context.query(orders.id, scope: a);
          final lease = context.lease(
            orders.id,
            operation: 'new.read.A',
            scope: a,
          );
          final answer = Completer<FlaxPermissionDecision>();
          FlaxPermissionRequest? prompt;
          final next = _context(
            app,
            account: 'new-account',
            onRequest: (request) {
              prompt = request;
              return answer.future;
            },
          );
          final requested = next.request(orders.id, scope: a);
          try {
            await _until(() => prompt != null);
            var cancelled = false;
            prompt!.whenCancelled.then((_) => cancelled = true);
            if (error) {
              broad.completeError(StateError('OLD_BROAD_ERROR'));
            } else {
              broad.complete(
                const FlaxNativePermissionStatus(
                  state: FlaxPermissionState.limited,
                  scope: b,
                ),
              );
            }
            await observed;
            expect(allowed(a), isTrue);
            expect(lease.requireActive, returnsNormally);
            expect(cancelled, isFalse);
            answer.complete(FlaxPermissionDecision.allow);
            expect((await requested).state, FlaxPermissionState.granted);
          } finally {
            if (!broad.isCompleted) {
              broad.complete(
                const FlaxNativePermissionStatus(
                  state: FlaxPermissionState.denied,
                ),
              );
            }
            if (!answer.isCompleted) {
              answer.complete(FlaxPermissionDecision.cancel);
            }
            await requested;
            await next.close();
          }
        },
      );
    }

    for (final failure in [false, true]) {
      test(
        'obsolete native ${failure ? 'error' : 'value'} cannot clear a newer shared flight',
        () async {
          await context.request(orders.id);
          final calls = <Completer<FlaxNativePermissionStatus>>[];
          native.answer = (_) {
            final c = Completer<FlaxNativePermissionStatus>();
            calls.add(c);
            return c.future;
          };
          final old = context.query(orders.id);
          final observedOld = failure
              ? expectLater(old, throwsStateError)
              : old.then<void>((_) {});
          manager.invalidateNative();
          final fresh = context.query(orders.id);
          if (failure) {
            calls.first.completeError(StateError('obsolete'));
          } else {
            calls.first.complete(
              const FlaxNativePermissionStatus(
                state: FlaxPermissionState.granted,
                scope: both,
              ),
            );
          }
          await observedOld;
          final joined = context.query(orders.id);
          final count = calls.length;
          for (final call in calls.skip(1)) {
            call.complete(
              const FlaxNativePermissionStatus(
                state: FlaxPermissionState.granted,
                scope: both,
              ),
            );
          }
          expect((await fresh).state, FlaxPermissionState.granted);
          expect((await joined).state, FlaxPermissionState.granted);
          expect(count, 2);
        },
      );
    }

    test(
      'manager close during a native flight cannot restore authority',
      () async {
        await context.request(orders.id);
        final lease = context.lease(
          orders.id,
          operation: 'closing.read',
          scope: both,
        );
        final response = Completer<FlaxNativePermissionStatus>();
        native.answer = (_) => response.future;
        final late = context.query(orders.id);
        final rejected = expectLater(late, throwsStateError);
        await manager.close();
        response.complete(
          const FlaxNativePermissionStatus(
            state: FlaxPermissionState.granted,
            scope: both,
          ),
        );
        await rejected;
        expect(lease.isActive, isFalse);
        expect(
          () => context.require(orders.id, operation: 'closed', scope: a),
          throwsStateError,
        );
      },
    );

    test('native-free origin queries never call the adapter', () async {
      final network = await _approve(
        manager,
        manifest: _manifest(
          appId: 'example.network',
          permission: 'flax.network',
        ),
      );
      final free = _context(network);
      final count = native.queries;
      for (var i = 0; i < 128; i++) {
        final scope = {
          'origins': ['https://host$i.example'],
        };
        expect(
          (await free.query('flax.network', scope: scope)).state,
          FlaxPermissionState.granted,
        );
        free.require('flax.network', operation: 'fetch', scope: scope);
      }
      expect(native.queries, count);
      await free.close();
    });
  });

  group('on-demand native prerequisites', () {
    const a = {
      'origins': ['https://a.example'],
    };
    const b = {
      'origins': ['https://b.example'],
    };
    const both = {
      'origins': ['https://a.example', 'https://b.example'],
    };
    late _RequestingNative native;
    late FlaxPermissionApplication app;
    late FlaxPermissionContext context;
    final dialogs = <FlaxPermissionRequest>[];
    setUp(() async {
      await manager.close();
      native = _RequestingNative();
      manager = FlaxPermissionManager(
        storage: storage,
        native: native,
        providers: const [
          FlaxPermissionProvider(
            orders,
            requiresNative: true,
            scope: FlaxOriginPermissionScope(),
          ),
        ],
      );
      app = await _approve(manager, manifest: _manifest(scope: both));
      dialogs.clear();
      context = _context(
        app,
        onRequest: (request) async {
          dialogs.add(request);
          return FlaxPermissionDecision.allow;
        },
      );
    });
    tearDown(() => context.close());

    test('query and synchronous admission never invoke a requester', () async {
      expect((await context.query(orders.id)).requested, isFalse);
      expect(
        () => context.require(orders.id, operation: 'read'),
        throwsA(isA<FlaxPermissionException>()),
      );
      expect(native.requests, isEmpty);
      expect(dialogs, isEmpty);
    });

    test('native grant is followed by independent module denial', () async {
      final denied = _context(
        app,
        onRequest: (_) async => FlaxPermissionDecision.deny,
      );
      final result = await denied.request(orders.id);
      expect(native.requests, hasLength(1));
      expect(native.requests.single.scope, both);
      expect(
        () => (native.requests.single.scope as Map)['origins'] = <String>[],
        throwsUnsupportedError,
      );
      expect(result.reason, 'moduleDenied');
      expect(result.requested, isTrue);
      expect(
        (await context.query(orders.id)).state,
        FlaxPermissionState.denied,
      );
      await denied.close();
    });

    test(
      'native denial and absent module UI never create module history',
      () async {
        native.onRequest = (_) async {};
        final result = await context.request(orders.id);
        expect(native.requests, hasLength(1));
        expect(result.requested, isFalse);
        expect(dialogs, isEmpty);
        native.onRequest = null;
        final withoutUI = _context(app);
        expect(
          (await withoutUI.request(orders.id)).reason,
          'moduleConsentUnavailable',
        );
        expect((await context.query(orders.id)).requested, isFalse);
        await withoutUI.close();
      },
    );

    test('interaction is required before native and module prompts', () async {
      var foreground = false;
      final background = _context(
        app,
        canInteract: () => foreground,
        onRequest: (_) async => throw StateError('No background module UI'),
      );
      expect(
        (await background.request(orders.id)).reason,
        'interactionRequired',
      );
      expect(native.requests, isEmpty);
      foreground = true;
      native.onRequest = (_) async {
        native.state = FlaxPermissionState.granted;
        foreground = false;
      };
      final result = await background.request(orders.id);
      expect(result.reason, 'interactionRequired');
      expect(result.requested, isFalse);
      expect(native.requests, hasLength(1));
      await background.close();
    });

    test('current account approval is reused after native recovery', () async {
      await context.request(orders.id);
      native.state = FlaxPermissionState.denied;
      expect(
        (await context.request(orders.id)).state,
        FlaxPermissionState.granted,
      );
      expect(native.requests, hasLength(2));
      expect(dialogs, hasLength(1));
      final otherAccount = _context(
        app,
        account: 'other',
        onRequest: (_) async => FlaxPermissionDecision.deny,
      );
      expect((await otherAccount.request(orders.id)).reason, 'moduleDenied');
      expect(
        (await context.query(orders.id)).state,
        FlaxPermissionState.granted,
      );
      await otherAccount.close();
    });

    test('only explicit requestability enables native attempts', () async {
      for (final state in [
        FlaxPermissionState.denied,
        FlaxPermissionState.unknown,
        FlaxPermissionState.unavailable,
        FlaxPermissionState.limited,
      ]) {
        native.state = state;
        native.canRequest = false;
        await context.request(orders.id);
      }
      expect(native.requests, isEmpty);
      expect(dialogs, isEmpty);
    });

    test(
      'invalid declarations, policy, provider and scope never prompt',
      () async {
        final denied = _context(app, allow: {});
        final missing = FlaxPermissionContext(
          manifest: app.manifest,
          policy: FlaxPermissionPolicy(application: app, allow: {orders.id}),
          availablePermissions: {},
        );
        expect((await denied.request(orders.id)).reason, 'hostDenied');
        expect((await missing.request(orders.id)).reason, 'providerMissing');
        expect(
          (await context.request(
            orders.id,
            scope: {
              'origins': ['https://other.example'],
            },
          )).reason,
          'declaredScopeInsufficient',
        );
        await manager.revoke(app, orders.id);
        await manager.approvePermission(app, orders.id);
        expect(native.requests, isEmpty);
        await denied.close();
        await missing.close();
      },
    );

    test(
      'supplemental native request uses the complete module consent target',
      () async {
        await context.request(orders.id, scope: a);
        native.state = FlaxPermissionState.denied;
        await context.request(orders.id, scope: b);
        expect(native.requests.map((r) => r.scope), [a, both]);
        expect(dialogs.map((r) => r.scope), [a, both]);
        expect(dialogs.last.approvedScope, a);
      },
    );

    test(
      'fresh query after native work fences an older exact pending query',
      () async {
        final physical = Completer<void>();
        native.onRequest = (_) => physical.future;
        final request = context.request(orders.id, scope: a);
        await _until(() => native.requests.isNotEmpty);
        final old = Completer<FlaxNativePermissionStatus>();
        native.answer = (_) => old.future;
        final oldQuery = context.query(orders.id, scope: a);
        native.answer = (_) async =>
            const FlaxNativePermissionStatus.notRequired();
        physical.complete();
        await _until(() => dialogs.isNotEmpty);
        expect((await request).state, FlaxPermissionState.granted);
        old.complete(
          const FlaxNativePermissionStatus(state: FlaxPermissionState.denied),
        );
        expect((await oldQuery).state, FlaxPermissionState.granted);
      },
    );

    test(
      'native work is shared across owners but module consent is separate',
      () async {
        final otherApp = await _approve(
          manager,
          manifest: _manifest(appId: 'example.other', scope: both),
        );
        var otherDialogs = 0;
        final other = _context(
          otherApp,
          onRequest: (_) async {
            otherDialogs++;
            return FlaxPermissionDecision.allow;
          },
        );
        final physical = Completer<void>();
        native.onRequest = (_) => physical.future;
        final left = context.request(orders.id);
        final right = other.request(orders.id);
        await _until(() => native.requests.isNotEmpty);
        await Future<void>.delayed(Duration.zero);
        expect(native.requests, hasLength(1));
        native.state = FlaxPermissionState.granted;
        physical.complete();
        expect((await left).state, FlaxPermissionState.granted);
        expect((await right).state, FlaxPermissionState.granted);
        expect(dialogs, hasLength(1));
        expect(otherDialogs, 1);
        await other.close();
      },
    );

    test(
      'duplicate requests on one context share native work and consent',
      () async {
        final physical = Completer<void>();
        native.onRequest = (_) => physical.future;
        final first = context.request(orders.id);
        final second = context.request(orders.id);
        await _until(() => native.requests.isNotEmpty);
        native.state = FlaxPermissionState.granted;
        physical.complete();
        final results = await Future.wait([first, second]);
        expect(results.map((result) => result.state), [
          FlaxPermissionState.granted,
          FlaxPermissionState.granted,
        ]);
        expect(native.requests, hasLength(1));
        expect(dialogs, hasLength(1));
      },
    );

    test('different native targets are busy and one closing waiter preserves peers', () async {
      final peer = _context(
        app,
        onRequest: (_) async => FlaxPermissionDecision.allow,
      );
      final physical = Completer<void>();
      native.onRequest = (_) => physical.future;
      final first = context.request(orders.id, scope: a);
      final closed = expectLater(first, throwsStateError);
      final second = peer.request(orders.id, scope: a);
      await _until(() => native.requests.isNotEmpty);
      await Future<void>.delayed(Duration.zero);
      expect((await peer.request(orders.id, scope: b)).reason, 'busy');
      await context.close();
      await closed;
      expect(native.requests.single.isCancelled, isFalse);
      native.state = FlaxPermissionState.granted;
      physical.complete();
      expect((await second).state, FlaxPermissionState.granted);
      await peer.close();
    });

    test('all closed waiters release callers while a late native error retains the physical slot', () async {
      final physical = Completer<void>();
      native.onRequest = (_) => physical.future;
      final first = context.request(orders.id);
      final closed = expectLater(first, throwsStateError);
      await _until(() => native.requests.isNotEmpty);
      await context.close();
      await closed;
      await native.requests.single.whenCancelled;
      final replacement = _context(
        app,
        account: 'new-account',
        onRequest: (_) async => FlaxPermissionDecision.allow,
      );
      expect((await replacement.request(orders.id)).reason, 'busy');
      expect(native.requests, hasLength(1));
      physical.completeError(StateError('RETIRED_NATIVE_REQUEST_FAILED'));
      await Future<void>.delayed(Duration.zero);
      native.onRequest = null;
      expect(
        (await replacement.request(orders.id)).state,
        FlaxPermissionState.granted,
      );
      expect(dialogs, isEmpty);
      await replacement.close();
    });

    test(
      'native failures propagate without history and release the settled slot',
      () async {
        native.onRequest = (_) async =>
            throw StateError('NATIVE_REQUEST_FAILED');
        await expectLater(context.request(orders.id), throwsStateError);
        expect((await context.query(orders.id)).requested, isFalse);
        expect(dialogs, isEmpty);
        native.onRequest = null;
        expect(
          (await context.request(orders.id)).state,
          FlaxPermissionState.granted,
        );
      },
    );

    test('storage failure cancels native participation without freeing physical work', () async {
      final physical = Completer<void>();
      native.onRequest = (_) => physical.future;
      final pending = context.request(orders.id);
      await _until(() => native.requests.isNotEmpty);
      storage.failWrites = true;
      await expectLater(
        manager.retryWrites(app),
        throwsA(isA<FlaxSecureStorageException>()),
      );
      expect((await pending).reason, 'secureStorageUnavailable');
      await native.requests.single.whenCancelled;
      storage.failWrites = false;
      await manager.retryWrites(app);
      expect((await context.request(orders.id)).reason, 'busy');
      physical.complete();
      expect(dialogs, isEmpty);
    });

    test('successful native work does not signal cancellation', () async {
      expect(
        (await context.request(orders.id)).state,
        FlaxPermissionState.granted,
      );
      expect(native.requests.single.isCancelled, isFalse);
    });

    for (final phase in ['initial query', 'native request', 'final query']) {
      for (final retirement in [
        'revoke',
        'declaration',
        'uninstall',
        'manager close',
      ]) {
        test(
          '$retirement during $phase cannot publish module consent',
          () async {
            final physical = Completer<void>();
            final observed = Completer<FlaxNativePermissionStatus>();
            native.onRequest = (_) => physical.future;
            if (phase == 'initial query') {
              native.answer = (_) => observed.future;
            }
            final pending = context.request(orders.id);
            var settled = false;
            final outcome = pending.then<Object>(
              (v) {
                settled = true;
                return v;
              },
              onError: (Object e) {
                settled = true;
                return e;
              },
            );
            await _until(
              () => phase == 'initial query'
                  ? native.queries > 0
                  : native.requests.isNotEmpty,
            );
            if (phase == 'final query') {
              native.answer = (_) => observed.future;
              final queries = native.queries;
              physical.complete();
              await _until(() => native.queries > queries);
            }
            switch (retirement) {
              case 'revoke':
                await manager.revoke(app, orders.id);
              case 'declaration':
                await _approve(
                  manager,
                  manifest: _manifest(scope: both, purpose: 'Changed purpose'),
                );
              case 'uninstall':
                await manager.uninstall(app.appId, removeFiles: () async {});
              case 'manager close':
                await manager.close();
            }
            await Future<void>.delayed(Duration.zero);
            final settledBeforeRelease = settled;
            if (!physical.isCompleted) physical.complete();
            if (!observed.isCompleted) {
              observed.complete(const FlaxNativePermissionStatus.notRequired());
            }
            final result = await outcome;
            expect(settledBeforeRelease, isTrue);
            if (result is FlaxPermissionResult) {
              expect(result.state, isNot(FlaxPermissionState.granted));
            } else {
              expect(result, isStateError);
            }
            expect(dialogs, isEmpty);
          },
        );
      }
    }

    for (final phase in [
      'initial query',
      'final query',
      'shared consent',
      'post-consent query',
    ]) {
      test(
        'closing one caller during $phase promptly preserves its peer',
        () async {
          native.state = phase == 'final query'
              ? FlaxPermissionState.denied
              : FlaxPermissionState.granted;
          final observed = Completer<FlaxNativePermissionStatus>();
          final reached = Completer<void>();
          final answer = Completer<FlaxPermissionDecision>();
          FlaxPermissionRequest? consent;
          var prompts = 0;
          Future<FlaxPermissionDecision> prompt(FlaxPermissionRequest request) {
            prompts++;
            consent = request;
            if (phase == 'shared consent') reached.complete();
            return answer.future;
          }

          native.answer = (_) {
            final hold =
                phase == 'initial query' ||
                phase == 'final query' && native.requests.isNotEmpty ||
                phase == 'post-consent query' && answer.isCompleted;
            if (hold) {
              if (!reached.isCompleted) reached.complete();
              return observed.future;
            }
            return Future.value(
              FlaxNativePermissionStatus(
                state: native.state,
                canRequest: native.canRequest,
              ),
            );
          };
          final first = _context(app, onRequest: prompt);
          final peer = _context(app, onRequest: prompt);
          Object? retired;
          final closed = first
              .request(orders.id)
              .then<Object>(
                (value) => retired = value,
                onError: (Object error) => retired = error,
              );
          final live = peer.request(orders.id);
          if (phase == 'post-consent query') {
            await _until(() => prompts == 1);
            answer.complete(FlaxPermissionDecision.allow);
          }
          await reached.future;
          await Future<void>.delayed(Duration.zero);
          await first.close();
          await Future<void>.delayed(Duration.zero);
          final retiredBeforeRelease = retired;
          final sharedConsentCancelled = consent?.isCancelled ?? false;
          native.answer = null;
          native.state = FlaxPermissionState.granted;
          observed.complete(const FlaxNativePermissionStatus.notRequired());
          if (!answer.isCompleted) {
            answer.complete(FlaxPermissionDecision.allow);
          }
          await closed;
          final result = await live;
          await peer.close();
          expect(retiredBeforeRelease, isStateError);
          expect(result.state, FlaxPermissionState.granted);
          expect(sharedConsentCancelled, isFalse);
          expect(prompts, 1);
          expect(native.requests, hasLength(phase == 'final query' ? 1 : 0));
          if (phase == 'post-consent query') {
            await manager.close();
            manager = FlaxPermissionManager(
              storage: storage,
              native: native,
              providers: const [
                FlaxPermissionProvider(
                  orders,
                  requiresNative: true,
                  scope: FlaxOriginPermissionScope(),
                ),
              ],
            );
            final reopened = await manager.openApplication(
              appId: app.appId,
              sourceIdentity: 'host:trusted',
            );
            final fresh = _context(reopened!);
            expect(
              (await fresh.query(orders.id)).state,
              FlaxPermissionState.granted,
            );
            await fresh.close();
          }
        },
      );
    }

    test('installation change cannot return an old grant while its replacement is saving', () async {
      native.state = FlaxPermissionState.granted;
      await context.request(orders.id, scope: a);
      final observed = Completer<FlaxNativePermissionStatus>();
      native.answer = (scope) => (scope as Map)['origins'].length == 1
          ? observed.future
          : Future.value(const FlaxNativePermissionStatus.notRequired());
      Object? retired;
      final request = context
          .request(orders.id, scope: a)
          .then<Object>(
            (value) => retired = value,
            onError: (Object error) => retired = error,
          );
      await context.query(orders.id);
      final writing = Completer<void>(), release = Completer<void>();
      storage.beforeWrite = (module, value) async {
        if (module == 'flax.permissions' &&
            utf8.decode(value).contains('Changed purpose')) {
          storage.beforeWrite = null;
          writing.complete();
          await release.future;
        }
      };
      final updating = _approve(
        manager,
        manifest: _manifest(scope: both, purpose: 'Changed purpose'),
      );
      await writing.future;
      await Future<void>.delayed(Duration.zero);
      final beforeRelease = retired;
      release.complete();
      observed.complete(const FlaxNativePermissionStatus.notRequired());
      await updating;
      await request;
      expect(beforeRelease, isA<FlaxPermissionResult>());
      expect(
        (beforeRelease as FlaxPermissionResult).state,
        FlaxPermissionState.unavailable,
      );
      expect(beforeRelease.reason, 'requestCancelled');
      expect(dialogs, hasLength(1));
    });
  });

  group('native refresh and consent publication', () {
    const target = {
      'origins': ['https://a.example'],
    };
    late _Native native;
    late FlaxPermissionApplication app;
    late FlaxPermissionContext context;
    var prompts = 0;
    setUp(() async {
      await manager.close();
      native = _Native()
        ..answer = (scope) async => FlaxNativePermissionStatus(
          state: FlaxPermissionState.granted,
          scope: scope,
        );
      manager = FlaxPermissionManager(
        storage: storage,
        native: native,
        providers: const [
          FlaxPermissionProvider(
            orders,
            requiresNative: true,
            scope: FlaxOriginPermissionScope(),
          ),
        ],
      );
      app = await _approve(manager, manifest: _manifest(scope: target));
      prompts = 0;
      context = _context(
        app,
        onRequest: (_) async {
          prompts++;
          return FlaxPermissionDecision.allow;
        },
      );
    });
    tearDown(() => context.close());

    for (final scenario in [
      (retirement: 'close', lateError: false),
      (retirement: 'close', lateError: true),
      (retirement: 'revoke', lateError: true),
      (retirement: 'manual cancel', lateError: true),
    ]) {
      test(
        '${scenario.retirement} during post-consent query discards its late ${scenario.lateError ? 'error' : 'value'} without reporting a ghost error',
        () async {
          final observed = Completer<FlaxNativePermissionStatus>();
          final reached = Completer<void>();
          final errors = <Object>[];
          final retired = _context(
            app,
            onError: (error, _) => errors.add(error),
            onRequest: (_) async {
              native.answer = (_) {
                reached.complete();
                return observed.future;
              };
              return FlaxPermissionDecision.allow;
            },
          );
          final outcome = retired
              .request(orders.id)
              .then<Object>((value) => value, onError: (Object error) => error);
          await reached.future;
          switch (scenario.retirement) {
            case 'close':
              await retired.close();
              expect(await outcome, isStateError);
            case 'revoke':
              await manager.revoke(app, orders.id);
              expect(
                (await outcome as FlaxPermissionResult).state,
                FlaxPermissionState.denied,
              );
            case 'manual cancel':
              manager.cancelRequests();
              expect(
                (await outcome as FlaxPermissionResult).state,
                isNot(FlaxPermissionState.granted),
              );
          }
          if (scenario.lateError) {
            observed.completeError(StateError('LATE_NATIVE_QUERY_ERROR'));
          } else {
            observed.complete(const FlaxNativePermissionStatus.notRequired());
          }
          await Future<void>.delayed(Duration.zero);
          native.answer = (scope) async => FlaxNativePermissionStatus(
            state: FlaxPermissionState.granted,
            scope: scope,
          );
          expect(errors, isEmpty);
          expect(
            (await context.query(orders.id)).state,
            scenario.retirement == 'revoke'
                ? FlaxPermissionState.denied
                : FlaxPermissionState.prompt,
          );
          await retired.close();
        },
      );
    }

    for (final stage in [
      'new query',
      'reused pending query',
      'reentrant close',
    ]) {
      test(
        'active post-consent failure during $stage is reported once',
        () async {
          if (stage == 'reentrant close') await context.request(orders.id);
          final answer = Completer<FlaxPermissionDecision>();
          final shown = Completer<void>();
          final errors = <Object>[];
          final requester = _context(
            app,
            account: 'query-failure',
            onError: (error, _) => errors.add(error),
            onRequest: (_) {
              shown.complete();
              return answer.future;
            },
          );
          if (stage == 'reentrant close') {
            context.lease(orders.id, operation: 'read').onRevoke(() {
              unawaited(requester.close());
            });
          }
          final outcome = requester
              .request(orders.id)
              .then<Object>((value) => value, onError: (Object error) => error);
          await shown.future;
          final reached = Completer<void>();
          final observed = Completer<FlaxNativePermissionStatus>();
          final beforeQueries = native.queries;
          native.answer = (_) {
            reached.complete();
            return observed.future;
          };
          Future<Object>? external;
          if (stage == 'reused pending query') {
            external = context
                .query(orders.id)
                .then<Object>(
                  (value) => value,
                  onError: (Object error) => error,
                );
            await reached.future;
          }
          answer.complete(FlaxPermissionDecision.allow);
          await reached.future;
          await Future<void>.delayed(Duration.zero);
          final sharedQueries = native.queries;
          final failure = StateError('ACTIVE_NATIVE_QUERY_FAILURE');
          observed.completeError(failure);
          final result = await outcome;
          if (external != null) expect(await external, same(failure));
          await Future<void>.delayed(Duration.zero);
          final deliveries = [
            ...errors,
            if (identical(result, failure)) result,
          ];
          expect(deliveries, [same(failure)]);
          if (result is FlaxPermissionResult) {
            expect(result.state, isNot(FlaxPermissionState.granted));
          }
          if (stage == 'reentrant close') expect(requester.isOpen, isFalse);
          expect(sharedQueries, beforeQueries + 1);
          await requester.close();
        },
      );
    }

    test(
      'pending benign refresh blocks binding but preserves independent consent',
      () async {
        final reached = Completer<void>(), release = Completer<void>();
        storage.beforeWrite = (module, value) async {
          if (module == 'flax.permissions' &&
              utf8.decode(value).contains('"lastDecision":"allow"') &&
              !reached.isCompleted) {
            reached.complete();
            await release.future;
          }
        };
        final requested = context.request(orders.id);
        await reached.future;
        final observed = Completer<FlaxNativePermissionStatus>();
        native.answer = (_) => observed.future;
        final refresh = context.query(orders.id);
        expect(
          () => context.require(orders.id, operation: 'read'),
          throwsA(isA<FlaxPermissionException>()),
        );
        release.complete();
        expect((await requested).state, FlaxPermissionState.unknown);
        observed.complete(
          const FlaxNativePermissionStatus(
            state: FlaxPermissionState.granted,
            scope: target,
          ),
        );
        await refresh;
        native.answer = (scope) async => FlaxNativePermissionStatus(
          state: FlaxPermissionState.granted,
          scope: scope,
        );
        expect(
          (await context.query(orders.id)).state,
          FlaxPermissionState.granted,
        );
        expect(prompts, 1);
      },
    );

    for (final interruption in [
      'denied',
      'limited',
      'error',
      'manual invalidation',
    ]) {
      test(
        '$interruption cancels an in-flight grant write and correction stays durable',
        () async {
          final reached = Completer<void>(), release = Completer<void>();
          storage.beforeWrite = (module, value) async {
            if (module == 'flax.permissions' &&
                utf8.decode(value).contains('"lastDecision":"allow"') &&
                !reached.isCompleted) {
              reached.complete();
              await release.future;
            }
          };
          final requested = context.request(orders.id);
          await reached.future;
          if (interruption == 'manual invalidation') {
            manager.invalidateNative();
          } else {
            native.answer = (_) async {
              if (interruption == 'error') {
                throw StateError('CURRENT_NATIVE_QUERY_ERROR');
              }
              return FlaxNativePermissionStatus(
                state: interruption == 'denied'
                    ? FlaxPermissionState.denied
                    : FlaxPermissionState.limited,
              );
            };
            if (interruption == 'error') {
              await expectLater(context.query(orders.id), throwsStateError);
            } else {
              await context.query(orders.id);
            }
          }
          // Restoring native state cannot revive consent already cancelled by a real fence.
          native.answer = (scope) async => FlaxNativePermissionStatus(
            state: FlaxPermissionState.granted,
            scope: scope,
          );
          await context.query(orders.id);
          release.complete();
          expect((await requested).state, isNot(FlaxPermissionState.granted));
          await context.close();
          final fresh = _context(app);
          expect(
            (await fresh.query(orders.id)).state,
            FlaxPermissionState.prompt,
          );
          expect((await fresh.query(orders.id)).requested, isTrue);
          expect(prompts, 1);
          await fresh.close();
        },
      );
    }
  });

  test('native-free consent survives native snapshot invalidation', () async {
    final app = await _approve(manager);
    final answer = Completer<FlaxPermissionDecision>();
    FlaxPermissionRequest? prompt;
    final context = _context(
      app,
      onRequest: (request) {
        prompt = request;
        return answer.future;
      },
    );
    final result = context.request(orders.id);
    await _until(() => prompt != null);
    manager.invalidateNative();
    expect(prompt!.isCancelled, isFalse);
    answer.complete(FlaxPermissionDecision.allow);
    expect((await result).state, FlaxPermissionState.granted);
    await context.close();
  });

  test('host native prerequisite is checked before module consent', () async {
    await manager.close();
    final native = _Native();
    manager = FlaxPermissionManager(storage: storage, native: native);
    final app = await _approve(
      manager,
      manifest: _manifest(permission: 'flax.camera'),
    );
    var dialogs = 0;
    final context = _context(
      app,
      onRequest: (_) async {
        dialogs++;
        return FlaxPermissionDecision.allow;
      },
    );
    expect(
      (await context.request('flax.camera')).reason,
      'hostPermissionRequired',
    );
    expect(dialogs, 0);
    expect((await context.query('flax.camera')).requested, isFalse);
    native.state = FlaxPermissionState.granted;
    expect(
      (await context.query('flax.camera')).state,
      FlaxPermissionState.prompt,
    );
    expect(
      (await context.request('flax.camera')).state,
      FlaxPermissionState.granted,
    );
    native.state = FlaxPermissionState.denied;
    await manager.refresh();
    expect(
      () => context.require('flax.camera', operation: 'capture'),
      throwsA(isA<FlaxPermissionException>()),
    );
    context.close();
  });

  test('supplemental consent queries the combined native scope and respects its limit', () async {
    const a = {
      'origins': ['https://a.example'],
    };
    const b = {
      'origins': ['https://b.example'],
    };
    const c = {
      'origins': ['https://c.example'],
    };
    const both = {
      'origins': ['https://a.example', 'https://b.example'],
    };
    const all = {
      'origins': [
        'https://a.example',
        'https://b.example',
        'https://c.example',
      ],
    };
    final queried = <Object>[];
    final native = _Native()
      ..answer = (scope) async {
        queried.add(scope);
        return const FlaxNativePermissionStatus(
          state: FlaxPermissionState.granted,
          scope: both,
        );
      };
    await manager.close();
    manager = FlaxPermissionManager(
      storage: storage,
      native: native,
      providers: const [
        FlaxPermissionProvider(
          orders,
          scope: FlaxOriginPermissionScope(),
          requiresNative: true,
        ),
      ],
    );
    final app = await _approve(manager, manifest: _manifest(scope: all));
    final prompts = <FlaxPermissionRequest>[];
    final context = _context(
      app,
      onRequest: (request) async {
        prompts.add(request);
        return FlaxPermissionDecision.allow;
      },
    );
    expect(
      (await context.request(orders.id, scope: a)).state,
      FlaxPermissionState.granted,
    );
    expect(
      (await context.request(orders.id, scope: b)).state,
      FlaxPermissionState.granted,
    );
    expect(prompts.map((request) => request.scope), [a, both]);
    expect(prompts.last.approvedScope, a);
    expect(queried, contains(equals(both)));
    expect(
      (await context.request(orders.id, scope: c)).reason,
      'hostScopeInsufficient',
    );
    expect(queried, contains(equals(all)));
    expect(prompts, hasLength(2));
    expect((await context.query(orders.id, scope: both)).scope, both);
    await context.close();
  });

  for (final interruption in ['revoke', 'close', 'declaration update']) {
    test('a combined native query cannot outlive $interruption', () async {
      const a = {
        'origins': ['https://a.example'],
      };
      const b = {
        'origins': ['https://b.example'],
      };
      const both = {
        'origins': ['https://a.example', 'https://b.example'],
      };
      final reached = Completer<void>();
      final release = Completer<FlaxNativePermissionStatus>();
      final native = _Native()
        ..answer = (scope) {
          if ((scope as Map)['origins'] case [_, _]) {
            reached.complete();
            return release.future;
          }
          return Future.value(const FlaxNativePermissionStatus.notRequired());
        };
      await manager.close();
      manager = FlaxPermissionManager(
        storage: storage,
        native: native,
        providers: const [
          FlaxPermissionProvider(
            orders,
            scope: FlaxOriginPermissionScope(),
            requiresNative: true,
          ),
        ],
      );
      final app = await _approve(manager, manifest: _manifest(scope: both));
      var dialogs = 0;
      final context = _context(
        app,
        onRequest: (_) async {
          dialogs++;
          return FlaxPermissionDecision.allow;
        },
      );
      await context.request(orders.id, scope: a);
      final request = context.request(orders.id, scope: b);
      await reached.future;
      if (interruption == 'close') {
        final closed = expectLater(request, throwsStateError);
        await context.close();
        release.complete(const FlaxNativePermissionStatus.notRequired());
        await closed;
      } else {
        if (interruption == 'revoke') {
          await manager.revoke(app, orders.id);
        } else {
          await _approve(
            manager,
            manifest: _manifest(scope: both, purpose: 'Export orders'),
          );
        }
        release.complete(const FlaxNativePermissionStatus.notRequired());
        expect(
          (await request).reason,
          interruption == 'revoke' ? 'moduleDenied' : 'requestCancelled',
        );
      }
      expect(dialogs, 1);
      await context.close();
    });
  }

  test(
    'source replacement is rejected and reinstall gets a fresh owner',
    () async {
      final app = await _approve(manager);
      await expectLater(
        _approve(manager, source: 'host:other'),
        throwsStateError,
      );
      final context = _context(
        app,
        onRequest: (_) async => FlaxPermissionDecision.allow,
      );
      await context.request(orders.id);
      await manager.uninstall(app.appId, removeFiles: () async {});
      final installed = await _approve(manager);
      expect(installed.owner, isNot(app.owner));
      final fresh = _context(installed);
      expect((await fresh.query(orders.id)).state, FlaxPermissionState.prompt);
      fresh.close();
    },
  );

  test(
    'ordinary code updates retain approval, purpose changes invalidate it',
    () async {
      final app = await _approve(manager);
      final context = _context(
        app,
        onRequest: (_) async => FlaxPermissionDecision.allow,
      );
      await context.request(orders.id);
      final unchanged = await _approve(manager);
      final reused = _context(unchanged);
      expect(
        (await reused.query(orders.id)).state,
        FlaxPermissionState.granted,
      );
      final changed = await _approve(
        manager,
        manifest: _manifest(purpose: 'Export orders'),
      );
      expect((await context.query(orders.id)).reason, 'notApproved');
      final updated = _context(changed);
      expect(
        (await updated.query(orders.id)).state,
        FlaxPermissionState.prompt,
      );
      expect((await updated.query(orders.id)).requested, isFalse);
      context.close();
      reused.close();
      updated.close();
    },
  );

  test(
    'install revocation survives updates and requires explicit host restore',
    () async {
      final app = await _approve(
        manager,
        manifest: _manifest(permission: 'flax.network'),
      );
      await manager.revoke(app, 'flax.network');
      final updated = await _approve(manager, manifest: app.manifest);
      final context = _context(updated);
      expect((await context.request('flax.network')).reason, 'notApproved');
      await manager.approvePermission(
        updated,
        'flax.network',
        scope: {
          'origins': ['https://a.example'],
        },
      );
      expect(
        (await context.query(
          'flax.network',
          scope: {
            'origins': ['https://a.example'],
          },
        )).state,
        FlaxPermissionState.granted,
      );
      expect(
        (await context.query(
          'flax.network',
          scope: {
            'origins': ['https://b.example'],
          },
        )).state,
        FlaxPermissionState.limited,
      );
      expect(
        () => manager.revoke(
          updated,
          'flax.network',
          scope: {
            'origins': ['https://b.example'],
          },
        ),
        throwsArgumentError,
      );
      await context.close();
    },
  );

  test('failed revocation stays disabled until the current record is durably retried', () async {
    final app = await _approve(
      manager,
      manifest: _manifest(permission: 'flax.network'),
    );
    final context = _context(app);
    storage.failWrites = true;
    await expectLater(
      manager.revoke(app, 'flax.network'),
      throwsA(isA<FlaxSecureStorageException>()),
    );
    expect(
      (await context.query('flax.network')).reason,
      'secureStorageUnavailable',
    );
    storage.failWrites = false;
    await manager.retryWrites(app);
    expect((await context.query('flax.network')).reason, 'notApproved');
    await context.close();
  });

  test(
    'Future and paused Stream leases reject late values and foreign callers',
    () async {
      final app = await _approve(manager);
      final context = _context(
        app,
        onRequest: (_) async => FlaxPermissionDecision.allow,
      );
      await context.request(orders.id);
      final lease = context.lease(orders.id, operation: 'load');
      final other = _context(app);
      expect(
        () => other.run(lease.requireActive),
        throwsA(isA<FlaxPermissionException>()),
      );
      final late = Completer<int>();
      final result = lease.guardFuture(() => late.future);
      final events = StreamController<int>(sync: true);
      var cancelled = false;
      events.onCancel = () => cancelled = true;
      final received = <int>[];
      final errors = <Object>[];
      final stacks = <StackTrace>[];
      final done = Completer<void>();
      final subscription = lease
          .guardStream(() => events.stream)
          .listen(
            received.add,
            onError: (Object error, StackTrace stack) {
              errors.add(error);
              stacks.add(stack);
            },
            onDone: done.complete,
          );
      final error = StateError('private stream failure');
      final stack = StackTrace.fromString('private stream stack');
      events.addError(error, stack);
      await _until(() => errors.isNotEmpty);
      expect(errors.single, same(error));
      expect(stacks.single.toString(), stack.toString());
      errors.clear();
      events.add(1);
      subscription.pause();
      events.add(2);
      final rejection = expectLater(
        result,
        throwsA(isA<FlaxPermissionException>()),
      );
      await manager.revoke(app, orders.id);
      late.complete(42);
      subscription.resume();
      await rejection;
      await done.future;
      expect(received, [1]);
      expect(errors.single, isA<FlaxPermissionException>());
      expect(cancelled, isTrue);
      await events.close();
      await context.close();
      await other.close();
    },
  );

  test(
    'Future failures retain their error and stack only while authorized',
    () async {
      final app = await _approve(manager);
      final context = _context(
        app,
        onRequest: (_) async => FlaxPermissionDecision.allow,
      );
      await context.request(orders.id);
      final lease = context.lease(orders.id, operation: 'load');
      final error = StateError('private backend failure');
      final stack = StackTrace.fromString('private backend stack');
      await lease
          .guardFuture<int>(() => Future<int>.error(error, stack))
          .then<void>(
            (_) => fail('The backend error must be preserved'),
            onError: (Object actual, StackTrace actualStack) {
              expect(actual, same(error));
              expect(actualStack.toString(), stack.toString());
            },
          );
      Future<void>? revocation;
      final pending = lease.guardFuture<int>(() {
        scheduleMicrotask(() {
          revocation = manager.revoke(app, orders.id);
        });
        Error.throwWithStackTrace(error, stack);
      });
      final rejected = expectLater(
        pending,
        throwsA(isA<FlaxPermissionException>()),
      );
      await rejected;
      await revocation;
      await context.close();
    },
  );

  test(
    'closing a caller still reports a real late consent storage failure once',
    () async {
      final app = await _approve(manager);
      final errors = <Object>[];
      final context = _context(
        app,
        onError: (error, _) => errors.add(error),
        onRequest: (_) async => FlaxPermissionDecision.allow,
      );
      final writing = Completer<void>(), release = Completer<void>();
      storage.beforeWrite = (module, value) async {
        if (module == 'flax.permissions' &&
            utf8.decode(value).contains('"lastDecision":"allow"')) {
          writing.complete();
          await release.future;
        }
      };
      Object? retired;
      final request = context
          .request(orders.id)
          .then<Object>(
            (value) => retired = value,
            onError: (Object error) => retired = error,
          );
      await writing.future;
      var drained = false;
      final closing = context.close().then((_) => drained = true);
      await Future<void>.delayed(Duration.zero);
      final beforeRelease = retired;
      final drainedBeforeRelease = drained;
      storage.failWrites = true;
      release.complete();
      await request;
      await closing;
      await Future<void>.delayed(Duration.zero);
      expect(beforeRelease, isStateError);
      expect(drainedBeforeRelease, isFalse);
      expect(errors, [isA<FlaxSecureStorageException>()]);
      storage.failWrites = false;
      final fresh = _context(app);
      expect((await fresh.query(orders.id)).reason, 'secureStorageUnavailable');
      await fresh.close();
    },
  );

  test(
    'closing waits for a started grant write and its corrective write',
    () async {
      final app = await _approve(manager);
      final context = _context(
        app,
        onRequest: (_) async => FlaxPermissionDecision.allow,
      );
      final reached = Completer<void>(), release = Completer<void>();
      storage.beforeWrite = (module, value) async {
        if (module == 'flax.permissions' &&
            String.fromCharCodes(value).contains('"lastDecision":"allow"')) {
          if (!reached.isCompleted) reached.complete();
          await release.future;
        }
      };
      final request = context.request(orders.id);
      final ignored = request.catchError(
        (Object _) => FlaxPermissionResult(
          permission: orders.id,
          state: FlaxPermissionState.denied,
          requested: true,
        ),
      );
      await reached.future;
      var closed = false;
      final closing = context.close().then((_) => closed = true);
      await Future<void>.delayed(Duration.zero);
      expect(closed, isFalse);
      release.complete();
      await closing;
      await ignored;
      final fresh = _context(app);
      expect((await fresh.query(orders.id)).state, FlaxPermissionState.prompt);
      await fresh.close();
    },
  );

  test(
    'interrupted writes never restore an unconfirmed grant after restart',
    () async {
      final app = await _approve(manager);
      final context = _context(
        app,
        onRequest: (_) async => FlaxPermissionDecision.allow,
      );
      storage.failAfterWrite = true;
      await expectLater(
        context.request(orders.id),
        throwsA(isA<FlaxSecureStorageException>()),
      );
      await context.close();
      await manager.close();
      storage.failAfterWrite = false;
      manager = FlaxPermissionManager(
        storage: storage,
        definitions: const [orders],
      );
      final recovered = (await manager.openApplication(
        appId: app.appId,
        sourceIdentity: 'host:trusted',
      ))!;
      final fresh = _context(
        recovered,
        onRequest: (_) async => FlaxPermissionDecision.allow,
      );
      expect((await fresh.query(orders.id)).reason, 'notApproved');
      await manager.approvePermission(recovered, orders.id);
      expect((await fresh.query(orders.id)).state, FlaxPermissionState.prompt);
      expect(
        (await fresh.request(orders.id)).state,
        FlaxPermissionState.granted,
      );
      await fresh.close();
    },
  );

  for (final afterEffect in [false, true]) {
    for (final shared in [false, true]) {
      test(
        'consent stays private across ${afterEffect ? 'completed' : 'pending'} marker deletion with ${shared ? 'a surviving waiter' : 'a sole waiter closing'}',
        () async {
          const a = {
            'origins': ['https://a.example'],
          };
          const b = {
            'origins': ['https://b.example'],
          };
          const both = {
            'origins': ['https://a.example', 'https://b.example'],
          };
          await manager.close();
          manager = FlaxPermissionManager(
            storage: storage,
            providers: const [
              FlaxPermissionProvider(
                orders,
                scope: FlaxOriginPermissionScope(),
              ),
            ],
          );
          final app = await _approve(manager, manifest: _manifest(scope: both));
          final first = _context(
            app,
            account: 'a',
            onRequest: (_) async => FlaxPermissionDecision.allow,
          );
          await first.request(orders.id, scope: a);
          final observer = _context(app, account: 'a');
          final second = shared
              ? _context(
                  app,
                  account: 'a',
                  onRequest: (_) async => FlaxPermissionDecision.allow,
                )
              : null;
          final reached = Completer<void>(), release = Completer<void>();
          Future<void> pause(String module, String key) async {
            if (module != 'flax.permissions' || key != 'pending') return;
            final record = jsonDecode(
              utf8.decode(storage.values[(module, app.owner, 'state')]!),
            ) as Map;
            final decision =
                ((record['accounts'] as Map)['"a"'] as Map?)?[orders.id]
                    as Map?;
            final approved = decision?['approvedScope'] as Map?;
            if ((approved?['origins'] as List?)?.contains(
                  'https://b.example',
                ) !=
                true) {
              return;
            }
            storage.beforeDelete = null;
            storage.afterDelete = null;
            reached.complete();
            await release.future;
          }

          if (afterEffect) {
            storage.afterDelete = pause;
          } else {
            storage.beforeDelete = pause;
          }
          final requesting = first.request(orders.id, scope: b);
          final rejected = expectLater(requesting, throwsStateError);
          final survivor = second?.request(orders.id, scope: b);
          await reached.future;
          expect(
            storage.values.containsKey((
              'flax.permissions',
              app.owner,
              'pending',
            )),
            !afterEffect,
          );
          expect(
            (await observer.query(orders.id, scope: a)).state,
            FlaxPermissionState.granted,
          );
          expect(
            (await observer.query(orders.id, scope: b)).state,
            FlaxPermissionState.limited,
          );
          expect(
            () => observer.require(orders.id, operation: 'read.b', scope: b),
            throwsA(isA<FlaxPermissionException>()),
          );
          final correcting = Completer<void>(),
              finishCorrection = Completer<void>();
          if (!shared) {
            storage.beforeWrite = (module, bytes) async {
              if (module == 'flax.permissions' &&
                  (jsonDecode(utf8.decode(bytes)) as Map).containsKey(
                    'declarations',
                  )) {
                storage.beforeWrite = null;
                correcting.complete();
                await finishCorrection.future;
              }
            };
          }
          var closed = false;
          final closing = first.close().then((_) => closed = true);
          release.complete();
          if (!shared) {
            await correcting.future;
            expect(closed, isFalse);
            finishCorrection.complete();
          }
          await closing;
          await rejected;
          if (survivor != null) {
            expect((await survivor).state, FlaxPermissionState.granted);
          }
          expect(
            (await observer.query(orders.id, scope: a)).state,
            FlaxPermissionState.granted,
          );
          expect(
            (await observer.query(orders.id, scope: b)).state,
            shared ? FlaxPermissionState.granted : FlaxPermissionState.limited,
          );
          await observer.close();
          await second?.close();
          await manager.close();
          manager = FlaxPermissionManager(
            storage: storage,
            providers: const [
              FlaxPermissionProvider(
                orders,
                scope: FlaxOriginPermissionScope(),
              ),
            ],
          );
          final reopened = (await manager.openApplication(
            appId: app.appId,
            sourceIdentity: 'host:trusted',
          ))!;
          final fresh = _context(reopened, account: 'a');
          expect(
            (await fresh.query(orders.id, scope: a)).state,
            FlaxPermissionState.granted,
          );
          expect(
            (await fresh.query(orders.id, scope: b)).state,
            shared ? FlaxPermissionState.granted : FlaxPermissionState.limited,
          );
          await fresh.close();
        },
      );
    }
  }

  for (final retryFirst in [false, true]) {
    test(
      'marker deletion errors after effect cannot revive the candidate on ${retryFirst ? 'retry' : 'restart'}',
      () async {
        final app = await _approve(manager);
        final context = _context(
          app,
          onRequest: (_) async => FlaxPermissionDecision.allow,
        );
        storage.afterDelete = (module, key) async {
          if (module == 'flax.permissions' &&
              key == 'pending' &&
              utf8
                  .decode(storage.values[(module, app.owner, 'state')]!)
                  .contains('"lastDecision":"allow"')) {
            storage.afterDelete = null;
            throw const FlaxSecureStorageException(
              FlaxSecureStorageFailure.ioFailure,
            );
          }
        };
        await expectLater(
          context.request(orders.id),
          throwsA(isA<FlaxSecureStorageException>()),
        );
        expect(
          (await context.query(orders.id)).reason,
          'secureStorageUnavailable',
        );
        expect(
          storage.values.containsKey((
            'flax.permissions',
            app.owner,
            'pending',
          )),
          isTrue,
        );
        if (retryFirst) {
          await manager.retryWrites(app);
          expect(
            (await context.query(orders.id)).state,
            FlaxPermissionState.prompt,
          );
        }
        await context.close();
        await manager.close();
        manager = FlaxPermissionManager(
          storage: storage,
          providers: const [FlaxPermissionProvider(orders)],
        );
        final reopened = (await manager.openApplication(
          appId: app.appId,
          sourceIdentity: 'host:trusted',
        ))!;
        final fresh = _context(reopened);
        final result = await fresh.query(orders.id);
        expect(
          result.state,
          retryFirst ? FlaxPermissionState.prompt : FlaxPermissionState.denied,
        );
        if (!retryFirst) expect(result.reason, 'notApproved');
        await fresh.close();
      },
    );
  }

  test('failed marker restoration reports both errors and retry saves only confirmed state', () async {
    final app = await _approve(manager);
    final context = _context(
      app,
      onRequest: (_) async => FlaxPermissionDecision.allow,
    );
    const deletion = FlaxSecureStorageException(
      FlaxSecureStorageFailure.ioFailure,
      cause: 'delete after effect',
    );
    const recovery = FlaxSecureStorageException(
      FlaxSecureStorageFailure.unavailable,
      cause: 'marker unavailable',
    );
    storage.afterDelete = (module, key) async {
      if (module == 'flax.permissions' &&
          key == 'pending' &&
          utf8
              .decode(storage.values[(module, app.owner, 'state')]!)
              .contains('"lastDecision":"allow"')) {
        storage.afterDelete = null;
        storage.beforeWrite = (module, bytes) async {
          if (module == 'flax.permissions' &&
              !(jsonDecode(utf8.decode(bytes)) as Map).containsKey(
                'declarations',
              )) {
            throw recovery;
          }
        };
        throw deletion;
      }
    };
    final failure = await context
        .request(orders.id)
        .then<FlaxSecureStorageException>(
          (_) => throw StateError('The uncertain deletion must fail'),
          onError: (Object error) => error as FlaxSecureStorageException,
        );
    final cause = failure.cause as ({Object original, Object recovery});
    expect(cause.original, same(deletion));
    expect(cause.recovery, same(recovery));
    expect((await context.query(orders.id)).reason, 'secureStorageUnavailable');
    expect(
      storage.values.containsKey(('flax.permissions', app.owner, 'pending')),
      isFalse,
    );
    storage.beforeWrite = null;
    await manager.retryWrites(app);
    expect((await context.query(orders.id)).state, FlaxPermissionState.prompt);
    await context.close();
  });

  test(
    'closing after publication preserves the confirmed module approval',
    () async {
      final app = await _approve(manager);
      final context = _context(
        app,
        onRequest: (_) async => FlaxPermissionDecision.allow,
      );
      expect(
        (await context.request(orders.id)).state,
        FlaxPermissionState.granted,
      );
      await context.close();
      final fresh = _context(app);
      expect((await fresh.query(orders.id)).state, FlaxPermissionState.granted);
      await fresh.close();
    },
  );

  test(
    'revocation wins over an installation update that is already saving',
    () async {
      final app = await _approve(
        manager,
        manifest: _manifest(permission: 'flax.network'),
      );
      final reached = Completer<void>(), release = Completer<void>();
      storage.beforeWrite = (module, bytes) async {
        if (module == 'flax.permissions' &&
            String.fromCharCodes(bytes).contains('"revision":2')) {
          if (!reached.isCompleted) reached.complete();
          await release.future;
        }
      };
      final update = _approve(manager, manifest: app.manifest);
      final rejected = expectLater(update, throwsStateError);
      await reached.future;
      final revoke = manager.revoke(app, 'flax.network');
      release.complete();
      await rejected;
      await revoke;
      final context = _context(app);
      expect((await context.query('flax.network')).reason, 'notApproved');
      await context.close();
    },
  );
}
