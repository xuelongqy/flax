globalThis.dlopenResult = {
  ffiAbsent:
    typeof globalThis.__flaxFfiDlopen === 'undefined' &&
    typeof globalThis.__flaxFfiMemory === 'undefined',
};
if (!globalThis.dlopenResult.ffiAbsent) throw new Error('Unexpected FFI installation');
