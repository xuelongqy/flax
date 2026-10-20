import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoTabController extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/tab_scaffold.dart::CupertinoTabController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __CupertinoTabController: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoTabController;
    readonly hasListeners: boolean;
    get index(): number;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    set index(value: number);
}
export declare function _CupertinoTabControllerFactory(options?: {
    initialIndex?: number | undefined;
}): CupertinoTabController;
export interface _CupertinoTabControllerNative extends CupertinoTabController {
    readonly [_flaxDartTypeValue]: _CupertinoTabControllerNative;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    get index(): number;
    get hasListeners(): boolean;
    set index(value: number);
}
export declare abstract class _CupertinoTabControllerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoTabController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CupertinoTabController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/cupertino#type:CupertinoTabController", readonly [], false];
    constructor(options?: {
        initialIndex?: number | undefined;
    });
}
export declare namespace _CupertinoTabControllerFactory {
    function implement(args: [options?: {
        initialIndex?: number | undefined;
    }], implementation: {}): CupertinoTabController;
}
declare const _CupertinoTabControllerBinding: typeof _CupertinoTabControllerFactory & (new (options?: {
    initialIndex?: number | undefined;
}) => _CupertinoTabControllerNative);
export declare const CupertinoTabController: typeof _CupertinoTabControllerBinding & _FlaxInstanceType<CupertinoTabController> & _FlaxDartType<CupertinoTabController, readonly ["class", "flax.cupertino/cupertino#type:CupertinoTabController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "index" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:cupertino_ui/src/tab_scaffold.dart::CupertinoTabController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
