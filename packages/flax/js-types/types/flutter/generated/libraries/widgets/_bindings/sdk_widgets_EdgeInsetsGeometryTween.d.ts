import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface EdgeInsetsGeometryTween extends Omit<upstream0.Tween<upstream1.EdgeInsetsGeometry>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.EdgeInsetsGeometry>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.EdgeInsetsGeometry>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::EdgeInsetsGeometryTween": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.EdgeInsetsGeometry];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.EdgeInsetsGeometry];
}> {
    readonly __EdgeInsetsGeometryTween: unique symbol;
    readonly [_flaxDartTypeValue]: EdgeInsetsGeometryTween;
    get begin(): upstream1.EdgeInsetsGeometry | null;
    get end(): upstream1.EdgeInsetsGeometry | null;
    lerp(t: number): upstream1.EdgeInsetsGeometry;
    transform(t: number): upstream1.EdgeInsetsGeometry;
    toString(): string;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream1.EdgeInsetsGeometry;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream3.Animation<upstream1.EdgeInsetsGeometry>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream2.Animatable<upstream1.EdgeInsetsGeometry>;
    set begin(value: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null);
    set end(value: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null);
}
export declare function _EdgeInsetsGeometryTweenFactory(options?: {
    begin?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    end?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
}): EdgeInsetsGeometryTween;
export interface _EdgeInsetsGeometryTweenNative extends EdgeInsetsGeometryTween {
    readonly [_flaxDartTypeValue]: _EdgeInsetsGeometryTweenNative;
    lerp(t: number): upstream1.EdgeInsetsGeometry;
    transform(t: number): upstream1.EdgeInsetsGeometry;
    toString(): string;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream1.EdgeInsetsGeometry;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream3.Animation<upstream1.EdgeInsetsGeometry>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream2.Animatable<upstream1.EdgeInsetsGeometry>;
    get begin(): upstream1.EdgeInsetsGeometry | null;
    get end(): upstream1.EdgeInsetsGeometry | null;
    set begin(value: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null);
    set end(value: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null);
}
export declare abstract class _EdgeInsetsGeometryTweenNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<EdgeInsetsGeometryTween>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: EdgeInsetsGeometryTween;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:EdgeInsetsGeometryTween", readonly [], false];
    constructor(options?: {
        begin?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _EdgeInsetsGeometryTweenFactory {
    function implement(args: [options?: {
        begin?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
    }], implementation: {}): EdgeInsetsGeometryTween;
}
declare const _EdgeInsetsGeometryTweenBinding: typeof _EdgeInsetsGeometryTweenFactory & (new (options?: {
    begin?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    end?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
}) => _EdgeInsetsGeometryTweenNative);
export declare const EdgeInsetsGeometryTween: typeof _EdgeInsetsGeometryTweenBinding & _FlaxInstanceType<EdgeInsetsGeometryTween> & _FlaxDartType<EdgeInsetsGeometryTween, readonly ["class", "flax.core/sdk_widgets#type:EdgeInsetsGeometryTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::EdgeInsetsGeometryTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
export {};
