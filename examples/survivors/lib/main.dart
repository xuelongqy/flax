import 'dart:async';

import 'package:flax/flax.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

import 'flax_survivors.dart';

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
  late final AppLifecycleListener lifecycle;

  @override
  void initState() {
    super.initState();
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
    child: FlaxSurvivorsView(
      createRuntime: widget.createRuntime,
      assetBundle: widget.assetBundle,
      canvasPlugin: widget.canvasPlugin,
      storageAvailable: widget.storageAvailable,
    ),
  );
}
