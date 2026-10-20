import { type DartMap, type DartMapInput } from '@flax/core/bindings';
export type RegisterServiceExtensionCallback = ((options: {
    callback: ((parameters: DartMap<string, string>) => Promise<DartMapInput<string, unknown | null, string, unknown | null>>);
    name: string;
}) => void);
export type RegisterServiceExtensionCallbackInput = ((options: {
    callback: ((parameters: DartMapInput<string, string, string, string>) => Promise<DartMap<string, unknown | null>>);
    name: string;
}) => void);
