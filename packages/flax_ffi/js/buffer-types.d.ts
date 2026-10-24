import 'buffer/index.js';

declare module 'buffer/index.js' {
  interface Buffer {
    subarray(begin?: number, end?: number): Buffer;
  }
  namespace Buffer {
    function copyBytesFrom(
      view: Exclude<ArrayBufferView, DataView>,
      offset?: number,
      length?: number,
    ): Buffer;
    function stringLength(
      input: ArrayBufferLike | Exclude<ArrayBufferView, DataView>,
      encoding?: string,
    ): number;
  }
}
