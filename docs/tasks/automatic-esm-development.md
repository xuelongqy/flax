# Task: Output-optional JavaScript development startup

Status: planned; this follow-up has not been implemented

## Goal and scope

Let a developer start the existing factory-HMR development workflow with a JavaScript
entry containing static imports, without requiring a generated business asset file.
Reuse the existing HTTP startup URL and module registry. Keep host dependency/module
preparation and the initial Flutter build explicit.

The remaining work is optional file output, initial compilation-error recovery, and a
clear error response when a new Session requests startup during a failed rebuild. This
is a tooling follow-up, not a new JavaScript module system or engine migration.

## Current implementation and gaps

| Area               | Existing behavior                                                                                                                                                                                                  | Remaining work                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Native ESM         | Every application entry executes as native ESM. Directory-output development preserves the original JS/JSON/Wasm graph and emits `flax:restart`.                                                                   | Preserve this path and its existing module semantics.                                                                                                                    |
| Factory HMR        | [dev.mjs](../../packages/flax_build/js/src/dev.mjs) transforms the source graph into CommonJS-style factories inside an ESM entry. Compatible updates preserve existing class and State identity.                  | Reuse the current format, revision acknowledgements and restart boundaries.                                                                                              |
| HTTP startup       | File-output mode already serves `GET`/`HEAD /@flax/dev.js`, returns a JavaScript MIME type and `Cache-Control: no-store`, and exposes its actual URL when using port zero.                                         | Reuse this endpoint; do not add another startup route.                                                                                                                   |
| Required output    | [flax-dev](../../packages/flax_build/js/bin/flax-dev.mjs) and `startFlaxDev` require `--out`. A file path selects factory HMR; a directory selects native module development.                                      | Allow omission of output for the factory-HMR startup workflow while preserving both explicit-output modes.                                                               |
| Compilation errors | Startup compilation failure closes the server. A failed later rebuild preserves the previous startup source and asset.                                                                                             | Keep the watcher alive after a recoverable initial source error. Preserve the running Session and last valid file, but report the current error to new startup requests. |
| Host loading       | [FlaxView.network](../../packages/flax/lib/src/ui/view.dart) loads the startup URL, and `developmentMode: true` provides explicit reload. The [JSX example](../../examples/jsx/README.md) already uses this route. | Reuse the loader and debug control; verify a fresh Session receives current source without rebuilding the host.                                                          |

