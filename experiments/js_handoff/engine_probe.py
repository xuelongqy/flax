"""Link a private engine variant from existing objects; never edit engine sources/outputs."""
import hashlib
import json
import os
from pathlib import Path
import shlex
import subprocess
import sys

root = Path(__file__).resolve().parents[2]
mode = sys.argv[1]
assert mode in ("debug", "release")
variant = sys.argv[2] if len(sys.argv) > 2 else 'current'
assert variant in ('current', 'legacy-gc', 'empty-gc', 'results')
engine = Path('/Volumes/MAC_HOME/Develop/Flutter/flutter/engine/src')
out = engine / f'out/flax_mac_{mode}_arm64'
dest = root / '.local/js-handoff' / (f'engine-{mode}' + (f'-{variant}' if variant != 'current' else ''))
dest.mkdir(parents=True, exist_ok=True)
source_dir = engine / 'flutter/flax/native/src'
original = {name: (source_dir / name).read_text() for name in ('joint_gc.h', 'joint_gc.cc')}
header = original['joint_gc.h'].replace('  ~JointHeap();', '  ~JointHeap();\n  bool ExperimentInitializationOnly(bool enable);')
source = original['joint_gc.cc'].replace('std::mutex heaps_mutex;', 'JointHeap* initializing_heap = nullptr;\nstd::mutex heaps_mutex;')
if variant == 'legacy-gc':
    # Control only the old GC escalation rule; all other current engine inputs stay fixed.
    condition = '(type & v8::kGCTypeMarkSweepCompact) && !heap.cells_.empty()'
    assert source.count(condition) == 1
    source = source.replace(condition, '!heap.cells_.empty()')
    source = source.replace('v8::GCType type, v8::GCCallbackFlags', 'v8::GCType, v8::GCCallbackFlags')
elif variant in ('empty-gc', 'results'):
    guard = '  if (std::this_thread::get_id() != heap.owner_ || heap.joint_) std::abort();'
    assert source.count(guard) == 1
    source = source.replace(guard, guard + '\n  if (heap.cells_.empty()) return;')
assert source.count('  if (closed_ || std::this_thread::get_id() != owner_)') == 1
source = source.replace('  if (closed_ || std::this_thread::get_id() != owner_)',
    '  if (initializing_heap == this)\n    throw std::runtime_error("Dart peers are forbidden during pure JS initialization");\n  if (closed_ || std::this_thread::get_id() != owner_)')
source += r'''

namespace flax {
bool JointHeap::ExperimentInitializationOnly(bool enable) {
  if (closed_ || Dart_CurrentIsolate() != dart_isolate_ ||
      std::this_thread::get_id() != owner_ || !cells_.empty()) return false;
  if (enable) {
    if (initializing_heap || !Dart_FlaxSetCollector(nullptr, nullptr)) return false;
    initializing_heap = this;
  } else {
    if (initializing_heap != this || !Dart_FlaxSetCollector(Collect, this)) return false;
    Dart_FlaxSetCollectionRequest(RequestFromDart);
    initializing_heap = nullptr;
  }
  return true;
}
}

extern "C" __attribute__((visibility("default")))
int flax_experiment_handoff_gc(void* expected_isolate, int enable) {
  v8rt::IsolateConfig config;
  auto heap = flax::JointHeap::Current(config);
  return heap->isolate() == expected_isolate && heap->ExperimentInitializationOnly(enable != 0);
}
'''
assert header != original['joint_gc.h']
for name, value in [('joint_gc.h', header), ('joint_gc.cc', source)]:
    (dest / name).write_text(value)

def command(target):
    return subprocess.check_output(['ninja', '-C', str(out), '-t', 'commands', target], text=True).splitlines()[-1]

objects = {'obj/flutter/flax/native/src/runtime.joint_gc.o': 'joint_gc.cc'}
if variant == 'results':
    original['runtime.cpp'] = (source_dir / 'runtime.cpp').read_text()
    (dest / 'runtime.cpp').write_text(original['runtime.cpp'])
    subprocess.run(['patch', '--batch', str(dest / 'runtime.cpp'),
                    str(root / 'experiments/js_handoff/results.patch')], check=True)
    objects['obj/flutter/flax/native/src/runtime.runtime.o'] = 'runtime.cpp'
compiles = []
for obj, filename in objects.items():
    compile_args = shlex.split(command(obj))
    compile_args[compile_args.index('-c') + 1] = str(dest / filename)
    compile_args[compile_args.index('-o') + 1] = str(dest / (filename + '.o'))
    compile_args[compile_args.index('-MF') + 1] = str(dest / (filename + '.o.d'))
    compile_args += ['-I' + str(source_dir),
                     '-I' + str(root / 'packages/flax/native/include')]
    subprocess.run(compile_args, cwd=out, check=True)
    compiles.append(compile_args)

# Reuse the exact recorded linker inputs, substituting only this probe object.
ninja = out / 'obj/flutter/shell/platform/darwin/macos/flutter_framework_dylib.ninja'
build_line = next(line for line in ninja.read_text().splitlines() if line.startswith('build ./libFlutterMacOS.dylib '))
inputs = shlex.split(build_line.split(': solink ', 1)[1].split(' || ', 1)[0].split(' | ', 1)[0])
for obj, filename in objects.items():
    assert inputs.count(obj) == 1
    inputs[inputs.index(obj)] = str(dest / (filename + '.o'))
assert all(Path(out, p).is_file() for p in inputs)
file_list = dest / 'objects.txt'
file_list.write_text('\n'.join(inputs) + '\n')
words = shlex.split(command('libFlutterMacOS.dylib'))
start = words.index('then') + 1
link_args = words[start:words.index('&&', start)]
link_args[link_args.index('-o') + 1] = str(dest / 'FlutterMacOS')
for i, arg in enumerate(link_args):
    if arg.startswith('-Wl,-object_path_lto,'):
        link_args[i] = '-Wl,-object_path_lto,' + str(dest / 'lto.o')
    elif arg.startswith('-Wl,-filelist,'):
        link_args[i] = '-Wl,-filelist,' + str(file_list)
subprocess.run(link_args, cwd=out, check=True)
assert all((source_dir / k).read_text() == v for k, v in original.items())
receipt = {'mode': mode, 'variant': variant, 'engineHead': subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=engine / 'flutter', text=True).strip(),
           'sourceHashes': {k: hashlib.sha256(v.encode()).hexdigest() for k,v in original.items()},
           'probeSourceHashes': {p.name: hashlib.sha256(p.read_bytes()).hexdigest() for p in [dest/name for name in original]},
           'engineSha256': hashlib.sha256((dest/'FlutterMacOS').read_bytes()).hexdigest(),
           'compile': compiles, 'link': link_args, 'objectCount': len(inputs)}
(dest / 'receipt.json').write_text(json.dumps(receipt, indent=2)+'\n')
print(json.dumps({k:receipt[k] for k in ['mode','engineHead','engineSha256','objectCount']}))
