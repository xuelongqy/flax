import 'dart:io';

Map<String, String>? _assets;
final _packageAssets = <String, Map<String, String>>{};

/// Device harnesses preload fixtures before running the owning package's assertions.
void flaxTestLoadFixtures(Map<String, String> assets) =>
    _assets = Map.of(assets);

/// Preload every owner before invoking imported test main functions.
void flaxTestLoadFixturePackages(Map<String, Map<String, String>> packages) {
  _packageAssets
    ..clear()
    ..addAll({
      for (final entry in packages.entries) entry.key: Map.of(entry.value),
    });
}

Map<String, String>? _fixtures(String? packageName) {
  if (packageName == null || _packageAssets.isEmpty) return _assets;
  return _packageAssets[packageName] ??
      (throw StateError('Missing bundled fixture owner: $packageName'));
}

String flaxTestFixtureFile(String name, {String? packageName}) {
  final assets = _fixtures(packageName);
  if (assets == null) {
    return File('.dart_tool/flax/ui/$name').readAsStringSync();
  }
  return assets[name] ??
      (throw StateError('Missing bundled test fixture: $name'));
}

String flaxTestFixtureSource(String name, {String? packageName}) =>
    flaxTestFixtureFile('$name.js', packageName: packageName);

/// Generate certificates on the host; mobile tests receive them as assets.
Future<void> flaxTestPrepareTls(
  String certificate,
  String key, {
  String? packageName,
}) async {
  if (_fixtures(packageName) case final assets?) {
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
