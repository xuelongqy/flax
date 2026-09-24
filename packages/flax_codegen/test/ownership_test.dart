import 'package:flax_codegen/src/config.dart';
import 'package:flax_codegen/src/diagnostic.dart';
import 'package:flax_codegen/src/identity.dart';
import 'package:flax_codegen/src/ownership.dart';
import 'package:flax_codegen/src/package_metadata.dart';
import 'package:test/test.dart';

void main() {
  final namespace = FlaxCodegenBindingNamespace.parse('flax.core');
  final state = _type('State');

  test('signature reference resolves to the explicit sibling owner', () {
    final components = _module(
      name: 'components',
      source: 'components.yaml',
      claims: [
        _claim(state, _location('components.yaml', pointer: '/types/State')),
      ],
    );
    final flutter = _module(
      name: 'flutter',
      source: 'flutter.yaml',
      references: [
        _reference(
          state,
          _location('flutter.yaml', pointer: '/classes/App/State'),
        ),
      ],
    );

    FlaxCodegenResolvedPackage resolve(
      List<FlaxCodegenSiblingModuleInput> modules,
    ) => FlaxCodegenOwnership.resolve(namespace: namespace, modules: modules);

    void expectResolved(FlaxCodegenResolvedPackage package) {
      expect(
        [for (final module in package.modules) module.moduleId.value],
        ['flax.core/components', 'flax.core/flutter'],
      );
      expect(
        package.modules[0].owners.single.wireId.value,
        'flax.core/components#type:State',
      );
      expect(
        package.modules[1].references.single.ownerWireId.value,
        'flax.core/components#type:State',
      );
      for (final module in package.modules) {
        expect(module.requiredCapabilities, isEmpty);
        expect(
          module.requiredCapabilities,
          flaxCodegenProtocol21RequiredCapabilities(),
        );
      }
    }

    expectResolved(resolve([flutter, components]));
    expectResolved(resolve([components, flutter]));
  });

  test('missing owner uses the reference location', () {
    final location = _location(
      'flutter.yaml',
      offset: 24,
      line: 6,
      column: 3,
      pointer: '/classes/App/State',
    );
    expect(
      () => FlaxCodegenOwnership.resolve(
        namespace: namespace,
        modules: [
          _module(
            name: 'flutter',
            source: 'flutter.yaml',
            references: [_reference(state, location)],
          ),
        ],
      ),
      throwsA(
        isA<FlaxCodegenException>().having(
          (error) => [
            for (final diagnostic in error.diagnostics)
              (
                diagnostic.code.value,
                diagnostic.source,
                diagnostic.line,
                diagnostic.column,
                diagnostic.pointer,
                diagnostic.message,
              ),
          ],
          'diagnostics',
          [
            (
              'FCG_OWNERSHIP',
              'flutter.yaml',
              6,
              3,
              '/classes/App/State',
              'Missing owner.',
            ),
          ],
        ),
      ),
    );
  });

  test('multiple sibling owners ignore input order', () {
    final components = _module(
      name: 'components',
      source: 'components.yaml',
      claims: [
        _claim(
          state,
          _location(
            'components.yaml',
            offset: 8,
            line: 3,
            column: 1,
            pointer: '/types/State',
          ),
        ),
      ],
    );
    final flutter = _module(
      name: 'flutter',
      source: 'flutter.yaml',
      claims: [
        _claim(
          state,
          _location(
            'flutter.yaml',
            offset: 16,
            line: 5,
            column: 1,
            pointer: '/classes/State',
          ),
        ),
      ],
    );

    List<String> diagnose(List<FlaxCodegenSiblingModuleInput> modules) {
      try {
        FlaxCodegenOwnership.resolve(namespace: namespace, modules: modules);
        fail('expected ownership failure');
      } on FlaxCodegenException catch (error) {
        return [
          for (final diagnostic in error.diagnostics) diagnostic.toString(),
        ];
      }
    }

    const expected = [
      'components.yaml:3:1: FCG_OWNERSHIP /types/State: Multiple owners.',
      'flutter.yaml:5:1: FCG_OWNERSHIP /classes/State: Multiple owners.',
    ];
    expect(diagnose([flutter, components]), expected);
    expect(diagnose([components, flutter]), expected);
  });

  test('duplicate moduleId fails closed', () {
    expect(
      () => FlaxCodegenOwnership.resolve(
        namespace: namespace,
        modules: [
          _module(name: 'flutter', source: 'first.yaml'),
          _module(name: 'flutter', source: 'second.yaml'),
        ],
      ),
      throwsA(
        isA<FlaxCodegenException>().having(
          (error) => [
            for (final diagnostic in error.diagnostics) diagnostic.toString(),
          ],
          'diagnostics',
          [
            'first.yaml:1:1: FCG_OWNERSHIP : Duplicate moduleId.',
            'second.yaml:1:1: FCG_OWNERSHIP : Duplicate moduleId.',
          ],
        ),
      ),
    );
  });

  test('distinct source identities that share a wireId fail', () {
    final framework = _type('Widget');
    final other = _type(
      'Widget',
      uri: 'package:flutter/src/widgets/widget.dart',
    );
    expect(
      () => FlaxCodegenOwnership.resolve(
        namespace: namespace,
        modules: [
          _module(
            name: 'flutter',
            source: 'flutter.yaml',
            claims: [
              _claim(
                framework,
                _location(
                  'flutter.yaml',
                  offset: 4,
                  pointer: '/classes/Widget',
                ),
              ),
              _claim(
                other,
                _location(
                  'flutter.yaml',
                  offset: 12,
                  line: 4,
                  pointer: '/types/Widget',
                ),
              ),
            ],
          ),
        ],
      ),
      throwsA(
        isA<FlaxCodegenException>().having(
          (error) => [
            for (final diagnostic in error.diagnostics)
              (diagnostic.pointer, diagnostic.message),
          ],
          'diagnostics',
          [
            ('/classes/Widget', 'Duplicate wireId.'),
            ('/types/Widget', 'Duplicate wireId.'),
          ],
        ),
      ),
    );
  });

  test('an unclaimed re-export reference does not create an owner', () {
    final package = FlaxCodegenOwnership.resolve(
      namespace: namespace,
      modules: [
        _module(
          name: 'components',
          source: 'components.yaml',
          claims: [
            _claim(
              state,
              _location('components.yaml', pointer: '/types/State'),
            ),
          ],
        ),
        _module(
          name: 'flutter',
          source: 'flutter.yaml',
          references: [
            _reference(
              state,
              _location('flutter.yaml', pointer: '/exports/State'),
            ),
          ],
        ),
      ],
    );
    final flutter = package.modules.singleWhere(
      (module) => module.moduleId.value == 'flax.core/flutter',
    );
    expect(flutter.owners, isEmpty);
    expect(
      [for (final module in package.modules) module.owners.length],
      [1, 0],
    );
  });

  test('zero-entry module resolves', () {
    final package = FlaxCodegenOwnership.resolve(
      namespace: namespace,
      modules: [_module(name: 'host', source: 'host.yaml')],
    );
    expect(package.modules, hasLength(1));
    expect(package.modules.single.moduleId.value, 'flax.core/host');
    expect(package.modules.single.owners, isEmpty);
    expect(package.modules.single.references, isEmpty);
    expect(package.modules.single.requiredCapabilities, isEmpty);
  });

  test('input and result collections reject mutation', () {
    final claims = [
      _claim(state, _location('components.yaml', pointer: '/types/State')),
    ];
    final references = [
      _reference(state, _location('flutter.yaml', pointer: '/classes/State')),
    ];
    final modules = [
      _module(name: 'components', source: 'components.yaml', claims: claims),
      _module(name: 'flutter', source: 'flutter.yaml', references: references),
    ];
    final components = modules[0];
    final extra = _claim(
      _type('Element'),
      _location('components.yaml', pointer: '/types/Element'),
    );
    claims.add(extra);
    references.clear();
    expect(components.claims, hasLength(1));
    expect(modules[1].references, hasLength(1));
    expect(() => components.claims.add(extra), throwsUnsupportedError);
    expect(() => modules[1].references.removeLast(), throwsUnsupportedError);

    final package = FlaxCodegenOwnership.resolve(
      namespace: namespace,
      modules: modules,
    );
    modules.add(_module(name: 'extra', source: 'extra.yaml'));
    expect(package.modules, hasLength(2));
    expect(
      () => package.modules.add(package.modules.first),
      throwsUnsupportedError,
    );
    expect(() => package.modules.first.owners.clear(), throwsUnsupportedError);
    expect(
      () => package.modules.last.references.add(
        package.modules.last.references.first,
      ),
      throwsUnsupportedError,
    );
    expect(
      () => package.modules.first.requiredCapabilities.add('host'),
      throwsUnsupportedError,
    );
    expect(
      () => flaxCodegenProtocol21RequiredCapabilities().add('host'),
      throwsUnsupportedError,
    );
  });

  final metadata = _parseMetadata('''
format: 1
capabilities:
  - bindings
bindingNamespace: flax.core
''');
  final widget = _type('Widget');
  final offset = _type('Offset');
  final show = _function('show');
  final element = _type('Element');

  test('config claim families own exact type and function wireIds', () {
    final listing = <String, FlaxCodegenSourceIdentity>{
      'Widget': widget,
      'show': show,
      'Offset': offset,
      'State': state,
      'Element': element,
    };
    final package = FlaxCodegenOwnership.resolvePackage(
      dartPackage: 'flax',
      metadata: metadata,
      metadataSource: 'flax_package.yaml',
      modules: [
        FlaxCodegenSiblingModuleInput.fromConfig(
          config: _parseConfig(_fourFamilies),
          source: 'components.yaml',
          listing: listing,
        ),
      ],
    );
    expect(package.dartPackage, 'flax');
    expect(package.namespace.value, 'flax.core');
    expect(package.modules, hasLength(1));
    expect(
      [for (final owner in package.modules.single.owners) owner.wireId.value],
      [
        'flax.core/components#function:show',
        'flax.core/components#type:Offset',
        'flax.core/components#type:State',
        'flax.core/components#type:Widget',
      ],
    );
    expect(
      [for (final owner in package.modules.single.owners) owner.sourceIdentity],
      [show, offset, state, widget],
    );
    expect(package.modules.single.requiredCapabilities, isEmpty);
    expect(
      () => package.modules.single.requiredCapabilities.add('host'),
      throwsUnsupportedError,
    );
  });

  test('config sibling signature is stable across reversed inputs', () {
    final listing = <String, FlaxCodegenSourceIdentity>{
      'State': state,
      'Element': element,
    };
    final reversedListing = <String, FlaxCodegenSourceIdentity>{
      for (final name in listing.keys.toList().reversed) name: listing[name]!,
    };
    final components = FlaxCodegenSiblingModuleInput.fromConfig(
      config: _parseConfig(_typesOnly),
      source: 'components.yaml',
      listing: listing,
    );
    final reversedComponents = FlaxCodegenSiblingModuleInput.fromConfig(
      config: _parseConfig(_typesOnly),
      source: 'components.yaml',
      listing: reversedListing,
    );
    final flutter = FlaxCodegenSiblingModuleInput.fromConfig(
      config: _parseConfig(_emptyFlutter),
      source: 'flutter.yaml',
      listing: const {},
      references: [
        _reference(
          state,
          _location('flutter.yaml', pointer: '/classes/App/State'),
        ),
      ],
    );

    void expectWires(List<FlaxCodegenSiblingModuleInput> modules) {
      final package = FlaxCodegenOwnership.resolvePackage(
        dartPackage: 'flax',
        metadata: metadata,
        metadataSource: 'flax_package.yaml',
        modules: modules,
      );
      expect(package.dartPackage, 'flax');
      expect(
        [for (final module in package.modules) module.moduleId.value],
        ['flax.core/components', 'flax.core/flutter'],
      );
      expect(
        [
          for (final module in package.modules)
            [for (final owner in module.owners) owner.wireId.value],
        ],
        [
          ['flax.core/components#type:State'],
          <String>[],
        ],
      );
      expect(
        [
          for (final module in package.modules)
            [
              for (final reference in module.references)
                reference.ownerWireId.value,
            ],
        ],
        [
          <String>[],
          ['flax.core/components#type:State'],
        ],
      );
    }

    expectWires([flutter, components]);
    expectWires([reversedComponents, flutter]);
  });

  test('config listing errors aggregate independently of input order', () {
    final missingListing = <String, FlaxCodegenSourceIdentity>{
      'Widget': widget,
      'Element': element,
    };
    final renameListing = <String, FlaxCodegenSourceIdentity>{
      'State': widget,
      'Element': element,
    };
    final kindListing = <String, FlaxCodegenSourceIdentity>{
      'show': _type('show'),
      'Widget': widget,
    };
    final invalidListing = <String, FlaxCodegenSourceIdentity>{
      'Element': element,
      'Widget': widget,
    };
    final kindPointer = FlaxCodegenDiagnostic.jsonPointer([
      'functions',
      'show',
    ]);
    final kindLocation = _location(
      'kind.yaml',
      offset: 24,
      line: 6,
      column: 3,
      pointer: kindPointer,
    );

    FlaxCodegenSiblingModuleInput missingOf(
      Map<String, FlaxCodegenSourceIdentity> listing,
    ) => FlaxCodegenSiblingModuleInput.fromConfig(
      config: _parseConfig(_missingListing),
      source: 'listing.yaml',
      listing: listing,
    );
    FlaxCodegenSiblingModuleInput renameOf(
      Map<String, FlaxCodegenSourceIdentity> listing,
    ) => FlaxCodegenSiblingModuleInput.fromConfig(
      config: _parseConfig(_nameMismatch),
      source: 'rename.yaml',
      listing: listing,
    );
    FlaxCodegenSiblingModuleInput kindOf(
      Map<String, FlaxCodegenSourceIdentity> listing,
    ) => FlaxCodegenSiblingModuleInput.fromConfig(
      config: _parseConfig(_kindMismatch),
      source: 'kind.yaml',
      listing: listing,
      locations: {kindPointer: kindLocation},
    );
    FlaxCodegenSiblingModuleInput invalidOf(
      Map<String, FlaxCodegenSourceIdentity> listing,
    ) => FlaxCodegenSiblingModuleInput.fromConfig(
      config: _parseConfig(_invalidModuleName),
      source: 'invalid.yaml',
      listing: listing,
    );

    List<String> diagnose(List<FlaxCodegenSiblingModuleInput> modules) {
      try {
        FlaxCodegenOwnership.resolvePackage(
          dartPackage: 'flax',
          metadata: metadata,
          metadataSource: 'flax_package.yaml',
          modules: modules,
        );
        fail('expected ownership failure');
      } on FlaxCodegenException catch (error) {
        expect([
          for (final diagnostic in error.diagnostics) diagnostic.code.value,
        ], everyElement('FCG_OWNERSHIP'));
        return [
          for (final diagnostic in error.diagnostics) diagnostic.toString(),
        ];
      }
    }

    const expected = [
      'invalid.yaml:1:1: FCG_OWNERSHIP /name: Invalid module name.',
      'kind.yaml:6:3: FCG_OWNERSHIP /functions/show: Kind mismatch.',
      'listing.yaml:1:1: FCG_OWNERSHIP /classes/a~1b: Missing listing.',
      'rename.yaml:1:1: FCG_OWNERSHIP /types/0: Source name mismatch.',
    ];
    expect(
      diagnose([
        missingOf(missingListing),
        renameOf(renameListing),
        kindOf(kindListing),
        invalidOf(invalidListing),
      ]),
      expected,
    );
    expect(
      diagnose([
        invalidOf(_reversed(invalidListing)),
        kindOf(_reversed(kindListing)),
        missingOf(_reversed(missingListing)),
        renameOf(_reversed(renameListing)),
      ]),
      expected,
    );
  });

  test('non-bindings metadata fails resolvePackage atomically', () {
    final projection = _parseMetadata('''
format: 1
capabilities:
  - codegen
''');
    expect(projection.bindingNamespace, isNull);
    expect(projection.capabilities, ['codegen']);
    expect(
      () => FlaxCodegenOwnership.resolvePackage(
        dartPackage: 'flax',
        metadata: projection,
        metadataSource: 'flax_package.yaml',
        modules: [
          FlaxCodegenSiblingModuleInput.fromConfig(
            config: _parseConfig(_emptyFlutter),
            source: 'flutter.yaml',
            listing: const {},
          ),
        ],
      ),
      throwsA(
        isA<FlaxCodegenException>().having(
          (error) => [
            for (final diagnostic in error.diagnostics) diagnostic.toString(),
          ],
          'diagnostics',
          [
            'flax_package.yaml:1:1: FCG_OWNERSHIP /bindingNamespace: Missing bindingNamespace.',
            'flax_package.yaml:1:1: FCG_OWNERSHIP /capabilities: Missing bindings capability.',
          ],
        ),
      ),
    );
  });

  test('config snapshots isolate later mutation', () {
    final config = _parseConfig(_fourFamilies);
    final listing = <String, FlaxCodegenSourceIdentity>{
      'Widget': widget,
      'show': show,
      'Offset': offset,
      'State': state,
    };
    final locations = <String, FlaxCodegenSourceLocation>{
      '/types/0': _location(
        'components.yaml',
        offset: 8,
        line: 3,
        column: 1,
        pointer: '/types/0',
      ),
    };
    final references = [
      _reference(
        state,
        _location('flutter.yaml', pointer: '/classes/App/State'),
      ),
    ];
    final components = FlaxCodegenSiblingModuleInput.fromConfig(
      config: config,
      source: 'components.yaml',
      listing: listing,
      locations: locations,
    );
    final flutter = FlaxCodegenSiblingModuleInput.fromConfig(
      config: _parseConfig(_emptyFlutter),
      source: 'flutter.yaml',
      listing: const {},
      references: references,
    );
    config.classes['Element'] = FlaxCodegenClassSelection(const {});
    config.types.add('Element');
    listing['Element'] = element;
    locations['/classes/Element'] = _location(
      'components.yaml',
      pointer: '/classes/Element',
    );
    references.clear();
    expect(components.claims, isEmpty);
    expect(flutter.references, hasLength(1));
    expect(
      () =>
          components.claims.add(_claim(element, _location('components.yaml'))),
      throwsUnsupportedError,
    );
    expect(() => flutter.references.removeLast(), throwsUnsupportedError);

    final modules = [components, flutter];
    final package = FlaxCodegenOwnership.resolvePackage(
      dartPackage: 'flax',
      metadata: metadata,
      metadataSource: 'flax_package.yaml',
      modules: modules,
    );
    modules.add(
      FlaxCodegenSiblingModuleInput.fromConfig(
        config: _parseConfig(_emptyFlutter),
        source: 'extra.yaml',
        listing: listing,
      ),
    );
    expect(package.dartPackage, 'flax');
    expect(package.modules, hasLength(2));
    expect(
      [for (final owner in package.modules.first.owners) owner.wireId.value],
      [
        'flax.core/components#function:show',
        'flax.core/components#type:Offset',
        'flax.core/components#type:State',
        'flax.core/components#type:Widget',
      ],
    );
    expect(
      package.modules.last.references.single.ownerWireId.value,
      'flax.core/components#type:State',
    );
    expect(
      () => package.modules.add(package.modules.first),
      throwsUnsupportedError,
    );
    expect(() => package.modules.first.owners.clear(), throwsUnsupportedError);
    expect(
      () => package.modules.last.references.add(
        package.modules.last.references.first,
      ),
      throwsUnsupportedError,
    );
    expect(
      () => package.modules.first.requiredCapabilities.add('host'),
      throwsUnsupportedError,
    );
  });

  test('distinct local child references the imported parent wireId', () {
    final child = _type('Child', uri: 'package:acme_widgets/child.dart');
    final showDialog = _function(
      'showDialog',
      uri: 'package:flutter/src/material/dialog.dart',
    );
    final widgetOwner = _importedOwner(
      identity: widget,
      wireId: 'flax.core/flutter#type:Widget',
      source: 'package:flax/bindings.json',
      pointer: '/owners/Widget',
    );
    final dialogOwner = _importedOwner(
      identity: showDialog,
      wireId: 'flax.material/material#function:showDialog',
      source: 'package:flax_material/bindings.json',
      pointer: '/owners/showDialog',
    );
    final flaxOwners = [widgetOwner];
    final materialOwners = [dialogOwner];
    final flaxImport = _importedPackage(
      dartPackage: 'flax',
      namespace: 'flax.core',
      source: 'package:flax/flax_package.yaml',
      owners: flaxOwners,
    );
    final materialImport = _importedPackage(
      dartPackage: 'flax_material',
      namespace: 'flax.material',
      source: 'package:flax_material/flax_package.yaml',
      owners: materialOwners,
    );
    final canvasImport = _importedPackage(
      dartPackage: 'flax_canvas',
      namespace: 'flax.canvas',
      source: 'package:flax_canvas/flax_package.yaml',
    );
    final local = FlaxCodegenSiblingModuleInput.fromConfig(
      config: _parseConfig(_childWidgets),
      source: 'widgets.yaml',
      listing: {'Child': child},
      references: [
        _reference(
          widget,
          _location('widgets.yaml', pointer: '/classes/Child/Widget'),
        ),
      ],
    );
    final acme = _parseMetadata('''
format: 1
capabilities:
  - bindings
bindingNamespace: com.acme.widgets
''');

    void expectResolved(Iterable<FlaxCodegenImportedPackage> importedPackages) {
      final package = FlaxCodegenOwnership.resolvePackage(
        dartPackage: 'acme_widgets',
        metadata: acme,
        metadataSource: 'flax_package.yaml',
        modules: [local],
        importedPackages: importedPackages,
      );
      expect(package.dartPackage, 'acme_widgets');
      expect(package.namespace.value, 'com.acme.widgets');
      expect(
        [for (final module in package.modules) module.moduleId.value],
        ['com.acme.widgets/widgets'],
      );
      expect(
        [for (final owner in package.modules.single.owners) owner.wireId.value],
        ['com.acme.widgets/widgets#type:Child'],
      );
      expect(package.modules.single.owners.single.sourceIdentity, child);
      expect(
        [
          for (final reference in package.modules.single.references)
            reference.ownerWireId.value,
        ],
        ['flax.core/flutter#type:Widget'],
      );
      expect(package.modules.single.references.single.sourceIdentity, widget);
      expect(
        [for (final owner in package.importedOwners) owner.wireId.value],
        [
          'flax.material/material#function:showDialog',
          'flax.core/flutter#type:Widget',
        ],
      );
      expect(
        [for (final owner in package.importedOwners) owner.sourceIdentity],
        [showDialog, widget],
      );
      expect(
        () => package.importedOwners.add(package.importedOwners.first),
        throwsUnsupportedError,
      );
    }

    expectResolved([flaxImport, materialImport, canvasImport]);
    expectResolved([
      canvasImport,
      _importedPackage(
        dartPackage: 'flax_material',
        namespace: 'flax.material',
        source: 'package:flax_material/flax_package.yaml',
        owners: materialOwners.reversed,
      ),
      _importedPackage(
        dartPackage: 'flax',
        namespace: 'flax.core',
        source: 'package:flax/flax_package.yaml',
        owners: flaxOwners.reversed,
      ),
    ]);
  });

  test('imported package snapshots isolate later mutation', () {
    final child = _type('Child', uri: 'package:acme_widgets/child.dart');
    final showDialog = _function(
      'showDialog',
      uri: 'package:flutter/src/material/dialog.dart',
    );
    final extra = _importedOwner(
      identity: element,
      wireId: 'flax.core/flutter#type:Element',
      source: 'package:flax/bindings.json',
      pointer: '/owners/Element',
    );
    final flaxOwners = [
      _importedOwner(
        identity: widget,
        wireId: 'flax.core/flutter#type:Widget',
        source: 'package:flax/bindings.json',
        pointer: '/owners/Widget',
      ),
    ];
    final materialOwners = [
      _importedOwner(
        identity: showDialog,
        wireId: 'flax.material/material#function:showDialog',
        source: 'package:flax_material/bindings.json',
        pointer: '/owners/showDialog',
      ),
    ];
    final flaxImport = _importedPackage(
      dartPackage: 'flax',
      namespace: 'flax.core',
      source: 'package:flax/flax_package.yaml',
      owners: flaxOwners,
    );
    final materialImport = _importedPackage(
      dartPackage: 'flax_material',
      namespace: 'flax.material',
      source: 'package:flax_material/flax_package.yaml',
      owners: materialOwners,
    );
    final canvasImport = _importedPackage(
      dartPackage: 'flax_canvas',
      namespace: 'flax.canvas',
      source: 'package:flax_canvas/flax_package.yaml',
    );
    flaxOwners.add(extra);
    materialOwners.clear();
    expect(flaxImport.owners, hasLength(1));
    expect(materialImport.owners, hasLength(1));
    expect(canvasImport.owners, isEmpty);
    expect(() => flaxImport.owners.add(extra), throwsUnsupportedError);
    expect(() => materialImport.owners.removeLast(), throwsUnsupportedError);
    expect(() => canvasImport.owners.add(extra), throwsUnsupportedError);

    final imported = [flaxImport, materialImport, canvasImport];
    final package = FlaxCodegenOwnership.resolvePackage(
      dartPackage: 'acme_widgets',
      metadata: _parseMetadata('''
format: 1
capabilities:
  - bindings
bindingNamespace: com.acme.widgets
'''),
      metadataSource: 'flax_package.yaml',
      modules: [
        FlaxCodegenSiblingModuleInput.fromConfig(
          config: _parseConfig(_childWidgets),
          source: 'widgets.yaml',
          listing: {'Child': child},
          references: [
            _reference(
              widget,
              _location('widgets.yaml', pointer: '/classes/Child/Widget'),
            ),
          ],
        ),
      ],
      importedPackages: imported,
    );
    imported.add(
      _importedPackage(
        dartPackage: 'extra',
        namespace: 'com.acme.extra',
        source: 'package:extra/flax_package.yaml',
      ),
    );
    expect(package.importedOwners, hasLength(2));
    expect(
      [for (final owner in package.importedOwners) owner.wireId.value],
      [
        'flax.material/material#function:showDialog',
        'flax.core/flutter#type:Widget',
      ],
    );
    expect(
      package.modules.single.owners.single.wireId.value,
      'com.acme.widgets/widgets#type:Child',
    );
    expect(
      package.modules.single.references.single.ownerWireId.value,
      'flax.core/flutter#type:Widget',
    );
    expect(
      () => package.importedOwners.add(package.importedOwners.first),
      throwsUnsupportedError,
    );
    expect(() => package.importedOwners.clear(), throwsUnsupportedError);
  });

  group('imported owner negatives', () {
    final acme = _parseMetadata('''
format: 1
capabilities:
  - bindings
bindingNamespace: com.acme.widgets
''');
    final host = FlaxCodegenSiblingModuleInput.fromConfig(
      config: _parseConfig(_emptyHost),
      source: 'host.yaml',
      listing: const {},
    );
    final canvas = _importedPackage(
      dartPackage: 'flax_canvas',
      namespace: 'flax.canvas',
      source: 'package:flax_canvas/flax_package.yaml',
    );
    final otherState = _type(
      'State',
      uri: 'package:flutter/src/widgets/widget.dart',
    );

    List<String> diagnose(List<FlaxCodegenImportedPackage> importedPackages) {
      FlaxCodegenResolvedPackage? result;
      try {
        result = FlaxCodegenOwnership.resolvePackage(
          dartPackage: 'acme_widgets',
          metadata: acme,
          metadataSource: 'flax_package.yaml',
          modules: [host],
          importedPackages: importedPackages,
        );
        fail('expected ownership failure');
      } on FlaxCodegenException catch (error) {
        expect(result, isNull);
        expect([
          for (final diagnostic in error.diagnostics) diagnostic.code.value,
        ], everyElement('FCG_OWNERSHIP'));
        return [
          for (final diagnostic in error.diagnostics) diagnostic.toString(),
        ];
      }
    }

    test('imported wire kind name and namespace mismatches', () {
      final kind = _importedPackage(
        dartPackage: 'flax',
        namespace: 'flax.core',
        source: 'package:flax/flax_package.yaml',
        owners: [
          _importedOwner(
            identity: widget,
            wireId: 'flax.core/flutter#function:Widget',
            source: 'kind.yaml',
            offset: 8,
            line: 2,
            column: 1,
            pointer: '/owners/Widget',
          ),
        ],
      );
      final name = _importedPackage(
        dartPackage: 'flax_material',
        namespace: 'flax.material',
        source: 'package:flax_material/flax_package.yaml',
        owners: [
          _importedOwner(
            identity: offset,
            wireId: 'flax.material/material#type:Element',
            source: 'name.yaml',
            offset: 16,
            line: 3,
            column: 1,
            pointer: '/owners/Offset',
          ),
        ],
      );
      final namespace = _importedPackage(
        dartPackage: 'other',
        namespace: 'com.acme.other',
        source: 'package:other/flax_package.yaml',
        owners: [
          _importedOwner(
            identity: element,
            wireId: 'flax.core/flutter#type:Element',
            source: 'ns.yaml',
            offset: 24,
            line: 4,
            column: 5,
            pointer: '/owners/Element',
          ),
        ],
      );
      const expected = [
        'kind.yaml:2:1: FCG_OWNERSHIP /owners/Widget: Wire kind mismatch.',
        'name.yaml:3:1: FCG_OWNERSHIP /owners/Offset: Wire name mismatch.',
        'ns.yaml:4:5: FCG_OWNERSHIP /owners/Element: Wire namespace mismatch.',
      ];
      expect(diagnose([kind, name, namespace]), expected);
      expect(
        diagnose([
          _importedPackage(
            dartPackage: 'other',
            namespace: 'com.acme.other',
            source: 'package:other/flax_package.yaml',
            owners: namespace.owners.reversed,
          ),
          _importedPackage(
            dartPackage: 'flax_material',
            namespace: 'flax.material',
            source: 'package:flax_material/flax_package.yaml',
            owners: name.owners.reversed,
          ),
          _importedPackage(
            dartPackage: 'flax',
            namespace: 'flax.core',
            source: 'package:flax/flax_package.yaml',
            owners: kind.owners.reversed,
          ),
        ]),
        expected,
      );
    });

    test('imported source and wire uniqueness', () {
      final owners = [
        _importedOwner(
          identity: widget,
          wireId: 'flax.core/flutter#type:Widget',
          source: 'import.yaml',
          pointer: '/owners/0',
        ),
        _importedOwner(
          identity: widget,
          wireId: 'flax.core/components#type:Widget',
          source: 'import.yaml',
          offset: 8,
          line: 3,
          pointer: '/owners/1',
        ),
        _importedOwner(
          identity: offset,
          wireId: 'flax.core/flutter#type:Offset',
          source: 'import.yaml',
          offset: 16,
          line: 5,
          pointer: '/owners/2',
        ),
        _importedOwner(
          identity: offset,
          wireId: 'flax.core/flutter#type:Offset',
          source: 'import.yaml',
          offset: 24,
          line: 7,
          pointer: '/owners/3',
        ),
        _importedOwner(
          identity: state,
          wireId: 'flax.core/components#type:State',
          source: 'import.yaml',
          offset: 32,
          line: 9,
          pointer: '/owners/4',
        ),
        _importedOwner(
          identity: otherState,
          wireId: 'flax.core/components#type:State',
          source: 'import.yaml',
          offset: 40,
          line: 11,
          pointer: '/owners/5',
        ),
      ];
      final flax = _importedPackage(
        dartPackage: 'flax',
        namespace: 'flax.core',
        source: 'package:flax/flax_package.yaml',
        owners: owners,
      );
      const expected = [
        'import.yaml:1:1: FCG_OWNERSHIP /owners/0: Conflicting imported owner.',
        'import.yaml:3:1: FCG_OWNERSHIP /owners/1: Conflicting imported owner.',
        'import.yaml:5:1: FCG_OWNERSHIP /owners/2: Duplicate imported owner.',
        'import.yaml:7:1: FCG_OWNERSHIP /owners/3: Duplicate imported owner.',
        'import.yaml:9:1: FCG_OWNERSHIP /owners/4: Conflicting imported wireId.',
        'import.yaml:11:1: FCG_OWNERSHIP /owners/5: Conflicting imported wireId.',
      ];
      expect(diagnose([flax, canvas]), expected);
      expect(
        diagnose([
          canvas,
          _importedPackage(
            dartPackage: 'flax',
            namespace: 'flax.core',
            source: 'package:flax/flax_package.yaml',
            owners: owners.reversed,
          ),
        ]),
        expected,
      );
    });

    test('local owner claim of imported source widget', () {
      final claim = _claim(
        widget,
        _location(
          'widgets.yaml',
          offset: 8,
          line: 2,
          column: 1,
          pointer: '/classes/Widget',
        ),
      );
      final owners = [
        _importedOwner(
          identity: widget,
          wireId: 'flax.core/flutter#type:Widget',
          source: 'import.yaml',
          offset: 16,
          line: 3,
          column: 1,
          pointer: '/owners/Widget',
        ),
      ];
      final local = _module(
        name: 'widgets',
        source: 'widgets.yaml',
        claims: [claim],
      );
      final flax = _importedPackage(
        dartPackage: 'flax',
        namespace: 'flax.core',
        source: 'package:flax/flax_package.yaml',
        owners: owners,
      );
      List<String> diagnoseLocal(
        List<FlaxCodegenImportedPackage> importedPackages,
      ) {
        FlaxCodegenResolvedPackage? result;
        try {
          result = FlaxCodegenOwnership.resolvePackage(
            dartPackage: 'acme_widgets',
            metadata: acme,
            metadataSource: 'flax_package.yaml',
            modules: [local],
            importedPackages: importedPackages,
          );
          fail('expected ownership failure');
        } on FlaxCodegenException catch (error) {
          expect(result, isNull);
          expect([
            for (final diagnostic in error.diagnostics) diagnostic.code.value,
          ], everyElement('FCG_OWNERSHIP'));
          return [
            for (final diagnostic in error.diagnostics) diagnostic.toString(),
          ];
        }
      }

      const expected = [
        'import.yaml:3:1: FCG_OWNERSHIP /owners/Widget: Dependent republish.',
        'widgets.yaml:2:1: FCG_OWNERSHIP /classes/Widget: Dependent republish.',
      ];
      expect(diagnoseLocal([flax, canvas]), expected);
      expect(
        diagnoseLocal([
          canvas,
          _importedPackage(
            dartPackage: 'flax',
            namespace: 'flax.core',
            source: 'package:flax/flax_package.yaml',
            owners: owners.reversed,
          ),
        ]),
        expected,
      );
    });

    test('package namespace conflicts', () {
      final flaxCore = _importedPackage(
        dartPackage: 'flax',
        namespace: 'flax.core',
        source: 'package:flax/flax_package.yaml',
      );
      final flaxOther = _importedPackage(
        dartPackage: 'flax',
        namespace: 'flax.other',
        source: 'package:flax_other/flax_package.yaml',
      );
      final sharedAlpha = _importedPackage(
        dartPackage: 'alpha',
        namespace: 'shared.ns',
        source: 'package:alpha/flax_package.yaml',
      );
      final sharedBeta = _importedPackage(
        dartPackage: 'beta',
        namespace: 'shared.ns',
        source: 'package:beta/flax_package.yaml',
      );
      final localCollision = _importedPackage(
        dartPackage: 'other',
        namespace: 'com.acme.widgets',
        source: 'package:other/flax_package.yaml',
      );
      const expected = [
        'flax_package.yaml:1:1: FCG_OWNERSHIP /bindingNamespace: Duplicate bindingNamespace.',
        'package:alpha/flax_package.yaml:1:1: FCG_OWNERSHIP /bindingNamespace: Duplicate bindingNamespace.',
        'package:beta/flax_package.yaml:1:1: FCG_OWNERSHIP /bindingNamespace: Duplicate bindingNamespace.',
        'package:flax/flax_package.yaml:1:1: FCG_OWNERSHIP /bindingNamespace: Conflicting package namespace.',
        'package:flax_other/flax_package.yaml:1:1: FCG_OWNERSHIP /bindingNamespace: Conflicting package namespace.',
        'package:other/flax_package.yaml:1:1: FCG_OWNERSHIP /bindingNamespace: Duplicate bindingNamespace.',
      ];
      final imported = [
        flaxCore,
        flaxOther,
        sharedAlpha,
        sharedBeta,
        localCollision,
      ];
      expect(diagnose(imported), expected);
      expect(diagnose(imported.reversed.toList()), expected);
    });

    test('distinct imported source collides with local child wireId', () {
      final child = _type('Child', uri: 'package:acme_widgets/child.dart');
      final otherChild = _type('Child', uri: 'package:other/child.dart');
      final local = FlaxCodegenSiblingModuleInput.fromConfig(
        config: _parseConfig(_childWidgets),
        source: 'widgets.yaml',
        listing: {'Child': child},
        locations: {
          '/classes/Child': _location(
            'widgets.yaml',
            offset: 8,
            line: 2,
            column: 1,
            pointer: '/classes/Child',
          ),
        },
      );
      final owners = [
        _importedOwner(
          identity: otherChild,
          wireId: 'com.acme.widgets/widgets#type:Child',
          source: 'import.yaml',
          offset: 16,
          line: 3,
          column: 1,
          pointer: '/owners/Child',
        ),
      ];
      final other = _importedPackage(
        dartPackage: 'other',
        namespace: 'com.acme.widgets',
        source: 'package:other/flax_package.yaml',
        owners: owners,
      );
      List<String> diagnoseLocal(
        List<FlaxCodegenImportedPackage> importedPackages,
      ) {
        FlaxCodegenResolvedPackage? result;
        try {
          result = FlaxCodegenOwnership.resolvePackage(
            dartPackage: 'acme_widgets',
            metadata: acme,
            metadataSource: 'flax_package.yaml',
            modules: [local],
            importedPackages: importedPackages,
          );
          fail('expected ownership failure');
        } on FlaxCodegenException catch (error) {
          expect(result, isNull);
          expect([
            for (final diagnostic in error.diagnostics) diagnostic.code.value,
          ], everyElement('FCG_OWNERSHIP'));
          return [
            for (final diagnostic in error.diagnostics) diagnostic.toString(),
          ];
        }
      }

      const expected = [
        'flax_package.yaml:1:1: FCG_OWNERSHIP /bindingNamespace: Duplicate bindingNamespace.',
        'import.yaml:3:1: FCG_OWNERSHIP /owners/Child: Imported wireId collision.',
        'package:other/flax_package.yaml:1:1: FCG_OWNERSHIP /bindingNamespace: Duplicate bindingNamespace.',
        'widgets.yaml:2:1: FCG_OWNERSHIP /classes/Child: Imported wireId collision.',
      ];
      expect(diagnoseLocal([other, canvas]), expected);
      expect(
        diagnoseLocal([
          canvas,
          _importedPackage(
            dartPackage: 'other',
            namespace: 'com.acme.widgets',
            source: 'package:other/flax_package.yaml',
            owners: owners.reversed,
          ),
        ]),
        expected,
      );
    });
  });
}

