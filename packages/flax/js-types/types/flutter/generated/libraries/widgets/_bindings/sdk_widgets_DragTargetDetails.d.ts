import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DragTargetDetails<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/drag_target.dart::DragTargetDetails": readonly [T];
}> {
    readonly __DragTargetDetails: unique symbol;
    readonly [_flaxDartTypeValue]: DragTargetDetails<T>;
    readonly data: T;
    readonly offset: upstream0.Offset;
}
export declare function _DragTargetDetailsFactory<T extends unknown | null = unknown | null>(options: {
    data: (T | _FlaxDartOutput<T>);
    offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}): DragTargetDetails<T>;
export declare function _DragTargetDetailsFactory(options: {
    data: unknown | null;
    offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}): DragTargetDetails<unknown | null>;
export interface _DragTargetDetailsNative<T extends unknown | null = unknown | null> extends DragTargetDetails<T> {
    readonly [_flaxDartTypeValue]: _DragTargetDetailsNative<T>;
    get data(): T;
    get offset(): upstream0.Offset;
}
export declare abstract class _DragTargetDetailsNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DragTargetDetails<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DragTargetDetails<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DragTargetDetails", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(options: {
        data: unknown | null;
        offset: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    });
}
export declare namespace _DragTargetDetailsFactory {
    function implement<T extends unknown | null = unknown | null>(args: [options: {
        data: unknown | null;
        offset: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }], implementation: {}): DragTargetDetails<T>;
}
declare const _DragTargetDetailsBinding: typeof _DragTargetDetailsFactory & (new <T extends unknown | null = unknown | null>(options: {
    data: unknown | null;
    offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}) => _DragTargetDetailsNative<T>);
export declare const DragTargetDetails: typeof _DragTargetDetailsBinding & _FlaxInstanceType<DragTargetDetails<unknown | null>> & _FlaxDartType<DragTargetDetails<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:DragTargetDetails", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options: {
        data: unknown | null;
        offset: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }) => _DragTargetDetailsNative<_Selected0>) & {
        (options: {
            data: (_Selected0 | DartInput<_Selected0>);
            offset: Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>;
        }): _DragTargetDetailsNative<_Selected0>;
        readonly prototype: _DragTargetDetailsNative<_Selected0>;
        implement(args: readonly [options: {
            data: unknown | null;
            offset: Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>;
        }], implementation: Partial<_DragTargetDetailsNative<_Selected0>>): _DragTargetDetailsNative<_Selected0>;
    } & _FlaxInstanceType<_DragTargetDetailsNative<_Selected0>> & _FlaxDartType<_DragTargetDetailsNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options: {
        data: unknown | null;
        offset: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }) => _DragTargetDetailsNative<_Selected0>) & {
        (options: {
            data: (_Selected0 | DartInput<_Selected0>);
            offset: Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>;
        }): _DragTargetDetailsNative<_Selected0>;
        readonly prototype: _DragTargetDetailsNative<_Selected0>;
        implement(args: readonly [options: {
            data: unknown | null;
            offset: Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>;
        }], implementation: Partial<_DragTargetDetailsNative<_Selected0>>): _DragTargetDetailsNative<_Selected0>;
    } & _FlaxInstanceType<_DragTargetDetailsNative<_Selected0>> & _FlaxDartType<_DragTargetDetailsNative<_Selected0>> : never : never;
}
export {};
