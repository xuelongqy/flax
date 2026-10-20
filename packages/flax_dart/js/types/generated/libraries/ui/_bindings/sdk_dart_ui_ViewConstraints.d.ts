import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/dart/ui/_bindings/flutter_Size';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ViewConstraints extends Readonly<{
    "__flaxBound:dart:ui::ViewConstraints": readonly [];
}> {
    readonly __ViewConstraints: unique symbol;
    readonly [_flaxDartTypeValue]: ViewConstraints;
    readonly minWidth: number;
    readonly maxWidth: number;
    readonly minHeight: number;
    readonly maxHeight: number;
    readonly isTight: boolean;
    isSatisfiedBy(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
    toString(): string;
    operatorDivide(factor: number): ViewConstraints;
}
export declare function _ViewConstraintsFactory(options?: {
    minWidth?: number | undefined;
    maxWidth?: number | undefined;
    minHeight?: number | undefined;
    maxHeight?: number | undefined;
}): ViewConstraints;
export declare namespace _ViewConstraintsFactory {
    function tight(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): ViewConstraints;
}
export interface _ViewConstraintsNative extends ViewConstraints {
    readonly [_flaxDartTypeValue]: _ViewConstraintsNative;
    readonly [_flaxDartConstructors]?: {
        "": (options?: {
            minWidth?: number | undefined;
            maxWidth?: number | undefined;
            minHeight?: number | undefined;
            maxHeight?: number | undefined;
        }) => void;
        "tight": (size: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) => void;
    };
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
export declare abstract class _ViewConstraintsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ViewConstraints>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ViewConstraints;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:ViewConstraints", readonly [], false];
    constructor(options?: {
        minWidth?: number | undefined;
        maxWidth?: number | undefined;
        minHeight?: number | undefined;
        maxHeight?: number | undefined;
    });
    constructor(call: _FlaxProxySuper<_ViewConstraintsNative>);
}
export declare namespace _ViewConstraintsFactory {
    function implement(args: [options?: {
        minWidth?: number | undefined;
        maxWidth?: number | undefined;
        minHeight?: number | undefined;
        maxHeight?: number | undefined;
    }], implementation: {}): ViewConstraints;
}
declare const _ViewConstraintsBinding: typeof _ViewConstraintsFactory & (new (options?: {
    minWidth?: number | undefined;
    maxWidth?: number | undefined;
    minHeight?: number | undefined;
    maxHeight?: number | undefined;
}) => _ViewConstraintsNative) & (new (call: _FlaxProxySuper<_ViewConstraintsNative>) => _ViewConstraintsNative);
export declare const ViewConstraints: typeof _ViewConstraintsBinding & _FlaxInstanceType<ViewConstraints> & _FlaxDartType<ViewConstraints, readonly ["class", "flax.core/sdk_dart_ui#type:ViewConstraints", readonly [], false]>;
export {};
