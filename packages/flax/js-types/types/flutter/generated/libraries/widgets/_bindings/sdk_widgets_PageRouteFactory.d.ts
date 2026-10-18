import { type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_PageRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PageRoute';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
export type PageRouteFactory = _FlaxDartCallable<(<T extends unknown | null>(settings: Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
}>, builder: ((context: upstream2.BuildContext) => Widget)) => upstream0.PageRoute<_FlaxDartOutput<T>>), _FlaxSignature0>;
export type PageRouteFactoryInput = (<T extends unknown | null>(settings: upstream1.RouteSettings, builder: ((context: upstream2.BuildContext) => Widget)) => Readonly<{
    "__flaxBound:package:flutter/src/widgets/pages.dart::PageRoute": readonly [_FlaxDartOutput<T>];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute": readonly [_FlaxDartOutput<T>];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [_FlaxDartOutput<T>];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [_FlaxDartOutput<T>];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute": readonly [_FlaxDartOutput<T>];
}>);
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (settings: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }>, builder: ((context: upstream2.BuildContext) => Widget)) => upstream0.PageRoute<_Selected0> : never : never;
}
export {};
