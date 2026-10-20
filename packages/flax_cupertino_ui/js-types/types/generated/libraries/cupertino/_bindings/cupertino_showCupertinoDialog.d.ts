import { type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
declare function _flaxTopLevel_showCupertinoDialog<T extends unknown | null = unknown | null>(options: {
    anchorPoint?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    barrierColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    barrierDismissible?: boolean | undefined;
    barrierLabel?: string | null | undefined;
    builder: ((context: upstream2.BuildContext) => Widget);
    context: upstream2.BuildContext;
    requestFocus?: boolean | null | undefined;
    routeSettings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    useRootNavigator?: boolean | undefined;
}): Promise<_FlaxDartOutput<T> | null>;
declare const _flaxGeneric_showCupertinoDialog: _FlaxDartCallable<typeof _flaxTopLevel_showCupertinoDialog, _FlaxSignature0>;
export { _flaxGeneric_showCupertinoDialog as showCupertinoDialog };
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (options: {
        anchorPoint?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        barrierColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        barrierDismissible?: boolean | undefined;
        barrierLabel?: string | null | undefined;
        builder: ((context: upstream2.BuildContext) => Widget);
        context: upstream2.BuildContext;
        requestFocus?: boolean | null | undefined;
        routeSettings?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
        }> | null | undefined;
        useRootNavigator?: boolean | undefined;
    }) => Promise<_Selected0 | null> : never : never;
}
