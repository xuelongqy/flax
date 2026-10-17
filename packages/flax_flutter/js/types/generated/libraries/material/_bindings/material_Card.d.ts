import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_Clip';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Card extends WidgetDescription {
    readonly type: "flax.material/material#type:Card";
}
export declare function _CardFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    color?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    shadowColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    surfaceTintColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    elevation?: Bindable<number | null> | undefined;
    shape?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null> | undefined;
    borderOnForeground?: Bindable<boolean> | undefined;
    margin?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
    clipBehavior?: Bindable<upstream4.Clip | null> | undefined;
    child?: Bindable<Widget | null> | undefined;
    semanticContainer?: Bindable<boolean> | undefined;
}): Card;
export declare namespace _CardFactory {
    function filled(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        color?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        shadowColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        surfaceTintColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        elevation?: Bindable<number | null> | undefined;
        shape?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null> | undefined;
        borderOnForeground?: Bindable<boolean> | undefined;
        margin?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        clipBehavior?: Bindable<upstream4.Clip | null> | undefined;
        child?: Bindable<Widget | null> | undefined;
        semanticContainer?: Bindable<boolean> | undefined;
    }): Card;
}
export declare namespace _CardFactory {
    function outlined(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        color?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        shadowColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        surfaceTintColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        elevation?: Bindable<number | null> | undefined;
        shape?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null> | undefined;
        borderOnForeground?: Bindable<boolean> | undefined;
        margin?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        clipBehavior?: Bindable<upstream4.Clip | null> | undefined;
        child?: Bindable<Widget | null> | undefined;
        semanticContainer?: Bindable<boolean> | undefined;
    }): Card;
}
export declare const Card: typeof _CardFactory & _FlaxInstanceType<Card> & _FlaxDartType<Card, readonly ["class", "flax.material/material#type:Card", readonly [], false]>;
