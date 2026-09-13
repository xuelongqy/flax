# Flax localStorage

Optional persistent Web Storage for Flax sessions, backed by Hive CE 2.19.3.

Install Dart `flax_local_storage` and npm `@flax/local-storage` at the same exact
version. The npm package is declarations-only. The Dart package owns storage and
requires the explicit initialization and plugin registration below.

```yaml
dependencies:
  flax_local_storage: <version>
```

```sh
pnpm add @flax/local-storage@<version>
```

```dart
WidgetsFlutterBinding.ensureInitialized();
await FlaxLocalStoragePlugin.initialize();
Flax.registerPlugins([const FlaxLocalStoragePlugin()]);

final session = FlaxSession(
  namespace: 'shop',
  createRuntime: createRuntime,
  source: source,
  bindings: bindings,
);
```

Import `package:flax/flax.dart`, `package:flax_local_storage/flax_local_storage.dart`
and Flutter's widgets library. The default directory is Application Support under
`flax/local_storage`; pass `directory` to use an application-selected location.
Initialization must finish before the plugin is installed. The default quota is 10 MiB
per namespace, counting UTF-16 key and value bytes.

Flax does not call Hive.init(), change the application's Hive directory, or close other
boxes. It opens only `flax_local_storage_v1` with an explicit path. An already open box
with that reserved name is rejected rather than adopted. The name is reserved for Flax;
application code must not open, close, delete or write that box, including while Flax is
initializing. Hive's public API cannot distinguish a same-name, same-path concurrent
open from the operation that created the box. Existing application Hive initialization
and other boxes are supported; no private Hive state is inspected. Shut down the plugin
before the application calls global Hive close or deletion methods.

JS needs no runtime import. Optional types are available through
`import type {} from '@flax/local-storage/globals'`. Same-namespace sessions share data
and receive each other's `storage` events; a null namespace selects the default area.

Writes are synchronously visible in memory and asynchronously persisted. Await
`FlaxLocalStoragePlugin.flush()` for persistence and errors. After all using sessions
close, `shutdown()` flushes and closes the dedicated box. Neither session closure nor
shutdown deletes data.

Read the [storage contract](../../docs/architecture/local-storage.md) for property
semantics, initialization, events and limits. Run `host:generate` after JS changes.
Storage unit tests: `dart test packages/flax_local_storage/test` from the repository
root.
