#!/usr/bin/env python3
"""Summarize simulator pacing samples and the retained part of the VM trace."""
import collections
import json
from pathlib import Path
import statistics
import sys


def durations(events):
    pending = collections.defaultdict(list)
    spans = []
    for event in events:
        key = (event.get('tid'), event.get('name'))
        phase = event.get('ph')
        if phase == 'B':
            pending[key].append(event['ts'])
        elif phase == 'E' and pending[key]:
            start = pending[key].pop()
            spans.append((key[1], start, event['ts']))
        elif phase == 'X':
            spans.append((key[1], event['ts'], event['ts'] + event['dur']))
    return spans


def summarize(folder):
    rows = []
    files = sorted(folder.glob('*-pacing.json'))
    assert len(files) == 3, 'Expected three complete launches'
    for file in files:
        receipt = json.loads(file.read_text())
        assert receipt['complete'] and not receipt['pixel_readback_during_frames']
        for row in receipt['results']:
            samples = row['samples']
            assert len(samples) == 360
            timeline = json.loads(file.with_name(file.stem + '-' + row['name'] + '-timeline.json').read_text())
            assert 'error' not in timeline
            events = timeline.get('result', timeline)['traceEvents']
            spans = durations(events)
            assert spans, 'Empty timeline'
            # The VM ring can discard the start of a case. Attribute only complete
            # frame intervals in the surviving window; FPS uses all samples.
            first = max(samples[0][0], min(e['ts'] for e in events if 'ts' in e))
            last = samples[-1][0]
            covered = [(a, b) for a, b in zip(samples, samples[1:]) if a[0] >= first]
            assert len(covered) > 179, 'Less than half the sample has a trace'
            collections_in_window = [(a, b) for name, a, b in spans if name == 'FlaxHermesCollect' and first <= a <= last]
            long_gaps = [(a, b) for a, b in covered if b[0] - a[0] > 25000]
            overlapping = sum(any(x < b[0] and y > a[0] for x, y in collections_in_window) for a, b in long_gaps)
            intervals = sorted((b[0] - a[0]) / 1000 for a, b in zip(samples, samples[1:]))
            rows.append({
                'launch': file.name, 'case': row['name'],
                'fps': round(359e6 / (samples[-1][1] - samples[0][1]), 2),
                'callback_us_p50': statistics.median(s[3] for s in samples),
                'raster_us_p50': statistics.median(s[5] for s in samples if s[5] >= 0),
                'gap_ms_p95': intervals[round((len(intervals) - 1) * .95)],
                'gap_ms_max': max(intervals),
                'gaps_over_25ms': sum(i > 25 for i in intervals),
                'trace_covered_intervals': len(covered),
                'trace_seconds': round((last - first) / 1e6, 3),
                'full_collections': len(collections_in_window),
                'full_gc_ms': [round((b - a) / 1000, 3) for a, b in collections_in_window],
                'traced_long_gaps': len(long_gaps),
                'traced_long_gaps_overlapping_gc': overlapping,
                'post_animation_idle_gc': sum(name == 'FlaxHermesRequestIdleGC' and a > last for name, a, b in spans),
                'request_counts': dict(collections.Counter(name for name, a, b in spans if first <= a <= last and name.startswith(('FlaxHermesRequest', 'FlaxHermesDefer')))),
            })
    return rows


if __name__ == '__main__':
    folder = Path(sys.argv[1])
    rows = summarize(folder)
    if '--check-frame-aware' in sys.argv:
        assert all(r['request_counts'].get('FlaxHermesRequestIdleGC', 0) == 0 for r in rows), 'Idle GC interrupted continuous frames'
        assert all(r['request_counts'].get('FlaxHermesDeferFrameGC', 0) > 0 for r in rows if r['case'] in ('js-idle', 'canvas', 'canvas-alloc')), 'Frame deferral was not exercised'
        assert sum(r['post_animation_idle_gc'] for r in rows) > 0, 'Idle GC did not resume after animation'
        assert sum(r['request_counts'].get('FlaxHermesRequestOldGC', 0) for r in rows if r['case'] == 'canvas-alloc') > 0, 'Pressure GC was not exercised'
    (folder / 'summary.json').write_text(json.dumps(rows, indent=2) + '\n')
    for name in dict.fromkeys(row['case'] for row in rows):
        group = [r for r in rows if r['case'] == name]
        print(name, json.dumps({
            'median_fps': statistics.median(r['fps'] for r in group),
            'median_gap_p95_ms': statistics.median(r['gap_ms_p95'] for r in group),
            'gaps_over_25ms': sum(r['gaps_over_25ms'] for r in group),
            'traced_gc': sum(r['full_collections'] for r in group),
            'gc_overlap': sum(r['traced_long_gaps_overlapping_gc'] for r in group),
            'traced_long_gaps': sum(r['traced_long_gaps'] for r in group),
        }))
