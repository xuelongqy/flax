import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FocusSemanticEvent extends Omit<upstream0.SemanticsEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics_event.dart::FocusSemanticEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [];
}> {
    readonly __FocusSemanticEvent: unique symbol;
    readonly [_flaxDartTypeValue]: FocusSemanticEvent;
    readonly type: string;
    toMap(options?: {
        nodeId?: number | null | undefined;
    }): DartMap<string, unknown | null>;
    getDataMap(): DartMap<string, unknown | null>;
    toString(): string;
}
export declare function _FocusSemanticEventFactory(): FocusSemanticEvent;
export interface _FocusSemanticEventNative extends FocusSemanticEvent {
    readonly [_flaxDartTypeValue]: _FocusSemanticEventNative;
    toMap(options?: {
        nodeId?: number | null | undefined;
    }): DartMap<string, unknown | null>;
    getDataMap(): DartMap<string, unknown | null>;
    toString(): string;
    get type(): string;
}
export declare abstract class _FocusSemanticEventNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FocusSemanticEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FocusSemanticEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:FocusSemanticEvent", readonly [], false];
    constructor();
}
export declare namespace _FocusSemanticEventFactory {
    function implement(args: [], implementation: {}): FocusSemanticEvent;
}
declare const _FocusSemanticEventBinding: typeof _FocusSemanticEventFactory & (new () => _FocusSemanticEventNative);
export declare const FocusSemanticEvent: typeof _FocusSemanticEventBinding & _FlaxInstanceType<FocusSemanticEvent> & _FlaxDartType<FocusSemanticEvent, readonly ["class", "flax.core/sdk_semantics#type:FocusSemanticEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "toMap" | "getDataMap" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::FocusSemanticEvent" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent";
export {};
