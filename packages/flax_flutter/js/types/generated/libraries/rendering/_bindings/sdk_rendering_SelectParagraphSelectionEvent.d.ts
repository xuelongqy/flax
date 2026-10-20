import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectParagraphSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectParagraphSelectionEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
}> {
    readonly __SelectParagraphSelectionEvent: unique symbol;
    readonly [_flaxDartTypeValue]: SelectParagraphSelectionEvent;
    readonly type: upstream2.SelectionEventType;
    readonly globalPosition: upstream1.Offset;
    readonly absorb: boolean;
}
export declare function _SelectParagraphSelectionEventFactory(options: {
    globalPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    absorb?: boolean | undefined;
}): SelectParagraphSelectionEvent;
export interface _SelectParagraphSelectionEventNative extends SelectParagraphSelectionEvent {
    readonly [_flaxDartTypeValue]: _SelectParagraphSelectionEventNative;
    get globalPosition(): upstream1.Offset;
    get absorb(): boolean;
    get type(): upstream2.SelectionEventType;
}
export declare abstract class _SelectParagraphSelectionEventNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectParagraphSelectionEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SelectParagraphSelectionEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectParagraphSelectionEvent", readonly [], false];
    constructor(options: {
        globalPosition: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        absorb?: boolean | undefined;
    });
}
export declare namespace _SelectParagraphSelectionEventFactory {
    function implement(args: [options: {
        globalPosition: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        absorb?: boolean | undefined;
    }], implementation: {}): SelectParagraphSelectionEvent;
}
declare const _SelectParagraphSelectionEventBinding: typeof _SelectParagraphSelectionEventFactory & (new (options: {
    globalPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    absorb?: boolean | undefined;
}) => _SelectParagraphSelectionEventNative);
export declare const SelectParagraphSelectionEvent: typeof _SelectParagraphSelectionEventBinding & _FlaxInstanceType<SelectParagraphSelectionEvent> & _FlaxDartType<SelectParagraphSelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:SelectParagraphSelectionEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "globalPosition" | "absorb" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectParagraphSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";
export {};
