import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { createHash } from 'node:crypto';
import { readFile, realpath } from 'node:fs/promises';
import { resolve } from 'node:path';

const execute = promisify(execFile);
export const digest = (value) => createHash('sha256').update(value).digest('hex');
export async function command(program, args) {
  try {
    return (
      await execute(program, args, { maxBuffer: 16 * 1024 * 1024 })
    ).stdout.trim();
  } catch (error) {
    throw new Error(`${program} failed: ${error.stderr?.trim() || error.message}`, {
      cause: error,
    });
  }
}

/** Infer the compiler context once; native compilation consumes the same triple/sysroot. */
export async function resolveTarget({ target, deploymentTarget } = {}) {
  const aliases = {
    'ios-simulator-arm64': 'ios-arm64-simulator',
    'ios-device-arm64': 'ios-arm64-device',
    'ios-arm64': 'ios-arm64-device',
  };
  target ??= process.env.FLAX_TARGET ?? process.env.FLAX_CHECK_TARGET;
  if (!target && process.env.PLATFORM_NAME)
    target = {
      iphonesimulator: 'ios-arm64-simulator',
      iphoneos: 'ios-arm64-device',
      macosx: 'macos-arm64',
    }[process.env.PLATFORM_NAME];
  target ??=
    process.platform === 'darwin' && process.arch === 'arm64'
      ? 'macos-arm64'
      : undefined;
  target = aliases[target] ?? target;
  if (!['macos-arm64', 'ios-arm64-simulator', 'ios-arm64-device'].includes(target))
    throw new Error(
      'FFI codegen currently requires macos-arm64, ios-arm64-simulator or ios-arm64-device',
    );
  const os = target.startsWith('ios-') ? 'ios' : 'macos';
  deploymentTarget ??=
    process.env.FLAX_DEPLOYMENT_TARGET ??
    (os === 'ios'
      ? process.env.IPHONEOS_DEPLOYMENT_TARGET
      : process.env.MACOSX_DEPLOYMENT_TARGET) ??
    (os === 'ios' ? '16.3' : '15.0');
  if (!/^\d+\.\d+(?:\.\d+)?$/.test(deploymentTarget))
    throw new Error('Invalid deployment target');
  const sdkName =
    os === 'macos'
      ? 'macosx'
      : target.endsWith('simulator')
        ? 'iphonesimulator'
        : 'iphoneos';
  let sdk, compiler;
  try {
    sdk = await realpath(await command('xcrun', ['--sdk', sdkName, '--show-sdk-path']));
    compiler = await realpath(
      await command('xcrun', ['--sdk', sdkName, '--find', 'clang']),
    );
  } catch (error) {
    throw new Error(
      `Xcode SDK "${sdkName}" or Clang is unavailable. Install Xcode with this SDK, select it with "sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer", then verify "xcrun --sdk ${sdkName} --find clang". ${error.message}`,
      { cause: error },
    );
  }
  const compilerVersion = await command(compiler, ['--version']);
  return {
    target,
    os,
    architecture: 'arm64',
    deploymentTarget,
    sdkName,
    sdk,
    deploymentFlag: `-m${os === 'macos' ? 'macosx' : target.endsWith('simulator') ? 'ios-simulator' : 'iphoneos'}-version-min=${deploymentTarget}`,
    triple: `arm64-apple-${os === 'ios' ? 'ios' : 'macos'}${deploymentTarget}${target.endsWith('simulator') ? '-simulator' : ''}`,
    sdkDigest: digest(await readFile(resolve(sdk, 'SDKSettings.json'))),
    compiler,
    compilerVersion,
    compilerDigest: digest(compilerVersion),
  };
}
