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
