import 'dart:convert';
import 'dart:developer' as developer;
import 'dart:io';
import 'dart:isolate';

/// Request an actual VM collection; no framework cleanup method is called here.
Future<void> flaxTestCollectDartGarbage() async {
  final info = await developer.Service.getInfo();
  final uri = info.serverUri;
  if (uri == null) {
    throw StateError('GC observation requires the Flutter test VM service');
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
