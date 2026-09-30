"""Exercise startup with disposable fake emulator and ADB executables."""
import json
from pathlib import Path
import sys
import tempfile
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from start_android_emulator import start


class StartupTest(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory(prefix='flax emulator ')
        self.root = Path(self.temporary.name)
        self.logs = self.root / 'logs'
        self.process = None

    def tearDown(self):
        if self.process is not None:
            self.process.terminate()
            self.process.wait(timeout=5)
        self.temporary.cleanup()

    def tools(self, mode):
        for name, source in {
            'emulator/emulator': f'''
import sys, time
if '-accel-check' in sys.argv:
    print('fake acceleration status')
    sys.exit(0)
print('fake emulator startup', flush=True)
if {mode!r} == 'exit': sys.exit(17)
time.sleep(30)
''',
            'platform-tools/adb': f'''
import json, sys, time
from pathlib import Path
if 'shell' in sys.argv:
    Path({str(self.root / 'adb_args')!r}).write_text(json.dumps(sys.argv[1:]))
    if {mode!r} == 'hang': time.sleep(30)
    print('1')
else: print('fake adb diagnostics')
''',
        }.items():
            path = self.root / name
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text('#!/usr/bin/env python3\n' + source)
            path.chmod(0o755)

    def test_boot_uses_the_selected_serial(self):
        self.tools('boot')
        self.process = start(self.root, self.logs, boot_timeout=2, poll_interval=0.01)
        self.assertEqual(json.loads((self.root / 'adb_args').read_text())[:2],
                         ['-s', 'emulator-5554'])
        self.assertTrue((self.logs / 'emulator.log').exists())

    def test_process_exit_is_reported_with_diagnostics(self):
        self.tools('exit')
        # Let the failing process exit before ADB can claim boot completion.
        (self.root / 'platform-tools/adb').write_text(
            '#!/usr/bin/env python3\nimport time\ntime.sleep(0.1)\n')
        with self.assertRaisesRegex(RuntimeError, 'code 17'):
            start(self.root, self.logs, boot_timeout=2, poll_interval=0.01)
        self.assertIn('fake emulator startup', (self.logs / 'emulator.log').read_text())
        self.assertIn('KVM available', (self.logs / 'diagnostics.log').read_text())

    def test_hanging_adb_obeys_the_deadline(self):
        self.tools('hang')
        with self.assertRaisesRegex(TimeoutError, 'did not boot'):
            start(self.root, self.logs, boot_timeout=0.2, poll_interval=0.01)
        self.assertIn('fake adb diagnostics', (self.logs / 'diagnostics.log').read_text())


if __name__ == '__main__':
    unittest.main()
