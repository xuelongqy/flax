import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_ValueKey';
import '@flax/flutter/foundation/_bindings/flutter_ValueKey';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PageStorageKey<T extends unknown | null = unknown | null> extends Omit<upstream0.ValueKey<T>, _flaxOwnMembers0>, Omit<upstream1.LocalKey, _flaxOwnMembers0 | keyof upstream0.ValueKey<T>>, Omit<upstream2.Key, _flaxOwnMembers0 | keyof upstream0.ValueKey<T> | keyof upstream1.LocalKey>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/page_storage.dart::PageStorageKey": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::ValueKey": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
}> {
    readonly __PageStorageKey: unique symbol;
    readonly [_flaxDartTypeValue]: PageStorageKey<T>;
}
export interface PageStorageKey<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: PageStorageKey<T>;
    toString(): string;
    get value(): T;
}
export declare abstract class PageStorageKey<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PageStorageKey<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PageStorageKey<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PageStorageKey", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(value: unknown | null);
}
export declare namespace PageStorageKey {
    function implement<T extends unknown | null = unknown | null>(args: [value: unknown | null], implementation: {}): PageStorageKey<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "toString" | "__flaxBound:package:flutter/src/widgets/page_storage.dart::PageStorageKey" | "__flaxBound:package:flutter/src/foundation/key.dart::ValueKey" | "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey" | "__flaxBound:package:flutter/src/foundation/key.dart::Key";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (value: unknown | null) => PageStorageKey<_Selected0>) & {
        readonly prototype: PageStorageKey<_Selected0>;
        implement(args: readonly [unknown | null], implementation: Partial<PageStorageKey<_Selected0>>): PageStorageKey<_Selected0>;
    } & _FlaxInstanceType<PageStorageKey<_Selected0>> & _FlaxDartType<PageStorageKey<_Selected0>> : never : never;
}
export {};
