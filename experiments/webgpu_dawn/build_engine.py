#!/usr/bin/env python3
"""Build WebGPU support through the ordinary maintained Flax engine producer."""
import argparse
from pathlib import Path
import subprocess
import sys


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--flutter-root', type=Path, required=True)
    parser.add_argument('--sdk', type=Path, required=True, help='Verified V8 SDK, not Dawn')
    parser.add_argument('--mode', choices=['debug', 'release'], default='release')
    args = parser.parse_args()
    subprocess.run([sys.executable,
                    str(args.flutter_root / 'engine/src/flutter/flax/tools/build_engine.py'),
                    '--sdk', str(args.sdk), '--mode', args.mode], check=True)


if __name__ == '__main__':
    main()
