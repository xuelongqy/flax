import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { createModuleDeliveryResolver } from './modules.mjs';

const resolveDelivery = createModuleDeliveryResolver();

export async function resolve(specifier, context, nextResolve) {
  if (!context.parentURL?.startsWith('file:')) return nextResolve(specifier, context);
  // The Buffer polyfill uses this CommonJS package entry to avoid Node's builtin.
  if (specifier === 'buffer/') {
    const filename = createRequire(context.parentURL).resolve(specifier);
    return { url: pathToFileURL(filename).href, shortCircuit: true };
  }
  const filename = await resolveDelivery(specifier, fileURLToPath(context.parentURL));
  if (!filename) return nextResolve(specifier, context);
  return { url: pathToFileURL(filename).href, shortCircuit: true };
}
