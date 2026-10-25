# Active Tasks

No durable implementation task is active. The completed
[iOS V8 jitless acceptance](../../experiments/canvas_engines/migration-ios-results.md)
records the normal static SDK, compatibility, joint GC, final Canvas comparison and
non-iOS regression scope. Native ESM and remote import work remain deferred.

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
