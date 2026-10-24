/// <reference path="./node-buffer.d.ts" />
/// <reference path="./node-ffi.d.ts" />
/// <reference lib="esnext.disposable" />
import type { Buffer } from 'buffer/';
export { Buffer } from 'buffer/';
export type Pointer = bigint;
export type PrimitiveType =
  | 'char'
  | 'bool'
  | 'c_bool'
  | 'int8'
  | 'uint8'
  | 'int16'
  | 'uint16'
  | 'int32'
  | 'uint32'
  | 'int64'
  | 'uint64'
  | 'float'
  | 'double'
  | 'float32'
  | 'float64'
  | 'i8'
  | 'u8'
  | 'i16'
  | 'u16'
  | 'i32'
  | 'u32'
  | 'i64'
  | 'u64'
  | 'f32'
  | 'f64'
  | 'pointer'
  | 'ptr'
  | 'string'
  | 'str'
  | 'buffer'
  | 'arraybuffer'
  | 'function'
  | 'signedchar'
  | 'unsignedchar'
  | 'short'
  | 'ushort'
  | 'int'
  | 'uint'
  | 'long'
  | 'ulong'
  | 'longlong'
  | 'ulonglong'
  | 'intptr'
  | 'uintptr'
  | 'size_t'
  | 'ssize_t'
  | 'wchar_t';
export interface StructType<
  F extends Record<string, NativeType> = Record<string, NativeType>,
> {
  readonly kind: 'struct' | 'union';
  readonly fields: readonly { readonly name: string; readonly type: NativeType }[];
  readonly pack?: 1 | 2 | 4 | 8 | 16;
  /** Type-only field inference; no runtime property is installed. */
  readonly __fields?: F;
}
export interface ArrayType<T extends NativeType = NativeType> {
  readonly kind: 'array';
  readonly element: T;
  readonly length: number | null;
}
export type NativeType = PrimitiveType | StructType | ArrayType;
export interface Signature {
  readonly arguments?: readonly NativeType[];
  readonly return?: NativeType | 'void';
  /** Flax extension: fixed prefix length for an explicitly typed variadic binding. */
  readonly fixedArguments?: number;
}
type PointerType =
  'pointer' | 'ptr' | 'string' | 'str' | 'buffer' | 'arraybuffer' | 'function';
type Integer64 = 'int64' | 'uint64' | 'i64' | 'u64' | 'longlong' | 'ulonglong';
type AbiInteger = 'long' | 'ulong' | 'intptr' | 'uintptr' | 'size_t' | 'ssize_t';
export type ByteSource = ArrayBufferLike | ArrayBufferView;
export type PointerArgument = Pointer | null | undefined | string | ByteSource;
export type NativeValue<T> = unknown extends T
  ? void
  : T extends undefined | 'void'
    ? void
    : T extends 'c_bool'
      ? boolean
      : T extends PointerType
        ? Pointer
        : T extends Integer64
          ? bigint
          : T extends AbiInteger
            ? number | bigint
            : T extends StructType | ArrayType
              ? Uint8Array<ArrayBuffer>
              : number;
type NativeArgument<T> = T extends 'c_bool'
  ? boolean
  : T extends PointerType
    ? PointerArgument
    : T extends Integer64 | AbiInteger
      ? bigint | number
      : T extends StructType | ArrayType
        ? ByteSource | { readonly $bytes: Uint8Array }
        : number;
type NativeArguments<T> = T extends readonly NativeType[]
  ? { -readonly [K in keyof T]: NativeArgument<T[K]> }
  : [];
type CallbackArguments<T> = T extends readonly NativeType[]
  ? { -readonly [K in keyof T]: NativeValue<T[K]> }
  : [];
export type NativeFunction<T extends Signature> = ((
  ...args: NativeArguments<T['arguments']>
) => NativeValue<T['return']>) & { readonly pointer: Pointer };
type NativeFunctions<T extends Record<string, Signature>> = {
  [K in keyof T]: NativeFunction<T[K]>;
};
type ResolvedFunctions = Record<
  string,
  ((...args: any[]) => any) & { readonly pointer: Pointer }
