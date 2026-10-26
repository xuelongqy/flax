# Shared Widget batch transport experiment

Status: historical measurements of the shared Widget batch transport, now used by
ordinary Session conversion with the same validation and fallback rules. The production
implementation is `packages/flax/lib/src/ui/widget_batch.dart`; the flags below remain
comparison controls, not application configuration. The preceding startup/bridge work is
archived in local checkpoint `acfb213a` on top of main `a6ea2404b`.

## Mechanism

The shared constructor already owns frozen argument snapshots. Its copied arrays are
marked with a WeakSet. One optional `readWidgetBatch` helper walks only these known
Widget descriptions and arrays. It sends immutable IDs, constructor names, argument
names and graph edges in one metadata string, alongside actual JS values in a borrowed
host call. Callbacks, Dart references, BigInts, negative zero, null and other business
values are never serialized into that string. Shared descriptions retain shared graph
tokens; each conversion still constructs its own expected Dart view.

Dart decodes the metadata only during that callback, then reuses the original parameter
conversion and Widget construction functions. Provider/type checks, default omission,
callback ownership, constructor validation, concrete Widget views and parent-data
behavior remain in those functions. Escaping references use the same retain paths.
Packets never enter a Session cache or become business GC roots. Failures return through
Dart's original exception/stack and release partial results.

The helper falls back for foreign descriptions, missing helpers, non-string metadata and
inherited `toJSON`. Foreign getters keep their ordinary lazy reads. The prototype bounds
one packet to 512 nodes, 4,096 raw values, 4,096 visited entries (including repeated
edges), depth 64 and 262,144 UTF-16 metadata code units; larger inputs retain the
existing conversion path. These are packet bounds, not binding capability limits.
Reentrant conversion of new raw descriptions during an active batch keeps the ordinary
path. LayoutBuilder and other callbacks still return synchronously; their newly created
subtrees can become later batches. There is no attempt to precompute Context or layout
constraints.

No generated class binding, JS application API, UI protocol, native ABI, engine source
or SDK is changed. The runtime implementation adds one private packet decoder and one
host callback; it does not introduce a second collector or native function table. The
baseline's optional combined-result engine remains identical on both sides.

## Complete-gallery release comparison

The comparison uses one application AOT, one private release engine based on Flutter
`bb7e27654b`, and identical JS/module/probe inputs. Only `FLAX_WIDGET_BATCH=0/1`
changes. Five unprofiled processes per path alternate order, plus one separate traced
process per path. Every process creates a first and subsequent Session. All 24 Sessions
retain the same 1,347 Elements, 205 Flax hosts and per-type Element counts.

Values are medians [minimum, maximum], in milliseconds. Traced runs are excluded.

| Metric                                 |         Existing transport |             Widget batches |
| -------------------------------------- | -------------------------: | -------------------------: |
| First Session drawFrame                |    25.149 [24.767, 32.677] |    21.901 [20.798, 24.307] |
| Subsequent Session drawFrame           |    36.562 [33.353, 42.459] |    31.813 [29.772, 32.711] |
| First largest UI frame gap             |    35.284 [32.608, 43.860] |    28.684 [25.881, 35.898] |
| Subsequent largest UI frame gap        |    42.924 [36.346, 48.260] |    34.154 [33.972, 41.174] |
| First request through first frame      | 682.239 [601.050, 967.025] | 646.197 [625.191, 682.823] |
| Subsequent request through first frame | 513.402 [487.835, 995.069] | 511.778 [500.692, 536.119] |

The drawFrame median reductions are 12.9% and 13.0%. The initial three-pair control
median was 32.449 ms; adding two pairs lowers it to 25.149 ms. Retaining all samples
matters: the larger initial improvement is not the final estimate. Frame gaps include OS
scheduling and are not exclusive CPU pauses; their ranges overlap. Request times include
experimental capture/GC setup and deliberate frame waits. These observations establish
neither a universal load-time improvement nor a 16.7 ms frame guarantee.

The traced first frame changes 1,338 helper calls to 969, property reads 1,054 to 667,
owned-result decodes 2,766 to 2,010 and borrowed-input decodes 2,408 to 2,106. It uses
57 batch receptions in that frame, 58 through startup. Remaining synchronous callbacks
and real Dart-object operations retain their normal paths. Batch parsing/preparation
adds about 1.6 ms of exclusive work on the first traced frame and 2.1 ms subsequently.
The traced frame totals are 25.49 to 24.80 ms and 38.05 to 34.43 ms. Do not treat fewer
crossings as an equal percentage reduction in CPU time: packing, decoding and GC or
scheduler variation also contribute.

