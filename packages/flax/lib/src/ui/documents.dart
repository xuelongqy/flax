part of '../../bindings.dart';

final class FlaxDocumentRequest {
  const FlaxDocumentRequest({
    required this.appId,
    required this.purpose,
    required this.writable,
    required this.whenCancelled,
  });
  final String appId;
  final String purpose;
  final bool writable;
  final Future<void> whenCancelled;
}

/// The host owns the native picker. Core owns returned File authority and cleanup.
/// File grants require a sandbox so copies and image adapters share its boundary.
final class FlaxDocumentPlugin extends FlaxPlugin {
  const FlaxDocumentPlugin({required this.select});
  final Future<FlaxDocumentBackend?> Function(FlaxDocumentRequest request)
  select;
  @override
  String get id => 'flax.documents';
  @override
  Set<String> get globals => const {'documents'};
  @override
  List<FlaxPermissionDefinition> get permissionDefinitions => const [
    FlaxPermissionDefinitions.documentsOpen,
  ];
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    if (context is! _HostContext) {
      throw ArgumentError('Document picker requires a Flax Session');
    }
    final instance = _DocumentHost(context, this);
    instance.install();
    return instance;
  }
}

final class _DocumentHost implements FlaxPluginInstance {
  _DocumentHost(this.context, this.plugin);
  final _HostContext context;
  final FlaxDocumentPlugin plugin;
  final _leases = <FlaxPermissionLease>{};
  final _pickers = <Completer<void>>{};
  bool _closed = false;

  void install() {
    context.registerFunction('__flaxDocumentOpen', (_, args) {
      FlaxPermissionLease? delivery;
      final future = Future<File?>.sync(() {
        if (args.length != 1 || args.single is! FlaxJsString) {
          throw ArgumentError('Invalid document picker options');
        }
        final data = jsonDecode((args.single as FlaxJsString).value);
        if (data is! Map || data.keys.any((key) => key != 'mode')) {
          throw ArgumentError('Documents accept only a mode');
        }
        final mode = data['mode'] ?? 'read';
        if (mode != 'read' && mode != 'readWrite') {
          throw ArgumentError('Invalid document mode');
        }
        delivery = context.permissions.lease(
          'flax.documents.open',
          operation: 'documents.open',
          scope: {'mode': mode},
        );
        return open(mode == 'readWrite');
      });
      if (delivery case final lease?) {
        _permissionFutures[future] = [lease];
      }
      return context.session.holdHostResult(
        context.session.futureResult(
          future,
          const FlaxTypeRef(
            'object',
            id: 'flax.core/sdk_dependencies#type:File',
            nullable: true,
          ),
          beforeDelivery: (value) {
            if (value is FlaxSelectedFile) value.requireActive();
          },
        ),
      );
    });
    _releaseJs(
      context.evaluate(r'''
(() => {
  const open = globalThis.__flaxDocumentOpen;
  const stringify = JSON.stringify;
  Object.defineProperty(globalThis, 'documents', {
    value: Object.freeze({async open(options = {}) { return await open(stringify(options)); }}),
  });
  delete globalThis.__flaxDocumentOpen;
})()
''', sourceUrl: 'flax:documents'),
    );
  }

  Future<File?> open(bool writable) async {
    if (_closed || context.isClosing) throw StateError('FlaxSessionClosed');
    final permissions = context.permissions;
    permissions.require(
      'flax.documents.open',
      operation: 'documents.open',
      scope: {'mode': writable ? 'readWrite' : 'read'},
    );
    if (!permissions.canInteract) {
      throw StateError('Document picker requires foreground interaction');
    }
    final files = context.sandbox?.requirePolicy<FlaxFilePolicy>();
    if (files == null) {
      throw StateError('Document File grants require a sandbox');
    }
    if (_pickers.isNotEmpty) {
      throw StateError('Document picker is already open');
    }
    final permission = permissions.lease(
      'flax.documents.open',
      operation: 'documents.open',
      scope: {'mode': writable ? 'readWrite' : 'read'},
    );
    _leases.add(permission);
    permission.onRevoke(() => _leases.remove(permission));
    final cancellation = Completer<void>();
    _pickers.add(cancellation);
    final removeCancel = permission.onRevoke(() {
      if (!cancellation.isCompleted) cancellation.complete();
    });
    var cancelled = false;
    unawaited(cancellation.future.then((_) => cancelled = true));
    final owner = WeakReference<FlaxHostContext>(context);
    final selected = Future<FlaxDocumentBackend?>.sync(
      () => plugin.select(
        FlaxDocumentRequest(
          appId: permissions.manifest!.appId,
          purpose: permissions.manifest!.purpose(
            'flax.documents.open',
            permissions.policy!.locale,
          ),
          writable: writable,
          whenCancelled: cancellation.future,
        ),
      ),
    );
    unawaited(
      selected.then<void>((source) {
        if (cancelled && source != null) {
          unawaited(
            source.close().catchError(
              (Object error, StackTrace stack) =>
                  owner.target?.report(error, stack),
            ),
          );
        }
      }, onError: (Object _, StackTrace _) {}),
    );
    FlaxDocumentBackend? source;
    try {
      source = await Future.any([
        selected,
        cancellation.future.then<FlaxDocumentBackend?>((_) => null),
      ]);
      permission.requireActive();
      if (source == null) {
        _leases.remove(permission);
        permission.close();
        return null;
      }
      return FlaxSelectedFile.grant(
        source: source,
        permission: permission,
        files: files,
        writable: writable,
      );
    } catch (error, stack) {
      _leases.remove(permission);
      permission.close();
      try {
        if (source != null) await source.close();
      } catch (cleanup, cleanupStack) {
        context.report(cleanup, cleanupStack);
      }
      Error.throwWithStackTrace(error, stack);
    } finally {
      removeCancel();
      _pickers.remove(cancellation);
    }
  }

  @override
  void close() {
    if (_closed) return;
    _closed = true;
    for (final lease in _leases.toList()) {
      lease.cancel();
    }
    for (final picker in _pickers.toList()) {
      if (!picker.isCompleted) picker.complete();
    }
  }

  @override
  void dispose() => close();
}
