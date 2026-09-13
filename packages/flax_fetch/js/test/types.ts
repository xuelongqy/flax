// Compile against Flax globals without browser or Node type libraries.
import type {} from '../src/globals.js';
import axios from 'axios';
const controller = new AbortController();
void axios.get<{ ok: boolean }>('http://example.test/', {
  adapter: 'fetch',
  signal: controller.signal,
  onDownloadProgress: (event) => console.log(event.loaded),
});
const data = new FormData();
data.append('file', new File([new Uint8Array([1])], 'example.bin'));
void axios.postForm('http://example.test/', data, { adapter: 'fetch' });

const url: URL = new URL('http://example.test/');
const params: URLSearchParams = url.searchParams;
const decoder: TextDecoder = new TextDecoder('gbk');
const signal: AbortSignal = controller.signal;
const stream: TransformStream<string, Uint8Array> = new TransformStream({
  transform(value, output) {
    output.enqueue(new TextEncoder().encode(value));
  },
});
const byob: ReadableStreamBYOBReader = new Blob([params.toString()])
  .stream()
  .getReader({ mode: 'byob' });
const encoding: TextDecoderStream = new TextDecoderStream();
void [decoder, signal, stream, byob, encoding];
