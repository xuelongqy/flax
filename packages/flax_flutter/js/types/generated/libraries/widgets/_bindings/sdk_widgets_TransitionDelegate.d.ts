import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteTransitionRecord';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteTransitionRecord';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TransitionDelegate<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::TransitionDelegate": readonly [T];
}> {
    readonly __TransitionDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: TransitionDelegate<T>;
}
export interface TransitionDelegate<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: TransitionDelegate<T>;
}
export declare abstract class TransitionDelegate<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TransitionDelegate<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TransitionDelegate<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TransitionDelegate", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
    abstract resolve(options: {
        newPageRouteHistory: DartListInput<upstream0.RouteTransitionRecord, Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [];
        }>>;
        locationToExitingPageRoute: DartMapInput<upstream0.RouteTransitionRecord | null, upstream0.RouteTransitionRecord, Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [];
        }> | null, Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [];
        }>>;
        pageRouteToPagelessRoutes: DartMapInput<upstream0.RouteTransitionRecord | null, DartList<upstream0.RouteTransitionRecord>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [];
        }> | null, DartListInput<upstream0.RouteTransitionRecord, Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [];
        }>>>;
    }): DartIterable<upstream0.RouteTransitionRecord>;
}
export declare namespace TransitionDelegate {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {
        resolve: ((options: {
            newPageRouteHistory: DartList<upstream0.RouteTransitionRecord>;
            locationToExitingPageRoute: DartMap<upstream0.RouteTransitionRecord | null, upstream0.RouteTransitionRecord>;
            pageRouteToPagelessRoutes: DartMap<upstream0.RouteTransitionRecord | null, DartList<upstream0.RouteTransitionRecord>>;
        }) => DartIterableInput<upstream0.RouteTransitionRecord, Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteTransitionRecord": readonly [];
        }>>);
    }): TransitionDelegate<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => TransitionDelegate<_Selected0>) & {
        readonly prototype: TransitionDelegate<_Selected0>;
        implement(args: readonly [], implementation: Partial<TransitionDelegate<_Selected0>>): TransitionDelegate<_Selected0>;
    } & _FlaxInstanceType<TransitionDelegate<_Selected0>> & _FlaxDartType<TransitionDelegate<_Selected0>> : never : never;
}
export {};
