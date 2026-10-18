import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainter';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainter';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainterSemantics';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainterSemantics';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream5 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ToggleablePainter extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Omit<upstream2.CustomPainter, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier | keyof upstream1.Listenable>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/toggleable.dart::ToggleablePainter": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [];
}> {
    readonly __ToggleablePainter: unique symbol;
    readonly [_flaxDartTypeValue]: ToggleablePainter;
}
export interface ToggleablePainter {
    readonly [_flaxDartTypeValue]: ToggleablePainter;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    shouldRebuildSemantics(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): boolean;
    shouldRepaint(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): boolean;
    hitTest(position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean | null;
    toString(): string;
    paintRadialReaction(options: {
        canvas: Readonly<{
            "__flaxBound:dart:ui::Canvas": readonly [];
        }>;
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        origin: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }): void;
    get position(): upstream5.Animation<number>;
    get reaction(): upstream5.Animation<number>;
    get reactionFocusFade(): upstream5.Animation<number>;
    get reactionHoverFade(): upstream5.Animation<number>;
    get activeColor(): upstream6.Color;
    get inactiveColor(): upstream6.Color;
    get inactiveReactionColor(): upstream6.Color;
    get reactionColor(): upstream6.Color;
    get hoverColor(): upstream6.Color;
    get focusColor(): upstream6.Color;
    get splashRadius(): number;
    get downPosition(): upstream7.Offset | null;
    get isFocused(): boolean;
    get isHovered(): boolean;
    get isActive(): boolean;
    get semanticsBuilder(): ((size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => DartList<upstream3.CustomPainterSemantics>) | null;
    get hasListeners(): boolean;
    set position(value: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>);
    set reaction(value: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>);
    set reactionFocusFade(value: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>);
    set reactionHoverFade(value: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>);
    set activeColor(value: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>);
    set inactiveColor(value: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>);
    set inactiveReactionColor(value: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>);
    set reactionColor(value: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>);
    set hoverColor(value: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>);
    set focusColor(value: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>);
    set splashRadius(value: number);
    set downPosition(value: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null);
    set isFocused(value: boolean | null);
    set isHovered(value: boolean | null);
    set isActive(value: boolean | null);
}
export declare abstract class ToggleablePainter extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ToggleablePainter>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ToggleablePainter;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ToggleablePainter", readonly [], false];
    constructor();
    abstract paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
}
export declare namespace ToggleablePainter {
    function implement(args: [], implementation: {
        paint: ((canvas: upstream8.Canvas, size: upstream4.Size) => void);
    }): ToggleablePainter;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "semanticsBuilder" | "position" | "reaction" | "reactionFocusFade" | "reactionHoverFade" | "activeColor" | "inactiveColor" | "inactiveReactionColor" | "reactionColor" | "hoverColor" | "focusColor" | "splashRadius" | "downPosition" | "isFocused" | "isHovered" | "isActive" | "addListener" | "removeListener" | "dispose" | "paint" | "shouldRebuildSemantics" | "shouldRepaint" | "hitTest" | "toString" | "paintRadialReaction" | "__flaxBound:package:flutter/src/widgets/toggleable.dart::ToggleablePainter" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter";
export {};
