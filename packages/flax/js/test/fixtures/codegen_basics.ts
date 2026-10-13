import * as interop from '../../../.dart_tool/flax/ui/interop_bindings.js';
import { CoreValuePeer } from '../../../.dart_tool/flax/ui/repeated_bindings.js';
import {
  DateTime,
  Duration,
  Uri,
  Pattern,
  Match,
  RegExpMatch,
  StringBuffer,
  RegExp as DartRegExp,
} from '@flax/dart/core';
import { Text, registerPage } from '@flax/flutter/widgets';
import type {
  CodegenOnChangedInput,
  CodegenNamesInput,
  CodegenAttributesInput,
  CodegenTransformInput,
  CodegenMapperInput,
  CodegenItems,
  CodegenItemsInput,
  CodegenGenericMapperInput,
  CodegenConverterInput,
  CodegenAsyncMapperInput,
  CodegenAsyncGenericMapperInput,
} from '../../../.dart_tool/flax/ui/interop_bindings.js';
import type { ValueChangedInput, ValueGetterInput } from '@flax/flutter/foundation';

function genericAliasRoundtrip() {
  const consumer = interop.CodegenGenericAliasConsumer();
  const mapper: CodegenMapperInput<number> = (value) => value + 2;
  const generic: CodegenGenericMapperInput = <T>(value: T): T => value;
  const converter: CodegenConverterInput<number> = <U extends number>(
    value: U,
  ): number => value + 1;
  const items: CodegenItemsInput<number> = [1, 2];
  const keepItems: CodegenMapperInput<CodegenItems<number>> = (values) => values;
  const later: CodegenAsyncMapperInput<number> = async (value) => value + 3;
  const genericLater: CodegenAsyncGenericMapperInput = async <T>(
    value: T,
  ): Promise<T> => value;
  let changed = 0;
  const onChanged: ValueChangedInput<number> = (value) => {
    changed = value;
  };
  const getter: ValueGetterInput<number> = () => 23;
  consumer.foundation(onChanged, getter);
  consumer.callbacks.add(generic);
  const bytes = new Uint8Array([3, 4]);
  const sharedBytes: Uint8Array = consumer.identity(bytes);
  return {
    consumer,
    bytes,
    sharedBytes,
    mapped: consumer.map(mapper, 3),
    generic: consumer.generic(generic, 7),
    inline: consumer.inline(generic, 7),
    converted: consumer.convert(converter, 8),
    items: consumer.collection(keepItems, items),
    changed,
    returned: consumer.identity<number>(11),
    later: consumer.later(later, 10),
    genericLater: consumer.genericLater(genericLater, 17),
  };
}

function aliasRoundtrip() {
  let seen = 0;
  const onChanged: CodegenOnChangedInput = (value) => {
    seen = value;
  };
  const names: CodegenNamesInput = ['one', 'two'];
  const attributes: CodegenAttributesInput = { key: 'value' };
  const consumer = interop.CodegenAliasConsumer(onChanged, names, attributes);
  consumer.notify(7);
  const transform: CodegenTransformInput = (values) => [`length=${values.length}`];
  return { seen, consumer, result: consumer.transform(transform) };
}

function recordRoundtrip() {
  const records = interop.RecordInterop();
  const token = interop.Token(41);
  const input = { $1: 7, $2: 'seven' };
  const positional = records.echo(input);
  const named = records.echoNamed({ id: 8, name: 'eight' });
  const mixed = records.echoMixed({ $1: 9, enabled: true, name: 'nine' });
  const nullable = records.echoNullable({ $1: null, $2: 'nullable' });
  const nullValue = records.echoNullable(null);
  const nested = records.nested({
    $1: { $1: 10, $2: 'ten' },
    token,
  });
  const sameToken = records.sameToken({ $1: token, $2: 1 }, token);
  const list = records.echoList([{ $1: 11, $2: 'eleven' }]);
  const callback = records.apply(
    (value) => ({ $1: value.$1 + 1, $2: `${value.$2}!` }),
    { $1: 12, $2: 'twelve' },
  );
  const extraInput = { $1: 13, $2: 'thirteen', ignored: true };
  const extra = records.echo(extraInput);
  const future = records.later({ $1: 14, $2: 'fourteen' });
  return {
    records,
    token,
    input,
    positional,
    named,
    mixed,
    nullable,
    nullValue,
    nested,
    sameToken,
    list,
    callback,
    extra,
    future,
  };
}

