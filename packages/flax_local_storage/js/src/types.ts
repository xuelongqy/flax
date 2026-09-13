import type { Event, EventInit } from '@flax/core/host';

export interface Storage {
  [name: string]: unknown;
  readonly length: number;
  key(index: number): string | null;
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  clear(): void;
}

export interface StorageEventInit extends EventInit {
  key?: string | null;
  oldValue?: string | null;
  newValue?: string | null;
  url?: string;
  storageArea?: Storage | null;
}

export interface StorageEvent extends Event {
  readonly key: string | null;
  readonly oldValue: string | null;
  readonly newValue: string | null;
  readonly url: string;
  readonly storageArea: Storage | null;
}

export interface StorageEventConstructor {
  new (type: string, options?: StorageEventInit): StorageEvent;
  readonly prototype: StorageEvent;
}
