import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GlyphInfo extends Readonly<{
    "__flaxBound:dart:ui::GlyphInfo": readonly [];
}> {
    readonly __GlyphInfo: unique symbol;
    readonly [_flaxDartTypeValue]: GlyphInfo;
    readonly graphemeClusterLayoutBounds: upstream0.Rect;
    readonly graphemeClusterCodeUnitRange: upstream1.TextRange;
    readonly writingDirection: upstream2.TextDirection;
    toString(): string;
}
export declare function _GlyphInfoFactory(graphemeClusterLayoutBounds: Readonly<{
    "__flaxBound:dart:ui::Rect": readonly [];
}>, graphemeClusterCodeUnitRange: Readonly<{
    "__flaxBound:dart:ui::TextRange": readonly [];
}>, writingDirection: upstream2.TextDirection): GlyphInfo;
export declare const GlyphInfo: typeof _GlyphInfoFactory & _FlaxInstanceType<GlyphInfo> & _FlaxDartType<GlyphInfo, readonly ["class", "flax.core/sdk_dart_ui#type:GlyphInfo", readonly [], false]>;
