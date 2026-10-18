import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DragTargetDetails<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/drag_target.dart::DragTargetDetails": readonly [T];
}> {
    readonly __DragTargetDetails: unique symbol;
    readonly [_flaxDartTypeValue]: DragTargetDetails<T>;
}
export interface DragTargetDetails<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: DragTargetDetails<T>;
    get data(): T;
    get offset(): upstream0.Offset;
}
export declare abstract class DragTargetDetails<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
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
export declare namespace DragTargetDetails {
    function implement<T extends unknown | null = unknown | null>(args: [options: {
        data: unknown | null;
        offset: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }], implementation: {}): DragTargetDetails<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {
        data: unknown | null;
        offset: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }) => DragTargetDetails<_Selected0>) & {
        readonly prototype: DragTargetDetails<_Selected0>;
        implement(args: readonly [options: {
            data: unknown | null;
            offset: Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>;
        }], implementation: Partial<DragTargetDetails<_Selected0>>): DragTargetDetails<_Selected0>;
    } & _FlaxInstanceType<DragTargetDetails<_Selected0>> & _FlaxDartType<DragTargetDetails<_Selected0>> : never : never;
}
export {};
