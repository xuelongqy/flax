import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TextBoundary extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary": readonly [];
}> {
    readonly __TextBoundary: unique symbol;
    readonly [_flaxDartTypeValue]: TextBoundary;
}
export interface TextBoundary {
    readonly [_flaxDartTypeValue]: TextBoundary;
    getLeadingTextBoundaryAt(position: number): number | null;
    getTrailingTextBoundaryAt(position: number): number | null;
    getTextBoundaryAt(position: number): upstream0.TextRange;
}
export declare abstract class TextBoundary extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextBoundary>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextBoundary;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:TextBoundary", readonly [], false];
    constructor();
}
export declare namespace TextBoundary {
    function implement(args: [], implementation: {}): TextBoundary;
}
