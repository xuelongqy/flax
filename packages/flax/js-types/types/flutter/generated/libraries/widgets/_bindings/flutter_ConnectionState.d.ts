import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface ConnectionState extends DartEnum {
    readonly __ConnectionState: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const ConnectionState: Readonly<{
    none: ConnectionState;
    waiting: ConnectionState;
    active: ConnectionState;
    done: ConnectionState;
    values: readonly ConnectionState[];
} & _FlaxInstanceType<ConnectionState> & _FlaxDartType<ConnectionState, readonly ["class", "flax.core/flutter#type:ConnectionState", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