FlaxCodegenBindingConfig _parseConfig(String yaml) =>
    FlaxCodegenBindingConfig.parseStrict(yaml);

FlaxCodegenPackageMetadataProjection _parseMetadata(String yaml) =>
    FlaxCodegenPackageMetadataProjection.parseStrict(yaml);

const _fourFamilies = '''
format: 2
name: components
library: package:flutter/src/widgets/framework.dart
jsPackage: '@flax/components'
dartOutput: a.dart
tsOutput: b.ts
types:
  - State
classes:
  Widget: {}
functions:
  show:
    parameters: []
callbackSnapshots:
  Offset:
    fields: [dx]
''';

const _typesOnly = '''
format: 2
name: components
library: package:flutter/src/widgets/framework.dart
jsPackage: '@flax/components'
dartOutput: a.dart
tsOutput: b.ts
types:
  - State
''';

const _emptyFlutter = '''
format: 2
name: flutter
library: package:flutter/src/widgets/framework.dart
jsPackage: '@flax/flutter'
dartOutput: a.dart
tsOutput: b.ts
''';

const _childWidgets = '''
format: 2
name: widgets
library: package:acme_widgets/child.dart
jsPackage: '@acme/widgets'
dartOutput: a.dart
tsOutput: b.ts
classes:
  Child: {}
''';

