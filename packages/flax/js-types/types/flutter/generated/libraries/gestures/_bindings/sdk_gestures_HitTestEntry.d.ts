import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HitTestEntry<T extends upstream0.HitTestTarget = upstream0.HitTestTarget> extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [T];
}> {
    readonly __HitTestEntry: unique symbol;
    readonly [_flaxDartTypeValue]: HitTestEntry<T>;
}
export interface HitTestEntry<T extends upstream0.HitTestTarget = upstream0.HitTestTarget> {
    readonly [_flaxDartTypeValue]: HitTestEntry<T>;
    toString(): string;
    get target(): T;
    get transform(): upstream1.Matrix4 | null;
}
export declare abstract class HitTestEntry<T extends upstream0.HitTestTarget = upstream0.HitTestTarget> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HitTestEntry<upstream0.HitTestTarget>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: HitTestEntry<upstream0.HitTestTarget>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:HitTestEntry", readonly [readonly ["class", "flax.core/sdk_gestures#type:HitTestTarget", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(target: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }>);
}
export declare namespace HitTestEntry {
    function implement<T extends upstream0.HitTestTarget = upstream0.HitTestTarget>(args: [target: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }>], implementation: {}): HitTestEntry<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.HitTestTarget] ? (abstract new (target: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }>) => HitTestEntry<_Selected0>) & {
        readonly prototype: HitTestEntry<_Selected0>;
        implement(args: readonly [Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
        }>], implementation: Partial<HitTestEntry<_Selected0>>): HitTestEntry<_Selected0>;
    } & _FlaxInstanceType<HitTestEntry<_Selected0>> & _FlaxDartType<HitTestEntry<_Selected0>> : never : never;
}
export {};
