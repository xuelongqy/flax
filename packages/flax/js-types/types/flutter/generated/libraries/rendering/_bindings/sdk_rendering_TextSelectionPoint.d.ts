import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextSelectionPoint extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [];
}> {
    readonly __TextSelectionPoint: unique symbol;
    readonly [_flaxDartTypeValue]: TextSelectionPoint;
    readonly point: upstream0.Offset;
    readonly direction: upstream1.TextDirection | null;
    toString(): string;
}
export declare function _TextSelectionPointFactory(point: Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>, direction: upstream1.TextDirection | null): TextSelectionPoint;
export interface _TextSelectionPointNative extends TextSelectionPoint {
    readonly [_flaxDartTypeValue]: _TextSelectionPointNative;
    toString(): string;
    get point(): upstream0.Offset;
    get direction(): upstream1.TextDirection | null;
}
export declare abstract class _TextSelectionPointNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionPoint>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextSelectionPoint;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:TextSelectionPoint", readonly [], false];
    constructor(point: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, direction: upstream1.TextDirection | null);
}
export declare namespace _TextSelectionPointFactory {
    function implement(args: [point: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, direction: upstream1.TextDirection | null], implementation: {}): TextSelectionPoint;
}
declare const _TextSelectionPointBinding: typeof _TextSelectionPointFactory & (new (point: Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>, direction: upstream1.TextDirection | null) => _TextSelectionPointNative);
export declare const TextSelectionPoint: typeof _TextSelectionPointBinding & _FlaxInstanceType<TextSelectionPoint> & _FlaxDartType<TextSelectionPoint, readonly ["class", "flax.core/sdk_rendering#type:TextSelectionPoint", readonly [], false]>;
export {};
