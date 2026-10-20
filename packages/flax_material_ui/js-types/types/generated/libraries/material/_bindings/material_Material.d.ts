import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/material-ui/_bindings/material_MaterialType';
import '@flax/material-ui/_bindings/material_MaterialType';
import '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream7 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream8 from '@flax/material-ui/_bindings/material_MaterialInkController';
import '@flax/material-ui/_bindings/material_MaterialInkController';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Material extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/material.dart::Material": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.material/material#type:Material";
}
export declare function _MaterialFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    type?: Bindable<upstream1.MaterialType> | undefined;
    elevation?: Bindable<number> | undefined;
    color?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    shadowColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    surfaceTintColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    textStyle?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
    borderRadius?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }> | null> | undefined;
    shape?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null> | undefined;
    borderOnForeground?: Bindable<boolean> | undefined;
    clipBehavior?: Bindable<upstream6.Clip> | undefined;
    animationDuration?: Bindable<Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration];
    }>> | undefined;
    child?: Bindable<Widget | null> | undefined;
    animateColor?: Bindable<boolean> | undefined;
}): Material;
export declare namespace _MaterialFactory {
    const defaultSplashRadius: number;
}
export declare namespace _MaterialFactory {
    function maybeOf(context: upstream9.BuildContext): upstream8.MaterialInkController | null;
}
export declare namespace _MaterialFactory {
    function of(context: upstream9.BuildContext): upstream8.MaterialInkController;
}
export declare const Material: typeof _MaterialFactory & _FlaxInstanceType<Material> & _FlaxDartType<Material, readonly ["class", "flax.material/material#type:Material", readonly [], false]>;
