import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DateTimeRange<T extends upstream0.DateTime = upstream0.DateTime> extends Readonly<{
    "__flaxBound:package:flutter/src/material/date.dart::DateTimeRange": readonly [T];
}> {
    readonly __DateTimeRange: unique symbol;
    readonly [_flaxDartTypeValue]: DateTimeRange<T>;
    readonly start: T;
    readonly end: T;
    readonly duration: upstream1.Duration;
    toString(): string;
}
export declare function _DateTimeRangeFactory<T extends upstream0.DateTime = upstream0.DateTime>(options: {
    start: (T | DartInput<T>);
    end: (T | DartInput<T>);
}): DateTimeRange<T>;
export declare function _DateTimeRangeFactory(options: {
    start: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>;
    end: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>;
}): DateTimeRange<upstream0.DateTime>;
export interface _DateTimeRangeNative<T extends upstream0.DateTime = upstream0.DateTime> extends DateTimeRange<T> {
    readonly [_flaxDartTypeValue]: _DateTimeRangeNative<T>;
    toString(): string;
    get start(): T;
    get end(): T;
    get duration(): upstream1.Duration;
}
export declare abstract class _DateTimeRangeNative<T extends upstream0.DateTime = upstream0.DateTime> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DateTimeRange<upstream0.DateTime>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DateTimeRange<upstream0.DateTime>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DateTimeRange", readonly [readonly ["class", "flax.core/flutter#type:DateTime", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(options: {
        start: DartInput<Readonly<{
            "__flaxBound:dart:core::DateTime": readonly [];
        }>>;
        end: DartInput<Readonly<{
            "__flaxBound:dart:core::DateTime": readonly [];
        }>>;
    });
}
export declare namespace _DateTimeRangeFactory {
    function implement<T extends upstream0.DateTime = upstream0.DateTime>(args: [options: {
        start: DartInput<Readonly<{
            "__flaxBound:dart:core::DateTime": readonly [];
        }>>;
        end: DartInput<Readonly<{
            "__flaxBound:dart:core::DateTime": readonly [];
        }>>;
    }], implementation: {}): DateTimeRange<T>;
}
declare const _DateTimeRangeBinding: typeof _DateTimeRangeFactory & (new <T extends upstream0.DateTime = upstream0.DateTime>(options: {
    start: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>;
    end: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>;
}) => _DateTimeRangeNative<T>);
export declare const DateTimeRange: typeof _DateTimeRangeBinding & _FlaxInstanceType<DateTimeRange<upstream0.DateTime>> & _FlaxDartType<DateTimeRange<upstream0.DateTime>, readonly ["class", "flax.core/sdk_material#type:DateTimeRange", readonly [readonly ["class", "flax.core/flutter#type:DateTime", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.DateTime] ? (new (options: {
        start: DartInput<Readonly<{
            "__flaxBound:dart:core::DateTime": readonly [];
        }>>;
        end: DartInput<Readonly<{
            "__flaxBound:dart:core::DateTime": readonly [];
        }>>;
    }) => _DateTimeRangeNative<_Selected0>) & {
        (options: {
            start: (_Selected0 | DartInput<_Selected0>);
            end: (_Selected0 | DartInput<_Selected0>);
        }): _DateTimeRangeNative<_Selected0>;
        readonly prototype: _DateTimeRangeNative<_Selected0>;
        implement(args: readonly [options: {
            start: DartInput<Readonly<{
                "__flaxBound:dart:core::DateTime": readonly [];
            }>>;
            end: DartInput<Readonly<{
                "__flaxBound:dart:core::DateTime": readonly [];
            }>>;
        }], implementation: Partial<_DateTimeRangeNative<_Selected0>>): _DateTimeRangeNative<_Selected0>;
    } & _FlaxInstanceType<_DateTimeRangeNative<_Selected0>> & _FlaxDartType<_DateTimeRangeNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.DateTime] ? (new (options: {
        start: DartInput<Readonly<{
            "__flaxBound:dart:core::DateTime": readonly [];
        }>>;
        end: DartInput<Readonly<{
            "__flaxBound:dart:core::DateTime": readonly [];
        }>>;
    }) => _DateTimeRangeNative<_Selected0>) & {
        (options: {
            start: (_Selected0 | DartInput<_Selected0>);
            end: (_Selected0 | DartInput<_Selected0>);
        }): _DateTimeRangeNative<_Selected0>;
        readonly prototype: _DateTimeRangeNative<_Selected0>;
        implement(args: readonly [options: {
            start: DartInput<Readonly<{
                "__flaxBound:dart:core::DateTime": readonly [];
            }>>;
            end: DartInput<Readonly<{
                "__flaxBound:dart:core::DateTime": readonly [];
            }>>;
        }], implementation: Partial<_DateTimeRangeNative<_Selected0>>): _DateTimeRangeNative<_Selected0>;
    } & _FlaxInstanceType<_DateTimeRangeNative<_Selected0>> & _FlaxDartType<_DateTimeRangeNative<_Selected0>> : never : never;
}
export {};
