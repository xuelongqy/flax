import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface OffsetBase extends Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}> {
    readonly __OffsetBase: unique symbol;
    readonly [_flaxDartTypeValue]: OffsetBase;
}
export interface OffsetBase {
    readonly [_flaxDartTypeValue]: OffsetBase;
    toString(): string;
    operatorLessThan(other: Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
    operatorGreaterThan(other: Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
    operatorLessThanOrEqual(other: Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
    operatorGreaterThanOrEqual(other: Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
    get isInfinite(): boolean;
    get isFinite(): boolean;
}
export declare abstract class OffsetBase extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OffsetBase>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: OffsetBase;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:OffsetBase", readonly [], false];
    constructor(_dx: number, _dy: number);
}
export declare namespace OffsetBase {
    function implement(args: [_dx: number, _dy: number], implementation: {}): OffsetBase;
}
