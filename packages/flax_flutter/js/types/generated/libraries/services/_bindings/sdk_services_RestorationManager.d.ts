import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_RestorationBucket';
import '@flax/flutter/services/_bindings/sdk_services_RestorationBucket';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RestorationManager extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/services/restoration.dart::RestorationManager": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorationManager: unique symbol;
    readonly [_flaxDartTypeValue]: RestorationManager;
    readonly hasListeners: boolean;
    readonly rootBucket: Promise<upstream2.RestorationBucket | null>;
    readonly isReplacing: boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    initChannels(): void;
    handleRestorationUpdateFromEngine(options: {
        data: globalThis.Uint8Array | null;
        enabled: boolean;
    }): void;
    sendToEngine(encodedData: globalThis.Uint8Array): Promise<void>;
    flushData(): void;
}
export declare function _RestorationManagerFactory(): RestorationManager;
export interface _RestorationManagerNative extends RestorationManager {
    readonly [_flaxDartTypeValue]: _RestorationManagerNative;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    initChannels(): void;
    handleRestorationUpdateFromEngine(options: {
        enabled: boolean;
        data: globalThis.Uint8Array | null;
    }): void;
    sendToEngine(encodedData: globalThis.Uint8Array): Promise<void>;
    flushData(): void;
    get rootBucket(): Promise<upstream2.RestorationBucket | null>;
    get isReplacing(): boolean;
    get hasListeners(): boolean;
}
export declare abstract class _RestorationManagerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorationManager>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorationManager;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RestorationManager", readonly [], false];
    constructor();
}
export declare namespace _RestorationManagerFactory {
    function implement(args: [], implementation: {}): RestorationManager;
}
declare const _RestorationManagerBinding: typeof _RestorationManagerFactory & (new () => _RestorationManagerNative);
export declare const RestorationManager: typeof _RestorationManagerBinding & _FlaxInstanceType<RestorationManager> & _FlaxDartType<RestorationManager, readonly ["class", "flax.core/sdk_services#type:RestorationManager", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "rootBucket" | "isReplacing" | "addListener" | "removeListener" | "dispose" | "initChannels" | "handleRestorationUpdateFromEngine" | "sendToEngine" | "flushData" | "__flaxBound:package:flutter/src/services/restoration.dart::RestorationManager" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
