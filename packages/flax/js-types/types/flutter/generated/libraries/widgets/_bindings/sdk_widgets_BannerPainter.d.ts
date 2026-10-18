import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainter';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainter';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_BannerLocation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BannerLocation';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainterSemantics';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainterSemantics';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface BannerPainter extends Omit<upstream0.CustomPainter, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.CustomPainter>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/banner.dart::BannerPainter": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __BannerPainter: unique symbol;
    readonly [_flaxDartTypeValue]: BannerPainter;
}
export interface BannerPainter {
    readonly [_flaxDartTypeValue]: BannerPainter;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    shouldRebuildSemantics(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): boolean;
    shouldRepaint(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/banner.dart::BannerPainter": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): boolean;
    hitTest(position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
    toString(): string;
    dispose(): void;
    get message(): string;
    get textDirection(): upstream2.TextDirection;
    get location(): upstream3.BannerLocation;
    get layoutDirection(): upstream2.TextDirection;
    get color(): upstream4.Color;
    get textStyle(): upstream5.TextStyle;
    get shadow(): upstream6.BoxShadow;
    get semanticsBuilder(): ((size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => DartList<upstream7.CustomPainterSemantics>) | null;
}
export declare abstract class BannerPainter extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BannerPainter>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BannerPainter;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:BannerPainter", readonly [], false];
    constructor(options: {
        message: string;
        textDirection: upstream2.TextDirection;
        location: upstream3.BannerLocation;
        layoutDirection: upstream2.TextDirection;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        textStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        shadow?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>) | undefined;
    });
}
export declare namespace BannerPainter {
    function implement(args: [options: {
        message: string;
        textDirection: upstream2.TextDirection;
        location: upstream3.BannerLocation;
        layoutDirection: upstream2.TextDirection;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        textStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        shadow?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>) | undefined;
    }], implementation: {}): BannerPainter;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "semanticsBuilder" | "message" | "textDirection" | "location" | "layoutDirection" | "color" | "textStyle" | "shadow" | "addListener" | "removeListener" | "paint" | "shouldRebuildSemantics" | "shouldRepaint" | "hitTest" | "toString" | "dispose" | "__flaxBound:package:flutter/src/widgets/banner.dart::BannerPainter" | "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
