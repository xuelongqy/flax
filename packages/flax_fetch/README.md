# Flax Fetch

An optional session host plugin for macOS arm64 Hermes and V8. Register
`const FlaxFetchPlugin()` in `FlaxSession.plugins`, `FlaxView.plugins`, or the isolate
defaults set by `Flax.registerPlugins`.

Install Dart `flax_fetch` and npm `@flax/fetch` at the same exact version. The npm
package is declarations-only and has a side-effect-free JavaScript entry; the Dart
package owns the implementation. Configuration remains explicit:

```yaml
dependencies:
  flax_fetch: <version>
```

```sh
pnpm add @flax/fetch@<version>
```

```dart
final session = FlaxSession(
  createRuntime: createRuntime,
  source: source,
  bindings: bindings,
  plugins: [const FlaxFetchPlugin(baseUrl: 'https://api.example.com/')],
);
```

The plugin installs fetch, Headers, Request and Response before application code. Blob,
File, FormData, Web Streams and encoding streams belong to the base environment and are
available without this plugin. It owns one Dart HttpClient per session. Closing a
session cancels requests and releases bridge resources. It does not maintain cookies, a
browser origin, CORS enforcement, or an HTTP cache.

Read the [host contract](../../docs/architecture/host.md) for supported options, stream
ownership, packaging, and Axios usage. `@flax/fetch/globals` supplies optional
TypeScript globals without installing an environment.

Generated scripts and their dependency notices belong to this package. Regenerate from
the repository with `dart run melos run host:generate`. Consumers need no JS bootstrap
import and no repository source paths.

Sandboxed macOS applications must enable `com.apple.security.network.client` in their
DebugProfile and Release entitlements. The plugin does not alter application signing.
