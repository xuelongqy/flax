import type {
  Storage as HostStorage,
  StorageEvent as HostStorageEvent,
  StorageEventConstructor,
} from './types.js';
export type * from './index.js';
declare global {
  type Storage = HostStorage;
  type StorageEvent = HostStorageEvent;
  var Storage: { readonly prototype: HostStorage };
  var StorageEvent: StorageEventConstructor;
  var localStorage: HostStorage;
  var onstorage: ((this: typeof globalThis, event: HostStorageEvent) => unknown) | null;
  interface FlaxGlobalEventMap {
    storage: HostStorageEvent;
  }
}
