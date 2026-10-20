import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectWordSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectWordSelectionEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
}> {
    readonly __SelectWordSelectionEvent: unique symbol;
    readonly [_flaxDartTypeValue]: SelectWordSelectionEvent;
    readonly type: upstream2.SelectionEventType;
    readonly globalPosition: upstream1.Offset;
}
export declare function _SelectWordSelectionEventFactory(options: {
    globalPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}): SelectWordSelectionEvent;
export interface _SelectWordSelectionEventNative extends SelectWordSelectionEvent {
    readonly [_flaxDartTypeValue]: _SelectWordSelectionEventNative;
    get globalPosition(): upstream1.Offset;
    get type(): upstream2.SelectionEventType;
}
export declare abstract class _SelectWordSelectionEventNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectWordSelectionEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SelectWordSelectionEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectWordSelectionEvent", readonly [], false];
    constructor(options: {
        globalPosition: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    });
}
export declare namespace _SelectWordSelectionEventFactory {
    function implement(args: [options: {
        globalPosition: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }], implementation: {}): SelectWordSelectionEvent;
}
declare const _SelectWordSelectionEventBinding: typeof _SelectWordSelectionEventFactory & (new (options: {
    globalPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}) => _SelectWordSelectionEventNative);
export declare const SelectWordSelectionEvent: typeof _SelectWordSelectionEventBinding & _FlaxInstanceType<SelectWordSelectionEvent> & _FlaxDartType<SelectWordSelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:SelectWordSelectionEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "globalPosition" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectWordSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";
export {};
