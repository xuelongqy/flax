# flax_test

Shared development-only test support for Flax packages and runtime engines. It exposes
engine-neutral runtime contracts, fixture loading, runtime counters, and small Flutter
harnesses. Feature-specific servers and fixtures stay with the package that owns them.

Owned runtime facades are indexed by weak slots. Explicit release removes its slot in
constant time, while abandoned slots are pruned in batches and before diagnostics.
Retained aliases remain independent. Handle counts still include every live unreleased
owned facade; the index never roots a facade or its business object. Optional scalar
timing spans measure test instrumentation separately from production bridge work. Bridge
spans separate function calls, property reads, retains and releases; nested native
decoding spans in the startup experiment further split result/input conversion. Use
exclusive durations to avoid counting nested work twice; a function-call span includes
marshaling and native execution, not just JS CPU time.

With a VM service, Dart GC checks use the maintained VM's `_collectAllGarbage` request.
It invokes the same full collector as `getAllocationProfile(gc: true)` without fetching
per-class allocation statistics. Compaction checks keep `_getHeapMap` with
`mark-compact`. Service errors fail the check. When no VM service is available,
including release builds, checks keep the existing bounded allocation pressure.
