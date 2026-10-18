import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationReportingType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationReportingType';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RouteInformationProvider extends Omit<upstream0.ValueListenable<upstream1.RouteInformation>, _flaxOwnMembers0>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.ValueListenable<upstream1.RouteInformation>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.RouteInformation];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RouteInformationProvider: unique symbol;
    readonly [_flaxDartTypeValue]: RouteInformationProvider;
}
export interface RouteInformationProvider {
    readonly [_flaxDartTypeValue]: RouteInformationProvider;
    routerReportsNewRouteInformation(routeInformation: Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [];
    }>, options?: {
        type?: upstream3.RouteInformationReportingType | undefined;
    }): void;
}
export declare abstract class RouteInformationProvider extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouteInformationProvider>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RouteInformationProvider;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouteInformationProvider", readonly [], false];
    constructor();
    abstract addListener(listener: (() => void)): void;
    abstract removeListener(listener: (() => void)): void;
    abstract get value(): upstream1.RouteInformation;
}
export declare namespace RouteInformationProvider {
    function implement(args: [], implementation: {
        addListener: ((listener: (() => void)) => void);
        removeListener: ((listener: (() => void)) => void);
        get value(): Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [];
        }>;
    }): RouteInformationProvider;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "addListener" | "removeListener" | "routerReportsNewRouteInformation" | "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
