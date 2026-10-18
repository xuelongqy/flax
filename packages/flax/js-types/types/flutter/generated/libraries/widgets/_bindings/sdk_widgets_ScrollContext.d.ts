import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollContext extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_context.dart::ScrollContext": readonly [];
}> {
    readonly __ScrollContext: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollContext;
    readonly notificationContext: upstream0.BuildContext | null;
    readonly storageContext: upstream0.BuildContext;
    readonly vsync: upstream1.TickerProvider;
    readonly axisDirection: upstream2.AxisDirection;
    readonly devicePixelRatio: number;
    setIgnorePointer(value: boolean): void;
    setCanDrag(value: boolean): void;
    setSemanticsActions(actions: DartSetInput<upstream3.SemanticsAction, Readonly<{
        "__flaxBound:dart:ui::SemanticsAction": readonly [];
    }>>): void;
    saveOffset(offset: number): void;
}
export declare namespace _ScrollContextFactory {
    function implement(args: [], implementation: {
        setIgnorePointer: ((value: boolean) => void);
        setCanDrag: ((value: boolean) => void);
        setSemanticsActions: ((actions: DartSet<upstream3.SemanticsAction>) => void);
        saveOffset: ((offset: number) => void);
        get notificationContext(): upstream0.BuildContext | null;
        get storageContext(): upstream0.BuildContext;
        get vsync(): Readonly<{
            "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
        }>;
        get axisDirection(): upstream2.AxisDirection;
        get devicePixelRatio(): number;
    }): ScrollContext;
}
export declare const ScrollContext: typeof _ScrollContextFactory & _FlaxInstanceType<ScrollContext> & _FlaxDartType<ScrollContext, readonly ["class", "flax.core/sdk_widgets#type:ScrollContext", readonly [], false]>;
