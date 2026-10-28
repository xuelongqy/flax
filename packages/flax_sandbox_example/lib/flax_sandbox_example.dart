import 'dart:async';
import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flutter/services.dart';
import 'package:material_ui/material_ui.dart';
import 'package:path/path.dart' as p;
import 'package:path_provider/path_provider.dart';

/// Only the trusted gallery registers this entrance; child sessions use core bindings.
FlaxBindingModule createSandboxExampleBindings({String? demoDirectory}) =>
    FlaxBindingModule(
      'Sandbox playground',
      [
        FlaxWidgetBinding('flax.example/sandbox#Playground', const {
          '': [],
        }, (node) => _PlaygroundHost(node, demoDirectory)),
      ],
      moduleId: 'flax.example/sandbox',
      uiProtocol: flaxBindingVersion,
      requiredCapabilities: const [],
    );

class _PlaygroundHost extends FlaxWidgetHost {
  _PlaygroundHost(super.node, this.demoDirectory);
  final String? demoDirectory;

  @override
  Widget buildNative(Map<String, Object?> values) =>
      FlaxSandboxExample(demoDirectory: demoDirectory);
}

/// Trusted configuration outside the two JS application boundaries.
class FlaxSandboxExample extends StatefulWidget {
  const FlaxSandboxExample({super.key, this.demoDirectory});
  final String? demoDirectory;

  // A departed page can still be closing the stores used by the next entrance.
  static Future<void>? _lifecycle;
  static Future<void> get pendingLifecycle =>
      _lifecycle ?? Future<void>.value();

  static Future<void> _queueLifecycle(Future<void> Function() action) {
    final previous = _lifecycle;
    late final Future<void> pending;
    pending = Future<void>.microtask(() async {
      try {
        if (previous != null) await previous;
        await action();
      } finally {
        // Completed Futures retain the Zone that schedules their late listeners.
        if (identical(_lifecycle, pending)) _lifecycle = null;
      }
    });
    return _lifecycle = pending;
  }

  @override
  State<FlaxSandboxExample> createState() => _FlaxSandboxExampleState();
}

typedef _Application = ({
  FlaxSession session,
  Map<String, Object?> arguments,
  String bundlePath,
});

class _FlaxSandboxExampleState extends State<FlaxSandboxExample> {
  final _appA = TextEditingController(text: 'example.notes.a');
  final _appB = TextEditingController(text: 'example.notes.b');
  final _directory = TextEditingController();
  final _bindings = FlaxBindingRegistry([flutterBindings]);
  var _enabled = true;
  var _loading = true;
  var _generation = 0;
  String? _error;
  String? _demoDirectory;
  List<_Application> _applications = [];
  Map<String, FlaxSandbox> _stores = {};

  @override
  void initState() {
    super.initState();
    unawaited(_reload());
  }

  Future<void> _release(
    List<_Application> applications,
    Map<String, FlaxSandbox> stores,
  ) async {
    await Future.wait(applications.map((app) => app.session.close()));
    for (final sandbox in stores.values) {
      await FlaxLocalStoragePlugin.shutdown(sandbox: sandbox);
    }
  }

  Future<void> _reload() => FlaxSandboxExample._queueLifecycle(_load);

  Future<void> _load() async {
    if (!mounted) return;
    final previous = _applications;
    final previousStores = _stores;
    final applications = <_Application>[];
    final stores = <String, FlaxSandbox>{};
    Directory? packageDirectory;
    final enabled = _enabled;
    final ids = [_appA.text, _appB.text];
    setState(() {
      _applications = [];
      _stores = {};
      _loading = true;
      _error = null;
    });
    try {
      // Unmount before closing: a Session drains its mounted Flutter content.
      await WidgetsBinding.instance.endOfFrame;
      await _release(previous, previousStores);
      if (!mounted) return;
      _demoDirectory ??=
          widget.demoDirectory ??
          p.join((await getApplicationSupportDirectory()).path, 'flax');
      if (!mounted) return;
      if (_directory.text.isEmpty) {
        _directory.text = p.join(_demoDirectory!, 'apps');
      }
      if (!p.isAbsolute(_directory.text)) {
        throw ArgumentError('Apps directory must be an absolute path');
      }
      final host = Directory(p.join(_demoDirectory!, 'examples', 'host'));
      await host.create(recursive: true);
      final hostFile = File(p.join(host.path, 'host-note.txt'));
      if (!await hostFile.exists()) {
        await hostFile.writeAsString('Host-only note');
      }
      final configurations = <FlaxSandbox>[];
      for (final id in ids) {
        final configuration = await FlaxSandbox.create(
          appId: id,
          appsDirectory: Directory(_directory.text),
        );
        configurations.add(configuration);
        if (enabled && !stores.containsKey(configuration.homePath)) {
          await FlaxLocalStoragePlugin.initialize(sandbox: configuration);
          stores[configuration.homePath] = configuration;
        }
      }
      final bytes = await rootBundle.load(
        'packages/flax_sandbox_example/assets/app.flax',
      );
      packageDirectory = await host.parent.createTemp('.flax-package-');
      final archive = await File(p.join(packageDirectory.path, 'app.flax'))
          .writeAsBytes(Uint8List.sublistView(bytes));
      for (var index = 0; index < 2; index++) {
        final configuration = configurations[index];
        final sandbox = enabled ? configuration : null;
        final config = {
          'label': index == 0 ? 'A' : 'B',
          'enabled': enabled,
          // Ordinary mode still writes only demo fixtures, never arbitrary host files.
          'ordinaryHome': host.path,
          'hostFile': hostFile.path,
          'peerFile': p.join(configurations[1 - index].homePath, 'note.txt'),
        };
        // Installation identity stays stable when runtime isolation is disabled.
        final installed = await FlaxPackage.install(
          archive,
          sandbox: configuration,
        );
        final application = await FlaxApplication.directory(
          installed,
          sandbox: sandbox,
        );
        applications.add((
          session: FlaxSession.application(
            application: application,
            createRuntime: FlaxV8Engine.createRuntime,
            bindings: _bindings,
            namespace: 'sandbox-example',
            plugins: const [FlaxLocalStoragePlugin()],
          ),
          arguments: config,
          bundlePath: (application.assetBundle as FlaxDirectoryAssetBundle)
              .directory
              .path,
        ));
      }
      if (!mounted) return;
      setState(() {
        _applications = List.of(applications);
        _stores = Map.of(stores);
        _generation++;
      });
      applications.clear();
      stores.clear();
    } catch (error) {
      if (mounted) setState(() => _error = error.toString());
    } finally {
      try {
        await _release(applications, stores);
      } finally {
        if (packageDirectory != null) {
          await packageDirectory.delete(recursive: true);
        }
        if (mounted) setState(() => _loading = false);
      }
    }
  }

