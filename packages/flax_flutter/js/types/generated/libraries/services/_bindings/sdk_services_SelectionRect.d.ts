import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionRect extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::SelectionRect": readonly [];
}> {
    readonly __SelectionRect: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionRect;
    readonly position: number;
    readonly bounds: upstream0.Rect;
    readonly direction: upstream1.TextDirection;
    toString(): string;
}
export declare function _SelectionRectFactory(options: {
    position: number;
    bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>;
    direction?: upstream1.TextDirection | undefined;
}): SelectionRect;
export interface _SelectionRectNative extends SelectionRect {
    readonly [_flaxDartTypeValue]: _SelectionRectNative;
    toString(): string;
    get position(): number;
    get bounds(): upstream0.Rect;
    get direction(): upstream1.TextDirection;
}
export declare abstract class _SelectionRectNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectionRect>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SelectionRect;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SelectionRect", readonly [], false];
    constructor(options: {
        position: number;
        bounds: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        direction?: upstream1.TextDirection | undefined;
    });
}
export declare namespace _SelectionRectFactory {
    function implement(args: [options: {
        position: number;
        bounds: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        direction?: upstream1.TextDirection | undefined;
    }], implementation: {}): SelectionRect;
}
declare const _SelectionRectBinding: typeof _SelectionRectFactory & (new (options: {
    position: number;
    bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>;
    direction?: upstream1.TextDirection | undefined;
}) => _SelectionRectNative);
export declare const SelectionRect: typeof _SelectionRectBinding & _FlaxInstanceType<SelectionRect> & _FlaxDartType<SelectionRect, readonly ["class", "flax.core/sdk_services#type:SelectionRect", readonly [], false]>;
export {};
