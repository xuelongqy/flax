# Worker and WebGPU performance

Status: performance and functional validation passed; uncommitted. No push or
publication. The
[machine receipt](../../packages/flax_webgpu/example/validation/worker-performance-macos-arm64.json)
contains key per-process measurements, artifact hashes and validation counts.

## Retained adjustment

Only omitted, `undefined` or `null` descriptors for `createCommandEncoder`,
`GPUTexture.createView` and `GPUCommandEncoder.finish` use Dawn's existing nullable
path. This avoids conversion, Arena allocation and native initializer calls. Explicit
objects, getters, Proxies, invalid non-null inputs and other methods retain their path.

Texture views also use Dawn's native default-view fast path/cache. Every owned reference
keeps its existing finalizer; JS wrappers retain separate identity and public labels.
Native cached-view debug labels may be shared or defaulted from the texture. Their
implementation-defined error strings are not equated. Warmed views, actual submission
after destruction, device loss and retirement were checked against Edge/native behavior.
No GC delay, accounting bypass, message batching or mapping/pool exception was retained.

## Matched measurements

The new baseline is Flax `d954085ff34814cab21d8991b6b590bec9e182eb`, Flutter
`439033d726d47670b7228864298cce3e9ddbd4c9`, Flutter 3.47.9/Dart 3.13.7, on macOS arm64
Apple M2 Max. Task base remains `fc28581`; the intervening conditional GC change is a
separate integration.

Quiet and detailed matrices independently run A → B → B → A: two fresh processes per
variant, 31 accepted warmup frames and eight seconds at 960×540, 640×360 and 960×540.
Engine, Dawn binary, shader and application workload JS match. Readback follows
measurement; native metrics/GPU timestamps are disabled during CPU comparisons. The
table averages four 960×540 phase quantiles per variant, without pooling percentiles.
Times are ms.

| Measurement           | Control | Candidate | Decrease |
| --------------------- | ------: | --------: | -------: |
| Quiet API P50         |  0.9715 |   0.83425 |    14.1% |
| Quiet API P95         |  1.8800 |   1.58575 |    15.7% |
| Detailed encoding P95 | 1.16175 |   0.89050 |    23.3% |

Submit P95 ranges overlap (0.343–0.378 versus 0.339–0.354); its small difference is not
an additional strong claim. Quiet completion P95 improves from 3.541–3.572 to
3.273–3.360. Callback tails show no material regression. Quiet peak RSS is 340.6/342.1
MiB before and 338.4/340.2 MiB afterward.

All new rounds measure approximately **60 FPS**, at matching 1100×668 viewport, DPR 1
and 1920×1080 display. Pre-GC 120 FPS observations are separate; the cap change cause is
unverified. CPU includes backend work; savings are not an FPS/uncapped-throughput claim.
AC and no recorded thermal warning were observed. No builds/tests/snapshot hashing
overlap samples; ordinary desktop services, including Spotlight, remain active.

## Worker result and attribution

The pre-GC `fc28581`/`c4a1dad` diagnostic aligns V8/Dart GC, native messaging, parent
ports, checkpoints and Flutter timing. Serialization/deserialization maxima are
0.105/0.161 ms. One Worker's last reply waits behind requested Dart/joint collection;
two Workers can finish before that pass, which remains in the extra observation window.
Reused Worker callbacks include flags 64, not uniformly flags 40. These callback bits do
not uniquely identify an idle or allocation-pressure trigger. This does not support a
payload-copy fix or widening the eight-millisecond GC window.

Fresh new-engine controls keep the original fixture/order and 30 ms post-completion
window. Six batches per Worker count have these medians, in ms:

| Workers | Cold two tasks | Reused eight tasks | Full-window gap |
| ------- | -------------: | -----------------: | --------------: |
| 0       |          2.463 |              6.254 |          26.986 |
| 1       |         34.031 |             30.562 |          24.889 |
| 2       |         36.546 |              6.736 |          24.976 |

The separate GC optimization skips the first joint trace only while a concurrent Dart
mark is active. This task did not instrument the new pause path; remaining gaps neither
certify its cause nor invalidate other GC benefits. Added CTS/assertion work in final
functional fixtures is not a matched Worker performance comparison.

## Browser endpoints and bounded compatibility

Fresh Edge 156.0.4314.58 uses identical scenes/resolutions. At 960×540, retained Flax
API P50/P95 is 0.817–0.881/1.468–1.511 ms; Edge is 0.045–0.140/0.180–0.190. Completion
P95 is 3.158–3.202 versus 2.795–2.930. Separate GPU P50/P95 is the same quantized
0.32768 ms; no GPU speedup is inferred. Browser presentation feedback joins 448 marks,
none unmatched, with phase P95 24.795/24.622/23.991 ms. It cannot be subtracted from
Flax GPU completion to claim physical display latency.

Full descriptor observation retains 21 pre-existing differences over three Sessions: 18
explicit-dictionary failures with getter-only `Object.prototype.label`, and three
texture-view Proxy member-order differences. The candidate leaves those paths unchanged;
full WebIDL/CTS conformance remains open.

## Validation and provenance

WebGPU/example typechecks pass, as do six WebGPU and two example JS tests. All 59
runtime contracts pass through the same `check_runtime.dart` entrypoint; the Melos
wrapper stopped in Pub setup with the test engine alias before executing tests.

Normal benchmark-OFF native acceptance passes 12 Sessions/1,440 frames, 552 new semantic
assertions and 1,620 Worker assertions. CTS passes 468 and skips 36 per Session: 5,616
passes/432 skips. Skips identify the non-native Float16Array polyfill. Runtime reports
CTS version `unknown`; the pinned revision and archive SHA-256 are recorded separately.
All six GPU/two Worker counters are zero after 13 retirements, including Core-only. RSS
after one-second idle rises from 425.4 to 530.6 MiB, last five 522.0–530.6, peak 704.5
MiB. These finite CTS-heavy observations use no forced GC and establish no leak bound.

Validation uses read-only `flax_mac_joint_gc_candidate_{debug,release}_arm64` builds via
explicit local-engine flags/test aliases. Canonical engines were not upgraded.
Frameworks, libraries and frozen API app inventories remain unchanged. Temporary
diagnostic sources were restored while preserving the integrated GC patch and existing
vendor changes; old header reconstruction is not a final runtime. Other platforms, full
conformance and physical display latency are untested.

Raw/immutable evidence and independent verdict are outside the repository under
`/Volumes/MAC_HOME/CodexHome/review-evidence/webgpu-worker-perf-20261101-153807/`.
Review the uncommitted frontend, focused acceptance additions and linked receipt.
