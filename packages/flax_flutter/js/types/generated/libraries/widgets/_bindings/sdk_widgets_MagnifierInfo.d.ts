import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MagnifierInfo extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierInfo": readonly [];
}> {
    readonly __MagnifierInfo: unique symbol;
    readonly [_flaxDartTypeValue]: MagnifierInfo;
}
export interface MagnifierInfo {
    readonly [_flaxDartTypeValue]: MagnifierInfo;
    toString(): string;
    get globalGesturePosition(): upstream0.Offset;
    get currentLineBoundaries(): upstream1.Rect;
    get caretRect(): upstream1.Rect;
    get fieldBounds(): upstream1.Rect;
}
export declare abstract class MagnifierInfo extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MagnifierInfo>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MagnifierInfo;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:MagnifierInfo", readonly [], false];
    constructor(options: {
        globalGesturePosition: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        caretRect: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        fieldBounds: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        currentLineBoundaries: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
    });
}
export declare namespace MagnifierInfo {
    function implement(args: [options: {
        globalGesturePosition: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        caretRect: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        fieldBounds: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        currentLineBoundaries: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
    }], implementation: {}): MagnifierInfo;
}
export declare namespace MagnifierInfo {
    const empty: MagnifierInfo;
}