function nativeValuesRoundtrip() {
  const consumer = interop.NativeValueConsumer();
  const input = /a.b/imsu;
  const regex: DartRegExp = consumer.regex(input);
  consumer.expression = /updated/i;
  const callback = consumer.applyRegex((value) => {
    if (value !== consumer.expression) throw new Error('Lost RegExp reference');
    return /callback/;
  });
  const huge = 12345678901234567890123456789012345678901234567890n;
  const integer: bigint = consumer.bigInteger(huge);
  consumer.integer = huge;
  const integers = consumer.integers([huge, -huge, 0n]);
  const samples = new Int16Array([1, 2]);
  consumer.samples = samples;
  const output: Int16Array = consumer.int16(samples);
  output[0] = 23;
  const pair = consumer.pair({ $1: huge, $2: samples });
  const genericInteger: bigint = consumer.genericInteger(huge);
  const genericSamples: Int16Array = consumer.genericSamples(samples);
  const nullable = consumer.nullableSamples([samples, null]);
  const laterInteger: Promise<bigint> = consumer.laterInteger(Promise.resolve(-huge));
  const laterSamples: Promise<Int16Array> = consumer.applyLaterSamples(
    async () => samples,
  );
  const bytes = new ArrayBuffer(16);
  return {
    consumer,
    input,
    regex,
    callback,
    huge,
    integer,
    integers,
    samples,
    output,
    pair,
    genericInteger,
    genericSamples,
    nullable,
    laterInteger,
    laterSamples,
    applied: consumer.applyInteger((value) => value + 1n),
    views: [
      consumer.int8(new Int8Array(bytes)),
      consumer.clamped(new Uint8ClampedArray(bytes)),
      consumer.uint16(new Uint16Array(bytes)),
      consumer.int32(new Int32Array(bytes)),
      consumer.uint32(new Uint32Array(bytes)),
      consumer.int64(new BigInt64Array([-1n])),
      consumer.uint64(new BigUint64Array([18446744073709551615n])),
      consumer.float32(new Float32Array([NaN, Infinity, -0])),
      consumer.float64(new Float64Array([-Infinity, -0])),
      consumer.byteData(new DataView(bytes, 3, 5)),
      consumer.byteBuffer(bytes),
    ],
  };
}

function coreInputsRoundtrip() {
  const inputDate = new globalThis.Date(123456);
  const inputUrl = new globalThis.URL('https://example.com/path?x=1#frag');
  const consumer = interop.CoreValueConsumer(inputDate, inputUrl, StringBuffer());
  const date: DateTime = consumer.echoDate(inputDate);
  const uri: Uri = consumer.echoUri('../images/a.png?x=1#frag');
  const dates = consumer.dates([inputDate]);
  dates.add(new globalThis.Date(456));
  const uris = consumer.uris([inputUrl, '../relative']);
  uris.add('another');
  const map = consumer.namedDates(new Map([['first', inputDate]]));
  map.set('second', new globalThis.Date(789));
  const set = consumer.uniqueUris(new Set([inputUrl, '../relative']));
  set.add('another');
  const pair = consumer.pair({ $1: inputDate, $2: inputUrl });
  const callback = consumer.applyDate((value) => {
    if (value !== consumer.date) throw Error('Callback lost Dart identity');
    return new globalThis.Date(321);
  });
  const laterDate = consumer.applyLaterDate(async () => new globalThis.Date(654));
  const laterUri = consumer.laterUri(Promise.resolve('../later'));
  consumer.date = new globalThis.Date(987);
  consumer.uri = inputUrl;
  inputDate.setTime(999);
  inputUrl.pathname = '/changed';
  return {
    consumer,
    inputDate,
    inputUrl,
    date,
    uri,
    dates,
    uris,
    map,
    set,
    pair,
    callback,
    laterDate,
    laterUri,
  };
}

Object.assign(globalThis, {
  interop,
  CoreValuePeer,
  DateTime,
  Duration,
  Uri,
  Pattern,
  Match,
  RegExpMatch,
  StringBuffer,
  aliasRoundtrip,
  genericAliasRoundtrip,
  recordRoundtrip,
  coreInputsRoundtrip,
  nativeValuesRoundtrip,
  DartRegExp,
});
registerPage('codegen-basics', () => Text('Codegen basics'));
