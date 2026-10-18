import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GestureRecognizerFactory<T extends upstream0.GestureRecognizer = upstream0.GestureRecognizer> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/gesture_detector.dart::GestureRecognizerFactory": readonly [T];
}> {
    readonly __GestureRecognizerFactory: unique symbol;
    readonly [_flaxDartTypeValue]: GestureRecognizerFactory<T>;
}
export interface GestureRecognizerFactory<T extends upstream0.GestureRecognizer = upstream0.GestureRecognizer> {
    readonly [_flaxDartTypeValue]: GestureRecognizerFactory<T>;
}
export declare abstract class GestureRecognizerFactory<T extends upstream0.GestureRecognizer = upstream0.GestureRecognizer> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GestureRecognizerFactory<upstream0.GestureRecognizer>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GestureRecognizerFactory<upstream0.GestureRecognizer>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:GestureRecognizerFactory", readonly [readonly ["class", "flax.core/sdk_gestures#type:GestureRecognizer", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
    abstract ["constructor"](): T;
    abstract initializer(instance: (T | DartInput<T>)): void;
}
export declare namespace GestureRecognizerFactory {
    function implement<T extends upstream0.GestureRecognizer = upstream0.GestureRecognizer>(args: [], implementation: {
        constructor: (() => (T | DartInput<T>));
        initializer: ((instance: T) => void);
    }): GestureRecognizerFactory<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.GestureRecognizer] ? (abstract new () => GestureRecognizerFactory<_Selected0>) & {
        readonly prototype: GestureRecognizerFactory<_Selected0>;
        implement(args: readonly [], implementation: Partial<GestureRecognizerFactory<_Selected0>>): GestureRecognizerFactory<_Selected0>;
    } & _FlaxInstanceType<GestureRecognizerFactory<_Selected0>> & _FlaxDartType<GestureRecognizerFactory<_Selected0>> : never : never;
}
export {};
