import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ClearSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::ClearSelectionEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
}> {
    readonly __ClearSelectionEvent: unique symbol;
    readonly [_flaxDartTypeValue]: ClearSelectionEvent;
    readonly type: upstream1.SelectionEventType;
}
export declare function _ClearSelectionEventFactory(): ClearSelectionEvent;
export interface _ClearSelectionEventNative extends ClearSelectionEvent {
    readonly [_flaxDartTypeValue]: _ClearSelectionEventNative;
    get type(): upstream1.SelectionEventType;
}
export declare abstract class _ClearSelectionEventNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ClearSelectionEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ClearSelectionEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ClearSelectionEvent", readonly [], false];
    constructor();
}
export declare namespace _ClearSelectionEventFactory {
    function implement(args: [], implementation: {}): ClearSelectionEvent;
}
declare const _ClearSelectionEventBinding: typeof _ClearSelectionEventFactory & (new () => _ClearSelectionEventNative);
export declare const ClearSelectionEvent: typeof _ClearSelectionEventBinding & _FlaxInstanceType<ClearSelectionEvent> & _FlaxDartType<ClearSelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:ClearSelectionEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "__flaxBound:package:flutter/src/rendering/selection.dart::ClearSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";
export {};
