import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BasicMessageChannel<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/services/platform_channel.dart::BasicMessageChannel": readonly [T];
}> {
    readonly __BasicMessageChannel: unique symbol;
    readonly [_flaxDartTypeValue]: BasicMessageChannel<T>;
}
export interface BasicMessageChannel<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: BasicMessageChannel<T>;
    send(message: (T | DartInput<T>)): Promise<T | null>;
    setMessageHandler(handler: ((message: T | null) => Promise<(T | DartInput<T>)>) | null): void;
    get name(): string;
    get codec(): upstream0.MessageCodec<T>;
    get binaryMessenger(): upstream1.BinaryMessenger;
}
export declare abstract class BasicMessageChannel<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BasicMessageChannel<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BasicMessageChannel<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:BasicMessageChannel", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(name: string, codec: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
    }>, options?: {
        binaryMessenger?: Readonly<{
            "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
        }> | null | undefined;
    });
}
export declare namespace BasicMessageChannel {
    function implement<T extends unknown | null = unknown | null>(args: [name: string, codec: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
    }>, options?: {
        binaryMessenger?: Readonly<{
            "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
        }> | null | undefined;
    }], implementation: {}): BasicMessageChannel<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (name: string, codec: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
    }>, options?: {
        binaryMessenger?: Readonly<{
            "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
        }> | null | undefined;
    }) => BasicMessageChannel<_Selected0>) & {
        readonly prototype: BasicMessageChannel<_Selected0>;
        implement(args: readonly [string, Readonly<{
            "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
        }>, options?: {
            binaryMessenger?: Readonly<{
                "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
            }> | null | undefined;
        }], implementation: Partial<BasicMessageChannel<_Selected0>>): BasicMessageChannel<_Selected0>;
    } & _FlaxInstanceType<BasicMessageChannel<_Selected0>> & _FlaxDartType<BasicMessageChannel<_Selected0>> : never : never;
}
export {};
