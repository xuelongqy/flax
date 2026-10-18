import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface OffsetPair extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/recognizer.dart::OffsetPair": readonly [];
}> {
    readonly __OffsetPair: unique symbol;
    readonly [_flaxDartTypeValue]: OffsetPair;
}
export interface OffsetPair {
    readonly [_flaxDartTypeValue]: OffsetPair;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/gestures/recognizer.dart::OffsetPair": readonly [];
    }>): OffsetPair;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:flutter/src/gestures/recognizer.dart::OffsetPair": readonly [];
    }>): OffsetPair;
    get local(): upstream0.Offset;
    get global(): upstream0.Offset;
}
export declare abstract class OffsetPair extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OffsetPair>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: OffsetPair;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:OffsetPair", readonly [], false];
    constructor(options: {
        local: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        global: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    });
}
export declare namespace OffsetPair {
    function implement(args: [options: {
        local: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        global: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }], implementation: {}): OffsetPair;
}
export declare namespace OffsetPair {
    const zero: OffsetPair;
}
