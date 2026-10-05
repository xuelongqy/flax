import { type DartEnum } from '@flax/core/bindings';
export interface ConnectionState extends DartEnum {
    readonly type: "flax.core/flutter#type:ConnectionState";
}
export declare const ConnectionState: Readonly<{
    none: ConnectionState;
    waiting: ConnectionState;
    active: ConnectionState;
    done: ConnectionState;
}>;
