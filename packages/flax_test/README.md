# flax_test

Shared development-only test support for Flax packages and runtime engines. It exposes
engine-neutral runtime contracts, fixture loading, runtime counters, and small Flutter
harnesses. Feature-specific servers and fixtures stay with the package that owns them.

With a VM service, Dart GC checks use the maintained VM's `_collectAllGarbage` request.
It invokes the same full collector as `getAllocationProfile(gc: true)` without fetching
per-class allocation statistics. Compaction checks keep `_getHeapMap` with
`mark-compact`. Service errors fail the check. When no VM service is available,
including release builds, checks keep the existing bounded allocation pressure.
