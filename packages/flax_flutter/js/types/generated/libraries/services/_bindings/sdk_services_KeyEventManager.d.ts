import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyboard';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_KeyMessage';
import '@flax/flutter/services/_bindings/sdk_services_KeyMessage';
import '@flax/dart/ui/_bindings/sdk_dart_ui_KeyData';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface KeyEventManager extends Readonly<{
    "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEventManager": readonly [];
}> {
    readonly __KeyEventManager: unique symbol;
    readonly [_flaxDartTypeValue]: KeyEventManager;
}
export interface KeyEventManager {
    readonly [_flaxDartTypeValue]: KeyEventManager;
    handleKeyData(data: Readonly<{
        "__flaxBound:dart:ui::KeyData": readonly [];
    }>): boolean;
    handleRawKeyMessage(message: unknown | null): Promise<DartMap<string, unknown | null>>;
    get keyMessageHandler(): ((message: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyMessage": readonly [];
    }>) => boolean) | null;
    set keyMessageHandler(value: ((message: upstream2.KeyMessage) => boolean) | null);
}
export declare abstract class KeyEventManager extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeyEventManager>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: KeyEventManager;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:KeyEventManager", readonly [], false];
    constructor(_hardwareKeyboard: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [];
    }>, _rawKeyboard: Readonly<{
        "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyboard": readonly [];
    }>);
}
export declare namespace KeyEventManager {
    function implement(args: [_hardwareKeyboard: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [];
    }>, _rawKeyboard: Readonly<{
        "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyboard": readonly [];
    }>], implementation: {}): KeyEventManager;
}
