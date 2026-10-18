import { type FlaxInstanceType as _FlaxInstanceType, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RouterDelegate<T extends unknown | null = unknown | null> extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::RouterDelegate": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RouterDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: RouterDelegate<T>;
}
export interface RouterDelegate<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: RouterDelegate<T>;
    setInitialRoutePath(configuration: (T | DartInput<T>)): Promise<void>;
    setRestoredRoutePath(configuration: (T | DartInput<T>)): Promise<void>;
    get currentConfiguration(): T | null;
}
export declare abstract class RouterDelegate<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouterDelegate<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RouterDelegate<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouterDelegate", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
    abstract addListener(listener: (() => void)): void;
    abstract removeListener(listener: (() => void)): void;
    abstract setNewRoutePath(configuration: (T | DartInput<T>)): Promise<void>;
    abstract popRoute(): Promise<boolean>;
    abstract build(context: upstream1.BuildContext): Widget;
}
export declare namespace RouterDelegate {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {
        addListener: ((listener: (() => void)) => void);
        removeListener: ((listener: (() => void)) => void);
        setNewRoutePath: ((configuration: T) => Promise<void>);
        popRoute: (() => Promise<boolean>);
        build: ((context: upstream1.BuildContext) => Widget);
    }): RouterDelegate<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "currentConfiguration" | "addListener" | "removeListener" | "setInitialRoutePath" | "setRestoredRoutePath" | "setNewRoutePath" | "popRoute" | "build" | "__flaxBound:package:flutter/src/widgets/router.dart::RouterDelegate" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => RouterDelegate<_Selected0>) & {
        readonly prototype: RouterDelegate<_Selected0>;
        implement(args: readonly [], implementation: Partial<RouterDelegate<_Selected0>>): RouterDelegate<_Selected0>;
    } & _FlaxInstanceType<RouterDelegate<_Selected0>> & _FlaxDartType<RouterDelegate<_Selected0>> : never : never;
}
export {};
