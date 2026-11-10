import { NativeFinalizer, toString } from '@flax/ffi';
import {
  videoFrameAcquirer,
  type VideoColorSpace as VideoColorSpaceContract,
  type VideoColorSpaceInit,
  type VideoFrame as VideoFrameContract,
  type VideoFrameInit,
  type VideoFrameRect,
  type VideoFrameCopyToOptions,
  type PlaneLayout,
} from './video-frame.js';
import { integer, sequence, text } from './convert.js';

export type VideoSources = readonly (readonly [name: string, sourceId: string])[];

type FrameInfo = Pick<
  VideoFrameContract,
  | 'codedWidth'
  | 'codedHeight'
  | 'displayWidth'
  | 'displayHeight'
  | 'timestamp'
  | 'duration'
  | 'format'
> & {
  colorSpace: Required<VideoColorSpaceInit> & { value?: VideoColorSpaceContract };
};
type FrameState = { handle: bigint; info: FrameInfo; ref: WeakRef<object> };

const ByteArray = Uint8Array;
const PlaneArray = Uint32Array;
const typedArray = Object.getPrototypeOf(ByteArray.prototype);
const typedBuffer = Object.getOwnPropertyDescriptor(typedArray, 'buffer')!.get!;
const typedOffset = Object.getOwnPropertyDescriptor(typedArray, 'byteOffset')!.get!;
const typedLength = Object.getOwnPropertyDescriptor(typedArray, 'byteLength')!.get!;
const dataBuffer = Object.getOwnPropertyDescriptor(DataView.prototype, 'buffer')!.get!;
const dataOffset = Object.getOwnPropertyDescriptor(
  DataView.prototype,
  'byteOffset',
)!.get!;
const dataLength = Object.getOwnPropertyDescriptor(
  DataView.prototype,
  'byteLength',
)!.get!;
const bufferLength = Object.getOwnPropertyDescriptor(
  ArrayBuffer.prototype,
  'byteLength',
)!.get!;
const bufferImmutable = Object.getOwnPropertyDescriptor(
  ArrayBuffer.prototype,
  'immutable',
)?.get;
const sharedLength =
  typeof SharedArrayBuffer === 'function'
    ? Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, 'byteLength')!.get!
    : undefined;

function destinationBytes(value: any): Uint8Array {
  let buffer = value,
    offset = 0,
    length: number;
  if (ArrayBuffer.isView(value)) {
    try {
      buffer = dataBuffer.call(value);
      offset = dataOffset.call(value);
      length = dataLength.call(value);
    } catch {
      buffer = typedBuffer.call(value);
      offset = typedOffset.call(value);
      length = typedLength.call(value);
    }
  } else {
    try {
      length = bufferLength.call(value);
    } catch {
      if (!sharedLength) throw new TypeError('Expected BufferSource');
      length = sharedLength.call(value);
    }
  }
  let immutable = false;
  try {
    immutable = bufferImmutable?.call(buffer) ?? false;
  } catch {
    /* Shared buffer. */
  }
  if (immutable) throw new TypeError('VideoFrame destination is immutable');
  // Constructing a view also rejects a detached ArrayBuffer.
  return new ByteArray(buffer, offset, length);
}

function dictionary(value: any): Record<string, any> {
  if (value == null) return {};
  if (typeof value !== 'object' && typeof value !== 'function')
    throw new TypeError('Expected a dictionary');
  return value;
}

function colorEnum<T extends string>(value: unknown, choices: readonly T[]): T | null {
  if (value == null) return null;
  const result = text(value);
  if (!choices.includes(result as T)) throw new TypeError('Invalid video color value');
  return result as T;
}

function timing(value: unknown, signed: boolean): number {
  const number = +(value as number);
  if (!Number.isFinite(number) || number === 0) return 0;
  const truncated = BigInt(Math.trunc(number));
  return Number(signed ? BigInt.asIntN(64, truncated) : BigInt.asUintN(64, truncated));
}

function rectangle(info: FrameInfo): VideoFrameRect {
  const values = {
    x: 0,
    y: 0,
    width: info.codedWidth,
    height: info.codedHeight,
    top: 0,
    right: info.codedWidth,
    bottom: info.codedHeight,
    left: 0,
  };
  return Object.freeze({ ...values, toJSON: () => ({ ...values }) });
}

