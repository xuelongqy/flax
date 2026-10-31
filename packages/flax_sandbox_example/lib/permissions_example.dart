import 'dart:async';
import 'dart:io';

import 'package:file_selector/file_selector.dart';
import 'package:flax/flax.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
import 'package:flax_permissions/flax_permissions.dart';
import 'package:flax_secure_storage/flax_secure_storage.dart';
import 'package:material_ui/material_ui.dart';

const _orders = FlaxPermissionDefinition(
  id: 'example.orders.read',
  title: 'Read orders',
  authorization: FlaxPermissionAuthorization.runtime,
);
const _loadOrdersId = 'flax.example/permissions#function:loadOrders';
const _watchOrdersId = 'flax.example/permissions#function:watchOrders';

@FlaxPermissionGuard(_orders)
Future<String> loadExampleOrders() async {
  final lease = FlaxPermissionContext.current.lease(
    _orders.id,
    operation: 'orders.load',
  );
  try {
    return await lease.guardFuture(() async {
      await Future<void>.delayed(const Duration(milliseconds: 200));
      return '3 orders loaded';
    });
  } finally {
    lease.close();
  }
}

@FlaxPermissionGuard(_orders)
Stream<String> watchExampleOrders() {
  final lease = FlaxPermissionContext.current.lease(
    _orders.id,
    operation: 'orders.watch',
  );
  // Final results keep their authority until revoke or Session close.
  return lease.guardStream(
    () => Stream.periodic(
      const Duration(milliseconds: 500),
      (index) => 'order event ${index + 1}',
    ).take(20),
  );
}

// This small handwritten module shows the same metadata emitted by codegen.
final _businessBindings = FlaxBindingModule(
  'Permission business example',
  [],
  moduleId: 'flax.example/permissions',
  uiProtocol: flaxBindingVersion,
  requiredCapabilities: const ['permission-guards'],
  functions: [
    FlaxFunctionBinding(
      _loadOrdersId,
      const [],
      const FlaxTypeRef('future', item: FlaxTypeRef('String')),
      (_) => loadExampleOrders(),
    ),
    FlaxFunctionBinding(
      _watchOrdersId,
      const [],
      FlaxTypeRef(
        'stream',
        id: 'flax.core/flutter#type:Stream',
        item: const FlaxTypeRef('String'),
        stream: FlaxStreamBinding(
          'stream:flax.core/flutter#type:Stream[String:]',
          (value) => value is Stream<String>,
          (value) => value as Stream<String>,
        ),
      ),
      (_) => watchExampleOrders(),
    ),
  ],
  permissionGuards: const {
    (_loadOrdersId, 'call', ''): [_orders],
    (_watchOrdersId, 'call', ''): [_orders],
  },
);

/// Demonstrates host consent; production hosts must isolate approval controls.
class FlaxPermissionsExample extends StatefulWidget {
  const FlaxPermissionsExample({super.key, this.storage, this.select});
  final FlaxSecureStorage? storage;
  final Future<FlaxDocumentBackend?> Function(FlaxDocumentRequest)? select;
  @override
  State<FlaxPermissionsExample> createState() => _PermissionsState();
}

class _PermissionsState extends State<FlaxPermissionsExample> {
  final _appId = TextEditingController(text: 'example.permissions.a');
  FlaxPermissionManager? _manager;
  FlaxPermissionApplication? _application;
  FlaxSession? _session;
  bool _declareNetwork = true, _allowNetwork = true, _declareOrders = true;
  bool _busy = false;
  String _status =
      'Approve the manifest, then run the module. Grants persist outside data.';
  final _bindings = FlaxBindingRegistry([flutterBindings, _businessBindings]);

  FlaxPermissionManifest get _manifest => FlaxPermissionManifest(
    appId: _appId.text.trim(),
    name: 'Permission demo',
    defaultLocale: 'en',
    permissions: {
      if (_declareNetwork)
        'flax.network': FlaxPermissionDeclaration(
          purpose: const {
            'en': 'Make the demo business request',
            'zh': '演示业务网络请求',
          },
        ),
      if (_declareOrders)
        _orders.id: FlaxPermissionDeclaration(
          purpose: const {
            'en': 'Show and watch this module’s orders',
            'zh': '查看和订阅本模块订单',
          },
        ),
      'flax.documents.open': FlaxPermissionDeclaration(
        purpose: const {
          'en': 'Read a document or display a selected image',
          'zh': '读取选中文件或显示选中的图片',
        },
        scope: const {'mode': 'read'},
      ),
    },
  );

