import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface BoxHitTestResult extends Omit<upstream0.HitTestResult, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::BoxHitTestResult": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
}> {
    readonly __BoxHitTestResult: unique symbol;
    readonly [_flaxDartTypeValue]: BoxHitTestResult;
}
export interface BoxHitTestResult {
    readonly [_flaxDartTypeValue]: BoxHitTestResult;
    add(entry: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream2.HitTestTarget];
    }>): void;
    pushTransform(transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    pushOffset(offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    popTransform(): void;
    toString(): string;
    addWithPaintTransform(options: {
        transform: Readonly<{
            "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
        }> | null;
        position: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        hitTest: ((result: BoxHitTestResult, position: upstream4.Offset) => boolean);
    }): boolean;
    addWithPaintOffset(options: {
        offset: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null;
        position: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        hitTest: ((result: BoxHitTestResult, position: upstream4.Offset) => boolean);
    }): boolean;
    addWithRawTransform(options: {
        transform: Readonly<{
            "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
        }> | null;
        position: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        hitTest: ((result: BoxHitTestResult, position: upstream4.Offset) => boolean);
    }): boolean;
    addWithOutOfBandPosition(options: {
        paintOffset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        paintTransform?: Readonly<{
            "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
        }> | null | undefined;
        rawTransform?: Readonly<{
            "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
        }> | null | undefined;
        hitTest: ((result: BoxHitTestResult) => boolean);
    }): boolean;
    get path(): DartIterable<upstream1.HitTestEntry<upstream2.HitTestTarget>>;
}
export declare abstract class BoxHitTestResult extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BoxHitTestResult>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BoxHitTestResult;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:BoxHitTestResult", readonly [], false];
    constructor();
}
export declare namespace BoxHitTestResult {
    function implement(args: [], implementation: {}): BoxHitTestResult;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "path" | "add" | "pushTransform" | "pushOffset" | "popTransform" | "toString" | "addWithPaintTransform" | "addWithPaintOffset" | "addWithRawTransform" | "addWithOutOfBandPosition" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxHitTestResult" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult";
export {};
