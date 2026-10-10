import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_Clip';
export interface Card extends WidgetDescription {
    readonly type: "flax.material/material#type:Card";
}
declare function _CardFactory(options?: {
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
    margin?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
    clipBehavior?: Bindable<upstream3.Clip | null> | undefined;
    child?: Bindable<Widget | null> | undefined;
    semanticContainer?: Bindable<boolean> | undefined;
}): Card;
declare namespace _CardFactory {
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
        margin?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        clipBehavior?: Bindable<upstream3.Clip | null> | undefined;
        child?: Bindable<Widget | null> | undefined;
        semanticContainer?: Bindable<boolean> | undefined;
    }): Card;
}
declare namespace _CardFactory {
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
        margin?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        clipBehavior?: Bindable<upstream3.Clip | null> | undefined;
        child?: Bindable<Widget | null> | undefined;
        semanticContainer?: Bindable<boolean> | undefined;
    }): Card;
}
export declare const Card: typeof _CardFactory & _FlaxInstanceType<Card>;
export {};
