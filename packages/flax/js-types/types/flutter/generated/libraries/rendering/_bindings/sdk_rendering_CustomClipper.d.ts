import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CustomClipper<T extends unknown | null = unknown | null> extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __CustomClipper: unique symbol;
    readonly [_flaxDartTypeValue]: CustomClipper<T>;
}
export interface CustomClipper<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: CustomClipper<T>;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    getApproximateClipRect(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream2.Rect;
    toString(): string;
}
export declare abstract class CustomClipper<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CustomClipper<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CustomClipper<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:CustomClipper", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(options?: {
        reclip?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> | null | undefined;
    });
    abstract getClip(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): T;
    abstract shouldReclip(oldClipper: Readonly<{
        "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper": readonly [T];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): boolean;
}
export declare namespace CustomClipper {
    function implement<T extends unknown | null = unknown | null>(args: [options?: {
        reclip?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> | null | undefined;
    }], implementation: {
        getClip: ((size: upstream5.Size) => (T | DartInput<T>));
        shouldReclip: ((oldClipper: CustomClipper<T>) => boolean);
    }): CustomClipper<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "addListener" | "removeListener" | "getClip" | "getApproximateClipRect" | "shouldReclip" | "toString" | "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options?: {
        reclip?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> | null | undefined;
    }) => CustomClipper<_Selected0>) & {
        readonly prototype: CustomClipper<_Selected0>;
        implement(args: readonly [options?: {
            reclip?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
            }> | null | undefined;
        }], implementation: Partial<CustomClipper<_Selected0>>): CustomClipper<_Selected0>;
    } & _FlaxInstanceType<CustomClipper<_Selected0>> & _FlaxDartType<CustomClipper<_Selected0>> : never : never;
}
export {};
