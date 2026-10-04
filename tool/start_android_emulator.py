"""Boot the CI x64 emulator with a deadline and preserve failure diagnostics."""
import os
from pathlib import Path
import subprocess
import time


def start(sdk, logs, boot_timeout=600, poll_interval=2):
    logs.mkdir(parents=True, exist_ok=True)
    adb = str(sdk / 'platform-tools/adb')
    emulator = str(sdk / 'emulator/emulator')
    serial = 'emulator-5554'
    deadline = time.monotonic() + boot_timeout
    with (logs / 'emulator.log').open('w') as output:
        process = subprocess.Popen([
            emulator, '-avd', 'flax-ci', '-port', '5554', '-no-window',
            '-no-audio', '-no-boot-anim', '-gpu', 'swiftshader_indirect',
        ], stdout=output, stderr=subprocess.STDOUT)
        try:
            while time.monotonic() < deadline:
                if process.poll() is not None:
                    raise RuntimeError(f'Emulator exited with code {process.returncode}')
                try:
                    result = subprocess.run([
                        adb, '-s', serial, 'shell', 'getprop', 'sys.boot_completed',
                    ], capture_output=True, text=True,
                        timeout=min(30, max(0.01, deadline - time.monotonic())))
                    if result.returncode == 0 and result.stdout.strip() == '1':
                        if process.poll() is not None:
                            raise RuntimeError('Emulator exited during boot')
                        print(f'{serial} booted', flush=True)
                        return process
                except subprocess.TimeoutExpired:
                    pass
                time.sleep(min(poll_interval, max(0, deadline - time.monotonic())))
            raise TimeoutError(f'Emulator did not boot within {boot_timeout} seconds')
        except Exception:
            with (logs / 'diagnostics.log').open('w') as diagnostic:
                diagnostic.write(f'KVM available: {Path("/dev/kvm").exists()}\n')
                diagnostic.flush()
                for args in ([emulator, '-accel-check'], [adb, 'devices', '-l'],
                             [adb, '-s', serial, 'logcat', '-d', '-t', '200']):
                    diagnostic.write(f'> {args}\n')
                    diagnostic.flush()
                    try:
                        subprocess.run(args, stdout=diagnostic, stderr=subprocess.STDOUT, timeout=30)
                    except (OSError, subprocess.TimeoutExpired) as error:
                        diagnostic.write(f'{error}\n')
            if process.poll() is None:
                process.terminate()
                try:
                    process.wait(timeout=5)
                except subprocess.TimeoutExpired:
                    process.kill()
                    process.wait(timeout=5)
            raise


if __name__ == '__main__':
    start(Path(os.environ['ANDROID_HOME']), Path('build/platform/android-x64/ci'))
