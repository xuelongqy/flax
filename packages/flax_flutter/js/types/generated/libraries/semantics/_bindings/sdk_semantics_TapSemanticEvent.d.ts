import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TapSemanticEvent extends Omit<upstream0.SemanticsEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics_event.dart::TapSemanticEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [];
}> {
    readonly __TapSemanticEvent: unique symbol;
    readonly [_flaxDartTypeValue]: TapSemanticEvent;
    readonly type: string;
    toMap(options?: {
        nodeId?: number | null | undefined;
    }): DartMap<string, unknown | null>;
    getDataMap(): DartMap<string, unknown | null>;
    toString(): string;
}
export declare function _TapSemanticEventFactory(): TapSemanticEvent;
export interface _TapSemanticEventNative extends TapSemanticEvent {
    readonly [_flaxDartTypeValue]: _TapSemanticEventNative;
    toMap(options?: {
        nodeId?: number | null | undefined;
    }): DartMap<string, unknown | null>;
    getDataMap(): DartMap<string, unknown | null>;
    toString(): string;
    get type(): string;
}
export declare abstract class _TapSemanticEventNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TapSemanticEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TapSemanticEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:TapSemanticEvent", readonly [], false];
    constructor();
}
export declare namespace _TapSemanticEventFactory {
    function implement(args: [], implementation: {}): TapSemanticEvent;
}
declare const _TapSemanticEventBinding: typeof _TapSemanticEventFactory & (new () => _TapSemanticEventNative);
export declare const TapSemanticEvent: typeof _TapSemanticEventBinding & _FlaxInstanceType<TapSemanticEvent> & _FlaxDartType<TapSemanticEvent, readonly ["class", "flax.core/sdk_semantics#type:TapSemanticEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "toMap" | "getDataMap" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::TapSemanticEvent" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent";
export {};
