# Collection Views, Context Cleanup and Nested Callbacks

Status: complete and verified on macOS arm64.

## Scope

Fix the three reproduced review defects without changing UI protocol 8, native ABI,
packages, dependencies or application disposal. Collections use typed views of the
original Dart instance. Contexts are swept at existing UI checkpoints. Nested Widget
callbacks reuse independent results and deterministic mount cleanup.

## Evidence

All three correct assertions failed before the fixes: typed List.add rejected an integer
after broad exposure, replaced Sliver Context handles grew from 2 to 9, and nested
builders failed without a mounted owner. Logs and source fingerprints are in ignored
.local/interop-fixes.

The 12 focused Hermes tests pass, including actual weak-view and Dart GC observation,
130-Context batch cleanup, GlobalKey reparenting, shared containers and self-key cycles,
native/Dart callback inputs, cross-session rejection, errors and independent results.
Context handles stabilize at 1 across eight list layout replacements. Eight nested
callback replacements retain 51 handles and 10 subscriptions; local signals do not
rebuild the static sibling. Forty warmed collection reads make forty host calls without
re-registering collection definitions.

## Validation and handoff

Both full commands passed:

- `dart run melos run check`: 18 generator tests, 25 Node tests, Dart analysis,
  generation consistency, formatting, JS type checking/builds, documentation checks and
  CMake configuration.
- `dart run melos run check:ui`: native ABI tests, 28 Hermes runtime tests, standalone
  JIT and relocated AOT loading, 106 framework tests, 4 example tests, macOS integration
  and the release application build (25.3 MB).

The integration driver recorded successful completion despite macOS foregrounding and
integration plugin warnings. This verifies the automated application scenario, not
manual platform testing. Full logs are in `.local/interop-fixes/check.log` and
`.local/interop-fixes/check-ui.log`.

All 319 nonignored source fingerprints were unchanged by the checks. Build outputs
remain ignored. GC tests observed real collection; deterministic mount/session cleanup
does not depend on GC timing. Context sweeping requires existing UI checkpoints and does
not add idle polling. Different declared collection views need not be `===`.

Next: use these shared conversion and ownership paths for further generated APIs; there
is no outstanding repair from this review.

See [interop](../architecture/interop.md), [objects](../architecture/objects.md) and
[UI lifecycle](../architecture/ui.md). Preserve the existing uncommitted work; no
commit, push or publication is part of this task.
