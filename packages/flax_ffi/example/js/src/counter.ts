import { DynamicLibrary, NativeFinalizer } from '@flax/ffi';

const lib = DynamicLibrary.codeAsset('@flax/example-ffi/counter');
export const native = lib.getFunctions({
  counter_create: { arguments: ['int32'], return: 'pointer' },
  counter_add: { arguments: ['pointer', 'int32'], return: 'int32' },
  counter_destroy: { arguments: ['pointer'] },
  bytes_increment: { arguments: ['pointer', 'int32'] },
  message_create: { return: 'pointer' },
  message_destroy: { arguments: ['pointer'] },
});
const finalizer = new NativeFinalizer(native.counter_destroy);

// The Session owns the library; live Counter objects may still need its code.
export class Counter {
  #pointer: bigint;

  constructor(value = 0) {
    const pointer = native.counter_create(value);
    if (pointer === 0n) throw new Error('Counter allocation failed');
    try {
      finalizer.attach(this, pointer);
    } catch (error) {
      native.counter_destroy(pointer);
      throw error;
    }
    this.#pointer = pointer;
  }

  add(amount: number): number {
    return native.counter_add(this.#pointer, amount);
  }
}
