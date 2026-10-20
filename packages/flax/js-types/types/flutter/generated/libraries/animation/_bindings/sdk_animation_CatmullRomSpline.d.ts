import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Curve2D';
import '@flax/flutter/animation/_bindings/sdk_animation_Curve2D';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Curve2DSample';
import '@flax/flutter/animation/_bindings/sdk_animation_Curve2DSample';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CatmullRomSpline extends Omit<upstream0.Curve2D, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<upstream2.Offset>, _flaxOwnMembers0 | keyof upstream0.Curve2D>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::CatmullRomSpline": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curve2D": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [upstream2.Offset];
}> {
    readonly __CatmullRomSpline: unique symbol;
    readonly [_flaxDartTypeValue]: CatmullRomSpline;
    readonly samplingSeed: number;
    generateSamples(options?: {
        end?: number | undefined;
        start?: number | undefined;
        tolerance?: number | undefined;
    }): DartIterable<upstream3.Curve2DSample>;
    findInverse(x: number): number;
    transform(t: number): upstream2.Offset;
    transformInternal(t: number): upstream2.Offset;
    toString(): string;
}
export declare function _CatmullRomSplineFactory(controlPoints: DartListInput<upstream2.Offset, Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>>, options?: {
    tension?: number | undefined;
    startHandle?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    endHandle?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
}): CatmullRomSpline;
export declare namespace _CatmullRomSplineFactory {
    function precompute(controlPoints: DartListInput<upstream2.Offset, Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>>, options?: {
        tension?: number | undefined;
        startHandle?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        endHandle?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    }): CatmullRomSpline;
}
export interface _CatmullRomSplineNative extends CatmullRomSpline {
    readonly [_flaxDartTypeValue]: _CatmullRomSplineNative;
    readonly [_flaxDartConstructors]?: {
        "": (controlPoints: DartListInput<upstream2.Offset, Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>>, options?: {
            tension?: number | undefined;
            startHandle?: (Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | null | undefined;
            endHandle?: (Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | null | undefined;
        }) => void;
        "precompute": (controlPoints: DartListInput<upstream2.Offset, Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>>, options?: {
            tension?: number | undefined;
            startHandle?: (Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | null | undefined;
            endHandle?: (Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | null | undefined;
        }) => void;
    };
    generateSamples(options?: {
        start?: number | undefined;
        end?: number | undefined;
        tolerance?: number | undefined;
    }): DartIterable<upstream3.Curve2DSample>;
    findInverse(x: number): number;
    transform(t: number): upstream2.Offset;
    transformInternal(t: number): upstream2.Offset;
    toString(): string;
    get samplingSeed(): number;
}
export declare abstract class _CatmullRomSplineNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CatmullRomSpline>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CatmullRomSpline;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:CatmullRomSpline", readonly [], false];
    constructor(controlPoints: DartListInput<upstream2.Offset, Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>>, options?: {
        tension?: number | undefined;
        startHandle?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        endHandle?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    });
    constructor(call: _FlaxProxySuper<_CatmullRomSplineNative>);
}
export declare namespace _CatmullRomSplineFactory {
    function implement(args: [controlPoints: DartListInput<upstream2.Offset, Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>>, options?: {
        tension?: number | undefined;
        startHandle?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        endHandle?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    }], implementation: {}): CatmullRomSpline;
}
declare const _CatmullRomSplineBinding: typeof _CatmullRomSplineFactory & (new (controlPoints: DartListInput<upstream2.Offset, Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>>, options?: {
    tension?: number | undefined;
    startHandle?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    endHandle?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
}) => _CatmullRomSplineNative) & (new (call: _FlaxProxySuper<_CatmullRomSplineNative>) => _CatmullRomSplineNative);
export declare const CatmullRomSpline: typeof _CatmullRomSplineBinding & _FlaxInstanceType<CatmullRomSpline> & _FlaxDartType<CatmullRomSpline, readonly ["class", "flax.core/sdk_animation#type:CatmullRomSpline", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "samplingSeed" | "generateSamples" | "findInverse" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::CatmullRomSpline" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve2D" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
export {};
