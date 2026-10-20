import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface KeepAliveHandle extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::KeepAliveHandle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __KeepAliveHandle: unique symbol;
    readonly [_flaxDartTypeValue]: KeepAliveHandle;
    readonly hasListeners: boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
}
export declare function _KeepAliveHandleFactory(): KeepAliveHandle;
export interface _KeepAliveHandleNative extends KeepAliveHandle {
    readonly [_flaxDartTypeValue]: _KeepAliveHandleNative;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    get hasListeners(): boolean;
}
export declare abstract class _KeepAliveHandleNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeepAliveHandle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: KeepAliveHandle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:KeepAliveHandle", readonly [], false];
    constructor();
}
export declare namespace _KeepAliveHandleFactory {
    function implement(args: [], implementation: {}): KeepAliveHandle;
}
declare const _KeepAliveHandleBinding: typeof _KeepAliveHandleFactory & (new () => _KeepAliveHandleNative);
export declare const KeepAliveHandle: typeof _KeepAliveHandleBinding & _FlaxInstanceType<KeepAliveHandle> & _FlaxDartType<KeepAliveHandle, readonly ["class", "flax.core/sdk_widgets#type:KeepAliveHandle", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::KeepAliveHandle" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
