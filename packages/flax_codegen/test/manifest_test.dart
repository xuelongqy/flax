import 'dart:convert';
import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:test/test.dart';

void main() {
  test('runtime, codegen and official manifests use one UI protocol', () {
    int sourceProtocol(String path, RegExp pattern) {
      final match = pattern.firstMatch(File(path).readAsStringSync());
      expect(match, isNotNull, reason: 'Missing UI protocol constant in $path');
      return int.parse(match!.group(1)!);
    }

    final protocol = FlaxCodegenBindingManifest.uiProtocol;
    expect(
      sourceProtocol(
        '../flax/lib/src/ui/definitions.dart',
        RegExp(r'const flaxBindingVersion = (\d+);'),
      ),
      protocol,
    );
    expect(
      sourceProtocol(
        '../flax/js/src/runtime/bindings.ts',
        RegExp(r'export const bindingVersion = (\d+);'),
      ),
      protocol,
    );

    final manifests = Directory('..')
        .listSync()
        .whereType<Directory>()
        .map((directory) => File('${directory.path}/bindings/manifest.json'))
        .where((file) => file.existsSync())
        .toList();
    expect(manifests, isNotEmpty);
    for (final manifest in manifests) {
      final data =
          jsonDecode(manifest.readAsStringSync()) as Map<String, Object?>;
      expect(
        data['formatVersion'],
        11,
        reason: '${manifest.path} must use Manifest format 11',
      );
      expect(data['bindingNamespace'], isA<String>());
      final modules = data['modules'] as List<Object?>;
      expect(modules, isNotEmpty, reason: manifest.path);
      for (final module in modules) {
        final entry = Map<String, Object?>.from(module! as Map);
        expect(
          entry['uiProtocol'],
          protocol,
          reason: '${manifest.path} module ${entry['moduleId']} protocol',
        );
        expect(entry['moduleId'], isA<String>());
        expect(entry['requiredCapabilities'], isA<List<Object?>>());
        expect((entry['model']! as Map)['typedefs'], isA<List<Object?>>());
      }
    }
  });

  test('Manifest format 1 read and encode fail closed', () {
    final directory = Directory.systemTemp.createTempSync('flax-manifest-');
    addTearDown(() => directory.deleteSync(recursive: true));
    final file = File('${directory.path}/manifest.json');
    expect(() => FlaxCodegenBindingManifest.read(file), throwsStateError);

    file.writeAsStringSync(
      jsonEncode({
        'formatVersion': 1,
        'uiProtocol': FlaxCodegenBindingManifest.uiProtocol,
        'package': 'fixture',
        'imports': <String>[],
        'modules': <Object>[],
      }),
    );
    expect(
      () => FlaxCodegenBindingManifest.read(file),
      throwsA(
        isA<StateError>().having(
          (error) => error.message,
          'message',
          contains('format 1 is not supported'),
        ),
      ),
    );
    expect(
      () => const FlaxCodegenBindingManifest(
        package: 'fixture',
        imports: [],
        modules: [],
      ).encode(),
      throwsA(isA<UnsupportedError>()),
    );
  });

  test('missing manifests fail clearly', () {
    final directory = Directory.systemTemp.createTempSync('flax-manifest-');
    addTearDown(() => directory.deleteSync(recursive: true));
    final file = File('${directory.path}/manifest.json');
    expect(() => FlaxCodegenBindingManifest.read(file), throwsStateError);
  });
}
