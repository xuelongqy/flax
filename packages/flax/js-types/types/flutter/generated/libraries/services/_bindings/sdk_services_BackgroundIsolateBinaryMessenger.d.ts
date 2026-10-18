import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RootIsolateToken';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BackgroundIsolateBinaryMessenger extends Omit<upstream0.BinaryMessenger, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/_background_isolate_binary_messenger_io.dart::BackgroundIsolateBinaryMessenger": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger": readonly [];
}> {
    readonly __BackgroundIsolateBinaryMessenger: unique symbol;
    readonly [_flaxDartTypeValue]: BackgroundIsolateBinaryMessenger;
    handlePlatformMessage(channel: string, data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void) | null): Promise<void>;
    send(channel: string, message: globalThis.DataView | null): Promise<globalThis.DataView | null> | null;
    setMessageHandler(channel: string, handler: ((message: globalThis.DataView | null) => Promise<globalThis.DataView | null> | null) | null): void;
}
export declare namespace _BackgroundIsolateBinaryMessengerFactory {
    const instance: upstream0.BinaryMessenger;
}
export declare namespace _BackgroundIsolateBinaryMessengerFactory {
    function ensureInitialized(token: Readonly<{
        "__flaxBound:dart:ui::RootIsolateToken": readonly [];
    }>): void;
}
export declare const BackgroundIsolateBinaryMessenger: typeof _BackgroundIsolateBinaryMessengerFactory & _FlaxInstanceType<BackgroundIsolateBinaryMessenger> & _FlaxDartType<BackgroundIsolateBinaryMessenger, readonly ["class", "flax.core/sdk_services#type:BackgroundIsolateBinaryMessenger", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "handlePlatformMessage" | "send" | "setMessageHandler" | "__flaxBound:package:flutter/src/services/_background_isolate_binary_messenger_io.dart::BackgroundIsolateBinaryMessenger" | "__flaxBound:package:flutter/src/services/binary_messenger.dart::BinaryMessenger";
export {};
