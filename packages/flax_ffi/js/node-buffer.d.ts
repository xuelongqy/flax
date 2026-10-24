/// <reference path="./buffer-types.d.ts" />
declare module 'buffer/' {
  import { Buffer as UpstreamBuffer } from 'buffer/index.js';
  export * from 'buffer/index.js';
  export type Buffer = UpstreamBuffer;
  // A namespace cannot overload static methods already declared on a class.
  export const Buffer: typeof UpstreamBuffer & {
    allocUnsafe(size: number, alignment: number): UpstreamBuffer;
    allocUnsafeSlow(size: number, alignment: number): UpstreamBuffer;
  };
}
declare module 'buffer' {
  export * from 'buffer/';
  const buffer: typeof import('buffer/');
  export default buffer;
}
declare module 'node:buffer' {
  export * from 'buffer/';
  const buffer: typeof import('buffer/');
  export default buffer;
}
