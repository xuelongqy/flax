import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MagnifierInfo extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierInfo": readonly [];
}> {
    readonly __MagnifierInfo: unique symbol;
    readonly [_flaxDartTypeValue]: MagnifierInfo;
    readonly globalGesturePosition: upstream0.Offset;
    readonly currentLineBoundaries: upstream1.Rect;
    readonly caretRect: upstream1.Rect;
    readonly fieldBounds: upstream1.Rect;
    toString(): string;
}
export declare function _MagnifierInfoFactory(options: {
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
}): MagnifierInfo;
export interface _MagnifierInfoNative extends MagnifierInfo {
    readonly [_flaxDartTypeValue]: _MagnifierInfoNative;
    toString(): string;
    get globalGesturePosition(): upstream0.Offset;
    get currentLineBoundaries(): upstream1.Rect;
    get caretRect(): upstream1.Rect;
    get fieldBounds(): upstream1.Rect;
}
export declare abstract class _MagnifierInfoNative extends _FlaxProxyBase {
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
export declare namespace _MagnifierInfoFactory {
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
declare const _MagnifierInfoBinding: typeof _MagnifierInfoFactory & (new (options: {
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
}) => _MagnifierInfoNative);
export declare namespace _MagnifierInfoFactory {
    const empty: MagnifierInfo;
}
export declare const MagnifierInfo: typeof _MagnifierInfoBinding & _FlaxInstanceType<MagnifierInfo> & _FlaxDartType<MagnifierInfo, readonly ["class", "flax.core/sdk_widgets#type:MagnifierInfo", readonly [], false]>;
export {};