export function installVideoFrames(
  global: typeof globalThis,
  native: Record<string, any>,
  registry: () => bigint,
  sources: VideoSources,
) {
  const Exception = (global as any).DOMException;
  const sourceIds: Record<string, string | undefined> = Object.create(null);
  for (const [name, id] of sources) {
    if (
      typeof name !== 'string' ||
      !name ||
      typeof id !== 'string' ||
      !id ||
      id.includes('\0') ||
      sourceIds[name] !== undefined
    )
      throw new TypeError('Invalid WebGPU video source configuration');
    sourceIds[name] = id;
  }

  const secret = {};
  const states = new WeakMap<object, FrameState>();
  const active = new Set<WeakRef<object>>();
  const dropped = new FinalizationRegistry<WeakRef<object>>((ref) =>
    active.delete(ref),
  );
  let finalizer: NativeFinalizer | undefined;
  let open = true;

  class VideoColorSpace implements VideoColorSpaceContract {
    #info: Required<VideoColorSpaceInit>;
    constructor(init: VideoColorSpaceInit = {}) {
      const input = dictionary(init);
      // WebIDL dictionaries convert members in alphabetical order.
      const fullRange = input.fullRange;
      const range = fullRange == null ? null : Boolean(fullRange);
      const matrix = colorEnum(input.matrix, [
        'rgb',
        'bt709',
        'bt470bg',
        'smpte170m',
        'bt2020-ncl',
      ] as const);
      const primaries = colorEnum(input.primaries, [
        'bt709',
        'bt470bg',
        'smpte170m',
        'bt2020',
        'smpte432',
      ] as const);
      const transfer = colorEnum(input.transfer, [
        'bt709',
        'smpte170m',
        'iec61966-2-1',
        'linear',
        'pq',
        'hlg',
      ] as const);
      this.#info = { primaries, transfer, matrix, fullRange: range };
    }
    get primaries() {
      return this.#info.primaries;
    }
    get transfer() {
      return this.#info.transfer;
    }
    get matrix() {
      return this.#info.matrix;
    }
    get fullRange() {
      return this.#info.fullRange;
    }
    toJSON() {
      return { ...this.#info };
    }
  }

  function state(receiver: object): FrameState {
    const frame = states.get(receiver);
    if (!frame) throw new TypeError('Illegal VideoFrame receiver');
    return frame;
  }
  function liveState(receiver: object): FrameState {
    const frame = state(receiver);
    if (!frame.handle)
      throw new Exception('The video frame is closed', 'InvalidStateError');
    return frame;
  }
  function copyLayout(receiver: object, options: VideoFrameCopyToOptions) {
    state(receiver);
    const input = dictionary(options);
    const rawColorSpace = input.colorSpace;
    if (
      rawColorSpace !== undefined &&
      !['srgb', 'display-p3'].includes(text(rawColorSpace))
    )
      throw new TypeError('Invalid video destination color space');
    const rawFormat = input.format;
    const format = rawFormat === undefined ? undefined : text(rawFormat);
    if (
      format !== undefined &&
      ![
        'I420',
        'I420P10',
        'I420P12',
        'I420A',
        'I420AP10',
        'I420AP12',
        'I422',
        'I422P10',
        'I422P12',
        'I422A',
        'I422AP10',
        'I422AP12',
        'I444',
        'I444P10',
        'I444P12',
        'I444A',
        'I444AP10',
        'I444AP12',
        'NV12',
        'RGBA',
        'RGBX',
        'BGRA',
        'BGRX',
      ].includes(format)
    )
      throw new TypeError('Invalid video pixel format');
    const rawLayout = input.layout;
    const layout =
      rawLayout === undefined
        ? undefined
        : sequence(rawLayout, (value) => {
            const plane = dictionary(value);
            return {
              offset: integer(plane.offset, 32),
              stride: integer(plane.stride, 32),
            };
          });
    const rawRect = input.rect;
    let rect;
    if (rawRect !== undefined) {
      const value = dictionary(rawRect);
      const coordinate = (name: string) => {
        const raw = value[name];
        const number = raw === undefined ? 0 : +(raw as number);
        if (!Number.isFinite(number))
          throw new TypeError('Invalid video copy rectangle');
        return Math.trunc(number);
      };
      rect = {
        height: coordinate('height'),
        width: coordinate('width'),
        x: coordinate('x'),
        y: coordinate('y'),
      };
    }
    // Options can run application getters, including close() on this frame.
    const { info } = liveState(receiver);
    rect ??= { x: 0, y: 0, width: info.codedWidth, height: info.codedHeight };
    if (
      Object.values(rect).some((value) => !Number.isFinite(value) || value < 0) ||
      rect.width === 0 ||
      rect.height === 0 ||
      rect.x + rect.width > info.codedWidth ||
      rect.y + rect.height > info.codedHeight ||
      (info.format === 'NV12' && (rect.x % 2 !== 0 || rect.y % 2 !== 0))
    )
      throw new TypeError('Invalid video copy rectangle');
    // Explicit RGB formats require WebCodecs color conversion, even for BGRA input.
    if (format !== undefined)
      throw new Exception(
        'VideoFrame format conversion is unavailable',
        'NotSupportedError',
      );
    const x = Math.trunc(rect.x),
      y = Math.trunc(rect.y);
    const width = Math.trunc(rect.width),
      height = Math.trunc(rect.height);
    const shapes: [number, number][] =
      info.format === 'NV12'
        ? [
            [width, height],
            [Math.ceil(width / 2) * 2, Math.ceil(height / 2)],
          ]
        : [[width * 4, height]];
    if (layout !== undefined && layout.length !== shapes.length)
      throw new TypeError('Invalid video plane count');
    let size = 0;
    const planes: PlaneLayout[] = [];
    const ends: number[] = [];
    for (const [index, [rowBytes, rows]] of shapes.entries()) {
      const plane = layout?.[index] ?? { offset: size, stride: rowBytes };
      const end = plane.offset + plane.stride * rows;
      if (
        plane.stride < rowBytes ||
        end > 0xffffffff ||
        planes.some((earlier, i) => plane.offset < ends[i]! && earlier.offset < end)
      )
        throw new TypeError('Invalid or overlapping video plane layout');
      size = Math.max(size, end);
      planes.push(plane);
      ends.push(end);
    }
    return { x, y, width, height, planes, size };
  }
  function attach(receiver: object, handle: bigint, info: FrameInfo) {
    const ref = new WeakRef(receiver);
    states.set(receiver, { handle, info, ref });
    try {
      finalizer ??= new NativeFinalizer(native.video_frame_release);
      active.add(ref);
      dropped.register(receiver, ref, ref);
      finalizer.attach(receiver, handle);
    } catch (error) {
      states.delete(receiver);
      active.delete(ref);
      dropped.unregister(ref);
      native.video_frame_release(handle);
      throw error;
    }
  }
  function cloneInto(receiver: object, source: FrameState, info: FrameInfo) {
    const handle = native.video_frame_clone(source.handle);
    if (!handle)
      throw new Exception(
        toString(native.error()) ?? 'Cannot clone the video frame',
        'OperationError',
      );
    attach(receiver, handle, info);
  }
  function closeFrame(receiver: object) {
    const frame = state(receiver);
    if (!frame.handle) return;
    finalizer!.detach(receiver);
    active.delete(frame.ref);
    dropped.unregister(frame.ref);
    const handle = frame.handle;
    frame.handle = 0n;
    native.video_frame_release(handle);
  }
  class VideoFrame implements VideoFrameContract {
    constructor(source: object, init: VideoFrameInit = {}) {
      if (source === secret) return;
      const frame = state(source);
      const input = dictionary(init);
      const rawAlpha = input.alpha;
      const alpha = rawAlpha === undefined ? 'keep' : text(rawAlpha);
      if (alpha !== 'keep' && alpha !== 'discard')
        throw new TypeError('Invalid video alpha option');
      const displayHeight = input.displayHeight;
      if (displayHeight !== undefined) integer(displayHeight, 32);
      const displayWidth = input.displayWidth;
      if (displayWidth !== undefined) integer(displayWidth, 32);
      const duration = input.duration;
      const nextDuration =
        duration === undefined ? frame.info.duration : timing(duration, false);
      const flip = Boolean(input.flip);
      const metadata = input.metadata;
      if (metadata !== undefined) dictionary(metadata);
      const rotation = input.rotation;
      const angle = rotation === undefined ? 0 : +(rotation as number);
      if (!Number.isFinite(angle)) throw new TypeError('Invalid video rotation');
      const timestamp = input.timestamp;
      const nextTimestamp =
        timestamp === undefined ? frame.info.timestamp : timing(timestamp, true);
      const visibleRect = input.visibleRect;
      if (visibleRect !== undefined) dictionary(visibleRect);
      liveState(source);
      if (
        alpha !== 'keep' ||
        displayHeight !== undefined ||
        displayWidth !== undefined ||
        flip ||
        metadata !== undefined ||
        angle !== 0 ||
        visibleRect !== undefined
      )
        throw new Exception(
          'VideoFrame image transforms are unavailable',
          'NotSupportedError',
        );
      cloneInto(this, frame, {
        ...frame.info,
        duration: nextDuration,
        timestamp: nextTimestamp,
      });
    }
    get codedWidth() {
      const { handle, info } = state(this);
      return handle ? info.codedWidth : 0;
    }
    get codedHeight() {
      const { handle, info } = state(this);
      return handle ? info.codedHeight : 0;
    }
    get codedRect() {
      const { handle, info } = state(this);
      return handle ? rectangle(info) : null;
    }
    get visibleRect() {
      const { handle, info } = state(this);
      return handle ? rectangle(info) : null;
    }
    get rotation() {
      state(this);
      return 0;
    }
    get flip() {
      state(this);
      return false;
    }
    get displayWidth() {
      const { handle, info } = state(this);
      return handle ? info.displayWidth : 0;
    }
    get displayHeight() {
      const { handle, info } = state(this);
      return handle ? info.displayHeight : 0;
    }
    get timestamp() {
      return state(this).info.timestamp;
    }
    get duration() {
      return state(this).info.duration;
    }
    get format() {
      const { handle, info } = state(this);
      return handle ? info.format : null;
    }
    get colorSpace() {
      const colors = state(this).info.colorSpace;
      if (!Object.hasOwn(colors, 'value'))
        Object.defineProperty(colors, 'value', { value: new VideoColorSpace(colors) });
      return colors.value!;
    }
    metadata() {
      liveState(this);
      return {};
    }
    allocationSize(options: VideoFrameCopyToOptions = {}) {
      return copyLayout(this, options).size;
    }
    async copyTo(
      destination: ArrayBuffer | SharedArrayBuffer | ArrayBufferView,
      options: VideoFrameCopyToOptions = {},
    ): Promise<PlaneLayout[]> {
      state(this);
      destinationBytes(destination);
      const plan = copyLayout(this, options);
      const bytes = destinationBytes(destination);
      const { x, y, width, height, planes } = plan;
      const planeCount = planes.length;
      const layout = new PlaneArray(planeCount * 2);
      for (let index = 0; index < planeCount; ++index) {
        layout[index * 2] = planes[index]!.offset;
        layout[index * 2 + 1] = planes[index]!.stride;
      }
      const length = typedLength.call(bytes);
      if (length < plan.size)
        throw new TypeError('VideoFrame destination is too small');
      const copy = native.video_frame_copy;
      // No application getters may run between the live handle check and native entry.
      const handle = liveState(this).handle;
      if (copy(handle, bytes, length, x, y, width, height, layout, planeCount) !== 1)
        throw new Exception(
          toString(native.error()) ?? 'Cannot copy video frame pixels',
          'OperationError',
        );
      return planes;
    }
    clone() {
      const frame = liveState(this);
      const result = new VideoFrame(secret);
      cloneInto(result, frame, frame.info);
      return result;
    }
    close() {
      closeFrame(this);
    }
  }
  for (const [name, constructor] of [
    ['VideoColorSpace', VideoColorSpace],
    ['VideoFrame', VideoFrame],
  ] as const) {
    Object.defineProperty(constructor, 'name', { value: name });
    for (const key of Object.getOwnPropertyNames(constructor.prototype)) {
      if (key !== 'constructor')
        Object.defineProperty(constructor.prototype, key, { enumerable: true });
    }
    Object.defineProperty(constructor.prototype, Symbol.toStringTag, {
      value: name,
      configurable: true,
    });
    Object.defineProperty(constructor.prototype, Symbol.for('flax.uncloneable'), {
      value: true,
    });
    Object.defineProperty(global, name, {
      value: constructor,
      configurable: true,
      writable: true,
    });
  }

  function acquire(name: string): VideoFrame | null {
    if (!open || typeof name !== 'string') return null;
    const owner = registry();
    const id = sourceIds[name];
    if (!owner || id === undefined) return null;
    const handle = native.video_frame_acquire(owner, id);
    if (!handle) {
      const error = toString(native.error());
      if (error) throw new Exception(error, 'OperationError');
      return null;
    }
    let info: FrameInfo;
    try {
      const value = toString(native.video_frame_info(handle));
      if (!value)
        throw new Exception(
          toString(native.error()) ?? 'Cannot read video frame information',
          'OperationError',
        );
      info = JSON.parse(value);
    } catch (error) {
      native.video_frame_release(handle);
      throw error;
    }
    const frame = new VideoFrame(secret);
    attach(frame, handle, info);
    return frame;
  }
  if (sources.length)
    Object.defineProperty(global, videoFrameAcquirer, {
      value: acquire,
      configurable: true,
    });

  return {
    frame(value: unknown) {
      return states.get(value as object);
    },
    close() {
      open = false;
      if (
        Object.getOwnPropertyDescriptor(global, videoFrameAcquirer)?.value === acquire
      )
        Reflect.deleteProperty(global, videoFrameAcquirer);
      for (const ref of active) {
        const frame = ref.deref();
        if (frame) closeFrame(frame);
      }
      active.clear();
    },
  };
}