>;
export interface CallbackOptions {
  readonly mode?: 'sync' | 'listener' | 'threadsafe';
  readonly exceptionalReturn?: unknown;
  readonly copies?: readonly {
    readonly argument: number;
    readonly lengthArgument: number;
  }[];
  readonly maxPending?: number;
  readonly maxBytes?: number;
  /** Native-only, JS-independent producer stop used before callback retirement. */
  readonly stop?: ((...args: any[]) => void) & { readonly pointer: Pointer };
  readonly stopToken?: Pointer;
}
export interface IsolatedCallbackOptions {
  readonly mode: 'isolated';
  /** JSON data made available as the isolated function's lexical context. */
  readonly context?: unknown;
  readonly exceptionalReturn?: unknown;
  readonly stop?: CallbackOptions['stop'];
  readonly stopToken?: Pointer;
}
export declare class DynamicLibrary implements Disposable {
  constructor(path: string | null);
  static process(): DynamicLibrary;
  static executable(): DynamicLibrary;
  static codeAsset(id: string): DynamicLibrary;
  readonly path: string | null;
  readonly handle: Pointer;
  readonly functions: ResolvedFunctions;
  readonly symbols: Record<string, Pointer>;
  getFunction<const T extends Signature = {}>(
    name: string,
    signature: T,
  ): NativeFunction<T>;
  getFunctions<const T extends Record<string, Signature>>(
    definitions: T,
  ): NativeFunctions<T>;
  getFunctions(): ResolvedFunctions;
  getSymbol(name: string): Pointer;
  getSymbols(): Record<string, Pointer>;
  providesSymbol(name: string): boolean;
  bindFunction<const T extends Signature = {}>(
    pointer: Pointer,
    signature?: T,
  ): NativeFunction<T>;
  registerCallback<const T extends Signature>(
    signature: T,
    callback: (...args: CallbackArguments<T['arguments']>) => NativeValue<T['return']>,
    options?: CallbackOptions,
  ): Pointer;
  registerCallback(callback: () => void, options?: CallbackOptions): Pointer;
  registerCallback<const T extends Signature>(
    signature: T,
    source: string,
    options: IsolatedCallbackOptions,
  ): Pointer;
  unregisterCallback(pointer: Pointer): void;
  refCallback(pointer: Pointer): void;
  unrefCallback(pointer: Pointer): void;
  close(): void;
  [Symbol.dispose](): void;
}
export type Library = DynamicLibrary;
export declare function dlopen<const T extends Record<string, Signature> = {}>(
  path: string | null,
  definitions?: T,
): { lib: DynamicLibrary; functions: NativeFunctions<T>; [Symbol.dispose](): void };
export declare function dlclose(handle: DynamicLibrary): void;
export declare function dlsym(handle: DynamicLibrary, symbol: string): Pointer;
export declare function bindFunction<const T extends Signature = {}>(
  pointer: Pointer,
  signature?: T,
): NativeFunction<T>;
export interface NativeCallResult<T> {
  readonly value: T;
  readonly errno: number;
}
export interface AsyncCallOptions<T = unknown> {
  readonly captureErrno?: boolean;
  readonly keepAlive?: readonly object[];
  /** Release a completed native result that cannot be delivered after abort/failure. */
  readonly onDiscard?: ((value: T) => void) & { readonly pointer: Pointer };
  /** Abort requests cancellation; settlement waits for native exit so input cleanup is safe. */
  readonly signal?: {
    readonly aborted: boolean;
    readonly reason?: unknown;
    addEventListener(
      type: 'abort',
      listener: () => void,
      options?: { once?: boolean },
    ): void;
    removeEventListener(type: 'abort', listener: () => void): void;
  };
}
export declare function callWithErrno<F extends (...args: any[]) => any>(
  fn: F & { readonly pointer: Pointer },
  ...args: Parameters<F>
): NativeCallResult<ReturnType<F>>;
export declare function callAsync<F extends (...args: any[]) => any>(
  fn: F & { readonly pointer: Pointer },
  args: Parameters<F>,
  options: AsyncCallOptions<ReturnType<F>> & { readonly captureErrno: true },
): Promise<NativeCallResult<ReturnType<F>>>;
export declare function callAsync<F extends (...args: any[]) => any>(
  fn: F & { readonly pointer: Pointer },
  args: Parameters<F>,
  options?: AsyncCallOptions<ReturnType<F>> & { readonly captureErrno?: false },
): Promise<ReturnType<F>>;
export declare function callAsync<F extends (...args: any[]) => any>(
  fn: F & { readonly pointer: Pointer },
  args: Parameters<F>,
  options: AsyncCallOptions<ReturnType<F>>,
): Promise<ReturnType<F> | NativeCallResult<ReturnType<F>>>;
export declare const suffix: 'dylib' | 'so' | 'dll';
export declare const abi: Readonly<{
  suffix: typeof suffix;
  architecture: string;
  littleEndian: boolean;
  pointerSize: number;
  longSize: number;
  wcharSize: number;
  callbackBackend: string;
}>;
export declare const types: Readonly<{
  VOID: 'void';
  POINTER: 'pointer';
  BUFFER: 'buffer';
  ARRAY_BUFFER: 'arraybuffer';
  FUNCTION: 'function';
  BOOL: 'bool';
  CHAR: 'char';
  STRING: 'string';
  FLOAT: 'float';
  DOUBLE: 'double';
  INT_8: 'int8';
  UINT_8: 'uint8';
  INT_16: 'int16';
  UINT_16: 'uint16';
  INT_32: 'int32';
  UINT_32: 'uint32';
  INT_64: 'int64';
  UINT_64: 'uint64';
  FLOAT_32: 'float32';
  FLOAT_64: 'float64';
}>;
export declare function nativeProvider(id: string): unknown;
/** The address does not retain source. Do not resize, detach or transfer it during use. */
export declare function getRawPointer(source: ByteSource): Pointer;
export declare function toString(pointer: Pointer, maxBytes?: number): string | null;
export declare function toUtf16String(
  pointer: Pointer,
  maxCodeUnits?: number,
): string | null;
export declare function read<const T extends PrimitiveType>(
  type: T,
  pointer: Pointer,
  offset?: number,
): NativeValue<T>;
export declare function write<const T extends PrimitiveType>(
  type: T,
  pointer: Pointer,
  offset: number,
  value: NativeValue<T>,
): void;
/** copy=false borrows memory; the caller retains its actual owner until all uses end. */
export declare function toArrayBuffer(
  pointer: Pointer,
  length: number,
  copy?: boolean,
): ArrayBuffer;
export declare function toUint8Array(
  pointer: Pointer,
  length: number,
  copy?: boolean,
): Uint8Array<ArrayBuffer>;
export declare function toBuffer(
  pointer: Pointer,
  length: number,
  copy?: boolean,
): Buffer;
export type BufferEncoding =
  | 'utf8'
  | 'utf-8'
  | 'utf16le'
  | 'utf-16le'
  | 'ucs2'
  | 'ucs-2'
  | 'ascii'
  | 'latin1'
  | 'binary'
  | 'hex'
  | 'base64'
  | 'base64url';
