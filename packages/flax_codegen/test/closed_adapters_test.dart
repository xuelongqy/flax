import 'package:flax_codegen/src/closed_adapters.dart';
import 'package:test/test.dart';

void main() {
  test('closed groups reuse actual re-exported types, never foreign names', () {
    String source(String uri, int index) =>
        '''
import 'dart:core';
import '$uri' as api;
Object _collection${index}Create() => <api.Value>[];
bool _collection${index}Matches(Object t0) => t0 is List<api.Value>;
Object _collection${index}Restore(Object value) => (value as List).cast<api.Value>();
final create = _collection${index}Create;
final matches = _collection${index}Matches;
final restore = _collection${index}Restore;
''';
    final input = {
      'lib/a.g.dart': source('package:owner/first.dart', 0),
      'lib/b.g.dart': source('package:owner/reexport.dart', 12),
      'lib/c.g.dart': source('package:foreign/api.dart', 0),
    };
    const identities = {
      'package:owner/first.dart::Value': 'package:owner/src/value.dart::Value',
      'package:owner/reexport.dart::Value':
          'package:owner/src/value.dart::Value',
    };
    final output = flaxCodegenShareClosedAdapters(input, identities);
    expect(output.keys, hasLength(4));
    final helper = output[flaxCodegenClosedAdaptersOutput]!;
    expect(helper, contains('List<t1.Value>'));
    expect(helper, contains("import 'package:owner/first.dart' as t1;"));
    expect(helper, isNot(contains('foreign')));
    for (final name in ['a', 'b']) {
      expect(
        output['lib/$name.g.dart'],
        contains('_flaxAdapters.flaxAdapter0Create'),
      );
      expect(output['lib/$name.g.dart'], isNot(contains('Object _collection')));
    }
    expect(output['lib/c.g.dart'], input['lib/c.g.dart']);
    expect(
      flaxCodegenShareClosedAdapters(
        Map.fromEntries(input.entries.toList().reversed),
        identities,
      ),
      output,
    );
  });

  test('references preserve local generic adapters, lexical bindings and member names', () {
    const adapter = '''
import 'dart:core';
Object _callback0(Object value) => value;
bool _callback0Matches(Object value) => value is bool;
Object? _callback0Invoke(Object value) => _callback0(value);
final global = _callback0;
''';
    const locals = '''
T generic<T>(T value) {
  Object _callback0(Object value) => <T>[value as T];
  bool _callback0Matches(Object value) => value is T;
  return _callback0(value) as T;
}
Object parameter(Object _callback0, Object _flaxAdapters) => _callback0;
Object variable() { final _callback0 = 1; return _callback0; }
Object caught() { try { throw 1; } catch (_callback0) { return _callback0; } }
Object loop() { for (final _callback0 in [1]) { return _callback0; } return _callback0; }
Object classic() { for (var _callback0 = 0; _callback0 < 1; _callback0++) {} return _callback0; }
Object property(dynamic value) => value._callback0;
void label() { _callback0: while (true) { break _callback0; } }
void named(dynamic target) => target(_callback0: _callback0);
''';
    final output = flaxCodegenShareClosedAdapters({
      'lib/a.g.dart': '$adapter$locals',
      'lib/b.g.dart': adapter,
    }, const {});
    final source = output['lib/a.g.dart']!;
    expect(source, contains('as _flaxAdapters0;'));
    expect(source, contains('final global = _flaxAdapters0.flaxAdapter0;'));
    expect(
      source,
      contains(locals.substring(0, locals.indexOf('Object loop()'))),
    );
    expect(
      source,
      contains(
        'for (final _callback0 in [1]) { return _callback0; } return _flaxAdapters0.flaxAdapter0;',
      ),
    );
    expect(
      source,
      contains(
        'for (var _callback0 = 0; _callback0 < 1; _callback0++) {} return _flaxAdapters0.flaxAdapter0;',
      ),
    );
    expect(source, contains('value._callback0'));
    expect(source, contains('_callback0: while (true) { break _callback0; }'));
    expect(source, contains('target(_callback0: _flaxAdapters0.flaxAdapter0)'));
    expect(
      output[flaxCodegenClosedAdaptersOutput],
      contains('=> flaxAdapter0(value);'),
    );
  });

  test('open types, private captures and different defaults remain local', () {
    String source(String defaultValue) =>
        '''
import 'dart:core';
Object _callback0<T>(T value) => value as Object;
Object _callback1(Object value) => _private(value);
Object _private(Object value) => value;
Object _callback2([Object? value = $defaultValue]) => value ?? 0;
''';
    final input = {'lib/a.dart': source('null'), 'lib/b.dart': source('1')};
    expect(flaxCodegenShareClosedAdapters(input, const {}), input);
    final single = {'lib/a.dart': source('null')};
    expect(flaxCodegenShareClosedAdapters(single, const {}), single);
  });

  test(
    'helper retains core imports alongside prefixed core types and errors',
    () {
      const source = '''
import 'dart:core';
import 'dart:core' as api;
Object _future0Adapt(api.List<bool> value) => value;
Object _future1Adapt(Object? value) => value ?? (throw ArgumentError('same message'));
''';
      final helper = flaxCodegenShareClosedAdapters({
        'lib/a.dart': source,
        'lib/b.dart': source,
      }, const {})[flaxCodegenClosedAdaptersOutput]!;
      expect(helper, contains("import 'dart:core';"));
      expect(helper, contains("import 'dart:core' as t0;"));
      expect(helper, contains("throw ArgumentError('same message')"));
    },
  );
}
