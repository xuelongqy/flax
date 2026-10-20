import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ShapeBorderTween extends Omit<upstream0.Tween<upstream1.ShapeBorder | null>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.ShapeBorder | null>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.ShapeBorder | null>>, Readonly<{
    "__flaxBound:package:material_ui/src/material.dart::ShapeBorderTween": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.ShapeBorder | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.ShapeBorder | null];
}> {
    readonly __ShapeBorderTween: unique symbol;
    readonly [_flaxDartTypeValue]: ShapeBorderTween;
    get begin(): upstream1.ShapeBorder | null;
    get end(): upstream1.ShapeBorder | null;
    transform(t: number): upstream1.ShapeBorder | null;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream1.ShapeBorder | null;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream3.Animation<upstream1.ShapeBorder | null>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream2.Animatable<upstream1.ShapeBorder | null>;
    lerp(t: number): upstream1.ShapeBorder | null;
    toString(): string;
    set begin(value: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null);
    set end(value: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null);
}
export declare function _ShapeBorderTweenFactory(options?: {
    begin?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    end?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
}): ShapeBorderTween;
export interface _ShapeBorderTweenNative extends ShapeBorderTween {
    readonly [_flaxDartTypeValue]: _ShapeBorderTweenNative;
    transform(t: number): upstream1.ShapeBorder | null;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream1.ShapeBorder | null;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream3.Animation<upstream1.ShapeBorder | null>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream2.Animatable<upstream1.ShapeBorder | null>;
    lerp(t: number): upstream1.ShapeBorder | null;
    toString(): string;
    get begin(): upstream1.ShapeBorder | null;
    get end(): upstream1.ShapeBorder | null;
    set begin(value: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null);
    set end(value: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null);
}
export declare abstract class _ShapeBorderTweenNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShapeBorderTween>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ShapeBorderTween;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:ShapeBorderTween", readonly [], false];
    constructor(options?: {
        begin?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _ShapeBorderTweenFactory {
    function implement(args: [options?: {
        begin?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
    }], implementation: {}): ShapeBorderTween;
}
declare const _ShapeBorderTweenBinding: typeof _ShapeBorderTweenFactory & (new (options?: {
    begin?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    end?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
}) => _ShapeBorderTweenNative);
export declare const ShapeBorderTween: typeof _ShapeBorderTweenBinding & _FlaxInstanceType<ShapeBorderTween> & _FlaxDartType<ShapeBorderTween, readonly ["class", "flax.material/material#type:ShapeBorderTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "transform" | "evaluate" | "animate" | "chain" | "lerp" | "toString" | "__flaxBound:package:material_ui/src/material.dart::ShapeBorderTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
export {};
