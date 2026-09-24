import 'dart:io';

import 'package:flax_codegen/src/config.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:flax_codegen/src/model.dart';
import 'package:flax_codegen/src/parser.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

void main() {
  group('parser genericIdentity', () {
    test(
      'nested capture, shadow, and data generics survive Manifest 12 codec',
      () async {
        final package = _tempGenericPackage();
        final parser = FlaxCodegenBindingParser(package.root.path);
        addTearDown(parser.dispose);

        final config = FlaxCodegenBindingConfig(
          'generics',
          'package:generic_pkg/generics.dart',
          '@example/generics',
          'lib/generics.g.dart',
          'js/generics.ts',
          {
            'Bound': const FlaxCodegenClassSelection({
              'create': [],
            }, kind: 'object'),
            'Capture': const FlaxCodegenClassSelection(
              {
                'create': ['value'],
              },
              kind: 'object',
              typeArguments: ['Bound'],
              getters: ['value'],
              instanceMethods: {
                'nest': ['child'],
              },
              methodTypeArguments: {
                'nest': ['Bound'],
              },
            ),
            'Shadow': const FlaxCodegenClassSelection(
              {
                'create': ['value'],
              },
              kind: 'object',
              typeArguments: ['Bound'],
              getters: ['value'],
              instanceMethods: {
                'echo': ['input'],
              },
              methodTypeArguments: {
                'echo': ['Bound'],
              },
            ),
            'DataBag': FlaxCodegenClassSelection(
              {
                'create': ['value'],
              },
              kind: 'object',
              typeArguments: const ['Object?'],
              getters: const ['value'],
              data: FlaxCodegenDataSelection(
                constructors: {
                  'create': ['value'],
                },
              ),
            ),
          },
        );

        await parser.prepare([config]);
        final module = await parser.parse(config);

        final capture = module.classes.singleWhere(
          (type) => type.name == 'Capture',
        );
        final captureToken = capture.typeParameters.single.genericIdentity;
        expect(captureToken, isNotNull);
        expect(
          _lexicalToken(capture.constructors.single.parameters.single.type),
          same(captureToken),
        );
        expect(_lexicalToken(capture.getters.single.type), same(captureToken));

        final nest = capture.methods.singleWhere(
          (method) => method.name == 'nest',
        );
        final nestToken = nest.typeParameters.single.genericIdentity;
        expect(nestToken, isNotNull);
        expect(nestToken, isNot(same(captureToken)));
        expect(
          nest.typeParameters.single.bound.genericIdentity,
          same(captureToken),
        );
        expect(_lexicalToken(nest.parameters.single.type), same(nestToken));
        expect(_lexicalToken(nest.result), same(nestToken));

        final shadow = module.classes.singleWhere(
          (type) => type.name == 'Shadow',
        );
        final shadowClassToken = shadow.typeParameters.single.genericIdentity;
        expect(shadowClassToken, isNotNull);
        expect(
          _lexicalToken(shadow.getters.single.type),
          same(shadowClassToken),
        );
        final echo = shadow.methods.singleWhere(
          (method) => method.name == 'echo',
        );
        final shadowMethodToken = echo.typeParameters.single.genericIdentity;
        expect(shadowMethodToken, isNotNull);
        expect(shadowMethodToken, isNot(same(shadowClassToken)));
        expect(echo.typeParameters.single.name, 'T');
        expect(shadow.typeParameters.single.name, 'T');
        expect(
          _lexicalToken(echo.parameters.single.type),
          same(shadowMethodToken),
        );
        expect(_lexicalToken(echo.result), same(shadowMethodToken));

        final dataBag = module.classes.singleWhere(
          (type) => type.name == 'DataBag',
        );
        final dataToken = dataBag.typeParameters.single.genericIdentity;
        expect(dataToken, isNotNull);
        expect(dataBag.constructors.single.parameters.single.type.kind, 'data');
        expect(
          _lexicalToken(dataBag.constructors.single.parameters.single.type),
          same(dataToken),
        );

        final diagnostics = FlaxCodegenManifestDiagnostics('');
        final decoded = FlaxCodegenManifestCodec.decodeModule(
          FlaxCodegenManifestCodec.encodeModule(module),
          diagnostics,
          '',
          module.name,
        );
        diagnostics.throwIfAny();
        expect(decoded, isNotNull);

        final decodedCapture = decoded!.classes.singleWhere(
          (type) => type.name == 'Capture',
        );
        final decodedCaptureToken =
            decodedCapture.typeParameters.single.genericIdentity;
        expect(decodedCaptureToken, isNotNull);
        expect(
          _lexicalToken(
            decodedCapture.constructors.single.parameters.single.type,
          ),
          same(decodedCaptureToken),
        );
        final decodedNest = decodedCapture.methods.singleWhere(
          (method) => method.name == 'nest',
        );
        final decodedNestToken =
            decodedNest.typeParameters.single.genericIdentity;
        expect(decodedNestToken, isNot(same(decodedCaptureToken)));
        expect(
          decodedNest.typeParameters.single.bound.genericIdentity,
          same(decodedCaptureToken),
        );
        expect(
          _lexicalToken(decodedNest.parameters.single.type),
          same(decodedNestToken),
        );

        final decodedShadow = decoded.classes.singleWhere(
          (type) => type.name == 'Shadow',
        );
        final decodedShadowClass =
            decodedShadow.typeParameters.single.genericIdentity;
        final decodedEcho = decodedShadow.methods.singleWhere(
          (method) => method.name == 'echo',
        );
        final decodedShadowMethod =
            decodedEcho.typeParameters.single.genericIdentity;
        expect(decodedShadowMethod, isNot(same(decodedShadowClass)));
        expect(
          _lexicalToken(decodedEcho.parameters.single.type),
          same(decodedShadowMethod),
        );
        expect(_lexicalToken(decodedEcho.result), same(decodedShadowMethod));
        expect(
          _lexicalToken(decodedShadow.getters.single.type),
          same(decodedShadowClass),
        );

        final decodedData = decoded.classes.singleWhere(
          (type) => type.name == 'DataBag',
        );
        final decodedDataToken =
            decodedData.typeParameters.single.genericIdentity;
        expect(
          _lexicalToken(decodedData.constructors.single.parameters.single.type),
          same(decodedDataToken),
        );
      },
    );
    test(
      'generic getter runtime and declaration views have separate binders',
      () async {
        final package = _tempGenericPackage();
        final parser = FlaxCodegenBindingParser(package.root.path);
        addTearDown(parser.dispose);
        final config = FlaxCodegenBindingConfig(
          'generics',
          'package:generic_pkg/generics.dart',
          '@example/generics',
          'unused.dart',
          'unused.ts',
          const {
            'Bound': FlaxCodegenClassSelection({'create': []}, kind: 'object'),
            'GenericResults': FlaxCodegenClassSelection(
              {},
              kind: 'object',
              getters: ['generic', 'genericAsync'],
            ),
            'GenericContract': FlaxCodegenClassSelection(
              {},
              kind: 'object',
              proxy: 'implements',
            ),
            'Capture': FlaxCodegenClassSelection(
              {},
              kind: 'object',
              typeArguments: ['Bound'],
              getters: ['callback'],
            ),
          },
        );
        await parser.prepare([config]);
        final module = await parser.parse(config);
        final encoded = FlaxCodegenManifestCodec.encodeModule(module);
        final diagnostics = FlaxCodegenManifestDiagnostics('');
        final decoded = FlaxCodegenManifestCodec.decodeModule(
          encoded,
          diagnostics,
          '',
          module.name,
        );
        diagnostics.throwIfAny();
        expect(FlaxCodegenManifestCodec.encodeModule(decoded!), encoded);
        for (final model in [module, decoded]) {
          final results = model.classes.singleWhere(
            (type) => type.name == 'GenericResults',
          );
          for (final getter in results.getters) {
            final runtime = getter.type;
            final declaration = runtime.declaration!;
            final runtimeToken = runtime.typeParameters.single.genericIdentity;
            final declarationToken =
                declaration.typeParameters.single.genericIdentity;
            expect(runtimeToken, isNotNull);
            expect(declarationToken, isNot(same(runtimeToken)));
            expect(
              _lexicalToken(runtime.parameters.single.type),
              same(runtimeToken),
            );
            expect(
              declaration.parameters.single.type.genericIdentity,
              same(declarationToken),
            );
            final runtimeResult = runtime.result!.kind == 'future'
                ? runtime.result!.item!
                : runtime.result!;
            final declaredResult = declaration.result!.kind == 'future'
                ? declaration.result!.item!
                : declaration.result!;
            expect(_lexicalToken(runtimeResult), same(runtimeToken));
            expect(declaredResult.genericIdentity, same(declarationToken));
          }
          final capture = model.classes.singleWhere(
            (type) => type.name == 'Capture',
          );
          final callback = capture.getters.single.type.declaration!;
          expect(
            callback.parameters.first.type.genericIdentity,
            same(capture.typeParameters.single.genericIdentity),
          );
          expect(
            callback.parameters.last.type.genericIdentity,
            same(callback.typeParameters.single.genericIdentity),
          );
          final method = model.classes
              .singleWhere((type) => type.name == 'GenericContract')
              .proxy!
              .methods
              .single;
          expect(
            _lexicalToken(method.parameters.single.type),
            same(method.typeParameters.single.genericIdentity),
          );
          expect(
            _lexicalToken(method.result),
            same(method.typeParameters.single.genericIdentity),
          );
        }
      },
    );
  });
}

