import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionExtendDirection';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionExtendDirection';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DirectionallyExtendSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::DirectionallyExtendSelectionEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
}> {
    readonly __DirectionallyExtendSelectionEvent: unique symbol;
    readonly [_flaxDartTypeValue]: DirectionallyExtendSelectionEvent;
}
export interface DirectionallyExtendSelectionEvent {
    readonly [_flaxDartTypeValue]: DirectionallyExtendSelectionEvent;
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
export declare abstract class DirectionallyExtendSelectionEvent extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DirectionallyExtendSelectionEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DirectionallyExtendSelectionEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:DirectionallyExtendSelectionEvent", readonly [], false];
    constructor(options: {
        dx: number;
        isEnd: boolean;
        direction: upstream1.SelectionExtendDirection;
    });
}
export declare namespace DirectionallyExtendSelectionEvent {
    function implement(args: [options: {
        dx: number;
        isEnd: boolean;
        direction: upstream1.SelectionExtendDirection;
    }], implementation: {}): DirectionallyExtendSelectionEvent;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "dx" | "isEnd" | "direction" | "copyWith" | "__flaxBound:package:flutter/src/rendering/selection.dart::DirectionallyExtendSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";
export {};
