import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SliverHitTestResult extends Omit<upstream0.HitTestResult, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverHitTestResult": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
}> {
    readonly __SliverHitTestResult: unique symbol;
    readonly [_flaxDartTypeValue]: SliverHitTestResult;
}
export interface SliverHitTestResult {
    readonly [_flaxDartTypeValue]: SliverHitTestResult;
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
    addWithAxisOffset(options: {
        paintOffset: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null;
        mainAxisOffset: number;
        crossAxisOffset: number;
        mainAxisPosition: number;
        crossAxisPosition: number;
        hitTest: ((result: SliverHitTestResult, options: {
            crossAxisPosition: number;
            mainAxisPosition: number;
        }) => boolean);
    }): boolean;
    get path(): DartIterable<upstream1.HitTestEntry<upstream2.HitTestTarget>>;
}
export declare abstract class SliverHitTestResult extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverHitTestResult>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverHitTestResult;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverHitTestResult", readonly [], false];
    constructor();
}
export declare namespace SliverHitTestResult {
    function implement(args: [], implementation: {}): SliverHitTestResult;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "path" | "add" | "pushTransform" | "pushOffset" | "popTransform" | "toString" | "addWithAxisOffset" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverHitTestResult" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult";
export {};
