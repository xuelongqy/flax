import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LinearProgressIndicator extends WidgetDescription {
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
}): LinearProgressIndicator;
export declare namespace _LinearProgressIndicatorFactory {
    const defaultAnimationDuration: upstream3.Duration;
}
export declare const LinearProgressIndicator: typeof _LinearProgressIndicatorFactory & _FlaxInstanceType<LinearProgressIndicator> & _FlaxDartType<LinearProgressIndicator, readonly ["class", "flax.material/material#type:LinearProgressIndicator", readonly [], false]>;
