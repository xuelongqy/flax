import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Route<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
}> {
    readonly __Route: unique symbol;
    readonly requestFocus: boolean;
    readonly navigator: upstream0.NavigatorState | null;
    readonly settings: upstream1.RouteSettings;
    readonly restorationScopeId: upstream2.ValueListenable<string | null>;
    readonly willHandlePopInternally: boolean;
    readonly currentResult: T | null;
    readonly popped: Promise<T | null>;
    readonly isCurrent: boolean;
    readonly isFirst: boolean;
    readonly hasActiveRouteBelow: boolean;
    readonly isActive: boolean;
    install(): void;
    didAdd(): void;
    didReplace(oldRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null): void;
    onPopInvoked(didPop: boolean): void;
    onPopInvokedWithResult(didPop: boolean, result: (T | DartInput<T>) | null): void;
    didPop(result: (T | DartInput<T>) | null): boolean;
    didComplete(result: (T | DartInput<T>) | null): void;
    didPopNext(nextRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }>): void;
    didChangeNext(nextRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null): void;
    didChangePrevious(previousRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null): void;
    changedInternalState(): void;
    changedExternalState(): void;
    dispose(): void;
}
export declare const Route: object & _FlaxInstanceType<Route<unknown | null>> & _FlaxDartType<Route<unknown | null>, readonly ["class", "flax.core/flutter#type:Route", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: Route<_Selected0>;
    } & _FlaxInstanceType<Route<_Selected0>> & _FlaxDartType<Route<_Selected0>> : never : never;
}
export {};
