# macOS WebGPU color canvas experiment

The probe draws matched WebGPU and Flutter color patches in one window. The WebGPU rows
exercise sRGB and Display P3, RGBA16Float with standard or extended tone mapping, and
premultiplied P3 over the same Flutter background. Each canvas is 192 × 64. The probe
samples the final Flutter IOSurface and the application window's ScreenCaptureKit HDR
capture. It calibrates both samples against the same SDR red, green and white patches.

## Initial prototype results

Both runs used the same Dawn native asset and JS bundle, a 1100 × 668 Flutter surface,
and the same P3-capable display on macOS arm64.

| Measurement                                       | Existing Flutter engine | FP16 and EDR experiment |
| ------------------------------------------------- | ----------------------: | ----------------------: |
| Flutter output surface                            |               BGRA10_XR |             RGBA16Float |
| P3 maximum difference from Flutter color control  |                 0.00196 |                 0.00049 |
| Encoded HDR sample for a 1.60 shader input        |                 1.25098 |                 1.59961 |
| HDR capture in linear units relative to SDR white |                 1.66895 |                 2.94531 |
| Current EDR headroom reported by the display      |                    1.20 |                    3.00 |

The P3 path uses a Dawn GPU pass to convert the 8-bit canvas to extended sRGB in a
shared FP16 IOSurface. The HDR path shares the FP16 canvas directly. Both publish with
the existing GPU fence. These initial samples cover opaque onscreen presentation. The
sample ratios come from macOS window capture. The headroom values come from `NSScreen`.

## Run

Use the installed dependencies and pinned native asset in this experiment worktree. Set
`FLUTTER_ROOT` to the maintained Flutter checkout. Set `FLAX_COLOR_ENGINE_SRC` to the
matching color-enabled engine source layout. It contains `out/flax_mac_release_arm64`.
Granting Screen Recording access enables the optional window capture through the
system's usual settings.

```sh
python3 -B experiments/webgpu_dawn/color_canvas/run.py \
  --flutter-root "$FLUTTER_ROOT" --engine-src "$FLAX_COLOR_ENGINE_SRC" \
  --expect p3 --evidence "$PWD/.local/color-stock"
python3 -B experiments/webgpu_dawn/color_canvas/run.py \
  --flutter-root "$FLUTTER_ROOT" --engine-src "$FLAX_COLOR_ENGINE_SRC" \
  --edr --expect hdr --evidence "$PWD/.local/color-edr"
```

Each run writes `result.json` with the configuration, both sets of sampled pixels,
display headroom, engine UUID and application hashes.

The [performance runner](benchmark/README.md) compares the same animated shader across
SDR, P3 and HDR canvas configurations.
