import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TooltipSemanticsEvent extends Omit<upstream0.SemanticsEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics_event.dart::TooltipSemanticsEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [];
}> {
    readonly __TooltipSemanticsEvent: unique symbol;
    readonly [_flaxDartTypeValue]: TooltipSemanticsEvent;
    readonly type: string;
    readonly message: string;
    toMap(options?: {
        nodeId?: number | null | undefined;
    }): DartMap<string, unknown | null>;
    getDataMap(): DartMap<string, unknown | null>;
    toString(): string;
}
export declare function _TooltipSemanticsEventFactory(message: string): TooltipSemanticsEvent;
export interface _TooltipSemanticsEventNative extends TooltipSemanticsEvent {
    readonly [_flaxDartTypeValue]: _TooltipSemanticsEventNative;
    toMap(options?: {
        nodeId?: number | null | undefined;
    }): DartMap<string, unknown | null>;
    getDataMap(): DartMap<string, unknown | null>;
    toString(): string;
    get message(): string;
    get type(): string;
}
export declare abstract class _TooltipSemanticsEventNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TooltipSemanticsEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TooltipSemanticsEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:TooltipSemanticsEvent", readonly [], false];
    constructor(message: string);
}
export declare namespace _TooltipSemanticsEventFactory {
    function implement(args: [message: string], implementation: {}): TooltipSemanticsEvent;
}
declare const _TooltipSemanticsEventBinding: typeof _TooltipSemanticsEventFactory & (new (message: string) => _TooltipSemanticsEventNative);
export declare const TooltipSemanticsEvent: typeof _TooltipSemanticsEventBinding & _FlaxInstanceType<TooltipSemanticsEvent> & _FlaxDartType<TooltipSemanticsEvent, readonly ["class", "flax.core/sdk_semantics#type:TooltipSemanticsEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "message" | "toMap" | "getDataMap" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::TooltipSemanticsEvent" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent";
export {};
