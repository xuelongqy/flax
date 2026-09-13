import { installCanvas } from '../canvas.js';

type Call = (operation: string, ...args: unknown[]) => unknown;
export function install(global: typeof globalThis, call: Call) {
  return installCanvas(global, call);
}
