#!/usr/bin/env python3
"""Summarize the matched standard-API experiment without pooling phase quantiles."""
import hashlib
import json
import re
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[3]
HERE = Path(__file__).resolve().parent
RAW = ROOT / '.local/webgpu-api-comparison'


def bounds(values):
    assert values
    return {'min': min(values), 'max': max(values)}


def quantiles(phases, name):
    values = [p['samples'][name] for p in phases]
    return {'count': sum(v['count'] for v in values),
            **{key: bounds([v[key] for v in values]) for key in ['p50Ms', 'p95Ms', 'p99Ms']}}


def text_range(value, decimals=3):
    lo, hi = value['min'], value['max']
    return f'{lo:.{decimals}f}' if round(lo, decimals) == round(hi, decimals) else f'{lo:.{decimals}f}–{hi:.{decimals}f}'


def main():
    raw = json.loads((RAW / 'comparison.json').read_text())
    presentation = json.loads((RAW / 'edge-presentation.json').read_text())
    assert presentation['unmatchedMeasuredMarks'] == 0
    assert all(run['result']['passed'] for run in raw['runs'])
    for result in [*[run['result'] for run in raw['runs'] if run['kind'] == 'flax'],
                   raw['gpuTiming']['flax'], raw['latency'], raw['details']['flax']]:
        assert len(result['retirement']) == 3
        assert all(item['after'] == [0] * 6 for item in result['retirement'])
    rows = []
    for size in [(960, 540), (640, 360)]:
        phases = {kind: [p for run in raw['runs'] if run['kind'] == kind
                         for p in run['result']['phases'] if (p['width'], p['height']) == size]
                  for kind in ['flax', 'edge']}
        a, b = phases['flax'], phases['edge']
        assert len(a) == len(b) == (4 if size[0] == 960 else 2)
        row = {'width': size[0], 'height': size[1], 'phasePairs': len(a)}
        for kind, values in phases.items():
            row[kind] = {'apiTotal': quantiles(values, 'apiTotal'),
                         'completionPromise': quantiles(values, 'completionPromise'),
                         'callbackFps': bounds([p['rafCallbackFps'] for p in values]),
                         'clockCallMs': bounds([p['clockCallMs'] for p in values])}
            gpu = [p for p in raw['gpuTiming'][kind]['phases'] if (p['width'], p['height']) == size]
            row[kind]['gpuPass'] = quantiles(gpu, 'gpuPass')
            detail = [p for p in raw['details'][kind]['phases'] if (p['width'], p['height']) == size]
            row[kind]['detailedCpu'] = {name: quantiles(detail, name) for name in
                                       ['writeBuffer', 'currentTexture', 'encodeCommands', 'submit', 'completionRegistration']}
        row['pairedApiQuantileDifferenceMs'] = {key: bounds([
            x['samples']['apiTotal'][key] - y['samples']['apiTotal'][key]
            for x, y in zip(a, b)]) for key in ['p50Ms', 'p95Ms']}
        handoff = [p['native'] for p in raw['latency']['phases'] if (p['width'], p['height']) == size]
        row['nativeHandoff'] = {name: {'count': sum(p[name]['count'] for p in handoff),
            **{key: bounds([p[name][key] for p in handoff]) for key in ['p50Ms', 'p95Ms', 'p99Ms']}}
            for name in ['publishToFlutterTextureRead', 'publishToFlutterGpuCompletion', 'textureAcquireToFlutterGpuCompletion']}
        row['nativeHandoff']['readsPendingProducer'] = sum(p['readsPendingProducer'] for p in handoff)
        rows.append(row)
    engine = ROOT / '.local/webgpu-api-benchmark/app/build/macos/Build/Products/Release/flax_webgpu_example.app/Contents/Frameworks/FlutterMacOS.framework/Versions/A/FlutterMacOS'
    binary = ROOT / '.local/webgpu-api-benchmark/native/libflax_webgpu.dylib'
    sources = [HERE / name for name in ['scene.mjs', 'browser.mjs', 'browser.html', 'flax.mjs', 'app.dart']]
    sources += [ROOT / 'packages/flax_webgpu/js/src' / name for name in ['webgpu.ts', 'convert.ts']]
    sources += [ROOT / 'packages/flax_webgpu/native/src' / name for name in ['async.mm', 'canvas.inc', 'benchmark.inc']]
    result = {'collectedAt': raw['collectedAt'], 'platform': 'Apple M2 Max, macOS 27.0.1 (26A434), AC power',
        'browser': raw['browser'], 'browserVersion': raw['runs'][1]['result']['version'],
        'viewport': raw['runs'][0]['result']['phases'][0]['viewport'],
        'shaderSha256': raw['shaderSha256'], 'sharedSceneSha256': raw['sceneSha256'],
        'sourceSha256': {str(p.relative_to(ROOT)): hashlib.sha256(p.read_bytes()).hexdigest() for p in sources},
        'nativeDylibSha256': hashlib.sha256(binary.read_bytes()).hexdigest(),
        'engineUuid': re.search(r'UUID: (\S+) \(arm64\)', subprocess.check_output(['dwarfdump', '--uuid', str(engine)], text=True))[1],
        'inputs': json.loads((ROOT / 'packages/flax_webgpu/native/generated/inputs.json').read_text()),
        'protocol': raw['protocol'], 'statistics': 'Ranges of independent phase quantiles, not pooled or averaged quantiles.',
        'performanceMeasuredFrames': {kind: sum(p['samples']['apiTotal']['count'] for run in raw['runs'] if run['kind'] == kind for p in run['result']['phases']) for kind in ['flax', 'edge']},
        'flaxSessionsRetired': 15, 'allMonitoredCountersZero': True,
        'presentation': {**presentation, 'source': '.local/webgpu-api-comparison/edge-trace-trace.json',
                         'endpoint': 'Microsoft Edge Chromium presentation feedback; not the same endpoint as Flutter GPU completion.'},
        'rows': rows,
        'limits': ['The browser is Microsoft Edge, not a fresh Google Chrome run.',
          'JS-thread API duration includes different synchronous/native submission paths; the difference does not isolate JS wrappers alone.',
          'GPU timestamps, detailed CPU profiling and latency instrumentation ran separately.',
          'GPU timestamp observations are quantized in approximately 0.065536 ms steps.',
          'No same-endpoint screen-presentation or input-to-photon comparison; GPU completion and browser presentation feedback must not be subtracted.']}
    (HERE / 'results.json').write_text(json.dumps(result, indent=2) + '\n')
    lines = ['# Standard API results: Flax and Microsoft Edge', '',
        'Fresh same-machine Release/AOT comparison on Apple M2 Max, macOS 27.0.1, AC power. '
        'Browser: Microsoft Edge 156.0.4314.50 (V8 15.6.12.7). This is the user-selected Chromium comparison, not a new Google Chrome run.', '',
        'Both hosts run the same WGSL and `scene.mjs`, BGRA8/sRGB/opaque output, '
        '1100 x 668 viewport at scale 1 on the 3440 x 1440 display. Each phase lasts eight '
        'seconds with 31 warmup submissions. The order is Flax/Edge/Edge/Flax; timestamp, '
        'native handoff, browser tracing and detailed profiling use separate rounds.', '',
        '## JS-thread encoding and submission', '',
        'All times are milliseconds. Ranges retain the independent phase quantiles; '
        'they are not pooled percentiles. There are four phase pairs at 960 x 540 and '
        'two pairs at 640 x 360.', '',
        '| Resolution | Flax P50 | Edge P50 | Flax P95 | Edge P95 | Flax callback FPS | Edge callback FPS |',
        '| --- | ---: | ---: | ---: | ---: | ---: | ---: |']
    for row in rows:
        a, b = row['flax'], row['edge']
        lines.append(f"| {row['width']} x {row['height']} | {text_range(a['apiTotal']['p50Ms'])} | {text_range(b['apiTotal']['p50Ms'])} | {text_range(a['apiTotal']['p95Ms'])} | {text_range(b['apiTotal']['p95Ms'])} | {text_range(a['callbackFps'],2)} | {text_range(b['callbackFps'],2)} |")
    lines += ['', 'Across matched phase pairs, the Flax JS thread spends **0.34–0.85 ms more '
        'at P50 and 0.91–1.38 ms more at P95**. Flax encoding/submission P95 consumes '
        'about 13–18% of an 8.33 ms frame budget. The frame callbacks remain near the '
        'display ceiling in this light scene; that does not prove equal headroom for '
        'larger command streams.', '',
        'These are the complete standard-API submission paths. They include validation '
        'and native command work and do not isolate the JS wrapper alone. In the separate '
        'detailed round, command encoding dominates: Flax P95 **0.816–0.946 ms**, Edge '
        '**0.040–0.050 ms**. Descriptor conversion and FFI/resource wrapping are profiling '
        'candidates; this experiment does not attribute an exact fraction to each. '
        'The calibrated Flax clock costs roughly 2–4 microseconds per call, far below '
        'the observed difference. Detailed clock samples are excluded from the table.', '',
        '## GPU work and observable completion', '',
        '| Resolution | Flax GPU P50 / P95 | Edge GPU P50 / P95 | Flax completion Promise P95 | Edge completion Promise P95 |',
        '| --- | ---: | ---: | ---: | ---: |']
    for row in rows:
        a,b=row['flax'],row['edge']
        lines.append(f"| {row['width']} x {row['height']} | {text_range(a['gpuPass']['p50Ms'])} / {text_range(a['gpuPass']['p95Ms'])} | {text_range(b['gpuPass']['p50Ms'])} / {text_range(b['gpuPass']['p95Ms'])} | {text_range(a['completionPromise']['p95Ms'])} | {text_range(b['completionPromise']['p95Ms'])} |")
    lines += ['', 'GPU medians match. The 960 x 540 P95 difference is one observed timestamp '
        'quantization step, approximately 0.066 ms. That alone is insufficient evidence '
        'of a substantial GPU execution regression. The same `onSubmittedWorkDone()` '
        'Promise is measured in both hosts, including host delivery and all preceding '
        'queue work. It does not measure screen presentation.', '',
        '## Presentation handoff', '',
        '| Resolution | Flax publish to first Flutter texture read P95 | Flax publish to consumer GPU completion P95 |',
        '| --- | ---: | ---: |']
    for row in rows:
        n=row['nativeHandoff']
        lines.append(f"| {row['width']} x {row['height']} | {text_range(n['publishToFlutterTextureRead']['p95Ms'])} | {text_range(n['publishToFlutterGpuCompletion']['p95Ms'])} |")
    lines += ['', 'Publication-to-acquisition remains **0.20–0.23 ms P95**; this measured '
        'handoff does not wait another 8.33 ms frame. Most acquisitions occur before '
        'the producer fence signals, with the GPU waits preserving ordering. All '
        '15 Flax sessions retire the monitored context, mapping, canvas, storage and '
        'publication counters to zero, with zero unsafe retirements.', '',
        'Edge tracing matches **988** render starts to presentation feedback with '
        '**zero unmatched measured marks**. Its P95 is 12.371 / 12.335 / 19.549 ms for '
        'the three phases. This includes browser presentation feedback; Flax consumer '
        'GPU completion ends earlier in the pipeline. **Do not subtract those values '
        'to claim that Flax displays sooner.** A same-endpoint display-latency and '
        'physical input-to-photon comparison remains unmeasured.', '',
        '## Evidence', '',
        '- [Machine-readable results](results.json) preserve phase ranges, input hashes, '
        'version, sample counts and endpoint limits.',
        '- The performance rounds contain **5,513 Flax and 5,576 Edge measured frames**.',
        '- Raw JSON, PNGs and browser trace stay in `.local/webgpu-api-comparison/`.',
        '- [Reproduction protocol](README.md) describes the independent measurement modes.', '']
    (HERE / 'results.md').write_text('\n'.join(lines))
    print('Summarized matched standard API results:', result['performanceMeasuredFrames'])


if __name__ == '__main__':
    main()
