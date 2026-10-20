import { type DartListInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/material-ui/_bindings/material_PopupMenuEntry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStyle';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RelativeRect';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
declare function _flaxTopLevel_showMenu<T extends unknown | null = unknown | null>(options: {
    clipBehavior?: upstream0.Clip | undefined;
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    constraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null | undefined;
    context: upstream3.BuildContext;
    elevation?: number | null | undefined;
    initialValue?: (T | _FlaxDartOutput<T>) | null | undefined;
    items: DartListInput<upstream4.PopupMenuEntry<_FlaxDartOutput<T>>, upstream4.PopupMenuEntry<_FlaxDartOutput<T>>>;
    menuPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    popUpAnimationStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    position?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
    }> | null | undefined;
    positionBuilder?: ((context: upstream3.BuildContext, constraints: upstream2.BoxConstraints) => Readonly<{
        "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
    }>) | null | undefined;
    requestFocus?: boolean | null | undefined;
    routeSettings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    semanticLabel?: string | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    useRootNavigator?: boolean | undefined;
}): Promise<_FlaxDartOutput<T> | null>;
declare const _flaxGeneric_showMenu: _FlaxDartCallable<typeof _flaxTopLevel_showMenu, _FlaxSignature0>;
export { _flaxGeneric_showMenu as showMenu };
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (options: {
        clipBehavior?: upstream0.Clip | undefined;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        constraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
        context: upstream3.BuildContext;
        elevation?: number | null | undefined;
        initialValue?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
        items: DartListInput<upstream4.PopupMenuEntry<_Selected0>, upstream4.PopupMenuEntry<_Selected0>>;
        menuPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        popUpAnimationStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        position?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
        }> | null | undefined;
        positionBuilder?: ((context: upstream3.BuildContext, constraints: upstream2.BoxConstraints) => Readonly<{
            "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
        }>) | null | undefined;
        requestFocus?: boolean | null | undefined;
        routeSettings?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
        }> | null | undefined;
        semanticLabel?: string | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        useRootNavigator?: boolean | undefined;
    }) => Promise<_Selected0 | null> : never : never;
}
