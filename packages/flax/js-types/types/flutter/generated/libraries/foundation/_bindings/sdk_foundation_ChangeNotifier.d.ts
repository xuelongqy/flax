import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ChangeNotifier extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __ChangeNotifier: unique symbol;
    readonly [_flaxDartTypeValue]: ChangeNotifier;
    readonly hasListeners: boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
}
export declare function _ChangeNotifierFactory(): ChangeNotifier;
export interface _ChangeNotifierNative extends ChangeNotifier {
    readonly [_flaxDartTypeValue]: _ChangeNotifierNative;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    get hasListeners(): boolean;
}
export declare abstract class _ChangeNotifierNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChangeNotifier>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ChangeNotifier;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ChangeNotifier", readonly [], false];
    constructor();
}
export declare namespace _ChangeNotifierFactory {
    function implement(args: [], implementation: {}): ChangeNotifier;
}
declare const _ChangeNotifierBinding: typeof _ChangeNotifierFactory & (new () => _ChangeNotifierNative);
export declare namespace _ChangeNotifierFactory {
    function debugAssertNotDisposed(notifier: Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): boolean;
}
export declare namespace _ChangeNotifierFactory {
    function maybeDispatchObjectCreation(object: Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
}
export declare const ChangeNotifier: typeof _ChangeNotifierBinding & _FlaxInstanceType<ChangeNotifier> & _FlaxDartType<ChangeNotifier, readonly ["class", "flax.core/sdk_foundation#type:ChangeNotifier", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
