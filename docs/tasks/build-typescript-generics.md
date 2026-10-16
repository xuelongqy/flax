# Task: Shared application build and TS generics

Status: implemented and reviewed

## Goal and scope

Rename the Node development package to `@flax/build` and share semantic TS generic
lowering between production esbuild builds and Vite hot reload. Reuse Dart type handles,
native ABI 2, UI protocol 24, Manifest 23 and joint GC. No engine rebuild, SDK
publication or manual CI dispatch is part of this task.

## Implementation

The package owns one pinned TS semantic compiler with thin esbuild/Vite adapters.
Construction, named constructors, generic heritage and instantiated expressions use
existing `$type` selectors; functions, methods and returned generic callbacks use
`dartType`. Type-only dependencies participate in invalidation. Generic aliases use
their instantiated underlying native arguments. Unsupported explicit types fail with a
source location; uncertain inference keeps legal defaults.

A shared super helper forwards each invocation's actual native type context through
intermediate JS overrides and across `await`. It retains ordinary prototype lookup,
private fields, canonical HMR constructors and the existing restart boundary. Receiver
caches remain weak; no global current-invocation root was added. Public typed exports,
both CLIs, package metadata, module delivery and example builds use the renamed package.

The shared model aligns corresponding runtime/declaration callback binders by position
before substituting child types, while preserving each view's lexical identity. Owner
parameters, callback-local parameters, dependent bounds and nested callbacks therefore
remain distinct. Default function registrations close owner parameters through the same
helper as ordinary methods. Explicit overload wire conversion, including integer-
preserving `scalar` inputs, remains at the registration boundary; symbolic Dart
substitution and TS inference retain their existing semantics.

For `List<T> Function<R>(R) get captured`, `ListX<string>(list).captured<number>(3)`
returns a real `List<String>` while accepting num as R. The same path serves class
members, proxies and extensions. It creates no per-class scope helper or pre-generated
type combinations. See the [build contract](../../packages/flax_build/js/README.md) and
[binding architecture](../architecture/bindings.md).

## Validation

| Gate              | Result                                                                                                                                                                                                                                                                                                                                                    |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Generator         | 618 tests passed after the final transport repair; focused enum/class/extension/lexical-scope regressions also passed.                                                                                                                                                                                                                                    |
| Node and static   | 187 workspace Node tests passed, including 53 build/compiler/HMR tests. Full workspace `check`, reproducible bindings/public types/module delivery, analysis, strict TS, formatting, docs, archive consumers and CMake configuration passed. Final binding reproducibility and scoped generator analysis were checked again after the last source repair. |
| V8 framework      | 21 focused cases passed: typed inheritance, class and extension callbacks, nested dependent callbacks, async super, conditional GC and three native HMR cases.                                                                                                                                                                                            |
| Real applications | iOS simulator Hermes passed 240/240; macOS V8 release/AOT passed 238/238 with two Flutter debug-hook checks not applicable. Signing, entitlements, relocation and the single V8 library closure passed their normal audits.                                                                                                                               |
| Hermes HMR        | Three native Hermes hot-reload cases passed, including canonical State identity and rejected-update recovery.                                                                                                                                                                                                                                             |

Both application suites include Dart-root retention, JS-root retention, collection of
unrooted proxy/callback cycles, shared Future ownership and the permanent TS compiler
fixture. Acceptance caught the default adapter's integer-wire regression; its failure
logs remain available and the full applications were repeated after the repair. No
native GC implementation or Flutter engine source changed.

Earlier integration evidence reconciled 610 owning UI cases to success across the
workspace. That evidence contains the initial full run and targeted repairs; it is not a
claim that a new monolithic owning UI run passed after the scope repair. Current native
application acceptance covers the Core suite and the targeted cases above.

Current logs, source/output hashes, result receipts and size comparisons are in ignored
`.local/build-typescript/generic-scope/`. Initial failed and interrupted logs are
retained. The independently installed build-package archive was checked in
`.local/build-typescript/review-pack.log`; its compiler/export implementation did not
change during the Dart scope repair.

## Generated binding size

These are raw generated source/declaration bytes, not application or AOT binary sizes.
The comparison starts at `b9bd1776172a2ce3543fd180b27aad1ecdcb4548`; the scope-only
column starts immediately before this shared scope repair.

| Product                  | Files | Before task |     After | Scope-only change |
| ------------------------ | ----: | ----------: | --------: | ----------------: |
| Dart binding source      |     5 |   1,456,631 | 1,457,017 |              +386 |
| TS implementation source |   261 |   1,278,714 | 1,283,715 |                 0 |
| Generated declarations   |   462 |     703,848 |   711,399 |                 0 |
| Binding manifests        |     5 |   4,903,721 | 4,903,721 |                 0 |

The complete task adds 5,001 bytes of generated TS source and 7,551 declaration bytes,
principally generic constructor signatures. Declarations are erased from application
runtime code. Production callback factories remain 4. With identical regression fixtures
on both sides, generated fixture Dart source grows 407 bytes and TS source is unchanged;
callback factories remain 121. The pre-fix fixture source has the confirmed compilation
defect and is used only as a source-size baseline.

Shared runtime code is separate from those generated bindings: the complete task adds
2,116 TS source bytes and 480 runtime declaration bytes. One delivered Core bindings
module grows 2,017 JS bytes; example copies are counted once. The scope-only repair
changes none of these shared runtime files.

## Boundaries

Arbitrary user-authored open TS generics still require explicit authenticated type
tokens. The compiler does not synthesize structural/function/Record type tokens or add
whole-graph runtime inference. TS `number` selects Dart `num`; exact int/double
selection uses existing tokens. Only shared helpers ship; the TS compiler and Vite stay
on the build host.

Release validation used the existing extension-8 Record/AOT artifact through a
task-local engine-source alias because the original default release alias exposed
extension 7 during initial validation. Original engine aliases were preserved. Android,
physical iOS and GC pause distributions were not remeasured in this task.
