import { nativeProvider } from '@flax/ffi';

const provider = nativeProvider('@flax/ffi-fixture');
// Export the native functions directly, without another per-call wrapper.
export const { add, counter, alias, update, close, inline, stats } = provider;
