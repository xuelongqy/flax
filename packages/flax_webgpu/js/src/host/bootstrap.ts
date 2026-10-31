import { installWebGpu } from '../webgpu.js';
export function install(
  global: typeof globalThis,
  call: (operation: string, ...args: unknown[]) => unknown,
) {
  return installWebGpu(global, call);
}
