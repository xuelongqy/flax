import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TextSelectionPoint extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [];
}> {
    readonly __TextSelectionPoint: unique symbol;
    readonly [_flaxDartTypeValue]: TextSelectionPoint;
}
export interface TextSelectionPoint {
    readonly [_flaxDartTypeValue]: TextSelectionPoint;
    toString(): string;
    get point(): upstream0.Offset;
    get direction(): upstream1.TextDirection | null;
}
export declare abstract class TextSelectionPoint extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionPoint>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextSelectionPoint;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:TextSelectionPoint", readonly [], false];
    constructor(point: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, direction: upstream1.TextDirection | null);
}
export declare namespace TextSelectionPoint {
    function implement(args: [point: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, direction: upstream1.TextDirection | null], implementation: {}): TextSelectionPoint;
}
