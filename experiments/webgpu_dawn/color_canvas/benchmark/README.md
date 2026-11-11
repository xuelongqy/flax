# WebGPU canvas color performance on macOS

The Release app draws the shared [24-light scene](../../scene.wgsl) with a 6× output
highlight gain for all three color modes. Each frame uploads one 16-byte uniform,
encodes one pass and draws one triangle. The 960 × 540 logical canvas fits the same 1100
× 700 AppKit window at either canvas backing resolution.

| Mode   | Canvas format | Color space | Tone mapping |
| ------ | ------------- | ----------- | ------------ |
| `srgb` | `bgra8unorm`  | sRGB        | Standard     |
| `p3`   | `bgra8unorm`  | Display P3  | Standard     |
| `hdr`  | `rgba16float` | sRGB        | Extended     |

Each arm launches a fresh app process, warms up for 2 seconds and samples for 8 seconds.
The three throughput rounds rotate the order so every mode occupies every position once.
The throughput loop records callback gaps with one host clock read per callback,
followed by Flutter's batched raster timings for that same frame window. The loop
performs no readbacks or per-frame queue completion calls. A callback gap longer than
1.5 display refresh periods counts as a long frame. A separate round measures
`GPUQueue.onSubmittedWorkDone()` from just after the scene submission through JS Promise
delivery. These callbacks leave subsequent frames free to render. This endpoint covers
the scene queue work and notification, before any later canvas color conversion. Display
scanout is outside both measurements.

## Run

Prepare the maintained Flutter and pinned WebGPU native assets using the ordinary
[WebGPU build instructions](../../../../packages/flax_webgpu/README.md). Use the
candidate engine layout with `--enable-edr` to enable its
`FLTEnableExtendedDynamicRange` Info.plist setting. The previous experimental engine
uses `FLAX_COLOR_EDR=1` when launching and can be staged from a separate worktree with
`--runtime-root`.

```sh
python3 -B experiments/webgpu_dawn/color_canvas/benchmark/run.py build \
  --flutter-root "$FLUTTER_ROOT" --engine-src "$FLAX_EDR_ENGINE_SRC" \
  --evidence "$PWD/.local/color-benchmark-build" --enable-edr
python3 -B experiments/webgpu_dawn/color_canvas/benchmark/run.py measure \
  --build "$PWD/.local/color-benchmark-build/build.json" \
  --evidence "$PWD/.local/color-benchmark-1080p"
```

Run one benchmark at a time with the application in the foreground on the same screen.
Use `--size 3840x2160` for a separate 4K canvas run. The receipt includes window,
display, actual Flutter output format, requested and active canvas modes,
App/Dawn/Flutter hashes, and raw gap and raster samples. Compare colors under the same
Flutter output format. Keep the build through the last sample, then remove its generated
staging directory listed in `scratch.path`.

### Native completion diagnostic

In a separate checkout or after recording the ordinary app, prepare the native asset
with `prepare_native.py --benchmark` and build with `run.py build --native`. The same
`measure` command then runs one instrumented arm per mode. Native instrumentation
records canvas texture acquisition, publication and the consuming Flutter Metal command
buffer's completion. Its sample window excludes the first 31 acquisitions and the final
acquisition, so it includes part of the ordinary 2-second warm-up. The separate JSON
distributions retain their own sample counts. They describe GPU completion and callback
delivery through the Flutter consumer, before display scanout.
