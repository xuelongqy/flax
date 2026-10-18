import { type DartMap, type DartMapInput } from '@flax/core/bindings';
export type AppPrivateCommandCallback = ((action: string, data: DartMapInput<string, unknown | null, string, unknown | null>) => void);
export type AppPrivateCommandCallbackInput = ((action: string, data: DartMap<string, unknown | null>) => void);
