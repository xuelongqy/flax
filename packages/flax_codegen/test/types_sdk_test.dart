import 'package:flax_codegen/src/config.dart';
import 'package:flax_codegen/src/package_metadata.dart';
import 'package:flax_codegen/src/types_sdk.dart';
import 'package:test/test.dart';

void main() {
  test('custom source paths and SDK directory share one declaration layout', () {
    final metadata = FlaxCodegenPackageMetadataProjection.parseStrict('''
format: 2
bindingNamespace: example.host
capabilities: [bindings]
typesSdk: {name: '@acme/app-sdk', scopes: [shop, delivery], directory: packages/public-sdk}
''');
    final configs = [
      for (final scope in ['shop', 'delivery'])
        FlaxCodegenBindingConfig.parseStrict(
          'format: 2\nname: $scope\ntsOutput: js/sdk/src/generated/$scope.ts\n',
          scopeJsPackages: metadata.scopeJsPackages,
        ),
    ];
    final layout = flaxCodegenTypesSdkLayout(metadata, configs)!;
    expect(layout.sourceRoot, 'js/sdk/src/generated');
    expect(layout.declarations['./shop'], './types/shop.d.ts');
    expect(layout.compilerConfig['extends'], '../../bindings/js_modules.json');
    expect(
      (layout.compilerConfig['compilerOptions'] as Map)['rootDir'],
      '../../js/sdk/src/generated',
    );
  });

  test(
    'split layouts include declaration helpers and reject invalid SDK settings',
    () {
      final metadata = FlaxCodegenPackageMetadataProjection.parseStrict(
        "format: 2\ncapabilities: []\ntypesSdk: {name: '@acme/app-sdk', scopes: [app]}\n",
      );
      final config = FlaxCodegenBindingConfig.parseStrict('''
format: 2
name: app
library: package:host/api.dart
dartOutput: lib/app.g.dart
tsOutput: js/aggregate.ts
publicLibraries:
  package:host/api.dart:
    jsPackage: '@acme/app-sdk/app'
    tsOutput: js/generated/index.ts
''');
      expect(flaxCodegenTypesSdkLayout(metadata, [config])!.declarations, {
        './app': './types/index.d.ts',
        './app/_bindings/*': './types/_bindings/*.d.ts',
      });
      for (final settings in [
        "name: '@acme/app-sdk', scopes: []",
        "name: '../bad', scopes: [app]",
        "name: '@acme/app-sdk', scopes: [app, app]",
        "name: '@acme/app-sdk', scopes: [app], directory: ../outside",
        "name: '@acme/app-sdk', scopes: [app], directory: js",
        "name: '@acme/app-sdk', scopes: [app], typo: true",
      ]) {
        expect(
          () => FlaxCodegenPackageMetadataProjection.parseStrict(
            'format: 2\ncapabilities: []\ntypesSdk: {$settings}\n',
          ),
          throwsException,
        );
      }
    },
  );

  test('SDK selection rejects unknown scopes and shared private outputs', () {
    final metadata = FlaxCodegenPackageMetadataProjection.parseStrict(
      "format: 2\ncapabilities: []\ntypesSdk: {name: '@acme/app-sdk', scopes: [app]}\n",
    );
    expect(
      () => flaxCodegenTypesSdkLayout(metadata, []),
      throwsFormatException,
    );
    final app = FlaxCodegenBindingConfig.parseStrict(
      'format: 2\n',
      scopeJsPackages: metadata.scopeJsPackages,
    );
    final admin = FlaxCodegenBindingConfig.parseStrict(
      'format: 2\nname: admin\ntsOutput: js/src/generated/app.ts\n',
    );
    expect(
      () => flaxCodegenTypesSdkLayout(metadata, [app, admin]),
      throwsFormatException,
    );
  });
}
