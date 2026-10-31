import { Headers } from './data.js';
import { ReadableStream } from 'web-streams-polyfill';
import {
  Request,
  Response,
  setBaseUrl,
  type RequestInit,
  type ResponseMetadata,
} from './http.js';
import type { URL as URLType } from '../common.js';
import { blobRange, dataResource } from './local-resources.js';

type Call = (operation: string, ...args: unknown[]) => unknown;
export function install(
  global: typeof globalThis,
  call: Call,
  baseUrl: string | undefined,
): { settle(id: number, ok: boolean, value: unknown): void; close(): void } {
  setBaseUrl(baseUrl);
  let nextOperation = 1,
    nextRequest = 1;
  let closed = false;
  const pending = new Map<
    number,
    { request: number; resolve(value: unknown): void; reject(error: unknown): void }
  >();
  const requests = new Map<number, (reason: unknown) => void>();
  function rpc<T>(operation: string, request: number, ...args: unknown[]): Promise<T> {
    if (closed) return Promise.reject(new Error('FlaxSessionClosed'));
    const id = nextOperation++;
    return new Promise<T>((resolve, reject) => {
      pending.set(id, { request, resolve: (value) => resolve(value as T), reject });
      try {
        call(operation, id, request, ...args);
      } catch (error) {
        pending.delete(id);
        reject(error);
      }
    });
  }
  function cancel(id: number, reason: unknown): void {
    call('abort', id);
    for (const [operation, entry] of pending) {
      if (entry.request !== id) continue;
      pending.delete(operation);
      entry.reject(reason);
    }
  }
  async function fetch(
    input: string | URLType | Request,
    init: RequestInit = {},
  ): Promise<Response> {
    if (closed) throw new Error('FlaxSessionClosed');
    let request = new Request(input, init);
    let redirects = 0;
    while (true) {
      request.signal.throwIfAborted();
      const url = new URL(request.url);
      url.hash = '';
      if (url.protocol === 'blob:' || url.protocol === 'data:') {
        if (request.body) void request.body.cancel().catch(() => {});
        const data = url.protocol === 'data:' ? dataResource(url.href) : undefined;
        let blob =
          data?.blob ?? (global as any)[Symbol.for('flax.blob.url')]?.(url.href);
        if (!blob || (!data && request.method !== 'GET'))
          throw new TypeError('Blob URL is unavailable or the request is unsupported');
        const headers: [string, string][] = [['content-type', data?.type ?? blob.type]];
        let status = 200,
          statusText = 'OK';
        const range = request.headers.get('range');
        if (!data && range !== null) {
          const selected = blobRange(blob, range);
          blob = selected.blob;
          status = 206;
          statusText = 'Partial Content';
          headers.push(['content-range', selected.range]);
        }
        if (!data) headers.push(['content-length', String(blob.size)]);
        if (request.method === 'HEAD')
          return Response.fromNetwork(
            { status, statusText, url: url.href, redirected: false, headers },
            null,
          );
        const id = nextRequest++;
        const reader = blob.stream().getReader();
        let controller: ReadableByteStreamController;
        const cleanup = () => {
          requests.delete(id);
          request.signal.removeEventListener('abort', onAbort);
        };
        const abort = (reason = request.signal.reason) => {
          controller.error(reason);
          void reader.cancel(reason).catch(() => {});
          cleanup();
        };
        const onAbort = () => abort();
        const body = new ReadableStream<Uint8Array>({
          type: 'bytes',
          start(value) {
            controller = value;
          },
          async pull(value) {
            try {
              const chunk = await reader.read();
              if (chunk.done) {
                cleanup();
                value.close();
              } else value.enqueue(chunk.value);
            } catch (error) {
              cleanup();
              value.error(error);
            }
          },
          cancel(reason) {
            cleanup();
            return reader.cancel(reason);
          },
        });
        requests.set(id, abort);
        request.signal.addEventListener('abort', onAbort, { once: true });
        return Response.fromNetwork(
          {
            status,
            statusText,
            url: url.href,
            redirected: false,
            headers,
          },
          body,
        );
      }
      const id = nextRequest++;
      let controller: ReadableByteStreamController | undefined;
      let uploadReader: ReadableStreamDefaultReader<Uint8Array> | undefined;
      let completed = false;
      const current = request;
      const cleanup = () => {
        completed = true;
        requests.delete(id);
        current.signal.removeEventListener('abort', onAbort);
      };
      const abort = (reason: unknown) => {
        if (completed) return;
        cancel(id, reason);
        controller?.error(reason);
        void uploadReader?.cancel(reason).catch(() => {});
        cleanup();
      };
      const onAbort = () => abort(current.signal.reason);
      requests.set(id, abort);
      current.signal.addEventListener('abort', onAbort, { once: true });
      try {
        await rpc(
          'open',
          id,
          JSON.stringify({
            url: url.href,
            method: current.method,
            headers: [...current.headers],
            length: current.body === null ? 0 : (current.replaySource?.size ?? -1),
          }),
        );
        if (current.body) {
          uploadReader = current.body.getReader();
          try {
            while (true) {
              current.signal.throwIfAborted();
              const { done, value } = await uploadReader.read();
              if (done) break;
              if (!(value instanceof Uint8Array))
                throw new TypeError('Upload chunks must be Uint8Array');
              if (value.byteLength) await rpc('write', id, value);
            }
          } finally {
            uploadReader.releaseLock();
            uploadReader = undefined;
          }
        }
        const metadata = JSON.parse(
          await rpc<string>('headers', id),
        ) as ResponseMetadata;
        metadata.url = url.href;
        metadata.redirected = redirects > 0;
        const location = new Headers(metadata.headers).get('location');
        if (
          [301, 302, 303, 307, 308].includes(metadata.status) &&
          current.redirect !== 'manual'
        ) {
          if (current.redirect === 'error')
            throw new TypeError('Redirect was disallowed');
          if (location !== null) {
            if (redirects++ === 20) throw new TypeError('Too many redirects');
            const destination = new URL(location, current.url);
            if (!['http:', 'https:'].includes(destination.protocol))
              throw new TypeError('Redirect targets must use HTTP or HTTPS');
            let method = current.method;
            let body = current.replaySource;
            const headers = new Headers(current.headers);
            if (
              ([301, 302].includes(metadata.status) && method === 'POST') ||
              (metadata.status === 303 && !['GET', 'HEAD'].includes(method))
            ) {
              method = 'GET';
              body = null;
              for (const name of [
                'content-encoding',
                'content-language',
                'content-location',
                'content-type',
                'content-length',
              ])
                headers.delete(name);
            } else if (current.body && body === null)
              throw new TypeError('Cannot replay a streamed request body');
            if (destination.origin !== url.origin)
              for (const name of [
                'authorization',
                'proxy-authorization',
                'cookie',
                'host',
              ])
                headers.delete(name);
            cancel(id, new TypeError('Following redirect'));
            cleanup();
            request = new Request(destination.href, {
              method,
              headers,
              body,
              signal: current.signal,
              redirect: current.redirect,
              credentials: current.credentials,
            });
            continue;
          }
        }
        if (current.method === 'HEAD' || [204, 205, 304].includes(metadata.status)) {
          cancel(id, undefined);
          cleanup();
          return Response.fromNetwork(metadata, null);
        }
        const body = new ReadableStream<Uint8Array>({
          type: 'bytes',
          start(value) {
            controller = value;
          },
          async pull(value) {
            try {
              const chunk = await rpc<ArrayBuffer | null>('read', id);
              if (completed) return;
              if (chunk === null) {
                cleanup();
                value.close();
                value.byobRequest?.respond(0);
              } else if (chunk.byteLength) value.enqueue(new Uint8Array(chunk));
            } catch (error) {
              value.error(current.signal.aborted ? current.signal.reason : error);
              cancel(id, error);
              cleanup();
            }
          },
          cancel(reason) {
            if (!completed) {
              cancel(id, reason);
              cleanup();
            }
          },
        });
        return Response.fromNetwork(metadata, body);
      } catch (error) {
        cancel(id, error);
        // A failed transport must also release the application's upload source.
        if (current.body && !current.body.locked)
          void current.body.cancel(error).catch(() => {});
        cleanup();
        throw current.signal.aborted ? current.signal.reason : error;
      }
    }
  }
  const globals = {
    Headers,
    Request,
    Response,
    fetch,
  };
  for (const [name, value] of Object.entries(globals))
    Object.defineProperty(global, name, { value, writable: true, configurable: true });
  return {
    settle(id, ok, value) {
      const operation = pending.get(id);
      if (!operation) return;
      pending.delete(id);
      if (ok) operation.resolve(value);
      else if (
        value !== null &&
        typeof value === 'object' &&
        (value as { code?: unknown }).code === 'FLAX_PERMISSION_DENIED'
      ) {
        const details = value as { message: string };
        operation.reject(Object.assign(new Error(details.message), value));
      } else operation.reject(new TypeError(String(value)));
    },
    close() {
      if (closed) return;
      closed = true;
      const error = new Error('FlaxSessionClosed');
      for (const abort of [...requests.values()]) abort(error);
      for (const operation of pending.values()) operation.reject(error);
      pending.clear();
      requests.clear();
    },
  };
}