export declare function exportString(
  string: string,
  pointer: Pointer,
  length: number,
  encoding?: BufferEncoding,
): void;
export declare function exportArrayBuffer(
  arrayBuffer: ArrayBuffer,
  pointer: Pointer,
  length: number,
): void;
export declare function exportArrayBufferView(
  arrayBufferView: ArrayBufferView,
  pointer: Pointer,
  length: number,
): void;
export declare function exportBuffer(
  buffer: Buffer,
  pointer: Pointer,
  length: number,
): void;
export declare function getInt8(pointer: Pointer, offset?: number): number;
export declare function getUint8(pointer: Pointer, offset?: number): number;
export declare function getInt16(pointer: Pointer, offset?: number): number;
export declare function getUint16(pointer: Pointer, offset?: number): number;
export declare function getInt32(pointer: Pointer, offset?: number): number;
export declare function getUint32(pointer: Pointer, offset?: number): number;
export declare function getInt64(pointer: Pointer, offset?: number): bigint;
export declare function getUint64(pointer: Pointer, offset?: number): bigint;
export declare function getFloat32(pointer: Pointer, offset?: number): number;
export declare function getFloat64(pointer: Pointer, offset?: number): number;
export declare function setInt8(pointer: Pointer, offset: number, value: number): void;
export declare function setUint8(pointer: Pointer, offset: number, value: number): void;
export declare function setInt16(pointer: Pointer, offset: number, value: number): void;
export declare function setUint16(
  pointer: Pointer,
  offset: number,
  value: number,
): void;
export declare function setInt32(pointer: Pointer, offset: number, value: number): void;
export declare function setUint32(
  pointer: Pointer,
  offset: number,
  value: number,
): void;
export declare function setInt64(
  pointer: Pointer,
  offset: number,
  value: bigint | number,
): void;
export declare function setUint64(
  pointer: Pointer,
  offset: number,
  value: bigint | number,
): void;
export declare function setFloat32(
  pointer: Pointer,
  offset: number,
  value: number,
): void;
export declare function setFloat64(
  pointer: Pointer,
  offset: number,
  value: number,
): void;
export declare function struct<const F extends Record<string, NativeType>>(
  fields: F,
  options?: { pack?: 1 | 2 | 4 | 8 | 16 },
): StructType<F>;
export declare function union<const F extends Record<string, NativeType>>(
  fields: F,
): StructType<F>;
export declare function array<const T extends NativeType>(
  element: T,
  length: number | null,
): ArrayType<T>;
export interface NativeLayout {
  readonly size: number;
  readonly alignment: number;
  readonly scalar?: PrimitiveType;
  readonly flexible: boolean;
  readonly fields: readonly { readonly name: string; readonly offset: number }[];
}
export declare function layout(type: NativeType): NativeLayout;
export declare function sizeOf(type: NativeType): number;
export declare function alignOf(type: NativeType): number;
export declare function offsetOf(type: StructType, field: string): number;
type NativeField<T> =
  T extends StructType<infer F>
    ? { -readonly [K in keyof F]: NativeField<F[K]> } & { readonly $bytes: Uint8Array }
    : T extends ArrayType<infer E>
      ? {
          [index: number]: NativeField<E>;
          readonly length: number;
          readonly $bytes: Uint8Array;
        }
      : NativeValue<T>;
