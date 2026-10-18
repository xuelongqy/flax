import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_MethodCall';
import '@flax/flutter/services/_bindings/sdk_services_MethodCall';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MethodChannel extends Readonly<{
    "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [];
}> {
    readonly __MethodChannel: unique symbol;
    readonly [_flaxDartTypeValue]: MethodChannel;
    readonly [_flaxDartMethodCases]?: {
        invokeMethod: _FlaxSignature0;
        invokeListMethod: _FlaxSignature1;
        invokeMapMethod: _FlaxSignature2;
    };
}
export interface MethodChannel {
    readonly [_flaxDartTypeValue]: MethodChannel;
    readonly [_flaxDartMethodCases]?: {
        invokeMethod: _FlaxSignature3;
        invokeListMethod: _FlaxSignature4;
        invokeMapMethod: _FlaxSignature5;
    };
    invokeMethod<T extends unknown | null = unknown | null>(method: string, _flaxArg_617267756d656e7473?: unknown | null): Promise<_FlaxDartOutput<T> | null>;
    invokeListMethod<T extends unknown | null = unknown | null>(method: string, _flaxArg_617267756d656e7473?: unknown | null): Promise<DartList<_FlaxDartOutput<T>> | null>;
    invokeMapMethod<K extends unknown | null = unknown | null, V extends unknown | null = unknown | null>(method: string, _flaxArg_617267756d656e7473?: unknown | null): Promise<DartMap<_FlaxDartOutput<K>, _FlaxDartOutput<V>> | null>;
    setMethodCallHandler(handler: ((call: upstream2.MethodCall) => Promise<unknown | null>) | null): void;
    get name(): string;
    get codec(): upstream0.MethodCodec;
    get binaryMessenger(): upstream1.BinaryMessenger;
}
export declare abstract class MethodChannel extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MethodChannel>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MethodChannel;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MethodChannel", readonly [], false];
    constructor(name: string, codec?: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [];
    }>, binaryMessenger?: Readonly<{
        "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
    }> | null);
}
export declare namespace MethodChannel {
    function implement(args: [name: string, codec?: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [];
    }>, binaryMessenger?: Readonly<{
        "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
    }> | null], implementation: {}): MethodChannel;
}
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (method: string, _flaxArg_617267756d656e7473?: unknown | null) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (method: string, _flaxArg_617267756d656e7473?: unknown | null) => Promise<DartList<_Selected0> | null> : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (method: string, _flaxArg_617267756d656e7473?: unknown | null) => Promise<DartMap<_Selected0, _Selected1> | null> : never : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (method: string, _flaxArg_617267756d656e7473?: unknown | null) => Promise<_Selected0 | null> : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (method: string, _flaxArg_617267756d656e7473?: unknown | null) => Promise<DartList<_Selected0> | null> : never : never;
}
interface _FlaxSignature5 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (method: string, _flaxArg_617267756d656e7473?: unknown | null) => Promise<DartMap<_Selected0, _Selected1> | null> : never : never : never;
}
export {};
