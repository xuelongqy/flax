import 'dart:async';
import 'dart:convert';

import 'package:flax/flax.dart';
import 'package:flax_audioplayers/flax_audioplayers.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:path_provider/path_provider.dart';

import 'upgrade_card.dart';

/// The caller initializes storage and host modules; this view owns its game session.
class FlaxSurvivorsView extends StatefulWidget {
  const FlaxSurvivorsView({
    super.key,
    this.storageAvailable = true,
    this.assetBundle,
    this.createRuntime = FlaxV8Engine.createRuntime,
    this.canvasPlugin = const FlaxCanvasPlugin(),
  });

  final bool storageAvailable;
  final AssetBundle? assetBundle;
  final FlaxJsRuntime Function() createRuntime;
  final FlaxPlugin canvasPlugin;

  @override
  State<FlaxSurvivorsView> createState() => _FlaxSurvivorsViewState();
}

class _FlaxSurvivorsViewState extends State<FlaxSurvivorsView> {
  late final storage = _StorageBridge(widget.storageAvailable);
  late final bundle = widget.assetBundle ?? FlaxPrefixedAssetBundle();
  late final AppLifecycleListener lifecycle;
  var ready = false;

  @override
  void initState() {
    super.initState();
    lifecycle = AppLifecycleListener(
      onStateChange: (state) {
        if (state != AppLifecycleState.resumed && widget.storageAvailable) {
          unawaited(
            storage.flush().catchError((Object error) {
              debugPrint('Lumen Outpost storage flush failed: $error');
            }),
          );
        }
      },
    );
    unawaited(_prepareAudio());
  }

  Future<void> _prepareAudio() async {
    if (defaultTargetPlatform == TargetPlatform.macOS ||
        defaultTargetPlatform == TargetPlatform.iOS) {
      try {
        // audioplayers writes BytesSource files into this app-owned directory.
        await (await getTemporaryDirectory()).create(recursive: true);
      } catch (error) {
        debugPrint('Lumen Outpost audio cache unavailable: $error');
      }
    }
    if (mounted) setState(() => ready = true);
  }

  @override
  void dispose() {
    lifecycle.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => ready
      ? FlaxView.bundle(
          createRuntime: widget.createRuntime,
          assetBundle: bundle,
          namespace: 'lumen-outpost',
          plugins: [
            const FlaxMaterialPlugin(),
            upgradeCardPlugin,
            widget.canvasPlugin,
            const FlaxAudioplayersPlugin(),
            if (widget.storageAvailable) const FlaxLocalStoragePlugin(),
            storage,
          ],
        )
      : const SizedBox.expand();
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
