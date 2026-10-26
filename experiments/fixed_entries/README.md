# Fixed entries in cached dependency libraries

Status: the repair is incorporated into the maintained Flutter fork's revision-checked
Dart patch and ordinary `build_engine.py` flow. The private build commands below are
historical reproductions; current applications and tests use the ordinary local engine.

This experiment repairs missing `_flaxFixed` procedures during mixed-file Flutter tests.
It was first verified on the maintained Dart patch at Flutter fork revision
`7073a17018976155fa123c5c9c627776e776dbeb`; that compiler source is unchanged at the
current `bb7e27654` baseline. All compiler copies and outputs stay in the experimental
Flax workspace; installed SDKs and engine binaries are reused read-only.

## Cause and shared repair

The first test loads Flutter libraries without requiring generated fixed entries. A
later test creates those entries in an already loaded dependency library. The fixed call
transform updated the in-memory library but did not invalidate its serialized package
cache. The frontend emitted the old bytes, leaving calls to absent procedures. For
`widgets/basic.dart`, a compiler trace found 28 fixed entries before serialization and
zero in the final cache. The original compiler reproduces this with just the priming
test followed by the call test.

`compiler.patch` changes three shared compiler files. The transform reports changed
libraries through `ChangedStructureNotifier`; the incremental compiler invalidates their
serialized package groups and includes them in its output. Both top-level helpers and
class member entries use this path, including the shared mask validator. Unchanged
libraries keep their cache. No generated class, default layout, JS API or runtime GC
rule changes.

The source-level reproduction then retains all 28 entries and executes successfully. The
private SDK frontend is checked separately: debug and release snapshots use their own
recorded SDK build commands, VM configuration and `dartaotruntime` startup check.
Flutter reads `dart-sdk/bin/snapshots/frontend_server_aot.dart.snapshot`; replacing only
the similarly named top-level output does not select a new Flutter compiler. Directory
spines are private, so snapshot replacement cannot write through an installed SDK link.
Existing Flutter artifact hashing separates the new test/build cache from the old one.

## Reproduce

Run from this worktree, with the maintained Flutter fork and its existing host builds:

```sh
export FLUTTER_ROOT=/Volumes/MAC_HOME/Develop/Flutter/flutter
export PATH="$FLUTTER_ROOT/bin:$PATH"
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
python3 experiments/fixed_entries/build.py
flutter --local-engine-src-path="$PWD/.local/fixed-entry/engine/src" \
  --local-engine=flax_mac_debug_arm64 --local-engine-host=flax_mac_debug_arm64 \
  test --concurrency=1 --no-pub --dart-define=FLAX_FIXED_ENTRIES_CACHE=repro \
  experiments/fixed_entries/prime_test.dart experiments/fixed_entries/calls_test.dart
```

Repeat the test command unchanged to exercise the warm cache. The regression compares
fixed calls with ordinary Dart behavior, including override defaults, lexical super,
nested generics, static/top-level calls and private collection/callback defaults. The
initial override expectation incorrectly used the base default; it was corrected to
compare against the actual Dart call. Existing UI and GC assertions are unchanged.

## Evidence and boundary

Raw traces, before/after serialized-entry inventories, commands, compiler hashes and
failed setup attempts are retained in `.local/fixed-entry/`. The first private-layout
trial replaced the wrong snapshot path and reused a repaired cache; that trial is not
counted as private-compiler acceptance. A debug snapshot was also rejected by the
product runtime before the mode-specific SDK build was selected.

