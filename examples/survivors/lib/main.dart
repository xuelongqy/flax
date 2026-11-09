import 'dart:async';
import 'dart:convert';

import 'package:flax/flax.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
import 'package:flax_audioplayers/flax_audioplayers.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:path_provider/path_provider.dart';

import 'upgrade_card.dart';

Future<void> main() => startApplication();

Future<void> startApplication({
  String? storageDirectory,
  AssetBundle? assetBundle,
  FlaxJsRuntime Function()? createRuntime,
  FlaxPlugin? canvasPlugin,
}) async {
  WidgetsFlutterBinding.ensureInitialized();
  if (defaultTargetPlatform == TargetPlatform.android ||
      defaultTargetPlatform == TargetPlatform.iOS) {
    await SystemChrome.setPreferredOrientations([
      DeviceOrientation.landscapeLeft,
      DeviceOrientation.landscapeRight,
    ]);
  }
  if (defaultTargetPlatform == TargetPlatform.iOS) {
    await SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky);
  }
  if (defaultTargetPlatform == TargetPlatform.macOS ||
      defaultTargetPlatform == TargetPlatform.iOS) {
    try {
      // audioplayers writes BytesSource files into this app-owned cache directory.
      await (await getTemporaryDirectory()).create(recursive: true);
    } catch (error) {
      debugPrint('Lumen Outpost audio cache unavailable: $error');
    }
  }
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  var storageAvailable = true;
  try {
    await FlaxLocalStoragePlugin.initialize(directory: storageDirectory);
  } catch (error) {
    storageAvailable = false;
    debugPrint('Lumen Outpost storage unavailable: $error');
  }
  runApp(
    _GameHost(
      storageAvailable: storageAvailable,
      assetBundle: assetBundle,
      createRuntime: createRuntime ?? FlaxV8Engine.createRuntime,
      canvasPlugin: canvasPlugin ?? const FlaxCanvasPlugin(),
    ),
  );
}

class _GameHost extends StatefulWidget {
  const _GameHost({
    required this.storageAvailable,
    required this.createRuntime,
    required this.canvasPlugin,
    this.assetBundle,
  });
  final bool storageAvailable;
  final FlaxJsRuntime Function() createRuntime;
  final FlaxPlugin canvasPlugin;
  final AssetBundle? assetBundle;

  @override
  State<_GameHost> createState() => _GameHostState();
}

class _GameHostState extends State<_GameHost> {
  late final _StorageBridge storage;
  late final AppLifecycleListener lifecycle;

  @override
  void initState() {
    super.initState();
    storage = _StorageBridge(widget.storageAvailable);
    lifecycle = AppLifecycleListener(
      onStateChange: (state) {
        if (state == AppLifecycleState.resumed &&
            defaultTargetPlatform == TargetPlatform.iOS) {
          unawaited(
            SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky)
                .catchError((Object error) {
                  debugPrint('Lumen Outpost fullscreen restore failed: $error');
                }),
          );
        }
        if (state != AppLifecycleState.resumed && widget.storageAvailable) {
          unawaited(
            storage.flush().catchError((Object error) {
              debugPrint('Lumen Outpost storage flush failed: $error');
            }),
          );
        }
      },
    );
  }

  @override
  void dispose() {
    lifecycle.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => AnnotatedRegion<SystemUiOverlayStyle>(
    // Material's default light theme writes a dark icon style during rebuilds.
    value: SystemUiOverlayStyle.light,
    child: FlaxView.bundle(
      createRuntime: widget.createRuntime,
      assetBundle: widget.assetBundle,
      namespace: 'lumen-outpost',
      plugins: [
        const FlaxMaterialPlugin(),
        upgradeCardPlugin,
        widget.canvasPlugin,
        const FlaxAudioplayersPlugin(),
        if (widget.storageAvailable) const FlaxLocalStoragePlugin(),
        storage,
      ],
    ),
  );
}

// Example-local durability acknowledgement; no new runtime API.
class _StorageBridge extends FlaxPlugin {
  _StorageBridge(this.available);
  final bool available;
  _StorageInstallation? installation;
  @override
  String get id => 'lumen-outpost.host';
  @override
  Set<String> get globals => const {'__survivorsHost', '__survivorsFlush'};
  @override
  FlaxPluginInstance install(FlaxHostContext context) =>
      installation = _StorageInstallation(context, available);

  Future<void> flush() async {
    try {
      await FlaxLocalStoragePlugin.flush();
    } catch (error) {
      installation?.reportStorageError(error.toString());
      rethrow;
    }
  }
}

class _StorageInstallation implements FlaxPluginInstance {
  _StorageInstallation(this.context, this.available) {
    context.registerFunction('__survivorsFlush', (_, args) {
      if (args.length != 1 || args.single is! FlaxJsFunction) {
        throw ArgumentError('flushStorage requires a completion callback');
      }
      final callback =
          (args.single as FlaxJsFunction).retain() as FlaxJsFunction;
      pending.add(callback);
      unawaited(_flush(callback));
      return const FlaxJsUndefined();
    });
    final result = context.evaluate('''
      globalThis.__survivorsHost = Object.freeze({
        storageAvailable: $available,
        acceptance: ${const bool.fromEnvironment('FLAX_SURVIVORS_ACCEPTANCE')},
        flushStorage: () => new Promise((resolve, reject) => {
          __survivorsFlush(error => error === null ? resolve() : reject(new Error(error)));
        }),
      });
    ''');
    if (result is FlaxJsObject) result.release();
  }
  final FlaxHostContext context;
  final bool available;
  final pending = <FlaxJsFunction>{};
  bool closed = false;

  Future<void> _flush(FlaxJsFunction callback) async {
    String? error;
    try {
      if (!available) throw StateError('Storage is unavailable');
      await FlaxLocalStoragePlugin.flush();
    } catch (failure) {
      error = failure.toString();
    }
    if (closed || !context.isActive) return;
    context.enqueue(() {
      if (closed || !pending.remove(callback)) return;
      try {
        final result = callback.call([
          error == null ? const FlaxJsNull() : FlaxJsString(error),
        ]);
        if (result is FlaxJsObject) result.release();
      } finally {
        callback.release();
      }
    });
  }

  void reportStorageError(String message) {
    if (closed || !context.isActive) return;
    context.enqueue(() {
      if (closed) return;
      final result = context.evaluate(
        'globalThis.__survivorsStorageError?.(${jsonEncode(message)})',
      );
      if (result is FlaxJsObject) result.release();
    });
  }

  @override
  void close() => closed = true;
  @override
  void dispose() {
    close();
    for (final callback in pending) {
      callback.release();
    }
    pending.clear();
  }
}
