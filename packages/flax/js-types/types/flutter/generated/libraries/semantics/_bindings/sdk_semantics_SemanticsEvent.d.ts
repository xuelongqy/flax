import { type FlaxInstanceType as _FlaxInstanceType, type DartMap, type DartMapInput } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SemanticsEvent extends Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [];
}> {
    readonly __SemanticsEvent: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsEvent;
}
export interface SemanticsEvent {
    readonly [_flaxDartTypeValue]: SemanticsEvent;
    toMap(options?: {
        nodeId?: number | null | undefined;
    }): DartMap<string, unknown | null>;
    toString(): string;
    get type(): string;
}
export declare abstract class SemanticsEvent extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SemanticsEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:SemanticsEvent", readonly [], false];
    constructor(type: string);
    abstract getDataMap(): DartMap<string, unknown | null>;
}
export declare namespace SemanticsEvent {
    function implement(args: [type: string], implementation: {
        getDataMap: (() => DartMapInput<string, unknown | null, string, unknown | null>);
    }): SemanticsEvent;
}
