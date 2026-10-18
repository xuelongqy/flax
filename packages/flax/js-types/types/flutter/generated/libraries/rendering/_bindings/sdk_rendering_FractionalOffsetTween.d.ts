import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_FractionalOffset';
import '@flax/flutter/painting/_bindings/sdk_painting_FractionalOffset';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface FractionalOffsetTween extends Omit<upstream0.Tween<upstream1.FractionalOffset | null>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.FractionalOffset | null>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.FractionalOffset | null>>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/tweens.dart::FractionalOffsetTween": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.FractionalOffset | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.FractionalOffset | null];
}> {
    readonly __FractionalOffsetTween: unique symbol;
    readonly [_flaxDartTypeValue]: FractionalOffsetTween;
}
export interface FractionalOffsetTween {
    readonly [_flaxDartTypeValue]: FractionalOffsetTween;
    lerp(t: number): upstream1.FractionalOffset | null;
    transform(t: number): upstream1.FractionalOffset | null;
    toString(): string;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream1.FractionalOffset | null;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream3.Animation<upstream1.FractionalOffset | null>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream2.Animatable<upstream1.FractionalOffset | null>;
    get begin(): upstream1.FractionalOffset | null;
    get end(): upstream1.FractionalOffset | null;
    set begin(value: (Readonly<{
        "__flaxBound:package:flutter/src/painting/fractional_offset.dart::FractionalOffset": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>) | null);
    set end(value: (Readonly<{
        "__flaxBound:package:flutter/src/painting/fractional_offset.dart::FractionalOffset": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>) | null);
}
export declare abstract class FractionalOffsetTween extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FractionalOffsetTween>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FractionalOffsetTween;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:FractionalOffsetTween", readonly [], false];
    constructor(options?: {
        begin?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/fractional_offset.dart::FractionalOffset": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }>) | null | undefined;
        end?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/fractional_offset.dart::FractionalOffset": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace FractionalOffsetTween {
    function implement(args: [options?: {
        begin?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/fractional_offset.dart::FractionalOffset": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }>) | null | undefined;
        end?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/fractional_offset.dart::FractionalOffset": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }>) | null | undefined;
    }], implementation: {}): FractionalOffsetTween;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/rendering/tweens.dart::FractionalOffsetTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
export {};
