import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MessageCodec<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [T];
}> {
    readonly __MessageCodec: unique symbol;
    readonly [_flaxDartTypeValue]: MessageCodec<T>;
    encodeMessage(message: (T | DartInput<T>)): globalThis.DataView | null;
    decodeMessage(message: globalThis.DataView | null): T | null;
}
export declare namespace _MessageCodecFactory {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {
        encodeMessage: ((message: T) => globalThis.DataView | null);
        decodeMessage: ((message: globalThis.DataView | null) => (T | DartInput<T>) | null);
    }): MessageCodec<T>;
}
export declare const MessageCodec: typeof _MessageCodecFactory & _FlaxInstanceType<MessageCodec<unknown | null>> & _FlaxDartType<MessageCodec<unknown | null>, readonly ["class", "flax.core/sdk_services#type:MessageCodec", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: MessageCodec<_Selected0>;
        implement(args: readonly [], implementation: Partial<MessageCodec<_Selected0>>): MessageCodec<_Selected0>;
    } & _FlaxInstanceType<MessageCodec<_Selected0>> & _FlaxDartType<MessageCodec<_Selected0>> : never : never;
}
export {};
