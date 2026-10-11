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
  DartMap,
  DartOutput,
  DartRecord,
} from '../../src/runtime/bindings.js';
declare function roundTrip<T>(value: T): DartOutput<T>;
const list: DartList<string> = roundTrip(['a']);
const nested: DartList<DartList<string>> = roundTrip([['a']]);
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
