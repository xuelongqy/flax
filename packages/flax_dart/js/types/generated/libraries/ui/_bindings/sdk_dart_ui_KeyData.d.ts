import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_KeyEventType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_KeyEventType';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_KeyEventDeviceType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_KeyEventDeviceType';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface KeyData extends Readonly<{
    "__flaxBound:dart:ui::KeyData": readonly [];
}> {
    readonly __KeyData: unique symbol;
    readonly [_flaxDartTypeValue]: KeyData;
    readonly timeStamp: upstream0.Duration;
    readonly type: upstream1.KeyEventType;
    readonly deviceType: upstream2.KeyEventDeviceType;
    readonly physical: number;
    readonly logical: number;
    readonly character: string | null;
    readonly synthesized: boolean;
    toString(): string;
    toStringFull(): string;
}
export declare function _KeyDataFactory(options: {
    timeStamp: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>;
    type: upstream1.KeyEventType;
    physical: number;
    logical: number;
    character: string | null;
    synthesized: boolean;
    deviceType?: upstream2.KeyEventDeviceType | undefined;
}): KeyData;
export interface _KeyDataNative extends KeyData {
    readonly [_flaxDartTypeValue]: _KeyDataNative;
    toString(): string;
    toStringFull(): string;
    get timeStamp(): upstream0.Duration;
    get type(): upstream1.KeyEventType;
    get deviceType(): upstream2.KeyEventDeviceType;
    get physical(): number;
    get logical(): number;
    get character(): string | null;
    get synthesized(): boolean;
}
export declare abstract class _KeyDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeyData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: KeyData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:KeyData", readonly [], false];
    constructor(options: {
        timeStamp: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>;
        type: upstream1.KeyEventType;
        physical: number;
        logical: number;
        character: string | null;
        synthesized: boolean;
        deviceType?: upstream2.KeyEventDeviceType | undefined;
    });
}
export declare namespace _KeyDataFactory {
    function implement(args: [options: {
        timeStamp: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>;
        type: upstream1.KeyEventType;
        physical: number;
        logical: number;
        character: string | null;
        synthesized: boolean;
        deviceType?: upstream2.KeyEventDeviceType | undefined;
    }], implementation: {}): KeyData;
}
declare const _KeyDataBinding: typeof _KeyDataFactory & (new (options: {
    timeStamp: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>;
    type: upstream1.KeyEventType;
    physical: number;
    logical: number;
    character: string | null;
    synthesized: boolean;
    deviceType?: upstream2.KeyEventDeviceType | undefined;
}) => _KeyDataNative);
export declare const KeyData: typeof _KeyDataBinding & _FlaxInstanceType<KeyData> & _FlaxDartType<KeyData, readonly ["class", "flax.core/sdk_dart_ui#type:KeyData", readonly [], false]>;
export {};
