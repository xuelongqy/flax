import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface AlignmentGeometryTween extends Omit<upstream0.Tween<upstream1.AlignmentGeometry | null>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.AlignmentGeometry | null>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.AlignmentGeometry | null>>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/tweens.dart::AlignmentGeometryTween": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.AlignmentGeometry | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.AlignmentGeometry | null];
}> {
    readonly __AlignmentGeometryTween: unique symbol;
    readonly [_flaxDartTypeValue]: AlignmentGeometryTween;
}
export interface AlignmentGeometryTween {
    readonly [_flaxDartTypeValue]: AlignmentGeometryTween;
    lerp(t: number): upstream1.AlignmentGeometry | null;
    transform(t: number): upstream1.AlignmentGeometry | null;
    toString(): string;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream1.AlignmentGeometry | null;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream3.Animation<upstream1.AlignmentGeometry | null>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream2.Animatable<upstream1.AlignmentGeometry | null>;
    get begin(): upstream1.AlignmentGeometry | null;
    get end(): upstream1.AlignmentGeometry | null;
    set begin(value: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | null);
    set end(value: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | null);
}
export declare abstract class AlignmentGeometryTween extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AlignmentGeometryTween>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AlignmentGeometryTween;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:AlignmentGeometryTween", readonly [], false];
    constructor(options?: {
        begin?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null | undefined;
    });
}
export declare namespace AlignmentGeometryTween {
    function implement(args: [options?: {
        begin?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null | undefined;
    }], implementation: {}): AlignmentGeometryTween;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/rendering/tweens.dart::AlignmentGeometryTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
export {};
