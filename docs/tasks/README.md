# Active Tasks

No durable implementation task is active. Current behavior belongs in
[architecture](../architecture/README.md), capability status in the
[binding coverage map](../architecture/binding-coverage-map.md), verification scope in
[External Binding Verification](../architecture/external-binding-verification.md), and
unsettled product decisions in [Open Questions](../decisions/open-questions.md).

[Direct JavaScript FFI](js-native-ffi-design.md) is implemented as the optional JS-only
`@flax/ffi` package, Core Session integration and shared V8/Hermes native backend. The
[current contract](../architecture/ffi.md) and
[acceptance runner](../../packages/flax_ffi/test/runtime/README.md) cover calls,
layouts, callbacks, lifetime and native packaging. macOS V8 debug/release and iOS
Simulator Hermes pass; physical iOS and additional platform acceptance remain
unverified.

Use the [task template](TEMPLATE.md) only when unfinished work needs a durable handoff.
Keep one concise record with scope, evidence, blockers and next steps. When the work is
complete, move lasting contracts and reproduction instructions to the owning
documentation and delete the task body. Disposable notes and local receipts belong in
`.local/`; never copy private prompts, credentials or conversation transcripts into the
repository.
