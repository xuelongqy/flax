import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ChangeNotifier extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __ChangeNotifier: unique symbol;
    readonly [_flaxDartTypeValue]: ChangeNotifier;
}
export interface ChangeNotifier {
    readonly [_flaxDartTypeValue]: ChangeNotifier;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    get hasListeners(): boolean;
}
export declare abstract class ChangeNotifier extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChangeNotifier>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ChangeNotifier;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ChangeNotifier", readonly [], false];
    constructor();
}
export declare namespace ChangeNotifier {
    function implement(args: [], implementation: {}): ChangeNotifier;
}
export declare namespace ChangeNotifier {
    function debugAssertNotDisposed(notifier: Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): boolean;
}
export declare namespace ChangeNotifier {
    function maybeDispatchObjectCreation(object: Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