  Future<void> _perform(Future<void> Function() action) async {
    if (_busy) return;
    setState(() => _busy = true);
    try {
      await action();
    } catch (error) {
      if (mounted) setState(() => _status = '$error');
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _load({required bool approve}) async {
    final manifest = _manifest;
    if (approve) {
      final accepted = await showDialog<bool>(
        context: context,
        builder: (context) => AlertDialog(
          title: const Text('Install module permissions'),
          content: Text(
            '${manifest.appId}\n\n${manifest.permissions.keys.map((id) => '$id\n${manifest.purpose(id, 'en')}').join('\n\n')}',
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context, false),
              child: const Text('Cancel'),
            ),
            TextButton(
              onPressed: () => Navigator.pop(context, true),
              child: const Text('Approve installation'),
            ),
          ],
        ),
      );
      if (accepted != true || !mounted) return;
    }
    await _stopSession();
    _manager ??= FlaxPermissionManager(
      storage: widget.storage ?? await FlaxPlatformSecureStorage.open(),
      native: const FlaxPermissionHandlerAdapter(),
      definitions: const [_orders],
    );
    final application = approve
        ? await _manager!.approveInstallation(
            manifest: manifest,
            sourceIdentity: 'example:local-permissions',
          )
        : await _manager!.openApplication(
            appId: manifest.appId,
            sourceIdentity: 'example:local-permissions',
          );
    if (application == null) {
      throw StateError('Approve this application before reloading');
    }
    if (approve) {
      for (final id in manifest.permissions.keys) {
        await _manager!.approvePermission(application, id);
      }
    }
    final sandbox = await FlaxSandbox.create(appId: manifest.appId);
    if (!mounted) return;
    late final FlaxSession session;
    session = FlaxSession(
      createRuntime: FlaxV8Engine.createRuntime,
      source: _source,
      bindings: _bindings,
      sourceUrl: 'flax:permissions-example',
      sandbox: sandbox,
      permissionManifest: manifest,
      permissions: FlaxPermissionPolicy(
        application: application,
        allow: {
          for (final id in manifest.permissions.keys)
            if (id != 'flax.network' || _allowNetwork) id,
        },
        onRequest: _request,
      ),
      plugins: [
        if (widget.select != null || Platform.isMacOS || Platform.isLinux)
          FlaxDocumentPlugin(select: widget.select ?? _select),
      ],
      onError: (error, _) {
        WidgetsBinding.instance.addPostFrameCallback((_) {
          if (mounted && identical(_session, session)) {
            setState(() => _status = '$error');
          }
        });
        WidgetsBinding.instance.ensureVisualUpdate();
      },
    );
    _application = application;
    _session = session;
    await session.ready;
    if (mounted) {
      setState(
        () => _status =
            '${application.appId}\nData: ${sandbox.homePath}\nReload reuses current module decisions; changing appId keeps them separate.',
      );
    }
  }

