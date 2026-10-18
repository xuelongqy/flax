import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/dart/ui/_bindings/flutter_Size';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ViewConstraints extends Readonly<{
    "__flaxBound:dart:ui::ViewConstraints": readonly [];
}> {
    readonly __ViewConstraints: unique symbol;
    readonly [_flaxDartTypeValue]: ViewConstraints;
}
export interface ViewConstraints {
    readonly [_flaxDartTypeValue]: ViewConstraints;
    isSatisfiedBy(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
    toString(): string;
    operatorDivide(factor: number): ViewConstraints;
    get minWidth(): number;
    get maxWidth(): number;
    get minHeight(): number;
    get maxHeight(): number;
    get isTight(): boolean;
}
export declare abstract class ViewConstraints extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ViewConstraints>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ViewConstraints;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:ViewConstraints", readonly [], false];
    constructor(options?: {
        minWidth?: number | undefined;
        maxWidth?: number | undefined;
        minHeight?: number | undefined;
        maxHeight?: number | undefined;
    });
}
export declare namespace ViewConstraints {
    function implement(args: [options?: {
        minWidth?: number | undefined;
        maxWidth?: number | undefined;
        minHeight?: number | undefined;
        maxHeight?: number | undefined;
    }], implementation: {}): ViewConstraints;
}
