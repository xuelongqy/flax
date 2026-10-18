import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RouteInformationParser<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationParser": readonly [T];
}> {
    readonly __RouteInformationParser: unique symbol;
    readonly [_flaxDartTypeValue]: RouteInformationParser<T>;
}
export interface RouteInformationParser<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: RouteInformationParser<T>;
    parseRouteInformation(routeInformation: Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [];
    }>): Promise<T>;
    parseRouteInformationWithDependencies(routeInformation: Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [];
    }>, context: upstream1.BuildContext): Promise<T>;
    restoreRouteInformation(configuration: (T | DartInput<T>)): upstream0.RouteInformation | null;
}
export declare abstract class RouteInformationParser<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouteInformationParser<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RouteInformationParser<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouteInformationParser", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
}
export declare namespace RouteInformationParser {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {}): RouteInformationParser<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => RouteInformationParser<_Selected0>) & {
        readonly prototype: RouteInformationParser<_Selected0>;
        implement(args: readonly [], implementation: Partial<RouteInformationParser<_Selected0>>): RouteInformationParser<_Selected0>;
    } & _FlaxInstanceType<RouteInformationParser<_Selected0>> & _FlaxDartType<RouteInformationParser<_Selected0>> : never : never;
}
export {};
