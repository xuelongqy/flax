import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_Stream';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface EventChannel extends Readonly<{
    "__flaxBound:package:flutter/src/services/platform_channel.dart::EventChannel": readonly [];
}> {
    readonly __EventChannel: unique symbol;
    readonly [_flaxDartTypeValue]: EventChannel;
    readonly name: string;
    readonly codec: upstream0.MethodCodec;
    readonly binaryMessenger: upstream1.BinaryMessenger;
    receiveBroadcastStream(_flaxArg_617267756d656e7473?: unknown | null): upstream2.Stream<unknown | null>;
}
export declare function _EventChannelFactory(name: string, codec?: Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [];
}>, binaryMessenger?: Readonly<{
    "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
}> | null): EventChannel;
export interface _EventChannelNative extends EventChannel {
    readonly [_flaxDartTypeValue]: _EventChannelNative;
    receiveBroadcastStream(_flaxArg_617267756d656e7473?: unknown | null): upstream2.Stream<unknown | null>;
    get name(): string;
    get codec(): upstream0.MethodCodec;
    get binaryMessenger(): upstream1.BinaryMessenger;
}
export declare abstract class _EventChannelNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<EventChannel>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: EventChannel;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:EventChannel", readonly [], false];
    constructor(name: string, codec?: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [];
    }>, binaryMessenger?: Readonly<{
        "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
    }> | null);
}
export declare namespace _EventChannelFactory {
    function implement(args: [name: string, codec?: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [];
    }>, binaryMessenger?: Readonly<{
        "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
    }> | null], implementation: {}): EventChannel;
}
declare const _EventChannelBinding: typeof _EventChannelFactory & (new (name: string, codec?: Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [];
}>, binaryMessenger?: Readonly<{
    "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
}> | null) => _EventChannelNative);
export declare const EventChannel: typeof _EventChannelBinding & _FlaxInstanceType<EventChannel> & _FlaxDartType<EventChannel, readonly ["class", "flax.core/sdk_services#type:EventChannel", readonly [], false]>;
export {};
