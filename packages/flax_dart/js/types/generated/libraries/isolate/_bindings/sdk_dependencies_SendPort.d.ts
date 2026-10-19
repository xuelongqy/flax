import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SendPort extends Readonly<{
    "__flaxBound:dart:isolate::SendPort": readonly [];
}>, Readonly<{
    "__flaxBound:dart:isolate::Capability": readonly [];
}> {
    readonly __SendPort: unique symbol;
    readonly [_flaxDartTypeValue]: SendPort;
    send(message: unknown | null): void;
}
export declare const SendPort: object & _FlaxInstanceType<SendPort> & _FlaxDartType<SendPort, readonly ["class", "flax.core/sdk_dependencies#type:SendPort", readonly [], false]>;
