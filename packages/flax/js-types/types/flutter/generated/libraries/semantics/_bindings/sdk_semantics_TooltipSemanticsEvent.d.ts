import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TooltipSemanticsEvent extends Omit<upstream0.SemanticsEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics_event.dart::TooltipSemanticsEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [];
}> {
    readonly __TooltipSemanticsEvent: unique symbol;
    readonly [_flaxDartTypeValue]: TooltipSemanticsEvent;
}
export interface TooltipSemanticsEvent {
    readonly [_flaxDartTypeValue]: TooltipSemanticsEvent;
    toMap(options?: {
        nodeId?: number | null | undefined;
    }): DartMap<string, unknown | null>;
    getDataMap(): DartMap<string, unknown | null>;
    toString(): string;
    get message(): string;
    get type(): string;
}
export declare abstract class TooltipSemanticsEvent extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TooltipSemanticsEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TooltipSemanticsEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:TooltipSemanticsEvent", readonly [], false];
    constructor(message: string);
}
export declare namespace TooltipSemanticsEvent {
    function implement(args: [message: string], implementation: {}): TooltipSemanticsEvent;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "message" | "toMap" | "getDataMap" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::TooltipSemanticsEvent" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent";
export {};
