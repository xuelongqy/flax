// Capture the session's constructors once; never bundle another implementation.
import type * as Base from '@flax/core/host';
export const { Blob, File, FormData, ReadableStream, TransformStream } = globalThis;
export type Blob = Base.Blob;
export type File = Base.File;
export type FormData = Base.FormData;
export type ReadableStream<T = unknown> = Base.ReadableStream<T>;
export type TransformStream<I = unknown, O = unknown> = Base.TransformStream<I, O>;
