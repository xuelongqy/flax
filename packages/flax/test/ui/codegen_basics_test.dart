import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/interop_bindings.dart';
import '../../.dart_tool/flax/ui/repeated_bindings.dart';
import '../support/owned_harness.dart';

void main() {
  testWidgets('Records round-trip as structural values', (t) async {
    final h = OwnedHarness(
      fixture: 'codegen_basics',
      extra: [interopBindings, repeatedBindings],
    );
    try {
      await t.pumpWidget(h.app('codegen-basics'));
      h.execute('var recordValues = recordRoundtrip()');

      expect(h.number('recordValues.positional.\$1'), 7);
      expect(h.string('recordValues.positional.\$2'), 'seven');
      expect(h.number('recordValues.named.id'), 8);
      expect(h.string('recordValues.named.name'), 'eight');
      expect(h.number('recordValues.mixed.\$1'), 9);
      expect(h.boolean('recordValues.mixed.enabled'), isTrue);
      expect(h.string('recordValues.mixed.name'), 'nine');
      expect(h.boolean('recordValues.nullable.\$1 === null'), isTrue);
      expect(h.string('recordValues.nullable.\$2'), 'nullable');
      expect(h.boolean('recordValues.nullValue === null'), isTrue);
      expect(h.number('recordValues.nested.\$1.\$1'), 10);
      expect(h.string('recordValues.nested.\$1.\$2'), 'ten');
      expect(
        h.boolean('recordValues.nested.token === recordValues.token'),
        isTrue,
      );
      expect(h.boolean('recordValues.sameToken'), isTrue);
      expect(h.number('recordValues.list.get(0).\$1'), 11);
      expect(h.string('recordValues.list.get(0).\$2'), 'eleven');
      expect(h.number('recordValues.callback.\$1'), 13);
      expect(h.string('recordValues.callback.\$2'), 'twelve!');
      expect(h.number('recordValues.extra.\$1'), 13);
      expect(h.string('recordValues.extra.\$2'), 'thirteen');
      expect(
        h.boolean('recordValues.input === recordValues.positional'),
        isFalse,
      );
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets('Record conversion reports field-specific errors', (t) async {
    final h = OwnedHarness(
      fixture: 'codegen_basics',
      extra: [interopBindings, repeatedBindings],
    );
    try {
      await t.pumpWidget(h.app('codegen-basics'));
      h.execute('var records = interop.RecordInterop()');
      for (final (expression, message) in [
        ('records.echo({\$1: 1})', 'Missing Record field \$2'),
        ('records.echo({\$1: "wrong", \$2: "value"})', 'Record field \$1'),
        ('records.echo({\$1: 1, \$2: null})', 'Record field \$2'),
      ]) {
        expect(
          h.boolean('''
(() => {
  try { $expression; }
  catch (error) { return String(error).includes(${jsonEncode(message)}); }
  return false;
})()
'''),
          isTrue,
          reason: expression,
        );
      }
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets('Records preserve callback and Future conversion', (t) async {
    final h = OwnedHarness(
      fixture: 'codegen_basics',
      extra: [interopBindings, repeatedBindings],
    );
    try {
      await t.pumpWidget(h.app('codegen-basics'));
      h.execute('''
var recordValues = recordRoundtrip();
var recordFuture;
recordValues.future.then(value => { recordFuture = value; });
''');
      await t.pumpAndSettle();
      expect(h.number('recordFuture.\$1'), 14);
      expect(h.string('recordFuture.\$2'), 'fourteen');
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets('generic aliases preserve SDK callbacks and reference identity', (
    t,
  ) async {
    final h = OwnedHarness(
      fixture: 'codegen_basics',
      extra: [interopBindings, repeatedBindings],
    );
    try {
      await t.pumpWidget(h.app('codegen-basics'));
      h.execute('var genericAliases = genericAliasRoundtrip()');
      expect(h.number('genericAliases.mapped'), 5);
      expect(h.number('genericAliases.generic'), 7);
      expect(h.number('genericAliases.inline'), 7);
      expect(h.number('genericAliases.converted'), 9);
      expect(h.number('genericAliases.changed'), 23);
      expect(h.number('genericAliases.returned'), 11);
      expect(h.number('genericAliases.items.get(0)'), 1);
      expect(h.number('genericAliases.items.get(1)'), 2);
      expect(h.number('genericAliases.consumer.increment(4)'), 5);
      expect(h.number('genericAliases.consumer.stored(0, 19)'), 19);
      expect(h.number('genericAliases.consumer.stored(1, 21)'), 21);
      h.execute('''
var aliasConsumer = genericAliases.consumer;
var aliasToken = interop.Token(31);
var aliasIdentity = aliasConsumer.identity;
''');
      expect(
        h.boolean(
          'aliasConsumer.genericToken(value => value, aliasToken) === aliasToken',
        ),
        isTrue,
      );
      expect(h.boolean('aliasIdentity(aliasToken) === aliasToken'), isTrue);
      expect(h.string('aliasIdentity("kept")'), 'kept');
      expect(h.boolean('aliasIdentity(null) === null'), isTrue);
      expect(h.number('aliasConsumer.genericDouble(value => value, 4)'), 4);
      expect(h.number('aliasConsumer.genericDouble(value => value, 4.5)'), 4.5);
      expect(h.number('aliasConsumer.genericNullable(value => value, 5)'), 5);
      expect(
        h.boolean(
          'aliasConsumer.genericNullable(value => value, null) === null',
        ),
        isTrue,
      );
      expect(
        h.boolean('aliasConsumer.broadNumberIsDouble(value => value)'),
        isTrue,
      );
      expect(
        h.boolean('aliasConsumer.nullable(value => value) === null'),
        isTrue,
      );
      expect(
        h.boolean('aliasConsumer.nullableIdentity(null) === null'),
        isTrue,
      );
      expect(h.number('aliasConsumer.nullableIdentity(3)'), 3);
      expect(h.number('aliasConsumer.nullable(() => 3)'), 3);
      expect(h.number('aliasConsumer.nullableDouble(value => value, 3)'), 3);
      expect(
        h.number('aliasConsumer.nullableDouble(value => value, 3.5)'),
        3.5,
      );
      expect(
        h.boolean(
          'aliasConsumer.nullableDouble(value => value, null) === null',
        ),
        isTrue,
      );
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets(
    'generic alias callbacks validate Dart type arguments and errors',
    (t) async {
      final h = OwnedHarness(
        fixture: 'codegen_basics',
        extra: [interopBindings, repeatedBindings],
      );
      try {
        await t.pumpWidget(h.app('codegen-basics'));
        h.execute('var aliasConsumer = interop.CodegenGenericAliasConsumer()');
        for (final expression in [
          'aliasConsumer.generic(() => "wrong", 1)',
          'aliasConsumer.inline(() => "wrong", 1)',
          'aliasConsumer.genericToken(() => 1, interop.Token(2))',
          'aliasConsumer.nullable(() => "wrong")',
          'aliasConsumer.map(() => "wrong", 1)',
          'aliasConsumer.nullableIdentity("wrong")',
          for (final value in [
            '1.5',
            'NaN',
            'Infinity',
            '-Infinity',
            '9007199254740992',
          ])
            for (final method in ['generic', 'inline', 'genericNullable'])
              'aliasConsumer.$method(() => $value, 1)',
          'aliasConsumer.nullable(() => 1.5)',
        ]) {
          expect(
            h.boolean(
              '(() => { try { $expression; return false; } '
              'catch (_) { return true; } })()',
            ),
            isTrue,
            reason: expression,
          );
        }
        expect(
          h.boolean('''
(() => {
  try { aliasConsumer.generic(() => { throw new Error('alias failure'); }, 1); }
  catch (error) { return String(error).includes('alias failure'); }
  return false;
})()
'''),
          isTrue,
        );
        expect(h.number('aliasConsumer.generic(value => value, 5)'), 5);
        expect(
          h.number('aliasConsumer.generic(() => 9007199254740991, 1)'),
          9007199254740991,
        );
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets('generic aliases preserve asynchronous delivery and rejection', (
    t,
  ) async {
    final h = OwnedHarness(
      fixture: 'codegen_basics',
      extra: [interopBindings, repeatedBindings],
    );
    try {
      await t.pumpWidget(h.app('codegen-basics'));
      h.execute('''
var genericAliases = genericAliasRoundtrip();
var aliasToken = interop.Token(29);
var aliasResults;
Promise.all([
  genericAliases.later,
  genericAliases.genericLater,
  genericAliases.consumer.asyncIdentity(aliasToken),
  genericAliases.consumer.genericLater(async () => 'wrong', 1)
    .then(() => false, () => true),
  genericAliases.consumer.genericLater(async () => { throw new Error('async alias failure'); }, 1)
    .then(() => false, error => String(error).includes('async alias failure')),
  genericAliases.consumer.inlineLater(async value => value, 19),
  genericAliases.consumer.nullableLater(async value => value, 21),
  genericAliases.consumer.nullableLater(async value => value, null),
  Promise.all([1.5, NaN, Infinity, -Infinity, 9007199254740992].flatMap(value =>
    ['genericLater', 'inlineLater', 'nullableLater'].map(method =>
      genericAliases.consumer[method](async () => value, 1)
        .then(() => false, () => true))))
    .then(results => results.every(Boolean)),
]).then(values => { aliasResults = values; });
''');
      await t.pumpAndSettle();
      expect(h.number('aliasResults[0]'), 13);
      expect(h.number('aliasResults[1]'), 17);
      expect(h.boolean('aliasResults[2] === aliasToken'), isTrue);
      expect(h.boolean('aliasResults[3]'), isTrue);
      expect(h.boolean('aliasResults[4]'), isTrue);
      expect(h.number('aliasResults[5]'), 19);
      expect(h.number('aliasResults[6]'), 21);
      expect(h.boolean('aliasResults[7] === null'), isTrue);
      expect(h.boolean('aliasResults[8]'), isTrue);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets('exported aliases preserve callback and collection conversion', (
    t,
  ) async {
    final h = OwnedHarness(
      fixture: 'codegen_basics',
      extra: [interopBindings, repeatedBindings],
    );
    try {
      await t.pumpWidget(h.app('codegen-basics'));
      h.execute('var aliases = aliasRoundtrip()');
      expect(h.number('aliases.seen'), 7);
      expect(h.number('aliases.consumer.names.length'), 2);
      expect(h.number('aliases.result.length'), 1);
      expect(h.string('aliases.result.get(0)'), 'length=2');
      expect(h.string('aliases.consumer.attributes.get("key")'), 'value');
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets(
    'void getters evaluate once and preserve exceptions and inheritance',
    (t) async {
      final h = OwnedHarness(
        fixture: 'codegen_basics',
        extra: [interopBindings, repeatedBindings],
      );
      try {
        await t.pumpWidget(h.app('codegen-basics'));
        h.execute('var box = interop.IndirectVoidBox()');
        expect(h.number('box.reads'), 0);
        expect(h.boolean('box.value === undefined'), isTrue);
        expect(h.number('box.reads'), 1);
        expect(h.boolean('box.explicitValue === undefined'), isTrue);
        expect(h.number('box.reads'), 2);
        expect(
          h.boolean(
            '(() => { try { box.failure; return false; } '
            'catch (error) { return String(error).includes("getter failure"); } })()',
          ),
          isTrue,
        );
        expect(h.number('box.reads'), 3);
        h.execute('var ordinary = interop.Box("kept")');
        expect(h.string('ordinary.value'), 'kept');
        expect(h.number('ordinary.reads'), 1);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'Core value providers preserve defaults and cross-module identity',
    (t) async {
      final h = OwnedHarness(
        fixture: 'codegen_basics',
        extra: [interopBindings, repeatedBindings],
      );
      try {
        await t.pumpWidget(h.app('codegen-basics'));
        h.execute('''
var date = DateTime.fromMillisecondsSinceEpoch(0, {isUtc: true});
var uri = Uri.parse('https://example.com/path');
var buffer = StringBuffer();
buffer.write('hello');
buffer.write(null);
var consumer = interop.CoreValueConsumer(date, uri, buffer);
var peer = CoreValuePeer(consumer.date, consumer.uri, consumer.buffer);
peer.buffer.write('!');
''');
        expect(h.number('date.year'), 1970);
        expect(h.boolean('date.isUtc'), isTrue);
        expect(h.string('date.toIso8601String()'), '1970-01-01T00:00:00.000Z');
        expect(
          h.boolean('DateTime.fromMillisecondsSinceEpoch(0).isUtc'),
          isFalse,
        );
        expect(h.string('uri.scheme'), 'https');
        expect(h.string('uri.host'), 'example.com');
        expect(
          h.string("Uri.parse('xxhttps://example.com', 2).host"),
          'example.com',
        );
        expect(
          h.string("Uri.parse('xxhttps://example.comzz', 2, 21).host"),
          'example.com',
        );
        expect(h.string("StringBuffer('initial').toString()"), 'initial');
        expect(h.string('buffer.toString()'), 'hellonull!');
        expect(h.number('buffer.length'), 10);
        expect(
          h.boolean(
            'peer.date === date && peer.uri === uri && peer.buffer === buffer',
          ),
          isTrue,
        );
        for (final expression in [
          "DateTime.fromMillisecondsSinceEpoch('invalid')",
          "Uri.parse('https://[invalid')",
          "Uri.parse('https://example.com', -1)",
        ]) {
          expect(
            h.boolean(
              '(() => { try { $expression; return false; } '
              'catch (_) { return true; } })()',
            ),
            isTrue,
          );
        }
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );
}
