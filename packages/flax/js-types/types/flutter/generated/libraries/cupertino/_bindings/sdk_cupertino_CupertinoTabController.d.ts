import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface CupertinoTabController extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/tab_scaffold.dart::CupertinoTabController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __CupertinoTabController: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoTabController;
}
export interface CupertinoTabController {
    readonly [_flaxDartTypeValue]: CupertinoTabController;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    get index(): number;
    get hasListeners(): boolean;
    set index(value: number);
}
export declare abstract class CupertinoTabController extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoTabController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CupertinoTabController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:CupertinoTabController", readonly [], false];
    constructor(options?: {
        initialIndex?: number | undefined;
    });
}
export declare namespace CupertinoTabController {
    function implement(args: [options?: {
        initialIndex?: number | undefined;
    }], implementation: {}): CupertinoTabController;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "index" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:flutter/src/cupertino/tab_scaffold.dart::CupertinoTabController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
