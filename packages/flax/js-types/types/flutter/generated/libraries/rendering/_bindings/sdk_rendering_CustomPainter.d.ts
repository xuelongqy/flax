import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainterSemantics';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainterSemantics';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface CustomPainter extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __CustomPainter: unique symbol;
    readonly [_flaxDartTypeValue]: CustomPainter;
}
export interface CustomPainter {
    readonly [_flaxDartTypeValue]: CustomPainter;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    shouldRebuildSemantics(oldDelegate: Readonly<{
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
    get semanticsBuilder(): ((size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => DartList<upstream1.CustomPainterSemantics>) | null;
}
export declare abstract class CustomPainter extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CustomPainter>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CustomPainter;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:CustomPainter", readonly [], false];
    constructor(options?: {
        repaint?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> | null | undefined;
    });
    abstract paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    abstract shouldRepaint(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): boolean;
}
export declare namespace CustomPainter {
    function implement(args: [options?: {
        repaint?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> | null | undefined;
    }], implementation: {
        paint: ((canvas: upstream3.Canvas, size: upstream2.Size) => void);
        shouldRepaint: ((oldDelegate: CustomPainter) => boolean);
    }): CustomPainter;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "semanticsBuilder" | "addListener" | "removeListener" | "paint" | "shouldRebuildSemantics" | "shouldRepaint" | "hitTest" | "toString" | "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
