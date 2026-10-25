#!/usr/bin/env python3
"""Validate four untraced simulator processes per GC policy and report ranges."""
import argparse
import hashlib
import json
from pathlib import Path
from analyze import summary


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('before', type=Path)
    parser.add_argument('after', type=Path)
    parser.add_argument('--output', type=Path, required=True)
    args = parser.parse_args()
    results, common = {}, []
    for name, directory in [('baseline', args.before), ('fixed', args.after)]:
        files = sorted(directory.glob('*-result.json'))
        assert len(files) == 4
        runs = [json.loads(p.read_text()) for p in files]
        apps = json.loads((directory / 'applications.json').read_text())['v8']
        assert 'kernel_sha256' in apps
        common.append({k: apps[k] for k in ['kernel_sha256', 'runner_input_sha256', 'source_assets', 'v8_library_sha256']})
        for run in runs:
            assert run['complete'] and run['engine'] == 'v8' and run['mode'] == 'debug'
            assert run['simulator'] and not run['tracing'] and not run['precompiled_hbc']
            assert all(m['thermal'] == 0 and not m['lowPower'] for m in run['memory'])
            for scene in run['results']:
                rows = scene['samples']
                assert len(rows) == 300 and len({s[0] for s in rows}) == 300
                assert all(b[1] > a[1] and b[0] > a[0] for a, b in zip(rows, rows[1:]))
        results[name] = {'processes': 4, 'measured_frames': 2400,
                         'startup_ms': {k: summary(r['startup'][k] / 1000 for r in runs) for k in runs[0]['startup']},
                         'scenes': {}}
        for index, scene_name in enumerate(['weave-crisp', 'bloom-soft']):
            cases = [r['results'][index] for r in runs]
            assert all(c['name'] == scene_name for c in cases)
            row = {'fps': summary(c['fps'] for c in cases)}
            for field in ['cpu_us', 'raster_us', 'build_us', 'total_span_us', 'interval_us']:
                row[field.replace('_us', '_ms')] = {q: summary(c[field][q] / 1000 for c in cases) for q in ['p50', 'p95', 'max']}
            for native, label in [('footprint', 'footprint'), ('resident', 'rss')]:
                row[label + '_peak_mib'] = summary(max(m[native] for m in r['memory'] if m['phase'] in [scene_name, scene_name+'-before', scene_name+'-after']) / 2**20 for r in runs)
            hashes = []
            for file, run in zip(files, runs):
                png = file.with_name(file.name.replace('result.json', scene_name+'.png'))
                digest = hashlib.sha256(png.read_bytes()).hexdigest()
                assert digest == run['png_sha256'][scene_name]
                hashes.append(digest)
            assert len(set(hashes)) == 1
            row['png_sha256'] = hashes[0]
            results[name]['scenes'][scene_name] = row
    assert common[0] == common[1]
    for scene in ['weave-crisp', 'bloom-soft']:
        assert results['baseline']['scenes'][scene]['png_sha256'] == results['fixed']['scenes'][scene]['png_sha256']
    args.output.write_text(json.dumps(results, indent=2)+'\n')
    for name, row in results.items():
        print(name)
        for scene, data in row['scenes'].items():
            print(scene, 'fps', data['fps'], 'CPU', data['cpu_ms']['p50'], 'interval p95', data['interval_ms']['p95'], 'footprint', data['footprint_peak_mib'])


if __name__ == '__main__':
    main()
