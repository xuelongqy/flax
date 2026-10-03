"""Select an installed iOS runtime and boot a dedicated test simulator."""
import json
import subprocess


def run(*args):
    return subprocess.check_output(args, text=True).strip()


runtimes = json.loads(run('xcrun', 'simctl', 'list', 'runtimes', '--json'))['runtimes']
ios = [r for r in runtimes if r['identifier'].startswith('com.apple.CoreSimulator.SimRuntime.iOS-') and r.get('isAvailable')]
if not ios:
    raise SystemExit('No available iOS simulator runtime; this target is not accepted')
runtime = sorted(ios, key=lambda r: tuple(map(int, r['version'].split('.'))))[-1]
devices = json.loads(run('xcrun', 'simctl', 'list', 'devicetypes', '--json'))['devicetypes']
phone = next(d for d in devices if d['name'] == 'iPhone 17 Pro')
device = run('xcrun', 'simctl', 'create', 'Flax CI', phone['identifier'], runtime['identifier'])
subprocess.run(['xcrun', 'simctl', 'boot', device], check=True)
subprocess.run(['xcrun', 'simctl', 'bootstatus', device, '-b'], check=True, stdout=subprocess.DEVNULL)
print(f'FLAX_CHECK_DEVICE={device}')