({Directory root}) _tempGenericPackage() {
  final workspace = Directory.systemTemp.createTempSync('flax-parser-generic-');
  addTearDown(() {
    if (workspace.existsSync()) {
      workspace.deleteSync(recursive: true);
    }
  });
  final root = Directory(p.join(workspace.path, 'generic_pkg'))..createSync();
  File(p.join(root.path, 'pubspec.yaml')).writeAsStringSync('''
name: generic_pkg
publish_to: none
environment:
  sdk: ^3.5.0
''');
  Directory(p.join(root.path, 'lib')).createSync();
  File(p.join(root.path, 'lib', 'generics.dart')).writeAsStringSync('''
class Bound {
  Bound.create();
}

class Capture<T extends Bound> {
  Capture.create(this.value);
  final T value;
  U nest<U extends T>(U child) => child;
  T Function<U extends Bound>(T, U) get callback =>
      <U extends Bound>(T value, U other) => value;
}

class GenericResults {
  T Function<T extends Bound>(T) get generic => <T extends Bound>(T value) => value;
  Future<T> Function<T extends Bound>(T) get genericAsync =>
      <T extends Bound>(T value) async => value;
}

abstract class GenericContract {
  T echo<T extends Bound>(T value);
}

class Shadow<T extends Bound> {
  Shadow.create(this.value);
  final T value;
  T echo<T extends Bound>(T input) => input;
}

class DataBag<T> {
  DataBag.create(this.value);
  final T value;
}
''');
  final tool = Directory(p.join(workspace.path, '.dart_tool'))..createSync();
  File(p.join(tool.path, 'package_config.json')).writeAsStringSync('''
{
  "configVersion": 2,
  "packages": [
    {
      "name": "generic_pkg",
      "rootUri": "../generic_pkg/",
      "packageUri": "lib/"
    }
  ]
}
''');
  return (root: workspace);
}

Object? _lexicalToken(FlaxCodegenTypeRef type) {
  if (type.kind == 'parameter' || type.kind == 'data') {
    return type.kind == 'parameter'
        ? type.genericIdentity
        : type.declaration?.genericIdentity;
  }
  return type.declaration?.genericIdentity ?? type.genericIdentity;
}
