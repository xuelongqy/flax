import { NativeFinalizer, toString } from '@flax/ffi';
import {
  videoFrameAcquirer,
  type VideoFrame as VideoFrameContract,
} from './video-frame.js';

export type VideoSources = readonly (readonly [name: string, sourceId: string])[];

type FrameInfo = Omit<VideoFrameContract, 'close'>;
type FrameState = { handle: bigint; info: FrameInfo; ref: WeakRef<object> };

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

  function state(receiver: object): FrameState {
    const frame = states.get(receiver);
    if (!frame) throw new TypeError('Illegal VideoFrame receiver');
    return frame;
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
    constructor(key: object) {
      if (key !== secret) throw new TypeError('Illegal constructor');
    }
    get codedWidth() {
      const { handle, info } = state(this);
      return handle ? info.codedWidth : 0;
    }
    get codedHeight() {
      const { handle, info } = state(this);
      return handle ? info.codedHeight : 0;
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
    close() {
      closeFrame(this);
    }
  }
  Object.defineProperty(VideoFrame, 'length', { value: 0 });
  Object.defineProperties(VideoFrame.prototype, {
    [Symbol.toStringTag]: { value: 'VideoFrame', configurable: true },
    [Symbol.for('flax.uncloneable')]: { value: true },
  });
  Object.defineProperty(global, 'VideoFrame', {
    value: VideoFrame,
    configurable: true,
    writable: true,
  });

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
    try {
      const value = toString(native.video_frame_info(handle));
      if (!value)
        throw new Exception(
          toString(native.error()) ?? 'Cannot read video frame information',
          'OperationError',
        );
      const info: FrameInfo = JSON.parse(value);
      const frame = new VideoFrame(secret);
      const ref = new WeakRef(frame);
      states.set(frame, { handle, info, ref });
      finalizer ??= new NativeFinalizer(native.video_frame_release);
      active.add(ref);
      dropped.register(frame, ref, ref);
      try {
        finalizer.attach(frame, handle);
      } catch (error) {
        active.delete(ref);
        dropped.unregister(ref);
        throw error;
      }
      return frame;
    } catch (error) {
      native.video_frame_release(handle);
      throw error;
    }
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
