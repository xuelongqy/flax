#!/usr/bin/env python3
"""Validate independent trials and summarize the median of per-process results."""
import argparse
import hashlib
import struct
import json
from pathlib import Path
from statistics import median


def summary(values):
    values = list(values)
    assert values
    return {'median': median(values), 'min': min(values), 'max': max(values)}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('directory', type=Path)
    args = parser.parse_args()
    paths = sorted(args.directory.glob('*-result.json'))
    assert len(paths) == 8, f'Expected eight independent trials, found {len(paths)}'
    runs = [json.loads(p.read_text()) for p in paths]
    assert len({r['source_sha256'] for r in runs}) == 1
    assert len({json.dumps([r[k] for k in ['physical_size', 'dpr', 'display_hz', 'backing', 'raster_scale']]) for r in runs}) == 1
    for run in runs:
        assert run['complete'] and run['mode'] == 'release' and not run['precompiled_hbc']
        assert not run.get('simulator', False) and not run.get('tracing', False)
        assert all(x['thermal'] == 0 and not x['lowPower'] for x in run['memory'])
        assert len(run['results']) == 2
        for scene in run['results']:
            samples = scene['samples']
            assert len(samples) == 300 and len({s[0] for s in samples}) == 300
            assert all(b[1] > a[1] and b[0] > a[0] for a, b in zip(samples, samples[1:]))
            assert all(all(v >= 0 for v in s) for s in samples)
    pixels = {}
    for name in ['weave-crisp', 'bloom-soft']:
        hashes = []
        for path, run in zip(paths, runs):
            png = path.with_name(path.name.replace('result.json', name + '.png')).read_bytes()
            assert png[:8] == b'\x89PNG\r\n\x1a\n'
            assert struct.unpack('>II', png[16:24]) == (880, 480)
            digest = hashlib.sha256(png).hexdigest()
            assert digest == run['png_sha256'][name]
            hashes.append(digest)
        assert len(set(hashes)) == 1, f'{name}: output differs; decoded-pixel review required'
        pixels[name] = hashes[0]
    apps = json.loads((args.directory / 'applications.json').read_text())
    assert apps['hermes']['aot_sha256'] == apps['v8']['aot_sha256']
    assert apps['hermes']['runner_input_sha256'] == apps['v8']['runner_input_sha256']
    assert apps['hermes']['source_assets'] == apps['v8']['source_assets']
    result = {'order': [r['engine'] for r in runs], 'total_measured_frames': 4800,
              'source_sha256': runs[0]['source_sha256'], 'identical_output_png_sha256': pixels, 'engines': {}}
    for engine in ['hermes', 'v8']:
        selected = [r for r in runs if r['engine'] == engine]
        assert len(selected) == 4
        row = {'processes': 4,
               'startup_ms': {k: summary(r['startup'][k] / 1000 for r in selected) for k in selected[0]['startup']},
               'first_raster_footprint_mib': summary(next(m['footprint'] for m in r['memory'] if m['phase'] == 'first-raster') / 2**20 for r in selected),
               'scenes': {}}
        for index, name in enumerate(['weave-crisp', 'bloom-soft']):
            scenes = [r['results'][index] for r in selected]
            assert all(s['name'] == name for s in scenes)
            scene = {'fps': summary(s['fps'] for s in scenes)}
            for field in ['cpu_us', 'encode_us', 'commit_us', 'build_us', 'raster_us', 'total_span_us', 'interval_us']:
                scene[field.replace('_us', '_ms')] = {q: summary(s[field][q] / 1000 for s in scenes) for q in ['p50', 'p95', 'max']}
            intervals = [b[1] - a[1] for s in scenes for a, b in zip(s['samples'], s['samples'][1:])]
            scene['callback_intervals'] = {'count': len(intervals),
                'over_1_5_refresh_periods': sum(x > 1.5e6 / selected[0]['display_hz'] for x in intervals),
                'longest_ms': max(intervals) / 1000}
            for native, label in [('footprint', 'footprint'), ('resident', 'rss')]:
                scene[f'{label}_peak_mib'] = summary(max(m[native] for m in r['memory'] if m['phase'] in [name, name + '-before', name + '-after']) / 2**20 for r in selected)
            row['scenes'][name] = scene
        result['engines'][engine] = row
    (args.directory / 'summary.json').write_text(json.dumps(result, indent=2) + '\n')
    for engine, row in result['engines'].items():
        print(engine, 'startup_ms', {k: v['median'] for k, v in row['startup_ms'].items()})
        for name, scene in row['scenes'].items():
            print(name, 'cpu/raster/total p50 ms', *(scene[k]['p50']['median'] for k in ['cpu_ms', 'raster_ms', 'total_span_ms']),
                  'fps', scene['fps']['median'], 'footprint MiB', scene['footprint_peak_mib']['median'])


if __name__ == '__main__':
    main()
