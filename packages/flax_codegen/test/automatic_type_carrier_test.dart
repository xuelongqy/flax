import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

void main() {
  late Directory root;

  setUp(() {
    root = Directory(Directory.systemTemp.resolveSymbolicLinksSync())
        .createTempSync('flax-auto-carrier-');
    File(p.join(root.path, 'pubspec.yaml')).writeAsStringSync('''
name: carrier_pkg
''');
    final lib = Directory(p.join(root.path, 'lib'))..createSync();
    Directory(p.join(lib.path, 'src')).createSync();
    File(p.join(lib.path, 'main.dart')).writeAsStringSync('''
import 'dependency.dart';
import 'a.dart';
import 'foreign_export.dart';
import 'sdk_export.dart';
import 'src/private.dart';

class Consumer {
  Consumer(this.value, this.shared);
  final PublicType value;
  final SharedType shared;
}

class PrivateConsumer {
  PrivateConsumer(this.hidden);
  final HiddenType hidden;
}

class ForeignConsumer {
  ForeignConsumer(this.value);
  final ForeignType value;
}

class SdkConsumer {
  SdkConsumer(this.value);
  final ByteData value;
}
''');
    File(p.join(lib.path, 'dependency.dart')).writeAsStringSync('''
class PublicType {}
''');
    File(p.join(lib.path, 'other.dart')).writeAsStringSync('''
class PublicType {}
''');
    File(p.join(lib.path, 'a.dart')).writeAsStringSync('''
export 'dependency.dart';
export 'src/shared.dart';
''');
    File(p.join(lib.path, 'z.dart')).writeAsStringSync('''
export 'src/shared.dart';
''');
    File(p.join(lib.path, 'foreign_export.dart')).writeAsStringSync('''
export 'package:foreign_pkg/foreign.dart';
''');
    File(p.join(lib.path, 'sdk_export.dart')).writeAsStringSync('''
export 'dart:typed_data' show ByteData;
''');
    File(p.join(lib.path, 'src', 'shared.dart')).writeAsStringSync('''
class SharedType {}
''');
    File(p.join(lib.path, 'src', 'private.dart')).writeAsStringSync('''
class HiddenType {}
''');
    final foreign = Directory(p.join(root.path, 'foreign_pkg', 'lib'))
      ..createSync(recursive: true);
    File(p.join(foreign.path, 'foreign.dart')).writeAsStringSync('''
class ForeignType {}
''');
    final tool = Directory(p.join(root.path, '.dart_tool'))..createSync();
    File(p.join(tool.path, 'package_config.json')).writeAsStringSync('''
{
  "configVersion": 2,
  "packages": [
    {
      "name": "carrier_pkg",
      "rootUri": "../",
      "packageUri": "lib/"
    },
    {
      "name": "foreign_pkg",
      "rootUri": "../foreign_pkg/",
      "packageUri": "lib/"
    }
  ]
}
''');
  });

  tearDown(() {
    if (root.existsSync()) root.deleteSync(recursive: true);
  });

  FlaxCodegenBindingConfig seed() => FlaxCodegenBindingConfig(
    'carrier',
    'package:carrier_pkg/main.dart',
    '@example/carrier',
    'unused.dart',
    'unused.ts',
    const {},
  );

  test(
    'automatic library mode routes exact identities through public carriers',
    () async {
      final parser = FlaxCodegenBindingParser(root.path);
      addTearDown(parser.dispose);

      final proposal = await parser.proposeLibrary(seed());

      expect(proposal.config.additionalLibraries, isEmpty);
      expect(
        proposal
            .typeCarriers['package:carrier_pkg/dependency.dart::PublicType'],
        'package:carrier_pkg/dependency.dart',
      );
      expect(
        proposal.typeCarriers['package:carrier_pkg/other.dart::PublicType'],
        'package:carrier_pkg/other.dart',
      );
      expect(
        proposal
            .typeCarriers['package:carrier_pkg/src/shared.dart::SharedType'],
        'package:carrier_pkg/a.dart',
      );
      expect(
        proposal.typeCarriers,
        isNot(contains('package:carrier_pkg/src/private.dart::HiddenType')),
      );
      expect(
        proposal.typeCarriers,
        isNot(contains('package:foreign_pkg/foreign.dart::ForeignType')),
      );
      expect(
        proposal.typeCarriers,
        isNot(contains('dart:typed_data::ByteData')),
      );
      expect(proposal.config.classes, contains('Consumer'));
      expect(proposal.config.classes, isNot(contains('PrivateConsumer')));
      expect(proposal.config.classes, isNot(contains('ForeignConsumer')));
      expect(proposal.config.classes, isNot(contains('SdkConsumer')));
      expect(
        proposal.skips
            .where((skip) => skip.target.contains('PrivateConsumer'))
            .map((skip) => skip.reason)
            .join('\n'),
        contains('must publicly export the referenced type HiddenType'),
      );

      final module = await parser.parse(
        proposal.config,
        automaticTypeCarriers: proposal.typeCarriers,
      );
      expect(module.classes.map((type) => type.name), contains('Consumer'));
      expect(
        module.classes.map((type) => type.name),
        isNot(contains('PublicType')),
      );
      expect(
        module.typeLibraries['PublicType'],
        'package:carrier_pkg/dependency.dart',
      );
      expect(module.typeLibraries['SharedType'], 'package:carrier_pkg/a.dart');
      expect(module.publicLibraries, isEmpty);
    },
  );

  test('explicit parse stays fail-closed without automatic carriers', () async {
    final parser = FlaxCodegenBindingParser(root.path);
    addTearDown(parser.dispose);
    final config = FlaxCodegenBindingConfig(
      'carrier',
      'package:carrier_pkg/main.dart',
      '@example/carrier',
      'unused.dart',
      'unused.ts',
      const {
        'Consumer': FlaxCodegenClassSelection({
          '': ['value', 'shared'],
        }, kind: 'object'),
      },
    );

    await expectLater(
      parser.parse(config),
      throwsA(
        isA<StateError>().having(
          (error) => error.message,
          'message',
          contains('must publicly export the referenced type PublicType'),
        ),
      ),
    );
  });
}
