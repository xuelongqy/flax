import { type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
declare function _flaxTopLevel_showRawDialog<T extends unknown | null = unknown | null>(options: {
    builder: ((context: upstream0.BuildContext) => Widget);
    context: upstream0.BuildContext;
    fullscreenDialog?: boolean | undefined;
    routeBuilder?: ((context: upstream0.BuildContext, builder: ((context: upstream0.BuildContext) => Widget)) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null | undefined;
    routeSettings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    useRootNavigator?: boolean | undefined;
}): Promise<_FlaxDartOutput<T> | null>;
declare const _flaxGeneric_showRawDialog: _FlaxDartCallable<typeof _flaxTopLevel_showRawDialog, _FlaxSignature0>;
export { _flaxGeneric_showRawDialog as showRawDialog };
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (options: {
        builder: ((context: upstream0.BuildContext) => Widget);
        context: upstream0.BuildContext;
        fullscreenDialog?: boolean | undefined;
        routeBuilder?: ((context: upstream0.BuildContext, builder: ((context: upstream0.BuildContext) => Widget)) => Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>) | null | undefined;
        routeSettings?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
        }> | null | undefined;
        useRootNavigator?: boolean | undefined;
    }) => Promise<_Selected0 | null> : never : never;
}
