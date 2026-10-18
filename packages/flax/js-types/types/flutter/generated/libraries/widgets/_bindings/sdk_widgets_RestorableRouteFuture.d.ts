import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableRouteFuture<T extends unknown | null = unknown | null> extends Omit<upstream0.RestorableProperty<string | null>, _flaxOwnMembers0>, Omit<upstream1.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableProperty<string | null>>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableProperty<string | null> | keyof upstream1.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::RestorableRouteFuture": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [string | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorableRouteFuture: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableRouteFuture<T>;
}
export interface RestorableRouteFuture<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: RestorableRouteFuture<T>;
    createDefaultValue(): string | null;
    fromPrimitives(data: unknown | null): string;
    initWithValue(value: string | null): void;
    toPrimitives(): unknown | null;
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    present(_flaxArg_617267756d656e7473?: unknown | null): void;
    get navigatorFinder(): ((context: upstream4.BuildContext) => upstream3.NavigatorState);
    get onPresent(): ((navigator: upstream3.NavigatorState, _flaxArg_617267756d656e7473: unknown | null) => string);
    get onComplete(): ((result: (T | DartInput<T>)) => void) | null;
    get isPresent(): boolean;
    get route(): upstream7.Route<T> | null;
    get enabled(): boolean;
    get state(): upstream5.State<upstream6.StatefulWidget>;
    get isRegistered(): boolean;
    get hasListeners(): boolean;
}
export declare abstract class RestorableRouteFuture<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableRouteFuture<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableRouteFuture<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableRouteFuture", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(options: {
        navigatorFinder?: ((context: upstream4.BuildContext) => upstream3.NavigatorState) | undefined;
        onPresent: ((navigator: upstream3.NavigatorState, _flaxArg_617267756d656e7473: unknown | null) => string);
        onComplete?: ((result: unknown | null) => void) | null | undefined;
    });
}
export declare namespace RestorableRouteFuture {
    function implement<T extends unknown | null = unknown | null>(args: [options: {
        navigatorFinder?: ((context: upstream4.BuildContext) => upstream3.NavigatorState) | undefined;
        onPresent: ((navigator: upstream3.NavigatorState, _flaxArg_617267756d656e7473: unknown | null) => string);
        onComplete?: ((result: unknown | null) => void) | null | undefined;
    }], implementation: {}): RestorableRouteFuture<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "enabled" | "state" | "isRegistered" | "hasListeners" | "navigatorFinder" | "onPresent" | "onComplete" | "isPresent" | "route" | "createDefaultValue" | "fromPrimitives" | "initWithValue" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "present" | "__flaxBound:package:flutter/src/widgets/navigator.dart::RestorableRouteFuture" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {
        navigatorFinder?: ((context: upstream4.BuildContext) => upstream3.NavigatorState) | undefined;
        onPresent: ((navigator: upstream3.NavigatorState, _flaxArg_617267756d656e7473: unknown | null) => string);
        onComplete?: ((result: unknown | null) => void) | null | undefined;
    }) => RestorableRouteFuture<_Selected0>) & {
        readonly prototype: RestorableRouteFuture<_Selected0>;
        implement(args: readonly [options: {
            navigatorFinder?: ((context: upstream4.BuildContext) => upstream3.NavigatorState) | undefined;
            onPresent: ((navigator: upstream3.NavigatorState, _flaxArg_617267756d656e7473: unknown | null) => string);
            onComplete?: ((result: unknown | null) => void) | null | undefined;
        }], implementation: Partial<RestorableRouteFuture<_Selected0>>): RestorableRouteFuture<_Selected0>;
    } & _FlaxInstanceType<RestorableRouteFuture<_Selected0>> & _FlaxDartType<RestorableRouteFuture<_Selected0>> : never : never;
}
export {};
