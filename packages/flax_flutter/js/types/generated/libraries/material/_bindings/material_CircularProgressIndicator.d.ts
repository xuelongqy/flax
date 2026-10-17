import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/widgets/_bindings/flutter_BoxConstraints';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CircularProgressIndicator extends WidgetDescription {
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
    strokeWidth?: Bindable<number | null> | undefined;
    strokeAlign?: Bindable<number | null> | undefined;
    semanticsLabel?: Bindable<string | null> | undefined;
    semanticsValue?: Bindable<string | null> | undefined;
    constraints?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> | null> | undefined;
    trackGap?: Bindable<number | null> | undefined;
    year2023?: Bindable<boolean | null> | undefined;
    padding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
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
        strokeWidth?: Bindable<number | null> | undefined;
        semanticsLabel?: Bindable<string | null> | undefined;
        semanticsValue?: Bindable<string | null> | undefined;
        strokeAlign?: Bindable<number | null> | undefined;
        constraints?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> | null> | undefined;
        trackGap?: Bindable<number | null> | undefined;
        year2023?: Bindable<boolean | null> | undefined;
        padding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
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
    const defaultAnimationDuration: upstream4.Duration;
}
export declare const CircularProgressIndicator: typeof _CircularProgressIndicatorFactory & _FlaxInstanceType<CircularProgressIndicator> & _FlaxDartType<CircularProgressIndicator, readonly ["class", "flax.material/material#type:CircularProgressIndicator", readonly [], false]>;
