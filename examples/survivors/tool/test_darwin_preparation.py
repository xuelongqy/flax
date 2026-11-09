#!/usr/bin/env python3
"""Compile the actual vendored AVPlayer source and bounded macOS preparation proof."""
from pathlib import Path
import os
import subprocess
import tempfile

repo = Path(__file__).resolve().parents[3]
example = repo / 'examples/survivors'
tmp = repo / '.local/tmp'
assert Path(os.environ['TMPDIR']).resolve() == tmp.resolve()
native = example / 'vendor/audioplayers_darwin/darwin/audioplayers_darwin/Sources/audioplayers_darwin'
with tempfile.TemporaryDirectory(prefix='survivors-native-audio-', dir=tmp) as directory:
    product = Path(directory) / 'preparation-proof'
    wrapped = Path(directory) / 'WrappedMediaPlayer.swift'
    source = (native / 'WrappedMediaPlayer.swift').read_text()
    # Gate only the selected test item's end-seek; normal cases retain real AVPlayerItem.
    original = 'playerItem = AVPlayerItem(url: parsedUrl)'
    assert source.count(original) == 1
    source = source.replace(original, 'playerItem = ProofItems.make(parsedUrl)')
    publication = '    let result = await preparation.result'
    assert source.count(publication) == 1
    source = source.replace(publication, publication + '\n    await MusicPublicationGate.waitIfArmed()')
    wrapped.write_text(source + '\n' + (example / 'test/native/darwin_preparation_access.swift').read_text())
    subprocess.run(['xcrun', 'swiftc', '-swift-version', '5', '-parse-as-library', '-module-cache-path', str(tmp / 'swift-modules'),
                    str(wrapped), str(native / 'Utils.swift'),
                    str(native / 'AudioPlayerError.swift'),
                    str(example / 'test/native/darwin_preparation_test.swift'), '-o', str(product)], check=True)
    music = example / 'js/assets/audio/music.wav'
    # Match the extensionless cache path published by BytesSource on Darwin.
    cached_music = Path(directory) / 'cached-music'
    cached_music.write_bytes(music.read_bytes())
    result = subprocess.run([str(product), str(music), str(example / 'js/assets/audio/shot.wav'), str(cached_music)], capture_output=True, text=True, timeout=15)
    print(result.stdout, end='')
    print(result.stderr, end='')
    assert result.returncode == 0, result.returncode
    assert 'SWIFT TASK CONTINUATION MISUSE' not in result.stderr
