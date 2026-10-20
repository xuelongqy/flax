import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LongPressSemanticsEvent extends Omit<upstream0.SemanticsEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics_event.dart::LongPressSemanticsEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [];
}> {
    readonly __LongPressSemanticsEvent: unique symbol;
    readonly [_flaxDartTypeValue]: LongPressSemanticsEvent;
    readonly type: string;
    toMap(options?: {
        nodeId?: number | null | undefined;
    }): DartMap<string, unknown | null>;
    getDataMap(): DartMap<string, unknown | null>;
    toString(): string;
}
export declare function _LongPressSemanticsEventFactory(): LongPressSemanticsEvent;
export interface _LongPressSemanticsEventNative extends LongPressSemanticsEvent {
    readonly [_flaxDartTypeValue]: _LongPressSemanticsEventNative;
    toMap(options?: {
        nodeId?: number | null | undefined;
    }): DartMap<string, unknown | null>;
    getDataMap(): DartMap<string, unknown | null>;
    toString(): string;
    get type(): string;
}
export declare abstract class _LongPressSemanticsEventNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LongPressSemanticsEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LongPressSemanticsEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:LongPressSemanticsEvent", readonly [], false];
    constructor();
}
export declare namespace _LongPressSemanticsEventFactory {
    function implement(args: [], implementation: {}): LongPressSemanticsEvent;
}
declare const _LongPressSemanticsEventBinding: typeof _LongPressSemanticsEventFactory & (new () => _LongPressSemanticsEventNative);
export declare const LongPressSemanticsEvent: typeof _LongPressSemanticsEventBinding & _FlaxInstanceType<LongPressSemanticsEvent> & _FlaxDartType<LongPressSemanticsEvent, readonly ["class", "flax.core/sdk_semantics#type:LongPressSemanticsEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "toMap" | "getDataMap" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::LongPressSemanticsEvent" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent";
export {};
