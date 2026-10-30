# Active Tasks

Planned: [Output-optional JavaScript development startup](automatic-esm-development.md).
The existing server already transforms imports and serves startup code. The remaining
plan makes factory-HMR file output optional and improves startup error recovery; this
follow-up has not been implemented.

The [optional JSX/TSX task](optional-jsx-support.md) implements default-off syntax,
generated constructor contracts, and direct-call lowering. Build and native parity
checks pass. Basic VS Code and WebStorm attribute completion is verified; the task
records the tested TypeScript versions and remaining editor coverage.

The [native ESM, JSON and Wasm module task](native-esm-and-wasm.md) covers runtime
module graphs, remote imports and Wasm under iOS V8 jitless. The module implementation
and focused runtime acceptance are complete; the task record distinguishes current
integration checks from earlier physical and simulator evidence, and lists the remaining
release limits.

The completed
[iOS V8 jitless acceptance](../../experiments/canvas_engines/migration-ios-results.md)
records the normal static SDK, compatibility, joint GC, final Canvas comparison and
non-iOS regression scope; it does not establish ESM or Wasm support.

Current behavior belongs in [architecture](../architecture/README.md), capability status
in the [binding coverage map](../architecture/binding-coverage-map.md), verification
scope in
[External Binding Verification](../architecture/external-binding-verification.md), and
unsettled product decisions in [Open Questions](../decisions/open-questions.md).

The [iOS Canvas engine comparison](../../experiments/canvas_engines/results.md) records
source-loaded Hermes/V8 jitless startup, frame timing and process memory, including
experimental SDK requirements and verification limits. Its
[GC trace follow-up](../../experiments/canvas_engines/gc-trace-results.md) confirms the
timer-driven joint collection, documents the fix and records simulator retests. The
[fixed-engine device retest](../../experiments/canvas_engines/fixed-ios-results.md)
compares the repaired V8 jitless engine against Hermes on the physical iPhone.

[Direct JavaScript FFI](js-native-ffi-design.md) is implemented as the optional JS-only
`@flax/ffi` package, Core Session integration and shared V8 native backend. The
[current contract](../architecture/ffi.md) and
[acceptance runner](../../packages/flax_ffi/test/runtime/README.md) cover calls,
layouts, callbacks, lifetime and native packaging. All seven variants pass on macOS V8
Debug/Release and iOS simulator V8 jitless Debug. Physical-iOS static process smoke is
separate from full dynamic-asset acceptance; additional-platform FFI remains unverified.

Use the [task template](TEMPLATE.md) only when unfinished work needs a durable handoff.
Keep one concise record with scope, evidence, blockers and next steps. When the work is
complete, move lasting contracts and reproduction instructions to the owning
documentation and delete the task body. Disposable notes and local receipts belong in
`.local/`; never copy private prompts, credentials or conversation transcripts into the
repository.
