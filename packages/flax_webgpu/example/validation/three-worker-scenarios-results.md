# Three.js Worker scenarios — macOS Release

The real Release/AOT application passed on Apple M2 Max, macOS 27.0.1, using Three.js
0.186.1 and the maintained Flutter 3.47.6 fenced engine
`60D3782D-B472-3403-8658-DE43FAB6B40A`. No Core, native engine or upstream Three.js
implementation changed in this follow-up. No commit, push or publication was performed.

The [raw receipt](three-worker-scenarios-macos.json) includes the fresh preceding
baseline, source and fixture SHA-256 inputs, every measurement and the full application
result. Source was verified against the immutable runtime snapshot before and after the
successful run. Final independent review includes the documentation and raw receipts
too.

## Actual acceptance

The preceding application passed 90 records and 360 frames before edits. The expanded
application passed 120 records and 360 frames, including three new scenario runs with
135 assertions each. These are application assertions, not unit tests. The new scenarios
complete 303 successful decoder calls: 243 in real Workers and 60 single-thread control
calls. Eighteen corrupt decoder calls reject. Existing DRACO, KTX2, animation, export,
lighting, shadows, postprocessing, Canvas coexistence and GPU-only acceptance still run.

| Case                   | Input and result                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Meshopt Workers        | Original 65,536-vertex stream, 251,983 compressed bytes and 2,097,152 output bytes/task. All bytes equal the original float data. `useWorkers(1/2)` dispatches original upstream messages and receives replies on every requested real Worker; the main-thread control is counted separately. Both attribute and triangle corruption reject in Workers.                        |
| Complex KTX2           | Original 256×256 RGBA quadrants with alpha 128/255/255/64, nine mips, ETC1S, UASTC and UASTC with Zstd. Each branch completes eight timed tasks on two Workers, rejects a corrupt compressed resource and successfully decodes a fresh resource afterward. Every reused mip byte matches.                                                                                      |
| GPU texture checks     | ETC1S blended quadrant samples have a maximum channel error of 2 against the original PNG; UASTC variants are exact. Three.js TSL explicitly samples mip 8 of the original texture, including its alpha; terminal-mip blending has a maximum channel error of 1 against the PNG mip. Raw and Zstd UASTC output mip bytes are identical.                                        |
| Combined assets        | Original four-vertex glTF and embedded GLB combine required Meshopt geometry, `KHR_texture_basisu`, nine-mip Zstd UASTC, alpha blending and translation animation. Both load through unchanged GLTFLoader, match PNG-reference samples exactly at rest and pose, change 3,552 actual GPU pixels, and restore the original rendered pose.                                       |
| Failure and retirement | Two DRACO Workers complete four queued tasks and reject corruption. Pools return native channel/runtime counts to `[0,0]` after disposal. Each of three Sessions deliberately retains two working Meshopt Workers until Session close; counts change from `[2,2]` to `[0,0]`. All six GPU resource counters also return to zero. No uncaptured WebGPU validation error occurs. |

Compressed GPU upload used BC support on this device. Other device compression targets
were not validated. Fixture encoder/decoder provenance is in the
[fixture guide](../fixtures/three/README.md) and `ktx2-fixtures.json`. The checked-in
builders generate the fixtures; no model or texture was downloaded.

## Matched measurements

Each Session runs worker counts `0,1,2,2,1,0`, yielding six observations per count over
three Sessions. Each new pool first completes two identical tasks, then completes eight
fresh-buffer tasks on the reused pool. Equality checks run outside measurement. The main
decoder module is already warm; “cold” includes pool creation and Worker Wasm startup,
not a new main runtime. Library serialization/copies remain unchanged.

The heartbeat records only timestamps/counters. Every batch also has a separate 30 ms
post-completion observation to include delayed host/GC follow-ups. `completedMs` stops
when all decode Promises settle; `observedMs` includes the actual observation duration.
Neither output validation nor an artificial fixed-duration workload is included in
decode time. RSS and native counts are read at boundaries, outside the heartbeat.

