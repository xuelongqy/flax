import ffi, { Buffer, toBuffer } from '@flax/ffi';
import { runNodeContractProbe } from './contract-probe.js';
import { runResourceProbe } from './resource-probe.js';
import { runDlopenProbe } from './probe.js';
import { runBufferProbe } from './buffer-probe.js';
import { runBufferMemoryProbe } from './buffer-memory-probe.js';
import { runCompleteProbe } from './complete-probe.js';
import { runCounterProbe } from './counter-probe.js';

runDlopenProbe({
  viewBytes: toBuffer,
  sourceBytes: (bytes) => Buffer.from(bytes),
});
Object.assign(globalThis.dlopenResult, runBufferProbe(Buffer), runBufferMemoryProbe());
runCompleteProbe();
Object.assign(
  globalThis.dlopenResult,
  runNodeContractProbe(ffi, globalThis.fixturePath, Buffer),
);
Object.assign(globalThis.dlopenResult, runResourceProbe(ffi));
globalThis.ffiRunCounterProbe = runCounterProbe;
