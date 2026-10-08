import 'dart:convert';
import 'dart:io';

import 'package:flax/runtime.dart';
// Internal counters check isolate shutdown, not an application GC API.
// ignore: implementation_imports
import 'package:flax/src/native/native_runtime.dart';
import 'package:flutter/widgets.dart';

import 'package:flax_standalone/main.dart' as application;

final _roots = <Object>[];

class _Owner {
  FlaxJsFunction? callback;
  int calls = 0;
}

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
  if (runtime.bridgeCellCount != 0 || _roots.isNotEmpty) {
    throw StateError('The restarted isolate retained bridge state');
  }
  final owner = _Owner();
  runtime.registerHostFunction(
    'tick',
    (_, _) => FlaxJsNumber((++owner.calls).toDouble()),
  );
  owner.callback = runtime.evaluate('tick') as FlaxJsFunction;
  runtime.evaluate('''
    if ('restartRoot' in globalThis) throw Error('A previous Context survived');
    globalThis.restartRoot = {tick, heap: Array.from({length: 300000}, (_, i) => ({i}))};
    delete globalThis.tick;
  ''');
  _roots.addAll([runtime, owner]);
  await application.startApplication();
  WidgetsBinding.instance.addPostFrameCallback((_) {
    if ((runtime.evaluate('restartRoot.tick()') as FlaxJsNumber).value != 1) {
      throw StateError('The new callback did not start with fresh Dart state');
    }
    stdout.writeln(
      'FLAX_ENGINE_RESTART_READY:${jsonEncode({'epoch': DateTime.now().microsecondsSinceEpoch, 'cells': runtime.bridgeCellCount, 'callbacks': runtime.bridgeCallbackCount})}',
    );
  });
}
