import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_ThemeData';
import '@flax/flutter/material/_bindings/sdk_material_ThemeData';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ThemeDataTween extends Omit<upstream0.Tween<upstream1.ThemeData>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.ThemeData>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.ThemeData>>, Readonly<{
    "__flaxBound:package:flutter/src/material/theme.dart::ThemeDataTween": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.ThemeData];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.ThemeData];
}> {
    readonly __ThemeDataTween: unique symbol;
    readonly [_flaxDartTypeValue]: ThemeDataTween;
    get begin(): upstream1.ThemeData | null;
    get end(): upstream1.ThemeData | null;
    lerp(t: number): upstream1.ThemeData;
    transform(t: number): upstream1.ThemeData;
    toString(): string;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream1.ThemeData;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream3.Animation<upstream1.ThemeData>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream2.Animatable<upstream1.ThemeData>;
    set begin(value: (Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
    set end(value: (Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
}
export declare function _ThemeDataTweenFactory(options?: {
    begin?: (Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    end?: (Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): ThemeDataTween;
export interface _ThemeDataTweenNative extends ThemeDataTween {
    readonly [_flaxDartTypeValue]: _ThemeDataTweenNative;
    lerp(t: number): upstream1.ThemeData;
    transform(t: number): upstream1.ThemeData;
    toString(): string;
    evaluate(animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream1.ThemeData;
    animate(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>): upstream3.Animation<upstream1.ThemeData>;
    chain(parent: Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number];
    }>): upstream2.Animatable<upstream1.ThemeData>;
    get begin(): upstream1.ThemeData | null;
    get end(): upstream1.ThemeData | null;
    set begin(value: (Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
    set end(value: (Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
}
export declare abstract class _ThemeDataTweenNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ThemeDataTween>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ThemeDataTween;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ThemeDataTween", readonly [], false];
    constructor(options?: {
        begin?: (Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        end?: (Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace _ThemeDataTweenFactory {
    function implement(args: [options?: {
        begin?: (Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        end?: (Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }], implementation: {}): ThemeDataTween;
}
declare const _ThemeDataTweenBinding: typeof _ThemeDataTweenFactory & (new (options?: {
    begin?: (Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    end?: (Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}) => _ThemeDataTweenNative);
export declare const ThemeDataTween: typeof _ThemeDataTweenBinding & _FlaxInstanceType<ThemeDataTween> & _FlaxDartType<ThemeDataTween, readonly ["class", "flax.core/sdk_material#type:ThemeDataTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/material/theme.dart::ThemeDataTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
export {};
