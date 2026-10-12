import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../../flax/test/fixtures/interop_selection.dart';
import 'generator_test.dart' show compileFixture;

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));

  test(
    'native SDK values do not acquire incompatible Dart object facades',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final library = Uri.file(
        p.join(
          root,
          'packages/flax_codegen/test/fixtures/plugin/native_sdk_values.dart',
        ),
      ).toString();
      FlaxCodegenBindingConfig config(
        Map<String, FlaxCodegenClassSelection> classes,
      ) => FlaxCodegenBindingConfig(
        'native_sdk',
        library,
        '@example/native-sdk',
        'unused.dart',
        'unused.ts',
        classes,
      );
      for (final entry in {
        'BigInt': const FlaxCodegenClassSelection({
          'from': ['value'],
        }, kind: 'object'),
        'Int16List': const FlaxCodegenClassSelection({
          '': ['length'],
        }, kind: 'object'),
      }.entries) {
        final selection = config({entry.key: entry.value});
        await parser.prepare([selection]);
        await expectLater(
          parser.parse(selection),
          throwsA(
            isA<StateError>().having(
              (error) => error.message,
              'message',
              contains('maps to native JS'),
            ),
          ),
        );
      }
      final seed = config({});
      await parser.prepare([seed]);
      final proposal = await parser.proposeLibrary(seed);
      expect(proposal.config.classes.keys, isNot(contains('BigInt')));
      expect(proposal.config.classes.keys, isNot(contains('Int16List')));
      for (final name in ['BigInt', 'Int16List']) {
        expect(
          proposal.skips
              .where((skip) => skip.target == name)
              .map((skip) => skip.code),
          contains('native_js_value'),
        );
      }
      final consumers = config({
        'NativeSdkConsumer': const FlaxCodegenClassSelection(
          {'': []},
          kind: 'object',
          instanceMethods: {
            'integer': ['value'],
            'samples': ['value'],
          },
        ),
      });
      await parser.prepare([consumers]);
      final module = await parser.parse(consumers);
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: '''
import {NativeSdkConsumer} from './plugin.js';
const value = NativeSdkConsumer();
const integer: bigint = value.integer(globalThis.BigInt('12345678901234567890'));
const samples: Int16Array = value.samples(new Int16Array([1, 2]));
''',
      );
    },
  );

  test('native value input and output projections compile across shared boundaries', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final config = FlaxCodegenBindingConfig(
      'native_values',
      Uri.file(p.join(root, 'packages/flax/test/fixtures/interop.dart'))
          .toString(),
      '@example/native-values',
      'unused.dart',
      'unused.ts',
      {
        'NativeValueConsumer': interopSelection['NativeValueConsumer']!,
        'RegExp': const FlaxCodegenClassSelection(
          {
            '': ['source', 'multiLine', 'caseSensitive', 'unicode', 'dotAll'],
          },
          kind: 'object',
          getters: ['pattern', 'isCaseSensitive'],
          instanceMethods: {
            'hasMatch': ['input'],
          },
        ),
        'Pattern': const FlaxCodegenClassSelection({}, kind: 'object'),
      },
      additionalLibraries: const ['dart:core'],
    );
    await parser.prepare([config]);
    final module = await parser.parse(config);
    final emitter = FlaxCodegenBindingEmitter([module]);
    expect(
      module.requiredCapabilities,
      containsAll(['native-core-inputs', 'native-bigint', 'shared-buffers']),
    );
    await compileFixture(
      root,
      emitter,
      module,
      consumerSource: '''
import {NativeValueConsumer, RegExp as DartRegExp} from './plugin.js';
import type {DartInput, DartOutput} from '@flax/core/bindings';
const value = NativeValueConsumer();
const native = /abc/i;
const regex: DartRegExp = value.regex(native);
const input: DartInput<DartRegExp> = native;
value.expression = native;
value.genericRegex(native);
value.regexes([native]).add(native);
value.pattern('literal', 'literal');
value.pattern(native, 'abc');
value.applyRegex(argument => native);
const integer: bigint = value.bigInteger(globalThis.BigInt('123456789012345678901234567890'));
value.integers([integer]).add(-integer);
value.integer = integer;
value.genericInteger(integer);
value.applyInteger(argument => argument + globalThis.BigInt(1));
const samples = new Int16Array([1, 2]);
const buffer: DartOutput<Int16Array> = samples;
const inputBuffer: DartInput<Int16Array> = samples;
const generic: Int16Array = value.genericSamples(samples);
value.samples = samples;
const pair = value.pair({\$1: integer, \$2: samples});
const later: Promise<Int16Array> = value.applyLaterSamples(async () => samples);
value.byteData(new DataView(new ArrayBuffer(8)));
value.byteBuffer(new ArrayBuffer(8));
value.int64(new BigInt64Array([integer]));
value.uint64(new BigUint64Array([integer]));
// @ts-expect-error RegExp results keep Dart reference methods.
const wrongRegex: globalThis.RegExp = regex;
// @ts-expect-error BigInt parameters do not accept Number.
value.bigInteger(1);
// @ts-expect-error BigInt parameters do not infer string parsing.
value.bigInteger('1');
// @ts-expect-error Different TypedArray kinds are not compatible.
value.int16(new Uint16Array(2));
''',
    );
  });

  test(
    'core inputs widen SDK parameters while retaining Dart output types',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final config = FlaxCodegenBindingConfig(
        'core_inputs',
        Uri.file(p.join(root, 'packages/flax/test/fixtures/interop.dart'))
            .toString(),
        '@example/core-inputs',
        'unused.dart',
        'unused.ts',
        {
          'CoreValueConsumer': interopSelection['CoreValueConsumer']!,
          'CoreDateSubtype': interopSelection['CoreDateSubtype']!,
          'CoreUriSubtype': interopSelection['CoreUriSubtype']!,
          'DateTime': const FlaxCodegenClassSelection(
            {
              'fromMillisecondsSinceEpoch': ['millisecondsSinceEpoch', 'isUtc'],
            },
            kind: 'object',
            getters: ['millisecondsSinceEpoch', 'isUtc'],
          ),
          'Uri': const FlaxCodegenClassSelection(
            {},
            kind: 'object',
            methods: {
              'parse': ['uri', 'start', 'end'],
            },
            instanceMethods: {'toString': []},
          ),
          'StringBuffer': const FlaxCodegenClassSelection({
            '': ['content'],
          }, kind: 'object'),
        },
        additionalLibraries: const ['dart:core'],
      );
      await parser.prepare([config]);
      final module = await parser.parse(config);
      final emitter = FlaxCodegenBindingEmitter([module]);
      expect(module.requiredCapabilities, contains('native-core-inputs'));
      expect(emitter.dart(module), contains('nativeInput: "DateTime"'));
      expect(emitter.dart(module), contains('nativeInput: "Uri"'));
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: '''
import {CoreValueConsumer, DateTime as DartDateTime, Uri as DartUri, StringBuffer,
  type CoreDateSubtype, type CoreUriSubtype} from './plugin.js';
import type {DartInput} from '@flax/core/bindings';
import type {} from '@flax/core/host';
const date = new globalThis.Date(123);
const url = new globalThis.URL('https://example.com');
const value = CoreValueConsumer(date, url, StringBuffer());
const dateResult: DartDateTime = value.echoDate(date);
const uriResult: DartUri = value.echoUri('../relative');
// Another provider may expose a smaller surface for the same SDK declaration.
declare const peerDate: {
  readonly '__flaxBound:dart:core::DateTime': readonly [];
  readonly __PeerDate: unique symbol;
};
declare const peerUri: {
  readonly '__flaxBound:dart:core::Uri': readonly [];
  readonly __PeerUri: unique symbol;
};
value.echoDate(peerDate);
value.echoUri(peerUri);
const genericDate: DartDateTime = value.genericDate(date);
const genericUri: DartUri = value.genericUri(url);
value.date = date;
value.uri = url;
value.dates([date]).add(date);
value.uris([url, '../relative']).add('../another');
value.applyDate((argument: DartDateTime) => date);
const later: Promise<DartDateTime> = value.applyLaterDate(async () => date);
value.laterUri(Promise.resolve(url));
const dateInput: DartInput<DartDateTime> = date;
const uriInput: DartInput<DartUri> = url;
// @ts-expect-error Results retain Dart references rather than JS Date.
const wrongOutput: globalThis.Date = dateResult;
// @ts-expect-error More-specific Dart contracts do not accept a base SDK snapshot.
const wrongDateSubtype: DartInput<CoreDateSubtype> = date;
// @ts-expect-error More-specific Uri implementations do not accept strings.
const wrongUriSubtype: DartInput<CoreUriSubtype> = '../relative';
// @ts-expect-error Numeric timestamps do not imply units.
value.echoDate(123);
''',
      );
    },
  );

  test('unrelated DateTime and Uri declarations keep nominal inputs', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final config = FlaxCodegenBindingConfig(
      'core_names',
      Uri.file(
        p.join(
          root,
          'packages/flax_codegen/test/fixtures/plugin/core_input_names.dart',
        ),
      ).toString(),
      '@example/core-names',
      'unused.dart',
      'unused.ts',
      const {
        'DateTime': FlaxCodegenClassSelection({'': []}, kind: 'object'),
        'Uri': FlaxCodegenClassSelection({'': []}, kind: 'object'),
        'CoreNames': FlaxCodegenClassSelection(
          {'': []},
          kind: 'object',
          instanceMethods: {
            'date': ['value'],
            'uri': ['value'],
          },
        ),
      },
    );
    final module = await parser.parse(config);
    final emitter = FlaxCodegenBindingEmitter([module]);
    expect(module.requiredCapabilities, isNot(contains('native-core-inputs')));
    expect(emitter.dart(module), isNot(contains('nativeInput:')));
    await compileFixture(
      root,
      emitter,
      module,
      consumerSource: '''
import {CoreNames, DateTime, Uri} from './plugin.js';
const value = CoreNames();
value.date(DateTime());
value.uri(Uri());
// @ts-expect-error A same-named application class is not the Dart SDK DateTime.
value.date(new globalThis.Date());
// @ts-expect-error A same-named application class is not the Dart SDK Uri.
value.uri('../relative');
''',
    );
  });
}
