import ffi from '@flax/ffi';
const lib = ffi.DynamicLibrary.process();
const stop = lib.getFunction('flax_static_worker_stop', {});
const callback = lib.registerCallback({}, () => {}, { mode: 'listener', stop });
const start = lib.getFunction('flax_static_worker_start', {
  arguments: ['pointer'],
  return: 'uint32',
});
if (start(callback) !== 1) throw new Error('Shutdown producer did not start');
globalThis.shutdownOwner = {};
new ffi.NativeFinalizer(
  lib.getFunction('flax_static_finalizer_free', { arguments: ['pointer'] }),
).attach(shutdownOwner, ffi.malloc(8));
const allocate = lib.getFunction('flax_static_async_alloc', { return: 'pointer' });
const release = lib.getFunction('flax_static_async_free', { arguments: ['pointer'] });
ffi.callAsync(allocate, [], { onDiscard: release }).then(release);
