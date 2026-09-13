import { ReadableStream } from './base.js';

// Pinned to web-streams-polyfill 4.3.0. It has no public disturbed query.
// Keep this read-only dependency boundary separate from Body implementation.
export function isDisturbed(stream: ReadableStream<unknown>): boolean {
  const state = stream as ReadableStream<unknown> & { _disturbed?: unknown };
  if (!(stream instanceof ReadableStream) || typeof state._disturbed !== 'boolean')
    throw new TypeError('Unrecognized web-streams-polyfill consumption state');
  return state._disturbed;
}

export function assertUnused(stream: ReadableStream<unknown>): void {
  if (isDisturbed(stream) || stream.locked) throw new TypeError('Body is already used');
}
