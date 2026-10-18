import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RelativeRect';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RelativeRect';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RelativeRectTween extends Omit<upstream0.Tween<upstream1.RelativeRect>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.RelativeRect>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.RelativeRect>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/transitions.dart::RelativeRectTween": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.RelativeRect];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.RelativeRect];
}> {
    readonly __RelativeRectTween: unique symbol;
    readonly [_flaxDartTypeValue]: RelativeRectTween;
}
export interface RelativeRectTween {
    readonly [_flaxDartTypeValue]: RelativeRectTween;
    lerp(t: number): upstream1.RelativeRect;
    transform(t: number): upstream1.RelativeRect;
    toString(): string;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream1.RelativeRect;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream3.Animation<upstream1.RelativeRect>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream2.Animatable<upstream1.RelativeRect>;
    get begin(): upstream1.RelativeRect | null;
    get end(): upstream1.RelativeRect | null;
    set begin(value: Readonly<{
        "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
    }> | null);
    set end(value: Readonly<{
        "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
    }> | null);
}
export declare abstract class RelativeRectTween extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RelativeRectTween>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RelativeRectTween;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RelativeRectTween", readonly [], false];
    constructor(options?: {
        begin?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
        }> | null | undefined;
    });
}
export declare namespace RelativeRectTween {
    function implement(args: [options?: {
        begin?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
        }> | null | undefined;
    }], implementation: {}): RelativeRectTween;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/widgets/transitions.dart::RelativeRectTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
export {};
