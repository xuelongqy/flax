import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
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
    readonly name: string;
    readonly codec: upstream0.MessageCodec<T>;
    readonly binaryMessenger: upstream1.BinaryMessenger;
    send(message: (T | DartInput<T>)): Promise<T | null>;
    setMessageHandler(handler: ((message: T | null) => Promise<(T | DartInput<T>)>) | null): void;
}
export declare function _BasicMessageChannelFactory<T extends unknown | null = unknown | null>(name: string, codec: Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [_FlaxDartOutput<T>];
}>, options?: {
    binaryMessenger?: Readonly<{
        "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
    }> | null | undefined;
}): BasicMessageChannel<T>;
export declare function _BasicMessageChannelFactory(name: string, codec: Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
}>, options?: {
    binaryMessenger?: Readonly<{
        "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
    }> | null | undefined;
}): BasicMessageChannel<unknown | null>;
export interface _BasicMessageChannelNative<T extends unknown | null = unknown | null> extends BasicMessageChannel<T> {
    readonly [_flaxDartTypeValue]: _BasicMessageChannelNative<T>;
    send(message: (T | DartInput<T>)): Promise<T | null>;
    setMessageHandler(handler: ((message: T | null) => Promise<(T | DartInput<T>)>) | null): void;
    get name(): string;
    get codec(): upstream0.MessageCodec<T>;
    get binaryMessenger(): upstream1.BinaryMessenger;
}
export declare abstract class _BasicMessageChannelNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
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
export declare namespace _BasicMessageChannelFactory {
    function implement<T extends unknown | null = unknown | null>(args: [name: string, codec: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
    }>, options?: {
        binaryMessenger?: Readonly<{
            "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
        }> | null | undefined;
    }], implementation: {}): BasicMessageChannel<T>;
}
declare const _BasicMessageChannelBinding: typeof _BasicMessageChannelFactory & (new <T extends unknown | null = unknown | null>(name: string, codec: Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
}>, options?: {
    binaryMessenger?: Readonly<{
        "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
    }> | null | undefined;
}) => _BasicMessageChannelNative<T>);
export declare const BasicMessageChannel: typeof _BasicMessageChannelBinding & _FlaxInstanceType<BasicMessageChannel<unknown | null>> & _FlaxDartType<BasicMessageChannel<unknown | null>, readonly ["class", "flax.core/sdk_services#type:BasicMessageChannel", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (name: string, codec: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
    }>, options?: {
        binaryMessenger?: Readonly<{
            "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
        }> | null | undefined;
    }) => _BasicMessageChannelNative<_Selected0>) & {
        (name: string, codec: Readonly<{
            "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [_Selected0];
        }>, options?: {
            binaryMessenger?: Readonly<{
                "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
            }> | null | undefined;
        }): _BasicMessageChannelNative<_Selected0>;
        readonly prototype: _BasicMessageChannelNative<_Selected0>;
        implement(args: readonly [string, Readonly<{
            "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
        }>, options?: {
            binaryMessenger?: Readonly<{
                "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
            }> | null | undefined;
        }], implementation: Partial<_BasicMessageChannelNative<_Selected0>>): _BasicMessageChannelNative<_Selected0>;
    } & _FlaxInstanceType<_BasicMessageChannelNative<_Selected0>> & _FlaxDartType<_BasicMessageChannelNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (name: string, codec: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
    }>, options?: {
        binaryMessenger?: Readonly<{
            "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
        }> | null | undefined;
    }) => _BasicMessageChannelNative<_Selected0>) & {
        (name: string, codec: Readonly<{
            "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [_Selected0];
        }>, options?: {
            binaryMessenger?: Readonly<{
                "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
            }> | null | undefined;
        }): _BasicMessageChannelNative<_Selected0>;
        readonly prototype: _BasicMessageChannelNative<_Selected0>;
        implement(args: readonly [string, Readonly<{
            "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
        }>, options?: {
            binaryMessenger?: Readonly<{
                "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
            }> | null | undefined;
        }], implementation: Partial<_BasicMessageChannelNative<_Selected0>>): _BasicMessageChannelNative<_Selected0>;
    } & _FlaxInstanceType<_BasicMessageChannelNative<_Selected0>> & _FlaxDartType<_BasicMessageChannelNative<_Selected0>> : never : never;
}
export {};
