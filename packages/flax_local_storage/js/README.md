# @flax/local-storage-runtime

Runtime implementation for the Dart `flax_local_storage` session plugin. Public
declarations live in the declaration-only `@flax/local-storage` package. Dart
registration installs Storage, localStorage, StorageEvent and onstorage before
application code. Importing this package does not install a plugin.

Install both npm packages at the same version as Dart `flax_local_storage`. This source
package delivers prepared modules and the generated host bootstrap. Business code uses
the public imports; private implementation imports are rejected. Persistent storage
remains owned by Dart.

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

`host:generate` embeds the implementation into its Dart package. Public npm exports are
type entry points; standalone tarball consumption is verified by the existing
outside-repository application tests.
