import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_Scrollable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface EdgeDraggingAutoScroller extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::EdgeDraggingAutoScroller": readonly [];
}> {
    readonly __EdgeDraggingAutoScroller: unique symbol;
    readonly [_flaxDartTypeValue]: EdgeDraggingAutoScroller;
}
export interface EdgeDraggingAutoScroller {
    readonly [_flaxDartTypeValue]: EdgeDraggingAutoScroller;
    startAutoScrollIfNecessary(dragTarget: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): void;
    stopAutoScroll(): void;
    get scrollable(): upstream0.ScrollableState;
    get onScrollViewScrolled(): (() => void) | null;
    get velocityScalar(): number;
    get scrolling(): boolean;
}
export declare abstract class EdgeDraggingAutoScroller extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<EdgeDraggingAutoScroller>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: EdgeDraggingAutoScroller;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:EdgeDraggingAutoScroller", readonly [], false];
    constructor(scrollable: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable.dart::ScrollableState": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream2.Scrollable];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_context.dart::ScrollContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream2.Scrollable];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin": readonly [upstream2.Scrollable];
    }>, options: {
        onScrollViewScrolled?: (() => void) | null | undefined;
        velocityScalar: number;
    });
}
export declare namespace EdgeDraggingAutoScroller {
    function implement(args: [scrollable: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable.dart::ScrollableState": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream2.Scrollable];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_context.dart::ScrollContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream2.Scrollable];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin": readonly [upstream2.Scrollable];
    }>, options: {
        onScrollViewScrolled?: (() => void) | null | undefined;
        velocityScalar: number;
    }], implementation: {}): EdgeDraggingAutoScroller;
}
