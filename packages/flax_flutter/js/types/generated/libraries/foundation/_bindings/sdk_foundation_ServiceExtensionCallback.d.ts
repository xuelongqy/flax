import { type DartMap, type DartMapInput } from '@flax/core/bindings';
export type ServiceExtensionCallback = ((parameters: DartMapInput<string, string, string, string>) => Promise<DartMap<string, unknown | null>>);
export type ServiceExtensionCallbackInput = ((parameters: DartMap<string, string>) => Promise<DartMapInput<string, unknown | null, string, unknown | null>>);
