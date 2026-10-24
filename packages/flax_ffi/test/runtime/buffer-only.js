import { runBufferProbe } from './buffer-probe.js';

globalThis.dlopenResult = {
  ...runBufferProbe(),
  ffiAbsent:
    typeof globalThis.__flaxFfiDlopen === 'undefined' &&
    typeof globalThis.__flaxFfiMemory === 'undefined',
};
if (!globalThis.dlopenResult.ffiAbsent) throw new Error('Unexpected FFI installation');
