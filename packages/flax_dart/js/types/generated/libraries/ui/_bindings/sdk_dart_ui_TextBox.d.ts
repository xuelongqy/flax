import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextBox extends Readonly<{
    "__flaxBound:dart:ui::TextBox": readonly [];
}> {
    readonly __TextBox: unique symbol;
    readonly [_flaxDartTypeValue]: TextBox;
    readonly left: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly direction: upstream0.TextDirection;
    readonly start: number;
    readonly end: number;
    toRect(): upstream1.Rect;
    toString(): string;
}
export declare namespace _TextBoxFactory {
    function fromLTRBD(left: number, top: number, right: number, bottom: number, direction: upstream0.TextDirection): TextBox;
}
export interface _TextBoxNative extends TextBox {
    readonly [_flaxDartTypeValue]: _TextBoxNative;
    readonly [_flaxDartConstructors]?: {
        "fromLTRBD": (left: number, top: number, right: number, bottom: number, direction: upstream0.TextDirection) => void;
    };
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
export declare abstract class _TextBoxNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextBox>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextBox;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:TextBox", readonly [], false];
    constructor(left: number, top: number, right: number, bottom: number, direction: upstream0.TextDirection);
    constructor(call: _FlaxProxySuper<_TextBoxNative>);
}
export declare namespace _TextBoxFactory {
    function implement(args: [left: number, top: number, right: number, bottom: number, direction: upstream0.TextDirection], implementation: {}): TextBox;
}
declare const _TextBoxBinding: typeof _TextBoxFactory & (new (left: number, top: number, right: number, bottom: number, direction: upstream0.TextDirection) => _TextBoxNative) & (new (call: _FlaxProxySuper<_TextBoxNative>) => _TextBoxNative);
export declare const TextBox: typeof _TextBoxBinding & _FlaxInstanceType<TextBox> & _FlaxDartType<TextBox, readonly ["class", "flax.core/sdk_dart_ui#type:TextBox", readonly [], false]>;
export {};
