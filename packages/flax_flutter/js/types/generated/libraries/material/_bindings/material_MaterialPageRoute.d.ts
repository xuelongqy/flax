import { type FlaxInstanceType as _FlaxInstanceType, type DartValue, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialPageRoute<T extends unknown | null = unknown | null> extends DartValue, Omit<upstream0.Route<T>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/page.dart::MaterialPageRoute": readonly [T];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/pages.dart::PageRoute": readonly [T];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute": readonly [T];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [T];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [T];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute": readonly [T];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/page.dart::MaterialRouteTransitionMixin": readonly [T];
}>, 'type'> {
    readonly type: "flax.material/material#type:MaterialPageRoute";
    readonly __MaterialPageRoute: unique symbol;
}
declare function _MaterialPageRouteFactory<T extends unknown | null = unknown | null>(options: {
    builder: ((context: upstream1.BuildContext) => Widget);
    settings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    maintainState?: boolean | undefined;
    fullscreenDialog?: boolean | undefined;
}): MaterialPageRoute<T>;
export declare const MaterialPageRoute: typeof _MaterialPageRouteFactory & _FlaxInstanceType<MaterialPageRoute<unknown | null>> & _FlaxDartType<MaterialPageRoute<unknown | null>, readonly ["class", "flax.material/material#type:MaterialPageRoute", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            builder: ((context: upstream1.BuildContext) => Widget);
            settings?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
            }> | null | undefined;
            maintainState?: boolean | undefined;
            fullscreenDialog?: boolean | undefined;
        }): MaterialPageRoute<_Selected0>;
        readonly prototype: MaterialPageRoute<_Selected0>;
    } & _FlaxInstanceType<MaterialPageRoute<_Selected0>> & _FlaxDartType<MaterialPageRoute<_Selected0>> : never : never;
}
export {};
