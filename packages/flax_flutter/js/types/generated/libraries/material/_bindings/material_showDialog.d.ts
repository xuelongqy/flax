import { type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_Offset';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
declare function _flaxTopLevel_showDialog<T extends unknown | null = unknown | null>(options: {
    anchorPoint?: upstream0.Offset | null | undefined;
    barrierColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    barrierDismissible?: boolean | undefined;
    barrierLabel?: string | null | undefined;
    builder: ((context: upstream2.BuildContext) => Widget);
    context: upstream2.BuildContext;
    fullscreenDialog?: boolean | undefined;
    requestFocus?: boolean | null | undefined;
    routeSettings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    useRootNavigator?: boolean | undefined;
    useSafeArea?: boolean | undefined;
}): Promise<_FlaxDartOutput<T> | null>;
declare const _flaxGeneric_showDialog: _FlaxDartCallable<typeof _flaxTopLevel_showDialog, _FlaxSignature0>;
export { _flaxGeneric_showDialog as showDialog };
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (options: {
        anchorPoint?: upstream0.Offset | null | undefined;
        barrierColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        barrierDismissible?: boolean | undefined;
        barrierLabel?: string | null | undefined;
        builder: ((context: upstream2.BuildContext) => Widget);
        context: upstream2.BuildContext;
        fullscreenDialog?: boolean | undefined;
        requestFocus?: boolean | null | undefined;
        routeSettings?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
        }> | null | undefined;
        useRootNavigator?: boolean | undefined;
        useSafeArea?: boolean | undefined;
    }) => Promise<_Selected0 | null> : never : never;
}
