import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationProvider';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationProvider';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationParser';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationParser';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouterDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouterDelegate';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RouterConfig<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::RouterConfig": readonly [T];
}> {
    readonly __RouterConfig: unique symbol;
    readonly [_flaxDartTypeValue]: RouterConfig<T>;
}
export interface RouterConfig<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: RouterConfig<T>;
    get routeInformationProvider(): upstream0.RouteInformationProvider | null;
    get routeInformationParser(): upstream1.RouteInformationParser<T> | null;
    get routerDelegate(): upstream2.RouterDelegate<T>;
    get backButtonDispatcher(): upstream3.BackButtonDispatcher | null;
}
export declare abstract class RouterConfig<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouterConfig<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RouterConfig<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouterConfig", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(options: {
        routeInformationProvider?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.RouteInformation];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        routeInformationParser?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationParser": readonly [unknown | null];
        }> | null | undefined;
        routerDelegate: Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouterDelegate": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>;
        backButtonDispatcher?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>];
        }>) | null | undefined;
    });
}
export declare namespace RouterConfig {
    function implement<T extends unknown | null = unknown | null>(args: [options: {
        routeInformationProvider?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.RouteInformation];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        routeInformationParser?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationParser": readonly [unknown | null];
        }> | null | undefined;
        routerDelegate: Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouterDelegate": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>;
        backButtonDispatcher?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>];
        }>) | null | undefined;
    }], implementation: {}): RouterConfig<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {
        routeInformationProvider?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.RouteInformation];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        routeInformationParser?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationParser": readonly [unknown | null];
        }> | null | undefined;
        routerDelegate: Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouterDelegate": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>;
        backButtonDispatcher?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>];
        }>) | null | undefined;
    }) => RouterConfig<_Selected0>) & {
        readonly prototype: RouterConfig<_Selected0>;
        implement(args: readonly [options: {
            routeInformationProvider?: (Readonly<{
                "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.RouteInformation];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
            }>) | null | undefined;
            routeInformationParser?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationParser": readonly [unknown | null];
            }> | null | undefined;
            routerDelegate: Readonly<{
                "__flaxBound:package:flutter/src/widgets/router.dart::RouterDelegate": readonly [unknown | null];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
            }>;
            backButtonDispatcher?: (Readonly<{
                "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>];
            }>) | null | undefined;
        }], implementation: Partial<RouterConfig<_Selected0>>): RouterConfig<_Selected0>;
    } & _FlaxInstanceType<RouterConfig<_Selected0>> & _FlaxDartType<RouterConfig<_Selected0>> : never : never;
}
export {};
