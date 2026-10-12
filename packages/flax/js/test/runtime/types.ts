import type {} from '../../src/host/index.js';
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
// @ts-expect-error Fetch is an optional plugin.
fetch('https://example.test');
// @ts-expect-error HTTP types are not installed by the base environment.
new Headers();

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
import type { DateTime, Uri } from '../../src/dart/generated/libraries/core/index.js';
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
