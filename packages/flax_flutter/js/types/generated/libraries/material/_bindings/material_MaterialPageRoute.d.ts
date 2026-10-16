import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialPageRoute<T extends unknown | null = unknown | null> extends upstream0.Route<T>, Readonly<{
    "__flaxBound:package:material_ui/src/page.dart::MaterialPageRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/pages.dart::PageRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/page.dart::MaterialRouteTransitionMixin": readonly [T];
}> {
    readonly __MaterialPageRoute: unique symbol;
    readonly isCurrent: boolean;
    readonly isActive: boolean;
    readonly settings: upstream2.RouteSettings;
}
declare function _MaterialPageRouteFactory(options: {
    builder: ((context: upstream1.BuildContext) => Widget);
    settings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    maintainState?: boolean | undefined;
    fullscreenDialog?: boolean | undefined;
}): MaterialPageRoute<unknown | null>;
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
