import {
  signal as coreSignal,
  computed as coreComputed,
  effect,
  batch as coreBatch,
  untracked,
  action,
} from '@preact/signals-core';

export { effect, untracked, action };

const reads: { readonly value: unknown }[] = [];
const bindingReaders = new WeakSet<() => unknown>();
let nativeCallDepth = 0;

/** @internal Native child previews must not subscribe an evaluating parent. */
export function readBindingSnapshot<T>(read: () => T): T {
  // Custom readers own their tracking; only built-in readers record recovery inputs.
  return bindingReaders.has(read) ? untracked(read) : read();
}

/** @internal Failed conversion inputs must remain able to recover before mounting. */
export function withBindingSnapshots<T>(action: () => T): T {
  const start = reads.length;
  nativeCallDepth++;
  try {
    return action();
  } catch (error) {
    const retry = reads.slice(start);
    for (const source of retry) {
      try {
        void source.value;
      } catch {
        // Preserve the original native failure.
      }
    }
    throw error;
  } finally {
    // An outer conversion may still need successful nested previews for recovery.
    if (--nativeCallDepth === 0) reads.length = 0;
  }
}

export interface Binding<T> {
  readonly kind: 'binding';
  read(): T;
  observe(token: number): () => void;
}

export interface ReadonlySignal<T> {
  readonly value: T;
  readonly bind: Binding<T>;
  /** Read the current value without tracking a dependency. */
  peek(): T;
  /** Run immediately and on changes; call the returned function to unsubscribe. */
  subscribe(listener: (value: T) => void): () => void;
}

export interface Signal<T> extends ReadonlySignal<T> {
  value: T;
}

type Outcome<T> = { ok: true; value: T } | { ok: false; error: unknown };

function notify(token: number): void {
  const host = globalThis as typeof globalThis & {
    __flaxInvalidate?: (token: number) => void;
  };
  if (!host.__flaxInvalidate) throw new Error('A Flax host is required to subscribe');
  host.__flaxInvalidate(token);
}

/** A lazy property binding. Each mounted property owns a separate subscription. */
export function bind<T>(read: () => T): Binding<T> {
  const result = coreComputed<Outcome<T>>(() => {
    try {
      return { ok: true, value: read() };
    } catch (error) {
      // Keep dependency tracking alive so a later valid value can recover.
      return { ok: false, error };
    }
  });
  const binding = Object.freeze({
    kind: 'binding' as const,
    read(): T {
      if (nativeCallDepth > 0) reads.push(result);
      const current = result.value;
      if (!current.ok) throw current.error;
      return current.value;
    },
    observe(token: number): () => void {
      let previous: Outcome<T> | undefined;
      return effect(() => {
        const current = result.value;
        const changed =
          previous !== undefined &&
          (!previous.ok || !current.ok || !Object.is(previous.value, current.value));
        previous = current;
        if (changed) notify(token);
      });
    },
  });
  bindingReaders.add(binding.read);
  return binding;
}

export function signal<T>(value: T): Signal<T> {
  const source = coreSignal(value);
  const binding = bind(() => source.value);
  return Object.freeze({
    get value(): T {
      return source.value;
    },
    set value(next: T) {
      source.value = next;
    },
    peek(): T {
      return source.peek();
    },
    subscribe(listener: (value: T) => void): () => void {
      return source.subscribe(listener);
    },
    bind: binding,
  });
}

export function computed<T>(read: () => T): ReadonlySignal<T> {
  const source = coreComputed(read);
  return Object.freeze({
    get value(): T {
      return source.value;
    },
    peek(): T {
      return source.peek();
    },
    subscribe(listener: (value: T) => void): () => void {
      return source.subscribe(listener);
    },
    bind: bind(() => source.value),
  });
}

export function batch<T>(action: () => T): T {
  return coreBatch(action);
}