export declare function view<const T extends NativeType>(
  type: T,
  source: ByteSource | { readonly $bytes: Uint8Array },
  offset?: number,
): NativeField<T>;
/** Native allocation helpers return raw addresses; free explicitly or use an Arena. */
export declare function malloc(byteCount: number, alignment?: number): Pointer;
export declare function calloc(byteCount: number, alignment?: number): Pointer;
export declare function free(pointer: Pointer | null): void;
export declare class Arena implements Disposable {
  allocate(
    byteCount: number,
    options?: { alignment?: number; zero?: boolean },
  ): Pointer;
  free(pointer: Pointer): void;
  releaseAll(): void;
  [Symbol.dispose](): void;
}
export declare function withArena<T>(action: (arena: Arena) => T): T;
/** Opt-in C cleanup attachment. Explicit release must first detach successfully. */
export declare class NativeFinalizer {
  constructor(
    callback: NativeFunction<{ arguments: readonly ['pointer']; return: 'void' }>,
  );
  attach(
    target: object,
    token: Pointer,
    options?: { detach?: object; externalSize?: number },
  ): void;
  /** Cancels pending cleanup; throws ERR_INVALID_STATE if any attachment is no longer pending. */
  detach(key: object): void;
}
declare const ffi: Omit<typeof import('./index.js'), 'default' | 'nativeProvider'>;
export default ffi;