const _emptyHost = '''
format: 2
name: host
library: package:x/x.dart
jsPackage: '@x/x'
dartOutput: a.dart
tsOutput: b.ts
''';

const _missingListing = '''
format: 2
name: listing
library: package:x/x.dart
jsPackage: '@x/x'
dartOutput: a.dart
tsOutput: b.ts
classes:
  "a/b": {}
''';

const _nameMismatch = '''
format: 2
name: rename
library: package:x/x.dart
jsPackage: '@x/x'
dartOutput: a.dart
tsOutput: b.ts
types:
  - State
''';

const _kindMismatch = '''
format: 2
name: kind
library: package:x/x.dart
jsPackage: '@x/x'
dartOutput: a.dart
tsOutput: b.ts
functions:
  show:
    parameters: []
''';

const _invalidModuleName = '''
format: 2
name: Components
library: package:x/x.dart
jsPackage: '@x/x'
dartOutput: a.dart
tsOutput: b.ts
''';

Map<String, FlaxCodegenSourceIdentity> _reversed(
  Map<String, FlaxCodegenSourceIdentity> listing,
) => {for (final name in listing.keys.toList().reversed) name: listing[name]!};

FlaxCodegenSourceIdentity _type(
  String name, {
  String uri = 'package:flutter/src/widgets/framework.dart',
}) => FlaxCodegenSourceIdentity(
  kind: FlaxCodegenDeclarationKind.type,
  originatingUri: uri,
  name: name,
  origin: FlaxCodegenOriginState.resolved,
);