  @override
  void dispose() {
    unawaited(
      FlaxSandboxExample._queueLifecycle(
        () => _release(_applications, _stores),
      ),
    );
    _appA.dispose();
    _appB.dispose();
    _directory.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => SingleChildScrollView(
    child: Padding(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            'A home of their own.',
            style: Theme.of(context).textTheme.headlineMedium,
          ),
          const SizedBox(height: 8),
          const Text(
            'Two real JS applications use the same localStorage namespace. '
            'Different appIds isolate their files and storage. Matching appIds share data.',
          ),
          const SizedBox(height: 16),
          SwitchListTile(
            key: const ValueKey('sandbox-enabled'),
            contentPadding: EdgeInsets.zero,
            title: const Text('Enable sandbox'),
            subtitle: const Text(
              'Draft configuration applies only after reload.',
            ),
            value: _enabled,
            onChanged: _loading
                ? null
                : (value) => setState(() => _enabled = value),
          ),
          Row(
            children: [
              Expanded(child: _field('App A appId', 'sandbox-app-a', _appA)),
              const SizedBox(width: 12),
              Expanded(child: _field('App B appId', 'sandbox-app-b', _appB)),
            ],
          ),
          const SizedBox(height: 12),
          _field(
            'Apps directory (parent of application roots)',
            'sandbox-directory',
            _directory,
          ),
          const SizedBox(height: 12),
          Align(
            alignment: Alignment.centerLeft,
            child: FilledButton(
              key: const ValueKey('sandbox-reload'),
              onPressed: _loading ? null : _reload,
              child: const Text('Apply & reload'),
            ),
          ),
          const SizedBox(height: 12),
          Text(
            _loading
                ? 'Loading applications…'
                : 'Loaded generation $_generation',
            key: const ValueKey('sandbox-generation'),
          ),
          if (_error != null) SelectableText('Load failed: $_error'),
          const SizedBox(height: 16),
          if (_applications.isNotEmpty)
            LayoutBuilder(
              builder: (context, constraints) {
                final panels = [
                  for (var index = 0; index < _applications.length; index++)
                    Container(
                      key: ValueKey('sandbox-panel-${index == 0 ? 'A' : 'B'}'),
                      height: 650,
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        border: Border.all(
                          color: Theme.of(context).dividerColor,
                        ),
                        borderRadius: BorderRadius.circular(16),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          Text(
                            'Bundle ${index == 0 ? 'A' : 'B'}: '
                            '${_applications[index].bundlePath}',
                            key: ValueKey(
                              'sandbox-bundle-${index == 0 ? 'A' : 'B'}',
                            ),
                            style: Theme.of(context).textTheme.bodySmall,
                          ),
                          const SizedBox(height: 8),
                          Expanded(
                            child: FlaxView.page(
                              key: ValueKey((_generation, index)),
                              session: _applications[index].session,
                              name: 'sandbox',
                              arguments: _applications[index].arguments,
                            ),
                          ),
                        ],
                      ),
                    ),
                ];
                final width = constraints.maxWidth >= 850
                    ? (constraints.maxWidth - 16) / 2
                    : constraints.maxWidth;
                // Keep the Session roots mounted when the window crosses the breakpoint.
                return Wrap(
                  spacing: 16,
                  runSpacing: 16,
                  children: [
                    for (final panel in panels)
                      SizedBox(width: width, child: panel),
                  ],
                );
              },
            ),
        ],
      ),
    ),
  );

  Widget _field(String label, String id, TextEditingController controller) =>
      TextField(
        key: ValueKey(id),
        controller: controller,
        enabled: !_loading,
        decoration: InputDecoration(
          labelText: label,
          border: const OutlineInputBorder(),
        ),
      );
}
