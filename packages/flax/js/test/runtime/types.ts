import type {} from '../../src/host/index.js';
import { action, computed, effect, signal, untracked } from '@flax/core';
import type { DartIterableInput } from '../../src/runtime/bindings.js';

const bytesAsList: DartListInput<number> = new Uint8Array([1, 2]);
const nativeInts: DartIterableInput<number> = new BigInt64Array([BigInt(1)]);
// @ts-expect-error A DataView has no Dart List element type.
const dataAsList: DartListInput<number> = new DataView(new ArrayBuffer(4));
// @ts-expect-error A numeric buffer cannot be a List<String>.
const bytesAsStrings: DartListInput<string> = new Uint8Array([1]);
void [bytesAsList, nativeInts, dataAsList, bytesAsStrings];

import { Utf8Codec } from '../../src/dart/generated/libraries/convert/index.js';
const encoding = Utf8Codec();
const decodedBytes: string = encoding.decode(encoding.encode('Flax'));
void decodedBytes;

const count = signal(0);
const doubled = computed(() => count.value * 2);
const snapshot: number = doubled.peek();
const stopCount: () => void = count.subscribe((value) => {
  const current: number = value;
  void current;
});
const stopDoubled: () => void = doubled.subscribe(() => {});
const stopEffect: () => void = effect(() => {
  void count.value;
  return () => {};
});
const increment = action((amount: number) => (count.value += amount));
const incremented: number = increment(1);
const untrackedValue: number = untracked(() => count.value);
// @ts-expect-error Subscription callbacks receive the signal's value type.
count.subscribe((value: string) => {});
// @ts-expect-error Computed signals remain readonly.
doubled.value = 1;
// @ts-expect-error Effects must return synchronously, with optional synchronous cleanup.
effect(async () => {});
stopCount();
stopDoubled();
stopEffect();
void snapshot;
void incremented;
void untrackedValue;

import type {
  Blob as HostBlob,
  ReadableStream as HostStream,
  TextEncoderStream as HostEncoder,
} from '../../src/host/index.js';
const blob: HostBlob = new Blob(['base']);
const stream: HostStream<Uint8Array> = blob.stream();
const encoder: HostEncoder = new TextEncoderStream();
const form = new FormData();
form.append('file', new File([blob], 'file.txt'));
void stream;
void encoder;
const fetched: Promise<Response> = fetch('https://example.test');
const headers: Headers = new Headers();
void [fetched, headers];

import type {
  DartInput,
  DartList,
  DartListInput,
  DartMap,
  DartMapInput,
  DartSet,
  DartSetInput,
  DartOutput,
  DartRecord,
} from '../../src/runtime/bindings.js';
import {
  DateTime,
  Duration,
  Uri,
  RegExp as DartRegExp,
} from '../../src/dart/generated/libraries/core/index.js';
import type {
  Match,
  Pattern,
  RegExpMatch,
} from '../../src/dart/generated/libraries/core/index.js';
import type { DartIterable } from '../../src/runtime/bindings.js';
const parsed: DateTime | null = DateTime.tryParse('2000-01-01Z');
const shifted: DateTime = DateTime.utc(2000).add(Duration({ days: 1 }));
shifted.difference(new Date(0));
// @ts-expect-error Durations still require an explicit unit.
shifted.add(1000);
const resolved: Uri = Uri.parse('../relative').resolveUri(
  new URL('https://example.com'),
);
const parts: DartList<string> = resolved.pathSegments;
const queries: DartMap<string, DartList<string>> = resolved.queryParametersAll;
const regex: Pattern = DartRegExp('(?<name>a)');
const matches: DartIterable<Match> = regex.allMatches('a');
const exactMatches: DartIterable<RegExpMatch> = DartRegExp('a').allMatches('a');
const covariantMatches: DartIterable<Match> = exactMatches;
exactMatches.contains(DartRegExp('a').firstMatch('a')!);
// @ts-expect-error Concrete RegExpMatch inputs retain their type check.
exactMatches.contains('a');
// @ts-expect-error The native collection method remains readonly.
exactMatches.contains = () => false;
// @ts-expect-error Nullable matches must be checked before use.
DartRegExp('a').firstMatch('b').group(0);
void parsed;
void parts;
void queries;
void matches;
void covariantMatches;
const dateInput: DartInput<DateTime> = new Date(123);
const uriInput: DartInput<Uri> = new URL('https://example.com');
const relativeInput: DartInput<Uri> = '../relative';
const dateCallback: DartInput<(value: DateTime) => DateTime> = () => new Date(456);
declare const dates: DartList<DateTime>;
dates.add(dateInput);
interface DerivedDate extends DateTime {
  readonly __DerivedDate: unique symbol;
}
// @ts-expect-error A native Date cannot implement a more specific Dart subtype.
const derivedDate: DartInput<DerivedDate> = new Date();
interface DerivedUri extends Uri {
  readonly __DerivedUri: unique symbol;
}
// @ts-expect-error A string cannot implement a more specific Dart subtype.
const derivedUri: DartInput<DerivedUri> = '../relative';
// @ts-expect-error DateTime does not guess the units of numeric inputs.
const numericDate: DartInput<DateTime> = 123;
void uriInput;
void relativeInput;
void dateCallback;
declare function roundTrip<T>(value: T): DartOutput<T>;
const list: DartList<string> = roundTrip(['a']);
const nested: DartList<DartList<string>> = roundTrip([['a']]);
const inputBytes = new Uint8Array(2);
const bytes: typeof inputBytes = roundTrip(inputBytes);
const byteList: DartList<typeof inputBytes> = roundTrip([inputBytes]);
const byteCallback: DartInput<(value: Uint8Array) => Uint8Array> = (value) =>
  value.subarray(1);
// @ts-expect-error Shared bytes remain a native Uint8Array.
bytes.get(0);
interface Fields {
  readonly name: string;
}
declare const fields: Fields;
const fieldMap: DartMap<string, string> = roundTrip(fields);
declare const nativeRecord: DartRecord<{ readonly name: string }>;
const record: typeof nativeRecord = roundTrip(nativeRecord);
declare const nativeList: DartList<string>;
const retained: typeof nativeList = roundTrip(nativeList);
declare const nativeObject: { readonly __Example: unique symbol; name: string };
const reference: typeof nativeObject = roundTrip(nativeObject);
const callback: DartInput<(value: string[]) => string[]> = (value) => value;
const listInputCallback: DartInput<(value: DartListInput<string>) => void> = (
  value,
) => {
  const native: DartList<string> = value;
  native.get(0);
};
const mapInputCallback: DartInput<(value: DartMapInput<number, string>) => void> = (
  value,
) => {
  const native: DartMap<number, string> = value;
  native.get(0);
};
const setInputCallback: DartInput<(value: DartSetInput<string>) => void> = (value) => {
  const native: DartSet<string> = value;
  native.toSet();
};
interface NativeTags extends Omit<DartSet<string>, 'toSet'> {
  readonly __NativeTags: unique symbol;
  readonly summary: string;
  toSet(): DartSet<string>;
}
declare const nativeTags: NativeTags;
const retainedTags: NativeTags = roundTrip(nativeTags);
const recordInput: DartInput<typeof nativeRecord> = { name: 'a' };
declare const recordList: DartList<typeof nativeRecord>;
recordList.add(recordInput);
// @ts-expect-error typed Record input keeps its declared fields
recordList.add({ name: 1 });
// @ts-expect-error Object? collection conversion does not return a JS Array.
list.map((value) => value);
// @ts-expect-error A raw JS field object becomes a Dart Map.
fieldMap.name;
void nested;
void record;
void retained;
void reference;
void callback;
