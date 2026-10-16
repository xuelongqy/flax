# 0040: Vite-driven development hot reload

Status: accepted

Date: 2026-10-11

## Context

Flax components already use real Flutter Element and State lifecycles, while JavaScript
component behavior is dispatched through live JS objects. Development reload therefore
needs to preserve existing constructor and instance identity while replacing compatible
JavaScript behavior. Session startup remains synchronous and prepared host modules
already use the `globalThis.__flaxModules` identity boundary.

## Decision

`@flax/build` provides `flax-dev` with Vite 8.3.1 for file watching, module graph
updates, transforms, and the Vite HMR WebSocket. The initial application remains one
synchronous asset loaded by the existing `FlaxSession(source: ...)` path. Vite
ModuleRunner is not used. Successful compilations atomically refresh the complete asset
before sending the hot batch, including compilations that the running Session rejects.
Compile errors preserve the last valid asset, and a restarted host loads current source.

The package also supplies production esbuild and Vite adapters sharing one semantic TS
compiler before type erasure. It lowers closed generic calls and safe local/contextual
inference to the existing `$type`/`dartType` selectors. Type-only aliases and provider
declarations invalidate affected callers without becoming runtime module dependencies.
Changing an actual selected generic superclass follows the same restart rule. Generic JS
super calls preserve each lexical JS parent and their native per-call context across
await; no global invocation context or new GC roots are introduced.

Development modules execute as staged CommonJS-style factories inside the existing
`__flaxModules` registry. Top-level named classes use `<module-id>#<class-name>` as a
stable identity. A compatible update preserves the canonical constructor and existing
instances while replacing prototype and static descriptors. Instance-field changes,
constructor or instance-field initialization changes (including changed module-level or
imported inputs), private brands, superclass changes, removed classes or modules,
root/page inventory changes, and `@flax/*` host-module contract changes require a
Session restart.

Named development classes compile to anonymous class expressions with a mutable outer
binding. The binding is initialized before static fields evaluate and then replaced by
the canonical constructor. Class methods that refer to their own name therefore resolve
the canonical type after a reload, including factories and `instanceof` checks. Named
and default exports use the same binding. The compiler preserves class names when
lowering these expressions to ES2019.

Updates follow `evaluate -> validate -> commit -> reassemble`. `runApp` and
`registerPage` capture candidates during staging. After validation, Dart stages the new
root/page content, the registry commits JS behavior, and Flutter runs one application
reassemble. Existing compatible Flutter State remains owned by Flutter. A failed staged
module or validation does not commit live descriptors or root/page replacements.
Arbitrary module-level business side effects are not rolled back.

During synchronous evaluation, compatible canonical classes temporarily expose candidate
methods so eager root construction uses the new behavior. Original descriptors are
restored before the final commit, or on any staging failure. Structural validation runs
before temporarily replacing a class. This retains constructor and instance identity
without introducing a second component type. Final member descriptors are captured after
each module factory finishes, including ordinary prototype/static assignments following
the class declaration. Rollback restores the original member inventory as well as its
descriptors, so new configurable members from a failed factory do not survive.

Root and page registrations are tracked by their development module. A hot batch
replaces registrations owned by staged modules and inherits registrations from untouched
modules, so an importer-only update does not falsely remove a page or application root.
Each development module has a content revision derived from its factory and resolved
dependencies. A Session reports its committed revisions when the socket opens and
acknowledges each batch only after the synchronous registry/Dart commit. The server
sends factories that differ from those committed revisions, plus their importers. A
rejected dependency change is therefore retried even when the next save only changes its
importer. The runtime also filters identical revisions before expanding affected
importers; replayed batches and unchanged private-field dependencies do not acquire a
new class brand.

Each Session has at most one batch in flight. Its acknowledgement carries a batch ID,
not another complete revision inventory. New saves refresh the startup asset immediately
and coalesce into the latest snapshot for that Session. Success sends any remaining
delta; failure also sends a newer snapshot if one finished while the rejected batch was
in flight, without immediately retrying when no newer snapshot exists. Different
Sessions can therefore accept different versions without advancing one another's
baseline. The compilation cache follows the current graph, and a dependency missing from
that cache is compiled again when reintroduced. Restarted Sessions and late socket
connections use the same content revisions as the refreshed complete startup asset.

Source edits remain marked dirty until the complete startup asset is published. A syntax
error in an importer therefore cannot discard dependency edits made while that importer
was invalid; a later recovery recompiles those dirty dependencies before publishing.

The development client uses the existing `FlaxWebSocketPlugin`. Without WebSocket
support the initial asset still runs and hot updates are unavailable. Dynamic callbacks
such as `() => state.handle()` observe replaced methods; already-bound or saved Function
objects keep their previous function body. Runtime validation failures are also sent
back to the Vite process and reported by `flax-dev`.

The compiler uses erased constructor overloads and extension-owner type metadata from
`flax_codegen`. The Binding Manifest, UI protocol 24, native ABI 2 and Session startup
semantics are unchanged. Production and development use the same generic lowering.
Automatic Session restart and field/private-state migration remain deferred.

## Alternatives

Vite ModuleRunner was considered, but it would introduce asynchronous startup and a
second module execution/cache identity alongside `__flaxModules`. Webpack was deferred
because Vite already supplies the required watcher, module graph, transforms, and hot
channel for the first implementation.

## Consequences

The maintained Flutter engine selects V8 on macOS and Android arm64 and Hermes on iOS
arm64. HMR uses the same Session registry, real Flutter State and current method
dispatch on both engines; joint GC does not migrate fields or replace saved functions.
No engine-specific live-edit API or second JS runtime is introduced.

Regression coverage includes transactional registry updates, Vite importer batches and
compile-error recovery, the shared runtime contract, and Flutter root/page reloads that
preserve mounted State and owned controllers. `tool/check_hot_reload.dart` runs the two
State/root cases and a real Vite -> FlaxWebSocketPlugin -> Flutter smoke test. Its
mobile runner starts Vite on the development host, uses Android `adb reverse` or the iOS
simulator's loopback, and preloads package-owned fixtures into a maintained-engine debug
application. Physical iOS device HMR and release/distribution use are outside this
development gate. Results are tracked in the
[maintained-engine HMR task](../tasks/hot-reload-maintained-engine.md).
