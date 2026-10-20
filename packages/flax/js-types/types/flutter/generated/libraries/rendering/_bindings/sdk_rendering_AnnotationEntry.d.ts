import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnnotationEntry<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationEntry": readonly [T];
}> {
    readonly __AnnotationEntry: unique symbol;
    readonly [_flaxDartTypeValue]: AnnotationEntry<T>;
    readonly annotation: T;
    readonly localPosition: upstream0.Offset;
    toString(): string;
}
export declare function _AnnotationEntryFactory<T extends unknown | null = unknown | null>(options: {
    annotation: (T | _FlaxDartOutput<T>);
    localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}): AnnotationEntry<T>;
export declare function _AnnotationEntryFactory(options: {
    annotation: unknown | null;
    localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}): AnnotationEntry<unknown | null>;
export interface _AnnotationEntryNative<T extends unknown | null = unknown | null> extends AnnotationEntry<T> {
    readonly [_flaxDartTypeValue]: _AnnotationEntryNative<T>;
    toString(): string;
    get annotation(): T;
    get localPosition(): upstream0.Offset;
}
export declare abstract class _AnnotationEntryNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
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
export declare namespace _AnnotationEntryFactory {
    function implement<T extends unknown | null = unknown | null>(args: [options: {
        annotation: unknown | null;
        localPosition: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }], implementation: {}): AnnotationEntry<T>;
}
declare const _AnnotationEntryBinding: typeof _AnnotationEntryFactory & (new <T extends unknown | null = unknown | null>(options: {
    annotation: unknown | null;
    localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}) => _AnnotationEntryNative<T>);
export declare const AnnotationEntry: typeof _AnnotationEntryBinding & _FlaxInstanceType<AnnotationEntry<unknown | null>> & _FlaxDartType<AnnotationEntry<unknown | null>, readonly ["class", "flax.core/sdk_rendering#type:AnnotationEntry", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options: {
        annotation: unknown | null;
        localPosition: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }) => _AnnotationEntryNative<_Selected0>) & {
        (options: {
            annotation: (_Selected0 | DartInput<_Selected0>);
            localPosition: Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>;
        }): _AnnotationEntryNative<_Selected0>;
        readonly prototype: _AnnotationEntryNative<_Selected0>;
        implement(args: readonly [options: {
            annotation: unknown | null;
            localPosition: Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>;
        }], implementation: Partial<_AnnotationEntryNative<_Selected0>>): _AnnotationEntryNative<_Selected0>;
    } & _FlaxInstanceType<_AnnotationEntryNative<_Selected0>> & _FlaxDartType<_AnnotationEntryNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options: {
        annotation: unknown | null;
        localPosition: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }) => _AnnotationEntryNative<_Selected0>) & {
        (options: {
            annotation: (_Selected0 | DartInput<_Selected0>);
            localPosition: Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>;
        }): _AnnotationEntryNative<_Selected0>;
        readonly prototype: _AnnotationEntryNative<_Selected0>;
        implement(args: readonly [options: {
            annotation: unknown | null;
            localPosition: Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>;
        }], implementation: Partial<_AnnotationEntryNative<_Selected0>>): _AnnotationEntryNative<_Selected0>;
    } & _FlaxInstanceType<_AnnotationEntryNative<_Selected0>> & _FlaxDartType<_AnnotationEntryNative<_Selected0>> : never : never;
}
export {};
