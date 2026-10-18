import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BinaryMessenger extends Readonly<{
    "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
}> {
    readonly __BinaryMessenger: unique symbol;
    readonly [_flaxDartTypeValue]: BinaryMessenger;
    handlePlatformMessage(channel: string, data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void) | null): Promise<void>;
    send(channel: string, message: globalThis.DataView | null): Promise<globalThis.DataView | null> | null;
    setMessageHandler(channel: string, handler: ((message: globalThis.DataView | null) => Promise<globalThis.DataView | null> | null) | null): void;
}
export declare namespace _BinaryMessengerFactory {
    function implement(args: [], implementation: {
        handlePlatformMessage: ((channel: string, data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void) | null) => Promise<void>);
        send: ((channel: string, message: globalThis.DataView | null) => Promise<globalThis.DataView | null> | null);
        setMessageHandler: ((channel: string, handler: ((message: globalThis.DataView | null) => Promise<globalThis.DataView | null> | null) | null) => void);
    }): BinaryMessenger;
}
export declare const BinaryMessenger: typeof _BinaryMessengerFactory & _FlaxInstanceType<BinaryMessenger> & _FlaxDartType<BinaryMessenger, readonly ["class", "flax.core/sdk_services#type:BinaryMessenger", readonly [], false]>;
