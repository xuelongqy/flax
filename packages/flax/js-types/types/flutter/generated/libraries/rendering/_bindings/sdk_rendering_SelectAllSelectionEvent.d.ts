import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectAllSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectAllSelectionEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
}> {
    readonly __SelectAllSelectionEvent: unique symbol;
    readonly [_flaxDartTypeValue]: SelectAllSelectionEvent;
    readonly type: upstream1.SelectionEventType;
}
export declare function _SelectAllSelectionEventFactory(): SelectAllSelectionEvent;
export interface _SelectAllSelectionEventNative extends SelectAllSelectionEvent {
    readonly [_flaxDartTypeValue]: _SelectAllSelectionEventNative;
    get type(): upstream1.SelectionEventType;
}
export declare abstract class _SelectAllSelectionEventNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectAllSelectionEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SelectAllSelectionEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectAllSelectionEvent", readonly [], false];
    constructor();
}
export declare namespace _SelectAllSelectionEventFactory {
    function implement(args: [], implementation: {}): SelectAllSelectionEvent;
}
declare const _SelectAllSelectionEventBinding: typeof _SelectAllSelectionEventFactory & (new () => _SelectAllSelectionEventNative);
export declare const SelectAllSelectionEvent: typeof _SelectAllSelectionEventBinding & _FlaxInstanceType<SelectAllSelectionEvent> & _FlaxDartType<SelectAllSelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:SelectAllSelectionEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectAllSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";
export {};
