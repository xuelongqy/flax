import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_AnimatedGrid';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_TickerProviderStateMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TickerProviderStateMixin';
import type * as upstream4 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import type * as upstream11 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream12 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AnimatedGridState extends Omit<upstream0.State<upstream1.AnimatedGrid>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.AnimatedGrid>>, Omit<upstream3.TickerProviderStateMixin<upstream1.AnimatedGrid>, _flaxOwnMembers0 | keyof upstream0.State<upstream1.AnimatedGrid> | keyof upstream2.Diagnosticable>, Omit<upstream4.TickerProvider, _flaxOwnMembers0 | keyof upstream0.State<upstream1.AnimatedGrid> | keyof upstream2.Diagnosticable | keyof upstream3.TickerProviderStateMixin<upstream1.AnimatedGrid>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::AnimatedGridState": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::_AnimatedScrollViewState": readonly [upstream1.AnimatedGrid];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.AnimatedGrid];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream1.AnimatedGrid];
}>, Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
}> {
    readonly __AnimatedGridState: unique symbol;
    readonly [_flaxDartTypeValue]: AnimatedGridState;
    readonly widget: upstream1.AnimatedGrid;
    readonly context: upstream5.BuildContext;
    readonly mounted: boolean;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createTicker(onTick: ((elapsed: upstream11.Duration) => void)): upstream10.Ticker;
    activate(): void;
    dispose(): void;
    initState(): void;
    didUpdateWidget(oldWidget: upstream1.AnimatedGrid): void;
    reassemble(): void;
    setState(fn: (() => void)): void;
    deactivate(): void;
    build(context: upstream5.BuildContext): Widget;
    didChangeDependencies(): void;
    insertItem(index: number, options?: {
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream11.Duration];
        }>) | undefined;
    }): void;
    insertAllItems(index: number, length: number, options?: {
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream11.Duration];
        }>) | undefined;
        isAsync?: boolean | undefined;
    }): void;
    removeItem(index: number, builder: ((context: upstream5.BuildContext, animation: upstream12.Animation<number>) => Widget), options?: {
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream11.Duration];
        }>) | undefined;
    }): void;
    removeAllItems(builder: ((context: upstream5.BuildContext, animation: upstream12.Animation<number>) => Widget), options?: {
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream11.Duration];
        }>) | undefined;
    }): void;
}
export declare function _AnimatedGridStateFactory(): AnimatedGridState;
export declare const AnimatedGridState: typeof _AnimatedGridStateFactory & _FlaxInstanceType<AnimatedGridState> & _FlaxDartType<AnimatedGridState, readonly ["class", "flax.core/sdk_widgets#type:AnimatedGridState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "createTicker" | "activate" | "dispose" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "build" | "didChangeDependencies" | "insertItem" | "insertAllItems" | "removeItem" | "removeAllItems" | "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::AnimatedGridState" | "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::_AnimatedScrollViewState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider";
export {};