  Future<FlaxPermissionDecision> _request(FlaxPermissionRequest request) async {
    if (!mounted) return FlaxPermissionDecision.cancel;
    final navigator = Navigator.of(context, rootNavigator: true);
    final route = DialogRoute<FlaxPermissionDecision>(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('${request.applicationName}: ${request.definition.title}'),
        content: Text('${request.purpose}\n\n${request.scope}'),
        actions: [
          TextButton(
            onPressed: () =>
                Navigator.pop(context, FlaxPermissionDecision.deny),
            child: const Text('Deny'),
          ),
          TextButton(
            onPressed: () =>
                Navigator.pop(context, FlaxPermissionDecision.allow),
            child: const Text('Allow module'),
          ),
        ],
      ),
    );
    unawaited(
      request.whenCancelled.then((_) {
        if (route.isActive) navigator.removeRoute(route);
      }),
    );
    return await navigator.push(route) ?? FlaxPermissionDecision.cancel;
  }

  Future<void> _stopSession() async {
    final previous = _session;
    if (previous == null) return;
    setState(() => _session = null);
    final closing = previous.close();
    await WidgetsBinding.instance.endOfFrame;
    await closing;
  }

  static Future<FlaxDocumentBackend?> _select(
    FlaxDocumentRequest request,
  ) async {
    // This local-path adapter is for desktop files. Mobile URI providers implement
    // FlaxDocumentBackend directly and retain their native security scope.
    if (!(Platform.isMacOS || Platform.isLinux)) {
      throw UnsupportedError(
        'Provide a native URI document backend on this platform',
      );
    }
    final chosen = await openFile();
    if (chosen == null) return null;
    return FlaxLocalDocumentBackend.open(File(chosen.path));
  }

  @override
  void dispose() {
    unawaited(_session?.close() ?? Future<void>.value());
    _appId.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => SingleChildScrollView(
    child: Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          TextField(
            controller: _appId,
            decoration: const InputDecoration(labelText: 'Module appId'),
          ),
          CheckboxListTile(
            title: const Text('Declare network'),
            value: _declareNetwork,
            onChanged: _busy
                ? null
                : (v) => setState(() => _declareNetwork = v!),
          ),
          CheckboxListTile(
            title: const Text('Host allows network'),
            value: _allowNetwork,
            onChanged: _busy ? null : (v) => setState(() => _allowNetwork = v!),
          ),
          CheckboxListTile(
            title: const Text('Declare custom orders permission'),
            value: _declareOrders,
            onChanged: _busy
                ? null
                : (v) => setState(() => _declareOrders = v!),
          ),
          Wrap(
            spacing: 8,
            children: [
              TextButton(
                onPressed: _busy
                    ? null
                    : () => _perform(() => _load(approve: true)),
                child: const Text('Approve manifest & run'),
              ),
              TextButton(
                onPressed: _busy
                    ? null
                    : () => _perform(() => _load(approve: false)),
                child: const Text('Reload saved approval'),
              ),
              TextButton(
                onPressed: _busy || _application == null
                    ? null
                    : () => _perform(() async {
                        await _manager!.revoke(_application!, _orders.id);
                        setState(
                          () => _status = 'Orders revoked. Active streams and pending results lose access.',
                        );
                      }),
                child: const Text('Revoke orders'),
              ),
              TextButton(
                onPressed: _busy || _application == null
                    ? null
                    : () => _perform(() async {
                        await _manager!.revoke(
                          _application!,
                          'flax.documents.open',
                        );
                        setState(
                          () => _status = 'Selected files and their image caches are now revoked.',
                        );
                      }),
                child: const Text('Revoke selected files'),
              ),
              TextButton(
                onPressed: _busy || _application == null
                    ? null
                    : () => _perform(() async {
                        await _stopSession();
                        final sandbox = await FlaxSandbox.create(
                          appId: _application!.appId,
                        );
                        await _manager!.uninstall(
                          _application!.appId,
                          removeFiles: () async {
                            final directory = Directory(
                              sandbox.applicationPath,
                            );
                            if (await directory.exists()) {
                              await directory.delete(recursive: true);
                            }
                          },
                        );
                        _application = null;
                        setState(
                          () => _status = 'Secure installation records deleted. Next approval creates a new owner.',
                        );
                      }),
                child: const Text('Uninstall approval'),
              ),
            ],
          ),
          SelectableText(_status),
          const SizedBox(height: 16),
          if (_session case final session?)
            SizedBox(
              height: 440,
              child: FlaxView.session(key: ValueKey(session), session: session),
            ),
        ],
      ),
    ),
  );
}

const _source = r'''
import {invokeTopLevel} from '@flax/core/bindings';
import {Column, GestureDetector, Image, SizedBox, Text, State, StatefulWidget, runApp} from '@flax/flutter/widgets';
class Demo extends StatefulWidget { createState() { return new DemoState(); } }
class DemoState extends State {
  label = 'Query before requesting. Documents use their own system picker.';
  file = null;
  async perform(action) {
    try { const value = await action(); if (this.mounted) this.setState(() => this.label = String(value)); }
    catch (e) { if (this.mounted) this.setState(() => this.label = `${e.code || e.name}: ${e.reason || e.message}`); }
  }
  build() {
    const button = (label, action) => GestureDetector({onTap: () => void this.perform(action), child: SizedBox({height: 36, child: Text(label)})});
    return Column({children: [
      Text(this.label),
      button('Query orders', async () => JSON.stringify(await permissions.query('example.orders.read'))),
      button('Request orders', async () => JSON.stringify(await permissions.request('example.orders.read'))),
      button('Load orders (Future)', () => invokeTopLevel('flax.example/permissions#function:loadOrders', [])),
      button('Watch orders (Stream)', async () => {
        for await (const value of invokeTopLevel('flax.example/permissions#function:watchOrders', [])) {
          if (this.mounted) this.setState(() => this.label = value);
        }
        return 'Orders stream finished';
      }),
      button('Fetch example.com', async () => `HTTP ${(await fetch('https://example.com/')).status}`),
      button('Select File / Image.file', async () => {
        if (typeof documents === 'undefined') return 'A host document picker is not configured on this platform.';
        const file = await documents.open();
        if (!file) return 'Selection cancelled';
        if (this.mounted) this.setState(() => this.file = file);
        return `Selected ${file.path}: ${await file.length()} bytes`;
      }),
      ...(this.file ? [Image.file(this.file, {width: 100, height: 100, errorBuilder: () => Text('Not an image, or grant revoked')})] : []),
    ]});
  }
}
runApp(new Demo());
''';
