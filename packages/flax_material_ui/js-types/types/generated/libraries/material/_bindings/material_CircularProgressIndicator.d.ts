import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_StrokeCap';
import '@flax/dart/ui/_bindings/sdk_dart_ui_StrokeCap';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import type * as upstream7 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CircularProgressIndicator extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/progress_indicator.dart::CircularProgressIndicator": readonly [];
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
    readonly type: "flax.material/material#type:CircularProgressIndicator";
}
export declare function _CircularProgressIndicatorFactory(options?: {
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
    strokeWidth?: Bindable<number | null> | undefined;
    strokeAlign?: Bindable<number | null> | undefined;
    semanticsLabel?: Bindable<string | null> | undefined;
    semanticsValue?: Bindable<string | null> | undefined;
    strokeCap?: Bindable<upstream3.StrokeCap | null> | undefined;
    constraints?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null> | undefined;
    trackGap?: Bindable<number | null> | undefined;
    year2023?: Bindable<boolean | null> | undefined;
    padding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
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
}): CircularProgressIndicator;
export declare namespace _CircularProgressIndicatorFactory {
    function adaptive(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        value?: Bindable<number | null> | undefined;
        backgroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        valueColor?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [upstream1.Color | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.Color | null];
        }>) | null> | undefined;
        strokeWidth?: Bindable<number | null> | undefined;
        semanticsLabel?: Bindable<string | null> | undefined;
        semanticsValue?: Bindable<string | null> | undefined;
        strokeCap?: Bindable<upstream3.StrokeCap | null> | undefined;
        strokeAlign?: Bindable<number | null> | undefined;
        constraints?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null> | undefined;
        trackGap?: Bindable<number | null> | undefined;
        year2023?: Bindable<boolean | null> | undefined;
        padding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
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
    }): CircularProgressIndicator;
}
export declare namespace _CircularProgressIndicatorFactory {
    const strokeAlignInside: number;
}
export declare namespace _CircularProgressIndicatorFactory {
    const strokeAlignCenter: number;
}
export declare namespace _CircularProgressIndicatorFactory {
    const strokeAlignOutside: number;
}
export declare namespace _CircularProgressIndicatorFactory {
    const defaultAnimationDuration: upstream7.Duration;
}
export declare const CircularProgressIndicator: typeof _CircularProgressIndicatorFactory & _FlaxInstanceType<CircularProgressIndicator> & _FlaxDartType<CircularProgressIndicator, readonly ["class", "flax.material/material#type:CircularProgressIndicator", readonly [], false]>;