First-screen RSS medians are 341.17 to 341.78 MiB; subsequent Session medians are 433.77
to 443.67 MiB with overlapping ranges. No stable memory reduction is established. This
same-AOT comparison does not measure binary growth against the checkpoint.

## Correctness and scope

All 408 checks across the 12 release processes pass: the seven-module tour, Context
callbacks, actual State lifecycle, JS subclass/private fields, overrides, lexical super,
exception recovery, roots retained independently from either heap, both weak peers
collected before close, and zero tracked handles after close. Focused acceptance also
passes 133 Dart/compiler/runtime/UI/provider/generic/GC tests and all 90 Core JS tests.
The new probes explicitly require the batch path and cover nested Builders, dynamic
properties, shared children, real references, metadata bounds and foreign
serialization/getter guards. Imported HMR regressions run; actual VM hot reload is not
repeated for this packet variant.

The smaller crossing count and measured frame reduction justify retaining the prototype.
The packet codec and its temporary allocations are a maintenance cost; there is no
per-class generated-code saving to claim. This still leaves synchronous crossings,
parameter/reference handling and Flutter layout inside the first frame. Mobile loading,
full workspace acceptance and a production enablement/cancellation contract remain
outside this experiment. No engine or SDK rebuild, push, CI trigger or new prototype
commit is made.

## Reproduce

