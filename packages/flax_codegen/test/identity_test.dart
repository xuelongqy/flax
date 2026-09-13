import 'package:flax_codegen/src/identity.dart';
import 'package:test/test.dart';

void main() {
  test('percent-encodes the ADR UTF-8 uppercase vectors', () {
    const vectors = {
      'Widget': 'Widget',
      'FlaxCanvasView': 'FlaxCanvasView',
      'applyBoxFit': 'applyBoxFit',
      r'Fancy$Button': 'Fancy%24Button',
      'a/b': 'a%2Fb',
      'a#b': 'a%23b',
      'a:b': 'a%3Ab',
      '100%': '100%25',
      'café': 'caf%C3%A9',
      '~ok_id': '~ok_id',
    };
    for (final entry in vectors.entries) {
      expect(FlaxCodegenPercentEncoding.encode(entry.key), entry.value);
      FlaxCodegenPercentEncoding.validate(entry.value);
    }
  });

  test('rejects lowercase, malformed, noncanonical, and invalid UTF-8', () {
    const malformed = ['%', '%2', '%2G', 'a%', 'a%2', 'a%2fb', 'caf%c3%a9'];
    for (final encoded in malformed) {
      expect(
        () => FlaxCodegenPercentEncoding.validate(encoded),
        throwsA(
          isA<FormatException>().having(
            (error) => error.message,
            'message',
            'Malformed percent encoding.',
          ),
        ),
      );
    }

    const invalidUtf8 = ['%FF', '%80', '%C3', '%C0%AF'];
    for (final encoded in invalidUtf8) {
      expect(
        () => FlaxCodegenPercentEncoding.validate(encoded),
        throwsA(
          isA<FormatException>().having(
            (error) => error.message,
            'message',
            'Invalid UTF-8.',
          ),
        ),
      );
    }

    const unreserved =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.-~';
    for (var index = 0; index < unreserved.length; index++) {
      final byte = unreserved.codeUnitAt(index);
      final encoded =
          '%${byte.toRadixString(16).toUpperCase().padLeft(2, '0')}';
      expect(
        () => FlaxCodegenPercentEncoding.validate(encoded),
        throwsA(
          isA<FormatException>().having(
            (error) => error.message,
            'message',
            'Noncanonical percent encoding.',
          ),
        ),
      );
    }
    expect(
      () => FlaxCodegenPercentEncoding.validate('Widge%74'),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Noncanonical percent encoding.',
        ),
      ),
    );
  });

  test('parses binding namespaces by exact grammar with no allowlist', () {
    const valid = [
      'a.b',
      'flax.core',
      'flax.material',
      'flax.canvas',
      'flax.cupertino',
      'flax.unofficial',
      'com.acme.flax.widgets',
      'io.github.alice.flax.widgets',
    ];
    for (final namespace in valid) {
      expect(FlaxCodegenBindingNamespace.parse(namespace).value, namespace);
    }

    final label63 = 'a' * 63;
    final valid253 = '$label63.$label63.$label63.${'a' * 61}';
    final invalid254 = '$label63.$label63.$label63.${'a' * 62}';
    expect(valid253.length, 253);
    expect(invalid254.length, 254);
    expect(FlaxCodegenBindingNamespace.parse(valid253).value, valid253);
    expect(FlaxCodegenBindingNamespace.parse('a.$label63').value, 'a.$label63');

    const invalid = [
      'flax',
      'Flax.core',
      'flax_core.ui',
      'foo-bar.baz',
      'flax.core/v1',
      'flax.core:1',
      'flax.core#1',
      'flax.core.',
      '.flax.core',
      'flax..core',
      'café.core',
    ];
    for (final namespace in [...invalid, invalid254]) {
      expect(
        () => FlaxCodegenBindingNamespace.parse(namespace),
        throwsFormatException,
      );
    }
  });

  test('parses module names and moduleIds by exact grammar', () {
    const names = ['flutter', 'components', 'material', 'canvas', 'buttons'];
    for (final name in names) {
      expect(FlaxCodegenModuleName.parse(name).value, name);
    }
    final name64 = 'a' * 64;
    expect(FlaxCodegenModuleName.parse(name64).value, name64);

    const invalidNames = ['Flutter', '_hidden', '1abc', 'my-module', ''];
    for (final name in [...invalidNames, 'a' * 65]) {
      expect(() => FlaxCodegenModuleName.parse(name), throwsFormatException);
    }

    const moduleIds = [
      'flax.core/flutter',
      'flax.core/components',
      'flax.material/material',
      'flax.canvas/canvas',
      'com.acme.flax.widgets/buttons',
    ];
    for (final moduleId in moduleIds) {
      expect(FlaxCodegenModuleId.parse(moduleId).value, moduleId);
    }
    expect(
      FlaxCodegenModuleId(
        namespace: FlaxCodegenBindingNamespace.parse('flax.core'),
        name: FlaxCodegenModuleName.parse('flutter'),
      ).value,
      'flax.core/flutter',
    );

    const invalidModuleIds = [
      'flax.core',
      'flax.core/',
      '/flutter',
      'flax.core/flutter/extra',
      'flax.core%2Fflutter',
      'Flax.core/flutter',
      'flax.core/Flutter',
    ];
    for (final moduleId in invalidModuleIds) {
      expect(() => FlaxCodegenModuleId.parse(moduleId), throwsFormatException);
    }
  });

  test('constructs and parses exact type and function wireIds', () {
    const wires = {
      'flax.core/flutter#type:Widget': (
        moduleId: 'flax.core/flutter',
        kind: FlaxCodegenWireKind.type,
        name: 'Widget',
      ),
      'flax.core/flutter#function:applyBoxFit': (
        moduleId: 'flax.core/flutter',
        kind: FlaxCodegenWireKind.function,
        name: 'applyBoxFit',
      ),
      'flax.core/components#type:State': (
        moduleId: 'flax.core/components',
        kind: FlaxCodegenWireKind.type,
        name: 'State',
      ),
      'flax.material/material#function:showDialog': (
        moduleId: 'flax.material/material',
        kind: FlaxCodegenWireKind.function,
        name: 'showDialog',
      ),
      'flax.canvas/canvas#type:FlaxCanvasView': (
        moduleId: 'flax.canvas/canvas',
        kind: FlaxCodegenWireKind.type,
        name: 'FlaxCanvasView',
      ),
      r'com.acme.flax.widgets/buttons#type:Fancy%24Button': (
        moduleId: 'com.acme.flax.widgets/buttons',
        kind: FlaxCodegenWireKind.type,
        name: r'Fancy$Button',
      ),
    };
    for (final entry in wires.entries) {
      final parsed = FlaxCodegenWireId.parse(entry.key);
      expect(parsed.value, entry.key);
      expect(parsed.moduleId.value, entry.value.moduleId);
      expect(parsed.kind, entry.value.kind);
      expect(parsed.publicBindingName, entry.value.name);
      final constructed = entry.value.kind == FlaxCodegenWireKind.type
          ? FlaxCodegenWireId.type(
              moduleId: FlaxCodegenModuleId.parse(entry.value.moduleId),
              publicBindingName: entry.value.name,
            )
          : FlaxCodegenWireId.function(
              moduleId: FlaxCodegenModuleId.parse(entry.value.moduleId),
              publicBindingName: entry.value.name,
            );
      expect(constructed.value, entry.key);
      expect(constructed, parsed);
    }
  });

  test('rejects empty, private, and noncanonical incoming wireIds', () {
    final moduleId = FlaxCodegenModuleId.parse('flax.core/flutter');
    expect(
      () => FlaxCodegenWireId.type(moduleId: moduleId, publicBindingName: ''),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Empty name.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenWireId.type(moduleId: moduleId, publicBindingName: '_W'),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Private name.',
        ),
      ),
    );

    expect(
      () => FlaxCodegenWireId.parse('flax.core/flutter#type:'),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Empty name.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenWireId.parse('flax.core/flutter#type:_Widget'),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Private name.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenWireId.parse('flax.core/flutter#type:Widge%74'),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Noncanonical percent encoding.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenWireId.parse('flax.core/flutter#type:a%2fb'),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Malformed percent encoding.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenWireId.parse('flax.core/flutter#type:%FF'),
      throwsA(
        isA<FormatException>().having(
          (error) => error.message,
          'message',
          'Invalid UTF-8.',
        ),
      ),
    );
    expect(
      () => FlaxCodegenWireId.parse('flax.core/flutter#Type:Widget'),
      throwsFormatException,
    );
    expect(
      () => FlaxCodegenWireId.parse('flax.core/flutter#type:Widget'),
      returnsNormally,
    );
    expect(
      FlaxCodegenWireId.parse('flax.core/flutter#type:Widget').value,
      'flax.core/flutter#type:Widget',
    );
  });

  test('sourceIdentity keeps kind, originating URI, and public name', () {
    const widgetUri = 'package:flutter/src/widgets/framework.dart';
    const boxFitUri = 'package:flutter/src/painting/box_fit.dart';
    final widget = FlaxCodegenSourceIdentity(
      kind: FlaxCodegenDeclarationKind.type,
      originatingUri: widgetUri,
      name: 'Widget',
      origin: FlaxCodegenOriginState.resolved,
    );
    final same = FlaxCodegenSourceIdentity(
      kind: FlaxCodegenDeclarationKind.type,
      originatingUri: widgetUri,
      name: 'Widget',
      origin: FlaxCodegenOriginState.resolved,
    );
    final applyBoxFit = FlaxCodegenSourceIdentity(
      kind: FlaxCodegenDeclarationKind.function,
      originatingUri: boxFitUri,
      name: 'applyBoxFit',
      origin: FlaxCodegenOriginState.resolved,
    );
    final dartString = FlaxCodegenSourceIdentity(
      kind: FlaxCodegenDeclarationKind.type,
      originatingUri: 'dart:core',
      name: 'String',
      origin: FlaxCodegenOriginState.resolved,
    );
    final dartColor = FlaxCodegenSourceIdentity(
      kind: FlaxCodegenDeclarationKind.type,
      originatingUri: 'dart:ui',
      name: 'Color',
      origin: FlaxCodegenOriginState.resolved,
    );

    expect(widget.kind, FlaxCodegenDeclarationKind.type);
    expect(widget.originatingUri, widgetUri);
    expect(widget.name, 'Widget');
    expect(widget, same);
    expect(widget.hashCode, same.hashCode);
    expect(applyBoxFit.kind, FlaxCodegenDeclarationKind.function);
    expect(applyBoxFit.originatingUri, boxFitUri);
    expect(applyBoxFit.name, 'applyBoxFit');
    expect(dartString.originatingUri, 'dart:core');
    expect(dartColor.originatingUri, 'dart:ui');
    expect(
      FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'dart:_internal',
        name: 'Symbol',
        origin: FlaxCodegenOriginState.resolved,
      ).originatingUri,
      'dart:_internal',
    );
    expect(
      widget,
      isNot(
        FlaxCodegenSourceIdentity(
          kind: FlaxCodegenDeclarationKind.type,
          originatingUri: widgetUri,
          name: 'Element',
          origin: FlaxCodegenOriginState.resolved,
        ),
      ),
    );
    expect(widget, isNot(applyBoxFit));
    expect(widget, isNot(dartString));
  });

  test('sourceIdentity accepts canonical percent-encoded package paths', () {
    final cafe = FlaxCodegenSourceIdentity(
      kind: FlaxCodegenDeclarationKind.type,
      originatingUri: 'package:acme/caf%C3%A9.dart',
      name: 'Cafe',
      origin: FlaxCodegenOriginState.resolved,
    );
    expect(cafe.originatingUri, 'package:acme/caf%C3%A9.dart');
    expect(
      FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:acme/src/caf%C3%A9.dart',
        name: 'Cafe',
        origin: FlaxCodegenOriginState.resolved,
      ).originatingUri,
      'package:acme/src/caf%C3%A9.dart',
    );
    expect(
      FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:flutter/src/widgets/framework.dart',
        name: 'Widget',
        origin: FlaxCodegenOriginState.resolved,
      ).originatingUri,
      'package:flutter/src/widgets/framework.dart',
    );
    expect(
      FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:acme/generated',
        name: 'Generated',
        origin: FlaxCodegenOriginState.resolved,
      ).originatingUri,
      'package:acme/generated',
    );
  });

  test('sourceIdentity accepts raw dollar package path', () {
    expect(
      FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: r'package:acme/a$b.dart',
        name: 'Ab',
        origin: FlaxCodegenOriginState.resolved,
      ).originatingUri,
      r'package:acme/a$b.dart',
    );
  });

  test('sourceIdentity accepts raw bang package path', () {
    expect(
      FlaxCodegenSourceIdentity(
        kind: FlaxCodegenDeclarationKind.type,
        originatingUri: 'package:acme/a!b.dart',
        name: 'Ab',
        origin: FlaxCodegenOriginState.resolved,
      ).originatingUri,
      'package:acme/a!b.dart',
    );
  });

  test('sourceIdentity rejects noncanonical package and dart URIs', () {
    FlaxCodegenSourceIdentity identity(String originatingUri) =>
        FlaxCodegenSourceIdentity(
          kind: FlaxCodegenDeclarationKind.type,
          originatingUri: originatingUri,
          name: 'Cafe',
          origin: FlaxCodegenOriginState.resolved,
        );
    const invalidUris = [
      'package:acme/café.dart',
      'package:acme/caf%c3%a9.dart',
      'package:acme/caf%C3%A9.dart?x=1',
      'package:acme/caf%C3%A9.dart#Cafe',
      'package:acme/framework%2Edart',
      'package:acme/%2E/foo.dart',
      'package:acme/%2E%2E/foo.dart',
      'package:acme/foo%2Fbar.dart',
      'package:acme/foo%5Cbar.dart',
      'package:acme/foo%2fbar.dart',
      r'package:acme/foo\bar.dart',
      'package://acme/foo.dart',
      'package:Acme/foo.dart',
      'file:///Users/src/framework.dart',
      '/Users/src/framework.dart',
      'C:/src/framework.dart',
      'framework.dart',
      './framework.dart',
      '../widgets/framework.dart',
      'dart:core/core.dart',
      'dart:Core',
      'dart:',
    ];
    for (final uri in invalidUris) {
      expect(
        () => identity(uri),
        throwsA(
          isA<FormatException>().having(
            (error) => error.message,
            'message',
            'Invalid originating URI.',
          ),
        ),
      );
    }
  });

  test(
    'sourceIdentity requires a resolved origin and rejects invalid inputs',
    () {
      const widgetUri = 'package:flutter/src/widgets/framework.dart';
      FlaxCodegenSourceIdentity identity({
        FlaxCodegenDeclarationKind kind = FlaxCodegenDeclarationKind.type,
        String originatingUri = widgetUri,
        String name = 'Widget',
        FlaxCodegenOriginState origin = FlaxCodegenOriginState.resolved,
      }) => FlaxCodegenSourceIdentity(
        kind: kind,
        originatingUri: originatingUri,
        name: name,
        origin: origin,
      );

      expect(
        () => identity(origin: FlaxCodegenOriginState.synthetic),
        throwsA(
          isA<FormatException>().having(
            (error) => error.message,
            'message',
            'Synthetic declaration.',
          ),
        ),
      );
      expect(
        () => identity(origin: FlaxCodegenOriginState.alias),
        throwsA(
          isA<FormatException>().having(
            (error) => error.message,
            'message',
            'Alias declaration.',
          ),
        ),
      );
      expect(
        () => identity(origin: FlaxCodegenOriginState.unresolved),
        throwsA(
          isA<FormatException>().having(
            (error) => error.message,
            'message',
            'Unresolved alias.',
          ),
        ),
      );
      expect(
        () => identity(origin: FlaxCodegenOriginState.ambiguous),
        throwsA(
          isA<FormatException>().having(
            (error) => error.message,
            'message',
            'Ambiguous origin.',
          ),
        ),
      );
      expect(
        () => FlaxCodegenDeclarationKind.parse('mixin'),
        throwsA(
          isA<FormatException>().having(
            (error) => error.message,
            'message',
            'Unsupported declaration kind.',
          ),
        ),
      );
      expect(
        () => FlaxCodegenDeclarationKind.parse('typedef'),
        throwsFormatException,
      );
      expect(
        () => FlaxCodegenDeclarationKind.parse('alias'),
        throwsFormatException,
      );
      expect(() => identity(name: ''), throwsFormatException);
      expect(() => identity(name: '_Widget'), throwsFormatException);

      const invalidUris = [
        'file:///Users/src/framework.dart',
        'file://localhost/framework.dart',
        '/Users/src/framework.dart',
        'C:/src/framework.dart',
        'framework.dart',
        './framework.dart',
        '../widgets/framework.dart',
        'packages/flutter/lib/src/widgets/framework.dart',
        '$widgetUri?foo=1',
        '$widgetUri#Widget',
        'package:flutter/src/../widgets/framework.dart',
        'package:flutter/./src/widgets/framework.dart',
        'package:flutter//src/widgets/framework.dart',
        'package:Flutter/src/widgets/framework.dart',
        'package:flutter/src/widgets/framework%2Edart',
        'package:flutter/src/widgets/framework.dart/',
        'PACKAGE:flutter/src/widgets/framework.dart',
        'dart:core/core.dart',
        'dart:Core',
        'dart:',
      ];
      for (final uri in invalidUris) {
        expect(
          () => identity(originatingUri: uri),
          throwsA(
            isA<FormatException>().having(
              (error) => error.message,
              'message',
              'Invalid originating URI.',
            ),
          ),
        );
      }
    },
  );
}
