# @flax/local-storage

Implementation and opt-in types for the Dart `flax_local_storage` session plugin. Dart
registration installs Storage, localStorage, StorageEvent and onstorage before
application code. Importing this package does not install a plugin.

Install it at the same version as Dart `flax_local_storage`. Its ESM exports load a
side-effect-free empty entry and expose only declarations; persistent storage code ships
in the Dart package.

```typescript
import type {} from '@flax/local-storage/globals';

localStorage.setItem('draft', 'Hello');
addEventListener('storage', (event) => {
  console.log(event.key, event.newValue);
});
```

The [storage contract](../../../docs/architecture/local-storage.md) defines namespace,
quota, persistence and event behavior. Base EventTarget and global event methods come
from `@flax/core/host`; this package does not bundle another event implementation.
Named-property definitions require a supported data descriptor with `value` or
`writable`. Rejected generic, accessor and non-configurable descriptors do not mutate
storage.

`host:generate` embeds the implementation into its Dart package. The npm exports are
side-effect-free type entry points; standalone tarball consumption is verified by the
existing outside-repository application tests.
