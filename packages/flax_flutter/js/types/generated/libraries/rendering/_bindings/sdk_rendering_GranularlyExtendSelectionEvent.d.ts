import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextGranularity';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextGranularity';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface GranularlyExtendSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::GranularlyExtendSelectionEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
}> {
    readonly __GranularlyExtendSelectionEvent: unique symbol;
    readonly [_flaxDartTypeValue]: GranularlyExtendSelectionEvent;
}
export interface GranularlyExtendSelectionEvent {
    readonly [_flaxDartTypeValue]: GranularlyExtendSelectionEvent;
    get forward(): boolean;
    get isEnd(): boolean;
    get granularity(): upstream1.TextGranularity;
    get type(): upstream2.SelectionEventType;
}
export declare abstract class GranularlyExtendSelectionEvent extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GranularlyExtendSelectionEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GranularlyExtendSelectionEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:GranularlyExtendSelectionEvent", readonly [], false];
    constructor(options: {
        forward: boolean;
        isEnd: boolean;
        granularity: upstream1.TextGranularity;
    });
}
export declare namespace GranularlyExtendSelectionEvent {
    function implement(args: [options: {
        forward: boolean;
        isEnd: boolean;
        granularity: upstream1.TextGranularity;
    }], implementation: {}): GranularlyExtendSelectionEvent;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "forward" | "isEnd" | "granularity" | "__flaxBound:package:flutter/src/rendering/selection.dart::GranularlyExtendSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";
export {};
