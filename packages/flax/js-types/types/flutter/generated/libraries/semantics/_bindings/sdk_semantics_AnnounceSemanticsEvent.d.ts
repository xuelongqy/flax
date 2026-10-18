import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream2 from '@flax/flutter/semantics/_bindings/sdk_semantics_Assertiveness';
import '@flax/flutter/semantics/_bindings/sdk_semantics_Assertiveness';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface AnnounceSemanticsEvent extends Omit<upstream0.SemanticsEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics_event.dart::AnnounceSemanticsEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [];
}> {
    readonly __AnnounceSemanticsEvent: unique symbol;
    readonly [_flaxDartTypeValue]: AnnounceSemanticsEvent;
}
export interface AnnounceSemanticsEvent {
    readonly [_flaxDartTypeValue]: AnnounceSemanticsEvent;
    toMap(options?: {
        nodeId?: number | null | undefined;
    }): DartMap<string, unknown | null>;
    getDataMap(): DartMap<string, unknown | null>;
    toString(): string;
    get viewId(): number;
    get message(): string;
    get textDirection(): upstream1.TextDirection;
    get assertiveness(): upstream2.Assertiveness;
    get type(): string;
}
export declare abstract class AnnounceSemanticsEvent extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AnnounceSemanticsEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AnnounceSemanticsEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:AnnounceSemanticsEvent", readonly [], false];
    constructor(message: string, textDirection: upstream1.TextDirection, viewId: number, options?: {
        assertiveness?: upstream2.Assertiveness | undefined;
    });
}
export declare namespace AnnounceSemanticsEvent {
    function implement(args: [message: string, textDirection: upstream1.TextDirection, viewId: number, options?: {
        assertiveness?: upstream2.Assertiveness | undefined;
    }], implementation: {}): AnnounceSemanticsEvent;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "viewId" | "message" | "textDirection" | "assertiveness" | "toMap" | "getDataMap" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::AnnounceSemanticsEvent" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent";
export {};
