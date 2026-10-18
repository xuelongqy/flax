import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TextBox extends Readonly<{
    "__flaxBound:dart:ui::TextBox": readonly [];
}> {
    readonly __TextBox: unique symbol;
    readonly [_flaxDartTypeValue]: TextBox;
}
export interface TextBox {
    readonly [_flaxDartTypeValue]: TextBox;
    toRect(): upstream1.Rect;
    toString(): string;
    get left(): number;
    get top(): number;
    get right(): number;
    get bottom(): number;
    get direction(): upstream0.TextDirection;
    get start(): number;
    get end(): number;
}
export declare abstract class TextBox extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextBox>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextBox;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:TextBox", readonly [], false];
    constructor(left: number, top: number, right: number, bottom: number, direction: upstream0.TextDirection);
}
export declare namespace TextBox {
    function implement(args: [left: number, top: number, right: number, bottom: number, direction: upstream0.TextDirection], implementation: {}): TextBox;
}
