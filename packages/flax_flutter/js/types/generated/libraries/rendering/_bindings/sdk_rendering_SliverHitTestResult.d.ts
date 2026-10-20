import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverHitTestResult extends Omit<upstream0.HitTestResult, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverHitTestResult": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
}> {
    readonly __SliverHitTestResult: unique symbol;
    readonly [_flaxDartTypeValue]: SliverHitTestResult;
    readonly path: DartIterable<upstream1.HitTestEntry<upstream2.HitTestTarget>>;
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
        crossAxisOffset: number;
        crossAxisPosition: number;
        hitTest: ((result: SliverHitTestResult, options: {
            crossAxisPosition: number;
            mainAxisPosition: number;
        }) => boolean);
        mainAxisOffset: number;
        mainAxisPosition: number;
        paintOffset: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null;
    }): boolean;
}
export declare function _SliverHitTestResultFactory(): SliverHitTestResult;
export declare namespace _SliverHitTestResultFactory {
    function wrap(result: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
    }>): SliverHitTestResult;
}
export interface _SliverHitTestResultNative extends SliverHitTestResult {
    readonly [_flaxDartTypeValue]: _SliverHitTestResultNative;
    readonly [_flaxDartConstructors]?: {
        "": () => void;
        "wrap": (result: Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
        }>) => void;
    };
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
export declare abstract class _SliverHitTestResultNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverHitTestResult>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverHitTestResult;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverHitTestResult", readonly [], false];
    constructor();
    constructor(call: _FlaxProxySuper<_SliverHitTestResultNative>);
}
export declare namespace _SliverHitTestResultFactory {
    function implement(args: [], implementation: {}): SliverHitTestResult;
}
declare const _SliverHitTestResultBinding: typeof _SliverHitTestResultFactory & (new () => _SliverHitTestResultNative) & (new (call: _FlaxProxySuper<_SliverHitTestResultNative>) => _SliverHitTestResultNative);
export declare const SliverHitTestResult: typeof _SliverHitTestResultBinding & _FlaxInstanceType<SliverHitTestResult> & _FlaxDartType<SliverHitTestResult, readonly ["class", "flax.core/sdk_rendering#type:SliverHitTestResult", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "path" | "add" | "pushTransform" | "pushOffset" | "popTransform" | "toString" | "addWithAxisOffset" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverHitTestResult" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult";
export {};
