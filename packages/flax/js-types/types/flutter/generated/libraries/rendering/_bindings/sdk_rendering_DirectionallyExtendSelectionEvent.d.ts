import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionExtendDirection';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionExtendDirection';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DirectionallyExtendSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::DirectionallyExtendSelectionEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
}> {
    readonly __DirectionallyExtendSelectionEvent: unique symbol;
    readonly [_flaxDartTypeValue]: DirectionallyExtendSelectionEvent;
    readonly type: upstream2.SelectionEventType;
    readonly dx: number;
    readonly isEnd: boolean;
    readonly direction: upstream1.SelectionExtendDirection;
    copyWith(options?: {
        direction?: upstream1.SelectionExtendDirection | null | undefined;
        dx?: number | null | undefined;
        isEnd?: boolean | null | undefined;
    }): DirectionallyExtendSelectionEvent;
}
export declare function _DirectionallyExtendSelectionEventFactory(options: {
    dx: number;
    isEnd: boolean;
    direction: upstream1.SelectionExtendDirection;
}): DirectionallyExtendSelectionEvent;
export interface _DirectionallyExtendSelectionEventNative extends DirectionallyExtendSelectionEvent {
    readonly [_flaxDartTypeValue]: _DirectionallyExtendSelectionEventNative;
    copyWith(options?: {
        dx?: number | null | undefined;
        isEnd?: boolean | null | undefined;
        direction?: upstream1.SelectionExtendDirection | null | undefined;
    }): DirectionallyExtendSelectionEvent;
    get dx(): number;
    get isEnd(): boolean;
    get direction(): upstream1.SelectionExtendDirection;
    get type(): upstream2.SelectionEventType;
}
export declare abstract class _DirectionallyExtendSelectionEventNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DirectionallyExtendSelectionEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DirectionallyExtendSelectionEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:DirectionallyExtendSelectionEvent", readonly [], false];
    constructor(options: {
        dx: number;
        isEnd: boolean;
        direction: upstream1.SelectionExtendDirection;
    });
}
export declare namespace _DirectionallyExtendSelectionEventFactory {
    function implement(args: [options: {
        dx: number;
        isEnd: boolean;
        direction: upstream1.SelectionExtendDirection;
    }], implementation: {}): DirectionallyExtendSelectionEvent;
}
declare const _DirectionallyExtendSelectionEventBinding: typeof _DirectionallyExtendSelectionEventFactory & (new (options: {
    dx: number;
    isEnd: boolean;
    direction: upstream1.SelectionExtendDirection;
}) => _DirectionallyExtendSelectionEventNative);
export declare const DirectionallyExtendSelectionEvent: typeof _DirectionallyExtendSelectionEventBinding & _FlaxInstanceType<DirectionallyExtendSelectionEvent> & _FlaxDartType<DirectionallyExtendSelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:DirectionallyExtendSelectionEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "dx" | "isEnd" | "direction" | "copyWith" | "__flaxBound:package:flutter/src/rendering/selection.dart::DirectionallyExtendSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";
export {};
