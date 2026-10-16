import { fileURLToPath, pathToFileURL } from 'node:url';
import { createModuleDeliveryResolver } from './modules.mjs';

const resolveDelivery = createModuleDeliveryResolver();

export async function resolve(specifier, context, nextResolve) {
  if (!context.parentURL?.startsWith('file:')) return nextResolve(specifier, context);
  const filename = await resolveDelivery(specifier, fileURLToPath(context.parentURL));
  if (!filename) return nextResolve(specifier, context);
  return { url: pathToFileURL(filename).href, shortCircuit: true };
}
