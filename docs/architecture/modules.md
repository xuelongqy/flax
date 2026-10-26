# Native modules

Flax loads original JavaScript ESM through V8. The host resolves dependencies and
downloads bytes; V8 links and evaluates JavaScript, including cycles, live bindings,
re-exports, dynamic import, top-level await and `import.meta.url`. No CommonJS
conversion or single-file bundling is required. CSS, WASI, Node.js APIs and Wasm threads
are outside this contract.

## Application entries

Script is the default and retains synchronous `evaluate` and direct Session loading.
Owning Script Views use the maintained staged startup; module readiness does not hold
that startup queue across top-level await. Source, file and network-JavaScript entries
select `entryFormat: FlaxEntryFormat.module` explicitly. Bundles, directories and
packages select the mode through `flax.json`:

```json
{
  "formatVersion": 2,
  "id": "example",
  "version": "1.0.0",
  "entry": "main.js",
  "entryFormat": "module",
  "requiredCapabilities": [
    "esm",
    "json-modules",
    "wasm-modules",
    "wasm-source-imports"
  ],
  "modules": {
    "main.js": "javascript",
    "settings.json": "json",
    "algorithm.wasm": "wasm"
  }
}
```

Version 1 keeps script behavior. Older hosts reject version 2 before execution. A new
host validates the declared module paths/kinds and capability names. Business versions,
host SDK versions, native ABI 2 and UI protocol 24 remain independent.

`await session.ready` completes after entry evaluation, including top-level await.
Owning Views keep their loading/error presentation during that interval. A failed entry
disposes its Session; a later failed dynamic import rejects only that import. Closing a
Session cancels readiness and pending downloads without waiting for an unresolved user
Promise. Borrowed root/page Views use the same readiness and ownership.

A Session entry still calls `runApp` or `registerPage`. For a library module graph with
no UI entry, use `FlaxModuleLoader` directly, release returned namespaces and close the
loader before disposing its runtime.

## JavaScript, JSON and Wasm

```js
import { Text, runApp } from '@flax/flutter/widgets';
import settings from './settings.json' with { type: 'json' };
import source algorithm from './algorithm.wasm';
import { transform } from './algorithm.wasm';

const instance = new WebAssembly.Instance(algorithm, {});
const lazy = await import('./extra.js');
const compiled = await import.source('./algorithm.wasm');
```

JSON requires `type: 'json'` for static and dynamic imports. It has exactly one default
export, accepts every valid JSON value and retains V8 object identity within a Session.
It is not frozen. Invalid JSON never falls back to script execution. Other attributes
and JSON named exports fail.

Wasm source imports return a compiled `WebAssembly.Module`, with imports supplied by the
caller during explicit instantiation. They do not load the binary's dependencies.
Evaluation imports resolve the binary's imports through the same graph and expose its
named exports. A small generated ESM linking facade connects the native Wasm instance;
JavaScript source and Wasm instructions are not translated. Wasm source and evaluation
reuse compilation, while explicit instantiation can create independent instances. Wasm
integration follows the pinned proposal, rather than JSON's standardized contract.
Unsupported Wasm cycles fail during linking/evaluation.

Module state, JSON values and Wasm memories belong to one Session. Installed SDK entries
are native synthetic facades over that Session's existing exports, preserving
constructor, signal and callback identity. A bare import must select an installed host
entry or an exact host-provided `imports: Map<String, Uri>` mapping. There is no runtime
npm lookup.

## Sources and transport

Prepared applications load only declared modules inside their module root. File entries
resolve local dependencies inside the entry's real parent directory; symlinks cannot
escape it. File types are `.js`/`.mjs`, `.json` and `.wasm`. Business asset keys and the
Session AssetBundle retain their existing resource contract.

Remote imports support HTTP(S) without the optional Fetch plugin. Relative imports use
the final response URL, including after cache revalidation. Queries and fragments belong
to module identity; fragments are removed from HTTP requests. Diagnostic source URLs
omit queries and fragments. Embedded URL credentials, HTTPS downgrades and
remote-to-local imports are rejected.

