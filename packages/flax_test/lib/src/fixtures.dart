import 'dart:io';

Map<String, String>? _assets;

/// Device harnesses preload fixtures before running the owning package's assertions.
void flaxTestLoadFixtures(Map<String, String> assets) =>
    _assets = Map.of(assets);

String flaxTestFixtureFile(String name) {
  final assets = _assets;
  if (assets == null) {
    return File('.dart_tool/flax/ui/$name').readAsStringSync();
  }
  return assets[name] ??
      (throw StateError('Missing bundled test fixture: $name'));
}

String flaxTestFixtureSource(String name) => flaxTestFixtureFile('$name.js');

/// Generate certificates on the host; mobile tests receive them as assets.
Future<void> flaxTestPrepareTls(String certificate, String key) async {
  if (_assets case final assets?) {
    File(certificate).writeAsStringSync(assets['certificate.pem']!);
    File(key).writeAsStringSync(assets['key.pem']!);
    return;
  }
  final result = await Process.run('openssl', [
    'req',
    '-x509',
    '-newkey',
    'rsa:2048',
    '-nodes',
    '-keyout',
    key,
    '-out',
    certificate,
    '-days',
    '1',
    '-subj',
    '/CN=localhost',
    '-addext',
    'subjectAltName=DNS:localhost,IP:127.0.0.1',
  ]);
  if (result.exitCode != 0) {
    throw StateError('Cannot create TLS fixture: ${result.stderr}');
  }
}
