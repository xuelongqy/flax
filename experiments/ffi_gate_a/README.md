# Gate A: direct JavaScript to C/C++

This experiment uses the existing maintained-engine C ABI 2 to test one common native
call path on V8 and Hermes. It does not implement the proposed production module ABI,
code generation, memory views, native callback arguments or asynchronous work.

## Execution path

```text
Dart creates/evaluates a runtime through the checked ABI 2 function table
  -> JS calls an engine-owned JSI host function
  -> bridge.cpp receives native value IDs and validates/converts them in C++
  -> provider.c executes a correctly typed C function
  -> bridge.cpp creates the result through the native ABI
  -> JS receives the result
```

The native fixture decorates the runtime table's create/destroy operations to install
five C++ callbacks and retain their context until after engine destruction. It does not
modify the maintained engine or production Flax APIs. Both targets compile the same
`bridge.cpp`, `provider.c` and Dart/JS probe.

`register_host` is also decorated to count invocations of Dart callbacks installed by
this probe. A real `NativeCallable.isolateLocal` positive control must increment both
the native trampoline count and the Dart-side count. The subsequent native workload must
increment only the direct native count. These counters cover this isolated fixture's
registrations; they are not global instrumentation of every Dart VM entry.

## Reproduce

Use the maintained Flutter SDK and already built `flax_mac_debug_arm64`,
`flax_ios_debug_sim_arm64`, plus matching macOS host tools. Choose an existing booted
arm64 iOS simulator. From the worktree root:

```sh
export TMPDIR=/path/on/development-volume/flax/.local/tmp
export TMP="$TMPDIR" TEMP="$TMPDIR"
mkdir -p "$TMPDIR"
python3 experiments/ffi_gate_a/run.py \
  --flutter-root /path/to/maintained/flutter \
  --scratch-root "$TMPDIR" \
  --simulator <booted-simulator-uuid>
```

`--engine v8` runs only macOS and does not require a simulator. `--engine hermes` runs
only the simulator. The script uses offline Pub resolution with cached Flutter and FFI
dependencies; it never invokes a binding generator or an engine build.

The runner creates a disposable Flutter application, adds the two native sources to its
Runner targets, and copies the existing canonical ABI header and generated Dart
declarations without changing them. The copied `NativeCalls` implementation is also
unchanged. The app accesses ABI 2 directly; it deliberately does not require a current
UI protocol or generated binding extension. It checks the engine namespace in actual
native value IDs: V8 is 2 and Hermes is 1.

Logs, engine input hashes, source hashes and results go to `.local/ffi-gate-a/` in this
worktree. Temporary applications/build products are removed, and the simulator app is
terminated and uninstalled. Maintained engine/SDK outputs are preserved.

## Assertions

1. Integer bounds and widened sums, floating-point results, NaN and negative zero.
2. Rejection of fractional/out-of-range/string inputs and incorrect arity; subsequent
   valid calls still work.
3. A C-allocated opaque counter, aliasing, forged-owner rejection, idempotent close and
   rejection after close.
4. 10,000 integer calls plus 10,000 double calls with an exact checksum and zero
   additional Dart callback invocations.
5. Two live runtimes: closing one cleans its remaining native counter and preserves the
   other; final create/destroy counts balance and native runtime state reaches zero.

## Results

Gate A passed on macOS arm64 V8 debug and iOS arm64 simulator Hermes debug. Both used
the same fixture sources and returned these results:

| Observation                                             | V8         | Hermes     |
| ------------------------------------------------------- | ---------- | ---------- |
| JS assertions and loop iterations                       | 14; 10,000 | 14; 10,000 |
| Native host-function entries, including rejected inputs | 20,019     | 20,019     |
| Additional Dart callback entries                        | 0          | 0          |
| Dart positive-control entries                           | 1          | 1          |
| C counter create/free; remaining runtime states         | 3 / 3; 0   | 3 / 3; 0   |

Each engine executed 10,003 C integer calls and 10,003 C double calls. The checksum was
75,005,000 on both. The packaged engine's Mach-O UUID matched the selected local engine
for each target. See the compact [result receipt](results.json); full logs and selected
engine build arguments remain under `.local/ffi-gate-a/`.

The probe uses `dart:ui` without Widget imports. The current Flutter framework's
`FlaxFontCollection` additions do not exist in the available older Hermes platform
kernel. Avoiding unrelated Widget compilation allows this ABI-only experiment to use
that engine without changing the framework or rebuilding it. This is not acceptance of
the current full Flutter/Flax UI on that Hermes build.

## Limits

The counter's JS identity is retained by a native value ID until runtime destruction.
Explicit close frees the C allocation, but the identity tombstone is not weak. This is a
bounded Gate A shortcut, not a GC ownership implementation. Gate B must address weak
ownership, more aliases, release races and allocation-failure injection.

The prototype uses native value-ID conversions rather than the proposed typed JSI
frontend. It establishes a shared direct-call mechanism, not a performance improvement
or a finalized provider registration interface. The target library is linked into the
temporary Runner; loading a separate provider binary remains unverified.

Only ABI 2 is exercised. Newer binding extensions, Session lifecycle, joint-GC stress,
iOS physical-device release/AOT, Android, native callback arguments, background workers
and distribution signing are outside this experiment.
