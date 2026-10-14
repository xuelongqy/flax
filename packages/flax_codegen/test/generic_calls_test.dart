import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  test(
    'nested callback target scopes round-trip after method declarations',
    () {
      final outer = Object();
      final inner = Object();
      FlaxCodegenTypeRef callback(FlaxCodegenTypeRef bound) =>
          FlaxCodegenTypeRef(
            'callback',
            typeParameters: [
              FlaxCodegenGenericParameter(
                'R',
                bound,
                defaultType: bound,
                genericIdentity: inner,
              ),
            ],
            parameters: [
              FlaxCodegenParameterModel(
                name: 'value',
                type: FlaxCodegenTypeRef('parameter', genericIdentity: inner),
                positional: true,
                required: true,
                defaultCode: 'null',
              ),
            ],
            result: FlaxCodegenTypeRef('parameter', genericIdentity: inner),
          );
      final method = FlaxCodegenMethodModel(
        'callback',
        [],
        callback(FlaxCodegenTypeRef('parameter', genericIdentity: outer)),
        typeArguments: ['Object?'],
        typeParameters: [
          FlaxCodegenGenericParameter(
            'T',
            const FlaxCodegenTypeRef('any', nullable: true),
            defaultType: const FlaxCodegenTypeRef('any', nullable: true),
            genericIdentity: outer,
          ),
        ],
      );
      final json = FlaxCodegenManifestCodec.encodeMethod(method);
      final diagnostics = FlaxCodegenManifestDiagnostics('nested_callback');
      final decoded = FlaxCodegenManifestCodec.decodeMethod(
        json,
        diagnostics,
        '',
      );
      expect(diagnostics.items, isEmpty);
      expect(FlaxCodegenManifestCodec.encodeMethod(decoded!), json);
    },
  );
  test('call selectors reify Dart types and preserve native proxy super', () async {
    var root = Directory.current;
    while (!Directory(p.join(root.path, 'packages/flax_codegen'))
        .existsSync()) {
      root = root.parent;
    }
    final parser = FlaxCodegenBindingParser(root.path);
    addTearDown(parser.dispose);
    final config = FlaxCodegenBindingConfig(
      'generic_calls',
      Uri.file(
        p.join(
          root.path,
          'packages/flax_codegen/test/fixtures/capability/generic_methods.dart',
        ),
      ).toString(),
      '@example/generic-calls',
      'unused.dart',
      'unused.ts',
      const {
        'EchoMethods': FlaxCodegenClassSelection(
          {'': []},
          kind: 'object',
          proxy: 'extends',
          instanceMethods: {
            'wrap': ['value'],
            'later': ['value'],
            'optional': ['value'],
            'runtimeTypeName': [],
          },
          methods: {
            'wrapStatic': ['value'],
          },
        ),
      },
      functions: const {
        'wrapTop': FlaxCodegenFunctionSelection(['value']),
      },
    );
    final module = await parser.parse(config);
    final methods = module.classes.single.methods;
    expect(module.requiredCapabilities, contains('engine-type-handles'));
    final wrap = methods.singleWhere((method) => method.name == 'wrap');
    final encoded = FlaxCodegenManifestCodec.encodeMethod(wrap);
    final diagnostics = FlaxCodegenManifestDiagnostics('generic_calls');
    final decoded = FlaxCodegenManifestCodec.decodeMethod(
      encoded,
      diagnostics,
      '',
    );
    expect(diagnostics.items, isEmpty);
    expect(FlaxCodegenManifestCodec.encodeMethod(decoded!), encoded);
    final malformed = {...encoded, 'specializations': <Object?>[]};
    final errors = FlaxCodegenManifestDiagnostics('generic_calls');
    expect(
      FlaxCodegenManifestCodec.decodeMethod(malformed, errors, ''),
      isNull,
    );
    expect(errors.items.single.pointer, '/specializations');
    await compileFixture(
      root.path,
      FlaxCodegenBindingEmitter([module]),
      module,
      consumerSource: '''
import { EchoMethods, wrapTop } from './plugin.js';
import { dartType, dartTypes } from '@flax/core/bindings';
import type { DartOutput, DartList, FlaxGenericCall } from '@flax/core/bindings';
class Child extends EchoMethods {
  #suffix = '!';
  override wrap<T>(value: T | DartOutput<T>, call?: FlaxGenericCall<(value: T | DartOutput<T>) => DartList<DartOutput<T>>>): DartList<DartOutput<T>> {
    this.#suffix;
    return call ? call.super(value) : super.wrap<T>(value);
  }
}
const child = new Child();
const values: DartList<string> = dartType(child, 'wrap', dartTypes.string)('a');
const fromClass: DartList<string> = dartType(EchoMethods, 'wrap', dartTypes.string).call(child, 'a');
const omitted: DartList<string> = dartType(child, 'wrap')<string>('a');
const nested: DartList<DartList<string>> = dartType(child, 'wrap', dartTypes.list(dartTypes.string))(['a']);
const top: DartList<string> = dartType(wrapTop, dartTypes.string)('a');
const staticValues: DartList<string> = dartType(EchoMethods.wrapStatic, dartTypes.string)('a');
// @ts-expect-error selected Dart String rejects numeric input
dartType(child, 'wrap', dartTypes.string)(2);
dartType(child, 'wrap', dartTypes.map(dartTypes.string, dartTypes.string))(new Map());
// @ts-expect-error member selectors only accept generated generic methods
dartType(child, 'toString');
''',
      dartTestSource: '''
class _Peer implements FlaxProxyPeer {
  @override
  bool get active => false;
  @override
  FlaxCallbackBinding genericSignature(int member, List<Type> types, FlaxCallbackBinding Function(FlaxDartTypes) build) => throw StateError('inactive test peer');
  @override
  (bool, Object?) call(int member, List<Object?> positional, Map<String, Object?> named, {FlaxCallbackBinding? signature, Function? superCall}) => (false, null);
}
void main() {
  test('one proxy preserves the native method type across direct super calls', () async {
    final proxy = _createEchoMethods('@implementation', {'@peer': _Peer()}) as api.EchoMethods;
    expect(proxy.wrap<String>('a'), isA<List<String>>());
    expect(proxy.wrap<List<String>>(['a']), isA<List<List<String>>>());
    expect(await proxy.later<String>('a'), 'a');
    expect(proxy.runtimeTypeName<String>(), 'String');
    expect(proxy.optional<String>(), isNull);
  });
}
''',
    );
  });
}
