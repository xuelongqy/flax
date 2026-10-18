import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlaceholderAlignment';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlaceholderAlignment';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PlaceholderDimensions extends Readonly<{
    "__flaxBound:package:flutter/src/painting/text_painter.dart::PlaceholderDimensions": readonly [];
}> {
    readonly __PlaceholderDimensions: unique symbol;
    readonly [_flaxDartTypeValue]: PlaceholderDimensions;
}
export interface PlaceholderDimensions {
    readonly [_flaxDartTypeValue]: PlaceholderDimensions;
    toString(): string;
    get size(): upstream0.Size;
    get alignment(): upstream1.PlaceholderAlignment;
    get baselineOffset(): number | null;
    get baseline(): upstream2.TextBaseline | null;
}
export declare abstract class PlaceholderDimensions extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlaceholderDimensions>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PlaceholderDimensions;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:PlaceholderDimensions", readonly [], false];
    constructor(options: {
        size: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        alignment: upstream1.PlaceholderAlignment;
        baseline?: upstream2.TextBaseline | null | undefined;
        baselineOffset?: number | null | undefined;
    });
}
export declare namespace PlaceholderDimensions {
    function implement(args: [options: {
        size: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        alignment: upstream1.PlaceholderAlignment;
        baseline?: upstream2.TextBaseline | null | undefined;
        baselineOffset?: number | null | undefined;
    }], implementation: {}): PlaceholderDimensions;
}
export declare namespace PlaceholderDimensions {
    const empty: PlaceholderDimensions;
}
