import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnnotationEntry<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationEntry": readonly [T];
}> {
    readonly __AnnotationEntry: unique symbol;
    readonly [_flaxDartTypeValue]: AnnotationEntry<T>;
}
export interface AnnotationEntry<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: AnnotationEntry<T>;
    toString(): string;
    get annotation(): T;
    get localPosition(): upstream0.Offset;
}
export declare abstract class AnnotationEntry<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AnnotationEntry<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AnnotationEntry<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:AnnotationEntry", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(options: {
        annotation: unknown | null;
        localPosition: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    });
}
export declare namespace AnnotationEntry {
    function implement<T extends unknown | null = unknown | null>(args: [options: {
        annotation: unknown | null;
        localPosition: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }], implementation: {}): AnnotationEntry<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {
        annotation: unknown | null;
        localPosition: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }) => AnnotationEntry<_Selected0>) & {
        readonly prototype: AnnotationEntry<_Selected0>;
        implement(args: readonly [options: {
            annotation: unknown | null;
            localPosition: Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>;
        }], implementation: Partial<AnnotationEntry<_Selected0>>): AnnotationEntry<_Selected0>;
    } & _FlaxInstanceType<AnnotationEntry<_Selected0>> & _FlaxDartType<AnnotationEntry<_Selected0>> : never : never;
}
export {};
