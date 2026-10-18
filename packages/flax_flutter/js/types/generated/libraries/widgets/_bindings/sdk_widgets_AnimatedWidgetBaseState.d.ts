import { type FlaxInstanceType as _FlaxInstanceType, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ImplicitlyAnimatedWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ImplicitlyAnimatedWidgetState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ImplicitlyAnimatedWidgetState';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_SingleTickerProviderStateMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SingleTickerProviderStateMixin';
import type * as upstream5 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream6 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import type * as upstream7 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream13 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import type * as upstream14 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnimatedWidgetBaseState<T extends upstream0.ImplicitlyAnimatedWidget = upstream0.ImplicitlyAnimatedWidget> extends Omit<upstream1.ImplicitlyAnimatedWidgetState<T>, _flaxOwnMembers0>, Omit<upstream2.State<T>, _flaxOwnMembers0 | keyof upstream1.ImplicitlyAnimatedWidgetState<T>>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream1.ImplicitlyAnimatedWidgetState<T> | keyof upstream2.State<T>>, Omit<upstream4.SingleTickerProviderStateMixin<T>, _flaxOwnMembers0 | keyof upstream1.ImplicitlyAnimatedWidgetState<T> | keyof upstream2.State<T> | keyof upstream3.Diagnosticable>, Omit<upstream5.TickerProvider, _flaxOwnMembers0 | keyof upstream1.ImplicitlyAnimatedWidgetState<T> | keyof upstream2.State<T> | keyof upstream3.Diagnosticable | keyof upstream4.SingleTickerProviderStateMixin<T>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::AnimatedWidgetBaseState": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::ImplicitlyAnimatedWidgetState": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::SingleTickerProviderStateMixin": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
}> {
    readonly __AnimatedWidgetBaseState: unique symbol;
    readonly [_flaxDartTypeValue]: AnimatedWidgetBaseState<T>;
    readonly controller: upstream6.AnimationController;
    readonly animation: upstream7.Animation<number>;
    readonly widget: T;
    readonly context: upstream8.BuildContext;
    readonly mounted: boolean;
    initState(): void;
    didUpdateWidget(oldWidget: (T | DartInput<T>)): void;
    dispose(): void;
    forEachTween(visitor: ((tween: upstream9.Tween<unknown | null> | null, targetValue: unknown | null, constructor: ((targetValue: unknown | null) => upstream9.Tween<unknown | null>)) => (Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null];
    }>) | null)): void;
    didUpdateTweens(): void;
    reassemble(): void;
    setState(fn: (() => void)): void;
    deactivate(): void;
    activate(): void;
    build(context: upstream8.BuildContext): Widget;
    didChangeDependencies(): void;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream12.DiagnosticsTreeStyle | null | undefined;
    }): upstream11.DiagnosticsNode;
    createTicker(onTick: ((elapsed: upstream14.Duration) => void)): upstream13.Ticker;
    toString(options?: {
        minLevel?: upstream15.DiagnosticLevel | undefined;
    }): string;
}
export declare const AnimatedWidgetBaseState: object & _FlaxInstanceType<AnimatedWidgetBaseState<upstream0.ImplicitlyAnimatedWidget>> & _FlaxDartType<AnimatedWidgetBaseState<upstream0.ImplicitlyAnimatedWidget>, readonly ["class", "flax.core/sdk_widgets#type:AnimatedWidgetBaseState", readonly [readonly ["class", "flax.core/sdk_widgets#type:ImplicitlyAnimatedWidget", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "controller" | "animation" | "widget" | "context" | "mounted" | "initState" | "didUpdateWidget" | "dispose" | "forEachTween" | "didUpdateTweens" | "reassemble" | "setState" | "deactivate" | "activate" | "build" | "didChangeDependencies" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "createTicker" | "toString" | "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::AnimatedWidgetBaseState" | "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::ImplicitlyAnimatedWidgetState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::SingleTickerProviderStateMixin" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.ImplicitlyAnimatedWidget] ? {
        readonly prototype: AnimatedWidgetBaseState<_Selected0>;
    } & _FlaxInstanceType<AnimatedWidgetBaseState<_Selected0>> & _FlaxDartType<AnimatedWidgetBaseState<_Selected0>> : never : never;
}
export {};
