import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type { DartRecord as _FlaxDartRecord } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export type Record = _FlaxDartRecord<Readonly<globalThis.Record<string, unknown>>>;
export declare const Record: object & _FlaxInstanceType<Record> & _FlaxDartType<Record, readonly ["class", "flax.core/flutter#type:Record", readonly [], false]>;