Use the existing
[gallery preparation and local-engine build](../gallery_handoff/README.md#reproduce) and
select the same private result-entry engine for both runs. Then alternate:

```sh
FLAX_WIDGET_BATCH=0 FLAX_ENGINE_RESULTS=1 FLAX_HANDOFF_DEFER_GC=0 \
  python3 experiments/gallery_handoff/run.py release factory
FLAX_WIDGET_BATCH=1 FLAX_ENGINE_RESULTS=1 FLAX_HANDOFF_DEFER_GC=0 \
  python3 experiments/gallery_handoff/run.py release factory
```

Keep TMPDIR/TMP/TEMP on this worktree volume. Exact inputs, every process, failed setup
attempts, the fixture loader, matrix and summaries are retained under the directory
named by `.local/latest-widget-batch-evidence`. Timing runs finish before compiler,
analyzer and test processes run. No timing threshold is asserted by the checks.

## Shared constructor, callback and reference follow-up

The additional paths remain inside this experimental worktree. Business JS APIs, Dart
type selection, inheritance, overrides, lexical super, UI protocol 24 and public native
ABI 2 are unchanged. No generated class receives another adapter.

1. Ordinary and proxy construction pass immutable provided arguments in the first host
   call. Both use the existing argument conversion, defaults, validation, callback
   escaping and cleanup. Older hosts/scripts retain their original reader.
2. The private native result table is version 2 and can describe a borrowed receiver and
   its arguments together. The original decoder consumes those descriptions; failed
   preparation and decoding free all string snapshots. Borrowed objects expire when the
   callback returns. Zero-argument calls retain their original receiver read.
3. Callback lookup combines native-function detection with the existing weak memo.
   Wrapper creation can populate that memo in the same helper call. Dart still checks
   function type, provider/session scope and retired adapters before each reuse.
4. Argument conversion combines its binding-tag read and typed identity query. Getter
   order and unsupported Symbol rejection are preserved. Actual Dart type, State,
   Context, disposed-object and generic validation remain in their original paths. The
   redundant provided-name Set copy is also removed.

No business-value cache, strong callback index, additional Widget packet format or
alternative collector is introduced. The experimental selectors are harness controls,
not supported application configuration. The native table is optional and revision/size
checked; installed engines remain usable on the original path.

### Controlled release comparison

One AOT application, engine and set of JS/probe inputs serve all 24 processes / 48
Sessions. Control and combined each have five unprofiled processes; each individual path
has two exploratory processes. A separate trace per path is excluded from timing
medians. Order alternates. All 816 top-level checks pass, retaining exactly 1,347
Elements, 205 Flax hosts and matching per-type counts for each Session position.

| Metric                          |      Original shared paths |        Four paths combined |
| ------------------------------- | -------------------------: | -------------------------: |
| First Session drawFrame         | 23.357 [23.073, 24.243] ms | 21.199 [21.082, 45.272] ms |
| Subsequent Session drawFrame    | 30.666 [29.728, 31.004] ms | 26.045 [25.877, 28.524] ms |
| First largest UI frame gap      | 60.764 [56.642, 62.485] ms | 57.994 [54.683, 65.689] ms |
| Subsequent largest UI frame gap | 47.235 [46.273, 47.639] ms | 42.580 [42.457, 45.082] ms |

The drawFrame median reductions are 9.2% and 15.1%. The 45.272 ms combined first-frame
sample is retained. Neither a universal speedup nor a 16.7 ms frame guarantee is
established. A lower drawFrame time is not identical to a lower total load time.
Unprofiled request-through-frame medians are 741.724 to 730.190 ms initially and 576.925
to 591.255 ms subsequently; these still include experimental setup/GC capture and
deliberate frame waits. Other machine activity is captured with every process; no
competing build or test from this experiment ran during the matrix.

The first traced frame changes helper calls 969 to 773, property reads 667 to 100, and
result decodes 2,010 to 1,247. All 2,106 borrowed values still receive conversion. A
result decode can be primitive; this count is not a count of owned object handles.
Native input preparation moves before the decoder span, so its exclusive decoder time
must not be interpreted as the complete preparation cost. Whole-call measurements below
retain that cost.

An independent AOT probe uses three processes, 180 alternating timed batches and 1.8
million host calls, after warm-up. Each checksum is checked. Values include actual
objects/functions, strings, BigInt and primitives; the two paths share one runtime and
binary. Values are median microseconds per JS-to-Dart host call:

| Arguments | Original inspection | Shared input inspection |
| --------- | ------------------: | ----------------------: |
| 0         |              1.0386 |                  1.0318 |
| 1         |              1.2786 |                  1.2068 |
| 3         |              2.6039 |                  2.2507 |
| 5         |              3.4525 |                  2.8571 |
| 10        |              5.6274 |                  4.4398 |

The 3/5/10-argument reductions are about 13.6%/17.2%/21.1%. An earlier zero-argument
trial was slightly slower; it is not adopted. The final zero-argument selection keeps
one ordinary receiver inspect. These small-call savings are not whole-frame savings;
individual gallery paths do not all establish a stable frame-time improvement.

### Memory, correctness and limits

Unforced first-frame RSS medians are 338.11 to 338.00 MiB. The subsequent medians are
379.95 to 434.09 MiB with overlapping ranges; this is not a memory-saving claim. A
separate diagnostic AOT, with unchanged runtime sources, runs eight successive Sessions
per path and collects both heaps after closing each Session. Its 16 Sessions pass all
248 checks. Before close both JS and Dart State peers collect; close leaves zero tracked
handles. Diagnostic live counts remain exactly one cell and one callback, belonging to
the intentionally retained probe, in every cycle. Post-collection RSS is 328.19–342.91
MiB for control and 333.69–349.05 MiB combined, with similar 14–15 MiB warming growth.
These observations do not show added bridge-root accumulation; they also do not certify
unbounded steady-state memory. Diagnostic GC runs after close and is excluded from
performance acceptance, not installed as a production policy.

Focused acceptance passes 241 Dart/compiler/runtime/UI/provider/collection/GC tests, 93
Core JS tests and five complete-gallery tests. Both official runtime entrypoints pass 45
tests on the installed fallback engine. Actual VM hot reload passes three reloads / four
versions / 44 checks with the same State/runtime, fixed defaults, generic constructors,
overrides, super and an unrooted cycle collected before close. Fresh Core JS HMR
fixtures and older WebSocket delivery also pass. Native input tests cover UTF-16,
BigInt, immutable argument lists, retained versus expired borrowed objects, reentry,
Symbols, decoder failures and unconsumed-buffer cleanup.

The final synchronous frame still contains JS/Dart boundary work and Flutter
build/layout/paint; no class lifetime or synchronous Builder/LayoutBuilder contract is
changed to reduce the timing. Android/iOS and full workspace acceptance are not claimed.
No new commit, push, CI trigger, maintained-engine edit or SDK rebuild is made.

Exact matrices, all slow/failed setup samples, input hashes, the private engine build
receipts, fixture loaders and validation logs are under the directory named by
`.local/latest-bridge-next-evidence`. The pre-follow-up work is locally archived at
`acfb213ad`; subsequent changes are retained in the local experimental checkpoint.

To reproduce the combined transport, use the existing preparation and private local
engine build, then select version 2 of the private result engine. Launch with:

```sh
FLAX_ENGINE_RESULTS=1 FLAX_WIDGET_BATCH=1 FLAX_OBJECT_ARGUMENTS=1 \
  FLAX_ENGINE_ARGUMENTS=1 FLAX_CALLBACK_MEMO=1 FLAX_ARGUMENT_REFERENCES=1 \
  FLAX_HANDOFF_DEFER_GC=0 python3 experiments/gallery_handoff/run.py release factory
```

Set the last four transport flags to `0` for the control while keeping Widget batches
and result entries enabled. `FLAX_ENGINE_ARGUMENTS_PROBE=1` runs the independent
host-call probe. `FLAX_GALLERY_MEMORY=1` selects the separate eight-Session diagnostic;
its results must not be pooled into the timing matrix. Keep all temporary data on this
worktree volume. No time assertion is added to ordinary tests.
