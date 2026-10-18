import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SelectionRect extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::SelectionRect": readonly [];
}> {
    readonly __SelectionRect: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionRect;
}
export interface SelectionRect {
    readonly [_flaxDartTypeValue]: SelectionRect;
    toString(): string;
    get position(): number;
    get bounds(): upstream0.Rect;
    get direction(): upstream1.TextDirection;
}
export declare abstract class SelectionRect extends _FlaxProxyBase {
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
export declare namespace SelectionRect {
    function implement(args: [options: {
        position: number;
        bounds: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        direction?: upstream1.TextDirection | undefined;
    }], implementation: {}): SelectionRect;
}
