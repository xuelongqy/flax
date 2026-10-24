import ffi from 'node:ffi';
import { Buffer } from 'node:buffer';
import { runNodeContractProbe } from './contract-probe.js';

if (!process.argv[2]) throw new Error('Pass the compiled dynamic fixture path');
console.log(
  JSON.stringify({
    node: process.version,
    ...runNodeContractProbe(ffi, process.argv[2], Buffer),
  }),
);
