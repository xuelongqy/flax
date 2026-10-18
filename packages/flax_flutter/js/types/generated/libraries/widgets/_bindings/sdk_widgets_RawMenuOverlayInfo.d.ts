import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RawMenuOverlayInfo extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::RawMenuOverlayInfo": readonly [];
}> {
    readonly __RawMenuOverlayInfo: unique symbol;
    readonly [_flaxDartTypeValue]: RawMenuOverlayInfo;
}
export interface RawMenuOverlayInfo {
    readonly [_flaxDartTypeValue]: RawMenuOverlayInfo;
    get anchorRect(): upstream0.Rect;
    get overlaySize(): upstream1.Size;
    get position(): upstream2.Offset | null;
    get tapRegionGroupId(): {};
}
export declare abstract class RawMenuOverlayInfo extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawMenuOverlayInfo>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RawMenuOverlayInfo;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RawMenuOverlayInfo", readonly [], false];
    constructor(options: {
        anchorRect: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        overlaySize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        tapRegionGroupId: {};
        position?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace RawMenuOverlayInfo {
    function implement(args: [options: {
        anchorRect: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        overlaySize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        tapRegionGroupId: {};
        position?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    }], implementation: {}): RawMenuOverlayInfo;
}
