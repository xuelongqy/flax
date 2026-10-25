#!/usr/bin/env python3
"""Check Canvas/GC trace coverage, idle deferral and eventual wrapper reclamation."""
import argparse
import json
from pathlib import Path
from statistics import median


def spans(path):
    events = json.loads(path.read_text())['result']['traceEvents']
    pending, result = {}, {}
    for event in sorted(events, key=lambda e: e.get('ts', 0)):
        name = event.get('name', '')
        if name != 'CanvasFrame' and not name.startswith('Flax'):
            continue
        key = event.get('pid'), event.get('tid'), name
        if event.get('ph') == 'B':
            pending.setdefault(key, []).append(event)
        elif event.get('ph') == 'E' and pending.get(key):
            begin = pending[key].pop()
            result.setdefault(name, []).append({
                'start': begin['ts'], 'end': event['ts'],
                'duration_us': event['ts'] - begin['ts'],
                'tid': event['tid'], 'args': begin.get('args', {}),
            })
    return result


def summarize(values):
    return {'count': len(values), 'median': median(values), 'max': max(values)} if values else {'count': 0}


def analyze(directory):
    receipt = json.loads((directory / '01-v8-result.json').read_text())
    assert receipt['simulator'] and receipt['tracing'] and not receipt['precompiled_hbc']
    assert all(m['thermal'] == 0 and not m['lowPower'] for m in receipt['memory'])
    result = {'source_sha256': receipt['source_sha256'], 'scenes': {}}
    for scene in receipt['results']:
        name = scene['name']
        trace = spans(directory / f'01-v8-{name}-trace.json')
        frames = sorted(trace['CanvasFrame'], key=lambda e: e['start'])
        assert len(frames) == 345 and {e['args']['step'] for e in frames} == set(range(345))
        measured = [f for f in frames if f['args']['step'] >= 45]
        rows = {r[0]: r for r in scene['samples']}
        assert len(rows) == 300 and {f['args']['frame'] for f in measured} == set(rows)
        lo, hi = frames[0]['start'], frames[-1]['end']
        gc = [e for e in trace.get('FlaxCollect', []) if lo <= e['start'] <= hi]
        assert all(e['tid'] == frames[0]['tid'] for e in gc)
        assert not any(f['start'] < e['end'] and f['end'] > e['start'] for e in gc for f in frames)
        requests = []
        for event in trace.get('FlaxRequestIdleGC', []):
            if not lo <= event['start'] <= hi:
                continue
            prior = max((f for f in frames if f['start'] <= event['start']), key=lambda f: f['start'])
            row = rows.get(prior['args']['frame'])
            requests.append({
                'step': prior['args']['step'],
                'since_callback_ms': (event['start'] - prior['start']) / 1000,
                'since_vsync_ms': (event['start'] - row[1]) / 1000 if row else None,
            })
        early = [e for e in requests if e['since_vsync_ms'] is not None and e['since_vsync_ms'] < 99.9]
        result['scenes'][name] = {
            'trace_frames': len(frames), 'measured_frames': len(rows),
            'active_collect_ms': summarize([e['duration_us'] / 1000 for e in gc]),
            'active_idle_requests': len(requests), 'idle_requests_within_100ms_of_measured_vsync': len(early),
            'idle_requests': requests, 'frame_deferrals': len(trace.get('FlaxDeferFrameGC', [])),
            'v8_pressure_requests': len(trace.get('FlaxRequestV8GC', [])),
            'active_dart_gc_deferrals': len(trace.get('FlaxDeferActiveDartGC', [])),
            'ui_collect_outside_callback': True,
        }
    idle = spans(directory / '01-v8-idle-trace.json')
    assert idle.get('FlaxRequestIdleGC') and idle.get('FlaxV8Collection')
    assert 'CANVAS_IDLE_RECLAIMED' in (directory / '01-v8.log').read_text()
    result['idle_wrapper_reclaimed'] = True
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('before', type=Path)
    parser.add_argument('after', type=Path)
    parser.add_argument('--output', type=Path, required=True)
    args = parser.parse_args()
    before, after = analyze(args.before), analyze(args.after)
    assert before['source_sha256'] == after['source_sha256']
    for name in ['weave-crisp', 'bloom-soft']:
        assert before['scenes'][name]['idle_requests_within_100ms_of_measured_vsync'] > 0
        assert after['scenes'][name]['idle_requests_within_100ms_of_measured_vsync'] == 0
        assert after['scenes'][name]['frame_deferrals'] > 0
    result = {'before': before, 'after': after}
    args.output.write_text(json.dumps(result, indent=2) + '\n')
    for variant, row in result.items():
        print(variant, 'idle wrapper reclaimed:', row['idle_wrapper_reclaimed'])
        for name, scene in row['scenes'].items():
            print(name, 'timer requests:', scene['active_idle_requests'], 'requests inside 100 ms:',
                  scene['idle_requests_within_100ms_of_measured_vsync'], 'GC ms:', scene['active_collect_ms'])


if __name__ == '__main__':
    main()
