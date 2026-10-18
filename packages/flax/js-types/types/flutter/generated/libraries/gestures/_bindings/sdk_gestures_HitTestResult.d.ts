import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface HitTestResult extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
}> {
    readonly __HitTestResult: unique symbol;
    readonly [_flaxDartTypeValue]: HitTestResult;
}
export interface HitTestResult {
    readonly [_flaxDartTypeValue]: HitTestResult;
    add(entry: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream1.HitTestTarget];
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
    get path(): DartIterable<upstream0.HitTestEntry<upstream1.HitTestTarget>>;
}
export declare abstract class HitTestResult extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HitTestResult>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: HitTestResult;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:HitTestResult", readonly [], false];
    constructor();
}
export declare namespace HitTestResult {
    function implement(args: [], implementation: {}): HitTestResult;
}
