import {
  signal as coreSignal,
  computed as coreComputed,
  effect,
  batch as coreBatch,
} from '@preact/signals-core';

export interface Binding<T> {
  readonly kind: 'binding';
  read(): T;
  observe(token: number): () => void;
}

export interface ReadonlySignal<T> {
  readonly value: T;
  readonly bind: Binding<T>;
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
  return Object.freeze({
    kind: 'binding' as const,
    read(): T {
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
    bind: binding,
  });
}

export function computed<T>(read: () => T): ReadonlySignal<T> {
  const source = coreComputed(read);
  return Object.freeze({
    get value(): T {
      return source.value;
    },
    bind: bind(() => source.value),
  });
}

export function batch<T>(action: () => T): T {
  return coreBatch(action);
}
