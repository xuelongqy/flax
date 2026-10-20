import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextGranularity';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextGranularity';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GranularlyExtendSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::GranularlyExtendSelectionEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
}> {
    readonly __GranularlyExtendSelectionEvent: unique symbol;
    readonly [_flaxDartTypeValue]: GranularlyExtendSelectionEvent;
    readonly type: upstream2.SelectionEventType;
    readonly forward: boolean;
    readonly isEnd: boolean;
    readonly granularity: upstream1.TextGranularity;
}
export declare function _GranularlyExtendSelectionEventFactory(options: {
    forward: boolean;
    isEnd: boolean;
    granularity: upstream1.TextGranularity;
}): GranularlyExtendSelectionEvent;
export interface _GranularlyExtendSelectionEventNative extends GranularlyExtendSelectionEvent {
    readonly [_flaxDartTypeValue]: _GranularlyExtendSelectionEventNative;
    get forward(): boolean;
    get isEnd(): boolean;
    get granularity(): upstream1.TextGranularity;
    get type(): upstream2.SelectionEventType;
}
export declare abstract class _GranularlyExtendSelectionEventNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GranularlyExtendSelectionEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GranularlyExtendSelectionEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:GranularlyExtendSelectionEvent", readonly [], false];
    constructor(options: {
        forward: boolean;
        isEnd: boolean;
        granularity: upstream1.TextGranularity;
    });
}
export declare namespace _GranularlyExtendSelectionEventFactory {
    function implement(args: [options: {
        forward: boolean;
        isEnd: boolean;
        granularity: upstream1.TextGranularity;
    }], implementation: {}): GranularlyExtendSelectionEvent;
}
declare const _GranularlyExtendSelectionEventBinding: typeof _GranularlyExtendSelectionEventFactory & (new (options: {
    forward: boolean;
    isEnd: boolean;
    granularity: upstream1.TextGranularity;
}) => _GranularlyExtendSelectionEventNative);
export declare const GranularlyExtendSelectionEvent: typeof _GranularlyExtendSelectionEventBinding & _FlaxInstanceType<GranularlyExtendSelectionEvent> & _FlaxDartType<GranularlyExtendSelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:GranularlyExtendSelectionEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "forward" | "isEnd" | "granularity" | "__flaxBound:package:flutter/src/rendering/selection.dart::GranularlyExtendSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";
export {};
