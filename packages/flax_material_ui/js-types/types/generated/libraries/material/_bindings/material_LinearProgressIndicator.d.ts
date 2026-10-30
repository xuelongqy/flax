import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LinearProgressIndicator extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/progress_indicator.dart::LinearProgressIndicator": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/progress_indicator.dart::ProgressIndicator": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.material/material#type:LinearProgressIndicator";
}
export declare function _LinearProgressIndicatorFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    value?: Bindable<number | null> | undefined;
    backgroundColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    color?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    valueColor?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [upstream1.Color | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.Color | null];
    }>) | null> | undefined;
    minHeight?: Bindable<number | null> | undefined;
    semanticsLabel?: Bindable<string | null> | undefined;
    semanticsValue?: Bindable<string | null> | undefined;
    borderRadius?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }> | null> | undefined;
    stopIndicatorColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    stopIndicatorRadius?: Bindable<number | null> | undefined;
    trackGap?: Bindable<number | null> | undefined;
    year2023?: Bindable<boolean | null> | undefined;
    controller?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [];
    }>) | null> | undefined;
}): LinearProgressIndicator;
export declare namespace _LinearProgressIndicatorFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _LinearProgressIndicatorFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare namespace _LinearProgressIndicatorFactory {
    const defaultAnimationDuration: upstream5.Duration;
}
export declare const LinearProgressIndicator: typeof _LinearProgressIndicatorFactory & _FlaxInstanceType<LinearProgressIndicator> & _FlaxDartType<LinearProgressIndicator, readonly ["class", "flax.material/material#type:LinearProgressIndicator", readonly [], false]>;
