#!/usr/bin/env python3
"""Generate original, deterministic mono PCM game audio using the standard library."""
import math
from pathlib import Path
import struct
import wave

RATE = 22050
ROOT = Path(__file__).resolve().parents[1] / 'js' / 'assets' / 'audio'


def write(name, duration, sample):
    count = round(duration * RATE)
    values = [max(-32767, min(32767, round(sample(i / RATE, i / count) * 32767)))
              for i in range(count)]
    path = ROOT / f'{name}.wav'
    with wave.open(str(path), 'wb') as output:
        output.setparams((1, 2, RATE, count, 'NONE', 'not compressed'))
        output.writeframes(struct.pack(f'<{count}h', *values))
    with wave.open(str(path), 'rb') as check:
        assert check.getparams()[:4] == (1, 2, RATE, count)
        assert len(check.readframes(count)) == count * 2
    assert max(map(abs, values)) < 32767, f'{name} clips'
    assert any(values), f'{name} is silent'
    return path


def main():
    ROOT.mkdir(parents=True, exist_ok=True)
    # Integer-period tones make the twelve-second pad seamless at its loop boundary.
    write('music', 12, lambda t, p: 0.055 * sum(
        math.sin(2 * math.pi * f * t) for f in (110, 165, 220, 275)
    ) * (0.8 + 0.2 * math.cos(2 * math.pi * t / 12)))
    for name, seconds, start, end, volume in [
        ('shot', .07, 1100, 400, .16), ('hit', .12, 180, 55, .2),
        ('pulse', .4, 100, 640, .22), ('upgrade', .6, 440, 880, .15),
        ('win', 1.2, 330, 660, .18), ('lose', .9, 260, 65, .18),
    ]:
        write(name, seconds, lambda t, p, a=start, b=end, v=volume, d=seconds:
              v * math.sin(2 * math.pi * (a * t + (b-a) * t*t / (2*d)))
              * min(1, t / .008) * (1-p)**2)
    print(f'Generated and checked seven PCM WAV files in {ROOT}')


if __name__ == '__main__':
    main()