The current contracts are [native modules](../architecture/modules.md),
[development hot reload](../../packages/flax_build/js/README.md#development-hot-reload)
and [ADR 0040](../decisions/0040-vite-hot-reload.md). The
[earlier HMR task](hot-reload-maintained-engine.md) contains historical platform
results; its Hermes runs do not define the current support matrix.

## Acceptance criteria

1. After normal host preparation, a planned command such as
   `pnpm exec flax-dev --entry src/main.js` serves startup code without writing a
   business asset. Static imports, named/default exports and re-exports use the existing
   factory compiler. Explicit file and directory outputs retain their behavior.
2. Core, UI plugins and a configured application SDK resolve to the installed host
   implementation. Direct and transitive imports preserve identity. Missing/private
   exports, Node built-ins and unsupported source forms fail clearly.
3. The existing HTTP endpoint and HMR share complete successful revisions. Rapid saves
   never expose a partial graph. Compatible HMR preserves State; explicit reload or a
   fresh Session loads the latest successful source without a new Flutter build.
4. An initial syntax error remains recoverable by editing source. While compilation
   fails, new startup requests receive an error instead of stale code. The existing
   application and optional last valid asset survive failed rebuilds. Cancellation and
   Session close release owned work; server restart recovery uses explicit reload.
5. Focused acceptance passes on maintained macOS arm64 V8, Android arm64 V8 and iOS
   arm64 simulator V8 jitless debug engines. Production applications retain their normal
   entry and do not require the development server.

## Approach

### 1. Lock down the existing modes and host resolution

Extend [dev.test.mjs](../../packages/flax_build/js/test/dev.test.mjs) with one small
multi-file plain-JS fixture and one configured application SDK. Reuse the production
[host module rules](../../packages/flax_build/js/src/modules.mjs) where needed rather
than maintaining a second list of SDK names. Verify the actual gap before extracting a
shared resolver; the current development helper recognizes `@flax/` explicitly.

Keep factory HMR's current syntax limits, including its top-level-await restriction. Do
not narrow native ESM's existing dynamic-import or top-level-await support. New runtime
module APIs, package managers, remote npm/CDN resolution, resource hot replacement and
structural State migration are outside this follow-up.

### 2. Make factory-HMR output optional and recover source errors

Handle an absent `out` explicitly before the existing file/directory dispatch. Preserve
callers that supply output, including atomic writes and their returned paths. Update
callers and declarations affected by an optional output path. Do not add another mode
flag solely to express that no output file was requested.

Separate compilation/publication of a successful startup snapshot from its optional file
write. Keep HTTP startup and HMR on the existing serialized revision path. A new startup
request must wait for an in-flight compilation or receive a clear non-success response;
it must not silently load an old snapshot after a current compile failure. Keep the
current GET/HEAD, MIME type, no-store policy, loopback binding and actual URL reporting.
Invalid CLI arguments or entry paths still fail promptly.

A recoverable source syntax error should leave the watcher available for correction.
No-output mode must not create a hidden application asset just to reuse a file-writing
helper. Explicit output continues to retain its last valid file after a failed rebuild.

### 3. Reuse the host integration and existing sandbox contract

Use the existing network View and debug reload control in one small example. Document
dependency installation, module preparation and the initial host build separately from
the edit/reload loop. Keep `@flax/build` as a development dependency and retain normal
packaged startup for production. Use existing Android port forwarding for device checks.

Sessions and Views already accept an immutable
[FlaxSandbox](../architecture/sandbox.md). Preserve this host-owned object and its
forwarding across reloads. Do not replace it with a proposed boolean `sandbox` switch or
claim sandbox support is absent. Development source and manifests cannot select host
policy. Existing resource/FFI restrictions and still-deferred network permissions remain
unchanged; this task adds no isolation policy.

### 4. Verify recovery and update the workflow documentation

Reuse current Node tests for optional output, HTTP startup/error behavior, rapid saves,
revision handoff and initial-error recovery. Retain explicit-output and native module
regressions. Add only the focused host assertions needed to cover cancellation, explicit
reload and complete Session cleanup.

Extend [check_hot_reload.dart](../../tool/check_hot_reload.dart) and its existing HMR
fixture to load startup over HTTP. Build the host once, edit a dependency, preserve
State on compatible HMR, then recreate the Session from current HTTP code without
rebuilding the host. Reuse the maintained V8 runner on each supported debug target.

After implementation, update the build package README, the selected example and ADR 0040
where behavior changes. Native engines, C ABI, generated Flutter bindings and GC are not
expected to change. Reassess the scope if implementation requires those changes.

## Results and validation

Documentation review only. The plan was reconciled with the current CLI, development
server, native ESM contract, network View and implemented FlaxSandbox API. No proposed
output-optional startup behavior has been implemented or accepted on a device. Existing
HTTP startup and native ESM support are current behavior, not results of this task.

Run the existing scoped commands during implementation:

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
pnpm --filter @flax/build test
pnpm --filter @flax/build typecheck
dart run tool/check_hot_reload.dart
FLAX_CHECK_TARGET=android-arm64 FLAX_CHECK_DEVICE=<adb-id> dart run tool/check_hot_reload.dart
FLAX_CHECK_TARGET=ios-simulator-arm64 FLAX_CHECK_DEVICE=<simulator-id> dart run tool/check_hot_reload.dart
dart run melos run docs:check
```

Mobile checks require the matching maintained V8 debug engine and an available device.
Run affected Dart checks and the selected example's production gate when implementation
changes them. Record actual results and blockers, preserve concise receipts, and remove
completed scratch work from the workspace volume.

## Handoff

Start with the plain-JS/application-SDK fixture and required-output contract in step 1.
Then implement optional file output and recoverable startup compilation errors using the
existing HTTP endpoint. Keep this task planned until its implementation and focused
platform checks are complete.
