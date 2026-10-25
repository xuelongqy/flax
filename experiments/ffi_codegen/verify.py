#!/usr/bin/env python3
"""Check the experimental header adapter against three real Apple compiler targets."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import subprocess


ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
OUT = ROOT / '.local/ffi-codegen'
PROFILES = {
    'macos-arm64': ('arm64-apple-macos15.0', 'macosx', 8),
    'ios-device-arm64': ('arm64-apple-ios16.3', 'iphoneos', 2),
    'ios-simulator-arm64': ('arm64-apple-ios16.3-simulator', 'iphonesimulator', 4),
}
SQLITE = ['sqlite3_open', 'sqlite3_close', 'sqlite3_libversion_number',
          'sqlite3_prepare_v2', 'sqlite3_step', 'sqlite3_column_int',
          'sqlite3_finalize', 'sqlite3_errmsg', 'sqlite3_free']


def run(command, *, failure=None):
    result = subprocess.run(list(map(str, command)), cwd=ROOT, text=True,
                            stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    if failure is not None:
        assert result.returncode != 0 and failure in result.stdout, result.stdout
    elif result.returncode:
        raise RuntimeError(result.stdout[-6000:])
    return result.stdout


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--castxml', type=Path, required=True)
    args = parser.parse_args()
    for name in ['extract', 'generated', 'logs']:
        (OUT / name).mkdir(parents=True, exist_ok=True)
    env_tmp = ROOT / '.local/tmp'
    env_tmp.mkdir(parents=True, exist_ok=True)
    os.environ.update(TMPDIR=str(env_tmp), TMP=str(env_tmp), TEMP=str(env_tmp))
    receipt = {'profiles': {}, 'negativeChecks': [], 'castxmlVersion': run([args.castxml, '--version'])}
    for profile, (triple, sdkname, target_bytes) in PROFILES.items():
        sdk = run(['xcrun', '--sdk', sdkname, '--show-sdk-path']).strip()
        clang = ['/usr/bin/clang', '-target', triple, '-isysroot', sdk, '-x', 'c', '-std=c17']
        xmlcmd = [args.castxml, '--castxml-output=1', '--castxml-cc-gnu-c', '(', *clang[:5], ')',
                  '-target', triple, '-isysroot', sdk, '-x', 'c', '-std=c17']
        wrapper = OUT / 'extract' / f'{profile}-input.c'
        wrapper.write_text(f'#include "{HERE / "native/api.h"}"\n' + ''.join(
            f'enum {{ __flax_macro_{name} = ({name}) }};\n'
            for name in ['CG_MAGIC', 'CG_BIG', 'CG_TARGET_BYTES']))
        xml = OUT / 'extract' / f'{profile}.xml'
        run([*xmlcmd, wrapper, '-o', xml])
        config = {'xml': str(xml), 'output': str(OUT / 'generated' / profile), 'profile': profile,
                  'prefix': 'cg_', 'varargs': {'cg_variadic': ['int32', 'int32']},
                  'resource': {'name': 'Counter', 'create': 'cg_counter_create',
                               'destroy': 'cg_counter_destroy', 'method': 'cg_counter_add'}}
        config_file = OUT / 'extract' / f'{profile}.json'
        config_file.write_text(json.dumps(config))
        generate = ['node', HERE / 'generate.mjs', config_file]
        run(generate)
        generated = Path(config['output'])
        model = json.loads((generated / 'model.json').read_text())
        assert model['constants']['CG_BIG'] == '18446744073709551601'
        assert int(model['constants']['CG_TARGET_BYTES']) == target_bytes
        assert model['definitions']['cg_sum_array']['arguments'] == ['pointer']
        assert model['callbacks']['CgCallback']['arguments'] == ['int32', 'pointer']
        asserts = []
        for layout in model['layouts']:
            name = layout['name']
            asserts.extend([f'sizeof({name}) == {layout["size"]}',
                            f'_Alignof({name}) == {layout["alignment"]}'])
            asserts.extend(f'offsetof({name}, {f["name"]}) == {f["offset"]}' for f in layout['fields'])
        for name, value in model['constants'].items():
            suffix = 'ULL' if int(value) > 2**63 - 1 else ''
            asserts.append(f'{name} == {value}{suffix}')
        asserts.append(f'sizeof(CgTargetValue) == {target_bytes}')
        checks = OUT / 'extract' / f'{profile}-abi.c'
        checks.write_text(f'#include "{HERE / "native/api.h"}"\n' + ''.join(
            f'_Static_assert({value}, "ABI {index}");\n' for index, value in enumerate(asserts)))
        run([*clang, '-Werror', '-fsyntax-only', checks])
        run([*clang, '-Wall', '-Wextra', '-Werror', '-c', HERE / 'native/api.c',
             '-o', OUT / 'extract' / f'{profile}-fixture.o'])
        emitted = [generated / name for name in ['definitions.g.ts', 'bindings.g.ts', 'model.json']]
        before = {f.name: hashlib.sha256(f.read_bytes()).hexdigest() for f in emitted}
        run(generate)
        assert before == {f.name: hashlib.sha256(f.read_bytes()).hexdigest() for f in emitted}
        # Test a real installed header rather than only declarations written for the adapter.
        sqlite_wrapper = OUT / 'extract' / f'{profile}-sqlite.c'
        sqlite_wrapper.write_text('#include <sqlite3.h>\n' + ''.join(
            f'enum {{ __flax_macro_{name} = ({name}) }};\n'
            for name in ['SQLITE_OK', 'SQLITE_ROW', 'SQLITE_DONE', 'SQLITE_VERSION_NUMBER']))
        sqlite_xml = OUT / 'extract' / f'{profile}-sqlite.xml'
        run([*xmlcmd, sqlite_wrapper, '-o', sqlite_xml])
        sqlite_config = {**config, 'xml': str(sqlite_xml), 'output': str(generated / 'sqlite'),
                         'functions': SQLITE, 'resource': None}
        config_file.write_text(json.dumps(sqlite_config))
        run(generate)
        sqlite = json.loads((generated / 'sqlite/model.json').read_text())
        assert len(sqlite['definitions']) == 9 and sqlite['constants']['SQLITE_ROW'] == '100'
        run(['node', '--experimental-strip-types', '--input-type=module', '-e',
             f"const m = await import({json.dumps((generated / 'sqlite/definitions.g.ts').as_uri())}); "
             "if (Object.keys(m.definitions).length !== 9 || m.SQLITE_ROW !== 100) throw Error('Portable definitions');"])
        config_file.write_text(json.dumps(config))
        receipt['profiles'][profile] = {'triple': triple, 'sdk': sdk, 'targetBytes': target_bytes,
            'functions': len(model['definitions']), 'layouts': len(model['layouts']),
            'compilerAsserts': len(asserts), 'sqliteFunctions': len(sqlite['definitions']),
            'fixtureCompiled': True, 'nodePrimitiveModule': True,
            'deterministic': True, 'generatedSha256': before}
        if profile == 'macos-arm64':
            for symbol, message in [('cg_bad_bits', 'bitfields require a C wrapper'),
                                    ('cg_bad_alignment', 'layout cannot be expressed')]:
                badxml = OUT / 'extract' / (symbol + '.xml')
                run([*xmlcmd, HERE / 'native/unsupported.h', '-o', badxml])
                config_file.write_text(json.dumps({**config, 'xml': str(badxml),
                                                   'functions': [symbol], 'resource': None}))
                diagnostic = run(generate, failure=message)
                receipt['negativeChecks'].append({'case': symbol, 'diagnostic': diagnostic.split('Error: ', 1)[1].splitlines()[0]})
            for case, options, message in [
                ('untyped-varargs', {'functions': ['cg_variadic'], 'varargs': {}}, 'explicit promoted argument types'),
                ('missing-symbol', {'functions': ['cg_missing']}, 'Selected function missing'),
            ]:
                config_file.write_text(json.dumps({**config, **options, 'resource': None}))
                run(generate, failure=message)
                receipt['negativeChecks'].append({'case': case, 'diagnostic': message})
            bad = OUT / 'extract/function-macro.c'
            bad.write_text(f'#include "{HERE / "native/api.h"}"\nenum {{ bad = CG_FUNCTION_MACRO }};\n')
            run([*clang, '-fsyntax-only', bad], failure='CG_FUNCTION_MACRO')
            receipt['negativeChecks'].append({'case': 'function-like-macro', 'diagnostic': 'Clang rejects nonconstant macro selection'})
            config_file.write_text(json.dumps(config))
        else:
            mismatch = OUT / 'extract' / f'{profile}-wrong-profile.c'
            mismatch.write_text(f'#include "{HERE / "native/api.h"}"\n_Static_assert(sizeof(CgTargetValue) == 8, "wrong profile");\n')
            run([*clang, '-fsyntax-only', mismatch], failure='wrong profile')
            receipt['negativeChecks'].append({'case': f'{profile}-wrong-profile', 'diagnostic': 'Compiler rejects macOS model'})
    (OUT / 'frontend-receipt.json').write_text(json.dumps(receipt, indent=2) + '\n')
    print(json.dumps({'profiles': len(receipt['profiles']),
        'compilerAsserts': sum(p['compilerAsserts'] for p in receipt['profiles'].values()),
        'negativeChecks': len(receipt['negativeChecks']), 'sqliteFunctionsPerProfile': 9}))


if __name__ == '__main__':
    main()
