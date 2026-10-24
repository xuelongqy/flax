// This ESM boundary lets unused helpers drop the CommonJS implementation.
import { Buffer } from 'buffer/';
import { installBufferCompatibility } from './buffer-compat.js';
installBufferCompatibility(Buffer);
export { Buffer };
