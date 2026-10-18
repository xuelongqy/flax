import { type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
declare function _flaxTopLevel_showGeneralDialog<T extends unknown | null = unknown | null>(options: {
    anchorPoint?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    barrierColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | undefined;
    barrierDismissible?: boolean | undefined;
    barrierLabel?: string | null | undefined;
    context: upstream2.BuildContext;
    fullscreenDialog?: boolean | undefined;
    pageBuilder: ((context: upstream2.BuildContext, animation: upstream3.Animation<number>, secondaryAnimation: upstream3.Animation<number>) => Widget);
    requestFocus?: boolean | null | undefined;
    routeSettings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    transitionBuilder?: ((context: upstream2.BuildContext, animation: upstream3.Animation<number>, secondaryAnimation: upstream3.Animation<number>, child: Widget) => Widget) | null | undefined;
    transitionDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream5.Duration];
    }>) | undefined;
    useRootNavigator?: boolean | undefined;
}): Promise<_FlaxDartOutput<T> | null>;
declare const _flaxGeneric_showGeneralDialog: _FlaxDartCallable<typeof _flaxTopLevel_showGeneralDialog, _FlaxSignature0>;
export { _flaxGeneric_showGeneralDialog as showGeneralDialog };
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (options: {
        anchorPoint?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        barrierColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        barrierDismissible?: boolean | undefined;
        barrierLabel?: string | null | undefined;
        context: upstream2.BuildContext;
        fullscreenDialog?: boolean | undefined;
        pageBuilder: ((context: upstream2.BuildContext, animation: upstream3.Animation<number>, secondaryAnimation: upstream3.Animation<number>) => Widget);
        requestFocus?: boolean | null | undefined;
        routeSettings?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
        }> | null | undefined;
        transitionBuilder?: ((context: upstream2.BuildContext, animation: upstream3.Animation<number>, secondaryAnimation: upstream3.Animation<number>, child: Widget) => Widget) | null | undefined;
        transitionDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream5.Duration];
        }>) | undefined;
        useRootNavigator?: boolean | undefined;
    }) => Promise<_Selected0 | null> : never : never;
}
