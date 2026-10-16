import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Route<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
}> {
    readonly __Route: unique symbol;
    readonly isCurrent: boolean;
    readonly isActive: boolean;
    readonly settings: upstream0.RouteSettings;
}
export declare const Route: object & _FlaxInstanceType<Route<unknown | null>> & _FlaxDartType<Route<unknown | null>, readonly ["class", "flax.core/flutter#type:Route", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: Route<_Selected0>;
    } & _FlaxInstanceType<Route<_Selected0>> & _FlaxDartType<Route<_Selected0>> : never : never;
}
export {};
