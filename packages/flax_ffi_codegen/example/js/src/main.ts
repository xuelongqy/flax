import type {} from '@flax/core/host';
import { DynamicLibrary } from '@flax/ffi';
import { Text, runApp } from '@flax/flutter/widgets';
import { createBindings } from './generated/counter/bindings.g.js';

const library = DynamicLibrary.codeAsset('@flax/example-ffi-codegen/counter');
const { Counter } = createBindings(library);
function result() {
  const counter = new Counter(40);
  return counter.add(2); // GC or Session close releases the native Counter later.
}
const value = result();
if (value !== 42) throw new Error(`Unexpected native value: ${value}`);
runApp(new Text(`Generated C binding\nCounter: ${value}`));
console.log(`FLAX_FFI_CODEGEN_EXAMPLE_RESULT ${JSON.stringify({ value })}`);