JavaScript responses require a JavaScript MIME type, JSON requires `application/json` or
an application `+json` type, and Wasm requires `application/wasm`. Suffixes do not
override HTTP MIME types. The default downloader follows at most five same-origin
redirects. Module adapters must supply `FlaxDownloadResponse.finalUri`; cross-origin
redirects are rejected. Application headers apply only to dependencies on the entry
origin. Other origins receive no entry credentials.

The existing artifact cache verifies byte hashes, honors `no-store`/`Vary: *`, and
revalidates ETags. Records retain final URLs and MIME types, partitioned by headers and
module request type. A 304 never supplies a shared JS instance. Closing one Session does
not cancel another Session's download. Integrity pinning of a remote entry remains
available through `expectedSha256`.

Limits are eight concurrent requests, 256 modules/requests, 4 MiB per JS file, 1 MiB per
JSON file, 16 MiB per Wasm binary and 64 MiB compiled source bytes per Session. HTTP
limits apply while streaming decompressed bytes. Each source request has a 30-second
deadline; graph preparation has a two-minute deadline. Top-level await can remain
pending until the host closes the Session.

Failed loads also occupy the request budget and remain cached by URL until the loader
closes. Retrying a failed entry reuses its failure without retaining another native
exception; close releases the cached errors along with module namespaces and promises.

For host-managed sources, supply `loadModule: FlaxModuleSourceLoader`. Return immutable
`FlaxModuleSource` bytes, their actual kind and canonical final URI; observe the
request's cancellation signal. The shared loader still validates capabilities, module
types, budgets and redirect boundaries.

## Engine and build integration

The optional module extension version 1 preserves native ABI 2. An engine without it
continues to run scripts and explicitly rejects module mode. Context-owned module maps,
roots, errors and promises retire before runtime/FFI shutdown. V8 retains its default
foreground queues. Worker tasks notify the owning Dart event loop through a native port;
the Session checkpoint pumps that queue and drains microtasks on the owning thread. This
also delivers asynchronous Wasm results after entry readiness without polling. Closing
the runtime unregisters notifications before releasing its context.

Host jobs and microtasks continue during entry loading, including before a delayed SDK
import installs UI bindings. Binding sweeps start once those helpers are available;
Session readiness retains the fixed cleanup helper set used by ordinary scripts.

iOS keeps JIT and TurboFan disabled. SDK 0.3.2 enables DrumBrake with explicit bounds
checks and V8 pointer compression; CppGC remains uncaged with compression and young
generation disabled. macOS and Android retain JIT. A copied Dart buffer can read Wasm
memory; borrowed zero-copy reads reject it because memory growth can detach its backing
store. Sandbox is a host-owned reserved `sandbox: false` option. `true` throws
`UnsupportedError` before download, runtime allocation, plugins or application
execution; there is no isolation implementation or descriptor-controlled sandbox policy.

Physical iOS hosts must enable Xcode's **Extended Virtual Addressing** capability and
use a provisioning profile containing
`com.apple.developer.kernel.extended-virtual-addressing = true`. V8 pointer compression
requires a 4 GiB virtual reservation, even for a script-only Session; it does not commit
4 GiB of RAM. Without sufficient address space V8 aborts during process initialization.
The example tools preserve existing entitlements when adding this capability, and the
device gate checks the signed app before installation. Simulator execution does not
establish this host requirement. See
[Apple's entitlement documentation](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.kernel.extended-virtual-addressing).

`prepareModuleApplication()` from `@flax/build/application` stages a module directory,
emits descriptor version 2 and includes all modules in `.flax` integrity inventories.
JavaScript/JSON/Wasm bytes are preserved; TS uses the existing semantic compiler and
esbuild in ESM mode without bundling. Use explicit runtime `.js` paths in TS imports.
Runtime npm dependencies must be delivered as modules or explicit URL mappings.

`flax-dev --entry-format module` uses Vite to watch and serve the emitted modules with
their real MIME types, preserving host imports and JSON/Wasm syntax. Source changes emit
`flax:restart`; replace the owning View/Session to apply them. Module mode does not
patch an evaluated graph in place. Existing script factory HMR is unchanged.

See the [runnable example](../../examples/standalone/README.md#native-esm-example) and
[implementation task](../tasks/native-esm-and-wasm.md) for acceptance scope and limits.
