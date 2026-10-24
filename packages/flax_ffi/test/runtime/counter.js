import { dlopen, NativeFinalizer } from '@flax/ffi';

const { functions } = dlopen(null, {
  flax_static_counter_create: { arguments: ['int32'], return: 'pointer' },
  flax_static_counter_get: { arguments: ['pointer'], return: 'int32' },
  flax_static_counter_destroy: { arguments: ['pointer'], return: 'void' },
});
const finalizer = new NativeFinalizer(functions.flax_static_counter_destroy);

export class Counter {
  #pointer;

  constructor(initialValue = 0) {
    const pointer = functions.flax_static_counter_create(initialValue);
    if (pointer === 0n) throw new Error('Could not allocate Counter');
    try {
      finalizer.attach(this, pointer);
    } catch (error) {
      // Failed registration leaves ownership with the constructor.
      functions.flax_static_counter_destroy(pointer);
      throw error;
    }
    this.#pointer = pointer;
  }

  get value() {
    return functions.flax_static_counter_get(this.#pointer);
  }
}
