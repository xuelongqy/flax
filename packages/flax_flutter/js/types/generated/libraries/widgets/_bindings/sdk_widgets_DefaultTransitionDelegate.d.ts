import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList, type DartListInput, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_TransitionDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TransitionDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteTransitionRecord';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteTransitionRecord';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DefaultTransitionDelegate<T extends unknown | null = unknown | null> extends Omit<upstream0.TransitionDelegate<T>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::DefaultTransitionDelegate": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::TransitionDelegate": readonly [T];
}> {
    readonly __DefaultTransitionDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: DefaultTransitionDelegate<T>;
}
export interface DefaultTransitionDelegate<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: DefaultTransitionDelegate<T>;
    resolve(options: {
        newPageRouteHistory: DartListInput<upstream1.RouteTransitionRecord, Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [];
        }>>;
        locationToExitingPageRoute: DartMapInput<upstream1.RouteTransitionRecord | null, upstream1.RouteTransitionRecord, Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [];
        }> | null, Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [];
        }>>;
        pageRouteToPagelessRoutes: DartMapInput<upstream1.RouteTransitionRecord | null, DartList<upstream1.RouteTransitionRecord>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [];
        }> | null, DartListInput<upstream1.RouteTransitionRecord, Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [];
        }>>>;
    }): DartIterable<upstream1.RouteTransitionRecord>;
}
export declare abstract class DefaultTransitionDelegate<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DefaultTransitionDelegate<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DefaultTransitionDelegate<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DefaultTransitionDelegate", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
}
export declare namespace DefaultTransitionDelegate {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {}): DefaultTransitionDelegate<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "resolve" | "__flaxBound:package:flutter/src/widgets/navigator.dart::DefaultTransitionDelegate" | "__flaxBound:package:flutter/src/widgets/navigator.dart::TransitionDelegate";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => DefaultTransitionDelegate<_Selected0>) & {
        readonly prototype: DefaultTransitionDelegate<_Selected0>;
        implement(args: readonly [], implementation: Partial<DefaultTransitionDelegate<_Selected0>>): DefaultTransitionDelegate<_Selected0>;
    } & _FlaxInstanceType<DefaultTransitionDelegate<_Selected0>> & _FlaxDartType<DefaultTransitionDelegate<_Selected0>> : never : never;
}
export {};
