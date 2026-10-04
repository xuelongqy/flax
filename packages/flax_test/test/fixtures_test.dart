import 'dart:io';

import 'package:test/test.dart';

import 'package:flax_test/src/fixtures.dart';

void main() {
  test('same fixture names preserve explicit owners and legacy callers', () {
    flaxTestLoadFixtures({'same.js': 'legacy'});
    flaxTestLoadFixturePackages({
      'first': {'same.js': 'first'},
      'second': {'same.js': 'second'},
    });
    final registeredSources = [
      flaxTestFixtureSource('same', packageName: 'first'),
      flaxTestFixtureSource('same', packageName: 'second'),
    ];
    expect(registeredSources, ['first', 'second']);
    expect(flaxTestFixtureSource('same'), 'legacy');
    expect(
      () => flaxTestFixtureSource('same', packageName: 'unknown'),
      throwsStateError,
    );
    expect(
      () => flaxTestFixtureSource('missing', packageName: 'first'),
      throwsStateError,
    );
    flaxTestLoadFixturePackages({});
    expect(flaxTestFixtureSource('same', packageName: 'first'), 'legacy');
  });
  test('preloaded TLS writes independent caller-owned files', () async {
    final directory = Directory.systemTemp.createTempSync('flax-tls-fixture-');
    addTearDown(() => directory.deleteSync(recursive: true));
    flaxTestLoadFixturePackages({
      'first': {'certificate.pem': 'certificate', 'key.pem': 'key'},
    });
    await flaxTestPrepareTls(
      '${directory.path}/certificate',
      '${directory.path}/key',
      packageName: 'first',
    );
    expect(
      File('${directory.path}/certificate').readAsStringSync(),
      'certificate',
    );
    expect(File('${directory.path}/key').readAsStringSync(), 'key');
  });
}
