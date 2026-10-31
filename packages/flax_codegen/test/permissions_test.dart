import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));
  final library = Uri.file(
    p.join(root, 'packages/flax_codegen/test/fixtures/plugin/permissions.dart'),
  ).toString();
  FlaxCodegenBindingConfig config({
    Map<String, dynamic> permissions = const {},
  }) => FlaxCodegenBindingConfig(
    'permissionNotes',
    library,
    '@example/permission-notes',
    'unused.dart',
    'unused.ts',
    const {
      'PermissionStore': FlaxCodegenClassSelection(
        {
          '': ['path'],
        },
        kind: 'object',
        instanceMethods: {
          'read': ['fallback'],
          'identity': ['value'],
        },
        getters: ['value'],
        setters: ['value'],
        staticGetters: ['host'],
        operators: {
          '[]': ['index'],
        },
      ),
      'ChildPermissionStore': FlaxCodegenClassSelection(
        {
          '': ['path'],
        },
        kind: 'object',
        instanceMethods: {
          'read': ['fallback'],
        },
      ),
      'PermissionKind': FlaxCodegenClassSelection(
        {},
        kind: 'enum',
        getters: ['label'],
        instanceMethods: {
          'format': ['suffix'],
        },
        methods: {'host': []},
      ),
    },
    functions: const {
      'openPermissionNotes': FlaxCodegenFunctionSelection(['path']),
      'watchPermissionNotes': FlaxCodegenFunctionSelection(['path']),
      'copyPermissionNotes': FlaxCodegenFunctionSelection([]),
    },
    topLevel: const FlaxCodegenTopLevelSelection(
      '',
      ['permissionSecret', 'mutablePermissionSecret'],
      setters: ['mutablePermissionSecret'],
    ),
    extensions: const {
      'PermissionExtension': FlaxCodegenExtensionSelection(
        methods: {
          'extended': ['suffix'],
        },
      ),
    },
    permissions: permissions,
  );

  test('permission annotations survive every binding transport and manifest projection', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final module = await parser.parse(config());
    expect(module.permissionRules.length, greaterThanOrEqualTo(15));
    expect(module.requiredCapabilities, contains('permission-guards'));
    expect(
      module.permissionRules.any(
        (rule) => rule.operation.contains(
          'ChildPermissionStore/instanceMethods/read',
        ),
      ),
      isTrue,
    );
    expect(
      module.permissionRules
          .singleWhere(
            (rule) => rule.operation == 'functions/copyPermissionNotes',
          )
          .permissions,
      hasLength(2),
    );
    expect(
      module.topLevel!.getters.every((getter) => getter.literal == null),
      isTrue,
    );
    final diagnostics = FlaxCodegenManifestDiagnostics('permissions');
    final decoded = FlaxCodegenManifestCodec.decodeModule(
      {
        ...FlaxCodegenManifestCodec.encodeModule(module),
        'typeLibraries': <String, Object?>{},
      },
      diagnostics,
      '',
      module.name,
    );
    diagnostics.throwIfAny();
    expect(
      decoded!.permissionRules.map((rule) => rule.operation),
      module.permissionRules.map((rule) => rule.operation),
    );
    await compileFixture(root, FlaxCodegenBindingEmitter([module]), module);
  });

  test(
    'YAML reuses constant definitions and rejects an unselected target',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final module = await parser.parse(
        config(
          permissions: {
            'version': 1,
            'functions': {'openPermissionNotes': '$library#readNotes'},
          },
        ),
      );
      expect(
        module.permissionRules
            .singleWhere(
              (rule) => rule.operation == 'functions/openPermissionNotes',
            )
            .permissions,
        hasLength(1),
      );
      await expectLater(
        parser.parse(
          config(
            permissions: {
              'version': 1,
              'functions': {'unknown': '$library#readNotes'},
            },
          ),
        ),
        throwsStateError,
      );
      await expectLater(
        parser.parse(
          config(
            permissions: {
              'version': 1,
              'functions': {'openPermissionNotes': '$library#PermissionStore'},
            },
          ),
        ),
        throwsStateError,
      );
    },
  );

  test(
    'strict YAML and automatic selection retain configured permission guards',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final selected = FlaxCodegenBindingConfig.parseStrict('''
format: 2
name: permissionAutomatic
library: $library
dartOutput: unused.dart
tsOutput: unused.ts
classes: [PermissionStore]
permissions:
  version: 1
  classes:
    PermissionStore:
      instanceMethods:
        read: $library#writeNotes
''');
      final module = await parser.parse(selected);
      expect(
        module.permissionRules
            .singleWhere(
              (rule) =>
                  rule.operation ==
                  'classes/PermissionStore/instanceMethods/read',
            )
            .permissions
            .map((permission) => permission.id),
        containsAll(['example.notes.read', 'example.notes.write']),
      );
    },
  );

  test('SDK guard owners resolve to real emitted APIs after package ownership rewriting', () {
    final manifests = <FlaxCodegenManifest>[];
    for (final package in ['flax', 'flax_material_ui', 'flax_cupertino_ui']) {
      final diagnostics = FlaxCodegenManifestDiagnostics('$package guards');
      final manifest = FlaxCodegenManifest.parse(
        File(p.join(root, 'packages/$package/bindings/manifest.json'))
            .readAsStringSync(),
        diagnostics,
      )!;
      diagnostics.throwIfAny();
      manifests.add(manifest);
    }
    final clipboard = <(String, String, String), String>{};
    for (final envelope in manifests.expand((manifest) => manifest.modules)) {
      final module = envelope.model.module;
      final targets = {
        for (final type in module.classes) type.id,
        for (final function in module.callableFunctions) function.id,
        for (final type in module.classes)
          for (final getter in type.staticGetters) type.staticGetterId(getter),
        for (final getter
            in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[])
          getter.id,
      };
      for (final (owner, operation) in [
        for (final rule in module.sandboxRules) (rule.owner, rule.operation),
        for (final rule in module.permissionRules) (rule.owner, rule.operation),
      ]) {
        expect(targets, contains(owner), reason: '${module.name}: $operation');
      }
      for (final rule in module.permissionRules) {
        for (final permission in rule.permissions) {
          if (permission.id.startsWith('flax.clipboard.')) {
            clipboard[(rule.owner, rule.kind, rule.name)] = permission.id;
          }
        }
      }
    }
    final expected = <(String, String, String), String>{
      for (final name in ['getData', 'hasStrings'])
        ('flax.core/sdk_services#function:Clipboard.$name', 'call', ''):
            'flax.clipboard.read',
      ('flax.core/sdk_services#function:Clipboard.setData', 'call', ''):
          'flax.clipboard.write',
      ('flax.core/sdk_widgets#type:ClipboardStatusNotifier', 'construct', ''):
          'flax.clipboard.read',
    };
    for (final (owner, reads, writes) in [
      (
        'flax.core/sdk_services#type:TextSelectionDelegate',
        ['pasteText'],
        ['copySelection', 'cutSelection'],
      ),
      (
        'flax.core/sdk_widgets#type:EditableTextState',
        ['pasteText'],
        ['copySelection', 'cutSelection'],
      ),
      (
        'flax.core/sdk_widgets#type:SelectableRegionState',
        <String>[],
        ['copySelection'],
      ),
      (
        'flax.core/sdk_widgets#type:ClipboardStatusNotifier',
        ['update', 'addListener', 'didChangeAppLifecycleState'],
        <String>[],
      ),
      for (final owner in [
        'flax.core/sdk_widgets#type:TextSelectionControls',
        'flax.core/sdk_widgets#type:EmptyTextSelectionControls',
        'flax.material/material#type:DesktopTextSelectionControls',
        'flax.material/material#type:MaterialTextSelectionControls',
        'flax.cupertino/cupertino#type:CupertinoDesktopTextSelectionControls',
        'flax.cupertino/cupertino#type:CupertinoTextSelectionControls',
      ])
        (owner, ['handlePaste'], ['handleCopy', 'handleCut']),
    ]) {
      for (final name in reads) {
        expected[(owner, 'call', name)] = 'flax.clipboard.read';
      }
      for (final name in writes) {
        expected[(owner, 'call', name)] = 'flax.clipboard.write';
      }
    }
    expect(clipboard, expected);
  });
}