FlaxCodegenSourceIdentity _function(
  String name, {
  String uri = 'package:flutter/src/widgets/framework.dart',
}) => FlaxCodegenSourceIdentity(
  kind: FlaxCodegenDeclarationKind.function,
  originatingUri: uri,
  name: name,
  origin: FlaxCodegenOriginState.resolved,
);

FlaxCodegenSourceLocation _location(
  String source, {
  int offset = 0,
  int line = 1,
  int column = 1,
  String pointer = '',
}) => FlaxCodegenSourceLocation(
  source: source,
  offset: offset,
  line: line,
  column: column,
  pointer: pointer,
);

FlaxCodegenOwnerClaim _claim(
  FlaxCodegenSourceIdentity identity,
  FlaxCodegenSourceLocation location,
) => FlaxCodegenOwnerClaim(sourceIdentity: identity, location: location);

FlaxCodegenNominalReference _reference(
  FlaxCodegenSourceIdentity identity,
  FlaxCodegenSourceLocation location,
) => FlaxCodegenNominalReference(sourceIdentity: identity, location: location);

FlaxCodegenSiblingModuleInput _module({
  required String name,
  required String source,
  Iterable<FlaxCodegenOwnerClaim> claims = const [],
  Iterable<FlaxCodegenNominalReference> references = const [],
}) => FlaxCodegenSiblingModuleInput(
  name: name,
  source: source,
  claims: claims,
  references: references,
);

FlaxCodegenImportedOwner _importedOwner({
  required FlaxCodegenSourceIdentity identity,
  required String wireId,
  required String source,
  int offset = 0,
  int line = 1,
  int column = 1,
  String pointer = '',
}) => FlaxCodegenImportedOwner(
  sourceIdentity: identity,
  wireId: FlaxCodegenWireId.parse(wireId),
  location: _location(
    source,
    offset: offset,
    line: line,
    column: column,
    pointer: pointer,
  ),
);

FlaxCodegenImportedPackage _importedPackage({
  required String dartPackage,
  required String namespace,
  required String source,
  Iterable<FlaxCodegenImportedOwner> owners = const [],
}) => FlaxCodegenImportedPackage(
  dartPackage: dartPackage,
  namespace: FlaxCodegenBindingNamespace.parse(namespace),
  source: source,
  owners: owners,
);