The existing JIT and AOT contract suites each pass 43 checks plus two expected
compilation rejections through the corrected private artifacts. Release gallery
recompilation produces the same application AOT bytes as the preceding
[combined-result experiment](../gallery_handoff/README.md#combined-engine-result-entries).
Mixed-file acceptance runs five entries in sequence: priming, cached calls, runtime,
focused UI/GC regressions and handle tracking. Cold original results, cold combined
results and warm combined results each pass 102/102 tests (306 total). The verbose
cold-control log confirms Flutter starts the private SDK snapshot; compiler hashes and
commands are retained in `final-tests.json`. All original 14 failing UI tests pass. The
two fixtures reuse this workspace's Flutter test dependencies, so their dependency lint
suppression is confined to these experimental files.

The subsequent release recheck passes 123/123 value/exception/ownership assertions in
three processes and 204/204 full-gallery checks across six processes / 12 Sessions.
Gallery checks preserve LayoutBuilder, JS subclass/private-field behavior, overrides,
lexical super, roots from either heap, both weak peers collected before close and zero
tracked handles on close. Preparation hashes match the preceding experiment. The first
gallery attempt found a previously cleaned preparation file missing; it was regenerated
with the existing preparation command before recording successful comparison samples.

| Release call median          |  Original |  Combined |
| ---------------------------- | --------: | --------: |
| Number result                |  1.411 us |  1.208 us |
| String result                |  2.483 us |  2.217 us |
| First Session drawFrame      | 25.029 ms | 25.219 ms |
| Subsequent Session drawFrame | 32.826 ms | 32.369 ms |

Small-call medians use 18 alternating batches per path (10,000 operations per batch).
The numeric/string reductions are 14.4%/10.7%. Frame medians use only three processes
per path: first-Session ranges overlap at 24.681–27.277 / 24.607–25.225 ms, and
subsequent ranges at 30.932–33.048 / 30.045–32.425 ms. This recheck does not establish a
stable whole-frame improvement or a 16.7 ms frame. Do not pool it with earlier timings
or attribute the batch's lower absolute times to the compiler repair: the app AOT bytes
are identical. Process inventories and RSS/frame-gap ranges are retained in
`gallery-summary.json`; this is a local comparison, not an isolated device benchmark.

## Review and actual hot reload

`check_hot_reload.dart` runs a real macOS debug application through
`flutter run --machine` and requests three `app.restart` operations with
`fullRestart: false`. It changes a function body, its default value, and then adds a
named optional parameter. The caller retains its original parameter layout. Results are
14, 24, 34 and 134. The original and combined result paths each pass all 44 checks over
four revisions; the same State identity, runtime and cached native function pointers
survive all three reloads. Generic constructors, private collection defaults, virtual
overrides and lexical super remain valid. LayoutBuilder calls the fixed entry and native
string-result decoder during layout.

The application retains a real Dart/JS cycle across the reloads. A JS root alone and
then a Dart root alone each keep both peers callable, including JS inheritance, private
fields and super. Removing both roots collects both weak peers before runtime close:
callback count returns to zero and bridge cells return to the two cached application
facades. The existing real Vite/WebSocket suite also passes 3/3, including
rejected-update recovery and mounted State preservation. This does not validate hot
reload while a background worker owns the heap.

Review found that a throwing diagnostic start hook could bypass decoder cleanup. Moving
it inside the existing cleanup region frees any prepared string buffer and unclaimed
owned result even when tracing fails. Four focused tests cover calls and properties on
both result paths; they fail before the repair and pass afterward, using actual JS weak
collection without closing the runtime or releasing the failed result. The repair adds
no new GC ownership rule or per-class code.

The final cold-cache mixed-file run passes 109/109 tests: two compiler-cache fixtures,
31 runtime contracts, 67 UI/proxy/generic/GC regressions, two tracker checks, four
diagnostic cleanup checks and three actual Vite/HMR cases. Scoped analysis, Dart
formatting, Markdown lint and local-link checks also pass. The review does not add a new
performance claim or repeat the earlier release measurements.

Run the reload driver with `FLUTTER_ENGINE` set to the private engine source directory;
add `--control` for the original result path. Prepare the private result-entry native
framework first. Flutter macOS application builds select
`FlutterMacOS.xcframework/macos-arm64/FlutterMacOS.framework`, so that private artifact
must point to the reviewed framework too; replacing only the adjacent `.framework` does
not select it. Both the private tester and application contain the result entries; their
GC objects match each recorded baseline. These artifact-selection mistakes, an initially
incomplete Vite fixture, and startup-driver failures remain recorded in
`.local/review-hmr/`; none count as acceptance. The driver restores its temporary
source/entitlement edits and stops its application on completion or failure.

The experimental branch is rebased onto Flax main `a9c1ae88b`, with Flutter fork
`bb7e27654`. Current policy is V8 JIT on macOS/Android and V8 jitless on iOS; Hermes
maintenance has ended. The private debug runtime and joint-GC objects are rebuilt from
that source for the post-rebase checks. Original installed macOS engine hashes remain
unchanged. Measurements earlier in this document retain their original baseline.

Post-rebase acceptance repeats 109/109 mixed-file tests and three real optimized-path
reloads / 44 checks with the updated V8 idle-GC object. The initial GC verification now
waits for `app.started` and a standard `ext.flutter.reassemble` request; a first frame
can otherwise finish while Flutter is still attaching its VM service. This is a test
driver synchronization change, not a runtime delay or retry. Post-rebase receipts are in
`.local/review-hmr/sync-main/`; earlier control-path receipts remain in `pre-main/`.

The repaired compiler remains an experimental patch, not an installed toolchain update.
Mobile engines were not exercised here. No commit, push or SDK publication is made.
