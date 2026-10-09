import 'dart:convert';
import 'dart:developer' as developer;
import 'dart:io';
import 'dart:isolate';
import 'dart:typed_data';

/// Use the VM service or allocation pressure; never invoke framework cleanup.
Future<void> flaxTestCollectDartGarbage() async {
  final info = await developer.Service.getInfo();
  final uri = info.serverUri;
  if (uri == null) {
    // Release/AOT has no VM service. Keep a bounded live window while ordinary
    // allocations trigger the real Dart collector, as in the engine GC contract.
    final window = <Uint8List>[];
    for (var i = 0; i < 400; i++) {
      window.add(Uint8List(256 * 1024));
      if (window.length > 100) window.removeAt(0);
      if (i % 20 == 0) await Future<void>.delayed(Duration.zero);
    }
    await Future<void>.delayed(const Duration(milliseconds: 10));
    return;
  }
  final socket = await WebSocket.connect(
    uri.replace(scheme: 'ws', path: '${uri.path}ws').toString(),
  );
  try {
    socket.add(
      jsonEncode({
        'jsonrpc': '2.0',
        'id': 'gc',
        'method': 'getAllocationProfile',
        'params': {
          'isolateId': developer.Service.getIsolateId(Isolate.current),
          'gc': true,
        },
      }),
    );
    final message = await socket
        .firstWhere((raw) => (jsonDecode(raw as String) as Map)['id'] == 'gc')
        .timeout(const Duration(seconds: 10));
    final response = jsonDecode(message as String) as Map;
    if (response.containsKey('error')) {
      throw StateError('VM collection failed: ${response['error']}');
    }
  } finally {
    await socket.close();
  }
  await Future<void>.delayed(const Duration(milliseconds: 10));
}

/// Keep allocations observable so an optimizing JS engine cannot remove the pressure.
const flaxTestJsGarbagePressure = r'''globalThis.__flaxGcPressure = [];
for (let i = 0; i < 100; i++) __flaxGcPressure.push(new Array(20000).fill(i));
globalThis.__flaxGcPressure = null;
''';
