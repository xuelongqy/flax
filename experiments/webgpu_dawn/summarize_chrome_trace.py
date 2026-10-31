#!/usr/bin/env python3
"""Join renderer animation-frame IDs to Chrome presentation feedback."""
import argparse
from bisect import bisect_right
from collections import Counter
import json
from pathlib import Path


def distribution(values):
    values = sorted(values)
    from math import ceil
    def p(fraction):
        return values[max(0, ceil(len(values) * fraction) - 1)] if values else 0
    return {'count': len(values), 'p50Ms': p(.5), 'p95Ms': p(.95), 'p99Ms': p(.99)}


def summarize(trace, receipt):
    events = json.loads(trace.read_text())['traceEvents']
    marks = sorted((event for event in events
                    if event.get('name', '').startswith('webgpu-start-')), key=lambda event: event['ts'])
    assert marks, 'No page render marks in Chrome trace'
    renderer = Counter(event['pid'] for event in marks).most_common(1)[0][0]
    frames = []
    pending = {}
    presented = {}
    reporter_states = Counter()
    for event in sorted(events, key=lambda value: value['ts']):
        if event['pid'] != renderer:
            continue
        name = event.get('name')
        if name == 'AnimationFrame':
            key = str(event.get('id2'))
            if event['ph'] == 'b' and event.get('args', {}).get('id'):
                pending[key] = {'start': event['ts'], 'id': event['args']['id']}
            elif event['ph'] == 'e' and key in pending:
                frame = pending.pop(key)
                frame['end'] = event['ts']
                frames.append(frame)
        elif name == 'AnimationFrame::Presentation':
            args = event.get('args', {})
            if args.get('begin_frame_id', {}).get('sequence_number', 0) > 0:
                presented[args['id']] = event['ts']
        elif name == 'PipelineReporter' and event['ph'] == 'b':
            reporter_states[event.get('args', {}).get('frame_reporter', {}).get('state', 'unknown')] += 1
    frames.sort(key=lambda value: value['start'])
    starts = [frame['start'] for frame in frames]
    phases = [[] for _ in receipt['phases']]
    unmatched = 0
    phase = -1
    for mark in marks:
        sequence = int(mark['name'].rsplit('-', 1)[1])
        if sequence == 1:
            phase += 1
        assert 0 <= phase < len(phases), 'Unexpected render phase in trace'
        # The final draw is an explicit pixel verification after measurement.
        if sequence <= 31 or sequence == receipt['phases'][phase]['submitted']:
            continue
        index = bisect_right(starts, mark['ts']) - 1
        if index < 0:
            unmatched += 1
            continue
        frame = frames[index]
        end = presented.get(frame['id'])
        if mark['ts'] > frame['end'] or end is None or end < mark['ts']:
            unmatched += 1
            continue
        phases[phase].append((end - mark['ts']) / 1000)
    assert all(len(values) > 100 for values in phases), 'Too few matched presentation records'
    return {
        'source': str(trace), 'rendererPid': renderer,
        'method': 'Match a webgpu-start mark inside its AnimationFrame interval; join args.id to AnimationFrame::Presentation.',
        'endpoint': 'Chrome renderer presentation feedback; not physical pixel illumination and not comparable to Flax GPU completion.',
        'warmupSubmittedFrames': 31, 'excludedVerificationDraws': len(phases),
        'unmatchedMeasuredMarks': unmatched, 'pipelineReporterStates': dict(reporter_states),
        'phases': [{'width': config['width'], 'height': config['height'],
                    'jsRenderStartToPresentationFeedback': distribution(values)}
                   for config, values in zip(receipt['phases'], phases)],
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('trace', type=Path)
    parser.add_argument('receipt', type=Path)
    parser.add_argument('output', type=Path)
    args = parser.parse_args()
    receipt = json.loads(args.receipt.read_text())
    result = summarize(args.trace, receipt)
    args.output.write_text(json.dumps(result, indent=2) + '\n')
    print(json.dumps(result, indent=2))


if __name__ == '__main__':
    main()
