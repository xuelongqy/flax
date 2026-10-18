import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_TickerProviderStateMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TickerProviderStateMixin';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import type * as upstream7 from '@flax/flutter/animation/_bindings/sdk_animation_CurvedAnimation';
import '@flax/flutter/animation/_bindings/sdk_animation_CurvedAnimation';
import type * as upstream8 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream11 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream18 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainter';
import '@flax/dart/ui/_bindings/flutter_Size';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ToggleableStateMixin<S extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> = upstream0.StatefulWidget> extends Omit<upstream1.TickerProviderStateMixin<S>, _flaxOwnMembers0>, Omit<upstream2.State<S>, _flaxOwnMembers0 | keyof upstream1.TickerProviderStateMixin<S>>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream1.TickerProviderStateMixin<S> | keyof upstream2.State<S>>, Omit<upstream4.TickerProvider, _flaxOwnMembers0 | keyof upstream1.TickerProviderStateMixin<S> | keyof upstream2.State<S> | keyof upstream3.Diagnosticable>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/toggleable.dart::ToggleableStateMixin": readonly [S];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [S];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [S];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
}> {
    readonly __ToggleableStateMixin: unique symbol;
    readonly [_flaxDartTypeValue]: ToggleableStateMixin<S>;
    readonly widget: S;
    readonly context: upstream5.BuildContext;
    readonly mounted: boolean;
    readonly positionController: upstream6.AnimationController;
    readonly position: upstream7.CurvedAnimation;
    readonly reactionController: upstream6.AnimationController;
    readonly reaction: upstream7.CurvedAnimation;
    readonly reactionHoverFade: upstream7.CurvedAnimation;
    readonly reactionFocusFade: upstream7.CurvedAnimation;
    readonly reactionAnimationDuration: upstream8.Duration | null;
    readonly isInteractive: boolean;
    readonly onChanged: ((value: boolean | null) => void) | null;
    readonly value: boolean | null;
    readonly tristate: boolean;
    readonly downPosition: upstream9.Offset | null;
    readonly states: DartSet<upstream10.WidgetState>;
    createTicker(onTick: ((elapsed: upstream8.Duration) => void)): upstream11.Ticker;
    activate(): void;
    dispose(): void;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    initState(): void;
    didUpdateWidget(oldWidget: (S | DartInput<S>)): void;
    reassemble(): void;
    setState(fn: (() => void)): void;
    deactivate(): void;
    build(context: upstream5.BuildContext): Widget;
    didChangeDependencies(): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream14.DiagnosticsTreeStyle | null | undefined;
    }): upstream13.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream15.DiagnosticLevel | undefined;
    }): string;
    animateToValue(): void;
    buildToggleable(options: {
        autofocus?: boolean | undefined;
        focusNode?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream18.MouseCursor];
        }> | null | undefined;
        onFocusChange?: ((value: boolean) => void) | null | undefined;
        painter: Readonly<{
            "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>;
        size: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }): Widget;
    buildToggleableWithChild(options: {
        autofocus?: boolean | undefined;
        child: Widget;
        focusNode?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream18.MouseCursor];
        }> | null | undefined;
        onFocusChange?: ((value: boolean) => void) | null | undefined;
    }): Widget;
}
export declare const ToggleableStateMixin: object & _FlaxInstanceType<ToggleableStateMixin<upstream0.StatefulWidget>> & _FlaxDartType<ToggleableStateMixin<upstream0.StatefulWidget>, readonly ["class", "flax.core/sdk_widgets#type:ToggleableStateMixin", readonly [readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "positionController" | "position" | "reactionController" | "reaction" | "reactionHoverFade" | "reactionFocusFade" | "reactionAnimationDuration" | "isInteractive" | "onChanged" | "value" | "tristate" | "downPosition" | "states" | "createTicker" | "activate" | "dispose" | "debugFillProperties" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "build" | "didChangeDependencies" | "toStringShort" | "toDiagnosticsNode" | "toString" | "animateToValue" | "buildToggleable" | "buildToggleableWithChild" | "__flaxBound:package:flutter/src/widgets/toggleable.dart::ToggleableStateMixin" | "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>] ? {
        readonly prototype: ToggleableStateMixin<_Selected0>;
    } & _FlaxInstanceType<ToggleableStateMixin<_Selected0>> & _FlaxDartType<ToggleableStateMixin<_Selected0>> : never : never;
}
export {};
