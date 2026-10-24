globalThis.packageResult = {
  checks: 1,
  ffiAbsent:
    typeof globalThis.ffi === 'undefined' &&
    typeof globalThis.__flaxFfiProviders === 'undefined',
};
if (!globalThis.packageResult.ffiAbsent) throw new Error('Unexpected FFI installation');
