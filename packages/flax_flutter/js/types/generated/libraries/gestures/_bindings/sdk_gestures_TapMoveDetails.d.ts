import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TapMoveDetails extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/tap.dart::TapMoveDetails": readonly [];
}> {
    readonly __TapMoveDetails: unique symbol;
    readonly [_flaxDartTypeValue]: TapMoveDetails;
    readonly globalPosition: upstream1.Offset;
    readonly localPosition: upstream1.Offset;
    readonly kind: upstream0.PointerDeviceKind;
    readonly delta: upstream1.Offset;
}
export declare function _TapMoveDetailsFactory(options: {
    kind: upstream0.PointerDeviceKind;
    globalPosition?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    delta?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    localPosition?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
}): TapMoveDetails;
export interface _TapMoveDetailsNative extends TapMoveDetails {
    readonly [_flaxDartTypeValue]: _TapMoveDetailsNative;
    get globalPosition(): upstream1.Offset;
    get localPosition(): upstream1.Offset;
    get kind(): upstream0.PointerDeviceKind;
    get delta(): upstream1.Offset;
}
export declare abstract class _TapMoveDetailsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TapMoveDetails>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TapMoveDetails;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:TapMoveDetails", readonly [], false];
    constructor(options: {
        kind: upstream0.PointerDeviceKind;
        globalPosition?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        delta?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        localPosition?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace _TapMoveDetailsFactory {
    function implement(args: [options: {
        kind: upstream0.PointerDeviceKind;
        globalPosition?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        delta?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        localPosition?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    }], implementation: {}): TapMoveDetails;
}
declare const _TapMoveDetailsBinding: typeof _TapMoveDetailsFactory & (new (options: {
    kind: upstream0.PointerDeviceKind;
    globalPosition?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    delta?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    localPosition?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
}) => _TapMoveDetailsNative);
export declare const TapMoveDetails: typeof _TapMoveDetailsBinding & _FlaxInstanceType<TapMoveDetails> & _FlaxDartType<TapMoveDetails, readonly ["class", "flax.core/sdk_gestures#type:TapMoveDetails", readonly [], false]>;
export {};
