import type {} from '@flax/local-storage/globals';
const value: string | null = localStorage.getItem('key');
localStorage.setItem('key', value ?? '');
const count: number = localStorage.length;
addEventListener('storage', function (event) {
  const value: string | null = event.newValue;
  const owner: typeof globalThis = this;
  void value;
  void owner;
  // @ts-expect-error StorageEvent has no message payload.
  event.data;
});
const listener = {
  handleEvent(event: StorageEvent) {
    void event.key;
  },
};
addEventListener('storage', listener, {
  once: true,
  signal: new AbortController().signal,
});
removeEventListener('storage', listener);
onstorage = (event) => {
  void event.storageArea;
};
// @ts-expect-error Storage is not constructible.
new Storage();
// @ts-expect-error length is readonly.
localStorage.length = count;
