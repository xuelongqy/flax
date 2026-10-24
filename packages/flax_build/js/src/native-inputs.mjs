import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readdir, stat } from 'node:fs/promises';
import { relative } from 'node:path';

const execute = promisify(execFile);
async function plist(path) {
  const { stdout } = await execute('plutil', ['-convert', 'json', '-o', '-', path]);
  return JSON.parse(stdout);
}

/** Expand explicit Apple containers into concrete, package-contained code inputs. */
export async function nativeInputs(directory, library, inputFile) {
  const lib = { ...library, binaries: { ...library.binaries } };
  const binary = async (path) => {
    const absolute = await inputFile(directory, path);
    if (!(await stat(absolute)).isDirectory()) return path;
    if (!path.endsWith('.framework')) throw new Error(`Expected a framework: ${path}`);
    const infoPath = await inputFile(directory, `${path}/Info.plist`).catch((error) => {
      if (error.code !== 'ENOENT') throw error;
      return inputFile(directory, `${path}/Resources/Info.plist`);
    });
    const info = await plist(infoPath);
    const executable = info.CFBundleExecutable;
    if (typeof executable !== 'string' || !executable || executable.includes('/'))
      throw new Error(`Invalid framework executable: ${path}`);
    // Resolve versioned framework symlinks before staging only its C ABI binary.
    return relative(directory, await inputFile(directory, `${path}/${executable}`));
  };
  if (lib.xcframework !== undefined) {
    if (Object.keys(lib.binaries).length)
      throw new Error('Use xcframework or binaries, not both');
    await inputFile(directory, lib.xcframework);
    const info = await plist(
      await inputFile(directory, `${lib.xcframework}/Info.plist`),
    );
    if (!Array.isArray(info.AvailableLibraries))
      throw new Error('Invalid XCFramework manifest');
    for (const slice of info.AvailableLibraries) {
      if (
        !slice.SupportedArchitectures?.includes('arm64') ||
        !lib.targets.includes(slice.SupportedPlatform)
      )
        continue;
      const os = slice.SupportedPlatform;
      if (
        slice.SupportedPlatformVariant &&
        slice.SupportedPlatformVariant !== 'simulator'
      )
        continue;
      const key = `${os}-arm64${os === 'ios' ? (slice.SupportedPlatformVariant === 'simulator' ? '-simulator' : '-device') : ''}`;
      if (lib.binaries[key]) throw new Error(`Ambiguous XCFramework slice: ${key}`);
      lib.binaries[key] = await binary(
        `${lib.xcframework}/${slice.LibraryIdentifier}/${slice.LibraryPath}`,
      );
    }
    if (!Object.keys(lib.binaries).length)
      throw new Error('XCFramework has no matching arm64 slice');
  } else {
    for (const [target, path] of Object.entries(lib.binaries))
      lib.binaries[target] = await binary(path);
  }
  if (lib.kind === 'cmake') {
    const c = lib.cmake;
    if (
      !c ||
      typeof c !== 'object' ||
      Array.isArray(c) ||
      Object.keys(c).some(
        (key) => !['directory', 'target', 'output', 'defines'].includes(key),
      ) ||
      typeof c.directory !== 'string' ||
      typeof c.output !== 'string' ||
      !/\.(a|dylib)$/.test(c.output) ||
      c.output.startsWith('/') ||
      c.output.split('/').includes('..') ||
      (c.target !== undefined &&
        (typeof c.target !== 'string' || c.target.startsWith('-')))
    )
      throw new Error('Invalid CMake native input');
    if (
      c.defines !== undefined &&
      (!c.defines ||
        typeof c.defines !== 'object' ||
        Array.isArray(c.defines) ||
        Object.entries(c.defines).some(
          ([key, value]) =>
            !/^[A-Za-z_][A-Za-z0-9_]*$/.test(key) ||
            typeof value !== 'string' ||
            key.startsWith('CMAKE_'),
        ))
    )
      throw new Error(
        'CMake defines must be named string values; toolchain variables are reserved',
      );
    await inputFile(directory, `${c.directory}/CMakeLists.txt`);
    const files = [];
    const walk = async (path, ancestors = new Set()) => {
      const absolute = await inputFile(directory, path);
      if ((await stat(absolute)).isDirectory()) {
        if (ancestors.has(absolute))
          throw new Error('CMake input contains a directory cycle');
        const next = new Set([...ancestors, absolute]);
        for (const name of (await readdir(absolute)).sort()) {
          if (['.git', 'node_modules', 'build', 'CMakeFiles'].includes(name)) continue;
          await walk(`${path}/${name}`, next);
        }
      } else files.push(path);
    };
    await walk(c.directory);
    lib.sources = files;
  }
  return lib;
}

export function orderNativeLibraries(libraries) {
  const byId = new Map(libraries.map((lib) => [lib.id, lib]));
  const ordered = [],
    visiting = new Set(),
    done = new Set();
  const visit = (lib) => {
    if (done.has(lib.id)) return;
    if (visiting.has(lib.id)) throw new Error(`Native dependency cycle: ${lib.id}`);
    visiting.add(lib.id);
    for (const id of lib.dependencies) {
      const dependency = byId.get(id);
      if (!dependency) throw new Error(`Missing selected native dependency: ${id}`);
      visit(dependency);
    }
    visiting.delete(lib.id);
    done.add(lib.id);
    ordered.push(lib);
  };
  for (const lib of libraries) visit(lib);
  return ordered;
}