| Meshopt Workers | Cold 2-task median | Reused 8-task median |   Reused range | Median gap during work | Median gap including observation |
| --------------- | -----------------: | -------------------: | -------------: | ---------------------: | -------------------------------: |
| 0               |            2.54 ms |              6.22 ms |   5.99–6.62 ms |                6.23 ms |                         26.92 ms |
| 1               |           35.04 ms |             33.31 ms | 31.39–40.21 ms |               25.93 ms |                         25.96 ms |
| 2               |           35.54 ms |              6.78 ms |   6.56–8.27 ms |                6.67 ms |                         26.96 ms |

Main timers make no progress during the single-thread batches, and make progress during
every Worker batch. The requested 1 ms timer is a responsiveness probe, not input
latency or a frame-rate measurement. The final completion and observation gaps are
included. Two Workers complete work sooner than one here, but do not eliminate the
main-thread stall seen after completion. The three modes' full-window median gaps are
all about 26–27 ms. The two-Worker median also does not beat the single-thread
completion median. No worker-count default or general speedup claim follows from these
observations.

Reused-batch observed-time medians are 44.97, 64.37 and 38.42 ms for 0/1/2 Workers;
these include the requested 30 ms window and its scheduling delay. Earlier measurements
which stopped the observer at decode completion are superseded. Delayed GC is a
plausible contributor based on earlier investigations; this run does not contain a new
GC causality trace and does not prove that diagnosis.

Four-task KTX2 cold/reused medians are 89.58/1.39 ms (ETC1S), 93.71/2.24 ms (UASTC), and
97.84/2.39 ms (UASTC+Zstd). Keeping an initialized loader avoids repeating startup;
these numbers do not establish a new Flax optimization. Combined asset load times are
not a glTF-versus-GLB comparison: GLB runs after glTF on the same initialized pools.
Fetch and rendering are outside the decoder-only batches.

Process RSS after the three GPU Session closes was 370.75, 404.16 and 407.28 MiB; the
process high-water mark was 479.84 MiB. These include the entire pre-existing GPU and
Canvas workload and ordinary GC. They are neither per-decoder memory costs nor evidence
of a bounded steady state. Zero native counts establish retirement, not a general
absence-of-leaks claim. Sustained memory and scheduling-tail investigation remain open.

## Optimization decision

The existing local-Blob source path was examined as a possible optimization. A
[separate Node VM microbenchmark](three-worker-blob-source-node.json), with the actual
64,541-byte DRACO and 68,718-byte KTX2 Worker bodies, measured `fetch(blob).text()`
versus direct `Blob.text()` with 160 samples/method. Median savings were about 0.07 ms;
tail results were not consistently better. This is not native Worker startup evidence,
and is too small relative to the preceding baseline's 39–81 ms small-fixture cold
decodes to justify another loading path. Core remains unchanged. Upstream source, Wasm
and input copies were also retained; this work does not claim their removal as a Flax
gain.

## Reproduce and checks

Use the matching maintained Flutter 3.47.6 framework and fenced Release engine, the
pinned Dawn SDK and Node 22.23.0. Keep temporaries on the workspace volume:

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
python3 packages/flax_webgpu/tool/run_macos.py \
  --flutter-root /path/to/matching/flutter \
  --sdk "$PWD/.local/webgpu-dawn/sdk" --mode release
```

After a verified full build, `--refresh-js` checks the staged Dart/Swift inputs and
engine UUID before reusing the application. The successful refresh build/run took 46.70
seconds. Expected decoder errors are intentionally logged; the application must still
report `passed: true` and pass its GPU validation-error check.

The scoped checks passed: Core JS 135, Canvas JS 35, WebGPU JS 6, example JS 2 (178
tests total); TypeScript profiles for all four packages; staged Dart analysis; syntax,
formatting and documentation checks. No new mock unit test duplicates the real
decoder/GPU assertions. The matching native regression gate is reproducible with:

```sh
export PATH="/path/to/matching/flutter/bin:$PATH"
dart run melos run check:runtime
```

Fresh runtime/Worker/host/Canvas regression receipts and independent review belong to
the final delivery acceptance package. This report does not substitute these commands
for unrecorded passing results. Mobile platforms, full browser conformance, large
production models and sustained-memory acceptance remain untested.
