import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_RectTween';
import '@flax/flutter/animation/_bindings/sdk_animation_RectTween';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_MaterialPointArcTween';
import '@flax/flutter/material/_bindings/sdk_material_MaterialPointArcTween';
import type * as upstream5 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaterialRectArcTween extends Omit<upstream0.RectTween, _flaxOwnMembers0>, Omit<upstream1.Tween<upstream2.Rect | null>, _flaxOwnMembers0 | keyof upstream0.RectTween>, Omit<upstream3.Animatable<upstream2.Rect | null>, _flaxOwnMembers0 | keyof upstream0.RectTween | keyof upstream1.Tween<upstream2.Rect | null>>, Readonly<{
    "__flaxBound:package:flutter/src/material/arc.dart::MaterialRectArcTween": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::RectTween": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream2.Rect | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream2.Rect | null];
}> {
    readonly __MaterialRectArcTween: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialRectArcTween;
    get begin(): upstream2.Rect | null;
    get end(): upstream2.Rect | null;
    readonly beginArc: upstream4.MaterialPointArcTween | null;
    readonly endArc: upstream4.MaterialPointArcTween | null;
    lerp(t: number): upstream2.Rect;
    transform(t: number): upstream2.Rect | null;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream2.Rect | null;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream5.Animation<upstream2.Rect | null>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream3.Animatable<upstream2.Rect | null>;
    toString(): string;
    set begin(value: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null);
    set end(value: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null);
}
export declare function _MaterialRectArcTweenFactory(options?: {
    begin?: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null | undefined;
    end?: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null | undefined;
}): MaterialRectArcTween;
export interface _MaterialRectArcTweenNative extends MaterialRectArcTween {
    readonly [_flaxDartTypeValue]: _MaterialRectArcTweenNative;
    lerp(t: number): upstream2.Rect;
    transform(t: number): upstream2.Rect | null;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream2.Rect | null;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream5.Animation<upstream2.Rect | null>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream3.Animatable<upstream2.Rect | null>;
    toString(): string;
    get beginArc(): upstream4.MaterialPointArcTween | null;
    get endArc(): upstream4.MaterialPointArcTween | null;
    get begin(): upstream2.Rect | null;
    get end(): upstream2.Rect | null;
    set begin(value: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null);
    set end(value: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null);
}
export declare abstract class _MaterialRectArcTweenNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialRectArcTween>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MaterialRectArcTween;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MaterialRectArcTween", readonly [], false];
    constructor(options?: {
        begin?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _MaterialRectArcTweenFactory {
    function implement(args: [options?: {
        begin?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
    }], implementation: {}): MaterialRectArcTween;
}
declare const _MaterialRectArcTweenBinding: typeof _MaterialRectArcTweenFactory & (new (options?: {
    begin?: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null | undefined;
    end?: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null | undefined;
}) => _MaterialRectArcTweenNative);
export declare const MaterialRectArcTween: typeof _MaterialRectArcTweenBinding & _FlaxInstanceType<MaterialRectArcTween> & _FlaxDartType<MaterialRectArcTween, readonly ["class", "flax.core/sdk_material#type:MaterialRectArcTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "beginArc" | "endArc" | "lerp" | "transform" | "evaluate" | "animate" | "chain" | "toString" | "__flaxBound:package:flutter/src/material/arc.dart::MaterialRectArcTween" | "__flaxBound:package:flutter/src/animation/tween.dart::RectTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
export {};
