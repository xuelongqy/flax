part of '../../bindings.dart';

final class _PermissionLifecycle with WidgetsBindingObserver {
  factory _PermissionLifecycle(_Session session) {
    final manager = session.permissions.manager!;
    final observer = _observers[manager] ??= _PermissionLifecycle._(manager);
    observer._prune();
    observer._owners.add(WeakReference(session));
    if (!observer._attached) {
      WidgetsBinding.instance.addObserver(observer);
      observer._attached = true;
    }
    return observer;
  }
  _PermissionLifecycle._(this.manager);
  static final _observers = Expando<_PermissionLifecycle>();
  final FlaxPermissionManager manager;
  final _owners = <WeakReference<_Session>>[];
  int _generation = 0;
  bool _attached = false;

  void remove(_Session session) {
    _owners.removeWhere((owner) => identical(owner.target, session));
    _prune();
  }

  void _prune() {
    _owners.removeWhere((owner) {
      final session = owner.target;
      return session == null || session.closing || !session.permissions.isOpen;
    });
    if (_owners.isEmpty && _attached) {
      WidgetsBinding.instance.removeObserver(this);
      _attached = false;
      _generation++;
    }
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    _prune();
    if (_owners.isEmpty) return;
    final generation = ++_generation;
    manager.invalidateNative();
    if (state != AppLifecycleState.resumed) {
      manager.cancelRequests();
      return;
    }
    for (final owner in _owners.toList()) {
      final session = owner.target;
      if (session == null || session.closing || !session.permissions.isOpen) {
        continue;
      }
      session.permissions.refresh().catchError((
        Object error,
        StackTrace stack,
      ) {
        final current = owner.target;
        if (generation == _generation &&
            current != null &&
            !current.closing &&
            current.permissions.isOpen) {
          current.report(error, stack);
        }
      });
    }
  }
}

extension _PermissionCalls on _Session {
  // Worker source brokers use the same authority as ordinary module loading.
  void authorizeModule(
    Uri uri,
    FlaxModuleKind? kind, {
    void Function(String, FlaxPermissionLease Function())? retain,
  }) {
    requireOpen();
    if (uri.scheme == 'http' || uri.scheme == 'https') {
      final key = FlaxOriginPermissionScope.origin(uri);
      if (retain != null) {
        retain('module:$key', () => permissions.network(uri, module: true));
      } else {
        final lease = _remoteModulePermissions.putIfAbsent(key, () {
          final lease = permissions.network(uri, module: true);
          final weak = WeakReference(this);
          lease.onRevoke(() {
            final session = weak.target;
            if (session != null) unawaited(session.requestClose());
          });
          return lease;
        });
        lease.requireActive();
      }
    }
    if (kind == FlaxModuleKind.wasm) {
      if (retain != null) {
        retain(
          'wasm',
          () => permissions.lease('flax.wasm', operation: 'WebAssembly'),
        );
      } else {
        _requireWasm();
      }
    }
  }

  void installPermissions() {
    runtime.registerHostFunction('__flaxPermissionCall', (_, args) {
      requireOpen();
      if (args.length != 3 || args.any((arg) => arg is! FlaxJsString)) {
        throw ArgumentError('Invalid permission request');
      }
      final operation = (args[0] as FlaxJsString).value;
      final id = (args[1] as FlaxJsString).value;
      final scope = jsonDecode((args[2] as FlaxJsString).value);
      final result = switch (operation) {
        'query' => permissions.query(id, scope: scope),
        'request' => permissions.request(id, scope: scope),
        _ => throw ArgumentError('Unknown permission operation'),
      };
      return holdHostResult(
        futureResult(
          result.then((value) => jsonEncode(value.toJson())),
          const FlaxTypeRef('String'),
        ),
      );
    });
    _releaseJs(
      runtime.evaluate(r'''
(() => {
  const call = globalThis.__flaxPermissionCall;
  const parse = JSON.parse, stringify = JSON.stringify;
  const ErrorType = Error;
  Object.defineProperty(globalThis, 'permissions', {
    value: Object.freeze({
      async query(id, options) {
        return parse(await call('query', String(id), stringify(options?.scope ?? null)));
      },
      async request(id, options) {
        return parse(await call('request', String(id), stringify(options?.scope ?? null)));
      },
    }),
  });
  delete globalThis.__flaxPermissionCall;
})()
''', sourceUrl: 'flax:permissions'),
    );
    _installWasmPermissionGuard(runtime, _requireWasm);
  }

  void _requireWasm() {
    requireOpen();
    permissions.require('flax.wasm', operation: 'WebAssembly');
    if (_wasmPermission == null) {
      final weak = WeakReference(this);
      _wasmPermission = permissions.lease('flax.wasm', operation: 'WebAssembly')
        ..onRevoke(() {
          final session = weak.target;
          if (session != null) unawaited(session.requestClose());
        });
    }
  }
}

// Detached Workers use this same constructor/alias guard with startup authority.
void _installWasmPermissionGuard(
  FlaxJsRuntime runtime,
  void Function() requireWasm,
) {
  runtime.registerHostFunction('__flaxPermissionWasm', (_, args) {
    try {
      requireWasm();
      return const FlaxJsNull();
    } on FlaxPermissionException catch (error) {
      return FlaxJsString(
        jsonEncode({
          'code': error.code,
          'permission': error.permission,
          'operation': error.operation,
          'reason': error.reason,
        }),
      );
    }
  });
  _releaseJs(
    runtime.evaluate(r'''
(() => {
  const wasmCheck = globalThis.__flaxPermissionWasm;
  const parse = JSON.parse;
  const ErrorType = Error;
  const wasm = globalThis.WebAssembly;
  if (wasm) {
    const asyncOperations = new Set(['compile', 'compileStreaming', 'instantiate', 'instantiateStreaming']);
    const reject = Promise.reject.bind(Promise);
    for (const name of Object.getOwnPropertyNames(wasm)) {
      const target = wasm[name];
      if (typeof target !== 'function' || ['CompileError', 'LinkError', 'RuntimeError'].includes(name)) continue;
      const check = () => {
        const denied = wasmCheck();
        if (denied !== null) {
          const details = parse(denied);
          throw Object.assign(new ErrorType(details.code + ': ' + details.reason), {
            name: 'FlaxPermissionError', ...details,
          });
        }
      };
      const guarded = new Proxy(target, {
        apply(fn, receiver, args) {
          try { check(); } catch (error) {
            if (asyncOperations.has(name)) return reject(error);
            throw error;
          }
          return Reflect.apply(fn, receiver, args);
        },
        construct(fn, args, owner) { check(); return Reflect.construct(fn, args, owner); },
      });
      if (target.prototype && Object.getOwnPropertyDescriptor(target.prototype, 'constructor')?.value === target) {
        Object.defineProperty(target.prototype, 'constructor', {value: guarded});
      }
      Object.defineProperty(wasm, name, {value: guarded});
    }
  }
  delete globalThis.__flaxPermissionWasm;
})()
''', sourceUrl: 'flax:wasm-permission'),
  );
}
